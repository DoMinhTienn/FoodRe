from typing import Union
from rest_framework.decorators import action
from rest_framework import viewsets, generics, permissions, status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from .models import sanPham, danhGia, Comment, baiViet, User, Action, cuaHang, ViewSanPham
from .serializer import sanPhamSerializer, CommentSerializer, cuaHangSerializer,  \
                        UserSerializer, baiVietSerializer, ActionSerializer, \
                        danhGiaSerializer, ViewSanPhamSerializer
from django.conf import settings
from django.db.models import F


class UserViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.UpdateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser]

    def get_permissions(self):
        if self.action == 'current_user':
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action (methods=["get"], detail=False, url_path='current-user')
    def current_user(self, request):
        return Response(self.serializer_class(request.user, context={'request': request}).data,
                        status=status.HTTP_200_OK)


class cuaHangViewSet(viewsets.ModelViewSet):
    queryset = cuaHang.objects.filter(active=True)
    serializer_class = cuaHangSerializer
    permission_classes = [permissions.IsAuthenticated]  # phai dang nhap moi cho xem


class baiVietViewSet(viewsets.ModelViewSet):
    queryset = baiViet.objects.filter(active=True)
    serializer_class = baiVietSerializer

    def get_permissions(self):
        if self.action in ['add_comment', 'take_action', 'rate']:
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['post'], detail=True, url_path="add_comment")
    def add_comment(self, request, pk):
        noi_dung = request.data.get('noiDung')
        if noi_dung:
            c = Comment.objects.create(noi_dung=noi_dung, baiViet=self.get_object(), khach_hang=request.user)
            return Response(CommentSerializer(c).data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['post'], detail=True, url_path="like")
    def take_action(self, request, pk):
        try:
            action_type = int(request.data['type'])
        except Union[IndexError, ValueError] :
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            action = Action.objects.create(type=action_type, khach_hang=request.user, bai_viet=self.get_object())

            return Response(ActionSerializer(action).data, status=status.HTTP_200_OK)


class sanPhamViewSet(viewsets.ModelViewSet):
    queryset = sanPham.objects.filter(active=True)
    serializer_class = sanPhamSerializer

    @action(methods=['post'], detail=True, url_path="rating")
    def rate(self, request, pk):  # danh gia
        try:
            chat_luong = int(request.data['chat_luong'])
            gia_ca = int(request.data['gia_ca'])
            phuc_vu = int(request.data['phuc_vu'])
            khong_gian = int(request.data['khong_gian'])
            vi_tri = int(request.data['vi_tri'])
        except Union[IndexError, ValueError]:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            CL = danhGia.objects.create(chat_luong=chat_luong, khach_hang=request.user, san_pham=self.get_object())
            GC = danhGia.objects.create(gia_ca=gia_ca, khach_hang=request.user, san_pham=self.get_object())
            PV = danhGia.objects.create(phuc_vu=phuc_vu, khach_hang=request.user, san_pham=self.get_object())
            KG = danhGia.objects.create(khong_gian=khong_gian, khach_hang=request.user, san_pham=self.get_object())
            VT = danhGia.objects.create(vi_tri=vi_tri, khach_hang=request.user, san_pham=self.get_object())
            return Response(danhGiaSerializer(CL, GC, PV, KG, VT).data, status=status.HTTP_200_OK)

    @action(methods=['get'], detail=True, url_path="views")
    def inc_view(self, request, pk):
        v, created = ViewSanPham.objects.get_or_create(sanPham=self.get_object())
        v.views = F("views") + 1
        v.save()

        v.refresh_from_db()

        return Response(ViewSanPhamSerializer(v).data, status=status.HTTP_200_OK)


class CommentViewSet(viewsets.ViewSet, generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        if request.user == self.get_object().creator:
            return super().destroy(request, *args, **kwargs)

        return Response(status=status.HTTP_403_FORBIDDEN)

    def partial_update(self, request, *args, **kwargs):
        if request.user == self.get_object().creator:
            return super().partial_update(request, *args, **kwargs)

        return Response(status=status.HTTP_403_FORBIDDEN)


class AuthInfo(APIView):
    def get(self, request):
        return Response(settings.OAUTH2_INFO, status=status.HTTP_200_OK)


from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import baiViet, sanPham, Comment, User, Action, danhGia, cuaHang, ViewSanPham, User


class UserSerializer(ModelSerializer):
    avatar_path = serializers.SerializerMethodField(source='avatar')
    def get_avatar_path(self, obj):
        request = self.context['request']
        if obj.avatar and not obj.avatar.name.startswith("/static"):

            path = '/static/%s' % obj.avatar.name

            return request.build_absolute_uri(path)
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "email", "username", "password", "date_joined",'avatar', 'avatar_path']
        extra_kwargs = {
            'password': {
                'write_only': True
            }, 'avatar_path': {
                'read_only': True
            }, 'avatar': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user


class cuaHangSerializer(ModelSerializer):
    class Meta:
        model = cuaHang
        fields = ["ten_CH", "dia_chi", "gio_mo_cua", "Image", "Created_date"]


class sanPhamSerializer(ModelSerializer):
    class Meta:
        model = sanPham
        fields = ["ten_SP", "ten_CH", "dia_chi", "gio_mo_cua", "price", "Image", "Created_date"]


class baiVietSerializer(ModelSerializer):
    class Meta:
        model = baiViet
        fields = '__all__'


class ActionSerializer(ModelSerializer):
    class Meta:
        model = Action
        fields = ["id", "type", "gia_ca",  "Created_date"]


class danhGiaSerializer(ModelSerializer):
    class Meta:
        model = danhGia
        fields = ["id", "chat_luong", "gia_ca", "phuc_vu", "khong_gian", "vi_tri", "Created_date", "san_pham"]


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "khach_hang", "Created_date", "Update_date"]


class ViewSanPhamSerializer(ModelSerializer):
    class Meta:
        model = ViewSanPham
        fields = ["id", "views", "san_pham"]

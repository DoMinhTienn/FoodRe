from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers
from .admin import admin_site

router = routers.DefaultRouter()
router.register("Users", views.UserViewSet, 'User')
router.register("CuaHangs", views.cuaHangViewSet, 'Cua Hang')
# router.register("DanhGias", views.danhGiaViewSet, 'Danh Gia')
router.register("BaiViets", views.baiVietViewSet, 'Bai Viet')
router.register("BinhLuans", views.CommentViewSet, 'Binh Luan')
router.register("SanPhams", views.sanPhamViewSet, 'San Pham')


urlpatterns = [
   path('', include(router.urls)),
   path('admin/', admin_site.urls),
   path('oauth2-info/', views.AuthInfo.as_view())
]
from contextlib import nullcontext
import django
from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField


class User(AbstractUser):
    avatar = models.ImageField(upload_to='upload/%Y/%m')


class MyModelBase(models.Model):
    Created_date = models.DateTimeField(auto_now_add=True)
    Update_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    Image = models.ImageField(upload_to='foodRe/%Y/%m', default=None)

    class Meta:
        abstract = True


class cuaHang(MyModelBase):
    ten_CH = models.CharField(max_length=255, null=False, unique=True)
    dia_chi = models.CharField(max_length=255, null=False, unique=True)
    gio_mo_cua = models.CharField(max_length=255, null=False, unique=True)


class sanPham(MyModelBase):
    class Meta:
        ordering = ["id"]

    ten_CH = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    ten_SP = models.CharField(max_length=255, null=False, unique=True)
    dia_chi = models.CharField(max_length=255, null=False, unique=True)
    gio_mo_cua = models.CharField(max_length=255, null=False, unique=True)
    price = models.CharField(max_length=50, null=False, unique=True)


class baiViet(MyModelBase):
    ten_KH = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = RichTextField()


class Comment(models.Model):
    bai_viet = models.ForeignKey(baiViet, on_delete=models.CASCADE)
    khach_hang = models.ForeignKey(User, on_delete=models.CASCADE)
    noi_dung = models.TextField()
    Created_date = models.DateTimeField(auto_now_add=True)
    Update_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.noi_dung


class ActionBase(models.Model):
    Created_date = models.DateTimeField(auto_now_add=True)
    Update_date = models.DateTimeField(auto_now=True)
    bai_viet = models.ForeignKey(baiViet, on_delete=models.CASCADE)
    khach_hang = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class Action(ActionBase):
    LIKE, HAHA, HEART = range(3)
    ACTIONS = [
        (LIKE, 'like'),
        (HAHA, 'haha'),
        (HEART, 'heart')
    ]
    type = models.PositiveSmallIntegerField(choices=ACTIONS, default=LIKE)


class danhGia(models.Model):
    khach_hang = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    san_pham = models.ForeignKey(sanPham, on_delete=models.SET_NULL, null=True)
    Created_date = models.DateTimeField(auto_now_add=True)
    Update_date = models.DateTimeField(auto_now=True)
    chat_luong = models.PositiveSmallIntegerField(default=0)
    gia_ca = models.PositiveSmallIntegerField(default=0)
    phuc_vu = models.PositiveSmallIntegerField(default=0)
    khong_gian = models.PositiveSmallIntegerField(default=0)
    vi_tri = models.PositiveSmallIntegerField(default=0)


class ViewSanPham(models.Model):
    Created_date = models.DateTimeField(auto_now_add=True)
    Update_date = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)
    san_pham = models.OneToOneField(sanPham, on_delete=models.CASCADE)

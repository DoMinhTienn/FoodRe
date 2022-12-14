# Generated by Django 4.1.2 on 2022-10-15 02:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('foodRe', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='baiViet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('Active', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('Active', models.BooleanField(default=True)),
                ('noi_dung', models.TextField()),
                ('bai_viet', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.baiviet')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='cuaHang',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('Active', models.BooleanField(default=True)),
                ('ten_cua_hang', models.CharField(max_length=255)),
                ('Email', models.CharField(max_length=50)),
                ('Phone', models.CharField(max_length=11)),
                ('AccountType', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='danhGia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('Active', models.BooleanField(default=True)),
                ('chat_luong', models.BooleanField(default=True)),
                ('gia_ca', models.BooleanField(default=True)),
                ('phuc_vu', models.BooleanField(default=True)),
                ('khong_gian', models.BooleanField(default=True)),
                ('vi_tri', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='khachHang',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('Active', models.BooleanField(default=True)),
                ('ten_nguoi_dung', models.CharField(max_length=255)),
                ('Email', models.CharField(max_length=50)),
                ('Phone', models.CharField(max_length=11)),
                ('AccountType', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='sanPham',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ten_SP', models.CharField(max_length=255, unique=True)),
                ('ten_CH', models.CharField(max_length=255, unique=True)),
                ('dia_chi', models.CharField(max_length=255, unique=True)),
                ('gio_mo_cua', models.CharField(max_length=255, unique=True)),
                ('Image', models.ImageField(upload_to='upload/%Y/%m')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.RemoveField(
            model_name='taikhoan',
            name='loaiTaiKhoan',
        ),
        migrations.DeleteModel(
            name='loaiTaiKhoan',
        ),
        migrations.DeleteModel(
            name='taiKhoan',
        ),
        migrations.AddField(
            model_name='danhgia',
            name='khach_hang',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.khachhang'),
        ),
        migrations.AddField(
            model_name='danhgia',
            name='san_pham',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.sanpham'),
        ),
        migrations.AddField(
            model_name='comment',
            name='khach_hang',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.khachhang'),
        ),
        migrations.AddField(
            model_name='baiviet',
            name='san_pham',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.sanpham'),
        ),
        migrations.AddField(
            model_name='baiviet',
            name='ten_KH',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='foodRe.khachhang'),
        ),
    ]

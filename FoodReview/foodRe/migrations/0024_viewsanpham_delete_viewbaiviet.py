# Generated by Django 4.1 on 2022-10-23 09:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('foodRe', '0023_cuahang'),
    ]

    operations = [
        migrations.CreateModel(
            name='ViewSanPham',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Created_date', models.DateTimeField(auto_now_add=True)),
                ('Update_date', models.DateTimeField(auto_now=True)),
                ('views', models.IntegerField(default=0)),
                ('san_pham', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='foodRe.sanpham')),
            ],
        ),
        migrations.DeleteModel(
            name='ViewBaiViet',
        ),
    ]

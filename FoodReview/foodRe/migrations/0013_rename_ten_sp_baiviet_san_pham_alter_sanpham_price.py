# Generated by Django 4.1.2 on 2022-10-16 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodRe', '0012_alter_baiviet_ten_sp'),
    ]

    operations = [
        migrations.RenameField(
            model_name='baiviet',
            old_name='ten_SP',
            new_name='san_pham',
        ),
        migrations.AlterField(
            model_name='sanpham',
            name='price',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]

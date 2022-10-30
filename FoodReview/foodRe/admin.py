from django.contrib import admin
from django import forms
from django.template.response import TemplateResponse
from django.utils.safestring import mark_safe
from .models import sanPham, baiViet, danhGia, User, cuaHang,Comment
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.urls import path


class baiVietForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget)

    class Meta:
        model = baiViet
        fields = '__all__'


class baiVietAdmin(admin.ModelAdmin):
    form = baiVietForm
    list_display = ["id", "ten_KH", "content", "Created_date"]
    search_fields = ["ten_KH", "Created_date"]
    # list_filter = ["ten_KH"]
    readonly_fields = ["hinh"]

    def hinh(self, baiViet):
        return mark_safe("<img src='/static/{img_url}' />").__format__(img_url=baiViet.image.name)


class cuaHangAdmin(admin.ModelAdmin):
    list_display = ["id", "ten_CH", "dia_chi", "gio_mo_cua", "Created_date"]
    search_fields = ["ten_CH", "Created_date"]
    # list_filter = ["ten_CH"]


class CommentAdmin(admin.ModelAdmin):
    list_display = ["id", "khach_hang", "noi_dung", "Created_date"]
    search_fields = ["khach_hang", "Created_date"]


class danhGiaAdmin(admin.ModelAdmin):
    list_display = ["id", "khach_hang", "san_pham", "chat_luong", "Created_date"]
    search_fields = ["khach_hang", "Created_date"]


class sanPhamAdmin(admin.ModelAdmin):
    list_display = ["id", "ten_SP", "ten_CH", "dia_chi", "gio_mo_cua", "price", "Created_date"]
    search_fields = ["ten_SP", "ten_CH"]
    # list_filter = ["ten_CH", "ten_SP"]
    readonly_fields = ["hinh"]

    def hinh(self, sanPham):
        return mark_safe("<img src='/static/{img_url}' />").__format__(img_url=sanPham.image.name)


class FoodReviewAppAdminSite(admin.AdminSite):
    site_header = 'FOOD - REVIEW'

    def get_urls(self):
        return [
            path('sanPham-stats/', self.sanPham_stats)
        ] +super().get_urls()

    def sanPham_stats(self, request):
        sanPham_count = sanPham.objects.count()

        return TemplateResponse(request, 'admin/sanPham-stats.html', {
            'sanPham_count': sanPham_count
        })

admin_site = FoodReviewAppAdminSite('myFoodRe')

admin_site.register(User)
admin_site.register(cuaHang, cuaHangAdmin)
admin_site.register(sanPham, sanPhamAdmin)
admin_site.register(baiViet, baiVietAdmin)
admin_site.register(danhGia, danhGiaAdmin)
admin_site.register(Comment, CommentAdmin)


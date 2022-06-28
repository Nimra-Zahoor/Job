from django.contrib import admin

from .models import *

# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display = ['sid', 'name', 'roll_no']
admin.site.register(Student, StudentAdmin)

class JobModelAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'description', 'company_name','working_hours','salary','salarytype','currency','jobtype']
admin.site.register(JobModel,JobModelAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ['Id', 'firstName', 'lastName', 'emailAddress', 'password']
admin.site.register(User, UserAdmin)
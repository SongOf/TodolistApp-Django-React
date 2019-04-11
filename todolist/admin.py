# coding:utf-8
from django.contrib import admin
from .models import Todolist


class TodolistAdmin(admin.ModelAdmin):
    '''
    管理员类
    '''
    fields = ['id', 'text', 'completed', 'create', 'priority', 'expire']

admin.site.register(Todolist, TodolistAdmin)

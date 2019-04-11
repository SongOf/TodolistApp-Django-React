# coding:utf-8
from rest_framework import serializers
from .models import Todolist


class TodolistSerializer(serializers.ModelSerializer):
    '''
    待办事项序列化方法
    '''
    class Meta:
        model = Todolist
        fields = ("id", 'text', 'completed', 'create', 'priority', 'expire')

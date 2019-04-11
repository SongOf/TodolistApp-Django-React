# coding:utf-8
from django.db import models

class Todolist(models.Model):
    '''
    待办事项类
    '''
    # 每个事项的唯一标识
    id = models.AutoField(primary_key=True)

    # 事项内容（必填项，防止创建空条目）
    text = models.CharField(max_length=200, blank=False, default='')

    # 是否已完成
    completed = models.BooleanField(default=False)

    # 创建时间
    create = models.DateTimeField(auto_now_add=True)

    # 优先级
    priority = models.DecimalField(max_digits=2, decimal_places=0, default=1)

    # expire date 过期时间
    expire = models.CharField(max_length=50, default='')

    class Meta:
        ordering = ['-id',]   # 越新创建的条目显示越靠上

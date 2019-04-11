# coding:utf-8
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Todolist
from .serializers import TodolistSerializer


def index(request):
    return render(request, 'todolist/index.html', {'title': 'Todo List'})

@csrf_exempt
def todo_show(request):
    """展示待办事项列表"""
    if request.method == 'GET':
        todoLists = Todolist.objects.all()
        serializer = TodolistSerializer(todoLists, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        """添加新待办事项"""
        data = JSONParser().parse(request)
        serializer = TodolistSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def todo_change(request, id):
    """修改待办事项状态"""
    try:
        todo = Todolist.objects.get(id=id)
    except Todolist.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'DELETE':
        """删除条目"""
        todo.delete()
        return HttpResponse(status=204)

    elif request.method == 'TOGGLE':
        """反转完成状态"""
        todo.completed = not todo.completed
        todo.save()
        return HttpResponse(status=204)

    elif request.method == 'EDIT':
        """修改事项内容"""
        todo.text = request.body
        todo.save()
        return HttpResponse(status=204)

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todolist',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('text', models.CharField(default=b'', max_length=200)),
                ('completed', models.BooleanField(default=False)),
                ('create', models.DateTimeField(auto_now_add=True)),
                ('priority', models.DecimalField(default=1, max_digits=2, decimal_places=0)),
                ('expire', models.CharField(default=b'', max_length=50)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
    ]

# Generated by Django 4.0.4 on 2022-04-27 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=50)),
                ('lastName', models.CharField(max_length=50)),
                ('emailAddress', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=50)),
            ],
            options={
                'ordering': ['Id'],
            },
        ),
    ]

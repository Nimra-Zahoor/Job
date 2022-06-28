# Generated by Django 4.0.4 on 2022-04-19 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('sid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('roll_no', models.IntegerField()),
            ],
            options={
                'ordering': ['roll_no'],
            },
        ),
    ]
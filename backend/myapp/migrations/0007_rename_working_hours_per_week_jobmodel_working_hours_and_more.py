# Generated by Django 4.0.4 on 2022-06-15 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_alter_jobmodel_options_alter_jobmodel_currency_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jobmodel',
            old_name='working_hours_per_week',
            new_name='working_hours',
        ),
        migrations.AlterField(
            model_name='jobmodel',
            name='currency',
            field=models.CharField(choices=[('Rs/-', 'Rs/-'), ('$', '$'), ('€', '€')], default='rupee', max_length=255),
        ),
        migrations.AlterField(
            model_name='jobmodel',
            name='jobtype',
            field=models.CharField(choices=[('Full-Time', 'Full-Time'), ('Part-Time', 'Part-Time'), ('Internship', 'Internship')], default='full-time', max_length=20),
        ),
        migrations.AlterField(
            model_name='jobmodel',
            name='salarytype',
            field=models.CharField(choices=[('Per Year', 'Per Year'), ('Per Month', 'Per Month')], default='per year', max_length=255),
        ),
    ]

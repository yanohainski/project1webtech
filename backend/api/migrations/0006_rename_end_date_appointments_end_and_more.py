# Generated by Django 5.1.5 on 2025-02-02 12:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointments',
            old_name='end_date',
            new_name='end',
        ),
        migrations.RenameField(
            model_name='appointments',
            old_name='start_date',
            new_name='start',
        ),
        migrations.RenameField(
            model_name='appointments',
            old_name='name',
            new_name='title',
        ),
    ]

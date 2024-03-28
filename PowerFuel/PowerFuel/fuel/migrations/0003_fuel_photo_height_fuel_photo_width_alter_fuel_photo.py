# Generated by Django 5.0.3 on 2024-03-28 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fuel', '0002_fuel_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='fuel',
            name='photo_height',
            field=models.PositiveIntegerField(blank=True, editable=False, null=True),
        ),
        migrations.AddField(
            model_name='fuel',
            name='photo_width',
            field=models.PositiveIntegerField(blank=True, editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='fuel',
            name='photo',
            field=models.ImageField(height_field='photo_height', upload_to='photos/', width_field='photo_width'),
        ),
    ]

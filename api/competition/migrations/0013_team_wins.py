# Generated by Django 4.1.7 on 2023-03-07 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competition', '0012_alter_eventteamranking_score_team'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='wins',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
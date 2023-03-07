# Generated by Django 4.1.7 on 2023-03-06 23:46

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('competition', '0005_event_low_score_wins'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventteamranking_h2h',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AddField(
            model_name='eventteamranking_score',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AlterField(
            model_name='competitions_h2h',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AlterField(
            model_name='competitions_score',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]

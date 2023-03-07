# Generated by Django 4.1.7 on 2023-03-07 00:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('competition', '0010_alter_team_brolympic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventteamranking_h2h',
            name='team',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='team_event_ranking_h2h', to='competition.team'),
        ),
        migrations.AlterField(
            model_name='eventteamranking_score',
            name='team',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='team_event_ranking_score', to='competition.team'),
        ),
    ]

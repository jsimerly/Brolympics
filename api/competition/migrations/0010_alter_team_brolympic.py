# Generated by Django 4.1.7 on 2023-03-06 23:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('competition', '0009_alter_competitions_h2h_team_1_score_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='brolympic',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='competition.brolympics', verbose_name='brolympic'),
        ),
    ]
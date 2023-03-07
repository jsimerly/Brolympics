from django.db import models
from django.db.models import F, Q
from uuid import uuid4
from django.utils import timezone

# Models
class Brolympics(models.Model):
    uuid = models.UUIDField(default=uuid4)

    year = models.DateField(default=timezone.now)
    completed = models.BooleanField(default=False)
    #add an account owner at some point

class Team(models.Model):
    uuid = models.UUIDField(default=uuid4)

    name = models.CharField(max_length=60)

    brolympic = models.ForeignKey(
        Brolympics, 
        verbose_name='brolympic', 
        on_delete=models.CASCADE,
        null=True
    )

    player_1_first_name = models.CharField(max_length=30)
    player_1_last_name = models.CharField(max_length=30)
    player_2_first_name = models.CharField(max_length=30)
    player_2_last_name = models.CharField(max_length=30)

    score = models.PositiveIntegerField(default=0)

    wins =models.PositiveIntegerField(default=0)
    losses = models.PositiveIntegerField(default=0)
    ties = models.PositiveIntegerField(default=0)
    
    win_percentage = models.FloatField(default=0)

    ranking = models.PositiveIntegerField(default=1)

    def __str__(self) -> str:
        return self.name + ' ' + self.brolympic.year.strftime("%Y")

EVENT_CHOICES = (
    ('H', 'h2h'),
    ('S', 'score'),
)
class Event(models.Model):
    uuid = models.UUIDField(default=uuid4)

    brolympic = models.ForeignKey(
        Brolympics, 
        verbose_name='brolympic', 
        on_delete=models.CASCADE
    )

    low_score_wins = models.BooleanField(default=False)
    name = models.CharField(max_length=32)
    type = models.CharField(max_length=1, choices=EVENT_CHOICES, default='H')

    def __str__(self) -> str:
        return self.name

    
class EventTeamRanking_H2H(models.Model):
    uuid = models.UUIDField(default=uuid4)
    
    event = models.ForeignKey(
        Event, 
        on_delete=models.CASCADE,
        related_name='event_ranking_h2h'
    )
    team = models.OneToOneField(
        Team, 
        on_delete=models.CASCADE,
        related_name='team_event_ranking_h2h'
    )

    wins = models.PositiveIntegerField(default=0)
    losses = models.PositiveIntegerField(default=0)
    ties = models.PositiveIntegerField(default=0)
    win_percentage = models.FloatField(default=0)

    rank = models.PositiveIntegerField(default=1)
    points = models.PositiveIntegerField(default=0)
    final = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.rank) + ") " +  self.team.name + " - " + self.event.name

class EventTeamRanking_Score(models.Model):
    uuid = models.UUIDField(default=uuid4)

    event = models.ForeignKey(
        Event, 
        on_delete=models.CASCADE,
        related_name='event_ranking_score'
    )
    team = models.ForeignKey(
        Team, 
        on_delete=models.CASCADE,
        related_name='team_event_ranking_score'
    )

    team_score = models.FloatField(null=True, blank=True)

    rank = models.PositiveIntegerField(default=1)
    points = models.PositiveIntegerField(default=0)
    final = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.rank) + ") " +  self.team.name + " - " + self.event.name

class Competitions_H2H(models.Model):
    uuid = models.UUIDField(default=uuid4)

    event = models.ForeignKey(
        Event, 
        on_delete=models.CASCADE, 
        related_name='competitions_h2h'
    )

    team_1 = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='team_1'
    )

    team_2 = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='team_2'
    )

    team_1_score = models.FloatField(null=True, blank=True)
    team_2_score = models.FloatField(null=True, blank=True)
    
    winner = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='winner',
        blank=True, null=True
    )

    active = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.event.name + " - " + self.team_1.name + ': ' + str(self.team_1_score) + ' v ' + self.team_2.name + ': ' + str(self.team_2_score)

class Competitions_Score(models.Model):
    uuid = models.UUIDField(default=uuid4)

    event = models.ForeignKey(
        Event, 
        on_delete=models.CASCADE, 
        related_name='competitions_score'
    )

    team = models.ForeignKey(
        Team,
        on_delete=models.CASCADE,
        related_name='competitions_team'
    )

    player_1_score = models.FloatField(null=True, blank=True)
    player_2_score = models.FloatField(null=True, blank=True)

    team_score = models.FloatField(null=True, blank=True)

    active = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.event.name + " - " + self.team.name + ': ' + str(self.team_score)
    
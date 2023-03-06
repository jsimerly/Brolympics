from django.db import models

# Create your models here.
class Team(models.Model):
    uuid = models.UUIDField()
    name = models.CharField(max_length=64)

    player_1_first_name = models.CharField(max_length=30)
    player_2_first_name = models.CharField(max_length=30)
    player_1_first_name = models.CharField(max_length=30)
    player_2_first_name = models.CharField(max_length=30)

class Brolympics(models.Model):
    uuid = models.UUIDField
    year = models.DateField()

class Event(models.Model):
    name = ''

class Competitions(models.Model):
    name = ''
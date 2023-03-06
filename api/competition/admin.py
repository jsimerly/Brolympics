from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Team)
admin.site.register(Brolympics)
admin.site.register(Event)
admin.site.register(Competitions_H2H)
admin.site.register(Competitions_Score)
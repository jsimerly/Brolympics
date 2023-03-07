from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import *

class BrolympicsNode(DjangoObjectType):
    class Meta:
        model = Brolympics
        filter_fields = ['uuid', 'year', 'completed']
        interfaces = (relay.Node, )

class TeamNode(DjangoObjectType):
    class Meta:
        model = Team
        filter_fields = ['uuid', 'name', 'brolympic', 'ranking',]
        interfaces = (relay.Node,)

class Query(ObjectType):
    brolympics = relay.Node.Field(BrolympicsNode)
    all_brolympics = DjangoFilterConnectionField(BrolympicsNode)

    team = relay.Node.Field(TeamNode)
    all_teams = DjangoFilterConnectionField(TeamNode)


import graphene
import competition.schema

class Query(competition.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)

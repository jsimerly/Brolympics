from django.db import models
from uuid import uuid4

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, password, phone_number):
        if not email:
            raise ValueError("User must have an email address.")
        
        if not password:
            raise ValueError("User must have a password.")
        
        if not phone_number:
            raise ValueError("User must have a phone number.")

        user = self.model(
            email = self.normalize_email(email),
        )
        
        user.set_password(password)
        user.save()

        return user

    def create_super_user(self, email, password=None):
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            email = self.normalize_email(email),
        )

        user.is_admin = True
        user.save()

        return user

class User(AbstractBaseUser):
    uuid = models.UUIDField(default=uuid4, editable=False)
    
    email=models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True
    )

    phone = models.CharField(
        verbose_name='Phone Number',
        max_length=20,
    )

    password=models.CharField(
        max_length=124, 
        verbose_name='Password'
    )


    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    is_email_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()
    
    def __str__(self):
        return self.email


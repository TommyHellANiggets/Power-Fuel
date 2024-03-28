from django.urls import path
from django.contrib import admin
from fuel import views

urlpatterns = [
    path('', views.home, name='home'),  # URL для главной страницы
    path('admin/', admin.site.urls),
    path('registration/', views.registration, name='registration'),
    path('authorisation/', views.authorisation, name='authorisation'),  # URL для страницы "О нас"
]

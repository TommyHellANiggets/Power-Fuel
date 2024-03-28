from django.shortcuts import render
from .models import Fuel

def home(request):
    fuels = Fuel.objects.all()
    return render(request, 'home.html', {'fuels': fuels})

def registration(request):
    return render(request, 'registration.html')

def authorisation(request):
    return render(request, 'authorisation.html')

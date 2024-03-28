from django.contrib import admin
from .models import Fuel
from .forms import FuelForm

# Регистрируем модель Fuel в административном интерфейсе
@admin.register(Fuel)
class FuelAdmin(admin.ModelAdmin):
    # Указываем, какую форму использовать для отображения и редактирования объектов модели
    form = FuelForm
    # Далее можно указать другие настройки административного интерфейса, например, поля для отображения
    list_display = ['name', 'price', 'description']  # Поля, которые будут отображаться в списке объектов модели


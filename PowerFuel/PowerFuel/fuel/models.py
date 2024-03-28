from django.db import models

class Fuel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    photo = models.ImageField(upload_to='photos/', width_field='photo_width', height_field='photo_height')
    photo_width = models.PositiveIntegerField(null=True, blank=True, editable=False)
    photo_height = models.PositiveIntegerField(null=True, blank=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

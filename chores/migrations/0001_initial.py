# Generated by Django 4.0.4 on 2022-05-31 18:50

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import djmoney.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Chore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=2500)),
                ('image', models.ImageField(blank=True, upload_to='images')),
                ('date_due', models.DateField(default=datetime.date.today)),
                ('value_currency', djmoney.models.fields.CurrencyField(choices=[('USD', 'USD $')], default='USD', editable=False, max_length=3)),
                ('value', djmoney.models.fields.MoneyField(decimal_places=2, default_currency='USD', max_digits=4)),
                ('assigned_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assigned_chore', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

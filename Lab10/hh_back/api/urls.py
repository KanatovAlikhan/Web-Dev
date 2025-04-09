# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:pk>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyListAPIView.as_view()),
]

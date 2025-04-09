// src/app/company.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company.model'; // Импорт модели компании

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://127.0.0.1:8000/api/companies/';  // URL для запроса данных с бэкенда

  constructor(private http: HttpClient) {}

  // Метод для получения списка компаний
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);  // Отправляем GET-запрос на бэкенд
  }
}

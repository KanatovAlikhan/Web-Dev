import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getVacancies(companyId).subscribe(data => {
      this.vacancies = data;
    });
  }
}

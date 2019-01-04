import { Injectable } from '@angular/core';
import { Report } from './shared/models/report';

@Injectable({
  providedIn: 'root'
})
export class DashboardStorageService {

  reports: Report[];
  currentReport: Report;

  constructor() {

  }
}

import { Injectable } from '@angular/core';
import { Report } from './models/report';

@Injectable({
  providedIn: 'root'
})
export class DashboardStorageService {

  reports: Report[];
  currentReport: Report;

  constructor() {

  }
}

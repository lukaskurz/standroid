import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';
import { ClrWizard, ClrModal } from '@clr/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Report } from '@shared/models/report';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  constructor() { }
}

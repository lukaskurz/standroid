import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { DashboardStorageService } from 'src/app/dashboard-storage.service';
import { Member } from 'src/app/models/member';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  isModalOpen = false;
  newQuestion = "";

  constructor(
    public storage: DashboardStorageService,
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  }


  deleteQuestion(index: number) {
    this.storage.currentReport.questions.splice(index, 1);
    this.afs
      .collection("reports")
      .doc(`${this.storage.currentReport.name}_${this.storage.currentReport.creator_uid}`)
      .update({ questions: this.storage.currentReport.questions });
  }

  addQuestion() {
    this.storage.currentReport.questions.push(this.newQuestion);
    this.afs
      .collection("reports")
      .doc(`${this.storage.currentReport.name}_${this.storage.currentReport.creator_uid}`)
      .update({ questions: this.storage.currentReport.questions });
    this.isModalOpen = false;
  }

  newQuestionValid() {
    if (this.newQuestion == null || this.newQuestion === "") {
      return false;
    }
    if (this.storage.currentReport.questions.some(v => v === this.newQuestion)) {
      return false;
    }
    return true;
  }


  openModal() {
    this.isModalOpen = true;
  }
}

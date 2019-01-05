import { Component, OnInit } from '@angular/core';
import { DashboardStorageService } from 'src/app/core/services/dashboard-storage.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HttpClient } from '@angular/common/http';

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
      .doc(this.storage.currentReport.uid)
      .update({ questions: this.storage.currentReport.questions });
  }

  addQuestion() {
    this.storage.currentReport.questions.push(this.newQuestion);
    this.saveQuestions();
    this.isModalOpen = false;
  }

  changeQuestion(index: number, value: string) {
    this.storage.currentReport.questions[index] = value;
  }

  saveQuestions() {
    this.afs
      .collection("reports")
      .doc(this.storage.currentReport.uid)
      .update({ questions: this.storage.currentReport.questions });
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

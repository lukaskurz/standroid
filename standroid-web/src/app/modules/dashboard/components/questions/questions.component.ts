import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  @Input() questions: string[] = [];
  @Output() save = new EventEmitter();

  isModalOpen = false;
  newQuestion = "";

  constructor() {}


  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  addQuestion() {
    this.questions.push(this.newQuestion);
    this.isModalOpen = false;
  }

  changeQuestion(index: number, value: string) {
    this.questions[index] = value;
  }

  saveQuestions() {
    this.save.emit(this.questions);
  }

  newQuestionValid() {
    if (this.newQuestion == null || this.newQuestion === "") {
      return false;
    }
    if (this.questions.some(v => v === this.newQuestion)) {
      return false;
    }
    return true;
  }


  openModal() {
    this.isModalOpen = true;
  }
}

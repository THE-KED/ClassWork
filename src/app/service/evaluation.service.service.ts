import { Injectable } from '@angular/core';
import { Evaluation } from '../Models/Evaluation';
import { Classe } from '../Models/Classe';
import { Subject } from 'rxjs';
import { EvalType } from '../Models/Enumerations/EvaluationType';
import { Question } from '../Models/Question';
import { Questionnaire } from '../Models/Questionnaire';
import { Submission } from '../Models/Submission';
import { Proposition } from '../Models/Proposition';

@Injectable({
  providedIn: 'root'
})
export class EvaluationServiceService {

  private evaluations:Evaluation[]

  private currentExam:Submission;

  private eval:Evaluation;
  
  private indexQ:number;

  public indexSubject = new Subject<number>();

  public SubmissionSubject = new Subject<Submission>();

  public evalSubject = new Subject<Evaluation[]>();



  constructor() { 

    this.indexQ=0;
    this.currentExam = new Submission();

    let classe = new Classe();
    classe.setId(1);
    classe.setName("test classe");

    let question = new Question();
    question.setStatement("qwertyuiopqwertyuio qwertyuioqwertyuqwertyuwertyuioertyuiowertyuiowertyuiowertyuiertyuiowertyuiwertyuiwertyu");
    question.setAnswer([1]);
    question.setDuration(60000);
    question.setChoices(["wqeqweqweqweqwewq","qweqwewqsadqweas","dfdsfewrpoiasdklqer",
  "aweqweqweasd"]);
    question.setDuration(60000);
    let question1 = new Question();
    question1.setStatement("qweiopqwertyuio qwertyuioqwertyuqwertyuwertyuioertyuiowertyuiowertyuiowertyuiertyuiowertyuiwertyuiwertyu");
    question1.setAnswer([2]);
    question1.setChoices(["wqeq","qweqwewqsadqweas","dfdsfewrpoiasdklqer",
  "aweqweqweasd"]);
    question1.setDuration(60000);

    let questionnaire=new Questionnaire();
    questionnaire.setQuestions([question,question1]);

    this.eval = new Evaluation();
    this.eval.setType(EvalType.SynchroTQ);

    this.eval.setId(1);
    this.eval.setDuree(new Date(0, 0, 0, 45, 0));
    this.eval.setExpiration(new Date(2023-7-1));
    this.eval.setStartDate(new Date(2023-6-26));
    this.eval.setInstructions("test");
    this.eval.setClasse(classe);
    this.eval.setQuestionnaire(questionnaire);


    this.evaluations=[
      this.eval
    ];

  }

  public refrech(){
    this.evalSubject.next(this.evaluations.slice());
  }
  public refrechIndex(){
    this.indexSubject.next(this.indexQ);
  }
  public refrechSub(){
    this.SubmissionSubject.next(this.currentExam);
  }


  public initExam(questionnaire:Questionnaire){

    this.indexQ=0;

    this.currentExam.setQuestionnaire(questionnaire);
    let temp = this.currentExam.getProposition();

    for(let i=0;i<questionnaire.getQuestions().length-1;i++){
      temp.push(new Proposition());
    }
    
    this.currentExam.setProposition(temp);

  }
  public addProposition(index:number,prop:Proposition){
    let temp = this.currentExam.getProposition();

    temp[index]=prop;

    this.currentExam.setProposition(temp);
  }

  upIndex(){
    this.indexQ++;
  }
  downIndex(){
    this.indexQ--;
  }

}

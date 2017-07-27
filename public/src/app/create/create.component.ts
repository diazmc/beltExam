import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question = {
    text: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',

  }


  constructor(private _route: ActivatedRoute, private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  createPoll(){
    this._http.createQuestion({
      text:  this.question.text,
      option1: this.question.option1,
      vote1: 0,
      option2: this.question.option2,
      vote2: 0,
      option3: this.question.option3,
      vote3: 0,
      option4: this.question.option4,
      vote4: 0
    }
    )
      .then((data)=> {
      })
    this._router.navigate(['/dashboard'])
    console.log(this.question)
    
  }

}

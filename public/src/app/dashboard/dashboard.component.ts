import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  questions = []

  constructor(private _route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this._http.find()
      .then((data)=> {
        this.questions = data.questions
      })
      .catch((err)=> {
        console.log('error retrieving questions', err)
      })
  }



}

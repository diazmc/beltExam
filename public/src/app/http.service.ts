import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';


@Injectable()
export class HttpService {

  loggeduser = null;
  subject = new BehaviorSubject(this.loggeduser)
  

  constructor(private _http: Http) { }

  loggedinuser(user){
    this.loggeduser = user
  }

  getuser(){
    return this.loggeduser
  }

  logout(){
    this.loggeduser = null
  }

  loginUser(){
    return this._http.get('/dashboard')
    .map(data => data.json())
    .toPromise()
  }

  createQuestion(question){
    return this._http.post('/createQuestion', question)
    .map(data => data.json())
    .toPromise()
  }
  
  find(){
    return this._http.get('/questions')
    .map(data => data.json())
    .toPromise()
  } 

  findQuestion(id){
    return this._http.get(`/question/${id}`)
    .map( data => data.json())
    .toPromise()
  }

  // optionVote(){
  //   return this._http.post(`/increment/${val}`)
  //   .map( data => data.json())
  //   .toPromise
  // }
}

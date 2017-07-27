import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  
  question = []
  id = null;
  subscriptionId: Subscription;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private router: Router) 
  {
    this.subscriptionId = this._route.params.subscribe(
      (param) => {
        this.id = param.id;
        console.log(this.id)
      });

  }

  ngOnInit() {
     this._http.findQuestion(this.id)
      .then((data)=> {
        this.question = data.question
      })
      .catch((err)=> {
        console.log('error retrieving questions', err)
      })
  }

//   vote(val){
//     this._http.optionVote({
//       voted_option: val,
//       id: this.id
//     })
//     .then( data => {
//       console.log("Data from login function: ")
//       console.log(data.status)
//   if(!data.status){
//    console.log(data.message)
//   } else {
//     this.ngOnInit()
//   }

//  } )
// .catch( err => {
//   console.log("on .CATCH vote ")
//   console.log(err);
// })

}

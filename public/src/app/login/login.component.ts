import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private _route: ActivatedRoute, private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    
  }


  login() {
    this._http.loggedinuser(this.user);
    this._router.navigate(['/dashboard'])
    
    console.log("Creating User", this.user);
  }

  

}

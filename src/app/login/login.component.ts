import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

interface Userpwd{
  username: string;
  pwd: string;
};

interface Userobj{
  username: string;
  userbirthdate: string;
  userage: number;
  useremail: string;
  uservalid: boolean;
};

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userpwd: Userpwd = {username: "", pwd:""}
  userobj: Userobj = {username: "", userbirthdate: "", userage: 56, useremail: "", uservalid: true}

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {}

  

  public loginfunc(){
    this.httpClient.post(BACKEND_URL + '/login', this.userpwd, httpOptions)
      .subscribe((data:any)=>{
        if(data.ok){

          this.userobj.username = data.user.username;
          this.userobj.userbirthdate = data.user.birthdate;
          this.userobj.userage = data.user.age;
          this.userobj.useremail = data.user.email;
          this.userobj.uservalid = data.user.valid;

          sessionStorage.setItem('username', this.userobj.username)
          sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate)
          sessionStorage.setItem('userage',this.userobj.userage.toString())
          sessionStorage.setItem('useremail', this.userobj.useremail)
          sessionStorage.setItem('uservalid', this.userobj.uservalid.toString())

          this.httpClient.post<Userobj[]>(BACKEND_URL + '/account', this.userobj, httpOptions)

          .subscribe((m: any) => {console.log(m[0]);});

          this.router.navigateByUrl('/account')

        } else {
          alert("Sorry, Username or password is invalid");
        }
      })
  }

}

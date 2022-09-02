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
  userid: number;
  username: string;
  userbirthdate: string;
  userage: number;
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

  userpwd: Userpwd = {username: "John@gmail.com", pwd:'1233'}
  userobj: Userobj = {userid: 1, username: this.userpwd.username, userbirthdate: '10/20/2022', userage: 56}

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {}

  public loginfunc(){
    this.httpClient.post(BACKEND_URL + '/login', this.userpwd, httpOptions)
      .subscribe((data:any)=>{
        alert(JSON.stringify(this.userpwd));
        if(data.ok){
          sessionStorage.setItem('userid', this.userobj.userid.toString())
          sessionStorage.setItem('username', this.userobj.username.toString())
          sessionStorage.setItem('userbirthdate', this.userobj.userbirthdate.toString())
          sessionStorage.setItem('userage', this.userobj.userage.toString())
          this.httpClient.post<Userobj[]>(BACKEND_URL + '/account', this.userobj, httpOptions)
          .subscribe((m: any) => {console.log(m[0]);});
          this.router.navigateByUrl('accountpage')
        } else {
          alert("Sorry, Username or password is invalid");
        }
      })
  }

}

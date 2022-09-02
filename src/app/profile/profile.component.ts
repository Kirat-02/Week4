import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';

interface Userobj{
  username: string;
  userbirthdate: string;
  userage: number;
  useremail: string;
  uservalid: boolean;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userobj: Userobj = {username: "", userbirthdate: "", userage: 56, useremail: "", uservalid: true}

  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('userbirthdate');
  userage = sessionStorage.getItem('userage');
  useremail = sessionStorage.getItem('useremail');
  uservalid = sessionStorage.getItem('uservalid');

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {}

  public logout(){
    window.sessionStorage.clear();
  }

  public updateProfile() {
    
    sessionStorage.setItem('username', this.username ?? "");
    sessionStorage.setItem('birthdate', this.birthdate ?? "");
    sessionStorage.setItem('userage', this.userage ?? "");
    sessionStorage.setItem('useremail', this.useremail ?? "");
    sessionStorage.setItem('uservalid', this.uservalid ?? "");

    this.router.navigateByUrl('/account');
   
  }

}
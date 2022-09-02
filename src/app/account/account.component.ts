import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('userbirthdate');
  userage = sessionStorage.getItem('userage');
  useremail = sessionStorage.getItem('useremail');
  uservalid = sessionStorage.getItem('uservalid');

  public logout(){
    window.sessionStorage.clear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

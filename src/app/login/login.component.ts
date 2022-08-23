import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


  
export class LoginComponent implements OnInit {

  email="";
  password="";
  error="";

  data = [
    {"email": "John@gmail.com","password": "123"}, 
    {"email": "Kirat@gmail.com","password": "456"}, 
    {"email": "Singh@gmail.com","password": "789"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted(){

    var valid = false;
    
    for(let i = 0;  i<this.data.length; i++){
      if(this.email == this.data[i]['email'] && this.password == this.data[i]['password']){
        valid = true;
        break;
      } else {
        valid = false;
      }
    }
   
    if (valid){
      this.router.navigate(['/account']);
    } else {
      this.error = "Wrong Information Submitted";
      this.router.navigate(['/login', this.error]);
    }
   
  }

}

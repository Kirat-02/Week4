import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  hide = false;

  constructor(private router: Router) { }

  public logout(){
    window.sessionStorage.clear();
    this.hide = true;
  }

  public account(){
    if(window.sessionStorage.length == 0){
      this.router.navigateByUrl('/login')
    } else {
      this.router.navigateByUrl('/account')
    }
   
  }

  public profile(){
    if(window.sessionStorage.length == 0){
      this.router.navigateByUrl('/login')
    } else {
      this.router.navigateByUrl('/profile')
    }
   
  }

  ngOnInit(): void {
  }
  

}

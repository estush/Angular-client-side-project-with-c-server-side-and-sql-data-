import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

  constructor(public us:UsersService,public r:Router){}
 
  ngOnInit() {
  }
  
  // log(){
  //   if(this.us.currentUser.email==this.us.currentManager1.email)
  //     {
  //       this.isLogin=true
  //       alert(this.isLogin)
  //     }
      
  //   else if(this.us.currentUser)
  //     this.isLogin=true
  // }



}


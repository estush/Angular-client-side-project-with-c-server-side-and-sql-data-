import { Component, OnInit } from '@angular/core';
import { Users } from 'src/class/Users';
import { UsersService} from 'src/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.scss'],
})

export class HomeComponent implements OnInit{

  constructor(public us:UsersService){}
 
  allUsers:Array<Users>=new Array<Users>()

  ngOnInit(){
    this.us.getAll().subscribe(
      data => {this.allUsers=data;},
      errr => { alert('כשלון ' + errr.message) }
      )
  }

}
  


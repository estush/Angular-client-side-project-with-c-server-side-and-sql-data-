import { Component, OnInit } from '@angular/core';
import { Users } from 'src/class/Users';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-our-users',
  templateUrl: './our-users.component.html',
  styleUrls: ['./our-users.component.css']
})
export class OurUsersComponent implements OnInit {

  constructor(public us:UsersService){}
  allUsers:Array<Users>=new Array<Users>()
  show: boolean=false
  

  ngOnInit(){
       //לקיחת כל המשתמשים מהמסד
    this.us.getAll().subscribe(
      data => { this.allUsers = data; debugger },
      errr => { debugger; alert('כשלון ' + errr.message) }
    )
}




  all(){
    // alert(this.show)
    this.show=!this.show

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Users } from 'src/class/Users';
import { UsersService } from 'src/services/users.service';
import { NavigationStart, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public us: UsersService, public r: Router) { }
  myEmail: string = ''
  myPass: string = ''
  myUser: Users = new Users()
  allUsers: Array<Users> = new Array<Users>()
  // thisUser: Users=new Users()
  // user= new Users(this.myForm)

  ngOnInit() {
    //לקיחת כל המשתמשים מהמסד
    this.us.getAll().subscribe(
      data => { this.allUsers = data; debugger },
      errr => { debugger; alert('כשלון ' + errr.message) }
    )
    this.us.setManag()
  }
  save() {
    let index = 0
    for (; index < this.myEmail.length; index++) {
      if(this.myEmail[index]=='@')
        break
    }
    if(index==this.myEmail.length){
      alert("כתובת מייל לא תקינה")
      return
    }
     index = 0
    //  האם המשתמש שנכנס הוא מנהל
    if ((this.us.currentManager1.email == this.myEmail && this.us.currentManager1.password == this.myPass) ||
      (this.us.currentManager2.email == this.myEmail && this.us.currentManager2.password == this.myPass)) {

      this.us.isAdmin = true
      //ניתוב לדף כל הטיולים 
      this.r.navigate([`./our trips`])



    }
    //בדיקה האם המשתמש קיים במערכת
    else {
      for (; index < this.allUsers.length; index++) {
        if (this.allUsers[index].email == this.myEmail) {
          if (this.allUsers[index].password == this.myPass) {
            this.us.currentUser = this.allUsers[index]
            this.us.isLogin = true
            //ניתוב לדף הבית
            this.r.navigate([`./home`])
            break
          }
        
        else {
          alert("סיסמא שגויה")
          break
        }
      }
      }
      if (index == this.allUsers.length) {
        alert("אינך רשום, גש להירשם")
        // ניתוב להרשמה אם לא קיים במערכת
        this.r.navigate([`./register`])
      }

    }
  }

}

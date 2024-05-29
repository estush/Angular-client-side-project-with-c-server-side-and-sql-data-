import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/class/Users';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public us: UsersService, public r: Router) { }
  public myForm: FormGroup = new FormGroup({});
  newUser: Users = new Users();
  ngOnInit() {
    //בדיקות תקינות ולקיחת הנתונים מהטופס
    this.myForm = new FormGroup({
      myFirstName: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      myLastName: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      myPhone: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      myEmail: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      myPass: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      myFirstAid: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
    }
    );
  };

  //  onSubmit(form: FormGroup) {
  //   this.newUser.firstName=this.myForm.value;
  //   alert(this.newUser.firstName)
  //  console.log(form.value)
  //  }
  //  get inpName() {
  //   return this.myForm.controls['firstname']
  // }
  //   for (let index = 0; index < this.allUsers.length; index++)
  //   {
  //       if (this.allUsers[index].email==this.myUser.controls['mail'].value&&this.allUsers[index].password==this.myUser.controls['pass'].value)
  //       {
  //         this.myUser=this.allUsers[index]
  //         return this.myUser
  //       }
  //   }

  //שמירת הנתונים מהטופס
  get gfirstName() { return this.myForm.controls['myFirstName'] }
  get glastName() { return this.myForm.controls['myLastName'] }
  get gphone() { return this.myForm.controls['myPhone'] }
  get gemail() { return this.myForm.controls['myEmail'] }
  get gpassword() { return this.myForm.controls['myPass'] }
  get gFirstAid() { return this.myForm.controls['myFirstAid'] }

  myUser: Users = new Users()
  save() {
    // החדש user שמירת ה
    this.newUser.firstName = this.gfirstName.value;
    this.newUser.lastName = this.glastName.value;
    this.newUser.phone = this.gphone.value;
    this.newUser.email = this.gemail.value;
    this.newUser.password = this.gpassword.value;
    this.newUser.isFirstAid = this.gFirstAid.value;
    // this.newUser=this.myForm.value
    debugger
    this.add1()
   
  }
  add1() {
    //הוספת המשתמש למסד
    this.us.Add(this.newUser).subscribe(
      d=>{ //currentUser  שמירת המשתמש ב
        this.newUser.userId=d
    this.us.currentUser = this.newUser
    this.us.isLogin=true
    alert(this.us.currentUser.firstName)
    //הפניה לדף כל הטיולים ת
    this.r.navigate([`./home`])},
      e=>{}
    )
  }

}

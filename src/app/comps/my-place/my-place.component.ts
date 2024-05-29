import { Component, EmbeddedViewRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/class/Users';
import { Invitation } from 'src/class/Invitation';
import { UsersService } from 'src/services/users.service';
import { Value } from 'sass';
import { Trips } from 'src/class/Trips';

@Component({
  selector: 'app-my-place',
  templateUrl: './my-place.component.html',
  styleUrls: ['./my-place.component.css']
})

export class MyPlaceComponent implements OnInit {
  /////////////////////////////////////////משתני פרטי האדם ועדכון
  constructor(public us: UsersService) { }
  allTrips: Array<Trips> = new Array<Trips>()
  user: Users = this.us.currentUser
  allUsers: Array<Users> = new Array<Users>()
  up: boolean = false
  public myForm: FormGroup = new FormGroup({});


  //////////////////////////////////////////////////משתני פרטי טיול
  selectTime: number = 0
  typeTrip: number = -1
  price: boolean = false
  type: boolean = false
  today: Date = new Date();


  ngOnInit() {
    this.myForm = new FormGroup(
      {
        myFirstName: new FormControl(this.user.firstName, [Validators.required, Validators.maxLength(4)]),
        myLastName: new FormControl(this.user.firstName, [Validators.required, Validators.maxLength(4)]),
        myPhone: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
        myEmail: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
        myPass: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
        myFirstAid: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      }
    );
    
    this.us.getAllTripsByUser(this.us.currentUser.userId!)
      .subscribe(
        suc => { this.allTrips = suc;
          console.log(suc);
          
         },
        error => {
          console.log(error);

        }
      )
  }

  //שמירת הנתונים מהטופס
  get gfirstName() { return this.myForm.controls['myFirstName'] }
  get glastName() { return this.myForm.controls['myLastName'] }
  get gphone() { return this.myForm.controls['myPhone'] }
  get gemail() { return this.myForm.controls['myEmail'] }
  get gpassword() { return this.myForm.controls['myPass'] }
  get gFirstAid() { return this.myForm.controls['myFirstAid'] }


  update() {
    this.up = true

  }
  removal() {

    this.us.delete(this.us.currentUser.userId!)
      .subscribe(
        suc => { alert("אינך יכול להתנתק מהאתר היות שאתה רשום לטיולים עתידיים")},
        err => { alert("sucsess")  });
    // if(this.allTrips==null){

    //   this.us.delete(this.us.currentUser.userId!)
    //   .subscribe(
    //     suc=>{alert("sucsess")}
    //   )
    //   }
    // else{  
    //     let index = 0;
    //     let today = new Date();
    //     for (; index < this.allTrips.length; index++) {
    //      if(this.allTrips[index].tripDate )
    //       alert("אינך יכול להתנתק מהאתר היות שאתה רשום לטיולים עתידיים")
    //       break
    //     }
    //     if(index>=this.allTrips.length){
    //       this.us.delete(this.us.currentUser.userId!)
    //       .subscribe(
    //         suc=>{alert("sucsess")}
    //       )

    //     }


    //   }


  }

  save() {
    // this.us.currentUser.firstName="אסתי"
    // החדש user שמירת ה
    this.us.currentUser.firstName = this.gfirstName.value;
    this.us.currentUser.lastName = this.glastName.value;
    this.us.currentUser.phone = this.gphone.value;
    this.us.currentUser.email = this.gemail.value;
    this.us.currentUser.password = this.gpassword.value;
    this.us.currentUser.isFirstAid = this.gFirstAid.value;
    this.us.currentUser = this.myForm.value
    this.update1()

  }
  update1() {
    //עדכון פרטי משתמש
    this.us.update(this.us.currentUser).subscribe(
      u => { alert(this.us.currentUser.firstName) },
      // data => {this.allUsers=data;debugger},
      errr => { debugger; alert('כשלון ' + errr.message) }
    )
  }




  // selectedTime(){
  //  alert(this.selectTime)

  // }
  typeSort() {

    this.allTrips.sort((x, y) => { return x.tripTypeId! - y.tripTypeId! })
  }
  priceSort() {

    this.allTrips.sort((x, y) => { return x.price! - y.price! })

  }
  cancel() {

  }
}
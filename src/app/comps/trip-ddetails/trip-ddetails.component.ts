import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invitation } from 'src/class/Invitation';
import { Trips } from 'src/class/Trips';
import { InvitationService } from 'src/services/invitation.service';
import { TripService } from 'src/services/trip.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-trip-ddetails',
  templateUrl: './trip-ddetails.component.html',
  styleUrls: ['./trip-ddetails.component.css']
})
export class TripDdetailsComponent implements OnInit {

  
  constructor(public tds:TripService,public invser:InvitationService,
    public user:UsersService,public ar: ActivatedRoute){}
 
  allDetails:Array<Trips>=new Array<Trips>()
  trip:Trips=new Trips()
  myPlace:number=0
  myInvitation:Invitation=new Invitation()
  addDetail: boolean=false
  // today!:number=new number();

  
  ngOnInit(){
    this.tds.getAll().subscribe(
      data => {this.allDetails=data;},
      errr => { alert('כשלון ' + errr.message) }
      )
      this.ar.params.subscribe(data=>{
        this.tds.GetById(data['tripId']).subscribe(succ=>this.trip=succ)!})!
        
      }
      add(){
        this.addDetail=true
      }
      // this.today = new Date().getDate()
      invite(){
        if((this.trip.tripEmptyPlace!)-this.myPlace>=0)
          {
            this.addDetail=false
          //   this.tds.Update(this.trip).subscribe(
          //     succ=>{alert("suc")},
          //     err=>{console.log(err);
          //     }
          // )
            alert("ההזמנה בוצעה בהצלחה")
            // this.trip.isFirstAid=true
            this.trip.tripEmptyPlace=(this.trip.tripEmptyPlace!-this.myPlace)
          
            //מילוי פרטי ההזמנה להוספה
            this.myInvitation.invitationUserId=this.user.currentUser.userId
            this.myInvitation.invitationTripId=this.trip.tripId
            this.myInvitation.tripDuration=3
            this.myInvitation.placeNumber=this.myPlace
            this.myInvitation.invitationUserName=""
            this.myInvitation.invitationTripYhad=""
            this.myInvitation.invitationTripDate=this.trip.tripDate
            console.log(this.myInvitation);
            
            this.invser.add(this.myInvitation).subscribe(
              d=>{console.log(d);
              },
              e=>{console.log(e);
              }
            )
          } 
        else
          alert("אין מספיק מקומות פנויים, מספר המקומות הפנויים הוא : "+this.trip.tripEmptyPlace+" !!")
      }
      close(){
        this.addDetail=false
      }
      
    }




//     נתונים בסיסיים להוספת הזמנה 
//  {
//     "invitationUserId": 15,
//     "invitationTripId": 1,
//     "tripDuration": 3,
//     "placeNumber": 1,
//     "invitationUserName": "",
//     "invitationTripYhad": "",
//     "invitationTripDate":"2024-07-20"
//   } 

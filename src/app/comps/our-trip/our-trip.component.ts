import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trips } from 'src/class/Trips';
import { TypeTrips } from 'src/class/TypeTrips';
import { TripService } from 'src/services/trip.service';
import { TypeTripsService } from 'src/services/typeTrips.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.scss','./our-trip.component.css']
})
export class OurTripComponent implements OnInit{

  constructor(
    public ts: TripService,
    public types: TypeTripsService,
    public r:Router,
    public us:UsersService){}
    
    
  allTrips:Array<Trips>=new Array<Trips>()
  allTypes:Array<TypeTrips>=new Array<TypeTrips>()
  selectedType:number=-1
  typeTrip:number=-1


  ngOnInit() {
    this.ts.getAll().subscribe(
      data=>{
        let d=new Date()
        this.allTrips=data},//.filter(x=>x.tripDate!>d);},
      errr => { alert('כשלון ' + errr.message) }
    )
      
      // this.ts.getAll().subscribe(
      //   data => {
      //     this.allTrips = data
      //     .filter(trip => {    
      //       trip.tripDate!.getDay() > today.getDay()
      //     });
      //   },
        // error => {
      //     alert('כשלון' + error.message);
      //   }
      // );


      this.types.getAll().subscribe(
        data=> {this.allTypes=data;},
        errr => { debugger;alert('כשלון ' + errr.message) }
        )
     
    let index = 0
    let today = new Date();
    let tripDate1 = new Date();

    // let tripDate = new Date(this.allTrips[index].tripDate?.getDate); 

// if (tripDate.getTime() >= today.getTime()) {
//    //בדיקה האם התאריך של הטיול עוד לא עבר
//     for (; index < this.allTrips.length; index++)
//     {
//       tripDate = new Date(this.allTrips[index].tripDate?.getDay)
//       if (tripDate.getTime() >= today.getTime()) {
//         this.allTrips[index]
//       }
      

    }
    selected(){
      this.typeTrip=this.selectedType
      //סינון הרשימה
    }
    mytrip: string=''
    details(idt:number){
      this.r.navigate([`./trip details`,idt])
    }
    addToBag(idt:number){

    }
    addTrip(){
      this.r.navigate([`./update trip`,0])
    }
    updateTrip(idt:number){
      this.r.navigate([`./update trip`,idt])
    }
    invited(){

    }
    }



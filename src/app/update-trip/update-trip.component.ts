import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trips } from 'src/class/Trips';
import { TypeTrips } from 'src/class/TypeTrips';
import { TripService } from 'src/services/trip.service';
import { TypeTripsService } from 'src/services/typeTrips.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  constructor(
    public tr:TripService,
    public types: TypeTripsService,
    public ar: ActivatedRoute){}
  
  allTypes:Array<TypeTrips>=new Array<TypeTrips>()
  trip:Trips=new Trips() 
  newType:TypeTrips=new TypeTrips()
  selectedType:number=0 
  typeTrip:number=-1
  oth:boolean=false
  public myForm: FormGroup = new FormGroup({});

  ngOnInit(){
    
    
    this.ar.params.subscribe(data=>{
      this.tr.GetById(data['tripId']).subscribe(succ=>this.trip=succ)!})!

      this.myForm = new FormGroup(
        {
          durationTime: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          isFirstAid: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          picture: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          tripDate: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          tripEmptyPlace: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          tripTime: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          tripTypeName: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          yhad: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
          price: new FormControl(null, [Validators.required, Validators.maxLength(4)]),

        } 
       );
       this.types.getAll().subscribe(
        data=>{
          let d=new Date()
          this.allTypes=data},//.filter(x=>x.tripDate!>d);},
        errr => { alert('כשלון ' + errr.message) }
      )
  }
  
    //שמירת הנתונים מהטופס
    get gdurationTime() { return this.myForm.controls['durationTime'] }
    get gisFirstAid() { return this.myForm.controls['isFirstAid'] }
    get gpicture() { return this.myForm.controls['picture'] }
    // get public
    get gtripDate() { return this.myForm.controls['tripDate'] }
    get gtripEmptyPlace() { return this.myForm.controls['tripEmptyPlace'] }
    get gtripTime() { return this.myForm.controls['tripTime'] }
    get gtripTypeId() { return this.myForm.controls['tripTypeId'] }
    get gtripTypeName() { return this.myForm.controls['tripTypeName'] }
    get gyhad() { return this.myForm.controls['yhad'] }
  
    
    update(){

  
    }
    save() {

      // החדש trip שמירת ה
      this.trip.durationTime = this.gdurationTime.value;
      this.trip.isFirstAid = this.gisFirstAid.value;
      this.trip.picture = this.gpicture.value;
      this.trip.tripDate = this.gtripDate.value;
      this.trip.tripEmptyPlace = this.gtripEmptyPlace.value;
      this.trip.tripTime = this.gtripTime.value;
      this.trip.tripTypeId = this.gtripTypeId.value;
      this.trip.tripTypeName = this.gtripTypeName.value;
      this.trip.yhad = this.gyhad.value;
      this.update1()
     
    }
    update1() {
      //עדכון פרטי טיול;;;;;;
      this.tr.Update(this.trip).subscribe(
        u=>{ alert(this.trip.tripTime)},
          // data => {this.allUsers=data;debugger},
          errr => { alert('כשלון ' + errr.message) }
          )
    }
    selected(){
      this.trip.tripTypeId=this.selectedType
      alert( this.trip.tripTypeId)
      // this.trip.tripTypeName=
      //סינון הרשימה
    }
    // הוספת סוג טיול חדש
    other(){
      alert(this.newType.typeName)
      if(this.oth==true)
        {
        this.types.add(this.newType).subscribe(
          succ=>{alert("vghbj")},
          err=>{alert("file"+err.message)}
        )
        }
     this.oth=!this.oth
    }
}

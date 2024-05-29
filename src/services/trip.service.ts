import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation } from 'src/class/Invitation';
import {  Trips} from 'src/class/Trips';
@Injectable({
    providedIn: 'root'
  })
export class TripService {
    constructor(public http:HttpClient) { }
    allTrips:Array<Trips>=new Array<Trips>()
    basicUrl:string='https://localhost:7056/api/Trip'
    getAll():Observable<Array<Trips>>
    {
        return this.http.get<Array<Trips>>(`${this.basicUrl}`)
    }
    GetById(id:number):Observable<Trips>
    {
        return this.http.get<Trips>(`${this.basicUrl}/GetById/${id}`)
    }
    addTrip(ATrip:Trips)
    {
        return this.http.post<number>(`${this.basicUrl}`,ATrip)
    }
    deleteTrip(id:number):Observable<boolean>
    {
        return this.http.delete<boolean>(`${this.basicUrl}/${id}`)
    }
    Update(ATrip:Trips)
    {
        return this.http.put<boolean>(`${this.basicUrl}`,ATrip)
    }
    GetInvitesToTrip(id:number):Observable<Array<Invitation>>
    {
        return this.http.get<Array<Invitation>>(`${this.basicUrl}/GetInvitesToTrip/${id}`)
    }
  }

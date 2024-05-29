import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeTrips} from 'src/class/TypeTrips';
@Injectable({
    providedIn: 'root'
  })
export class TypeTripsService {
    constructor(public http:HttpClient) { }
    allT:Array<TypeTrips>=new Array<TypeTrips>()
    basicUrl:string='https://localhost:7056/api/TypeTrip'
    getAll():Observable<Array<TypeTrips>>
    {
        return this.http.get<Array<TypeTrips>>(`${this.basicUrl}`)
    }
    GetById(id:number):Observable<TypeTrips> {
        return this.http.get<TypeTrips>(`${this.basicUrl}/${id}`)
    }
    add(Atype:TypeTrips){
        return this.http.post<number>(`${this.basicUrl}`,Atype)
    }
    delete(id:number):Observable<boolean>{
        return this.http.delete<boolean>(`${this.basicUrl}/${id}`)
    }
  }
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation} from 'src/class/Invitation';
@Injectable({
    providedIn: 'root'
  })
export class InvitationService {
    constructor(public http:HttpClient) { }
    allI:Array<Invitation>=new Array<Invitation>()
    basicUrl:string='https://localhost:7056/api/Invitation'
    getAll():Observable<Array<Invitation>>
    {
        return this.http.get<Array<Invitation>>(`${this.basicUrl}`)
    }
    // GetAllInvitationsToTrip(id:number):Observable<Array<Invitation>> {
    //     return this.http.get<Array<Invitation>>(`${this.basicUrl}/GetAllInvitationsToTrip/${id}`)
    // }
    GetById(id:number):Observable<Invitation> {
        return this.http.get<Invitation>(`${this.basicUrl}/GetById/${id}`)
    }
    add(AInvitation:Invitation){
        return this.http.post<number>(`${this.basicUrl}`,AInvitation)
    }
    delete(id:number):Observable<boolean>{
        return this.http.delete<boolean>(`${this.basicUrl}/${id}`)
    }
  }
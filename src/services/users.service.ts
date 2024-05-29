import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invitation } from 'src/class/Invitation';
import { Trips } from 'src/class/Trips';
import { Users} from 'src/class/Users';
@Injectable({
    providedIn: 'root'
  })
export class UsersService {
    
    allUsers:Array<Users>=new Array<Users>()
    currentUser:Users=new Users()
    currentManager1:Users=new Users()
    currentManager2:Users=new Users()
    isLogin: boolean = false;
    isAdmin: boolean = false;
    addCodeUser:number=0
    constructor(public http:HttpClient) { }
    
    basicUrl:string='https://localhost:7056/api/User';
    setManag(){
        this.currentManager1.email="123@1234";
        this.currentManager1.password="1111";
        this.currentManager2.email="123@123"
        this.currentManager2.password="123"
    }
    getAll():Observable<Array<Users>>
    {
        return this.http.get<Array<Users>>(`${this.basicUrl}`)
    }
    GetByMailAndPasword(Umail:string,Upassword:string):Observable<Users> {
        return this.http.get<Users>(`${this.basicUrl}/${Umail}/${Upassword}`)
    }
    Add(user:Users):Observable<number>
    {
        console.log(user);
        user.isFirstAid==null?false:user.isFirstAid
        user.userId=0
        return this.http.post<number>('https://localhost:7056/api/User',user)
    }
    // AddUser(user: Users) {
    //     console.log(user);
    // debugger
    //     return this.http.post<number>(this.basicUrl, user).subscribe(
    //       success => { this.addCodeUser = success 
    //     debugger},
    //       error => { alert("שגיאה") }
        
    //     )
    //   }
  
    delete(id:number):Observable<boolean>{
        return this.http.delete<boolean>(`${this.basicUrl}/${id}`)
    }
    update(Auser:Users){
        return this.http.put<boolean>(`${this.basicUrl}`,Auser)
    }
    getAllTripsByUser(id:number):Observable<Array<Trips>>{
        return this.http.get<Array<Trips>>(`${this.basicUrl}/${id}`)
    }
    fill(){
        this.currentManager1=this.allUsers[1]

    }
    // log(myEmail:string,myPass:string) {
    //     if(this.GetByMailAndPasword(this.currentUser.email!,this.currentUser.password!) )
    //         this.currentUser=this.GetByMailAndPasword(this.currentUser.email!,this.currentUser.password!) 
    //     // if(this.currentUser && this.currentUser.email!=this.currentManager1.email &&
    //     //   this.currentUser.email!=this.currentManager2.email&&
    //     //   this.GetByMailAndPasword(this.currentUser.email!,this.currentUser.password!) )                       
    //     //    {this.isLogin=true }
    //     if(this.currentUser && (this.currentUser.email==this.currentManager1.email ||
    //         this.currentUser.email==this.currentManager2.email) )
    //          this.isAdmin=true      
    //   }
  }
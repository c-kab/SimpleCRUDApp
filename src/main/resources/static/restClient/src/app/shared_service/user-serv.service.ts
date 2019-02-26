import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user";


@Injectable({
  providedIn: 'root'
})
export class UserServService {
  private  baseUrl : string  = "http://localhost:8080/api" ;
  private header = new HttpHeaders({'Context-Type' :'application/json'}) ;
  private options = {
    headers: this.header
  } ;


  constructor(private _http:HttpClient) {
  }

  getUsers(){


    return this._http.get(this.baseUrl + "/users", this.options) ;
     // .pipe(map((response: Response) => response.json())) ;
      //.catchError(this.errorHandler) ;
  }

  // errorHandler(error : Response){
  //
  //   return throwError(error || "there is a nasty error") ;
  // }
  getUser(id: Number) {
   return this._http.get(this.baseUrl + '/user/' + id) ;
     //.pipe(map((response: Response) =>
    // response.json())) ;
         //.rxCatch(this.errorHandler) ;
 }
 deleteUser(id: Number) {
   return this._http.delete(this.baseUrl + '/user/' + id) ;
   // .pipe(map((response: Response) =>
   //   response.json())) ;
         //.rxCatch(this.errorHandler) ;
 }
 createUser(user: User) {
   return this._http.post(this.baseUrl + '/user', JSON.stringify(user))
     // .pipe(map((response: Response) =>
     // response.json())) ;
     //     //.rxCatch(this.errorHandler) ;
 }
 updateUser(user: User) {
   return this._http.put(this.baseUrl + '/user', JSON.stringify(user)) ;
     // .pipe(map((response: Response) => response.json())) ;
        // .rxCatch(this.errorHandler) ;
}


}

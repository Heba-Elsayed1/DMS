import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../core/auth/auth.service.service';
import { UserDto } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient , private authService: AuthServiceService) { }

  
  getUser(): Observable<UserDto>{
   return this.http.get<UserDto>('https://localhost:7163/api/User/userData') ;
  }
  

}

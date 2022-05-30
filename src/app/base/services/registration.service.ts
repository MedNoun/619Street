import { userLogin } from './../../classes/authentification/user';
import { user } from './../../classes/registration/user';
import { ApiService } from 'src/app/datafetcher/service/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private apiService : ApiService) { 

  }

  register (userRegistred : user) {
    return this.apiService.post('/auth/register', userRegistred);
  }
  login (userLogin : userLogin){
    return this.apiService.post('auth/login' , userLogin)
  }
}

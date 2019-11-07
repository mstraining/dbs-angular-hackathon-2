import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(httpClient: HttpClient) { }

  registerUser(form: {[key: string]: string}) {
  }
}

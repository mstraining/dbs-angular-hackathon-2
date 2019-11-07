import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from './shared/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly host = 'http://';

  constructor(private httpClient: HttpClient) { }

  public loginUser(): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>('http://13.234.79.198:8080/api/acemind/v1/login', {
      customerId: '123456',
      password: 'password12'
    });
  }
}

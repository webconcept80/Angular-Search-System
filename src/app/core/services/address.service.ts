import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}

  getAddresses() {
    return this.http.get(environment.apiBaseUrl + '/addresses').pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}

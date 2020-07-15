import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(environment.apiBaseUrl + '/emoloyees').pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}

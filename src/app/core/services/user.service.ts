import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(environment.apiBaseUrl + '/users').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getSecretUsers() {
    return this.http.get(environment.apiBaseUrl + '/secret');
  }
}

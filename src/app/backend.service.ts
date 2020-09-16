import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public call(endpoint: string, action: string, data: object): Promise<Object> {
    return this.http.post(environment.backend + endpoint, {'action': action, data: data}).toPromise();
  }
}

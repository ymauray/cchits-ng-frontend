import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  public loginWith(provider: string) {
    console.log("Login with ", provider);
    this.backend.call('/oauth', 'getEndpoint', {'provider': provider}).then(data => console.log(data));
  }
}

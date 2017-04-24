import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, HttpService } from '../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private hs: HttpService
  ) { }
  
  ngOnInit() {
  }
  register() {
    this.loading = true;
    this.hs.PostRequest('/api/register', this.model).subscribe(res => {
      if (!res.success) {
        this.loading = false;
         this.alertService.error(res.error);
      } else {
        this.alertService.success('Registration successful', true);
        this.loading = false;
        this.router.navigate(['/login']);
      }
    });
  }
}

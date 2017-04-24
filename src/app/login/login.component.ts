import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, HttpService } from '../services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        // private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private hs: HttpService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() { 
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/todo']);
        }
    }

    login() {
        this.loading = true;
        this.hs.PostRequest('/api/login', this.model).subscribe(res => {
            if (!res.success) {
                this.loading = false;
                this.alertService.error(res.error);
            } else {
                this.alertService.success('Login successful', true);
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                this.loading = false;
                this.router.navigate(['/todo']);
            }
        });
    }
    
}

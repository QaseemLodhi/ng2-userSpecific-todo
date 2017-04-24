/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HttpService, AlertService, AuthGuard } from './services/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent, TodoComponent, LoginComponent, RegisterComponent, AlertComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,
    /**
     * using routes
     */
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpService,
    AlertService,
    AuthGuard
  ]
})
export class AppModule {

}

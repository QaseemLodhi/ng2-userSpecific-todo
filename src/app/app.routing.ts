import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/authGuard.service';


export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'todo', component: TodoComponent, canActivate:[AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

// export const routing = RouterModule.forRoot(appRoutes);
// export appRoutes;
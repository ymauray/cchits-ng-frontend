import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { ImportComponent } from './admin/import/import.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: '', pathMatch: 'full', component: ImportComponent}
  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

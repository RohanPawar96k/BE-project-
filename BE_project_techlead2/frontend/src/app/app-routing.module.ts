// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobinternshipComponent } from './jobinternship/jobinternship.component';
import { HomeComponent } from './home/home.component';
import { JobcarouselComponent } from './jobcarousel/jobcarousel.component';
import { ResumeuploadComponent } from './resumeupload/resumeupload.component';
import { AlreadyappliedComponent } from './alreadyapplied/alreadyapplied.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'jobinternship',component:JobinternshipComponent},
  {path:'jobcarousel',component:JobcarouselComponent},
  {path:'resumeupload',component:ResumeuploadComponent},
  {path:'alreadyapplied',component:AlreadyappliedComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
    
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobinternshipComponent } from './jobinternship/jobinternship.component';
import { FooterComponent } from './footer/footer.component';
import { JobcarouselComponent } from './jobcarousel/jobcarousel.component';
import { ResumeuploadComponent } from './resumeupload/resumeupload.component';
import { AlreadyappliedComponent } from './alreadyapplied/alreadyapplied.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    JobinternshipComponent,
    FooterComponent,
    JobcarouselComponent,
    ResumeuploadComponent,
    AlreadyappliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  
  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient) 
  {
  }
  ngOnInit(): void
  {

  }
  
  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8086/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
        location.href="/login"
    });
  }
  save()
  {
    this.register();
  }
}

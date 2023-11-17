import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class JobcardService {

  constructor() { }
 
  public companyName:string="";
  public description:string="";
}

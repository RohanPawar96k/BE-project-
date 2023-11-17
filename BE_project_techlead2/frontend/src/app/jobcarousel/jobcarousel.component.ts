import { Component, OnInit} from '@angular/core';
import { JobcardService } from '../services/jobcard.service';

@Component({
  selector: 'app-jobcarousel',
  templateUrl: './jobcarousel.component.html',
  styleUrls: ['./jobcarousel.component.css']
})
export class JobcarouselComponent implements OnInit{
  constructor(public _jobCard: JobcardService)
  {}
  public btnClick(compnayname,jobdescription){
      this._jobCard.companyName= compnayname.value;
      this._jobCard.description = jobdescription.value;
  }

 ngOnInit(): void {
     
 }
}

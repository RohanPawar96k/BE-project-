import { Component, OnInit } from '@angular/core';
import { JobcardService } from '../services/jobcard.service';

@Component({
  selector: 'app-alreadyapplied',
  templateUrl: './alreadyapplied.component.html',
  styleUrls: ['./alreadyapplied.component.css']
})
export class AlreadyappliedComponent implements OnInit{
  constructor(public _jobCard: JobcardService)
  {}
ngOnInit(): void {
    
}
}

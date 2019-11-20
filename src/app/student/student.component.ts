import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students :any;
  constructor( public service:DataService) { 
    this.getdata();
  }

  getdata()
  {
    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.students=res;
    })
  }

  ngOnInit() {
  }

}

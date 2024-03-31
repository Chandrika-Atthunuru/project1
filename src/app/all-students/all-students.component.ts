import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
public studentsdata:any=[];
public queries:any={
  filter :"",
  pageno:0,
  limit:5,
  sortby:0,
  order:""
}
query(){
  this._studentsService.loaddata(this.queries).subscribe(
    (data:any)=>{
      this.studentsdata=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
constructor(private _studentsService:StudentsService){
  _studentsService.getstudents().subscribe(
    (data:any)=>{
      this.studentsdata=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
delete(id:string){
this._studentsService.deletestudents(id).subscribe(
  (data:any)=>{
   alert('deleted sucessfully');
  location.reload();
  },
  (err:any)=>{
    alert('internal server error')
  }
)
}
}


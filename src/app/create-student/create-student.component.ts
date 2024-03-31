import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreateStudentService } from '../create-student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
   public studentform:FormGroup=new FormGroup({
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      mandal:new FormControl(),
      district:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    education:new FormArray([]),
    company:new FormGroup({
      name:new FormControl(),
      location:new FormControl(),
      package:new FormControl(),
      offerDate:new FormControl(),
    }),
    sourcetype:new FormControl(),
   })

   constructor(private _createStudentService:CreateStudentService){
    this.studentform.get('sourcetype')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='direct'){
        this.studentform.addControl('sourceform' ,new FormControl());

        this.studentform.removeControl("referralname");
        }
        else{
          this.studentform.addControl("referralname",new FormControl());
          this.studentform.removeControl("sourceform");
        }
      }
    )
  }
   submit(){
    this._createStudentService.poststudents(this.studentform.value).subscribe(
    (data:any)=>{
      alert("created successfully");
      this.studentform.reset();
    },
    (err:any)=>{
      alert("internal server error")
    }
    )
    console.log(this.studentform.value)
   }
   get educationFormArray(){
    return this.studentform.get("education")as FormArray
   }
   add(){
     this.educationFormArray.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
     )
   }
   delete(i:number){
    this.educationFormArray.removeAt (i);
   }
}

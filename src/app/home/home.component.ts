import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Employee } from '../Models/employee';
import { LeaveApprovalService } from '../Services/leave-approval.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('search')
  elem!: ElementRef;
  emp: any=0;
  loading:boolean=false;
  x:any
  test:any

  constructor( private leaveservice:LeaveApprovalService,private router:Router) { }

  ngOnInit(): void {

  }
  searchEmployee(search:HTMLInputElement){


    if(search.value===''){
      alert("You must have an input")

    }
    else{
      this.leaveservice.getEmployee(search).then(()=>{

        this.emp=this.leaveservice.displayEmployee()

        sessionStorage.setItem("employeeDetails",JSON.stringify(this.emp) )


        if(this.emp!=null){
            this.router.navigate(['/apply-for-leave'])
        }


        })




    this.elem.nativeElement.value=''
    }



  }

}

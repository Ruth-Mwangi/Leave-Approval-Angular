import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../Models/employee';
import { Leave } from '../Models/leave';
import { LeaveApprovalService } from '../Services/leave-approval.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  employeeDetailsSession:any=sessionStorage.getItem("employeeDetails")

  employee=JSON.parse(this.employeeDetailsSession) as Employee.EmployeeDetails
  remainingDays:any;
  percentageRemaining:number=0
  progressColor:any
  employeeRequests:any
  leaveTypes:any
  leaveSelected:any
  x:string=""
  newRequest=new Leave.LeaveRequest(0,"","",0,0,"")

  constructor(private leaveservice:LeaveApprovalService) { }

  ngOnInit(): void {
    this.leaveservice.getEmployeeRequests(this.employee.employeeId,null).then(()=>{
      this.employeeRequests=this.leaveservice.displayEmployeeRequests()
      

    })

    this.leaveservice.getLeaveTypes().then(()=>{
      this.leaveTypes=this.leaveservice.displayLeaveTypes()

    })

  }
  sortRequests(status:any){
    this.leaveservice.getEmployeeRequests(this.employee.employeeId,status).then(()=>{
      this.employeeRequests=this.leaveservice.displayEmployeeRequests()
      // alert(this.employeeRequests.employeeName)
      if(this.leaveservice.displayEmployeeRequests()===null){
        this.employeeRequests=""
        // alert("oohhhhnnnnnnoooo")

      }


    })
  }

  downloadLeave(leaveId:any){
    this.leaveservice.downloadLeave(this.employee.employeeId,leaveId).then(()=>{

    })
  }

  checkRemainingLeaveDays(id:any,name:any,days:any){
    this.leaveservice.getRemainingLeaveDays(this.employee.employeeId,id,name,days).then(()=>{
      this.remainingDays=this.leaveservice.displayRemainingLeaveDays()
      this.percentageRemaining=100-(this.remainingDays/24)*100
      this.leaveSelected=name
      this.percentageRemaining=((days-this.remainingDays)/days)*100;
      var p=<HTMLElement> document.getElementById('p')
      p.style.width=this.percentageRemaining.toString()+"%"

    })

  }

  onSubmit(form:NgForm){

    var check=this.newRequest
    this.x=(<HTMLInputElement>document.getElementById('employeeId')).value
    alert(this.x)
    
    let no=Number(this.newRequest.approverId)
    alert(typeof(no))
    this.newRequest.employeeId=this.x
    this.newRequest.approverId=Number(this.newRequest.approverId)
    this.newRequest.leaveTypeId=Number(this.newRequest.leaveTypeId)
    this.leaveservice.sendLeaveRequest(this.newRequest).subscribe(data => 
      {console.log(data);form.resetForm();window.location.reload()}
    , error => console.log(error))
      form.resetForm()
     

  }

}

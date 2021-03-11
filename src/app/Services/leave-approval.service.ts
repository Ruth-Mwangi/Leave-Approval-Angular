import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  environment
} from 'src/environments/environment';
import {
  Employee
} from '../Models/employee';
import {
  Leave
} from '../Models/leave';
import {
  LeaveType
} from '../Models/leave-type';

@Injectable({
  providedIn: 'root'
})
export class LeaveApprovalService {
  leave: any;
  leaveTypes: any;
  employee: any;
  employeeRequests:any
  remainingDays:any


  constructor(private http: HttpClient) {


    this.leaveTypes = new LeaveType();

  }

  getEmployee(id: HTMLInputElement) {
    let endpoint = (environment.baseUrl + environment.getEmployeeEndpoint + id.value);
    interface ApiResponse {
      address: string;
      department: string;
      employeeId: string;
      employeeName: string;
      fname: string;
      gender: string;
      lname: string;
      request: Request;
      requests: Request[];
      station: string;
      telephone: string;
      title: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get(endpoint).toPromise().then(response => {
        this.employee = response;
        console.log(response)
        resolve('done');
      }, error => {
        reject(error)
      })
    })
    return promise
  }
  displayEmployee(){
    return this.employee
  }
  getRemainingLeaveDays(id: any,leaveId: any,leaveName: any,leaveDays: any) {
    let endpoint = (environment.baseUrl + environment.getRemainingLeaveDaysEndpoint+id+"?leaveId="+leaveId+"&leaveName="+leaveName+"&leaveDays="+leaveDays);

    let promise = new Promise((resolve, reject) => {
      this.http.get(endpoint).toPromise().then(response => {
        this.remainingDays = response;
        console.log(response)
        resolve('done');
      }, error => {
        reject(error)
      })
    })
    return promise
  }
  displayRemainingLeaveDays(){
    return this.remainingDays
  }

  getEmployeeRequests(id: any,status:any) {
     let endpoint: string
    if(status==null){
      endpoint = (environment.baseUrl + environment.getEmployeeRequestsEndpoint+id);
    }
    else{
      endpoint = (environment.baseUrl + environment.getEmployeeRequestsEndpoint+id+"?status="+status);
    }


    let promise = new Promise((resolve, reject) => {
      this.http.get(endpoint).toPromise().then(response => {
        this.employeeRequests = response;
        console.log(response)
        resolve('done');
      }, error => {
        reject(error)
      })
    })
    return promise
  }
  displayEmployeeRequests(){
    return this.employeeRequests
  }

  downloadLeave(employeeId: any,leaveId:any) {

      let endpoint = (environment.baseUrl + environment.downloadLeaveEndpoint+"?employeeId="+employeeId+"&leaveId="+leaveId);



    let promise = new Promise((resolve, reject) => {
      this.http.get(endpoint,{responseType:'blob'}).toPromise().then(response => {
        console.log(response)

        resolve('done');
      }, error => {
        reject(error)
      })
    })
    return promise
  }

  getLeaveTypes() {
    let endpoint = (environment.baseUrl + environment.getLeaveTypesEndpoint);

    let promise = new Promise((resolve, reject) => {
      this.http.get(endpoint).toPromise().then(response => {
        this.leaveTypes = response;
        console.log(response)
        resolve('done');
      }, error => {
        reject(error)
      })
    })
    return promise
  }
  displayLeaveTypes(){
    return this.leaveTypes
  }
  sendLeaveRequest(request:object):Observable<object> {
    let endpoint = (environment.baseUrl + environment.sendLeaveRequestEndpoint);
               
    
     return this.http.post(endpoint,request )
  }

}

export namespace Employee {
  export class EmployeeDetails implements EmployeeDetailsInterface {
    address !: string;
    department !: string;
    employeeId !: string;
    employeeName !: string;
    gender !: string;
    lname !: string;
    request !: Request;
    requests !: Request[];
    station !: string;
    telephone !: string;
    title !: string;
    fname !: string;
  }

  export class EmployeeRequests implements Partial<EmployeeDetailsInterface> {
    address!: string;
    department!: string;
    employeeId!: string;
    employeeName!: string;

    requests!: Request[];
    station!: string;
    telephone!: string;

  }
}



export interface EmployeeDetailsInterface {
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

export interface Request {
  approverId: number;
  approverName: string;
  dateApproved: string;
  dateCreated: string;
  employee: Employee;
  employeeId: string;
  endDate: string;
  id: number;
  leaveName: string;
  leaveType: LeaveType;
  leaveTypeId: number;
  remarks: string;
  requestedDays: number;
  startDate: string;
  status: number;
}

export interface Employee {}

export interface LeaveType {
  days: number;
  id: number;
  leaveDescription: string;
  name: string;
}

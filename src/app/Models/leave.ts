
export namespace Leave{
  export class LeaveRequest implements Partial<RequestDetails> {

    constructor(
      approverId: number,

    employeeId: string,
    endDate: string,

    leaveTypeId: number,

    requestedDays: number,
    startDate: string){

    }
    approverId!: number;

    employeeId!: string;
    endDate!: string;

    leaveTypeId!: number;

    requestedDays!: number;
    startDate!: string;

}
}
export interface RequestDetails {
    approverId:    number;
    approverName:  string;
    dateApproved:  string;
    dateCreated:   string;
    employee:      Employee;
    employeeId:    string;
    endDate:       string;
    id:            number;
    leaveName:     string;
    leaveType:     LeaveType;
    leaveTypeId:   number;
    remarks:       string;
    requestedDays: number;
    startDate:     string;
    status:        number;
}

export interface Employee {
    address:      string;
    department:   string;
    employeeId:   string;
    employeeName: string;
    fname:        string;
    gender:       string;
    lname:        string;
    request:      Request;
    requests:     Request[];
    station:      string;
    telephone:    string;
    title:        string;
}

export interface Request {
}

export interface LeaveType {
    days:             number;
    id:               number;
    leaveDescription: string;
    name:             string;
}


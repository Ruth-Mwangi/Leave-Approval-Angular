
export class LeaveType implements LeaveTypes {
  days!: number;
  id!: number;
  leaveDescription!: string;
  name!: string;
}

export interface LeaveTypes {
    days:             number;
    id:               number;
    leaveDescription: string;
    name:             string;
}


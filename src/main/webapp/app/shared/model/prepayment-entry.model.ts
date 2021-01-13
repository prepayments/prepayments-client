import { Moment } from 'moment';

export interface IPrepaymentEntry {
  id?: number;
  accountName?: string;
  description?: string;
  accountNumber?: string;
  prepaymentNumber?: string;
  prepaymentDate?: Moment;
  transactionAmount?: number;
}

export class PrepaymentEntry implements IPrepaymentEntry {
  constructor(
    public id?: number,
    public accountName?: string,
    public description?: string,
    public accountNumber?: string,
    public prepaymentNumber?: string,
    public prepaymentDate?: Moment,
    public transactionAmount?: number
  ) {}
}

import { Moment } from 'moment';

export interface IAmortizationEntry {
  id?: number;
  accountName?: string;
  description?: string;
  accountNumber?: string;
  expenseAccountNumber?: string;
  prepaymentNumber?: string;
  prepaymentDate?: Moment;
  transactionAmount?: number;
  amortizationDate?: Moment;
}

export class AmortizationEntry implements IAmortizationEntry {
  constructor(
    public id?: number,
    public accountName?: string,
    public description?: string,
    public accountNumber?: string,
    public expenseAccountNumber?: string,
    public prepaymentNumber?: string,
    public prepaymentDate?: Moment,
    public transactionAmount?: number,
    public amortizationDate?: Moment
  ) {}
}

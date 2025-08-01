export interface IExchangeRate {
  exchange: string;
  value: string;
  dateValue: string;
  registeredAt: string;
}

export interface IExchangeRateResponse {
  success: boolean;
  data: IExchangeRate;
  timestamp: string;
}

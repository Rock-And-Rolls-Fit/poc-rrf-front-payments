import type { IExchangeRate } from "./ExchangeRate";

export interface IProducts {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  price: number;
  priceExchange: number;
}

export interface IProductsResponse {
  products: IProducts[];
  exchangeInfo: IExchangeRate;
}

export const API_URL = import.meta.env.PUBLIC_API_URL;
export const LOCAL_API_URL = import.meta.env.PUBLIC_LOCAL_API_URL;
export const EXCHANGE_API_URL = import.meta.env.PUBLIC_EXCHANGE_API_URL;

export const ROUTES = {
  CREATE_LINK: `${API_URL}/payment/create-link`,
  SEND_PAYMENT_BUTTON_PAY: `${API_URL}/button-pay/send-payment`,
  GET_PAYMENT: (order: string, reference: string) =>
    `${API_URL}/payment/transaction/${order}/${reference}`,
  SEND_PAYMENT_CONFIRMATION: `${API_URL}/payment-confirmation/send-confirmation`,
  GET_EXCHANGE_RATE: `${EXCHANGE_API_URL}/api/rate`,
};

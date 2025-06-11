export const API_URL = import.meta.env.PUBLIC_API_URL;
export const LOCAL_API_URL = import.meta.env.PUBLIC_LOCAL_API_URL;

export const routes = {
  CREATE_LINK: `${API_URL}/payment/create-link`,
  SEND_PAYMENT_BUTTON_PAY: `${API_URL}/button-pay/send-payment`,
  GET_PAYMENT: (order: string, reference: string) =>
    `${API_URL}/payment/transaction/${order}/${reference}`,
};

export const API_URL = import.meta.env.PUBLIC_PAYMENT_SERVICE;

export const routes = {
  CREATE_LINK: `${API_URL}/payment/create-link`,
  SEND_PAYMENT_BUTTON_PAY: `${API_URL}/button-pay/send-payment`,
};

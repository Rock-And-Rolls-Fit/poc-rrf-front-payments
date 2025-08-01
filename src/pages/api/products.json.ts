import type { IProducts } from "@/interfaces";
import type { APIRoute } from "astro";
import { ROUTES } from "@/constants/routes";
import type { IExchangeRateResponse } from "@/interfaces";

export const GET: APIRoute = async () => {
  const response = await fetch(ROUTES.GET_EXCHANGE_RATE);
  const { data } = (await response.json()) as IExchangeRateResponse;

  const amountExchange = Number(data.value);

  const products: IProducts[] = [
    {
      id: "rock-1",
      title: "Rock",
      subtitle: "$5 inscripción $25 por mes",
      content: [
        "Plan de alimentación.",
        "Entrenamiento personalizado.",
        "Sin limites de horarios.",
      ],
      price: 30,
      priceExchange: Number((30 * amountExchange).toFixed(2)),
    },
    {
      id: "rock-multi",
      title: "Multi Rock",
      subtitle: "$5 inscripción $35 por mes",
      content: [
        "Acceso a todas las sedes.",
        "Plan de alimentación.",
        "Entrenamiento personalizado.",
        "Sin limites de horarios.",
      ],
      price: 40,
      priceExchange: Number((40 * amountExchange).toFixed(2)),
    },
    {
      id: "rock-parking",
      title: "Parking Rock",
      subtitle: "$5 inscripción $45 por mes",
      content: [
        "Estacionamiento.",
        "Plan de alimentación.",
        "Entrenamiento personalizado.",
        "Sin limites de horarios.",
      ],
      price: 50,
      priceExchange: Number((50 * amountExchange).toFixed(2)),
    },
  ];

  return new Response(
    JSON.stringify({
      products,
      exchangeInfo: {
        exchange: data.exchange,
        value: data.value,
        dateValue: data.dateValue,
      },
    })
  );
};

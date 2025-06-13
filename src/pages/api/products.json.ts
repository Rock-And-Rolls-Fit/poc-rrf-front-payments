import type { IProducts } from "@/interfaces";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
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
    },
  ];

  return new Response(JSON.stringify(products));
};

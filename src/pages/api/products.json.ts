import type { IProducts } from "@/interfaces";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const products: IProducts[] = [
    {
      id: "rock-1",
      title: "Rock",
      subtitle: "$5 inscription $25 per month",
      content: ["Meal plan.", "Customized training.", "Unlimited hours."],
      price: 30,
    },
    {
      id: "rock-multi",
      title: "Multi Rock",
      subtitle: "$5 inscription $35 per month",
      content: [
        "Access to all GYM Rocks.",
        "Meal plan.",
        "Customized training.",
        "Unlimited hours.",
      ],
      price: 40,
    },
    {
      id: "rock-parking",
      title: "Parking Rock",
      subtitle: "$5 inscription $45 per month",
      content: [
        "Parking for your car.",
        "Meal plan.",
        "Customized training.",
        "Unlimited hours.",
      ],
      price: 50,
    },
  ];

  return new Response(JSON.stringify(products));
};

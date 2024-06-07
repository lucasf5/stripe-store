import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_KEY!, {
  apiVersion: "2024-04-10",
  appInfo: {
    name: "Ignite Shop",
    version: "0.1.0",
  },
});

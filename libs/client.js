import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "train-blog",
  apiKey: process.env.API_KEY,
});

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "0a7bkf8b",
  dataset: "production",
  apiVersion: "2022-01-01",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Tworzenie obiektu imageUrlBuilder
const imageBuilder = imageUrlBuilder(client);

// Funkcja do tworzenia URL obrazów Sanity
function imageUrlFor(source) {
  return imageBuilder.image(source);
}

export { client, imageUrlFor };

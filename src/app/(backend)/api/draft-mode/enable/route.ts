import { token } from "@/sanity/config/sanity-api";
import { client } from "@/sanity/config/sanity-client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
});
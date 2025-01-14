import { token } from "@/sanity/lib/sanity-api";
import { client } from "@/sanity/lib/sanity-client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
});
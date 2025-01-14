import { defineLive } from "next-sanity";
import { client } from "./sanity-client";
import { token } from "./sanity-api";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
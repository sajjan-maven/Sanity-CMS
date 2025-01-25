"use server"
import { client } from "./client";
import { REDIRECTS_QUERY } from "./queries/misc";

export async function fetchRedirects() {
  return client.fetch(REDIRECTS_QUERY);
}
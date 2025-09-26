"use server";

import { getCharacterFromSearch } from "@/queries";
import { Character } from "@/types";

export async function getCharacterAction(
  mediaId: number,
  search: string
): Promise<Character[]> {
  return getCharacterFromSearch(mediaId, search);
}

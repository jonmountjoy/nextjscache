import { cache } from 'react';
// import { unstable_cache as cache } from 'next/cache';

let mypretend = new Map<string, string>();

export const getDataForCard = cache(async (id: string) => {
  console.log('>>>>>IN cached getDataForCard', id);
  // Imagine an expensive database operation here that I'd like to avoid
  // repeating more than once
  const cardData = { id: id };
  mypretend.set(id, id);
  console.log(mypretend);
  return cardData;
});

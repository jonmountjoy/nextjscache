import { getDataForCard } from '@/app/lib/database';
import { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 43200; // # of seconds to wait before revalidation.  Here we wait half a day.

type Props = {
  params: { cardid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.cardid;
  console.log(`IN card/[cardid]/page generateMetadata for ${id}`);
  const cardData = await getDataForCard(params.cardid);

  const title = cardData?.id.concat(' - Woohoo');
  return {
    title: title,
  };
}

export default async function Page({ params }: { params: { cardid: string } }) {
  console.log('IN card/[cardid]/page pate.tsx with ', params);
  const cardData = await getDataForCard(params.cardid);
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2>
        In Card {params.cardid} and data = {cardData.id}
      </h2>
    </main>
  );
}

export async function generateStaticParams() {
  console.log('\nIN card/[cardid]/page generateStaticParams');
  const cards = ['0', '1', '2', '3', '4'];
  let result: { cardid: string }[] = [];
  for (var deckP of cards) {
    result.push({ cardid: deckP });
    console.log(`>>> Generating static of ${deckP} `);
  }

  return result;
}

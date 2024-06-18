import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link href={'/card/1'}>Card 1</Link>
      <Link href={'/card/2'}>Card 2</Link>
      <Link href={'/card/3'}>Card 3</Link>
      <Link href={'/card/33'}>Card 33</Link>
    </main>
  );
}

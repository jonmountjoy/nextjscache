The result of running `npm run build` is below.

It's unclear how to cache `getDataForCard` - it gets called multiple times for each page.

```
> next build

  ▲ Next.js 14.2.4

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  .
IN card/[cardid]/page generateStaticParams
   Collecting page data  ..>>> Generating static of 0
>>> Generating static of 1
>>> Generating static of 2
>>> Generating static of 3
>>> Generating static of 4
 ✓ Collecting page data
   Generating static pages (0/10)  [    ]IN card/[cardid]/page pate.tsx with  { cardid: '4' }
>>>>>IN cached getDataForCard 4
Map(1) { '4' => '4' }
IN card/[cardid]/page generateMetadata for 4
IN card/[cardid]/page pate.tsx with  { cardid: '4' }
>>>>>IN cached getDataForCard 4
Map(1) { '4' => '4' }
IN card/[cardid]/page pate.tsx with  { cardid: '3' }
>>>>>IN cached getDataForCard 3
Map(1) { '3' => '3' }
IN card/[cardid]/page generateMetadata for 4
IN card/[cardid]/page pate.tsx with  { cardid: '2' }
>>>>>IN cached getDataForCard 2
Map(1) { '2' => '2' }
IN card/[cardid]/page generateMetadata for 2
IN card/[cardid]/page pate.tsx with  { cardid: '2' }
>>>>>IN cached getDataForCard 2
Map(1) { '2' => '2' }
IN card/[cardid]/page generateMetadata for 2
IN card/[cardid]/page generateMetadata for 3
IN card/[cardid]/page pate.tsx with  { cardid: '3' }
>>>>>IN cached getDataForCard 3
Map(1) { '3' => '3' }
IN card/[cardid]/page generateMetadata for 3
IN card/[cardid]/page pate.tsx with  { cardid: '1' }
>>>>>IN cached getDataForCard 1
Map(1) { '1' => '1' }
IN card/[cardid]/page generateMetadata for 1
IN card/[cardid]/page pate.tsx with  { cardid: '1' }
>>>>>IN cached getDataForCard 1
Map(1) { '1' => '1' }
IN card/[cardid]/page generateMetadata for 1
IN card/[cardid]/page pate.tsx with  { cardid: '0' }
>>>>>IN cached getDataForCard 0
Map(1) { '0' => '0' }
IN card/[cardid]/page generateMetadata for 0
IN card/[cardid]/page pate.tsx with  { cardid: '0' }
>>>>>IN cached getDataForCard 0
Map(1) { '0' => '0' }
IN card/[cardid]/page generateMetadata for 0
 ✓ Generating static pages (10/10)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    6.94 kB          94 kB
├ ○ /_not-found                          875 B          87.9 kB
└ ● /card/[cardid]                       136 B          87.2 kB
    ├ /card/0
    ├ /card/1
    ├ /card/2
    └ [+2 more paths]
+ First Load JS shared by all            87 kB
  ├ chunks/23-ef3c75ca91144cad.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.7 kB
  └ other shared chunks (total)          1.85 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)
```

import CategoryNav from '@/components/nav/category-nav';
import { getMenuQuery } from '@/lib/shopify/queries/menu';
import { shopifyClient } from '@/lib/shopify/shopify-client';

export default async function Home() {
  const result = await shopifyClient.request(getMenuQuery, {
    variables: {
      handle: "categories-menu",
    },
  });

  return (
    <main className="min-h-dvh container mx-auto mt-16">
      <div className='pt-4'>
        <CategoryNav
          menuData={result}
          isOpenCategory
          hasOverlay={false}
          inHeader={false}
        />
        HomeSlider
      </div>
    </main>
  );
}

import Sort from '@/components/Sort';
import Products from '@/components/Products';
import { productsAction } from '@/app/actions/products';

export default async function Home() {
  const res = await productsAction();
  console.log('------log------', res);
  return (
    <div className="container flex py-6 ">
      <Sort></Sort>
      <Products data={res.data} />
    </div>
  );
}

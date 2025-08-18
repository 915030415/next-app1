// 'use server' 指令用于标记服务器端组件或函数
// 在 Next.js 中,添加这个指令表示该文件中的所有函数都将在服务器端执行
// 这样可以安全地访问数据库等服务器资源,而不会暴露敏感信息到客户端
'use server';

import db from '@/lib/db';

import { Product, ProductsAction, ProductAction } from '@/types/global';

export async function productsAction(): Promise<ProductsAction> {
  const result = (await db('SELECT * FROM products')) as Product[];
  return {
    status: 200,
    body: 'get products success',
    data: result,
  };
}

export async function productAction(id: number): Promise<ProductAction> {
  const result = (await db('SELECT * FROM products WHERE id = $1', [id])) as Product[];
  return {
    status: 200,
    body: 'get product success',
    data: result[0],
  };
}

import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-16 px-0  bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl">
          <Link href="/">Store</Link>
        </h1>
        <div className="flex justify-end space-x-4 text-sm">
          <Link href="/search">search</Link>
          <Link href="/account">account</Link>
          <Link href="/card">card</Link>
        </div>
      </div>
    </div>
  );
}

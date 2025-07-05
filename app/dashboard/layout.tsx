import { ReactNode } from 'react';
import { Button } from '../../components/ui/button'

import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-4 bg-background shadow">
          <Link href="/" className="font-bold text-lg">Chain of Mind</Link>
          <Button asChild>
            <a href="https://github.com/YOUR_USER/chain_of_mind" target="_blank">⭐ Star</a>
          </Button>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

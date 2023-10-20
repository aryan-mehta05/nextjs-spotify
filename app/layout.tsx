import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Player from '@/components/Player';
import Sidebar from '@/components/Sidebar';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';

import './globals.css';

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify || Aryan Mehta',
  description: 'Listen to your favourite music on this Nextjs13 Spotify clone!',
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
};

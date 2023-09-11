import './globals.scss'
import type { Metadata } from 'next'
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Provider from '@/app/provider';

export const metadata: Metadata = {
  title: 'Next13 Performance test',
  description: 'Generated by create next app',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
            <div className='page'>
                <Provider>
                    {children}
                </Provider>
            </div>
        <Footer/>
      </body>
    </html>
  )
}

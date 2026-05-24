import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BRAIV Lab | Brain Aging & Vascular Biology Laboratory',
  description: 'The Brain Aging and Vascular Biology Lab (BRAIV Lab) investigates molecular mechanisms of brain aging, neurovascular breakdown, and neurodegenerative disease to identify potential therapeutic targets.',
  keywords: 'neuroscience, brain aging, neurovascular biology, white matter injury, dementia, Alzheimer\'s disease, ferroptosis, glial biology, research lab',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

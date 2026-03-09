import type { Metadata } from 'next';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export const metadata: Metadata = {
  title: 'FATECSP Bulldogs',
  description: 'Site oficial da Atlética FATECSP Bulldogs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

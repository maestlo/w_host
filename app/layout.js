
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '나의 포트폴리오 - Next.js',
  description: 'Next.js + Vercel + Cloudflare 로 구축된 애플파이 창고형 매장 웹사이트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-white font-bold text-xl">MyPortfolio</span>
            <div className="flex gap-6">
              {['홈', '소개', '프로젝트', '연락처'].map((item, i) => (
                <a key={i} href={['/', '/about', '/projects', '/contact'][i]}
                   className="text-slate-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-slate-900 text-slate-400 text-center py-8">
          <p>Built with Next.js + Vercel + Cloudflare</p>
        </footer>
      </body>
    </html>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700">
      <section className="flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            안녕하세요! 👋
          </h1>
          <p className="text-2xl text-slate-300 mb-8">
            Next.js + Vercel + Cloudflare 로 구축된 웹 사이트입니다
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/about" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold">
              소개 보기
            </a>
            <a href="/contact" className="border border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 text-lg">
              연락하기
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Next.js 14', desc: 'App Router 기반 풀스택 React 프레임워크', icon: '⚡' },
              { title: 'Vercel', desc: '자동 CI/CD 및 글로벌 엣지 배포 플랫폼', icon: '🚀' },
              { title: 'Cloudflare', desc: 'CDN, WAF, DDoS 방어 및 무료 SSL', icon: '🛡️' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-700 rounded-2xl p-8 hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
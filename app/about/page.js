export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">소개</h1>
        <div className="bg-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">안녕하세요!</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Next.js, React, Node.js를 활용하여 웹 애플리케이션을 개발합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill, i) => (
              <div key={i} className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-center text-blue-400 font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
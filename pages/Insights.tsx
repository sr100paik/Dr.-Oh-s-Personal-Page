
import React, { useState } from 'react';
import { generateManagementInsight } from '../services/geminiService';

const Insights: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [concern, setConcern] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!industry || !concern) return;
    setLoading(true);
    const insight = await generateManagementInsight(industry, concern);
    setResult(insight);
    setLoading(false);
  };

  return (
    <div className="animate-in fade-in duration-700 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 border-b border-white/5 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold serif mb-6">경영 <span className="text-gold">인사이트</span></h1>
          <p className="text-xl text-white/60 leading-relaxed">
            오 박사의 철학과 방법론을 통해 기업의 근본적인 체력을 강화하십시오.
            경영자가 갖춰야 할 시대를 관통하는 통찰을 제공합니다.
          </p>
        </div>
      </div>

      {/* AI Insight Generator */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-navy border border-gold/30 rounded-lg p-10 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold serif">오 박사 AI 경영 어드바이저</h2>
              <p className="text-sm text-white/40">Dr. Oh's logic-based insight generator (Powered by Gemini)</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-white/70 mb-2 uppercase tracking-widest">Industry (산업 분야)</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="예: 핀테크, 바이오, 전통 제조, IT 스타트업 등"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white/70 mb-2 uppercase tracking-widest">Current Concern (경영 고민)</label>
              <textarea 
                rows={4}
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                placeholder="예: 신규 시장 진출 전략, 핵심 인재 유출 방지, 조직 내 소통 부재 등"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold"
              ></textarea>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full bg-gold text-navy font-bold py-4 rounded-sm transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-500 hover:scale-[1.02]'}`}
            >
              {loading ? '통찰력 생성 중...' : '오 박사의 조언 요청하기'}
            </button>
          </div>

          {result && (
            <div className="mt-12 p-8 bg-white/5 border-l-4 border-gold animate-in slide-in-from-top-4 duration-500">
              <h3 className="text-xl font-bold text-gold mb-6 serif">오 박사의 통찰 리포트</h3>
              <div className="text-white/80 leading-loose whitespace-pre-wrap text-lg">
                {result}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold serif mb-12">핵심 경영 철학</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "데이터와 직관의 황금 비율", 
                content: "완벽한 데이터는 없습니다. 70%의 근거와 30%의 결단이 위대한 리더를 만듭니다." 
              },
              { 
                title: "인본주의적 구조조정", 
                content: "조직 효율화는 사람을 자르는 것이 아니라, 사람의 가치를 재배치하는 것에서 시작됩니다." 
              },
              { 
                title: "투명한 거버넌스의 가치", 
                content: "상장 이후의 지속 가능한 성장은 숨길 것 없는 투명한 시스템에서만 가능합니다." 
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-xs text-gold font-bold uppercase tracking-widest">Methodology {i+1}</div>
                <h3 className="text-2xl font-bold serif">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;

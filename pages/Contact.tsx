
import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    // 제공된 Web3Forms API Key 사용
    formData.append("access_key", "4ea2fdac-800e-42a9-931b-2c1b4a65f956");
    formData.append("subject", `[VIP 상담 신청] ${formData.get("name")} - ${formData.get("company")}`);
    formData.append("from_name", "Pro OH 웹사이트 알림");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 border-b border-white/5 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold serif mb-6">VIP <span className="text-gold">상담 신청</span></h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          유니콘/데카콘으로 성장을 원하는 기업을 위한 특별 진단입니다. <br />
          모든 신청 정보는 Pro OH 컨설팅의 엄격한 보안 규정에 의해 보호됩니다.
        </p>
      </div>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="bg-navy border border-white/10 p-12 rounded-sm space-y-10 shadow-2xl relative"
        >
          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Name</label>
              <input 
                name="name"
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" 
                placeholder="성함" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Job Title</label>
              <input 
                name="job_title"
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" 
                placeholder="직함 (예: CEO)" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Company</label>
              <input 
                name="company"
                required
                type="text" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" 
                placeholder="회사명" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Phone</label>
              <input 
                name="phone"
                required
                type="tel" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" 
                placeholder="연락처 (핸드폰)" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gold font-bold uppercase tracking-widest">Inquiry Type</label>
            <select 
              name="inquiry_type"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors appearance-none text-white/80"
            >
              <option className="bg-navy" value="유니콘/데카콘 성장 로드맵">유니콘/데카콘 성장 로드맵 자문</option>
              <option className="bg-navy" value="국내외 투자 유치 및 펀딩 설계">국내외 투자 유치 및 펀딩 설계</option>
              <option className="bg-navy" value="국내 IPO 및 나스닥 상장">국내 IPO 및 나스닥(NASDAQ) 상장 자문</option>
              <option className="bg-navy" value="리스크 해지">리스크 해지 (법률/주주 분쟁/지분 관리)</option>
              <option className="bg-navy" value="AI 투자심사 대응">AI 투자심사 대응 솔루션 문의</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gold font-bold uppercase tracking-widest">Current Challenge</label>
            <textarea 
              name="message"
              required
              rows={6} 
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" 
              placeholder="기업의 현재 상황과 해결하고자 하는 핵심 Pain Point를 적어주세요."
            ></textarea>
          </div>

          <div className="p-6 bg-gold/5 border border-gold/20 rounded-sm">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              <span className="text-sm font-bold text-gold uppercase tracking-widest">보안 및 비밀 유지 서약</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              본 신청 양식을 통해 제공되는 모든 기밀 정보는 Pro OH 컨설팅의 보안 프로토콜에 따라 관리됩니다. 
              {BRAND_NAME}은 상담 과정에서 취득한 모든 정보를 외부에 유출하지 않을 것을 엄숙히 약속합니다.
            </p>
          </div>

          <div className="space-y-4">
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 text-center rounded-sm animate-in zoom-in duration-300">
                문의가 성공적으로 전송되었습니다. 곧 연락 드리겠습니다.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-400 text-center rounded-sm">
                전송 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 이메일로 직접 문의해 주세요.
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gold text-navy py-5 font-bold text-xl rounded-sm transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] hover:bg-amber-500 shadow-lg'}`}
            >
              {isSubmitting ? '전송 중...' : '성장 솔루션 신청하기'}
            </button>
          </div>
        </form>
      </section>

      {/* Insightful Comparison Section */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8 flex flex-col justify-start pt-8 md:pt-12">
            <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-4">Strategic Insight</div>
            <h3 className="text-3xl md:text-4xl font-bold serif leading-tight">
              Pro OH 컨설팅 성장 로드맵 vs <br /> 
              <span className="text-gold">포춘 500 성공 요인</span>
            </h3>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              포춘 500 기업의 글로벌 스탠다드와 한국 대표 기업들의 성공 사례를 분석하여 <br className="hidden md:block" />
              귀사의 유니콘 도약을 위한 명확한 준거 기준을 제시합니다.
            </p>
            
            <div className="p-8 bg-gold/5 border-l-4 border-gold rounded-sm italic text-white/80">
              "포춘 500 기업의 핵심 가치는 우리 컨설팅이 추구하는 성장 철학과 정확히 일치합니다."
            </div>
          </div>
          
          <div className="bg-navy pt-8 md:pt-12 px-8 md:px-12 pb-12 rounded-sm relative overflow-hidden flex flex-col">
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-contact" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#fbbf24" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-contact)" />
                </svg>
             </div>
             
             <div className="relative z-10 space-y-10 lg:pt-[4.5rem]">
                <div className="space-y-8">
                  {[
                    {
                      num: "01",
                      title: "성장 로드맵 설계 및 실행 지원",
                      factors: [
                        { label: "포춘 500 요인", text: "장기적 비전과 전략적 실행" },
                        { label: "한국 기업 적용", text: "삼성·현대차의 글로벌 로드맵 선도" }
                      ]
                    },
                    {
                      num: "02",
                      title: "투자 유치 단계별 전략",
                      factors: [
                        { label: "포춘 500 요인", text: "안정적 자금 조달과 글로벌 투자자 신뢰" },
                        { label: "한국 기업 적용", text: "네이버·카카오의 벤처 투자와 플랫폼 확장" }
                      ]
                    },
                    {
                      num: "03",
                      title: "글로벌 상장 로드맵 (IPO)",
                      factors: [
                        { label: "포춘 500 요인", text: "글로벌 감각과 시장 적응력" },
                        { label: "한국 기업 적용", text: "삼성·현대차의 글로벌 공급망 및 브랜드 전략" }
                      ]
                    },
                    {
                      num: "04",
                      title: "경영 시스템 구축",
                      factors: [
                        { label: "포춘 500 요인", text: "투명한 지배구조와 ESG 경영" },
                        { label: "한국 기업 적용", text: "삼성의 ESG 강화 및 한전의 친환경 전환" }
                      ]
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
                        <span className="text-gold font-bold serif text-xl">{item.num}</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{item.title}</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                        {item.factors.map((f, i) => (
                          <div key={i}>
                            <div className="text-[10px] text-gold/60 font-bold uppercase tracking-widest mb-1">{f.label}</div>
                            <div className="text-sm text-white/70">{f.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

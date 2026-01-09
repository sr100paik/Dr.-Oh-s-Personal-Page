
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 border-b border-white/5 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold serif mb-6">유니콘/데카콘 <span className="text-gold">육성 안내</span></h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          성장 과정상의 리스크 해지부터 국내외 IPO 로드맵까지, <br />
          기업의 가치를 극대화하는 7가지 핵심 솔루션을 제공합니다.
        </p>
      </div>

      {/* Main Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "01",
              title: "리스크 해지 솔루션",
              desc: "후보 기업 리디자인을 통한 법률적 다툼, 주주간 분쟁, 인재 이탈 방지",
              icon: "⚖️"
            },
            {
              id: "02",
              title: "경영권/지분 관리",
              desc: "성장 과정상 경영권 보호 및 최적의 지분 구조 설계 솔루션 보유",
              icon: "🔐"
            },
            {
              id: "03",
              title: "자료 작성 템플릿",
              desc: "국내외 대형 펀드를 움직일 수 있는 검증된 IR/자료 작성 가이드 제공",
              icon: "📄"
            },
            {
              id: "04",
              title: "기업 성장 로드맵",
              desc: "현 상황 진단부터 유니콘 등극까지의 단계별 비전 및 로드맵 제시",
              icon: "🗺️"
            },
            {
              id: "05",
              title: "투자 유치 설계",
              desc: "국내외 VC 타겟팅부터 실제 펀딩 성공까지의 전 과정 설계 및 실행",
              icon: "💰"
            },
            {
              id: "06",
              title: "AI 투자심사 대응",
              desc: "최신 AI 기술을 활용한 투자 심사 과정 및 알고리즘 대응 솔루션 보유",
              icon: "🤖"
            }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-white/10 bg-white/5 rounded-sm hover:border-gold/30 transition-all group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <div className="text-xs text-gold font-bold mb-2 uppercase tracking-widest">Step {item.id}</div>
              <h3 className="text-2xl font-bold serif mb-4">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          {/* Highlighted Final Step */}
          <div className="p-10 border border-gold bg-gold/5 rounded-sm lg:col-span-3 flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl">🌍</div>
            <div className="flex-grow">
              <div className="text-xs text-gold font-bold mb-2 uppercase tracking-widest">Global Milestone</div>
              <h3 className="text-3xl font-bold serif mb-2 text-white">국내 및 나스닥(NASDAQ) IPO 로드맵 제공</h3>
              <p className="text-white/60">글로벌 상장을 목표로 하는 기업을 위해 미국식 IR 작성법 및 뉴욕 상장 파트너십 구축까지 지원합니다.</p>
            </div>
            <button className="bg-gold text-navy px-8 py-4 font-bold rounded-sm whitespace-nowrap hover:bg-amber-500 transition-colors">
              상담 예약
            </button>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold serif mb-8">국내외 투자 유치 안내</h2>
            <div className="space-y-6">
              {[
                "국내 VC 외 해외 VC까지 글로벌 네트워크 연결",
                "투자 로드맵 설계 및 실제 자금 연계 실행",
                "투자 + 파트너십 구축까지 원스톱 패키지",
                "AI 시대에 맞는 데이터 기반 투자 유치 방법론"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-2 bg-gold/20 blur-2xl rounded-full"></div>
             <div className="relative bg-navy border border-white/10 p-12 rounded-sm text-center">
                <div className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Philosophy</div>
                <h3 className="text-3xl font-bold serif mb-6 italic">"신년 전략과 자금 연계로 <br />성공적 추진을!"</h3>
                <p className="text-white/50 leading-relaxed">
                  우리는 기업이 꿈꾸는 크기만큼 자랄 수 있도록 자금, 전략, 시스템을 통합적으로 관리합니다.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

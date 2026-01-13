
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceSteps = [
    {
      id: "01",
      title: "리스크 해지 솔루션",
      desc: "후보 기업 리디자인을 통한 법률적 다툼, 주주간 분쟁, 인재 이탈 방지",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: "02",
      title: "경영권/지분 관리",
      desc: "성장 과정상 경영권 보호 및 최적의 지분 구조 설계 솔루션 보유",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "자료 작성 템플릿",
      desc: "국내외 대형 펀드를 움직일 수 있는 검증된 IR/자료 작성 가이드 제공",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "기업 성장 로드맵",
      desc: "현 상황 진단부터 유니콘 등극까지의 단계별 비전 및 로드맵 제시",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: "05",
      title: "투자 유치 설계",
      desc: "국내외 VC 타겟팅부터 실제 펀딩 성공까지의 전 과정 설계 및 실행",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "06",
      title: "AI 투자심사 대응",
      desc: "최신 AI 기술을 활용한 투자 심사 과정 및 알고리즘 대응 솔루션 보유",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "07",
      title: "IPO 로드맵 제공",
      desc: "국내 및 나스닥(NASDAQ) 상장을 위한 정교한 IR 전수 및 현지 파트너십 구축",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

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
          {serviceSteps.map((item, i) => (
            <div key={i} className="p-10 border border-white/10 bg-white/5 rounded-sm hover:border-gold/30 transition-all group flex flex-col items-start text-left">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="text-xs text-gold font-bold mb-2 uppercase tracking-[0.2em]">Step {item.id}</div>
              <h3 className="text-2xl font-bold serif mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          {/* Last item centering helper for 3-column grid with 7 items */}
          <div className="lg:col-span-2 hidden lg:block border border-dashed border-white/5 rounded-sm flex items-center justify-center p-10 bg-white/[0.02]">
            <div className="text-white/20 text-sm italic serif">
              "귀사의 다음 도약을 위한 모든 준비가 되어 있습니다."
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Consultation */}
      <section className="pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-navy border-2 border-gold p-12 rounded-sm shadow-[0_0_50px_rgba(251,191,36,0.1)] inline-block w-full">
          <h3 className="text-3xl font-bold serif mb-6">성공적인 IPO를 위한 첫 걸음</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            국내 상장부터 나스닥 상장까지, 오세근 프로가 직접 설계하는 <br />
            차별화된 IPO 로드맵을 지금 경험해 보십시오.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-gold text-navy px-12 py-5 font-bold text-xl rounded-sm hover:scale-105 transition-all shadow-xl hover:bg-amber-500"
          >
            VIP 상담 예약하기
          </Link>
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
                <h3 className="text-3xl font-bold serif mb-6 italic">"글로벌 전략과 자금 연계로 <br />성공적 추진을!"</h3>
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

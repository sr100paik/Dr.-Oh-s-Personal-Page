
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, BRAND_NAME } from '../constants';

const Hero = () => (
  <section className="relative h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src={IMAGES.HERO_BG} 
        alt="CEO Office" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-4xl space-y-8">
        <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-gold text-xs font-bold tracking-[0.2em] bg-gold/5 uppercase">
          Unicorn & Decacorn Growth Strategy
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight serif">
          유니콘/데카콘을 향한 <br /> 
          <span className="text-gold">위대한 도전</span>을 <br />지원합니다.
        </h1>
        <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
          "개인도, 기업도 꿈의 크기만큼 자랍니다." <br />
          국내외 IPO 로드맵과 전략적 투자 유치를 통해 귀사의 성장을 끝까지 함께합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            to="/contact" 
            className="bg-gold text-navy px-10 py-4 rounded-sm font-bold text-center transition-transform hover:scale-105 hover:bg-amber-500"
          >
            VIP 경영 컨설팅 신청하기
          </Link>
          <Link 
            to="/services" 
            className="border border-white/20 text-white px-10 py-4 rounded-sm font-bold text-center transition-colors hover:bg-white/5"
          >
            지원 프로그램 상세 보기
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-navy px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">주요 지원 프로그램</h2>
        <div className="w-20 h-1 bg-gold mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "성장 로드맵", desc: "맞춤형 설계 및 밀착 실행 지원" },
          { title: "투자 유치", desc: "Seed부터 Series A·B·C까지 단계별 전략" },
          { title: "글로벌 상장", desc: "국내 IPO 및 나스닥(NASDAQ) 로드맵" },
          { title: "경영 시스템", desc: "경영권 확보 및 지분 관리 시스템 구축" }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 p-8 border border-white/10 hover:border-gold/50 transition-all group">
            <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 serif">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section className="py-24 bg-slate-900 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold serif">차별화된 <span className="text-gold">전문성</span></h2>
        <ul className="space-y-6">
          {[
            { title: "25년차 베테랑", desc: "벤처/산학연 현장 경험의 실무형 전략" },
            { title: "전직 대통령 직속 위원장", desc: "국가 벤처 정책을 설계한 거시적 안목" },
            { title: "검증된 실력", desc: "삼성전자 강의 및 산학협력단 교수 역임" },
            { title: "책임 경영", desc: "선정 시 자금 조달부터 IPO 성공까지 밀착 동행" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-gold font-bold text-xl">0{i+1}</span>
              <div>
                <h4 className="font-bold text-white text-lg">{item.title}</h4>
                <p className="text-white/50">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 p-12 border border-white/10 rounded-sm relative overflow-hidden group">
        <h3 className="text-2xl font-bold text-gold mb-6 serif italic">"한벤과 함께 위대한 도전을!"</h3>
        <p className="text-lg text-white/90 leading-relaxed mb-8">
          우리는 유니콘/데카콘 기업 육성을 위해 후보 기업의 리디자인을 통한 리스크 해지 솔루션과 지분 관리 로드맵을 제공합니다. 
          국내외 펀드를 움직일 차별화된 자료와 AI 투자심사 대응 솔루션으로 귀사의 가치를 증명합니다.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Global Partners</div>
            <div className="text-sm text-gold uppercase tracking-widest">New York Listing Partners</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Main: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Features />
      <Expertise />
      
      {/* Testimonials */}
      <section className="py-24 px-6 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold serif text-center mb-16 italic">"Good to Great, 도약을 경험하십시오"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                text: "법률적 다툼과 주주간 분쟁으로 힘들 때 오세근 박사님의 리스크 해지 솔루션이 결정적이었습니다. 덕분에 다시 사업의 본질에 집중할 수 있었습니다.",
                name: "최OO", position: "CEO", company: "A사(나스닥 상장 준비)"
              },
              {
                text: "AI 시대에 맞는 투자 유치 방법과 로드맵 설계가 인상적이었습니다. 국내를 넘어 해외 VC까지 연결되는 네트워크는 정말 독보적입니다.",
                name: "박OO", position: "대표이사", company: "B사(시리즈 B 완료)"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-900/50 p-10 border-l-4 border-gold relative">
                <p className="text-white/80 mb-6 italic text-lg leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gold uppercase tracking-widest">{t.position}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center relative">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.OFFICE_BUILDING} className="w-full h-full object-cover opacity-20 grayscale" alt="CTA BG" />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold serif">유니콘으로 <span className="text-gold">성장</span>을 원한다면, <br />지금 바로 파트너가 되십시오.</h2>
          <p className="text-lg text-white/70">
            신년 전략과 자금 연계로 성공적 추진을 약속합니다. <br />
            {BRAND_NAME}이 직접 진단하고 로드맵을 제시합니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gold text-navy px-12 py-5 rounded-sm font-bold text-xl hover:scale-105 transition-transform"
          >
            VIP 경영 상담 예약하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;

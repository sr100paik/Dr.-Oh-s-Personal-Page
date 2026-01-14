
import React from 'react';
import { IMAGES, BRAND_NAME, TITLE_FULL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-sm -z-10 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            <img 
              src={IMAGES.PORTRAIT} 
              alt="Pro OH Se-geun Portrait" 
              className="w-full aspect-[4/5] object-cover rounded-sm transition-all duration-700 shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="text-gold font-bold tracking-widest text-sm">CHAIRMAN & STRATEGIST</div>
            <h1 className="text-5xl font-bold serif leading-tight">{BRAND_NAME}</h1>
            <p className="text-xl text-white/40 serif italic -mt-4">{TITLE_FULL} / KAIST 경영대학원 MIS</p>
            <p className="text-xl text-white/80 leading-relaxed serif italic border-l-4 border-gold pl-6">
              "벤처기업의 성공은 우연이 아닌 설계입니다. <br />
              국가적 안목과 현장의 실무로 귀사의 로드맵을 완성하겠습니다."
            </p>
            <div className="space-y-6">
              <p className="text-white/60 leading-loose">
                오세근 프로는 1989년부터 경실련 중앙위원으로 활동하며 사회 전반의 경제 구조를 통찰해왔습니다. 
                NIA U-Korea 추진 정책위원장 및 전정부 대통령 벤처정책위원장을 역임하며 대한민국 벤처 생태계의 기틀을 마련했습니다. 
                현재 한국벤처협동조합 이사장으로서 유니콘/데카콘을 꿈꾸는 기업들에게 실질적인 투자 유치와 IPO 솔루션을 제공하고 있습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-bold text-gold mb-4 uppercase tracking-tighter">Key Careers</h4>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li>• 한국벤처협동조합 이사장 (현)</li>
                    <li>• 대통령 벤처정책위원장 (전)</li>
                    <li>• NIA-U Korea 추진 정책/법제도위원장</li>
                    <li>• KNS뉴스통신 논설위원</li>
                    <li>• 숭실대/성심여대 등 벤처투자심사역</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gold mb-4 uppercase tracking-tighter">Academic & Lectures</h4>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li>• KAIST 경영대학원 MIS 졸업</li>
                    <li>• 삼성전자 등 200여회 산업계 강의</li>
                    <li>• 세계 1류 IT 논문 선정 및 300여편 기고</li>
                    <li>• 매일경제, 경인일보 등 정기 칼럼 기고</li>
                    <li>• 인공지능(AI) 강의 - 산업자원부</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Fields */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold serif mb-4">전문 분야 (Specialized Expertise)</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1: 유니콘/데카콘 육성 */}
            <div className="bg-navy p-10 border border-white/5 rounded-sm hover:border-gold/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white serif">유니콘/데카콘 육성 및 전략</h4>
              </div>
              <ul className="space-y-4">
                {[
                  { t: "성장 로드맵 수립", d: "기업 성장 단계별 맞춤형 로드맵 제시 및 실행 지원" },
                  { t: "리스크 관리", d: "법률 다툼, 주주 분쟁 등 기업 리디자인을 통한 리스크 해지" },
                  { t: "경영권 보호", d: "성장 과정에서의 경영권 보호 및 최적 지분 구조 설계" },
                  { t: "글로벌 진출", d: "국내 및 나스닥(NASDAQ) IPO 로드맵 제공" }
                ].map((item, idx) => (
                  <li key={idx} className="border-l-2 border-gold/20 pl-4 py-1">
                    <div className="text-gold font-bold text-sm mb-1">{item.t}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{item.d}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: 투자 유치 및 IR */}
            <div className="bg-navy p-10 border border-white/5 rounded-sm hover:border-gold/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white serif">국내외 투자 유치 및 IR 고도화</h4>
              </div>
              <ul className="space-y-4">
                {[
                  { t: "글로벌 VC 네트워크", d: "국내를 넘어 해외 VC까지 연계한 투자 유치 안내" },
                  { t: "IR 자료 최적화", d: "미국식 IR 작성법 및 대형 펀드용 자료 템플릿 제공" },
                  { t: "전략적 파트너십", d: "단순 투자를 넘어선 비즈니스 파트너십 구축 지원" },
                  { t: "투자유치 실행", d: "신년 전략과 자금 연계를 통한 실무적 로드맵 설계" }
                ].map((item, idx) => (
                  <li key={idx} className="border-l-2 border-gold/20 pl-4 py-1">
                    <div className="text-gold font-bold text-sm mb-1">{item.t}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{item.d}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: AI 및 미래 기술 */}
            <div className="bg-navy p-10 border border-white/5 rounded-sm hover:border-gold/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white serif">AI 및 미래 혁신 기술</h4>
              </div>
              <ul className="space-y-4">
                {[
                  { t: "AI 투자 심사 대응", d: "AI 기반 투자 심사 알고리즘에 최적화된 대응 솔루션" },
                  { t: "디지털 자산 & 블록체인", d: "블록체인협회 자문 및 디지털 자산 전문 컨설팅" },
                  { t: "ICT 융합 기술", d: "모바일, IPTV, 차세대 네트워크 및 웹경제 분석" },
                  { t: "산업 트렌드 분석", d: "미래학 기반의 산업 트렌드 예측 및 경영 전략 수립" }
                ].map((item, idx) => (
                  <li key={idx} className="border-l-2 border-gold/20 pl-4 py-1">
                    <div className="text-gold font-bold text-sm mb-1">{item.t}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{item.d}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 4: 경영 관리 및 창업 */}
            <div className="bg-navy p-10 border border-white/5 rounded-sm hover:border-gold/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white serif">경영 관리 및 창업 전략</h4>
              </div>
              <ul className="space-y-4">
                {[
                  { t: "거버넌스 및 시스템", d: "기업 거버넌스 확립 및 효율적 경영 관리 시스템 구축" },
                  { t: "비즈니스 모델(BM)", d: "시장성 분석을 통한 최적 비즈니스 모델 피벗팅 지원" },
                  { t: "기업가 정신 교육", d: "200회 이상의 강의 경력을 바탕으로 한 CEO 코칭" },
                  { t: "경영 콘텐츠 개발", d: "‘메일로 읽는 경영’ 등 독창적인 경영 관리 프로그램 운영" }
                ].map((item, idx) => (
                  <li key={idx} className="border-l-2 border-gold/20 pl-4 py-1">
                    <div className="text-gold font-bold text-sm mb-1">{item.t}</div>
                    <div className="text-white/50 text-xs leading-relaxed">{item.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

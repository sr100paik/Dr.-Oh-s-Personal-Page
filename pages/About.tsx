
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
              alt="Dr. Oh Se-geun Portrait" 
              className="w-full aspect-[2/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
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
                오세근 박사는 1989년부터 경실련 중앙위원으로 활동하며 사회 전반의 경제 구조를 통찰해왔습니다. 
                NIA u-korea 추진 정책위원장 및 전정부 대통령 벤처정책위원장을 역임하며 대한민국 벤처 생태계의 기틀을 마련했습니다. 
                현재 한국벤처협동조합 이사장으로서 유니콘/데카콘을 꿈꾸는 기업들에게 실질적인 투자 유치와 IPO 솔루션을 제공하고 있습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-bold text-gold mb-4 uppercase tracking-tighter">Key Careers</h4>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li>• 한국벤처협동조합 이사장 (현)</li>
                    <li>• 대통령 벤처정책위원장 (전)</li>
                    <li>• NIA-u korea 추진 정책/법제도위원장</li>
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
          <h2 className="text-4xl font-bold serif text-center mb-16">전문 분야 (Expertise)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { area: "IcT 분야", items: ["모바일", "와이브로", "IPTV", "네트워크", "웹경제"] },
              { area: "미래 학문", items: ["산업 트렌드 분석", "미래학", "디지털 자산", "블록체인"] },
              { area: "경영 관리", items: ["“메일로 읽는 경영” 개발", "시스템 구축", "거버넌스"] },
              { area: "창업 전략", items: ["기업가 정신", "비즈니스 모델", "시장성 분석"] }
            ].map((field, i) => (
              <div key={i} className="bg-navy p-8 border border-white/5 rounded-sm">
                <h4 className="text-gold font-bold mb-4 serif text-lg">{field.area}</h4>
                <ul className="text-sm text-white/50 space-y-2">
                  {field.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

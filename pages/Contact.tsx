
import React from 'react';
import { BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-slate-900 border-b border-white/5 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold serif mb-6">VIP <span className="text-gold">상담 신청</span></h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          유니콘/데카콘으로 성장을 원하는 기업을 위한 특별 진단입니다. <br />
          모든 신청 정보는 한국벤처협동조합의 엄격한 보안 규정에 의해 보호됩니다.
        </p>
      </div>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <form className="bg-navy border border-white/10 p-12 rounded-sm space-y-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="성함" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Job Title</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="직함 (예: CEO)" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Company</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="회사명" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold font-bold uppercase tracking-widest">Phone</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="연락처 (핸드폰)" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gold font-bold uppercase tracking-widest">Inquiry Type</label>
            <select className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
              <option className="bg-navy">유니콘/데카콘 성장 로드맵 자문</option>
              <option className="bg-navy">국내외 투자 유치 및 펀딩 설계</option>
              <option className="bg-navy">국내 IPO 및 나스닥(NASDAQ) 상장 자문</option>
              <option className="bg-navy">리스크 해지 (법률/주주 분쟁/지분 관리)</option>
              <option className="bg-navy">AI 투자심사 대응 솔루션 문의</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gold font-bold uppercase tracking-widest">Current Challenge</label>
            <textarea rows={6} className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="기업의 현재 상황과 해결하고자 하는 핵심 난제를 적어주세요."></textarea>
          </div>

          <div className="p-6 bg-gold/5 border border-gold/20 rounded-sm">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              <span className="text-sm font-bold text-gold uppercase tracking-widest">보안 및 비밀 유지 서약</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              본 신청 양식을 통해 제공되는 모든 기밀 정보는 한국벤처협동조합의 보안 프로토콜에 따라 관리됩니다. 
              {BRAND_NAME}은 상담 과정에서 취득한 모든 정보를 외부에 유출하지 않을 것을 엄숙히 약속합니다.
            </p>
          </div>

          <button className="w-full bg-gold text-navy py-5 font-bold text-xl rounded-sm hover:scale-[1.01] transition-transform">
            성장 솔루션 신청하기
          </button>
        </form>
      </section>

      {/* Map or Contact Info */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold serif">사무소 안내</h3>
            <div className="space-y-6">
              <div>
                <div className="text-gold font-bold mb-1">한국벤처협동조합 (본부)</div>
                <div className="text-white/70">서울특별시 서초구 반포대로 14길 54 신성오피스텔 410호</div>
              </div>
              <div>
                <div className="text-gold font-bold mb-1">Office Hours</div>
                <div className="text-white/70">평일 09:00 - 18:00 (사전 예약 필수)</div>
              </div>
              <div>
                <div className="text-gold font-bold mb-1">Contact</div>
                <div className="text-white/70">Tel: 02-588-6989 | skoh-ok@hanmail.net</div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>
             <div className="text-center z-10">
               <div className="text-gold text-4xl mb-4">📍</div>
               <div className="text-white/50 text-sm">Security Area: Authorized Personnel Only</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

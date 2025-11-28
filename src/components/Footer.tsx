import React from 'react';
import { Heart, Coffee, ExternalLink, Scale, Shield, Globe, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Logos */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-50 p-1.5 rounded-full border border-red-100">
                <Heart className="h-6 w-6 text-accent fill-accent" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                SEHATI<span className="text-accent">+</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Platform kesehatan mental sahabat remaja Indonesia.
            </p>
            <div className="flex items-center gap-3 mb-6">
                <img src="/logo%20nero.jpg" alt="SMK Nero" className="h-8 w-auto grayscale hover:grayscale-0 transition-all opacity-90 hover:opacity-100"/>
                <img src="/logo%20bkkbn.webp" alt="BKKBN" className="h-8 w-auto grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"/>
                <img src="/logo%20genre.webp" alt="GenRe" className="h-8 w-auto grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"/>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
              <p className="text-slate-600 text-sm leading-relaxed">
                Ikuti perjalanan kreativitas Yahya dan update promosi SEHATI+ langsung dari Instagram.
              </p>
              <a
                href="https://www.instagram.com/syarfddn_yhya?igsh=MWtmazRpM21sOWpwaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold py-2.5 hover:shadow-lg transition-all"
              >
                <Instagram className="h-4 w-4" />
                Promosi IG @syarfddn_yhya
              </a>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold text-center">Development by Yahya</p>
            </div>
          </div>
          
          {/* Menu */}
          <div>
            <h4 className="font-bold text-text-main mb-4">Menu</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Konsultasi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Materi GenRe</a></li>
            </ul>
          </div>

          {/* Our Ecosystem (New) */}
          <div>
            <h4 className="font-bold text-text-main mb-4">Project Lainnya</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <Scale className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  Pasalku AI
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <Shield className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  Smart APD
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <Globe className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                  Ummigo ID
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Logo Project Kami</p>
              <div className="flex items-center gap-4">
                <img src="/logo%20pasalku.ai.jpg" alt="Pasalku AI Logo" className="h-10 w-auto object-contain rounded-lg border border-slate-100 bg-white p-1 shadow-sm" />
                <img src="/logo%20smartapd.jpg" alt="Smart APD Logo" className="h-10 w-auto object-contain rounded-lg border border-slate-100 bg-white p-1 shadow-sm" />
                <img src="/logo%20ummigo.png" alt="Ummigo Logo" className="h-10 w-auto object-contain rounded-lg border border-slate-100 bg-white p-1 shadow-sm" />
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-text-main mb-4">Dukungan</h4>
            <a 
              href="https://saweria.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-yellow-100 transition-colors border border-yellow-200 mb-4"
            >
              <Coffee className="h-4 w-4" />
              Traktir Kopi (Saweria)
            </a>
            <p className="text-xs text-slate-400">
              Dukunganmu membantu server tetap hidup.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} SEHATI+ Project. All rights reserved.</p>
          <p className="text-slate-500 flex items-center gap-1">
            Developed with 💙 by <a href="https://www.instagram.com/syarfddn_yhya?igsh=MWtmazRpM21sOWpwaw==" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-secondary transition-colors">@syarfddn_yhya</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

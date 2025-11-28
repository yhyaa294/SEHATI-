"use client";

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Calendar, User, Share2, Heart, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Dummy Data (In real app, fetch from Supabase)
const MODULES_CONTENT = {
    1: {
        title: "Kesehatan Reproduksi Remaja",
        category: "Kesehatan Fisik",
        date: "28 Nov 2025",
        author: "Dr. Sehati",
        content: `
            <p class="mb-4">Menjaga kesehatan reproduksi sangat penting bagi remaja. Hal ini bukan hanya soal mencegah penyakit, tapi juga investasi masa depan.</p>
            <h3 class="text-xl font-bold mb-2">Apa itu Kesehatan Reproduksi?</h3>
            <p class="mb-4">Kesehatan reproduksi adalah keadaan sejahtera fisik, mental, dan sosial yang utuh dalam segala hal yang berkaitan dengan sistem, fungsi, dan proses reproduksi.</p>
            <h3 class="text-xl font-bold mb-2">Tips Menjaga Kebersihan:</h3>
            <ul class="list-disc list-inside mb-4 space-y-2">
                <li>Ganti pakaian dalam minimal 2x sehari.</li>
                <li>Hindari pakaian yang terlalu ketat.</li>
                <li>Bagi perempuan, catat siklus menstruasi.</li>
                <li>Bagi laki-laki, sunat sangat dianjurkan untuk kesehatan.</li>
            </ul>
            <p>Ingat, tubuhmu adalah otoritasmu. Jaga dan rawat dengan baik!</p>
        `,
        image: "https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&fit=crop&q=80&w=1000"
    },
    2: {
        title: "Bahaya NAPZA (Narkotika & Obat Terlarang)",
        category: "Anti Narkoba",
        date: "25 Nov 2025",
        author: "BNN & GenRe",
        content: `
            <p class="mb-4">NAPZA adalah musuh utama generasi muda. Sekali mencoba, masa depan bisa terancam.</p>
            <h3 class="text-xl font-bold mb-2">Dampak Jangka Pendek:</h3>
            <p class="mb-4">Susah tidur, jantung berdebar, halusinasi, dan perubahan perilaku drastis.</p>
            <h3 class="text-xl font-bold mb-2">Cara Menolak Ajakan Teman:</h3>
            <ul class="list-disc list-inside mb-4 space-y-2">
                <li>Berani bilang "TIDAK" dengan tegas.</li>
                <li>Hindari nongkrong di tempat yang rawan.</li>
                <li>Cari teman yang punya hobi positif (olahraga, musik, coding).</li>
            </ul>
            <div class="bg-red-50 p-4 rounded-xl border border-red-100 text-red-700 font-semibold">
                Jika kamu atau temanmu butuh bantuan rehabilitasi, hubungi BNN di 184. Gratis & Rahasia.
            </div>
        `,
        image: "https://images.unsplash.com/photo-1527152750-369b1575d548?auto=format&fit=crop&q=80&w=1000"
    },
    // Fallback for others
    default: {
        title: "Materi Sedang Disiapkan",
        category: "Coming Soon",
        date: "-",
        author: "Tim Sehati",
        content: `
            <div class="flex flex-col items-center justify-center text-center py-12">
                <p class="text-lg text-slate-600 mb-4">Maaf, materi ini sedang disusun oleh tim ahli kami.</p>
                <p>Cek lagi besok ya!</p>
            </div>
        `,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
    }
};

export default function MateriDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  
  const id = Number(params.id);
  const data = MODULES_CONTENT[id as keyof typeof MODULES_CONTENT] || MODULES_CONTENT['default'];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-8 font-sans">
      
      {/* Navbar Overlay for Detail Page */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <span className="font-bold text-slate-900 text-sm truncate max-w-[200px]">{data.title}</span>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      <main className="max-w-3xl mx-auto p-4 md:p-8">
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-lg">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                      {data.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                      {data.title}
                  </h1>
                  <div className="flex items-center gap-4 text-xs md:text-sm text-slate-200">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {data.date}</span>
                      <span className="flex items-center gap-1"><User className="w-4 h-4" /> {data.author}</span>
                  </div>
              </div>
          </div>

          {/* Content Body */}
          <article className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100 mb-8">
              <div 
                className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
          </article>

          {/* Engagement */}
          <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-sm ${isLiked ? 'bg-rose-100 text-rose-600 scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-600' : ''}`} />
                  {isLiked ? 'Disukai' : 'Suka'}
              </button>
              <Link 
                href="/materi"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
              >
                  <BookOpen className="w-5 h-5" />
                  Materi Lainnya
              </Link>
          </div>
      </main>
    </div>
  );
}

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { retrieveDocuments } from '@/lib/rag';
import { getRelevantContext } from '@/lib/sehati-knowledge';

// Kumpulkan semua kunci sakti
const geminiKeys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY, // Fallback
].filter(Boolean) as string[]; // Hapus yang undefined

// Fungsi untuk mencoba kunci satu per satu
async function tryGenerateWithGemini(message: string, systemPrompt: string) {
    let lastError;

    for (const key of geminiKeys) {
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            
            const chat = model.startChat({
                history: [
                    { role: "user", parts: [{ text: systemPrompt }] },
                    { role: "model", parts: [{ text: "Siap! Aku Sobat SEHATI. Aku mengerti." }] }
                ]
            });

            const result = await chat.sendMessage(message);
            const response = result.response.text();
            
            if (response) return response;

        } catch (error: any) {
            console.warn(`⚠️ Kunci ${key.substring(0, 5)}... gagal:`, error.message);
            lastError = error;
            // Lanjut ke kunci berikutnya
        }
    }
    throw lastError || new Error("Semua kunci Gemini gagal.");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    if (!message) return NextResponse.json({ error: 'Pesan kosong' }, { status: 400 });

    // 1. Safety Check (Manual)
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('bunuh diri') || lowerMsg.includes('mati') || lowerMsg.includes('silet')) {
        return NextResponse.json({
            response: "⚠️ Sobat, aku mendengar rasa sakitmu. Tolong, kamu berharga. Tekan tombol **Panic Button** sekarang juga atau hubungi 119. Aku di sini, tapi kamu butuh bantuan profesional segera.",
            isCrisis: true
        });
    }

    // 2. RAG Context
    const contextText = getRelevantContext(message);

    // 3. System Prompt
    const SYSTEM_PROMPT = `
    PERAN: Kamu adalah "Sobat SEHATI", teman curhat remaja (17 tahun).
    GAYA: Gaul, santai, suportif, tidak kaku, pakai emoji sesekali.
    PENGETAHUAN:
    ${contextText}
    INSTRUKSI: Jawab singkat (max 3 kalimat) dan validasi perasaan user.
    `;

    // 4. Execute with Key Rotation
    try {
        const aiResponse = await tryGenerateWithGemini(message, SYSTEM_PROMPT);
        
        return NextResponse.json({
            response: aiResponse,
            isCrisis: false
        });

    } catch (finalError) {
        console.error("🔥 Total Failure:", finalError);
        return NextResponse.json({ 
            response: "Waduh bestie, sinyalku lagi gangguan berat nih (Server Error). Coba lagi nanti ya? 🙏", 
            isCrisis: false 
        });
    }

  } catch (e) {
    return NextResponse.json({ response: "Error sistem.", isCrisis: false }, { status: 500 });
  }
}

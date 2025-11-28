import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables for Supabase connection
// These are public keys safe for client-side usage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || "placeholder-key";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) {
    console.warn("⚠️ Supabase URL or Key is missing in environment variables! Using placeholders for build.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

console.log('Supabase Client Initialized ✅');

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Prevent build errors when environment variables are missing during build time
// This allows the app to build, but runtime functionality will fail if vars are not set
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);

if (!supabaseUrl || !supabaseKey) {
  // Only log error in browser/runtime, not during build
  if (typeof window !== 'undefined') {
    console.error('Supabase environment variables are missing! Features depending on database will not work.');
  }
}

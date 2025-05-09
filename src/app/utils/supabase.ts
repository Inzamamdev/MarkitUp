import { createClient } from "@supabase/supabase-js";

// Since this is a demo, we'll use placeholder values
// In a real app, these would come from environment variables
const supabaseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}`;
const supabaseAnonKey = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

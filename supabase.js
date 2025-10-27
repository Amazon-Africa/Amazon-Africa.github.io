// Import Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Your Supabase project URL and anon public key
const SUPABASE_URL = "https://uareyvicfwneodbzjgwo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."; // paste your anon key here

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

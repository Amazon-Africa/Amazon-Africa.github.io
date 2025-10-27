// Import Supabase client
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Your Supabase project URL and anon public key
const SUPABASE_URL = "https://uareyvicfwneodbzjgwo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmV5dmljZnduZW9kYnpqZ3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MTEzODksImV4cCI6MjA3NzA4NzM4OX0.L_o53GwxnN3q3XMhq1X9VtFNRbydWmU_qz01eTuyO8I"; // paste your anon key here

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

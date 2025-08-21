import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fqzncutsthivlpyvdlqr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxem5jdXRzdGhpdmxweXZkbHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MjE4NzEsImV4cCI6MjA1MDE5Nzg3MX0.MhWOqOm-mHUb80H-1F5LLlSuHO7wGaXOoiNOmZrjhjo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pbzavrzjjwqnjyvabxlx.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemF2cnpqandxbmp5dmFieGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NjgyMzEsImV4cCI6MjAwMTA0NDIzMX0.jFpUbWkhKEB2S8HaLgB3_0a1MHj35tPCJLKhAr12lmc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

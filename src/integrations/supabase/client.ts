import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vchzgedjcouafvkmwpgf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaHpnZWRqY291YWZ2a213cGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Njg0MzUsImV4cCI6MjA2ODI0NDQzNX0.Amt7dNI9fOI_kVgEoZdpI_Mzf_pH-fl4he-Jj0lLPMU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
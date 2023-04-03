import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://btxepdioakmcobrbpali.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0eGVwZGlvYWttY29icmJwYWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNzE1MTksImV4cCI6MTk5NTk0NzUxOX0.Jkawkbs85OoInBgUwobe9xmWRpBlIALqeIZwCM-B104";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

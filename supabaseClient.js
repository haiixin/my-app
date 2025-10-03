import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://uobfpgvxmsnqypllbtna.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvYmZwZ3Z4bXNucXlwbGxidG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MTgwNjgsImV4cCI6MjA3NTA5NDA2OH0.uP0Sa-qh4kXPXiKfLfeZQUGsrjpXZkdgggyn2vQUu0E"
)

export default supabase
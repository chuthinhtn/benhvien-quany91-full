// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hjqijfmxqaychtrqglak.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqcWlqZm14cWF5Y2h0cnFnbGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTk4NjEsImV4cCI6MjA2MzY3NTg2MX0.g9vO1ts2-9I0wArBVFi5w96XWhl5AGGJKTzm6jdze60'

export const supabase = createClient(supabaseUrl, supabaseKey)

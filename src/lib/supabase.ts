
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kawpnedsxvyooaroaidw.supabase.co'  // import.meta.env.VITE_SUPABASE_URL //
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthd3BuZWRzeHZ5b29hcm9haWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4ODIzMzUsImV4cCI6MjA2NzQ1ODMzNX0.PgT8EU-dx9U2IIk4tAL6qgaumnmDgihVeilaU_C3ULY' // import.meta.env.VITE_SUPABASE_ANON_KEY //

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactMessage = {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

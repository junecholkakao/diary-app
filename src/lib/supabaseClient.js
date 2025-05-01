
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmgysvlshndotuxgsbst.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZ3lzdmxzaG5kb3R1eGdzYnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTU0MjgsImV4cCI6MjA2MTY3MTQyOH0.qfOU6ITF9QV9fgkFhmYwovXq_Et2tciIyam5N2Ny6GI'
export const supabase = createClient(supabaseUrl, supabaseKey)
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yuqvmrlyifzntyrsvcxr.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cXZtcmx5aWZ6bnR5cnN2Y3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjgyNTUsImV4cCI6MjA2NzMwNDI1NX0.GwZ2DViL4_e3G7CBrwSxfpMCcxZpiUif4HqLkrSAQ38'
  
  return createBrowserClient(url, key)
}
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Use hardcoded values for now
  const url = 'https://yuqvmrlyifzntyrsvcxr.supabase.co'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cXZtcmx5aWZ6bnR5cnN2Y3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjgyNTUsImV4cCI6MjA2NzMwNDI1NX0.GwZ2DViL4_e3G7CBrwSxfpMCcxZpiUif4HqLkrSAQ38'
  
  return createBrowserClient(url, key)
}
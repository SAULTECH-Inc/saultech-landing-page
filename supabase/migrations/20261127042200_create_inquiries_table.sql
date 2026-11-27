-- Migration: create public.inquiries table for SaulTech landing page lead capture
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text,
  source text not null default 'landing_cta'
);

-- Enable Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Allow anonymous website visitors to submit inquiries (INSERT only)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'inquiries'
      and policyname = 'Allow public inquiry submissions'
  ) then
    create policy "Allow public inquiry submissions"
      on public.inquiries
      for insert
      to anon
      with check (true);
  end if;
end $$;

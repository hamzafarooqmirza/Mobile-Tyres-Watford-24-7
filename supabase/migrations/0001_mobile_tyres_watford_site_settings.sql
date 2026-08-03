-- Dedicated schema for this website — isolates data in the shared Supabase project
CREATE SCHEMA IF NOT EXISTS mobile_tyres_watford;

-- Single-row settings table (id = 1 is always the one row)
CREATE TABLE IF NOT EXISTS mobile_tyres_watford.site_settings (
  id               INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  phone_mobile     TEXT NOT NULL DEFAULT '07466756907',
  phone_office     TEXT NOT NULL DEFAULT '01923240599',
  whatsapp_number  TEXT NOT NULL DEFAULT '447466756907',
  email            TEXT NOT NULL DEFAULT 'Mirahmed0101@gmail.com',
  address_locality TEXT NOT NULL DEFAULT 'Watford',
  address_region   TEXT NOT NULL DEFAULT 'Hertfordshire',
  head_scripts     TEXT NOT NULL DEFAULT '',
  body_scripts     TEXT NOT NULL DEFAULT '',
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS — no public policies; all access is server-side via service role key
ALTER TABLE mobile_tyres_watford.site_settings ENABLE ROW LEVEL SECURITY;

-- Seed the single row with defaults (safe to re-run)
INSERT INTO mobile_tyres_watford.site_settings (id)
VALUES (1)
ON CONFLICT (id) DO NOTHING;

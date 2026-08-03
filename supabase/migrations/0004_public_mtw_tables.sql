-- Tables in the public schema with mtw_ prefix — no custom schema exposure needed.
-- Safe to re-run (IF NOT EXISTS + ON CONFLICT DO NOTHING).

CREATE TABLE IF NOT EXISTS public.mtw_site_settings (
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
ALTER TABLE public.mtw_site_settings ENABLE ROW LEVEL SECURITY;
INSERT INTO public.mtw_site_settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.mtw_admin_credentials (
  id            INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  email         TEXT,
  password_hash TEXT,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE public.mtw_admin_credentials ENABLE ROW LEVEL SECURITY;
INSERT INTO public.mtw_admin_credentials (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

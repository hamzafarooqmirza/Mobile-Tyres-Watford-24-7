-- Per-site admin credentials table — completely separate from Supabase Auth
-- Each website schema has its OWN row; there is zero cross-site sharing.
CREATE TABLE IF NOT EXISTS mobile_tyres_watford.admin_credentials (
  id            INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  password_hash TEXT,   -- bcrypt hash; NULL until /settings/setup is completed
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS — no public policies; only service role key can read/write
ALTER TABLE mobile_tyres_watford.admin_credentials ENABLE ROW LEVEL SECURITY;

-- Seed the single row (empty password until first-time setup)
INSERT INTO mobile_tyres_watford.admin_credentials (id)
VALUES (1)
ON CONFLICT (id) DO NOTHING;

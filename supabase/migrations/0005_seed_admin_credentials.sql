-- Seed admin credentials with a temporary password.
-- Email: Mirahmed0101@gmail.com
-- Temporary password: Watford2024!
-- Change it immediately after first login via the Settings page.
UPDATE public.mtw_admin_credentials
SET
  email         = 'Mirahmed0101@gmail.com',
  password_hash = '$2b$12$CIvkFSuXovmQvLDkgeid4exugXa5PyuRO/geVemnpDqUvPrj1925i',
  updated_at    = NOW()
WHERE id = 1;

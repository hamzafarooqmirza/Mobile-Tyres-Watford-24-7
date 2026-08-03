-- Add email to admin credentials so login requires both email + password
ALTER TABLE mobile_tyres_watford.admin_credentials
  ADD COLUMN IF NOT EXISTS email TEXT;

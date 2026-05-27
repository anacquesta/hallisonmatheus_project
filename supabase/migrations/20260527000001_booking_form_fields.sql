-- Migration: Add new fields for advanced booking form

ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS client_type VARCHAR(10);
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS area VARCHAR(100);
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS has_lawyer BOOLEAN;
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS modality VARCHAR(50);
ALTER TABLE public.appointments ADD COLUMN IF NOT EXISTS fee VARCHAR(50);

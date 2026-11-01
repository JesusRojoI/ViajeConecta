/**
 * Single source for public contact details. Set NEXT_PUBLIC_CONTACT_PHONE to
 * the real number to show phone links; when it is empty those entries are
 * hidden instead of displaying a fake number.
 */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'jesro23@gmail.com';
export const CONTACT_ADDRESS =
  'Av. Revolución 1564, San Ángel, Álvaro Obregón, 01020 Ciudad de México, CDMX';

const rawPhone = (
  process.env.NEXT_PUBLIC_CONTACT_PHONE || '+52 1 55 5662 5469'
).trim();
export const CONTACT_PHONE_DISPLAY = rawPhone;
export const CONTACT_PHONE_HREF = rawPhone
  ? `tel:${rawPhone.replace(/[^\d+]/g, '')}`
  : '';
export const SITE_DOMAIN = 'viajeconecta.com';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  `https://${SITE_DOMAIN}`;

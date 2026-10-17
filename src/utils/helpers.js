// Shared helpers: currency formatting, dates and localStorage booking storage.

export function formatPrice(amount) {
  return '£' + Number(amount).toLocaleString('en-GB', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatPriceExact(amount) {
  return '£' + Number(amount).toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export function toISODate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function todayISO() {
  return toISODate(new Date());
}

export function addDaysISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

export function formatDateLong(iso) {
  if (!iso) {
    return '';
  }
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDateShort(iso) {
  if (!iso) {
    return '';
  }
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const STORAGE_KEY = 'wanderwise-bookings';

export function loadBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

export function saveBooking(booking) {
  const all = loadBookings();
  all.unshift(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function removeBooking(reference) {
  const remaining = loadBookings().filter((b) => b.reference !== reference);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
}

export function getBooking(reference) {
  return loadBookings().find((b) => b.reference === reference) || null;
}

const REFERENCE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function makeReference() {
  const existing = new Set(loadBookings().map((b) => b.reference));
  let reference = '';
  do {
    let suffix = '';
    for (let i = 0; i < 6; i += 1) {
      suffix += REFERENCE_CHARS[Math.floor(Math.random() * REFERENCE_CHARS.length)];
    }
    reference = `WW-${suffix}`;
  } while (existing.has(reference));
  return reference;
}

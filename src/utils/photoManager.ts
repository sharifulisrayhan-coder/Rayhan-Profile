// Shared photo management for Shariful Islam Rayhan across all views
export const PHOTO_STORAGE_KEY = 'rayhan_custom_photo';

export const CANDIDATE_PHOTO_URLS = [
  '/Rayhan.jpg',
  '/rayhan.jpg',
  '/Rayhan.jgp',
  '/Rayhan.png',
  '/profile.jpg'
];

export async function saveRayhanPhoto(dataUrl: string): Promise<boolean> {
  try {
    localStorage.setItem(PHOTO_STORAGE_KEY, dataUrl);
  } catch (e) {
    console.warn('LocalStorage quota or access restriction:', e);
  }

  // Notify all listening components in real time
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('rayhan-photo-updated', { detail: dataUrl }));
  }

  // Persist to server disk via backend API
  try {
    const res = await fetch('/api/upload-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: dataUrl })
    });
    return res.ok;
  } catch (err) {
    console.warn('Server upload failed (offline or preview mode):', err);
    return false;
  }
}

export function getStoredRayhanPhoto(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(PHOTO_STORAGE_KEY);
  } catch {
    return null;
  }
}

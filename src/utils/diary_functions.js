const DIARY_KEY = "ourDiary";

export function formatDate(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function parseDate(dateString) {
  const [dd, mm, yyyy] = dateString.split("/").map(Number);
  return new Date(yyyy, mm - 1, dd).getTime();
}

export function readDiary() {
  try {
    const raw = localStorage.getItem(DIARY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeDiary(entries) {
  localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
}

export function sortNewestFirst(entries) {
  return [...entries].sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export function hasEntryOnDate(entries, dateString) {
  return entries.some((entry) => entry.date === dateString);
}

export function makeId() {
  return `entry-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function pickRandomImage(images) {
  return images[Math.floor(Math.random() * images.length)];
}

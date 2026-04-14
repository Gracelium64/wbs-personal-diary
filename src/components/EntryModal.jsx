import { useEffect, useMemo, useState } from "react";
import { categories, moods } from "../data/posts";

export default function EntryModal({
  isOpen,
  mode,
  initialEntry,
  todayDate,
  onClose,
  onSave,
}) {
  const categoryOptions = useMemo(
    () => categories.filter((c) => c !== "All"),
    [],
  );

  const [title, setTitle] = useState(initialEntry?.title || "");
  const [excerpt, setExcerpt] = useState(initialEntry?.excerpt || "");
  const [category, setCategory] = useState(
    initialEntry?.category || categoryOptions[0],
  );
  const [mood, setMood] = useState(initialEntry?.mood || moods[0]);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) {
      setError("Title and excerpt are required.");
      return;
    }

    onSave({
      ...initialEntry,
      title: title.trim(),
      excerpt: excerpt.trim(),
      category,
      mood,
      date: initialEntry?.date || todayDate,
    });
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-var(--basicBitchBlack) px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl rounded-xl p-6 bg-(--popupBg) text-(--basicBitchWhite) border"
        >
          <h2 className="text-2xl mb-4 italic">
            {mode === "edit" ? "Edit entry" : "Add entry"}
          </h2>

          <label className="block mb-2 text-sm">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 rounded border"
          />

          <label className="block mb-2 text-sm">Excerpt</label>
          <textarea
            name="excerpt"
            id="excerpt"
            className="w-full mb-4 p-2 rounded min-h-24 text-(--basicBitchWhite) border"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm">Category</label>
              <select
                className="w-full p-2 rounded text-(--basicBitchWhite) border"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">Mood</label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full p-2 rounded text-(--basicBitchWhite) border"
              >
                {moods.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value=""></option>
              </select>
            </div>
          </div>

          <p className="text-sm mb-4 opacity-80">
            Date: {initialEntry?.date || todayDate}
          </p>

          {error ? <p className="text-red-300 text-sm mb-3">{error}</p> : null}

          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 rounded bg-(--buttonBg)">
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

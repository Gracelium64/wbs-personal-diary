import { useState } from "react";

export default function DailyLimitModal({
  isOpen,
  onClose,
  onOverrideSuccess,
}) {
  const [showOverride, setShowOverride] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function handleOverride() {
    if (password === "youjustlostthegame") {
      setPassword("");
      setError("");
      setShowOverride(false);
      onOverrideSuccess();
      return;
    }
    setError("You didn't say the magic word.");
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-(--basicBitchBlack) px-4">
        <div className="flex flex-col items-center w-full max-w-md rounded-xl p-6 text-center bg-(--popupBg) text-(--basicBitchWhite)">
          <h2 className="text-2xl mb-2">Only one entry per day!</h2>

          <button
            type="button"
            onClick={() => setShowOverride((v) => !v)}
            className="text-4xl leading-none mb-3"
            aria-label="Toggle override"
          >
            🔒
          </button>

          {showOverride ? (
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded mb-2 text-(--basicBitchWhite) border"
                placeholder="Override password"
              />
              <button
                type="button"
                onClick={handleOverride}
                className="px-4 py-2 rounded bg-(--buttonBg)"
              >
                OVERRIDE
              </button>
              {error ? (
                <p className="text-red-300 text-sm mt-2">{error}</p>
              ) : null}
            </div>
          ) : null}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border"
          >
            Ok
          </button>
        </div>
      </div>
    </>
  );
}

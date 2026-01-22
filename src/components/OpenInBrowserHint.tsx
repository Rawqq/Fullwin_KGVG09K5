import React from "react";
import { X } from "lucide-react";

type Props = {
  language?: "ru" | "en";
};

const STORAGE_KEY = "open_in_browser_hint_dismissed_v1";

function isMobileDevice() {
  const ua = navigator.userAgent || "";
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

function isTikTokInAppBrowser() {
  const ua = navigator.userAgent || "";
  // TikTok user agents vary; these tokens cover most common cases.
  return /tiktok|musical_ly|bytedance|aweme|ttwebview|zhiliaoapp|musically/i.test(ua);
}

export default function OpenInBrowserHint({ language = "ru" }: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!isMobileDevice()) return;
      if (!isTikTokInAppBrowser()) return;
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
      setOpen(true);
    } catch {
      // If storage is blocked (some in-app browsers), still show the hint.
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  const content =
    language === "en"
      ? {
          title: "Open in browser",
          text: "To open the Telegram app, tap the three dots in the top right and choose “Open in browser”.",
        }
      : {
          title: "Откройте в браузере",
          text: "Для того чтобы открыть приложение в Телеграме, нажмите на 3 точки справа сверху и выберите «Открыть в браузере».",
        };

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed right-4 top-14 z-[10000] w-[calc(100%-2rem)] max-w-[340px]">
      {/* Pulse marker that "points" to the top-right (where the ⋯ menu usually is in TikTok) */}
      <div className="pointer-events-none fixed right-2 top-2 z-[10001]">
        <div className="relative h-3 w-3">
          <span className="absolute inset-0 rounded-full bg-white/70 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-white" />
        </div>
      </div>

      <div className="relative rounded-2xl border border-white/15 bg-black/70 backdrop-blur-md p-3 shadow-2xl text-white">
        {/* Speech-bubble pointer */}
        <div className="pointer-events-none absolute -top-2 right-6 h-4 w-4 rotate-45 bg-black/70 border-l border-t border-white/15" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-2 top-2 rounded-full p-1 text-white/70 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <span className="text-lg leading-none">⋮</span>
          </div>
          <div className="text-sm leading-snug">
            <div className="font-semibold">{content.title}</div>
            <div className="mt-1 text-white/85">{content.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

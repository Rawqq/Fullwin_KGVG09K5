declare global {
  interface Window {
    ttq?: any;
  }
}

export function ttqReady(): boolean {
  return typeof window !== "undefined" && !!window.ttq;
}

export function tiktokTrack(eventName: string, data?: Record<string, any>) {
  if (!ttqReady()) return;
  window.ttq.track(eventName, data || {});
}

export function tiktokPage() {
  if (!ttqReady()) return;
  window.ttq.page();
}

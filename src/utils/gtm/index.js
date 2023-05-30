export function gtmEvent(event) {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event });
}

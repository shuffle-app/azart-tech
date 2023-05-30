export const GTM_ID = 'GTM-PQC67DR';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export function gtmEvent(event) {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event });
}

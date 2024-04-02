export const event = (action, category, label) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label
  });
};

// log the pageview with their URL
export const pageview = () => {
  window.ga('send', 'pageview');
};

// log specific events happening.
export const event = (category, action, label) => {
  window.ga('send', 'event', category, action, label);
};

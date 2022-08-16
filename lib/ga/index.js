// log the pageview with their URL
export const pageview = (url) => {
  // window.ga('send', 'pageview');
  console.log(url);
  console.log(window.gtag);
  window.gtag('event', 'page_view', {
    page_path: url
  });
};

// log specific events happening.
export const event = (category, action, label) => {
  window.ga('send', 'event', category, action, label);
};

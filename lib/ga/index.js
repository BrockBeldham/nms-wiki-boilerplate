// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('event', 'page_view', {
    page_path: url
  });
};

// log specific events happening.
export const click = (title, section, button) => {
  window.gtag('event', 'click', {
    page_title: title,
    page_section: section,
    button_text: button
  });
  
};

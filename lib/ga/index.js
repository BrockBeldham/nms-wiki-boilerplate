export const pageview = (url) => {
  window.gtag('event', 'page_view', {
    page_path: url
  });
};

export const buttonClick = (button) => {
  window.gtag('event', 'button_click', {
    page_title: document.title,
    page_path: window.location.pathname,
    button_text: button
  });
};

export const recordCiv = (civ) => {
  window.gtag('event', 'button_click', {
    page_title: document.title,
    page_path: window.location.pathname,
    civ_name: civ
  });
};

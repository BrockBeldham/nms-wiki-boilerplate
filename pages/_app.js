import '../node_modules/rc-tooltip/assets/bootstrap_white.css';
import '../public/fonts/fonts.css';
import '../styles/globals.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default App

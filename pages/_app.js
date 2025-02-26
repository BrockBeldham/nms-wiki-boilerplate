import '../node_modules/react-datepicker/dist/react-datepicker.css';
import '../public/fonts/fonts.css';
import '../styles/globals.scss';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default App;

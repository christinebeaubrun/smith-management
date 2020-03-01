import logMessage from './js/logger';
import './css/style.css';

logMessage('Welcome to SMITH Management Services!');

// no-undef
if(typeof(module.hot) !== 'undefined') {
    // eslint-disable-line
    module.hot.accept();
}
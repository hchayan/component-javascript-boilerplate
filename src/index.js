import App from './components/App/App.js';
import JavactDOM from '../lib/JavactDOM.js';

const props = { test: 'testValue' };
JavactDOM.render(App, document.querySelector('#app'), props);

import ReactDOM from 'react-dom';
import App from 'root/App';

const wrapper = document.querySelector('#container');

if (wrapper) {
  ReactDOM.render(App(), wrapper);
}

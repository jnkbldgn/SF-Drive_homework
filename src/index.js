import ReactDOM from 'react-dom';
import App from 'root/App';
import 'styles/global/index.scss';

const wrapper = document.querySelector('#container');

if (wrapper) {
  ReactDOM.render(App(), wrapper);
}

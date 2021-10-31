import Javact from '../../../lib/Javact.js';

import { SELECTOR } from '../../constants/DOMconstant.js';
import { $ } from '../../utils/DOMutil.js';

class App extends Javact.Component {
  setup() {
    this.state = {
      number: 0,
    };
  }

  initDOM() {
    this.$addNumber = $(`.${SELECTOR.ADD_NUMBER_BUTTON}`);
  }

  bindEvent() {
    this._addNumber();
  }

  // ======= Custom Event =========

  _addNumber() {
    this.$addNumber.addEventListener('click', () => {
      this.setState({ number: this.state.number + 1 });
    });
  }

  // ======= Render =========
  render() {
    const { test } = this.props;
    const { number } = this.state;

    return `
        <div>props's test value is ${test}.</div>
        <div>hello world! number is ${number}</div>
        <button class="${SELECTOR.ADD_NUMBER_BUTTON}">+1</button>
    `;
  }
}

export default App;

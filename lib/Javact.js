const Javact = {
  // component pattern's standard class
  Component: class {
    $target;
    props;
    state;

    constructor($target, props) {
      this.$target = $target;
      this.props = props;
      this.init();
      this.#render();
    }

    // setting initial State
    setup() {}

    // select DOM
    initDOM() {}

    // bind Event on selected DOM
    bindEvent() {}

    // set innerHTML
    render() {
      return ``;
    }

    #render() {
      this.$target.innerHTML = this.render();
      this.initDOM();
      this.bindEvent();
    }

    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.#render();
    }
  },
};

export default Javact;
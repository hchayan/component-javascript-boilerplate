const JavactDOM = {
  // method setting child component to parent component
  render: (component, container, props = {}) => {
    new component(container, props);
  },
};

export default JavactDOM;

import React from 'react';

const pageStyles = {
  graphEliment: { position: 'fixed', zIndex: 0, top:0 },
}

class GraphicsElement extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    require('./animDependencies/animScript');
  }
  render() {
    return <div style={pageStyles.graphEliment} id="WebGL-output"/>
  }
}

export default GraphicsElement;

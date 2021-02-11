import React from 'react';

const pageStyles = {
  graphEliment: { position: 'absolute', zIndex: 1, top:0 },
}

class GraphicsElement extends React.Component {
  componentDidMount() {
    require('./animDependencies/animScript');
  }
  render() {
    return <div style={pageStyles.graphEliment} id="WebGL-output"/>
  }
}

export default GraphicsElement;

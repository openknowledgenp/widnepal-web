import React from 'react';

const pageStyles = {
  graphEliment: { position: 'absolute', zIndex: 1, top:0 },
}

class GraphicsElement extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    require('./animDependencies/animScript');
  }
  render() {
    const isNotHomePage = (this.props.isAboutPage)
    return <div style={pageStyles.graphEliment} id="WebGL-output"/>
  }
}

export default GraphicsElement;

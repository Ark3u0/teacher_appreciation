
import React from 'react';

const { Component, PropTypes } = React;

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={() => this.props.viewSetCallback("HOME")} style={style.logo}>
      <img src={this.props.logoLink} style={style.logo}/>
    </div>
  }
}

Logo.propTypes = {
  viewSetCallback: PropTypes.func.isRequired,
  logoLink: PropTypes.string.isRequired
};

const style = {
  logoContainer: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  logo: {
    backgroundColor: 'transparent',
    border: 'none',
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    width: 'auto',
    display: 'inline'
  }
};

module.exports = Logo;
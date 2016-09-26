import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Styles from './MyComponent.scss';

@CSSModules(Styles)
export default class CodeEditor extends Component {

  onChange = (newValue) => {
    this.props.onChange(newValue);
  }

  render() {
    let { value } = this.props;

    return (
      <div styleName="container">
        <input type="text" value={value} onKeyDown={this.onChange}/>
        { value }
      </div>
    );
  }

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }
}

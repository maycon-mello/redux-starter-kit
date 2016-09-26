import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Styles from './App.scss';
import { MyActions } from '../redux/actions';
import { MyComponent } from '../components';

@CSSModules(Styles)
export class App extends Component {

  render() {
    const { code, actions } = this.props;

    return (
      <div styleName="app">
        <MyComponent value={code} onChange={actions.setValue}/>
      </div>
    );
  }

  static propTypes = {
    code: PropTypes.objectOf(PropTypes.mixed),
    actions: PropTypes.objectOf(PropTypes.func),
  }

}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(MyActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

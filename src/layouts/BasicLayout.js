import React, { PureComponent } from 'react';
import { withRouter, connect } from 'umi';
import { setLang, getQueryVariable } from '@/utils';

class BasicLayout extends PureComponent {
  componentDidMount() {
    const lang = getQueryVariable('lang') || null;
    if (!lang) {
      setLang('en-US');
    }
  }

  render() {
    const { children } = this.props;
    return <div style={{ overflowX: 'hidden' }}>{children}</div>;
  }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(BasicLayout));

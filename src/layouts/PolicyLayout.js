import React, { PureComponent } from 'react';
import { getLocale } from 'umi';
import { setLang } from '@/utils';

class PolicyLayout extends PureComponent {
  changeLang = () => {
    const lang = getLocale() || 'en-US';
    setLang(lang === 'en-US' ? 'ar-EG' : 'en-US');
  };

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default PolicyLayout;

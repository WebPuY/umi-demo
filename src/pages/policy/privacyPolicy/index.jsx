import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { useIntl, getLocale } from 'umi';
import { BrowserType } from '@/utils';
import styles from '../policy.less';

export default function() {
  const lang = getLocale();
  const platform = BrowserType().system;
  const intl = useIntl();

  return (
    <div className={classnames(styles.privacyContainer, lang === 'ar-EG' ? styles.textRight : '')}>
      <h1>{intl.formatMessage({ id: 'privacy_policy_title' })}</h1>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_1' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_2' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_3' })}</p>

      <h1>{intl.formatMessage({ id: 'privacy_policy_subTitle_1' })}</h1>

      <h2>{intl.formatMessage({ id: 'privacy_policy_p_4' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_5' })}</p>

      <h2>{intl.formatMessage({ id: 'privacy_policy_p_6' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_7' })}</p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_8' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_9' })}</p>
      <h3>{intl.formatMessage({ id: 'privacy_policy_p_10' })}</h3>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_11' })}</p>

      <h2>{intl.formatMessage({ id: 'privacy_policy_p_12' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_13' })}</p>

      <h2>{intl.formatMessage({ id: 'privacy_policy_p_14' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_15' })}</p>

      <h2>{intl.formatMessage({ id: 'privacy_policy_p_16' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_17' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_18' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_19' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_20' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_21' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_22' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_23' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_24' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_25' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_26' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_27' })}</p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_28' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_29' })}</p>
      <p>
        {intl.formatMessage({ id: 'privacy_policy_p_30' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_31' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_32' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_33' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_34' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_35' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_36' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_37' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_38' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_39' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_40' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_41' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_42' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_43' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_44' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_45' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_46' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_47' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_48' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_49' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_50' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_51' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_52' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_53' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_54_1' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_54_2' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_55' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_56' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_57' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_58' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_59' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_60' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_61' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_62' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_63' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_64' })}
      </p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_65' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_66' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_67' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_68' })}</p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_69' })}</h2>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_70' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_71' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_72' })}</p>
      <p>{intl.formatMessage({ id: 'privacy_policy_p_73' })}</p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_74' })}</h2>
      <p>
        {intl.formatMessage({ id: 'privacy_policy_p_75' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_76' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_77' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_78' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_79' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_80' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_81' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_82' })}
      </p>
      <h2>{intl.formatMessage({ id: 'privacy_policy_p_83' })}</h2>
      <p>
        {intl.formatMessage({ id: 'privacy_policy_p_84' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_85' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_86' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_87' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_88' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_89' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_90' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_91' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_92' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_93' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_94' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_95' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_96' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_97' })}
        <br />
        {intl.formatMessage({ id: 'privacy_policy_p_98' })}
        &nbsp;
        <a className="isDisabled" href={`test@test.com`}>
          {`test@test.com`}
        </a>
        .<br />
        {intl.formatMessage({ id: 'privacy_policy_p_99' })}
      </p>
    </div>
  );
}

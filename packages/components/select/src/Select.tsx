import * as React from 'react';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { ErrorText, Description } from '@synerise/ds-typography';
import '@synerise/ds-core/dist/js/style';
import './style/index.less';
import { Close3M, CloseS } from '@synerise/ds-icon/dist/icons';
import Icon from '@synerise/ds-icon';
import Tooltip from '@synerise/ds-tooltip';
import classNames from 'classnames';
import * as S from './Select.styles';

export interface Props<T = SelectValue> extends Omit<SelectProps<T>,'listHeight'> {
  errorText?: React.ReactNode | string;
  error?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  tooltip?: React.ReactNode;
  clearTooltip?: string;
  prefixel?: React.ReactNode;
  suffixel?: React.ReactNode;
  listHeight?: React.ReactText;
}

class Select extends React.Component<Props> {
  static Option = S.AntdSelectOption;
  static OptGroup = S.AntdSelectOptGroup;

  render(): React.ReactNode {
    const {
      label,
      description,
      errorText,
      error,
      tooltip,
      clearTooltip,
      prefixel,
      suffixel,
      style,
      listHeight,
      ...antdProps
    } = this.props;
    const { size } = antdProps;
    return (
      <>
        <S.Label label={label} tooltip={tooltip} />
        <S.SelectWrapper className={classNames('ds-select-wrapper', { error: errorText || error })} style={style}>
          {!!prefixel && <S.PrefixWrapper>{prefixel}</S.PrefixWrapper>}
          <S.AntdSelect
            {...antdProps}
            listHeight={listHeight}
            size={size}
            prefixel={!!prefixel}
            suffixel={!!suffixel}
            clearIcon={
              <Tooltip title={clearTooltip}>
                <span>
                  <Icon component={<Close3M />} size={size === 'small' ? 18 : 24} />
                </span>
              </Tooltip>
            }
            removeIcon={<Icon component={<CloseS />} />}
            className={classNames({ error: errorText || error })}
          />
          {!!suffixel && <S.SuffixWrapper>{suffixel}</S.SuffixWrapper>}
        </S.SelectWrapper>

        {errorText && (
          <S.ErrorWrapper>
            <ErrorText>{errorText}</ErrorText>
          </S.ErrorWrapper>
        )}
        {description && (
          <S.DescWrapper withError={Boolean(errorText)}>
            {description && <Description disabled={antdProps.disabled}>{description}</Description>}
          </S.DescWrapper>
        )}
      </>
    );
  }
}

export default Select;

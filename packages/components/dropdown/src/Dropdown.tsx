import * as React from 'react';
import '@synerise/ds-core/dist/js/style';
import './style/index.less';
import AntdDropdown, { DropDownProps as AntDropDownProps } from 'antd/lib/dropdown';
import SearchBar from '@synerise/ds-search-bar/';
import { getPopupContainer } from '@synerise/ds-utils';
import BottomAction from './elements/BottomAction/BottomAction';
import BackAction from './elements/BackAction/BackAction';
import { Wrapper } from './Dropdown.styles';
import TextTrigger from './elements/TextTrigger/TextTrigger';

export type DropdownProps = AntDropDownProps;

class Dropdown extends React.Component<DropdownProps> {
  static Wrapper: typeof Wrapper = Wrapper;
  static SearchInput: typeof SearchBar = SearchBar;
  static BottomAction: typeof BottomAction = BottomAction;
  static BackAction: typeof BackAction = BackAction;
  static Button: typeof AntdDropdown.Button = AntdDropdown.Button;
  static TextTrigger: typeof TextTrigger = TextTrigger;

  render(): React.ReactNode {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <AntdDropdown
        getPopupContainer={getPopupContainer}
        align={{ offset: [0, 8] }} // STOR-588
        {...this.props}
      />
    );
  }
}

export default Dropdown;

import * as React from 'react';
import '@synerise/ds-core/dist/js/style';
import './style/index.less';
import AntdDropdown, { DropDownProps } from 'antd/lib/dropdown';
import SearchInput from './elements/SearchInput/SearchInput';
import BottomAction from './elements/BottomAction/BottomAction';
import { Wrapper } from './Dropdown.styles';

class Dropdown extends React.Component<DropDownProps> {
  static Wrapper: typeof Wrapper = Wrapper;
  static SearchInput: typeof SearchInput = SearchInput;
  static BottomAction: typeof BottomAction = BottomAction;

  render(): React.ReactNode {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <AntdDropdown {...this.props} />
    );
  }
}

export default Dropdown;
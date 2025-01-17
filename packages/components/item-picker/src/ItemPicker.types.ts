import { IntlShape } from 'react-intl';
import { MenuItemProps } from '@synerise/ds-menu/dist/Elements/Item/MenuItem.types';
import * as React from 'react';
import { DropdownProps } from '@synerise/ds-dropdown/dist/Dropdown';

export type ItemPickerSize = 'small' | 'large';

export type ItemPickerProps = {
  dataSource: MenuItemProps[];
  intl: IntlShape;
  onChange: (item: MenuItemProps) => void;
  onClear: () => void;
  placeholder: string | React.ReactNode;
  changeButtonLabel?: string | React.ReactNode;
  clear?: string | React.ReactNode;
  clearConfirmTitle?: string;
  closeOnBottomAction?: boolean;
  description?: string | React.ReactNode;
  disabled?: boolean;
  dropdownBottomAction?: React.ReactNode;
  dropdownProps?: DropdownProps;
  dropdownRowHeight?: number;
  dropdownVisibleRows?: number;
  error?: boolean;
  errorMessage?: string | React.ReactNode;
  label?: string | React.ReactNode;
  onBlur?: () => void;
  onFocus?: () => void;
  noResults?: string;
  noText?: string;
  placeholderIcon?: React.ReactNode;
  searchPlaceholder?: string;
  selectedItem?: MenuItemProps | undefined;
  size?: ItemPickerSize;
  tooltip?: string | React.ReactNode;
  withClearConfirmation?: boolean;
  yesText?: string;
};

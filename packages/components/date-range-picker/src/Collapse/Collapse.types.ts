import * as React from 'react';

type CommonProps = {
  header: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  customIcon?: React.ReactNode;
  iconHandle?: boolean;
  optionalHeaderComponent?: React.ReactNode;
};

type PropsControlled = {
  hideArrow?: boolean;
  collapsed?: boolean;
  controlled?: boolean;
  onCollapseChange?: () => void;
} & CommonProps;

type PropsNotControlled = {
  defaultCollapsed?: boolean;
} & CommonProps;

export type Props = PropsControlled & PropsNotControlled;

export type State = {
  collapsed: boolean;
};
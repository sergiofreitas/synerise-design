import * as React from 'react';
import { UserM, UserS } from '@synerise/ds-icon/dist/icons';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import Icon from '@synerise/ds-icon';
import Badge from '@synerise/ds-badge';

import Avatar from '../Avatar';
import { getUserText, addIconColor, getColorByText } from '../utils';
import { UserAvatarProps } from '../Avatar.types';

export const DEFAULT_COLOR = 'grey';
export const DEFAULT_COLOR_HUE = '500';

const UserAvatar: React.FC<UserAvatarProps> = ({
  backgroundColor,
  size,
  text,
  tooltip,
  badgeStatus,
  firstName = '',
  lastName = '',
  email,
  src,
  iconComponent,
  children,
  disabled,
  style,
  ...restProps
}) => {
  const avatarText = getUserText(firstName, lastName, src, text);
  const defaultTooltip = { title: `${firstName} ${lastName}`.trim(), description: email || '' };
  const avatarTooltip =
    tooltip === undefined && (defaultTooltip.title || defaultTooltip.description) 
      ? defaultTooltip 
      : tooltip;

  const iconColor = theme.palette[`${DEFAULT_COLOR}-${DEFAULT_COLOR_HUE}`];
  const iconElement = addIconColor(iconComponent, iconColor);

  const icon = !avatarText
    ? iconElement || <Icon component={size === 'small' ? <UserS /> : <UserM />} color={theme.palette['grey-500']} />
    : null;

  const [avatarBackgroundColor, avatarBackgroundHue] = getColorByText(avatarText, backgroundColor);

  const avatar = (
    <Avatar
      iconComponent={icon}
      shape="circle"
      hasStatus={disabled === true ? false : !!badgeStatus}
      backgroundColor={avatarBackgroundColor}
      backgroundColorHue={avatarBackgroundHue}
      size={size}
      src={src}
      tooltip={avatarTooltip}
      disabled={disabled}
      style={badgeStatus ? {} : style}
      {...restProps}
    >
      {children || avatarText}
    </Avatar>
  );

  return badgeStatus ? (
    <span style={style}>
      <Badge status={badgeStatus}>{avatar}</Badge>
    </span>
  ) : (
    avatar
  );
};

export default UserAvatar;

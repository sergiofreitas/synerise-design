import * as React from 'react';
import { MailM } from '@synerise/ds-icon/dist/icons';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
import Icon from '@synerise/ds-icon';
import Badge from '@synerise/ds-badge';
import Status from '@synerise/ds-status';

import Avatar from '../Avatar';
import { getObjectName, addIconColor } from '../utils';

import { ObjectAvatarProps } from '../Avatar.types';

export const DEFAULT_COLOR_HUE = '600';
export const DEFAULT_COLOR = 'grey';

const ObjectAvatar: React.FC<ObjectAvatarProps> = ({
  backgroundColor = 'grey',
  badgeStatus,
  iconComponent,
  color = 'grey',
  size,
  src,
  tooltip,
  objectName,
  objectDescription,
  objectStatus,
  text,
  children,
  disabled,
  style,
  ...restProps
}) => {
  const defaultTooltip = {
    title: objectName || '',
    description: objectDescription || '',
    status: objectStatus ? <Status label={objectStatus} type="disabled" /> : '',
  };
  const avatarText = getObjectName(objectName, text);
  const iconColor = theme.palette[`${color || DEFAULT_COLOR}-${DEFAULT_COLOR_HUE}`];
  const avatarTooltip =
    tooltip === undefined && (defaultTooltip.title || defaultTooltip.description) ? defaultTooltip : tooltip;

  const iconElement = addIconColor(iconComponent, iconColor);

  const icon = !avatarText ? iconElement || <Icon component={<MailM />} color={iconColor} /> : null;

  const avatar = (
    <Avatar
      iconComponent={icon}
      shape="square"
      backgroundColor={avatarText ? backgroundColor : 'grey'}
      backgroundColorHue={avatarText ? '500' : '100'}
      size={size}
      hasStatus={disabled === true ? false : !!badgeStatus}
      src={src}
      tooltip={avatarTooltip}
      disabled={disabled}
      {...restProps}
    >
      {children || avatarText}
    </Avatar>
  );

  return badgeStatus ? (
    <div style={style}>
      <Badge status={badgeStatus}>{avatar}</Badge>
    </div>
  ) : (
    avatar
  );
};

export default ObjectAvatar;

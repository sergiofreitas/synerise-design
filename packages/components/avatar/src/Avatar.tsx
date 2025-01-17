import * as React from 'react';
import Tooltip from '@synerise/ds-tooltip';
import '@synerise/ds-core/dist/js/style';

import { isIconComponent } from './utils';
import AntdAvatar from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

import './style/index.less';

export const DEFAULT_SIZE = 'medium';
export const ICON_SIZES = {
  small: 16,
  medium: 24,
  large: 30,
  extraLarge: 42,
};

const Avatar: React.FC<AvatarProps> = ({
  backgroundColor,
  backgroundColorHue = '500',
  children,
  disabled = false,
  hasStatus = false,
  iconComponent,
  iconScale = true,
  tooltip = {},
  size = DEFAULT_SIZE,
  ...antdProps
}) => {
  const [pressed, setPressed] = React.useState(false);
  const sizes = { ...ICON_SIZES };
  let iconElement = iconComponent as React.ReactElement;

  // Enforce icon to be scaled
  if (isIconComponent(iconElement?.type) && iconScale) {
    if (iconElement.props.component.type?.name?.match(/S$/)) {
      sizes.small = 24;
    }

    const iconSize = sizes[size] || sizes[DEFAULT_SIZE];

    iconElement = React.cloneElement(iconElement, {
      size: iconSize,
    });
  }

  const tooltipProps =
    tooltip !== false
      ? {
          ...tooltip,
          title: tooltip.title || tooltip.name,
          description: tooltip.description || tooltip.email,
        }
      : {};

  return (
    <Tooltip type="avatar" mouseLeaveDelay={0} mouseEnterDelay={0} {...tooltipProps}>
      <AntdAvatar
        className="ds-avatar"
        onMouseDown={(): void => setPressed(true)}
        onMouseOut={(): void => setPressed(false)}
        onMouseUp={(): void => setPressed(false)}
        onBlur={(): void => setPressed(false)}
        pressed={pressed}
        hasStatus={hasStatus}
        backgroundColor={backgroundColor}
        backgroundColorHue={backgroundColorHue}
        disabled={disabled}
        size={size}
        {...antdProps}
      >
        {iconElement || children}
      </AntdAvatar>
    </Tooltip>
  );
};

export default Avatar;

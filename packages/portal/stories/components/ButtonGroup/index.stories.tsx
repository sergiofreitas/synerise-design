import * as React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Button from '@synerise/ds-button';
import ButtonGroup from '@synerise/ds-button-group';

const stories = {
  default: () => {
    // ButtonGroup props
    const withTitle = boolean('With title', true);
    const withDescription = boolean('With description', true);

    // Button props
    const buttonTypes = {
      Primary: 'primary',
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Ghost: 'ghost',
      Danger: 'danger',
      Success: 'success',
      Warning: 'warning',
    };

    const buttonProps = {
      disabled: boolean('Disable buttons', false),
      loading: boolean('Button loading status', false),
      content: text('Button text', 'Button'),
      type: select('Button type', buttonTypes, 'primary'),
      icon: text('Button icon', 'poweroff'),
    };

    return (
      <div style={{ background: '#f2f5f6', padding: '16px', display: 'flex' }}>
        <ButtonGroup
          title={withTitle && 'Some title'}
          description={withDescription && 'Some description'}
        >
          <Button {...buttonProps}>{buttonProps.content}</Button>
          <Button {...buttonProps}>{buttonProps.content}</Button>
          <Button {...buttonProps}>{buttonProps.content}</Button>
        </ButtonGroup>
      </div>
    );
  },
};

export default {
  name: 'Components|ButtonGroup',
  stories,
  Component: ButtonGroup,
};

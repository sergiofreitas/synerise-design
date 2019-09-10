import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  const onClick = jest.fn();
  it('should render', function() {
    // ARRANGE
    const { getByText } = render(<Button onClick={onClick}>Click ME!</Button>);
    // ACT

    // ASSERT
    expect(getByText('Click ME!')).toBeTruthy();
  });
  it('should onClick be called', function() {
    // ARRANGE
    const { getByText } = render(<Button onClick={onClick}>Click ME!</Button>);

    // ACT
    fireEvent.click(getByText('Click ME!'));

    // ASSERT
    expect(onClick).toBeCalled();
  });
});

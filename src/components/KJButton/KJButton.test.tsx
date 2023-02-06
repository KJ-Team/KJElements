import React from 'react';
import { render } from '@testing-library/react';
import KJButton from './KJButton';

describe('KJButton', function() {
  test('renders the Button component', () => {
    render(<KJButton>test text</KJButton>);
  });
});
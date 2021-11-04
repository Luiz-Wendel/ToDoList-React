import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from './index';

describe('SignInPage', () => {
  it('should have a title', () => {
    render(<SignIn />);

    const titleElement = screen.getByTestId('signin-title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(/signin/i);
  });
});

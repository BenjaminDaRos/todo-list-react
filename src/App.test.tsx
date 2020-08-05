import React from 'react';
import { render } from '@testing-library/react';
import { TodoReact } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<TodoReact />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import {render} from '@testing-library/react';
import Header from '../common/Header';

// Smoke test

it('should render without crashing', function() {
  render(<Header />);
});

// Snapshot test
it('should match snapshot', () => {
  const {asFragment} = render(<Header />);
  expect(asFragment).toMatchSnapshot()
});
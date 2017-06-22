// Link.react-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../containers/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter><Navbar /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

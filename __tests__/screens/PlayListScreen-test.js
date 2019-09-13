import React from 'react';
import { PlayListScreen } from '../../src/screens';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PlayListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
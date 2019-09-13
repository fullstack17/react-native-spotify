import React from 'react';
import { TrackListScreen } from '../../src/screens';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<TrackListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
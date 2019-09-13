import React from 'react';
import { Header } from '../../src/components';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Header
      title=""
      onBack={() => null}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
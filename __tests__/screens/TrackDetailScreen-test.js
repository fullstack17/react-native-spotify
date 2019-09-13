import React from 'react';
import { TrackDetailScreen } from '../../src/screens';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<TrackDetailScreen
    navigation={{ 
      state: { 
        params: { 
          trackItem: { 
            track: { 
              artists: [], 
              album: { name: '' } 
            } 
          } 
        } 
      } 
    }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
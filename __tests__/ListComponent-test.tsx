/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 import ListComponent from '../src/app/components/list-component/ListComponent';
 
 describe('Test para Home Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
 
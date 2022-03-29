/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 import HomeComponent from '../src/app/components/home-component/HomeComponent';
 import { render, fireEvent, waitFor } from "@testing-library/react-native";
 
 describe('Test para Home Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigates on Tasks button press', () => {
    const push = jest.fn();
    const { getByText } = render(<HomeComponent navigation={{ push }} />);
    fireEvent.press(getByText('Tasks'));
    expect(push).toHaveBeenCalledWith('Tasks');
  });
  
  it('navigates on List button press', () => {
    const push = jest.fn();
    const { getByText } = render(<HomeComponent navigation={{ push }} />);
    fireEvent.press(getByText('List'));
    expect(push).toHaveBeenCalledWith('Lists');
  });
 })
 
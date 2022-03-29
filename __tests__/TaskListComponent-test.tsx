/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
import TaskListComponent from '../src/app/components/task-list-component/TaskListComponent';
import { render } from '@testing-library/react-native';
 
 describe('test for TaskList Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TaskListComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render with empty props', () => {
    const tasks: any = [];
    const { getByText, getByPlaceholderText } = render(<TaskListComponent tasks={tasks}/>);
    expect(getByText('No hay tareas que mostrar.')).toBeTruthy();
  })

  test('render with props', () => {
    const tasks: any = [{id: 1, task: "Task 1"}];
    const { getByText, getByPlaceholderText } = render(<TaskListComponent tasks={tasks}/>);
    expect(getByText('Task 1')).toBeTruthy();
  })
})
 
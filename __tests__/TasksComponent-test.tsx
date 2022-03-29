/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 import TasksComponent from '../src/app/components/tasks-component/TasksComponent';
 import { Provider } from 'react-redux';
 import store from '../src/app/store/store';
 import { render, fireEvent, waitFor } from "@testing-library/react-native";
 
  jest.useFakeTimers();

  describe("Tests for TaskComponent", () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Provider store={store}>
        <TasksComponent />
      </Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('open and close modal', () => {
      const { getByText} = render(<Provider store={store}>
        <TasksComponent />
      </Provider>);

      //open modal
      const modal = getByText('Nueva tarea');
      fireEvent.press(modal);

      //close modal
      const closemodal = getByText('Cerrar');
      fireEvent.press(closemodal);
    })

    test('add new task', () => {
      const { getByText, getByPlaceholderText } = render(<Provider store={store}>
        <TasksComponent />
      </Provider>);

      //open modal
      const modal = getByText('Nueva tarea');
      fireEvent.press(modal);

      //test add
      const input = getByPlaceholderText("Tarea");
      expect(input).toBeTruthy();
      const task = "Tarea 1";
      fireEvent.changeText(input, task);
      fireEvent.press(getByText('Agregar'));

      const tasks: any = store.getState();
      expect(tasks.length).toEqual(1);
      expect(tasks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            task: task,
          }),
        ])
      );
    })

    test('add new error task', () => {
      const { getByText, getByPlaceholderText } = render(<Provider store={store}>
        <TasksComponent />
      </Provider>);

      //open modal
      const modal = getByText('Nueva tarea');
      fireEvent.press(modal);

      //test add
      const input = getByPlaceholderText("Tarea");
      expect(input).toBeTruthy();
      const task = "";
      fireEvent.changeText(input, task);
      fireEvent.press(getByText('Agregar'));

      expect(getByText('Escribe la tarea a guardar.')).toBeTruthy();
    })
  })

 
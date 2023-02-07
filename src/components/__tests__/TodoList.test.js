import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import TodoList from '../TodoList';
import { todoListMocks as mocks } from '../mocks';
import "@testing-library/jest-dom/extend-expect";

describe('Todo', () => {
    afterEach(cleanup);

    it("renders correctly", () => {
        render(<TodoList todos={mocks} />);

        const todoElement = screen.getByTestId("todo-test");
        expect(todoElement).toBeInTheDocument();
    });


    test("snapshot renders correctly", () => {
        const renderer = create(<TodoList todos={mocks} />);
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    });


    it("maps todo item", () => {
        render(<TodoList todos={mocks} />);
        const todoElements = screen.getAllByTestId("todo-list");

        expect(todoElements.length).toEqual(mocks.length);

    });


    test("ckeckbox should move todolist", () => {
        const setDoneMock = jest.fn();
        const setTodoMock = jest.fn();

        render(<TodoList todos={mocks} setDone={setDoneMock} setTodos={setTodoMock} />);

        const todoElements = screen.getAllByTestId("todo-list");
  
        const [itemCheckbox] = screen.getAllByRole('checkbox');

        expect(itemCheckbox).toBeTruthy();

        const initialLength = mocks.length;

        fireEvent.click(itemCheckbox);

        const [todo1Mock] = mocks;

        const filteredMockArray = mocks.filter((todo) => todo.id !== todo1Mock.id);

        expect(todoElements.length).toEqual(mocks.length);
        expect(setTodoMock).toHaveBeenCalledWith(filteredMockArray);
        expect(filteredMockArray.length).toEqual(initialLength - 1)
    });

});
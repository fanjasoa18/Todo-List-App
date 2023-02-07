import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Header from '../Header';
afterEach(cleanup);

describe('Header', () => {

    it("renders correctly", () => {
        render(<Header/>);
        const headerElement = screen.getByTestId('head');
        expect(headerElement).toHaveTextContent('ToDo List App');
    });
})
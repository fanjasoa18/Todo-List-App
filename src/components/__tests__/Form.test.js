import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";
import Form from '../Form';
afterEach(cleanup);

describe('Form', () => {

    it("renders correctly", () => {
        const onFormSubmit = jest.fn();
        render(<Form onSubmit={onFormSubmit}/>);

        const formElement = screen.getByTestId("form");
        expect(formElement).toBeInTheDocument();
        
    })

    test("snapshot renders correctly", () => {
        const onFormSubmit = jest.fn();
        const renderer = create(<Form onSubmit={onFormSubmit} />);
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    });


})
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import {create} from 'react-test-renderer';
import DoneList from '../DoneList';
import {todoListMocks as Mocks} from '../mocks';
import "@testing-library/jest-dom/extend-expect";


describe('Done', () => {
    it("renders correctly", () => {
        const {getByTestId} = render(<DoneList done={Mocks}/>);

        const doneElement = getByTestId("done-test");
        expect(doneElement).toBeInTheDocument();
    });


    test("snapshot renders correctly", () => {
        const renderer = create(<DoneList done={Mocks}/>)
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    });


    it("maps done item", () => {
        render(<DoneList done={Mocks}/>);
        const doneElementS = screen.getAllByTestId("done-list");
        
        expect(doneElementS.length).toEqual(Mocks.length);
        
    });
})
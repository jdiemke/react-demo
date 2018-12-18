import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {

    it('renders without crashing', () => {
        shallow(<Counter />);
    });

    it('should generate correct html', () => {
        const wrapper = shallow(<Counter />);
        const headlineText = wrapper.find('h1').text();

        expect(headlineText).toBe('1337');
    });

});

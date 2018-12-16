import React from 'react';
import ReactDOM from 'react-dom';
import Counter from  './Counter';

describe('Counter', () => {

    it('should generate correct html', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter />, div);
    
        expect(div.innerHTML).toBe('<h1>1337</h1>');
    
        ReactDOM.unmountComponentAtNode(div);
    });
    
});

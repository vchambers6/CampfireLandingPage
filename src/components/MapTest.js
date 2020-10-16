import React from 'react';
//import htmlContent from './MapTest.html';
var htmlContent = require('./MapTest.html');

export default function MyComponent() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}
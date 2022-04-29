
import React from 'react';
import Provider from './Provider';
import Starred from '../Starred';


export default function() {
    return (
        <Provider>
            <Starred />
        </Provider>
    )
}
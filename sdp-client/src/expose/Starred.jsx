
import React from 'react';
import Provider from './Provider';
import Starred from '@/pages/Starred';


export default function() {
    return (
        <Provider>
            <Starred />
        </Provider>
    )
}
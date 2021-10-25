import React from 'react';
import { Home } from '../home/Home';
import { Category } from '../category/Category';
import { About } from '../about/About';
import { TrickTreat } from '../trick/TrickTreat';
import { Discount } from '../discount/Discount';
import { New } from '../new/New';
import { NewsLetter } from '../newsletter/NewsLetter';

export const Main = () => {

    
    

    return (
        <main className="main">
            <Home/>
            <Category/>
            <About/>
            <TrickTreat/>
            <Discount/>
            <New/>
            <NewsLetter/>
        </main>
    )
}

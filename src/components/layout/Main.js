import React from 'react';
import { Home } from '../home/Home';
import { Category } from '../category/Category';
import { About } from '../about/About';
import { TrickTreat } from '../trick/TrickTreat';

export const Main = () => {
    return (
        <main className="main">
            <Home/>
            <Category/>
            <About/>
            <TrickTreat/>
            <section className="section discount"></section>
        </main>
    )
}

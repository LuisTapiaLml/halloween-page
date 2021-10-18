import React from 'react';
import { Home } from '../home/Home';
import { Category } from '../category/Category';
import { About } from '../about/About';

export const Main = () => {
    return (
        <main className="main">
            <Home/>
            <Category/>
            <About/>
            
            <section className="section trick" id="trick"></section>
            <section className="section discount"></section>
        </main>
    )
}

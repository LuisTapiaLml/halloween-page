import React from 'react';
import { Home } from '../home/Home';
import { Category } from '../category/Category';

export const Main = () => {
    return (
        <main className="main">
            <Home/>
            <Category/>
            <section className="section about" id="about"></section>
            <section className="section trick" id="trick"></section>
            <section className="section discount"></section>
        </main>
    )
}

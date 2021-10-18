import React from 'react';
import { Home } from '../home/Home';


export const Main = () => {
    return (
        <main className="main">
            <Home/>
            <section className="section category"></section>
            <section className="section about" id="about"></section>
        </main>
    )
}

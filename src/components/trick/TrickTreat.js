import React from 'react'
import { tricks_treats } from '../../data/tricks_treats'

export const TrickTreat = () => {
    return (
        <section className="section trick" id="trick">
            
            <h2 className="section__title">Trick or Treat</h2>

            <div className="trick__container container grid">
                {
                    tricks_treats.map(trick => (

                        <div className="trick__content">
                            <img src={trick.img} alt="trick img" className="trick__img" />
                            <h3 className="trick__title">{trick.title}</h3>
                            <span className="trick__subtitle">{trick.subtitle}</span>
                            <div className="trick__price">{trick.price}</div>
                            <button className="button trick__button">
                                <i className='bx bx-cart-alt trick__icon'></i>
                            </button>
                        </div>

                    ))
                }
            </div>

        </section>
    )
}

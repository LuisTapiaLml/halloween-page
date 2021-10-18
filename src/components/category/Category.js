import React from 'react'
import { categories } from '../../data/categories'

export const Category = () => {
    return (
        <section className="section category">
            <h2 className="section__title">Favorite Scare <br /> Category </h2>

            <div className="category__container container grid">
                {
                    categories.map(category => (

                        <div className="category__data">
                            <img src={category.img} alt="category 1" className="category__img" />
                            <h3 className="category__title">{category.title}</h3>
                            <p className="category__description">{category.description}</p>
                        </div>

                    ))
                }
            </div>

        </section>
    )
}

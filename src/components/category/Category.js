import React from 'react'

export const Category = () => {
    return (
        <section className="section category">
            <h2 className="section__title">Favorite Scare <br /> Category </h2>
            
            <div className="category__container container grid">

                <div className="category__data">
                    <img src="img/category1-img.png" alt="category 1" className="category__img" />
                    <h3 className="category__title">Ghosts</h3>
                    <p className="category__description">Choose the ghosts, the scariest there are.</p>
                </div>

                <div className="category__data">
                    <img src="img/category2-img.png" alt="category 2" className="category__img" />
                    <h3 className="category__title">Pumpkins</h3>
                    <p className="category__description">You look at the scariest pumpkins there is.</p>
                </div>

                <div className="category__data">
                    <img src="img/category3-img.png" alt="category 3" className="category__img" />
                    <h3 className="category__title">Witch Hat</h3>
                    <p className="category__description">Pich the most stylish hats out there.</p>
                </div>

            </div>

        </section>
    )
}

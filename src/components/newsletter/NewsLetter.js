import React from 'react'
import { useEffect } from 'react'

export const NewsLetter = () => {

    // useEffect(() => {
    //     const sections = document.querySelectorAll('section[id]')

    //     function scrollActive(){
    //         const scrollY = window.pageYOffset

    //         sections.forEach(current =>{
    //             const sectionHeight = current.offsetHeight,
    //                 sectionTop = current.offsetTop - 50,
    //                 sectionId = current.getAttribute('id')

    //             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    //                 document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    //             }else{
    //                 document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    //             }
    //         })
    //     }
    //     window.addEventListener('scroll', scrollActive)
    // }, [])

    return (
        <section className="section newsletter">
            <div className="newsletter__container container">
                <h2 className="section__title">Our Newsletter</h2>
                <p className="newsletter__description">
                    Promotion new products and sales. Directly to your inbox.
                </p>
                <form action="" className="newsletter__form">
                    <input type="text" className="newsletter__input" placeholder="Enter your email" />
                    <button className="button">Suscribe</button>
                </form>
            </div>
        </section>
    )
}

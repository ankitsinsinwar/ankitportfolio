import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio2 from '../../assets/portfolio2.png'
import Portfolio3 from '../../assets/portfolio3.png'
import Portfolio4 from '../../assets/portfolio4.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve thir goals and create a strong online presence.</span>
        <div className='worksImgs'>
           <div className='row'> 
           <img src={Portfolio1} alt='' className='worksImg' />
           <div className='layer'>
           <h4>weather app</h4>
           <p> The weather api based application shows the real time weather information with additional functionalities like - temprature, wind, humidity and clouds or (rain).</p>
          <a href='https://myweatherapp-beryl.vercel.app/' target='_blank'><i class='bx bx-link-external'></i></a>
            </div>
            </div>
            <div className='row'> 
            <img src={Portfolio2} alt='' className='worksImg' />
           <div className='layer'>
           <h4>contact manager</h4>
           <p> It Allow Users to keep their contact details store. and it has funtionalities like - Add Contact, Delete Contact, Update Contact and Search Contact. where user can add new contact deatails and can update and delete his existing contact and also can search the contact by clicking on search button</p>
          <a href='https://react-contact-manager-beta.vercel.app/' target='_blank'><i class='bx bx-link-external'></i></a>
            </div>
            </div>
            <div className='row'> 
            <img src={Portfolio3} alt='' className='worksImg' />
           <div className='layer'>
           <h4> e-commerce shopping website</h4>
           <p>  This is designed as b2c shopping website.where user can navigate to different pages and can filter the product’s category by clicking the buttons and will get his products.</p>
          <a href='https://cosmic-ganache-e392da.netlify.app/' target='_blank'><i class='bx bx-link-external'></i></a>
            </div>
            </div>
            <div className='row'> 
            <img src={Portfolio4} alt='' className='worksImg' />
           <div className='layer'>
           <h4>shopping cart</h4>
           <p> Added features for user to click the add to cart button and it will land to the cart pages where user can increase or decrease the item quantity. and in the same page of right side user can also see the total quantity or total amount of his item or products.</p>
          <a href='https://reduxshoppingcart-beryl.vercel.app/' target='_blank'><i class='bx bx-link-external'></i></a>
            </div>
            </div>
            
            
            
           
            
        </div>
    </section>
  )
}

export default Works

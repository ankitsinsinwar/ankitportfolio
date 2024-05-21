import React from 'react'
import './Skillss.css'


const Skillss = () => {
  return (
    <>
    <section className='skillssSection' id='skillss'>
        <div className='container1' id='Skillss'>
            <h1 className='heading1'>Technical Skills</h1>
            <p className='skillsDesc'>
                My technical skills is html, css, javascript and react js. i've use these skills to build several project, which is blow in my portfolio's page.
            </p>
            <div className='technical-bars'>
                <div className='bar'><i class='bx bxl-html5' id='bx1'></i>
                    <div className='info'>
                        <span>HTML</span>
                    </div>
                    <div className='progress-line html'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'><i class='bx bxl-css3' id='bx2'></i>
                    <div className='info'>
                        <span>css</span>
                    </div>
                    <div className='progress-line css'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'><i class='bx bxl-javascript' id='bx3'></i>
                    <div className='info'>
                        <span>javascript</span>
                    </div>
                    <div className='progress-line javascript'>
                        <span></span>
                    </div>
                </div>
                <div className='bar'><i class='bx bxl-react' id='bx4'></i>
                    <div className='info'>
                        <span>reactjs</span>
                    </div>
                    <div className='progress-line react'>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skillss;
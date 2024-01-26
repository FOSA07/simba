'use client';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faList } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { motion } from 'framer-motion';

const image = '/assets/simba_intro.png';
const image1 = '/assets/simba_about.png';
const image2 = '/assets/metamask_icon.png';
const image3 = '/assets/bnb_icon.png';
const image4 = '/assets/swap_ico.png';
const clawIcon = '/assets/claw 2.png';
const simbaIcon = '/assets/simbaa 1.png';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handlePancakeClick = () => {
      // window.open('https://pancakeswap.finance/swap?outputCurrency=0x885c99a787BE6b41cbf964174C771A9f7ec48e04', '_blank', 'noopener,noreferrer');
  };

  const controlIsOpen = () => {
      if (isOpen){
          setIsOpen(false);
      }else {
          setIsOpen(true);
      }
      
    };


  return <nav class="navbar navbar-expand-lg navbar-light fixed-top text-light" style={{ background: '#000' }}>
      {isOpen && <MobileNavOverlay isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div class="container-fluid">
      <div class="navbar-brand text-light" style={{ fontFamily: "Poppins", width: '50px', height: '50px', position: 'relative' }} href="#">
          {/* <img src={simbaIcon} style={{width: '100%', height: '100%'}} alt="Logo" /> */}
          <Image
            src={simbaIcon}
            alt="Background Image"
            layout="fill"
            objectFit="fill"
            className='rounded-4'
            // width = '111px'
            // height = '111px'
          />
      </div>

          <div className='d-none d-lg-block'>
          <div class="navbar-nav ml-auto d-flex ">
              <a class="nav-item nav-link  text-light" href="#about" style={{}}>About</a>
              {/* <a class="nav-item nav-link  text-light" href="#tokenomics" style={{}}>Team</a> */}
              <a class="nav-item nav-link  text-light" href="#roadmap" style={{}}>Road Map</a>
              <a class="nav-item nav-link text-light " href="#how2buy" style={{}}>How to buy</a>
              <a class="nav-item nav-link text-light " href="#faq" style={{}}>Tokenomics</a>
              {/* <a class="nav-item nav-link text-dark " href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a> */}

              {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
          </div>
          </div>

          <div className='d-none d-md-flex d-lg-none'>
          {/* <div class="navbar-nav ml-auto d-flex "> */}
              <a class="nav-item nav-link text-light px-2" href="#about" style={{}}>About</a>
              {/* <a class="nav-item nav-link text-light px-2" href="#tokenomics" style={{}}>Team</a> */}
              <a class="nav-item nav-link text-light px-2" href="#roadmap" style={{}}>Road Map</a>
              <a class="nav-item nav-link text-light px-2" href="#how2buy" style={{}}>How to buy</a>
              <a class="nav-item nav-link text-light px-2" href="#faq" style={{}}>Tokenomics</a>
              {/* <a class="nav-item nav-link text-light px-2" href="#socials" style={{fontFamily: 'Poppins'}}>Socials</a> */}
              
              

              <div className=""><a class="text-light bg-danger px-3 py-1 rounded-5" style={{ textDecoration: 'none', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handlePancakeClick}>Buy Now</a></div>
              {/* <div className=" d-lg-none"><a class="text-light bg-danger px-3 py-1 rounded-3" href="#" style={{ textDecoration: 'none', fontWeight: 'bold', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.70)', fontFamily: 'Poppins' }}>Buy Now</a></div> */}
          {/* </div> */}
          </div>

          <div className='d-md-none'>
              {/* <i className="bi bi-list btn p-1 rounded-3 mobile-nav-toggle text-light" onClick={() => setIsOpen(true)} style={{ boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", transition: "0.5s", fontWeight: 'bold', fontSize: '15px'}}/> */}
              <FontAwesomeIcon icon={faList} style={{ color: 'white', margin: '', fontSize: '20px', cursor: 'pointer' }}  onClick={controlIsOpen}/>
          </div>

          <div className="d-none d-lg-block"><a class="text-light bg-danger px-3 py-1 rounded-5" style={{ textDecoration: 'none', background: 'linear-gradient(180deg, #FF8A00 0%, #FFC200 100%)', cursor: 'pointer', fontFamily: 'Poppins' }} onClick={handlePancakeClick}>Buy Now</a></div>
      </div>
  </nav>
}

  const MobileNavOverlay = ({ isOpen, setIsOpen }) =>{

      const handleOverlayClick = () => {
          setIsOpen(false);
        };
      
        return (
          <div className='container-fluid bg-white' style={{ borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
          {/* <i className="bi bi-x bi-3x mobile-nav-toggle mx-auto" style={{color: "ButtonShadow", paddingLeft: "95vw"}} onClick={() => setIsOpen(false)} /> */}
          <div className="mobile-nav-overlay bg-white" onClick={handleOverlayClick} style={{ borderRadius: '10px', position: 'fixed', top: 0, left: 0, width: '100%', height: '80%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
          <div className='d-flex justify-content-center align-items-center'>
            <nav id="navbar" className="navbar p-0 m-0">
            {/* <FontAwesomeIcon icon={faXmark} className='mx-auto pb-3' style={{ color: 'black', margin: '', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}  onClick={() => setIsOpen(false)}/> */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              {/* <i className="bi bi-x bi-3x mobile-nav-toggle mx-auto pb-3" style={{color: 'black', fontSize: '30px'}} onClick={() => setIsOpen(false)} /> */}
              <ul className="list-unstyled d-flex align-items-center" style={{ flexDirection: 'column', alignItems: 'center', width: "100%" }}>
                {/* <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark" href="#services">Lorem</a></li> */}
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{}}>About</a></li>
                {/* <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>Team</a></li> */}
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>RoadMap</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>How to buy</a></li>
                <li style={{width: "100%"}}><a className="nav-link scrollto position-relative text-dark text-center py-3" href="#" style={{fontFamily: 'Poppins'}}>Tokenomics</a></li>
                {/* <li style={{width: "100%"}}><Link to="/signUp" className="getstarted scrollto position-relative ">Become Viking</Link></li> */}
              </ul>
            </nav>
            </div>
          </div>
          </div>
        );
  }


  function Body() {

    const handlePancakeClick = () =>{

    }
    return (
      <div className="p-5">
        <div className="p-5"></div>
        <div className='d-none d-md-flex' style={{height: ''}}>
                {/* <div className='col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center'>
                    <img src={image} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div> */}

                <div className='col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center'>


                <div className=' p-5'>
                    <h1 className="" style={{
                            textAlign: "left",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            // fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            //lineHeight: "8vw", /* 112px */
                            background: "#FF7A00",
                            color: "#FF7A00",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Sigmar One'
                        }}>SIMBA</h1>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                        }}>a majestic presence inspired by the  courage 
                            and resilience of Simba from  The Lion King
                        </p>

                        {/* <p style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontFamily: "Josefin Sans",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            
                            fontFamily: 'Space Mono'
                        }}>The team aims to build some significant AI tools for it's Community and overall users to adopt more of the Blockchain technologies while providing the best user friendly experience. A plan for a seamless DEX is also on the horizon as new milestones are reached.
                        </p> */}

                        <div>
                            <motion.button className='btn rounded-4 py-2 px-5 ' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} >Buy Now</motion.button>
                            <span className='px-2'></span>
                            {/* <span className='py-2'></span> */}
                            <motion.button className='btn rounded-4 py-2 px-5' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} >Chart</motion.button>
                        </div>
                </div></div>

                <div className='col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center'>
                    <img src={image} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>
            </div>
            
            <div className="container d-md-none" id="about">
                
                <div className="row">
                    <div className="col-md-12 mx-auto d-block justify-content-center align-items-center text-center">
                    <h1 className="" style={{
                            textAlign: "center",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            // fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            //lineHeight: "8vw", /* 112px */
                            background: "#FF7A00",
                            color: "#FF7A00",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Sigmar One'
                        }}>SIMBA</h1>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                        }}>a majestic presence inspired by the  courage 
                        and resilience of Simba from  The Lion King</p>
                        

                          <div>
                            <motion.button className='btn rounded-4 py-2 px-5 mb-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} >Buy Now</motion.button>
                            <span className='px-2'></span>
                            <motion.button className='btn rounded-4 py-2 px-5 mb-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} >Chart</motion.button>
                          </div>

                        {/* <div className='d-block d-md-none'>
                            <motion.button className='btn rounded-3 py-2 px-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handlePancakeClick}>Buy Now</motion.button>
                            <span className='px-1'></span>
                            <motion.button className='btn rounded-3 py-2 px-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handleChartClick}>Chart</motion.button>
                        </div> */}
                    </div>

                </div>

                <div className='col-12 mb-5 d-flex justify-content-center align-items-center'>
                    <img src={image} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>
            </div>


      </div>
    )
  }

  function About() {

    const handlePancakeClick = () =>{

    }
    return (
      <div className="mb-5" id="about">
        <div className='d-none d-lg-flex' style={{height: ''}}>
                <div className='col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center'>
                    <img src={image1} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>

                <div className='col-12 col-lg-6 d-none d-lg-flex justify-content-center align-items-center '>
                <div className=' p-5'>
                <h1 className="" style={{
                            textAlign: "left",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            // fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            //lineHeight: "8vw", /* 112px */
                            background: "#FF7A00",
                            color: "#FF7A00",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Sigmar One'
                        }}>ABOUT</h1>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                        }}>In the vast savannah of the cryptocurrency jungle, a new force is awakening — Simba Token, a majestic presence inspired by the courage and resilience of Simba from The Lion King. As we embark on this groundbreaking journey, Simba Token symbolizes more than just a digital asset; it embodies the spirit of leadership, community, and unwavering strength.
                        </p>

                        <p style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                        }}> Just as Simba rose to claim his rightful place as the king of the Pride Lands, Simba Token is poised to redefine the crypto landscape. Our token is not merely a transactional tool; it's a symbol of empowerment, a call to unite a pride of enthusiasts and investors in a shared vision of financial sovereignty.
                        </p>
                        <p style={{
                            color: "#FFF",
                            textAlign: "left",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                        }}>  Simba Token, like its namesake, envisions a future where individuals take control of their financial destinies. The circle of trust we create echoes the Circle of Life, where each participant plays a vital role in the prosperity and growth of the ecosystem.
                        </p>

                        {/* <div>
                            <motion.button className='btn rounded-3 py-2 px-5' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handlePancakeClick}>Buy Now</motion.button>
                            <span className='px-2'></span>
                            <motion.button className='btn rounded-3 py-2 px-5' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handleChartClick}>Chart</motion.button>
                        </div> */}
                </div></div>

                
            </div>
            
            <div className="container d-lg-none" id="about">
                <div className='col-12 mb-5 d-flex justify-content-center align-items-center'>
                    <img src={image1} alt="Phoenix Token Logo" style={{maxWidth: '80%', maxHeight: '80%'}}/>
                </div>
                <div className="row">
                    <div className="col-md-12 mx-auto d-block justify-content-center align-items-center text-center">
                    <h1 className="" style={{
                            textAlign: "center",
                            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                            // fontFamily: "Phoenix",
                            // fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            //lineHeight: "8vw", /* 112px */
                            background: "#FF7A00",
                            color: "#FF7A00",
                            backgroundClip: "text",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontFamily: 'Sigmar One'
                        }}>ABOUT</h1>
                        <p className="mb-5" style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                        }}>In the vast savannah of the cryptocurrency jungle, a new force is awakening — Simba Token, a majestic presence inspired by the courage and resilience of Simba from The Lion King. As we embark on this groundbreaking journey, Simba Token symbolizes more than just a digital asset; it embodies the spirit of leadership, community, and unwavering strength.</p>
                        <p style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                        }}> Just as Simba rose to claim his rightful place as the king of the Pride Lands, Simba Token is poised to redefine the crypto landscape. Our token is not merely a transactional tool; it's a symbol of empowerment, a call to unite a pride of enthusiasts and investors in a shared vision of financial sovereignty.
                        </p>
                        <p style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            // lineHeight: "110%", /* 33px */
                            
                        }}>  Simba Token, like its namesake, envisions a future where individuals take control of their financial destinies. The circle of trust we create echoes the Circle of Life, where each participant plays a vital role in the prosperity and growth of the ecosystem.
                        </p>

                        {/* <div className='d-none d-md-block'>
                            <motion.button className='btn rounded-3 py-2 px-5' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handlePancakeClick}>Buy Now</motion.button>
                            <span className='px-2'></span>
                            <motion.button className='btn rounded-3 py-2 px-5' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handleChartClick}>Chart</motion.button>
                        </div> */}

                        {/* <div className='d-block d-md-none'>
                            <motion.button className='btn rounded-3 py-2 px-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handlePancakeClick}>Buy Now</motion.button>
                            <span className='px-1'></span>
                            <motion.button className='btn rounded-3 py-2 px-3' whileHover={{ scale: 1.2 }} style={{background: "#FF7A00", color: 'white', fontWeight: 'bold', fontFamily: 'Space Mono'}} onClick={handleChartClick}>Chart</motion.button>
                        </div> */}
                    </div>

                </div>

                
            </div>


      </div>
    )
  }

  function HowToBuy() {

    return (
    <div id="howtobuy">
          <h1 className="" style={{
            textAlign: "center",
            // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
            // fontFamily: "Phoenix",
            // fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            //lineHeight: "8vw", /* 112px */
            background: "#FF7A00",
            color: "#FF7A00",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            fontFamily: 'Sigmar One'
        }}>HOW TO BUY</h1>
        <div className="container d-flex justify-content-center align-items-center mb-5">
            <div className="container row col-sm-1 col-md-2 col-lg-2 d-flex rounded-4 p-3" style={{background: '#252525', width: '100%'}}>
              <div className='col-12 col-lg-3 d-lg-none justify-content-center align-items-center p-4 mb-4' style={{position: 'relative', height: '80vw'}}>
              <Image
                    src={image2}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className='col-12 col-lg-3 d-none d-lg-block justify-content-center align-items-center p-4' style={{position: 'relative'}}>
              <Image
                    src={image2}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className="col-12 col-md-9 p-4 d-flex justify-content-center align-items-center" style={{flexDirection: 'column'}}>
              <h1 className="text-light" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  // color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>DOWNLOAD METAMASK</h1>
                <p className="text-light" style={{textAlign: 'center'}}>Create a TRUST or Metamask Wallet using either a desktop computer 
                  or an iOS/Android mobile device. That will allow you to buy, sell, send, 
                  and receive $SIMBA</p>
              </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="container row col-sm-1 col-md-2 col-lg-2 d-flex rounded-4 p-3" style={{background: '#252525', width: '100%'}}>
              <div className='col-12 col-lg-3 d-lg-none justify-content-center align-items-center p-4 mb-4' style={{position: 'relative', height: '80vw'}}>
              <Image
                    src={image3}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className='col-12 col-lg-3 d-none d-lg-block justify-content-center align-items-center p-4' style={{position: 'relative'}}>
              <Image
                    src={image3}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className="col-12 col-md-9 p-4 d-flex justify-content-center align-items-center" style={{flexDirection: 'column'}}>
              <h1 className="text-light" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  // color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>GET SOME BNB</h1>
                <p className="text-light" style={{textAlign: 'center'}}>have ETH in your wallet to switch to $SIMBA. If you don’t have any BNB, 
                  you can buy directly on metamask, transfer from another wallet, or 
                  buy on another exchange and send it to your wallet.</p>
              </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="container row col-sm-1 col-md-2 col-lg-2 d-flex rounded-4 p-3" style={{background: '#252525', width: '100%'}}>
              <div className='col-12 col-lg-3 d-lg-none justify-content-center align-items-center p-4 mb-4' style={{position: 'relative', height: '80vw'}}>
              <Image
                    src={image4}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className='col-12 col-lg-3 d-none d-lg-block justify-content-center align-items-center p-4' style={{position: 'relative'}}>
              <Image
                    src={image4}
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className='rounded-4'
                    
                  />
              </div>
              <div className="col-12 col-md-9 p-4 d-flex justify-content-center align-items-center" style={{flexDirection: 'column'}}>
              <h1 className="text-light" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  // color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>SWITCH BNB FOR SIMBA</h1>
                <p className="text-light" style={{textAlign: 'center'}}>Go to pancakeswap (Pancakeswap.finance) and connect your wallet 
                  by clicking Connect wallet and selecting TRUST or MetaMask. Press
                  Select and enter the token contract address to find MUFASA and 
                  start your swap from BNB to SIMBA.</p>
              </div>
          </div>
        </div>
      
    </div>
    )
  }

  function RoadMap() {

    return(
      <div id='roadmap'>
        <h1 className="" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>ROADMAP</h1>

        <div className="container d-flex justify-content-center align-items-center mb-5">
            <div className="container row col-sm-1 col-md-2 col-lg-2 d-flex justify-content-center align-items-center rounded-4 p-3" style={{width: '100%'}}>
              <div className='col-12 col-lg-5 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{height: '300px'}}>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Website development</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Deploy Smart Contract (BNB)</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Social Media Launch</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Community AMA</p></div>
                </div>
                
              </div>

              <div className="d-none d-lg-block col-1"></div>
              <div className='col-12 col-lg-5 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{height: '300px'}}>

                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Marketting Campaign</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Coingecko Listing</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Stacking</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>CMS Listing</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Trending on all Platforms</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Massive Marketting Campaign</p></div>
                </div>
                
              </div>

              <div className='col-12 col-lg-5 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{height: '300px'}}>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Official White Paper Launch</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>Listing on CEX Exchange</p></div>
                </div>
                <div className="d-flex">
                <div className="" style={{width: '20px', height: '20px', position: 'relative'}}>
                  
                    <Image
                      src={clawIcon}
                      alt="Background Image"
                      layout="fill"
                      objectFit="fill"
                      className='rounded-4'
                      
                    />

                    
                </div>
                <div className="px-2"><p>New RoadMap Release</p></div>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    )
  }


  function Tokenomics() {

    return(
      <div className="container" id='tokenomics'>
        <h1 className="" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>TOKENOMICS</h1>


        <div className="container p-3">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-3 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFF', fontWeight: 'bold', color: '#000', fontFamily: 'Poppins' }}>
                    <h2 className="pt-1" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>3%</h2>
                    <p class="mb-0" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: '800' }}>Liquidity</p>
                </div>

                <div class="col-md-3 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFF', fontWeight: 'bold', color: '#000' }}>
                    <h2 className="pt-1" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>5%</h2>
                    <p class="mb-0" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: '800' }}>Marketing</p>
                </div>

                <div class="col-md-3 col-12 mb-4 mx-2 rounded-4 p-2 px-3" style={{ background: '#FFF', fontWeight: 'bold', color: '#000' }}>
                    {/* <p className="" style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins' }}>Initial Burn</p> */}
                    <h2 class="mb-0 d-md-block d-none" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'bold' }}>Total Supply</h2>
                    <p class="mb-0 d-sm-block d-md-none" style={{ fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'bold' }}>10,000,000,000</p>
                    <p class="mb-0 d-none d-md-block" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 'bold' }}>10,000,000,000</p>

                </div>
            </div>
        </div>

        {/* <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="container row col-sm-1 col-md-3 col-lg-3 d-flex rounded-4 p-3" style={{background: '#252525', width: '100%'}}>
              <div className='col-12 col-md-3 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{}}>
                <p>3%</p>
                <p>Liquidity</p>
                
              </div>

              <div className="d-none d-lg-block p-4"></div>
              <div className='col-12 col-md-3 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{}}>
                <p>5%</p>
                <p>Marketing</p>
              </div>

              <div className='col-12 col-md-3 justify-content-center align-items-center p-4 mb-3 rounded-4 bg-white' style={{}}>
                <p>Total Supply</p>
                <p>10,000,000,000</p>
              </div>
          </div>
        </div> */}
      </div>
    )
  }



  function Socials (){

    // const buttonRef = useRef(null);

    // useEffect(() => {
    //   const callback = (entries, observer) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         // Element is in view
    //         // Trigger the animation by adding the 'fade-in-on-scroll' class
    //         // setIsVisible(true);
    //         buttonRef.current.classList.add('fade-in-on-scroll');
    //         buttonRef.current.classList.remove('disp2');
    //         buttonRef.current.classList.add('disp');
    //         // Stop observing once the animation is triggered
    //         // observer.unobserve(entry.target);
    //       }
    //       else {
    //         // Element is out of view, remove the 'fade-in-on-scroll' class
    //         buttonRef.current.classList.remove('fade-in-on-scroll');
    //         buttonRef.current.classList.remove('disp');
    //         buttonRef.current.classList.add('disp2');
            // setIsVisible(false);
    //       }
    //     });
    //   };
  
    //   const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.2,
    //   };
  
    //   const observer = new IntersectionObserver(callback, options);
  
    //   if (buttonRef.current) {
    //     observer.observe(buttonRef.current);
    //   }
  
    //   return () => {
    //     observer.disconnect();
    //   };
    // }, []);

    // const handleTelegramClick = () => {
    //     window.open('https://t.me/PhoenixToken0', '_blank', 'noopener,noreferrer');
    // };

    // const handleTwitterClick = () => {
    //     window.open('https://twitter.com/PhoenixToken0', '_blank', 'noopener,noreferrer');
    // };

    return(
        <div id='socials'>
            <div className="py-5 container">

            <h1 className="" style={{
                  textAlign: "center",
                  // textShadow: "0px 18px 7px rgba(0, 0, 0, 0.70)",
                  // fontFamily: "Phoenix",
                  // fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  //lineHeight: "8vw", /* 112px */
                  // background: "#FF7A00",
                  color: "#FF7A00",
                  backgroundClip: "text",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                  fontFamily: 'Sigmar One'
              }}>JOIN OUR COMMUNITY</h1>

                <p className="text-center text-light" style={{  }}>Our community of Immortals with the love for humanity grow stronger with each passing day. Please follow our social platforms to get the most up-to-date, accurate PHT information.</p>

                <div className="p-3 d-flex justify-content-center">
                    <div className="rounded-4 d-flex justify-content-around" style={{ width: '160px' }}>
                      <div style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 78 80" fill="none">
                          <path d="M39 0C17.4556 0 0 17.9032 0 40C0 62.0968 17.4556 80 39 80C60.5444 80 78 62.0968 78 40C78 17.9032 60.5444 0 39 0ZM58.154 27.4032L51.7536 58.3387C51.2819 60.5323 50.0081 61.0645 48.231 60.0323L38.481 52.6613L33.779 57.3064C33.2601 57.8387 32.8198 58.2903 31.8133 58.2903L32.5052 48.1129L50.5742 31.371C51.3605 30.6613 50.4012 30.2581 49.3633 30.9677L27.0327 45.3871L17.4085 42.3064C15.3169 41.629 15.2698 40.1613 17.8488 39.129L55.4492 24.2581C57.1948 23.6129 58.7202 24.6935 58.154 27.4032Z" fill="white"/>
                        </svg>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 80 80" fill="none">
                          <path d="M71.4286 0H8.57143C3.83929 0 0 3.83929 0 8.57143V71.4286C0 76.1607 3.83929 80 8.57143 80H71.4286C76.1607 80 80 76.1607 80 71.4286V8.57143C80 3.83929 76.1607 0 71.4286 0ZM62.6964 28.3571C62.7321 28.8571 62.7321 29.375 62.7321 29.875C62.7321 45.3571 50.9464 63.1964 29.4107 63.1964C22.7679 63.1964 16.6071 61.2679 11.4286 57.9464C12.375 58.0536 13.2857 58.0893 14.25 58.0893C19.7321 58.0893 24.7679 56.2321 28.7857 53.0893C23.6429 52.9821 19.3214 49.6071 17.8393 44.9643C19.6429 45.2321 21.2679 45.2321 23.125 44.75C17.7679 43.6607 13.75 38.9464 13.75 33.25V33.1071C15.3036 33.9821 17.125 34.5179 19.0357 34.5893C17.4293 33.5208 16.1125 32.0712 15.2026 30.3699C14.2928 28.6686 13.8183 26.7686 13.8214 24.8393C13.8214 22.6607 14.3929 20.6607 15.4107 18.9286C21.1786 26.0357 29.8393 30.6786 39.5536 31.1786C37.8929 23.2321 43.8393 16.7857 50.9821 16.7857C54.3571 16.7857 57.3929 18.1964 59.5357 20.4821C62.1786 19.9821 64.7143 19 66.9643 17.6607C66.0893 20.375 64.25 22.6607 61.8214 24.1071C64.1786 23.8571 66.4643 23.1964 68.5714 22.2857C66.9821 24.625 64.9821 26.6964 62.6964 28.3571Z" fill="white"/>
                        </svg>
                      </div>
                        {/* <i style={{ color: 'white', margin: '0 auto', fontSize: '35px', cursor: 'pointer' }} onClick={handleTelegramClick} class="bi bi-telegram"></i> */}
                        {/* <i style={{ color: 'white', margin: '0 auto', fontSize: '35px', cursor: 'pointer' }} onClick={handleTwitterClick} class="bi bi-twitter"></i> */}
                    </div>


                </div>
                </div>
        </div>
    )
}


export default function Home() {
  return (
    <body className="" style={{background: '#000', fontFamily: 'Poppins'}}>
      <Navbar />
      {/* <Hero /> */}
      <Body />
      <About />
      <HowToBuy />
      <Tokenomics />
      <div className="p-3"></div>
      <RoadMap />
      
      <Socials />
    </body>
  );
}


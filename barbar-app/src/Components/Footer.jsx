import React from 'react'
import styled from 'styled-components';
import "../CSS/Footer.css"
// import logo from "../home-image/logo-white.png"
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <DIV>

            <div className="footerSec">
                <div className="logosec">
                <h1 className='foth'>Fallow our Social media</h1>
                    {/* <img src={logo} alt="" /> */}
                    <br /><br /><br />  <br /><br />
                   
                    <div className='socialUl'>
                      
                        <Link to={"https://www.youtube.com/results?search_query=kadekaninijam"}>  <FaYoutube /></Link>
                        <Link to={"https://www.instagram.com/naveenlingampelli91/"}> <FaInstagram /></Link>
                       
                    </div>

                </div>

                <div className="link">
                    <div className="first">
                        <ul>
                            <h1>Contact Information</h1>
                            <li>L.Naveen</li>
                            <li>L.Naresh</li>
                            <p className='number'>+91 9381625557</p>
                            <p className='number'>+91 6302562465</p>
                            <p className='add'>Address: Gudur, Palakurthy, Jangoan, 506252 MainRoad</p>
                        </ul>
                    </div>
                    <div className="second">
                        <ul>

                        </ul>


                    </div>
                </div>


                <div className="last">

                    <h2>Barber, a person whose primary activities in the 20th century are trimming and styling the hair of men, shaving them, and shaping their beards, sideburns, and moustaches. Barbers, or hairdressers, often provide shampooing, manicuring, hair dying, permanent waves, and shoe polishing within their shops, or salons.</h2>
                    <br /><br /><br /><br /><br />

                </div>

            </div>


        </DIV>
    )
}

export default Footer

const DIV = styled.section`
/* margin-top: 20px; */
background-color:#242424;
padding: 30px 0;
  .footerSec{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .logosec,.link,.last{
    width:33%
  }
.logosec img{
  width:200px
}
.socialUl {
    color: #e1e1e1;
    list-style: none;
    font-size: 21px;
    display: flex;
    justify-content: space-between;
    width: 57%;
}

.socialUl li{
  display: inline;
    padding: 10px 17px;
}


.link{
  display: flex;
  justify-content: space-between;
}
.first,.second{
width:50%
}

.link ul{
  list-style-type: none;
    color: #c1c1c1;
    font-size: 18px;
}

.link ul li{
padding: 12px 0;
}
.last h2,.last p{
  color:#c1c1c1;;
}
@media screen and (min-device-width: 310px) and (max-device-width: 480px) { 
  .footerSec{
    flex-direction: column;
  }
  .logosec,.link,.last{
    width:90%
  }
}
`
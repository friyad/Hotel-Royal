import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import SubscribeUs from './SubscribeUs/SubscribeUs';
import PlaceIcon from '@mui/icons-material/Place';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <div>
            <SubscribeUs />
            <div className="mt-8 bg-black relative" style={{ height: '34rem' }}>
                <img src="https://i.ibb.co/jWt3HMP/footer-Image.jpg" className="opacity-30" style={{ width: '100%', height: '100%' }} alt="" />
                <div className="w-full h-full text-white top-0 absolute">
                    <div className="sm:w-full sm:grid-cols-1 w-10/12 mx-auto grid grid-cols-12 sm:pt-4 pt-14 sm:gap-1 gap-6">
                        <div className="col-span-3 sm:mx-auto">
                            <img className="h-20" src={logo} alt="" />
                            <p className="sm:hidden w-10/12 text-justify">Amet consectetur adipisicing elit. Fuga minus repudiandae corporis perspiciatis accusamus maxime modi deserunt sint facilis voluptas nemo aliquid optio asperiores ducimus debitis accusantium, cum quidem quo dolorem, alias voluptate eaque quos. Dicta sapiente ratione nemo nisi eos natus odit soluta, delectus incidunt aliquid asperiores quas officia culpa quae. Adipisci porro reiciendis voluptas repellendus ut vel error. Amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-span-3 sm:mx-auto">
                            <div className="flex justify-left items-center sm:mb-1 sm:mt-3 mb-3 mt-8">
                                <PlaceIcon className="text-2xl mr-2 font-bold" />
                                <h1 className="text-2xl font-bold">LOCATION</h1>
                            </div>
                            <p>100 Orchard St,</p>
                            <p>Dhubai City</p>
                            <p>Dhubai</p>
                        </div>
                        <div className="col-span-3 sm:mx-auto">
                            <div className="flex justify-left items-center sm:mb-2 sm:mt-4 mb-3 mt-8">
                                <InsertLinkIcon className="mr-2 font-bold" style={{ fontSize: '35px' }} />
                                <h1 className="text-2xl font-bold">IMPORTENT LINK</h1>
                            </div>
                            <Link to="/home">Home</Link><br />
                            <Link to="/about">About</Link><br />
                            <Link to="/rooms">Our Rooms</Link>
                        </div>
                        <div className="col-span-3 sm:mx-auto">
                            <div className="flex justify-left items-center sm:mb-1 sm:mt-6 mb-3 mt-8">
                                <FollowTheSignsIcon className="mr-2 font-bold" style={{ fontSize: '35px' }} />
                                <h1 className="text-2xl font-bold">FOLLOW US</h1>
                            </div>
                            <div className="flex sm:flex-row sm:justify-around flex-col">
                                <FacebookIcon style={{ fontSize: '40px' }} />
                                <YouTubeIcon style={{ fontSize: '40px' }} />
                                <LinkedInIcon style={{ fontSize: '40px' }} />
                                <TwitterIcon style={{ fontSize: '40px' }} />
                                <InstagramIcon style={{ fontSize: '40px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
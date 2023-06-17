import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='main'>
                    
                    <div className='links'>
                        <div className='usefullinks'>
                            <h2>Useful Links</h2>
                            <hr className='rule'/>
                            <div className='namedlinks'>

                                <div className='lefft'>
                                    <p>Digital Marketing</p>
                                    <p>Social Media</p>
                                    <p>Google Ads</p>
                                    <p>SEO</p>
                                    <p>Graphic Design</p>
                                    <p>Web Development</p>

                                </div>
                                <div className='rigght'>
                                    <p>Services</p>
                                    <p>Portfolio</p>
                                    <p>Blog</p>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                    <p>Career</p>
                                </div>
                            </div>
                        </div>

                        <div className='compdata'>
                        <div className='compbox'>
                            <img src='https://aimingsolution.com/wp-content/uploads/2020/06/aiming-logo-s.png'></img>
                            <p className='compinf'>We Offer One-Stop Business Solutions for All Your Business Needs to Grow Your Business Like Banyan Tree in This Crucial Markets.</p>
                            <div className='compinfo'>

                                <div className='compinfobox'>
                                    <div className='location'>
                                        <i class='bx bx-map-alt'></i>
                                        <p>A-67, Ground Floor, A Block, Kamla Nagar, New Delhi 110007</p>
                                    </div>
                                    <div className='call'>
                                        <i class='bx bxs-phone'></i>
                                        <p>+91 9990519499</p>
                                    </div>
                                </div>

                                <div className='compinfobox'>
                                    <div className='location'>
                                    <i class='bx bx-map-alt'></i>
                                        <p>T-302, Arjun Plaza, Dwarka Sec-5, New Delhi 110075</p>
                                    </div>
                                    <div className='call'>
                                    <i class='bx bxs-phone'></i>
                                        <p>+91 9990519499</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>










                        <div className='seodata'>
                            <div className='seo'>
                                <img src='https://aimingsolution.com/wp-content/themes/aimingsolution/images/icon/best.png'></img>
                                <h3>Best SEO Company 2018</h3>
                            </div>
                            <img src='https://aimingsolution.com/wp-content/uploads/2018/09/Google-Partners-company-Aiming-Solutions.png'></img>
                            <img src='https://aimingsolution.com/wp-content/uploads/2018/09/bing-ads-accredited-professional-company-Aiming-Solutions.png'></img>
                            <img src='https://aimingsolution.com/wp-content/uploads/2018/09/facebook-marketing-partner-company-Aiming-Solutions.png'></img>
                        </div>
                    </div>
                    <div className='social'>
                        <h2>Follow Us</h2>
                        <hr className='rule'/>
                        <div className='socialdata'>
                            <div className='sociallinks facebook'><i class='bx bxl-facebook'></i></div>
                            <div className='sociallinks insta'><i class='bx bxl-instagram'></i></div>
                            <div className='sociallinks twitter'><i class='bx bxl-twitter'></i></div>
                            <div className='sociallinks pint'><i class='bx bxl-pinterest'></i></div>
                            <div className='sociallinks linkedin'><i class='bx bxl-linkedin'></i></div>
                            <div className='sociallinks youtube'><i class='bx bxl-youtube'></i></div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2023, All Right Reserved by Aiming Solutions</p>
                    <div className='copy'>
                        <p>Home</p>
                        <p>Terms</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Footer;

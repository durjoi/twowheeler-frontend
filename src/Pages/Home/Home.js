import React from 'react';
import './Home.css';
import Banner from './Components/Banner/Banner';
import BicycleSection from './Components/BicycleSection/BicycleSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import Header from '../../Layouts/Header/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BicycleSection></BicycleSection>
            <ReviewSection></ReviewSection>
            {/* <section className="banner">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <div className="banner_content">
                                <h1>Welcome to <span>On The Go</span> </h1>
                                <p>Book Your Dream Vacation Trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="events_header">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                                <h2>Upcomming Events</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row">
                    {
                        loading ? <div className="spinner-border text-warning m-auto"></div> :
                        events.map(event => <EventItem key={event._id} _id={event._id} title={event.title} img={event.img} subtitle={event.subtitle} price={event.price}></EventItem>)
                    }
                    </div>
                </div>
            </section>

            <section className="upcomming-events section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header w-100 text-center">
                                <h2 className="section-header-title">Upcomming Events</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-5">
                    <div className="row">

                    {
                        loading ? <div className="spinner-border text-warning m-auto"></div> :
                        events.map(event => <EventItem key={event._id} _id={event._id} title={event.title} img={event.img} subtitle={event.subtitle} price={event.price}></EventItem>)
                    }
                        
                    </div>
                </div>
            </section>

            <section className="section-break">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="section-break-item text-center">
                                <i className="fas fa-subway section-break-item-logo"></i>
                                <h5 className="section-break-item-title">Comfortable Journey
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="section-break-item text-center">
                                <i className="fas fa-hotel section-break-item-logo"></i>
                                <h5 className="section-break-item-title">Luxuries Hotel
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="section-break-item text-center">
                                <i className="fas fa-globe-asia section-break-item-logo"></i>
                                <h5 className="section-break-item-title">Travel Guide
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="contact-us-title">Get In Touch With Us</h2>
                            <form action="" className="contact-us-form">
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Message" rows="8"></textarea>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Enter your name"/>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input type="email" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-small bg-orange mx-2 text-white">SEND</button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-us-address">
                                <div className="contact-us-item d-flex">
                                    <i className="fas fa-home"></i> 
                                    <p>Dhaka, Bangladesh.<br/>
                                        <span>Aftabnagar, 1212</span></p>
                                </div>
            
                                <div className="contact-us-item d-flex">
                                    <i className="fas fa-phone-alt"></i>
                                    <p>+1 253 565 2365<br/>
                                        <span>Mon to Fri 9am to 6pm</span></p>
                                </div>
            
                                <div className="contact-us-item d-flex">
                                    <i className="far fa-envelope"></i>
                                    <p>support@otg.com<br/>
                                        <span>Send us your query anytime!</span></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section> */}



        </div>
        
    );
};

export default Home;
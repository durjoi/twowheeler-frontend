import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import  Rating  from 'react-rating';

const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://desolate-island-53501.herokuapp.com/reviews').then((response) => {
            setReviews(response.data);
        });
    }, []);

    console.log(reviews);

    
    return (
        <section>
                <div className="reviews_header pt-5 pb-5">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                                <h2>Customers Review</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <Carousel>

                    {

                        reviews.map(review => 
                            <Carousel.Item>
                                <div className="d-flex justify-content-center align-items-center" style={{ height: 500, background: "#aaa", color: "#000" }}>
                                    <div className="text-center">
                                        <Rating
                                            initialRating={review.rating}
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            />
                                        <p>{review.review}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    }
                        
                    </Carousel>
                </div>
            </section>
    );
};

export default ReviewSection;
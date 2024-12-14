import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, addDoc, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import '../styles/ReviewsSection.css';

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewData, setReviewData] = useState({ name: '', review: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastVisible, setLastVisible] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // Fetch initial reviews
    const fetchReviews = async (fetchMore = false) => {
        try {
            const reviewsCollection = collection(db, 'reviews');
            const q = fetchMore
                ? query(reviewsCollection, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(5))
                : query(reviewsCollection, orderBy('createdAt', 'desc'), limit(5));

            const reviewsSnapshot = await getDocs(q);
            const reviewsList = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setReviews((prevReviews) => (fetchMore ? [...prevReviews, ...reviewsList] : reviewsList));
            setLastVisible(reviewsSnapshot.docs[reviewsSnapshot.docs.length - 1]);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    // Handle Review Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reviewData.name || !reviewData.review) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'reviews'), {
                name: reviewData.name,
                review: reviewData.review,
                createdAt: new Date(),
            });
            setReviewData({ name: '', review: '' });
            fetchReviews(); // Refresh reviews after submission
        } catch (error) {
            console.error('Error submitting review:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="reviews-container">
            <h2 className="section-title">Reviews</h2>

            {/* Add Review Form */}
            <div className="add-review-section">
                <h3>Leave a Review</h3>
                <form className="review-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={reviewData.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="review"
                        placeholder="Write your review..."
                        rows="5"
                        value={reviewData.review}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
            </div>

            {/* Display Reviews */}
            <div className="view-reviews-section">
                <h3>What People Say</h3>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <h4>{review.name}</h4>
                            <p>{review.review}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave one!</p>
                )}

                {lastVisible && (
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            setIsLoadingMore(true);
                            fetchReviews(true).finally(() => setIsLoadingMore(false));
                        }}
                        disabled={isLoadingMore}
                    >
                        {isLoadingMore ? 'Loading...' : 'See More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ReviewsSection;

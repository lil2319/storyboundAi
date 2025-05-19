import React, { useState } from 'react';
import BookCovers from '../components/bookCovers';
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import './recommendationPage.css';
import HeaderSimple from '../components/Header';

export default function BookRecommendationPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');
    const [focused, setFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedQuery(searchQuery.trim());
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setSubmittedQuery(searchQuery.trim());
        }
    };


    return (
        <div>
            <HeaderSimple />
            <div className="recommendation-container">
                <h2>Enter a book title to get recommendations for similar books</h2>
                <form onSubmit={handleSubmit} className="search-form">
                    <FloatingLabelInput
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.currentTarget.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={handleKeyDown}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                {submittedQuery && <BookCovers query={submittedQuery} />}
            </div>
        </div>
    );
}

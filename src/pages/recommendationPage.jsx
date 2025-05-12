import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import BookCovers from '../components/BookCovers.jsx';

export default function RecommendationPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';

    return (
        <div>
            <Header />
            <main>
                <h1>Recommendations for you</h1>
                <BookCovers query={query} />
            </main>
        </div>
    );
}

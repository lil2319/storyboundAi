import React from 'react';
import Header from '../components/Header.jsx';
import RecommendationBox from '../components/RecommendationBox.jsx';

export default function Home() {
    return (
        <div className="App" >
            <Header />
            < main className="main" >
                <RecommendationBox />
            </main>
        </div>
    )
}

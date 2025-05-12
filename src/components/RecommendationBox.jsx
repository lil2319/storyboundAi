import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecommendationBox() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        if (input.trim()) {
            navigate(`/RecommendationPage?query=${encodeURIComponent(input.trim())}`);
        }
    };

    return (
        <div className="recommendation-box">
            <h2>AI-Powered Book Recommendations</h2>
            <p>
                Explore a world of stories with personalized recommendations, tailored just for you
            </p>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Enter a book..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleClick}>Recommend</button>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';

export default function BookCovers({ query }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://storyboundapi.onrender.com/RecommendationPage/${query}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query }),
                });

                const data = await response.json();
                const similarBookISBNs = data.recommended_isbns || [];

                const bookPromises = similarBookISBNs.map(async (isbn) => {
                    try {
                        const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
                        const bookData = await bookResponse.json();
                        const book = bookData.items?.[0]?.volumeInfo;

                        return {
                            coverUrl: book?.imageLinks?.thumbnail || null,
                            title: book?.title || 'No Title Available',
                            authors: book?.authors?.join(', ') || 'No Author Available',
                        };
                    } catch (error) {
                        console.error(`Error fetching book with ISBN ${isbn}:`, error);
                        return {
                            coverUrl: null,
                            title: 'Error loading title',
                            authors: 'Error loading author',
                        };
                    }
                });

                const bookResults = await Promise.all(bookPromises);
                setBooks(bookResults);
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchBooks();
        }
    }, [query]);

    return (
        <div className="card-grid">
            {loading ? (
                <p>Loading...</p>
            ) : (
                books.map((book, index) => (
                    <div key={index} className="covers">
                        {book.coverUrl ? (
                            <img
                                src={book.coverUrl}
                                alt={`Cover of ${book.title}`}
                            />
                        ) : (
                            <div>No cover available</div>
                        )}
                        <h3>{book.title}</h3>
                        <p>{book.authors}</p>
                    </div>
                ))
            )}
        </div>
    );
}

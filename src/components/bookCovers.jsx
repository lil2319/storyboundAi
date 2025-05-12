import React, { useState, useEffect } from 'react';

export default function BookCovers({ query }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/RecommendationPage/${query}`, {
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
                        const bookResponse = await fetch(`https://openlibrary.org/search.json?isbn=${isbn}`);
                        const bookData = await bookResponse.json();
                        const book = bookData.docs?.[0];

                        return {
                            coverId: book?.cover_i || null,
                            title: book?.title || 'No Title Available',
                            authors: book?.author_name?.join(', ') || 'No Author Available',
                        };
                    } catch (error) {
                        console.error(`Error fetching book with ISBN ${isbn}:`, error);
                        return {
                            coverId: null,
                            title: 'Error loading title',
                            authors: 'Error loading author',
                        };
                    }
                });

                const bookResults = await Promise.all(bookPromises);
                setBooks(bookResults);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        if (query) {
            fetchBooks();
        }
    }, [query]);

    return (
        <div className="card-grid">
            {books.map((book, index) => (
                <div key={index} className="covers">
                    {book.coverId ? (
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                            alt={`Cover of ${book.title}`}
                        />
                    ) : (
                        <div>No cover available</div>
                    )}
                    <h3>{book.title}</h3>
                    <p>{book.authors}</p>
                </div>
            ))}
        </div>
    );
}

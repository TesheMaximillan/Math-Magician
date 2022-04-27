import React from 'react';

function Quote() {
  const quotes = [
    {
      id: 1,
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. --William Paul Thuriston',
    },
  ];

  return (
    <div>
      {quotes.map((quote) => (
        <h3 key={quote.id}>{quote.quote}</h3>
      ))}
    </div>
  );
}

export default Quote;

import React, { useState, useEffect } from "react";

const RatingButton = ({ itemId }) => {
  const [count, setCount] = useState(() => {
    // Get count from local storage or default to 0
    const storedCount = localStorage.getItem(`rating_${itemId}`);
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    // Update local storage when count changes
    localStorage.setItem(`rating_${itemId}`, count);
  }, [count, itemId]);

  const handleRating = () => {
    // Increase count by 1 every time the button is clicked
    setCount((prevCount) => prevCount + 1);
  };

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <span
      key={index}
      onClick={handleRating}
      style={{ cursor: "pointer", color: index < count ? "gold" : "gray" }}
    >
      &#9733;
    </span>
  ));

  return (
    <div>
      <div>{stars}</div>
      <p>Rating: {count}</p>
    </div>
  );
};

export default RatingButton;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/Reviews.css"
const ReviewsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/comments');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className='body'>
    <div className="data-container">
      <h4>Customer Reviews</h4>
      <ul className="grid-container">
        {data.map(item => (
          <li key={item.id} className="card">
            <h3>{item.data}</h3> 
            <p>ID: {item.id}</p>
            
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ReviewsPage;

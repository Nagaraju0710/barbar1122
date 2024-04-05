import { useState, useEffect } from "react";
import "../CSS/Mens.css"
import RatingButton from "./RatingButton";
// import Card from "./Card";
// import { useHistory } from "react-router-dom";
import axios from 'axios';

const BeardPage=()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postData, setPostData] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/beard');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    const postDataToAPI = async () => {
        try {
          const response = await axios.post('http://localhost:8080/comments', { data: postData });
          setResponse(response.data);
          setPostData('');
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
    
    return (
        <div className="body">
            {/* Render your data here */}
            <div className="data" >
                {data.map(item => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>Name:  {item.name}</h3>
                        <p>Price:  ${item.price}</p>
                        <p>Discount: {item.discount}%</p>
                        <p>Final Price: ${item.finalprice}</p>
                        <RatingButton itemId={item.id} />
                        <textarea className="input"
                           type="text" value={postData} placeholder="Write comment" onChange={(e) => setPostData(e.target.value)}
                        />
                        <button className="btn" onClick={postDataToAPI}>Submit Comment</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BeardPage
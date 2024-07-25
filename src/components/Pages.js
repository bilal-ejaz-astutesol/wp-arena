import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch pages
    const fetchPages = async () => {
      try {
        const response = await axios.get(
          "https://stg-wparena-staging.kinsta.cloud/wp-json/wp/v2/posts?categories=5"
        );
        setPages(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching pages");
        console.error(error);
        setLoading(false);
      }
    };
    // Fetch pages on component mount
    fetchPages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className='wpa-wrapper-sides-spacing'>
        <h1>Pages</h1>
        {pages.map((item) => (
          <div key={item.id}>
            <Link to={`/${item.slug}`}>{item.title.rendered}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
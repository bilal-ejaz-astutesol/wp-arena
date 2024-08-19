// search result
"use client";
import React, { useState, useEffect } from "react";
import "../../app/globals.css";
import "../../components/timeline/Timeline.css";
import defaultimg from "../../images/defaultimage.jpg";
import share_post_icon from "../../images/share-icon.png";
import Link from "next/link";
import Image from "next/image";
import { API_BASE_URL } from "@/apiConfig";
import axios from "axios"; // Ensure axios is imported

const SearchResultsComp = ({ searchParams }) => {
  const query = searchParams.query || "";
  console.log(query);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoints = [`${API_BASE_URL}/posts`, `${API_BASE_URL}/pages`];
        const requests = endpoints.map((endpoint) =>
          axios.get(endpoint, { params: { search: query } })
        );
        const responses = await Promise.all(requests);
        const combinedResults = responses.flatMap((response) => response.data);
        setSearchResults(combinedResults);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]); // Runs every time `query` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="conference-timeline" className="wpa-wrapper-sides-spacing">
      <div>
        <div>
          <div className="timeline-start"></div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              {searchResults.map((result) => (
                <div className="relative" key={result.id}>
                  <div className="content-right-container">
                    <div className="content-right wpa-flex wpa-gap-40">
                      <div>
                        <div className="wpa-blog-list-thumbnail">
                          <Image
                            objectFit="cover"
                            height={300}
                            width={300}
                            src={result.featured_image || defaultimg}
                            alt={result.title.rendered}
                            onError={(e) => (e.target.src = defaultimg)}
                          />
                        </div>
                      </div>
                      <div className="wpa-blogs-details wpa-flex wpa-h3-font-size">
                        <div className="wpa-blog-list-title">
                          <h3>
                            <Link href={`/${result.slug}`}>
                              {result.title.rendered}
                            </Link>
                          </h3>
                        </div>
                        <div className="wpa-blog-list-posted-by wpa-content-top-bottom-spacing wpa-paragraph-text wpa-font-weight-600">
                          <span>
                            Recent updated By{" "}
                            <Link href="">
                              {result._embedded?.["author"]?.[0]?.name ||
                                "Unknown Author"}
                              <i className="wpa-share-icon">
                                <Image
                                  src={share_post_icon}
                                  alt="share blog post icon"
                                />
                              </i>
                            </Link>
                          </span>
                        </div>
                        <div className="wpa-blog-list-description wpa-paragraph-text line-limit-2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: result.excerpt.rendered,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meta-date">
                    <div className="wpa-flex wpa-content-center wpa-paragraph-text wpa-font-weight-700">
                      <span className="month">
                        {new Date(result.date).toLocaleString("default", {
                          month: "long",
                        })}
                      </span>
                      <span className="date">
                        {new Date(result.date).getDate()}/
                        {new Date(result.date).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-end"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultsComp;

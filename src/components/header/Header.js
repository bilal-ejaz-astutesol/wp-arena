//header.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../images/wp-arena-logo.svg";
import SearchIcon from "../../images/search-icon.png";
import { API_BASE_URL } from "@/apiConfig";
import axios from "axios"; // Ensure axios is imported
import "./Header.css";
//import SearchResults from '../searchResults'; // Import the SearchResults component

const Header = () => {
  const router = useRouter(); // Use router for navigation
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      //await fetchResults(); // Fetch the results first
      router.push(`/searchresult?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section>
      <header>
        <div className="wpa-header-wrapper wpa-wrapper-sides-spacing wpa-flex wpa-gap-xxl wpa-content-top-bottom-spacing">
          <div className="wpa-header-logo">
            <Link href="/" passHref>
              <Image
                src={HeaderLogo}
                alt="Header Logo"
                width={16}
                height={16}
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="wpa-flex wpa-space-between wpa-width-100 wpa-flex-end-on-sm">
            <nav className="wpa-parahraph-text wpa-list-style-type-none wpa-anchor-underline-none wpa-desktop-menu">
              <ul className="wpa-flex wpa-menu-items-gap wpa-regular-font-weight">
                <li>
                  <Link href="/category/news" passHref>
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/category/tutorials" passHref>
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/category/reviews" passHref>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/category/comparisons" passHref>
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/category/resources" passHref>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/category/collections" passHref>
                    Collection
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="wpa-right-menu-buttons">
              <div className="wpa-header-search-bar wpa-flex">
                <div className="wpa-flex">
                  <form className="wpa-flex" onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="head-btn" type="submit">
                      <Image
                        width={16}
                        height={16}
                        objectFit="cover"
                        src={SearchIcon}
                        alt="Search Icon"
                      />
                    </button>
                  </form>
                </div>
                {/* <div className="wpa-header-my-account">
                  <button>My Account</button>
                </div> */}
              </div>
            </div>

            {/* mobile menu start */}
            <div className="menuButton wpa-mobile-menu">
              <input type="checkbox" id="navcheck" role="button" title="menu" />
              <label htmlFor="navcheck" aria-hidden="true" title="menu">
                <span className="burger">
                  <span className="bar">
                    <span className="visuallyhidden">Menu</span>
                  </span>
                </span>
              </label>
              <ul id="menu" className="menuNav">
                <li>
                  <Link href="/category/news" passHref>
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/category/tutorials" passHref>
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/category/reviews" passHref>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/category/comparisons" passHref>
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/category/resources" passHref>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/category/collections" passHref>
                    Collection
                  </Link>
                </li>
              </ul>
            </div>
            {/* mobile menu end */}
          </div>
        </div>
      </header>

      {/* Render search results here */}
      {/* <SearchResults searchResults={searchResults} loading={loading} error={error} /> */}
    </section>
  );
};

export default Header;

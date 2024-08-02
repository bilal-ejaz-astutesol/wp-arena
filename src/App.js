import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Pages from "./components/Pages";
import PostPage from "./components/PostPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import ServicesBar from './components/top-services-bar/ServicesBar';
import Directory from './components/directory/Directory';
import BlogCategories from './components/blog-categories/BlogCategories';
import ToolKit from './components/toolkit/ToolKit';
import Services from './components/services/Services';
import AdvertiseWithUs from './components/advertise/AdvertiseWithUs';
import Plugins from './components/plugins/Plugins';
import Themes from './components/themes/Themes';
import Faqs from './components/faqs/Faqs';
import AboutUs from './components/aboutus/AboutUs';
import Patners from './components/patners/Patners';
import Statistics from './components/statistics/Statistics';
import News from './components/News';
import './components/Media.css';
import ThemeDetail from './components/themedetail/ThemeDetail';
import ScrollTop from "./components/scrolltop/ScrollTop";
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';
import SearchResults from './components/searchResults';
// import ThemeDetail from "./components/themedetail/ThemeDetail";

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoints = [`${API_BASE_URL}/posts`, `${API_BASE_URL}/pages`];
      const requests = endpoints.map(endpoint =>
        axios.get(endpoint, { params: { search: query } })
      );
      const responses = await Promise.all(requests);
      const combinedResults = responses.flatMap(response => response.data);
      setSearchResults(combinedResults);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchResults();
  };

  return (
    <div className="App">
      <BrowserRouter basename="programming-demo">
        <ScrollTop />
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <ServicesBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/reviews/themes" element={<Themes />} />
          <Route path="/category/reviews/plugin" element={<Plugins />} />
          <Route path="/category/:type" element={<News />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/:slug" element={<PostPage />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/advertise" element={<AdvertiseWithUs />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/toolkit" element={<ToolKit />} />
          <Route path="/themedetail" element={<ThemeDetail />} />
          <Route path="/search-results" element={<SearchResults searchResults={searchResults} loading={loading} error={error} />} />
        </Routes>
        <Patners />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

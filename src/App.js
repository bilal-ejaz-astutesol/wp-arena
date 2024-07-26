import React, { useState, useEffect } from "react";
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
import News from './components/News'

import BlogDetail from './components/blog-detail/BlogDetail';
import ScrollTop from "./components/scrolltop/ScrollTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="wpa-loader-main">
        {/* You can customize the loader here */}
        <div className="wpa-loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <BrowserRouter basename="programming-demo">
          <ScrollTop />
          <Header />
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
            {/* <Route path="/themes" element={<Themes />} /> */}
            <Route path="/advertise" element={<AdvertiseWithUs />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/toolkit" element={<ToolKit />} />
          </Routes>
          <Patners />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

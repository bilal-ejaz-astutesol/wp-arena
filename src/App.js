import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Pages from "./components/Pages";
import PostPage from "./components/PostPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './components/home/Home'
import ServicesBar from './components/top-services-bar/ServicesBar'
import Directory from './components/directory/Directory'
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


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter basename="programming-demo">
      {/* <ScrollToTop /> */}
      <Header/>
      <ServicesBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<News />}/>
          <Route path="/pages" element={<Pages />} />
          <Route path="/:slug" element={<PostPage />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/advertise" element={<AdvertiseWithUs />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/toolkit" element={<ToolKit />} />
        </Routes>
        <Patners />
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

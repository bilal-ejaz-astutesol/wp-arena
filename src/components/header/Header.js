import React, {useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from "../../assets/images/wp-arena-logo.svg";
import SearchIcon from "../../assets/images/search-icon.png";
import closeIcon from "../../assets/images/close-icon.png";
import './Header.css';

const Header = ({ query, setQuery, handleSearch }) => {
  const navigate = useNavigate();

  const onSearch = (e) => {
    handleSearch(e);
    if (!query.trim()) {
      return;
    }
    navigate('/search-results');
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSearchClick = () => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  useEffect(() => {
    if (isHeaderOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup the class when the component unmounts or isMenuOpen changes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isHeaderOpen]);

  // Toggle the menu open/close state
  const handleBurgerClick = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  return (
    <section>
      <header>
        <div className='wpa-header-wrapper wpa-wrapper-sides-spacing wpa-flex wpa-gap-xxl wpa-content-top-bottom-spacing'>
          <div className='wpa-header-logo'>
            <Link to={"/"}><img src={HeaderLogo} alt="Header Logo" /></Link>
          </div>
          <div className='wpa-flex wpa-space-between wpa-width-100 wpa-flex-end-on-sm'>
            <nav className='wpa-parahraph-text wpa-list-style-type-none wpa-anchor-underline-none wpa-desktop-menu'>
              <ul className='wpa-flex wpa-menu-items-gap wpa-regular-font-weight'>
                <li><Link to="/category/news">News</Link></li>
                <li><Link to="/category/tutorials">Tutorials</Link></li>
                <li><Link to="/category/reviews">Reviews</Link></li>
                <li><Link to="/category/comparisons">Comparison</Link></li>
                <li><Link to="/category/resources">Resources</Link></li>
                <li><Link to="/category/collections">Collection</Link></li>
              </ul>
            </nav>
            <div className='wpa-right-menu-buttons'>
              <div className='wpa-header-search-bar wpa-flex'>
                <div className='wpa-flex'>
                  {/* <input
                    placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <img onClick={onSearch} src={SearchIcon} alt='Search Icon' /> */}
                    <form className='wpa-flex' onSubmit={(e)=>e.preventDefault()}>
                    <input type='text' placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <button className='head-btn' onClick={onSearch}><img src={SearchIcon} alt='Search Icon'/></button>
                  </form>
                </div>
               <div className='wpa-header-my-account'><button>My Account</button></div>
              </div>
            </div>
            {/* mobile search start*/}
            <div className='wpa-mobile-search-overlay' >
      <i
        id="search-btn"
        className=""
        onClick={handleSearchClick}
        style={{ display: isOpen ? 'none' : 'inline' }}
      ><img src={SearchIcon} alt='Search Icon'/></i>
      {isOpen && (
        <div id="search-overlay" className="block">
          <div className="centered">
            <div id="search-box">
              <i
                id="close-btn"
                className=""
                onClick={handleCloseClick}
              ><img src={closeIcon} alt="close"/></i>
              <form action="/search" id="search-form" method="get" target="_top">
                <input
                  id="search-text"
                  name="q"
                  placeholder="Search"
                  type="text"
                />
                <button id="search-button" type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
            {/* mobile search end */}

             {/* mobile menu start */}
             <div class="menuButton wpa-mobile-menu">
              <input type="checkbox" id="navcheck" role="button" title="menu" />
                <label for="navcheck" aria-hidden="true" title="menu">
                  <span class="burger" onClick={handleBurgerClick}>
                    <span class="bar">
                      <span class="visuallyhidden">Menu</span>
                    </span>
                  </span>
                </label>
                
                <ul id="menu" class="menuNav">
                
                <li><Link to="/category/news">News</Link></li>
                <li><Link to="/category/tutorials">Tutorials</Link></li>
                <li><Link to="/category/reviews">Reviews</Link></li>
                <li><Link to="/category/comparisons">Comparison</Link></li>
                <li><Link to="/category/resources">Resources</Link></li>
                <li><Link to="/category/collections">Collection</Link></li>
                </ul>
            </div>
            {/* mobile menu end */}

          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;

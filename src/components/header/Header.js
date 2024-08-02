import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from "../../assets/images/wp-arena-logo.svg";
import SearchIcon from "../../assets/images/search-icon.png";
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

  return (
    <section>
      <header>
        <div className='wpa-header-wrapper wpa-wrapper-sides-spacing wpa-flex wpa-gap-xxl wpa-content-top-bottom-spacing'>
          <div className='wpa-header-logo'>
            <Link to={"/"}><img src={HeaderLogo} alt="Header Logo" /></Link>
          </div>
          <div className='wpa-flex wpa-space-between wpa-width-100'>
            <nav className='wpa-parahraph-text wpa-list-style-type-none wpa-anchor-underline-none'>
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
                <button>My Account</button>
              </div>
            </div>

             {/* mobile menu start */}
             <div class="menuButton wpa-mobile-menu">
              <input type="checkbox" id="navcheck" role="button" title="menu" />
                <label for="navcheck" aria-hidden="true" title="menu">
                  <span class="burger">
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

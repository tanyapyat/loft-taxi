import { Component } from 'react';
import './Header.scss';
import { Logo } from 'loft-taxi-mui-theme';
import { withAuth } from '../../AuthContext';
import { Link } from 'react-router-dom';

class Header extends Component {
  unauthenticate = () => {
    this.props.logOut();
  }

  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <Logo/>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-list-item'>
                <Link to='/map' className='header__nav-list-item-link'>Карта</Link>
              </li>
              <li className='header__nav-list-item'>
                <Link to='/profile' className='header__nav-list-item-link'>Профиль</Link>
              </li>
              <li className='header__nav-list-item'>
                <Link to='/' onClick={this.unauthenticate} className='header__nav-list-item-link'>Выйти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default withAuth(Header);

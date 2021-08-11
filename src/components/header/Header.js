import styles from './Header.style.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTE } from '../../routes';

function Header() {
  return (
    <header className={styles.main}>
      <NavLink to={ROUTE.HOME} className={styles.main__brand}>
        🚲 tradebike.app
      </NavLink>
      <nav className={styles.main__nav}>
        <ul className={styles.main__nav__list}>
          <li className={styles.main__nav__list__item}>
            <NavLink
              className={styles.main__nav__list__item__text}
              activeClassName={styles.main__nav__list__item__text__isActive}
              to={ROUTE.LIST}
            >
              List
            </NavLink>
          </li>
          <li className={styles.main__nav__list__item}>
            <NavLink
              className={styles.main__nav__list__item__text}
              activeClassName={styles.main__nav__list__item__text__isActive}
              to={ROUTE.SIGNIN}
            >
              Sign in
            </NavLink>
          </li>
          <li className={styles.main__nav__list__item}>
            <NavLink
              className={styles.main__nav__list__item__text}
              activeClassName={styles.main__nav__list__item__text__isActive}
              to={ROUTE.SIGNUP}
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

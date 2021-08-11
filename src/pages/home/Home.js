import SearchForm from '../../components/searchForm/SearchForm';
import styles from './Home.style.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main__search}>
        <div className={styles.main__search__heading}>
          <h1 className={styles.main__search__heading__text1}>
            Looking for a new cycle?
          </h1>
          <h4 className={styles.main__search__heading__text2}>
            <span className={styles.brand}>tradebike.app</span> is the easiest
            way to find your next cycle.
          </h4>
        </div>
        <div className={styles.main__search__form}>
          <SearchForm />
        </div>
      </section>
    </main>
  );
}

export default Home;

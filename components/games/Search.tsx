import styles from '../../styles/components/search.module.scss'

const Search:React.FC = () => {
    return(
        <input className={styles.search} type="text" placeholder='Ключевые слова'/>
    )
}

export default Search
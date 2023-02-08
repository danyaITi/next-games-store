import styles from '../../styles/components/search.module.scss'

interface SearchProps {
    value?:string
    setValue?:(arg:string) => void
}

const Search:React.FC<SearchProps> = ({value, setValue}) => {

    return(
        <input value={value} onChange={(e)=>setValue(e.target.value)} className={styles.search} type="text" placeholder='Ключевые слова'/>
    )
}

export default Search
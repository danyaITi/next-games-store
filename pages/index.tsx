import Container from '@mui/material/Container';
import { GetStaticProps } from 'next';
import { Games } from '../types/types';
import Card from '../components/games/Card';
import styles from '../styles/games.module.scss';
import style from '../styles/components/card.module.scss';
import Box from '@mui/material/Box';
import Select from '../components/games/Filter';
import {selectGenre, selectPrice} from '../utils/selectItems';
import DrawerComponent from '../components/games/Drawer';
import Search from '../components/games/Search';
import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const getStaticProps: GetStaticProps = async () => {
    try {
        const resp = await fetch(`${process.env.API_HOST}/games`);
        const data = await resp.json();

        if(!data){
            return {
                notFound: true
            }
        }

        return {
            props: {games: data},
        }

    } catch (error) {
        return {
            props: {games: []}
        }
    }

}

const Games:React.FC<Games> = ({games}) => {
    const [value, setValue] = useState<string>('')
    const [genre, setGenre] = useState<string>('')

    const {debounce,isPending} = useDebounce(value,500)

    const searchGames = () => {
        const data = games.filter((item)=>{
            if(item.title.toLowerCase().includes(debounce.toLowerCase())){
                return true
            } else {
                return false
            }
        })
        .map((item) => (
            <Card key={item.id} {...item}/>
        ))
        return data
    }

    const filterGames = () => {
        const data = games.filter((item)=>{
            if(item.genres.includes(genre) 
                || item.price === genre 
                || genre === 'Ниже 650,00 руб' && item.price<650 
                ){
                return true 
            } else {
                return false
            }
        })
        .map((item) => (
            <Card key={item.id} {...item}/>
        ))
        return data
    }

    const cancelOptions = () => {
        setValue('')
        setGenre('')
    }

    useEffect(()=>{
    },[debounce])

    useEffect(()=>{
        filterGames()
    },[genre])


    return(
        <Container maxWidth="lg">
            <Box className={styles.gamesFlex}>
                <DrawerComponent />
                 
                <div className={styles.gamesGrid}>

                    {!isPending 
                    ? [...new Array(games.length)]
                        .map((_,i) => (
                            <div key={i} className={style.skeleton}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        )) 
                    : <>{!genre.length ? searchGames() : filterGames()}</>}
                    
                </div>
               

                <div className={styles.right}>
                    <div className={styles.count}>
                        <span>Фильтры</span>
                        <span onClick={cancelOptions}>Cбросить</span>
                    </div>
                    <Search setValue={setValue} value={value}/>
                    
                    <Select setGenre={setGenre} data={selectPrice}/>
                    <Select setGenre={setGenre} data={selectGenre}/>
                </div>
            </Box>
        </Container>
    )
}

export default Games
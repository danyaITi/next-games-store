import Container from '@mui/material/Container';
import { GetStaticProps } from 'next';
import { Games } from '../types/types';
import Card from '../components/games/Card';
import styles from '../styles/games.module.scss';
import Box from '@mui/material/Box';
import Select from '../components/games/Filter';
import {selectGenre, selectPrice} from '../utils/selectItems';
import DrawerComponent from '../components/games/Drawer';
import Search from '../components/games/Search';

export const getStaticProps: GetStaticProps = async () => {
    try {
        const resp = await fetch(`${process.env.API_URL}/games`);
        const data = await resp.json();

        if(!data){
            return {
                notFound: true
            }
        }

        return {
            props: {games: data}
        }

    } catch (error) {
        return {
            props: {games: []}
        }
    }

}

const Games:React.FC<Games> = ({games}) => {

    return(
        <Container maxWidth="lg">
            <Box className={styles.gamesFlex}>
                <DrawerComponent/>
                
                <div className={styles.gamesGrid}>
                    {games.map((item) => (
                        <Card key={item.id} {...item}/>
                    ))}
                </div>

                <div className={styles.right}>
                    <div className={styles.count}>
                        <span>Фильтры (1)</span>
                        <span>Cбросить</span>
                    </div>
                    <Search/>
                    <Select data={selectPrice}/>
                    <Select data={selectGenre}/>
                </div>
            </Box>
        </Container>
    )
}

export default Games
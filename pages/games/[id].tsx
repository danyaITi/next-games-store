import Container from '@mui/material/Container';
import { GetStaticPaths, GetStaticProps } from "next";
import Image from 'next/image';
import { GameId } from "../../types/types";
import styles from '../../styles/game.module.scss';
import Box from '@mui/material/Box';
import { useMemo } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
    try{
        const resp = await fetch(`${process.env.API_HOST}`);
        const data = await resp.json();

        const paths = data.map(({id}) => ({
            params: {id: id.toString()}
        }));

        return {
            paths,
            fallback:false
        }
    } catch(error) {
        return {
            paths: [],
            fallback:false
        }
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const resp = await fetch(`${process.env.API_HOST}/${params.id}`);
        const data = await resp.json();

        if(!data){
            return {
                notFound: true
            }
        }

        return {
            props: {game: data}
        }
    } catch (error) {
        return {
            props: {game: {}}
        }
    }

} 

const Game:React.FC<GameId> = ({game}) => {

    const addGenres = (genres:string[]) => {
        const newArr:string[] = [];
      
        for (let i = 0; i < genres.length; i++) {
          const el = genres[i];
      
          if (i === genres.length - 1) {
            newArr.push(el)
          } else {
            newArr.push(el + ',')
          }
          
        }

        return newArr
    };

    const genresResult = useMemo(() => addGenres(game.genres), [game.genres]);


    const buttons = [
        <button className={styles.buy} key="buy">{game.price === 'Бесплатно' ? 
        'Получить': 'Купить сейчас'}</button>,
        <button className={styles.add} key="add">Добавить в корзину</button>,
        <button className={styles.toList} key="toList">В список желаемого</button>,
    ];

    return(
        <Container maxWidth='xl'> 
            <Box className={styles.gameFlex}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{game.title}</h1>
                    
                    <Image 
                        src={game.image}
                        className={styles.img} 
                        width={600} 
                        height={350} 
                        alt={game.title}
                    />
                    
                    <p className={styles.desc}>{game.description}</p>
                    
                    <div className={styles.genres}>
                        <span>Жанры</span>
                        <ul>
                            {genresResult.map((item,i)=>(
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.right}>
                    <Image 
                        src={game?.icon} 
                        className={styles.icon}
                        width={200} 
                        height={50} 
                        alt={game.title}
                    />
                    
                    <div className={styles.price}>
                        {game.price === 'Бесплатно' ? game.price : game.price + ' руб'}
                    </div>

                    <>
                        {buttons}
                    </>
                </div>
            </Box>
        </Container>
    )
}

export default Game


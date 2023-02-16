import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import { Game } from '../../types/types';
import styles from '../../styles/components/card.module.scss';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Card:React.FC<Game> = ({image, title, price, id}) => {

    const {ref, inView} = useInView({
        threshold:.1,
        triggerOnce:true
    });
    
    return(
        <div ref={ref} className={styles.card} >
            {inView ? 
                <>
                    <CardActionArea style={{borderRadius: '5px'}}>

                        <Link href={`game/${id}`} style={{ color: 'inherit'}}>
                            <Image 
                                className={styles.img} 
                                src={image} 
                                width={300} 
                                height={150} 
                                alt={title}
                            />
                            <span className={styles.title}>{title}</span>
                            <span className={styles.price}>
                                {price === 'Бесплатно' ? price : price + ' руб'}
                            </span>
                        </Link>

                    </CardActionArea> 
                    <div className={styles.add}>
                        <button>Добавить</button>
                    </div>
                </> 
                : (<div className={styles.skeleton}></div>)
            }
        </div> 
         
        
        
        
    )
}

export default Card
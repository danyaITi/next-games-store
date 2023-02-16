import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../styles/components/filter.module.scss';
import { SelectItem } from '../../types/types';
import { useState } from 'react'

interface SelectProps {
    data:SelectItem
    setGenre?:(arg:string)=>void

    active?:boolean
    setActive?:(arg:boolean)=>void
}

const Select:React.FC<SelectProps> = ({data, setGenre, active, setActive}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const {title, items} = data;

    const handleClick = (item: {name:string, id:number}) => {
        setGenre(item.name)
        setActiveIndex(item.id)
        setActive(!active)

        if(activeIndex !== item.id){
            setActive(true)
        } else if(active){
            setGenre('')
        }
        
    }

    return(
        <Accordion className={styles.filter}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'#f5f5f5'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.block}
            >
                <Typography className={styles.name}>{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography className={styles.selectItems}>
                    {items.map((item)=>(
                        <span 
                            className={activeIndex === item.id && active ? styles.active : ''} 
                            onClick={()=>handleClick(item)} 
                            key={item.id}
                        >
                            {item.name}
                        </span> 
                    ))} 
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Select
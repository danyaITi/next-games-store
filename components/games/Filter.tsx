import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../styles/components/filter.module.scss';
import { SelectItem } from '../../types/types';

interface SelectProps {
    data:SelectItem
    setGenre:(arg:string)=>void
}

const Select:React.FC<SelectProps> = ({data, setGenre}) => {
    const {title, items} = data;

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
                        <span onClick={()=>setGenre(item.name)} key={item.id}>
                            {item.name}
                        </span> 
                    ))} 
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default Select
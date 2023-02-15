import {useState, useEffect} from 'react'

export const useDebounce = (value:string, delay:number) => {
    const [debounce, setDebounce] = useState<string>(value)
    const [isPending, setIsPending] = useState<boolean>(false)

    useEffect(()=>{

        const handler = setTimeout(()=>{
            setDebounce(value)
            setIsPending(true)
        },delay)

        return () => {
            clearTimeout(handler)
            setIsPending(false)
        }

    },[value])

    return {
        debounce,
        isPending,
    }
    
}
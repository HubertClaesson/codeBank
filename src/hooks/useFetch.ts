import { useEffect, useState } from "react"


export const useFetch = (url: string) => {

    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('');
            }
            return response.json();
        })
        .then((data: any) => {
            setData(data);
            console.log(data)
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
        
    }, [url]);

    const fetchFunction = () => {
        setLoading(true);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('');
            }
            return response.json();
        })
        .then((data: any) => {
            setData(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
        
    }


    return {data, loading, error, fetchFunction} as const;

    
}
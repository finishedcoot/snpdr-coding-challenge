export interface FetchResult<T> {
    data?: T ;
    error?: string ;
}
export const fetchData = async (url: string): Promise<FetchResult<any>> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        return { data };
    } catch (error: any) {
        console.log({error})
        return {error: `${error.message}: ${error.status ?? 'unknown error (probably connection)'}` || 'Unknown error'};
    }
};
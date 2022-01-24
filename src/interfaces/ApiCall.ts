// interface with  a fetchData method
export interface ApiCall {
    fetchData(url: string): Promise<Object>;
}

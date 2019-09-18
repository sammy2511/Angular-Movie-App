import { IMovie } from './movie';

export interface IResult {
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number,
}
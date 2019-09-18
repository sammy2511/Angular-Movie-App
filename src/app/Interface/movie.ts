import { IGenre } from './igenre';

export interface IMovie {
    id:number,
    vote_count:number,
    vote_average:number,
    runtime:number,
    overview:string,
    poster_path:string,
    backdrop_path:string,
    imdb_id:string,
    title:string,
    release_date:string,
    tagline:string
    genres:IGenre[]
}

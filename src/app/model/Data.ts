import { Genres } from './Genres';
import { Aired } from './Aired';
import { Titles } from './Titles';
import { Trailer } from './Trailer';
import { Images } from './Images';
import { Broadcast } from './Broadcast';
import { Producers } from './Producers';
import { Licensors } from './Licensors';
import { Studios } from './Studios';
import { Themes } from './Themes';
export class Data{
    public mal_id: number;
    public url:string;
    public images: Images;
    public trailer: Trailer;
    public approved: boolean;
    public titles: Titles[]; 
    public title:string;
    public title_english: string;
    public title_japanese: string;
    public title_synonyms: [];
    public type: string
    public source: string
    public episodes: number;
    public status: string;
    public airing: boolean;
    public aired: Aired; 
    public duration: string;
    public rating: string;
    public score: number;
    public scored_by: number;
    public rank: number;
    public popularity: number;
    public members: number;
    public favorites: number;
    public synopsis: string;
    public background: string
    public year: number;
    public broadcast: Broadcast; 
    public producers: Producers[]; 
    public licensors: Licensors[];
    public studios:Studios[];
    public genres:Genres[];
    public explicit_genres:[];
    public themes: Themes[]; 
    public demographics: [];
}
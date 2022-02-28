
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
export default function Search(){
   
        const [keyword, setKeyword] = useState('');
        const history = useRouter();
    
        const onFormSubmit = async (e) => {
            e.preventDefault();
            history.push(`/search?q=${keyword}`)
        };
    
        const onInputChange = async (e) => {
            setKeyword(e.target.value)
        };

        return(
            <div>
                 <form className="searchBarHolder" onSubmit={onFormSubmit}>
                 <input id="search" name="search" type="text" value={keyword} placeholder="Search" className="searchBar" onChange={onInputChange}/>   
                 <SearchIcon className="searchIconPostion"/>
                 </form>
            </div>
        )
}
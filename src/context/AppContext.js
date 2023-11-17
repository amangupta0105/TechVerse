import { createContext, useState } from "react";
import {baseUrl}  from '../externalUrl';

//Creation of Context (Snapshot box)
export const AppContext = createContext();

//Provider
function AppContextProvider({children}){

    const [page,setPage] = useState(1);
    const [totalPage,settotalPage] = useState(null);
    const [post,setPost] = useState([]);
    const [loading,setLoading] = useState(false);

    async function fetchData (page){
        try{
            const ans = await fetch (`${baseUrl}?page=${page}`);
            const data =await ans.json();
            console.log(data);
            if (data) {
                setLoading(true);
                setPost(data.posts);
                settotalPage(data.totalPages);
                setPage(data.page);
                setLoading(false);
            } else {
                console.log('Invalid data structure in API response');
            }
        }
        catch{
            console.log('Error in fetching Api');
        }

    }

    const value = {page,setPage,totalPage,settotalPage,fetchData,post,setPost,loading,setLoading}

    return(
        <AppContext.Provider value={value} >
         {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
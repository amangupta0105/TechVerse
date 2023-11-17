import { useContext } from 'react';
import '../css/Footer.css';
import { AppContext } from '../context/AppContext';
function Footer() {

    const {page,setPage,totalPage,fetchData} = useContext(AppContext);

    function previousHandler(){
        setPage(page-1);
        fetchData(page-1);
    }
    function nextHandler(){
        setPage(page+1);
        fetchData(page+1);
    }

    return (
        <div className="footer">
            <div className='navigation-buttton'>
                {page > 1 ? <button onClick={previousHandler}>Previous</button> : '' }
                {page < totalPage ? <button onClick={nextHandler}>Next</button> : ''}
            </div>
            <p className='page-number'>Page {page} of {totalPage}</p>
        </div>
    )
}

export default Footer;
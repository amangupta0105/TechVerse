import { useContext, useEffect } from 'react';
import '../css/Blogs.css';
import { AppContext } from '../context/AppContext';

function Blogs() {
    const { post, fetchData,page,loading} = useContext(AppContext);

    useEffect(() => {
        fetchData(page);
    },[]);

    return (
        <div className="blogs">
            {loading ? <span class="loader"></span> : <div>
            {post.map((blogPost) => (
                <div className='post-block' key={blogPost.id}>
                    <h2 className='post-title'>{blogPost.title}</h2>
                    <p className='post-author'>By {blogPost.author}</p>
                    <p className='post-date'>Posted On {blogPost.date}</p>
                    <br/>
                    <p className='post'>{blogPost.content}</p>
                    <div className='tags'>
                        {blogPost.tags.map((tag, index) => (
                            <span className='post-tags' key={index}>#{tag} </span>
                        ))}
                    </div>
                </div>
            ))}
                </div>}
            
        </div>
    );
}

export default Blogs;

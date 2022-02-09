import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import { Post } from '../Post/Post';
import { PostInfo } from './PostInfo';


export function PostList(){
    const params = useParams();

    const [postList, setPostList] = useState();
    useEffect(
        () => {
            fetch(`http://localhost:3001/posts/?page=${params.pageNumber}`)
                .then(response => response.json())
                .then(postListJson => setPostList(postListJson.results));
        },
        [params.pageNumber]
    );
    let postListContent;
    if (postList){
        postListContent = <>
          {postList.map((post, index) => (
            <li key={index}>
                <Post post={post} />
                <PostInfo postInfo={post}/>
                <Footer />
            </li>
        ))}
        </>
    } else {
        postListContent = <>
        <h2>Loading content...</h2>
        </>
    }

    return <ol>
      {postListContent}
    </ol>
}
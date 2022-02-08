import React, {useState, useEffect} from 'react';
import { Post } from '../Post/Post';
import { PostInfo } from './PostInfo';


export function PostList(){
    const [postList, setPostList] = useState([]);
    useEffect(
        () => {
            fetch(`http://localhost:3001/posts`)
                .then(response => response.json())
                .then(postListJson => setPostList(postListJson.results));
        },
        []
    );

    return <ol>
        {postList.map((post, index) => (
            <li key={index}>
                <Post post={post} />
                <PostInfo postInfo={post}/>
            </li>
        ))}
    </ol>
}
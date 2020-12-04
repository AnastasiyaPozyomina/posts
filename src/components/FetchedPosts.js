import React from 'react';
import Post from './Post';

export default ({ posts }) => {
    if (!posts.length) {
        return <p className="btn btn-primary">Загрузить</p>
    }
    return posts.map (post => <Post key={post} />)
}
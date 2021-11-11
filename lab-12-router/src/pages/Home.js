import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <Link to="/posts/3">Post ID 3</Link>
        </React.Fragment>
    )
}
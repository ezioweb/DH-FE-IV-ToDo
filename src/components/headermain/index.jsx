import { Link } from 'react-router-dom'
import './style.css'

export default function Headermain(){
    return(
        <header>
            <div className='container'>
                <div className='logo'>
                    <h1>ToDo</h1>
                </div>

                <div className='btn-newPost'>
                    <Link to='/post'>
                        <button>Add new post</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
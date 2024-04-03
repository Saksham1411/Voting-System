import { Link } from 'react-router-dom'
import error from '../assets/error.svg'

function Error() {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center '>
            <img className='w-3/5 h-3/5 -translate-y-16' src={error} alt="error" />
            <p className='text-2xl font-normal -translate-y-5'>The page you are trying to reach in not present at the moment</p>
            <Link to='/' className='text-blue-600 text-2xl font-semibold hover:text-blue-700'>Return to Home page</Link>
        </div>
    )
}

export default Error
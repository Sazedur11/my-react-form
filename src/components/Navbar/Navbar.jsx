
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className='text-xl font-bold text-center my-4'>
                <Link className='mr-4' to={'/'}>Home</Link>
                <Link to={"/refform"}>Refform</Link>
            </ul>
        </div>
    );
};

export default Navbar;
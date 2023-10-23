import { Outlet } from 'react-router-dom';


const Leyout = () => {
    return (
        <div className='dark:bg-white'> 
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Leyout;
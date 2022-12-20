import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AuthContext } from '../authContext';
import MkdSDK from '../utils/MkdSDK';

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const [videos, setVideos] = React.useState([]);
  const [totalNumber, setTotalNumber] = React.useState(0);
  const PER_PAGE = 10;

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  React.useEffect(() => {
    const fetVideos = () => {};
  }, [videos]);

  return (
    <div className=' bg-background font-inter '>
      <nav className=' flex justify-between items-center container mx-auto'>
        <h1 className='text-[48px]  font-[900] text-white'>Admin</h1>
        <button
          onClick={handleLogout}
          className='w-[128px] h-[48px] rounded-full bg-light-green flex items-center gap-[11.75px] justify-center text-[16px] text-primary-2'
        >
          <BiUser /> <span>Logout</span>
        </button>
      </nav>

      <div className='flex justify-between items-center mt-[126px]'>
        <h2 className='text-[40px] font-[100] leading-[48px] text-white'>
          Today's leaderBoard
        </h2>
        <div className='py-[18px] px-[24px]  flex items-center gap-[28px] bg-[#1D1D1D] rounded-[16px] '>
          <p className='text-white font-[100] text-[16px]'>30 May 2022</p>
          <span className='w-[4px] h-[4px] bg-white rounded-full' />
          <p className='py-[4px] px-[10px] text-center rounded-[8px] bg-light-green text-primary-2'>
            SUBMISSIONS OPEN
          </p>
          <span className='w-[4px] h-[4px] bg-white rounded-full' />
          <p className='text-white font-[100] text-[16px]'>11:34</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AuthContext } from '../authContext';
import MkdSDK from '../utils/MkdSDK';
import VideoCard from '../components/VideoCard';
import { data } from 'autoprefixer';

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const [videos, setVideos] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const PER_PAGE = 10;

  const sdk = new MkdSDK();

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  React.useEffect(() => {
    async function fetchData() {
      const payload = {
        page: currentPage,
        limit: 10,
      };
      const method = 'PAGINATE';
      const data = await sdk.callRestAPI(payload, method);
      setVideos(data.list);
      setTotalPages(data.num_pages);
    }
    fetchData();
  }, [currentPage]);

  console.log(currentPage);
  console.log(totalPages);

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

      <section>
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

        <div className='mt-[36px]'>
          <div className='flex justify-between text-[16px] text-[#666666] px-[24px]'>
            <p className='flex gap-[28px]'>
              <span>#</span>
              <span>Title</span>
            </p>
            <p>Author</p>
            <p>Most Liked</p>
          </div>
          <div className='flex flex-col gap-[10px] mt-[16px]'>
            {videos.map((video) => (
              <VideoCard
                img={video.photo}
                id={video.id}
                title={video.title}
                likes={video.like}
                user={video.username}
              />
            ))}
          </div>
        </div>

        <div className=' flex items-center justify-between mt-[36px]'>
          <button
            className={`px-4 py-2 rounded-full  text-white ${
              currentPage <= 1 ? 'bg-gray-800' : 'bg-light-green'
            }`}
            disabled={currentPage <= 1}
            onClick={() => {
              !currentPage <= 1 && setCurrentPage(currentPage - 1);
            }}
          >
            Previous
          </button>
          <button
            disabled={currentPage >= totalPages}
            className={`px-4 py-2 rounded-full  text-white ${
              currentPage == totalPages ? 'bg-gray-800' : 'bg-light-green'
            }`}
            onClick={() => {
              currentPage <= totalPages && setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;

import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
const VideoCard = ({ id, img, title, likes, user }) => {
  return (
    <div className='flex justify-between  w-full rounded-[16px] border-[1px] border-gray py-[39px] px-[24px] text-[#666666]'>
      <div className='flex gap-[16px ] items-center   gap-[28px]'>
        <span>{id}</span>
        <img
          src={img}
          alt=''
          className='w-[118px] h-[64px] rounded-[8px] object-cover'
        />
        <p className='w-[364px] text-[20px] font-[100]'>{title}</p>
        <div className='flex items-center gap-[8px] '>
          <img src={img} alt='' className='w-[24px] h-[24px] ' />
          <p className='text-[#DBFD51] text-[16px] font-[100] leading-5'>
            {user}
          </p>
        </div>
      </div>

      <p className='text-[16px] font-[100] leading-5 flex items-center gap-[9.02px]'>
        {likes}
        <AiOutlineArrowUp className='text-light-green' />
      </p>
    </div>
  );
};

export default VideoCard;

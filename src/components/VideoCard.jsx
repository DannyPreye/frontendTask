import React from 'react';

const VideoCard = ({ id, img, title, likes }) => {
  return (
    <div className='flex justify-between  w-full h-[96px]'>
      <div className='flex gap-[16px items-center]'>
        <span>{id}</span>
        <img src={img} alt='' className='w-[118px] h-[64px] rounded-[8px] ' />
        <p className='text-[20px] font-[100]'>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;

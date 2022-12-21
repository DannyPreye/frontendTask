import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useDrag, useDrop } from 'react-dnd';

const VideoCard = ({ id, img, title, likes, user, index, moveCard }) => {
  const ref = React.useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'Row',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'Row',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className='flex justify-between  w-full rounded-[16px] border-[1px] border-gray py-[39px] px-[24px] text-[#666666]'
    >
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

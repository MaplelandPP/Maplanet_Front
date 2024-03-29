'use client';

import { useState } from 'react';
import { IWoodCutterBoard } from '@/types';
import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';
import Badge from '@/components/ui/badge';
import dayjs from 'dayjs';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import { filterImageUrl } from '@/util/util';
import WoodCutterBoardModal from '@/components/modal/board/wood-cutter-board-modal';
dayjs.locale('ko');

interface IWoodCutterCardProps extends IWoodCutterBoard {
  badges?: string[];
}

const WoodCutterCard: React.FunctionComponent<IWoodCutterCardProps> = ({
  complete,
  discord_id,
  created_at,
  meso,
  badges,
  title,
  discord_image,
  manner_count,
  report_count,
  discord_global_name,
  board3_id,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <WoodCutterBoardModal
          boardId={board3_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}

      {complete ? (
        <BoardCardCompleate />
      ) : (
        <BoardCardHoverButtons
          discordId={discord_id}
          profileId={props.user_id}
          setIsModalOpen={onOpen}
        />
      )}

      <div className='flex w-full items-center justify-between '>
        <Badge className={'bg-main'} size='card'>
          {'나무꾼'}
        </Badge>
        <time className='font-medium text-gray-400'>
          {dayjs(created_at).format('YYYY년 MM월 DD일')}
        </time>
      </div>

      <h1 className='my-6 text-xl font-semibold'>{title}</h1>
      <div className='mb-4 mt-3 flex flex-wrap items-center gap-2'>
        <Badge size='card' className='bg-lightGray text-yellow'>
          <Icon src='/svgs/money.svg' size={20} alt='meso' />
          {meso === 0 ? '협의 가능' : meso}
        </Badge>
        {badges?.map((el) =>
          el ? (
            <Badge size='card' key={el} className='bg-lightGray '>
              {el}
            </Badge>
          ) : null
        )}
      </div>
      <div className='mt-6 flex items-center justify-between '>
        <InlineProfile
          imgUrl={filterImageUrl(discord_image)}
          manner={manner_count}
          unManner={report_count}
          discordNickName={discord_global_name}
        />
        <div className='flex items-center gap-x-1 font-light'>
          <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
          <p className='leading-3'>{props.view_count}</p>
        </div>
      </div>
    </>
  );
};

export default WoodCutterCard;

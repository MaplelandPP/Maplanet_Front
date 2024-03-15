import { Suspense } from 'react';
import { fetchBoardData } from '@/actions/common';

import Banner from '@/components/ui/banner';
import Loading from '@/components/ui/loading';

import Sort from '../components/sort';
import Search from '../components/search';
import Pagination from '../components/pagination';
import BoardResult from '../components/board-result';
import PartyCard from '../components/party-board/party-card';
import { partyBoardFilters, sortOptions } from '@/data/board';

import { IPartyBoard } from '@/types';

interface IPartyBoardPageProps {}

const PartyBoardPage: React.FunctionComponent<IPartyBoardPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    page?: string;
    query?: string;
    value?: string;
    searchType?: string;
  };
}) => {
  // TODO : Fetch Data from server

  const fetchData = await fetchBoardData<{
    board4Data?: IPartyBoard[];
    search4Data?: IPartyBoard[];
    totalCount?: number;
  }>({
    url: '/board4',
    page: searchParams?.page || '1',
    searchType: searchParams?.searchType,
    value: searchParams?.value,
    option: {
      cache: 'no-store'
    }
  });

  const partyBoardData = fetchData?.board4Data || [];
  const searchBoardData = fetchData?.search4Data || [];
  const totalBoardCount = fetchData?.totalCount || 0;

  return (
    <Suspense
      fallback={
        <div className='flex h-[500px] items-center justify-center'>
          <Loading size={100} />
        </div>
      }>
      <BoardResult.Wrapper>
        <BoardResult.List
          list={partyBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board4_id}>
                <PartyCard
                  {...board}
                  badges={[
                    board.progress_time,
                    board.hunting_ground,
                    `${board.recruit_people_count}명 모집`
                  ]}
                />
              </BoardResult.Item>
            );
          }}
        />

        <BoardResult.List
          list={searchBoardData || []}
          render={(board) => {
            return (
              <BoardResult.Item key={board.board4_id}>
                <PartyCard
                  {...board}
                  badges={[
                    board.progress_time,
                    board.hunting_ground,
                    `${board.recruit_people_count}명 모집`
                  ]}
                />
              </BoardResult.Item>
            );
          }}
        />
      </BoardResult.Wrapper>
      <Pagination totalPost={totalBoardCount} itemsPerPage={5} pagePerItem={12} />
    </Suspense>
  );
};

export default PartyBoardPage;

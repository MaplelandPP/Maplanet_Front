import { getNotice } from '@/actions/notice';

import NoticeList from '../components/notice-list';
import NoticePageNation from '../components/notice-pagination';

import { INotice } from '@/types';

interface INoticePageProps {}

const NoticePage: React.FunctionComponent<INoticePageProps> = async ({
  searchParams
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const fetchData: INotice[] = (await getNotice(searchParams?.page || '1'))?.noticeData || [];
  const totalNotice = (await getNotice(searchParams?.page || '1'))?.totalCount || 1;

  return (
    <>
      <NoticeList noticeList={fetchData || []} />
      <div className='flex w-full items-center justify-center'>
        <NoticePageNation itemsPerPage={5} totalPost={totalNotice} pagePerItem={8} />
      </div>
    </>
  );
};

export default NoticePage;

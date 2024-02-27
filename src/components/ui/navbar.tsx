'use client';

import Button from './button';
import Link from 'next/link';
import Icon from './icon';
import Inner from './inner';

const Navbar = () => {
  return (
    <nav className='fixed z-50 flex h-[60px] w-full bg-black px-10 text-white xl:px-0'>
      <Inner>
        <div className='flex h-full items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link href='/' className='text-2xl font-semibold '>
              매랜피플
            </Link>
          </div>
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center'>
            <Button size='xs' color='discord'>
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
              <span>메이플레닛 디스코드 채널</span>
              <Icon src={'/svgs/link.svg'} alt='link' size={15} />
            </Button>
          </div>
          <div className='flex items-center space-x-7 whitespace-nowrap text-lg'>
            <Link href='/notice'>공지사항</Link>
            <Link href='/board1'>잠쩔</Link>
            <Link href='/board2'>겹사 의뢰</Link>
            <Button size='xs' color='discord'>
              <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
              로그인
            </Button>
          </div>
        </div>
      </Inner>
    </nav>
  );
};

export default Navbar;

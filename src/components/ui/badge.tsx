import clsx from 'clsx';

interface IBadgeProps {
  children: React.ReactNode;
  size?: 'basic' | 'select' | 'card';
  className?: string;
}

const sizes = {
  basic: 'px-[24px] py-[4px] rounded-xl',
  select: 'px-2 py-[1px]',
  card: 'px-[12px] py-[4px] rounded-xl'
};

const Badge: React.FunctionComponent<IBadgeProps> = ({ size = 'basic', children, className }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-x-2 text-sm font-semibold text-white',
        size ? sizes[size] : '',
        className ? className : ''
      )}>
      {children}
    </div>
  );
};

export default Badge;
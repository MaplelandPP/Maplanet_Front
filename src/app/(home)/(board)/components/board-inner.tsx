interface IBoardInnerProps {
  children: React.ReactNode;
}

const BoardInner: React.FunctionComponent<IBoardInnerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-[500px]  px-4 sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
      {children}
    </div>
  );
};

export default BoardInner;

import RightIcon from '../assets/icons/rightIcon.svg'
export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div className="container">
        <p className='font-medium flex justify-center'>
          <span className='hidden sm:inline pr-2'>This page is included in a free SaaS Website Kit.</span>
          <a href="#" className="flex items-center">
          View the complete Kit
          <span className='px-1'><RightIcon/></span>
          </a>
        </p>
      </div>
    </div>
  );
};

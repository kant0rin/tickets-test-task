import img from '../assets/imgs/airplane-svgrepo-com.svg'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-center py-14'>
      <img src={img} alt="airplane-logo" className='w-[75px]'/>
    </header>
  );
};

export default Header;

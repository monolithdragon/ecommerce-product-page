import CloseIcon from 'assets/icons/icon-close.svg';
import MenuIcon from 'assets/icons/icon-menu.svg';
import Logo from 'assets/icons/logo.svg';
import Avatar from 'components/avatar';
import Cart from 'components/cart';
import IconButton from 'components/elements/icon_button';
import Menu from 'components/elements/menu';
import SvgIcon from 'components/elements/svg_icon';
import useMediaQuery from 'hooks/useMediaQuery';
import useToggle from 'hooks/useToggle';
import { useEffect } from 'react';
import { menuItems } from 'shared/data/menuItems';

function Navbar() {
  const [isToggle, onToggle, setIsToggle] = useToggle(false);
  const isMediaMatches = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    if (!isMediaMatches) {
      setIsToggle(false);
    }
  }, [isMediaMatches]);

  return (
    <div className="flex flex-1 items-center">
      <div className="flex flex-1 place-items-center space-x-2 lg:flex-none lg:space-x-0">
        <IconButton
          className="z-50 p-2 hover:text-skin-neutral-400 focus:text-skin-neutral-400 lg:hidden"
          onClick={onToggle}
        >
          <SvgIcon Icon={isToggle ? CloseIcon : MenuIcon} />
        </IconButton>
        <span className="px-2 pb-3 pt-2 lg:px-0">
          <Logo />
        </span>
      </div>

      {isMediaMatches && (
        <div
          className={`${isToggle ? 'absolute inset-0 z-10 bg-black bg-opacity-75' : 'hidden'}`}
          onClick={() => setIsToggle(false)}
        ></div>
      )}
      <nav
        className={` ${
          isToggle
            ? 'absolute bottom-0 left-0 top-0 z-20 w-60 bg-white px-6 py-20'
            : 'hidden flex-1 px-14 lg:z-0 lg:flex xl:px-20'
        }`}
      >
        <Menu menuItems={menuItems} />
      </nav>

      <div className="flex place-items-center space-x-4 lg:space-x-10">
        <Cart />
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;

import CloseIcon from 'assets/icons/icon-close.svg';
import MenuIcon from 'assets/icons/icon-menu.svg';
import Logo from 'assets/icons/logo.svg';
import Avatar from 'components/avatar';
import Cart from 'components/cart';
import IconButton from 'components/elements/icon_button';
import Menu from 'components/elements/menu';
import SvgIcon from 'components/elements/svg_icon';
import { menuItems } from 'shared/data/menuItems';

function Navbar() {
  return (
    <div className="flex flex-1 items-center">
      <div className="flex flex-1 place-items-center space-x-2 lg:flex-none lg:space-x-0">
        <IconButton className="p-2 hover:text-skin-neutral-400 focus:text-skin-neutral-400 lg:hidden">
          <SvgIcon Icon={MenuIcon} />
        </IconButton>
        <span className="px-2 pb-3 pt-2 lg:px-0">
          <Logo />
        </span>
      </div>
      <nav className="hidden flex-1 px-20 lg:flex">
        <Menu menuItems={menuItems} />
      </nav>
      <div className="flex place-items-center space-x-4 md:space-x-10">
        <Cart />
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;

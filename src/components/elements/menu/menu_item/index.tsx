import { Link, useLocation } from 'react-router-dom';
import { IMenuItem } from 'shared/interfaces/IMenuItem';

type MenuItemProps = {
  menuItem: IMenuItem;
};

function MenuItem({ menuItem }: MenuItemProps) {
  const location = useLocation();
  const isCurrentPathName = location.hash === menuItem.path;

  return (
    <li
      className={`cursor-pointer border-b-transparent focus-within:text-skin-neutral-400 hover:text-skin-neutral-400 lg:border-b-[0.3125rem] lg:py-[42px] lg:focus-within:border-b-skin-primary lg:hover:border-b-skin-primary ${
        isCurrentPathName ? 'text-skin-neutral-400 lg:border-b-skin-primary' : ''
      }`}
    >
      <Link to={menuItem.path} className="outline-none">
        {menuItem.title}
      </Link>
    </li>
  );
}

export default MenuItem;

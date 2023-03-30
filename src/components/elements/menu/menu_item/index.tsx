import { useLocation } from 'react-router-dom';
import { IMenuItem } from 'shared/interfaces/IMenuItem';

type MenuItemProps = {
  menuItem: IMenuItem;
};

function MenuItem({ menuItem }: MenuItemProps) {
  const location = useLocation();
  const isCurrentPathName = location.pathname === menuItem.path;

  return (
    <li
      className={`cursor-pointer border-b-[0.3125rem] border-b-transparent py-8 focus-within:border-b-skin-primary focus-within:text-skin-neutral-400 hover:border-b-skin-primary hover:text-skin-neutral-400 ${
        isCurrentPathName ? 'border-b-skin-primary text-skin-neutral-400' : ''
      }`}
    >
      <a href="#" className="outline-none">
        {menuItem.title}
      </a>
    </li>
  );
}

export default MenuItem;

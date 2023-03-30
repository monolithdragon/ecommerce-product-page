import { IMenuItem } from 'shared/interfaces/IMenuItem';

import MenuItem from './menu_item';

type MenuProps = {
  menuItems: IMenuItem[];
};

function Menu({ menuItems }: MenuProps) {
  return (
    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-10">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.title} menuItem={menuItem} />
      ))}
    </ul>
  );
}

export default Menu;

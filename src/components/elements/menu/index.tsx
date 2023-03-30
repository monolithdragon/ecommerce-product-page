import { IMenuItem } from 'shared/interfaces/IMenuItem';

import MenuItem from './menu_item';

type MenuProps = {
  menuItems: IMenuItem[];
};

function Menu({ menuItems }: MenuProps) {
  return (
    <ul className="flex flex-col gap-10 lg:flex-row">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.title} menuItem={menuItem} />
      ))}
    </ul>
  );
}

export default Menu;

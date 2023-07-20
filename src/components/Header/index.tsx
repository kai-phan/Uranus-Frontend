import { Button, Dropdown } from 'src/components/common';

import { ITEM_HEADER } from './constants';

export default function Header() {
  return (
    <div className="p-9 container m-auto">
      <div className="flex justify-between">
        <p className="text-text-color-1 text-4xl font-bold">Move</p>

        <div className="hidden desktop:flex gap-5 items-center">
          {ITEM_HEADER.map(({ title, items }) => (
            <Dropdown title={title} items={items} />
          ))}

          <div>
            <Button variant="primary">Get start</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

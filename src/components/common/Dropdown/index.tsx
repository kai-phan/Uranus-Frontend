import { useState } from 'react';
import cls from 'classnames';

import { ChevronDown3 } from 'src/components/icons';

type Props = {
  title: string;
  items: string[];
  link?: string;
};

export default function Dropdown({ title, items, link = '#' }: Props) {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="relative min-w-[90px] h-fit">
      <button
        type="button"
        onClick={() => setIsShow(!isShow)}
        className="text-text-color-2 flex items-center p-1"
      >
        {title}
        <ChevronDown3 classNames="[&_path]:stroke-text-color-2 ml-2" />
      </button>

      <div
        className={cls(
          'absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36',
          { hidden: isShow },
        )}
      >
        <ul className="py-2 text-sm text-text-color-2">
          {items.map((item, index) => (
            <li key={index}>
              <a href={link} className="block px-4 py-2 hover:bg-black/10">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

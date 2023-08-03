import React, { useState } from 'react';

export type Props = {
  value?: any;
  onChange?: (value: any) => void;
  defaultValue?: any;
};

export default React.forwardRef<any, Props>(function ListBox(props, ref) {
  const [selected, setSelected] = useState<number>(props.value);

  return (
    <div>
      <ul>
        {[1, 2, 3].map((e) => {
          return (
            <li
              key={e}
              onClick={() => setSelected(e)}
              className={selected === e ? 'bg-primary-1 text-white' : ''}
            >
              Option {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

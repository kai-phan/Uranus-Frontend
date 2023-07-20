import React from 'react';
import cls from 'classnames';

export type Props = {
  rows?: number;
  cols?: number;
  label?: string;
  classNames?: string;
  placeholder?: string;
};

const BASE_INPUT_CLASS =
  'border-2 border-[#F5F6FA] rounded-md flex items-center ' +
  'text-xl text-text-color-2 ' +
  'focus-within:ring-1 focus-within:ring-primary-1 focus-within:ring-offset-1 ' +
  '[&_path]:focus-within:fill-primary-1';

export default React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(function Textarea(props, ref) {
  const { label, placeholder, rows = 1, cols = 20, ...rest } = props;

  return (
    <div className={cls('inline-flex items-start flex-col')}>
      <label className="text-text-color-2">{label}</label>

      <div className={cls(BASE_INPUT_CLASS)}>
        <textarea
          ref={ref}
          className={cls('outline-none p-3 placeholder-text-[#ddd]')}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          {...rest}
        />
      </div>
    </div>
  );
});

import React from 'react';
import cls from 'classnames';

export type Props = {
  label?: string;
  icon?: JSX.Element;
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
>(function Input(props, ref) {
  const { label, icon, placeholder, ...rest } = props;

  return (
    <div className={cls('inline-flex items-start flex-col')}>
      <label className="text-text-color-2">{label}</label>

      <div className={cls(BASE_INPUT_CLASS)}>
        {icon && (
          <span className="self-stretch flex items-center pl-3">{icon}</span>
        )}

        <input
          ref={ref}
          {...rest}
          className={cls('outline-none p-3 placeholder-text-[#ddd]')}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
});

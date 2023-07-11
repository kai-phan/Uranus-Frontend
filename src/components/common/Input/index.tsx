import React from 'react';
import cls from 'classnames';

export type Props = {
  className?: string;
  label?: string;
};

const icon = (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.5C0 8.32436 1.12276 5.61379 3.36827 3.36827C5.61379 1.12276 8.32436 0 11.5 0C14.6756 0 17.3862 1.12276 19.6317 3.36827C21.8772 5.61379 23 8.32436 23 11.5C23 14.6756 21.8772 17.3862 19.6317 19.6317C17.3862 21.8772 14.6756 23 11.5 23C8.32436 23 5.61379 21.8772 3.36827 19.6317C1.12276 17.3862 0 14.6756 0 11.5Z"
      fill="#AAB0B7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.19298 13.9921C4.95057 13.6457 4.91474 13.1951 5.09935 12.8147C5.28395 12.4343 5.66005 12.1836 6.08223 12.1596C6.5044 12.1356 6.90647 12.3421 7.13298 12.6991C8.48198 14.7221 10.073 15.6771 11.991 15.6771C13.909 15.6771 15.5 14.7221 16.849 12.6991C17.0755 12.3421 17.4776 12.1356 17.8997 12.1596C18.3219 12.1836 18.698 12.4343 18.8826 12.8147C19.0672 13.1951 19.0314 13.6457 18.789 13.9921C17.029 16.6311 14.736 18.0081 11.989 18.0081C9.24198 18.0081 6.94798 16.6311 5.19298 13.9921Z"
      fill="#AAB0B7"
    />
  </svg>
);

const BASE_INPUT_CLASS =
  'border-2 border-[#F5F6FA] rounded-md flex items-center\n' +
  'text-xl text-text-color-2\n' +
  'focus-within:ring-1 focus-within:ring-primary-1 focus-within:ring-offset-1\n' +
  '[&_path]:focus-within:fill-primary-1\n';

export default React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(function Input(props, ref) {
  const { label, ...rest } = props;

  return (
    <div className={cls('inline-flex items-start flex-col')}>
      <label className="text-text-color-2 mb-4">{label}</label>
      <div className={cls(BASE_INPUT_CLASS)}>
        <span className="self-stretch flex items-center pl-3">{icon}</span>
        <input
          ref={ref}
          {...rest}
          className={cls('outline-none py-3 px-3 placeholder-text-[#ddd]')}
        />
      </div>
    </div>
  );
});

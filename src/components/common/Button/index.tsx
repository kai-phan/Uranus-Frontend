import React from 'react';
import cls from 'classnames';

export type BaseProps = {
  variant?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

export type Props = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  variant = 'primary',
  size = 'small',
  children,
  ...rest
}) => {
  const buttonSize = {
    small: 'px-14 py-3',
    medium: 'px-16 py-3.5',
  };

  const buttonVariant = {
    primary: 'bg-primary-1 text-white',
    secondary: 'bg-additional-1 text-primary-1',
    default: 'bg-white border border-primary-1 text-primary-1',
  };

  const baseButtonCls =
    'text-lg font-semibold rounded-md inline-flex items-center justify-center px-14 py-3';

  return (
    <React.Fragment>
      <button
        {...rest}
        className={cls(baseButtonCls, buttonVariant[variant], buttonSize[size])}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;

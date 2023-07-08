import React from 'react';
import clx from 'classnames';

type BaseProps = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  icon?: boolean;
  size?: 'small' | 'medium' | 'lg';
  variant?: 'primary' | 'secondary' | 'default';
};

type Props = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  icon = false,
  startIcon = null,
  size = 'small',
  variant = 'default',
  ...rest
}) => {
  const buttonSize = {
    small: 'px-14 py-3',
    medium: 'px-16 py-4',
  };

  const buttonVariant = {
    primary: 'bg-primary-1 text-white',
    secondary: 'bg-additional-1 text-primary-1',
    default: 'bg-white border-solid border border-primary-1 text-primary-1',
  };

  const baseButtonCls =
    'text-lg font-semibold rounded-md inline-flex items-center justify-center gap-2';

  return (
    <button
      {...rest}
      className={clx(
        buttonSize[size],
        buttonVariant[variant],
        {
          'rounded-t-full rounded-b-full px-3 py-3 fill-primary-1': icon,
          'fill-primary-1': startIcon,
        },
        baseButtonCls,
      )}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;

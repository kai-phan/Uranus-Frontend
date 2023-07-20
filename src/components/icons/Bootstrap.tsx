export default function Bootstrap({
  classNames,
  width = 24,
  height = 18,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 17"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.645 17.0005C11.615 17.0005 14 15.1745 14 12.1825C14 9.96749 12.324 8.33049 9.81 8.09449V7.89449C11.636 7.62348 13.008 6.08735 13.072 4.24249C13.072 1.62649 10.97 0.000488281 7.477 0.000488281H0V17.0005H7.645ZM2.888 2.23853H6.807C8.947 2.23853 10.198 3.15753 10.198 4.72453C10.198 6.33853 8.87 7.19853 6.318 7.19853H2.888V2.23853ZM2.888 14.7614V9.28345H6.9C9.62 9.28345 11.051 10.2144 11.051 11.9934C11.051 13.7934 9.672 14.7624 7.068 14.7624L2.888 14.7614Z"
        fill="#2C3038"
      />
    </svg>
  );
}

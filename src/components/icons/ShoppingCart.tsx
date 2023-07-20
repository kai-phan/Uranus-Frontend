export default function ShoppingCart({
  classNames,
  height = 21,
  width = 21,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 20C9.05228 20 9.5 19.5523 9.5 19C9.5 18.4477 9.05228 18 8.5 18C7.94771 18 7.5 18.4477 7.5 19C7.5 19.5523 7.94771 20 8.5 20V20Z"
        stroke="#2C3038"
      />
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 20C17.0523 20 17.5 19.5523 17.5 19C17.5 18.4477 17.0523 18 16.5 18C15.9477 18 15.5 18.4477 15.5 19C15.5 19.5523 15.9477 20 16.5 20V20Z"
        stroke="#2C3038"
      />
      <path
        d="M1 1H4L6.7 13.4C6.89295 14.3462 7.73448 15.0195 8.7 15H16.4C17.3655 15.0195 18.2071 14.3462 18.4 13.4L20 5H5.6"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

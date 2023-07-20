export default function MapMarket2({
  classNames,
  height = 22,
  width = 18,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 22"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12V12Z"
        stroke="#2C3038"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 20.7C14.3 16 17 12 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 12 3.7 15.9 9 20.7V20.7Z"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

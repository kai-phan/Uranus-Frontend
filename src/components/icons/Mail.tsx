export default function Mail({
  classNames,
  height = 22,
  width = 18,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 18"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1H19C20.1032 1.0033 20.9967 1.8968 21 3V15C20.9967 16.1032 20.1032 16.9967 19 17H3C1.8968 16.9967 1.00329 16.1032 1 15V3C1.00332 1.89675 1.89684 1.00327 3.00005 1L3 1Z"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3L11 10L1 3"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

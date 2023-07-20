export default function MoreVertical({
  classNames,
  height = 18,
  width = 4,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4 18"
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
        d="M2 10C2.55228 10 3 9.55229 3 9C3 8.44771 2.55228 8 2 8C1.44771 8 1 8.44772 1 9C1 9.55228 1.44771 10 2 10V10Z"
        stroke="#2C3038"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44771 1 1 1.44772 1 2C1 2.55228 1.44771 3 2 3V3Z"
        stroke="#2C3038"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44771 15 1 15.4477 1 16C1 16.5523 1.44771 17 2 17V17Z"
        stroke="#2C3038"
      />
    </svg>
  );
}

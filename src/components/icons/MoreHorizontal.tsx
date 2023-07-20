export default function MoreHorizontal({
  classNames,
  height = 4,
  width = 18,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 4"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M9 3C9.55228 3 10 2.55229 10 2C10 1.44771 9.55228 1 9 1C8.44771 1 8 1.44772 8 2C8 2.55228 8.44771 3 9 3V3Z"
        stroke="#2C3038"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3C16.5523 3 17 2.55229 17 2C17 1.44771 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3V3Z"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 3C2.55228 3 3 2.55229 3 2C3 1.44771 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3V3Z"
        stroke="#2C3038"
      />
    </svg>
  );
}

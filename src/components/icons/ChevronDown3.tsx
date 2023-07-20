export default function ChevronDown3({
  classNames,
  width = 14,
  height = 8,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

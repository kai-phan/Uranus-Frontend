export default function ChevronRight3({
  classNames,
  width = 8,
  height = 14,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 14"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

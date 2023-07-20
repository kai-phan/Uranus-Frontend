export default function ChevronLeft({
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
        d="M7 13L1 7L7 1"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

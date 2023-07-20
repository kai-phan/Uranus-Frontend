export default function Check2({
  classNames,
  width = 18,
  height = 13,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 13"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M17 1L6 12L1 7"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

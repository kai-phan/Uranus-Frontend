export default function Minus({
  classNames,
  height = 2,
  width = 16,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 2"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M1 1H15"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

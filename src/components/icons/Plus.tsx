export default function Smile({
  classNames,
  height = 16,
  width = 16,
  color = 'currentColor',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M8 1V15"
        stroke="#2C3038"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 8H15"
        stroke="#2C3038"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

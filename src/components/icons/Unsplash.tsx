export default function Unsplash({
  classNames,
  width = 24,
  height = 24,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#2C3038"
        d="M7.5 6.75049V0.000488281H16.5V6.75049H7.5ZM16.5 10.5005H24V24.0005H0V10.5005H7.5V17.2505H16.5V10.5005Z"
      />
    </svg>
  );
}

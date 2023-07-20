export default function Home({
  classNames,
  height = 22,
  width = 20,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 22"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8L10 1L19 8V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V8Z"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 21V11H13V21"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Facebook({
  classNames,
  width = 12,
  height = 24,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 24"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.789 23.9942V13.0492H11.327L11.857 8.78418H7.789V6.06018C7.789 4.82518 8.119 3.98318 9.825 3.98318H12V0.168179C10.9474 0.0524673 9.88903 -0.00362211 8.83006 0.000181142C5.694 0.000179235 3.547 1.98818 3.547 5.63818V8.78418H0V13.0492H3.547V23.9942H7.789Z"
        fill="#2C3038"
      />
    </svg>
  );
}

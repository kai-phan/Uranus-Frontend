export default function Smile({
  classNames = '',
  width = 8,
  height = 6,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 6"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.15103 0.223101C3.24376 0.0840225 3.39987 0.000488281 3.56703 0.000488281C3.73419 0.000488281 3.89029 0.0840225 3.98302 0.223101L7.04902 4.8231C7.15111 4.97651 7.16054 5.17364 7.07357 5.3361C6.98659 5.49856 6.8173 5.60001 6.63302 5.6001H0.501025C0.316749 5.60001 0.147462 5.49856 0.0604839 5.3361C-0.026495 5.17364 -0.0170641 4.97651 0.0850248 4.8231L3.15103 0.223101Z"
        fill="#2C3038"
      />
    </svg>
  );
}

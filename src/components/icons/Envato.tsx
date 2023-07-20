export default function Envato({
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
      <mask
        id="mask0_0_380"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="25"
      >
        <rect y="0.000488281" width="24" height="24" fill="white" />
      </mask>
      <g mask="url(#mask0_0_380)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4 0.200467C18.66 -0.170533 16.679 -0.0465329 14.205 0.820467C10 3.78547 6.53102 7.99247 6.16102 14.9265C6.16102 15.1675 5.66802 14.9265 5.54402 14.8005C4.23441 12.3643 4.00941 9.48974 4.92402 6.87947C5.17102 6.63247 4.55402 6.26247 4.55402 6.38547C3.87069 6.99138 3.28571 7.69984 2.82002 8.48546C0.00830543 13.5129 1.77653 19.8671 6.78102 22.7195C11.8454 25.4645 18.1753 23.647 21.012 18.6335C24.354 12.8195 21.381 1.31147 19.4 0.200467Z"
          fill="#2C3038"
        />
      </g>
    </svg>
  );
}

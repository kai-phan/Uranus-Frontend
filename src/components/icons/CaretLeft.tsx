export default function CaretLeft({
  classNames,
  width = 6,
  height = 8,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 8"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.222979 3.98303C0.0839005 3.8903 0.000366211 3.73419 0.000366211 3.56703C0.000366211 3.39987 0.0839005 3.24377 0.222979 3.15103L4.82298 0.0850334C4.97636 -0.0165033 5.1731 -0.0256262 5.33522 0.0612812C5.49733 0.148189 5.59864 0.317091 5.59898 0.501033V6.63203C5.59889 6.8163 5.49745 6.98559 5.33499 7.07257C5.17254 7.15955 4.97541 7.15013 4.82199 7.04804L0.222979 3.98303Z"
        fill="#2C3038"
      />
    </svg>
  );
}

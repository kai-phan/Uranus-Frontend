export default function CaretDown({
  classNames,
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
        d="M3.98297 5.376C3.89023 5.51508 3.73413 5.59861 3.56697 5.59861C3.39981 5.59861 3.24371 5.51508 3.15097 5.376L0.0849724 0.776001C-0.0165644 0.622622 -0.0256872 0.425879 0.0612202 0.263762C0.148128 0.101646 0.31703 0.000338554 0.500972 0H6.63197C6.81625 9.53674e-05 6.98554 0.101542 7.07251 0.263999C7.15949 0.426456 7.15006 0.623588 7.04797 0.777L3.98297 5.376Z"
        fill="#2C3038"
      />
    </svg>
  );
}

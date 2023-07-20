export default function CaretRight2({
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
        d="M5.376 3.15072C5.51508 3.24346 5.59861 3.39956 5.59861 3.56672C5.59861 3.73388 5.51508 3.88998 5.376 3.98272L0.776001 7.04872C0.622622 7.15026 0.425879 7.15938 0.263762 7.07247C0.101646 6.98556 0.000338554 6.81666 0 6.63272V0.50072C8.96454e-05 0.316458 0.101532 0.147168 0.263988 0.0601845C0.426442 -0.0267982 0.623573 -0.0173731 0.776989 0.084712L5.376 3.15072Z"
        fill="#2C3038"
      />
    </svg>
  );
}

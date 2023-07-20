export default function MediaPlay({
  classNames,
  height = 16,
  width = 14,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.24 7.20482C13.3957 7.29387 13.4917 7.45947 13.4917 7.63882C13.4917 7.81816 13.3957 7.98376 13.24 8.07281L0.748001 15.2118C0.593118 15.3003 0.402833 15.2995 0.24864 15.2099C0.0944476 15.1202 -0.0002985 14.9552 4.76837e-07 14.7768V0.500815C6.19888e-05 0.322612 0.0949526 0.157918 0.249082 0.0684953C0.403212 -0.0209279 0.593285 -0.0215659 0.748011 0.0668211L13.24 7.20482Z"
        fill="#2C3038"
      />
    </svg>
  );
}

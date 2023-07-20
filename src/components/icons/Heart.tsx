export default function Heart({
  classNames,
  width = 23,
  height = 21,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 21"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.291 2.61183C19.2595 1.57982 17.8601 1 16.401 1C14.9419 1 13.5425 1.57982 12.511 2.61182L11.451 3.67183L10.391 2.61183C9.00107 1.2219 6.97515 0.679184 5.07654 1.18815C3.17793 1.69712 1.69513 3.18042 1.18682 5.07921C0.678512 6.978 1.22193 9.00373 2.61233 10.3932L3.67099 11.4518L11.451 19.2318L19.231 11.4518L20.291 10.3918C21.323 9.3603 21.9028 7.96096 21.9028 6.50182C21.9028 5.04269 21.323 3.64335 20.291 2.61182V2.61183Z"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Producthunt({
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
        d="M13.6 8.40039H10.2V12.0004H13.6C14.5941 12.0004 15.4 11.1945 15.4 10.2004C15.4 9.20628 14.5941 8.40039 13.6 8.40039ZM12 0.000488281C5.37258 0.000488281 0 5.37307 0 12.0005C9.53674e-07 18.6279 5.37258 24.0005 12 24.0005C18.6274 24.0005 24 18.6279 24 12.0005C24 5.37307 18.6274 0.000489235 12 0.000488281H12ZM13.6 14.4005H10.2V18.0005H7.79999V6.00049H13.6C15.9196 6.00049 17.8 7.88089 17.8 10.2005C17.8 12.5201 15.9196 14.4005 13.6 14.4005Z"
        fill="#2C3038"
      />
    </svg>
  );
}

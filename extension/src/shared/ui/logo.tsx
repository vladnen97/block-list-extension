export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
      className={className}
    >
      <defs>
        <mask id="ipTProtect0">
          <g
            fill="currentColor"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path
              fill="#555"
              d="M6 9.256L24.009 4L42 9.256v10.778A26.316 26.316 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"
            />
            <path strokeLinecap="round" d="m15 23l7 7l12-12" />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTProtect0)" />
    </svg>
  )
}

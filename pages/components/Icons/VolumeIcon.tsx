import * as React from "react"
import { SVGProps } from "react"
const VolumeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1 1"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M.222.488a.87.87 0 0 0 .175.026.122.122 0 0 1 .026-.038.855.855 0 0 1-.201-.028v.04Z"
      style={{
        fillRule: "nonzero",
      }}
    />
    <path
      d="M.167.778v-.55C.176.206.286.169.472.169s.297.037.306.055v.009C.755.255.651.29.469.29A.937.937 0 0 1 .222.262v.04A.98.98 0 0 0 .469.33.75.75 0 0 0 .778.279V.42a.138.138 0 0 1-.05.025h.105V.226C.833.137.606.114.472.114.338.114.111.138.111.226v.552c0 .073.15.102.278.111V.833C.254.824.174.795.167.778Z"
      style={{
        fillRule: "nonzero",
      }}
    />
    <path
      d="M.222.674a.864.864 0 0 0 .167.025V.66A.735.735 0 0 1 .222.634v.04ZM.889.5H.5a.057.057 0 0 0-.056.056v.333c0 .03.026.055.056.055h.389c.03 0 .055-.025.055-.055V.556A.056.056 0 0 0 .889.5ZM.5.889V.556h.389v.333H.5Z"
      style={{
        fill: "#007cfc",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M.583.603a.02.02 0 0 0-.019.019V.83c0 .011.009.02.019.02a.02.02 0 0 0 .02-.02V.622c0-.01-.009-.019-.02-.019Zm.111.003c-.01 0-.019.009-.019.02v.207c0 .011.009.02.019.02a.02.02 0 0 0 .02-.02V.626a.02.02 0 0 0-.02-.02ZM.806.603c-.011 0-.02.009-.02.019V.83c0 .011.009.02.02.02.01 0 .019-.009.019-.02V.622A.02.02 0 0 0 .806.603Z"
      style={{
        fill: "#007cfc",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M0 0h1v1H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
)
export default VolumeIcon

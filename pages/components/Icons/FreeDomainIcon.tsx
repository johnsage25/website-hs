import * as React from "react"
import { SVGProps } from "react"
const FreeDomainIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeMiterlimit: 2,
        }}
        viewBox="0 0 384 294"
        width="1em"
        height="1em"
        {...props}
    >
        <clipPath id="a">
            <path d="M0 0h384v294H0z" />
        </clipPath>
        <g clipPath="url(#a)">
            <path
                d="M295.969 221.086v-91.328h-1.5l-21.094 40.035-21.094-40.035h-1.5v91.328M192 209.539c-12.477 0-22.594-10.117-22.594-22.594v-34.593c0-12.481 10.117-22.594 22.594-22.594s22.594 10.113 22.594 22.594v34.593c0 6.884-3.08 13.05-7.937 17.194a22.504 22.504 0 0 1-14.657 5.4Zm-58.781-22.969c0 12.477-10.117 22.594-22.594 22.594s-22.594-10.117-22.594-22.594v-34.593c0-2.742.488-5.37 1.383-7.802a22.664 22.664 0 0 1 8.725-11.032 22.49 22.49 0 0 1 12.486-3.76c12.477 0 22.594 10.113 22.594 22.594m-88.031 57.187h22.5M372.75 56.727l-225.973-.141c-12.461-.008-22.558-10.113-22.558-22.574 0-12.469-10.106-22.574-22.574-22.574H79.012c-12.469 0-22.574 10.105-22.574 22.574v.011c0 12.457-10.09 22.559-22.547 22.575l-22.641.027"
                style={{
                    fill: "none",
                    stroke: "url(#b)",
                    strokeWidth: "22.5px",
                }}
            />
            <path
                d="m11.25 11.438 361.5.001v271.125H11.25V11.438Z"
                style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "22.5px",
                }}
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={0}
                x2={1}
                y1={0}
                y2={0}
                gradientTransform="matrix(361.5 0 0 209.648 11.25 116.262)"
                gradientUnits="userSpaceOnUse"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#007bfc",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#007bfc",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
        </defs>
    </svg>
)
export default FreeDomainIcon

import * as React from "react"
import { SVGProps } from "react"

const AntMediaServerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M31.458 26.319c2.223-.208 2.292-1.736 2.292-1.944v-7.569c-.764.763-1.806 1.25-2.292 1.388v8.125ZM30.694 33.611c0-.417-.277-.625-.763-.625-.487 0-.834.417-.903.903v.208h.486c.972-.069 1.18-.208 1.18-.486ZM16.25 24.375s0 .764.625 1.25c.417.417.972.625 1.736.625v-8.056c-.555-.208-1.528-.625-2.292-1.388v7.569h-.069ZM23.333 18.958c-.069-.069-.139-.069-.208-.069v4.93c0 .139 0 .209.069.209 0 0 .07 0 .139-.07l4.098-2.361c.138-.069.138-.139.138-.139l-.138-.139-4.098-2.361ZM33.819 32.986c-.486 0-.902.486-.833 1.181 0 .833.417 1.389 1.042 1.389.555 0 .833-.417.833-1.181-.069-1.25-.694-1.389-1.042-1.389ZM39.653 35c0 .347.278.556.694.556.417 0 .695-.209.695-.625v-.417h-.417c-.694-.07-.972.069-.972.486ZM10.139 32.014l-.07.069c-.277.556-.625 1.389-.763 2.014v.07h1.666v-.07c-.208-.694-.555-1.597-.764-2.014l-.069-.069Z"
      style={{
        fill: "#df0818",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M25 0C11.181 0 0 11.181 0 25s11.181 25 25 25 25-11.181 25-25S38.819 0 25 0ZM11.944 36.181c-.416 0-.625-.209-.625-.417 0-.278-.069-.556-.138-.833v-.07H9.097v.07c-.069.416-.208.833-.278 1.25h-.347c-.278 0-.416-.139-.416-.417 0-.695.902-3.611 1.666-4.514h.417c.347 0 .625.139.764.417.416.764 1.18 2.916 1.389 4.514h-.348Zm4.306 0h-.278c-.416 0-.694-.278-.694-.625v-1.528c0-.834-.486-1.042-.834-1.042-.486 0-.763.347-.763.903v2.222h-.278a.623.623 0 0 1-.625-.625V33.75c0-.833.555-1.667 1.736-1.667.833 0 1.667.556 1.667 1.667v2.431h.069Zm3.056-3.542c0 .139-.139.417-.556.417h-.833v1.597c0 .486.208.764.694.764.278 0 .556-.07.695-.139v.278c0 .416-.278.625-.834.625-.972 0-1.458-.487-1.458-1.389v-2.361c0-.348.069-.487.278-.764.139-.139.277-.278.416-.278h.209v.903h1.389v.347Zm.277-5.833a.475.475 0 0 1-.486.486h-.208c-1.181 0-2.153-.348-2.778-.973-.903-.833-.903-1.944-.903-2.013v-9.375c0-2.431 5.07-3.612 9.792-3.612 4.722 0 9.792 1.112 9.792 3.612v9.444c0 .764-.348 1.458-.903 1.944-.695.695-1.736.973-3.056.973a.475.475 0 0 1-.486-.486v-8.959c0-.208.139-.486.417-.486 0 0 2.5-.694 2.986-2.5-.069-1.319-4.028-2.5-8.75-2.5s-8.681 1.111-8.75 2.5c.417 1.806 2.917 2.431 2.986 2.5.208.07.347.278.347.486v8.959Zm9.653-12.778a6.77 6.77 0 0 1 1.111.347l-2.222 1.597a4.784 4.784 0 0 0-.903-.347l2.014-1.597Zm-2.847 1.25c-.278-.07-.625-.139-.903-.209l1.667-1.388c.347.069.764.138 1.18.208l-1.944 1.389Zm4.653-.695c.347.139.764.278 1.111.486l-2.778 1.598a6.137 6.137 0 0 0-.694-.417l2.361-1.667Zm-13.334.278s3.681-1.736 8.611-1.319l-1.597 1.319c-3.68-.625-7.014 0-7.014 0Zm9.514 21.32c-.416 0-.625-.209-.625-.625 0-.625-.139-2.5-.208-2.987v-.138l-.139.277c-.069.139-.139.278-.208.486l-.695 2.153c-.139.347-.278.695-.416.834h-.278c-.347 0-.625-.278-.764-.764l-.695-2.084c-.069-.277-.208-.555-.277-.764v-.138.138c-.139.764-.209 2.709-.209 3.612h-.277c-.348 0-.556-.209-.556-.625 0-1.112.208-3.334.417-4.306h.208c.694 0 1.181.278 1.319.833l.695 1.945c.139.278.208.625.278.972l.069.208.07-.208c0-.139.069-.278.138-.417l.625-1.875c.209-.764.556-1.25.764-1.458h-.069c.555 0 .903.347.972.972.07.764.208 2.847.208 3.959h-.347Zm-3.333-11.32c-.278.139-.486.208-.695.208-.208 0-.347-.069-.486-.138-.347-.209-.555-.625-.555-1.112v-4.722c0-.486.208-.903.555-1.111.348-.208.764-.208 1.25.07l4.098 2.361c.416.277.694.625.694 1.041 0 .417-.278.764-.694 1.042l-4.167 2.361Zm5.139 9.792c.069.486.555.833 1.18.833.348 0 .834-.069 1.181-.347v.278c0 .555-.486.833-1.389.833s-1.875-.694-1.875-1.944.764-2.084 1.875-2.084c.764 0 1.528.486 1.528 1.459 0 .694-.486.902-1.806.902l-.694.07Zm6.666-.278c0 1.25-.625 1.875-1.875 1.875-.972 0-1.805-.903-1.805-1.944 0-1.32.625-2.084 1.736-2.084.347 0 .764.278.972.625l.07.209v-2.014h.277c.487 0 .625.347.625.625v2.708Zm1.459-3.472c.278 0 .555.208.555.555a.548.548 0 0 1-.555.556.548.548 0 0 1-.556-.556c.07-.347.278-.555.556-.555Zm1.25 4.791c0 .417-.139.556-.556.556-.764 0-1.111-.417-1.111-1.181v-2.638h.208c.417 0 .625.208.625.694V35c0 .417.209.556.625.556h.139l.07.138Zm2.083.556h-.208c-.903 0-1.528-.486-1.528-1.181 0-.763.694-1.18 1.944-1.18h.417v-.07c0-.625-.347-.763-.903-.763-.625 0-1.041.208-1.25.416v-.208c0-.486.417-.903 1.389-.903.764 0 1.597.278 1.597 1.736V35c-.069.694-.625 1.25-1.458 1.25Z"
      style={{
        fill: "#df0818",
        fillRule: "nonzero",
      }}
    />
  </svg>
)

export default AntMediaServerIcon

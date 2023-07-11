import * as React from "react"
import { SVGProps } from "react"

const CloudronIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.971 46.675h-1.647c-.028-.033-.054-.096-.081-.097-.736-.005-1.471-.005-2.207 0-.027 0-.053.064-.081.097h-1.853c-.028-.033-.054-.096-.082-.097-.621-.019-1.24.012-1.862-.093-.541-.091-1.099.026-1.656-.098-.431-.095-.896.022-1.344-.107-.264-.076-.55.011-.835-.095-.251-.094-.565.048-.826-.117-.467.037-.907-.105-1.353-.21-.587-.134-1.132-.352-1.569-.798-.418-.426-.787-.888-1.169-1.343-.382-.455-.706-.927-1.039-1.403-.575-.823-1.12-1.665-1.675-2.502-.307-.464-.619-.926-.899-1.405-.263-.448-.52-.901-.784-1.347-.339-.57-.672-1.143-1.014-1.713-.373-.623-.753-1.248-1.069-1.892-.891-1.812-1.905-3.567-2.672-5.435-.284-.694-.613-1.371-.754-2.119-.02-.105-.131-.195-.2-.292v-1.215c.03-.012.081-.019.086-.037.131-.517.335-1.011.506-1.515.167-.492.419-.944.609-1.422.244-.613.555-1.192.825-1.79.401-.87.846-1.72 1.333-2.546.347-.598.607-1.246.983-1.823.226-.348.374-.731.615-1.071.242-.34.373-.734.615-1.061.254-.35.411-.751.663-1.102.168-.231.308-.481.461-.723.417-.657.827-1.318 1.255-1.968.414-.627.838-1.247 1.274-1.86.29-.409.643-.779.893-1.206.169-.289.506-.434.596-.768.472-.459.907-.962 1.547-1.218.434-.174.899-.227 1.349-.334.24-.05.482-.086.727-.11.26-.032.519-.04.782-.092.336-.067.689-.036 1.038-.102.404-.077.825-.034 1.244-.098.593-.093 1.205.018 1.81-.105.345-.071.718-.013 1.078-.013h1.081c.378 0 .757-.026 1.132.008.359.032.689-.105 1.039-.113.47-.011.922.142 1.398.114.582-.036 1.167-.019 1.75-.006.582.012 1.173-.02 1.759.082.574.099 1.174-.031 1.76.105.356.084.743-.056 1.106.067.348.118.719-.012 1.077.132.232.094.512.007.781.096.236.077.515.064.777.108a7.19 7.19 0 0 1 1.474.42c.184.066.351.174.486.314.326.357.699.668.987 1.065.373.515.829.972 1.185 1.496.485.713.994 1.416 1.448 2.144.459.738.928 1.473 1.382 2.214.546.891 1.043 1.811 1.612 2.691.443.688.829 1.414 1.202 2.142a279.64 279.64 0 0 1 2.293 4.583c.378.773.686 1.574.994 2.379.153.4.209.821.348 1.224.132.38-.11.772-.091 1.168-.267.553-.389 1.154-.623 1.72-.144.346-.392.658-.488 1.014-.096.355-.283.667-.445.984-.162.318-.278.664-.445.984-.327.626-.652 1.254-.986 1.876-.267.499-.553.989-.821 1.488a42.163 42.163 0 0 1-1.234 2.18c-.274.443-.512.906-.78 1.352-.352.584-.715 1.161-1.078 1.738-.304.484-.602.973-.924 1.445a64.42 64.42 0 0 1-1.73 2.439c-.492.652-.983 1.3-1.542 1.898-.27.291-.581.534-.951.676a6.33 6.33 0 0 1-1.154.32c-.245.043-.505.038-.725.111-.201.067-.388.058-.581.083-.21.027-.417.073-.627.098-.278.032-.554-.023-.838.087-.208.08-.475 0-.714.019-.239.02-.488.102-.73.092-1.019-.043-2.026.181-3.046.112-.045-.003-.091.063-.136.096Zm-4.204-19.242v-4.862h5.724c.135 0 .283.022.402-.023.715-.274 1.414-.577 1.819-1.278.247-.426.48-.866.48-1.373.005-1.805 0-3.61 0-5.415 0-.084.024-.178-.004-.252-.128-.335-.216-.704-.424-.986-.207-.283-.418-.553-.71-.779a2.91 2.91 0 0 0-1.799-.624c-1.595-.017-3.191.006-4.786-.015-.308-.005-.582.109-.881.127a.963.963 0 0 0-.521.21c-.33.275-.72.469-.987.839-.352.484-.584.997-.591 1.582-.02 1.535-.007 3.071-.007 4.606v.445c-1.913 0-3.782.005-5.652-.006a2.113 2.113 0 0 0-.813.153c-.578.244-1.139.542-1.472 1.126-.247.429-.5.856-.502 1.364-.008 1.822-.007 3.644.003 5.466 0 .24.05.477.146.697.262.569.562 1.117 1.149 1.449.48.274.971.492 1.546.49 1.716-.005 3.431 0 5.146 0h.453c0 1.679.007 3.315-.005 4.95-.003.415.131.781.284 1.152.201.485.427.651.835 1.017.513.462 1.136.673 1.822.677 1.596.01 3.191-.008 4.786.013.308.005.596-.073.877-.137.249-.062.483-.171.689-.321.288-.196.551-.426.782-.685.397-.456.62-.987.629-1.565.028-1.771.015-3.542.005-5.314a2.587 2.587 0 0 0-.118-.76c-.183-.573-.729-1.27-1.265-1.543-.469-.239-.947-.491-1.521-.427-.339.037-.686.007-1.029.007l-4.49-.005Z"
      style={{
        fill: "#04a9f3",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M24.045 45.176c.025-.031.049-.09.074-.091.674-.004 1.347-.004 2.02 0 .025 0 .049.06.074.091h-2.168Z"
      style={{
        fill: "#82d4f9",
        fillRule: "nonzero",
      }}
    />
  </svg>
)

export default CloudronIcon

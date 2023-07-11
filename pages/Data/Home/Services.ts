import AgenciesIcon from "../../components/Icons/ServerControlIcon"
import CloudHostingIcon from "../../components/Icons/CloudHostingIcon"
import DedicatedServerIcon from "../../components/Icons/DedicatedServerIcon"
import EcommerceIcon from "../../components/Icons/VpsServerIcon"
import HostingIcon from "../../components/Icons/HostingIcon"
import SharedHostingIcon from "../../components/Icons/SharedHostingIcon"
import StudentsIcon from "../../components/Icons/StudentsIcon"
import WebsiteBuilderIcon from "../../components/Icons/WebsiteBuilderIcon"
import WpHIcon from "../../components/Icons/WpHIcon"

const ServicesArray = [
    {
        label: "Shared Hosting",
        discriotion:  `Cost effective, fast, and reliable for small businesses.`,
        price: 2.8,
        icon: SharedHostingIcon
    },
    {
        label: "WordPress Hosting",
        price: 3.8,
        discriotion: "Best for WordPress performance and value.",
        icon: WpHIcon
    },
    {
        label: `VPS Hosting`,
        price: 7.8,
        discriotion: "For high traffic sites, larger businesses and resellers. Get the power, flexibility, and speed you need with our virtual private server hosting.",
        icon: HostingIcon
    },
    {
        label: "Dedicated Hosting",
        price: 15.8,
        discriotion: "Our dedicated solutions provide you with complete control and 100% isolation from other users.",
        icon: DedicatedServerIcon
    },

    {
        label: "WP Website Builder",
        price: 6.8,
        discriotion: "No code is necessary! Utilize WordPress-simplified design tools to confidently build your website.",
        icon: WebsiteBuilderIcon
    },
    {
        label: "Cloud Hosting",
        price: 5.8,
        discriotion: "Our cloud servers offer a wide range of 1-click installation options and are entirely customizable.",
        icon: CloudHostingIcon
    },

]


export {ServicesArray}
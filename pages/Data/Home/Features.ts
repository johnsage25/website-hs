import ServerControlIcon from "../../components/Icons/ServerControlIcon"
import VpsServerIcon from "../../components/Icons/VpsServerIcon"
import HostingIcon from "../../components/Icons/HostingIcon"
import StudentsIcon from "../../components/Icons/StudentsIcon"

const FeaturesArray = [
    {
        label: "Deploy Quickly",
        discriotion:  `Instant deployment with Tier-1 networking and blazing-fast hardware. The HostSpacing performance you expect with cloud flexibility!`,
        icon: HostingIcon
    },
    {
        label: "Customizable",
        discriotion: "Any OS can be deployed! Pick from a number of our Linux images that are compatible with cloud-init, or you can always upload your own image or ISO!",
        icon: VpsServerIcon
    },
    {
        label: `Super Easy to Use`,
        discriotion: "Our custom control panel is simple to use and removes the headache of managing your web hosting.",
        icon: ServerControlIcon
    },
    {
        label: "Reliability is our goal",
        discriotion: "Rest assured that your services are up and running, with our data-based service uptime guarantee.",
        icon: StudentsIcon
    },

]


export {FeaturesArray}
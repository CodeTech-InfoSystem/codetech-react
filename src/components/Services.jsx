import { Hubspot, Web, Migration, Marketing, UX, App } from "../assets";

const servicesData = [
    {
        id: 1,
        title: "Web Design / Development",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: Web,
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: UX,
    },
    {
        id: 3,
        title: "Website Migration",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: Migration,
    },
    {
        id: 4,
        title: "App Development",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: App,
    },
    {
        id: 5,
        title: "HubSpot Integration",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: Hubspot,
    },
    {
        id: 6,
        title: "Email Marketing",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: Marketing,
    },
];

const Services = () => {
    return (
        <section className="py-8 px-20 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="p-6 rounded-xl bg-[#F7F7F7] flex flex-col items-start relative shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#B9A164] hover:text-white hover:scale-105 group"
                        style={{
                            borderTopLeftRadius: "3.125rem", // top-left radius
                            borderTopRightRadius: "0", // top-right radius
                            borderBottomRightRadius: "3.125rem", // bottom-right radius
                            borderBottomLeftRadius: "0", // bottom-left radius
                        }}
                    >
                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                            <img src={service.icon} alt={service.title} className="w-12 h-12" />
                        </div>
                        <h3 className="text-lg font-bold py-2 mt-2">{service.title}</h3>
                        {/* Use group-hover to apply hover effect on child elements */}
                        <div className="flex items-center space-x-2 my-2">
                            <div className="h-1 w-10 bg-[#AD954F] group-hover:bg-white rounded-lg"></div>
                            <div className="h-1 w-4 bg-[#AD954F] group-hover:bg-white rounded-lg"></div>
                        </div>

                        <p className="font-Raleway w-[98%] my-2">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

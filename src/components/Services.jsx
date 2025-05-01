const servicesData = [
    {
        id: 1,
        title: "Web & Mobile App Development",
        description: "We create customized websites and apps that enable you to engage with your audience, ensuring your business is accessible anytime, anywhere. Effortlessly establish your brand's digital presence. Custom Websites & Apps – Connect, Engage, and Grow 24/7!",
        icon: "/images/web.svg",  // Direct path
    },
    {
        id: 2,
        title: "E-commerce Solutions",
        description: "Digitalize your business with us and build an online store, enabling you to sell products far and wide without leaving your home.Transform Your Business – Sell Online, Grow Anywhere!",
        icon: "/images/ux.svg",
    },
    {
        id: 3,
        title: "AI & Machine Learning",
        description: "Integrate AI into your business and make everything smarter and easier, enhancing efficiency and decision-making.",
        icon: "/images/migration.svg",
    },
    {
        id: 4,
        title: "Cloud Computing & DevOps",
        description: "As an official AWS partner, we ensure your data is securely stored in the cloud, keeping your systems fast and reliable without slowing down. Integrate AI – Simplify Tasks, Supercharge Decisions!",
        icon: "/images/app.svg",
    },
    {
        id: 5,
        title: "Digital marketing",
        description: "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout.",
        icon: "/images/hubspot.svg",
    },
    {
        id: 6,
        title: "Cybersecurity Services",
        description: "We provide robust cybersecurity measures to shield your systems from cyber threats, ensuring your business stays safe and secure. Protect your Data from digital threats. Protect Your data with Advanced Cybersecurity Solutions.",
        icon: "/images/marketing.svg",
    },
    {
        id: 7,
        title: "Blockchain & Web3 Development",
        description: " We develop decentralized, transparent systems, including secure payment gateways, to ensure trustworthy online transactions. We also create solutions for industries like forex and gambling apps. Harness the power of blockchain for secure and seamless transactions across industries. Powering Secure & Transparent Transactions with Blockchain Technology.",
        icon: "/images/web.svg",
    },
    {
        id: 8,
        title: "CRM & ERP Solutions",
        description: "We provide tailored CRM and ERP software like Workday and Salesforce to simplify your business processes, enhance customer relationships, and boost efficiency. Make your business easier to manage and run smoothly.Simplify and Grow with Tailored CRM and ERP Solutions.",
        icon: "/images/ux.svg",
    },
    {
        id: 9,
        title: "IT Consulting",
        description: "Our expert IT consulting guides you through the latest technology trends to optimize your business operations and keep you ahead of the competition. Empower your business with expert advice. Expert IT Consulting to Optimize, Innovate, and Stay Ahead.",
        icon: "/images/hubspot.svg",
    },
];


const Services = ({ showHeading = true }) => {
    return (
        <section className="py-8 px-4 sm:px-4 md:px-10 lg:px-20 xl:px-24 bg-white">
         {showHeading && <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>}
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

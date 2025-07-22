import Image from "next/image";
import Marquee from "react-fast-marquee";

const TestimonialCarouselBlock = () => {
    const testimonials = [
        {
            id: 1,
            text: "We cut two hours of spreadsheet work per off-board and closed the security gap that worried our auditors.",
            author: "Amit Sharma",
            position: "IT Administrator, Turing",
            avatar: "Amit_Sharma.png",
            logo: "/home-page/turing.svg",
            logo_width: 198,
            logo_height: 32
        },
        {
            id: 2,
            text: "Offboarding users manually across numerous disconnected apps like Google Workspace, Slack, and Salesforce was time-consuming and risky. Stitchflow provides dashboards that instantly flag discrepancies, ensuring users are properly deactivated everywhere.",
            author: "Edwin Katabaro",
            position: "CIO & CISO, Turing",
            avatar: "Edwin_Katabaro.png",
            logo: "/home-page/turing.svg",
            logo_width: 198,
            logo_height: 32
        },
        {
            id: 3,
            text: "One of the hardest things in IT is figuring out access control—who's in what groups, what those groups do, who manages them, and where all that information lives. Before Stitchflow, it was a nightmare trying to piece together this data across tools like Google, Zoom, and other systems where names didn't match or info was missing. Stitchflow makes all of that so much easier.",
            author: "Peter Hadjisavas",
            position: "Director of IT, Hazel",
            avatar: "Peter_Hadjisavas.png",
            logo: "/home-page/hazel.svg",
            logo_width: 99,
            logo_height: 32
        },
        {
            id: 4,
            text: "Manually cross-referencing user counts and licenses across disconnected apps in spreadsheets was a time-consuming nightmare with unreliable data. Stitchflow provides peace of mind by centralizing this information and improving data reliability for managing users across systems.",
            author: "Carlos Jimenez",
            position: "IT Systems Administrator, CMT",
            avatar: "Carlos_Jimenez.png",
            logo: "/home-page/cmt.svg",
            logo_width: 171,
            logo_height: 40
        },
        {
            id: 5,
            text: "Manually auditing SaaS renewals across disconnected platforms was inefficient. Stitchflow provides real-time usage statistics by stitching together multiple SaaS apps in one view, saving time and enabling accurate license reconciliation for all our users and applications.",
            author: "Dean Hoffman",
            position: "Senior IT Manager, Rula",
            avatar: "Dean_Hoffman.png",
            logo: "/home-page/rula.svg",
            logo_width: 115.43,
            logo_height: 32
        },
        {
            id: 6,
            text: "Before Stitchflow, auditing user access across disconnected apps was a manual, error-prone process, leading to security risks from lingering permissions. Stitchflow now provides instant visibility into who has access to what for both connected and disconnected apps, allowing us to easily identify and remediate inconsistencies across all our applications. It's been a game-changer for keeping our least privileged access in check.",
            author: "Charise Intal",
            position: "IT Manager, Fountain",
            avatar: "Charise_Intal.png",
            logo: "/home-page/fountain.svg",
            logo_width: 199,
            logo_height: 32
        },
    ];

    return (
        <>
            <div className="flex justify-center items-center flex-wrap relative">
                <div className="w-full max-w-[1304px] mx-auto px-6">
                    <h2 className="font-semibold text-3xl md:text-[40px] text-center leading-[48px] text-[#222222] max-w-5xl mx-auto">IT teams who have tamed their disconnected environments with Stitchflow</h2>
                </div>
                {/* Carousel */}
                <div className="w-full homePageCarousel">
                    <Marquee 
                        pauseOnHover={true}
                        pauseOnClick={true}
                        autoFill={true}
                        className="mt-14 pb-20 max-w-[3000px] mx-auto"
                        speed={50}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full px-2 lg:px-3 h-full max-w-[400px] md:max-w-[830px]">
                                <div className={`bg-[#363338] min-h-[500px] md:min-h-[414px] text-white rounded-4xl overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col`}>
                                    <blockquote className="flex-grow mb-6">
                                        <p className="text-base md:text-lg lg:text-lg leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                        <div className="flex items-center mt-[24px]">
                                            <div className="rounded-full flex items-center justify-center mr-3 md:mr-4 overflow-hidden">
                                                <Image
                                                    src={`/home-page/${testimonial.avatar}`}
                                                    alt="avatar"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm md:text-base">
                                                    {testimonial.author}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-200">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                    </blockquote>

                                    <div className="flex flex-col items-start justify-between">

                                        <div>
                                            {testimonial.logo && (
                                                <Image
                                                    src={testimonial.logo}
                                                    alt={`${testimonial.author}'s company logo`}
                                                    width={testimonial.logo_width}
                                                    height={testimonial.logo_height}
                                                    className="object-contain"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default TestimonialCarouselBlock;

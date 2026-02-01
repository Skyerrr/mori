import case1 from '@/assets/image/case1.png';
import case1Mobile from '@/assets/image/case1-mobile.png';
import case2 from '@/assets/image/case2.png';
import case2Mobile from '@/assets/image/case2-mobile.png';

const hoverAnimation = "transition-colors duration-400";

const cases = [
  {
    slug: "https://pitch.com/v/unifying-vivos-product-service-acquisition-flow-ewyk9c/f0256a50-b2fc-462d-9daa-8e8146799527",
    title: "Vivo",
    subtitle: "Unifying Product Acquisition Flow",
    tags: [
      ["Health / EdTech", "B2C SaaS", "Startup"],
      ["iOS", "Product Design", "AI Content"],
    ],
    stats: [
      { prefix: "x", value: 7, label: "Flows unified" },
      { value: 15, label: "Designers project" },
      { value: 87, label: "Usability score" },
    ],
    image: case1,
    mobileImage: case1Mobile,

    hoverText: `${hoverAnimation} text-[#C480E6] lg:text-white lg:group-hover:text-[#C480E6]`,
    hoverBorder: `${hoverAnimation} border-[#C480E6] lg:group-hover:border-[#C480E6]`,
    hoverPillBorder: `${hoverAnimation} border-[#2C2C2C] lg:border-[#2C2C2C] lg:group-hover:border-[#C480E6]`,
    hoverButton: `${hoverAnimation} bg-[#C480E6] lg:group-hover:bg-[#C480E6] lg:bg-white w-full lg:w-auto`,

    dotColor: "text-[#8900CD]",
  },
  {
    slug: "https://pitch.com/v/elegibility-payer-mapping-xj6n9a",
    title: "Luma Health",
    subtitle: "AI Eligibility Payer Matching",
    tags: [
      ["Health Tech", "Enterprise SaaS", "Staratup"],
      ["Desktop", "Product Design", "AI automation"],
    ],
    stats: [
      { prefix: "x", value: 5, label: "Faster" },
      { value: 95, suffix: "%", label: "Accuracy" },
      { value: 0, label: "Training" },
    ],
    image: case2,
    mobileImage: case2Mobile,

    hoverText: `${hoverAnimation} text-[#F77D32] lg:text-white lg:group-hover:text-[#F77D32]`,
    hoverBorder: `${hoverAnimation} border-[#F77D32] lg:group-hover:border-[#F77D32]`,
    hoverPillBorder: `${hoverAnimation} border-[#2C2C2C] lg:border-[#2C2C2C] lg:group-hover:border-[#F77D32]`,
    hoverButton: `${hoverAnimation} bg-[#F77D32] lg:group-hover:bg-[#F77D32] lg:bg-white w-full lg:w-auto`,

    dotColor: "text-[#FF9500]",
  },
];

export default cases;

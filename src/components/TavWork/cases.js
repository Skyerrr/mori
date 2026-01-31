const hoverAnimation = "transition-colors duration-400";
import case1 from '@/assets/image/case1.png';
import case1Mobile from '@/assets/image/case1-mobile.png';
import case2 from '@/assets/image/case2.png';
import case2Mobile from '@/assets/image/case2-mobile.png';
const cases = [
  {
    slug: "vivo",
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

    hoverText: `${hoverAnimation} text-[#C480E6] lg:group-hover:text-[#C480E6]`,
    hoverBorder: `${hoverAnimation} border-[#C480E6] lg:group-hover:border-[#C480E6]`,
    hoverButton: `${hoverAnimation} bg-[#C480E6] lg:group-hover:bg-[#C480E6] lg:bg-white w-full lg:w-auto`,

    dotColor: "text-[#8900CD]",
  },
  {
    slug: "https://google.com.br",
    title: "WebQuiz",
    subtitle: "Join the Brain Geek Paradise",
    tags: [
      ["Web & Mobile", "User Research"],
      ["Trivia", "B2C", "Startup", "CJM"],
      ["Product Design", "Product Management"],
    ],
    stats: [
      { prefix: "x", value: 5, label: "Faster" },
      { value: 95, suffix: "%", label: "Accuracy" },
      { value: 0, label: "Training" },
    ],
    image: case2,
    mobileImage: case2Mobile,

    hoverText: `${hoverAnimation} text-[#F77D32] lg:group-hover:text-[#F77D32]`,
    hoverBorder: `${hoverAnimation} border-[#F77D32] lg:group-hover:border-[#F77D32]`,
    hoverButton: `${hoverAnimation} bg-[#F77D32] lg:group-hover:bg-[#F77D32] lg:bg-white w-full lg:w-auto`,

    dotColor: "text-[#FF9500]",
  },
];

export default cases;

import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";

const members = [
  {
    name: "Asmit Kumar Singh",
    role: "Project Manager",
    image:
      "https://compote.slate.com/images/41a669f3-83f9-4063-a5df-ba5d9391b049.jpg?width=1560",
  },
  {
    name: "Bishal Chakraborty",
    role: "Frontend Developer",
    image:
      "https://i.pinimg.com/736x/f4/f0/0a/f4f00acc8cf13e552311dd126b7dd2e4.jpg",
  },
  {
    name: "Partha Dey",
    role: "Backend Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_oo3E1DxUmfjLL0a11NkB5swkXrhUW4C_Q&s",
  },
  {
    name: "Pritam Purkait",
    role: "Backend Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_QKpNg172A9br4z_npC-poNxJs4WI3xKSg&s",
  },
];

function AboutUs() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio("/KrushKrush.mp3");
    audio.loop = true;
    audio
      .play()
      .catch((err) =>
        console.log("Autoplay blocked, will play on user interaction", err)
      );
    return () => audio.pause();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight * 0.7;
      const newIndex = Math.round(scrollY / sectionHeight);
      setVisibleIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-900 text-white">
      <Navbar />

      <div className="flex flex-col items-center py-20">
        {members.map((member, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = index === visibleIndex;

          return (
            <div
              key={member.name}
              className={`flex my-30 md:my-20 ${
                isLeft ? "justify-start pl-10" : "justify-end pr-10"
              } items-center w-full transition-all duration-700 ease-out px-10 md:px-32 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : isLeft
                  ? "-translate-x-32 opacity-0 scale-90"
                  : "translate-x-32 opacity-0 scale-90"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center p-10 backdrop-blur-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mb-6 md:mb-0 max-w-full md:mr-10 shadow-lg"
                />
                <div className="text-center text-gray-300 md:text-left">
                  <h2 className="text-3xl font-bold ">{member.name}</h2>
                  <p className="text-xl mt-2">{member.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;

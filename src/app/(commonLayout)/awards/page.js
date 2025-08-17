import Image from "next/image";
import Link from "next/link";
import { LiaAwardSolid } from "react-icons/lia";

export default function AwardsPage() {
  const awardsData = [
    { id: 1, img: "/web-development.png", title: "Web Development", url: "https://drive.google.com/file/d/1QvgerarUHRSKlyjvQJfHWmyb2EePBUjZ/view" },
    { id: 2, img: "/html.jpg", title: "HTML", url: "https://www.sololearn.com/Certificate/CT-H1IO5MBK/jpg" },
    { id: 3, img: "/css.jpg", title: "CSS", url: "https://www.sololearn.com/Certificate/CT-9EX7LBBT/jpg" },
    { id: 4, img: "/responsive-web.jpg", title: "Responsive Web Design", url: "https://www.sololearn.com/Certificate/CT-ZXNXJW3L/jpg" },
    { id: 5, img: "/react-redux.jpg", title: "React Redux", url: "https://www.sololearn.com/Certificate/CT-UJHRFECV/jpg" },
    { id: 6, img: "/game-development.jpg", title: "Game Development with JavaScript", url: "https://www.sololearn.com/Certificate/CT-D2LGZY19/jpg" },
  ];

  return (
    <div className="pb-10 lg:pb-20">
      <div className="container">
      {/* Header */}
      <div className="flex mb-6 gap-3 mt-5 items-center">
        <div className="bg-custom-gradient p-2 rounded-md">
          <LiaAwardSolid className="text-white text-xl" />
        </div>
        <h2 className="text-xl font-bold text-white">Awards:</h2>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {awardsData.map((award) => (
          <div key={award.id} className="relative group cursor-pointer rounded-lg overflow-hidden">
            {/* Image Wrapper */}
            <div className="relative w-full h-72">
              <Image
                src={award.img}
                alt={award.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title on Hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-center justify-center">
              <h2 className="mb-3">{award.title}</h2>
              <Link target='_blank' href={award?.url}  className="theme-btn lg:text-sm bg-custom-gradient text-white montserrat font-semibold">{"Vîsït"}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

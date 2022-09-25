import Image from "next/image";
import kevin from "../public/images/kevin.jpeg";
import github from "../public/images/github.png";
import linkedin from "../public/images/linkedin.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-2 justify-center md:items-center md:space-x-1">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-600 mb-2 text-center md:text-left">
            Kevin Mitermite
          </h1>
          <p className="text-2xl lg:text-3xl mb-5 text-center md:text-left">
            Web developer from 🇫🇷 France
          </p>
          <p className="font-semibold text-center md:text-left">
            Currently working at{" "}
            <a
              href="https://www.michelin.fr/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-600 hover:underline"
            >
              MICHELIN
            </a>
            .
          </p>
          <div className="flex flex-row justify-center md:justify-start items-center mt-5">
            <div className="mr-5">
              <a
                href="https://github.com/mitermitek"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Github"
                  src={github}
                  quality={100}
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mitermitek/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="LinkedIn"
                  src={linkedin}
                  quality={100}
                  width={50}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 mb-10 md:mb-0">
          <div className="w-2/3 mx-auto">
            <Image
              alt="Kevin Mitermite"
              src={kevin}
              layout="responsive"
              quality={100}
              priority={true}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

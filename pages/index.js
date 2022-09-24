import Image from "next/image";
import kevin from "../public/images/kevin.jpeg";

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

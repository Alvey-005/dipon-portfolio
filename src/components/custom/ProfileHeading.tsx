import Image from "next/image";
import Button from "../ui/Button";
import profileHeadingData from "@/Data/profileHeadingData";
import parse from 'html-react-parser';
const ProfileHeading = () => {
  const {name,socialIcons,designations} = profileHeadingData;
    return (
        <div className="text-[#333333] flex flex-col lg:flex-row lg:justify-between">
          <div>
          <h1 className="font-bold text-4xl mb-2 text-primary">{name}</h1>
          {
            designations.map((designation,index) => <p key={index} className="text-gray-600 text-32">{parse(designation)}</p>)
          }

          </div>
          <div className="flex flex-col gap-4 items-center md:items-start lg:items-end">
          <div className="flex space-x-3 mt-4">
          {socialIcons.map((social) => (
            <>
              <a
                href={social.url}
                className="text-blue-600 hover:text-blue-800"
              >
                {/* <SocialLogo icon="linkedin" size={ 48 } /> */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={48}
                  height={48}
                  // objectFit="scale-down"
                  className="object-scale-down"
                />
              </a>
            </>
          ))}
        </div>
        <Button label="Download My CV"
        pdfUrl="https://drive.google.com/file/d/1dqM1ZYDLWdI1BNfcj58DuPFZt6HCHm4l/view?usp=sharing"
        />
        </div>
        </div>
    )
}
export default ProfileHeading;

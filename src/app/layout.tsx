import { Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar, { SidebarItem } from "@/components/custom/SideBar";
import ProfileHeading from "@/components/custom/ProfileHeading";
import { Toaster } from "@/components/ui/toaster";
import PaginationButtons from "@/components/custom/PaginationButtons ";
import sideBarData from "@/Data/layout";

const workSans = Work_Sans({ subsets: ["latin"] });
// const siteUrl = "http://dipon.netlify.app";
// export const metadata: Metadata = {
//   title: "Dipon Talukder Dhruvo",
//   description:
//     "Explore the academic portfolio of Dipon Talukder, a graduate student specializing in ML,AI. Discover research projects, publications, and professional achievements in ML AI, showcasing a commitment to advancing knowledge and contributing to the field.",
//   keywords: "DiponTalukder,Dipon,Dipon,Dipon,Dip",
//   robots: "index, follow",
//   openGraph: {
//     title: "Dipon Talukder Dhruvo",
//     description:
//       "Explore the academic portfolio of Dipon Talukder, a graduate student specializing in ML,AI. Discover research projects, publications, and professional achievements in ML AI, showcasing a commitment to advancing knowledge and contributing to the field.",
//     url: siteUrl,
//     images: [
//       {
//         url: `${siteUrl}/profilePic.jpg}`,
//         width: 800,
//         height: 600,
//         alt: "Profile  picture",
//       },
//     ],
//     type: "website",
//   },
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Your Site Title",
//   //   description: "Your site description here",
//   //   // image: 'https://yourwebsite.com/image.jpg',
//   // },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sideBaritems } = sideBarData;
  return (
    <html lang="en">
      {/* <Head>
        <link rel="canonical" href="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: "Your Site Name",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>{" "} */}
      <body className={workSans.className}>
        <div className="flex ">
          <Sidebar items={sideBaritems} />
          <div className="flex-1 px-4 md:px-8 lg:px-16  mt-16 md:mt-8 w-full">
            <ProfileHeading />
            <div className="mt-8 md:mt-16">{children}</div>
            <div className="py-10">
              <PaginationButtons />
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

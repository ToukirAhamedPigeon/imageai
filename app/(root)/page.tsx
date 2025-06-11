import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.action";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: {searchParams: Promise<{ page: Number, query: string }>}) {
  const pageParams = await searchParams;
  const page=Number(pageParams?.page) || 1
  const query=pageParams?.query || ''
  console.log("Home page",page, query);
  const images = await getAllImages({page, searchQuery:query});
  return (
    < >
      <section className="home-container w-full rounded-2xl py-8 bg-gradient-to-r from-[#67c0e1] to-purple-300 text-transparent">
        <h1 className="home-heading sm:max-w-full">Bring Your Imagination to Life with ImageAI</h1>
        <ul className="flex-center w-full gap-5 sm:gap-20 mt-10">
          {
            navLinks.slice(1,5).map((link)=>(
              <Link href={link.route} key={link.route} className="flex-center flex-col gap-2">
                <li className="flex-center p-4 rounded-full bg-white">
                  <Image src={link.icon} alt="image" width={24} height={24}/>
                </li>
                <p className="text-white text-14-semibold text-center hidden lg:block">{link.label}</p>
              </Link>
            ))  
          }
        </ul>
      </section>
      <section className="mt-12">
        <Collection hasSearch={true} images={images?.data} totalPages={images?.totalPage} page={Number(page)}/>
      </section>
    </>
  );
}

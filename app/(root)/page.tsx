import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params }: {params: Promise<{ page: string, query: string }>}) {
  const searchParams = await params;
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query) || '';
  return (
    < >
      <section className="home-container w-full rounded-2xl py-8 bg-gradient-to-r from-purple-500 to-purple-600 text-transparent">
        <h1 className="home-heading sm:max-w-full">Unleash Your Creative Vision with ImageAI</h1>
        <ul className="flex-center w-full gap-10 sm:gap-20 mt-10">
          {
            navLinks.slice(1,5).map((link)=>(
              <Link href={link.route} key={link.route} className="flex-center flex-col gap-2">
                <li className="flex-center p-4 rounded-full bg-white">
                  <Image src={link.icon} alt="image" width={24} height={24}/>
                </li>
                <p className="text-white text-14-semibold text-center">{link.label}</p>
              </Link>
            ))  
          }
        </ul>
      </section>
      <section className="mt-12">
        <Collection images={[]} totalPages={1} page={1}/>
      </section>
    </>
  );
}

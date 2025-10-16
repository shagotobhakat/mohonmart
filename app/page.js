import Banner from "@/components/banner";
import Proprietor from "@/components/proprietor";
import About from "@/components/about";
import CategoryItems from "@/components/categoryItems";
import Accessories from "@/components/accessories";
import Clothing from "@/components/clothing";
import Cosmetics from "@/components/cosmetics";
import ClientReview from "@/components/clientReview";

export default function Home() {
  return (
    <>
    <Banner />
    <Proprietor />
    <About />
    <CategoryItems />
    <Accessories />
    <Clothing />
    <Cosmetics />
    <ClientReview />
    </>
  );
}

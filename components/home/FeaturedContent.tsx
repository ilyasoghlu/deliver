import React from "react";
import { fetchFeaturedProducts } from "@/utils/actions";
import { EmptyList, SectionTitle } from "../global";
import { Separator } from "../ui/separator";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedContent({ text }: { text: string }) {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="flex flex-col py-12">
      <div className="flex flex-col py-10 text-center items-center text-muted-foreground">
        <SectionTitle text={text} />
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro harum repellendus rerum amet, culpa quos deleniti laudantium assumenda nostrum ipsum impedit ab saepe, voluptas distinctio.</p>
      </div>
      <ProductsGrid products={products} />
      <Separator />
    </section>
  );
}

export default FeaturedContent;

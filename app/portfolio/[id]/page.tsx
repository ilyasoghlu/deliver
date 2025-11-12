
import { fetchProductDetails } from "@/utils/actions";
import Image from "next/image";


async function ProductDetailsPage({params}:{params:{id:string}}) {
    const product = await fetchProductDetails(params.id);
    const {name, company, description, image} = product;

    return (
        <section>
            
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                {/* Image */}
                <div className="relative h-full ">
                    <Image 
                        src={image} 
                        alt={name} 
                        fill 
                        sizes="(max-width:768px) 100vw,
                                (max-width:1200px) 50vw, 33vw " 
                        priority 
                        className="w-full rounded object-cover" /> 
                </div>
                {/* Product Info */}
                <div>
                    <div className="flex gap-x-8 items-center">
                        <h1 className="capitalize text-3xl font-bold">{name}</h1>
                        {/* In the future you can add here a like button  */}
                    </div>
                    <h4 className="text-xl mt-5">{company}</h4>
                    <p className="mt-6 leading-8 text-muted-foreground  ">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsPage
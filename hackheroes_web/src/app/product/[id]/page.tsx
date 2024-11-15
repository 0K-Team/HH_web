"use client";
import { fetchProduct } from "@/app/api/products";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Product as IProduct } from "@/app/types/product";
import NotFound from "@/app/not-found";
import Header from "@/app/(landing)/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetchProduct(id as string).then((product) => {
            console.log(product);
            setProduct(product);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [id]);

    return loading ? (
        <div>Loading...</div>
    ) : product ? (
        <div className="bg-[#1E1E1E] min-h-screen">
            <Header />
            <div className="p-8 flex flex-col md:flex-row lg:flex-row">
                <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 lg:w-1/2 h-auto object-cover my-4 rounded-lg" />
                <div className="md:pl-8 lg:pl-8 md:pt-8 lg:pt-8">
                    <div className="flex gap-3 items-center">
                        <span className="text-green-green py-1 px-3 bg-[#2A2A2A] rounded-lg">{product.category}</span>
                        <span>{product.brand}</span>
                        {product.durability && <p className="text-lg text-green-green font-bold mr-2 ml-auto self-center">{product.durability}</p>}
                    </div>
                    <p className="text-lg font-bold">{product.name}</p>
                    <div className="prose lg:prose-xl dark:prose-invert">
                        <p className="text-sm">{product.description}</p>
                    </div>
                    <hr className="my-2 border-gray" />
                    {product.ecoFriendly && <p className="text-sm text-green-green">Eco friendly{product.ecoCertification && product.ecoCertification != "-" ? ` (${product.ecoCertification})` : ""}</p>}
                    <FontAwesomeIcon className="mr-2 text-green-green" icon={faRecycle} />
                    {product.recyclingInfo && <span>{product.recyclingInfo}</span>}
                    <br />
                    <FontAwesomeIcon className="mr-2 text-green-green" icon={faLeaf} />
                    {product.carbonFootprint && <span>Ślad węglowy: {product.carbonFootprint.co2Emission} {product.carbonFootprint.unit}</span>}
                    <div className="flex flex-col">
                        <p className="text-green-green font-bold ml-auto">{product.price} {product.currency}</p>
                        {product.productURL ? <a className="bg-[#2A2A2A] w-[90%] mt-2 text-center self-center p-4 rounded-lg hover:bg-gray-dark" href={product.productURL}>
                            Przejdź do strony
                        </a> : <p className="text-center font-light text-gray">Produkt niedostępny</p>}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <NotFound />
    )
}
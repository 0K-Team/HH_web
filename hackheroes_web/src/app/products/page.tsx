"use client";
import { useEffect, useState } from "react"
import ProductCard from "./(components)/ProductCard";
import { Product } from "../types/product";
import Header from "../(landing)/Header";
import { fetchProducts } from "../api/products";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(({data}) => {
            setProducts(data);
        });
    }, []);

    return (
        <div className="bg-[#1E1E1E] min-h-screen">
            <Header />
            <div className="flex">
                <div className="container mx-auto p-4 flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {products.map((prod) => (
                            <ProductCard
                                key={prod._id}
                                id={prod._id}
                                name={prod.name}
                                image={prod.imageUrl ?? ""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
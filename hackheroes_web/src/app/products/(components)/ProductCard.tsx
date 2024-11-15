"use client";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image }) => {
    return (
        <div className="bg-gray-light rounded-lg overflow-hidden">
            <Link href={`/product/${id}`}>
                <div className="relative h-48 group">
                    <img src={image} alt={name} className="object-cover w-1/2 h-1/2 group-hover:scale-110 transition-all origin-top duration-300 rounded my-3 mx-auto" />
                    <p className="text-center line-clamp-3">{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;
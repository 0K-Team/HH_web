"use client"
import React, {useEffect} from "react";
import {fetchLoggedUser} from "@/app/api/user";
import {redirect} from "next/navigation";
import { FaPlus, FaTrash, FaUpload, FaEdit, FaList, FaCheck, FaTimes } from 'react-icons/fa'

const AdminPanel = () => {
    useEffect(() => {
        fetchLoggedUser().then(user => {
            if (user?.admin === false) {
                redirect("/auth");
            }
        })
    }, [])

    const handleSubmitBlogCreation = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const image = (form.elements[0] as HTMLInputElement).value;
        const title = (form.elements[1] as HTMLInputElement).value;
        const author = (form.elements[2] as HTMLInputElement).value;
        const content = (form.elements[3] as HTMLTextAreaElement).value;

        await fetch('/api/v1/admin/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({image, title, author, content}),
        });
    };

    const handleDeleteBlog = async (id: string) => {
        await fetch(`/api/v1/admin/blog/${id}`, {
            method: 'DELETE',
        });
    };

    const handleUploadToCDN = async (fileName: string, file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        await fetch(`/api/v1/admin/CDN/${fileName}`, {
            method: 'POST',
            body: formData,
        });
    };

    const handleAddTopic = async (name: string) => {
        await fetch('/api/v1/admin/topics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name}),
        });
    };

    const handleAddProduct = async (product: {
        name: string;
        category: string;
        brand: string;
        price: number;
        currency: string;
        productUrl: string;
        description: string;
        carbonFootprint: {
            co2Emission: string;
            unit: string;
        };
        durability: string;
        recyclingInfo: string;
        imageUrl: string;
        ecoCertification: string;
        ecoFriendly: boolean;
    }) => {
        await fetch('/api/v1/admin/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
    };

    const handleModifyProduct = async (id: string, product: {
        name: string;
        category: string;
        brand: string;
        price: number;
        currency: string;
        productUrl: string;
        description: string;
        carbonFootprint: {
            co2Emission: string;
            unit: string;
        };
        durability: string;
        recyclingInfo: string;
        imageUrl: string;
        ecoCertification: string;
        ecoFriendly: boolean;
    }) => {
        await fetch(`/api/v1/admin/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
    };

    const handleDeleteProduct = async (id: string) => {
        await fetch(`/api/v1/admin/products/${id}`, {
            method: 'DELETE',
        });
    };

    const handleAddDiscount = async (discount: {
        discountCode: string;
        description: string;
        validUntil: Date;
        partnerBrand: string;
        productRestrictions: string;
        termsAndConditions: string;
        url: string;
    }) => {
        await fetch('/api/v1/admin/products/discount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discount),
        });
    };

    const handleModifyDiscount = async (id: string, discount: {
        discountCode: string;
        description: string;
        validUntil: Date;
        partnerBrand: string;
        productRestrictions: string;
        termsAndConditions: string;
        url: string;
    }) => {
        await fetch(`/api/v1/admin/products/discount/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discount),
        });
    };

    const handleDeleteDiscount = async (id: string) => {
        await fetch(`/api/v1/admin/products/discount/${id}`, {
            method: 'DELETE',
        });
    };

    const handleGetEvents = async () => {
        const response = await fetch('/api/v1/admin/events');
        return response.json();
    };

    const handleUpdateEvent = async (id: string, event: {
        title: string;
        description: string;
        category: string;
        isOffline: boolean;
        location: {
            address: string;
            latitude: number;
            longitude: number;
        };
        date: Date;
        duration: string;
        organizer: string;
        image: string;
        additionalInfo: {
            whatToBring: string;
            eventRules: string;
        };
        members: string[];
        awaiting: boolean;
    }) => {
        await fetch(`/api/v1/admin/events/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        });
    };

    const handleDeleteEvent = async (id: string) => {
        await fetch(`/api/v1/admin/events/${id}`, {
            method: 'DELETE',
        });
    };

    const handleApproveEvent = async (id: string) => {
        await fetch(`/api/v1/admin/events/approve/${id}`, {
            method: 'POST',
        });
    };

    const handleRejectEvent = async (id: string) => {
        await fetch(`/api/v1/admin/events/approve/${id}`, {
            method: 'DELETE',
        });
    };

    const handleAddPlant = async (plant: { name: string; type: string; price: number; description: string; }) => {
        await fetch('/api/v1/admin/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plant),
        });
    };

    return (
        <div className={'w-[50%] mx-auto'}>
            <nav className="my-6">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b pb-2">Table of Contents</h2>
                <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaPlus className="text-gray-100"/>
                        <a href="#create-blog" className="hover:underline">Create Blog</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaTrash className="text-gray-100"/>
                        <a href="#delete-blog" className="hover:underline">Delete Blog</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaUpload className="text-gray-100"/>
                        <a href="#upload-cdn" className="hover:underline">Upload to CDN</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaPlus className="text-gray-100"/>
                        <a href="#add-topic" className="hover:underline">Add Topic</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaPlus className="text-gray-100"/>
                        <a href="#add-product" className="hover:underline">Add Product</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaEdit className="text-gray-100"/>
                        <a href="#modify-product" className="hover:underline">Modify Product</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaTrash className="text-gray-100"/>
                        <a href="#delete-product" className="hover:underline">Delete Product</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaPlus className="text-gray-100"/>
                        <a href="#add-discount" className="hover:underline">Add Discount</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaEdit className="text-gray-100"/>
                        <a href="#modify-discount" className="hover:underline">Modify Discount</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaTrash className="text-gray-100"/>
                        <a href="#delete-discount" className="hover:underline">Delete Discount</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaList className="text-gray-100"/>
                        <a href="#get-events" className="hover:underline">Get Events</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaEdit className="text-gray-100"/>
                        <a href="#update-event" className="hover:underline">Update Event</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaTrash className="text-gray-100"/>
                        <a href="#delete-event" className="hover:underline">Delete Event</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                    <FaCheck className="text-gray-100" />
                        <a href="#approve-event" className="hover:underline">Approve Event</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaTimes className="text-gray-100" />
                        <a href="#reject-event" className="hover:underline">Reject Event</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-blue-600 transition">
                        <FaPlus className="text-gray-100" />
                        <a href="#add-plant" className="hover:underline">Add Plant</a>
                    </li>
                </ul>
            </nav>

            {/* Create Blog */}
            <section id="create-blog" className="mb-8">
            <h2 className="text-lg font-bold mb-4">Create Blog</h2>
                <form onSubmit={handleSubmitBlogCreation} className="space-y-4">
                    <input type="text" name="image" placeholder="Image link"
                           className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"/>
                    <input type="text" name="title" placeholder="Title"
                           className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"/>
                    <input type="text" name="author" placeholder="Author"
                           className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"/>
                    <textarea name="content" placeholder="Content"
                              className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"></textarea>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-200">Submit
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </section>

            {/* Delete Blog */}
            <section id="delete-blog" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Delete Blog</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleDeleteBlog(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }} className="space-y-4">
                    <input type="text" name="blogId" placeholder="Blog ID"
                           className="w-full p-2 bg-gray-800 text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"/>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-red-600 text-white rounded-lg mt-4 hover:bg-red-700 transition duration-200">Delete
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </section>

            {/* Upload to CDN */}
            <section id="upload-cdn" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Upload to CDN</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const fileName = ((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value;
                    const fileInput = (e.target as HTMLFormElement).elements[1] as HTMLInputElement;
                    if (fileInput.files && fileInput.files[0]) {
                        handleUploadToCDN(fileName, fileInput.files[0]);
                    }
                }} className="space-y-4">
                    <input type="text" name="fileName" placeholder="File Name"
                           className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"/>
                    <input type="file" name="fileInput"
                           className="w-full p-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"/>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-200">Upload
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </section>

            {/* Add Topic */}
            <div id="add-topic" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Add topic</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const topicName = ((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value;
                    handleAddTopic(topicName);
                }}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                    />
                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                className="w-3/4 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Add
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Add Product */}
            <div id="add-product" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Add product</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const product = {
                        name: (form.elements[0] as HTMLInputElement).value,
                        category: (form.elements[1] as HTMLInputElement).value,
                        brand: (form.elements[2] as HTMLInputElement).value,
                        price: parseFloat((form.elements[3] as HTMLInputElement).value),
                        currency: (form.elements[4] as HTMLInputElement).value,
                        productUrl: (form.elements[5] as HTMLInputElement).value,
                        description: (form.elements[6] as HTMLInputElement).value,
                        carbonFootprint: {
                            co2Emission: (form.elements[7] as HTMLInputElement).value,
                            unit: (form.elements[8] as HTMLInputElement).value,
                        },
                        durability: (form.elements[9] as HTMLInputElement).value,
                        recyclingInfo: (form.elements[10] as HTMLInputElement).value,
                        imageUrl: (form.elements[11] as HTMLInputElement).value,
                        ecoCertification: (form.elements[12] as HTMLInputElement).value,
                        ecoFriendly: (form.elements[13] as HTMLInputElement).checked,
                    };
                    handleAddProduct(product);
                }}>
                    <input type="text" placeholder="Name"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Category"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Brand"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="number" step={0.01} placeholder="Price"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Currency"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Product URL"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Description"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="CO2 Emission"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Unit"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Durability"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Recycling Info"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Image URL"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Eco Certification"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <label className="flex items-center mt-4">
                        <input type="checkbox" className="mr-2"/>
                        Eco Friendly
                    </label>

                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                className="w-3/4 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Add
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Modify Product */}
            <div id="modify-product" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Modify product</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const id = (form.elements[0] as HTMLInputElement).value;
                    const product = {
                        name: (form.elements[1] as HTMLInputElement).value,
                        category: (form.elements[2] as HTMLInputElement).value,
                        brand: (form.elements[3] as HTMLInputElement).value,
                        price: parseFloat((form.elements[4] as HTMLInputElement).value),
                        currency: (form.elements[5] as HTMLInputElement).value,
                        productUrl: (form.elements[6] as HTMLInputElement).value,
                        description: (form.elements[7] as HTMLInputElement).value,
                        carbonFootprint: {
                            co2Emission: (form.elements[8] as HTMLInputElement).value,
                            unit: (form.elements[9] as HTMLInputElement).value,
                        },
                        durability: (form.elements[10] as HTMLInputElement).value,
                        recyclingInfo: (form.elements[11] as HTMLInputElement).value,
                        imageUrl: (form.elements[12] as HTMLInputElement).value,
                        ecoCertification: (form.elements[13] as HTMLInputElement).value,
                        ecoFriendly: (form.elements[14] as HTMLInputElement).checked,
                    };
                    await handleModifyProduct(id, product);
                }}>
                    <input type="text" placeholder="Product ID"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <div className="flex justify-center">
                        <button type="button" onClick={async (e) => {
                            const form = (e.target as HTMLButtonElement).closest('form') as HTMLFormElement;
                            const id = (form.elements[0] as HTMLInputElement).value;
                            const response = await fetch(`/api/v1/products/product/${id}`);
                            const product = await response.json();

                            // Populate the form fields with fetched product data
                            (form.elements[1] as HTMLInputElement).value = product.name;
                            (form.elements[2] as HTMLInputElement).value = product.category;
                            (form.elements[3] as HTMLInputElement).value = product.brand;
                            (form.elements[4] as HTMLInputElement).value = product.price;
                            (form.elements[5] as HTMLInputElement).value = product.currency;
                            (form.elements[6] as HTMLInputElement).value = product.productUrl;
                            (form.elements[7] as HTMLInputElement).value = product.description;
                            (form.elements[8] as HTMLInputElement).value = product.carbonFootprint.co2Emission;
                            (form.elements[9] as HTMLInputElement).value = product.carbonFootprint.unit;
                            (form.elements[10] as HTMLInputElement).value = product.durability;
                            (form.elements[11] as HTMLInputElement).value = product.recyclingInfo;
                            (form.elements[12] as HTMLInputElement).value = product.imageUrl;
                            (form.elements[13] as HTMLInputElement).value = product.ecoCertification;
                            (form.elements[14] as HTMLInputElement).checked = product.ecoFriendly;
                        }} className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Fetch
                        </button>
                    </div>

                    <input type="text" placeholder="Name"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Category"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Brand"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="number" step={0.01} placeholder="Price"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Currency"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Product URL"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Description"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="CO2 Emission"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Unit"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Durability"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Recycling Info"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Image URL"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Eco Certification"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <label className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2"/>
                        Eco Friendly
                    </label>

                    <div className="flex justify-center">
                        <button type="submit" className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Modify</button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Delete Product */}
            <div id="delete-product" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Delete product</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleDeleteProduct(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }}>
                    <input
                        type="text"
                        placeholder="Product ID"
                        className="w-full p-2 bg-gray-800 text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 mt-2"
                    />
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-red-600 text-white rounded-lg mt-4 hover:bg-red-700 transition duration-200">Delete
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Add Discount */}
            <div id="add-discount" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Add Discount</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const discount = {
                        discountCode: (form.elements[0] as HTMLInputElement).value,
                        description: (form.elements[1] as HTMLInputElement).value,
                        validUntil: new Date((form.elements[2] as HTMLInputElement).value),
                        partnerBrand: (form.elements[3] as HTMLInputElement).value,
                        productRestrictions: (form.elements[4] as HTMLInputElement).value,
                        termsAndConditions: (form.elements[5] as HTMLInputElement).value,
                        url: (form.elements[6] as HTMLInputElement).value,
                    };
                    handleAddDiscount(discount);
                }}>
                    <input type="text" placeholder="Discount Code"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>

                    <input type="text" placeholder="Description"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="date" placeholder="Valid Until"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Partner Brand"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Product Restrictions"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="Terms and Conditions"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <input type="text" placeholder="URL"
                           className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"/>

                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                className="w-3/4 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Add
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Modify Discount */}
            <div id="modify-discount" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Modify discount</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const id = (form.elements[0] as HTMLInputElement).value;
                    const discount = {
                        discountCode: (form.elements[1] as HTMLInputElement).value,
                        description: (form.elements[2] as HTMLInputElement).value,
                        validUntil: new Date((form.elements[3] as HTMLInputElement).value),
                        partnerBrand: (form.elements[4] as HTMLInputElement).value,
                        productRestrictions: (form.elements[5] as HTMLInputElement).value,
                        termsAndConditions: (form.elements[6] as HTMLInputElement).value,
                        url: (form.elements[7] as HTMLInputElement).value,
                    };
                    handleModifyDiscount(id, discount);
                }}>
                    <input type="text" placeholder="Discount ID"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <div className="flex justify-center">
                        <button type="button" onClick={async (e) => {
                            const form = (e.target as HTMLButtonElement).closest('form') as HTMLFormElement;
                            const id = (form.elements[0] as HTMLInputElement).value;
                            const response = await fetch(`/api/v1/products/discounts/${id}`);
                            const discount = await response.json();

                            // Populate the form fields with fetched discount data
                            (form.elements[1] as HTMLInputElement).value = discount.discountCode;
                            (form.elements[2] as HTMLInputElement).value = discount.description;
                            (form.elements[3] as HTMLInputElement).value = discount.validUntil.split('T')[0];
                            (form.elements[4] as HTMLInputElement).value = discount.partnerBrand;
                            (form.elements[5] as HTMLInputElement).value = discount.productRestrictions;
                            (form.elements[6] as HTMLInputElement).value = discount.termsAndConditions;
                            (form.elements[7] as HTMLInputElement).value = discount.url;
                        }}
                                className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Fetch
                        </button>
                    </div>

                    <input type="text" placeholder="Discount Code"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Description"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="date" placeholder="Valid Until"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Partner Brand"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Product Restrictions"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="Terms and Conditions"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <input type="text" placeholder="URL"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>

                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Modify
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Delete Discount */}
            <div id="delete-discount" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Delete discount</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleDeleteDiscount(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }}>
                    <input
                        type="text"
                        placeholder="Discount ID"
                        className="w-full p-2 bg-gray-800 text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-red-600 text-white rounded-lg mt-4 hover:bg-red-700 transition duration-200">Delete
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Get Events */}
            <div id="get-events" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Get Events (in browser console)</h2>
                <div className="flex justify-center">
                    <button onClick={async () => {
                        const events = await handleGetEvents();
                        console.log(events);
                    }} className="w-3/4 h-10 bg-slate-500 rounded mt-4 hover:bg-slate-600 transition duration-200">Get
                        Events
                    </button>
                </div>
                <hr className="my-4"/>
            </div>

            {/* Update Event */}
            <div id="update-event" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Update Event</h2>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const id = (form.elements[0] as HTMLInputElement).value;
                    const event = {
                        title: (form.elements[1] as HTMLInputElement).value,
                        description: (form.elements[2] as HTMLInputElement).value,
                        category: (form.elements[3] as HTMLInputElement).value,
                        isOffline: (form.elements[4] as HTMLInputElement).checked,
                        location: {
                            address: (form.elements[5] as HTMLInputElement).value,
                            latitude: parseFloat((form.elements[6] as HTMLInputElement).value),
                            longitude: parseFloat((form.elements[7] as HTMLInputElement).value),
                        },
                        date: new Date((form.elements[8] as HTMLInputElement).value),
                        duration: (form.elements[9] as HTMLInputElement).value,
                        organizer: (form.elements[10] as HTMLInputElement).value,
                        image: (form.elements[11] as HTMLInputElement).value,
                        additionalInfo: {
                            whatToBring: (form.elements[12] as HTMLInputElement).value,
                            eventRules: (form.elements[13] as HTMLInputElement).value,
                        },
                        members: JSON.parse((form.elements[14] as HTMLTextAreaElement).value),
                        awaiting: (form.elements[15] as HTMLInputElement).checked,
                    };
                    await handleUpdateEvent(id, event);
                }}>
                    <input type="text" placeholder="Event ID"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <div className="flex justify-center">
                        <button type="button" onClick={async (e) => {
                            const form = (e.target as HTMLButtonElement).closest('form') as HTMLFormElement;
                            const id = (form.elements[0] as HTMLInputElement).value;
                            const response = await fetch(`/api/v1/events/${id}`);
                            const event = await response.json();
                            (form.elements[2] as HTMLInputElement).value = event.title;
                            (form.elements[3] as HTMLInputElement).value = event.description;
                            (form.elements[4] as HTMLInputElement).value = event.category;
                            (form.elements[5] as HTMLInputElement).checked = event.isOffline;
                            (form.elements[6] as HTMLInputElement).value = event.location.address;
                            (form.elements[7] as HTMLInputElement).value = event.location.latitude;
                            (form.elements[8] as HTMLInputElement).value = event.location.longitude;
                            (form.elements[9] as HTMLInputElement).value = event.date.split('T')[0];
                            (form.elements[10] as HTMLInputElement).value = event.duration;
                            (form.elements[11] as HTMLInputElement).value = event.organizer;
                            (form.elements[12] as HTMLInputElement).value = event.image;
                            (form.elements[13] as HTMLInputElement).value = event.additionalInfo.whatToBring;
                            (form.elements[14] as HTMLInputElement).value = event.additionalInfo.eventRules;
                            (form.elements[15] as HTMLTextAreaElement).value = JSON.stringify(event.members);
                            (form.elements[16] as HTMLInputElement).checked = event.awaiting;
                        }} className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Fetch
                        </button>
                    </div>
                    <input type="text" placeholder="Title"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Description"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Category"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <label className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2"/>
                        Is Offline
                    </label>
                    <input type="text" placeholder="Address"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="number" step={0.0000001} placeholder="Latitude"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="number" step={0.0000001} placeholder="Longitude"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="date" placeholder="Date"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Duration"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Organizer"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Image"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="What to Bring"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <input type="text" placeholder="Event Rules"
                           className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <textarea placeholder="Members JSON"
                              className="w-full p-2 bg-gray-800 text-white border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"/>
                    <label className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2"/>
                        Awaiting
                    </label>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-yellow-500 rounded mt-4 hover:bg-yellow-600 transition duration-200">Update
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Delete Event */}
            <div id="delete-event" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Reject Event</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleDeleteEvent(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }}>
                    <input
                        type="text"
                        placeholder="Event ID"
                        className="w-full p-2 bg-gray-800 text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-red-600 text-white rounded-lg mt-4 hover:bg-red-700 transition duration-200">Delete
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Approve Event */}
            <div id="approve-event" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Approve Event</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleApproveEvent(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }}>
                    <input
                        type="text"
                        placeholder="Event ID"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                    />
                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                className="w-3/4 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Approve
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Reject Event */}
            <div id="reject-event" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Reject Event</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRejectEvent(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value);
                }}>
                    <input
                        type="text"
                        placeholder="Event ID"
                        className="w-full p-2 bg-gray-800 text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-3/4 h-10 bg-red-600 text-white rounded-lg mt-4 hover:bg-red-700 transition duration-200">Reject
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>

            {/* Add Plant */}
            <div id="add-plant" className="mb-8">
                <h2 className="text-lg font-bold mb-4">Add Plant</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const plant = {
                        name: (form.elements[0] as HTMLInputElement).value,
                        type: (form.elements[1] as HTMLInputElement).value,
                        price: parseFloat((form.elements[2] as HTMLInputElement).value),
                        description: (form.elements[3] as HTMLInputElement).value,
                    };
                    handleAddPlant(plant);
                }}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Type"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                    />
                    <input
                        type="number"
                        step={0.01}
                        placeholder="Price"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="w-full p-2 bg-gray-800 text-white border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                    />
                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                className="w-3/4 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Add
                        </button>
                    </div>
                </form>
                <hr className="my-4"/>
            </div>
        </div>
    )
};

export default AdminPanel;

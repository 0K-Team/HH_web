export const handleSubmitBlogCreation = async (event: React.FormEvent) => {
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

export const handleDeleteBlog = async (id: string) => {
    await fetch(`/api/v1/admin/blog/${id}`, {
        method: 'DELETE',
    });
};

export const handleUploadToCDN = async (fileName: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch(`/api/v1/admin/CDN/${fileName}`, {
        method: 'POST',
        body: formData,
    });
};

export const handleAddTopic = async (name: string) => {
    await fetch('/api/v1/admin/topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name}),
    });
};

export const handleAddProduct = async (product: {
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

export const handleModifyProduct = async (id: string, product: {
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

export const handleDeleteProduct = async (id: string) => {
    await fetch(`/api/v1/admin/products/${id}`, {
        method: 'DELETE',
    });
};

export const handleAddDiscount = async (discount: {
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

export const handleModifyDiscount = async (id: string, discount: {
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

export const handleDeleteDiscount = async (id: string) => {
    await fetch(`/api/v1/admin/products/discount/${id}`, {
        method: 'DELETE',
    });
};

export const handleGetEvents = async () => {
    const response = await fetch('/api/v1/admin/events');
    return response.json();
};

export const handleUpdateEvent = async (id: string, event: {
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

export const handleDeleteEvent = async (id: string) => {
    await fetch(`/api/v1/admin/events/${id}`, {
        method: 'DELETE',
    });
};

export const handleApproveEvent = async (id: string) => {
    await fetch(`/api/v1/admin/events/approve/${id}`, {
        method: 'POST',
    });
};

export const handleRejectEvent = async (id: string) => {
    await fetch(`/api/v1/admin/events/approve/${id}`, {
        method: 'DELETE',
    });
};

export const handleAddPlant = async (plant: { name: string; type: string; price: number; description: string; }) => {
    await fetch('/api/v1/admin/plants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(plant),
    });
};
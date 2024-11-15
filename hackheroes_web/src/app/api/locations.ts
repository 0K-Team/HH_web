const baseURL = "/api/v1/locations";

async function fetchLocations() {
    const response = await fetch(baseURL);
    return await response.json();
};

export default fetchLocations;
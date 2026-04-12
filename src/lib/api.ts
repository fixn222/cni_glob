export const fetchCountries = async () =>{
    const res = await fetch(`http://localhost:8000/api/countries`);
     const data = await res.json();
    if (!res.ok) {
        throw new Error("failed to fetch countries");
        
    }
    // console.log(res.json())
    return data;
};

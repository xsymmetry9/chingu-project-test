import { useState } from "react";

export function useAddressForm(
  onSubmit: (addressData: { 
    street_address: string; 
    house_number: string; 
    zip_code: string; 
    lat: string; 
    lon: string;
  }) => void
) {
  const [formData, setFormData] = useState({
    address: {
      street_address: "",
      house_number: "",
      zip_code: "",
    },
  });

  const [errors, setErrors] = useState({
    street_address: false,
    house_number: false,
    zip_code: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const newErrors = {
      street_address: formData.address.street_address.trim() === "",
      house_number: formData.address.house_number.trim() === "",
      zip_code: formData.address.zip_code.trim() === "",
    };
    setErrors(newErrors);
  
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      return;
    }
  
    const addressInUpperCase = {
      house_number: formData.address.house_number.trim().toUpperCase(),
      street_address: formData.address.street_address.trim().toUpperCase(),
      zip_code: formData.address.zip_code.trim().toUpperCase(),
    };
  
    const { house_number, street_address, zip_code } = addressInUpperCase;
    const apiUrl = `https://data.lacity.org/resource/4ca8-mxuh.json?str_nm=${encodeURIComponent(
      street_address
    )}&hse_nbr=${encodeURIComponent(house_number)}&zip_cd=${encodeURIComponent(
      zip_code
    )}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok && data.length > 0) {
        const { lat, lon } = data[0]
        const addressWithCoordinates = {
          ...formData.address,
          lat,
          lon,
        };
    
        console.log("Address verified successfully:", addressWithCoordinates);
    
        onSubmit(addressWithCoordinates);
      } else {
        setErrors({
          street_address: true,
          house_number: true,
          zip_code: true,
        });
      }
    } catch (error) {
      console.error("Error verifying address:", error);
      setErrors({
        street_address: true,
        house_number: true,
        zip_code: true,
      });
    }
  };
  

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}

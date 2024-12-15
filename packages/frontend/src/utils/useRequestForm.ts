import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  latitude: string;
  longitude: string;
  preferred_date: string;
  preferred_timeslot: string;
  request_status: string;
}

export function useRequestForm(): {
  formTag: string;
  handlerTag: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  handleAddressSubmit: (addressData: { street_address: string; house_number: string; zip_code: string; lat: string; lon: string }) => void;
  handleContactSubmit: (contactData: { name: string; email: string; phone: string; }) => void;
  handleDatesSubmit: (datesData: { preferred_date: string; preferred_timeslot: string; }) => void;
  setFormData: Dispatch<SetStateAction<FormData>>;
  formData: FormData;
} {
  const [formTag, setFormTag] = useState<string>("address");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    latitude: "",
    longitude: "",
    preferred_date: "",
    preferred_timeslot: "",
    request_status: "pending",
  });

  const handlerTag = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.id;
    setFormTag(id);
  };

  const handleAddressSubmit = (addressData: { street_address: string; house_number: string; zip_code: string, lat: string; lon: string }) => {
    const fullAddress = `${addressData.house_number} ${addressData.street_address}`;
    setFormData((prevData) => ({
      ...prevData,
      address: fullAddress,
      latitude: addressData.lat,
      longitude: addressData.lon,
    }));
    setFormTag("contact");
  };

  const handleContactSubmit = (contactData: { name: string; email: string; phone: string }) => {
    setFormData((prevData) => ({
      ...prevData,
      name: contactData.name,
      email: contactData.email,
      phoneNumber: contactData.phone,
    }));
    setFormTag("dates");
  };

  const handleDatesSubmit = (datesData: { preferred_date: string; preferred_timeslot: string }) => {
    setFormData((prevData) => ({
      ...prevData,
      preferred_date: datesData.preferred_date,
      preferred_timeslot: datesData.preferred_timeslot,
    }));
    setFormTag("confirm");
  };

  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  return {
    formTag,
    handlerTag,
    handleAddressSubmit,
    handleContactSubmit,
    handleDatesSubmit,
    formData,
    setFormData,
  };
}

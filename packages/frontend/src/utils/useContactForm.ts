import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}

export interface ContactFormErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
}

export function useContactForm(onSubmit: (formData: ContactFormData) => void) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (hasErrors) {
      return;
    }

    onSubmit(formData);
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}

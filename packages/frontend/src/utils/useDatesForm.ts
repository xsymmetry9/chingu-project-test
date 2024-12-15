import { useState } from "react";

export function useDatesForm(
  onSubmit: (datesData: { preferred_date: string;
    preferred_timeslot: string }) => void
) {
  const [formData, setFormData] = useState({
    dates: {
      preferred_date: "",
      preferred_timeslot: [] as string[],
    },
  });

  const [errors, setErrors] = useState({
    dates: {
      preferred_date: false,
      preferred_timeslot: false,
    },
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setFormData((prev) => {
      const updatedData = { 
        ...prev, 
        dates: { 
          ...prev.dates,
          preferred_date: newDate
        }
      };
      return updatedData;
    });
  };

  const handleTimeChange = (time: string) => {
    setFormData((prev) => {
      const timeslot = prev.dates.preferred_timeslot;
  
      const updatedTimeslot = timeslot.includes(time)
        ? timeslot.filter((t) => t !== time)
        : [...timeslot, time]; 
  
      return {
        ...prev,
        dates: {
          ...prev.dates,
          preferred_timeslot: updatedTimeslot,
        },
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const { preferred_date, preferred_timeslot } = formData.dates;
  
    const newErrors = {
      dates: {
        preferred_date: !preferred_date,
        preferred_timeslot: preferred_timeslot.length === 0,
      },
    };
  
    setErrors(newErrors);

    if (newErrors.dates.preferred_date || newErrors.dates.preferred_timeslot) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (new Date(preferred_date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
      alert("Selected date cannot be in the past. Please choose a valid date.");
      return;
    }
  
    const datesData = {
      preferred_date,
      preferred_timeslot: preferred_timeslot.join(", "),
    };
  
    onSubmit(datesData);
  };
  
  
  

  return {
    formData,
    errors,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
  };
}

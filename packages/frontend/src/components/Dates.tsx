import SubmitButton from "./SubmitButton";
import Image from "next/image";
import { useDatesForm } from "../utils/useDatesForm";

interface DatesProps {
  onSubmit: (datesData: {
    preferred_date: string;
    preferred_timeslot: string
  }) => void;
}

export default function Dates({ onSubmit }: DatesProps) {
  const { formData, errors, handleDateChange, handleTimeChange, handleSubmit } = useDatesForm(onSubmit);
  console.log(errors);
  return (
    <div className="font-montserrat w-full space-y-6">
      <h2 className="font-semibold text-[13px]">
        Please choose your preferred consultation dates
      </h2>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex gap-2 items-center justify-between">
          <div className="relative">
            <input
              type="date"
              name="date"
              value={formData.dates.preferred_date}
              onChange={handleDateChange}
              className={`w-[198px] h-[33px] px-2 py-1 border rounded text-sm bg-transparent ${
                errors.dates.preferred_date ? "border-red-500" : "border-stroke-line"
              }`}
            />
            {errors.dates.preferred_date && (
              <p className="absolute text-red-500 text-[10px]">Please select a valid date</p>
            )}
          </div>
          
          

          <div className="flex gap-2 items-center relative">
            {["AM", "PM"].map((time) => (
              <label key={time} className="flex justify-center items-center gap-1">
                <input
                  type="checkbox"
                  name="time"
                  value={time}
                  checked={formData.dates.preferred_timeslot.includes(time)}
                  onChange={() => handleTimeChange(time)}
                  className={`w-5 h-5 border-2 cursor-pointer transition-all duration-300 ${
                    errors.dates.preferred_timeslot ? "border-red-500" : "border-stroke-line"
                  }`}
                />
                <span className="text-sm">{time}</span>
              </label>
            ))}
            {errors.dates.preferred_timeslot && (
            <p className="absolute text-red-500 text-[10px] top-7">Please select at least one time slot.</p>
            )}
          </div>
        </div>

        <div className="pb-16">
          <div className="flex gap-2 mb-1">
            <Image src="/images/Plus-Icon.svg" alt="Plus Icon" width={18} height={18} />
            <p className="font-semibold text-[12px] text-letter-grey">Added date:</p>
          </div>
          <p className="pb-1 font-montserrat text-base">
            {formData.dates.preferred_date
              ? new Date(formData.dates.preferred_date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Please select the date"}
          </p>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};
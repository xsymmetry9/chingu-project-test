export default function SubmitButton() {
    return (
      <div className="flex justify-between gap-3 w-full font-inter text-base">
        <button
          type="button"
          className="bg-white border border-stroke-line text-black rounded-[5px] w-[92px] h-[33px]"
        >
          Cancel
        </button>
  
        <button
          type="submit"
          className="text-black-text font-semibold border border-yellow-cta rounded-[5px] w-[240px] h-[33px] bg-yellow-cta"
        >
          Next
        </button>
      </div>
    );
  }
  
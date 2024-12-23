import { FormHeader } from "./FormHeader";
import { isValideFirstName } from "../helper/IsValideFirstName";
import { useState } from "react";

export const StepThree = ({
  setCurrentStep,
  onChange,
  form,
  type,
  error,
  setError,
}) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileEvent = { target: { value: file, id: event.target.id } };
    onChange(fileEvent);
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-[480px] h-[655px] bg-[#ffffff] rounded-[8px]">
      <div className=" ml-[30px] ">
        <FormHeader />
        <label htmlFor="dateOfBirth">Date of birth*</label>
        <input
          id="dateOfBirth"
          className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
          type="date"
          placeholder=" --/--/--"
          onChange={onChange}
          value={form.dateOfBirth}
          error={error.dateOfBirth}
          setError={setError.dateOfBirth}
        />

        <label htmlFor="image">Profile image*</label>
        {selectedImage ? (
          <div>
            <img src="selectedImage" />
          </div>
        ) : (
          <input
            id="image"
            className="w-[416px] h-[208px] mt-[8px] bg-[#7F7F800D] opacity-5% rounded border border-solid border-[#0CA5E9] "
            type="file"
            placeholder=" add image"
            onChange={handleFileChange}
            //   value={form.image}
            error={error.image}
            setError={setError.image}
          />
        )}
      </div>

      <div className="ml-[30px] gap-[8px] ">
        <button
          className="w-[128px] h-[44px] mt-[100px]  bg-[#ffffff] border rounded border-solid border-[#D6D8Db]"
          onClick={() => setCurrentStep(2)}
        >
          {"< Back"}
        </button>
        <button
          className="w-[280px] h-[44px] ml-[10px] mt-[100px]  bg-[#D6D8DB] rounded"
          onClick={() => setCurrentStep(4)}
        >
          {" Continue 3/3 >"}
        </button>
      </div>
    </div>
  );
};

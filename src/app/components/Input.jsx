export const Input = (label, type, placeholder, onChange, value) => {
  return (
    <>
      <div className="w-[416px] h-[44px] mt-[8px] rounded border-solid border border-[#0CA5E9]  ">
        <label htmlFor={id}>{{ label }}</label>
        <input
          id={id}
          className="w-[416px] h-[44px] mt-[8px] rounded border border-solid border-[#0CA5E9] "
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

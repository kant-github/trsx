"use client"

export const TextInput = ({
    placeholder,
    onChange,
    label
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
}) => {
    return <div className="pt-2">
        <label className="block mb-2 text-sm text-white font-medium text-gray-900">{label}</label>
        <input onChange={(e) => onChange(e.target.value)} type="text" id="first_name" className=" border border-[#B5C0D0] text-gray-900 text-sm bg-white rounded-lg  focus:outline-none block w-full p-2.5" placeholder={placeholder} />
    </div>
}
"use client"

export const TextInput = ({
    placeholder,
    setInput,
    label,
    type,
}: {
    placeholder: string;
    setInput: any;
    label: string;
    type? : string
    amount? : number
}) => {
    return <div className="md:pt-6 pt-2 w-full">
        <label className="block mb-1 pl-1 text-sm font-bold text-black">{label}</label>
        <input onChange={(e) => {setInput(e.target.value)}} type={type ? "password": "text"} id="first_name" className=" border border-[#B5C0D0] text-gray-900 md:text-sm text-xs bg-white rounded-lg py-2 focus:outline-none block w-full md:p-2.5 p-1.5" placeholder={placeholder} />
    </div>
}
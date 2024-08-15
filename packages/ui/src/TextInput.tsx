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
    return <div className="pt-6">
        <label className="block mb-1 pl-1 text-xs font-bold text-black">{label}</label>
        <input onChange={(e) => {setInput(e.target.value)}} type={type ? "password": "text"} id="first_name" className=" border border-[#B5C0D0] text-gray-900 text-sm bg-white rounded-lg  focus:outline-none block w-full p-2.5" placeholder={placeholder} />
    </div>
}
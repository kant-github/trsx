"use client"
export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string;
        value: string;
    }[];
}) => {
    return (
        <select onChange={(e) => {
            onSelect(e.target.value)
        }} className="bg-white text-gray-900 border border-[#B5C0D0]  text-sm rounded-lg focus:outline-none block w-full p-2.5">
            {options.map(option => <option value={option.key}>{option.value}</option>)}
        </select>
    )
}
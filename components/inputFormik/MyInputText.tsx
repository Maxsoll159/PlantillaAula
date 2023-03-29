import { useField } from "formik";

interface Props {
    id?: string;
    label: string;
    name: string;
    type?: 'text' | 'password';
    placeholder?: string;
}


export const MyInputText = ({ label, ...props }: Props) => {
    const [field, meta] = useField(props);
    return (
        <div className="relative">
            <input type={props.type} id={props.id || props.name} className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${ meta.touched && meta.error && "border-red-500"}`} {...field} {...props} />
            <label htmlFor={props.id || props.name} className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${ meta.touched && meta.error ? "text-red-500" : "text-gray-500"}`}>{label}</label>

            {
                meta.touched && meta.error && (
                    <span className="text-red-500 text-sm">{meta.error}</span>
                )
            }
        </div>


    );
};
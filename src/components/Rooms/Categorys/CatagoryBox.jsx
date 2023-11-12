/* eslint-disable react/prop-types */

import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CatagoryBox = ({label, icon: Icon, description, selected }) => {
    console.log(selected);


    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    params.get('category')
    console.log(params.get('category'));


    const handleParams = () => {
        let currentQueary  = {}
        if(params){
            currentQueary = queryString.parse(params.toString)
        }
        const updatedQueary = {...currentQueary, category: label }
            const url = queryString.stringifyUrl({
                url:'/', 
                query: updatedQueary
            })
            navigate(url)
    }

 
    
    return (
        <div onClick={handleParams} className={`flex flex-col items-center gap-2 border-b-2 hover:text-neutral-800 duration-200 cursor-pointer ${selected ? 'border-b-4 bg-slate-400' : ''}`}>
            <Icon size={40} ></Icon>
            <div>{label}</div>
        </div>
    );
};

export default CatagoryBox;
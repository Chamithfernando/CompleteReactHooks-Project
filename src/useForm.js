import React, {useState} from 'react';

export const useForm = (initlaValues) => {
    const [ values ,setValues] = useState(initlaValues);

    return [values, e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
            
        })
    }]
}
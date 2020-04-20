import React,{useState} from 'react';

const useInput = (initialValue) => {
const [state,setState] = useState(initialValue)
const handleClange = updatedValue => {
    setState(updatedValue)
    
    
}
return [state,setState,handleClange]
}

export default useInput;

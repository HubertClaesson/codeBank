import { useState } from "react"
   
export const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = () => {
        setValue((currentValue) => !currentValue )
    }

    return [value, toggleValue] as [ boolean, () => void ];
}
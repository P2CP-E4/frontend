import { useState } from "react";

export function usePopUp() {
    const [trigger, setTrigger] = useState(false);

    function openPopUp() {
        setTrigger(true);
    }

    function closePopUp() {
        setTrigger(false);
    }

    return [
        trigger,
        openPopUp,
        closePopUp,
    ]
}
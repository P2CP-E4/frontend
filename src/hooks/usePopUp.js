import { useState } from "react";

export function usePopUp(initialTrigger) {
    const [trigger, setTrigger] = useState(initialTrigger);

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
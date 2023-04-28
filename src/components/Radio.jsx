import React, { useRef } from "react";

const Radio = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = useRef();
        const resolvedRef = ref || defaultRef;

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <input type="radio" ref={resolvedRef} {...rest} />
            </>
        );
    }
);

export default Radio;
import React from "react";
import { Button } from "./styles";

function customButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}

export default customButton
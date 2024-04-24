import React from "react";
import { Section as SectionCad } from "./styles";

function Section({ children, isBlur }) {  
    return <SectionCad isBlur={isBlur}> {children} </SectionCad>
}

export default Section
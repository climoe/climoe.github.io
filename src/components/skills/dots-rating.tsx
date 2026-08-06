import React from "react";
import { CircleWavyIcon } from "@phosphor-icons/react";
import CssVar from '@thadathilsinan/cssvar';

export const DotsRating = ({range}) => {
    
    const pinkColor = new CssVar().get("--cv-color-pink")
    const greyColor = new CssVar().get("--cv-color-grey");
    return (
        <div>
            {[...Array(range)].map((item, index) => {
                return <CircleWavyIcon size={"1rem"} color={pinkColor} weight="duotone" key= {index}/>}
            )}
            {[...Array(5 - range)].map((item, index) => {
                return <CircleWavyIcon size={"1rem"} color={greyColor} weight="duotone" key= {5-index}/>}
            )}
        </div>
    )
}
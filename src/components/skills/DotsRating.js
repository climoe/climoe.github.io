import React from "react";
import { CircleWavy } from "phosphor-react";

import Colors from "../common/Colors";

export const DotsRating = ({range}) => {
    
    const pinkColor = `${Colors.PINK}`;
    const greyColor = `${Colors.GREY}`;
    return (
        <div>
            {[...Array(range)].map(() => {
                return <CircleWavy size={"1rem"} color={pinkColor} weight="duotone"/>}
            )}
            {[...Array(5 - range)].map(() => {
                return <CircleWavy size={"1rem"} color={greyColor} weight="duotone"/>}
            )}
        </div>
    )
}
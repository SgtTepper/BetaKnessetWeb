import VotesMobile from "./indexMobile";
import VotesRegular from "./indexRegular";
import React from "react";

export default function Votes() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

        return <VotesMobile />
    }
    else{
        return <VotesRegular/>
    }
}
import React, { useState } from "react";
import { useMadLibUpdate, useChangeSubmitted } from "./Hooks/hooks";
import MadLib from "./MadLib";
import MadLibForm from "./MadLibForm";
import "./MadLibArea.css";

/** The area used to display either the form or the MadLib,
 *  depending on the value of "isSubmitted".
 */
const MadLibArea = () => {
    const [madLib, addMadLib] = useMadLibUpdate();
    const [isSubmitted, updateSubmitted] = useChangeSubmitted();

    const { noun, nounTwo, adjective, color } = madLib;
    const message = `There was a ${color} ${noun} who loved a ${adjective} ${nounTwo}.`;

    return ( 
        !isSubmitted ?
        <div className="MadLibArea">
            <MadLibForm addMadLib={addMadLib} updateSubmitted={updateSubmitted} />
        </div>
        :
        <div className="MadLibArea" style={{width: "100%"}}>
            <MadLib message={message} />
            <button className="MadLibArea-MadLib" onClick={updateSubmitted}>Reset</button>
        </div>
    );
};

export default MadLibArea;
import React, { useState } from "react";
import "./MadLib.css";

/** A simple component used to display the Madlib
 *  generated from the form.
 */
const MadLib = ({ message }) => {
    return (
        <p className="MadLib">{message}</p>
    );
};

export default MadLib;
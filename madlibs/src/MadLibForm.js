import React, { useState } from "react";
import { useFormUpdate } from "./Hooks/hooks";
import "./MadLibForm.css";

/** The form used to send the data to the MadLibArea
 *  component.
 */
const MadLibForm = ({ addMadLib, updateSubmitted }) => {
    const [formData, updateForm, handleSubmit] = useFormUpdate();

    return (
        <form className="MadLibForm" onSubmit={(evt) => handleSubmit(addMadLib, updateSubmitted, evt)}>
            <label htmlFor="noun">Enter a Noun</label>
            <input
                id="noun"
                name="noun"
                type="text"
                value={formData.noun}
                onChange={updateForm}
                placeholder="i.e. bike, football, etc."
                required
            />
            <label htmlFor="nounTwo">Enter Another Noun</label>
            <input
                id="nounTwo"
                name="nounTwo"
                type="text"
                value={formData.nounTwo}
                onChange={updateForm}
                placeholder="i.e. bike, football, etc."
                required
            />
            <label htmlFor="adjective">Enter an Adjective</label>
            <input
                id="adjective"
                name="adjective"
                type="text"
                value={formData.adjective}
                onChange={updateForm}
                placeholder="i.e. funny, happy, ugly, etc."
                required
            />
            <label htmlFor="color">Enter a Color</label>
            <input
                id="color"
                name="color"
                type="text"
                value={formData.color}
                onChange={updateForm}
                placeholder="i.e. blue, yellow, etc."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MadLibForm;
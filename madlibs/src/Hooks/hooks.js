import React, { useState } from "react";

/** The default initial MadLibForm and MadLibArea state. */
const initialState = {
    noun: "",
    nounTwo: "",
    adjective: "",
    color: ""
};

/** Form methods for updating state onChange for each input,
 * and the handleSubmit for when the form is submitted.
 * 
 * Parameters for useFormUpdate:
 *      - startingState: the initial state for the form
 * Parameters for updateForm:
 *      - evt: an event object, used for the onChange handler for each input
 * Parameters for handleSubmit:
 *      - addMadlib: a function passed as a prop to MadLibForm, used
 *                   to update the state of its parent component, MadLibArea
 *      - updateSubmitted: a function passed as a prop to MadLibForm, used
 *                         to toggle the "isSubmitted" state of MadLibForm to
 *                         true and false.
 *      - evt: an event object, used for the onSubmit handler for the form
 * 
 * Returns:
 *      - formData: the state of the form's inputs
 *      - updateForm: the method passed to the onChange handler of the inputs
 *      - handleSubmit: the method passed to the onSubmit handler of the form itself
 */
const useFormUpdate = (startingState = initialState) => {
    const [formData, setFormData] = useState(startingState);
    const updateForm = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    const resetForm = () => setFormData(formData => initialState);
    const handleSubmit = (addMadLib, updateSubmitted, evt) => {
        evt.preventDefault();
        addMadLib(formData);
        updateSubmitted();
        resetForm();
    };

    return [formData, updateForm, handleSubmit];
};

/** Hooks created to set and update the state in MadLibArea.
 * 
 * Parameters: null
 * 
 * Returns:
 *      - madLib: the madLib data in state for MadLibArea.
 *                See "initialState" for a basic example.
 *      - addMadLib: a method passed to the MadLibForm used
 *                   to update the state of MadLibArea.
 */
const useMadLibUpdate = () => {
    const [madLib, setMadLib] = useState(initialState);
    const addMadLib = (newMadLib) => {
        setMadLib(madLib => newMadLib);
    };
    return [madLib, addMadLib];
};

/** A hook used to toggle the "isSubmitted" state of MadLibArea,
 *  which is used to decide whether the form is shown, or an actual
 *  MadLib component instead.
 * 
 *  Parameters: null
 * 
 *  Returns:
 *      - isSubmitted: the piece of state used in MadLibArea
 *                     to toggle back and forth between the form
 *                     and a MadLib component.
 *      - updateSubmitted: a method passed to the form to toggle
 *                         the "isSubmitted" state of MadLibArea
 *                         when the form is submitted.
 */
const useChangeSubmitted = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const updateSubmitted = () => {
        setIsSubmitted(isSubmitted => !isSubmitted);
    };
    return [isSubmitted, updateSubmitted];
};

export {
    useFormUpdate,
    useMadLibUpdate,
    useChangeSubmitted
};
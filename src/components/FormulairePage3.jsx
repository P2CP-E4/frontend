const FormulairePage3 = ({ formik, handleSuivantEvent, handleRetourEvent }) => {
    return (
        <>
            step Three
            <button type="button" onClick={handleSuivantEvent}>Suivant</button>
            <button type="button" onClick={handleRetourEvent}>Retour</button>
        </>);
}

export default FormulairePage3;
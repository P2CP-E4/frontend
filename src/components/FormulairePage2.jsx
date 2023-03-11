const FormulairePage2 = ({ formik, handleSuivantEvent, handleRetourEvent }) => {
    return (
        <>
            step two
            <button type="button" onClick={handleSuivantEvent}>Suivant</button>
            <button type="button" onClick={handleRetourEvent}>Retour</button>
        </>
    );
}

export default FormulairePage2;
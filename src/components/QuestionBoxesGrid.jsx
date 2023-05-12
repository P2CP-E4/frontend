import React from 'react';
import QuestionBox from './QuestionBox';

const QuestionBoxGrid = () => {
    return (
        <div className='flex items-start justify-center gap-10'>
            <div className='flex flex-col gap-8'>
                <QuestionBox question="Comment inscrire un doctorant ?" answer="1. Dans la page d’accueil, cliquez sur la carte 'Inscription' pour accéder au formulaire d'inscription.           
2. Remplissez tous les champs obligatoires et assurez-vous de leur exactitude.  3. Cliquez sur le bouton 'Confirmer' pour soumettre le formulaire. Vous recevrez un message de confirmation en cas de succès." />
                <QuestionBox question="Comment modifier le statut des doctorants ?" answer="1. Dans la page d'accueil, cliquez sur la carte 'Modification de thèse' pour accéder à la page de modification.
2. Recherchez le nom du doctorant et sélectionnez-le.
3. Entrez le nouvel intitulé de la thèse.
4. Remplissez les informations du PV et cliquez sur 'Confirmer la modification'. Vous recevrez un message de succès." />
                <QuestionBox question="Comment ajouter un séminaire a un doctorant?" answer="1. Dans la page d’accueil, cliquez sur la carte 'Ajout d’un séminaire' pour accéder à la page d’ajout.
2. Recherchez le nom du doctorant et sélectionnez-le.
3. Remplissez les informations du séminaire cliquez sur 'Confirmer'. Vous recevrez un message de succès." />
                <QuestionBox question="Comment importer un fichier Excel ?" answer="1. Dans la page d'accueil, cliquez sur la carte 'Importer' pour accéder à la page d'importation.
2. Cliquez sur la zone d'importation pour sélectionner le fichier Excel à importer depuis votre ordinateur.
3. Cliquez sur le bouton 'Importer' pour lancer le processus d'importation." />
            </div>

            <div className='flex flex-col gap-8'>
                <QuestionBox question="Comment réinscrire un doctorant ?" answer="1. Dans la page d'accueil, cliquez sur la carte 'Réinscription' pour accéder à la page de réinscription.
2. Sélectionnez les doctorants à réinscrire dans le tableau ou utilisez les filtres de recherche.
3. Cliquez sur le bouton 'Réinscrire' pour confirmer la réinscription. Vous recevrez un message de confirmation.
4. Remplissez les informations requises dans le pop-up pour finaliser la réinscription." />
                <QuestionBox question="Comment modifier le titre de la thèse d'un doctorant ?" answer="1. Dans la page d'accueil, cliquez sur la carte 'Modification de thèse' pour accéder à la page de modification.
2. Recherchez le nom du doctorant et sélectionnez-le.
3. Entrez le nouveau titre de la thèse.
4. Remplissez les informations du PV et cliquez sur 'Confirmer la modification'. Vous recevrez un message de succès." />
                <QuestionBox question="Comment ajouter une observation a un doctorant?" answer="1. Dans la page d’accueil, cliquez sur la carte 'Ajout d’une observation' pour accéder à la page d’ajout.
2. Recherchez le nom du doctorant et sélectionnez-le.
3. Remplissez le champs d’observation puis cliquez sur 'Confirmer'. Vous recevrez un message de succès." />
                <QuestionBox question="Comment exporter le tableau en fichier Excel?" answer="1. Dans de la page d'accueil, accédez à la page d'exportation en cliquant sur la carte 'Exporter'.
2. Sélectionnez d'abord les champs que vous souhaitez exporter, puis sélectionnez dans le tableau les doctorants à exporter ou utilisez les filtres et recherches pour les trouver.
3. Cliquez sur le bouton 'Exporter' pour télécharger le fichier Excel." />
            </div>
            <div className='flex flex-col gap-8'>
                <QuestionBox question="Comment réinscrire un doctorant (réinscription différée) ?" answer="1. Dans la page d'accueil, cliquez sur la carte 'Réinscription différée' pour accéder à la page correspondante.
 2. Sélectionnez les doctorants à réinscrire dans le tableau ou utilisez les filtres de recherche.
3. Cliquez sur le bouton 'Réinscrire' pour confirmer la réinscription. Vous recevrez un message de confirmation.
4. Remplissez les informations requises dans le pop-up pour finaliser la réinscription." />
                <QuestionBox question="Comment modifier les informations personnelles d'un doctorant ?" answer="1. Dans la page d’accueil, cliquez sur la carte 'Modification des Informations personnelles' pour accéder à la page de modification.
1. Recherchez le nom du doctorant et sélectionnez-le.
2. Modifiez les informations personnelles souhaitées.
3. Remplissez les informations du PV et cliquez sur 'Confirmer la modification'. Vous recevrez un message de succès." />
                <QuestionBox question="Comment ajouter la date d’enregistrement du fichier central a un doctorant ? " answer="1. Dans la page d’accueil, cliquez sur la carte 'Ajout de la date d’enregistrement du fichier central' pour accéder à la page d’ajout.
2. Recherchez le nom du doctorant et sélectionnez-le.
3. Remplissez le champs de la date puis cliquez sur 'Confirmer'. Vous recevrez un message de succès." />
                <QuestionBox question="question 12" answer="" />

            </div>

        </div>
    )
}

export default QuestionBoxGrid;

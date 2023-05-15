import React from 'react';
import QuestionBox from './QuestionBox';

const QuestionBoxGrid = () => {
    return (
        <div className='flex flex-col items-start justify-center gap-5'>
            <span className='ml-10 -mb-5 text-lg font-medium  text-[#00337C]'> Inscriptions </span>
            <div className='flex gap-6'>
                <QuestionBox question="Comment inscrire un doctorant?" answer={<ol >
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d’accueil, cliquez sur la carte "Inscriptions". Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Inscription" est activé en vert , pour accéder au formulaire d'inscription.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Remplissez tous les champs obligatoires.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Cliquez sur le bouton "Confirmer" pour soumettre le formulaire. Vous recevrez un message de confirmation en cas de succès.</li>
                </ol>} />
                <QuestionBox question="Comment réinscrire un doctorant?" answer={<ol>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "inscriptions".</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span> Cliquez sur “Réinscription” en haut dans les 3 boutons. Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "réinscription" est activé en vert.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Sélectionnez les doctorants à réinscrire dans le tableau ou utilisez les filtres de recherche.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Cliquez sur le bouton "Réinscrire" pour confirmer la réinscription. Vous recevrez un message de confirmation.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">5.</span> Remplissez les informations requises dans le pop-up pour finaliser la réinscription.</li>
                </ol>}
                />

                <QuestionBox question="Comment réinscrire un doctorant (réinscription différée)?" answer={<ol>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Inscriptions".</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Cliquez sur “Réinscription différée” en haut dans les 3 bouttons, assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Réinscription différée" est activé en vert.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Sélectionnez les doctorants à réinscrire dans le tableau ou utilisez les filtres de recherche.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Cliquez sur le bouton "Réinscrire" pour confirmer la réinscription. Vous recevrez un message de confirmation.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">5.</span> Remplissez les informations requises dans le pop-up pour finaliser la réinscription.</li>
                </ol>
                } />
            </div>



            <span className='ml-10 mt-10  -mb-5 text-lg font-medium  text-[#00337C]'> Modifications </span>
            <div className='flex gap-6'>

                <QuestionBox question="Comment modifier le titre de la thèse d'un doctorant?" answer={<ol>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Modifier" .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Cliquez sur “Modifier le titre de these” en haut dans les 3 bouttons , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Modifier le titre de these" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Recherchez le nom du doctorant et sélectionnez-le.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Entrez le nouveau titre de la thèse.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">5.</span> Remplissez les informations du PV et cliquez sur "Confirmer la modification". Vous recevrez un message de succès.</li>
                </ol>} />

                <QuestionBox question="Comment modifier le statut des doctorants?" answer={<ol>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Modifier" , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Modification de Status" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Filtrer ou rechercher et sélectionnez les doctorants dont vous souhaitez modifier le statut.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Choisissez le nouveau statut et cliquez sur "Confirmer".</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Remplissez toutes les informations nécessaires dans le pop-up de création du procès-verbal pour finaliser la modification du statut ,  Vous recevrez un message de confirmation de réussite.</li>
                </ol>} />

                <QuestionBox question="Comment modifier les informations personnelles d'un doctorant?" answer={<ol>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Modifier" .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Cliquez sur “Modifier les informations personnelles” en haut dans les 3 bouttons , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Modifier les informations personnelles" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Recherchez le nom du doctorant et sélectionnez-le.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Modifiez les informations personnelles souhaitées.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">5.</span> Remplissez les informations du PV et cliquez sur "Confirmer la modification". Vous recevrez un message de succès.</li></ol>} />
            </div>


            <span className='ml-10 mt-10  -mb-5 text-lg font-medium  text-[#00337C]'> Ajouts </span>
            <div className='flex gap-6'>

                <QuestionBox question="Comment ajouter la date d’enregistrement du fichier central a un doctorant? " answer={<ol><li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Ajouter" .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span> Cliquez sur “Ajout de la date d’enregistrement du fichier central” en haut dans les 3 bouttons , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Ajout de la date d’enregistrement du fichier central" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Recherchez le nom du doctorant et sélectionnez-le.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Remplissez le champs de la date puis cliquez sur "Confirmer". Vous recevrez un message de succès.</li>
                </ol>} />

                <QuestionBox question="Comment ajouter un séminaire a un doctorant?" answer={<ol><li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Ajouter" , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Ajout d’un séminaire" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span> Recherchez le nom du doctorant et sélectionnez-le.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Remplissez les informations du séminaire cliquez sur "Confirmer". Vous recevrez un message de succès.</li>
                </ol>} />

                <QuestionBox question="Comment ajouter une observation a un doctorant?" answer={<ol><li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d'accueil, cliquez sur la carte "Ajouter" .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span> Cliquez sur “Ajout d’une observation” en haut dans les 3 bouttons , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Ajout d’une observation" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Recherchez le nom du doctorant et sélectionnez-le.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Remplissez le champs d’observation puis cliquez sur "Confirmer". Vous recevrez un message de succès.</li>
                </ol>} />

            </div>
            <span className='ml-10  mt-10  -mb-5 text-lg font-medium  text-[#00337C]'> Importation et exportation des fichiers </span>
            <div className='flex gap-6'>
                <QuestionBox question="Comment importer un fichier Excel?" answer={<ol><li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span>  Dans la page d'accueil, cliquez sur la carte "Importer et Exporter" , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Importer" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span>  Cliquez sur la zone d'importation pour sélectionner le fichier Excel à importer depuis votre ordinateur.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span>  Cliquez sur le bouton "Importer" pour lancer le processus d'importation.</li></ol>} />

                <QuestionBox question="Comment exporter le tableau en fichier Excel?" answer={<ol> <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span>  Dans la page d'accueil, cliquez sur la carte "Importer et Exporter" .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">2.</span>  Cliquez sur “Exporter” en haut dans les 3 bouttons , Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton "Exporter" est activé en vert .</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span>  Sélectionnez d'abord les champs que vous souhaitez exporter, puis sélectionnez dans le tableau les doctorants à exporter ou utilisez les filtres et recherches pour les trouver.</li>
                    <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span>  Cliquez sur le bouton "Exporter" pour télécharger le fichier Excel.</li></ol>} />

            </div>

            <span className='ml-10  mt-10  -mb-5 text-lg font-medium  text-[#00337C]'> Statistiques </span>
            <div className='flex gap-6'>

                <QuestionBox question="Comment accéder au tableau des doctorants?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d’accueil cliquez sur la carte ‘Statistiques’.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton 'tableau des doctorants' est activé en vert. Vous pouvez aussi y accéder directement a partir de la barre de navigation en cliqueant sur 'Doctorants'.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span>Le tableau apparaîtra et vous pourrez chercher, filtrer et voir les détails des doctorants et directeurs.</li>

                    </ol>} />

                <QuestionBox question="Comment consulter toutes les informations des doctorants ?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Cliquez sur "Doctorants" dans la barre de navigation.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Dans le tableau, utilisez la fonction de recherche ou de filtrage pour trouver le doctorant dont vous voulez consulter les informations.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span>Cliquez sur l'icône "i" pour afficher les informations détaillées du doctorant qui s'afficheront , en pop-up.</li>

                    </ol>} />

                <QuestionBox question="Comment consulter toutes les informations des directeurs ?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Cliquez sur "Doctorants" dans la barre de navigation. </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Dans le tableau, utilisez la fonction de recherche ou de filtrage pour trouver le directeur dont vous voulez consulter les informations.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Cliquez sur l'icône "i" pour afficher les informations détaillées du directeur qui s'afficheront , en pop-up.</li>

                    </ol>} />
            </div>
            <div className='flex gap-6'>
                <QuestionBox question="Comment voir plus de détails sur les séminaires?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Cliquez sur "Doctorants" dans la barre de navigation.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span>Dans le tableau, utilisez la fonction de recherche ou de filtrage pour trouver le doctorant dont vous voulez consulter les informations. </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Cliquez sur l'icône "i" pour afficher les informations détaillées du doctorant qui s'afficheront , en pop-up.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">4.</span> Parmi ces informations, vous trouverez la liste des séminaires. En cliquant sur l'icône "i" devant chaque titre, un pop-up s'affiche avec les informations détaillées.</li>
                    </ol>} />

                <QuestionBox question="Comment accéder aux statistiques numériques et graphiques?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d’accueil cliquez sur la carte ‘Statistiquea’.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton 'Statistiques prédéfinies' est activé en vert. Vous pouvez aussi y accéder directement a partir de la barre de navigation en cliqueant sur 'Statistiques'.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> L’ensemble des statistiques génerales sont affichées dans cette section.</li>

                    </ol>} />


                <QuestionBox question="Comment générer des statistiques?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d’accueil cliquez sur la carte ‘Statistiques’.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton 'Générer des statistiques' est activé en vert.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3. Pour générer des statistiques numériques:</span>  Il suffit de sélectionner les critères que vous voulez dans la première carte puis cliquer sur générer, et le résultat en nombre sera retourné.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">4. Pour générer des statistiques graphiques:</span>  De la deuxième carte, vous sélectionnez deux critères souhaités, et précisez la période voulue, puis cliquer sur générer. vous verrez le résultat s’afficher en diagramme en battons.</li>

                    </ol>} />
            </div>

            <div className='flex gap-6'>

                <QuestionBox question="Comment accéder au tableau des PVs?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la page d’accueil cliquez sur la carte ‘Statistiques’.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Assurez-vous d'être sur la page souhaitée en vérifiant que le bouton 'tableau des PVs' est activé en vert. Vous pouvez aussi y accéder directement a partir de la barre de navigation en cliqueant sur 'PV'.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">3.</span> Le tableau apparaîtra et vous pourrez chercher, filtrer et acceder au liens de PVs.</li>

                    </ol>} />

                <QuestionBox question="Comment ajouter un PV?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span>  Dans la page  du ‘tableau des PVs’, cliquer sur le bouton ‘Ajouter PV’. </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Remplissez les informations du PV dans la carte qui apparait.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">3.</span> Confirmer l’ajout. </li>
                    </ol>} />

                <QuestionBox question="Comment mettre a jour un PV?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span>  Dans la page  du ‘tableau des PVs’, cliquer sur le bouton ‘’. </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Remplissez les informations du PV dans la carte qui apparait.</li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">3.</span> Confirmer la modification. </li>
                    </ol>} />


            </div>
            <span className='ml-10  mt-10  -mb-5 text-lg font-medium  text-[#00337C]'> Profile </span>
            <div className='flex gap-6'>
                <QuestionBox question="Comment consulter votre profile?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span>  Dans la barre de navigation, cliquez sur votre nom. </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Vos informations personnelles telles que votre email et votre nom complet apparaîtront.</li>
                    </ol>} />

                <QuestionBox question="Comment se déconnecter?" answer=
                    {<ol>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker">1.</span> Dans la barre de navigation, cliquez sur votre nom.  </li>
                        <li className='py-1'><span class="font-bold text-[17px] list-marker ">2.</span> Une fenêtre apparaîtra, cliquez sur "Se déconnecter" en bas de la fenêtre.</li>
                    </ol>} />

            </div>

        </div>
    )
}

export default QuestionBoxGrid;
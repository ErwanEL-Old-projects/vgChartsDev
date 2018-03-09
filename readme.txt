*********************************************************************
                                NPM
*********************************************************************
- installer tout les modules nécessaires
    Ne pas oublier:
        Pour les modules ne servant pas uniquement pour le dev comme par exemple bootstrap, installer le module en dependencie:
            - $ --save
        Pour tout les autres modules:
            - $ --save-dev

    - $ npm install --save-dev gulp gulp-imagemin gulp-rename gulp-uglify-es gulp-sass gulp-concat pump browser-sync

si besoin de bootstrap:
    - $ npm install --save bootstrap


- modules utiles:
    bootstrap
    Dev:
    gulp
    gulp-concat 
    gulp-sass
    sass
    browser-sync
    gulp-imagemin 
    gulp-uglify
    gulp-uglify-es
    pump
    uglify-es


*********************************************************************
                                GULP
*********************************************************************
Ne pas oublier:
    - require tout les modules
    - dans le cas d'un concat vérifier l'ordre de concat des fichiers


*********************************************************************
                                PREREQUIS
*********************************************************************

ATTENTION:
    HTML:
        - linker le fichier css/styles.css
        - linker le fichier js/app.min.js
        Ne pas oublier:
            - le fichier css est originalement un fichier scss qui a été transformé par gulp
            - le fichier js est un concat de tout les fichiers js de src donc ATTENTION A L'ORDRE et ne pas oublier que le fichier est après transformation de gulp un fichier minifié donc app.min

        - ajouter si besoins les js bootstrap (dans cet ordre):
            "../../node_modules/popper.js/dist/umd/popper.min.js"
            "../../node_modules/jquery/dist/jquery.min.js"
            "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
    
    SCSS:
        - linker bootstrap functions en premier puis:
        - linker bootstrap variables
        exemples pour le fichier prototype changer le path si besoin
            @import "../../node_modules/bootstrap/scss/_functions";
            @import "../../node_modules/bootstrap/scss/_variables"; 
        - pour customiser les classes couleurs de bootstrap:
            - remaper les couleurs de $theme-colors
        - autrement: utiliser des classes avec des noms persos (non primary ou secondary)
        - NE PAS ASSIGNER DE COULEUR AVEC OPACITE INFERIEUR A 1 DANS LE THEMING BOOSTRAP
        - terminer en important le sass bootstrap
            @import"../../node_modules/bootstrap/scss/bootstrap";
        - si tout est appliqué le scss est transformé en css dans dist et le fichier css est linké dans le html

    JS:
        Ne pas oublier:
            - tout les fichiers js sont concat donc bien positionner le fichier app.js en dernier si besoin numeroter les fichiers
            - app.js après transformation de gulp devient app.min.js 
            donc bien linker js/app.min.js 


*********************************************************************
                                DEV
*********************************************************************
- Lancer gulp pour démarrer l'environnement de developpement
- Lancer gulp distrib pour creer une version distribution

Ne pas oublier:
    - si browserSync init ne foncionne pas:
        - lancer gulp watch puis dans une autre console:
            - aller dans le dist du dossier puis lancer:
            $ browser-sync start --server --files "css/*.css, js/*.js, *.html"



*********************************************************************
                                DISTRIBUTION
*********************************************************************   
    SI tout est appliqué le dossier dist comprend la distribution finale du projet, nul besoin de la modifier le fichier est pret à etre hebergé
function taskManager() {
    return {
        tasks: [
            { 
                id: 1, 
                title: "Apprendre Alpine.js", 
                description: "Suivre le tutoriel complet", 
                status: "En cours" 
            },
            { 
                id: 2, 
                title: "Créer le projet", 
                description: "Développer le gestionnaire de tâches", 
                status: "A faire" 
            },
            { 
                id: 3, 
                title: "Lire la documentation", 
                description: "Documentation Alpine.js officielle", 
                status: "Terminé" 
            }
        ],

        init() {
            console.log('Gestionnaire de tâches initialisé');
        }
    }
}
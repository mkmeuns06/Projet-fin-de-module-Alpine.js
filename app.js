function taskManager() {
    return {
        tasks: [],
        newTask: {
            title: '',
            description: ''
        },
        editingTask: null,
        searchQuery: '',
        filterStatus: '',

        init() {
            
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
            } else {

                this.tasks = [
                    { 
                        id: Date.now(), 
                        title: "Apprendre Alpine.js", 
                        description: "Suivre le tutoriel complet", 
                        status: "En cours" 
                    },
                    { 
                        id: Date.now() + 1, 
                        title: "Créer le projet", 
                        description: "Développer le gestionnaire de tâches", 
                        status: "A faire" 
                    }
                ];
                this.saveTasks();
            }
        },

        addTask() {
            if (this.newTask.title.trim() === '') return;

            const task = {
                id: Date.now(),
                title: this.newTask.title,
                description: this.newTask.description,
                status: 'A faire'
            };

            this.tasks.push(task);
            this.saveTasks();

            this.newTask.title = '';
            this.newTask.description = '';
        },

        deleteTask(id) {
            if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
                this.tasks = this.tasks.filter(task => task.id !== id);
                this.saveTasks();
            }
        },

        editTask(task) {
            this.editingTask = { ...task };
        },

        saveEdit() {
            const index = this.tasks.findIndex(t => t.id === this.editingTask.id);
            if (index !== -1) {
                this.tasks[index] = { ...this.editingTask };
                this.saveTasks();
            }
            this.cancelEdit();
        },

        cancelEdit() {
            this.editingTask = null;
        },

        get filteredTasks() {
            return this.tasks.filter(task => {
                const matchesSearch = task.title.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesFilter = this.filterStatus === '' || task.status === this.filterStatus;
                return matchesSearch && matchesFilter;
            });
        },

        countByStatus(status) {
            return this.tasks.filter(task => task.status === status).length;
        },

        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
}
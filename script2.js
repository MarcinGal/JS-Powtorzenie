/* function Task(text){

this.text = text
this.isCompleted = false

}

class ToDo {
    constructor(){
        this.tasks = [
            new Task('Wynieś śmieci'),
            new Task('Zmyj gary'),
        ]
    }

    addTask(text){
        this.tasks.push(new Task(text))
    }

    toggleTask(i){
        this.tasks[i].toggleTask()
    }

}


const ToDo1 = new ToDo
*/


class MakeNewEvent {
    constructor(){
        this.events = [
            new Event('Wyjazd w góry')
            new Event('Kolacja z rodzicami')
        ]
    }
    addEvent(text){
        this events.push(new Event(text))
    }
}
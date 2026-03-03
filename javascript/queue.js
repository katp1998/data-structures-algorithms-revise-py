
function Queue () {
    collection = []
    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (element) => {
        collection.push(element)
    }

    this.dequeue = () => {
        return collection.shift();
    }

    this.front = () => {
        return collection[0];
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return collection.length === 0;
    }
}


function PriorityQueue() {
    let collection = [];
    this.printCollection = () => {
        console.log(collection);
    }

    this.isEmpty = () => {
        return collection.length === 0;
    }

    this.enqueue = (element) => {
        if (this.isEmpty()){
            collection.push(element)
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++){
                if(element[i] < collection[i][1]){ //checks the priority of the items
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }

    this.dequeue = () => {
        let value = collection.shift();
        return value[0];
    }
}


let pq = new PriorityQueue();
pq.enqueue(['kethmie perera', 2]);
pq.enqueue(['Dhammika perera', 1]);
pq.enqueue(['Athula perera', 0]);
pq.enqueue(['Dilakshi perera', 3]);
pq.printCollection();





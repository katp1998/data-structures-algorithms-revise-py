//basic implementation of sets as it is not properly implemented through JS:
//ES6 has value, add, delete and size

mySet = () => {
    var collection = [];

    this.has = (element) => {
        return (collection.indexOf(element) !==-1);
    }

    this.values = () => {
        return collection;
    }

    this.add = (element) => {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.delete = (element) => {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    //finding the union of two sets
    this.union = (otherSet) => {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element)
        });

        secondSet.forEach(element => {
            unionSet.add(element)
        });

        return unionSet;
    }

    //this will show the intersection of the two sets -- if the same element is common in both the sets
    this.intersection = (otherSet) => {
        let intersectionSet = new mySet();
        let set1 = this.values();
        set1.forEach(element => {
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }

    //this shows the difference between the two sets
    this.difference = (otherSet) => {
        let differenceSet = new mySet();
        let set1 = this.values();
        set1.forEach((element) => {
            if(!otherSet.has(element)){
                difference.add(element);
            }
        })
        return differenceSet;
    }

    //this will get if there is a subset on the otherset
    this.subset = (otherSet) => {
        let set1 = this.values();
        return set1.every((value) => {
            return otherSet.has(value);
        })
    }

}
/* eslint-disable max-classes-per-file */
// new Node class 
const Node = class{
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

const LinkedList = class{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){// inserts new node at the end oƒ list
        if(this.head === null){
            this.prepend(value);
        }else{
            const newNode = new Node(value);
            let ath = this.head;
            while(ath.nextNode !== null){
                ath = ath.nextNode;
            }
            ath.nextNode = newNode;
            this.size+=1;
        }

    }

    prepend(value){// inserts new node at the beginning of list
        this.head = new Node(value, this.head);
        this.size+=1;
    }

    tail(){// gives the last node of list
        let sth = this.head;
        while(sth.nextNode !== null){
            sth = sth.nextNode;
        }
        return sth;
    }

    at(index){// gives the node requested
        if(index <0 || index > this.size-1) return false;
        let sth = this.head;
        for(let i = 0;i<index-1;i+=1){
            sth = sth.nextNode;
        }
        return sth;
    }

    pop(){// removes the node at the end
        let lastNode = this.head;
        for(let i = 0;i < this.size-2;i+=1){
            lastNode = lastNode.nextNode
        }
        lastNode.nextNode = null;
        this.size-=1;
    }

    contains(value){// checks if value exist in list ot not
        let findvalue = this.head;
        for(let i = 0; i < this.size;i+=1){
            if(findvalue.value === value){
                return true;
            }
            findvalue = findvalue.nextNode;
        }
        return false
    }

    find(value){// gives the index of user requested value
        let findIndex = this.head;
        for(let i = 0; i < this.size;i+=1){
            if(findIndex.value === value){
                return this.size-2;
            }
            findIndex = findIndex.nextNode;
        }
        return false;
    }

    toString(){// display structure of all list values
        let string = "head";
        let joinValue = this.head;
        for(let i = 0; i < this.size;i+=1){
            string+=`( ${joinValue.value} ) --> `;
            joinValue = joinValue.nextNode;
        }
        string += "null";
        console.log(string)
    }

    insertAt(value, index){// inserts node at user requested index
        if(index <0 || index > this.size-1) return false;
        if(index === 0){
            this.prepend();
            return true;
        }
        if(index === this.size-1){
            this.append();
            return true;
        }
        let newInsertion = this.head;
        let fixInsertion = newInsertion.nextNode;
        let i = 1;
        while(fixInsertion !== null){
            if(index === i){
                newInsertion.nextNode = new Node(value, fixInsertion);
            }
            i+=1;
            newInsertion = fixInsertion;
            fixInsertion = fixInsertion.nextNode;
        }
        this.size+=1;
        return 0;
    }

    removeAt(index){// removes node at user requested index
        if(index <0 || index > this.size-1) return false;
        if(index === 0){
            this.head = this.head.nextNode;
            this.size-=1;
            return 0;
        }
        if(index === this.size-1){
            this.pop();
        }
        let removeNode = this.head;
        let fixremoval = removeNode.nextNode;
        let i = 1;
        while(i < this.size){
            if(index === i){
                removeNode.nextNode = fixremoval.nextNode;
            }
            removeNode = fixremoval;
            fixremoval = fixremoval.nextNode;
            i+=1;
        }
        this.size-=1;
        return 0;
    }
}

const sth = new LinkedList();

sth.append(6);
sth.append(1);
sth.prepend(33);
sth.append(77);
sth.prepend(12);
sth.insertAt(22,1);
sth.removeAt(3);
sth.pop();

console.log(sth)
console.log(sth.size);
console.log(sth.head);
console.log(sth.find(6));
console.log(sth.tail());
console.log(sth.at(1));
console.log(sth.find(6));
sth.toString();


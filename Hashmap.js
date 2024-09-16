// function hash(key) {
//     let hashCode = 0;
       
//     const primeNumber = 31;
//     for (let i = 0; i < key.length; i++) {
//       hashCode = primeNumber * hashCode + key.charCodeAt(i);
//       hashCode = hashCode % 16;
//     }
 
//     return hashCode;
//   } 

  class Node{
    constructor(){
      this.key = null;
      this.value = null;
      this.nextNode = null;
    }
  }

  export class HashMap{
    constructor(lf, capacity){
        this.loadFactor = lf;
        this.capacity = capacity;
        this.buckets = new Array(capacity);

    } 

    hash(key) {
      let hashCode = 0;
         
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % this.capacity;
      }
   
      return hashCode;
    } 

    set(key, value){
      let bucketNo = this.hash(key)
      let pair = new Node();
      pair.key = key
      pair.value = value
      //this.buckets[bucketNo] = pair
      if(this.buckets[bucketNo] != null)
       {
          let headNode = this.buckets[bucketNo]
          if(headNode.nextNode == null)
          {
            if(headNode.key == key)
              {
                headNode.value = value
              
              }else{
                headNode.nextNode = pair
              }
          }else{
            while(headNode.nextNode != null)
              {
                if(headNode.key == key)
                  {
                    headNode.value = value
                    break;
                  
                  }else{
                    headNode = headNode.nextNode
                  }
              }
         
                }
         
      }
       else{
        this.buckets[bucketNo] = pair
       }

      //this.bucket[bucketNo] -> is a node
      // 
      
    }

    get(key)
    {
      for(let i = 0; i < this.buckets.length; i++)
      {
       
        if(this.buckets[i] != null && this.buckets[i].nextNode == null)
        {
          if(this.buckets[i].key == key)
          {
            return this.buckets[i].value
          }
          
        }else if(this.buckets[i] != null && this.buckets[i].nextNode != null)
        {
          let headNode = this.buckets[i]
          
          while(headNode.nextNode != null)
          {
            if(headNode.key == key)
              {
                return headNode.value
              }else{
                headNode = headNode.nextNode
              }
          }
          if(headNode.key == key)
            {
              return headNode.value
            }
        }
        
      }
    }

    has(key)
    {
      for(let i = 0; i < this.buckets.length; i++)
        {
         
          if(this.buckets[i] != null && this.buckets[i].nextNode == null)
          {
            if(this.buckets[i].key == key)
            {
              return true
            }
            
          }else if(this.buckets[i] != null && this.buckets[i].nextNode != null)
          {
            let headNode = this.buckets[i]
            
            while(headNode.nextNode != null)
            {
              if(headNode.key == key)
                {
                  return true
                }else{
                  headNode = headNode.nextNode
                }
            }
            if(headNode.key == key)
              {
                return true
              }
          }
          
        }
        return false;
    }

    remove(key)
    {
      for(let i = 0; i < this.buckets.length; i++)
      {
        if(this.buckets[i] != null)
        {

        
        if(this.buckets[i].key == key && this.buckets[i].nextNode == null)
        {
          delete this.buckets[i]
          return true
        }else if(this.buckets[i].key == key && this.buckets[i].nextNode != null)
        {
          // let prevNode = this.buckets[i]
          // let currNode = this.buckets[i]
          this.buckets[i] = this.buckets[i].nextNode
          return true

        }else if(this.buckets[i].key != key && this.buckets[i].nextNode != null)
        {
          let currNode = this.buckets[i]
          let nextNode = this.buckets[i].nextNode
          while(currNode.nextNode != null)
          {
            if(nextNode.key == key)
            {
              if(nextNode.nextNode == null)
              {
                currNode.nextNode = null
                return true
              }else{
                currNode.nextNode = nextNode.nextNode
                return true
              }
              
            }
          }

        }
      }
    }
      return false
    }

  }

let hm = new HashMap(.75, 16)
hm.set('Apple', 'Red')
console.log(hm)

hm.set('Apple', 'Blue')
console.log(hm)
hm.set('Carlos', 'A')
hm.set('Carla', 'B')
console.log(hm)


let test = new HashMap(.75, 16)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test)
console.log(test.get('hat'))
console.log(test.has('hat'))
console.log(test.has('ht'))
console.log(test.remove('hat'))
console.log(test.remove('grape'))
console.log(test)

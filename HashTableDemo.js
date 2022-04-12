class HashTable {
  constructor(size=7){
      this.keyMap = new Array(size);
  }
      _hash(key){
      let total = 0;
      let WEIRD_PRIME = 31;
      for(let i = 0; i < Math.min(key.length, 100); i++){
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
  }
  
  set(key, value){
      let hash = this._hash(key);
      if(!this.keyMap[hash]) this.keyMap[hash] = [];
      this.keyMap[hash].push([key, value]);
      return hash;
  }
  
  get(key){
      let hash = this._hash(key);
      if(this.keyMap[hash]){
          for(let i = 0; i < this.keyMap[hash].length; i++){
              if(this.keyMap[hash][i][0] === key){
                  return this.keyMap[index][i][1];
              }
          }
      } 
      else return undefined;
  }
  keys(){
      let keys = [];
      for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
              for(let j = 0; j < this.keyMap[i].length; j++){
                  if(keys.includes(this.keyMap[i][j][0])){
                      keys.push(this.keyMap[i][j][0]);
                  }
              }
          } 
      }
      return keys;
  }
  values(){
      let values = [];
      for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
              for(let j = 0; j < this.keyMap[i].length; j++){
                  if(values.includes(this.keyMap[i][j][1])){
                      values.push(this.keyMap[i][j][1]);
                  }
              }
          } 
      }
      return values;
  }
}


let ht = new HashTable();
ht.set("hello rld", "gobye!!");
ht.set("hello wrld", "goobye!!");
ht.set("hello wold", "goodye!!");
ht.set("hello word", "gooye!!");
ht.set("hello worl", "godbye!!");
ht.set("hello wod", "godye!!");
ht.set("hello wld", "gobe!!");
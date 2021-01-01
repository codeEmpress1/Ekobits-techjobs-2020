// 1

class NotesStore {
    //add your code here
    constructor() { 
      this.notes = [];
   };
    addNote(state, name) {
        if (name && (state == 'completed' || state == 'active' || state == 'others')) {
            this.notes.push({name:name, state: state});
        }
        else if(!name) {
           throw new Error('Name cannot be empty') 
        }
        else if((state !== 'completed' || state !== 'active' || state !== 'others')) throw new Error(`Invalid state ${state}`)
        
    }
    
    getNotes(state) {
        if(state == 'completed' || state == 'active' || state == 'others'){
        let ans = [];
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].state == state){
                ans.push(this.notes[i].name)
            }
        }
        return ans;
        }
        else    throw new Error(`Invalid state ${state}`)
    }
}
// //////////////////////////////////////////////////////
// 2

class StaffList {
    //add your code here
    constructor(staffs){
        this.staffs = [];
    }
    add(name, age) {
        let arrOfNames = [];
        for(let i = 0; i < this.staffs.length; i++){
            arrOfNames.push(this.staffs[i].name);
        }
        if (!arrOfNames.indexOf(name) > -1){
            if(this.staffs)
            if(age > 20) {
                this.staffs.push({name: name, age: age});
            }
            else throw new Error('Staff member age must be greater than 20')            
        }
    }
    
    remove(name) {
         let arrOfNames = [];
        for(let i = 0; i < this.staffs.length; i++){
            arrOfNames.push(this.staffs[i].name);
        }
         if (arrOfNames.indexOf(name) > -1) {
            this.staffs = this.staffs.filter((staff) => staff.name !== name )
            return true;
         } else return false;
         
    }
    
    getSize() {
        return this.staffs.length;
    }
}
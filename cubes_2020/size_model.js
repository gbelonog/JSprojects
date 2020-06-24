//model for asking size
class Size_Model{
    constructor(){
        this.size = 0;
        this.sizeChanged = false;
        };
    getSize(){
        return this.size;
    };
    setSize(size){
        this.size = size;
        this.sizeChanged = true;
    };
    getSizeChanged(){
        return this.sizeChanged;
    };
};
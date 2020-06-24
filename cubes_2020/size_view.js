//view for asking size
class Size_View{
    constructor(size_Model){
        this.size_Model = size_Model;
    };

    askSize(){
        this.size_Model.setSize(prompt('Please set size of grid'));
    };    
};
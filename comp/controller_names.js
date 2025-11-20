import ModelNames from "./model_names.js";
import ViewNames from "./view_names.js";

export default class ControllerNames {
    constructor(){
        this.model = new ModelNames(); 
        this.view = new ViewNames();

        this.start();
    }

    start(){
        this.model.loadData().then(d => { 
            const allData = this.model.parseData(d);
            this.view.renderData(allData);
        })
    }
}
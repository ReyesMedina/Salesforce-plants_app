import { LightningElement, wire } from 'lwc';
import getFilteredSpecies from '@salesforce/apex/SpeciesService.getFilteredSpecies';
export default class SpeciesList extends LightningElement {
   
    searchText = "";
    @wire(getFilteredSpecies,{searchText : "$searchText"})
    species;

    handlerInputChange(event){
        const searchTextAux = event.target.value;
        if (searchTextAux.length >=2 || searchTextAux === ""){
            this.searchText = searchTextAux;
        }
        
    }
}
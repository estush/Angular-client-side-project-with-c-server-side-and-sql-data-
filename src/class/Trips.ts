export class Trips{
    constructor(public tripId?:number ,
        public yhad?:string,
        public tripTypeId?:number,
        public tripDate?:Date ,
        public tripTime?:number,
        public durationTime?:number,
        public tripEmptyPlace?:number,
        public price?:number,
        public picture?:string,
        public tripTypeName?:string,
        public isFirstAid?:boolean) {   
    }
}
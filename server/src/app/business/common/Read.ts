
export interface Read<T> {
    retrieve: (callback: (error: any, result: T)=> void)=> void ;
    findById: (_id: string, callback: (error:any, result: T) => void) => void;
    findByTag:(tag:string,callback:(error:any,result:T)=>void)=>void;
    distinctTags:( callback:(error:any,result:string[])=>void)=>void;

}

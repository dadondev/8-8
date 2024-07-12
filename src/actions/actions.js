import { getDatabase, onValue, ref, set } from "firebase/database";
import { realDB } from "../firebase/firebase";


export async function getAllProducts(setValue, range) {
    const db = getDatabase()
    const starRef = ref(db, range);
    onValue(starRef, (snaps) => {
        const datas = snaps.val();
        if(datas.products){
            setValue(Object.values(datas))
            console.log(Object.values(datas));
        }else{
            setValue(datas)
        }
       
    })
}

export async function newData(range, datas) {
    const data = await set(ref(realDB, range), datas)
    return data
}
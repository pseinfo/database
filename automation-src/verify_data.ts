
import {join} from "path"
import { ElementSymbols } from "types/elements_symbols"

const DATA_PATH = join(__dirname, "../data/")

async function verify_elements_index_json(){
    const index_json_path = join(DATA_PATH, "elements/_index.json")
    try {
        const index_json: string[] = await Bun.file(index_json_path).json()
        if (JSON.stringify(index_json) != JSON.stringify(ElementSymbols))
            throw `the list of symbols elements in ${index_json_path} doesn't correlate with the type`
        
    } catch(err){
        throw err
    }
    
}

verify_elements_index_json()
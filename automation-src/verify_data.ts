
import {join} from "path"
import { ElementSymbols } from "types/elements_symbols"
import { Ajv} from "ajv"

const DATA_PATH = join(__dirname, "../data/")
const SCHEMA_AUTOGEN_PATH = join(__dirname, "../schema/autogen/")

async function verify_elements_index_json(){
    const index_json_path = join(DATA_PATH, "elements/_index.json")
    const index_json: string[] = await Bun.file(index_json_path).json()
    if (JSON.stringify(index_json) != JSON.stringify(ElementSymbols))
        throw `The list of symbols elements in ${index_json_path} doesn't correlate with the type`
}

async function schema_validate_elements_atomic() {
    const schema = await Bun.file(join(SCHEMA_AUTOGEN_PATH, 'atomic.schema.json')).json()
    const ajv = new Ajv() // reminder that some options can be passed here
    const validate = ajv.compile(schema)
    for (const symbols_id of ElementSymbols){
        const atomic_path = join(DATA_PATH, `elements/${symbols_id}/atomic.json`)
        const atomic_json = Bun.file(atomic_path).json()
        const is_valid = validate(atomic_json)
        if (!is_valid){
            console.error(`Element ${symbols_id} at ${atomic_path} data doesn't have valid format`)
            throw validate.errors
        }
            
    }
}

// if this script is being directly executed and not imported
if (import.meta.path === Bun.main) {
    await verify_elements_index_json()
    await schema_validate_elements_atomic()
}
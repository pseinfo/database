import { createGenerator } from "ts-json-schema-generator";
import { join } from "path";

type InputToGenerateSchemas = {
    type: string
    output_file: string
}

const SCHEMAS_TO_GENERATE: InputToGenerateSchemas[] = [
    {
        type: "Elements",
        // stripped of extensions
        output_file: "elements"
    }, 
    {
        type: "Atomic",
        output_file: "atomic"
    }
]

const OUT_DIR_PATH_SCHEMAS = join(__dirname, "../schema/autogen/")

const BASE_CONFIG_GENERATOR = {
	tsconfig: join(__dirname, "../tsconfig.json"),
	//skipTypeCheck: true, // can be used in builds to prevents some acceptable fails.
}

const generator = createGenerator(BASE_CONFIG_GENERATOR)

for (const schema_config of SCHEMAS_TO_GENERATE){
    const out_path = join(OUT_DIR_PATH_SCHEMAS, `${schema_config.output_file}.schema.json`)

    const schema_data = generator.createSchema(schema_config.type)
    const schema_str = JSON.stringify(schema_data, null, 2);

    try {
        await Bun.write(out_path, schema_str)
    } catch(err){
        throw(`Failed to write schema: ${schema_config.type} to ${out_path}, because: ${err}`)
    }
}

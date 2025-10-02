
import type { ElementSymbols } from "types/elements_symbols";
import type { Atomic } from "types/elements/atomic";

console.log("Hello world");

const aluminum: ElementSymbols = "al"
const aluminum_atomic: Atomic = {
    "@metadata": {
        lastModified: "",
        schemaVersion: ""
    },
    electron_config: "",
    ionization: {
        unit: "eV",
        values: []
    },
    mass: {
        atomic_mass: {
            unit: "u",
            value: 0
        },
        standard_atomic_weight: {
            deviation: 0,
            value: 0
        }
    },
    radius: {
        calculated: {
            unit: "pm",
            value: 0
        },
        covalent: {
            deviation: 0,
            unit: "pm",
            value: 0
        },
        empirical: {
            unit: "pm",
            value: 0
        },
        vdw: {
            unit: "pm",
            value: 0
        }
    },
    shell: []
}
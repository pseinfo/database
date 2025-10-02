

export type Atomic = {
  "@metadata"?: {
    lastModified: string // ISO date 8610
    schemaVersion: string
  },
  electron_config?: string,
  ionization?: {
    unit: "eV",
    values: number[]
  },
  mass?: {
    atomic_mass: {
      unit: "u",
      value: number
    },
    standard_atomic_weight: {
      deviation: number,
      value: number
    }
  },
  radius?: {
    calculated: {
      unit: "pm",
      value: number
    },
    covalent: {
      deviation: number,
      unit: "pm",
      value: number
    },
    empirical: {
      unit: "pm",
      value: number
    },
    vdw: {
      unit: "pm",
      value: number
    }
  },
  shell?: number[]
}

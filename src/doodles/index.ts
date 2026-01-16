import type { DoodleSketch } from './types'

type DoodleModule = {
  name: string
  sketch: DoodleSketch
}

const modules = import.meta.glob('./*.ts', { eager: true })

const doodleEntries = Object.values(modules)
  .map((module) => module as Partial<DoodleModule>)
  .filter((module): module is DoodleModule => Boolean(module.name && module.sketch))
  .map((module) => [module.name, module.sketch] as const)
  .sort(([a], [b]) => a.localeCompare(b))

export const doodles = Object.fromEntries(doodleEntries)
export const doodleNames = doodleEntries.map(([name]) => name)

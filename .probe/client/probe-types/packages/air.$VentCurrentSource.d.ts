declare module "packages/air/$VentCurrentSource" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$VentAirCurrent, $VentAirCurrent$Type} from "packages/air/$VentAirCurrent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $VentCurrentSource {

 "getAirCurrent"(): $VentAirCurrent
 "getAirCurrentWorld"(): $Level
 "getAirCurrentPos"(): $BlockPos
 "getAirflowOriginSide"(): $Direction
 "getMaxDistance"(): float
 "getAirFlowDirection"(): $Direction
 "isSourceRemoved"(): boolean
 "getSpeed"(): float
}

export namespace $VentCurrentSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentCurrentSource$Type = ($VentCurrentSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VentCurrentSource_ = $VentCurrentSource$Type;
}}

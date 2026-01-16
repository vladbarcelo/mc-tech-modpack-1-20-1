declare module "packages/com/Gabou/sereneseasonsplus/util/$MinecraftServerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftServerAccess {

 "sereneseasonsplus$tempsEcoule"(): boolean

(): boolean
}

export namespace $MinecraftServerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccess$Type = ($MinecraftServerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerAccess_ = $MinecraftServerAccess$Type;
}}
declare module "packages/com/Gabou/sereneseasonsplus/util/$ISnowTrackedChunk" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ISnowTrackedChunk {

 "sereneseasonsplus$getLastWinterId"(): integer
 "sereneseasonsplus$setLastWinterId"(arg0: integer): void
 "sereneseasonsplus$getSnowColumns"(): $Map<($BlockPos), (integer)>
 "sereneseasonsplus$getIceColumns"(): $Set<($BlockPos)>
 "sereneseasonsplus$getAvailableSnowColumns"(): integer
 "sereneseasonsplus$setAvailableSnowColumns"(arg0: integer): void
 "sereneseasonsplus$getStormProgress"(): float
 "sereneseasonsplus$setStormProgress"(arg0: float): void
 "sereneseasonsplus$getStormIdApplied"(): integer
 "sereneseasonsplus$getTotalSnowLayers"(): integer
 "sereneseasonsplus$getTrackedColumnCount"(): integer
 "sereneseasonsplus$getLastProgressTick"(): integer
 "sereneseasonsplus$setLastProgressTick"(arg0: integer): void
 "sereneseasonsplus$setStormIdApplied"(arg0: integer): void
 "sereneseasonsplus$getSurfaceHeight"(): integer
 "sereneseasonsplus$setSurfaceHeight"(arg0: integer): void
 "sereneseasonsplus$getDestroyedStormId"(): integer
 "sereneseasonsplus$getDestroyedColumns"(): $Set<(long)>
 "sereneseasonsplus$setDestroyedStormId"(arg0: integer): void
}

export namespace $ISnowTrackedChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISnowTrackedChunk$Type = ($ISnowTrackedChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISnowTrackedChunk_ = $ISnowTrackedChunk$Type;
}}

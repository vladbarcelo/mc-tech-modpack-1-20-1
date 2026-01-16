declare module "packages/air/$VentAirCurrent" {
import {$VentCurrentSource, $VentCurrentSource$Type} from "packages/air/$VentCurrentSource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$VentAirCurrent$VentAirCurrentSegment, $VentAirCurrent$VentAirCurrentSegment$Type} from "packages/air/$VentAirCurrent$VentAirCurrentSegment"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FanProcessingType, $FanProcessingType$Type} from "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VentAirCurrent {
readonly "source": $VentCurrentSource
 "bounds": $AABB
 "segments": $List<($VentAirCurrent$VentAirCurrentSegment)>
 "direction": $Direction
 "dir": $Direction
 "pushing": boolean
 "maxDistance": float
 "vcIndex": integer

constructor(arg0: $VentCurrentSource$Type)

public "tick"(): void
public static "getFlowLimit"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: float, arg3: $Direction$Type): float
public static "isPlayerCreativeFlying"(arg0: $Entity$Type): boolean
public "findEntities"(): void
public "tickAffectedHandlers"(): void
public "findAffectedHandlers"(): void
public "rebuild"(): void
public "setVCIndex"(arg0: integer): void
public "getTypeAt"(arg0: float): $FanProcessingType
set "vCIndex"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentAirCurrent$Type = ($VentAirCurrent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VentAirCurrent_ = $VentAirCurrent$Type;
}}

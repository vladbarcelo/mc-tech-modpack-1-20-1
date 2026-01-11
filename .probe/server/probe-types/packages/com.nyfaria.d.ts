declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$PathingTarget" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PathingTarget {
readonly "pos": $BlockPos
readonly "side": $Direction

constructor(arg0: $BlockPos$Type, arg1: $Direction$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathingTarget$Type = ($PathingTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathingTarget_ = $PathingTarget$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IMobEntityRegisterGoalsHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMobEntityRegisterGoalsHook {

 "onRegisterGoals"(): void

(): void
}

export namespace $IMobEntityRegisterGoalsHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEntityRegisterGoalsHook$Type = ($IMobEntityRegisterGoalsHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobEntityRegisterGoalsHook_ = $IMobEntityRegisterGoalsHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$Orientation" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Orientation {
readonly "normal": $Vec3
readonly "localZ": $Vec3
readonly "localY": $Vec3
readonly "localX": $Vec3
readonly "componentZ": float
readonly "componentY": float
readonly "componentX": float
readonly "yaw": float
readonly "pitch": float

constructor(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: $Vec3$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

public "getLocal"(arg0: $Vec3$Type): $Vec3
public "getGlobal"(arg0: float, arg1: float): $Vec3
public "getGlobal"(arg0: $Vec3$Type): $Vec3
public "getLocalRotation"(arg0: $Vec3$Type): $Pair<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Orientation$Type = ($Orientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Orientation_ = $Orientation$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/movement/$IAdvancedPathFindingEntity" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Node, $Node$Type} from "packages/net/minecraft/world/level/pathfinder/$Node"

export interface $IAdvancedPathFindingEntity {

 "getBridgePathingMalus"(arg0: $Mob$Type, arg1: $BlockPos$Type, arg2: $Node$Type): float
 "onPathingObstructed"(arg0: $Direction$Type): void
 "getGroundSide"(): $Direction
 "getPathingMalus"(arg0: $BlockGetter$Type, arg1: $Mob$Type, arg2: $BlockPathTypes$Type, arg3: $BlockPos$Type, arg4: $Vec3i$Type, arg5: $Predicate$Type<($Direction$Type)>): float
 "getMaxStuckCheckTicks"(): integer
 "pathFinderCleanup"(): void

(arg0: $Mob$Type, arg1: $BlockPos$Type, arg2: $Node$Type): float
}

export namespace $IAdvancedPathFindingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedPathFindingEntity$Type = ($IAdvancedPathFindingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedPathFindingEntity_ = $IAdvancedPathFindingEntity$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IEntityMovementHook" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"

export interface $IEntityMovementHook {

 "getAdjustedOnPosition"(arg0: $BlockPos$Type): $BlockPos
 "getAdjustedCanTriggerWalking"(arg0: boolean): boolean
 "onMove"(arg0: $MoverType$Type, arg1: $Vec3$Type, arg2: boolean): boolean
}

export namespace $IEntityMovementHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityMovementHook$Type = ($IEntityMovementHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityMovementHook_ = $IEntityMovementHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IMobEntityTickHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMobEntityTickHook {

 "onTick"(): void

(): void
}

export namespace $IMobEntityTickHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEntityTickHook$Type = ($IMobEntityTickHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobEntityTickHook_ = $IMobEntityTickHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IMobEntityLivingTickHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMobEntityLivingTickHook {

 "onLivingTick"(): void

(): void
}

export namespace $IMobEntityLivingTickHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEntityLivingTickHook$Type = ($IMobEntityLivingTickHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobEntityLivingTickHook_ = $IMobEntityLivingTickHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$ILivingEntityRotationHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILivingEntityRotationHook {

 "getTargetPitch"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer, arg6: boolean): float
 "getTargetYaw"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer, arg6: boolean): float
 "getTargetHeadYaw"(arg0: float, arg1: integer): float
}

export namespace $ILivingEntityRotationHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityRotationHook$Type = ($ILivingEntityRotationHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityRotationHook_ = $ILivingEntityRotationHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$ILivingEntityDataManagerHook" {
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export interface $ILivingEntityDataManagerHook {

 "onNotifyDataManagerChange"(arg0: $EntityDataAccessor$Type<(any)>): void

(arg0: $EntityDataAccessor$Type<(any)>): void
}

export namespace $ILivingEntityDataManagerHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityDataManagerHook$Type = ($ILivingEntityDataManagerHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityDataManagerHook_ = $ILivingEntityDataManagerHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$ILivingEntityTravelHook" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $ILivingEntityTravelHook {

 "onTravel"(arg0: $Vec3$Type, arg1: boolean): boolean

(arg0: $Vec3$Type, arg1: boolean): boolean
}

export namespace $ILivingEntityTravelHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityTravelHook$Type = ($ILivingEntityTravelHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityTravelHook_ = $ILivingEntityTravelHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$ILivingEntityLookAtHook" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EntityAnchorArgument$Anchor, $EntityAnchorArgument$Anchor$Type} from "packages/net/minecraft/commands/arguments/$EntityAnchorArgument$Anchor"

export interface $ILivingEntityLookAtHook {

 "onLookAt"(arg0: $EntityAnchorArgument$Anchor$Type, arg1: $Vec3$Type): $Vec3

(arg0: $EntityAnchorArgument$Anchor$Type, arg1: $Vec3$Type): $Vec3
}

export namespace $ILivingEntityLookAtHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityLookAtHook$Type = ($ILivingEntityLookAtHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityLookAtHook_ = $ILivingEntityLookAtHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IClimberEntity" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Orientation, $Orientation$Type} from "packages/com/nyfaria/nyfsspiders/common/entity/mob/$Orientation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Node, $Node$Type} from "packages/net/minecraft/world/level/pathfinder/$Node"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$IAdvancedPathFindingEntity, $IAdvancedPathFindingEntity$Type} from "packages/com/nyfaria/nyfsspiders/common/entity/movement/$IAdvancedPathFindingEntity"
import {$PathingTarget, $PathingTarget$Type} from "packages/com/nyfaria/nyfsspiders/common/entity/mob/$PathingTarget"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IClimberEntity extends $IAdvancedPathFindingEntity {

 "canClimbInWater"(): boolean
 "canClimbInLava"(): boolean
 "calculateOrientation"(arg0: float): $Orientation
 "getGroundDirection"(): $Pair<($Direction), ($Vec3)>
 "shouldTrackPathingTargets"(): boolean
 "setCanClimbInWater"(arg0: boolean): void
 "setCanClimbInLava"(arg0: boolean): void
 "getMovementSpeed"(): float
 "getOrientation"(): $Orientation
 "setRenderOrientation"(arg0: $Orientation$Type): void
 "getRenderOrientation"(): $Orientation
 "getAttachmentOffset"(arg0: $Direction$Axis$Type, arg1: float): float
 "getTrackedMovementTarget"(): $Vec3
 "getTrackedPathingTargets"(): $List<($PathingTarget)>
 "getVerticalOffset"(arg0: float): float
 "setJumpDirection"(arg0: $Vec3$Type): void
 "getBlockSlipperiness"(arg0: $BlockPos$Type): float
 "canClimberTriggerWalking"(): boolean
 "canClimbOnBlock"(arg0: $BlockState$Type, arg1: $BlockPos$Type): boolean
 "getCollisionsInclusionRange"(): float
 "setCollisionsInclusionRange"(arg0: float): void
 "getCollisionsSmoothingRange"(): float
 "setCollisionsSmoothingRange"(arg0: float): void
 "getBridgePathingMalus"(arg0: $Mob$Type, arg1: $BlockPos$Type, arg2: $Node$Type): float
 "onPathingObstructed"(arg0: $Direction$Type): void
 "getGroundSide"(): $Direction
 "getPathingMalus"(arg0: $BlockGetter$Type, arg1: $Mob$Type, arg2: $BlockPathTypes$Type, arg3: $BlockPos$Type, arg4: $Vec3i$Type, arg5: $Predicate$Type<($Direction$Type)>): float
 "getMaxStuckCheckTicks"(): integer
 "pathFinderCleanup"(): void
}

export namespace $IClimberEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClimberEntity$Type = ($IClimberEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClimberEntity_ = $IClimberEntity$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$ILivingEntityJumpHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILivingEntityJumpHook {

 "onJump"(): boolean

(): boolean
}

export namespace $ILivingEntityJumpHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityJumpHook$Type = ($ILivingEntityJumpHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityJumpHook_ = $ILivingEntityJumpHook$Type;
}}
declare module "packages/com/nyfaria/nyfsspiders/common/entity/mob/$IEntityReadWriteHook" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IEntityReadWriteHook {

 "onRead"(arg0: $CompoundTag$Type): void
 "onWrite"(arg0: $CompoundTag$Type): void
}

export namespace $IEntityReadWriteHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityReadWriteHook$Type = ($IEntityReadWriteHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityReadWriteHook_ = $IEntityReadWriteHook$Type;
}}

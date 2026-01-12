declare module "packages/toni/immersivelanterns/foundation/$IPlayerLanternDataAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $IPlayerLanternDataAccessor {

 "immersiveLanterns$setZVel"(arg0: float): void
 "immersiveLanterns$getZVel"(): float
 "immersiveLanterns$setXVel"(arg0: float): void
 "immersiveLanterns$getXVel"(): float
 "immersiveLanterns$setLastHipPosition"(arg0: $Vec3$Type): void
 "immersiveLanterns$getLastHipPosition"(): $Vec3
 "immersiveLanterns$setWasCrouching"(arg0: boolean): void
 "immersiveLanterns$getWasCrouching"(): boolean
 "immersiveLanterns$setZAngle"(arg0: float): void
 "immersiveLanterns$getZAngle"(): float
 "immersiveLanterns$setXAngle"(arg0: float): void
 "immersiveLanterns$getXAngle"(): float
}

export namespace $IPlayerLanternDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerLanternDataAccessor$Type = ($IPlayerLanternDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerLanternDataAccessor_ = $IPlayerLanternDataAccessor$Type;
}}
declare module "packages/toni/immersivelanterns/foundation/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}

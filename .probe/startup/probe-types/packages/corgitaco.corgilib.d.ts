declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$Access" {
import {$IsInsideStructureTracker, $IsInsideStructureTracker$Type} from "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker"

export interface $IsInsideStructureTracker$Access {

 "getIsInsideStructureTracker"(): $IsInsideStructureTracker

(): $IsInsideStructureTracker
}

export namespace $IsInsideStructureTracker$Access {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$Access$Type = ($IsInsideStructureTracker$Access);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$Access_ = $IsInsideStructureTracker$Access$Type;
}}
declare module "packages/corgitaco/corgilib/world/level/$RandomTickScheduler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $RandomTickScheduler {

 "getScheduledRandomTicks"(): $List<($BlockPos)>
 "scheduleRandomTick"(arg0: $BlockPos$Type): void
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomTickScheduler$Type = ($RandomTickScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomTickScheduler_ = $RandomTickScheduler$Type;
}}
declare module "packages/corgitaco/corgilib/math/blendingfunction/$BlendingFunction" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $BlendingFunction {

 "apply"(factor: double, min: double, max: double): double
 "apply"(arg0: double): double
 "codec"(): $Codec<(any)>
}

export namespace $BlendingFunction {
const CODEC: $Codec<($BlendingFunction)>
function register(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendingFunction$Type = ($BlendingFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendingFunction_ = $BlendingFunction$Type;
}}
declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker" {
import {$IsInsideStructureTracker$IsInside, $IsInsideStructureTracker$IsInside$Type} from "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$IsInside"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IsInsideStructureTracker {

constructor()

public "getTracker"(): $IsInsideStructureTracker$IsInside
public "setInside"(world: $Level$Type, entity: $Entity$Type, isInside: $IsInsideStructureTracker$IsInside$Type): void
get "tracker"(): $IsInsideStructureTracker$IsInside
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$Type = ($IsInsideStructureTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker_ = $IsInsideStructureTracker$Type;
}}
declare module "packages/corgitaco/corgilib/entity/$IsInsideStructureTracker$IsInside" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IsInsideStructureTracker$IsInside {
static readonly "CODEC": $Codec<($IsInsideStructureTracker$IsInside)>

constructor(insideStructure: boolean, insideStructurePiece: boolean)

public "isInsideStructurePiece"(): boolean
public "isInsideStructure"(): boolean
public "setInsideStructure"(insideStructure: boolean): $IsInsideStructureTracker$IsInside
public "setInsideStructurePiece"(insideStructurePiece: boolean): $IsInsideStructureTracker$IsInside
get "insideStructurePiece"(): boolean
get "insideStructure"(): boolean
set "insideStructure"(value: boolean)
set "insideStructurePiece"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$IsInside$Type = ($IsInsideStructureTracker$IsInside);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$IsInside_ = $IsInsideStructureTracker$IsInside$Type;
}}

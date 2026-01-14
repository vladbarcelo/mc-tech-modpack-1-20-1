declare module "packages/fi/dy/masa/litematica/mixin/$IMixinHandledScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinHandledScreen {

 "litematica_getX"(): integer
 "litematica_getY"(): integer
}

export namespace $IMixinHandledScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinHandledScreen$Type = ($IMixinHandledScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinHandledScreen_ = $IMixinHandledScreen$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinEntity" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IMixinEntity {

 "litematica_setWorld"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $IMixinEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEntity$Type = ($IMixinEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEntity_ = $IMixinEntity$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinStairsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinStairsBlock {

}

export namespace $IMixinStairsBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinStairsBlock$Type = ($IMixinStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinStairsBlock_ = $IMixinStairsBlock$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinWorldTickScheduler" {
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$LevelChunkTicks, $LevelChunkTicks$Type} from "packages/net/minecraft/world/ticks/$LevelChunkTicks"

export interface $IMixinWorldTickScheduler<T> {

 "litematica_getChunkTickSchedulers"(): $Long2ObjectMap<($LevelChunkTicks<(T)>)>

(): $Long2ObjectMap<($LevelChunkTicks<(T)>)>
}

export namespace $IMixinWorldTickScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinWorldTickScheduler$Type<T> = ($IMixinWorldTickScheduler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinWorldTickScheduler_<T> = $IMixinWorldTickScheduler$Type<(T)>;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinChunkDeltaUpdateS2CPacket" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"

export interface $IMixinChunkDeltaUpdateS2CPacket {

 "litematica_getSection"(): $SectionPos

(): $SectionPos
}

export namespace $IMixinChunkDeltaUpdateS2CPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinChunkDeltaUpdateS2CPacket$Type = ($IMixinChunkDeltaUpdateS2CPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinChunkDeltaUpdateS2CPacket_ = $IMixinChunkDeltaUpdateS2CPacket$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinVineBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMixinVineBlock {

 "invokeShouldConnectUp"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
}

export namespace $IMixinVineBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinVineBlock$Type = ($IMixinVineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinVineBlock_ = $IMixinVineBlock$Type;
}}
declare module "packages/fi/dy/masa/litematica/util/$IWorldUpdateSuppressor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWorldUpdateSuppressor {

 "litematica_setShouldPreventBlockUpdates"(arg0: boolean): void
 "litematica_getShouldPreventBlockUpdates"(): boolean
}

export namespace $IWorldUpdateSuppressor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldUpdateSuppressor$Type = ($IWorldUpdateSuppressor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldUpdateSuppressor_ = $IWorldUpdateSuppressor$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinSignBlockEntity" {
import {$SignText, $SignText$Type} from "packages/net/minecraft/world/level/block/entity/$SignText"

export interface $IMixinSignBlockEntity {

 "litematica_getFrontText"(): $SignText
 "litematica_getBackText"(): $SignText
}

export namespace $IMixinSignBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSignBlockEntity$Type = ($IMixinSignBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSignBlockEntity_ = $IMixinSignBlockEntity$Type;
}}
declare module "packages/fi/dy/masa/malilib/util/$IF3KeyStateSetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IF3KeyStateSetter {

 "setF3KeyState"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $IF3KeyStateSetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IF3KeyStateSetter$Type = ($IF3KeyStateSetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IF3KeyStateSetter_ = $IF3KeyStateSetter$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinFenceGateBlock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IMixinFenceGateBlock {

 "invokeIsWall"(arg0: $BlockState$Type): boolean

(arg0: $BlockState$Type): boolean
}

export namespace $IMixinFenceGateBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinFenceGateBlock$Type = ($IMixinFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinFenceGateBlock_ = $IMixinFenceGateBlock$Type;
}}
declare module "packages/fi/dy/masa/litematica/mixin/$IMixinRedstoneWireBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IMixinRedstoneWireBlock {

 "litematicaGetPlacementState"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState

(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
}

export namespace $IMixinRedstoneWireBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinRedstoneWireBlock$Type = ($IMixinRedstoneWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinRedstoneWireBlock_ = $IMixinRedstoneWireBlock$Type;
}}

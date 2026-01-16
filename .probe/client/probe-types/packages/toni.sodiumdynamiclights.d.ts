declare module "packages/toni/sodiumdynamiclights/$DynamicLightSource" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $DynamicLightSource {

 "sdl$shouldUpdateDynamicLight"(): boolean
 "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
 "sdl$isDynamicLightEnabled"(): boolean
 "sdl$setDynamicLightEnabled"(enabled: boolean): void
 "sdl$getDynamicLightX"(): double
 "sdl$getDynamicLightY"(): double
 "sdl$getDynamicLightZ"(): double
 "sdl$getDynamicLightLevel"(): $Level
 "sdl$resetDynamicLight"(): void
 "sdl$getLuminance"(): integer
 "sdl$dynamicLightTick"(): void
 "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
}

export namespace $DynamicLightSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightSource$Type = ($DynamicLightSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightSource_ = $DynamicLightSource$Type;
}}
declare module "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DynamicLightHandler, $DynamicLightHandler$Type} from "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $DynamicLightHandlerHolder<T> {

 "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<(T)>
 "sodiumdynamiclights$setDynamicLightHandler"(arg0: $DynamicLightHandler$Type<(T)>): void
 "sodiumdynamiclights$getSetting"(): boolean
 "sodiumdynamiclights$getName"(): $Component
}

export namespace $DynamicLightHandlerHolder {
function cast<T>(entityType: $BlockEntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
function cast<T>(entityType: $EntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandlerHolder$Type<T> = ($DynamicLightHandlerHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandlerHolder_<T> = $DynamicLightHandlerHolder$Type<(T)>;
}}
declare module "packages/toni/sodiumdynamiclights/accessor/$WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor {

 "sodiumdynamiclights$scheduleChunkRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void

(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}

export namespace $WorldRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccessor$Type = ($WorldRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccessor_ = $WorldRendererAccessor$Type;
}}

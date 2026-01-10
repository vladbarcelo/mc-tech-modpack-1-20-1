declare module "packages/me/flashyreese/mods/sodiumextra/mixin/gui/$MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftClientAccessor {

}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$Type;
}}
declare module "packages/me/flashyreese/mods/sodiumextra/mixin/optimizations/beacon_beam_rendering/$WorldRendererAccessor" {
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"

export interface $WorldRendererAccessor {

 "getFrustum"(): $Frustum

(): $Frustum
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

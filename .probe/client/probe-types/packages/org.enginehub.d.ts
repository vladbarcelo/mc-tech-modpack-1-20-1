declare module "packages/org/enginehub/worldeditcui/forge/mixins/$MinecraftAccess" {
import {$Timer, $Timer$Type} from "packages/net/minecraft/client/$Timer"

export interface $MinecraftAccess {

 "getTimer"(): $Timer

(): $Timer
}

export namespace $MinecraftAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccess$Type = ($MinecraftAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccess_ = $MinecraftAccess$Type;
}}
declare module "packages/org/enginehub/worldeditcui/forge/mixins/$LevelRendererAccessor" {
import {$PostChain, $PostChain$Type} from "packages/net/minecraft/client/renderer/$PostChain"

export interface $LevelRendererAccessor {

 "getTransparencyChain"(): $PostChain

(): $PostChain
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}

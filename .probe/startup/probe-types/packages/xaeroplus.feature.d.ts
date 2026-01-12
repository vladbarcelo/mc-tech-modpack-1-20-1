declare module "packages/xaeroplus/feature/extensions/$CustomMinimapFBORenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMinimapFBORenderer {

 "reloadMapFrameBuffers"(): void

(): void
}

export namespace $CustomMinimapFBORenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMinimapFBORenderer$Type = ($CustomMinimapFBORenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMinimapFBORenderer_ = $CustomMinimapFBORenderer$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$CustomMapProcessor" {
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $CustomMapProcessor {

 "xaeroPlus$getCurrentDimensionActualDimSignal"(): $ThreadLocal<(boolean)>
 "xaeroPlus$getLeafRegionActualDimSignal"(): $ThreadLocal<(boolean)>
}

export namespace $CustomMapProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapProcessor$Type = ($CustomMapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMapProcessor_ = $CustomMapProcessor$Type;
}}
declare module "packages/xaeroplus/feature/extensions/$SeenChunksTrackingMapTileChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SeenChunksTrackingMapTileChunk {

 "getSeenTiles"(): ((boolean)[])[]

(): ((boolean)[])[]
}

export namespace $SeenChunksTrackingMapTileChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeenChunksTrackingMapTileChunk$Type = ($SeenChunksTrackingMapTileChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeenChunksTrackingMapTileChunk_ = $SeenChunksTrackingMapTileChunk$Type;
}}

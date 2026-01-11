declare module "packages/xaero/map/controls/$ControlsHandler" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $ControlsHandler {

constructor(arg0: $MapProcessor$Type)

public "handleKeyEvents"(): void
public static "setKeyState"(arg0: $KeyMapping$Type, arg1: boolean): void
public static "isKeyRepeat"(arg0: $KeyMapping$Type): boolean
public static "isDown"(arg0: $KeyMapping$Type): boolean
public "onKeyInput"(arg0: $Minecraft$Type): void
public "keyDown"(arg0: $KeyMapping$Type, arg1: boolean, arg2: boolean): void
public "keyUp"(arg0: $KeyMapping$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$Type = ($ControlsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsHandler_ = $ControlsHandler$Type;
}}
declare module "packages/xaero/map/pool/$MapTilePool" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapPool, $MapPool$Type} from "packages/xaero/map/pool/$MapPool"

export class $MapTilePool extends $MapPool<($MapTile)> {

constructor()

public "get"(arg0: string, arg1: integer, arg2: integer): $MapTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTilePool$Type = ($MapTilePool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTilePool_ = $MapTilePool$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"

export class $TextureUpload implements $PoolUnit {

constructor()

public "run"(): void
public "create"(...arg0: (any)[]): void
public "getUploadType"(): integer
get "uploadType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Type = ($TextureUpload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload_ = $TextureUpload$Type;
}}
declare module "packages/xaero/map/region/$MapRegion" {
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$LeafRegionTexture, $LeafRegionTexture$Type} from "packages/xaero/map/region/texture/$LeafRegionTexture"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $MapRegion extends $LeveledRegion<($LeafRegionTexture)> implements $MapRegionInfo {
static readonly "SIDE_LENGTH": integer
readonly "writerThreadPauseSync": any
 "loadingPrioritized": boolean
 "loadingNeededForBranchLevel": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: $Registry$Type<($Biome$Type)>)

public "setVersion"(arg0: integer): void
public "clean"(arg0: $MapProcessor$Type): void
public "setParent"(arg0: $BranchLeveledRegion$Type): void
public "isLoaded"(): boolean
public "getVersion"(): integer
public "isWritingPaused"(): boolean
public "getLoadState"(): byte
public "registerVisit"(): void
public "canRequestReload_unsynced"(): boolean
public "setBeingWritten"(arg0: boolean): void
public "getCaveStart"(): integer
public "setLoadState"(arg0: byte): void
public "isNormalMapData"(): boolean
public "setHasHadTerrain"(): void
public "setOutdatedWithOtherLayers"(arg0: boolean): void
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "requestRefresh"(arg0: $MapProcessor$Type, arg1: boolean): void
public "requestRefresh"(arg0: $MapProcessor$Type): void
public "getTexture"(arg0: integer, arg1: integer): $LeafRegionTexture
public "shouldAffectLoadingRequestFrequency"(): boolean
public "processWhenLoadedChunksExist"(arg0: integer): void
public "shouldEndProcessingAfterUpload"(): boolean
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldConvertCacheToOutdatedOnFinishDim"(): boolean
public "hasRemovableSourceData"(): boolean
public "isRefreshing"(): boolean
public "isBeingWritten"(): boolean
public "getCacheHashCode"(): integer
public "getReloadVersion"(): integer
public "caveStartOutdated"(arg0: integer, arg1: integer): boolean
public "hasHadTerrain"(): boolean
public "getHighlightsHash"(): integer
public "onDimensionClear"(arg0: $MapProcessor$Type): void
public "onProcessingEnd"(): void
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "loadCacheTextures"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$Type): boolean
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "createTexture"(arg0: integer, arg1: integer): $LeafRegionTexture
public "shouldBeProcessed"(): boolean
public "loadingAnimation"(): boolean
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "getExtraInfo"(): string
public "destroyBufferUpdateObjects"(): void
public "restoreBufferUpdateObjects"(): void
public "cancelRefresh"(arg0: $MapProcessor$Type): void
public "setCacheHashCode"(arg0: integer): void
public "setHighlightsHash"(arg0: integer): void
public "setCaveStart"(arg0: integer): void
public "clearRegion"(arg0: $MapProcessor$Type): void
public "getInitialVersion"(): integer
public "setInitialVersion"(arg0: integer): void
public "getPixelResultBuffer"(): (integer)[]
public "getMutableGlobalPos"(): $BlockPos$MutableBlockPos
public "getRegionFile"(): $File
public "setRegionFile"(arg0: $File$Type): void
public "getSaveExists"(): boolean
public "setSaveExists"(arg0: boolean): void
public "getLastSaveTime"(): long
public "setLastSaveTime"(arg0: long): void
public "setRefreshing"(arg0: boolean): void
public "pushWriterPause"(): void
public "popWriterPause"(): void
public "getLastVisited"(): long
public "getTimeSinceVisit"(): long
public "countChunks"(): integer
public "getBiomeRegistry"(): $Registry<($Biome)>
public "setReloadVersion"(arg0: integer): void
public "updateTargetHighlightsHash"(): void
public "getTargetHighlightsHash"(): integer
public "restoreMetaData"(arg0: ((integer)[])[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean, arg6: $MapProcessor$Type): void
public "convertCacheToOutdated"(arg0: $MapSaveLoad$Type, arg1: string): void
public "unsetHasHadTerrain"(): void
public "hasLookedForCache"(): boolean
public "setLookedForCache"(arg0: boolean): void
public "updateCaveMode"(): void
public "getUpToDateCaveStart"(): integer
public "isOutdatedWithOtherLayers"(): boolean
public "getCaveDepth"(): integer
public "setResaving"(arg0: boolean): void
public "getChunk"(arg0: integer, arg1: integer): $MapTileChunk
public "isResting"(): boolean
public "setChunk"(arg0: integer, arg1: integer, arg2: $MapTileChunk$Type): void
public "preCache"(): void
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "getWorldId"(): string
public "getMwId"(): string
public "hasVersion"(): boolean
public "isResaving"(): boolean
public "getDimId"(): string
public "putTexture"(arg0: integer, arg1: integer, arg2: $LeafRegionTexture$Type): void
public "shouldCache"(): boolean
public "setShouldCache"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$Type): void
public "getRegionX"(): integer
public "getRegionZ"(): integer
set "version"(value: integer)
set "parent"(value: $BranchLeveledRegion$Type)
get "loaded"(): boolean
get "version"(): integer
get "writingPaused"(): boolean
get "loadState"(): byte
set "beingWritten"(value: boolean)
get "caveStart"(): integer
set "loadState"(value: byte)
get "normalMapData"(): boolean
set "outdatedWithOtherLayers"(value: boolean)
get "refreshing"(): boolean
get "beingWritten"(): boolean
get "cacheHashCode"(): integer
get "reloadVersion"(): integer
get "highlightsHash"(): integer
get "extraInfo"(): string
set "cacheHashCode"(value: integer)
set "highlightsHash"(value: integer)
set "caveStart"(value: integer)
get "initialVersion"(): integer
set "initialVersion"(value: integer)
get "pixelResultBuffer"(): (integer)[]
get "mutableGlobalPos"(): $BlockPos$MutableBlockPos
get "regionFile"(): $File
set "regionFile"(value: $File$Type)
get "saveExists"(): boolean
set "saveExists"(value: boolean)
get "lastSaveTime"(): long
set "lastSaveTime"(value: long)
set "refreshing"(value: boolean)
get "lastVisited"(): long
get "timeSinceVisit"(): long
get "biomeRegistry"(): $Registry<($Biome)>
set "reloadVersion"(value: integer)
get "targetHighlightsHash"(): integer
set "lookedForCache"(value: boolean)
get "upToDateCaveStart"(): integer
get "outdatedWithOtherLayers"(): boolean
get "caveDepth"(): integer
set "resaving"(value: boolean)
get "resting"(): boolean
get "worldId"(): string
get "mwId"(): string
get "resaving"(): boolean
get "dimId"(): string
get "cacheFile"(): $File
set "cacheFile"(value: $File$Type)
get "regionX"(): integer
get "regionZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegion$Type = ($MapRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegion_ = $MapRegion$Type;
}}
declare module "packages/xaero/map/highlight/$HighlighterRegistry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractHighlighter, $AbstractHighlighter$Type} from "packages/xaero/map/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {

constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$Type = ($HighlighterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExportResultType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PNGExportResultType extends $Enum<($PNGExportResultType)> {
static readonly "NOT_PREPARED": $PNGExportResultType
static readonly "EMPTY": $PNGExportResultType
static readonly "TOO_BIG": $PNGExportResultType
static readonly "IMAGE_TOO_BIG": $PNGExportResultType
static readonly "OUT_OF_MEMORY": $PNGExportResultType
static readonly "BAD_FBO": $PNGExportResultType
static readonly "IO_EXCEPTION": $PNGExportResultType
static readonly "SUCCESS": $PNGExportResultType


public static "values"(): ($PNGExportResultType)[]
public static "valueOf"(arg0: string): $PNGExportResultType
public "getMessage"(): $Component
public "isSuccess"(): boolean
get "message"(): $Component
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExportResultType$Type = (("too_big") | ("out_of_memory") | ("io_exception") | ("success") | ("image_too_big") | ("not_prepared") | ("empty") | ("bad_fbo")) | ($PNGExportResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExportResultType_ = $PNGExportResultType$Type;
}}
declare module "packages/xaero/map/pool/$MapPool" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"

export class $MapPool<T extends $PoolUnit> {

constructor(arg0: integer)

public "size"(): integer
public "addToPool"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPool$Type<T> = ($MapPool<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPool_<T> = $MapPool$Type<(T)>;
}}
declare module "packages/xaero/map/region/$MapBlock" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapPixel, $MapPixel$Type} from "packages/xaero/map/region/$MapPixel"

export class $MapBlock extends $MapPixel {

constructor()

public "getHeight"(): integer
public "equals"(arg0: $MapBlock$Type, arg1: boolean): boolean
public "write"(arg0: $BlockState$Type, arg1: integer, arg2: integer, arg3: $ResourceKey$Type<($Biome$Type)>, arg4: byte, arg5: boolean, arg6: boolean): void
public "getEffectiveHeight"(arg0: boolean): integer
public "getEffectiveHeight"(arg0: $BlockStateShortShapeCache$Type): integer
public "fixHeightType"(arg0: integer, arg1: integer, arg2: $MapTile$Type, arg3: $MapTileChunk$Type, arg4: $MapTileChunk$Type, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: integer, arg8: boolean, arg9: $BlockStateShortShapeCache$Type): void
public "equalsSlopesExcluded"(arg0: $MapBlock$Type): boolean
public "setSlopeUnknown"(arg0: boolean): void
public "prepareForWriting"(arg0: integer): void
public "getNumberOfOverlays"(): integer
public "getTopHeight"(): integer
public "getOverlays"(): $ArrayList<($Overlay)>
public "getPixelColour"(arg0: (integer)[], arg1: $MapWriter$Type, arg2: $Level$Type, arg3: $MapDimension$Type, arg4: $Registry$Type<($Block$Type)>, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTile$Type, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$MutableBlockPos$Type, arg15: $Registry$Type<($Biome$Type)>, arg16: $Registry$Type<($DimensionType$Type)>, arg17: float, arg18: float, arg19: float, arg20: $BlockTintProvider$Type, arg21: $MapProcessor$Type, arg22: $OverlayManager$Type, arg23: integer, arg24: integer, arg25: $BlockStateShortShapeCache$Type): void
public "toRenderString"(arg0: $Registry$Type<($Biome$Type)>): string
public "setDiagonalSlope"(arg0: byte): void
public "getVerticalSlope"(): byte
public "getDiagonalSlope"(): byte
public "getParametres"(): integer
public "setTopHeight"(arg0: integer): void
public "setVerticalSlope"(arg0: byte): void
public "getEffectiveTopHeight"(arg0: boolean): integer
public "setHeight"(arg0: integer): void
public "getBiome"(): $ResourceKey<($Biome)>
public "setBiome"(arg0: $ResourceKey$Type<($Biome$Type)>): void
public "isGrass"(): boolean
public "addOverlay"(arg0: $Overlay$Type): void
get "height"(): integer
set "slopeUnknown"(value: boolean)
get "numberOfOverlays"(): integer
get "topHeight"(): integer
get "overlays"(): $ArrayList<($Overlay)>
set "diagonalSlope"(value: byte)
get "verticalSlope"(): byte
get "diagonalSlope"(): byte
get "parametres"(): integer
set "topHeight"(value: integer)
set "verticalSlope"(value: byte)
set "height"(value: integer)
get "biome"(): $ResourceKey<($Biome)>
set "biome"(value: $ResourceKey$Type<($Biome$Type)>)
get "grass"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlock$Type = ($MapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlock_ = $MapBlock$Type;
}}
declare module "packages/xaero/map/$MapProcessor" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$WorldDataHandler, $WorldDataHandler$Type} from "packages/xaero/map/file/worldsave/$WorldDataHandler"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/map/graphics/$CustomVertexConsumers"
import {$ByteBufferDeallocator, $ByteBufferDeallocator$Type} from "packages/xaero/map/deallocator/$ByteBufferDeallocator"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MapRegionHighlightsPreparer, $MapRegionHighlightsPreparer$Type} from "packages/xaero/map/highlight/$MapRegionHighlightsPreparer"
import {$CustomMapProcessor, $CustomMapProcessor$Type} from "packages/xaeroplus/feature/extensions/$CustomMapProcessor"
import {$CaveStartCalculator, $CaveStartCalculator$Type} from "packages/xaero/map/misc/$CaveStartCalculator"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$Queue, $Queue$Type} from "packages/java/util/$Queue"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MessageBox, $MessageBox$Type} from "packages/xaero/map/gui/message/$MessageBox"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MessageBoxRenderer, $MessageBoxRenderer$Type} from "packages/xaero/map/gui/message/render/$MessageBoxRenderer"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$Type} from "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$MapLimiter, $MapLimiter$Type} from "packages/xaero/map/$MapLimiter"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapRunner, $MapRunner$Type} from "packages/xaero/map/$MapRunner"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapTilePool, $MapTilePool$Type} from "packages/xaero/map/pool/$MapTilePool"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$Type} from "packages/xaero/map/cache/$BrokenBlockTintCache"

export class $MapProcessor implements $CustomMapProcessor {
static readonly "ROOT_FOLDER_FORMAT": integer
static readonly "DEFAULT_LIGHT_LEVELS": integer
 "worldBiomeRegistry": $Registry<($Biome)>
 "newWorldBlockRegistry": $Registry<($Block)>
 "newWorldBiomeRegistry": $Registry<($Biome)>
 "newWorldDimensionTypeRegistry": $Registry<($DimensionType)>
readonly "mainStuffSync": any
 "mainWorld": $ClientLevel
 "mainWorldBlockRegistry": $Registry<($Block)>
 "mainWorldBiomeRegistry": $Registry<($Biome)>
 "mainWorldDimensionTypeRegistry": $Registry<($DimensionType)>
 "mainPlayerX": double
 "mainPlayerY": double
 "mainPlayerZ": double
readonly "renderThreadPauseSync": any
readonly "processorThreadPauseSync": any
readonly "uiSync": any
readonly "uiPauseSync": any
 "freeFramePeriod": long
 "selectedField": $Field

constructor(arg0: $MapSaveLoad$Type, arg1: $MapWriter$Type, arg2: $MapLimiter$Type, arg3: $ByteBufferDeallocator$Type, arg4: $MapTilePool$Type, arg5: $OverlayManager$Type, arg6: $TextureUploader$Type, arg7: $WorldDataHandler$Type, arg8: $BranchTextureRenderer$Type, arg9: $MultiTextureRenderTypeRendererProvider$Type, arg10: $CustomVertexConsumers$Type, arg11: $BiomeColorCalculator$Type, arg12: $BlockStateShortShapeCache$Type, arg13: $BiomeGetter$Type, arg14: $BrokenBlockTintCache$Type, arg15: $HighlighterRegistry$Type, arg16: $MapRegionHighlightsPreparer$Type, arg17: $MessageBox$Type, arg18: $MessageBoxRenderer$Type, arg19: $CaveStartCalculator$Type, arg20: $ClientSyncedTrackedPlayerManager$Type)

public "isEqual"(arg0: string, arg1: string, arg2: string): boolean
public "run"(arg0: $MapRunner$Type): void
public "stop"(): void
public "onRenderProcess"(arg0: $Minecraft$Type): void
public "resetRenderStartTime"(): void
public "getMinecraftScheduledTasks"(): $Queue<($Runnable)>
public "getRenderStartTimeUpdater"(): $Runnable
public "setMainValues"(): void
public "updateWorldSpawn"(arg0: $BlockPos$Type, arg1: $ClientLevel$Type): void
public "getCrosshairMessage"(): string
public "getWorldDataHandler"(): $WorldDataHandler
public "isWritingPaused"(): boolean
public "isWaitingForWorldUpdate"(): boolean
public "getMapSaveLoad"(): $MapSaveLoad
public "isCurrentMapLocked"(): boolean
public "getCurrentWorldId"(): string
public "getCurrentDimension"(): string
public "getWorldBlockTintProvider"(): $BlockTintProvider
public "getWorldBlockRegistry"(): $Registry<($Block)>
public "updateCaveStart"(): void
public "getCurrentCaveLayer"(): integer
public "getLeafMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "getTilePool"(): $MapTilePool
public "ignoreWorld"(arg0: $Level$Type): boolean
public "getMapWorld"(): $MapWorld
public "checkForWorldUpdate"(): void
public "getBrightness"(): float
public "getBrightness"(arg0: integer, arg1: $ClientLevel$Type, arg2: boolean): float
public "getBrightness"(arg0: boolean): float
public "onWorldUnload"(): void
public "getMapWriter"(): $MapWriter
public "onClientTickStart"(): void
public "onInit"(arg0: $ClientPacketListener$Type): void
public "getWorldDimensionTypeRegistry"(): $Registry<($DimensionType)>
public "getAffectingLoadingFrequencyCount"(): integer
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "isCurrentMultiworldWritable"(): boolean
public "getBlockStateShortShapeCache"(): $BlockStateShortShapeCache
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "getMapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
public "xaeroPlus$getLeafRegionActualDimSignal"(): $ThreadLocal<(any)>
public "isRenderingPaused"(): boolean
public "initMinimapRender"(arg0: integer, arg1: integer): void
public "finalizeMinimapRender"(): void
public "getMinimapMapRegion"(arg0: integer, arg1: integer): $MapRegion
public "beforeMinimapRegionRender"(arg0: $MapRegion$Type): void
public "regionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
/**
 * 
 * @deprecated
 */
public "getMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "getGlobalVersion"(): integer
public "isUploadingPaused"(): boolean
public "isMapWorldUsable"(): boolean
public "isProcessed"(arg0: $LeveledRegion$Type<(any)>): boolean
public "addToRefresh"(arg0: $MapRegion$Type, arg1: boolean): void
public "removeToRefresh"(arg0: $MapRegion$Type): void
public "pushWriterPause"(): void
public "popWriterPause"(): void
public "removeMapRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "getMessageBox"(): $MessageBox
public "getLeveledRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "getProcessedCount"(): integer
public "getOverlayManager"(): $OverlayManager
public "getMapLimiter"(): $MapLimiter
public "getFootprints"(): $ArrayList<((double)[])>
public "getMessageBoxRenderer"(): $MessageBoxRenderer
public "handler$bpi000$xaeroplus$getDimensionName"(id: $ResourceKey$Type<(any)>, cir: $CallbackInfoReturnable$Type<(any)>): void
public "isConsideringNetherFairPlay"(): boolean
public "redirect$bpi000$xaeroplus$replaceLockPath"(instance: $Path$Type, other: string): $Path
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "xaeroPlus$getCurrentDimensionActualDimSignal"(): $ThreadLocal<(any)>
public "isProcessingPaused"(): boolean
public "updateFootprints"(arg0: integer): void
public "getDimensionName"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "getDimensionIdForFolder"(arg0: string): $ResourceKey<($Level)>
public "changeWorld"(arg0: $ClientLevel$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: $Registry$Type<($Biome$Type)>, arg5: $Registry$Type<($DimensionType$Type)>): void
public "updateDimension"(arg0: $ClientLevel$Type, arg1: $ResourceKey$Type<($Level$Type)>): void
public "updateVisitedDimension"(arg0: $ClientLevel$Type): void
public "toggleMultiworldType"(arg0: $MapDimension$Type): void
public "quickConfirmMultiworld"(): void
public "canQuickConfirmUnsynced"(): boolean
public "confirmMultiworld"(arg0: $MapDimension$Type): boolean
public "setMultiworld"(arg0: $MapDimension$Type, arg1: string): void
public "pushUIPause"(): void
public "removeToProcess"(arg0: $LeveledRegion$Type<(any)>): void
public "getMapChunk"(arg0: integer, arg1: integer, arg2: integer): $MapTileChunk
public "getNewWorld"(): $ClientLevel
public "setGlobalVersion"(arg0: integer): void
public "getRenderStartTime"(): long
public static "isWorldMultiplayer"(arg0: boolean, arg1: string): boolean
public "requestCurrentMapDeletion"(): void
public "getHighlighterRegistry"(): $HighlighterRegistry
public "getWorldBlockLookup"(): $HolderLookup<($Block)>
public "getBiomeColorCalculator"(): $BiomeColorCalculator
public static "isWorldRealms"(arg0: string): boolean
public "getCurrentDimId"(): string
public "getCurrentMWId"(): string
public "isFinalizing"(): boolean
public "pushIsLoading"(): void
public "addToProcess"(arg0: $LeveledRegion$Type<(any)>): void
public "popIsLoading"(): void
public "serverHasMod"(): boolean
public "getServerModNetworkVersion"(): integer
public "popRenderPause"(arg0: boolean, arg1: boolean): void
public "regionDetectionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "pushRenderPause"(arg0: boolean, arg1: boolean): void
public "getAmbientBrightness"(arg0: $DimensionType$Type): float
public "getBufferDeallocator"(): $ByteBufferDeallocator
public "waitForLoadingToFinish"(arg0: $Runnable$Type): void
public "onServerLevelId"(arg0: integer): void
public "setServerModNetworkVersion"(arg0: integer): void
public "redirect$bpi000$xaeroplus$decreaseThreadSleepTime"(millis: long): void
public "wrapOperation$bpi000$xaeroplus$storePrevWorldVarStates"(instance: $MapProcessor$Type, value: string, original: $Operation$Type<(any)>): void
public "handler$bpi000$xaeroplus$fireWorldChangedEvent"(ci: $CallbackInfo$Type): void
public "handler$bpi000$xaeroplus$resetCustomDimOnWorldUnload"(ci: $CallbackInfo$Type): void
public "handler$bpi000$xaeroplus$getActualDimIfSignalSet"(cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$bpi000$xaeroplus$capturePrevStateForWorldChangeEvent"(ci: $CallbackInfo$Type): void
public "wrapOperation$bpi000$xaeroplus$updateWorldSyncedGetActualDimension"(mapWorld: $MapWorld$Type, original: $Operation$Type<(any)>): $MapDimension
public "wrapOperation$bpi000$xaeroplus$getLeafMapRegionActualDimensionIfSignalled"(instance: $MapWorld$Type, original: $Operation$Type<(any)>): $MapDimension
public "redirect$bpi000$xaeroplus$createMapRegionInActualDimensionIfSignalled"(worldId: string, dimId: string, mwId: string, dim: $MapDimension$Type, x: integer, z: integer, caveLayer: integer, initialVersion: integer, normalMapData: boolean, biomeRegistry: $Registry$Type<(any)>): $MapRegion
public "getWorld"(): $ClientLevel
public "isFinished"(): boolean
public "getCvc"(): $CustomVertexConsumers
public "isUIPaused"(): boolean
public "getMapTile"(arg0: integer, arg1: integer, arg2: integer): $MapTile
public "popUIPause"(): void
get "minecraftScheduledTasks"(): $Queue<($Runnable)>
get "renderStartTimeUpdater"(): $Runnable
get "crosshairMessage"(): string
get "worldDataHandler"(): $WorldDataHandler
get "writingPaused"(): boolean
get "waitingForWorldUpdate"(): boolean
get "mapSaveLoad"(): $MapSaveLoad
get "currentMapLocked"(): boolean
get "currentWorldId"(): string
get "currentDimension"(): string
get "worldBlockTintProvider"(): $BlockTintProvider
get "worldBlockRegistry"(): $Registry<($Block)>
get "currentCaveLayer"(): integer
get "tilePool"(): $MapTilePool
get "mapWorld"(): $MapWorld
get "brightness"(): float
get "mapWriter"(): $MapWriter
get "worldDimensionTypeRegistry"(): $Registry<($DimensionType)>
get "affectingLoadingFrequencyCount"(): integer
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "currentMultiworldWritable"(): boolean
get "blockStateShortShapeCache"(): $BlockStateShortShapeCache
set "consideringNetherFairPlayMessage"(value: boolean)
get "mapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
get "renderingPaused"(): boolean
get "globalVersion"(): integer
get "uploadingPaused"(): boolean
get "mapWorldUsable"(): boolean
get "messageBox"(): $MessageBox
get "processedCount"(): integer
get "overlayManager"(): $OverlayManager
get "mapLimiter"(): $MapLimiter
get "footprints"(): $ArrayList<((double)[])>
get "messageBoxRenderer"(): $MessageBoxRenderer
get "consideringNetherFairPlay"(): boolean
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "processingPaused"(): boolean
get "newWorld"(): $ClientLevel
set "globalVersion"(value: integer)
get "renderStartTime"(): long
get "highlighterRegistry"(): $HighlighterRegistry
get "worldBlockLookup"(): $HolderLookup<($Block)>
get "biomeColorCalculator"(): $BiomeColorCalculator
get "currentDimId"(): string
get "currentMWId"(): string
get "finalizing"(): boolean
get "serverModNetworkVersion"(): integer
get "bufferDeallocator"(): $ByteBufferDeallocator
set "serverModNetworkVersion"(value: integer)
get "world"(): $ClientLevel
get "finished"(): boolean
get "cvc"(): $CustomVertexConsumers
get "uIPaused"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapProcessor$Type = ($MapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapProcessor_ = $MapProcessor$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"
import {$MapPool, $MapPool$Type} from "packages/xaero/map/pool/$MapPool"

export class $TextureUploadPool<T extends $TextureUpload> extends $MapPool<(T)> {

constructor(arg0: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Type<T> = ($TextureUploadPool<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool_<T> = $TextureUploadPool$Type<(T)>;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal" {
import {$TextureUpload$SubsequentNormal, $TextureUpload$SubsequentNormal$Type} from "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<($TextureUpload$SubsequentNormal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): $TextureUpload$SubsequentNormal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$SubsequentNormal$Type = ($TextureUploadPool$SubsequentNormal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$SubsequentNormal_ = $TextureUploadPool$SubsequentNormal$Type;
}}
declare module "packages/xaero/map/util/linked/$ILinkedChainNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILinkedChainNode<V extends $ILinkedChainNode<(V)>> {

 "isDestroyed"(): boolean
 "getNext"(): V
 "setPrevious"(arg0: V): void
 "onDestroyed"(): void
 "getPrevious"(): V
 "setNext"(arg0: V): void
}

export namespace $ILinkedChainNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkedChainNode$Type<V> = ($ILinkedChainNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILinkedChainNode_<V> = $ILinkedChainNode$Type<(V)>;
}}
declare module "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$WorldDataReaderSectionBiomeData, $WorldDataReaderSectionBiomeData$Type} from "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData"
import {$BiomeManager$NoiseBiomeSource, $BiomeManager$NoiseBiomeSource$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource"

export class $WorldDataBiomeManager implements $BiomeManager$NoiseBiomeSource {

constructor()

public "clear"(): void
public "addBiomeSectionForRegionChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: $WorldDataReaderSectionBiomeData$Type): void
public "resetChunkBiomeData"(arg0: integer, arg1: integer, arg2: $Biome$Type, arg3: $Registry$Type<($Biome$Type)>): void
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getBiome"(arg0: $BiomeManager$Type, arg1: integer, arg2: integer, arg3: integer): $Biome
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataBiomeManager$Type = ($WorldDataBiomeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataBiomeManager_ = $WorldDataBiomeManager$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$SubsequentNormal extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$SubsequentNormal$Type = ($TextureUpload$SubsequentNormal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$SubsequentNormal_ = $TextureUpload$SubsequentNormal$Type;
}}
declare module "packages/xaero/map/effects/$WorldMapStatusEffect" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WorldMapStatusEffect extends $MobEffect {


public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapStatusEffect$Type = ($WorldMapStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapStatusEffect_ = $WorldMapStatusEffect$Type;
}}
declare module "packages/xaero/map/region/texture/$BranchTextureRenderer" {
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $BranchTextureRenderer {

constructor()

public "render"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $RenderTarget$Type, arg6: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchTextureRenderer$Type = ($BranchTextureRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchTextureRenderer_ = $BranchTextureRenderer$Type;
}}
declare module "packages/xaero/map/server/player/$IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/map/server/player/$ServerPlayerData"

export interface $IServerPlayer {

 "getXaeroWorldMapPlayerData"(): $ServerPlayerData
 "setXaeroWorldMapPlayerData"(arg0: $ServerPlayerData$Type): void
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$Type;
}}
declare module "packages/xaero/map/$MapFullReloader" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"

export class $MapFullReloader {
static readonly "CONVERTED_WORLD_SAVE_MW": string

constructor(arg0: integer, arg1: boolean, arg2: $Iterator$Type<($RegionDetection$Type)>, arg3: $MapDimension$Type, arg4: $MapProcessor$Type)

public "onRenderProcess"(): void
public "isPartOfReload"(arg0: $MapRegion$Type): boolean
public "isResave"(): boolean
get "resave"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFullReloader$Type = ($MapFullReloader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapFullReloader_ = $MapFullReloader$Type;
}}
declare module "packages/xaero/map/server/level/$LevelMapProperties" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BufferedReader, $BufferedReader$Type} from "packages/java/io/$BufferedReader"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WorldMapMessage, $WorldMapMessage$Type} from "packages/xaero/map/message/$WorldMapMessage"

export class $LevelMapProperties extends $WorldMapMessage<($LevelMapProperties)> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $PrintWriter$Type): void
public "read"(arg0: $BufferedReader$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $LevelMapProperties
public "getId"(): integer
public "isUsable"(): boolean
public "setUsable"(arg0: boolean): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$Type = ($LevelMapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$Type;
}}
declare module "packages/xaero/map/highlight/$MapRegionHighlightsPreparer" {
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"

export class $MapRegionHighlightsPreparer {

constructor()

public "prepare"(arg0: $MapRegion$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "prepare"(arg0: $MapRegion$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionHighlightsPreparer$Type = ($MapRegionHighlightsPreparer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionHighlightsPreparer_ = $MapRegionHighlightsPreparer$Type;
}}
declare module "packages/xaero/map/biome/$BiomeColorCalculator" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BiomeColorCalculator {
readonly "UNREACHABLE_BIOME": $ResourceKey<($Biome)>
readonly "RIVER_BIOME": $ResourceKey<($Biome)>

constructor()

public "prepare"(arg0: boolean): void
public "getBiomeColor"(arg0: $ColorResolver$Type, arg1: boolean, arg2: $BlockPos$MutableBlockPos$Type, arg3: $MapTile$Type, arg4: integer, arg5: $Registry$Type<($Biome$Type)>, arg6: $MapProcessor$Type): integer
public "getBiomeAtPos"(arg0: $BlockPos$Type, arg1: $MapTile$Type, arg2: integer, arg3: $MapProcessor$Type): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeColorCalculator$Type = ($BiomeColorCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeColorCalculator_ = $BiomeColorCalculator$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SyncedPlayerTrackerSystemManager {

constructor()

public "register"(arg0: string, arg1: $ISyncedPlayerTrackerSystem$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/map/server/$MinecraftServerData" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$Type} from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import {$SyncedPlayerTracker, $SyncedPlayerTracker$Type} from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker"
import {$LevelMapProperties, $LevelMapProperties$Type} from "packages/xaero/map/server/level/$LevelMapProperties"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $MinecraftServerData {

constructor(arg0: $SyncedPlayerTrackerSystemManager$Type, arg1: $SyncedPlayerTracker$Type)

public static "get"(arg0: $MinecraftServer$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$Type): $LevelMapProperties
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$Type = ($MinecraftServerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$Type;
}}
declare module "packages/xaero/map/mcworld/$WorldMapClientWorldData" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$Type} from "packages/xaero/map/message/basic/$ClientboundRulesPacket"

export class $WorldMapClientWorldData {
 "serverLevelId": integer
 "usedServerLevelId": integer
 "latestSpawn": $BlockPos
 "usedSpawn": $BlockPos

constructor(arg0: $ClientLevel$Type)

public "getSyncedRules"(): $ClientboundRulesPacket
public "getServerModNetworkVersion"(): integer
public "setSyncedRules"(arg0: $ClientboundRulesPacket$Type): void
public "setServerModNetworkVersion"(arg0: integer): void
get "syncedRules"(): $ClientboundRulesPacket
get "serverModNetworkVersion"(): integer
set "syncedRules"(value: $ClientboundRulesPacket$Type)
set "serverModNetworkVersion"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapClientWorldData$Type = ($WorldMapClientWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapClientWorldData_ = $WorldMapClientWorldData$Type;
}}
declare module "packages/xaero/map/biome/$BiomeGetter" {
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BiomeGetter {
readonly "PLACEHOLDER_BIOME": $ResourceKey<($Biome)>
readonly "UNKNOWN_BIOME": $ResourceKey<($Biome)>

constructor()

public "getBiome"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Registry$Type<($Biome$Type)>): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGetter$Type = ($BiomeGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGetter_ = $BiomeGetter$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataHandler$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WorldDataHandler$Result extends $Enum<($WorldDataHandler$Result)> {
static readonly "SUCCESS": $WorldDataHandler$Result
static readonly "FAIL": $WorldDataHandler$Result
static readonly "CANCEL": $WorldDataHandler$Result


public static "values"(): ($WorldDataHandler$Result)[]
public static "valueOf"(arg0: string): $WorldDataHandler$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Result$Type = (("cancel") | ("fail") | ("success")) | ($WorldDataHandler$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler$Result_ = $WorldDataHandler$Result$Type;
}}
declare module "packages/xaero/map/region/$LeveledRegion" {
import {$ZipOutputStream, $ZipOutputStream$Type} from "packages/java/util/zip/$ZipOutputStream"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$FastPalette, $FastPalette$Type} from "packages/xaero/map/palette/$FastPalette"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$File, $File$Type} from "packages/java/io/$File"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $LeveledRegion<T extends $RegionTexture<(T)>> implements $Comparable<($LeveledRegion<(T)>)> {
static readonly "SIDE_LENGTH": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$Type)

public "toString"(): string
public "compareTo"(arg0: $LeveledRegion$Type<(T)>): integer
public "getParent"(): $BranchLeveledRegion
public "isLoaded"(): boolean
public static "setComparison"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setAllCachePrepared"(arg0: boolean): void
public "getCaveLayer"(): integer
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "getBiomeKey"(arg0: integer): $ResourceKey<($Biome)>
public "getTexture"(arg0: integer, arg1: integer): T
public "getLevel"(): integer
public "getAndResetCachedTextureVersion"(arg0: integer, arg1: integer): integer
public "shouldAffectLoadingRequestFrequency"(): boolean
public "processWhenLoadedChunksExist"(arg0: integer): void
public "shouldEndProcessingAfterUpload"(): boolean
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldAllowAnotherRegionToLoad"(): boolean
public "calculateSortingChunkDistance"(): void
public "reloadHasBeenRequested"(): boolean
public "hasRemovableSourceData"(): boolean
public "isRefreshing"(): boolean
public "recacheHasBeenRequested"(): boolean
public "isMetaLoaded"(): boolean
public "shouldCache"(): boolean
public "onDimensionClear"(arg0: $MapProcessor$Type): void
public "deleteTexturesAndBuffers"(): void
public "hasTextures"(): boolean
public "deleteBuffers"(): void
public "deleteGLBuffers"(): void
public "isAllCachePrepared"(): boolean
public "setShouldCache"(arg0: boolean, arg1: string): void
public "setRecacheHasBeenRequested"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$Type): void
public "setReloadHasBeenRequested"(arg0: boolean, arg1: string): void
public "calculateSortingDistance"(): void
public "onProcessingEnd"(): void
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "getBiomePaletteSize"(): integer
public "saveCacheTextures"(arg0: $File$Type, arg1: integer): boolean
public "saveBiomePalette"(arg0: $DataOutputStream$Type): void
public "loadCacheTextures"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$Type): boolean
public "ensureBiomePalette"(): void
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "createTexture"(arg0: integer, arg1: integer): T
public "shouldBeProcessed"(): boolean
public "confirmMetaLoaded"(): void
public "getRootRegion"(): $LeveledRegion<(any)>
public "getBiomePaletteIndex"(arg0: $ResourceKey$Type<($Biome$Type)>): integer
public "onBiomeAddedToTexture"(arg0: $ResourceKey$Type<($Biome$Type)>): integer
public "onBiomeRemovedFromTexture"(arg0: integer): void
public "uncountTextureBiomes"(arg0: $RegionTexture$Type<(any)>): void
public "getBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
public "resetBiomePalette"(): void
public "loadingAnimation"(): boolean
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "getExtraInfo"(): string
public "redirect$bpg000$xaeroplus$replaceSaveCacheTexturesZipOutputStream"(out: $OutputStream$Type): $DataOutputStream
public "handler$bpg000$xaeroplus$writeSaveCacheTexturesZipOutputStream"(tempFile: $File$Type, extraAttempts: integer, cir: $CallbackInfoReturnable$Type<(any)>, zipOutputRef: $ZipOutputStream$Type): void
public "getDim"(): $MapDimension
public "preCache"(): void
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "putTexture"(arg0: integer, arg1: integer, arg2: T): void
get "parent"(): $BranchLeveledRegion
get "loaded"(): boolean
set "allCachePrepared"(value: boolean)
get "caveLayer"(): integer
get "level"(): integer
get "refreshing"(): boolean
get "metaLoaded"(): boolean
get "allCachePrepared"(): boolean
get "cacheFile"(): $File
set "cacheFile"(value: $File$Type)
get "biomePaletteSize"(): integer
get "rootRegion"(): $LeveledRegion<(any)>
get "biomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
get "extraInfo"(): string
get "dim"(): $MapDimension
get "regionX"(): integer
get "regionZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegion$Type<T> = ($LeveledRegion<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeveledRegion_<T> = $LeveledRegion$Type<(T)>;
}}
declare module "packages/xaero/map/palette/$FastPalette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastPalette<T> {


public "getCount"(arg0: integer): integer
public "add"(arg0: T): integer
public "add"(arg0: T, arg1: integer): integer
public "remove"(arg0: integer): void
public "get"(arg0: integer): T
public "append"(arg0: T, arg1: integer): integer
public "replace"(arg0: integer, arg1: T): boolean
public "replace"(arg0: T, arg1: T): boolean
public "count"(arg0: integer, arg1: boolean): integer
public "getSize"(): integer
public "getIndex"(arg0: T): integer
public "getNonNullCount"(): integer
public "addNull"(): void
get "size"(): integer
get "nonNullCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastPalette$Type<T> = ($FastPalette<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastPalette_<T> = $FastPalette$Type<(T)>;
}}
declare module "packages/xaero/map/$WorldMapSession" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ControlsHandler, $ControlsHandler$Type} from "packages/xaero/map/controls/$ControlsHandler"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export class $WorldMapSession {

constructor()

public "init"(arg0: $ClientPacketListener$Type, arg1: long): void
public "cleanup"(): void
public "getControlsHandler"(): $ControlsHandler
public static "getForPlayer"(arg0: $LocalPlayer$Type): $WorldMapSession
public "getMapProcessor"(): $MapProcessor
public static "getCurrentSession"(): $WorldMapSession
public "isUsable"(): boolean
get "controlsHandler"(): $ControlsHandler
get "mapProcessor"(): $MapProcessor
get "currentSession"(): $WorldMapSession
get "usable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapSession$Type = ($WorldMapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapSession_ = $WorldMapSession$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate" {
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"
import {$TextureUpload$BranchUpdate, $TextureUpload$BranchUpdate$Type} from "packages/xaero/map/graphics/$TextureUpload$BranchUpdate"

export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<($TextureUpload$BranchUpdate)> {

constructor(arg0: integer, arg1: boolean)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BranchTextureRenderer$Type, arg16: integer, arg17: integer): $TextureUpload$BranchUpdate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchUpdate$Type = ($TextureUploadPool$BranchUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchUpdate_ = $TextureUploadPool$BranchUpdate$Type;
}}
declare module "packages/xaero/map/world/$MapWorld" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MapConnectionManager, $MapConnectionManager$Type} from "packages/xaero/map/world/$MapConnectionManager"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"

export class $MapWorld {

constructor(arg0: string, arg1: string, arg2: $MapProcessor$Type)

public "getDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $MapDimension
public "load"(): void
public "getDimensions"(arg0: $List$Type<($MapDimension$Type)>): void
public "isCacheOnlyMode"(): boolean
public "getCurrentDimension"(): $MapDimension
public "isMultiplayer"(): boolean
public "isIgnoreHeightmaps"(): boolean
public "getCurrentDimensionId"(): $ResourceKey<($Level)>
public "setCustomDimensionId"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getMapProcessor"(): $MapProcessor
public "isUsingUnknownDimensionType"(): boolean
public "createDimensionUnsynced"(arg0: $ResourceKey$Type<($Level$Type)>): $MapDimension
public "getCurrentMultiworld"(): string
public static "convertWorldFolderToRootId"(arg0: integer, arg1: string): string
public "getFutureDimensionId"(): $ResourceKey<($Level)>
public "getFutureDimension"(): $MapDimension
public "toggleDimension"(arg0: boolean): void
public "getCustomDimensionId"(): $ResourceKey<($Level)>
public "isUsingCustomDimension"(): boolean
public "isTeleportAllowed"(): boolean
public "toggleMultiworldTypeUnsynced"(): void
public "getFutureMultiworldUnsynced"(): string
public "confirmMultiworldTypeUnsynced"(): void
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "unconfirmMultiworldTypeUnsynced"(): void
public "isFutureMultiworldTypeConfirmed"(arg0: $MapDimension$Type): boolean
public "getPlayerTeleportCommandFormat"(): string
public "setPlayerTeleportCommandFormat"(arg0: string): void
public "getDimensionTeleportCommandFormat"(): string
public "setDimensionTeleportCommandFormat"(arg0: string): void
public "clearAllCachedHighlightHashes"(): void
public "switchToFutureMultiworldTypeUnsynced"(): void
public "getPotentialDimId"(): $ResourceKey<($Level)>
public "setFutureDimensionId"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getDimensionsList"(): $List<($MapDimension)>
public "switchToFutureUnsynced"(): void
public "onWorldChangeUnsynced"(arg0: $ClientLevel$Type): void
public "getOldUnfixedMainId"(): string
public "getCurrentMultiworldType"(): integer
public "getFutureMultiworldType"(arg0: $MapDimension$Type): integer
public "getTeleportCommandFormat"(): string
public "setTeleportCommandFormat"(arg0: string): void
public "getPlayerMapKey"(): $MapConnectionNode
public "getMapConnections"(): $MapConnectionManager
public "isIgnoreServerLevelId"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "setTeleportAllowed"(arg0: boolean): void
public "wrapOperation$bpl000$xaeroplus$setCurrentDimensionRef"(instance: $MapWorld$Type, value: $ResourceKey$Type<(any)>, original: $Operation$Type<(any)>): void
public "saveConfig"(): void
public "getMainId"(): string
get "cacheOnlyMode"(): boolean
get "currentDimension"(): $MapDimension
get "multiplayer"(): boolean
get "ignoreHeightmaps"(): boolean
get "currentDimensionId"(): $ResourceKey<($Level)>
set "customDimensionId"(value: $ResourceKey$Type<($Level$Type)>)
get "mapProcessor"(): $MapProcessor
get "usingUnknownDimensionType"(): boolean
get "currentMultiworld"(): string
get "futureDimensionId"(): $ResourceKey<($Level)>
get "futureDimension"(): $MapDimension
get "customDimensionId"(): $ResourceKey<($Level)>
get "usingCustomDimension"(): boolean
get "teleportAllowed"(): boolean
get "futureMultiworldUnsynced"(): string
get "currentMultiworldTypeConfirmed"(): boolean
get "playerTeleportCommandFormat"(): string
set "playerTeleportCommandFormat"(value: string)
get "dimensionTeleportCommandFormat"(): string
set "dimensionTeleportCommandFormat"(value: string)
get "potentialDimId"(): $ResourceKey<($Level)>
set "futureDimensionId"(value: $ResourceKey$Type<($Level$Type)>)
get "dimensionsList"(): $List<($MapDimension)>
get "oldUnfixedMainId"(): string
get "currentMultiworldType"(): integer
get "teleportCommandFormat"(): string
set "teleportCommandFormat"(value: string)
get "playerMapKey"(): $MapConnectionNode
get "mapConnections"(): $MapConnectionManager
get "ignoreServerLevelId"(): boolean
set "ignoreHeightmaps"(value: boolean)
set "teleportAllowed"(value: boolean)
get "mainId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWorld$Type = ($MapWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWorld_ = $MapWorld$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$Compressed" {
import {$TextureUpload$Compressed, $TextureUpload$Compressed$Type} from "packages/xaero/map/graphics/$TextureUpload$Compressed"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Compressed extends $TextureUploadPool<($TextureUpload$Compressed)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): $TextureUpload$Compressed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Compressed$Type = ($TextureUploadPool$Compressed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Compressed_ = $TextureUploadPool$Compressed$Type;
}}
declare module "packages/xaero/map/message/basic/$ClientboundRulesPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WorldMapMessage, $WorldMapMessage$Type} from "packages/xaero/map/message/$WorldMapMessage"

export class $ClientboundRulesPacket extends $WorldMapMessage<($ClientboundRulesPacket)> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
static "MAIN_CHANNEL": $ResourceLocation

constructor(arg0: boolean, arg1: boolean)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$Type = ($ClientboundRulesPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$Type;
}}
declare module "packages/xaero/map/region/$BranchLeveledRegion" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BranchRegionTexture, $BranchRegionTexture$Type} from "packages/xaero/map/region/texture/$BranchRegionTexture"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$MapSaveLoad, $MapSaveLoad$Type} from "packages/xaero/map/file/$MapSaveLoad"

export class $BranchLeveledRegion extends $LeveledRegion<($BranchRegionTexture)> {
static readonly "CHILD_LENGTH_IN_TEXTURES": integer
static readonly "MAX_COORD_WITHIN_CHILD": integer
static readonly "SIDE_LENGTH": integer
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]

constructor(arg0: string, arg1: string, arg2: string, arg3: $MapDimension$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$Type)

public "isEmpty"(): boolean
public "isLoaded"(): boolean
public "checkForUpdates"(arg0: $MapProcessor$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$Type<($BranchLeveledRegion$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "getTexture"(arg0: integer, arg1: integer): $BranchRegionTexture
public "shouldEndProcessingAfterUpload"(): boolean
public "cleanAndCacheRequestsBlocked"(): boolean
public "setShouldCheckForUpdatesRecursive"(arg0: boolean): void
public "hasTextures"(): boolean
public "onProcessingEnd"(): void
public "addDebugLines"(arg0: $List$Type<(string)>, arg1: $MapProcessor$Type, arg2: integer, arg3: integer): void
public "preCacheLoad"(): void
public "shouldBeProcessed"(): boolean
public "loadingAnimation"(): boolean
public "skipCaching"(arg0: $MapProcessor$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$Type): $File
public "onCurrentDimFinish"(arg0: $MapSaveLoad$Type, arg1: $MapProcessor$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$Type): void
public "startDownloadingTexturesForCache"(arg0: $MapProcessor$Type): void
public "setShouldCheckForUpdatesSingle"(arg0: boolean): void
public "postTextureUpdate"(): void
public "eligibleForSaving"(arg0: long): boolean
public "setLoaded"(arg0: boolean): void
public "preCache"(): void
public "postCache"(arg0: $File$Type, arg1: $MapSaveLoad$Type, arg2: boolean): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $BranchRegionTexture$Type): void
get "empty"(): boolean
get "loaded"(): boolean
set "shouldCheckForUpdatesRecursive"(value: boolean)
set "shouldCheckForUpdatesSingle"(value: boolean)
set "loaded"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchLeveledRegion$Type = ($BranchLeveledRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchLeveledRegion_ = $BranchLeveledRegion$Type;
}}
declare module "packages/xaero/map/region/$OverlayManager" {
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"

export class $OverlayManager {

constructor()

public "getNumberOfUniqueOverlays"(): integer
public "getOriginal"(arg0: $Overlay$Type): $Overlay
get "numberOfUniqueOverlays"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayManager$Type = ($OverlayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayManager_ = $OverlayManager$Type;
}}
declare module "packages/xaero/map/cache/$BlockStateShortShapeCache" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockStateShortShapeCache {

constructor()

public "reset"(): void
public "supplyForIOThread"(): void
public "isShort"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$Type = ($BlockStateShortShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$Type;
}}
declare module "packages/xaero/map/gui/message/render/$MessageBoxRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$MessageBox, $MessageBox$Type} from "packages/xaero/map/gui/message/$MessageBox"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $MessageBoxRenderer {

constructor()

public "render"(arg0: $GuiGraphics$Type, arg1: $MessageBox$Type, arg2: $Font$Type, arg3: integer, arg4: integer, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBoxRenderer$Type = ($MessageBoxRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBoxRenderer_ = $MessageBoxRenderer$Type;
}}
declare module "packages/xaero/map/gui/$ISettingEntry" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {

 "getStringForSearch"(): string
 "createWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $AbstractWidget
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingEntry$Type = ($ISettingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingEntry_ = $ISettingEntry$Type;
}}
declare module "packages/xaero/map/gui/dropdown/$IDropDownContainer" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {

 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropDownContainer$Type = ($IDropDownContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDropDownContainer_ = $IDropDownContainer$Type;
}}
declare module "packages/xaero/map/gui/$ScreenBase" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$IScreenBase, $IScreenBase$Type} from "packages/xaero/map/gui/$IScreenBase"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $ScreenBase extends $Screen implements $IScreenBase {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor


public "renderEscapeScreen"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldSkipWorldRender"(): boolean
public "onDropdownOpen"(arg0: $DropDownWidget$Type): void
public "onDropdownClosed"(arg0: $DropDownWidget$Type): void
public "replaceWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "replaceRenderableWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "onClose"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "getEscape"(): $Screen
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "escape"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBase$Type = ($ScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBase_ = $ScreenBase$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/map/server/player/$ServerPlayerData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$MinecraftServerData, $MinecraftServerData$Type} from "packages/xaero/map/server/$MinecraftServerData"

export class $SyncedPlayerTracker {

constructor()

public "onTick"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $MinecraftServerData$Type, arg3: $ServerPlayerData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$Type = ($SyncedPlayerTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$Type;
}}
declare module "packages/xaero/map/task/$MapRunnerTask" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $MapRunnerTask {

constructor()

public "run"(arg0: $MapProcessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunnerTask$Type = ($MapRunnerTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunnerTask_ = $MapRunnerTask$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$Compressed" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Compressed extends $TextureUpload {

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Compressed$Type = ($TextureUpload$Compressed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$Compressed_ = $TextureUpload$Compressed$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataReader" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegionFile, $RegionFile$Type} from "packages/net/minecraft/world/level/chunk/storage/$RegionFile"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$WorldDataBiomeManager, $WorldDataBiomeManager$Type} from "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Executor, $Executor$Type} from "packages/xaero/map/executor/$Executor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $WorldDataReader {
 "taskCreationSync": any

constructor(arg0: $OverlayManager$Type, arg1: $BlockStateShortShapeCache$Type, arg2: $WorldDataBiomeManager$Type, arg3: long)

public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "buildRegion"(arg0: $MapRegion$Type, arg1: $ServerLevel$Type, arg2: $HolderLookup$Type<($Block$Type)>, arg3: $Registry$Type<($Block$Type)>, arg4: $Registry$Type<($Fluid$Type)>, arg5: boolean, arg6: (integer)[], arg7: $Executor$Type): boolean
public "redirect$can000$xaeroplus$redirectBuildTile"(instance: $WorldDataReader$Type, nbttagcompound: $CompoundTag$Type, tile: $MapTile$Type, tileChunk: $MapTileChunk$Type, chunkX: integer, chunkZ: integer, insideRegionX: integer, insideRegionZ: integer, caveStart: integer, caveDepth: integer, worldHasSkylight: boolean, ignoreHeightmaps: boolean, serverWorld: $ServerLevel$Type, blockLookup: $HolderLookup$Type<(any)>, blockRegistry: $Registry$Type<(any)>, fluidRegistry: $Registry$Type<(any)>, biomeRegistry: $Registry$Type<(any)>, flowers: boolean, worldBottomY: integer, worldTopY: integer): boolean
public "readChunk"(arg0: $RegionFile$Type, arg1: $ChunkPos$Type): $CompoundTag
set "mapProcessor"(value: $MapProcessor$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReader$Type = ($WorldDataReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataReader_ = $WorldDataReader$Type;
}}
declare module "packages/xaero/map/$MapLimiter" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"

export class $MapLimiter {

constructor()

public "onSessionFinalized"(): void
public "getAvailableVRAM"(): integer
public "getMostRegionsAtATime"(): integer
public "setMostRegionsAtATime"(arg0: integer): void
public "updateAvailableVRAM"(): void
public "applyLimit"(arg0: $MapWorld$Type, arg1: $MapProcessor$Type): void
get "availableVRAM"(): integer
get "mostRegionsAtATime"(): integer
set "mostRegionsAtATime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLimiter$Type = ($MapLimiter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLimiter_ = $MapLimiter$Type;
}}
declare module "packages/xaero/map/region/$MapLayer" {
import {$LeveledRegionManager, $LeveledRegionManager$Type} from "packages/xaero/map/region/$LeveledRegionManager"
import {$RegionHighlightExistenceTracker, $RegionHighlightExistenceTracker$Type} from "packages/xaero/map/highlight/$RegionHighlightExistenceTracker"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"

export class $MapLayer {

constructor(arg0: $MapDimension$Type, arg1: $RegionHighlightExistenceTracker$Type)

public "getCaveStart"(): integer
public "setCaveStart"(arg0: integer): void
public "addRegionDetection"(arg0: $RegionDetection$Type): void
public "getRegionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
public "getLinkedCompleteWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "tryAddingToCompleteRegionDetection"(arg0: $RegionDetection$Type): void
public "getMapRegions"(): $LeveledRegionManager
public "removeRegionDetection"(arg0: integer, arg1: integer): void
public "getCompleteRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "preDetection"(): void
public "regionDetectionExists"(arg0: integer, arg1: integer): boolean
public "getRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "getDetectedRegions"(): $Hashtable<(integer), ($Hashtable<(integer), ($RegionDetection)>)>
get "caveStart"(): integer
set "caveStart"(value: integer)
get "regionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
get "linkedCompleteWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "mapRegions"(): $LeveledRegionManager
get "detectedRegions"(): $Hashtable<(integer), ($Hashtable<(integer), ($RegionDetection)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLayer$Type = ($MapLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLayer_ = $MapLayer$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $SyncedTrackedPlayer {

constructor(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

public "getDimension"(): $ResourceKey<($Level)>
public "update"(arg0: $Player$Type): void
public "getId"(): $UUID
public "copyFrom"(arg0: $SyncedTrackedPlayer$Type): void
public "getX"(): double
public "getY"(): double
public "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $SyncedTrackedPlayer
public "matchesEnough"(arg0: $Player$Type, arg1: double): boolean
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
public "getZ"(): double
get "dimension"(): $ResourceKey<($Level)>
get "id"(): $UUID
get "x"(): double
get "y"(): double
set "dimension"(value: $ResourceKey$Type<($Level$Type)>)
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$Type = ($SyncedTrackedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$Type;
}}
declare module "packages/xaero/map/cache/$BrokenBlockTintCache" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BrokenBlockTintCache {

constructor(arg0: $Set$Type<($BlockState$Type)>)

public "isBroken"(arg0: $BlockState$Type): boolean
public "getSize"(): integer
public "setBroken"(arg0: $BlockState$Type): void
get "size"(): integer
set "broken"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenBlockTintCache$Type = ($BrokenBlockTintCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrokenBlockTintCache_ = $BrokenBlockTintCache$Type;
}}
declare module "packages/xaero/map/gui/dropdown/$DropDownWidget" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_OPEN": integer
static readonly "TRIM_INSIDE": integer
static readonly "LINE_HEIGHT": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "width": integer
 "height": integer
 "isHovered": boolean
 "active": boolean
 "visible": boolean
 "alpha": float
static readonly "UNSET_FG_COLOR": integer
 "packedFGColor": integer


public "setClosed"(arg0: boolean): void
public "size"(): integer
public "getSelected"(): integer
public "mouseReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "mouseClicked"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "mouseScrolled"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setActive"(arg0: boolean): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "isClosed"(): boolean
public "getXWithOffset"(): integer
public "getYWithOffset"(): integer
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "renderWidget"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "updateWidgetNarration"(arg0: $NarrationElementOutput$Type): void
public "onDropDown"(arg0: integer, arg1: integer, arg2: integer): boolean
public "onDropDown"(arg0: integer, arg1: integer, arg2: boolean, arg3: integer): boolean
public "selectId"(arg0: integer, arg1: boolean): void
set "closed"(value: boolean)
get "selected"(): integer
set "active"(value: boolean)
get "closed"(): boolean
get "xWithOffset"(): integer
get "yWithOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownWidget$Type = ($DropDownWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownWidget_ = $DropDownWidget$Type;
}}
declare module "packages/xaero/map/region/$MapPixel" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $MapPixel {

constructor()

public "getState"(): $BlockState
public "setState"(arg0: $BlockState$Type): void
public "getBlockBrightness"(arg0: float, arg1: integer, arg2: integer): float
public "handler$bph000$xaeroplus$getPixelColours"(result_dest: (integer)[], mapWriter: $MapWriter$Type, world: $Level$Type, dim: $MapDimension$Type, blockRegistry: $Registry$Type<(any)>, tileChunk: $MapTileChunk$Type, prevChunk: $MapTileChunk$Type, prevChunkDiagonal: $MapTileChunk$Type, prevChunkHorisontal: $MapTileChunk$Type, mapTile: $MapTile$Type, x: integer, z: integer, block: $MapBlock$Type, height: integer, topHeight: integer, caveStart: integer, caveDepth: integer, overlays: $ArrayList$Type<(any)>, mutableGlobalPos: $BlockPos$MutableBlockPos$Type, biomeRegistry: $Registry$Type<(any)>, dimensionTypes: $Registry$Type<(any)>, shadowR: float, shadowG: float, shadowB: float, blockTintProvider: $BlockTintProvider$Type, mapProcessor: $MapProcessor$Type, overlayManager: $OverlayManager$Type, blockStateShortShapeCache: $BlockStateShortShapeCache$Type, ci: $CallbackInfo$Type): void
public "getPixelColours"(arg0: (integer)[], arg1: $MapWriter$Type, arg2: $Level$Type, arg3: $MapDimension$Type, arg4: $Registry$Type<($Block$Type)>, arg5: $MapTileChunk$Type, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTile$Type, arg10: integer, arg11: integer, arg12: $MapBlock$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: $ArrayList$Type<($Overlay$Type)>, arg18: $BlockPos$MutableBlockPos$Type, arg19: $Registry$Type<($Biome$Type)>, arg20: $Registry$Type<($DimensionType$Type)>, arg21: float, arg22: float, arg23: float, arg24: $BlockTintProvider$Type, arg25: $MapProcessor$Type, arg26: $OverlayManager$Type, arg27: $BlockStateShortShapeCache$Type): void
public "setGlowing"(arg0: boolean): void
public "setLight"(arg0: byte): void
get "state"(): $BlockState
set "state"(value: $BlockState$Type)
set "glowing"(value: boolean)
set "light"(value: byte)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPixel$Type = ($MapPixel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPixel_ = $MapPixel$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$Normal" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Normal extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$Normal$Type = ($TextureUpload$Normal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$Normal_ = $TextureUpload$Normal$Type;
}}
declare module "packages/xaero/map/core/$IWorldMapClientPlayNetHandler" {
import {$WorldMapSession, $WorldMapSession$Type} from "packages/xaero/map/$WorldMapSession"

export interface $IWorldMapClientPlayNetHandler {

 "getXaero_worldmapSession"(): $WorldMapSession
 "setXaero_worldmapSession"(arg0: $WorldMapSession$Type): void
}

export namespace $IWorldMapClientPlayNetHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientPlayNetHandler$Type = ($IWorldMapClientPlayNetHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientPlayNetHandler_ = $IWorldMapClientPlayNetHandler$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$Normal" {
import {$TextureUpload$Normal, $TextureUpload$Normal$Type} from "packages/xaero/map/graphics/$TextureUpload$Normal"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Normal extends $TextureUploadPool<($TextureUpload$Normal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): $TextureUpload$Normal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Normal$Type = ($TextureUploadPool$Normal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Normal_ = $TextureUploadPool$Normal$Type;
}}
declare module "packages/xaero/map/region/$LeveledRegionManager" {
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"

export class $LeveledRegionManager {
static readonly "MAX_LEVEL": integer

constructor()

public "remove"(arg0: integer, arg1: integer, arg2: integer): boolean
public "get"(arg0: integer, arg1: integer, arg2: integer): $LeveledRegion<(any)>
public "getLeaf"(arg0: integer, arg1: integer): $MapRegion
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegionManager$Type = ($LeveledRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeveledRegionManager_ = $LeveledRegionManager$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExporter" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PNGExportResult, $PNGExportResult$Type} from "packages/xaero/map/file/export/$PNGExportResult"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $PNGExporter {

constructor(arg0: $Path$Type)

public "export"(arg0: $MapProcessor$Type, arg1: $Registry$Type<($Biome$Type)>, arg2: $Registry$Type<($DimensionType$Type)>, arg3: $MapTileSelection$Type, arg4: $OldFormatSupport$Type): $PNGExportResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExporter$Type = ($PNGExporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExporter_ = $PNGExporter$Type;
}}
declare module "packages/xaero/map/highlight/$AbstractHighlighter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $AbstractHighlighter {


public "getBlockHighlightSubtleTooltip"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): $Component
public "getBlockHighlightBluntTooltip"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): $Component
public "isCoveringOutsideDiscovered"(): boolean
public "addMinimapBlockHighlightTooltips"(arg0: $List$Type<($Component$Type)>, arg1: $ResourceKey$Type<($Level$Type)>, arg2: integer, arg3: integer, arg4: integer): void
public "regionHasHighlights"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "chunkIsHighlit"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): (integer)[]
public "calculateRegionHash"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): integer
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$Type = ($AbstractHighlighter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$Type;
}}
declare module "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"

export class $WorldDataReaderSectionBiomeData {

constructor(arg0: $ListTag$Type, arg1: (long)[])

public "get"(arg0: integer, arg1: integer, arg2: integer): string
public "hasDifferentBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReaderSectionBiomeData$Type = ($WorldDataReaderSectionBiomeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataReaderSectionBiomeData_ = $WorldDataReaderSectionBiomeData$Type;
}}
declare module "packages/xaero/map/file/export/$PNGExportResult" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PNGExportResultType, $PNGExportResultType$Type} from "packages/xaero/map/file/export/$PNGExportResultType"

export class $PNGExportResult {

constructor(arg0: $PNGExportResultType$Type, arg1: $Path$Type)

public "getMessage"(): $Component
public "getType"(): $PNGExportResultType
public "getFolderToOpen"(): $Path
get "message"(): $Component
get "type"(): $PNGExportResultType
get "folderToOpen"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExportResult$Type = ($PNGExportResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExportResult_ = $PNGExportResult$Type;
}}
declare module "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage" {
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"

export class $Paletted2DFastBitArrayIntStorage {


public "get"(arg0: integer, arg1: integer): integer
public "contains"(arg0: integer): boolean
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "getRaw"(arg0: integer, arg1: integer): integer
public "getPaletteSize"(): integer
public "getPaletteElement"(arg0: integer): integer
public "getPaletteNonNullCount"(): integer
public "getDefaultValueCount"(): integer
public "getPaletteElementCount"(arg0: integer): integer
public "getBiomePaletteDebug"(): string
public "writeData"(arg0: $DataOutputStream$Type): void
get "paletteSize"(): integer
get "paletteNonNullCount"(): integer
get "defaultValueCount"(): integer
get "biomePaletteDebug"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paletted2DFastBitArrayIntStorage$Type = ($Paletted2DFastBitArrayIntStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paletted2DFastBitArrayIntStorage_ = $Paletted2DFastBitArrayIntStorage$Type;
}}
declare module "packages/xaero/map/region/texture/$RegionTextureBiomes" {
import {$FastPalette, $FastPalette$Type} from "packages/xaero/map/palette/$FastPalette"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Paletted2DFastBitArrayIntStorage, $Paletted2DFastBitArrayIntStorage$Type} from "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage"

export class $RegionTextureBiomes {

constructor(arg0: $Paletted2DFastBitArrayIntStorage$Type, arg1: $FastPalette$Type<($ResourceKey$Type<($Biome$Type)>)>)

public "getRegionBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
public "getBiomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
get "regionBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
get "biomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTextureBiomes$Type = ($RegionTextureBiomes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionTextureBiomes_ = $RegionTextureBiomes$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUploadBenchmark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureUploadBenchmark {

constructor(...arg0: (integer)[])

public "post"(arg0: integer): void
public "pre"(): void
public "getTotalsString"(): string
public "isFinished"(arg0: integer): boolean
public "isFinished"(): boolean
public "getAverage"(arg0: integer): long
get "totalsString"(): string
get "finished"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadBenchmark$Type = ($TextureUploadBenchmark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadBenchmark_ = $TextureUploadBenchmark$Type;
}}
declare module "packages/xaero/map/$MapWriter" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$LocalIntRef, $LocalIntRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$OverlayBuilder, $OverlayBuilder$Type} from "packages/xaero/map/region/$OverlayBuilder"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$LocalLongRef, $LocalLongRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalLongRef"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$LocalBooleanRef, $LocalBooleanRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalBooleanRef"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $MapWriter {
static readonly "NO_Y_VALUE": integer
static readonly "MAX_TRANSPARENCY_BLEND_DEPTH": integer
static readonly "DEFAULT_RESOURCE": (string)[]
 "writeFreeSinceLastWrite": long

constructor(arg0: $OverlayManager$Type, arg1: $BlockStateShortShapeCache$Type, arg2: $BiomeGetter$Type)

public "wrapOperation$bpm000$xaeroplus$removeCustomDimSwitchWriterPrevention"(mapWorld: $MapWorld$Type, original: $Operation$Type<(any)>): $ResourceKey<(any)>
public "modifyExpressionValue$bpm000$xaeroplus$removeWriteTimeLimiterPerFrame"(original: long): long
public "wrapOperation$bpm000$xaeroplus$getActualMapRegionInOnRender"(mapProcessor: $MapProcessor$Type, caveLayer: integer, regX: integer, regZ: integer, create: boolean, original: $Operation$Type<(any)>): $MapRegion
public "modifyExpressionValue$bpm000$xaeroplus$obsidianRoofOverlayMod"(original: boolean, bChunk: $LevelChunk$Type, b: $Block$Type, h: integer): boolean
public "wrapOperation$bpm000$xaeroplus$getOpacityForObsidianRoof$mixinextras$bridge$41"(instance: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, original: $Operation$Type<(any)>, h: $LocalIntRef$Type): integer
public "updateBottomRightTile"(arg0: $MapRegion$Type, arg1: $MapTileChunk$Type, arg2: $MapTileChunk$Type, arg3: integer, arg4: integer): void
public "shouldOverlay"(arg0: $StateHolder$Type<(any), (any)>): boolean
public "isInvisible"(arg0: $BlockState$Type, arg1: $Block$Type, arg2: boolean): boolean
public "hasVanillaColor"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $Registry$Type<($Block$Type)>, arg3: $BlockPos$Type): boolean
public "getUpdateCounter"(): long
public "resetPosition"(): void
public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "getBlockTintIndex"(arg0: $BlockState$Type): integer
public "getSectionBasedHeight"(arg0: $LevelChunk$Type, arg1: integer): integer
public "loadBlockColourFromTexture"(arg0: $BlockState$Type, arg1: boolean, arg2: $Level$Type, arg3: $Registry$Type<($Block$Type)>, arg4: $BlockPos$Type): integer
public "setDirtyInWriteDistance"(arg0: $Player$Type, arg1: $Level$Type): void
public "requestCachedColoursClear"(): void
public "handler$bpm000$xaeroplus$resetSignals"(biomeColorCalculator: $BiomeColorCalculator$Type, overlayManager: $OverlayManager$Type, ci: $CallbackInfo$Type): void
public "wrapOperation$bpm000$xaeroplus$fastMap"(instance: $MapWriter$Type, world: $Level$Type, blockRegistry: $Registry$Type<(any)>, distance: integer, onlyLoad: boolean, biomeRegistry: $Registry$Type<(any)>, overlayManager: $OverlayManager$Type, loadChunks: boolean, updateChunks: boolean, ignoreHeightmaps: boolean, flowers: boolean, detailedDebug: boolean, mutableBlockPos3: $BlockPos$MutableBlockPos$Type, blockTintProvider: $BlockTintProvider$Type, caveDepth: integer, caveStart: integer, layerToWrite: integer, tileChunkX: integer, tileChunkZ: integer, tileChunkLocalX: integer, tileChunkLocalZ: integer, chunkX: integer, chunkZ: integer, original: $Operation$Type<(any)>): boolean
public "handler$bpm000$xaeroplus$setCrossDimWriteSignals"(biomeColorCalculator: $BiomeColorCalculator$Type, overlayManager: $OverlayManager$Type, ci: $CallbackInfo$Type): void
public "handler$bpm000$xaeroplus$fastMapMaxTilesPerCycleSetting"(biomeColorCalculator: $BiomeColorCalculator$Type, overlayManager: $OverlayManager$Type, ci: $CallbackInfo$Type, tilesToUpdateRef: $LocalLongRef$Type, sizeTiles: integer): void
public "handler$bpm000$xaeroplus$setObsidianColumnLocalVar"(world: $Level$Type, blockRegistry: $Registry$Type<(any)>, pixel: $MapBlock$Type, currentPixel: $MapBlock$Type, bchunk: $LevelChunk$Type, insideX: integer, insideZ: integer, highY: integer, lowY: integer, cave: boolean, fullCave: boolean, mappedHeight: integer, canReuseBiomeColours: boolean, ignoreHeightmaps: boolean, biomeRegistry: $Registry$Type<(any)>, flowers: boolean, worldBottomY: integer, mutableBlockPos3: $BlockPos$MutableBlockPos$Type, ci: $CallbackInfo$Type, columnRoofObsidianRef: $LocalBooleanRef$Type): void
public "handler$bpm000$xaeroplus$netherCaveFixInject"(world: $Level$Type, blockRegistry: $Registry$Type<(any)>, pixel: $MapBlock$Type, currentPixel: $MapBlock$Type, bchunk: $LevelChunk$Type, insideX: integer, insideZ: integer, highY: integer, lowY: integer, cave: boolean, fullCave: boolean, mappedHeight: integer, canReuseBiomeColours: boolean, ignoreHeightmaps: boolean, biomeRegistry: $Registry$Type<(any)>, flowers: boolean, worldBottomY: integer, mutableBlockPos3: $BlockPos$MutableBlockPos$Type, ci: $CallbackInfo$Type, caveRef: $LocalBooleanRef$Type, fullCaveRef: $LocalBooleanRef$Type): void
public "handler$bpm000$xaeroplus$obsidianRoofHeadInject"(world: $Level$Type, blockRegistry: $Registry$Type<(any)>, pixel: $MapBlock$Type, currentPixel: $MapBlock$Type, bchunk: $LevelChunk$Type, insideX: integer, insideZ: integer, highY: integer, lowY: integer, cave: boolean, fullCave: boolean, mappedHeight: integer, canReuseBiomeColours: boolean, ignoreHeightmaps: boolean, biomeRegistry: $Registry$Type<(any)>, flowers: boolean, worldBottomY: integer, mutableBlockPos3: $BlockPos$MutableBlockPos$Type, ci: $CallbackInfo$Type, stateRef: $LocalRef$Type<(any)>, hRef: $LocalIntRef$Type, transparentSkipYRef: $LocalIntRef$Type, columnRoofObsidianRef: $LocalBooleanRef$Type): void
public "wrapOperation$bpm000$xaeroplus$checkObsidianRoofColumn"(instance: $OverlayBuilder$Type, original: $Operation$Type<(any)>, columnRoofObsidianRef: $LocalBooleanRef$Type): boolean
public "wrapOperation$bpm000$xaeroplus$getOpacityForObsidianRoof"(instance: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, original: $Operation$Type<(any)>, h: integer): integer
public "isGlowing"(arg0: $BlockState$Type): boolean
public "writeMap"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: double, arg3: double, arg4: double, arg5: $Registry$Type<($Biome$Type)>, arg6: $BiomeColorCalculator$Type, arg7: $OverlayManager$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: $BlockPos$MutableBlockPos$Type, arg14: $BlockTintProvider$Type, arg15: integer): boolean
public "onRender"(arg0: $BiomeColorCalculator$Type, arg1: $OverlayManager$Type): void
public "loadPixel"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $MapBlock$Type, arg3: $MapBlock$Type, arg4: $LevelChunk$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: boolean, arg13: boolean, arg14: $Registry$Type<($Biome$Type)>, arg15: boolean, arg16: integer, arg17: $BlockPos$MutableBlockPos$Type): void
public "writeChunk"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: integer, arg3: boolean, arg4: $Registry$Type<($Biome$Type)>, arg5: $OverlayManager$Type, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: $BlockPos$MutableBlockPos$Type, arg12: $BlockTintProvider$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer, arg18: integer, arg19: integer, arg20: integer, arg21: integer): boolean
get "updateCounter"(): long
set "mapProcessor"(value: $MapProcessor$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWriter$Type = ($MapWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWriter_ = $MapWriter$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUploader" {
import {$TextureUploadPool$Compressed, $TextureUploadPool$Compressed$Type} from "packages/xaero/map/pool/$TextureUploadPool$Compressed"
import {$TextureUploadPool$SubsequentNormal, $TextureUploadPool$SubsequentNormal$Type} from "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal"
import {$TextureUploadPool$Normal, $TextureUploadPool$Normal$Type} from "packages/xaero/map/pool/$TextureUploadPool$Normal"
import {$TextureUploadBenchmark, $TextureUploadBenchmark$Type} from "packages/xaero/map/graphics/$TextureUploadBenchmark"
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploadPool$BranchUpdate, $TextureUploadPool$BranchUpdate$Type} from "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate"
import {$TextureUploadPool$BranchDownload, $TextureUploadPool$BranchDownload$Type} from "packages/xaero/map/pool/$TextureUploadPool$BranchDownload"

export class $TextureUploader {
static readonly "NORMAL": integer
static readonly "NORMALDOWNLOAD": integer
static readonly "COMPRESSED": integer
static readonly "BRANCHUPDATE": integer
static readonly "BRANCHUPDATE_ALLOCATE": integer
static readonly "BRANCHDOWNLOAD": integer
static readonly "SUBSEQUENT_NORMAL": integer

constructor(arg0: $TextureUploadPool$Normal$Type, arg1: $TextureUploadPool$Compressed$Type, arg2: $TextureUploadPool$BranchUpdate$Type, arg3: $TextureUploadPool$BranchUpdate$Type, arg4: $TextureUploadPool$BranchDownload$Type, arg5: $TextureUploadPool$SubsequentNormal$Type, arg6: $TextureUploadBenchmark$Type)

public "finishNewestRequestImmediately"(): void
public "requestUpload"(arg0: $TextureUpload$Type): long
public "requestBranchUpdate"(arg0: boolean, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: $BranchTextureRenderer$Type, arg17: integer, arg18: integer): long
public "requestBranchDownload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): long
public "uploadTextures"(): void
public "requestCompressed"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): long
public "requestSubsequentNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): long
public "requestNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploader$Type = ($TextureUploader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploader_ = $TextureUploader$Type;
}}
declare module "packages/xaero/map/region/texture/$LeafRegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $LeafRegionTexture extends $RegionTexture<($LeafRegionTexture)> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $MapTileChunk$Type)

public "deleteTexturesAndBuffers"(): void
public "addDebugLines"(arg0: $List$Type<(string)>): void
public "shouldIncludeInCache"(): boolean
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
public "shouldHaveContentForBranchUpdate"(): boolean
public "postBufferUpdate"(arg0: boolean): void
public "resetHeights"(): void
public "requestHighlightOnlyUpload"(): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$Type): void
public "hasSourceData"(): boolean
public "getTileChunk"(): $MapTileChunk
public "prepareBuffer"(): void
public "canUpload"(): boolean
public "isUploaded"(): boolean
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<($LeafRegionTexture$Type)>, arg2: boolean): void
get "tileChunk"(): $MapTileChunk
get "uploaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafRegionTexture$Type = ($LeafRegionTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafRegionTexture_ = $LeafRegionTexture$Type;
}}
declare module "packages/xaero/map/region/$MapTile" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"

export class $MapTile implements $PoolUnit {
static readonly "CURRENT_WORLD_INTERPRETATION_VERSION": integer

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
public "isLoaded"(): boolean
public "getBlock"(arg0: integer, arg1: integer): $MapBlock
public "getWrittenCaveStart"(): integer
public "getWrittenCaveDepth"(): integer
public "wasWrittenOnce"(): boolean
public "setWrittenCave"(arg0: integer, arg1: integer): void
public "setWrittenOnce"(arg0: boolean): void
public "setWorldInterpretationVersion"(arg0: integer): void
public "getWorldInterpretationVersion"(): integer
public "getBlockColumn"(arg0: integer): ($MapBlock)[]
public "setBlock"(arg0: integer, arg1: integer, arg2: $MapBlock$Type): void
public "setLoaded"(arg0: boolean): void
public "getChunkX"(): integer
public "getChunkZ"(): integer
get "loaded"(): boolean
get "writtenCaveStart"(): integer
get "writtenCaveDepth"(): integer
set "writtenOnce"(value: boolean)
set "worldInterpretationVersion"(value: integer)
get "worldInterpretationVersion"(): integer
set "loaded"(value: boolean)
get "chunkX"(): integer
get "chunkZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTile$Type = ($MapTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTile_ = $MapTile$Type;
}}
declare module "packages/xaero/map/file/worldsave/$WorldDataHandler" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$WorldDataReader, $WorldDataReader$Type} from "packages/xaero/map/file/worldsave/$WorldDataReader"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Executor, $Executor$Type} from "packages/xaero/map/executor/$Executor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$WorldDataHandler$Result, $WorldDataHandler$Result$Type} from "packages/xaero/map/file/worldsave/$WorldDataHandler$Result"

export class $WorldDataHandler {

constructor(arg0: $WorldDataReader$Type, arg1: $Executor$Type)

public static "onServerWorldUnload"(arg0: $ServerLevel$Type): void
public "handleRenderExecutor"(): void
public "getWorldDir"(): $Path
public "getWorldServer"(): $ServerLevel
public "getWorldDataReader"(): $WorldDataReader
public "buildRegion"(arg0: $MapRegion$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: boolean, arg5: (integer)[]): $WorldDataHandler$Result
public "prepareSingleplayer"(arg0: $Level$Type, arg1: $MapProcessor$Type): void
get "worldDir"(): $Path
get "worldServer"(): $ServerLevel
get "worldDataReader"(): $WorldDataReader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Type = ($WorldDataHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler_ = $WorldDataHandler$Type;
}}
declare module "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit" {
import {$PoolUnit, $PoolUnit$Type} from "packages/xaero/map/pool/$PoolUnit"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $PoolTextureDirectBufferUnit implements $PoolUnit {

constructor(...arg0: (any)[])

public "reset"(): void
public "create"(...arg0: (any)[]): void
public static "createBuffer"(): $ByteBuffer
public "getDirectBuffer"(): $ByteBuffer
get "directBuffer"(): $ByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolTextureDirectBufferUnit$Type = ($PoolTextureDirectBufferUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoolTextureDirectBufferUnit_ = $PoolTextureDirectBufferUnit$Type;
}}
declare module "packages/xaero/map/effects/$NoCaveMapsEffect" {
import {$WorldMapStatusEffect, $WorldMapStatusEffect$Type} from "packages/xaero/map/effects/$WorldMapStatusEffect"

export class $NoCaveMapsEffect extends $WorldMapStatusEffect {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCaveMapsEffect$Type = ($NoCaveMapsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCaveMapsEffect_ = $NoCaveMapsEffect$Type;
}}
declare module "packages/xaero/map/file/$OldFormatSupport" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $OldFormatSupport {
 "cc2BiomeRenames": $ImmutableMap<(string), (string)>

constructor()

public "loadModdedStates"(arg0: $MapProcessor$Type, arg1: string, arg2: string, arg3: string): void
public "getStateForId"(arg0: integer): $BlockState
public "loadVanillaStates"(): void
public "loadStates"(): void
public "fixBiome"(arg0: integer, arg1: integer): string
public "fixBiome"(arg0: integer, arg1: integer, arg2: string): string
public "fixBiome"(arg0: string, arg1: integer): string
public "fixBlock"(arg0: $CompoundTag$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldFormatSupport$Type = ($OldFormatSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OldFormatSupport_ = $OldFormatSupport$Type;
}}
declare module "packages/xaero/map/region/$MapTileChunk" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$SeenChunksTrackingMapTileChunk, $SeenChunksTrackingMapTileChunk$Type} from "packages/xaeroplus/feature/extensions/$SeenChunksTrackingMapTileChunk"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$LeafRegionTexture, $LeafRegionTexture$Type} from "packages/xaero/map/region/texture/$LeafRegionTexture"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $MapTileChunk implements $SeenChunksTrackingMapTileChunk {
static readonly "SIDE_LENGTH": integer

constructor(arg0: $MapRegion$Type, arg1: integer, arg2: integer)

public "getTile"(arg0: integer, arg1: integer): $MapTile
public "toString"(): string
public "clean"(arg0: $MapProcessor$Type): void
public "getX"(): integer
public "getLoadState"(): integer
public "setLoadState"(arg0: byte): void
public "getLeafTexture"(): $LeafRegionTexture
public "getNeighbourTileChunk"(arg0: integer, arg1: integer, arg2: $MapProcessor$Type, arg3: boolean): $MapTileChunk
public "includeInSave"(): boolean
public "setHasHadTerrain"(): void
public "setToUpdateBuffers"(arg0: boolean): void
public "updateBuffers"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: boolean, arg4: $BlockStateShortShapeCache$Type): void
public "hasHighlightsIfUndiscovered"(): boolean
public "hasHadTerrain"(): boolean
public "getTileGridsCache"(): ((byte)[])[]
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $MapProcessor$Type, arg6: integer, arg7: integer): void
public "getSeenTiles"(): ((boolean)[])[]
public "unsetHasHadTerrain"(): void
public "setHasHighlightsIfUndiscovered"(arg0: boolean): void
public "handler$bpk000$xaeroplus$setTile"(x: integer, z: integer, tile: $MapTile$Type, blockStateShortShapeCache: $BlockStateShortShapeCache$Type, ci: $CallbackInfo$Type): void
public "handler$bpk000$xaeroplus$readCacheData"(minorSaveVersion: integer, majorSaveVersion: integer, input: $DataInputStream$Type, usableBuffer: (byte)[], integerByteBuffer: (byte)[], mapProcessor: $MapProcessor$Type, x: integer, y: integer, ci: $CallbackInfo$Type): void
public "getInRegion"(): $MapRegion
public "getToUpdateBuffers"(): boolean
public "hasHighlights"(): boolean
public "writeCacheData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($LeafRegionTexture$Type)>): void
public "setHasHighlights"(arg0: boolean): void
public "resetHeights"(): void
public "unincludeInSave"(): void
public "getZ"(): integer
public "getTimer"(): integer
public "wrapOperation$bpk000$xaeroplus$useRegionDimensionInsteadOfMapWorld"(mapWorld: $MapWorld$Type, original: $Operation$Type<(any)>): $MapDimension
public "wasChanged"(): boolean
public "setChanged"(arg0: boolean): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MapTile$Type, arg3: $BlockStateShortShapeCache$Type): void
public "decTimer"(): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ByteBuffer$Type, arg7: integer): void
get "x"(): integer
get "loadState"(): integer
set "loadState"(value: byte)
get "leafTexture"(): $LeafRegionTexture
set "toUpdateBuffers"(value: boolean)
get "tileGridsCache"(): ((byte)[])[]
get "seenTiles"(): ((boolean)[])[]
get "inRegion"(): $MapRegion
get "toUpdateBuffers"(): boolean
get "z"(): integer
get "timer"(): integer
set "changed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileChunk$Type = ($MapTileChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileChunk_ = $MapTileChunk$Type;
}}
declare module "packages/xaero/map/file/$MapRegionInfo" {
import {$File, $File$Type} from "packages/java/io/$File"

export interface $MapRegionInfo {

 "shouldCache"(): boolean
 "setShouldCache"(arg0: boolean, arg1: string): void
 "getCacheFile"(): $File
 "setCacheFile"(arg0: $File$Type): void
 "getRegionFile"(): $File
 "hasLookedForCache"(): boolean
 "getWorldId"(): string
 "getMwId"(): string
 "getDimId"(): string
 "getRegionX"(): integer
 "getRegionZ"(): integer
}

export namespace $MapRegionInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionInfo$Type = ($MapRegionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionInfo_ = $MapRegionInfo$Type;
}}
declare module "packages/xaero/map/misc/$CaveStartCalculator" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"

export class $CaveStartCalculator {

constructor(arg0: $MapWriter$Type)

public "getCaving"(arg0: double, arg1: double, arg2: double, arg3: $Level$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveStartCalculator$Type = ($CaveStartCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveStartCalculator_ = $CaveStartCalculator$Type;
}}
declare module "packages/xaero/map/gui/$IScreenBase" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/map/gui/dropdown/$DropDownWidget"
import {$IDropDownContainer, $IDropDownContainer$Type} from "packages/xaero/map/gui/dropdown/$IDropDownContainer"

export interface $IScreenBase extends $IDropDownContainer {

 "shouldSkipWorldRender"(): boolean
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
}

export namespace $IScreenBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenBase$Type = ($IScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenBase_ = $IScreenBase$Type;
}}
declare module "packages/xaero/map/world/$MapDimension" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"
import {$LayeredRegionManager, $LayeredRegionManager$Type} from "packages/xaero/map/region/$LayeredRegionManager"
import {$MapFullReloader, $MapFullReloader$Type} from "packages/xaero/map/$MapFullReloader"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$DimensionSpecialEffects, $DimensionSpecialEffects$Type} from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $MapDimension {
 "futureMultiworldWritable": boolean
 "futureMultiworldServerBased": boolean
 "currentMultiworldWritable": boolean
readonly "regionsToCache": $ArrayList<($LeveledRegion<(any)>)>

constructor(arg0: $MapWorld$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $HighlighterRegistry$Type)

public "clear"(): void
public "isCacheOnlyMode"(arg0: $Registry$Type<($DimensionType$Type)>): boolean
public "isUsingWorldSave"(): boolean
public "getLayeredMapRegions"(): $LayeredRegionManager
public "getDimensionType"(arg0: $Registry$Type<($DimensionType$Type)>): $DimensionType
public static "getDimensionType"(arg0: $MapDimension$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $Registry$Type<($DimensionType$Type)>): $DimensionType
public "getMapWorld"(): $MapWorld
public "isUsingUnknownDimensionType"(arg0: $Registry$Type<($DimensionType$Type)>): boolean
public "getSkyDarken"(arg0: float, arg1: $ClientLevel$Type, arg2: $Registry$Type<($DimensionType$Type)>): float
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "getCurrentMultiworld"(): string
public "getMultiworldIdsCopy"(): $List<(string)>
public "getMultiworldName"(arg0: string): string
public "getCaveModeType"(): integer
public "calculateDimScale"(arg0: $Registry$Type<($DimensionType$Type)>): double
public "calculateDimDiv"(arg0: $Registry$Type<($DimensionType$Type)>, arg1: $DimensionType$Type): double
public "getDimensionTypeId"(): $ResourceLocation
public "getFullReloader"(): $MapFullReloader
public "isFutureMultiworldServerBased"(): boolean
public "getFutureMultiworldUnsynced"(): string
public "updateFutureAutomaticUnsynced"(arg0: $Minecraft$Type, arg1: any): void
public "resetCustomMultiworldUnsynced"(): void
public "addWorldSaveRegionDetection"(arg0: $RegionDetection$Type): void
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "getFutureCustomSelectedMultiworld"(): string
public "pickDefaultCustomMultiworldUnsynced"(): void
public "onClearCachedHighlightHashes"(): void
public "getWorldSaveRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "deleteMultiworldMapDataUnsynced"(arg0: string): void
public "getWorldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
public "hasConfirmedMultiworld"(): boolean
public "confirmMultiworldUnsynced"(): void
public "setMultiworldUnsynced"(arg0: string): void
public "switchToFutureUnsynced"(): void
public "onWorldChangeUnsynced"(arg0: $Level$Type): void
public "hasDoneRegionDetection"(): boolean
public "getDimensionEffects"(arg0: $Registry$Type<($DimensionType$Type)>): $DimensionSpecialEffects
public "onCreationUnsynced"(): void
public "getPlayerMapKey"(): $MapConnectionNode
public "addMultiworldChecked"(arg0: string): boolean
public "getMainFolderPath"(): $Path
public "getOldFolderPath"(): $Path
public "saveConfigUnsynced"(): void
public "setMultiworldName"(arg0: string, arg1: string): void
public "deleteMultiworldId"(arg0: string): void
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "toggleCaveModeType"(arg0: boolean): void
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
public "isAutoSelected"(): boolean
public "preDetection"(): void
public "clearFullMapReload"(): void
public "startFullMapReload"(arg0: integer, arg1: boolean, arg2: $MapProcessor$Type): void
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "getDimId"(): $ResourceKey<($Level)>
public "getShadowR"(): float
public "getShadowG"(): float
public "getShadowB"(): float
get "usingWorldSave"(): boolean
get "layeredMapRegions"(): $LayeredRegionManager
get "mapWorld"(): $MapWorld
get "highlightHandler"(): $DimensionHighlighterHandler
get "currentMultiworld"(): string
get "multiworldIdsCopy"(): $List<(string)>
get "caveModeType"(): integer
get "dimensionTypeId"(): $ResourceLocation
get "fullReloader"(): $MapFullReloader
get "futureMultiworldServerBased"(): boolean
get "futureMultiworldUnsynced"(): string
get "futureUsingWorldSaveUnsynced"(): boolean
get "futureCustomSelectedMultiworld"(): string
get "linkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "worldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
set "multiworldUnsynced"(value: string)
get "playerMapKey"(): $MapConnectionNode
get "mainFolderPath"(): $Path
get "oldFolderPath"(): $Path
get "selectedMapKeyUnsynced"(): $MapConnectionNode
get "autoSelected"(): boolean
get "dimId"(): $ResourceKey<($Level)>
get "shadowR"(): float
get "shadowG"(): float
get "shadowB"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDimension$Type = ($MapDimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDimension_ = $MapDimension$Type;
}}
declare module "packages/xaero/map/region/$LayeredRegionManager" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$MapLayer, $MapLayer$Type} from "packages/xaero/map/region/$MapLayer"

export class $LayeredRegionManager {

constructor(arg0: $MapDimension$Type)

public "remove"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "clear"(): void
public "size"(): integer
public "getLayer"(arg0: integer): $MapLayer
public "applyToEachLoadedLayer"(arg0: $BiConsumer$Type<(integer), ($MapLayer$Type)>): void
public "bumpLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "bumpLoadedRegion"(arg0: $MapRegion$Type): void
public "loadedCount"(): integer
public "onClearCachedHighlightHashes"(): void
public "getLoadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
public "addListRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "removeListRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "removeLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "preDetection"(): void
public "addLoadedRegion"(arg0: $LeveledRegion$Type<(any)>): void
public "getUnsyncedSet"(): $Set<($LeveledRegion<(any)>)>
public "getLoadedRegion"(arg0: integer): $LeveledRegion<(any)>
public "getLeaf"(arg0: integer, arg1: integer, arg2: integer): $MapRegion
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$Type): void
get "loadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
get "unsyncedSet"(): $Set<($LeveledRegion<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredRegionManager$Type = ($LayeredRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredRegionManager_ = $LayeredRegionManager$Type;
}}
declare module "packages/xaero/map/executor/$Executor" {
import {$ProcessorHandle, $ProcessorHandle$Type} from "packages/net/minecraft/util/thread/$ProcessorHandle"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$BlockableEventLoop, $BlockableEventLoop$Type} from "packages/net/minecraft/util/thread/$BlockableEventLoop"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Executor extends $BlockableEventLoop<($Runnable)> {

constructor(arg0: string, arg1: $Thread$Type)

public "runAllTasks"(): void
public static "of"<Msg>(arg0: string, arg1: $Consumer$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$Type = ($Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executor_ = $Executor$Type;
}}
declare module "packages/xaero/map/message/$WorldMapMessage" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $WorldMapMessage<T extends $WorldMapMessage<(T)>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapMessage$Type<T> = ($WorldMapMessage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapMessage_<T> = $WorldMapMessage$Type<(T)>;
}}
declare module "packages/xaero/map/gui/$GuiSettings" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LocalIntRef, $LocalIntRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ISettingEntry, $ISettingEntry$Type} from "packages/xaero/map/gui/$ISettingEntry"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/map/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $GuiSettings extends $ScreenBase {
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(arg0: $Component$Type, arg1: $Screen$Type, arg2: $Screen$Type)

public "getIndex"(arg0: $GuiEventListener$Type): integer
public "handler$cao001$xaeroplus$adjustForwardBackButtonPositionsForExtraRows"(ci: $CallbackInfo$Type): void
public "wrapOperation$cao000$xaeroplus$adjustSettingEntryWidth$mixinextras$bridge$31"(instance: $ISettingEntry$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$Type<(any)>, i: $LocalIntRef$Type): $AbstractWidget
public "getEntriesCopy"(): ($ISettingEntry)[]
public "restoreFocus"(arg0: integer): void
public "handler$bon000$xaeroplus$drawScreen"(guiGraphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, delta: float, ci: $CallbackInfo$Type): void
public "handler$cao001$xaeroplus$adjustEntriesPerPage"(ci: $CallbackInfo$Type): void
public "redirect$cao001$xaeroplus$settingListToRenderRedirect"(instance: $ArrayList$Type<(any)>, entryObject: any): boolean
public "wrapOperation$cao000$xaeroplus$adjustSettingEntryWidth"(instance: $ISettingEntry$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$Type<(any)>, i: integer): $AbstractWidget
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "init"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "tick"(): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "entriesCopy"(): ($ISettingEntry)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSettings$Type = ($GuiSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSettings_ = $GuiSettings$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$BranchDownload" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchDownload extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$BranchDownload$Type = ($TextureUpload$BranchDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$BranchDownload_ = $TextureUpload$BranchDownload$Type;
}}
declare module "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {

 "getTrackingLevel"(arg0: $Player$Type, arg1: $Player$Type): integer
 "isPartySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$Type;
}}
declare module "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {

constructor()

public "remove"(arg0: $UUID$Type): void
public "update"(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
public "reset"(): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$Type;
}}
declare module "packages/xaero/map/gui/$ExportScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/map/gui/$GuiSettings"
import {$PNGExportResult, $PNGExportResult$Type} from "packages/xaero/map/file/export/$PNGExportResult"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $ExportScreen extends $GuiSettings {
 "fullExport": boolean
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(arg0: $Screen$Type, arg1: $Screen$Type, arg2: $MapProcessor$Type, arg3: $MapTileSelection$Type)

public "getSelection"(): $MapTileSelection
public "onExportDone"(arg0: $PNGExportResult$Type): void
public "init"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "selection"(): $MapTileSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExportScreen$Type = ($ExportScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExportScreen_ = $ExportScreen$Type;
}}
declare module "packages/xaero/map/effects/$NoWorldMapEffect" {
import {$WorldMapStatusEffect, $WorldMapStatusEffect$Type} from "packages/xaero/map/effects/$WorldMapStatusEffect"

export class $NoWorldMapEffect extends $WorldMapStatusEffect {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoWorldMapEffect$Type = ($NoWorldMapEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoWorldMapEffect_ = $NoWorldMapEffect$Type;
}}
declare module "packages/xaero/map/pool/$TextureUploadPool$BranchDownload" {
import {$TextureUpload$BranchDownload, $TextureUpload$BranchDownload$Type} from "packages/xaero/map/graphics/$TextureUpload$BranchDownload"
import {$TextureUploadPool, $TextureUploadPool$Type} from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<($TextureUpload$BranchDownload)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $TextureUpload$BranchDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchDownload$Type = ($TextureUploadPool$BranchDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchDownload_ = $TextureUploadPool$BranchDownload$Type;
}}
declare module "packages/xaero/map/capabilities/$ServerWorldCapabilities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerWorldCapabilities {
 "loaded": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCapabilities$Type = ($ServerWorldCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldCapabilities_ = $ServerWorldCapabilities$Type;
}}
declare module "packages/xaero/map/pool/$PoolUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PoolUnit {

 "create"(...arg0: (any)[]): void

(...arg0: (any)[]): void
}

export namespace $PoolUnit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolUnit$Type = ($PoolUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoolUnit_ = $PoolUnit$Type;
}}
declare module "packages/xaero/map/biome/$BlockTintProvider" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeColorCalculator, $BiomeColorCalculator$Type} from "packages/xaero/map/biome/$BiomeColorCalculator"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$Type} from "packages/xaero/map/cache/$BrokenBlockTintCache"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockTintProvider implements $BlockAndTintGetter {

constructor(arg0: $Registry$Type<($Biome$Type)>, arg1: $BiomeColorCalculator$Type, arg2: $MapProcessor$Type, arg3: $BrokenBlockTintCache$Type, arg4: $MapWriter$Type)

public "getBiomeColor"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: boolean, arg3: $MapTile$Type, arg4: integer): integer
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "getMinBuildHeight"(): integer
public "getLightEngine"(): $LevelLightEngine
public "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
public "getHeight"(): integer
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
public "canSeeSky"(arg0: $BlockPos$Type): boolean
public "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
public "getMaxLightLevel"(): integer
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getMaxBuildHeight"(): integer
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getModelDataManager"(): $ModelDataManager
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBlockEntityRenderData"(pos: $BlockPos$Type): any
public "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
get "minBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "height"(): integer
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintProvider$Type = ($BlockTintProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTintProvider_ = $BlockTintProvider$Type;
}}
declare module "packages/xaero/map/gui/message/$MessageBox" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Message, $Message$Type} from "packages/xaero/map/gui/message/$Message"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $MessageBox {


public "getIterator"(): $Iterator<($Message)>
public "getCapacity"(): integer
public "addMessage"(arg0: $Component$Type): void
public "addMessageWithSource"(arg0: $Component$Type, arg1: $Component$Type): void
get "iterator"(): $Iterator<($Message)>
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBox$Type = ($MessageBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBox_ = $MessageBox$Type;
}}
declare module "packages/xaero/map/region/$OverlayBuilder" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Overlay, $Overlay$Type} from "packages/xaero/map/region/$Overlay"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $OverlayBuilder {

constructor(arg0: $OverlayManager$Type)

public "isEmpty"(): boolean
public "build"(arg0: $BlockState$Type, arg1: integer, arg2: byte, arg3: $MapProcessor$Type, arg4: $ResourceKey$Type<($Biome$Type)>): void
public "finishBuilding"(arg0: $MapBlock$Type): void
public "getOverlayBiome"(): $ResourceKey<($Biome)>
public "getCurrentOverlay"(): $Overlay
public "startBuilding"(): void
public "setOverlayBiome"(arg0: $ResourceKey$Type<($Biome$Type)>): void
get "empty"(): boolean
get "overlayBiome"(): $ResourceKey<($Biome)>
get "currentOverlay"(): $Overlay
set "overlayBiome"(value: $ResourceKey$Type<($Biome$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayBuilder$Type = ($OverlayBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayBuilder_ = $OverlayBuilder$Type;
}}
declare module "packages/xaero/map/gui/message/$Message" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $Message {

constructor(arg0: $Component$Type, arg1: long)

public "getText"(): $Component
public "getAdditionTime"(): long
get "text"(): $Component
get "additionTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/xaero/map/region/$Overlay" {
import {$MapTile, $MapTile$Type} from "packages/xaero/map/region/$MapTile"
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MapWriter, $MapWriter$Type} from "packages/xaero/map/$MapWriter"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MapBlock, $MapBlock$Type} from "packages/xaero/map/region/$MapBlock"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapPixel, $MapPixel$Type} from "packages/xaero/map/region/$MapPixel"

export class $Overlay extends $MapPixel {

constructor(arg0: $BlockState$Type, arg1: byte, arg2: boolean)

public "getOpacity"(): integer
public "equals"(arg0: $Overlay$Type): boolean
public "write"(arg0: $BlockState$Type, arg1: byte, arg2: boolean): void
public "increaseOpacity"(arg0: integer): void
public "getPixelColour"(arg0: $MapBlock$Type, arg1: (integer)[], arg2: $MapWriter$Type, arg3: $Level$Type, arg4: $MapDimension$Type, arg5: $Registry$Type<($Block$Type)>, arg6: $MapTileChunk$Type, arg7: $MapTileChunk$Type, arg8: $MapTileChunk$Type, arg9: $MapTileChunk$Type, arg10: $MapTile$Type, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BlockPos$MutableBlockPos$Type, arg16: $Registry$Type<($Biome$Type)>, arg17: $Registry$Type<($DimensionType$Type)>, arg18: float, arg19: float, arg20: float, arg21: $BlockTintProvider$Type, arg22: $MapProcessor$Type, arg23: $OverlayManager$Type): void
public "toRenderString"(): string
public "getParametres"(): integer
public "isWater"(): boolean
get "opacity"(): integer
get "parametres"(): integer
get "water"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$Type = ($Overlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Overlay_ = $Overlay$Type;
}}
declare module "packages/xaero/map/mcworld/$IWorldMapClientWorld" {
import {$WorldMapClientWorldData, $WorldMapClientWorldData$Type} from "packages/xaero/map/mcworld/$WorldMapClientWorldData"

export interface $IWorldMapClientWorld {

 "getXaero_worldmapData"(): $WorldMapClientWorldData
 "setXaero_worldmapData"(arg0: $WorldMapClientWorldData$Type): void
}

export namespace $IWorldMapClientWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientWorld$Type = ($IWorldMapClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientWorld_ = $IWorldMapClientWorld$Type;
}}
declare module "packages/xaero/map/server/player/$ServerPlayerData" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $ServerPlayerData {

constructor(arg0: $UUID$Type)

public static "get"(arg0: $ServerPlayer$Type): $ServerPlayerData
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getLastTrackedPlayerSync"(): long
public "setLastTrackedPlayerSync"(arg0: long): void
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
public "setOpacData"(arg0: any): void
public "getOpacData"(): any
public "hasMod"(): boolean
get "lastSyncedData"(): $SyncedTrackedPlayer
get "currentlySyncedPlayers"(): $Set<($UUID)>
get "lastTrackedPlayerSync"(): long
set "lastTrackedPlayerSync"(value: long)
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
set "opacData"(value: any)
get "opacData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$Type = ($ServerPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$Type;
}}
declare module "packages/xaero/map/world/$MapConnectionManager" {
import {$MapConnectionNode, $MapConnectionNode$Type} from "packages/xaero/map/world/$MapConnectionNode"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $MapConnectionManager {

constructor()

public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$Type): void
public "addConnection"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): void
public "isConnected"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): boolean
public "removeConnection"(arg0: $MapConnectionNode$Type, arg1: $MapConnectionNode$Type): void
public "renameDimension"(arg0: string, arg1: string): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionManager$Type = ($MapConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionManager_ = $MapConnectionManager$Type;
}}
declare module "packages/xaero/map/$MapRunner" {
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$MapRunnerTask, $MapRunnerTask$Type} from "packages/xaero/map/task/$MapRunnerTask"

export class $MapRunner implements $Runnable {

constructor()

public "run"(): void
public "stop"(): void
public "addTask"(arg0: $MapRunnerTask$Type): void
public "doTasks"(arg0: $MapProcessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunner$Type = ($MapRunner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunner_ = $MapRunner$Type;
}}
declare module "packages/xaero/map/region/texture/$RegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$RegionTextureBiomes, $RegionTextureBiomes$Type} from "packages/xaero/map/region/texture/$RegionTextureBiomes"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $RegionTexture<T extends $RegionTexture<(T)>> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $LeveledRegion$Type<(T)>)

public "getRegion"(): $LeveledRegion<(T)>
public "getHeight"(arg0: integer, arg1: integer): integer
public "shouldUpload"(): boolean
public "getTopHeight"(arg0: integer, arg1: integer): integer
public "getGlColorTexture"(): integer
public "getTextureHasLight"(): boolean
public "deleteTexturesAndBuffers"(): void
public "setCachePrepared"(arg0: boolean): void
public "getColorBuffer"(): $PoolTextureDirectBufferUnit
public "setToUpload"(arg0: boolean): void
public "deleteColorBuffer"(): void
public "addDebugLines"(arg0: $List$Type<(string)>): void
public "shouldIncludeInCache"(): boolean
public "isCachePrepared"(): boolean
public "getBufferedTextureVersion"(): integer
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<(T)>): void
public "resetBiomes"(): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<(T)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
public "shouldHaveContentForBranchUpdate"(): boolean
public "setBufferedTextureVersion"(arg0: integer): void
public "shouldDownloadFromPBO"(): boolean
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$Type, arg1: $TextureUploader$Type, arg2: $LeveledRegion$Type<(T)>, arg3: $BranchTextureRenderer$Type, arg4: integer, arg5: integer): long
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$Type): void
public "putTopHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putTopHeight"(arg0: integer, arg1: integer): void
public "onTextureDeletion"(): void
public "setShouldDownloadFromPBO"(arg0: boolean): void
public "getTextureVersion"(): integer
public "removeHeight"(arg0: integer, arg1: integer): void
public "removeTopHeight"(arg0: integer, arg1: integer): void
public "ensureBiomeIndexStorage"(): void
public "hasSourceData"(): boolean
public "bindColorTexture"(arg0: boolean): integer
public "prepareBuffer"(): void
public "getBufferHasLight"(): boolean
public "isColorBufferCompressed"(): boolean
public "getDirectColorBuffer"(): $ByteBuffer
public "getColorBufferFormat"(): integer
public "getTimer"(): integer
public "getBiome"(arg0: integer, arg1: integer): $ResourceKey<($Biome)>
public "getBiomes"(): $RegionTextureBiomes
public "setBiome"(arg0: integer, arg1: integer, arg2: $ResourceKey$Type<($Biome$Type)>): void
public "deletePBOs"(): void
public "resetTimer"(): void
public "putHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putHeight"(arg0: integer, arg1: integer): void
public "decTimer"(): void
public "canUpload"(): boolean
public "isUploaded"(): boolean
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<(T)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<(T)>, arg2: boolean): void
get "region"(): $LeveledRegion<(T)>
get "glColorTexture"(): integer
get "textureHasLight"(): boolean
set "cachePrepared"(value: boolean)
get "colorBuffer"(): $PoolTextureDirectBufferUnit
set "toUpload"(value: boolean)
get "cachePrepared"(): boolean
get "bufferedTextureVersion"(): integer
set "bufferedTextureVersion"(value: integer)
get "textureVersion"(): integer
get "bufferHasLight"(): boolean
get "colorBufferCompressed"(): boolean
get "directColorBuffer"(): $ByteBuffer
get "colorBufferFormat"(): integer
get "timer"(): integer
get "biomes"(): $RegionTextureBiomes
get "uploaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTexture$Type<T> = ($RegionTexture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionTexture_<T> = $RegionTexture$Type<(T)>;
}}
declare module "packages/xaero/map/graphics/$CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {

constructor()

public "getRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "renderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$Type = ($CustomVertexConsumers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$Type;
}}
declare module "packages/xaero/map/deallocator/$ByteBufferDeallocator" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $ByteBufferDeallocator {

constructor()

public "deallocate"(arg0: $ByteBuffer$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferDeallocator$Type = ($ByteBufferDeallocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufferDeallocator_ = $ByteBufferDeallocator$Type;
}}
declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {

constructor(arg0: integer)

public static "defaultTextureBind"(arg0: integer): void
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $Runnable$Type, arg3: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "draw"(arg0: $MultiTextureRenderTypeRenderer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$Type;
}}
declare module "packages/xaero/map/highlight/$DimensionHighlighterHandler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$Type} from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $DimensionHighlighterHandler {

constructor(arg0: $MapDimension$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $HighlighterRegistry$Type)

public static "getKey"(arg0: integer, arg1: integer): long
public "applyChunkHighlightColors"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $PoolTextureDirectBufferUnit$Type, arg5: $PoolTextureDirectBufferUnit$Type, arg6: boolean, arg7: boolean, arg8: boolean): $PoolTextureDirectBufferUnit
public "getBlockHighlightSubtleTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "getBlockHighlightBluntTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "getRegionHash"(arg0: integer, arg1: integer): integer
public "shouldApplyRegionHighlights"(regionX: integer, regionZ: integer, discovered: boolean): boolean
public static "getXFromKey"(arg0: long): integer
public static "getZFromKey"(arg0: long): integer
public "clearCachedHash"(arg0: integer, arg1: integer): void
public "clearCachedHashes"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$Type = ($DimensionHighlighterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$Type;
}}
declare module "packages/xaero/map/file/$MapSaveLoad" {
import {$ZipOutputStream, $ZipOutputStream$Type} from "packages/java/util/zip/$ZipOutputStream"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$OldFormatSupport, $OldFormatSupport$Type} from "packages/xaero/map/file/$OldFormatSupport"
import {$BranchLeveledRegion, $BranchLeveledRegion$Type} from "packages/xaero/map/region/$BranchLeveledRegion"
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegionDetection, $RegionDetection$Type} from "packages/xaero/map/file/$RegionDetection"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$BiomeGetter, $BiomeGetter$Type} from "packages/xaero/map/biome/$BiomeGetter"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$PNGExporter, $PNGExporter$Type} from "packages/xaero/map/file/export/$PNGExporter"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$ExportScreen, $ExportScreen$Type} from "packages/xaero/map/gui/$ExportScreen"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"
import {$MapTileSelection, $MapTileSelection$Type} from "packages/xaero/map/gui/$MapTileSelection"

export class $MapSaveLoad {
static readonly "SAVE_TIME": integer
static readonly "currentCacheSaveMajorVersion": integer
static readonly "currentCacheSaveMinorVersion": integer
 "loadingFiles": boolean
 "saveAll": boolean
 "mainTextureLevel": integer

constructor(arg0: $OverlayManager$Type, arg1: $PNGExporter$Type, arg2: $OldFormatSupport$Type, arg3: $BlockStateShortShapeCache$Type)

public "run"(arg0: $HolderLookup$Type<($Block$Type)>, arg1: $Registry$Type<($Block$Type)>, arg2: $Registry$Type<($Fluid$Type)>, arg3: $BiomeGetter$Type, arg4: $Registry$Type<($Biome$Type)>): void
public "getFile"(arg0: $MapRegion$Type): $File
public "isRegionDetectionComplete"(): boolean
public "getNextToLoadByViewing"(): $LeveledRegion<(any)>
public "requestLoad"(arg0: $MapRegion$Type, arg1: string): void
public "requestLoad"(arg0: $MapRegion$Type, arg1: string, arg2: boolean): void
public "setNextToLoadByViewing"(arg0: $LeveledRegion$Type<(any)>): void
public "setMapProcessor"(arg0: $MapProcessor$Type): void
public "getCacheFile"(arg0: $MapRegionInfo$Type, arg1: integer, arg2: boolean, arg3: boolean): $File
public static "getRootFolder"(arg0: string): $Path
public "toCacheContains"(arg0: $LeveledRegion$Type<(any)>): boolean
public "removeToLoad"(arg0: $MapRegion$Type): void
public "removeTempCacheRequest"(arg0: $File$Type): boolean
public "addTempCacheRequest"(arg0: $File$Type): void
public "getSizeOfToLoad"(): integer
public "getSizeOfToLoadBranchCache"(): integer
public "requestBranchCache"(arg0: $BranchLeveledRegion$Type, arg1: string): void
public "requestBranchCache"(arg0: $BranchLeveledRegion$Type, arg1: string, arg2: boolean): void
public "handler$bpj000$xaeroplus$getOldFolder"(oldUnfixedMainId: string, dim: string, cir: $CallbackInfoReturnable$Type<(any)>): void
public "getTempFile"(arg0: $File$Type): $File
public "getCaveLayerFolder"(arg0: integer, arg1: $Path$Type): $Path
public "requestCache"(arg0: $LeveledRegion$Type<(any)>): void
public "getNormalFile"(arg0: $MapRegion$Type): $File
public "getOldFolder"(arg0: string, arg1: string): $Path
public "detectRegions"(arg0: integer): void
public "detectRegionsFromFiles"(arg0: $MapDimension$Type, arg1: string, arg2: string, arg3: string, arg4: $Path$Type, arg5: string, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Consumer$Type<($RegionDetection$Type)>): void
public "clearToLoad"(): void
public "setRegionDetectionComplete"(arg0: boolean): void
public "getOldFormatSupport"(): $OldFormatSupport
public "safeMoveAndReplace"(arg0: $Path$Type, arg1: $Path$Type, arg2: string, arg3: string): void
public "getMWSubFolder"(arg0: string, arg1: string, arg2: string): $Path
public "getMainFolder"(arg0: string, arg1: string): $Path
public "removeToCache"(arg0: $MapDimension$Type, arg1: integer): $LeveledRegion<(any)>
public "removeToCache"(arg0: $LeveledRegion$Type<(any)>): void
public "safeDelete"(arg0: $Path$Type, arg1: string): void
public "handler$bpj000$xaeroplus$closeZipOutputStream"(region: $MapRegion$Type, extraAttempts: integer, cir: $CallbackInfoReturnable$Type<(any)>, zipOutShare: $LocalRef$Type<(any)>): void
public "handler$bpj000$xaeroplus$saveRegionWriteZipOutputStream"(region: $MapRegion$Type, extraAttempts: integer, cir: $CallbackInfoReturnable$Type<(any)>, zipOut: $ZipOutputStream$Type): void
public "redirect$bpj000$xaeroplus$replaceSaveRegionZipOutputStream"(out: $OutputStream$Type, zipOut: $ZipOutputStream$Type, zipOutShare: $LocalRef$Type<(any)>): $DataOutputStream
public "redirect$bpj000$xaeroplus$replaceSaveRegionZipOutputStream$mixinextras$bridge$59"(out: $OutputStream$Type, zipOut: $LocalRef$Type<(any)>, zipOutShare: $LocalRef$Type<(any)>): $DataOutputStream
public "backupFile"(arg0: $File$Type, arg1: integer): void
public "saveExists"(arg0: $MapRegion$Type): boolean
public "getToSave"(): $ArrayList<($MapRegion)>
public "exportPNG"(arg0: $ExportScreen$Type, arg1: $MapTileSelection$Type): boolean
public "loadRegion"(arg0: $MapRegion$Type, arg1: $HolderLookup$Type<($Block$Type)>, arg2: $Registry$Type<($Block$Type)>, arg3: $Registry$Type<($Fluid$Type)>, arg4: $BiomeGetter$Type, arg5: integer): boolean
public "beingSaved"(arg0: $MapDimension$Type, arg1: integer, arg2: integer): boolean
public "addToLoad"(arg0: $MapRegion$Type, arg1: string, arg2: boolean): void
public "updateSave"(arg0: $LeveledRegion$Type<(any)>, arg1: long, arg2: integer): void
get "regionDetectionComplete"(): boolean
get "nextToLoadByViewing"(): $LeveledRegion<(any)>
set "nextToLoadByViewing"(value: $LeveledRegion$Type<(any)>)
set "mapProcessor"(value: $MapProcessor$Type)
get "sizeOfToLoad"(): integer
get "sizeOfToLoadBranchCache"(): integer
set "regionDetectionComplete"(value: boolean)
get "oldFormatSupport"(): $OldFormatSupport
get "toSave"(): $ArrayList<($MapRegion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapSaveLoad$Type = ($MapSaveLoad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapSaveLoad_ = $MapSaveLoad$Type;
}}
declare module "packages/xaero/map/file/$RegionDetection" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$MapRegionInfo, $MapRegionInfo$Type} from "packages/xaero/map/file/$MapRegionInfo"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$ILinkedChainNode, $ILinkedChainNode$Type} from "packages/xaero/map/util/linked/$ILinkedChainNode"

export class $RegionDetection implements $MapRegionInfo, $ILinkedChainNode<($RegionDetection)> {

constructor(arg0: string, arg1: string, arg2: string, arg3: integer, arg4: integer, arg5: $File$Type, arg6: integer, arg7: boolean)

public "isDestroyed"(): boolean
public "getNext"(): $RegionDetection
public "setPrevious"(arg0: $RegionDetection$Type): void
public "onDestroyed"(): void
public "shouldCache"(): boolean
public "setShouldCache"(arg0: boolean, arg1: string): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$Type): void
public "getInitialVersion"(): integer
public "getRegionFile"(): $File
public "transferInfoFrom"(arg0: $MapRegion$Type): void
public "hasLookedForCache"(): boolean
public "transferInfoTo"(arg0: $MapRegion$Type): void
public "transferInfoPostAddTo"(arg0: $MapRegion$Type, arg1: $MapProcessor$Type): void
public "isHasHadTerrain"(): boolean
public "setNext"(arg0: $RegionDetection$Type): void
public "isRemoved"(): boolean
public "getWorldId"(): string
public "getMwId"(): string
public "getDimId"(): string
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "setRemoved"(arg0: boolean): void
get "destroyed"(): boolean
get "next"(): $RegionDetection
set "previous"(value: $RegionDetection$Type)
get "cacheFile"(): $File
set "cacheFile"(value: $File$Type)
get "initialVersion"(): integer
get "regionFile"(): $File
get "hasHadTerrain"(): boolean
set "next"(value: $RegionDetection$Type)
get "removed"(): boolean
get "worldId"(): string
get "mwId"(): string
get "dimId"(): string
get "regionX"(): integer
get "regionZ"(): integer
set "removed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionDetection$Type = ($RegionDetection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionDetection_ = $RegionDetection$Type;
}}
declare module "packages/xaero/map/highlight/$RegionHighlightExistenceTracker" {
import {$MapDimension, $MapDimension$Type} from "packages/xaero/map/world/$MapDimension"

export class $RegionHighlightExistenceTracker {

constructor(arg0: $MapDimension$Type, arg1: integer)

public "track"(arg0: integer, arg1: integer): void
public "onClearCachedHash"(arg0: integer, arg1: integer): void
public "onClearCachedHashes"(): void
public "stopTracking"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionHighlightExistenceTracker$Type = ($RegionHighlightExistenceTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionHighlightExistenceTracker_ = $RegionHighlightExistenceTracker$Type;
}}
declare module "packages/xaero/map/core/$IWorldMapServerLevel" {
import {$ServerWorldCapabilities, $ServerWorldCapabilities$Type} from "packages/xaero/map/capabilities/$ServerWorldCapabilities"

export interface $IWorldMapServerLevel {

 "getXaero_wm_capabilities"(): $ServerWorldCapabilities
 "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$Type): void
}

export namespace $IWorldMapServerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapServerLevel$Type = ($IWorldMapServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapServerLevel_ = $IWorldMapServerLevel$Type;
}}
declare module "packages/xaero/map/gui/$MapTileSelection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapTileSelection {

constructor(arg0: integer, arg1: integer)

public "getLeft"(): integer
public "getRight"(): integer
public "getTop"(): integer
public "getBottom"(): integer
public "getStartX"(): integer
public "getStartZ"(): integer
public "getEndX"(): integer
public "getEndZ"(): integer
public "setEnd"(arg0: integer, arg1: integer): void
get "left"(): integer
get "right"(): integer
get "top"(): integer
get "bottom"(): integer
get "startX"(): integer
get "startZ"(): integer
get "endX"(): integer
get "endZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileSelection$Type = ($MapTileSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileSelection_ = $MapTileSelection$Type;
}}
declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $MultiTextureRenderTypeRenderer {


public "begin"(arg0: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$Type;
}}
declare module "packages/xaero/map/region/texture/$BranchRegionTexture" {
import {$BlockTintProvider, $BlockTintProvider$Type} from "packages/xaero/map/biome/$BlockTintProvider"
import {$RegionTexture, $RegionTexture$Type} from "packages/xaero/map/region/texture/$RegionTexture"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$LeveledRegion, $LeveledRegion$Type} from "packages/xaero/map/region/$LeveledRegion"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import {$DataInputStream, $DataInputStream$Type} from "packages/java/io/$DataInputStream"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import {$BranchTextureRenderer, $BranchTextureRenderer$Type} from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import {$TextureUploader, $TextureUploader$Type} from "packages/xaero/map/graphics/$TextureUploader"
import {$OverlayManager, $OverlayManager$Type} from "packages/xaero/map/region/$OverlayManager"

export class $BranchRegionTexture extends $RegionTexture<($BranchRegionTexture)> {
static readonly "PBO_UNPACK_LENGTH": integer
static readonly "PBO_PACK_LENGTH": integer

constructor(arg0: $LeveledRegion$Type<($BranchRegionTexture$Type)>)

public "checkForUpdates"(arg0: $RegionTexture$Type<(any)>, arg1: $RegionTexture$Type<(any)>, arg2: $RegionTexture$Type<(any)>, arg3: $RegionTexture$Type<(any)>, arg4: $LeveledRegion$Type<(any)>): boolean
public "addDebugLines"(arg0: $List$Type<(string)>): void
public "writeCacheMapData"(arg0: $DataOutputStream$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$Type<($BranchRegionTexture$Type)>): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg6: $MapProcessor$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "requestDownload"(): void
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$Type, arg1: $TextureUploader$Type, arg2: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg3: $BranchTextureRenderer$Type, arg4: integer, arg5: integer): long
public "onTextureDeletion"(): void
public "hasSourceData"(): boolean
public "preUpload"(arg0: $MapProcessor$Type, arg1: $BlockTintProvider$Type, arg2: $OverlayManager$Type, arg3: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$Type): void
public "postUpload"(arg0: $MapProcessor$Type, arg1: $LeveledRegion$Type<($BranchRegionTexture$Type)>, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchRegionTexture$Type = ($BranchRegionTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchRegionTexture_ = $BranchRegionTexture$Type;
}}
declare module "packages/xaero/map/world/$MapConnectionNode" {
import {$MapWorld, $MapWorld$Type} from "packages/xaero/map/world/$MapWorld"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MapConnectionNode {

constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "fromString"(arg0: string): $MapConnectionNode
public "getNamedString"(arg0: $MapWorld$Type): string
public "getDimId"(): $ResourceKey<($Level)>
public "getMw"(): string
get "dimId"(): $ResourceKey<($Level)>
get "mw"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionNode$Type = ($MapConnectionNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionNode_ = $MapConnectionNode$Type;
}}
declare module "packages/xaero/map/graphics/$TextureUpload$BranchUpdate" {
import {$TextureUpload, $TextureUpload$Type} from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchUpdate extends $TextureUpload {

constructor(arg0: integer)
constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$BranchUpdate$Type = ($TextureUpload$BranchUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload$BranchUpdate_ = $TextureUpload$BranchUpdate$Type;
}}

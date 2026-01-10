declare module "packages/com/moulberry/axiom/world_properties/$WorldPropertyWidgetType" {
import {$WorldPropertyDataType, $WorldPropertyDataType$Type} from "packages/com/moulberry/axiom/world_properties/$WorldPropertyDataType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ClientWorldProperty, $ClientWorldProperty$Type} from "packages/com/moulberry/axiom/world_properties/client/$ClientWorldProperty"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Unit, $Unit$Type} from "packages/net/minecraft/util/$Unit"

export interface $WorldPropertyWidgetType<T> {

 "dataType"(): $WorldPropertyDataType<(T)>
 "write"(arg0: $FriendlyByteBuf$Type): void
 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: boolean, arg3: (byte)[]): $ClientWorldProperty<(T)>
}

export namespace $WorldPropertyWidgetType {
const CHECKBOX: $WorldPropertyWidgetType<(boolean)>
const TEXTBOX: $WorldPropertyWidgetType<(string)>
const TIME: $WorldPropertyWidgetType<($Unit)>
const BUTTON: $WorldPropertyWidgetType<($Unit)>
function read(friendlyByteBuf: $FriendlyByteBuf$Type): $WorldPropertyWidgetType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPropertyWidgetType$Type<T> = ($WorldPropertyWidgetType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldPropertyWidgetType_<T> = $WorldPropertyWidgetType$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/hooks/$LevelRendererExt" {
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export interface $LevelRendererExt {

 "axiom$pushTranslucentRenderTarget"(arg0: $RenderTarget$Type): void
 "axiom$popTranslucentRenderTarget"(): void
}

export namespace $LevelRendererExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererExt$Type = ($LevelRendererExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererExt_ = $LevelRendererExt$Type;
}}
declare module "packages/com/moulberry/axiom/world_properties/client/$ClientWorldProperty" {
import {$WorldPropertyDataType, $WorldPropertyDataType$Type} from "packages/com/moulberry/axiom/world_properties/$WorldPropertyDataType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientWorldProperty<T> {

constructor(id: $ResourceLocation$Type, name: string, localizeName: boolean, initialValue: T)

public "getLocalizedName"(): string
public static "read"(friendlyByteBuf: $FriendlyByteBuf$Type): $ClientWorldProperty<(any)>
public "getId"(): $ResourceLocation
public "getType"(): $WorldPropertyDataType<(T)>
public "ackChangesUpTo"(updateId: integer): void
public "setRemoteValue"(bytes: (byte)[]): void
public "renderImgui"(): void
public "getLocalValue"(): T
public "changeLocalValue"(value: T): void
get "localizedName"(): string
get "id"(): $ResourceLocation
get "type"(): $WorldPropertyDataType<(T)>
set "remoteValue"(value: (byte)[])
get "localValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldProperty$Type<T> = ($ClientWorldProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldProperty_<T> = $ClientWorldProperty$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/render/regions/$ChunkedBlockRegion" {
import {$Position2ObjectMap, $Position2ObjectMap$Type} from "packages/com/moulberry/axiom/collections/$Position2ObjectMap"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$FabricBlockView, $FabricBlockView$Type} from "packages/net/fabricmc/fabric/api/blockview/v2/$FabricBlockView"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$RenderAttachedBlockView, $RenderAttachedBlockView$Type} from "packages/net/fabricmc/fabric/api/rendering/data/v1/$RenderAttachedBlockView"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$BlockRegion, $BlockRegion$Type} from "packages/com/moulberry/axiomclientapi/regions/$BlockRegion"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$PositionConsumer, $PositionConsumer$Type} from "packages/com/moulberry/axiom/collections/$PositionConsumer"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export class $ChunkedBlockRegion implements $RenderAttachedBlockView, $FabricBlockView, $BlockAndTintGetter, $LevelAccessor, $BlockRegion {
static readonly "SOLID_RENDER_LIMIT": integer
static readonly "TRANSLUCENT_RENDER_LIMIT": integer
 "uniqueBlockState": $BlockState

constructor(drawOutlineForNonBlockingMotion: boolean)
constructor()

public "rotate"(axis: $Direction$Axis$Type, count: integer): $ChunkedBlockRegion
public "min"(): $BlockPos
public "max"(): $BlockPos
public "clear"(): void
public "isEmpty"(): boolean
public "count"(): integer
public "save"(list: $ListTag$Type): void
public "forEachEntry"(consumer: $PositionConsumer$Type<($BlockState$Type)>): void
public "flip"(axis: $Direction$Axis$Type): $ChunkedBlockRegion
public "render"(camera: $Camera$Type, translation: $Vec3$Type, matrix: $PoseStack$Type, projection: $Matrix4f$Type, blockOpacity: float, outlineOpacity: float): void
public "render"(camera: $Camera$Type, translation: $Vec3$Type, rotation: $Quaternionf$Type, matrix: $PoseStack$Type, projection: $Matrix4f$Type, blockOpacity: float, outlineOpacity: float, polygonOffset: boolean, renderTarget: $RenderTarget$Type): void
public "render"(camera: $Camera$Type, translation: $Vec3$Type, rotation: $Quaternionf$Type, matrix: $PoseStack$Type, projection: $Matrix4f$Type, blockOpacity: float, outlineOpacity: float): void
public "render"(camera: $Camera$Type, translation: $Vec3$Type, rotation: $Quaternionf$Type, matrix: $PoseStack$Type, projection: $Matrix4f$Type, blockOpacity: float, outlineOpacity: float, polygonOffset: boolean): void
public "chunkKeySet"(): $LongSet
public "forEachChunk"(consumer: $PositionConsumer$Type<(($BlockState$Type)[])>): void
public "getBlockStateOrAir"(x: integer, y: integer, z: integer): $BlockState
public "copyBlockData"(): $Position2ObjectMap<($BlockState)>
public "addBlockIfNotPresent"(x: integer, y: integer, z: integer, block: $BlockState$Type): void
public "addBlockWithoutDirty"(x: integer, y: integer, z: integer, block: $BlockState$Type): void
public "getBlockStateOrDelegate"(blockPos: $BlockPos$Type, level: $Level$Type): $BlockState
public "getBlockStateOrNull"(x: integer, y: integer, z: integer): $BlockState
public "isClientSide"(): boolean
public "setBlock"(blockPos: $BlockPos$Type, blockState: $BlockState$Type, i: integer, j: integer): boolean
public "getChunkSource"(): $ChunkSource
public "enabledFeatures"(): $FeatureFlagSet
public "getWorldBorder"(): $WorldBorder
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getLevelData"(): $LevelData
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getEntities"(entity: $Entity$Type, aABB: $AABB$Type, predicate: $Predicate$Type<(any)>): $List<($Entity)>
public "getRawBrightness"(pos: $BlockPos$Type, ambientDarkness: integer): integer
public "scheduleTick"(blockPos: $BlockPos$Type, fluid: $Fluid$Type, i: integer, tickPriority: $TickPriority$Type): void
public "scheduleTick"(blockPos: $BlockPos$Type, fluid: $Fluid$Type, i: integer): void
public "gameEvent"(gameEvent: $GameEvent$Type, vec3: $Vec3$Type, context: $GameEvent$Context$Type): void
public "playSound"(player: $Player$Type, blockPos: $BlockPos$Type, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, f: float, g: float): void
public "addParticle"(particleOptions: $ParticleOptions$Type, d: double, e: double, f: double, g: double, h: double, i: double): void
public "getEntities"<T extends $Entity>(entityTypeTest: $EntityTypeTest$Type<($Entity$Type), (T)>, aABB: $AABB$Type, predicate: $Predicate$Type<(any)>): $List<(T)>
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "getCurrentDifficultyAt"(blockPos: $BlockPos$Type): $DifficultyInstance
public "getSkyDarken"(): integer
public "getRandom"(): $RandomSource
public "isStateAtPosition"(blockPos: $BlockPos$Type, predicate: $Predicate$Type<($BlockState$Type)>): boolean
public "isFluidAtPosition"(blockPos: $BlockPos$Type, predicate: $Predicate$Type<($FluidState$Type)>): boolean
public "getBiomeManager"(): $BiomeManager
public "nextSubTickCount"(): long
public "registryAccess"(): $RegistryAccess
public "players"(): $List<(any)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "scheduleTick"(blockPos: $BlockPos$Type, block: $Block$Type, i: integer, tickPriority: $TickPriority$Type): void
public "scheduleTick"(blockPos: $BlockPos$Type, block: $Block$Type, i: integer): void
public "getServer"(): $MinecraftServer
public "getChunk"(i: integer, j: integer, chunkStatus: $ChunkStatus$Type, bl: boolean): $ChunkAccess
public "removeBlock"(blockPos: $BlockPos$Type, bl: boolean): boolean
public "getHeight"(types: $Heightmap$Types$Type, i: integer, j: integer): integer
public "getMinBuildHeight"(): integer
public "getSeaLevel"(): integer
public "levelEvent"(player: $Player$Type, i: integer, blockPos: $BlockPos$Type, j: integer): void
public "getFluidState"(pos: $BlockPos$Type): $FluidState
public "dimensionType"(): $DimensionType
public "getBlockTint"(pos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "getUncachedNoiseBiome"(i: integer, j: integer, k: integer): $Holder<($Biome)>
public "getHeight"(): integer
public "getBrightness"(type: $LightLayer$Type, pos: $BlockPos$Type): integer
public "getShade"(direction: $Direction$Type, shaded: boolean): float
public "getLightEngine"(): $LevelLightEngine
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "destroyBlock"(blockPos: $BlockPos$Type, bl: boolean, entity: $Entity$Type, i: integer): boolean
public "dirtyAll"(): void
public "addBlock"(pos: $BlockPos$Type, block: $BlockState$Type): void
public "addBlock"(x: integer, y: integer, z: integer, block: $BlockState$Type): void
public "getChunk"(cx: integer, cy: integer, cz: integer): ($BlockState)[]
public "getCenter"(): $BlockPos
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(pos: $BlockPos$Type): any
public "getBlockEntityRenderData"(pos: $BlockPos$Type): any
public "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
public "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
public "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
public "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
public "getDifficulty"(): $Difficulty
public "dayTime"(): long
public "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
public "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "getMaxLightLevel"(): integer
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
public "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
public "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
public "getMoonPhase"(): integer
public "getTimeOfDay"(arg0: float): float
public "getMoonBrightness"(): float
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getModelDataManager"(): $ModelDataManager
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
public "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
public "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
public "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
public "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
public "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
public "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
public "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
public "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
public "getPlayerByUUID"(arg0: $UUID$Type): $Player
public "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
public "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
public "isEmptyBlock"(arg0: $BlockPos$Type): boolean
public "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
public "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
/**
 * 
 * @deprecated
 */
public "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
public "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
public "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
public "isWaterAt"(arg0: $BlockPos$Type): boolean
public "containsAnyLiquid"(arg0: $AABB$Type): boolean
public "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
public "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: $BlockPos$Type): boolean
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
public "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
public "isUnobstructed"(arg0: $Entity$Type): boolean
public "noCollision"(arg0: $AABB$Type): boolean
public "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
public "noCollision"(arg0: $Entity$Type): boolean
public "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
public "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
public "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
public "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
public "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
public "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
public "getDirectSignalTo"(arg0: $BlockPos$Type): integer
public "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
public "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
public "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
public "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
public "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
public "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
public "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
public "addFreshEntity"(arg0: $Entity$Type): boolean
get "empty"(): boolean
get "clientSide"(): boolean
get "chunkSource"(): $ChunkSource
get "worldBorder"(): $WorldBorder
get "levelData"(): $LevelData
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "skyDarken"(): integer
get "random"(): $RandomSource
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "server"(): $MinecraftServer
get "minBuildHeight"(): integer
get "seaLevel"(): integer
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "center"(): $BlockPos
get "difficulty"(): $Difficulty
get "maxLightLevel"(): integer
get "moonPhase"(): integer
get "moonBrightness"(): float
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkedBlockRegion$Type = ($ChunkedBlockRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkedBlockRegion_ = $ChunkedBlockRegion$Type;
}}
declare module "packages/com/moulberry/axiom/mixin/$MultiPlayerGameModeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MultiPlayerGameModeAccessor {

 "setDestroyDelay"(arg0: integer): void
 "getDestroyDelay"(): integer
}

export namespace $MultiPlayerGameModeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPlayerGameModeAccessor$Type = ($MultiPlayerGameModeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPlayerGameModeAccessor_ = $MultiPlayerGameModeAccessor$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$ServerGamePacketListenerImplExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplExt {

 "ackWorldPropertiesUpTo"(arg0: integer): void

(arg0: integer): void
}

export namespace $ServerGamePacketListenerImplExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplExt$Type = ($ServerGamePacketListenerImplExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplExt_ = $ServerGamePacketListenerImplExt$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$WindowExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowExt {

 "axiom$refreshFramebufferSize"(): void
 "axiom$resize"(arg0: long, arg1: integer, arg2: integer): void
}

export namespace $WindowExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowExt$Type = ($WindowExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindowExt_ = $WindowExt$Type;
}}
declare module "packages/com/moulberry/axiom/collections/$Position2ObjectMap" {
import {$LongFunction, $LongFunction$Type} from "packages/java/util/function/$LongFunction"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$PositionConsumer, $PositionConsumer$Type} from "packages/com/moulberry/axiom/collections/$PositionConsumer"

export class $Position2ObjectMap<T> {

constructor(defaultChunkSupplier: $LongFunction$Type<((T)[])>)

public "getOrCreate"(x: integer, y: integer, z: integer): T
public "get"(x: integer, y: integer, z: integer): T
public "put"(x: integer, y: integer, z: integer, v: T): void
public "clear"(): void
public "copy"(): $Position2ObjectMap<(T)>
public "forEachEntry"(consumer: $PositionConsumer$Type<(T)>): void
public "getOrCreateChunk"(pos: long): (T)[]
public "getOrCreateChunk"(xC: integer, yC: integer, zC: integer): (T)[]
public "calculateChunksChanged"(other: $Position2ObjectMap$Type<(T)>): $LongSet
public "chunkKeySet"(): $LongSet
public "forEachChunk"(consumer: $PositionConsumer$Type<((T)[])>): void
public "removeChunk"(xC: integer, yC: integer, zC: integer): (T)[]
public "removeChunk"(pos: long): (T)[]
public "mergeAllFrom"(other: $Position2ObjectMap$Type<(T)>, keys: $LongSet$Type): void
public "getAndPut"(x: integer, y: integer, z: integer, v: T): T
public "putChunk"(xC: integer, yC: integer, zC: integer, array: (T)[]): void
public "putChunk"(pos: long, array: (T)[]): void
public "getChunk"(pos: long): (T)[]
public "getChunk"(xC: integer, yC: integer, zC: integer): (T)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position2ObjectMap$Type<T> = ($Position2ObjectMap<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position2ObjectMap_<T> = $Position2ObjectMap$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/hooks/$SpriteContentsExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExt {

 "axiom$setOpacity"(arg0: integer, arg1: integer, arg2: integer): void

(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $SpriteContentsExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExt$Type = ($SpriteContentsExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExt_ = $SpriteContentsExt$Type;
}}
declare module "packages/com/moulberry/axiom/world_properties/$WorldPropertyDataType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Unit, $Unit$Type} from "packages/net/minecraft/util/$Unit"

export class $WorldPropertyDataType<T> {
static "BOOLEAN": $WorldPropertyDataType<(boolean)>
static "INTEGER": $WorldPropertyDataType<(integer)>
static "STRING": $WorldPropertyDataType<(string)>
static "ITEM": $WorldPropertyDataType<($Item)>
static "BLOCK": $WorldPropertyDataType<($Block)>
static "EMPTY": $WorldPropertyDataType<($Unit)>

constructor()

public "serialize"(arg0: T): (byte)[]
public "deserialize"(arg0: (byte)[]): T
public "getTypeId"(): integer
get "typeId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPropertyDataType$Type<T> = ($WorldPropertyDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldPropertyDataType_<T> = $WorldPropertyDataType$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/world_modification/$CompressedBlockEntity" {
import {$ByteArrayOutputStream, $ByteArrayOutputStream$Type} from "packages/java/io/$ByteArrayOutputStream"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $CompressedBlockEntity extends $Record {

constructor(originalSize: integer, compressionDict: byte, compressed: (byte)[])

public "originalSize"(): integer
public "compressed"(): (byte)[]
public "decompress"(): $CompoundTag
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "compress"(tag: $CompoundTag$Type, baos: $ByteArrayOutputStream$Type): $CompressedBlockEntity
public "write"(friendlyByteBuf: $FriendlyByteBuf$Type): void
public static "read"(friendlyByteBuf: $FriendlyByteBuf$Type): $CompressedBlockEntity
public "compressionDict"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressedBlockEntity$Type = ($CompressedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressedBlockEntity_ = $CompressedBlockEntity$Type;
}}
declare module "packages/com/moulberry/axiom/editor/palette/$CustomBlockStateOrTombstone" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomBlockStateOrTombstone {

}

export namespace $CustomBlockStateOrTombstone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlockStateOrTombstone$Type = ($CustomBlockStateOrTombstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlockStateOrTombstone_ = $CustomBlockStateOrTombstone$Type;
}}
declare module "packages/com/moulberry/axiom/custom_blocks/$CustomBlockState" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$CustomBlockStateOrTombstone, $CustomBlockStateOrTombstone$Type} from "packages/com/moulberry/axiom/editor/palette/$CustomBlockStateOrTombstone"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$CustomBlock, $CustomBlock$Type} from "packages/com/moulberry/axiom/custom_blocks/$CustomBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $CustomBlockState extends $CustomBlockStateOrTombstone {

 "getProperty"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>): T
 "getProperties"(): $Collection<($Property<(any)>)>
 "getCustomBlock"(): $CustomBlock
 "axiomHasProperty"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>): boolean
 "setPropertyUnsafe"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, arg1: $Comparable$Type<(any)>): $CustomBlockState
 "getVanillaState"(): $BlockState
}

export namespace $CustomBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlockState$Type = ($CustomBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlockState_ = $CustomBlockState$Type;
}}
declare module "packages/com/moulberry/axiom/collections/$PositionConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionConsumer<T> {

 "accept"(arg0: integer, arg1: integer, arg2: integer, arg3: T): void

(arg0: integer, arg1: integer, arg2: integer, arg3: T): void
}

export namespace $PositionConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionConsumer$Type<T> = ($PositionConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionConsumer_<T> = $PositionConsumer$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/hooks/$NativeImageExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageExt {

 "axiom$asByteArray"(): (byte)[]

(): (byte)[]
}

export namespace $NativeImageExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageExt$Type = ($NativeImageExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageExt_ = $NativeImageExt$Type;
}}
declare module "packages/com/moulberry/axiomclientapi/regions/$BlockRegion" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockRegion {

 "min"(): $BlockPos
 "max"(): $BlockPos
 "clear"(): void
 "isEmpty"(): boolean
 "count"(): integer
 "render"(arg0: $Camera$Type, arg1: $Vec3$Type, arg2: $PoseStack$Type, arg3: $Matrix4f$Type, arg4: float, arg5: float): void
 "addBlockIfNotPresent"(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$Type): void
 "addBlock"(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$Type): void
}

export namespace $BlockRegion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRegion$Type = ($BlockRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRegion_ = $BlockRegion$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$ServerLevelExt" {
import {$ServerWorldPropertiesRegistry, $ServerWorldPropertiesRegistry$Type} from "packages/com/moulberry/axiom/world_properties/server/$ServerWorldPropertiesRegistry"

export interface $ServerLevelExt {

 "axiom$relightChunkStarlight"(arg0: integer, arg1: integer): void
 "axiom$getPendingLightUpdates"(arg0: integer, arg1: integer, arg2: integer): (short)[]
 "axiom$processTasks"(): void
 "axiom$getWorldProperties"(): $ServerWorldPropertiesRegistry
 "axiom$markChunkDirty"(arg0: integer, arg1: integer): void
}

export namespace $ServerLevelExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelExt$Type = ($ServerLevelExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelExt_ = $ServerLevelExt$Type;
}}
declare module "packages/com/moulberry/axiom/clipboard/$ClipboardObject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChunkedBlockRegion, $ChunkedBlockRegion$Type} from "packages/com/moulberry/axiom/render/regions/$ChunkedBlockRegion"
import {$CompressedBlockEntity, $CompressedBlockEntity$Type} from "packages/com/moulberry/axiom/world_modification/$CompressedBlockEntity"

export interface $ClipboardObject {

 "entities"(): $List<($CompoundTag)>
 "name"(): string
 "thumbnailTextureId"(): integer
 "containsAir"(): boolean
 "placementDescription"(): string
 "blockRegion"(): $ChunkedBlockRegion
 "blockEntities"(): $Long2ObjectMap<($CompressedBlockEntity)>
}

export namespace $ClipboardObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClipboardObject$Type = ($ClipboardObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClipboardObject_ = $ClipboardObject$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$StructureTemplateExt" {
import {$ClipboardObject, $ClipboardObject$Type} from "packages/com/moulberry/axiom/clipboard/$ClipboardObject"

export interface $StructureTemplateExt {

 "axiom$fillFromClipboard"(arg0: $ClipboardObject$Type): void

(arg0: $ClipboardObject$Type): void
}

export namespace $StructureTemplateExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateExt$Type = ($StructureTemplateExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateExt_ = $StructureTemplateExt$Type;
}}
declare module "packages/com/moulberry/axiom/mixin/$DisplayAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DisplayAccessor {

}

export namespace $DisplayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayAccessor$Type = ($DisplayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayAccessor_ = $DisplayAccessor$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$BufferBuilderExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderExt {

 "axiom$getVertexPointer"(): long
 "axiom$reserve"(arg0: integer): long
 "axiom$endVertexIfStarted"(): void
 "axiom$startVertex"(): void
 "axiom$release"(): void
}

export namespace $BufferBuilderExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExt$Type = ($BufferBuilderExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderExt_ = $BufferBuilderExt$Type;
}}
declare module "packages/com/moulberry/axiom/world_properties/server/$ServerWorldPropertiesRegistry" {
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WorldPropertyCategory, $WorldPropertyCategory$Type} from "packages/com/moulberry/axiom/world_properties/$WorldPropertyCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ServerWorldProperty, $ServerWorldProperty$Type} from "packages/com/moulberry/axiom/world_properties/server/$ServerWorldProperty"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ServerWorldPropertiesRegistry {
readonly "propertyList": $LinkedHashMap<($WorldPropertyCategory), ($List<($ServerWorldProperty<(any)>)>)>
readonly "propertyMap": $Map<($ResourceLocation), ($ServerWorldProperty<(any)>)>

constructor(serverLevel: $ServerLevel$Type)

public "clear"(): void
public "registerDefault"(serverLevel: $ServerLevel$Type): void
public "registerFor"(serverPlayer: $ServerPlayer$Type): void
public "addCategory"(category: $WorldPropertyCategory$Type, properties: $List$Type<($ServerWorldProperty$Type<(any)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldPropertiesRegistry$Type = ($ServerWorldPropertiesRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldPropertiesRegistry_ = $ServerWorldPropertiesRegistry$Type;
}}
declare module "packages/com/moulberry/axiom/world_properties/$WorldPropertyCategory" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $WorldPropertyCategory extends $Record {

constructor(name: string, localizeName: boolean)

public "getLocalizedName"(): string
public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(friendlyByteBuf: $FriendlyByteBuf$Type): void
public static "read"(friendlyByteBuf: $FriendlyByteBuf$Type): $WorldPropertyCategory
public "localizeName"(): boolean
get "localizedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldPropertyCategory$Type = ($WorldPropertyCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldPropertyCategory_ = $WorldPropertyCategory$Type;
}}
declare module "packages/com/moulberry/axiom/custom_blocks/$CustomBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomBlockState, $CustomBlockState$Type} from "packages/com/moulberry/axiom/custom_blocks/$CustomBlockState"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $CustomBlock {

 "axiom$getPossibleCustomStates"(): $List<($CustomBlockState)>
 "axiom$customPickBlockStack"(): $ItemStack
 "doNormalInteractions"(): boolean
 "customShapeUpdate"(blockState: $CustomBlockState$Type, levelReader: $LevelReader$Type, blockPos: $BlockPos$Type): $CustomBlockState
 "getCustomStateForPlacement"(blockPlaceContext: $BlockPlaceContext$Type): $CustomBlockState
 "axiom$getResourceLocation"(): $ResourceLocation
 "axiom$translationKey"(): string
 "axiom$defaultCustomState"(): $CustomBlockState
 "axiom$getProperties"(): $Collection<($Property<(any)>)>
 "axiom$asItemStack"(): $ItemStack
}

export namespace $CustomBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBlock$Type = ($CustomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBlock_ = $CustomBlock$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$MarkerEntityExt" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $MarkerEntityExt {

 "axiom$getData"(): $CompoundTag

(): $CompoundTag
}

export namespace $MarkerEntityExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkerEntityExt$Type = ($MarkerEntityExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkerEntityExt_ = $MarkerEntityExt$Type;
}}
declare module "packages/com/moulberry/axiom/world_properties/server/$ServerWorldProperty" {
import {$WorldPropertyDataType, $WorldPropertyDataType$Type} from "packages/com/moulberry/axiom/world_properties/$WorldPropertyDataType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WorldPropertyWidgetType, $WorldPropertyWidgetType$Type} from "packages/com/moulberry/axiom/world_properties/$WorldPropertyWidgetType"

export class $ServerWorldProperty<T> {

constructor(id: $ResourceLocation$Type, name: string, localizeName: boolean, widget: $WorldPropertyWidgetType$Type<(T)>, value: T, handler: $Predicate$Type<(T)>)

public "update"(serverLevel: $ServerLevel$Type, data: (byte)[]): void
public "write"(friendlyByteBuf: $FriendlyByteBuf$Type): void
public "getId"(): $ResourceLocation
public "setValue"(value: T): void
public "getType"(): $WorldPropertyDataType<(T)>
get "id"(): $ResourceLocation
set "value"(value: T)
get "type"(): $WorldPropertyDataType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldProperty$Type<T> = ($ServerWorldProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldProperty_<T> = $ServerWorldProperty$Type<(T)>;
}}
declare module "packages/com/moulberry/axiom/hooks/$ClientLevelExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientLevelExt {

 "axiom$setTimeFrozen"(arg0: boolean): void
 "axiom$isTimeFrozen"(): boolean
}

export namespace $ClientLevelExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelExt$Type = ($ClientLevelExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelExt_ = $ClientLevelExt$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$MinecraftExt" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export interface $MinecraftExt {

 "axiom$getRightClickDelay"(): integer
 "axiom$pushMainRenderTarget"(arg0: $RenderTarget$Type): void
 "axiom$setRightClickDelay"(arg0: integer): void
 "axiom$popMainRenderTarget"(): void
 "axiom$addCustomNbtData"(arg0: $ItemStack$Type, arg1: $BlockEntity$Type, arg2: $RegistryAccess$Type): void
}

export namespace $MinecraftExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftExt$Type = ($MinecraftExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftExt_ = $MinecraftExt$Type;
}}
declare module "packages/com/moulberry/axiom/hooks/$ThreadedLevelLightEngineExt" {
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"

export interface $ThreadedLevelLightEngineExt {

 "axiom$checkSectionBlocks"(arg0: integer, arg1: integer, arg2: integer, arg3: (short)[]): void
 "axiom$waitForPendingTasks"(arg0: integer, arg1: integer): $CompletableFuture<(any)>
}

export namespace $ThreadedLevelLightEngineExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedLevelLightEngineExt$Type = ($ThreadedLevelLightEngineExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadedLevelLightEngineExt_ = $ThreadedLevelLightEngineExt$Type;
}}

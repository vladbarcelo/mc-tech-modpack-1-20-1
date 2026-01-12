declare module "packages/codechicken/microblock/api/$MicroMaterialClient" {
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MicroblockPart, $MicroblockPart$Type} from "packages/codechicken/microblock/part/$MicroblockPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$MaskedCuboid, $MaskedCuboid$Type} from "packages/codechicken/microblock/util/$MaskedCuboid"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$CCRenderState, $CCRenderState$Type} from "packages/codechicken/lib/render/$CCRenderState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MicroMaterialClient {

constructor()

public static "get"(arg0: $MicroMaterial$Type): $MicroMaterialClient
public "addLandingEffects"(arg0: $MicroblockPart$Type, arg1: $PartRayTraceResult$Type, arg2: $Vector3$Type, arg3: integer): void
public "addRunningEffects"(arg0: $MicroblockPart$Type, arg1: $PartRayTraceResult$Type, arg2: $Entity$Type): void
public "addHitEffects"(arg0: $MicroblockPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $MicroblockPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "renderCuboids"(arg0: $CCRenderState$Type, arg1: $RenderType$Type, arg2: $Iterable$Type<($MaskedCuboid$Type)>): void
public "renderDynamic"(arg0: $MicroblockPart$Type, arg1: $ItemDisplayContext$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: integer, arg6: float): void
public "getItemRenderLayer"(): $RenderType
get "itemRenderLayer"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicroMaterialClient$Type = ($MicroMaterialClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicroMaterialClient_ = $MicroMaterialClient$Type;
}}
declare module "packages/codechicken/microblock/part/$IMicroShrinkRender" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IMicroShrinkRender extends $MultiPart {

 "getBounds"(): $Cuboid6
 "getSlot"(): integer
 "getSize"(): integer
 "isTransparent"(): boolean
 "getPriorityClass"(): integer
 "level"(): $Level
 "getShape"(arg0: $CollisionContext$Type): $VoxelShape
 "readDesc"(arg0: $MCDataInput$Type): void
 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $MultipartType<(any)>
 "pos"(): $BlockPos
 "onWorldJoin"(): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "getLightEmission"(): integer
 "getExplosionResistance"(arg0: $Explosion$Type): float
 "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
 "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
 "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "onChunkLoad"(arg0: $LevelChunk$Type): void
 "onChunkUnload"(): void
 "scheduleTick"(arg0: integer): void
 "scheduledTick"(): void
 "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
 "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
 "getRenderBounds"(): $Cuboid6
 "invalidateConvertedTile"(): void
 "onPartChanged"(arg0: $MultiPart$Type): void
 "onConverted"(): void
 "onEntityStanding"(arg0: $Entity$Type): void
 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
 "onWorldSeparate"(): void
 "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getRenderOcclusionShape"(): $VoxelShape
 "getInteractionShape"(): $VoxelShape
 "getBlockSupportShape"(): $VoxelShape
 "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
 "tile"(): $TileMultipart
 "onAdded"(): void
 "onMoved"(): void
 "getDrops"(): $Iterable<($ItemStack)>
 "hasTile"(): boolean
 "hasLevel"(): boolean
 "capCache"(): $CapabilityCache
 "readUpdate"(arg0: $MCDataInput$Type): void
 "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
 "preRemove"(): void
 "onRemoved"(): void
 "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
 "writeDesc"(arg0: $MCDataOutput$Type): void
 "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
}

export namespace $IMicroShrinkRender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMicroShrinkRender$Type = ($IMicroShrinkRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMicroShrinkRender_ = $IMicroShrinkRender$Type;
}}
declare module "packages/codechicken/microblock/part/$MicroblockPartFactory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MicroblockPart, $MicroblockPart$Type} from "packages/codechicken/microblock/part/$MicroblockPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $MicroblockPartFactory extends $MultipartType<($MicroblockPart)> {
static readonly "MULTIPART_TYPES": $ResourceLocation

constructor()

public "create"(arg0: boolean, arg1: $MicroMaterial$Type): $MicroblockPart
public "createPartClient"(arg0: $MCDataInput$Type): $MicroblockPart
public "createPartServer"(arg0: $CompoundTag$Type): $MicroblockPart
public "getResistanceFactor"(): float
get "resistanceFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicroblockPartFactory$Type = ($MicroblockPartFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicroblockPartFactory_ = $MicroblockPartFactory$Type;
}}
declare module "packages/codechicken/microblock/part/$MicroblockPart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MicroblockPartFactory, $MicroblockPartFactory$Type} from "packages/codechicken/microblock/part/$MicroblockPartFactory"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$MaskedCuboid, $MaskedCuboid$Type} from "packages/codechicken/microblock/util/$MaskedCuboid"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MicroblockPart extends $BaseMultipart {
 "material": $MicroMaterial
 "shape": byte

constructor(arg0: $MicroMaterial$Type)

public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getBounds"(): $Cuboid6
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "getSize"(): integer
public "getMaterial"(): $MicroMaterial
public "getLightEmission"(): integer
public "getExplosionResistance"(arg0: $Explosion$Type): float
public "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
public "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "getMicroFactory"(): $MicroblockPartFactory
public "getShapeSlot"(): integer
public "sendShapeUpdate"(): void
public "getItemFactoryId"(): integer
public "getRenderCuboids"(arg0: boolean): $Iterable<($MaskedCuboid)>
public "isTransparent"(): boolean
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "setShape"(arg0: integer, arg1: integer): void
public "getDrops"(): $Iterable<($ItemStack)>
public "readUpdate"(arg0: $MCDataInput$Type): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
get "bounds"(): $Cuboid6
get "type"(): $MultipartType<(any)>
get "size"(): integer
get "material"(): $MicroMaterial
get "lightEmission"(): integer
get "microFactory"(): $MicroblockPartFactory
get "shapeSlot"(): integer
get "itemFactoryId"(): integer
get "transparent"(): boolean
get "drops"(): $Iterable<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicroblockPart$Type = ($MicroblockPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicroblockPart_ = $MicroblockPart$Type;
}}
declare module "packages/codechicken/microblock/part/$MicroblockPlacement" {
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$MicroblockPartFactory, $MicroblockPartFactory$Type} from "packages/codechicken/microblock/part/$MicroblockPartFactory"
import {$ExecutablePlacement, $ExecutablePlacement$Type} from "packages/codechicken/microblock/part/$ExecutablePlacement"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MicroblockPart, $MicroblockPart$Type} from "packages/codechicken/microblock/part/$MicroblockPart"
import {$PlacementProperties, $PlacementProperties$Type} from "packages/codechicken/microblock/part/$PlacementProperties"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$StandardMicroblockPart, $StandardMicroblockPart$Type} from "packages/codechicken/microblock/part/$StandardMicroblockPart"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MicroblockPlacement {
readonly "player": $Player
readonly "hand": $InteractionHand
readonly "hit": $BlockHitResult
readonly "size": integer
readonly "material": $MicroMaterial
readonly "checkMaterial": boolean
readonly "pp": $PlacementProperties
readonly "level": $Level
readonly "microFactory": $MicroblockPartFactory
readonly "pos": $BlockPos
readonly "vHit": $Vector3
readonly "gTile": $Pair<($TileMultipart), (boolean)>
readonly "hTile": $TileMultipart
readonly "side": integer
readonly "slot": integer
readonly "oSlot": integer
readonly "hitDepth": double
readonly "useOppMod": boolean
readonly "oppMod": boolean
readonly "internal": boolean
readonly "doExpand": boolean

constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockHitResult$Type, arg3: integer, arg4: $MicroMaterial$Type, arg5: boolean, arg6: $PlacementProperties$Type)

public "expand"(arg0: $MicroblockPart$Type, arg1: $MicroblockPart$Type): $ExecutablePlacement
public "expand"(arg0: $StandardMicroblockPart$Type): $ExecutablePlacement
public "create"(arg0: integer, arg1: integer, arg2: $MicroMaterial$Type): $MicroblockPart
public "internalPlacement"(arg0: $TileMultipart$Type, arg1: $MicroblockPart$Type): $ExecutablePlacement
public "internalPlacement"(arg0: $TileMultipart$Type, arg1: integer): $ExecutablePlacement
public "externalPlacement"(arg0: $MicroblockPart$Type): $ExecutablePlacement
public "externalPlacement"(arg0: integer): $ExecutablePlacement
public static "getHitDepth"(arg0: $Vector3$Type, arg1: integer): double
public "calculate"(): $ExecutablePlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicroblockPlacement$Type = ($MicroblockPlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicroblockPlacement_ = $MicroblockPlacement$Type;
}}
declare module "packages/codechicken/microblock/part/$PlacementProperties" {
import {$MicroblockPartFactory, $MicroblockPartFactory$Type} from "packages/codechicken/microblock/part/$MicroblockPartFactory"
import {$PlacementGrid, $PlacementGrid$Type} from "packages/codechicken/microblock/part/$PlacementGrid"
import {$ExecutablePlacement, $ExecutablePlacement$Type} from "packages/codechicken/microblock/part/$ExecutablePlacement"
import {$MicroblockPlacement, $MicroblockPlacement$Type} from "packages/codechicken/microblock/part/$MicroblockPlacement"

export class $PlacementProperties {

constructor()

public "expand"(arg0: integer, arg1: integer): boolean
public "sneakOpposite"(arg0: integer, arg1: integer): boolean
public "microFactory"(): $MicroblockPartFactory
public "placementGrid"(): $PlacementGrid
public "customPlacement"(arg0: $MicroblockPlacement$Type): $ExecutablePlacement
public "opposite"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementProperties$Type = ($PlacementProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementProperties_ = $PlacementProperties$Type;
}}
declare module "packages/codechicken/microblock/api/$MicroMaterial" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MicroMaterialClient, $MicroMaterialClient$Type} from "packages/codechicken/microblock/api/$MicroMaterialClient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $MicroMaterial {

constructor()

public "getItem"(): $ItemStack
public "getLocalizedName"(): $Component
public "getRegistryName"(): $ResourceLocation
public "getLightEmission"(): integer
public "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
public "initializeClient"(arg0: $Consumer$Type<($MicroMaterialClient$Type)>): void
public "getStrength"(arg0: $Player$Type): float
public "isTransparent"(): boolean
public "getCutterTier"(): $Tier
public "getSound"(): $SoundType
get "item"(): $ItemStack
get "localizedName"(): $Component
get "registryName"(): $ResourceLocation
get "lightEmission"(): integer
get "transparent"(): boolean
get "cutterTier"(): $Tier
get "sound"(): $SoundType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicroMaterial$Type = ($MicroMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicroMaterial_ = $MicroMaterial$Type;
}}
declare module "packages/codechicken/microblock/item/$SawItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SawItem extends $TieredItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $Tier$Type, arg1: $Item$Properties$Type)

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public static "getSawTier"(arg0: $Item$Type): $Tier
public static "isTierGTEQ"(arg0: $Tier$Type, arg1: $Tier$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawItem$Type = ($SawItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawItem_ = $SawItem$Type;
}}
declare module "packages/codechicken/microblock/util/$MaskedCuboid" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"

export class $MaskedCuboid extends $Record {

constructor(box: $Cuboid6$Type, sideMask: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "box"(): $Cuboid6
public "sideMask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaskedCuboid$Type = ($MaskedCuboid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaskedCuboid_ = $MaskedCuboid$Type;
}}
declare module "packages/codechicken/microblock/part/$PlacementGrid" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$Line3, $Line3$Type} from "packages/codechicken/lib/vec/$Line3"

export class $PlacementGrid {

constructor()

public "getOverlayLines"(): $List<($Line3)>
public "getHitSlot"(arg0: $Vector3$Type, arg1: integer): integer
get "overlayLines"(): $List<($Line3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementGrid$Type = ($PlacementGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementGrid_ = $PlacementGrid$Type;
}}
declare module "packages/codechicken/microblock/item/$ItemMicroBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StandardMicroFactory, $StandardMicroFactory$Type} from "packages/codechicken/microblock/part/$StandardMicroFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMicroBlock extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $Item$Properties$Type)

public static "getFactory"(arg0: $ItemStack$Type): $StandardMicroFactory
public static "getSize"(arg0: $ItemStack$Type): integer
public static "create"(arg0: integer, arg1: integer, arg2: $ResourceLocation$Type): $ItemStack
public static "create"(arg0: integer, arg1: integer, arg2: $MicroMaterial$Type): $ItemStack
public static "getFactoryID"(arg0: $ItemStack$Type): integer
public static "createStack"(arg0: integer, arg1: integer, arg2: integer, arg3: $ResourceLocation$Type): $ItemStack
public static "createStack"(arg0: integer, arg1: integer, arg2: integer, arg3: $MicroMaterial$Type): $ItemStack
public static "getMaterialFromStack"(arg0: $ItemStack$Type): $MicroMaterial
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMicroBlock$Type = ($ItemMicroBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMicroBlock_ = $ItemMicroBlock$Type;
}}
declare module "packages/codechicken/microblock/part/$StandardMicroblockPart" {
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MicroblockPart, $MicroblockPart$Type} from "packages/codechicken/microblock/part/$MicroblockPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$MaskedCuboid, $MaskedCuboid$Type} from "packages/codechicken/microblock/util/$MaskedCuboid"
import {$IMicroOcclusion, $IMicroOcclusion$Type} from "packages/codechicken/microblock/part/$IMicroOcclusion"
import {$PartialOcclusionPart, $PartialOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$PartialOcclusionPart"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$IMicroShrinkRender, $IMicroShrinkRender$Type} from "packages/codechicken/microblock/part/$IMicroShrinkRender"

export class $StandardMicroblockPart extends $MicroblockPart implements $IMicroOcclusion, $PartialOcclusionPart, $IMicroShrinkRender {
 "renderBounds": $Cuboid6
 "renderMask": integer
 "material": $MicroMaterial
 "shape": byte

constructor(arg0: $MicroMaterial$Type)

public "getSlot"(): integer
public "getItemFactoryId"(): integer
public "getRenderCuboids"(arg0: boolean): $Iterable<($MaskedCuboid)>
public "onPartChanged"(arg0: $MultiPart$Type): void
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public "getSlotMask"(): integer
public "getPartialOcclusionShape"(): $VoxelShape
public "recalcBounds"(): void
public "getPriorityClass"(): integer
public "onAdded"(): void
public "readUpdate"(arg0: $MCDataInput$Type): void
public "getBounds"(): $Cuboid6
public "getSize"(): integer
public "getMaterial"(): $MicroMaterial
public "allowCompleteOcclusion"(): boolean
public "isTransparent"(): boolean
public "tile"(): $TileMultipart
public "hasTile"(): boolean
get "slot"(): integer
get "itemFactoryId"(): integer
get "slotMask"(): integer
get "partialOcclusionShape"(): $VoxelShape
get "priorityClass"(): integer
get "bounds"(): $Cuboid6
get "size"(): integer
get "material"(): $MicroMaterial
get "transparent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardMicroblockPart$Type = ($StandardMicroblockPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardMicroblockPart_ = $StandardMicroblockPart$Type;
}}
declare module "packages/codechicken/microblock/part/$IMicroOcclusion" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MicroMaterial, $MicroMaterial$Type} from "packages/codechicken/microblock/api/$MicroMaterial"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlottedPart, $SlottedPart$Type} from "packages/codechicken/multipart/api/part/$SlottedPart"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IMicroOcclusion extends $SlottedPart {

 "getBounds"(): $Cuboid6
 "getSlot"(): integer
 "getSize"(): integer
 "getMaterial"(): $MicroMaterial
 "getSlotMask"(): integer
 "level"(): $Level
 "getShape"(arg0: $CollisionContext$Type): $VoxelShape
 "readDesc"(arg0: $MCDataInput$Type): void
 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $MultipartType<(any)>
 "pos"(): $BlockPos
 "onWorldJoin"(): void
 "onEntityCollision"(arg0: $Entity$Type): void
 "getLightEmission"(): integer
 "getExplosionResistance"(arg0: $Explosion$Type): float
 "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
 "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
 "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "onChunkLoad"(arg0: $LevelChunk$Type): void
 "onChunkUnload"(): void
 "scheduleTick"(arg0: integer): void
 "scheduledTick"(): void
 "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
 "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
 "getRenderBounds"(): $Cuboid6
 "invalidateConvertedTile"(): void
 "onPartChanged"(arg0: $MultiPart$Type): void
 "onConverted"(): void
 "onEntityStanding"(arg0: $Entity$Type): void
 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
 "onWorldSeparate"(): void
 "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getRenderOcclusionShape"(): $VoxelShape
 "getInteractionShape"(): $VoxelShape
 "getBlockSupportShape"(): $VoxelShape
 "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
 "tile"(): $TileMultipart
 "onAdded"(): void
 "onMoved"(): void
 "getDrops"(): $Iterable<($ItemStack)>
 "hasTile"(): boolean
 "hasLevel"(): boolean
 "capCache"(): $CapabilityCache
 "readUpdate"(arg0: $MCDataInput$Type): void
 "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
 "preRemove"(): void
 "onRemoved"(): void
 "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
 "writeDesc"(arg0: $MCDataOutput$Type): void
 "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
}

export namespace $IMicroOcclusion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMicroOcclusion$Type = ($IMicroOcclusion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMicroOcclusion_ = $IMicroOcclusion$Type;
}}
declare module "packages/codechicken/microblock/part/$StandardMicroFactory" {
import {$MicroblockPartFactory, $MicroblockPartFactory$Type} from "packages/codechicken/microblock/part/$MicroblockPartFactory"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PlacementProperties, $PlacementProperties$Type} from "packages/codechicken/microblock/part/$PlacementProperties"

export class $StandardMicroFactory extends $MicroblockPartFactory {
static readonly "FACTORIES": $Int2ObjectMap<($StandardMicroFactory)>
readonly "factoryId": integer
static readonly "MULTIPART_TYPES": $ResourceLocation


public "placementProperties"(): $PlacementProperties
public "getItemSlot"(): integer
get "itemSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardMicroFactory$Type = ($StandardMicroFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardMicroFactory_ = $StandardMicroFactory$Type;
}}
declare module "packages/codechicken/microblock/part/$ExecutablePlacement" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MicroblockPart, $MicroblockPart$Type} from "packages/codechicken/microblock/part/$MicroblockPart"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExecutablePlacement {
readonly "pos": $BlockPos
readonly "part": $MicroblockPart


public "consume"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "place"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutablePlacement$Type = ($ExecutablePlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExecutablePlacement_ = $ExecutablePlacement$Type;
}}

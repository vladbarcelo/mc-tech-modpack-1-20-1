declare module "packages/com/ldtteam/blockui/util/records/$Pos2i$ImmutablePos2i" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Pos2i$MutablePos2i, $Pos2i$MutablePos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i$MutablePos2i"
import {$Pos2i, $Pos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i"

export class $Pos2i$ImmutablePos2i extends $Record implements $Pos2i {

constructor(x: integer, y: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "toImmutable"(): $Pos2i$ImmutablePos2i
public "toMutable"(): $Pos2i$MutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$ImmutablePos2i$Type = ($Pos2i$ImmutablePos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i$ImmutablePos2i_ = $Pos2i$ImmutablePos2i$Type;
}}
declare module "packages/com/ldtteam/blockui/util/cursor/$Cursor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $Cursor {

 "apply"(): void

(arg0: $Runnable$Type, arg1: any): $Cursor
}

export namespace $Cursor {
const DEFAULT: $Cursor
const ARROW: $Cursor
const TEXT_CURSOR: $Cursor
const CROSSHAIR: $Cursor
const HAND: $Cursor
const HORIZONTAL_RESIZE: $Cursor
const VERTICAL_RESIZE: $Cursor
const RESIZE: $Cursor
function named(arg0: $Runnable$Type, arg1: any): $Cursor
function of(arg0: $ResourceLocation$Type): $Cursor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cursor$Type = ($Cursor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cursor_ = $Cursor$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$PaperWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractBlockPane, $AbstractBlockPane$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockPane"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaperWallBlock extends $AbstractBlockPane<($PaperWallBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static "PROPERTIES": $ImmutableMap<($Direction), ($BooleanProperty)>
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
readonly "collisionShapeByIndex": ($VoxelShape)[]
readonly "shapeByIndex": ($VoxelShape)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaperWallBlock$Type = ($PaperWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaperWallBlock_ = $PaperWallBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$BrickType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BrickType extends $Enum<($BrickType)> implements $StringRepresentable {
static readonly "BROWN": $BrickType
static readonly "BEIGE": $BrickType
static readonly "CREAM": $BrickType
static readonly "ROAN": $BrickType
static readonly "SAND": $BrickType
static readonly "BROWN_STONE": $BrickType
static readonly "BEIGE_STONE": $BrickType
static readonly "CREAM_STONE": $BrickType
static readonly "SAND_STONE": $BrickType
static readonly "ROAN_STONE": $BrickType
static readonly "SUFFIX": string


public static "values"(): ($BrickType)[]
public static "valueOf"(arg0: string): $BrickType
public "getIngredient"(): $Item
public "getIngredient2"(): $Item
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "ingredient"(): $Item
get "ingredient2"(): $Item
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrickType$Type = (("beige") | ("sand") | ("brown_stone") | ("beige_stone") | ("roan_stone") | ("sand_stone") | ("cream") | ("brown") | ("cream_stone") | ("roan")) | ($BrickType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrickType_ = $BrickType$Type;
}}
declare module "packages/com/ldtteam/structurize/util/$ScanToolData$Slot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BoxPreviewData, $BoxPreviewData$Type} from "packages/com/ldtteam/structurize/storage/rendering/types/$BoxPreviewData"

export class $ScanToolData$Slot {

constructor(arg0: string, arg1: $BoxPreviewData$Type)
constructor(arg0: $CompoundTag$Type)

public "getName"(): string
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "getBox"(): $BoxPreviewData
get "name"(): string
get "empty"(): boolean
get "box"(): $BoxPreviewData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanToolData$Slot$Type = ($ScanToolData$Slot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanToolData$Slot_ = $ScanToolData$Slot$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockFenceGate" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockFenceGate<B extends $AbstractBlockFenceGate<(B)>> extends $FenceGateBlock implements $IDOBlock<(B)> {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "Z_SHAPE": $VoxelShape
static readonly "X_SHAPE": $VoxelShape
static readonly "Z_SHAPE_LOW": $VoxelShape
static readonly "X_SHAPE_LOW": $VoxelShape
static readonly "Z_COLLISION_SHAPE": $VoxelShape
static readonly "X_COLLISION_SHAPE": $VoxelShape
static readonly "Z_SUPPORT_SHAPE": $VoxelShape
static readonly "X_SUPPORT_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE": $VoxelShape
static readonly "X_OCCLUSION_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE_LOW": $VoxelShape
static readonly "X_OCCLUSION_SHAPE_LOW": $VoxelShape
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockFenceGate$Type<B> = ($AbstractBlockFenceGate<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockFenceGate_<B> = $AbstractBlockFenceGate$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$TrapdoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrapdoorType, $TrapdoorType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$TrapdoorType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBlockTrapdoor, $AbstractBlockTrapdoor$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockTrapdoor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $TrapdoorBlock extends $AbstractBlockTrapdoor<($TrapdoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "TYPE": $EnumProperty<($TrapdoorType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_THICKNESS": integer
static readonly "EAST_OPEN_AABB": $VoxelShape
static readonly "WEST_OPEN_AABB": $VoxelShape
static readonly "SOUTH_OPEN_AABB": $VoxelShape
static readonly "NORTH_OPEN_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
readonly "type": $BlockSetType
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorBlock$Type = ($TrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorBlock_ = $TrapdoorBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$ArchitectsCutterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ArchitectsCutterBlock extends $AbstractBlock<($ArchitectsCutterBlock)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getRegistryName"(): $ResourceLocation
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterBlock$Type = ($ArchitectsCutterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterBlock_ = $ArchitectsCutterBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$AllBrickBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AllBrickBlock extends $AbstractBlock<($AllBrickBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickBlock$Type = ($AllBrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickBlock_ = $AllBrickBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$FenceBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$FenceBlock, $FenceBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$FenceBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FenceBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FenceBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBlockItem$Type = ($FenceBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBlockItem_ = $FenceBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$PaperwallBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$PaperWallBlock, $PaperWallBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$PaperWallBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PaperwallBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $PaperWallBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaperwallBlockItem$Type = ($PaperwallBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaperwallBlockItem_ = $PaperwallBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$ExtraBlockType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ExtraBlockCategory, $ExtraBlockCategory$Type} from "packages/com/ldtteam/domumornamentum/block/types/$ExtraBlockCategory"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ExtraBlockType extends $Enum<($ExtraBlockType)> implements $StringRepresentable {
static readonly "BLACK_BRICK": $ExtraBlockType
static readonly "BLUE_BRICK": $ExtraBlockType
static readonly "BLUE_SLATE": $ExtraBlockType
static readonly "BROWN_BRICK": $ExtraBlockType
static readonly "BASE_BRICK": $ExtraBlockType
static readonly "CYAN_BRICK": $ExtraBlockType
static readonly "GRAY_BRICK": $ExtraBlockType
static readonly "GREEN_BRICK": $ExtraBlockType
static readonly "GREEN_SLATE": $ExtraBlockType
static readonly "LIGHT_BLUE_BRICK": $ExtraBlockType
static readonly "LIGHT_GRAY_BRICK": $ExtraBlockType
static readonly "LIME_BRICK": $ExtraBlockType
static readonly "MAGENTA_BRICK": $ExtraBlockType
static readonly "MOSS_SLATE": $ExtraBlockType
static readonly "ORANGE_BRICK": $ExtraBlockType
static readonly "PINK_BRICK": $ExtraBlockType
static readonly "PURPLE_BRICK": $ExtraBlockType
static readonly "PURPLE_SLATE": $ExtraBlockType
static readonly "RED_BRICK": $ExtraBlockType
static readonly "BASE_SLATE": $ExtraBlockType
static readonly "BASE_THATCHED": $ExtraBlockType
static readonly "WHITE_BRICK": $ExtraBlockType
static readonly "YELLOW_BRICK": $ExtraBlockType
static readonly "BASE_PAPER": $ExtraBlockType
static readonly "BASE_CACTUS": $ExtraBlockType
static readonly "GREEN_CACTUS": $ExtraBlockType
static readonly "LIGHT_PAPER": $ExtraBlockType


public static "values"(): ($ExtraBlockType)[]
public static "valueOf"(arg0: string): $ExtraBlockType
public "getMaterial"(): $Item
public "getSoundType"(): $SoundType
public "isTranslucent"(): boolean
public "adjustProperties"(arg0: $BlockBehaviour$Properties$Type): $BlockBehaviour$Properties
public "getCategory"(): $ExtraBlockCategory
public "getColor"(): $DyeColor
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "material"(): $Item
get "soundType"(): $SoundType
get "translucent"(): boolean
get "category"(): $ExtraBlockCategory
get "color"(): $DyeColor
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlockType$Type = (("base_slate") | ("base_cactus") | ("green_slate") | ("brown_brick") | ("gray_brick") | ("light_paper") | ("purple_slate") | ("orange_brick") | ("cyan_brick") | ("purple_brick") | ("magenta_brick") | ("light_gray_brick") | ("green_cactus") | ("pink_brick") | ("yellow_brick") | ("white_brick") | ("base_paper") | ("base_thatched") | ("red_brick") | ("blue_slate") | ("light_blue_brick") | ("blue_brick") | ("base_brick") | ("lime_brick") | ("moss_slate") | ("green_brick") | ("black_brick")) | ($ExtraBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockType_ = $ExtraBlockType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$ShingleBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractBlockStairs, $AbstractBlockStairs$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockStairs"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ShingleShapeType, $ShingleShapeType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$ShingleShapeType"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ShingleBlock extends $AbstractBlockStairs<($ShingleBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public static "getTypeFromShape"(arg0: $StairsShape$Type): $ShingleShapeType
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isStairs"(arg0: $BlockState$Type): boolean
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleBlock$Type = ($ShingleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleBlock_ = $ShingleBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/recipe/architectscutter/$ArchitectsCutterRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ArchitectsCutterRecipe implements $Recipe<($Container)> {

constructor(arg0: $ResourceLocation$Type, arg1: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: $CompoundTag$Type)

public "getCount"(): integer
public "getBlockName"(): $ResourceLocation
public "getAdditionalTag"(): $CompoundTag
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "count"(): integer
get "blockName"(): $ResourceLocation
get "additionalTag"(): $CompoundTag
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterRecipe$Type = ($ArchitectsCutterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterRecipe_ = $ArchitectsCutterRecipe$Type;
}}
declare module "packages/com/ldtteam/structurize/util/$RotationMirror" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RotationMirror extends $Enum<($RotationMirror)> {
static readonly "NONE": $RotationMirror
static readonly "R90": $RotationMirror
static readonly "R180": $RotationMirror
static readonly "R270": $RotationMirror
static readonly "MIR_NONE": $RotationMirror
static readonly "MIR_R90": $RotationMirror
static readonly "MIR_R180": $RotationMirror
static readonly "MIR_R270": $RotationMirror
static readonly "MIRRORED": ($RotationMirror)[]
static readonly "NOT_MIRRORED": ($RotationMirror)[]


public "rotate"(arg0: $Rotation$Type): $RotationMirror
public "add"(arg0: $RotationMirror$Type): $RotationMirror
public static "values"(): ($RotationMirror)[]
public static "valueOf"(arg0: string): $RotationMirror
public static "of"(arg0: $Rotation$Type, arg1: $Mirror$Type): $RotationMirror
public "isMirrored"(): boolean
public "mirror"(): $Mirror
public "calcDifferenceTowards"(arg0: $RotationMirror$Type): $RotationMirror
public "rotation"(): $Rotation
public "mirrorate"(): $RotationMirror
public "mirrorate"(arg0: $Mirror$Type): $RotationMirror
public "applyToPos"(arg0: $Vec3$Type): $Vec3
public "applyToPos"(arg0: $BlockPos$Type): $BlockPos
public "applyToPos"(arg0: $Vec3$Type, arg1: $BlockPos$Type): $Vec3
public "applyToPos"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $BlockPos
get "mirrored"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationMirror$Type = (("r180") | ("mir_none") | ("mir_r270") | ("mir_r180") | ("mir_r90") | ("r90") | ("none") | ("r270")) | ($RotationMirror);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationMirror_ = $RotationMirror$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$TrapdoorType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TrapdoorType extends $Enum<($TrapdoorType)> implements $StringRepresentable {
static readonly "BOSS": $TrapdoorType
static readonly "COFFER": $TrapdoorType
static readonly "FULL": $TrapdoorType
static readonly "HORIZONTAL_BARS": $TrapdoorType
static readonly "HORIZONTALLY_SQUIGGLY_STRIPED": $TrapdoorType
static readonly "HORIZONTALLY_STRIPED": $TrapdoorType
static readonly "MOULDING": $TrapdoorType
static readonly "PORT_MANTEAU": $TrapdoorType
static readonly "PORTHOLE": $TrapdoorType
static readonly "ROUNDEL": $TrapdoorType
static readonly "SLOT": $TrapdoorType
static readonly "VERTICAL_BARS": $TrapdoorType
static readonly "VERTICALLY_SQUIGGLY_STRIPED": $TrapdoorType
static readonly "VERTICALLY_STRIPED": $TrapdoorType
static readonly "WAFFLE": $TrapdoorType


public static "values"(): ($TrapdoorType)[]
public static "valueOf"(arg0: string): $TrapdoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorType$Type = (("roundel") | ("coffer") | ("horizontal_bars") | ("boss") | ("slot") | ("moulding") | ("porthole") | ("horizontally_striped") | ("waffle") | ("vertically_striped") | ("port_manteau") | ("vertical_bars") | ("vertically_squiggly_striped") | ("full") | ("horizontally_squiggly_striped")) | ($TrapdoorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorType_ = $TrapdoorType$Type;
}}
declare module "packages/com/ldtteam/blockui/$MouseEventCallback" {
import {$Pane, $Pane$Type} from "packages/com/ldtteam/blockui/$Pane"

export interface $MouseEventCallback {

 "accept"(arg0: $Pane$Type, arg1: double, arg2: double): boolean

(arg0: $Pane$Type, arg1: double, arg2: double): boolean
}

export namespace $MouseEventCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEventCallback$Type = ($MouseEventCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseEventCallback_ = $MouseEventCallback$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$TimberFrameBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$TimberFrameType, $TimberFrameType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$TimberFrameType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $TimberFrameBlock extends $AbstractBlock<($TimberFrameBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $TimberFrameType$Type)

public "getBlock"(): $Block
public static "getName"(arg0: $TimberFrameType$Type): string
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "getTimberFrameType"(): $TimberFrameType
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "timberFrameType"(): $TimberFrameType
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameBlock$Type = ($TimberFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameBlock_ = $TimberFrameBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$AbstractItemWithPosSelector" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractItemWithPosSelector extends $Item {
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

public static "getBounds"(arg0: $ItemStack$Type): $Tuple<($BlockPos), ($BlockPos)>
public "onAirRightClick"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $ItemStack$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
public static "setBounds"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemWithPosSelector$Type = ($AbstractItemWithPosSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemWithPosSelector_ = $AbstractItemWithPosSelector$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$PostBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PostBlock, $PostBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$PostBlock"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PostBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $PostBlock$Type, arg1: $Item$Properties$Type)

public "renderPreview"(): boolean
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlockItem$Type = ($PostBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlockItem_ = $PostBlockItem$Type;
}}
declare module "packages/com/ldtteam/blockui/util/records/$Pos2i$MutablePos2i" {
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i$ImmutablePos2i"
import {$Pos2i, $Pos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i"

export class $Pos2i$MutablePos2i implements $Pos2i {
 "x": integer
 "y": integer

constructor(arg0: integer, arg1: integer)
constructor()

public "x"(): integer
public "y"(): integer
public "toImmutable"(): $Pos2i$ImmutablePos2i
public "toMutable"(): $Pos2i$MutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$MutablePos2i$Type = ($Pos2i$MutablePos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i$MutablePos2i_ = $Pos2i$MutablePos2i$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$ShingleSlabBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShingleSlabBlock, $ShingleSlabBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$ShingleSlabBlock"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShingleSlabBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $ShingleSlabBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabBlockItem$Type = ($ShingleSlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabBlockItem_ = $ShingleSlabBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$DOStairBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $DOStairBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isStairs"(arg0: $BlockState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DOStairBlock$Type = ($DOStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DOStairBlock_ = $DOStairBlock$Type;
}}
declare module "packages/com/ldtteam/blockui/util/records/$Pos2i" {
import {$Pos2i$MutablePos2i, $Pos2i$MutablePos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i$MutablePos2i"
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i$ImmutablePos2i"

export interface $Pos2i {

 "x"(): integer
 "y"(): integer
 "toImmutable"(): $Pos2i$ImmutablePos2i
 "toMutable"(): $Pos2i$MutablePos2i
}

export namespace $Pos2i {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$Type = ($Pos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i_ = $Pos2i$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockDoor" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $AbstractBlockDoor<B extends $AbstractBlockDoor<(B)>> extends $DoorBlock implements $IDOBlock<(B)> {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "AABB_DOOR_THICKNESS": float
static readonly "SOUTH_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
readonly "type": $BlockSetType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockDoor$Type<B> = ($AbstractBlockDoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockDoor_<B> = $AbstractBlockDoor$Type<(B)>;
}}
declare module "packages/com/ldtteam/blockui/$Alignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Alignment extends $Enum<($Alignment)> {
static readonly "TOP_LEFT": $Alignment
static readonly "TOP_MIDDLE": $Alignment
static readonly "TOP_RIGHT": $Alignment
static readonly "MIDDLE_LEFT": $Alignment
static readonly "MIDDLE": $Alignment
static readonly "MIDDLE_RIGHT": $Alignment
static readonly "BOTTOM_LEFT": $Alignment
static readonly "BOTTOM_MIDDLE": $Alignment
static readonly "BOTTOM_RIGHT": $Alignment


public static "values"(): ($Alignment)[]
public static "valueOf"(arg0: string): $Alignment
public "isVerticalCentered"(): boolean
public "isRightAligned"(): boolean
public "isHorizontalCentered"(): boolean
public "isBottomAligned"(): boolean
get "verticalCentered"(): boolean
get "rightAligned"(): boolean
get "horizontalCentered"(): boolean
get "bottomAligned"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Alignment$Type = (("top_right") | ("top_middle") | ("middle") | ("bottom_middle") | ("middle_right") | ("top_left") | ("middle_left") | ("bottom_right") | ("bottom_left")) | ($Alignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Alignment_ = $Alignment$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$WallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AbstractBlockWall, $AbstractBlockWall$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockWall"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WallBlock extends $AbstractBlockWall<($WallBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static "PROPERTIES": $ImmutableMap<($Direction), ($EnumProperty<($WallSide)>)>
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBlock$Type = ($WallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBlock_ = $WallBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/schematic/$BlockSubstitution" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockSubstitution extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public static "defaultSubstitutionProperties"(): $BlockBehaviour$Properties
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSubstitution$Type = ($BlockSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSubstitution_ = $BlockSubstitution$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$ExtraBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExtraBlockType, $ExtraBlockType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$ExtraBlockType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExtraBlock extends $AbstractBlock<($ExtraBlock)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $ExtraBlockType$Type)

public "getType"(): $ExtraBlockType
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "type"(): $ExtraBlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlock$Type = ($ExtraBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlock_ = $ExtraBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IMateriallyTexturedBlockComponent {

 "getDefault"(): $Block
 "getId"(): $ResourceLocation
 "getValidSkins"(): $TagKey<($Block)>
 "isOptional"(): boolean
}

export namespace $IMateriallyTexturedBlockComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlockComponent$Type = ($IMateriallyTexturedBlockComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlockComponent_ = $IMateriallyTexturedBlockComponent$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$BarrelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"

export class $BarrelBlock extends $AbstractBlock<($BarrelBlock)> implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlock$Type = ($BarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlock_ = $BarrelBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/schematic/$BlockFluidSubstitution" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $BlockFluidSubstitution extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidSubstitution$Type = ($BlockFluidSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidSubstitution_ = $BlockFluidSubstitution$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$FancyDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FancyDoorType, $FancyDoorType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$FancyDoorType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractBlockDoor, $AbstractBlockDoor$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockDoor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $FancyDoorBlock extends $AbstractBlockDoor<($FancyDoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "TYPE": $EnumProperty<($FancyDoorType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "AABB_DOOR_THICKNESS": float
static readonly "SOUTH_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
readonly "type": $BlockSetType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorBlock$Type = ($FancyDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorBlock_ = $FancyDoorBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$PanelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractPanelBlockTrapdoor, $AbstractPanelBlockTrapdoor$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractPanelBlockTrapdoor"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TrapdoorType, $TrapdoorType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$TrapdoorType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PanelBlock extends $AbstractPanelBlockTrapdoor<($PanelBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "TYPE": $EnumProperty<($TrapdoorType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanelBlock$Type = ($PanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanelBlock_ = $PanelBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$ShingleBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ShingleBlock, $ShingleBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$ShingleBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShingleBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $ShingleBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleBlockItem$Type = ($ShingleBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleBlockItem_ = $ShingleBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$PillarShapeType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PillarShapeType extends $Enum<($PillarShapeType)> implements $StringRepresentable {
static readonly "PILLAR_BASE": $PillarShapeType
static readonly "PILLAR_CAPITAL": $PillarShapeType
static readonly "PILLAR_COLUMN": $PillarShapeType
static readonly "FULL_PILLAR": $PillarShapeType


public "getSpecificationName"(): string
public static "values"(): ($PillarShapeType)[]
public static "valueOf"(arg0: string): $PillarShapeType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "specificationName"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarShapeType$Type = (("pillar_column") | ("pillar_capital") | ("full_pillar") | ("pillar_base")) | ($PillarShapeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarShapeType_ = $PillarShapeType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$TimberFrameType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TimberFrameType extends $Enum<($TimberFrameType)> implements $StringRepresentable {
static readonly "PLAIN": $TimberFrameType
static readonly "DOUBLE_CROSSED": $TimberFrameType
static readonly "FRAMED": $TimberFrameType
static readonly "SIDE_FRAMED": $TimberFrameType
static readonly "UP_GATED": $TimberFrameType
static readonly "DOWN_GATED": $TimberFrameType
static readonly "ONE_CROSSED_LR": $TimberFrameType
static readonly "ONE_CROSSED_RL": $TimberFrameType
static readonly "HORIZONTAL_PLAIN": $TimberFrameType
static readonly "SIDE_FRAMED_HORIZONTAL": $TimberFrameType


public "getName"(): string
public static "values"(): ($TimberFrameType)[]
public static "valueOf"(arg0: string): $TimberFrameType
public "getLangName"(): string
public "isRotatable"(): boolean
public "getPrevious"(): $TimberFrameType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "langName"(): string
get "rotatable"(): boolean
get "previous"(): $TimberFrameType
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameType$Type = (("framed") | ("one_crossed_rl") | ("plain") | ("side_framed_horizontal") | ("down_gated") | ("one_crossed_lr") | ("horizontal_plain") | ("up_gated") | ("double_crossed") | ("side_framed")) | ($TimberFrameType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameType_ = $TimberFrameType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$DoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractBlockDoor, $AbstractBlockDoor$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockDoor"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$DoorType, $DoorType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$DoorType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $DoorBlock extends $AbstractBlockDoor<($DoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "TYPE": $EnumProperty<($DoorType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "AABB_DOOR_THICKNESS": float
static readonly "SOUTH_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
readonly "type": $BlockSetType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlock$Type = ($DoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorBlock_ = $DoorBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$FenceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractBlockFence, $AbstractBlockFence$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockFence"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FenceBlock extends $AbstractBlockFence<($FenceBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
readonly "collisionShapeByIndex": ($VoxelShape)[]
readonly "shapeByIndex": ($VoxelShape)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBlock$Type = ($FenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBlock_ = $FenceBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$IInvisibleBlueprintAnchorBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IInvisibleBlueprintAnchorBlock {

 "isVisible"(arg0: $CompoundTag$Type): boolean

(arg0: $CompoundTag$Type): boolean
}

export namespace $IInvisibleBlueprintAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInvisibleBlueprintAnchorBlock$Type = ($IInvisibleBlueprintAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInvisibleBlueprintAnchorBlock_ = $IInvisibleBlueprintAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$FancyTrapdoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractBlockTrapdoor, $AbstractBlockTrapdoor$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockTrapdoor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$FancyTrapdoorType, $FancyTrapdoorType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$FancyTrapdoorType"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $FancyTrapdoorBlock extends $AbstractBlockTrapdoor<($FancyTrapdoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "TYPE": $EnumProperty<($FancyTrapdoorType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_THICKNESS": integer
static readonly "EAST_OPEN_AABB": $VoxelShape
static readonly "WEST_OPEN_AABB": $VoxelShape
static readonly "SOUTH_OPEN_AABB": $VoxelShape
static readonly "NORTH_OPEN_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
readonly "type": $BlockSetType
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorBlock$Type = ($FancyTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorBlock_ = $FancyTrapdoorBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/placement/handlers/placement/$PlacementError" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlacementError$PlacementErrorType, $PlacementError$PlacementErrorType$Type} from "packages/com/ldtteam/structurize/placement/handlers/placement/$PlacementError$PlacementErrorType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlacementError {

constructor(arg0: $PlacementError$PlacementErrorType$Type, arg1: $BlockPos$Type)

public "setType"(arg0: $PlacementError$PlacementErrorType$Type): void
public "getType"(): $PlacementError$PlacementErrorType
public static "partitionPlacementErrorsByErrorType"(arg0: $List$Type<($PlacementError$Type)>): $Map<($PlacementError$PlacementErrorType), ($List<($BlockPos)>)>
public static "blockListToCommaSeparatedString"(arg0: $List$Type<($BlockPos$Type)>): string
public "setPos"(arg0: $BlockPos$Type): void
public "getPos"(): $BlockPos
set "type"(value: $PlacementError$PlacementErrorType$Type)
get "type"(): $PlacementError$PlacementErrorType
set "pos"(value: $BlockPos$Type)
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementError$Type = ($PlacementError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementError_ = $PlacementError$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$FenceGateBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$FenceGateBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FenceGateBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FenceGateBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlockItem$Type = ($FenceGateBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceGateBlockItem_ = $FenceGateBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$FancyDoorType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FancyDoorType extends $Enum<($FancyDoorType)> implements $StringRepresentable {
static readonly "FULL": $FancyDoorType
static readonly "CREEPER": $FancyDoorType


public static "values"(): ($FancyDoorType)[]
public static "valueOf"(arg0: string): $FancyDoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorType$Type = (("creeper") | ("full")) | ($FancyDoorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorType_ = $FancyDoorType$Type;
}}
declare module "packages/com/ldtteam/blockui/$BOGuiGraphics" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BlockStateRenderingData, $BlockStateRenderingData$Type} from "packages/com/ldtteam/blockui/mod/item/$BlockStateRenderingData"
import {$Cursor, $Cursor$Type} from "packages/com/ldtteam/blockui/util/cursor/$Cursor"

export class $BOGuiGraphics extends $GuiGraphics {
static readonly "MAX_GUI_Z": float
static readonly "MIN_GUI_Z": float
 "minecraft": $Minecraft
 "pose": $PoseStack
 "bufferSource": $MultiBufferSource$BufferSource
 "tooltipStack": $ItemStack

constructor(arg0: $Minecraft$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$BufferSource$Type)

public "renderBlockStateAsItem"(arg0: $BlockStateRenderingData$Type, arg1: $ItemStack$Type): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): void
public "renderItemDecorations"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: string): void
public "drawString"(arg0: string, arg1: float, arg2: float, arg3: integer, arg4: boolean): integer
public "drawString"(arg0: string, arg1: float, arg2: float, arg3: integer): integer
public "setCursor"(arg0: $Cursor$Type): void
public "applyCursor"(arg0: integer): void
public "applyPoseToShader"(): void
set "cursor"(value: $Cursor$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOGuiGraphics$Type = ($BOGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOGuiGraphics_ = $BOGuiGraphics$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$IAnchorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAnchorBlock {

}

export namespace $IAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnchorBlock$Type = ($IAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnchorBlock_ = $IAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemTagTool" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemWithPosSelector"

export class $ItemTagTool extends $AbstractItemWithPosSelector {
static readonly "TAG_ANCHOR_POS": string
static readonly "TAG_CURRENT_TAG": string
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

constructor()
constructor(arg0: $Item$Properties$Type)

public "onAirRightClick"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $ItemStack$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTagTool$Type = ($ItemTagTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTagTool_ = $ItemTagTool$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$AllBrickBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$AllBrickBlock, $AllBrickBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$AllBrickBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AllBrickBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $AllBrickBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickBlockItem$Type = ($AllBrickBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickBlockItem_ = $AllBrickBlockItem$Type;
}}
declare module "packages/com/ldtteam/structurize/placement/handlers/placement/$PlacementError$PlacementErrorType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlacementError$PlacementErrorType extends $Enum<($PlacementError$PlacementErrorType)> {
static readonly "NOT_SOLID": $PlacementError$PlacementErrorType
static readonly "INSIDE_COLONY": $PlacementError$PlacementErrorType
static readonly "NEEDS_AIR_ABOVE": $PlacementError$PlacementErrorType
static readonly "NOT_WATER": $PlacementError$PlacementErrorType


public static "values"(): ($PlacementError$PlacementErrorType)[]
public static "valueOf"(arg0: string): $PlacementError$PlacementErrorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementError$PlacementErrorType$Type = (("inside_colony") | ("needs_air_above") | ("not_solid") | ("not_water")) | ($PlacementError$PlacementErrorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementError$PlacementErrorType_ = $PlacementError$PlacementErrorType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$PostBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractPostBlock, $AbstractPostBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractPostBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$PostType, $PostType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$PostType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PostBlock extends $AbstractPostBlock<($PostBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "TYPE": $EnumProperty<($PostType)>
static readonly "UPRIGHT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$Type = ($PostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock_ = $PostBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$WallBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$WallBlock, $WallBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$WallBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WallBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $WallBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBlockItem$Type = ($WallBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBlockItem_ = $WallBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$FramedLightBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$FramedLightType, $FramedLightType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$FramedLightType"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FramedLightBlock extends $AbstractBlock<($FramedLightBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $FramedLightType$Type)

public "getBlock"(): $Block
public static "getName"(arg0: $FramedLightType$Type): string
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getFramedLightType"(): $FramedLightType
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "framedLightType"(): $FramedLightType
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightBlock$Type = ($FramedLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightBlock_ = $FramedLightBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$FancyTrapdoorBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FancyTrapdoorBlock, $FancyTrapdoorBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$FancyTrapdoorBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FancyTrapdoorBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FancyTrapdoorBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorBlockItem$Type = ($FancyTrapdoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorBlockItem_ = $FancyTrapdoorBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICachedItemGroupBlock {

 "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
 "resetCache"(): void
}

export namespace $ICachedItemGroupBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICachedItemGroupBlock$Type = ($ICachedItemGroupBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICachedItemGroupBlock_ = $ICachedItemGroupBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/blockentities/$BlockEntityTagSubstitution$ReplacementBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RotationMirror, $RotationMirror$Type} from "packages/com/ldtteam/structurize/util/$RotationMirror"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityTagSubstitution$ReplacementBlock {

constructor(arg0: $CompoundTag$Type)
constructor(arg0: $BlockState$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type)
constructor(arg0: $BlockState$Type, arg1: $BlockEntity$Type, arg2: $ItemStack$Type)

public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "getItemStack"(): $ItemStack
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "createBlueprint"(): $Blueprint
public "getBlockState"(): $BlockState
public "getBlockEntityTag"(): $CompoundTag
public "createBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
/**
 * 
 * @deprecated
 */
public "rotateWithMirror"(arg0: $BlockPos$Type, arg1: $Rotation$Type, arg2: $Mirror$Type, arg3: $Level$Type): $BlockEntityTagSubstitution$ReplacementBlock
public "rotateWithMirror"(arg0: $BlockPos$Type, arg1: $RotationMirror$Type, arg2: $Level$Type): $BlockEntityTagSubstitution$ReplacementBlock
get "empty"(): boolean
get "itemStack"(): $ItemStack
get "blockState"(): $BlockState
get "blockEntityTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTagSubstitution$ReplacementBlock$Type = ($BlockEntityTagSubstitution$ReplacementBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTagSubstitution$ReplacementBlock_ = $BlockEntityTagSubstitution$ReplacementBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$PillarBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PillarShapeType, $PillarShapeType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$PillarShapeType"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PillarBlock extends $AbstractBlock<($PillarBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "COLUMN": $EnumProperty<($PillarShapeType)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarBlock$Type = ($PillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarBlock_ = $PillarBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemTagSubstitution" {
import {$ISpecialBlockPickItem, $ISpecialBlockPickItem$Type} from "packages/com/ldtteam/structurize/api/util/$ISpecialBlockPickItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityTagSubstitution$ReplacementBlock, $BlockEntityTagSubstitution$ReplacementBlock$Type} from "packages/com/ldtteam/structurize/blockentities/$BlockEntityTagSubstitution$ReplacementBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTagSubstitution extends $BlockItem implements $ISpecialBlockPickItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
public "onAbsorbBlock"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): void
public "getAbsorbedBlock"(arg0: $ItemStack$Type): $BlockEntityTagSubstitution$ReplacementBlock
public "onBlockPick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: boolean): $InteractionResult
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTagSubstitution$Type = ($ItemTagSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTagSubstitution_ = $ItemTagSubstitution$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockTrapdoor" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $AbstractBlockTrapdoor<B extends $AbstractBlockTrapdoor<(B)>> extends $TrapDoorBlock implements $IDOBlock<(B)> {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_THICKNESS": integer
static readonly "EAST_OPEN_AABB": $VoxelShape
static readonly "WEST_OPEN_AABB": $VoxelShape
static readonly "SOUTH_OPEN_AABB": $VoxelShape
static readonly "NORTH_OPEN_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
readonly "type": $BlockSetType
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockTrapdoor$Type<B> = ($AbstractBlockTrapdoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockTrapdoor_<B> = $AbstractBlockTrapdoor$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$StairBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StairBlock as $StairBlock$0, $StairBlock$Type as $StairBlock$0$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"

export class $StairBlock extends $StairBlock$0 implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock, $IDOBlock<($StairBlock)> {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TOP_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "OCTET_NNN": $VoxelShape
static readonly "OCTET_NNP": $VoxelShape
static readonly "OCTET_NPN": $VoxelShape
static readonly "OCTET_NPP": $VoxelShape
static readonly "OCTET_PNN": $VoxelShape
static readonly "OCTET_PNP": $VoxelShape
static readonly "OCTET_PPN": $VoxelShape
static readonly "OCTET_PPP": $VoxelShape
static readonly "TOP_SHAPES": ($VoxelShape)[]
static readonly "BOTTOM_SHAPES": ($VoxelShape)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getRegistryName"(): $ResourceLocation
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "registryName"(): $ResourceLocation
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairBlock$Type = ($StairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairBlock_ = $StairBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$ShingleSlabBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractBlockDirectional, $AbstractBlockDirectional$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockDirectional"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$ShingleSlabShapeType, $ShingleSlabShapeType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$ShingleSlabShapeType"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ShingleSlabBlock extends $AbstractBlockDirectional<($ShingleSlabBlock)> implements $SimpleWaterloggedBlock, $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "SHAPE": $EnumProperty<($ShingleSlabShapeType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "pickupSound"(): $Optional<($SoundEvent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabBlock$Type = ($ShingleSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabBlock_ = $ShingleSlabBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$DoorBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$DoubleHighBlockItem, $DoubleHighBlockItem$Type} from "packages/net/minecraft/world/item/$DoubleHighBlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DoorBlock, $DoorBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$DoorBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DoorBlockItem extends $DoubleHighBlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $DoorBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlockItem$Type = ($DoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorBlockItem_ = $DoorBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$AllBrickStairBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractBlockStairs, $AbstractBlockStairs$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockStairs"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AllBrickStairBlock extends $AbstractBlockStairs<($AllBrickStairBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickStairBlock$Type = ($AllBrickStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickStairBlock_ = $AllBrickStairBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$SlabBlockItem" {
import {$SlabBlock, $SlabBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$SlabBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SlabBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $SlabBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlockItem$Type = ($SlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlockItem_ = $SlabBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$PillarBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$PillarBlock, $PillarBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$PillarBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PillarBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $PillarBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarBlockItem$Type = ($PillarBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarBlockItem_ = $PillarBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractPostBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$PostType, $PostType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$PostType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $AbstractPostBlock<B extends $AbstractPostBlock<(B)>> extends $DirectionalBlock implements $IDOBlock<(B)> {
static readonly "TYPE": $EnumProperty<($PostType)>
static readonly "UPRIGHT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPostBlock$Type<B> = ($AbstractPostBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPostBlock_<B> = $AbstractPostBlock$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$FancyTrapdoorType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FancyTrapdoorType extends $Enum<($FancyTrapdoorType)> implements $StringRepresentable {
static readonly "FULL": $FancyTrapdoorType
static readonly "CREEPER": $FancyTrapdoorType


public static "values"(): ($FancyTrapdoorType)[]
public static "valueOf"(arg0: string): $FancyTrapdoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorType$Type = (("creeper") | ("full")) | ($FancyTrapdoorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorType_ = $FancyTrapdoorType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$ShingleShapeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShingleShapeType extends $Enum<($ShingleShapeType)> {
static readonly "CONCAVE": $ShingleShapeType
static readonly "CONVEX": $ShingleShapeType
static readonly "STRAIGHT": $ShingleShapeType


public static "values"(): ($ShingleShapeType)[]
public static "valueOf"(arg0: string): $ShingleShapeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleShapeType$Type = (("concave") | ("straight") | ("convex")) | ($ShingleShapeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleShapeType_ = $ShingleShapeType$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$StairsBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StairBlock, $StairBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$StairBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StairsBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $StairBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairsBlockItem$Type = ($StairsBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairsBlockItem_ = $StairsBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$FenceGateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$AbstractBlockFenceGate, $AbstractBlockFenceGate$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockFenceGate"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FenceGateBlock extends $AbstractBlockFenceGate<($FenceGateBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "Z_SHAPE": $VoxelShape
static readonly "X_SHAPE": $VoxelShape
static readonly "Z_SHAPE_LOW": $VoxelShape
static readonly "X_SHAPE_LOW": $VoxelShape
static readonly "Z_COLLISION_SHAPE": $VoxelShape
static readonly "X_COLLISION_SHAPE": $VoxelShape
static readonly "Z_SUPPORT_SHAPE": $VoxelShape
static readonly "X_SUPPORT_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE": $VoxelShape
static readonly "X_OCCLUSION_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE_LOW": $VoxelShape
static readonly "X_OCCLUSION_SHAPE_LOW": $VoxelShape
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlock$Type = ($FenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceGateBlock_ = $FenceGateBlock$Type;
}}
declare module "packages/com/ldtteam/blockui/views/$BOWindow" {
import {$View, $View$Type} from "packages/com/ldtteam/blockui/views/$View"
import {$BOGuiGraphics, $BOGuiGraphics$Type} from "packages/com/ldtteam/blockui/$BOGuiGraphics"
import {$BOWindow$WindowRenderType, $BOWindow$WindowRenderType$Type} from "packages/com/ldtteam/blockui/views/$BOWindow$WindowRenderType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BOScreen, $BOScreen$Type} from "packages/com/ldtteam/blockui/$BOScreen"
import {$PaneParams, $PaneParams$Type} from "packages/com/ldtteam/blockui/$PaneParams"

export class $BOWindow extends $View {
static readonly "DEFAULT_WIDTH": integer
static readonly "DEFAULT_HEIGHT": integer
static readonly "HALF_BIAS": double

constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: $ResourceLocation$Type)

public "close"(): void
public "open"(): void
public "onMouseReleased"(arg0: double, arg1: double): boolean
public "getRenderType"(): $BOWindow$WindowRenderType
public "openAsLayer"(): void
public "hasLightbox"(): boolean
public "doesWindowPauseGame"(): boolean
public "getXmlResourceLocation"(): $ResourceLocation
public "onUnhandledKeyTyped"(arg0: integer, arg1: integer): boolean
public "getScreen"(): $BOScreen
public "onKeyTyped"(arg0: character, arg1: integer): boolean
public "onClosed"(): void
public "drawSelf"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "onOpened"(): void
public "loadParams"(arg0: $PaneParams$Type): void
get "renderType"(): $BOWindow$WindowRenderType
get "xmlResourceLocation"(): $ResourceLocation
get "screen"(): $BOScreen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOWindow$Type = ($BOWindow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOWindow_ = $BOWindow$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$FloatingCarpetBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FloatingCarpetBlock extends $AbstractBlock<($FloatingCarpetBlock)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $DyeColor$Type)

public "getColor"(): $DyeColor
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingCarpetBlock$Type = ($FloatingCarpetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingCarpetBlock_ = $FloatingCarpetBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$TimberFrameBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TimberFrameBlock, $TimberFrameBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$TimberFrameBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TimberFrameBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $TimberFrameBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameBlockItem$Type = ($TimberFrameBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameBlockItem_ = $TimberFrameBlockItem$Type;
}}
declare module "packages/com/ldtteam/blockui/$Pane" {
import {$View, $View$Type} from "packages/com/ldtteam/blockui/views/$View"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$BOGuiGraphics, $BOGuiGraphics$Type} from "packages/com/ldtteam/blockui/$BOGuiGraphics"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UiRenderMacros, $UiRenderMacros$Type} from "packages/com/ldtteam/blockui/$UiRenderMacros"
import {$PaneParams, $PaneParams$Type} from "packages/com/ldtteam/blockui/$PaneParams"
import {$Alignment, $Alignment$Type} from "packages/com/ldtteam/blockui/$Alignment"
import {$Cursor, $Cursor$Type} from "packages/com/ldtteam/blockui/util/cursor/$Cursor"

export class $Pane extends $UiRenderMacros {
static readonly "HALF_BIAS": double

constructor()
constructor(arg0: $PaneParams$Type)

public "setID"(arg0: string): void
public "setSize"(arg0: integer, arg1: integer): void
public "getID"(): string
public "isEnabled"(): boolean
public "getY"(): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "getX"(): integer
public "enable"(): void
public "off"(): void
public "getParent"(): $View
public "on"(): void
public "setPosition"(arg0: integer, arg1: integer): void
public "handleRightClick"(arg0: double, arg1: double): boolean
public "handleClick"(arg0: double, arg1: double): boolean
public "disable"(): void
public "draw"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "getCursor"(): $Cursor
public "getAlignment"(): $Alignment
public "wasCursorInPane"(): boolean
public "onFocusLost"(): void
public "parseChildren"(arg0: $PaneParams$Type): void
public "setAlignment"(arg0: $Alignment$Type): void
public "isPointInPane"(arg0: double, arg1: double): boolean
public "drawSelfLast"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "findPaneByID"(arg0: string): $Pane
public "findFirstPaneByType"<T extends $Pane>(arg0: $Class$Type<(T)>): T
public "findPaneByType"<T extends $Pane>(arg0: $Class$Type<(T)>): T
public "setHoverPane"(arg0: $Pane$Type): $Pane
public "isClickable"(): boolean
public "canHandleClick"(arg0: double, arg1: double): boolean
public "scrollInput"(arg0: double, arg1: double, arg2: double): boolean
public "setParentView"(arg0: $View$Type): void
public "getHoverPane"(): $Pane
public "onMouseDrag"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "findPaneOfTypeByID"<T extends $Pane>(arg0: string, arg1: $Class$Type<(T)>): T
public "setEnabled"(arg0: boolean): void
public "setVisible"(arg0: boolean): void
public "setWindow"(arg0: $BOWindow$Type): void
public "setCursor"(arg0: $Cursor$Type): void
public static "clearFocus"(): void
public "hide"(): void
public "show"(): void
public "onUpdate"(): void
public "rightClick"(arg0: double, arg1: double): boolean
public "isVisible"(): boolean
public "getWindow"(): $BOWindow
public static "setFocus"(arg0: $Pane$Type): void
public "setFocus"(): void
public "onKeyTyped"(arg0: character, arg1: integer): boolean
public "isFocus"(): boolean
public "click"(arg0: double, arg1: double): boolean
public static "getFocus"(): $Pane
public "shouldDraw"(): boolean
public "onFocus"(): void
public "moveBy"(arg0: integer, arg1: integer): void
public "drawSelf"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "drawHidden"(): void
public "drawLast"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "putInside"(arg0: $View$Type): void
set "iD"(value: string)
get "iD"(): string
get "enabled"(): boolean
get "y"(): integer
get "width"(): integer
get "height"(): integer
get "x"(): integer
get "parent"(): $View
get "cursor"(): $Cursor
get "alignment"(): $Alignment
set "alignment"(value: $Alignment$Type)
set "hoverPane"(value: $Pane$Type)
get "clickable"(): boolean
set "parentView"(value: $View$Type)
get "hoverPane"(): $Pane
set "enabled"(value: boolean)
set "visible"(value: boolean)
set "window"(value: $BOWindow$Type)
set "cursor"(value: $Cursor$Type)
get "visible"(): boolean
get "window"(): $BOWindow
set "focus"(value: $Pane$Type)
get "focus"(): boolean
get "focus"(): $Pane
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pane$Type = ($Pane);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pane_ = $Pane$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/entity/block/$IMateriallyTexturedBlockEntity" {
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"

export interface $IMateriallyTexturedBlockEntity {

 "updateTextureDataWith"(arg0: $MaterialTextureData$Type): void
 "getTextureData"(): $MaterialTextureData
}

export namespace $IMateriallyTexturedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlockEntity$Type = ($IMateriallyTexturedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlockEntity_ = $IMateriallyTexturedBlockEntity$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$ISpecialCreativeHandlerAnchorBlock" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$AbstractStructureHandler, $AbstractStructureHandler$Type} from "packages/com/ldtteam/structurize/placement/structure/$AbstractStructureHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$PlacementSettings, $PlacementSettings$Type} from "packages/com/ldtteam/structurize/util/$PlacementSettings"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISpecialCreativeHandlerAnchorBlock {

 "setup"(arg0: $ServerPlayer$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Blueprint$Type, arg4: $PlacementSettings$Type, arg5: boolean, arg6: string, arg7: string): boolean
 "getStructureHandler"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Blueprint$Type, arg3: $PlacementSettings$Type, arg4: boolean): $AbstractStructureHandler
}

export namespace $ISpecialCreativeHandlerAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialCreativeHandlerAnchorBlock$Type = ($ISpecialCreativeHandlerAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialCreativeHandlerAnchorBlock_ = $ISpecialCreativeHandlerAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/blockui/mod/item/$BlockStateRenderingData" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockStateRenderingData extends $Record {
static readonly "ILLEGAL_BLOCK_ENTITY_POS": $BlockPos

constructor(blockState: $BlockState$Type, blockEntity: $BlockEntity$Type, modelData: $ModelData$Type, modelNeedsRotationFix: boolean, playerPickedItemStack: $Lazy$Type<($ItemStack$Type)>)
constructor(arg0: $BlockState$Type, arg1: $BlockEntity$Type, arg2: $ModelData$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $BlockState$Type): $BlockStateRenderingData
public static "of"(arg0: $BlockState$Type, arg1: $BlockEntity$Type): $BlockStateRenderingData
public "blockEntity"(): $BlockEntity
public "blockState"(): $BlockState
public "itemStack"(): $ItemStack
public "updateBlockEntity"(arg0: $Function$Type<($BlockEntity$Type), ($BlockEntity$Type)>): $BlockStateRenderingData
public static "checkModelForYrotation"(arg0: $BlockState$Type): boolean
public "playerPickedItemStack"(): $Lazy<($ItemStack)>
public "modelNeedsRotationFix"(): boolean
public "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRenderingData$Type = ($BlockStateRenderingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateRenderingData_ = $BlockStateRenderingData$Type;
}}
declare module "packages/com/ldtteam/structurize/placement/structure/$AbstractStructureHandler" {
import {$IStructureHandler, $IStructureHandler$Type} from "packages/com/ldtteam/structurize/placement/structure/$IStructureHandler"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlacementSettings, $PlacementSettings$Type} from "packages/com/ldtteam/structurize/util/$PlacementSettings"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $AbstractStructureHandler implements $IStructureHandler {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Future$Type<($Blueprint$Type)>, arg3: $PlacementSettings$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Blueprint$Type, arg3: $PlacementSettings$Type)

public "getSettings"(): $PlacementSettings
public "setBlueprint"(arg0: $Blueprint$Type): void
public "hasBluePrint"(): boolean
public "getBluePrint"(): $Blueprint
public "getWorldPos"(): $BlockPos
public "triggerSuccess"(arg0: $BlockPos$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): void
public "getWorld"(): $Level
public "isReady"(): boolean
public "setMd5"(arg0: string): void
public "getMd5"(): string
public "consume"(arg0: $List$Type<($ItemStack$Type)>): void
public "getInventory"(): $IItemHandler
public "getHeldItem"(): $ItemStack
public "shouldBlocksBeConsideredEqual"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "fancyPlacement"(): boolean
public "getProgressPosInWorld"(arg0: $BlockPos$Type): $BlockPos
public "isCorrectMD5"(arg0: string): boolean
public "triggerEntitySuccess"(arg0: $BlockPos$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): void
public "getStepsPerCall"(): integer
public "getMaxBlocksCheckedPerCall"(): integer
public "isStackFree"(arg0: $ItemStack$Type): boolean
public "allowReplace"(): boolean
public "replaceWithSolidBlock"(arg0: $BlockState$Type): boolean
public "hasRequiredItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "getStructurePosFromWorld"(arg0: $BlockPos$Type): $BlockPos
public "prePlacementLogic"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getSolidBlockForPos"(arg0: $BlockPos$Type, arg1: $Function$Type<($BlockPos$Type), ($BlockState$Type)>): $BlockState
/**
 * 
 * @deprecated
 */
public "getSolidBlockForPos"(arg0: $BlockPos$Type): $BlockState
public "onCompletion"(): void
public "isCreative"(): boolean
get "settings"(): $PlacementSettings
set "blueprint"(value: $Blueprint$Type)
get "bluePrint"(): $Blueprint
get "worldPos"(): $BlockPos
get "world"(): $Level
get "ready"(): boolean
set "md5"(value: string)
get "md5"(): string
get "inventory"(): $IItemHandler
get "heldItem"(): $ItemStack
get "stepsPerCall"(): integer
get "maxBlocksCheckedPerCall"(): integer
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStructureHandler$Type = ($AbstractStructureHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStructureHandler_ = $AbstractStructureHandler$Type;
}}
declare module "packages/com/ldtteam/structurize/client/fakelevel/$IFakeLevelBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export interface $IFakeLevelBlockGetter extends $BlockGetter {

 "getMinX"(): integer
 "isPosInside"(arg0: $BlockPos$Type): boolean
 "describeSelfInCrashReport"(arg0: $CrashReportCategory$Type): void
 "getRawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
 "isPosOutside"(arg0: $BlockPos$Type): boolean
 "getRawBlockState"(arg0: $BlockPos$Type): $BlockState
 "getMinBuildHeight"(): integer
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "getSizeX"(): short
 "getSizeZ"(): short
 "getMinZ"(): integer
 "getMaxX"(): integer
 "getMaxZ"(): integer
 "getAABB"(): $AABB
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getMaxLightLevel"(): integer
 "getSectionsCount"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getHeight"(): integer
 "getMaxBuildHeight"(): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
 "getBlockEntityRenderData"(pos: $BlockPos$Type): any
 "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}

export namespace $IFakeLevelBlockGetter {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFakeLevelBlockGetter$Type = ($IFakeLevelBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFakeLevelBlockGetter_ = $IFakeLevelBlockGetter$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$AllBrickStairBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AllBrickStairBlock, $AllBrickStairBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$AllBrickStairBlock"

export class $AllBrickStairBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $AllBrickStairBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickStairBlockItem$Type = ($AllBrickStairBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickStairBlockItem_ = $AllBrickStairBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockStairs" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DOStairBlock, $DOStairBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$DOStairBlock"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockStairs<B extends $AbstractBlockStairs<(B)>> extends $DOStairBlock implements $IDOBlock<(B)> {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockStairs$Type<B> = ($AbstractBlockStairs<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockStairs_<B> = $AbstractBlockStairs$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$ExtraBlockCategory" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ExtraBlockCategory extends $Enum<($ExtraBlockCategory)> {
static readonly "BRICK": $ExtraBlockCategory
static readonly "SLATE": $ExtraBlockCategory
static readonly "THATCHED": $ExtraBlockCategory
static readonly "PAPER": $ExtraBlockCategory
static readonly "CACTUS": $ExtraBlockCategory


public static "values"(): ($ExtraBlockCategory)[]
public static "valueOf"(arg0: string): $ExtraBlockCategory
public "getMineableTag"(): $TagKey<($Block)>
get "mineableTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlockCategory$Type = (("paper") | ("cactus") | ("brick") | ("thatched") | ("slate")) | ($ExtraBlockCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockCategory_ = $ExtraBlockCategory$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IDOBlock<B extends $IDOBlock<(B)>> {

 "getRegistryName"(arg0: $Block$Type): $ResourceLocation
 "getRegistryName"(): $ResourceLocation

(arg0: $Block$Type): $ResourceLocation
}

export namespace $IDOBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDOBlock$Type<B> = ($IDOBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDOBlock_<B> = $IDOBlock$Type<(B)>;
}}
declare module "packages/com/ldtteam/structurize/util/$ScanToolData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ScanToolData$Slot, $ScanToolData$Slot$Type} from "packages/com/ldtteam/structurize/util/$ScanToolData$Slot"

export class $ScanToolData {
static readonly "NUM_SLOTS": integer

constructor(arg0: $CompoundTag$Type)

public "nextSlot"(): void
public "getCurrentSlotData"(): $ScanToolData$Slot
public "getCurrentSlotId"(): integer
public "setCurrentSlotData"(arg0: $ScanToolData$Slot$Type): void
public "moveTo"(arg0: integer): void
public "getInternalTag"(): $CompoundTag
public "prevSlot"(): void
get "currentSlotData"(): $ScanToolData$Slot
get "currentSlotId"(): integer
set "currentSlotData"(value: $ScanToolData$Slot$Type)
get "internalTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanToolData$Type = ($ScanToolData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanToolData_ = $ScanToolData$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockFence" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractBlockFence<B extends $AbstractBlockFence<(B)>> extends $FenceBlock implements $IDOBlock<(B)> {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
readonly "collisionShapeByIndex": ($VoxelShape)[]
readonly "shapeByIndex": ($VoxelShape)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public static "getDirectionalProperties"(): $Map<($Direction), ($BooleanProperty)>
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
get "directionalProperties"(): $Map<($Direction), ($BooleanProperty)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockFence$Type<B> = ($AbstractBlockFence<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockFence_<B> = $AbstractBlockFence$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$DoorType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DoorType extends $Enum<($DoorType)> implements $StringRepresentable {
static readonly "FULL": $DoorType
static readonly "PORT_MANTEAU": $DoorType
static readonly "VERTICALLY_STRIPED": $DoorType
static readonly "WAFFLE": $DoorType


public static "values"(): ($DoorType)[]
public static "valueOf"(arg0: string): $DoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorType$Type = (("waffle") | ("vertically_striped") | ("port_manteau") | ("full")) | ($DoorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorType_ = $DoorType$Type;
}}
declare module "packages/com/ldtteam/blockui/$PaneParams" {
import {$View, $View$Type} from "packages/com/ldtteam/blockui/views/$View"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Node, $Node$Type} from "packages/org/w3c/dom/$Node"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PaneParams {

constructor(arg0: $Node$Type)

public "getChildren"(): $List<($PaneParams)>
public "getString"(arg0: string, arg1: string): string
public "getString"(arg0: string): string
public "hasAttribute"(arg0: string): boolean
public "getProperty"<T>(arg0: string, arg1: $Function$Type<(string), (T)>, arg2: T): T
public "getBoolean"(arg0: string, arg1: boolean): boolean
public "getFloat"(arg0: string, arg1: float): float
public "getDouble"(arg0: string, arg1: double): double
public "getResource"(arg0: string, arg1: $ResourceLocation$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getResource"(arg0: string, arg1: string): $ResourceLocation
public "getResource"(arg0: string, arg1: $Consumer$Type<($ResourceLocation$Type)>): $ResourceLocation
public "getResource"(arg0: string): $ResourceLocation
public "getType"(): string
public "getInteger"(arg0: string, arg1: integer): integer
public "getText"(): string
public "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: T): T
public "getParentWidth"(): integer
public "getParentHeight"(): integer
public "getScaledInteger"(arg0: string, arg1: integer, arg2: integer): integer
public "getScaledInteger"(arg0: string, arg1: integer, arg2: integer, arg3: $Consumer$Type<($List$Type<(integer)>)>): void
public "getParentLeft"(): integer
public "getParentTop"(): integer
public "getMultilineText"(arg0: string, arg1: $List$Type<($MutableComponent$Type)>): $List<($MutableComponent)>
public "getMultilineText"(arg0: string): $List<($MutableComponent)>
public "setParentView"(arg0: $View$Type): void
public "hasAnyAttribute"(arg0: string, ...arg1: (string)[]): string
public "getTextComponent"(arg0: string, arg1: $MutableComponent$Type): $MutableComponent
public "applyShorthand"<T>(arg0: string, arg1: $Function$Type<(string), (T)>, arg2: integer, arg3: $Consumer$Type<($List$Type<(T)>)>): void
public "getParentView"(): $View
public "getColor"(arg0: string, arg1: integer): integer
get "children"(): $List<($PaneParams)>
get "type"(): string
get "text"(): string
get "parentWidth"(): integer
get "parentHeight"(): integer
get "parentLeft"(): integer
get "parentTop"(): integer
set "parentView"(value: $View$Type)
get "parentView"(): $View
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaneParams$Type = ($PaneParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaneParams_ = $PaneParams$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockSlab" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"

export class $AbstractBlockSlab<B extends $AbstractBlockSlab<(B)>> extends $SlabBlock implements $IDOBlock<(B)> {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockSlab$Type<B> = ($AbstractBlockSlab<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockSlab_<B> = $AbstractBlockSlab$Type<(B)>;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemScanTool" {
import {$ISpecialBlockPickItem, $ISpecialBlockPickItem$Type} from "packages/com/ldtteam/structurize/api/util/$ISpecialBlockPickItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ScanToolData, $ScanToolData$Type} from "packages/com/ldtteam/structurize/util/$ScanToolData"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BoxPreviewData, $BoxPreviewData$Type} from "packages/com/ldtteam/structurize/storage/rendering/types/$BoxPreviewData"
import {$IScrollableItem, $IScrollableItem$Type} from "packages/com/ldtteam/structurize/api/util/$IScrollableItem"
import {$ScanToolData$Slot, $ScanToolData$Slot$Type} from "packages/com/ldtteam/structurize/util/$ScanToolData$Slot"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemWithPosSelector"

export class $ItemScanTool extends $AbstractItemWithPosSelector implements $IScrollableItem, $ISpecialBlockPickItem {
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

constructor()
constructor(arg0: $Item$Properties$Type)

public "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
public "onMouseScroll"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): $InteractionResult
public "onAirRightClick"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $ItemStack$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
public static "saveStructure"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ScanToolData$Slot$Type, arg3: boolean): void
public static "setAnchorPos"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public static "getStructureName"(arg0: $ItemStack$Type): string
public "onBlockPick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: boolean): $InteractionResult
public static "setStructureName"(arg0: $ItemStack$Type, arg1: string): void
public static "getAnchorPos"(arg0: $ItemStack$Type): $BlockPos
public "loadSlot"(arg0: $ScanToolData$Type, arg1: $ItemStack$Type): $ScanToolData$Slot
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getBox"(arg0: $ItemStack$Type, arg1: $Player$Type): $BoxPreviewData
public "onTeleport"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScanTool$Type = ($ItemScanTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScanTool_ = $ItemScanTool$Type;
}}
declare module "packages/com/ldtteam/blockui/views/$BOWindow$WindowRenderType" {
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"

export class $BOWindow$WindowRenderType extends $Enum<($BOWindow$WindowRenderType)> {
static readonly "VANILLA": $BOWindow$WindowRenderType
static readonly "FULLSCREEN": $BOWindow$WindowRenderType
static readonly "FULLSCREEN_VANILLA": $BOWindow$WindowRenderType
static readonly "FIXED": $BOWindow$WindowRenderType
static readonly "FIXED_VANILLA": $BOWindow$WindowRenderType
static readonly "OVERSIZED": $BOWindow$WindowRenderType
static readonly "OVERSIZED_VANILLA": $BOWindow$WindowRenderType


public static "values"(): ($BOWindow$WindowRenderType)[]
public static "valueOf"(arg0: string): $BOWindow$WindowRenderType
public "calcRenderScale"(arg0: $Window$Type, arg1: $BOWindow$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOWindow$WindowRenderType$Type = (("fullscreen_vanilla") | ("fullscreen") | ("oversized") | ("fixed") | ("oversized_vanilla") | ("fixed_vanilla") | ("vanilla")) | ($BOWindow$WindowRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOWindow$WindowRenderType_ = $BOWindow$WindowRenderType$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemShapeTool" {
import {$AbstractItemStructurize, $AbstractItemStructurize$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemStructurize"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemShapeTool extends $AbstractItemStructurize {
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

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapeTool$Type = ($ItemShapeTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapeTool_ = $ItemShapeTool$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractPanelBlockTrapdoor" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"

export class $AbstractPanelBlockTrapdoor<B extends $AbstractPanelBlockTrapdoor<(B)>> extends $HorizontalDirectionalBlock implements $IDOBlock<(B)>, $SimpleWaterloggedBlock {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPanelBlockTrapdoor$Type<B> = ($AbstractPanelBlockTrapdoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPanelBlockTrapdoor_<B> = $AbstractPanelBlockTrapdoor$Type<(B)>;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$ILeveledBlueprintAnchorBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ILeveledBlueprintAnchorBlock {

 "getLevel"(arg0: $CompoundTag$Type): integer

(arg0: $CompoundTag$Type): integer
}

export namespace $ILeveledBlueprintAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeveledBlueprintAnchorBlock$Type = ($ILeveledBlueprintAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILeveledBlueprintAnchorBlock_ = $ILeveledBlueprintAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$ExtraBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ExtraBlock, $ExtraBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$ExtraBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtraBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $ExtraBlock$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlockItem$Type = ($ExtraBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockItem_ = $ExtraBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockPane" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IronBarsBlock, $IronBarsBlock$Type} from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractBlockPane<B extends $AbstractBlockPane<(B)>> extends $IronBarsBlock implements $IDOBlock<(B)> {
static "PROPERTIES": $ImmutableMap<($Direction), ($BooleanProperty)>
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
readonly "collisionShapeByIndex": ($VoxelShape)[]
readonly "shapeByIndex": ($VoxelShape)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockPane$Type<B> = ($AbstractBlockPane<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockPane_<B> = $AbstractBlockPane$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/recipe/architectscutter/$ArchitectsCutterRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ArchitectsCutterRecipe, $ArchitectsCutterRecipe$Type} from "packages/com/ldtteam/domumornamentum/recipe/architectscutter/$ArchitectsCutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ArchitectsCutterRecipeSerializer implements $RecipeSerializer<($ArchitectsCutterRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ArchitectsCutterRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ArchitectsCutterRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ArchitectsCutterRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ArchitectsCutterRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterRecipeSerializer$Type = ($ArchitectsCutterRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterRecipeSerializer_ = $ArchitectsCutterRecipeSerializer$Type;
}}
declare module "packages/com/ldtteam/structurize/storage/rendering/types/$BoxPreviewData" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BoxPreviewData {

constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Optional$Type<($BlockPos$Type)>)

public "getAnchor"(): $Optional<($BlockPos)>
public "getPos1"(): $BlockPos
public "getPos2"(): $BlockPos
public "setAnchor"(arg0: $Optional$Type<($BlockPos$Type)>): void
get "anchor"(): $Optional<($BlockPos)>
get "pos1"(): $BlockPos
get "pos2"(): $BlockPos
set "anchor"(value: $Optional$Type<($BlockPos$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxPreviewData$Type = ($BoxPreviewData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxPreviewData_ = $BoxPreviewData$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/vanilla/$SlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$ICachedItemGroupBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AbstractBlockSlab, $AbstractBlockSlab$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlockSlab"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SlabBlock extends $AbstractBlockSlab<($SlabBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getBlock"(): $Block
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
public "fillItemCategory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
public "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "block"(): $Block
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "validCutterRecipes"(): $Collection<($FinishedRecipe)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlock$Type = ($SlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlock_ = $SlabBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemCaliper" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemWithPosSelector"

export class $ItemCaliper extends $AbstractItemWithPosSelector {
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

public "onAirRightClick"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $ItemStack$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCaliper$Type = ($ItemCaliper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCaliper_ = $ItemCaliper$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/schematic/$BlockTagSubstitution" {
import {$IAnchorBlock, $IAnchorBlock$Type} from "packages/com/ldtteam/structurize/blocks/interfaces/$IAnchorBlock"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockSubstitution, $BlockSubstitution$Type} from "packages/com/ldtteam/structurize/blocks/schematic/$BlockSubstitution"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockTagSubstitution extends $BlockSubstitution implements $IAnchorBlock, $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTagSubstitution$Type = ($BlockTagSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTagSubstitution_ = $BlockTagSubstitution$Type;
}}
declare module "packages/com/ldtteam/blockui/$BOScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $BOScreen extends $Screen {
static "isMouseLeftDown": boolean
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(arg0: $BOWindow$Type)

public "getFramebufferWidth"(): integer
public "getFramebufferHeight"(): integer
public "getRenderScale"(): double
public "getAbsoluteMouseX"(): integer
public "getVanillaGuiScale"(): double
public "getAbsoluteMouseY"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "removed"(): void
public "isPauseScreen"(): boolean
public "tick"(): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "getWindow"(): $BOWindow
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "framebufferWidth"(): integer
get "framebufferHeight"(): integer
get "renderScale"(): double
get "absoluteMouseX"(): integer
get "vanillaGuiScale"(): double
get "absoluteMouseY"(): integer
get "pauseScreen"(): boolean
get "window"(): $BOWindow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOScreen$Type = ($BOScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOScreen_ = $BOScreen$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockDirectional" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractBlockDirectional<B extends $AbstractBlockDirectional<(B)>> extends $HorizontalDirectionalBlock implements $IDOBlock<(B)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockDirectional$Type<B> = ($AbstractBlockDirectional<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockDirectional_<B> = $AbstractBlockDirectional$Type<(B)>;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$FramedLightBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FramedLightBlock, $FramedLightBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$FramedLightBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FramedLightBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FramedLightBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightBlockItem$Type = ($FramedLightBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightBlockItem_ = $FramedLightBlockItem$Type;
}}
declare module "packages/com/ldtteam/blockui/$UiRenderMacros" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $UiRenderMacros {
static readonly "HALF_BIAS": double

constructor()

public static "fill"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "fill"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "line"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "line"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "populateFillGradientTriangles"(arg0: $Matrix4f$Type, arg1: $BufferBuilder$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "drawLineRect"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "drawLineRect"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "drawLineRect"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "fillGradient"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "fillGradient"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public static "populateBlitTriangles"(arg0: $BufferBuilder$Type, arg1: $Matrix4f$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "populateFillTriangles"(arg0: $Matrix4f$Type, arg1: $BufferBuilder$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "blit"(arg0: $PoseStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "blit"(arg0: $PoseStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public static "blit"(arg0: $PoseStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "blit"(arg0: $PoseStack$Type, arg1: $ResourceLocation$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "drawEntity"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: double, arg4: float, arg5: float, arg6: float, arg7: $Entity$Type): void
public static "hLine"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "hLine"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "vLine"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "vLine"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UiRenderMacros$Type = ($UiRenderMacros);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UiRenderMacros_ = $UiRenderMacros$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IDoItem {

 "renderPreview"(): boolean
 "getInputIds"(): $List<($ResourceLocation)>
 "getGroup"(): $ResourceLocation

(): boolean
}

export namespace $IDoItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDoItem$Type = ($IDoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDoItem_ = $IDoItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/decorative/$BrickBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BrickType, $BrickType$Type} from "packages/com/ldtteam/domumornamentum/block/types/$BrickType"
import {$AbstractBlock, $AbstractBlock$Type} from "packages/com/ldtteam/domumornamentum/block/$AbstractBlock"

export class $BrickBlock extends $AbstractBlock<($BrickBlock)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BrickType$Type)

public "getType"(): $BrickType
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "type"(): $BrickType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrickBlock$Type = ($BrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrickBlock_ = $BrickBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$ShingleSlabShapeType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ShingleSlabShapeType extends $Enum<($ShingleSlabShapeType)> implements $StringRepresentable {
static readonly "TOP": $ShingleSlabShapeType
static readonly "ONE_WAY": $ShingleSlabShapeType
static readonly "TWO_WAY": $ShingleSlabShapeType
static readonly "THREE_WAY": $ShingleSlabShapeType
static readonly "FOUR_WAY": $ShingleSlabShapeType
static readonly "CURVED": $ShingleSlabShapeType


public "getName"(): string
public static "values"(): ($ShingleSlabShapeType)[]
public static "valueOf"(arg0: string): $ShingleSlabShapeType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabShapeType$Type = (("two_way") | ("four_way") | ("one_way") | ("curved") | ("top") | ("three_way")) | ($ShingleSlabShapeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabShapeType_ = $ShingleSlabShapeType$Type;
}}
declare module "packages/com/ldtteam/structurize/util/$BlueprintPositionInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/ldtteam/structurize/util/$BlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlueprintPositionInfo {
readonly "entities": ($CompoundTag)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockInfo$Type, arg2: ($CompoundTag$Type)[])

public "getEntities"(): ($CompoundTag)[]
public "getBlockInfo"(): $BlockInfo
public "getPos"(): $BlockPos
get "entities"(): ($CompoundTag)[]
get "blockInfo"(): $BlockInfo
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintPositionInfo$Type = ($BlueprintPositionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintPositionInfo_ = $BlueprintPositionInfo$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$INamedBlueprintAnchorBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $INamedBlueprintAnchorBlock {

 "getDesc"(): $List<($MutableComponent)>
 "getBlueprintDisplayName"(): $Component

(): $List<($MutableComponent)>
}

export namespace $INamedBlueprintAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedBlueprintAnchorBlock$Type = ($INamedBlueprintAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INamedBlueprintAnchorBlock_ = $INamedBlueprintAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/multipiston/$MultiPistonBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $MultiPistonBlock extends $BaseEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPistonBlock$Type = ($MultiPistonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPistonBlock_ = $MultiPistonBlock$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlockWall" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"

export class $AbstractBlockWall<B extends $AbstractBlockWall<(B)>> extends $WallBlock implements $IDOBlock<(B)> {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockWall$Type<B> = ($AbstractBlockWall<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockWall_<B> = $AbstractBlockWall$Type<(B)>;
}}
declare module "packages/com/ldtteam/structurize/blocks/schematic/$BlockSolidSubstitution" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $BlockSolidSubstitution extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSolidSubstitution$Type = ($BlockSolidSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSolidSubstitution_ = $BlockSolidSubstitution$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$ItemBuildTool" {
import {$AbstractItemStructurize, $AbstractItemStructurize$Type} from "packages/com/ldtteam/structurize/items/$AbstractItemStructurize"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBuildTool extends $AbstractItemStructurize {
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

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuildTool$Type = ($ItemBuildTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuildTool_ = $ItemBuildTool$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlock" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$Type} from "packages/net/minecraft/data/models/blockstates/$PropertyDispatch$QuadFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MaterialTextureData, $MaterialTextureData$Type} from "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$Type} from "packages/com/ldtteam/domumornamentum/block/$IMateriallyTexturedBlockComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FinishedRecipe, $FinishedRecipe$Type} from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMateriallyTexturedBlock {

 "getBlock"(): $Block
 "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type), ($Explosion$Type), (float)>, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Explosion$Type): float
 "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($Player$Type), ($BlockGetter$Type), ($BlockPos$Type), (float)>, arg1: $BlockState$Type, arg2: $Player$Type, arg3: $BlockGetter$Type, arg4: $BlockPos$Type): float
 "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$Type<($BlockState$Type), ($LevelReader$Type), ($BlockPos$Type), ($Entity$Type), ($SoundType$Type)>, arg1: $BlockState$Type, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: $Entity$Type): $SoundType
 "getMainComponent"(): $IMateriallyTexturedBlockComponent
 "fillDOItemCategory"(arg0: $Block$Type, arg1: $NonNullList$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): void
 "getValidCutterRecipes"(): $Collection<($FinishedRecipe)>
 "getRandomMaterials"(): $MaterialTextureData
 "usesWorldSpecificTinting"(): boolean
 "getComponents"(): $Collection<($IMateriallyTexturedBlockComponent)>
 "isCorrectToolForDrops"(arg0: $BlockState$Type, arg1: $ItemStack$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
}

export namespace $IMateriallyTexturedBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlock$Type = ($IMateriallyTexturedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlock_ = $IMateriallyTexturedBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RotationMirror, $RotationMirror$Type} from "packages/com/ldtteam/structurize/util/$RotationMirror"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/ldtteam/structurize/util/$BlockInfo"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlueprintPositionInfo, $BlueprintPositionInfo$Type} from "packages/com/ldtteam/structurize/util/$BlueprintPositionInfo"
import {$IFakeLevelBlockGetter, $IFakeLevelBlockGetter$Type} from "packages/com/ldtteam/structurize/client/fakelevel/$IFakeLevelBlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Blueprint implements $IFakeLevelBlockGetter {

constructor(arg0: short, arg1: short, arg2: short, arg3: short, arg4: $List$Type<($BlockState$Type)>, arg5: (((short)[])[])[], arg6: ($CompoundTag$Type)[], arg7: $List$Type<(string)>)
constructor(arg0: short, arg1: short, arg2: short)

public "getItem"(arg0: $BlockPos$Type): $Item
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setName"(arg0: string): $Blueprint
public "getFileName"(): string
public "getEntities"(): ($CompoundTag)[]
public "getStructure"(): (((short)[])[])[]
public "addBlockState"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "getPrimaryBlockOffset"(): $BlockPos
public "getBlockInfoAsList"(): $List<($BlockInfo)>
public "setFilePath"(arg0: $Path$Type): $Blueprint
public "getTileEntityData"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $CompoundTag
public "setPackName"(arg0: string): $Blueprint
public "getPackName"(): string
public "setRotationMirror"(arg0: $RotationMirror$Type, arg1: $Level$Type): void
public "getRotationMirror"(): $RotationMirror
public "setFileName"(arg0: string): $Blueprint
public "getFilePath"(): $Path
public "getTileEntities"(): ((($CompoundTag)[])[])[]
public "getBlockInfoAsMap"(): $Map<($BlockPos), ($BlockInfo)>
public "setEntities"(arg0: ($CompoundTag$Type)[]): void
public "describeSelfInCrashReport"(arg0: $CrashReportCategory$Type): void
public "setArchitects"(arg0: (string)[]): void
public "setMissingMods"(...arg0: (string)[]): $Blueprint
public "setCachePrimaryOffset"(arg0: $BlockPos$Type): void
public "getBluePrintPositionInfo"(arg0: $BlockPos$Type, arg1: boolean): $BlueprintPositionInfo
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getHeight"(): integer
/**
 * 
 * @deprecated
 */
public "setRenderSource"(arg0: $BlockPos$Type): void
public "setRotationMirrorRelative"(arg0: $RotationMirror$Type, arg1: $Level$Type): void
public "getRequiredMods"(): $List<(string)>
/**
 * 
 * @deprecated
 */
public "rotateWithMirror"(arg0: $Rotation$Type, arg1: $Mirror$Type, arg2: $Level$Type): void
public "getEntitiesAsList"(): $List<($CompoundTag)>
public "getCachedEntitiesAsMap"(): $Map<($BlockPos), (($CompoundTag)[])>
public "getMissingMods"(): (string)[]
public "getArchitects"(): (string)[]
public "getPalleteSize"(): short
public "getPalette"(): ($BlockState)[]
public "getSizeX"(): short
public "getSizeY"(): short
public "getSizeZ"(): short
public "getMinX"(): integer
public "isPosInside"(arg0: $BlockPos$Type): boolean
public "getRawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
public "isPosOutside"(arg0: $BlockPos$Type): boolean
public "getRawBlockState"(arg0: $BlockPos$Type): $BlockState
public "getMinBuildHeight"(): integer
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "getMinZ"(): integer
public "getMaxX"(): integer
public "getMaxZ"(): integer
public "getAABB"(): $AABB
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getMaxLightLevel"(): integer
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "getMaxBuildHeight"(): integer
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getModelDataManager"(): $ModelDataManager
public "getBlockEntityRenderData"(pos: $BlockPos$Type): any
public "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
get "name"(): string
set "name"(value: string)
get "fileName"(): string
get "entities"(): ($CompoundTag)[]
get "structure"(): (((short)[])[])[]
get "primaryBlockOffset"(): $BlockPos
get "blockInfoAsList"(): $List<($BlockInfo)>
set "filePath"(value: $Path$Type)
set "packName"(value: string)
get "packName"(): string
get "rotationMirror"(): $RotationMirror
set "fileName"(value: string)
get "filePath"(): $Path
get "tileEntities"(): ((($CompoundTag)[])[])[]
get "blockInfoAsMap"(): $Map<($BlockPos), ($BlockInfo)>
set "entities"(value: ($CompoundTag$Type)[])
set "architects"(value: (string)[])
set "missingMods"(value: (string)[])
set "cachePrimaryOffset"(value: $BlockPos$Type)
get "height"(): integer
set "renderSource"(value: $BlockPos$Type)
get "requiredMods"(): $List<(string)>
get "entitiesAsList"(): $List<($CompoundTag)>
get "cachedEntitiesAsMap"(): $Map<($BlockPos), (($CompoundTag)[])>
get "missingMods"(): (string)[]
get "architects"(): (string)[]
get "palleteSize"(): short
get "palette"(): ($BlockState)[]
get "sizeX"(): short
get "sizeY"(): short
get "sizeZ"(): short
get "minX"(): integer
get "rawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
get "minBuildHeight"(): integer
get "minZ"(): integer
get "maxX"(): integer
get "maxZ"(): integer
get "aABB"(): $AABB
get "maxLightLevel"(): integer
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
export type $Blueprint$Type = ($Blueprint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blueprint_ = $Blueprint$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$PanelBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$PanelBlock, $PanelBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$PanelBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PanelBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $PanelBlock$Type, arg1: $Item$Properties$Type)

public "renderPreview"(): boolean
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanelBlockItem$Type = ($PanelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanelBlockItem_ = $PanelBlockItem$Type;
}}
declare module "packages/com/ldtteam/structurize/blocks/interfaces/$IRequirementsBlueprintAnchorBlock" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IRequirementsBlueprintAnchorBlock {

 "areRequirementsMet"(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: $LocalPlayer$Type): boolean
 "getRequirements"(arg0: $ClientLevel$Type, arg1: $BlockPos$Type, arg2: $LocalPlayer$Type): $List<($MutableComponent)>
}

export namespace $IRequirementsBlueprintAnchorBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequirementsBlueprintAnchorBlock$Type = ($IRequirementsBlueprintAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequirementsBlueprintAnchorBlock_ = $IRequirementsBlueprintAnchorBlock$Type;
}}
declare module "packages/com/ldtteam/structurize/storage/$StructurePackMeta" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export class $StructurePackMeta {

constructor(arg0: $JsonObject$Type, arg1: $Path$Type, arg2: string)

public "getVersion"(): double
public "getDesc"(): string
public "getOwner"(): string
public "getName"(): string
public "getPath"(): $Path
public "isImmutable"(): boolean
public "setImmutable"(arg0: boolean): void
public "getPackFormat"(): integer
public "getNormalizedSubPath"(arg0: string): string
public "getIconPath"(): string
public "getAuthors"(): $List<(string)>
public "getModList"(): $List<(string)>
public "getSubPath"(arg0: $Path$Type): string
get "version"(): double
get "desc"(): string
get "owner"(): string
get "name"(): string
get "path"(): $Path
get "immutable"(): boolean
set "immutable"(value: boolean)
get "packFormat"(): integer
get "iconPath"(): string
get "authors"(): $List<(string)>
get "modList"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePackMeta$Type = ($StructurePackMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePackMeta_ = $StructurePackMeta$Type;
}}
declare module "packages/com/ldtteam/structurize/api/util/$ISpecialBlockPickItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ISpecialBlockPickItem {

 "onBlockPick"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: boolean): $InteractionResult

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: boolean): $InteractionResult
}

export namespace $ISpecialBlockPickItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialBlockPickItem$Type = ($ISpecialBlockPickItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialBlockPickItem_ = $ISpecialBlockPickItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/decoration/$FancyDoorBlockItem" {
import {$FancyDoorBlock, $FancyDoorBlock$Type} from "packages/com/ldtteam/domumornamentum/block/decorative/$FancyDoorBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$DoubleHighBlockItem, $DoubleHighBlockItem$Type} from "packages/net/minecraft/world/item/$DoubleHighBlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FancyDoorBlockItem extends $DoubleHighBlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $FancyDoorBlock$Type, arg1: $Item$Properties$Type)

public "getInputIds"(): $List<($ResourceLocation)>
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "inputIds"(): $List<($ResourceLocation)>
get "group"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorBlockItem$Type = ($FancyDoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorBlockItem_ = $FancyDoorBlockItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/item/vanilla/$TrapdoorBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IDoItem, $IDoItem$Type} from "packages/com/ldtteam/domumornamentum/item/interfaces/$IDoItem"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$TrapdoorBlock, $TrapdoorBlock$Type} from "packages/com/ldtteam/domumornamentum/block/vanilla/$TrapdoorBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrapdoorBlockItem extends $BlockItem implements $IDoItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
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

constructor(arg0: $TrapdoorBlock$Type, arg1: $Item$Properties$Type)

public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorBlockItem$Type = ($TrapdoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorBlockItem_ = $TrapdoorBlockItem$Type;
}}
declare module "packages/com/ldtteam/structurize/api/util/$IScrollableItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IScrollableItem {

 "onMouseScroll"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): $InteractionResult

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: double, arg3: boolean): $InteractionResult
}

export namespace $IScrollableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollableItem$Type = ($IScrollableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollableItem_ = $IScrollableItem$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/client/model/data/$MaterialTextureData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterialTextureData implements $INBTSerializable<($CompoundTag)> {
static readonly "EMPTY": $MaterialTextureData

constructor()
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($Block$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public static "deserializeFromNBT"(arg0: $CompoundTag$Type): $MaterialTextureData
public "getTexturedComponents"(): $Map<($ResourceLocation), ($Block)>
get "empty"(): boolean
get "texturedComponents"(): $Map<($ResourceLocation), ($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialTextureData$Type = ($MaterialTextureData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialTextureData_ = $MaterialTextureData$Type;
}}
declare module "packages/com/ldtteam/blockui/views/$View" {
import {$Pane, $Pane$Type} from "packages/com/ldtteam/blockui/$Pane"
import {$MouseEventCallback, $MouseEventCallback$Type} from "packages/com/ldtteam/blockui/$MouseEventCallback"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BOGuiGraphics, $BOGuiGraphics$Type} from "packages/com/ldtteam/blockui/$BOGuiGraphics"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PaneParams, $PaneParams$Type} from "packages/com/ldtteam/blockui/$PaneParams"
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$Type} from "packages/com/ldtteam/blockui/util/records/$Pos2i$ImmutablePos2i"

export class $View extends $Pane {
static readonly "HALF_BIAS": double

constructor()
constructor(arg0: $PaneParams$Type)

public "getChildren"(): $List<($Pane)>
public "setSize"(arg0: integer, arg1: integer): void
public "removeChild"(arg0: $Pane$Type): void
public "parseChildren"(arg0: $PaneParams$Type): void
public "drawSelfLast"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "findPaneByID"(arg0: string): $Pane
public "findPaneByType"<T extends $Pane>(arg0: $Class$Type<(T)>): T
public "scrollInput"(arg0: double, arg1: double, arg2: double): boolean
public "onMouseDrag"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "getAccumulatedPosition"(): $Pos2i$ImmutablePos2i
public "mousePointableEventHandler"(arg0: double, arg1: double, arg2: $MouseEventCallback$Type, arg3: $MouseEventCallback$Type): boolean
public "mouseClickableEventHandler"(arg0: double, arg1: double, arg2: $MouseEventCallback$Type): boolean
public "findPaneForClick"(arg0: double, arg1: double): $Pane
public "getInteriorWidth"(): integer
public "getInteriorHeight"(): integer
public "mouseEventProcessor"(arg0: double, arg1: double, arg2: $MouseEventCallback$Type, arg3: $MouseEventCallback$Type, arg4: $MouseEventCallback$Type): boolean
public "addChild"(arg0: $Pane$Type, arg1: integer): void
public "addChild"(arg0: $Pane$Type): void
public "setWindow"(arg0: $BOWindow$Type): void
public "onUpdate"(): void
public "rightClick"(arg0: double, arg1: double): boolean
public "click"(arg0: double, arg1: double): boolean
public "drawSelf"(arg0: $BOGuiGraphics$Type, arg1: double, arg2: double): void
public "drawHidden"(): void
get "children"(): $List<($Pane)>
get "accumulatedPosition"(): $Pos2i$ImmutablePos2i
get "interiorWidth"(): integer
get "interiorHeight"(): integer
set "window"(value: $BOWindow$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Type = ($View);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View_ = $View$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/$AbstractBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IDOBlock, $IDOBlock$Type} from "packages/com/ldtteam/domumornamentum/block/interfaces/$IDOBlock"

export class $AbstractBlock<B extends $AbstractBlock<(B)>> extends $Block implements $IDOBlock<(B)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlock$Type<B> = ($AbstractBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlock_<B> = $AbstractBlock$Type<(B)>;
}}
declare module "packages/com/ldtteam/structurize/util/$PlacementSettings" {
import {$RotationMirror, $RotationMirror$Type} from "packages/com/ldtteam/structurize/util/$RotationMirror"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"

/**
 * 
 * @deprecated
 */
export class $PlacementSettings {
 "mirror": $Mirror
 "rotation": $Rotation

constructor()
constructor(arg0: $Mirror$Type, arg1: $Rotation$Type)

public "getRotation"(): $Rotation
public "setRotation"(arg0: $Rotation$Type): void
public "getRotationMirror"(): $RotationMirror
public "getMirror"(): $Mirror
public "setMirror"(arg0: $Mirror$Type): void
get "rotation"(): $Rotation
set "rotation"(value: $Rotation$Type)
get "rotationMirror"(): $RotationMirror
get "mirror"(): $Mirror
set "mirror"(value: $Mirror$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementSettings$Type = ($PlacementSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementSettings_ = $PlacementSettings$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$FramedLightType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FramedLightType extends $Enum<($FramedLightType)> implements $StringRepresentable {
static readonly "VERTICAL": $FramedLightType
static readonly "CROSSED": $FramedLightType
static readonly "FRAMED": $FramedLightType
static readonly "HORIZONTAL": $FramedLightType
static readonly "LANTERN": $FramedLightType
static readonly "FOUR": $FramedLightType
static readonly "CENTER": $FramedLightType


public "getName"(): string
public static "values"(): ($FramedLightType)[]
public static "valueOf"(arg0: string): $FramedLightType
public "getLangName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "langName"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightType$Type = (("horizontal") | ("framed") | ("four") | ("center") | ("vertical") | ("crossed") | ("lantern")) | ($FramedLightType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightType_ = $FramedLightType$Type;
}}
declare module "packages/com/ldtteam/structurize/items/$AbstractItemStructurize" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractItemStructurize extends $Item {
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

constructor(arg0: string, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemStructurize$Type = ($AbstractItemStructurize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemStructurize_ = $AbstractItemStructurize$Type;
}}
declare module "packages/com/ldtteam/structurize/util/$BlockInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockInfo extends $Record {

constructor(getPos: $BlockPos$Type, getState: $BlockState$Type, getTileEntityData: $CompoundTag$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getState"(): $BlockState
public "hasTileEntityData"(): boolean
public "getTileEntityData"(): $CompoundTag
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "tileEntityData"(): $CompoundTag
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$Type = ($BlockInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$Type;
}}
declare module "packages/com/ldtteam/structurize/placement/structure/$IStructureHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Blueprint, $Blueprint$Type} from "packages/com/ldtteam/structurize/blueprints/v1/$Blueprint"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PlacementSettings, $PlacementSettings$Type} from "packages/com/ldtteam/structurize/util/$PlacementSettings"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IStructureHandler {

 "consume"(arg0: $List$Type<($ItemStack$Type)>): void
 "getSettings"(): $PlacementSettings
 "getInventory"(): $IItemHandler
 "getHeldItem"(): $ItemStack
 "setBlueprint"(arg0: $Blueprint$Type): void
 "shouldBlocksBeConsideredEqual"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
 "fancyPlacement"(): boolean
 "hasBluePrint"(): boolean
 "getBluePrint"(): $Blueprint
 "getWorldPos"(): $BlockPos
 "getProgressPosInWorld"(arg0: $BlockPos$Type): $BlockPos
 "isCorrectMD5"(arg0: string): boolean
 "triggerSuccess"(arg0: $BlockPos$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): void
 "triggerEntitySuccess"(arg0: $BlockPos$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: boolean): void
 "getStepsPerCall"(): integer
 "getMaxBlocksCheckedPerCall"(): integer
 "isStackFree"(arg0: $ItemStack$Type): boolean
 "allowReplace"(): boolean
 "replaceWithSolidBlock"(arg0: $BlockState$Type): boolean
 "hasRequiredItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
 "getStructurePosFromWorld"(arg0: $BlockPos$Type): $BlockPos
 "prePlacementLogic"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $List$Type<($ItemStack$Type)>): void
 "getSolidBlockForPos"(arg0: $BlockPos$Type, arg1: $Function$Type<($BlockPos$Type), ($BlockState$Type)>): $BlockState
/**
 * 
 * @deprecated
 */
 "getSolidBlockForPos"(arg0: $BlockPos$Type): $BlockState
 "onCompletion"(): void
 "getWorld"(): $Level
 "isReady"(): boolean
 "isCreative"(): boolean
 "setMd5"(arg0: string): void
 "getMd5"(): string
}

export namespace $IStructureHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureHandler$Type = ($IStructureHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureHandler_ = $IStructureHandler$Type;
}}
declare module "packages/com/ldtteam/domumornamentum/block/types/$PostType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PostType extends $Enum<($PostType)> implements $StringRepresentable {
static readonly "PLAIN": $PostType
static readonly "HEAVY": $PostType
static readonly "TURNED": $PostType
static readonly "PINCHED": $PostType
static readonly "DOUBLE": $PostType
static readonly "QUAD": $PostType


public static "values"(): ($PostType)[]
public static "valueOf"(arg0: string): $PostType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostType$Type = (("quad") | ("turned") | ("plain") | ("double") | ("pinched") | ("heavy")) | ($PostType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostType_ = $PostType$Type;
}}
declare module "packages/com/ldtteam/structurize/blockentities/interfaces/$IBlueprintDataProviderBE" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IBlueprintDataProviderBE {

 "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
 "getPositionedTags"(): $Map<($BlockPos), ($List<(string)>)>
 "getSchematicName"(): string
 "getInWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "setSchematicName"(arg0: string): void
 "setPositionedTags"(arg0: $Map$Type<($BlockPos$Type), ($List$Type<(string)>)>): void
 "getSchematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "setSchematicCorners"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "readSchematicDataFromNBT"(arg0: $CompoundTag$Type): void
 "writeSchematicDataToNBT"(arg0: $CompoundTag$Type): void
 "setPackName"(arg0: string): void
 "setBlueprintPath"(arg0: string): void
 "getPackName"(): string
 "getBlueprintPath"(): string
 "getWorldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
 "getWorldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
 "getRealWorldPos"(arg0: $BlockPos$Type): $BlockPos
 "removeTag"(arg0: $BlockPos$Type, arg1: string): void
 "addTag"(arg0: $BlockPos$Type, arg1: string): void
 "getTilePos"(): $BlockPos
}

export namespace $IBlueprintDataProviderBE {
const TAG_SCHEMATIC_NAME: string
const TAG_CORNER_ONE: string
const TAG_CORNER_TWO: string
const TAG_TAG_POS: string
const TAG_TAG_NAME: string
const TAG_TAG_NAME_LIST: string
const TAG_POS_TAG_MAP: string
const TAG_BLUEPRINTDATA: string
const TAG_PATH: string
const TAG_PACK: string
function writeMapToCompound(arg0: $CompoundTag$Type, arg1: $Map$Type<($BlockPos$Type), ($List$Type<(string)>)>): void
function readTagPosMapFrom(arg0: $CompoundTag$Type): $Map<($BlockPos), ($List<(string)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlueprintDataProviderBE$Type = ($IBlueprintDataProviderBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlueprintDataProviderBE_ = $IBlueprintDataProviderBE$Type;
}}

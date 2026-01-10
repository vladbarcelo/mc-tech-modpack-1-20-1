declare module "packages/slimeknights/mantle/item/$AbstractBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LecternBookItem, $LecternBookItem$Type} from "packages/slimeknights/mantle/item/$LecternBookItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BookScreenOpener, $BookScreenOpener$Type} from "packages/slimeknights/mantle/client/book/$BookScreenOpener"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractBookItem extends $LecternBookItem {
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

public static "isValidContainer"(arg0: $AbstractContainerMenu$Type): boolean
public "openLecternScreenClient"(arg0: $BlockPos$Type, arg1: $ItemStack$Type): void
public "openScreen"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): void
public "openScreen"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getBook"(arg0: $ItemStack$Type): $BookScreenOpener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBookItem$Type = ($AbstractBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBookItem_ = $AbstractBookItem$Type;
}}
declare module "packages/slimeknights/mantle/block/$MantleCeilingHangingSignBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$CeilingHangingSignBlock, $CeilingHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$CeilingHangingSignBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MantleCeilingHangingSignBlock extends $CeilingHangingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MantleCeilingHangingSignBlock$Type = ($MantleCeilingHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MantleCeilingHangingSignBlock_ = $MantleCeilingHangingSignBlock$Type;
}}
declare module "packages/slimeknights/mantle/fluid/$InvertedFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $InvertedFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedFluidType$Type = ($InvertedFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvertedFluidType_ = $InvertedFluidType$Type;
}}
declare module "packages/slimeknights/mantle/data/predicate/$IJsonPredicate" {
import {$GenericLoaderRegistry$IHaveLoader, $GenericLoaderRegistry$IHaveLoader$Type} from "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry$IHaveLoader"
import {$RecordLoadable, $RecordLoadable$Type} from "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable"

export interface $IJsonPredicate<I> extends $GenericLoaderRegistry$IHaveLoader {

 "getLoader"(): $RecordLoadable<(any)>
 "matches"(arg0: I): boolean
 "inverted"(): $IJsonPredicate<(I)>
}

export namespace $IJsonPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJsonPredicate$Type<I> = ($IJsonPredicate<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJsonPredicate_<I> = $IJsonPredicate$Type<(I)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$IdAwareObject" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IdAwareObject {

 "getId"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $IdAwareObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdAwareObject$Type = ($IdAwareObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdAwareObject_ = $IdAwareObject$Type;
}}
declare module "packages/slimeknights/mantle/client/$TooltipKey" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TooltipKey extends $Enum<($TooltipKey)> {
static readonly "NORMAL": $TooltipKey
static readonly "SHIFT": $TooltipKey
static readonly "CONTROL": $TooltipKey
static readonly "ALT": $TooltipKey
static readonly "UNKNOWN": $TooltipKey


public static "values"(): ($TooltipKey)[]
public static "valueOf"(arg0: string): $TooltipKey
public "isShiftOrUnknown"(): boolean
get "shiftOrUnknown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipKey$Type = (("normal") | ("shift") | ("alt") | ("control") | ("unknown")) | ($TooltipKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipKey_ = $TooltipKey$Type;
}}
declare module "packages/slimeknights/mantle/block/$MantleWallSignBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
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
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MantleWallSignBlock extends $WallSignBlock {
static readonly "FACING": $DirectionProperty
static readonly "AABB_THICKNESS": float
static readonly "AABB_BOTTOM": float
static readonly "AABB_TOP": float
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MantleWallSignBlock$Type = ($MantleWallSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MantleWallSignBlock_ = $MantleWallSignBlock$Type;
}}
declare module "packages/slimeknights/mantle/registration/object/$WoodBlockObject$WoodVariant" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WoodBlockObject$WoodVariant extends $Enum<($WoodBlockObject$WoodVariant)> {
static readonly "LOG": $WoodBlockObject$WoodVariant
static readonly "WOOD": $WoodBlockObject$WoodVariant
static readonly "PLANKS": $WoodBlockObject$WoodVariant


public static "values"(): ($WoodBlockObject$WoodVariant)[]
public static "valueOf"(arg0: string): $WoodBlockObject$WoodVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBlockObject$WoodVariant$Type = (("log") | ("wood") | ("planks")) | ($WoodBlockObject$WoodVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBlockObject$WoodVariant_ = $WoodBlockObject$WoodVariant$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/$Streamable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"

export interface $Streamable<T> {

 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $Streamable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Streamable$Type<T> = ($Streamable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Streamable_<T> = $Streamable$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry$IHaveLoader" {
import {$RecordLoadable, $RecordLoadable$Type} from "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable"

export interface $GenericLoaderRegistry$IHaveLoader {

 "getLoader"(): $RecordLoadable<(any)>

(): $RecordLoadable<(any)>
}

export namespace $GenericLoaderRegistry$IHaveLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericLoaderRegistry$IHaveLoader$Type = ($GenericLoaderRegistry$IHaveLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericLoaderRegistry$IHaveLoader_ = $GenericLoaderRegistry$IHaveLoader$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/$ErrorFactory" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"

export interface $ErrorFactory extends $Consumer<(string)> {

 "accept"(arg0: string): void
 "create"(arg0: string): $RuntimeException
 "create"(arg0: $RuntimeException$Type): $RuntimeException
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(string)>

(arg0: string): void
}

export namespace $ErrorFactory {
const JSON_SYNTAX_ERROR: $ErrorFactory
const DECODER_EXCEPTION: $ErrorFactory
const ENCODER_EXCEPTION: $ErrorFactory
const RUNTIME: $ErrorFactory
const FIELD: $RecordField<($ErrorFactory), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorFactory$Type = ($ErrorFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorFactory_ = $ErrorFactory$Type;
}}
declare module "packages/slimeknights/mantle/data/registry/$DefaultingLoaderRegistry" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$GenericLoaderRegistry$IHaveLoader, $GenericLoaderRegistry$IHaveLoader$Type} from "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry$IHaveLoader"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$GenericLoaderRegistry, $GenericLoaderRegistry$Type} from "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$RecordLoadable, $RecordLoadable$Type} from "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"

export class $DefaultingLoaderRegistry<T extends $GenericLoaderRegistry$IHaveLoader> extends $GenericLoaderRegistry<(T)> {

constructor(arg0: string, arg1: T, arg2: T, arg3: boolean)
constructor(arg0: string, arg1: T, arg2: boolean)

public "convert"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): T
public "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
public "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "getDefault"(): T
public "getOrDefault"(arg0: $JsonObject$Type, arg1: string): T
public "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
public "serialize"(arg0: T, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
public "defaultField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public "defaultField"<P>(arg0: string, arg1: boolean, arg2: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public static "create"<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function7$Type<(A), (B), (C), (D), (E), (F), (G), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function6$Type<(A), (B), (C), (D), (E), (F), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function5$Type<(A), (B), (C), (D), (E), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function4$Type<(A), (B), (C), (D), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function3$Type<(A), (B), (C), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), (H), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $RecordField$Type<(P), (any)>, arg16: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (P), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (R)>): $RecordLoadable<(R)>
public static "create"<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $Function$Type<(A), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $BiFunction$Type<(A), (B), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function6$Type<(A), (B), (C), (D), (E), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function5$Type<(A), (B), (C), (D), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function4$Type<(A), (B), (C), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $Function3$Type<(A), (B), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $BiFunction$Type<(A), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<R>(arg0: $Function$Type<($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function7$Type<(A), (B), (C), (D), (E), (F), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
get "default"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultingLoaderRegistry$Type<T> = ($DefaultingLoaderRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultingLoaderRegistry_<T> = $DefaultingLoaderRegistry$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/data/loadable/primitive/$StringLoadable" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Loadable, $Loadable$Type} from "packages/slimeknights/mantle/data/loadable/$Loadable"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ArrayLoadable, $ArrayLoadable$Type} from "packages/slimeknights/mantle/data/loadable/array/$ArrayLoadable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StringLoadable<T> extends $Loadable<(T)> {

 "parseString"(arg0: string, arg1: string): T
 "parseString"(arg0: string, arg1: string, arg2: $TypedMap$Type): T
 "getString"(arg0: T): string
 "convert"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): T
 "validate"(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (T)>): $StringLoadable<(T)>
 "serialize"(arg0: T): $JsonElement
 "mapWithValues"<V>(arg0: $Loadable$Type<(V)>, arg1: integer): $Loadable<($Map<(T), (V)>)>
 "mapWithValues"<V>(arg0: $Loadable$Type<(V)>): $Loadable<($Map<(T), (V)>)>
 "flatComap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (T)>): $StringLoadable<(M)>
 "flatXmap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $Function$Type<(M), (T)>): $StringLoadable<(M)>
 "convert"(arg0: $JsonElement$Type, arg1: string): T
 "list"(arg0: integer): $Loadable<($List<(T)>)>
 "list"(): $Loadable<($List<(T)>)>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer): $ArrayLoadable<((T)[])>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer, arg3: integer): $ArrayLoadable<((T)[])>
 "set"(): $Loadable<($Set<(T)>)>
 "set"(arg0: integer): $Loadable<($Set<(T)>)>
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T, arg3: $TypedMap$Type): T
 "serialize"(arg0: T, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
 "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string): T
 "requiredField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "nullableField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: boolean, arg3: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "tryDirectField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>, ...arg2: (string)[]): $LoadableField<(T), (P)>
 "mapWithKeys"<K>(arg0: integer, arg1: $Function$Type<(T), (K)>): $Loadable<($Map<(K), (T)>)>
 "mapWithValues"<V>(arg0: integer, arg1: $Function$Type<(T), (V)>): $Loadable<($Map<(T), (V)>)>
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $StringLoadable {
const DEFAULT: $StringLoadable<(string)>
function maxLength(arg0: integer): $StringLoadable<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringLoadable$Type<T> = ($StringLoadable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringLoadable_<T> = $StringLoadable$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$TypeAwareRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $TypeAwareRecipeSerializer<T extends $Recipe<(any)>> extends $RecipeSerializer<(T)> {

 "getType"(): $RecipeType<(any)>
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
 "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}

export namespace $TypeAwareRecipeSerializer {
function register<S, T>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAwareRecipeSerializer$Type<T> = ($TypeAwareRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAwareRecipeSerializer_<T> = $TypeAwareRecipeSerializer$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/fluid/$UnplaceableFluid" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FluidBuilder, $FluidBuilder$Type} from "packages/slimeknights/mantle/registration/$FluidBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $UnplaceableFluid extends $Fluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: float, arg3: integer)
constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>)
constructor(arg0: $FluidBuilder$Type<(any)>)

public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getExplosionResistance"(): float
public "getHeight"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getOwnHeight"(arg0: $FluidState$Type): float
public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public "getShape"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnplaceableFluid$Type = ($UnplaceableFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnplaceableFluid_ = $UnplaceableFluid$Type;
}}
declare module "packages/slimeknights/mantle/registration/deferred/$DeferredRegisterWrapper" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"

export class $DeferredRegisterWrapper<T> {


public "register"(arg0: $IEventBus$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegisterWrapper$Type<T> = ($DeferredRegisterWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegisterWrapper_<T> = $DeferredRegisterWrapper$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$WoodBlockObject" {
import {$FenceBuildingBlockObject, $FenceBuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$FenceBuildingBlockObject"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$CeilingHangingSignBlock, $CeilingHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$CeilingHangingSignBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallHangingSignBlock, $WallHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallHangingSignBlock"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$BuildingBlockObject, $BuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$BuildingBlockObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"

export class $WoodBlockObject extends $FenceBuildingBlockObject {

constructor(arg0: $ResourceLocation$Type, arg1: $WoodType$Type, arg2: $BuildingBlockObject$Type, arg3: $Supplier$Type<(any)>, arg4: $Supplier$Type<(any)>, arg5: $Supplier$Type<(any)>, arg6: $Supplier$Type<(any)>, arg7: $Supplier$Type<(any)>, arg8: $Supplier$Type<(any)>, arg9: $Supplier$Type<(any)>, arg10: $Supplier$Type<(any)>, arg11: $Supplier$Type<(any)>, arg12: $Supplier$Type<(any)>, arg13: $Supplier$Type<(any)>, arg14: $Supplier$Type<(any)>, arg15: $Supplier$Type<(any)>, arg16: $Supplier$Type<(any)>)
constructor(arg0: $ResourceLocation$Type, arg1: $WoodType$Type, arg2: $BuildingBlockObject$Type, arg3: $Block$Type, arg4: $Block$Type, arg5: $Block$Type, arg6: $Block$Type, arg7: $Block$Type, arg8: $Block$Type, arg9: $Block$Type, arg10: $Block$Type, arg11: $Block$Type, arg12: $Block$Type, arg13: $Block$Type, arg14: $Block$Type, arg15: $Block$Type, arg16: $Block$Type)

public "values"(): $List<($Block)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getStrippedLog"(): $Block
public "getStrippedWood"(): $Block
public "getPressurePlate"(): $PressurePlateBlock
public "getWallSign"(): $WallSignBlock
public "getHangingSign"(): $CeilingHangingSignBlock
public "getWallHangingSign"(): $WallHangingSignBlock
public "getLogBlockTag"(): $TagKey<($Block)>
public "getLogItemTag"(): $TagKey<($Item)>
public "getTrapdoor"(): $TrapDoorBlock
public "getWoodType"(): $WoodType
public "getFenceGate"(): $FenceGateBlock
public "getButton"(): $ButtonBlock
public "getDoor"(): $DoorBlock
public "getWood"(): $Block
public "getSign"(): $StandingSignBlock
public "getLog"(): $Block
get "strippedLog"(): $Block
get "strippedWood"(): $Block
get "pressurePlate"(): $PressurePlateBlock
get "wallSign"(): $WallSignBlock
get "hangingSign"(): $CeilingHangingSignBlock
get "wallHangingSign"(): $WallHangingSignBlock
get "logBlockTag"(): $TagKey<($Block)>
get "logItemTag"(): $TagKey<($Item)>
get "trapdoor"(): $TrapDoorBlock
get "woodType"(): $WoodType
get "fenceGate"(): $FenceGateBlock
get "button"(): $ButtonBlock
get "door"(): $DoorBlock
get "wood"(): $Block
get "sign"(): $StandingSignBlock
get "log"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBlockObject$Type = ($WoodBlockObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodBlockObject_ = $WoodBlockObject$Type;
}}
declare module "packages/slimeknights/mantle/registration/object/$FenceBuildingBlockObject" {
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BuildingBlockObject, $BuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$BuildingBlockObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FenceBuildingBlockObject extends $BuildingBlockObject {

constructor(arg0: $BuildingBlockObject$Type, arg1: $Supplier$Type<(any)>)
constructor(arg0: $BuildingBlockObject$Type, arg1: $Block$Type)

public "getFence"(): $FenceBlock
public "values"(): $List<($Block)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
get "fence"(): $FenceBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBuildingBlockObject$Type = ($FenceBuildingBlockObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBuildingBlockObject_ = $FenceBuildingBlockObject$Type;
}}
declare module "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceOrTagKeyArgument$Info$Template, $ResourceOrTagKeyArgument$Info$Template$Type} from "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Info$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$ResourceOrTagKeyArgument, $ResourceOrTagKeyArgument$Type} from "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument"

export class $ResourceOrTagKeyArgument$Info<T> implements $ArgumentTypeInfo<($ResourceOrTagKeyArgument<(T)>), ($ResourceOrTagKeyArgument$Info$Template<>)> {

constructor()

public "unpack"(arg0: $ResourceOrTagKeyArgument$Type<(T)>): $ResourceOrTagKeyArgument$Info$Template<>
public "serializeToNetwork"(arg0: $ResourceOrTagKeyArgument$Info$Template$Type<>, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $ResourceOrTagKeyArgument$Info$Template<>
public "serializeToJson"(arg0: $ResourceOrTagKeyArgument$Info$Template$Type<>, arg1: $JsonObject$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Info$Type<T> = ($ResourceOrTagKeyArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceOrTagKeyArgument$Info_<T> = $ResourceOrTagKeyArgument$Info$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/data/loadable/field/$ContextKey" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$TypedMap$Key, $TypedMap$Key$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap$Key"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $ContextKey<T> implements $TypedMap$Key<(T)> {
static readonly "ID": $ContextKey<($ResourceLocation)>
static readonly "DEBUG": $ContextKey<(string)>
static readonly "CONDITION_CONTEXT": $ContextKey<($ICondition$IContext)>

constructor(arg0: string)

public "getName"(): string
public "toString"(): string
public "mappedField"<M>(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (M)>): $RecordField<(M), (any)>
public "requiredField"(): $RecordField<(T), (any)>
public "nullableField"(): $RecordField<(T), (any)>
public "defaultField"(arg0: T): $RecordField<(T), (any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextKey$Type<T> = ($ContextKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextKey_<T> = $ContextKey$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$LoadableRecipeSerializer$Deprecated" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TypeAwareRecipeSerializer, $TypeAwareRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$TypeAwareRecipeSerializer"
import {$LoadableRecipeSerializer, $LoadableRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$LoadableRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ContextKey, $ContextKey$Type} from "packages/slimeknights/mantle/data/loadable/field/$ContextKey"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $LoadableRecipeSerializer$Deprecated<T extends $Recipe<(any)>> extends $LoadableRecipeSerializer<(T)> {
static readonly "SERIALIZER": $ContextKey<($RecipeSerializer<(any)>)>
static readonly "TYPED_SERIALIZER": $ContextKey<($TypeAwareRecipeSerializer<(any)>)>
static readonly "TYPE": $ContextKey<($RecipeType<(any)>)>
static readonly "RECIPE_GROUP": $LoadableField<(string), ($Recipe<(any)>)>


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadableRecipeSerializer$Deprecated$Type<T> = ($LoadableRecipeSerializer$Deprecated<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadableRecipeSerializer$Deprecated_<T> = $LoadableRecipeSerializer$Deprecated$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/registration/$FluidBuilder" {
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FluidBuilder<T extends $FluidBuilder<(T)>> {


public "bucket"(arg0: $Supplier$Type<(any)>): T
public "getBlock"(): $Supplier<(any)>
public "build"(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "getType"(): $Supplier<(any)>
public static "create"(arg0: $Supplier$Type<(any)>): $FluidBuilder<(any)>
public "block"(arg0: $Supplier$Type<(any)>): T
public "getLevelDecreasePerBlock"(): integer
public "getTickRate"(): integer
public "getSlopeFindDistance"(): integer
public "explosionResistance"(arg0: integer): T
public "getExplosionResistance"(): float
public "slopeFindDistance"(arg0: integer): T
public "levelDecreasePerBlock"(arg0: integer): T
public "getBucket"(): $Supplier<(any)>
public "tickRate"(arg0: integer): T
get "type"(): $Supplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$Type<T> = ($FluidBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBuilder_<T> = $FluidBuilder$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/item/$ILecternBookItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ILecternBookItem {

 "openLecternScreenClient"(arg0: $BlockPos$Type, arg1: $ItemStack$Type): void
 "openLecternScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean

(arg0: $BlockPos$Type, arg1: $ItemStack$Type): void
}

export namespace $ILecternBookItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILecternBookItem$Type = ($ILecternBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILecternBookItem_ = $ILecternBookItem$Type;
}}
declare module "packages/slimeknights/mantle/client/book/$BookScreenOpener" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BookScreenOpener {

 "openGui"(arg0: $InteractionHand$Type, arg1: $ItemStack$Type): void
 "openGui"(arg0: integer, arg1: $ItemStack$Type): void
 "openGui"(arg0: $BlockPos$Type, arg1: $ItemStack$Type): void
}

export namespace $BookScreenOpener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookScreenOpener$Type = ($BookScreenOpener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookScreenOpener_ = $BookScreenOpener$Type;
}}
declare module "packages/slimeknights/mantle/recipe/crafting/$ShapedFallbackRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedFallbackRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type, arg7: $List$Type<($ResourceLocation$Type)>)
constructor(arg0: $ShapedRecipe$Type, arg1: $List$Type<($ResourceLocation$Type)>)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFallbackRecipe$Type = ($ShapedFallbackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFallbackRecipe_ = $ShapedFallbackRecipe$Type;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$FluidOutput" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $FluidOutput implements $Supplier<($FluidStack)> {
static readonly "EMPTY": $FluidOutput

constructor()

public "getTag"(): $TagKey<($Fluid)>
public "get"(): $FluidStack
public "isEmpty"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $FluidOutput
public "copy"(): $FluidStack
public "serialize"(arg0: $JsonObject$Type): void
/**
 * 
 * @deprecated
 */
public "serialize"(): $JsonObject
public "getAmount"(): integer
public static "fromTag"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer, arg2: $CompoundTag$Type): $FluidOutput
public static "fromTag"(arg0: $TagKey$Type<($Fluid$Type)>, arg1: integer): $FluidOutput
public static "fromStack"(arg0: $FluidStack$Type): $FluidOutput
public static "fromFluid"(arg0: $Fluid$Type, arg1: integer): $FluidOutput
get "tag"(): $TagKey<($Fluid)>
get "empty"(): boolean
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidOutput$Type = ($FluidOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidOutput_ = $FluidOutput$Type;
}}
declare module "packages/slimeknights/mantle/registration/object/$WallBuildingBlockObject" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BuildingBlockObject, $BuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$BuildingBlockObject"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"

export class $WallBuildingBlockObject extends $BuildingBlockObject {

constructor(arg0: $BuildingBlockObject$Type, arg1: $Supplier$Type<(any)>)
constructor(arg0: $BuildingBlockObject$Type, arg1: $Block$Type)

public "values"(): $List<($Block)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getWall"(): $WallBlock
get "wall"(): $WallBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBuildingBlockObject$Type = ($WallBuildingBlockObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBuildingBlockObject_ = $WallBuildingBlockObject$Type;
}}
declare module "packages/slimeknights/mantle/fluid/$InvertedFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $InvertedFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "getFlow"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedFluid$Type = ($InvertedFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvertedFluid_ = $InvertedFluid$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/array/$ArrayLoadable" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Loadable, $Loadable$Type} from "packages/slimeknights/mantle/data/loadable/$Loadable"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ArrayLoadable<A> extends $Loadable<(A)> {

 "getLength"(arg0: A): integer
 "convert"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): A
 "checkSize"(arg0: string, arg1: integer, arg2: $ErrorFactory$Type): void
 "serializeAll"(arg0: $JsonArray$Type, arg1: A): void
 "allowCompact"(): boolean
 "convertCompact"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): A
 "serializeFirst"(arg0: A): $JsonElement
 "serialize"(arg0: A): $JsonElement
 "convertArray"(arg0: $JsonArray$Type, arg1: string, arg2: $TypedMap$Type): A
 "emptyField"<P>(arg0: string, arg1: boolean, arg2: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "emptyField"<P>(arg0: string, arg1: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "convert"(arg0: $JsonElement$Type, arg1: string): A
 "list"(arg0: integer): $Loadable<($List<(A)>)>
 "list"(): $Loadable<($List<(A)>)>
 "validate"(arg0: $BiFunction$Type<(A), ($ErrorFactory$Type), (A)>): $Loadable<(A)>
 "array"(arg0: $IntFunction$Type<((A)[])>, arg1: boolean, arg2: integer): $ArrayLoadable<((A)[])>
 "array"(arg0: $IntFunction$Type<((A)[])>, arg1: boolean, arg2: integer, arg3: integer): $ArrayLoadable<((A)[])>
 "set"(): $Loadable<($Set<(A)>)>
 "set"(arg0: integer): $Loadable<($Set<(A)>)>
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: A): A
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: A, arg3: $TypedMap$Type): A
 "serialize"(arg0: A, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
 "comapFlatMap"<M>(arg0: $BiFunction$Type<(A), ($ErrorFactory$Type), (M)>, arg1: $Function$Type<(M), (A)>): $Loadable<(M)>
 "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): A
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): A
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string): A
 "requiredField"<P>(arg0: string, arg1: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "nullableField"<P>(arg0: string, arg1: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "defaultField"<P>(arg0: string, arg1: A, arg2: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "defaultField"<P>(arg0: string, arg1: A, arg2: boolean, arg3: $Function$Type<(P), (A)>): $LoadableField<(A), (P)>
 "tryDirectField"<P>(arg0: string, arg1: $Function$Type<(P), (A)>, ...arg2: (string)[]): $LoadableField<(A), (P)>
 "mapWithKeys"<K>(arg0: integer, arg1: $Function$Type<(A), (K)>): $Loadable<($Map<(K), (A)>)>
 "mapWithValues"<V>(arg0: integer, arg1: $Function$Type<(A), (V)>): $Loadable<($Map<(A), (V)>)>
 "xmap"<M>(arg0: $BiFunction$Type<(A), ($ErrorFactory$Type), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (A)>): $Loadable<(M)>
 "flatComap"<M>(arg0: $Function$Type<(A), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (A)>): $Loadable<(M)>
 "flatXmap"<M>(arg0: $Function$Type<(A), (M)>, arg1: $Function$Type<(M), (A)>): $Loadable<(M)>
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): A
 "decode"(arg0: $FriendlyByteBuf$Type): A
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: A): void
}

export namespace $ArrayLoadable {
const COMPACT_OR_EMPTY: integer
const COMPACT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayLoadable$Type<A> = ($ArrayLoadable<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayLoadable_<A> = $ArrayLoadable$Type<(A)>;
}}
declare module "packages/slimeknights/mantle/fluid/$InvertedFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InvertedFluid, $InvertedFluid$Type} from "packages/slimeknights/mantle/fluid/$InvertedFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $InvertedFluid$Flowing extends $InvertedFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedFluid$Flowing$Type = ($InvertedFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvertedFluid$Flowing_ = $InvertedFluid$Flowing$Type;
}}
declare module "packages/slimeknights/mantle/item/$BlockTooltipItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTooltipItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTooltipItem$Type = ($BlockTooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTooltipItem_ = $BlockTooltipItem$Type;
}}
declare module "packages/slimeknights/mantle/block/$InventoryBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $InventoryBlock extends $Block implements $EntityBlock {
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


public static "dropInventoryItems"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $IItemHandler$Type): void
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
/**
 * 
 * @deprecated
 */
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryBlock$Type = ($InventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryBlock_ = $InventoryBlock$Type;
}}
declare module "packages/slimeknights/mantle/registration/object/$MetalItemObject" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultiObject, $MultiObject$Type} from "packages/slimeknights/mantle/registration/object/$MultiObject"
import {$ItemObject, $ItemObject$Type} from "packages/slimeknights/mantle/registration/object/$ItemObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MetalItemObject extends $ItemObject<($Block)> implements $MultiObject<($ItemLike)> {

constructor(arg0: string, arg1: $ItemObject$Type<(any)>, arg2: $Supplier$Type<(any)>, arg3: $Supplier$Type<(any)>)

public "values"(): $List<($ItemLike)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getBlockTag"(): $TagKey<($Block)>
public "getBlockItemTag"(): $TagKey<($Item)>
public "getIngotTag"(): $TagKey<($Item)>
public "getNuggetTag"(): $TagKey<($Item)>
public "getNugget"(): $Item
public "getIngot"(): $Item
get "blockTag"(): $TagKey<($Block)>
get "blockItemTag"(): $TagKey<($Item)>
get "ingotTag"(): $TagKey<($Item)>
get "nuggetTag"(): $TagKey<($Item)>
get "nugget"(): $Item
get "ingot"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalItemObject$Type = ($MetalItemObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetalItemObject_ = $MetalItemObject$Type;
}}
declare module "packages/slimeknights/mantle/fluid/$InvertedFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InvertedFluid, $InvertedFluid$Type} from "packages/slimeknights/mantle/fluid/$InvertedFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $InvertedFluid$Source extends $InvertedFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedFluid$Source$Type = ($InvertedFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvertedFluid$Source_ = $InvertedFluid$Source$Type;
}}
declare module "packages/slimeknights/mantle/recipe/container/$ISingleStackContainer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IRecipeContainer, $IRecipeContainer$Type} from "packages/slimeknights/mantle/recipe/container/$IRecipeContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ISingleStackContainer extends $IRecipeContainer {

 "getStack"(): $ItemStack
/**
 * 
 * @deprecated
 */
 "getContainerSize"(): integer
/**
 * 
 * @deprecated
 */
 "getItem"(arg0: integer): $ItemStack
 "countItem"(arg0: $Item$Type): integer
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
 "removeItemNoUpdate"(arg0: integer): $ItemStack
/**
 * 
 * @deprecated
 */
 "setChanged"(): void
/**
 * 
 * @deprecated
 */
 "stillValid"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
/**
 * 
 * @deprecated
 */
 "clearContent"(): void
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stopOpen"(arg0: $Player$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "clear"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer

(): $ItemStack
}

export namespace $ISingleStackContainer {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISingleStackContainer$Type = ($ISingleStackContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISingleStackContainer_ = $ISingleStackContainer$Type;
}}
declare module "packages/slimeknights/mantle/block/$StrippableLogBlock" {
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
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StrippableLogBlock extends $RotatedPillarBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrippableLogBlock$Type = ($StrippableLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrippableLogBlock_ = $StrippableLogBlock$Type;
}}
declare module "packages/slimeknights/mantle/util/typed/$TypedMap" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TypedMap$Key, $TypedMap$Key$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap$Key"

export interface $TypedMap {

 "get"<K>(arg0: $TypedMap$Key$Type<(K)>): K
 "isEmpty"(): boolean
 "size"(): integer
 "containsKey"(arg0: $TypedMap$Key$Type<(any)>): boolean
 "keySet"(): $Set<($TypedMap$Key<(any)>)>
 "getOrDefault"<R, K extends R>(arg0: $TypedMap$Key$Type<(K)>, arg1: R): R
}

export namespace $TypedMap {
const EMPTY: $TypedMap
function empty(): $TypedMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedMap$Type = ($TypedMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedMap_ = $TypedMap$Type;
}}
declare module "packages/slimeknights/mantle/item/$LecternBookItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ILecternBookItem, $ILecternBookItem$Type} from "packages/slimeknights/mantle/item/$ILecternBookItem"
import {$TooltipItem, $TooltipItem$Type} from "packages/slimeknights/mantle/item/$TooltipItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LecternBookItem extends $TooltipItem implements $ILecternBookItem {
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

public static "interactWithBlock"(arg0: $PlayerInteractEvent$RightClickBlock$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "openLecternScreenClient"(arg0: $BlockPos$Type, arg1: $ItemStack$Type): void
public "openLecternScreen"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternBookItem$Type = ($LecternBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LecternBookItem_ = $LecternBookItem$Type;
}}
declare module "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$StringReader, $StringReader$Type} from "packages/com/mojang/brigadier/$StringReader"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceOrTagKeyArgument$Result, $ResourceOrTagKeyArgument$Result$Type} from "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Result"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ResourceOrTagKeyArgument<T> extends $Record implements $ArgumentType<($ResourceOrTagKeyArgument$Result)> {

constructor(registry: $ResourceKey$Type<(any)>)

public "parse"(arg0: $StringReader$Type): $ResourceOrTagKeyArgument$Result
public static "get"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $ResourceOrTagKeyArgument$Result
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "key"(): $ResourceOrTagKeyArgument<(any)>
public "registry"(): $ResourceKey<(any)>
public static "registry"<T>(arg0: $ResourceKey$Type<(any)>): $ResourceOrTagKeyArgument<(T)>
public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Type<T> = ($ResourceOrTagKeyArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceOrTagKeyArgument_<T> = $ResourceOrTagKeyArgument$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/block/fluid/$BurningLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BurningLiquidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type, arg2: integer, arg3: float)

public static "createBurning"(arg0: $MapColor$Type, arg1: integer, arg2: integer, arg3: float): $Function<($Supplier<(any)>), ($LiquidBlock)>
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningLiquidBlock$Type = ($BurningLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BurningLiquidBlock_ = $BurningLiquidBlock$Type;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$ItemOutput" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ItemOutput implements $Supplier<($ItemStack)> {
static "REQUIRED_STACK_CODEC": $Codec<($ItemOutput)>
static readonly "EMPTY": $ItemOutput

constructor()

public "getCount"(): integer
public "getTag"(): $TagKey<($Item)>
public "get"(): $ItemStack
public "isEmpty"(): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ItemOutput
public "copy"(): $ItemStack
public "serialize"(arg0: boolean): $JsonElement
public static "fromTag"(arg0: $TagKey$Type<($Item$Type)>): $ItemOutput
public static "fromTag"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer): $ItemOutput
public static "fromTag"(arg0: $TagKey$Type<($Item$Type)>, arg1: integer, arg2: $CompoundTag$Type): $ItemOutput
public static "fromItem"(arg0: $ItemLike$Type, arg1: integer): $ItemOutput
public static "fromItem"(arg0: $ItemLike$Type): $ItemOutput
public static "fromStack"(arg0: $ItemStack$Type): $ItemOutput
get "count"(): integer
get "tag"(): $TagKey<($Item)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOutput$Type = ($ItemOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemOutput_ = $ItemOutput$Type;
}}
declare module "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Result" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TagEntry, $TagEntry$Type} from "packages/net/minecraft/tags/$TagEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $ResourceOrTagKeyArgument$Result extends $Record {

constructor(location: $ResourceLocation$Type, isTag: boolean)

public "tag"<T>(arg0: $ResourceKey$Type<(any)>): $TagKey<(T)>
public "resource"<T>(arg0: $ResourceKey$Type<(any)>): $TagKey<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "tagEntry"(): $TagEntry
public "isTag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Result$Type = ($ResourceOrTagKeyArgument$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceOrTagKeyArgument$Result_ = $ResourceOrTagKeyArgument$Result$Type;
}}
declare module "packages/slimeknights/mantle/recipe/crafting/$ShapedFallbackRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ShapedFallbackRecipe, $ShapedFallbackRecipe$Type} from "packages/slimeknights/mantle/recipe/crafting/$ShapedFallbackRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $ShapedFallbackRecipe$Serializer extends $ShapedRecipe$Serializer {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedFallbackRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedFallbackRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFallbackRecipe$Serializer$Type = ($ShapedFallbackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedFallbackRecipe$Serializer_ = $ShapedFallbackRecipe$Serializer$Type;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$LoggingRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $LoggingRecipeSerializer<T extends $Recipe<(any)>> extends $RecipeSerializer<(T)> {

 "fromNetworkSafe"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "toNetworkSafe"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
 "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}

export namespace $LoggingRecipeSerializer {
function register<S, T>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggingRecipeSerializer$Type<T> = ($LoggingRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoggingRecipeSerializer_<T> = $LoggingRecipeSerializer$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/recipe/container/$IRecipeContainer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $IRecipeContainer extends $Container {

/**
 * 
 * @deprecated
 */
 "removeItemNoUpdate"(arg0: integer): $ItemStack
/**
 * 
 * @deprecated
 */
 "setChanged"(): void
/**
 * 
 * @deprecated
 */
 "stillValid"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
/**
 * 
 * @deprecated
 */
 "clearContent"(): void
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stopOpen"(arg0: $Player$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "countItem"(arg0: $Item$Type): integer
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
}

export namespace $IRecipeContainer {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeContainer$Type = ($IRecipeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeContainer_ = $IRecipeContainer$Type;
}}
declare module "packages/slimeknights/mantle/block/$MantleStandingSignBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
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
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MantleStandingSignBlock extends $StandingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MantleStandingSignBlock$Type = ($MantleStandingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MantleStandingSignBlock_ = $MantleStandingSignBlock$Type;
}}
declare module "packages/slimeknights/mantle/recipe/crafting/$ShapedRetexturedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ShapedRetexturedRecipe, $ShapedRetexturedRecipe$Type} from "packages/slimeknights/mantle/recipe/crafting/$ShapedRetexturedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LoggingRecipeSerializer, $LoggingRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$LoggingRecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedRetexturedRecipe$Serializer implements $LoggingRecipeSerializer<($ShapedRetexturedRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ShapedRetexturedRecipe
public "toNetworkSafe"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRetexturedRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ShapedRetexturedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRetexturedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ShapedRetexturedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRetexturedRecipe$Serializer$Type = ($ShapedRetexturedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRetexturedRecipe$Serializer_ = $ShapedRetexturedRecipe$Serializer$Type;
}}
declare module "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ResourceOrTagKeyArgument$Info, $ResourceOrTagKeyArgument$Info$Type} from "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument$Info"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"
import {$ResourceOrTagKeyArgument, $ResourceOrTagKeyArgument$Type} from "packages/slimeknights/mantle/command/argument/$ResourceOrTagKeyArgument"

export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template<($ResourceOrTagKeyArgument<(T)>)> {

constructor(arg0: $ResourceOrTagKeyArgument$Info$Type<(any)>, arg1: $ResourceKey$Type<(any)>)

public "instantiate"(arg0: $CommandBuildContext$Type): $ResourceOrTagKeyArgument<(T)>
public "type"(): $ArgumentTypeInfo<($ResourceOrTagKeyArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Info$Template$Type = ($ResourceOrTagKeyArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceOrTagKeyArgument$Info$Template_ = $ResourceOrTagKeyArgument$Info$Template$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/field/$RecordField" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"

export interface $RecordField<T, P> {

 "get"(arg0: $JsonObject$Type, arg1: $TypedMap$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: P): void
 "serialize"(arg0: P, arg1: $JsonObject$Type): void
}

export namespace $RecordField {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordField$Type<T, P> = ($RecordField<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordField_<T, P> = $RecordField$Type<(T), (P)>;
}}
declare module "packages/slimeknights/mantle/item/$EdibleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EdibleItem extends $Item {
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

constructor(arg0: $FoodProperties$Type)
constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdibleItem$Type = ($EdibleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EdibleItem_ = $EdibleItem$Type;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$LoadableRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TypeAwareRecipeSerializer, $TypeAwareRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$TypeAwareRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ContextKey, $ContextKey$Type} from "packages/slimeknights/mantle/data/loadable/field/$ContextKey"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LoggingRecipeSerializer, $LoggingRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$LoggingRecipeSerializer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RecordLoadable, $RecordLoadable$Type} from "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable"

export class $LoadableRecipeSerializer<T extends $Recipe<(any)>> implements $LoggingRecipeSerializer<(T)> {
static readonly "SERIALIZER": $ContextKey<($RecipeSerializer<(any)>)>
static readonly "TYPED_SERIALIZER": $ContextKey<($TypeAwareRecipeSerializer<(any)>)>
static readonly "TYPE": $ContextKey<($RecipeType<(any)>)>
static readonly "RECIPE_GROUP": $LoadableField<(string), ($Recipe<(any)>)>


public static "of"<T extends $Recipe<(any)>>(arg0: $RecordLoadable$Type<(T)>): $RecipeSerializer<(T)>
public static "of"<T extends R, R extends $Recipe<(any)>>(arg0: $RecordLoadable$Type<(T)>, arg1: $Supplier$Type<(any)>): $TypeAwareRecipeSerializer<(T)>
public "fromNetworkSafe"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetworkSafe"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "deprecated"<T extends $Recipe<(any)>>(arg0: $RecordLoadable$Type<(T)>, arg1: string): $RecipeSerializer<(T)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadableRecipeSerializer$Type<T> = ($LoadableRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadableRecipeSerializer_<T> = $LoadableRecipeSerializer$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$GenericLoaderRegistry$IHaveLoader, $GenericLoaderRegistry$IHaveLoader$Type} from "packages/slimeknights/mantle/data/registry/$GenericLoaderRegistry$IHaveLoader"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$Loadable, $Loadable$Type} from "packages/slimeknights/mantle/data/loadable/$Loadable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ArrayLoadable, $ArrayLoadable$Type} from "packages/slimeknights/mantle/data/loadable/array/$ArrayLoadable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$RecordLoadable, $RecordLoadable$Type} from "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenericLoaderRegistry<T extends $GenericLoaderRegistry$IHaveLoader> implements $RecordLoadable<(T)> {

constructor(arg0: string, arg1: T, arg2: boolean)
constructor(arg0: string, arg1: boolean)

public "getName"(): string
public "getName"(arg0: $RecordLoadable$Type<(any)>): $ResourceLocation
public "toString"(): string
public "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
public "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "register"(arg0: $ResourceLocation$Type, arg1: $RecordLoadable$Type<(any)>): void
public "directField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $RecordField<(T), (P)>
public "getConditionalLoader"(): $RecordLoadable<(T)>
public "serialize"(arg0: T): $JsonElement
public "serialize"(arg0: T, arg1: $JsonObject$Type): void
public "deserialize"(arg0: $JsonObject$Type, arg1: $TypedMap$Type): T
public "compact"(arg0: $Loadable$Type<(T)>, arg1: $Predicate$Type<(T)>): $RecordLoadable<(T)>
public "validate"(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (T)>): $RecordLoadable<(T)>
public static "create"<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function7$Type<(A), (B), (C), (D), (E), (F), (G), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function6$Type<(A), (B), (C), (D), (E), (F), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function5$Type<(A), (B), (C), (D), (E), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function4$Type<(A), (B), (C), (D), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function3$Type<(A), (B), (C), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), (H), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $RecordField$Type<(P), (any)>, arg16: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (P), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (R)>): $RecordLoadable<(R)>
public static "create"<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $Function$Type<(A), (R)>): $RecordLoadable<(R)>
public static "create"<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $BiFunction$Type<(A), (B), (R)>): $RecordLoadable<(R)>
public "directField"<P>(arg0: $Function$Type<(P), (T)>): $RecordField<(T), (P)>
public "comapFlatMap"<M>(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (M)>, arg1: $Function$Type<(M), (T)>): $RecordLoadable<(M)>
public "deserialize"(arg0: $JsonObject$Type): T
public "flatComap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (T)>): $RecordLoadable<(M)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function6$Type<(A), (B), (C), (D), (E), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function5$Type<(A), (B), (C), (D), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function4$Type<(A), (B), (C), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $Function3$Type<(A), (B), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $BiFunction$Type<(A), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<R>(arg0: $Function$Type<($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public static "withLoader"<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function7$Type<(A), (B), (C), (D), (E), (F), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
public "convert"(arg0: $JsonElement$Type, arg1: string): T
public "list"(arg0: integer): $Loadable<($List<(T)>)>
public "list"(): $Loadable<($List<(T)>)>
public "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer): $ArrayLoadable<((T)[])>
public "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer, arg3: integer): $ArrayLoadable<((T)[])>
public "set"(): $Loadable<($Set<(T)>)>
public "set"(arg0: integer): $Loadable<($Set<(T)>)>
public "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
public "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T, arg3: $TypedMap$Type): T
public "serialize"(arg0: T, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
public "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): T
public "getIfPresent"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
public "getIfPresent"(arg0: $JsonObject$Type, arg1: string): T
public "requiredField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public "nullableField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public "defaultField"<P>(arg0: string, arg1: T, arg2: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public "defaultField"<P>(arg0: string, arg1: T, arg2: boolean, arg3: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
public "tryDirectField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>, ...arg2: (string)[]): $LoadableField<(T), (P)>
public "mapWithKeys"<K>(arg0: integer, arg1: $Function$Type<(T), (K)>): $Loadable<($Map<(K), (T)>)>
public "mapWithValues"<V>(arg0: integer, arg1: $Function$Type<(T), (V)>): $Loadable<($Map<(T), (V)>)>
public "decode"(arg0: $FriendlyByteBuf$Type): T
get "name"(): string
get "conditionalLoader"(): $RecordLoadable<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericLoaderRegistry$Type<T> = ($GenericLoaderRegistry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericLoaderRegistry_<T> = $GenericLoaderRegistry$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$LoadableRecipeSerializer$TypeAware" {
import {$TypeAwareRecipeSerializer, $TypeAwareRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$TypeAwareRecipeSerializer"
import {$LoadableRecipeSerializer, $LoadableRecipeSerializer$Type} from "packages/slimeknights/mantle/recipe/helper/$LoadableRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ContextKey, $ContextKey$Type} from "packages/slimeknights/mantle/data/loadable/field/$ContextKey"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $LoadableRecipeSerializer$TypeAware<T extends $Recipe<(any)>> extends $LoadableRecipeSerializer<(T)> implements $TypeAwareRecipeSerializer<(T)> {
static readonly "SERIALIZER": $ContextKey<($RecipeSerializer<(any)>)>
static readonly "TYPED_SERIALIZER": $ContextKey<($TypeAwareRecipeSerializer<(any)>)>
static readonly "TYPE": $ContextKey<($RecipeType<(any)>)>
static readonly "RECIPE_GROUP": $LoadableField<(string), ($Recipe<(any)>)>


public "getType"(): $RecipeType<(any)>
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
get "type"(): $RecipeType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadableRecipeSerializer$TypeAware$Type<T> = ($LoadableRecipeSerializer$TypeAware<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadableRecipeSerializer$TypeAware_<T> = $LoadableRecipeSerializer$TypeAware$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/block/$IMultipartConnectedBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * 
 * @deprecated
 */
export interface $IMultipartConnectedBlock {

 "getConnectionUpdate"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type): $BlockState
 "connects"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
}

export namespace $IMultipartConnectedBlock {
const CONNECTED_DIRECTIONS: $Map<($Direction), ($BooleanProperty)>
function defaultConnections(arg0: $BlockState$Type): $BlockState
function fillStateContainer(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultipartConnectedBlock$Type = ($IMultipartConnectedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultipartConnectedBlock_ = $IMultipartConnectedBlock$Type;
}}
declare module "packages/slimeknights/mantle/block/$MantleWallHangingSignBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$WoodType, $WoodType$Type} from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
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
import {$WallHangingSignBlock, $WallHangingSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallHangingSignBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MantleWallHangingSignBlock extends $WallHangingSignBlock {
static readonly "FACING": $DirectionProperty
static readonly "PLANK_NORTHSOUTH": $VoxelShape
static readonly "PLANK_EASTWEST": $VoxelShape
static readonly "SHAPE_NORTHSOUTH": $VoxelShape
static readonly "SHAPE_EASTWEST": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $WoodType$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MantleWallHangingSignBlock$Type = ($MantleWallHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MantleWallHangingSignBlock_ = $MantleWallHangingSignBlock$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/field/$LoadableField" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"

export interface $LoadableField<T, P> extends $RecordField<(T), (P)> {

 "get"(arg0: $JsonObject$Type, arg1: $TypedMap$Type): T
 "get"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
 "get"(arg0: $JsonObject$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type): T
 "key"(): string
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: P): void
 "serialize"(arg0: P, arg1: $JsonObject$Type): void
}

export namespace $LoadableField {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadableField$Type<T, P> = ($LoadableField<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadableField_<T, P> = $LoadableField$Type<(T), (P)>;
}}
declare module "packages/slimeknights/mantle/recipe/crafting/$ShapedRetexturedRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ShapedRetexturedRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean


public "getResultItem"(arg0: $Item$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getTexture"(): $Ingredient
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "texture"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRetexturedRecipe$Type = ($ShapedRetexturedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRetexturedRecipe_ = $ShapedRetexturedRecipe$Type;
}}
declare module "packages/slimeknights/mantle/recipe/helper/$SimpleRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SimpleRecipeSerializer<T extends $Recipe<(any)>> extends $Record implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "constructor"(): $Function<($ResourceLocation), (T)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRecipeSerializer$Type<T> = ($SimpleRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleRecipeSerializer_<T> = $SimpleRecipeSerializer$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$MultiObject" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $MultiObject<T> {

 "values"(): $List<(T)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $MultiObject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiObject$Type<T> = ($MultiObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiObject_<T> = $MultiObject$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/util/typed/$TypedMap$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypedMap$Key<K> {

}

export namespace $TypedMap$Key {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedMap$Key$Type<K> = ($TypedMap$Key<(K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedMap$Key_<K> = $TypedMap$Key$Type<(K)>;
}}
declare module "packages/slimeknights/mantle/registration/deferred/$BlockDeferredRegister" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$ItemObject, $ItemObject$Type} from "packages/slimeknights/mantle/registration/object/$ItemObject"
import {$EnumObject, $EnumObject$Type} from "packages/slimeknights/mantle/registration/object/$EnumObject"
import {$FenceBuildingBlockObject, $FenceBuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$FenceBuildingBlockObject"
import {$WoodBlockObject, $WoodBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$WoodBlockObject"
import {$MetalItemObject, $MetalItemObject$Type} from "packages/slimeknights/mantle/registration/object/$MetalItemObject"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$WallBuildingBlockObject, $WallBuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$WallBuildingBlockObject"
import {$DeferredRegisterWrapper, $DeferredRegisterWrapper$Type} from "packages/slimeknights/mantle/registration/deferred/$DeferredRegisterWrapper"
import {$BuildingBlockObject, $BuildingBlockObject$Type} from "packages/slimeknights/mantle/registration/object/$BuildingBlockObject"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FlowerPotBlock, $FlowerPotBlock$Type} from "packages/net/minecraft/world/level/block/$FlowerPotBlock"
import {$WoodBlockObject$WoodVariant, $WoodBlockObject$WoodVariant$Type} from "packages/slimeknights/mantle/registration/object/$WoodBlockObject$WoodVariant"

export class $BlockDeferredRegister extends $DeferredRegisterWrapper<($Block)> {

constructor(arg0: string)

public "register"(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Function$Type<(any), (any)>): $ItemObject<($Block)>
public "register"<B extends $Block>(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Function$Type<(any), (any)>): $ItemObject<(B)>
public "register"(arg0: $IEventBus$Type): void
public "registerEnum"<T extends $Enum<(T)>, B extends $Block>(arg0: (T)[], arg1: string, arg2: $Function$Type<(T), (any)>, arg3: $Function$Type<(any), (any)>): $EnumObject<(T), (B)>
public "registerEnum"<T extends $Enum<(T)>, B extends $Block>(arg0: string, arg1: (T)[], arg2: $Function$Type<(T), (any)>, arg3: $Function$Type<(any), (any)>): $EnumObject<(T), (B)>
public "registerNoItem"<B extends $Block>(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<(B)>
public "registerNoItem"(arg0: string, arg1: $BlockBehaviour$Properties$Type): $RegistryObject<($Block)>
public "registerBuilding"(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Function$Type<(any), (any)>): $BuildingBlockObject
public "registerBuilding"(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Function$Type<(any), (any)>): $BuildingBlockObject
public "registerWallBuilding"(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Function$Type<(any), (any)>): $WallBuildingBlockObject
public "registerWallBuilding"(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Function$Type<(any), (any)>): $WallBuildingBlockObject
public "registerFenceBuilding"(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Function$Type<(any), (any)>): $FenceBuildingBlockObject
public "registerFenceBuilding"(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Function$Type<(any), (any)>): $FenceBuildingBlockObject
public "registerWood"(arg0: string, arg1: $Function$Type<($WoodBlockObject$WoodVariant$Type), ($BlockBehaviour$Properties$Type)>, arg2: boolean): $WoodBlockObject
public "registerPotted"(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<($FlowerPotBlock)>
public "registerPotted"(arg0: $RegistryObject$Type<(any)>): $RegistryObject<($FlowerPotBlock)>
public "registerPotted"(arg0: $ItemObject$Type<(any)>): $RegistryObject<($FlowerPotBlock)>
public "registerEnumNoItem"<T extends $Enum<(T)>, B extends $Block>(arg0: (T)[], arg1: string, arg2: $Function$Type<(T), (any)>): $EnumObject<(T), (B)>
public "registerPottedEnum"<T extends ($Enum<(T)>) & ($StringRepresentable), B extends $Block>(arg0: string, arg1: $EnumObject$Type<(T), (B)>): $EnumObject<(T), ($FlowerPotBlock)>
public "registerPottedEnum"<T extends ($Enum<(T)>) & ($StringRepresentable), B extends $Block>(arg0: (T)[], arg1: string, arg2: $EnumObject$Type<(T), (B)>): $EnumObject<(T), ($FlowerPotBlock)>
public "registerMetal"(arg0: string, arg1: string, arg2: $Supplier$Type<($Block$Type)>, arg3: $Function$Type<($Block$Type), (any)>, arg4: $Item$Properties$Type): $MetalItemObject
public "registerMetal"(arg0: string, arg1: $Supplier$Type<($Block$Type)>, arg2: $Function$Type<($Block$Type), (any)>, arg3: $Item$Properties$Type): $MetalItemObject
public "registerMetal"(arg0: string, arg1: $BlockBehaviour$Properties$Type, arg2: $Function$Type<($Block$Type), (any)>, arg3: $Item$Properties$Type): $MetalItemObject
public "registerMetal"(arg0: string, arg1: string, arg2: $BlockBehaviour$Properties$Type, arg3: $Function$Type<($Block$Type), (any)>, arg4: $Item$Properties$Type): $MetalItemObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDeferredRegister$Type = ($BlockDeferredRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDeferredRegister_ = $BlockDeferredRegister$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/$Loadable" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/google/gson/$JsonSerializer"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Streamable, $Streamable$Type} from "packages/slimeknights/mantle/data/loadable/$Streamable"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ArrayLoadable, $ArrayLoadable$Type} from "packages/slimeknights/mantle/data/loadable/array/$ArrayLoadable"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/google/gson/$JsonDeserializer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Loadable<T> extends $JsonDeserializer<(T)>, $JsonSerializer<(T)>, $Streamable<(T)> {

 "convert"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): T
 "convert"(arg0: $JsonElement$Type, arg1: string): T
 "list"(arg0: integer): $Loadable<($List<(T)>)>
 "list"(): $Loadable<($List<(T)>)>
 "validate"(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (T)>): $Loadable<(T)>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer): $ArrayLoadable<((T)[])>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer, arg3: integer): $ArrayLoadable<((T)[])>
 "set"(): $Loadable<($Set<(T)>)>
 "set"(arg0: integer): $Loadable<($Set<(T)>)>
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T, arg3: $TypedMap$Type): T
 "serialize"(arg0: T, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
 "serialize"(arg0: T): $JsonElement
 "comapFlatMap"<M>(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (M)>, arg1: $Function$Type<(M), (T)>): $Loadable<(M)>
 "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string): T
 "requiredField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "nullableField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: boolean, arg3: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "tryDirectField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>, ...arg2: (string)[]): $LoadableField<(T), (P)>
 "mapWithKeys"<K>(arg0: integer, arg1: $Function$Type<(T), (K)>): $Loadable<($Map<(K), (T)>)>
 "mapWithValues"<V>(arg0: integer, arg1: $Function$Type<(T), (V)>): $Loadable<($Map<(T), (V)>)>
 "xmap"<M>(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (T)>): $Loadable<(M)>
 "flatComap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (T)>): $Loadable<(M)>
 "flatXmap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $Function$Type<(M), (T)>): $Loadable<(M)>
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $Loadable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Loadable$Type<T> = ($Loadable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Loadable_<T> = $Loadable$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$ItemObject" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DefaultedRegistry, $DefaultedRegistry$Type} from "packages/net/minecraft/core/$DefaultedRegistry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$IdAwareObject, $IdAwareObject$Type} from "packages/slimeknights/mantle/registration/object/$IdAwareObject"

export class $ItemObject<I extends $ItemLike> implements $Supplier<(I)>, $ItemLike, $IdAwareObject {

constructor(arg0: $Supplier$Type<(any)>, arg1: $ResourceLocation$Type)
constructor(arg0: $RegistryObject$Type<(any)>)
constructor(arg0: $DefaultedRegistry$Type<(I)>, arg1: I)

public "getId"(): $ResourceLocation
public "getOrNull"(): I
public "asItem"(): $Item
get "id"(): $ResourceLocation
get "orNull"(): I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemObject$Type<I> = ($ItemObject<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemObject_<I> = $ItemObject$Type<(I)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$EnumObject" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$MultiObject, $MultiObject$Type} from "packages/slimeknights/mantle/registration/object/$MultiObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $EnumObject<T extends $Enum<(T)>, I> implements $MultiObject<(I)> {


public "get"(arg0: T): I
public "values"(): $List<(I)>
public "contains"(arg0: any): boolean
public static "empty"<T extends $Enum<(T)>, I>(): $EnumObject<(T), (I)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "forEach"(arg0: $BiConsumer$Type<(T), (any)>): void
public "keys"(): $Collection<(T)>
public "entries"(): $Collection<($Map$Entry<(T), ($Supplier<(any)>)>)>
public "getOrNull"(arg0: T): I
public "getSupplier"(arg0: T): $Supplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumObject$Type<T, I> = ($EnumObject<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumObject_<T, I> = $EnumObject$Type<(T), (I)>;
}}
declare module "packages/slimeknights/mantle/item/$TooltipItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TooltipItem extends $Item {
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipItem$Type = ($TooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipItem_ = $TooltipItem$Type;
}}
declare module "packages/slimeknights/mantle/block/$GaugeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $GaugeBlock extends $Block {
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

public static "formatCapacity"(arg0: integer): $MutableComponent
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GaugeBlock$Type = ($GaugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GaugeBlock_ = $GaugeBlock$Type;
}}
declare module "packages/slimeknights/mantle/recipe/$ICustomOutputRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ICommonRecipe, $ICommonRecipe$Type} from "packages/slimeknights/mantle/recipe/$ICommonRecipe"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $ICustomOutputRecipe<C extends $Container> extends $ICommonRecipe<(C)> {

/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
/**
 * 
 * @deprecated
 */
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getType"(): $ResourceLocation
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "setGroup"(group: string): void
 "getGroup"(): string
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getMod"(): string
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
}

export namespace $ICustomOutputRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomOutputRecipe$Type<C> = ($ICustomOutputRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomOutputRecipe_<C> = $ICustomOutputRecipe$Type<(C)>;
}}
declare module "packages/slimeknights/mantle/registration/object/$BuildingBlockObject" {
import {$MultiObject, $MultiObject$Type} from "packages/slimeknights/mantle/registration/object/$MultiObject"
import {$ItemObject, $ItemObject$Type} from "packages/slimeknights/mantle/registration/object/$ItemObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BuildingBlockObject extends $ItemObject<($Block)> implements $MultiObject<($Block)> {

constructor(arg0: $ItemObject$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Supplier$Type<(any)>)
constructor(arg0: $Block$Type, arg1: $Block$Type, arg2: $Block$Type)

public "values"(): $List<($Block)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getStairs"(): $StairBlock
public "getSlab"(): $SlabBlock
get "stairs"(): $StairBlock
get "slab"(): $SlabBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingBlockObject$Type = ($BuildingBlockObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingBlockObject_ = $BuildingBlockObject$Type;
}}
declare module "packages/slimeknights/mantle/data/loadable/record/$RecordLoadable" {
import {$Function8, $Function8$Type} from "packages/com/mojang/datafixers/util/$Function8"
import {$Function7, $Function7$Type} from "packages/com/mojang/datafixers/util/$Function7"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function6, $Function6$Type} from "packages/com/mojang/datafixers/util/$Function6"
import {$Function5, $Function5$Type} from "packages/com/mojang/datafixers/util/$Function5"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Function9, $Function9$Type} from "packages/com/mojang/datafixers/util/$Function9"
import {$Loadable, $Loadable$Type} from "packages/slimeknights/mantle/data/loadable/$Loadable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ArrayLoadable, $ArrayLoadable$Type} from "packages/slimeknights/mantle/data/loadable/array/$ArrayLoadable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecordField, $RecordField$Type} from "packages/slimeknights/mantle/data/loadable/field/$RecordField"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$TypedMap, $TypedMap$Type} from "packages/slimeknights/mantle/util/typed/$TypedMap"
import {$LoadableField, $LoadableField$Type} from "packages/slimeknights/mantle/data/loadable/field/$LoadableField"
import {$Function16, $Function16$Type} from "packages/com/mojang/datafixers/util/$Function16"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Function11, $Function11$Type} from "packages/com/mojang/datafixers/util/$Function11"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Function10, $Function10$Type} from "packages/com/mojang/datafixers/util/$Function10"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ErrorFactory, $ErrorFactory$Type} from "packages/slimeknights/mantle/data/loadable/$ErrorFactory"
import {$Function4, $Function4$Type} from "packages/com/mojang/datafixers/util/$Function4"
import {$Function15, $Function15$Type} from "packages/com/mojang/datafixers/util/$Function15"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$Function14, $Function14$Type} from "packages/com/mojang/datafixers/util/$Function14"
import {$Function13, $Function13$Type} from "packages/com/mojang/datafixers/util/$Function13"
import {$Function12, $Function12$Type} from "packages/com/mojang/datafixers/util/$Function12"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $RecordLoadable<T> extends $Loadable<(T)> {

 "compact"(arg0: $Loadable$Type<(T)>, arg1: $Predicate$Type<(T)>): $RecordLoadable<(T)>
 "convert"(arg0: $JsonElement$Type, arg1: string, arg2: $TypedMap$Type): T
 "validate"(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (T)>): $RecordLoadable<(T)>
 "directField"<P>(arg0: $Function$Type<(P), (T)>): $RecordField<(T), (P)>
 "serialize"(arg0: T): $JsonElement
 "serialize"(arg0: T, arg1: $JsonObject$Type): void
 "comapFlatMap"<M>(arg0: $BiFunction$Type<(T), ($ErrorFactory$Type), (M)>, arg1: $Function$Type<(M), (T)>): $RecordLoadable<(M)>
 "deserialize"(arg0: $JsonObject$Type, arg1: $TypedMap$Type): T
 "deserialize"(arg0: $JsonObject$Type): T
 "flatComap"<M>(arg0: $Function$Type<(T), (M)>, arg1: $BiFunction$Type<(M), ($ErrorFactory$Type), (T)>): $RecordLoadable<(M)>
 "convert"(arg0: $JsonElement$Type, arg1: string): T
 "list"(arg0: integer): $Loadable<($List<(T)>)>
 "list"(): $Loadable<($List<(T)>)>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer): $ArrayLoadable<((T)[])>
 "array"(arg0: $IntFunction$Type<((T)[])>, arg1: boolean, arg2: integer, arg3: integer): $ArrayLoadable<((T)[])>
 "set"(): $Loadable<($Set<(T)>)>
 "set"(arg0: integer): $Loadable<($Set<(T)>)>
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T): T
 "getOrDefault"(arg0: $JsonObject$Type, arg1: string, arg2: T, arg3: $TypedMap$Type): T
 "serialize"(arg0: T, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
 "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string, arg2: $TypedMap$Type): T
 "getIfPresent"(arg0: $JsonObject$Type, arg1: string): T
 "requiredField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "nullableField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "defaultField"<P>(arg0: string, arg1: T, arg2: boolean, arg3: $Function$Type<(P), (T)>): $LoadableField<(T), (P)>
 "tryDirectField"<P>(arg0: string, arg1: $Function$Type<(P), (T)>, ...arg2: (string)[]): $LoadableField<(T), (P)>
 "mapWithKeys"<K>(arg0: integer, arg1: $Function$Type<(T), (K)>): $Loadable<($Map<(K), (T)>)>
 "mapWithValues"<V>(arg0: integer, arg1: $Function$Type<(T), (V)>): $Loadable<($Map<(T), (V)>)>
 "decode"(arg0: $FriendlyByteBuf$Type, arg1: $TypedMap$Type): T
 "decode"(arg0: $FriendlyByteBuf$Type): T
 "encode"(arg0: $FriendlyByteBuf$Type, arg1: T): void
}

export namespace $RecordLoadable {
function create<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function7$Type<(A), (B), (C), (D), (E), (F), (G), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function6$Type<(A), (B), (C), (D), (E), (F), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function5$Type<(A), (B), (C), (D), (E), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function4$Type<(A), (B), (C), (D), (R)>): $RecordLoadable<(R)>
function create<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function3$Type<(A), (B), (C), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), (H), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $RecordField$Type<(P), (any)>, arg16: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (P), (R)>): $RecordLoadable<(R)>
function create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), (R)>): $RecordLoadable<(R)>
function create<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $Function$Type<(A), (R)>): $RecordLoadable<(R)>
function create<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $BiFunction$Type<(A), (B), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $Function13$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $Function14$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $Function12$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $Function15$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $RecordField$Type<(K), (any)>, arg11: $RecordField$Type<(L), (any)>, arg12: $RecordField$Type<(M), (any)>, arg13: $RecordField$Type<(N), (any)>, arg14: $RecordField$Type<(O), (any)>, arg15: $Function16$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), (K), (L), (M), (N), (O), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $Function10$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $Function6$Type<(A), (B), (C), (D), (E), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $Function5$Type<(A), (B), (C), (D), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $Function4$Type<(A), (B), (C), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $Function3$Type<(A), (B), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $BiFunction$Type<(A), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, I, J, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $RecordField$Type<(I), (any)>, arg9: $RecordField$Type<(J), (any)>, arg10: $Function11$Type<(A), (B), (C), (D), (E), (F), (G), (H), (I), (J), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<R>(arg0: $Function$Type<($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, H, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $RecordField$Type<(H), (any)>, arg8: $Function9$Type<(A), (B), (C), (D), (E), (F), (G), (H), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, G, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $RecordField$Type<(G), (any)>, arg7: $Function8$Type<(A), (B), (C), (D), (E), (F), (G), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
function withLoader<A, B, C, D, E, F, R>(arg0: $RecordField$Type<(A), (any)>, arg1: $RecordField$Type<(B), (any)>, arg2: $RecordField$Type<(C), (any)>, arg3: $RecordField$Type<(D), (any)>, arg4: $RecordField$Type<(E), (any)>, arg5: $RecordField$Type<(F), (any)>, arg6: $Function7$Type<(A), (B), (C), (D), (E), (F), ($RecordLoadable$Type<(R)>), (R)>): $RecordLoadable<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordLoadable$Type<T> = ($RecordLoadable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordLoadable_<T> = $RecordLoadable$Type<(T)>;
}}
declare module "packages/slimeknights/mantle/fluid/$TextureFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $TextureFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureFluidType$Type = ($TextureFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureFluidType_ = $TextureFluidType$Type;
}}
declare module "packages/slimeknights/mantle/recipe/$ICommonRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
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

export interface $ICommonRecipe<C extends $Container> extends $Recipe<(C)> {

 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "isSpecial"(): boolean
/**
 * 
 * @deprecated
 */
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getType"(): $ResourceLocation
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "setGroup"(group: string): void
 "getGroup"(): string
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getMod"(): string
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
}

export namespace $ICommonRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonRecipe$Type<C> = ($ICommonRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommonRecipe_<C> = $ICommonRecipe$Type<(C)>;
}}

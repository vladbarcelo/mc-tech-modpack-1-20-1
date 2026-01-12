declare module "packages/com/petrolpark/petrolsparts/content/chained_cogwheel/$ChainedCogwheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractSimpleShaftBlock, $AbstractSimpleShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$AbstractSimpleShaftBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $ChainedCogwheelBlock extends $AbstractSimpleShaftBlock implements $ICogWheel {
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


public static "small"(arg0: $BlockBehaviour$Properties$Type): $ChainedCogwheelBlock
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "large"(arg0: $BlockBehaviour$Properties$Type): $ChainedCogwheelBlock
public "isLargeCog"(): boolean
public static "tryPlace"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainedCogwheelBlock$Type = ($ChainedCogwheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChainedCogwheelBlock_ = $ChainedCogwheelBlock$Type;
}}
declare module "packages/com/petrolpark/shop/offer/$ShopOfferGenerator" {
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$IngredientRandomizer, $IngredientRandomizer$Type} from "packages/com/petrolpark/recipe/ingredient/randomizer/$IngredientRandomizer"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ShopOffer, $ShopOffer$Type} from "packages/com/petrolpark/shop/offer/$ShopOffer"
import {$Shop, $Shop$Type} from "packages/com/petrolpark/shop/$Shop"
import {$IRewardGenerator, $IRewardGenerator$Type} from "packages/com/petrolpark/data/reward/generator/$IRewardGenerator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$ShopOrderModifierEntry, $ShopOrderModifierEntry$Type} from "packages/com/petrolpark/shop/offer/$ShopOrderModifierEntry"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ShopOfferGenerator implements $LootContextUser {
static readonly "CODEC": $Codec<($ShopOfferGenerator)>
readonly "timeGenerator": $NumberProvider
readonly "rewardGenerator": $IRewardGenerator
readonly "orderRandomizer": $IngredientRandomizer
readonly "orderModifiers": $List<($ShopOrderModifierEntry)>

constructor(arg0: $NumberProvider$Type, arg1: $IRewardGenerator$Type, arg2: $IngredientRandomizer$Type, arg3: $List$Type<($ShopOrderModifierEntry$Type)>)

public "generate"(arg0: $LootContext$Type, arg1: $Shop$Type): $ShopOffer
public "getOrderModifiers"(): $List<($ShopOrderModifierEntry)>
public "getOrderRandomizer"(): $IngredientRandomizer
public "getTimeGenerator"(): $NumberProvider
public "getRewardGenerator"(): $IRewardGenerator
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
get "orderModifiers"(): $List<($ShopOrderModifierEntry)>
get "orderRandomizer"(): $IngredientRandomizer
get "timeGenerator"(): $NumberProvider
get "rewardGenerator"(): $IRewardGenerator
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopOfferGenerator$Type = ($ShopOfferGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopOfferGenerator_ = $ShopOfferGenerator$Type;
}}
declare module "packages/com/petrolpark/data/advancement/$SimpleAdvancementTrigger$Instance" {
import {$AbstractCriterionTriggerInstance, $AbstractCriterionTriggerInstance$Type} from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import {$SimpleAdvancementTrigger, $SimpleAdvancementTrigger$Type} from "packages/com/petrolpark/data/advancement/$SimpleAdvancementTrigger"

export class $SimpleAdvancementTrigger$Instance extends $AbstractCriterionTriggerInstance {

constructor(arg0: $SimpleAdvancementTrigger$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAdvancementTrigger$Instance$Type = ($SimpleAdvancementTrigger$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAdvancementTrigger$Instance_ = $SimpleAdvancementTrigger$Instance$Type;
}}
declare module "packages/com/petrolpark/recipe/contamination/$CombineContaminatedItemsRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CombineContaminatedItemsRecipe, $CombineContaminatedItemsRecipe$Type} from "packages/com/petrolpark/recipe/contamination/$CombineContaminatedItemsRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CombineContaminatedItemsRecipe$Serializer implements $RecipeSerializer<($CombineContaminatedItemsRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CombineContaminatedItemsRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CombineContaminatedItemsRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CombineContaminatedItemsRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CombineContaminatedItemsRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineContaminatedItemsRecipe$Serializer$Type = ($CombineContaminatedItemsRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineContaminatedItemsRecipe$Serializer_ = $CombineContaminatedItemsRecipe$Serializer$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/coaxial_gear/$CoaxialGearBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"

export class $CoaxialGearBlock extends $CogWheelBlock {
static readonly "HAS_SHAFT": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public static "small"(arg0: $BlockBehaviour$Properties$Type): $CoaxialGearBlock
public static "isCoaxialGear"(arg0: $BlockState$Type): boolean
public static "isCoaxialGear"(arg0: $Block$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "updatePropagationOfLongShaft"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): void
public static "tryMakeLongShaft"(arg0: $BlockState$Type, arg1: $Block$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public static "large"(arg0: $BlockBehaviour$Properties$Type): $CoaxialGearBlock
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoaxialGearBlock$Type = ($CoaxialGearBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoaxialGearBlock_ = $CoaxialGearBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position$Clock" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ColossalCogwheelBlock$Position, $ColossalCogwheelBlock$Position$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ColossalCogwheelBlock$Position$Clock extends $Enum<($ColossalCogwheelBlock$Position$Clock)> implements $ColossalCogwheelBlock$Position {
static readonly "TWELVE": $ColossalCogwheelBlock$Position$Clock
static readonly "THREE": $ColossalCogwheelBlock$Position$Clock
static readonly "SIX": $ColossalCogwheelBlock$Position$Clock
static readonly "NINE": $ColossalCogwheelBlock$Position$Clock


public static "values"(): ($ColossalCogwheelBlock$Position$Clock)[]
public static "valueOf"(arg0: string): $ColossalCogwheelBlock$Position$Clock
public "getDirection"(arg0: $Direction$Axis$Type): $Direction
public "getOpposite"(): $ColossalCogwheelBlock$Position$Clock
public "getClockwise"(arg0: boolean): $ColossalCogwheelBlock$Position$Clock
public "getSerializedName"(): string
public static "getRelativeControllerPosition"(arg0: $Direction$Axis$Type): $BlockPos
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "opposite"(): $ColossalCogwheelBlock$Position$Clock
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlock$Position$Clock$Type = (("nine") | ("six") | ("twelve") | ("three")) | ($ColossalCogwheelBlock$Position$Clock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlock$Position$Clock_ = $ColossalCogwheelBlock$Position$Clock$Type;
}}
declare module "packages/com/petrolpark/badge/$BadgeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Badge, $Badge$Type} from "packages/com/petrolpark/badge/$Badge"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BadgeItem extends $Item {
readonly "badge": $Supplier<($Badge)>
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

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($Badge$Type)>)

public static "of"(arg0: $Player$Type, arg1: $Badge$Type, arg2: $Date$Type): $ItemStack
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BadgeItem$Type = ($BadgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BadgeItem_ = $BadgeItem$Type;
}}
declare module "packages/com/petrolpark/util/$BigItemStack" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $BigItemStack {
static readonly "EMPTY": $BigItemStack

constructor(arg0: $ItemStack$Type)
constructor(arg0: $ItemLike$Type, arg1: integer)
constructor(arg0: $ItemStack$Type, arg1: integer)

public "getCount"(): integer
public "copyWithCount"(arg0: integer): $BigItemStack
public "getSingleItemStack"(): $ItemStack
public "copyStackWithCount"(arg0: integer): $ItemStack
public "getAsStacks"(): $List<($ItemStack)>
get "count"(): integer
get "singleItemStack"(): $ItemStack
get "asStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigItemStack$Type = ($BigItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigItemStack_ = $BigItemStack$Type;
}}
declare module "packages/com/petrolpark/item/decay/recipe/$DecayingItemCookingRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IDecayingItemCookingRecipe, $IDecayingItemCookingRecipe$Type} from "packages/com/petrolpark/item/decay/recipe/$IDecayingItemCookingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DecayingItemCookingRecipeSerializer implements $RecipeSerializer<($IDecayingItemCookingRecipe<(any)>)> {

constructor()

public "getWrapped"<R extends $AbstractCookingRecipe>(arg0: R): $IDecayingItemCookingRecipe<(R)>
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $IDecayingItemCookingRecipe<(any)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $IDecayingItemCookingRecipe<(any)>
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $IDecayingItemCookingRecipe$Type<(any)>): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $IDecayingItemCookingRecipe<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecayingItemCookingRecipeSerializer$Type = ($DecayingItemCookingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecayingItemCookingRecipeSerializer_ = $DecayingItemCookingRecipeSerializer$Type;
}}
declare module "packages/com/petrolpark/data/reward/generator/$RewardGeneratorType" {
import {$Serializer, $Serializer$Type} from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import {$IRewardGenerator, $IRewardGenerator$Type} from "packages/com/petrolpark/data/reward/generator/$IRewardGenerator"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $RewardGeneratorType extends $SerializerType<($IRewardGenerator)> {

constructor(arg0: $Serializer$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardGeneratorType$Type = ($RewardGeneratorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardGeneratorType_ = $RewardGeneratorType$Type;
}}
declare module "packages/com/petrolpark/shop/offer/$ShopOffer" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ShopOrder, $ShopOrder$Type} from "packages/com/petrolpark/shop/offer/order/$ShopOrder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IReward, $IReward$Type} from "packages/com/petrolpark/data/reward/$IReward"

export class $ShopOffer extends $Record {
static readonly "EMPTY": $ShopOffer
static readonly "CODEC": $Codec<($ShopOffer)>

constructor(rewards: $List$Type<($IReward$Type)>, order: $ShopOrder$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "order"(): $ShopOrder
public "rewards"(): $List<($IReward)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopOffer$Type = ($ShopOffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopOffer_ = $ShopOffer$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/core/advancement/$PetrolsPartsAdvancementBehaviour" {
import {$PetrolsPartsAdvancementTrigger, $PetrolsPartsAdvancementTrigger$Type} from "packages/com/petrolpark/petrolsparts/core/advancement/$PetrolsPartsAdvancementTrigger"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AbstractRememberPlacerBehaviour, $AbstractRememberPlacerBehaviour$Type} from "packages/com/petrolpark/compat/create/block/entity/behaviour/$AbstractRememberPlacerBehaviour"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $PetrolsPartsAdvancementBehaviour extends $AbstractRememberPlacerBehaviour {
static readonly "TYPE": $BehaviourType<($PetrolsPartsAdvancementBehaviour)>
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$Type, ...arg1: ($PetrolsPartsAdvancementTrigger$Type)[])

public "getType"(): $BehaviourType<(any)>
public "shouldRememberPlacer"(arg0: $Player$Type): boolean
public "awardAdvancement"(arg0: $PetrolsPartsAdvancementTrigger$Type): void
public "awardAdvancementIf"(arg0: $PetrolsPartsAdvancementTrigger$Type, arg1: $Supplier$Type<(boolean)>): void
get "type"(): $BehaviourType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PetrolsPartsAdvancementBehaviour$Type = ($PetrolsPartsAdvancementBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PetrolsPartsAdvancementBehaviour_ = $PetrolsPartsAdvancementBehaviour$Type;
}}
declare module "packages/com/petrolpark/tube/$TubeStructuralBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TubeStructuralBlockEntity, $TubeStructuralBlockEntity$Type} from "packages/com/petrolpark/tube/$TubeStructuralBlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TubeStructuralBlock extends $Block implements $IBE<($TubeStructuralBlockEntity)> {
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

public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "getBlockEntityClass"(): $Class<($TubeStructuralBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TubeStructuralBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($TubeStructuralBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($TubeStructuralBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($TubeStructuralBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($TubeStructuralBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeStructuralBlock$Type = ($TubeStructuralBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeStructuralBlock_ = $TubeStructuralBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ColossalCogwheelBlock, $ColossalCogwheelBlock$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColossalCogwheelBlockItem extends $BlockItem {
readonly "onOtherPlacementHelpers": $Couple<(integer)>
readonly "onColossalPlacementHelpers": $Couple<(integer)>
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

constructor(arg0: $ColossalCogwheelBlock$Type, arg1: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "isValidCenterPosition"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Axis$Type): boolean
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "showBounds"(arg0: $BlockPos$Type, arg1: $Direction$Axis$Type, arg2: $Player$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlockItem$Type = ($ColossalCogwheelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlockItem_ = $ColossalCogwheelBlockItem$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/core/advancement/$PetrolsPartsAdvancementTrigger" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PetrolsPartsAdvancementTrigger extends $Enum<($PetrolsPartsAdvancementTrigger)> {
static readonly "COAXIAL_GEAR": $PetrolsPartsAdvancementTrigger
static readonly "COLOSSAL_COGWHEEL_POWER_MANY": $PetrolsPartsAdvancementTrigger
static readonly "DIFFERENTIAL": $PetrolsPartsAdvancementTrigger


public static "values"(): ($PetrolsPartsAdvancementTrigger)[]
public static "valueOf"(arg0: string): $PetrolsPartsAdvancementTrigger
public static "register"(): void
public "isAlreadyAwardedTo"(arg0: $LivingEntity$Type): boolean
public "award"(arg0: $Level$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PetrolsPartsAdvancementTrigger$Type = (("colossal_cogwheel_power_many") | ("coaxial_gear") | ("differential")) | ($PetrolsPartsAdvancementTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PetrolsPartsAdvancementTrigger_ = $PetrolsPartsAdvancementTrigger$Type;
}}
declare module "packages/com/petrolpark/contamination/$IItemStackDuck" {
import {$IContamination, $IContamination$Type} from "packages/com/petrolpark/contamination/$IContamination"

export interface $IItemStackDuck {

 "getContamination"(): $IContamination<(any), (any)>
 "onContaminationSaved"(): void
}

export namespace $IItemStackDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackDuck$Type = ($IItemStackDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStackDuck_ = $IItemStackDuck$Type;
}}
declare module "packages/com/petrolpark/recipe/contamination/$CombineContaminatedItemsRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$IHandleContaminationMyself, $IHandleContaminationMyself$Type} from "packages/com/petrolpark/recipe/contamination/$IHandleContaminationMyself"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CombineContaminatedItemsRecipe$Serializer, $CombineContaminatedItemsRecipe$Serializer$Type} from "packages/com/petrolpark/recipe/contamination/$CombineContaminatedItemsRecipe$Serializer"

export class $CombineContaminatedItemsRecipe extends $CustomRecipe implements $IHandleContaminationMyself<($CraftingContainer)> {
static readonly "SERIALIZER": $CombineContaminatedItemsRecipe$Serializer

constructor(arg0: $ResourceLocation$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "contaminationHandled"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineContaminatedItemsRecipe$Type = ($CombineContaminatedItemsRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineContaminatedItemsRecipe_ = $CombineContaminatedItemsRecipe$Type;
}}
declare module "packages/com/petrolpark/item/decay/recipe/$IDecayingItemCookingRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
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
import {$AbstractCookingRecipe, $AbstractCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IDecayingItemCookingRecipe<R extends $AbstractCookingRecipe> extends $Recipe<($Container)> {

 "getWrappedSerializer"(): $RecipeSerializer<(R)>
 "getAsWrappedRecipe"(): R
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getType"(): $ResourceLocation
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getMod"(): string
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
}

export namespace $IDecayingItemCookingRecipe {
function withDecay(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDecayingItemCookingRecipe$Type<R> = ($IDecayingItemCookingRecipe<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDecayingItemCookingRecipe_<R> = $IDecayingItemCookingRecipe$Type<(R)>;
}}
declare module "packages/com/petrolpark/recipe/ingredient/randomizer/$IngredientRandomizer" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$IngredientRandomizerType, $IngredientRandomizerType$Type} from "packages/com/petrolpark/recipe/ingredient/randomizer/$IngredientRandomizerType"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ForgeRegistryObjectGSONAdapter, $ForgeRegistryObjectGSONAdapter$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter"

export interface $IngredientRandomizer extends $LootContextUser {

 "generate"(arg0: $LootContext$Type): $Ingredient
 "getType"(): $IngredientRandomizerType
 "validate"(arg0: $ValidationContext$Type): void
 "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
}

export namespace $IngredientRandomizer {
const CODEC: $Codec<($IngredientRandomizer)>
function createGsonAdapter(): $ForgeRegistryObjectGSONAdapter<($IngredientRandomizer), ($IngredientRandomizerType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientRandomizer$Type = ($IngredientRandomizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientRandomizer_ = $IngredientRandomizer$Type;
}}
declare module "packages/com/petrolpark/client/creativemodetab/$CustomTab" {
import {$CustomTab$ITabEntry, $CustomTab$ITabEntry$Type} from "packages/com/petrolpark/client/creativemodetab/$CustomTab$ITabEntry"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CustomTab extends $CreativeModeTab {
readonly "entries": $ImmutableList<($CustomTab$ITabEntry)>
readonly "renderedEntries": $Map<(integer), ($CustomTab$ITabEntry)>
 "backgroundSuffix": string
 "canScroll": boolean
 "showTitle": boolean
 "alignedRight": boolean
 "displayItems": $Collection<($ItemStack)>
 "displayItemsSearchTab": $Set<($ItemStack)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
readonly "tabsBefore": $List<($ResourceLocation)>
readonly "tabsAfter": $List<($ResourceLocation)>


public "buildContents"(arg0: $CreativeModeTab$ItemDisplayParameters$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTab$Type = ($CustomTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTab_ = $CustomTab$Type;
}}
declare module "packages/com/petrolpark/shop/offer/$ShopOrderModifierEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ShopOrderModifier, $ShopOrderModifier$Type} from "packages/com/petrolpark/shop/offer/order/$ShopOrderModifier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $ShopOrderModifierEntry extends $Record {
static readonly "CODEC": $Codec<($ShopOrderModifierEntry)>

constructor(orderModifier: $ShopOrderModifier$Type, chance: $NumberProvider$Type, hidden: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "orderModifier"(): $ShopOrderModifier
public "hidden"(): boolean
public "chance"(): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopOrderModifierEntry$Type = ($ShopOrderModifierEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopOrderModifierEntry_ = $ShopOrderModifierEntry$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/planetary_gearset/$PlanetaryGearsetBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"

export class $PlanetaryGearsetBlock extends $CogWheelBlock {
static readonly "SUPPORT_ONLY": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isLargeCog"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanetaryGearsetBlock$Type = ($PlanetaryGearsetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlanetaryGearsetBlock_ = $PlanetaryGearsetBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/coaxial_gear/$LongShaftBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ShaftBlock, $ShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ShaftBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $LongShaftBlock extends $ShaftBlock implements $ITransformableBlock {
static readonly "placementHelperId": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getStateForDirection"(arg0: $Direction$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongShaftBlock$Type = ($LongShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongShaftBlock_ = $LongShaftBlock$Type;
}}
declare module "packages/com/petrolpark/tube/$ITubeBlock" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TubeSpline, $TubeSpline$Type} from "packages/com/petrolpark/tube/$TubeSpline"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITubeBlock {

 "getTubeConnectingFace"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Direction
 "connectTube"(arg0: $Level$Type, arg1: $TubeSpline$Type): void
 "tryReconnect"(arg0: $UseOnContext$Type): boolean
 "getItemsForTubeLength"(arg0: double): integer
 "getTubeMaxAngle"(): double
 "getTubeSegmentLength"(): double
 "getTubeSegmentRadius"(): double
}

export namespace $ITubeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeBlock$Type = ($ITubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeBlock_ = $ITubeBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/double_cardan_shaft/$DoubleCardanShaftBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SplitShaftBlockEntity, $SplitShaftBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/transmission/$SplitShaftBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DoubleCardanShaftBlockEntity extends $SplitShaftBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getRotationSpeedModifier"(arg0: $Direction$Type): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCardanShaftBlockEntity$Type = ($DoubleCardanShaftBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCardanShaftBlockEntity_ = $DoubleCardanShaftBlockEntity$Type;
}}
declare module "packages/com/petrolpark/recipe/ingredient/randomizer/$IngredientRandomizerType" {
import {$IngredientRandomizer, $IngredientRandomizer$Type} from "packages/com/petrolpark/recipe/ingredient/randomizer/$IngredientRandomizer"
import {$Serializer, $Serializer$Type} from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $IngredientRandomizerType extends $SerializerType<($IngredientRandomizer)> {

constructor(arg0: $Serializer$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientRandomizerType$Type = ($IngredientRandomizerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientRandomizerType_ = $IngredientRandomizerType$Type;
}}
declare module "packages/com/petrolpark/recipe/ingredient/modifier/$IngredientModifier" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IngredientModifierType, $IngredientModifierType$Type} from "packages/com/petrolpark/recipe/ingredient/modifier/$IngredientModifierType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ForgeRegistryObjectGSONAdapter, $ForgeRegistryObjectGSONAdapter$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter"

export interface $IngredientModifier extends $LootContextUser {

 "test"(arg0: $ItemStack$Type, arg1: $Level$Type): boolean
 "getType"(): $IngredientModifierType
 "modifyExamples"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Level$Type): void
 "modifyCounterExamples"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Level$Type): void
 "addToDescription"(arg0: $List$Type<($Component$Type)>, arg1: $Level$Type): void
 "validate"(arg0: $ValidationContext$Type): void
 "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
}

export namespace $IngredientModifier {
const CODEC: $Codec<($IngredientModifier)>
function createGsonAdapter(): $ForgeRegistryObjectGSONAdapter<($IngredientModifier), ($IngredientModifierType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientModifier$Type = ($IngredientModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientModifier_ = $IngredientModifier$Type;
}}
declare module "packages/com/petrolpark/recipe/contamination/$IHandleContaminationMyself" {
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

export interface $IHandleContaminationMyself<C extends $Container> extends $Recipe<(C)> {

 "contaminationHandled"(arg0: C, arg1: $RegistryAccess$Type): boolean
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: C, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: C, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "getType"(): $ResourceLocation
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getMod"(): string
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
}

export namespace $IHandleContaminationMyself {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandleContaminationMyself$Type<C> = ($IHandleContaminationMyself<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandleContaminationMyself_<C> = $IHandleContaminationMyself$Type<(C)>;
}}
declare module "packages/com/petrolpark/tube/$TubeBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ITubeBlock, $ITubeBlock$Type} from "packages/com/petrolpark/tube/$ITubeBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TubeBlockItem extends $BlockItem {
readonly "tubeBlock": $ITubeBlock
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

constructor<B extends ($Block) & ($ITubeBlock)>(arg0: B, arg1: $Item$Properties$Type)

public "getConnectingFace"(arg0: $BlockPlaceContext$Type): $Direction
public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeBlockItem$Type = ($TubeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeBlockItem_ = $TubeBlockItem$Type;
}}
declare module "packages/com/petrolpark/contamination/$Contamination" {
import {$Contaminant, $Contaminant$Type} from "packages/com/petrolpark/contamination/$Contaminant"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Contaminable, $Contaminable$Type} from "packages/com/petrolpark/contamination/$Contaminable"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IContamination, $IContamination$Type} from "packages/com/petrolpark/contamination/$IContamination"

export class $Contamination<OBJECT, OBJECT_STACK> implements $IContamination<(OBJECT), (OBJECT_STACK)> {


public "has"(arg0: $Contaminant$Type): boolean
public "contaminateAll"(arg0: $Stream$Type<($Contaminant$Type)>): boolean
public "streamAllContaminants"(): $Stream<($Contaminant)>
public "streamOrphanExtrinsicContaminants"(): $Stream<($Contaminant)>
public "hasAnyContaminant"(): boolean
public "hasAnyExtrinsicContaminant"(): boolean
public "contaminate"(arg0: $Contaminant$Type): boolean
public "decontaminate"(arg0: $Contaminant$Type): boolean
public "decontaminateOnly"(arg0: $Contaminant$Type): boolean
public "fullyDecontaminate"(): boolean
public "writeNBT"(): $ListTag
public "readNBT"(arg0: $ListTag$Type): void
public static "get"(arg0: any): $Optional<($IContamination<(any), (any)>)>
public "save"(): void
public "getType"(): OBJECT
public "streamShownAbsentContaminants"(): $Stream<($Contaminant)>
public "getContaminable"(): $Contaminable<(OBJECT), (OBJECT_STACK)>
public "streamShownContaminants"(): $Stream<($Contaminant)>
public "getAmount"(): double
public static "perpetuate"(arg0: $Stream$Type<(any)>, arg1: $Stream$Type<(any)>): void
public static "perpetuate"<OBJECT>(arg0: $Stream$Type<(OBJECT)>, arg1: $Stream$Type<(OBJECT)>, arg2: $Function$Type<(OBJECT), ($IContamination$Type<(any), (any)>)>): void
public static "perpetuate"(arg0: $Stream$Type<($ItemStack$Type)>, arg1: $Stream$Type<($FluidStack$Type)>, arg2: double, arg3: $Stream$Type<($ItemStack$Type)>, arg4: $Stream$Type<($FluidStack$Type)>): void
get "type"(): OBJECT
get "contaminable"(): $Contaminable<(OBJECT), (OBJECT_STACK)>
get "amount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Contamination$Type<OBJECT, OBJECT_STACK> = ($Contamination<(OBJECT), (OBJECT_STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Contamination_<OBJECT, OBJECT_STACK> = $Contamination$Type<(OBJECT), (OBJECT_STACK)>;
}}
declare module "packages/com/petrolpark/recipe/manualonly/$ManualOnlyShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $ManualOnlyShapedRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $ItemStack$Type)

public "getExampleResult"(): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public static "isAllowed"(arg0: $CraftingContainer$Type): boolean
get "exampleResult"(): $ItemStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualOnlyShapedRecipe$Type = ($ManualOnlyShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualOnlyShapedRecipe_ = $ManualOnlyShapedRecipe$Type;
}}
declare module "packages/com/petrolpark/block/entity/$IShulkerBoxBlockEntityDuck" {
import {$Contaminant, $Contaminant$Type} from "packages/com/petrolpark/contamination/$Contaminant"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$GenericContamination, $GenericContamination$Type} from "packages/com/petrolpark/contamination/$GenericContamination"

export interface $IShulkerBoxBlockEntityDuck {

 "getContamination"(): $GenericContamination
 "contaminateAll"(arg0: $Stream$Type<($Contaminant$Type)>): void
}

export namespace $IShulkerBoxBlockEntityDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShulkerBoxBlockEntityDuck$Type = ($IShulkerBoxBlockEntityDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShulkerBoxBlockEntityDuck_ = $IShulkerBoxBlockEntityDuck$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ColossalCogwheelBlockEntity extends $KineticBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "tick"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "propagateRotationTo"(arg0: $KineticBlockEntity$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: boolean, arg5: boolean): float
public static "propagateFromColossalCogwheel"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): float
public "tryAwardCogsPoweringAdvancement"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlockEntity$Type = ($ColossalCogwheelBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlockEntity_ = $ColossalCogwheelBlockEntity$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/differential/$DummyDifferentialBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DirectionalRotatedPillarKineticBlock, $DirectionalRotatedPillarKineticBlock$Type} from "packages/com/petrolpark/petrolsparts/core/block/$DirectionalRotatedPillarKineticBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DummyDifferentialBlockEntity, $DummyDifferentialBlockEntity$Type} from "packages/com/petrolpark/petrolsparts/content/differential/$DummyDifferentialBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DummyDifferentialBlock extends $DirectionalRotatedPillarKineticBlock implements $IBE<($DummyDifferentialBlockEntity)> {
static "POSITIVE_AXIS_DIRECTION": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($DummyDifferentialBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DummyDifferentialBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DummyDifferentialBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DummyDifferentialBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DummyDifferentialBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($DummyDifferentialBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyDifferentialBlock$Type = ($DummyDifferentialBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyDifferentialBlock_ = $DummyDifferentialBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position$Type" {
import {$VoxelShaper, $VoxelShaper$Type} from "packages/com/simibubi/create/foundation/utility/$VoxelShaper"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$ColossalCogwheelBlock$Position$Clock, $ColossalCogwheelBlock$Position$Clock$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position$Clock"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ColossalCogwheelBlock$Position, $ColossalCogwheelBlock$Position$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position"
import {$Matrix2d, $Matrix2d$Type} from "packages/org/joml/$Matrix2d"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $ColossalCogwheelBlock$Position$Type extends $Enum<($ColossalCogwheelBlock$Position$Type)> implements $ColossalCogwheelBlock$Position {
static readonly "ANTICLOCKWISE": $ColossalCogwheelBlock$Position$Type
static readonly "MIDDLE": $ColossalCogwheelBlock$Position$Type
static readonly "CLOCKWISE": $ColossalCogwheelBlock$Position$Type
static readonly "INSIDE": $ColossalCogwheelBlock$Position$Type
readonly "relativeCenterPos": $BiFunction<($Direction$Axis), ($Direction), ($BlockPos)>
readonly "untransformedShapeCuboids": ($Matrix2d)[]
readonly "shapes": $EnumMap<($ColossalCogwheelBlock$Position$Clock), ($VoxelShaper)>


public "getShape"(arg0: $ColossalCogwheelBlock$Position$Clock$Type, arg1: $Direction$Axis$Type): $VoxelShape
public static "values"(): ($ColossalCogwheelBlock$Position$Type)[]
public static "valueOf"(arg0: string): $ColossalCogwheelBlock$Position$Type
public "getSerializedName"(): string
public static "getRelativeControllerPosition"(arg0: $Direction$Axis$Type): $BlockPos
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlock$Position$Type$Type = (("middle") | ("clockwise") | ("inside") | ("anticlockwise")) | ($ColossalCogwheelBlock$Position$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlock$Position$Type_ = $ColossalCogwheelBlock$Position$Type$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$MessagePassingQueue$Consumer, $MessagePassingQueue$Consumer$Type} from "packages/io/netty/util/internal/shaded/org/jctools/queues/$MessagePassingQueue$Consumer"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IProxyHoveringInformation, $IProxyHoveringInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IProxyHoveringInformation"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$ColossalCogwheelBlock$Position$Type, $ColossalCogwheelBlock$Position$Type$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position$Type"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ColossalCogwheelBlockEntity, $ColossalCogwheelBlockEntity$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ColossalCogwheelBlock$Position$Clock, $ColossalCogwheelBlock$Position$Clock$Type} from "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position$Clock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ColossalCogwheelBlock extends $KineticBlock implements $IBE<($ColossalCogwheelBlockEntity)>, $IProxyHoveringInformation {
static "POSITION_CLOCK": $EnumProperty<($ColossalCogwheelBlock$Position$Clock)>
static "POSITION_TYPE": $EnumProperty<($ColossalCogwheelBlock$Position$Type)>
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

public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "initializeClient"(arg0: $MessagePassingQueue$Consumer$Type<($IClientBlockExtensions$Type)>): void
public "getBlockEntityClass"(): $Class<($ColossalCogwheelBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "isController"(arg0: $BlockState$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getInformationSource"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockPos
public static "getRelativeCenterPosition"(arg0: $BlockState$Type): $BlockPos
public static "getControllerPosition"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockPos
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "stillValid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ColossalCogwheelBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ColossalCogwheelBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ColossalCogwheelBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ColossalCogwheelBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($ColossalCogwheelBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlock$Type = ($ColossalCogwheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlock_ = $ColossalCogwheelBlock$Type;
}}
declare module "packages/com/petrolpark/tube/$TubeBehaviour" {
import {$BigItemStack, $BigItemStack$Type} from "packages/com/petrolpark/util/$BigItemStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITubeBlockEntity, $ITubeBlockEntity$Type} from "packages/com/petrolpark/tube/$ITubeBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TubeSpline, $TubeSpline$Type} from "packages/com/petrolpark/tube/$TubeSpline"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $TubeBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<($TubeBehaviour)>
 "blockEntity": $SmartBlockEntity

constructor<BE extends ($SmartBlockEntity) & ($ITubeBlockEntity)>(arg0: BE)

public "tick"(): void
public static "get"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<($TubeBehaviour)>
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "connect"(arg0: $TubeSpline$Type): void
public "getType"(): $BehaviourType<($TubeBehaviour)>
public "isController"(): boolean
public "disconnect"(arg0: $Consumer$Type<($BigItemStack$Type)>): void
public "disconnect"(): void
public "getOtherEndPos"(): $BlockPos
public "sendDestroyTubeParticles"(): void
public "getRequiredStack"(): $BigItemStack
public "reconnectClient"(arg0: $TubeSpline$Type, arg1: $ItemStack$Type): void
public "playSound"(arg0: boolean): void
public "reconnect"(arg0: $Player$Type, arg1: boolean): boolean
public "getSpline"(): $TubeSpline
get "type"(): $BehaviourType<($TubeBehaviour)>
get "controller"(): boolean
get "otherEndPos"(): $BlockPos
get "requiredStack"(): $BigItemStack
get "spline"(): $TubeSpline
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeBehaviour$Type = ($TubeBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeBehaviour_ = $TubeBehaviour$Type;
}}
declare module "packages/com/petrolpark/team/$ITeam$ITeamType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITeam, $ITeam$Type} from "packages/com/petrolpark/team/$ITeam"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ITeam$ITeamType<T extends $ITeam<(any)>> {

 "write"(arg0: T, arg1: $CompoundTag$Type): void
 "read"(arg0: $CompoundTag$Type, arg1: $Level$Type): T
}

export namespace $ITeam$ITeamType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeam$ITeamType$Type<T> = ($ITeam$ITeamType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeam$ITeamType_<T> = $ITeam$ITeamType$Type<(T)>;
}}
declare module "packages/com/petrolpark/contamination/$Contaminable" {
import {$Contaminant, $Contaminant$Type} from "packages/com/petrolpark/contamination/$Contaminant"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IContamination, $IContamination$Type} from "packages/com/petrolpark/contamination/$IContamination"

export class $Contaminable<OBJECT, OBJECT_STACK> {

constructor()

public "getContamination"(arg0: any): $IContamination<(OBJECT), (OBJECT_STACK)>
public "getShownIfAbsentContaminants"(arg0: OBJECT): $Set<($Contaminant)>
public "isContaminable"(arg0: OBJECT): boolean
public "isContaminableStack"(arg0: OBJECT_STACK): boolean
public "getIntrinsicContaminants"(arg0: OBJECT): $Set<($Contaminant)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Contaminable$Type<OBJECT, OBJECT_STACK> = ($Contaminable<(OBJECT), (OBJECT_STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Contaminable_<OBJECT, OBJECT_STACK> = $Contaminable$Type<(OBJECT), (OBJECT_STACK)>;
}}
declare module "packages/com/petrolpark/data/reward/generator/$IRewardGenerator" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$RewardGeneratorType, $RewardGeneratorType$Type} from "packages/com/petrolpark/data/reward/generator/$RewardGeneratorType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ForgeRegistryObjectGSONAdapter, $ForgeRegistryObjectGSONAdapter$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter"
import {$IReward, $IReward$Type} from "packages/com/petrolpark/data/reward/$IReward"

export interface $IRewardGenerator extends $LootContextUser {

 "generate"(arg0: $LootContext$Type): $List<($IReward)>
 "getType"(): $RewardGeneratorType
 "validate"(arg0: $ValidationContext$Type): void
 "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
}

export namespace $IRewardGenerator {
const CODEC: $Codec<($IRewardGenerator)>
function createGsonAdapter(): $ForgeRegistryObjectGSONAdapter<($IRewardGenerator), ($RewardGeneratorType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRewardGenerator$Type = ($IRewardGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRewardGenerator_ = $IRewardGenerator$Type;
}}
declare module "packages/com/petrolpark/badge/$Badge" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$BadgeItem, $BadgeItem$Type} from "packages/com/petrolpark/badge/$BadgeItem"
import {$ForgeRegistry, $ForgeRegistry$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SimpleAdvancementTrigger, $SimpleAdvancementTrigger$Type} from "packages/com/petrolpark/data/advancement/$SimpleAdvancementTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Badge {
 "advancementTrigger": $SimpleAdvancementTrigger

constructor()

public "getItem"(): $BadgeItem
public "getDescription"(): $Component
public "getName"(): $Component
public "equals"(arg0: any): boolean
public "getId"(): $ResourceLocation
public "setId"(arg0: $ResourceLocation$Type): void
public "getExampleDuplicationRecipe"(): $CraftingRecipe
public static "badgeRegistry"(): $ForgeRegistry<($Badge)>
public "setDuplicationItem"(arg0: $Supplier$Type<($Ingredient$Type)>): void
public "getDuplicationIngredient"(): $Ingredient
public "setAdvancementTrigger"(arg0: $SimpleAdvancementTrigger$Type): void
public "grantAdvancement"(arg0: $Player$Type): void
public "setBadgeItem"(arg0: $ItemEntry$Type<($BadgeItem$Type)>): void
public static "getBadge"(arg0: $ResourceLocation$Type): $Badge
public static "getBadge"(arg0: string, arg1: string): $Badge
get "item"(): $BadgeItem
get "description"(): $Component
get "name"(): $Component
get "id"(): $ResourceLocation
set "id"(value: $ResourceLocation$Type)
get "exampleDuplicationRecipe"(): $CraftingRecipe
set "duplicationItem"(value: $Supplier$Type<($Ingredient$Type)>)
get "duplicationIngredient"(): $Ingredient
set "advancementTrigger"(value: $SimpleAdvancementTrigger$Type)
set "badgeItem"(value: $ItemEntry$Type<($BadgeItem$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Badge$Type = ($Badge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Badge_ = $Badge$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/hydraulic_transmission/$HydraulicTransmissionBlockEntity" {
import {$IRotate, $IRotate$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$TubeBehaviour, $TubeBehaviour$Type} from "packages/com/petrolpark/tube/$TubeBehaviour"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ITubeBlockEntity, $ITubeBlockEntity$Type} from "packages/com/petrolpark/tube/$ITubeBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $HydraulicTransmissionBlockEntity extends $KineticBlockEntity implements $ITubeBlockEntity {
 "tube": $TubeBehaviour
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "destroy"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "propagateRotationTo"(arg0: $KineticBlockEntity$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: boolean, arg5: boolean): float
public "addPropagationLocations"(arg0: $IRotate$Type, arg1: $BlockState$Type, arg2: $List$Type<($BlockPos$Type)>): $List<($BlockPos)>
public "onSpeedChanged"(arg0: float): void
public "invalidateTubeRenderBoundingBox"(): void
public "updatePartnerSpeed"(): void
public "afterTubeConnect"(): void
public "beforeTubeDisconnect"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydraulicTransmissionBlockEntity$Type = ($HydraulicTransmissionBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HydraulicTransmissionBlockEntity_ = $HydraulicTransmissionBlockEntity$Type;
}}
declare module "packages/com/petrolpark/data/reward/$RewardType" {
import {$Serializer, $Serializer$Type} from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"
import {$IReward, $IReward$Type} from "packages/com/petrolpark/data/reward/$IReward"

export class $RewardType extends $SerializerType<($IReward)> {

constructor(arg0: $Serializer$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Type = ($RewardType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType_ = $RewardType$Type;
}}
declare module "packages/com/petrolpark/util/$ClampedCubicSpline" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ClampedCubicSpline {
readonly "segmentLength": double

constructor(arg0: $List$Type<($Vec3$Type)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: double)

public "getLength"(): double
public "addInterpolatedControlPoint"(arg0: integer): void
public "recalculate"(): void
public "getTangents"(): $List<($Vec3)>
public "getControlPoints"(): $List<($Vec3)>
public "moveControlPoint"(arg0: integer, arg1: $Vec3$Type): boolean
public "addControlPoint"(arg0: $Vec3$Type): void
public "getOccupiedVolume"(): $AABB
public "removeControlPoint"(arg0: integer): void
public "getEndTangent"(): $Vec3
public "getStartTangent"(): $Vec3
public "getPoints"(): $List<($Vec3)>
get "length"(): double
get "tangents"(): $List<($Vec3)>
get "controlPoints"(): $List<($Vec3)>
get "occupiedVolume"(): $AABB
get "endTangent"(): $Vec3
get "startTangent"(): $Vec3
get "points"(): $List<($Vec3)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedCubicSpline$Type = ($ClampedCubicSpline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClampedCubicSpline_ = $ClampedCubicSpline$Type;
}}
declare module "packages/com/petrolpark/shop/$Shop$OfferGeneratorEntry" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ShopOfferGenerator, $ShopOfferGenerator$Type} from "packages/com/petrolpark/shop/offer/$ShopOfferGenerator"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $Shop$OfferGeneratorEntry extends $Record implements $LootContextUser {
static readonly "CODEC": $Codec<($Shop$OfferGeneratorEntry)>

constructor(generator: $ShopOfferGenerator$Type, weight: $NumberProvider$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "generator"(): $ShopOfferGenerator
public "weight"(): $NumberProvider
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "validate"(arg0: $ValidationContext$Type): void
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shop$OfferGeneratorEntry$Type = ($Shop$OfferGeneratorEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shop$OfferGeneratorEntry_ = $Shop$OfferGeneratorEntry$Type;
}}
declare module "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter$Builder" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GsonAdapterFactory$InlineSerializer, $GsonAdapterFactory$InlineSerializer$Type} from "packages/net/minecraft/world/level/storage/loot/$GsonAdapterFactory$InlineSerializer"
import {$ForgeRegistryObjectGSONAdapter, $ForgeRegistryObjectGSONAdapter$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $ForgeRegistryObjectGSONAdapter$Builder<E, T extends $SerializerType<(E)>> {


public "build"(): $ForgeRegistryObjectGSONAdapter<(E), (T)>
public "withDefaultType"(arg0: $Supplier$Type<(T)>): $ForgeRegistryObjectGSONAdapter$Builder<(E), (T)>
public "withInlineSerializer"(arg0: $Supplier$Type<(T)>, arg1: $GsonAdapterFactory$InlineSerializer$Type<(any)>): $ForgeRegistryObjectGSONAdapter$Builder<(E), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistryObjectGSONAdapter$Builder$Type<E, T> = ($ForgeRegistryObjectGSONAdapter$Builder<(E), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistryObjectGSONAdapter$Builder_<E, T> = $ForgeRegistryObjectGSONAdapter$Builder$Type<(E), (T)>;
}}
declare module "packages/com/petrolpark/shop/$ShopMenuItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ITeam, $ITeam$Type} from "packages/com/petrolpark/team/$ITeam"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Shop, $Shop$Type} from "packages/com/petrolpark/shop/$Shop"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ITeamBoundItem, $ITeamBoundItem$Type} from "packages/com/petrolpark/team/$ITeamBoundItem"

export class $ShopMenuItem extends $Item implements $ITeamBoundItem<($Item)> {
static readonly "SHOP_TAG_KEY": string
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

public "getTeamSelectionScreenTitle"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Component
public "isTeamRebindable"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShop"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Optional<($Shop)>
public "bind"<T extends $ITeam<(any)>>(arg0: $ITeam$Type<(any)>, arg1: $ItemStack$Type, arg2: $Player$Type): void
public "trySelectTeam"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type): $InteractionResult
public static "openScreen"(arg0: $Component$Type, arg1: $List$Type<($ITeam$Type<(any)>)>): void
public static "getTeam"(arg0: $ItemStack$Type, arg1: $Level$Type): $ITeam<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopMenuItem$Type = ($ShopMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopMenuItem_ = $ShopMenuItem$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/hydraulic_transmission/$HydraulicTransmissionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ITubeBlock, $ITubeBlock$Type} from "packages/com/petrolpark/tube/$ITubeBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TubeSpline, $TubeSpline$Type} from "packages/com/petrolpark/tube/$TubeSpline"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$HydraulicTransmissionBlockEntity, $HydraulicTransmissionBlockEntity$Type} from "packages/com/petrolpark/petrolsparts/content/hydraulic_transmission/$HydraulicTransmissionBlockEntity"
import {$ICogWheel, $ICogWheel$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ICogWheel"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HydraulicTransmissionBlock extends $DirectionalKineticBlock implements $IBE<($HydraulicTransmissionBlockEntity)>, $ICogWheel, $ITubeBlock {
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

public "getBlockEntityClass"(): $Class<($HydraulicTransmissionBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "getTubeConnectingFace"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Direction
public "connectTube"(arg0: $Level$Type, arg1: $TubeSpline$Type): void
public "getItemsForTubeLength"(arg0: double): integer
public "getTubeMaxAngle"(): double
public "getTubeSegmentLength"(): double
public "getTubeSegmentRadius"(): double
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $HydraulicTransmissionBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($HydraulicTransmissionBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($HydraulicTransmissionBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($HydraulicTransmissionBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public "isLargeCog"(): boolean
public "tryReconnect"(arg0: $UseOnContext$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($HydraulicTransmissionBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "tubeMaxAngle"(): double
get "tubeSegmentLength"(): double
get "tubeSegmentRadius"(): double
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydraulicTransmissionBlock$Type = ($HydraulicTransmissionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HydraulicTransmissionBlock_ = $HydraulicTransmissionBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/differential/$DifferentialBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"

export class $DifferentialBlock extends $CogWheelBlock {
static readonly "FULL_MODEL": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "isDedicatedCogWheel"(): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isLargeCog"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
get "dedicatedCogWheel"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DifferentialBlock$Type = ($DifferentialBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DifferentialBlock_ = $DifferentialBlock$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/coaxial_gear/$CoaxialGearBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$CogwheelBlockItem, $CogwheelBlockItem$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogwheelBlockItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$CoaxialGearBlock, $CoaxialGearBlock$Type} from "packages/com/petrolpark/petrolsparts/content/coaxial_gear/$CoaxialGearBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoaxialGearBlockItem extends $CogwheelBlockItem {
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

constructor(arg0: $CoaxialGearBlock$Type, arg1: $Item$Properties$Type)

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoaxialGearBlockItem$Type = ($CoaxialGearBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoaxialGearBlockItem_ = $CoaxialGearBlockItem$Type;
}}
declare module "packages/com/petrolpark/recipe/ingredient/modifier/$IngredientModifierType" {
import {$IngredientModifier, $IngredientModifier$Type} from "packages/com/petrolpark/recipe/ingredient/modifier/$IngredientModifier"
import {$Serializer, $Serializer$Type} from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $IngredientModifierType extends $SerializerType<($IngredientModifier)> {

constructor(arg0: $Serializer$Type<(any)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientModifierType$Type = ($IngredientModifierType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientModifierType_ = $IngredientModifierType$Type;
}}
declare module "packages/com/petrolpark/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F, S> {


public "getSecond"(): S
public "getFirst"(): F
public "swap"(): $Pair<(S), (F)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public "setFirst"(arg0: F): void
public "setSecond"(arg0: S): void
get "second"(): S
get "first"(): F
set "first"(value: F)
set "second"(value: S)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$Type<(F), (S)>;
}}
declare module "packages/com/petrolpark/petrolsparts/core/block/$DirectionalRotatedPillarKineticBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RotatedPillarKineticBlock, $RotatedPillarKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$RotatedPillarKineticBlock"
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
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $DirectionalRotatedPillarKineticBlock extends $RotatedPillarKineticBlock {
static "POSITIVE_AXIS_DIRECTION": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getDirection"(arg0: $BlockState$Type): $Direction
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalRotatedPillarKineticBlock$Type = ($DirectionalRotatedPillarKineticBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalRotatedPillarKineticBlock_ = $DirectionalRotatedPillarKineticBlock$Type;
}}
declare module "packages/com/petrolpark/compat/create/block/entity/behaviour/$AbstractRememberPlacerBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEvent$EntityPlaceEvent, $BlockEvent$EntityPlaceEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent$EntityPlaceEvent"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AbstractRememberPlacerBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public static "setPlacedBy"(arg0: $SmartBlockEntity$Type, arg1: $Player$Type): void
public static "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): void
public static "onPlaceBlock"(arg0: $BlockEvent$EntityPlaceEvent$Type): void
public "shouldRememberPlacer"(arg0: $Player$Type): boolean
public "getPlayer"(): $Player
public "setPlayer"(arg0: $UUID$Type): void
get "player"(): $Player
set "player"(value: $UUID$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRememberPlacerBehaviour$Type = ($AbstractRememberPlacerBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRememberPlacerBehaviour_ = $AbstractRememberPlacerBehaviour$Type;
}}
declare module "packages/com/petrolpark/team/data/$ITeamDataType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $ITeamDataType<T> {

 "load"(arg0: $Level$Type, arg1: $CompoundTag$Type): T
 "isBlank"(arg0: T): boolean
 "save"(arg0: $Level$Type, arg1: T): $CompoundTag
 "getBlankInstance"(): T
}

export namespace $ITeamDataType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeamDataType$Type<T> = ($ITeamDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeamDataType_<T> = $ITeamDataType$Type<(T)>;
}}
declare module "packages/com/petrolpark/shop/offer/order/$ShopOrderModifier" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$IngredientModifier, $IngredientModifier$Type} from "packages/com/petrolpark/recipe/ingredient/modifier/$IngredientModifier"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $ShopOrderModifier implements $LootContextUser {
static readonly "CODEC": $Codec<($ShopOrderModifier)>
readonly "ingredientModifier": $IngredientModifier
readonly "successMultiplier": $NumberProvider
readonly "failureMultiplier": $NumberProvider

constructor(arg0: $IngredientModifier$Type, arg1: $NumberProvider$Type, arg2: $NumberProvider$Type)

public "getMultiplier"(arg0: $ItemStack$Type, arg1: $Level$Type): $NumberProvider
public "getDescription"(arg0: $Level$Type): $List<($Component)>
public "getIngredientModifier"(): $IngredientModifier
public "getSuccessMultiplier"(): $NumberProvider
public "getFailureNumberProvider"(): $NumberProvider
public "validate"(arg0: $ValidationContext$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
get "ingredientModifier"(): $IngredientModifier
get "successMultiplier"(): $NumberProvider
get "failureNumberProvider"(): $NumberProvider
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopOrderModifier$Type = ($ShopOrderModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopOrderModifier_ = $ShopOrderModifier$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/colossal_cogwheel/$ColossalCogwheelBlock$Position" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ColossalCogwheelBlock$Position extends $StringRepresentable {

 "getSerializedName"(): string

(arg0: $Direction$Axis$Type): $BlockPos
}

export namespace $ColossalCogwheelBlock$Position {
function getRelativeControllerPosition(arg0: $Direction$Axis$Type): $BlockPos
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColossalCogwheelBlock$Position$Type = ($ColossalCogwheelBlock$Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColossalCogwheelBlock$Position_ = $ColossalCogwheelBlock$Position$Type;
}}
declare module "packages/com/petrolpark/contamination/$GenericContamination" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Contaminable, $Contaminable$Type} from "packages/com/petrolpark/contamination/$Contaminable"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Contamination, $Contamination$Type} from "packages/com/petrolpark/contamination/$Contamination"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContamination, $IContamination$Type} from "packages/com/petrolpark/contamination/$IContamination"

export class $GenericContamination extends $Contamination<(any), (any)> {

constructor()
constructor(arg0: $ListTag$Type)
constructor(arg0: $Runnable$Type)

/**
 * 
 * @deprecated
 */
public "save"(): void
/**
 * 
 * @deprecated
 */
public "getType"(): any
/**
 * 
 * @deprecated
 */
public "getContaminable"(): $Contaminable<(any), (any)>
/**
 * 
 * @deprecated
 */
public "getAmount"(): double
public static "get"(arg0: any): $Optional<($IContamination<(any), (any)>)>
public static "perpetuate"(arg0: $Stream$Type<(any)>, arg1: $Stream$Type<(any)>): void
public static "perpetuate"<OBJECT>(arg0: $Stream$Type<(OBJECT)>, arg1: $Stream$Type<(OBJECT)>, arg2: $Function$Type<(OBJECT), ($IContamination$Type<(any), (any)>)>): void
public static "perpetuate"(arg0: $Stream$Type<($ItemStack$Type)>, arg1: $Stream$Type<($FluidStack$Type)>, arg2: double, arg3: $Stream$Type<($ItemStack$Type)>, arg4: $Stream$Type<($FluidStack$Type)>): void
get "type"(): any
get "contaminable"(): $Contaminable<(any), (any)>
get "amount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericContamination$Type = ($GenericContamination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericContamination_ = $GenericContamination$Type;
}}
declare module "packages/com/petrolpark/mobeffects/$SimpleMobEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SimpleMobEffect extends $MobEffect {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMobEffect$Type = ($SimpleMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMobEffect_ = $SimpleMobEffect$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/double_cardan_shaft/$DoubleCardanShaftBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DoubleCardanShaftBlockEntity, $DoubleCardanShaftBlockEntity$Type} from "packages/com/petrolpark/petrolsparts/content/double_cardan_shaft/$DoubleCardanShaftBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DirectionalAxisKineticBlock, $DirectionalAxisKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalAxisKineticBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DoubleCardanShaftBlock extends $DirectionalAxisKineticBlock implements $IBE<($DoubleCardanShaftBlockEntity)> {
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "getBlockEntityClass"(): $Class<($DoubleCardanShaftBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public static "getBlockstateConnectingDirections"(arg0: $Direction$Type, arg1: $Direction$Type): $BlockState
public static "getDirectionsConnectedByState"(arg0: $BlockState$Type): ($Direction)[]
public static "isPositiveDirection"(arg0: $Direction$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $DoubleCardanShaftBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($DoubleCardanShaftBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($DoubleCardanShaftBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($DoubleCardanShaftBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($DoubleCardanShaftBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCardanShaftBlock$Type = ($DoubleCardanShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCardanShaftBlock_ = $DoubleCardanShaftBlock$Type;
}}
declare module "packages/com/petrolpark/client/creativemodetab/$CustomTab$ITabEntry" {
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $CustomTab$ITabEntry {

 "newLine"(): boolean
 "getSize"(): integer
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "hasSpecialRendering"(): boolean
 "getItemsToAddToSearch"(arg0: $CreativeModeTab$ItemDisplayParameters$Type): $Collection<($ItemStack)>
 "addItems"(arg0: $List$Type<($ItemStack$Type)>, arg1: $CreativeModeTab$ItemDisplayParameters$Type, arg2: $IntConsumer$Type): void
}

export namespace $CustomTab$ITabEntry {
const EMPTY: $CustomTab$ITabEntry
const LINE_BREAK: $CustomTab$ITabEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTab$ITabEntry$Type = ($CustomTab$ITabEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTab$ITabEntry_ = $CustomTab$ITabEntry$Type;
}}
declare module "packages/com/petrolpark/tube/$TubeSpline$TubePlacementResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TubeSpline$TubePlacementResult extends $Enum<($TubeSpline$TubePlacementResult)> {
static readonly "WRONG_BLOCK": $TubeSpline$TubePlacementResult
static readonly "WRONG_FACE": $TubeSpline$TubePlacementResult
static readonly "TOO_MANY_POINTS": $TubeSpline$TubePlacementResult
static readonly "TOO_LONG": $TubeSpline$TubePlacementResult
static readonly "TOO_SHORT": $TubeSpline$TubePlacementResult
static readonly "TOO_BIG": $TubeSpline$TubePlacementResult
static readonly "TOO_SHARP": $TubeSpline$TubePlacementResult
static readonly "TOO_POOR": $TubeSpline$TubePlacementResult
static readonly "POINTS_TOO_CLOSE": $TubeSpline$TubePlacementResult
static readonly "BLOCKED": $TubeSpline$TubePlacementResult
static readonly "SUCCESS": $TubeSpline$TubePlacementResult
readonly "success": boolean


public static "values"(): ($TubeSpline$TubePlacementResult)[]
public static "valueOf"(arg0: string): $TubeSpline$TubePlacementResult
public "translate"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeSpline$TubePlacementResult$Type = (("too_many_points") | ("too_big") | ("too_long") | ("blocked") | ("wrong_face") | ("too_sharp") | ("success") | ("too_poor") | ("too_short") | ("wrong_block") | ("points_too_close")) | ($TubeSpline$TubePlacementResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeSpline$TubePlacementResult_ = $TubeSpline$TubePlacementResult$Type;
}}
declare module "packages/com/petrolpark/data/advancement/$SimpleAdvancementTrigger" {
import {$CriterionTrigger$Listener, $CriterionTrigger$Listener$Type} from "packages/net/minecraft/advancements/$CriterionTrigger$Listener"
import {$SimpleAdvancementTrigger$Instance, $SimpleAdvancementTrigger$Instance$Type} from "packages/com/petrolpark/data/advancement/$SimpleAdvancementTrigger$Instance"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$PlayerAdvancements, $PlayerAdvancements$Type} from "packages/net/minecraft/server/$PlayerAdvancements"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$Type} from "packages/net/minecraft/advancements/$CriterionTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $SimpleAdvancementTrigger implements $CriterionTrigger<($SimpleAdvancementTrigger$Instance)> {

constructor(arg0: $ResourceLocation$Type)

public "createInstance"(arg0: $JsonObject$Type, arg1: $DeserializationContext$Type): $SimpleAdvancementTrigger$Instance
public "instance"(): $SimpleAdvancementTrigger$Instance
public "trigger"(arg0: $ServerPlayer$Type): void
public "getId"(): $ResourceLocation
public "addPlayerListener"(arg0: $PlayerAdvancements$Type, arg1: $CriterionTrigger$Listener$Type<($SimpleAdvancementTrigger$Instance$Type)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$Type, arg1: $CriterionTrigger$Listener$Type<($SimpleAdvancementTrigger$Instance$Type)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$Type): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAdvancementTrigger$Type = ($SimpleAdvancementTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleAdvancementTrigger_ = $SimpleAdvancementTrigger$Type;
}}
declare module "packages/com/petrolpark/util/$BlockFace" {
import {$Pair, $Pair$Type} from "packages/com/petrolpark/util/$Pair"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFace extends $Pair<($BlockPos), ($Direction)> {

constructor(arg0: $BlockPos$Type, arg1: $Direction$Type)

public static "of"(arg0: $BlockPos$Type, arg1: $Direction$Type): $BlockFace
public "getOpposite"(): $BlockFace
public "getConnectedPos"(): $BlockPos
public "getPos"(): $BlockPos
public "getCenter"(): $Vec3
public "getFace"(): $Direction
get "opposite"(): $BlockFace
get "connectedPos"(): $BlockPos
get "pos"(): $BlockPos
get "center"(): $Vec3
get "face"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$Type = ($BlockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFace_ = $BlockFace$Type;
}}
declare module "packages/com/petrolpark/tube/$TubeStructuralBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TubeStructuralBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "destroy"(): void
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "setController"(arg0: $BlockPos$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "controller"(value: $BlockPos$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeStructuralBlockEntity$Type = ($TubeStructuralBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeStructuralBlockEntity_ = $TubeStructuralBlockEntity$Type;
}}
declare module "packages/com/petrolpark/team/$ITeamBoundItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITeam, $ITeam$Type} from "packages/com/petrolpark/team/$ITeam"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITeamBoundItem<I extends $Item> {

 "bind"<T extends $ITeam<(any)>>(arg0: $ITeam$Type<(any)>, arg1: $ItemStack$Type, arg2: $Player$Type): void
 "getTeamSelectionScreenTitle"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $Component
 "trySelectTeam"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type): $InteractionResult
 "isTeamRebindable"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}

export namespace $ITeamBoundItem {
const TEAM_TAG_KEY: string
function openScreen(arg0: $Component$Type, arg1: $List$Type<($ITeam$Type<(any)>)>): void
function getTeam(arg0: $ItemStack$Type, arg1: $Level$Type): $ITeam<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeamBoundItem$Type<I> = ($ITeamBoundItem<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeamBoundItem_<I> = $ITeamBoundItem$Type<(I)>;
}}
declare module "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/google/gson/$JsonDeserializer"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/google/gson/$JsonSerializer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeRegistryObjectGSONAdapter$Builder, $ForgeRegistryObjectGSONAdapter$Builder$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter$Builder"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$JsonDeserializationContext, $JsonDeserializationContext$Type} from "packages/com/google/gson/$JsonDeserializationContext"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SerializerType, $SerializerType$Type} from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $ForgeRegistryObjectGSONAdapter<E, T extends $SerializerType<(E)>> implements $JsonDeserializer<(E)>, $JsonSerializer<(E)> {


public static "builder"<E, T extends $SerializerType<(E)>>(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>, arg1: string, arg2: string, arg3: $Function$Type<(E), (T)>): $ForgeRegistryObjectGSONAdapter$Builder<(E), (T)>
public "serialize"(arg0: E, arg1: $Type$Type, arg2: $JsonSerializationContext$Type): $JsonElement
public "deserialize"(arg0: $JsonElement$Type, arg1: $Type$Type, arg2: $JsonDeserializationContext$Type): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistryObjectGSONAdapter$Type<E, T> = ($ForgeRegistryObjectGSONAdapter<(E), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistryObjectGSONAdapter_<E, T> = $ForgeRegistryObjectGSONAdapter$Type<(E), (T)>;
}}
declare module "packages/com/petrolpark/contamination/$IContamination" {
import {$Contaminant, $Contaminant$Type} from "packages/com/petrolpark/contamination/$Contaminant"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Contaminable, $Contaminable$Type} from "packages/com/petrolpark/contamination/$Contaminable"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IContamination<OBJECT, OBJECT_STACK> {

 "has"(arg0: $Contaminant$Type): boolean
 "save"(): void
 "getType"(): OBJECT
 "contaminateAll"(arg0: $Stream$Type<($Contaminant$Type)>): boolean
 "streamAllContaminants"(): $Stream<($Contaminant)>
 "streamOrphanExtrinsicContaminants"(): $Stream<($Contaminant)>
 "streamShownAbsentContaminants"(): $Stream<($Contaminant)>
 "hasAnyContaminant"(): boolean
 "hasAnyExtrinsicContaminant"(): boolean
 "contaminate"(arg0: $Contaminant$Type): boolean
 "decontaminate"(arg0: $Contaminant$Type): boolean
 "decontaminateOnly"(arg0: $Contaminant$Type): boolean
 "fullyDecontaminate"(): boolean
 "getContaminable"(): $Contaminable<(OBJECT), (OBJECT_STACK)>
 "streamShownContaminants"(): $Stream<($Contaminant)>
 "getAmount"(): double
}

export namespace $IContamination {
function get(arg0: any): $Optional<($IContamination<(any), (any)>)>
function perpetuate(arg0: $Stream$Type<(any)>, arg1: $Stream$Type<(any)>): void
function perpetuate<OBJECT>(arg0: $Stream$Type<(OBJECT)>, arg1: $Stream$Type<(OBJECT)>, arg2: $Function$Type<(OBJECT), ($IContamination$Type<(any), (any)>)>): void
function perpetuate(arg0: $Stream$Type<($ItemStack$Type)>, arg1: $Stream$Type<($FluidStack$Type)>, arg2: double, arg3: $Stream$Type<($ItemStack$Type)>, arg4: $Stream$Type<($FluidStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContamination$Type<OBJECT, OBJECT_STACK> = ($IContamination<(OBJECT), (OBJECT_STACK)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContamination_<OBJECT, OBJECT_STACK> = $IContamination$Type<(OBJECT), (OBJECT_STACK)>;
}}
declare module "packages/com/petrolpark/team/$ITeam" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITeam$ITeamType, $ITeam$ITeamType$Type} from "packages/com/petrolpark/team/$ITeam$ITeamType"
import {$ITeamDataType, $ITeamDataType$Type} from "packages/com/petrolpark/team/data/$ITeamDataType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ITeam<T extends $ITeam<(any)>> {

 "getName"(arg0: $Level$Type): $Component
 "getType"(): $ITeam$ITeamType<(T)>
 "getTeamData"<DATA>(arg0: $ITeamDataType$Type<(any)>): DATA
 "streamMemberUsernames"(arg0: $Level$Type): $Stream<(string)>
 "getRenderedMemberList"(arg0: integer): $Component
 "isMember"(arg0: $Player$Type): boolean
 "renderIcon"(arg0: $GuiGraphics$Type): void
 "setChanged"(arg0: $Level$Type, arg1: $ITeamDataType$Type<(any)>): void
 "isNone"(): boolean
 "isAdmin"(arg0: $Player$Type): boolean
}

export namespace $ITeam {
function write<T>(arg0: T): $CompoundTag
function read(arg0: $CompoundTag$Type, arg1: $Level$Type): $ITeam<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeam$Type<T> = ($ITeam<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeam_<T> = $ITeam$Type<(T)>;
}}
declare module "packages/com/petrolpark/recipe/manualonly/$ManualOnlyShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ManualOnlyShapedRecipe, $ManualOnlyShapedRecipe$Type} from "packages/com/petrolpark/recipe/manualonly/$ManualOnlyShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ManualOnlyShapedRecipe$Serializer implements $RecipeSerializer<($ManualOnlyShapedRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ManualOnlyShapedRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ManualOnlyShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ManualOnlyShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ManualOnlyShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualOnlyShapedRecipe$Serializer$Type = ($ManualOnlyShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualOnlyShapedRecipe$Serializer_ = $ManualOnlyShapedRecipe$Serializer$Type;
}}
declare module "packages/com/petrolpark/data/reward/$IReward" {
import {$LootContextParam, $LootContextParam$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContextUser, $LootContextUser$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import {$RewardType, $RewardType$Type} from "packages/com/petrolpark/data/reward/$RewardType"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ValidationContext, $ValidationContext$Type} from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ForgeRegistryObjectGSONAdapter, $ForgeRegistryObjectGSONAdapter$Type} from "packages/com/petrolpark/data/$ForgeRegistryObjectGSONAdapter"

export interface $IReward extends $LootContextUser {

 "getName"(): $Component
 "getType"(): $RewardType
 "render"(arg0: $GuiGraphics$Type): void
 "reward"(arg0: $LootContext$Type, arg1: float): void
 "validate"(arg0: $ValidationContext$Type): void
 "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
}

export namespace $IReward {
const CODEC: $Codec<($IReward)>
function createGsonAdapter(): $ForgeRegistryObjectGSONAdapter<($IReward), ($RewardType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReward$Type = ($IReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReward_ = $IReward$Type;
}}
declare module "packages/com/petrolpark/shop/offer/order/$ShopOrder" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ShopOrderModifier, $ShopOrderModifier$Type} from "packages/com/petrolpark/shop/offer/order/$ShopOrderModifier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ShopOrder {
static readonly "EMPTY": $ShopOrder
static readonly "CODEC": $Codec<($ShopOrder)>

constructor(arg0: $Ingredient$Type, arg1: $List$Type<($ShopOrderModifier$Type)>)

public "test"(arg0: $ItemStack$Type): boolean
public "getRequiredItem"(): $Ingredient
public "getOrderModifiers"(): $List<($ShopOrderModifier)>
get "requiredItem"(): $Ingredient
get "orderModifiers"(): $List<($ShopOrderModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShopOrder$Type = ($ShopOrder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShopOrder_ = $ShopOrder$Type;
}}
declare module "packages/com/petrolpark/petrolsparts/content/differential/$DummyDifferentialBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$PetrolsPartsAdvancementBehaviour, $PetrolsPartsAdvancementBehaviour$Type} from "packages/com/petrolpark/petrolsparts/core/advancement/$PetrolsPartsAdvancementBehaviour"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DummyDifferentialBlockEntity extends $SmartBlockEntity {
 "advancementBehaviour": $PetrolsPartsAdvancementBehaviour
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyDifferentialBlockEntity$Type = ($DummyDifferentialBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyDifferentialBlockEntity_ = $DummyDifferentialBlockEntity$Type;
}}
declare module "packages/com/petrolpark/tube/$TubeSpline" {
import {$TubeSpline$TubePlacementResult, $TubeSpline$TubePlacementResult$Type} from "packages/com/petrolpark/tube/$TubeSpline$TubePlacementResult"
import {$BlockFace, $BlockFace$Type} from "packages/com/petrolpark/util/$BlockFace"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ITubeBlock, $ITubeBlock$Type} from "packages/com/petrolpark/tube/$ITubeBlock"
import {$ClampedCubicSpline, $ClampedCubicSpline$Type} from "packages/com/petrolpark/util/$ClampedCubicSpline"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $TubeSpline extends $ClampedCubicSpline {
static readonly "MAX_LENGTH": double
static readonly "MAX_VOLUME": double
static readonly "MAX_CONTROL_POINTS": integer
readonly "start": $BlockFace
readonly "end": $BlockFace
readonly "maxAngle": double
readonly "segmentRadius": double
readonly "segmentLength": double

constructor(arg0: $BlockFace$Type, arg1: $BlockFace$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $BlockFace$Type, arg1: $BlockFace$Type, arg2: $List$Type<($Vec3$Type)>, arg3: double, arg4: double, arg5: double)

public "getResult"(): $TubeSpline$TubePlacementResult
public "validate"(arg0: $Level$Type, arg1: $Player$Type, arg2: $Item$Type, arg3: $ITubeBlock$Type): void
public "recalculate"(): void
public "checkBlocked"(arg0: $Level$Type, arg1: $Consumer$Type<($BlockPos$Type)>): boolean
public "checkCanAfford"(arg0: $Player$Type, arg1: $Item$Type, arg2: $ITubeBlock$Type): boolean
public "getOccupiedVolume"(): $AABB
public "getMiddleControlPoints"(): $List<($Vec3)>
public "getBlockedPositions"(): $Set<($BlockPos)>
get "result"(): $TubeSpline$TubePlacementResult
get "occupiedVolume"(): $AABB
get "middleControlPoints"(): $List<($Vec3)>
get "blockedPositions"(): $Set<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeSpline$Type = ($TubeSpline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeSpline_ = $TubeSpline$Type;
}}
declare module "packages/com/petrolpark/shop/$Shop" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ShopOrderModifierEntry, $ShopOrderModifierEntry$Type} from "packages/com/petrolpark/shop/offer/$ShopOrderModifierEntry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ShopOffer, $ShopOffer$Type} from "packages/com/petrolpark/shop/offer/$ShopOffer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Shop$OfferGeneratorEntry, $Shop$OfferGeneratorEntry$Type} from "packages/com/petrolpark/shop/$Shop$OfferGeneratorEntry"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Shop {
static readonly "CODEC": $Codec<($Shop)>
readonly "offerGeneratorEntries": $List<($Shop$OfferGeneratorEntry)>
readonly "customerEntityTypes": $Optional<($TagKey<($EntityType<(any)>)>)>

constructor(arg0: string, arg1: $List$Type<($Shop$OfferGeneratorEntry$Type)>, arg2: $List$Type<($ShopOrderModifierEntry$Type)>, arg3: $Optional$Type<($TagKey$Type<($EntityType$Type<(any)>)>)>)

public "getName"(): $Component
public "getTranslationKey"(): string
public "getGlobalOrderModifierEntries"(): $List<($ShopOrderModifierEntry)>
public "generateOffer"(arg0: $LootContext$Type): $ShopOffer
public "getOfferGeneratorEntries"(): $List<($Shop$OfferGeneratorEntry)>
public "getCustomerEntityTypes"(): $Optional<($TagKey<($EntityType<(any)>)>)>
public "canServe"(arg0: $Entity$Type): boolean
get "name"(): $Component
get "translationKey"(): string
get "globalOrderModifierEntries"(): $List<($ShopOrderModifierEntry)>
get "offerGeneratorEntries"(): $List<($Shop$OfferGeneratorEntry)>
get "customerEntityTypes"(): $Optional<($TagKey<($EntityType<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shop$Type = ($Shop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shop_ = $Shop$Type;
}}
declare module "packages/com/petrolpark/tube/$ITubeBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITubeBlockEntity {

 "invalidateTubeRenderBoundingBox"(): void
 "afterTubeConnect"(): void
 "beforeTubeDisconnect"(): void

(): void
}

export namespace $ITubeBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeBlockEntity$Type = ($ITubeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeBlockEntity_ = $ITubeBlockEntity$Type;
}}
declare module "packages/com/petrolpark/contamination/$Contaminant" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Contaminant {
static readonly "CODEC": $Codec<($Contaminant)>
readonly "preservationProportion": double
readonly "color": integer
readonly "absentColor": integer

constructor(arg0: double, arg1: integer, arg2: integer, arg3: $List$Type<($ResourceLocation$Type)>)

public "isPreserved"(arg0: double): boolean
public "getChildren"(): $Set<($Contaminant)>
public "getName"(): $Component
public static "get"(arg0: $ResourceLocation$Type): $Contaminant
public "compareTo"(arg0: $Contaminant$Type): integer
public "getLocation"(): $ResourceLocation
public "getParents"(): $Set<($Contaminant)>
public static "getFromIntrinsicTag"(arg0: $TagKey$Type<(any)>): $Contaminant
public static "getFromShowIfAbsentTag"(arg0: $TagKey$Type<(any)>): $Contaminant
public "getPreservationProportion"(): double
public "getAbsentColor"(): integer
public "getNameColored"(): $Component
public "getAbsentName"(): $Component
public "getAbsentNameColored"(): $Component
public "getColor"(): integer
public static "getFromTag"(arg0: $TagKey$Type<(any)>, arg1: string): $Contaminant
get "children"(): $Set<($Contaminant)>
get "name"(): $Component
get "location"(): $ResourceLocation
get "parents"(): $Set<($Contaminant)>
get "preservationProportion"(): double
get "absentColor"(): integer
get "nameColored"(): $Component
get "absentName"(): $Component
get "absentNameColored"(): $Component
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Contaminant$Type = ($Contaminant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Contaminant_ = $Contaminant$Type;
}}

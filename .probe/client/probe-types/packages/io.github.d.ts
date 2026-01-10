declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$PassengerSeatRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $PassengerSeatRearAttachment extends $RearAttachment {
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "getPassengerHeightOffset"(): double
public "isRideable"(): boolean
get "passengerHeightOffset"(): double
get "rideable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassengerSeatRearAttachment$Type = ($PassengerSeatRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassengerSeatRearAttachment_ = $PassengerSeatRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$AutomobileAssemblerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
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
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AutomobileAssemblerBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "USE_CROWBAR_DIALOG": $Component
static readonly "INCOMPLETE_AUTOMOBILE_DIALOG": $Component
static readonly "POWERED": $BooleanProperty
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileAssemblerBlock$Type = ($AutomobileAssemblerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileAssemblerBlock_ = $AutomobileAssemblerBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$TooltipBlockItem" {
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

export class $TooltipBlockItem extends $BlockItem {
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

constructor(arg0: $Block$Type, arg1: $Component$Type, arg2: $Item$Properties$Type)

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
export type $TooltipBlockItem$Type = ($TooltipBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipBlockItem_ = $TooltipBlockItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$CropHarvesterFrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BaseHarvesterFrontAttachment, $BaseHarvesterFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$BaseHarvesterFrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CropHarvesterFrontAttachment extends $BaseHarvesterFrontAttachment {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "onBlockHarvested"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "canHarvest"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropHarvesterFrontAttachment$Type = ($CropHarvesterFrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropHarvesterFrontAttachment_ = $CropHarvesterFrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$TooltipItem" {
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

constructor(arg0: $Component$Type, arg1: $Item$Properties$Type)

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
declare module "packages/io/github/foundationgames/automobility/automobile/$WheelBase" {
import {$WheelBase$WheelPos, $WheelBase$WheelPos$Type} from "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelPos"

export class $WheelBase {
readonly "wheels": ($WheelBase$WheelPos)[]
readonly "wheelCount": integer

constructor(...arg0: ($WheelBase$WheelPos$Type)[])

public static "basic"(arg0: float, arg1: float): $WheelBase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WheelBase$Type = ($WheelBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WheelBase_ = $WheelBase$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CustomCreativeOutput, $CustomCreativeOutput$Type} from "packages/io/github/foundationgames/automobility/item/$CustomCreativeOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutomobileComponentItem<T extends $AutomobileComponent<(T)>> extends $Item implements $CustomCreativeOutput {
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

constructor(arg0: $Item$Properties$Type, arg1: string, arg2: string, arg3: $SimpleMapContentRegistry$Type<(T)>)

public "provideCreativeOutput"(arg0: $CreativeModeTab$Output$Type): void
public "getComponent"(arg0: $ItemStack$Type): T
public "setComponent"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "createStack"(arg0: T): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isVisible"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileComponentItem$Type<T> = ($AutomobileComponentItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileComponentItem_<T> = $AutomobileComponentItem$Type<(T)>;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WheelBase$WheelSide extends $Enum<($WheelBase$WheelSide)> {
static readonly "LEFT": $WheelBase$WheelSide
static readonly "RIGHT": $WheelBase$WheelSide


public static "values"(): ($WheelBase$WheelSide)[]
public static "valueOf"(arg0: string): $WheelBase$WheelSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WheelBase$WheelSide$Type = (("left") | ("right")) | ($WheelBase$WheelSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WheelBase$WheelSide_ = $WheelBase$WheelSide$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$FrontAttachmentItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileInteractable, $AutomobileInteractable$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileInteractable"
import {$AutomobileComponentItem, $AutomobileComponentItem$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrontAttachmentItem extends $AutomobileComponentItem<($FrontAttachmentType<(any)>)> implements $AutomobileInteractable {
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

public "interactAutomobile"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $AutomobileEntity$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrontAttachmentItem$Type = ($FrontAttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrontAttachmentItem_ = $FrontAttachmentItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BackhoeRearAttachment" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BasePlowRearAttachment, $BasePlowRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BasePlowRearAttachment"

export class $BackhoeRearAttachment extends $BasePlowRearAttachment {
static readonly "TILLABLE_BLOCKS": $List<($Block)>
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "searchHeight"(): double
public "plowResult"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockState
public "plowSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackhoeRearAttachment$Type = ($BackhoeRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackhoeRearAttachment_ = $BackhoeRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/jsonem/$PartDefinitionAccess" {
import {$CubeDefinition, $CubeDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$CubeDefinition"
import {$PartDefinition, $PartDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$PartDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $PartDefinitionAccess {

 "automobility$cuboids"(): $List<($CubeDefinition)>
 "automobility$transform"(): $PartPose
 "automobility$children"(): $Map<(string), ($PartDefinition)>
}

export namespace $PartDefinitionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartDefinitionAccess$Type = ($PartDefinitionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartDefinitionAccess_ = $PartDefinitionAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame$FrameModel" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$WheelBase, $WheelBase$Type} from "packages/io/github/foundationgames/automobility/automobile/$WheelBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AutomobileFrame$FrameModel extends $Record {

constructor(texture: $ResourceLocation$Type, modelId: $ResourceLocation$Type, wheelBase: $WheelBase$Type, lengthPx: float, seatHeight: float, enginePosBack: float, enginePosUp: float, rearAttachmentPos: float, frontAttachmentPos: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "enginePosBack"(): float
public "enginePosUp"(): float
public "rearAttachmentPos"(): float
public "frontAttachmentPos"(): float
public "texture"(): $ResourceLocation
public "modelId"(): $ResourceLocation
public "wheelBase"(): $WheelBase
public "lengthPx"(): float
public "seatHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileFrame$FrameModel$Type = ($AutomobileFrame$FrameModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileFrame$FrameModel_ = $AutomobileFrame$FrameModel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobilePrefab" {
import {$AutomobileFrame, $AutomobileFrame$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AutomobileWheel, $AutomobileWheel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel"
import {$AutomobileEngine, $AutomobileEngine$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AutomobilePrefab extends $Record {

constructor(id: $ResourceLocation$Type, frame: $AutomobileFrame$Type, wheel: $AutomobileWheel$Type, engine: $AutomobileEngine$Type)

public "frame"(): $AutomobileFrame
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "engine"(): $AutomobileEngine
public "toStack"(): $ItemStack
public "wheel"(): $AutomobileWheel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobilePrefab$Type = ($AutomobilePrefab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobilePrefab_ = $AutomobilePrefab$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BasePlowRearAttachment" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExtendableRearAttachment, $ExtendableRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$ExtendableRearAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BasePlowRearAttachment extends $ExtendableRearAttachment {
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "tick"(): void
public "setExtended"(arg0: boolean): void
public "searchHeight"(): double
public "plow"(arg0: $Vec3$Type, arg1: $ServerLevel$Type): void
public "plowResult"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockState
public "plowSound"(): $SoundEvent
set "extended"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePlowRearAttachment$Type = ($BasePlowRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePlowRearAttachment_ = $BasePlowRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$SteepSlopeBlock" {
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
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SteepSlopeBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "NORTH_SHAPE": $VoxelShape
static readonly "SOUTH_SHAPE": $VoxelShape
static readonly "EAST_SHAPE": $VoxelShape
static readonly "WEST_SHAPE": $VoxelShape
static readonly "OLD_NORTH_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_SHAPE": $VoxelShape
static readonly "OLD_EAST_SHAPE": $VoxelShape
static readonly "OLD_WEST_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "getFluidState"(arg0: $BlockState$Type): $FluidState
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
export type $SteepSlopeBlock$Type = ($SteepSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteepSlopeBlock_ = $SteepSlopeBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$DeployableRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"

export class $DeployableRearAttachment extends $RearAttachment {
readonly "type": T


public "deploy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployableRearAttachment$Type = ($DeployableRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeployableRearAttachment_ = $DeployableRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"
import {$BaseAttachment, $BaseAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$BaseAttachment"

export class $RearAttachment extends $BaseAttachment<($RearAttachmentType<(any)>)> {
readonly "type": T


public "tick"(): void
public "origin"(): $Vec3
public "pull"(arg0: $Vec3$Type): void
public "pos"(): $Vec3
public "getPassengerHeightOffset"(): double
public "scaledYawVec"(): $Vec3
public "onTrackedYawUpdated"(arg0: float): void
public static "fromNbt"(arg0: $CompoundTag$Type): $RearAttachmentType<(any)>
public "setYaw"(arg0: float): void
public "yaw"(): float
public "yaw"(arg0: float): float
public "writeNbt"(arg0: $CompoundTag$Type): void
public "readNbt"(arg0: $CompoundTag$Type): void
public "createMenu"(arg0: $ContainerLevelAccess$Type): $MenuProvider
public "isRideable"(): boolean
public "hasMenu"(): boolean
public "yawVec"(): $Vec3
get "passengerHeightOffset"(): double
get "rideable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RearAttachment$Type = ($RearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RearAttachment_ = $RearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileInteractable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export interface $AutomobileInteractable {

 "interactAutomobile"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $AutomobileEntity$Type): $InteractionResult

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $AutomobileEntity$Type): $InteractionResult
}

export namespace $AutomobileInteractable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileInteractable$Type = ($AutomobileInteractable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileInteractable_ = $AutomobileInteractable$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AutomobileEngine$EngineModel, $AutomobileEngine$EngineModel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine$EngineModel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"

export class $AutomobileEngine extends $Record implements $AutomobileComponent<($AutomobileEngine)> {
static readonly "ID": $ResourceLocation
static readonly "REGISTRY": $SimpleMapContentRegistry<($AutomobileEngine)>
static readonly "EMPTY": $AutomobileEngine
static readonly "STONE": $AutomobileEngine
static readonly "IRON": $AutomobileEngine
static readonly "COPPER": $AutomobileEngine
static readonly "GOLD": $AutomobileEngine
static readonly "DIAMOND": $AutomobileEngine
static readonly "CREATIVE": $AutomobileEngine
static readonly "STAT_TORQUE": $DisplayStat<($AutomobileEngine)>
static readonly "STAT_SPEED": $DisplayStat<($AutomobileEngine)>

constructor(id: $ResourceLocation$Type, torque: float, speed: float, sound: $Supplier$Type<($SoundEvent$Type)>, model: $AutomobileEngine$EngineModel$Type)

public "model"(): $AutomobileEngine$EngineModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<($AutomobileEngine$Type)>)>): void
public "containerId"(): $ResourceLocation
public "getTranslationKey"(): string
public "sound"(): $Supplier<($SoundEvent)>
public "speed"(): float
public "torque"(): float
public "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: $AutomobileEngine$Type): void
public "getContainerTextKey"(): string
get "empty"(): boolean
get "translationKey"(): string
get "containerTextKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEngine$Type = ($AutomobileEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEngine_ = $AutomobileEngine$Type;
}}
declare module "packages/io/github/foundationgames/automobility/mixin/$ShovelItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccess {

}

export namespace $ShovelItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccess$Type = ($ShovelItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccess_ = $ShovelItemAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SimpleMapContentRegistry$Identifiable, $SimpleMapContentRegistry$Identifiable$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry$Identifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SimpleMapContentRegistry<V extends $SimpleMapContentRegistry$Identifiable> {

constructor()

public "get"(arg0: $ResourceLocation$Type): V
public "register"(arg0: V): V
public "forEach"(arg0: $Consumer$Type<(V)>): void
public "getOrDefault"(arg0: $ResourceLocation$Type): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapContentRegistry$Type<V> = ($SimpleMapContentRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMapContentRegistry_<V> = $SimpleMapContentRegistry$Type<(V)>;
}}
declare module "packages/io/github/foundationgames/automobility/item/$SlopeBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SlopeBlockItem extends $BlockItem {
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

public "updatePlacementContext"(arg0: $BlockPlaceContext$Type): $BlockPlaceContext
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlopeBlockItem$Type = ($SlopeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlopeBlockItem_ = $SlopeBlockItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity$Displacement" {
import {$CollisionArea, $CollisionArea$Type} from "packages/io/github/foundationgames/automobility/util/duck/$CollisionArea"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WheelBase, $WheelBase$Type} from "packages/io/github/foundationgames/automobility/automobile/$WheelBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $AutomobileEntity$Displacement {
readonly "otherColliders": $Set<($CollisionArea)>

constructor()

public "tick"(arg0: $Level$Type, arg1: $AutomobileEntity$Type, arg2: $Vec3$Type, arg3: double, arg4: double): void
public "applyWheelbase"(arg0: $WheelBase$Type): void
public "getVertical"(arg0: float): float
public "getAngularX"(arg0: float): float
public "getAngularZ"(arg0: float): float
public "preTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEntity$Displacement$Type = ($AutomobileEntity$Displacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEntity$Displacement_ = $AutomobileEntity$Displacement$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$AutoMechanicTableBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoMechanicTableBlock extends $Block {
static readonly "UI_TITLE": $Component
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoMechanicTableBlock$Type = ($AutoMechanicTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoMechanicTableBlock_ = $AutoMechanicTableBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$DashPanelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltipBlockItem, $TooltipBlockItem$Type} from "packages/io/github/foundationgames/automobility/item/$TooltipBlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DashPanelItem extends $TooltipBlockItem {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DashPanelItem$Type = ($DashPanelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DashPanelItem_ = $DashPanelItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType$FrontAttachmentModel" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FrontAttachmentType$FrontAttachmentModel extends $Record {

constructor(texture: $ResourceLocation$Type, modelId: $ResourceLocation$Type, scale: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public "texture"(): $ResourceLocation
public "modelId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrontAttachmentType$FrontAttachmentModel$Type = ($FrontAttachmentType$FrontAttachmentModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrontAttachmentType$FrontAttachmentModel_ = $FrontAttachmentType$FrontAttachmentModel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/recipe/$AutoMechanicTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AutoMechanicTableRecipe implements $Recipe<($SimpleContainer)>, $Comparable<($AutoMechanicTableRecipe)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($AutoMechanicTableRecipe)>

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $Set$Type<($Ingredient$Type)>, arg3: $ItemStack$Type, arg4: integer)

public "compareTo"(arg0: $AutoMechanicTableRecipe$Type): integer
public "matches"(arg0: $SimpleContainer$Type, arg1: $Level$Type): boolean
public "forMissingIngredients"(arg0: $Container$Type, arg1: $Consumer$Type<($Ingredient$Type)>): void
public "getResultItem"(): $ItemStack
public "getCategory"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $SimpleContainer$Type): $ItemStack
public "assemble"(arg0: $SimpleContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $SimpleContainer$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "setGroup"(group: string): void
public "getGroup"(): string
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "resultItem"(): $ItemStack
get "category"(): $ResourceLocation
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoMechanicTableRecipe$Type = ($AutoMechanicTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoMechanicTableRecipe_ = $AutoMechanicTableRecipe$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileFrameItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileFrame, $AutomobileFrame$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame"
import {$AutomobileComponentItem, $AutomobileComponentItem$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutomobileFrameItem extends $AutomobileComponentItem<($AutomobileFrame)> {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileFrameItem$Type = ($AutomobileFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileFrameItem_ = $AutomobileFrameItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry$Identifiable" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SimpleMapContentRegistry$Identifiable {

 "getId"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $SimpleMapContentRegistry$Identifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapContentRegistry$Identifiable$Type = ($SimpleMapContentRegistry$Identifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleMapContentRegistry$Identifiable_ = $SimpleMapContentRegistry$Identifiable$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$SteepSlopeWithDashPanelBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$SteepSlopeBlock, $SteepSlopeBlock$Type} from "packages/io/github/foundationgames/automobility/block/$SteepSlopeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SteepSlopeWithDashPanelBlock extends $SteepSlopeBlock {
static readonly "NORTH_SHAPE": $VoxelShape
static readonly "SOUTH_SHAPE": $VoxelShape
static readonly "EAST_SHAPE": $VoxelShape
static readonly "WEST_SHAPE": $VoxelShape
static readonly "OLD_NORTH_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_SHAPE": $VoxelShape
static readonly "OLD_EAST_SHAPE": $VoxelShape
static readonly "OLD_WEST_SHAPE": $VoxelShape
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteepSlopeWithDashPanelBlock$Type = ($SteepSlopeWithDashPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteepSlopeWithDashPanelBlock_ = $SteepSlopeWithDashPanelBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/jsonem/$LayerDefinitionAccess" {
import {$MaterialDefinition, $MaterialDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$MaterialDefinition"
import {$MeshDefinition, $MeshDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$MeshDefinition"

export interface $LayerDefinitionAccess {

 "automobility$root"(): $MeshDefinition
 "automobility$texture"(): $MaterialDefinition
}

export namespace $LayerDefinitionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerDefinitionAccess$Type = ($LayerDefinitionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerDefinitionAccess_ = $LayerDefinitionAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GrassCutterFrontAttachment, $GrassCutterFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$GrassCutterFrontAttachment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FrontAttachmentType$FrontAttachmentModel, $FrontAttachmentType$FrontAttachmentModel$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType$FrontAttachmentModel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CropHarvesterFrontAttachment, $CropHarvesterFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$CropHarvesterFrontAttachment"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$MobControllerFrontAttachment, $MobControllerFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$MobControllerFrontAttachment"
import {$EmptyFrontAttachment, $EmptyFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$EmptyFrontAttachment"

export class $FrontAttachmentType<T extends $FrontAttachment> extends $Record implements $AutomobileComponent<($FrontAttachmentType<(any)>)> {
static readonly "ID": $ResourceLocation
static readonly "REGISTRY": $SimpleMapContentRegistry<($FrontAttachmentType<(any)>)>
static readonly "EMPTY": $FrontAttachmentType<($EmptyFrontAttachment)>
static readonly "MOB_CONTROLLER": $FrontAttachmentType<($MobControllerFrontAttachment)>
static readonly "CROP_HARVESTER": $FrontAttachmentType<($CropHarvesterFrontAttachment)>
static readonly "GRASS_CUTTER": $FrontAttachmentType<($GrassCutterFrontAttachment)>

constructor(id: $ResourceLocation$Type, arg1: $BiFunction$Type<($FrontAttachmentType$Type<(T)>), ($AutomobileEntity$Type), (T)>, model: $FrontAttachmentType$FrontAttachmentModel$Type)

public "model"(): $FrontAttachmentType$FrontAttachmentModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "constructor"(): $BiFunction<($FrontAttachmentType<(T)>), ($AutomobileEntity), (T)>
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<($FrontAttachmentType$Type<(any)>)>)>): void
public "containerId"(): $ResourceLocation
public "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: $FrontAttachmentType$Type<(any)>): void
public "getContainerTextKey"(): string
get "empty"(): boolean
get "containerTextKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrontAttachmentType$Type<T> = ($FrontAttachmentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrontAttachmentType_<T> = $FrontAttachmentType$Type<(T)>;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StatContainer, $StatContainer$Type} from "packages/io/github/foundationgames/automobility/automobile/$StatContainer"
import {$SimpleMapContentRegistry$Identifiable, $SimpleMapContentRegistry$Identifiable$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry$Identifiable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"

export interface $AutomobileComponent<T extends $AutomobileComponent<(T)>> extends $SimpleMapContentRegistry$Identifiable, $StatContainer<(T)> {

 "isEmpty"(): boolean
 "getId"(): $ResourceLocation
 "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: T): void
 "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<(T)>)>): void
 "getContainerTextKey"(): string
 "containerId"(): $ResourceLocation
}

export namespace $AutomobileComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileComponent$Type<T> = ($AutomobileComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileComponent_<T> = $AutomobileComponent$Type<(T)>;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/jsonem/$MaterialDefinitionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MaterialDefinitionAccess {

 "automobility$width"(): integer
 "automobility$height"(): integer
}

export namespace $MaterialDefinitionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialDefinitionAccess$Type = ($MaterialDefinitionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialDefinitionAccess_ = $MaterialDefinitionAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$StatContainer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $StatContainer<C extends $StatContainer<(C)>> {

 "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: C): void
 "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<(C)>)>): void
 "getContainerTextKey"(): string
 "containerId"(): $ResourceLocation
}

export namespace $StatContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatContainer$Type<C> = ($StatContainer<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatContainer_<C> = $StatContainer$Type<(C)>;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/$BlockColorsAccess" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockColorsAccess {

 "automobility$getForgeColorMap"(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>

(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsAccess$Type = ($BlockColorsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsAccess_ = $BlockColorsAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BlockRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"

export class $BlockRearAttachment extends $RearAttachment {
static readonly "TITLE_CRAFTING": $Component
static readonly "TITLE_LOOM": $Component
static readonly "TITLE_CARTOGRAPHY": $Component
static readonly "TITLE_SMITHING": $Component
static readonly "TITLE_GRINDSTONE": $Component
static readonly "TITLE_STONECUTTER": $Component
readonly "block": $BlockState
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type, arg2: $BlockState$Type, arg3: $BiFunction$Type<($ContainerLevelAccess$Type), ($BlockRearAttachment$Type), ($MenuProvider$Type)>)

public static "cartographyTable"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "smithingTable"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "autoMechanicTable"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "stonecutter"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "craftingTable"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "grindstone"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public static "loom"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BlockRearAttachment
public "createMenu"(arg0: $ContainerLevelAccess$Type): $MenuProvider
public "hasMenu"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRearAttachment$Type = ($BlockRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRearAttachment_ = $BlockRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$MobControllerFrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobControllerFrontAttachment extends $FrontAttachment {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "canDrive"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobControllerFrontAttachment$Type = ($MobControllerFrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobControllerFrontAttachment_ = $MobControllerFrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$EmptyFrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $EmptyFrontAttachment extends $FrontAttachment {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyFrontAttachment$Type = ($EmptyFrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyFrontAttachment_ = $EmptyFrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$LaunchGelBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $LaunchGelBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "canExistAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaunchGelBlock$Type = ($LaunchGelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaunchGelBlock_ = $LaunchGelBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/recipe/$AutoMechanicTableRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AutoMechanicTableRecipe, $AutoMechanicTableRecipe$Type} from "packages/io/github/foundationgames/automobility/recipe/$AutoMechanicTableRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AutoMechanicTableRecipeSerializer implements $RecipeSerializer<($AutoMechanicTableRecipe)> {
static readonly "INSTANCE": $AutoMechanicTableRecipeSerializer

constructor()

public static "autoComponentStackFromJson"(arg0: $JsonObject$Type): $ItemStack
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AutoMechanicTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AutoMechanicTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AutoMechanicTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AutoMechanicTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoMechanicTableRecipeSerializer$Type = ($AutoMechanicTableRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoMechanicTableRecipeSerializer_ = $AutoMechanicTableRecipeSerializer$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileWheelItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileComponentItem, $AutomobileComponentItem$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AutomobileWheel, $AutomobileWheel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutomobileWheelItem extends $AutomobileComponentItem<($AutomobileWheel)> {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileWheelItem$Type = ($AutomobileWheelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileWheelItem_ = $AutomobileWheelItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$GrassCutterFrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BaseHarvesterFrontAttachment, $BaseHarvesterFrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$BaseHarvesterFrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GrassCutterFrontAttachment extends $BaseHarvesterFrontAttachment {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "onBlockHarvested"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "canHarvest"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrassCutterFrontAttachment$Type = ($GrassCutterFrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrassCutterFrontAttachment_ = $GrassCutterFrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"
import {$BlockRearAttachment, $BlockRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BlockRearAttachment"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$PassengerSeatRearAttachment, $PassengerSeatRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$PassengerSeatRearAttachment"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$RearAttachmentType$RearAttachmentModel, $RearAttachmentType$RearAttachmentModel$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType$RearAttachmentModel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BannerPostRearAttachment, $BannerPostRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BannerPostRearAttachment"
import {$BackhoeRearAttachment, $BackhoeRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BackhoeRearAttachment"
import {$PaverRearAttachment, $PaverRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$PaverRearAttachment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EmptyRearAttachment, $EmptyRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$EmptyRearAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $RearAttachmentType<T extends $RearAttachment> extends $Record implements $AutomobileComponent<($RearAttachmentType<(any)>)> {
static readonly "ID": $ResourceLocation
static readonly "REGISTRY": $SimpleMapContentRegistry<($RearAttachmentType<(any)>)>
static readonly "EMPTY": $RearAttachmentType<($EmptyRearAttachment)>
static readonly "PASSENGER_SEAT": $RearAttachmentType<($PassengerSeatRearAttachment)>
static readonly "CRAFTING_TABLE": $RearAttachmentType<($BlockRearAttachment)>
static readonly "LOOM": $RearAttachmentType<($BlockRearAttachment)>
static readonly "CARTOGRAPHY_TABLE": $RearAttachmentType<($BlockRearAttachment)>
static readonly "SMITHING_TABLE": $RearAttachmentType<($BlockRearAttachment)>
static readonly "GRINDSTONE": $RearAttachmentType<($BlockRearAttachment)>
static readonly "STONECUTTER": $RearAttachmentType<($BlockRearAttachment)>
static readonly "AUTO_MECHANIC_TABLE": $RearAttachmentType<($BlockRearAttachment)>
static readonly "CHEST": $RearAttachmentType<($BlockRearAttachment)>
static readonly "ENDER_CHEST": $RearAttachmentType<($BlockRearAttachment)>
static readonly "SADDLED_BARREL": $RearAttachmentType<($BlockRearAttachment)>
static readonly "BANNER_POST": $RearAttachmentType<($BannerPostRearAttachment)>
static readonly "BACKHOE": $RearAttachmentType<($BackhoeRearAttachment)>
static readonly "PAVER": $RearAttachmentType<($PaverRearAttachment)>

constructor(id: $ResourceLocation$Type, arg1: $BiFunction$Type<($RearAttachmentType$Type<(T)>), ($AutomobileEntity$Type), (T)>, model: $RearAttachmentType$RearAttachmentModel$Type)

public "model"(): $RearAttachmentType$RearAttachmentModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "constructor"(): $BiFunction<($RearAttachmentType<(T)>), ($AutomobileEntity), (T)>
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<($RearAttachmentType$Type<(any)>)>)>): void
public "containerId"(): $ResourceLocation
public "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: $RearAttachmentType$Type<(any)>): void
public "getContainerTextKey"(): string
get "empty"(): boolean
get "containerTextKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RearAttachmentType$Type<T> = ($RearAttachmentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RearAttachmentType_<T> = $RearAttachmentType$Type<(T)>;
}}
declare module "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AutomobileEntity$Displacement, $AutomobileEntity$Displacement$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity$Displacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity$MoveFunction, $Entity$MoveFunction$Type} from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundAddEntityPacket"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MoverType, $MoverType$Type} from "packages/net/minecraft/world/entity/$MoverType"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AutomobileEngine, $AutomobileEngine$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"
import {$RenderableAutomobile, $RenderableAutomobile$Type} from "packages/io/github/foundationgames/automobility/automobile/render/$RenderableAutomobile"
import {$EntityWithInventory, $EntityWithInventory$Type} from "packages/io/github/foundationgames/automobility/entity/$EntityWithInventory"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CollisionArea, $CollisionArea$Type} from "packages/io/github/foundationgames/automobility/util/duck/$CollisionArea"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AutomobileFrame, $AutomobileFrame$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$AutomobileWheel, $AutomobileWheel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $AutomobileEntity extends $Entity implements $RenderableAutomobile, $EntityWithInventory {
static "engineSound": $Consumer<($AutomobileEntity)>
static "skidSound": $Consumer<($AutomobileEntity)>
static readonly "SMALL_TURBO_TIME": integer
static readonly "MEDIUM_TURBO_TIME": integer
static readonly "LARGE_TURBO_TIME": integer
static readonly "TERMINAL_VELOCITY": float
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "vehicle": $Entity
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getTime"(): long
public "getFrame"(): $AutomobileFrame
public "readSyncToClientData"(arg0: $FriendlyByteBuf$Type): void
public "readCompactedInputData"(arg0: byte): void
public "getSteering"(arg0: float): float
public "getWheelAngle"(arg0: float): float
public "getBoostSpeed"(arg0: float): float
public "getSuspensionBounce"(arg0: float): float
public "engineRunning"(): boolean
public "getTurboCharge"(): integer
public "getBoostTimer"(): integer
public "getEffectiveSpeed"(): double
public "forNearbyPlayers"(arg0: integer, arg1: boolean, arg2: $Consumer$Type<($ServerPlayer$Type)>): void
public "hasSpaceForPassengers"(): boolean
public "positionTrackingTick"(): void
public "collisionStateTick"(): void
public "movementTick"(): void
public "postMovementTick"(): void
public "provideMobDriverInputs"(arg0: $Mob$Type): void
public "destroyAutomobile"(arg0: boolean, arg1: $Entity$RemovalReason$Type): void
public "displacementTick"(arg0: boolean): void
public "asPrefabItem"(): $ItemStack
public "getDisplacement"(): $AutomobileEntity$Displacement
public "createDriftParticles"(): void
public "getAutomobileYaw"(arg0: float): float
public "getRearAttachmentYaw"(arg0: float): float
public "getStandStillTime"(): float
public "destroyRearAttachment"(arg0: boolean): void
public "destroyFrontAttachment"(arg0: boolean): void
public "runOverEntities"(arg0: $Vec3$Type): void
public "accumulateCollisionAreas"(arg0: $Collection$Type<($CollisionArea$Type)>): void
public "automobileOnGround"(): boolean
public "getFrontAttachment"(): $FrontAttachment
public "setFrontAttachment"<T extends $FrontAttachment>(arg0: $FrontAttachmentType$Type<(T)>): void
public "getRearAttachment"(): $RearAttachment
public "setRearAttachment"<T extends $RearAttachment>(arg0: $RearAttachmentType$Type<(T)>): void
public "debrisColor"(): $Vector3f
public "writeSyncToClientData"(arg0: $FriendlyByteBuf$Type): void
public "compactInputData"(): byte
public "getTrackedRearAttachmentYaw"(): float
public "getTrackedRearAttachmentAnimation"(): float
public "getTrackedFrontAttachmentAnimation"(): float
public "setTrackedRearAttachmentYaw"(arg0: float): void
public "setTrackedRearAttachmentAnimation"(arg0: float): void
public "setTrackedFrontAttachmentAnimation"(arg0: float): void
public "getControllingPassenger"(): $LivingEntity
public "provideClientInput"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): void
public "hasInventory"(): boolean
public "openInventory"(arg0: $Player$Type): void
public "setComponents"(arg0: $AutomobileFrame$Type, arg1: $AutomobileWheel$Type, arg2: $AutomobileEngine$Type): void
public "playHitSound"(arg0: $Vec3$Type): void
public "canCollideWith"(arg0: $Entity$Type): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$Type): boolean
public "getEngine"(): $AutomobileEngine
public "move"(arg0: $MoverType$Type, arg1: $Vec3$Type): void
public "tick"(): void
public "boost"(arg0: float, arg1: integer): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$Type): void
public "getPickResult"(): $ItemStack
public "isPushable"(): boolean
public "isPickable"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "interact"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "canBeCollidedWith"(): boolean
public "positionRider"(arg0: $Entity$Type, arg1: $Entity$MoveFunction$Type): void
public "getPassengersRidingOffset"(): double
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer, arg6: boolean): void
public "markDirty"(): void
public "setSpeed"(arg0: float, arg1: float): void
public "bounce"(): void
public "getWheels"(): $AutomobileWheel
public "getHSpeed"(): float
public "getVSpeed"(): float
public "debris"(): boolean
public "isDrifting"(): boolean
public "setInputs"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): void
public "getHeadPos"(): $Vec3
public "getTailPos"(): $Vec3
public "burningOut"(): boolean
public "getRearAttachmentType"(): $RearAttachmentType<(any)>
public "getFrontAttachmentType"(): $FrontAttachmentType<(any)>
public "getWheelCount"(): integer
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "time"(): long
get "frame"(): $AutomobileFrame
get "turboCharge"(): integer
get "boostTimer"(): integer
get "effectiveSpeed"(): double
get "displacement"(): $AutomobileEntity$Displacement
get "standStillTime"(): float
get "frontAttachment"(): $FrontAttachment
set "frontAttachment"(value: $FrontAttachmentType$Type<(T)>)
get "rearAttachment"(): $RearAttachment
set "rearAttachment"(value: $RearAttachmentType$Type<(T)>)
get "trackedRearAttachmentYaw"(): float
get "trackedRearAttachmentAnimation"(): float
get "trackedFrontAttachmentAnimation"(): float
set "trackedRearAttachmentYaw"(value: float)
set "trackedRearAttachmentAnimation"(value: float)
set "trackedFrontAttachmentAnimation"(value: float)
get "controllingPassenger"(): $LivingEntity
get "engine"(): $AutomobileEngine
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "pickResult"(): $ItemStack
get "pushable"(): boolean
get "pickable"(): boolean
get "passengersRidingOffset"(): double
get "wheels"(): $AutomobileWheel
get "hSpeed"(): float
get "vSpeed"(): float
get "drifting"(): boolean
get "headPos"(): $Vec3
get "tailPos"(): $Vec3
get "rearAttachmentType"(): $RearAttachmentType<(any)>
get "frontAttachmentType"(): $FrontAttachmentType<(any)>
get "wheelCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEntity$Type = ($AutomobileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEntity_ = $AutomobileEntity$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$ExtendableRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DeployableRearAttachment, $DeployableRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$DeployableRearAttachment"

export class $ExtendableRearAttachment extends $DeployableRearAttachment {
readonly "type": T


public "tick"(): void
public "onTrackedAnimationUpdated"(arg0: float): void
public "updatePacketRequested"(arg0: $ServerPlayer$Type): void
public "extendAnimation"(arg0: float): float
public "setExtended"(arg0: boolean): void
public "extended"(): boolean
public "writeNbt"(arg0: $CompoundTag$Type): void
public "readNbt"(arg0: $CompoundTag$Type): void
public "deploy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendableRearAttachment$Type = ($ExtendableRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendableRearAttachment_ = $ExtendableRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$PaverRearAttachment" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BasePlowRearAttachment, $BasePlowRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BasePlowRearAttachment"

export class $PaverRearAttachment extends $BasePlowRearAttachment {
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "searchHeight"(): double
public "plowResult"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockState
public "plowSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaverRearAttachment$Type = ($PaverRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaverRearAttachment_ = $PaverRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$OffRoadBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $OffRoadBlock extends $Block {
static readonly "ONE_LAYER_SHAPE": $VoxelShape
static readonly "TWO_LAYER_SHAPE": $VoxelShape
static readonly "THREE_LAYER_SHAPE": $VoxelShape
static readonly "LAYERS": $IntegerProperty
readonly "color": $Vector3f
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Vector3f$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffRoadBlock$Type = ($OffRoadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffRoadBlock_ = $OffRoadBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/util/duck/$CollisionArea" {
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CollisionArea {

 "isPointInside"(arg0: double, arg1: double, arg2: double): boolean
 "boxIntersects"(arg0: $AABB$Type): boolean
 "highestY"(arg0: double, arg1: double, arg2: double): double
}

export namespace $CollisionArea {
function entity(arg0: $Entity$Type): $CollisionArea
function box(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $CollisionArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionArea$Type = ($CollisionArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollisionArea_ = $CollisionArea$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$BaseHarvesterFrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseHarvesterFrontAttachment extends $FrontAttachment {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "tick"(): void
public "onBlockHarvested"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "harvest"(arg0: $Vec3$Type, arg1: $ServerLevel$Type): void
public "canHarvest"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseHarvesterFrontAttachment$Type = ($BaseHarvesterFrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseHarvesterFrontAttachment_ = $BaseHarvesterFrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel$Ability" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AutomobileWheel$Ability extends $Enum<($AutomobileWheel$Ability)> {


public static "values"(): ($AutomobileWheel$Ability)[]
public static "valueOf"(arg0: string): $AutomobileWheel$Ability
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileWheel$Ability$Type = (never) | ($AutomobileWheel$Ability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileWheel$Ability_ = $AutomobileWheel$Ability$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel$WheelModel" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AutomobileWheel$WheelModel extends $Record {

constructor(radius: float, width: float, texture: $ResourceLocation$Type, modelId: $ResourceLocation$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "width"(): float
public "radius"(): float
public "modelId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileWheel$WheelModel$Type = ($AutomobileWheel$WheelModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileWheel$WheelModel_ = $AutomobileWheel$WheelModel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$CustomCreativeOutput" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

export interface $CustomCreativeOutput {

 "provideCreativeOutput"(arg0: $CreativeModeTab$Output$Type): void

(arg0: $CreativeModeTab$Output$Type): void
}

export namespace $CustomCreativeOutput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomCreativeOutput$Type = ($CustomCreativeOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomCreativeOutput_ = $CustomCreativeOutput$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine$ExhaustPos" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $AutomobileEngine$ExhaustPos extends $Record {

constructor(x: float, y: float, z: float, pitch: float, yaw: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): float
public "z"(): float
public "y"(): float
public "yaw"(): float
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEngine$ExhaustPos$Type = ($AutomobileEngine$ExhaustPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEngine$ExhaustPos_ = $AutomobileEngine$ExhaustPos$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$SlopeBlock" {
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

export class $SlopeBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "NORTH_BOTTOM_SHAPE": $VoxelShape
static readonly "SOUTH_BOTTOM_SHAPE": $VoxelShape
static readonly "EAST_BOTTOM_SHAPE": $VoxelShape
static readonly "WEST_BOTTOM_SHAPE": $VoxelShape
static readonly "NORTH_TOP_SHAPE": $VoxelShape
static readonly "SOUTH_TOP_SHAPE": $VoxelShape
static readonly "EAST_TOP_SHAPE": $VoxelShape
static readonly "WEST_TOP_SHAPE": $VoxelShape
static readonly "OLD_NORTH_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_EAST_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_WEST_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_NORTH_TOP_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_TOP_SHAPE": $VoxelShape
static readonly "OLD_EAST_TOP_SHAPE": $VoxelShape
static readonly "OLD_WEST_TOP_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public static "slopeStep"(arg0: $Direction$Type, arg1: double): $VoxelShape
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
export type $SlopeBlock$Type = ($SlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlopeBlock_ = $SlopeBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AutomobileFrame$FrameModel, $AutomobileFrame$FrameModel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame$FrameModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"

export class $AutomobileFrame extends $Record implements $AutomobileComponent<($AutomobileFrame)> {
static readonly "ID": $ResourceLocation
static readonly "REGISTRY": $SimpleMapContentRegistry<($AutomobileFrame)>
static readonly "EMPTY": $AutomobileFrame
static readonly "WOODEN_MOTORCAR": $AutomobileFrame
static readonly "COPPER_MOTORCAR": $AutomobileFrame
static readonly "STEEL_MOTORCAR": $AutomobileFrame
static readonly "GOLDEN_MOTORCAR": $AutomobileFrame
static readonly "BEJEWELED_MOTORCAR": $AutomobileFrame
static readonly "STANDARD_WHITE": $AutomobileFrame
static readonly "STANDARD_ORANGE": $AutomobileFrame
static readonly "STANDARD_MAGENTA": $AutomobileFrame
static readonly "STANDARD_LIGHT_BLUE": $AutomobileFrame
static readonly "STANDARD_YELLOW": $AutomobileFrame
static readonly "STANDARD_LIME": $AutomobileFrame
static readonly "STANDARD_PINK": $AutomobileFrame
static readonly "STANDARD_GRAY": $AutomobileFrame
static readonly "STANDARD_LIGHT_GRAY": $AutomobileFrame
static readonly "STANDARD_CYAN": $AutomobileFrame
static readonly "STANDARD_PURPLE": $AutomobileFrame
static readonly "STANDARD_BLUE": $AutomobileFrame
static readonly "STANDARD_BROWN": $AutomobileFrame
static readonly "STANDARD_GREEN": $AutomobileFrame
static readonly "STANDARD_RED": $AutomobileFrame
static readonly "STANDARD_BLACK": $AutomobileFrame
static readonly "AMETHYST_RICKSHAW": $AutomobileFrame
static readonly "QUARTZ_RICKSHAW": $AutomobileFrame
static readonly "PRISMARINE_RICKSHAW": $AutomobileFrame
static readonly "ECHO_RICKSHAW": $AutomobileFrame
static readonly "RED_TRACTOR": $AutomobileFrame
static readonly "YELLOW_TRACTOR": $AutomobileFrame
static readonly "GREEN_TRACTOR": $AutomobileFrame
static readonly "BLUE_TRACTOR": $AutomobileFrame
static readonly "SHOPPING_CART": $AutomobileFrame
static readonly "C_ARR": $AutomobileFrame
static readonly "PINEAPPLE": $AutomobileFrame
static readonly "STAT_WEIGHT": $DisplayStat<($AutomobileFrame)>

constructor(id: $ResourceLocation$Type, weight: float, model: $AutomobileFrame$FrameModel$Type)

public "model"(): $AutomobileFrame$FrameModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<($AutomobileFrame$Type)>)>): void
public "weight"(): float
public "containerId"(): $ResourceLocation
public "getTranslationKey"(): string
public "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: $AutomobileFrame$Type): void
public "getContainerTextKey"(): string
get "empty"(): boolean
get "translationKey"(): string
get "containerTextKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileFrame$Type = ($AutomobileFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileFrame_ = $AutomobileFrame$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BannerPostRearAttachment" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$BannerPattern, $BannerPattern$Type} from "packages/net/minecraft/world/level/block/entity/$BannerPattern"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $BannerPostRearAttachment extends $RearAttachment {
readonly "inventory": $Container
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "erase"(): void
public "getPatterns"(): $List<($Pair<($Holder<($BannerPattern)>), ($DyeColor)>)>
public "updatePacketRequested"(arg0: $ServerPlayer$Type): void
public "getBaseColor"(): $DyeColor
public "setFromItem"(arg0: $ItemStack$Type): void
public "sendPacket"(): void
public "writeNbt"(arg0: $CompoundTag$Type): void
public "readNbt"(arg0: $CompoundTag$Type): void
public "createMenu"(arg0: $ContainerLevelAccess$Type): $MenuProvider
public "onRemoved"(): void
public "hasMenu"(): boolean
public "putToNbt"(arg0: $CompoundTag$Type): void
public "setFromNbt"(arg0: $CompoundTag$Type): void
get "patterns"(): $List<($Pair<($Holder<($BannerPattern)>), ($DyeColor)>)>
get "baseColor"(): $DyeColor
set "fromItem"(value: $ItemStack$Type)
set "fromNbt"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BannerPostRearAttachment$Type = ($BannerPostRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BannerPostRearAttachment_ = $BannerPostRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BaseAttachment, $BaseAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$BaseAttachment"

export class $FrontAttachment extends $BaseAttachment<($FrontAttachmentType<(any)>)> {
readonly "type": T

constructor(arg0: $FrontAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "pos"(): $Vec3
public "dropOrTransfer"(arg0: $ItemStack$Type, arg1: $Vec3$Type): void
public static "fromNbt"(arg0: $CompoundTag$Type): $FrontAttachmentType<(any)>
public "writeNbt"(arg0: $CompoundTag$Type): void
public "readNbt"(arg0: $CompoundTag$Type): void
public "canDrive"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrontAttachment$Type = ($FrontAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrontAttachment_ = $FrontAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$EmptyRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $EmptyRearAttachment extends $RearAttachment {
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type)

public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyRearAttachment$Type = ($EmptyRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyRearAttachment_ = $EmptyRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/jsonem/$CubeDeformationAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CubeDeformationAccess {

 "automobility$radiusX"(): float
 "automobility$radiusY"(): float
 "automobility$radiusZ"(): float
}

export namespace $CubeDeformationAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeDeformationAccess$Type = ($CubeDeformationAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CubeDeformationAccess_ = $CubeDeformationAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$SteepSlopeBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SteepSlopeBlockItem extends $BlockItem {
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

public "updatePlacementContext"(arg0: $BlockPlaceContext$Type): $BlockPlaceContext
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteepSlopeBlockItem$Type = ($SteepSlopeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteepSlopeBlockItem_ = $SteepSlopeBlockItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/entity/$EntityWithInventory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $EntityWithInventory {

 "hasInventory"(): boolean
 "openInventory"(arg0: $Player$Type): void
}

export namespace $EntityWithInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWithInventory$Type = ($EntityWithInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityWithInventory_ = $EntityWithInventory$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelPos" {
import {$WheelBase$WheelEnd, $WheelBase$WheelEnd$Type} from "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelEnd"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$WheelBase$WheelSide, $WheelBase$WheelSide$Type} from "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelSide"

export class $WheelBase$WheelPos extends $Record {

constructor(forward: float, right: float, scale: float, yaw: float, end: $WheelBase$WheelEnd$Type, side: $WheelBase$WheelSide$Type)

public "right"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public "end"(): $WheelBase$WheelEnd
public "side"(): $WheelBase$WheelSide
public "forward"(): float
public "yaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WheelBase$WheelPos$Type = ($WheelBase$WheelPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WheelBase$WheelPos_ = $WheelBase$WheelPos$Type;
}}
declare module "packages/io/github/foundationgames/automobility/forge/mixin/jsonem/$CubeDefinitionAccess" {
import {$UVPair, $UVPair$Type} from "packages/net/minecraft/client/model/geom/builders/$UVPair"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$CubeDeformation, $CubeDeformation$Type} from "packages/net/minecraft/client/model/geom/builders/$CubeDeformation"

export interface $CubeDefinitionAccess {

 "automobility$name"(): string
 "automobility$offset"(): $Vector3f
 "automobility$dimensions"(): $Vector3f
 "automobility$dilation"(): $CubeDeformation
 "automobility$mirror"(): boolean
 "automobility$uv"(): $UVPair
 "automobility$uvScale"(): $UVPair
}

export namespace $CubeDefinitionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeDefinitionAccess$Type = ($CubeDefinitionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CubeDefinitionAccess_ = $CubeDefinitionAccess$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$WheelBase$WheelEnd" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WheelBase$WheelEnd extends $Enum<($WheelBase$WheelEnd)> {
static readonly "FRONT": $WheelBase$WheelEnd
static readonly "BACK": $WheelBase$WheelEnd


public static "values"(): ($WheelBase$WheelEnd)[]
public static "valueOf"(arg0: string): $WheelBase$WheelEnd
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WheelBase$WheelEnd$Type = (("back") | ("front")) | ($WheelBase$WheelEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WheelBase$WheelEnd_ = $WheelBase$WheelEnd$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$DashPanelBlock" {
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
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $DashPanelBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "POWERED": $BooleanProperty
static readonly "LEFT": $BooleanProperty
static readonly "RIGHT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SHAPE": $VoxelShape
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

public static "onCollideWithDashPanel"(arg0: $BlockState$Type, arg1: $Entity$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
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
export type $DashPanelBlock$Type = ($DashPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DashPanelBlock_ = $DashPanelBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BaseChestRearAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$ChestLidController, $ChestLidController$Type} from "packages/net/minecraft/world/level/block/entity/$ChestLidController"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ContainerLevelAccess, $ContainerLevelAccess$Type} from "packages/net/minecraft/world/inventory/$ContainerLevelAccess"
import {$BlockRearAttachment, $BlockRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BlockRearAttachment"

export class $BaseChestRearAttachment extends $BlockRearAttachment {
static readonly "TITLE_CHEST": $Component
static readonly "TITLE_ENDER_CHEST": $Component
static readonly "TITLE_BARREL": $Component
readonly "lidAnimator": $ChestLidController
static readonly "TITLE_CRAFTING": $Component
static readonly "TITLE_LOOM": $Component
static readonly "TITLE_CARTOGRAPHY": $Component
static readonly "TITLE_SMITHING": $Component
static readonly "TITLE_GRINDSTONE": $Component
static readonly "TITLE_STONECUTTER": $Component
readonly "block": $BlockState
readonly "type": T

constructor(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type, arg2: $BlockState$Type, arg3: $BiFunction$Type<($ContainerLevelAccess$Type), ($BlockRearAttachment$Type), ($MenuProvider$Type)>)

public "tick"(): void
public "close"(arg0: $Player$Type): void
public "open"(arg0: $Player$Type): void
public "onTrackedAnimationUpdated"(arg0: float): void
public static "saddledBarrel"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BaseChestRearAttachment
public static "chest"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BaseChestRearAttachment
public static "enderChest"(arg0: $RearAttachmentType$Type<(any)>, arg1: $AutomobileEntity$Type): $BaseChestRearAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseChestRearAttachment$Type = ($BaseChestRearAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseChestRearAttachment_ = $BaseChestRearAttachment$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileEngineItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileComponentItem, $AutomobileComponentItem$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AutomobileEngine, $AutomobileEngine$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutomobileEngineItem extends $AutomobileComponentItem<($AutomobileEngine)> {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEngineItem$Type = ($AutomobileEngineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEngineItem_ = $AutomobileEngineItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/util/duck/$EnderChestContainerDuck" {
import {$PlayerEnderChestContainer, $PlayerEnderChestContainer$Type} from "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer"
import {$BaseChestRearAttachment, $BaseChestRearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$BaseChestRearAttachment"

export interface $EnderChestContainerDuck {

 "automobility$setActiveAttachment"(arg0: $BaseChestRearAttachment$Type): void

(arg0: $PlayerEnderChestContainer$Type): $EnderChestContainerDuck
}

export namespace $EnderChestContainerDuck {
function of(arg0: $PlayerEnderChestContainer$Type): $EnderChestContainerDuck
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderChestContainerDuck$Type = ($EnderChestContainerDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderChestContainerDuck_ = $EnderChestContainerDuck$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/render/$RenderableAutomobile" {
import {$AutomobileFrame, $AutomobileFrame$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileFrame"
import {$RearAttachment, $RearAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/rear/$RearAttachment"
import {$FrontAttachmentType, $FrontAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$FrontAttachmentType"
import {$AutomobileEngine, $AutomobileEngine$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine"
import {$AutomobileWheel, $AutomobileWheel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$FrontAttachment, $FrontAttachment$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/front/$FrontAttachment"

export interface $RenderableAutomobile {

 "getTime"(): long
 "getFrame"(): $AutomobileFrame
 "getSteering"(arg0: float): float
 "getWheelAngle"(arg0: float): float
 "getSuspensionBounce"(arg0: float): float
 "engineRunning"(): boolean
 "getTurboCharge"(): integer
 "getBoostTimer"(): integer
 "getAutomobileYaw"(arg0: float): float
 "getRearAttachmentYaw"(arg0: float): float
 "getRearAttachmentType"(): $RearAttachmentType<(any)>
 "getFrontAttachmentType"(): $FrontAttachmentType<(any)>
 "automobileOnGround"(): boolean
 "getWheelCount"(): integer
 "getFrontAttachment"(): $FrontAttachment
 "getRearAttachment"(): $RearAttachment
 "debrisColor"(): $Vector3f
 "getEngine"(): $AutomobileEngine
 "getWheels"(): $AutomobileWheel
 "debris"(): boolean
}

export namespace $RenderableAutomobile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableAutomobile$Type = ($RenderableAutomobile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableAutomobile_ = $RenderableAutomobile$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$RearAttachmentItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$RearAttachmentType, $RearAttachmentType$Type} from "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AutomobileInteractable, $AutomobileInteractable$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileInteractable"
import {$AutomobileComponentItem, $AutomobileComponentItem$Type} from "packages/io/github/foundationgames/automobility/item/$AutomobileComponentItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RearAttachmentItem extends $AutomobileComponentItem<($RearAttachmentType<(any)>)> implements $AutomobileInteractable {
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

public "interactAutomobile"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type, arg3: $AutomobileEntity$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RearAttachmentItem$Type = ($RearAttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RearAttachmentItem_ = $RearAttachmentItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/item/$AutomobileItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AutomobilePrefab, $AutomobilePrefab$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobilePrefab"
import {$CustomCreativeOutput, $CustomCreativeOutput$Type} from "packages/io/github/foundationgames/automobility/item/$CustomCreativeOutput"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AutomobileItem extends $Item implements $CustomCreativeOutput {
static readonly "PREFABS": $List<($AutomobilePrefab)>
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

public "provideCreativeOutput"(arg0: $CreativeModeTab$Output$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "addPrefabs"(...arg0: ($AutomobilePrefab$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileItem$Type = ($AutomobileItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileItem_ = $AutomobileItem$Type;
}}
declare module "packages/io/github/foundationgames/automobility/block/$SlopeWithDashPanelBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$SlopeBlock, $SlopeBlock$Type} from "packages/io/github/foundationgames/automobility/block/$SlopeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SlopeWithDashPanelBlock extends $SlopeBlock {
static readonly "NORTH_BOTTOM_SHAPE": $VoxelShape
static readonly "SOUTH_BOTTOM_SHAPE": $VoxelShape
static readonly "EAST_BOTTOM_SHAPE": $VoxelShape
static readonly "WEST_BOTTOM_SHAPE": $VoxelShape
static readonly "NORTH_TOP_SHAPE": $VoxelShape
static readonly "SOUTH_TOP_SHAPE": $VoxelShape
static readonly "EAST_TOP_SHAPE": $VoxelShape
static readonly "WEST_TOP_SHAPE": $VoxelShape
static readonly "OLD_NORTH_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_EAST_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_WEST_BOTTOM_SHAPE": $VoxelShape
static readonly "OLD_NORTH_TOP_SHAPE": $VoxelShape
static readonly "OLD_SOUTH_TOP_SHAPE": $VoxelShape
static readonly "OLD_EAST_TOP_SHAPE": $VoxelShape
static readonly "OLD_WEST_TOP_SHAPE": $VoxelShape
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlopeWithDashPanelBlock$Type = ($SlopeWithDashPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlopeWithDashPanelBlock_ = $SlopeWithDashPanelBlock$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/$RearAttachmentType$RearAttachmentModel" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RearAttachmentType$RearAttachmentModel extends $Record {

constructor(texture: $ResourceLocation$Type, modelId: $ResourceLocation$Type, pivotDistPx: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "pivotDistPx"(): float
public "modelId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RearAttachmentType$RearAttachmentModel$Type = ($RearAttachmentType$RearAttachmentModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RearAttachmentType$RearAttachmentModel_ = $RearAttachmentType$RearAttachmentModel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine$EngineModel" {
import {$AutomobileEngine$ExhaustPos, $AutomobileEngine$ExhaustPos$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileEngine$ExhaustPos"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AutomobileEngine$EngineModel extends $Record {

constructor(texture: $ResourceLocation$Type, modelId: $ResourceLocation$Type, ...exhausts: ($AutomobileEngine$ExhaustPos$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "modelId"(): $ResourceLocation
public "exhausts"(): ($AutomobileEngine$ExhaustPos)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileEngine$EngineModel$Type = ($AutomobileEngine$EngineModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileEngine$EngineModel_ = $AutomobileEngine$EngineModel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$SimpleMapContentRegistry, $SimpleMapContentRegistry$Type} from "packages/io/github/foundationgames/automobility/util/$SimpleMapContentRegistry"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$AutomobileWheel$Ability, $AutomobileWheel$Ability$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel$Ability"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DisplayStat, $DisplayStat$Type} from "packages/io/github/foundationgames/automobility/automobile/$DisplayStat"
import {$AutomobileWheel$WheelModel, $AutomobileWheel$WheelModel$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileWheel$WheelModel"

export class $AutomobileWheel extends $Record implements $AutomobileComponent<($AutomobileWheel)> {
static readonly "ID": $ResourceLocation
static readonly "REGISTRY": $SimpleMapContentRegistry<($AutomobileWheel)>
static readonly "EMPTY": $AutomobileWheel
static readonly "STANDARD": $AutomobileWheel
static readonly "OFF_ROAD": $AutomobileWheel
static readonly "STEEL": $AutomobileWheel
static readonly "TRACTOR": $AutomobileWheel
static readonly "CARRIAGE": $AutomobileWheel
static readonly "PLATED": $AutomobileWheel
static readonly "STREET": $AutomobileWheel
static readonly "GILDED": $AutomobileWheel
static readonly "BEJEWELED": $AutomobileWheel
static readonly "STAT_SIZE": $DisplayStat<($AutomobileWheel)>
static readonly "STAT_GRIP": $DisplayStat<($AutomobileWheel)>

constructor(id: $ResourceLocation$Type, size: float, grip: float, model: $AutomobileWheel$WheelModel$Type, ...abilities: ($AutomobileWheel$Ability$Type)[])

public "model"(): $AutomobileWheel$WheelModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): float
public "id"(): $ResourceLocation
public "getId"(): $ResourceLocation
public "forEachStat"(arg0: $Consumer$Type<($DisplayStat$Type<($AutomobileWheel$Type)>)>): void
public "containerId"(): $ResourceLocation
public "getTranslationKey"(): string
public "abilities"(): ($AutomobileWheel$Ability)[]
public "grip"(): float
public "appendTexts"(arg0: $List$Type<($Component$Type)>, arg1: $AutomobileWheel$Type): void
public "getContainerTextKey"(): string
get "empty"(): boolean
get "translationKey"(): string
get "containerTextKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomobileWheel$Type = ($AutomobileWheel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomobileWheel_ = $AutomobileWheel$Type;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/$DisplayStat" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StatContainer, $StatContainer$Type} from "packages/io/github/foundationgames/automobility/automobile/$StatContainer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ToDoubleFunction, $ToDoubleFunction$Type} from "packages/java/util/function/$ToDoubleFunction"

export class $DisplayStat<C extends $StatContainer<(C)>> extends $Record {
static readonly "STAT_SEPARATOR": $Component

constructor(name: string, statProvider: $ToDoubleFunction$Type<(C)>)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "appendTooltip"(arg0: $List$Type<($Component$Type)>, arg1: C): void
public "statProvider"(): $ToDoubleFunction<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayStat$Type<C> = ($DisplayStat<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayStat_<C> = $DisplayStat$Type<(C)>;
}}
declare module "packages/io/github/foundationgames/automobility/automobile/attachment/$BaseAttachment" {
import {$AutomobileComponent, $AutomobileComponent$Type} from "packages/io/github/foundationgames/automobility/automobile/$AutomobileComponent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AutomobileEntity, $AutomobileEntity$Type} from "packages/io/github/foundationgames/automobility/entity/$AutomobileEntity"

export class $BaseAttachment<T extends $AutomobileComponent<(T)>> {
readonly "type": T

constructor(arg0: T, arg1: $AutomobileEntity$Type)

public "tick"(): void
public "pos"(): $Vec3
public "onTrackedAnimationUpdated"(arg0: float): void
public "updatePacketRequested"(arg0: $ServerPlayer$Type): void
public "setAnimation"(arg0: float): void
public "animation"(): float
public "automobile"(): $AutomobileEntity
public "toNbt"(): $CompoundTag
public "writeNbt"(arg0: $CompoundTag$Type): void
public "readNbt"(arg0: $CompoundTag$Type): void
public "onRemoved"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseAttachment$Type<T> = ($BaseAttachment<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseAttachment_<T> = $BaseAttachment$Type<(T)>;
}}

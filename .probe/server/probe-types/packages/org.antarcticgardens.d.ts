declare module "packages/org/antarcticgardens/newage/content/electricity/wire/$ElectricWireItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireType, $WireType$Type} from "packages/org/antarcticgardens/newage/content/electricity/wire/$WireType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ElectricWireItem extends $Item {
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

constructor(properties: $Item$Properties$Type, wireType: $WireType$Type)

public static "newCopperWire"(properties: $Item$Properties$Type): $ElectricWireItem
public static "newIronWire"(properties: $Item$Properties$Type): $ElectricWireItem
public static "newGoldenWire"(properties: $Item$Properties$Type): $ElectricWireItem
public static "newDiamondWire"(properties: $Item$Properties$Type): $ElectricWireItem
public "getBoundConnector"(stack: $ItemStack$Type): $BlockPos
public "getWireType"(): $WireType
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
get "wireType"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricWireItem$Type = ($ElectricWireItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricWireItem_ = $ElectricWireItem$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorBlockEntity" {
import {$NetworkEnergyContainer, $NetworkEnergyContainer$Type} from "packages/org/antarcticgardens/newage/content/electricity/network/$NetworkEnergyContainer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ElectricalNetwork, $ElectricalNetwork$Type} from "packages/org/antarcticgardens/newage/content/electricity/network/$ElectricalNetwork"
import {$BotariumEnergyBlock, $BotariumEnergyBlock$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyBlock"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WireType, $WireType$Type} from "packages/org/antarcticgardens/newage/content/electricity/wire/$WireType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ElectricalConnectorBlockEntity extends $BlockEntity implements $BotariumEnergyBlock<($NetworkEnergyContainer)>, $IHaveGoggleInformation {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, blockState: $BlockState$Type)

public "connect"(entity: $ElectricalConnectorBlockEntity$Type, wireType: $WireType$Type): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getRenderBoundingBox"(): $AABB
public "getConnectorPositions"(): $Map<($BlockPos), ($WireType)>
public "getSupportingBlockPos"(): $BlockPos
public "getConnectors"(): $Map<($ElectricalConnectorBlockEntity), ($WireType)>
public "disconnect"(entity: $ElectricalConnectorBlockEntity$Type): void
public "isConnected"(pos: $BlockPos$Type): boolean
public "load"(nbt: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "getNetwork"(): $ElectricalNetwork
public "setNetwork"(network: $ElectricalNetwork$Type): void
public "containedFluidTooltip"(arg0: $List$Type<(any)>, arg1: boolean, arg2: $LazyOptional$Type<(any)>): boolean
public "getPurityColor"(arg0: integer): $ChatFormatting
public "getIcon"(arg0: boolean): $ItemStack
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "renderBoundingBox"(): $AABB
get "connectorPositions"(): $Map<($BlockPos), ($WireType)>
get "supportingBlockPos"(): $BlockPos
get "connectors"(): $Map<($ElectricalConnectorBlockEntity), ($WireType)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
get "network"(): $ElectricalNetwork
set "network"(value: $ElectricalNetwork$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalConnectorBlockEntity$Type = ($ElectricalConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricalConnectorBlockEntity_ = $ElectricalConnectorBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/extension/$MotorExtensionBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$IMotorExtensionVariant, $IMotorExtensionVariant$Type} from "packages/org/antarcticgardens/newage/content/motors/extension/variants/$IMotorExtensionVariant"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$Type} from "packages/com/tterrag/registrate/builders/$BlockEntityBuilder$BlockEntityFactory"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MotorExtensionBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, variant: $IMotorExtensionVariant$Type)

public "getMultiplier"(): float
public "getVariant"(): $IMotorExtensionVariant
public "tick"(): void
public static "create"(variant: $IMotorExtensionVariant$Type): $BlockEntityBuilder$BlockEntityFactory<($MotorExtensionBlockEntity)>
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "multiplier"(): float
get "variant"(): $IMotorExtensionVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorExtensionBlockEntity$Type = ($MotorExtensionBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotorExtensionBlockEntity_ = $MotorExtensionBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/energiser/$EnergiserBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EnergiserBlockEntity, $EnergiserBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/energiser/$EnergiserBlockEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EnergiserBlock extends $HorizontalKineticBlock implements $IBE<($EnergiserBlockEntity)> {
static readonly "HORIZONTAL_FACING": $Property<($Direction)>
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

constructor(properties: $BlockBehaviour$Properties$Type, tier: integer, entry: $BlockEntityEntry$Type<($EnergiserBlockEntity$Type)>)

public static "getCapacity"(tier: integer): long
public static "getStrength"(tier: integer): integer
public "getBlockEntityClass"(): $Class<($EnergiserBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "createT1"(properties: $BlockBehaviour$Properties$Type): $Block
public static "createT2"(properties: $BlockBehaviour$Properties$Type): $Block
public static "createT3"(properties: $BlockBehaviour$Properties$Type): $Block
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $EnergiserBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($EnergiserBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($EnergiserBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($EnergiserBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($EnergiserBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergiserBlock$Type = ($EnergiserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergiserBlock_ = $EnergiserBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/magnets/$IMagneticBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagneticBlock {

 "getStrength"(): float

(): float
}

export namespace $IMagneticBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagneticBlock$Type = ($IMagneticBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagneticBlock_ = $IMagneticBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/$ReactorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReactorBlock extends $Block implements $IWrenchable {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorBlock$Type = ($ReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorBlock_ = $ReactorBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/variants/$IMotorVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMotorVariant {

 "getMaxCapacity"(): long
 "getSpeed"(): float
 "getStress"(): float
}

export namespace $IMotorVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMotorVariant$Type = ($IMotorVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMotorVariant_ = $IMotorVariant$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/$ReactorTransparentBlock" {
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
import {$ReactorBlock, $ReactorBlock$Type} from "packages/org/antarcticgardens/newage/content/reactor/$ReactorBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReactorTransparentBlock extends $ReactorBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getVisualShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "skipRendering"(state: $BlockState$Type, adjacentBlockState: $BlockState$Type, side: $Direction$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorTransparentBlock$Type = ($ReactorTransparentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorTransparentBlock_ = $ReactorTransparentBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/reactorrod/$ReactorRodBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ReactorBlock, $ReactorBlock$Type} from "packages/org/antarcticgardens/newage/content/reactor/$ReactorBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReactorRodBlock extends $ReactorBlock implements $EntityBlock {
static readonly "ACTIVE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getVisualShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getDrops"(state: $BlockState$Type, params: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getShape"(arg: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "destroy"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorRodBlock$Type = ($ReactorRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorRodBlock_ = $ReactorRodBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/$SolidCoriumBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SolidCoriumBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidCoriumBlock$Type = ($SolidCoriumBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidCoriumBlock_ = $SolidCoriumBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/heatpump/$HeatPumpBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HeatPumpBlock extends $Block implements $EntityBlock, $IWrenchable {
static "UP": $BooleanProperty
static "DOWN": $BooleanProperty
static "NORTH": $BooleanProperty
static "EAST": $BooleanProperty
static "SOUTH": $BooleanProperty
static "WEST": $BooleanProperty
static "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, movedByPiston: boolean): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPumpBlock$Type = ($HeatPumpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPumpBlock_ = $HeatPumpBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/energy/$ExtractOnlyResizableEnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExtractOnlyResizableEnergyContainer implements $EnergyContainer, $Updatable<($BlockEntity)> {

constructor(capacity: long)

public "update"(object: $BlockEntity$Type): void
public "createSnapshot"(): $EnergySnapshot
public "getMaxCapacity"(): long
public "setMaxCapacity"(capacity: long): void
public "getStoredEnergy"(): long
public "serialize"(root: $CompoundTag$Type): $CompoundTag
public "deserialize"(root: $CompoundTag$Type): void
public "insertEnergy"(maxAmount: long, simulate: boolean): long
public "internalInsert"(maxAmount: long, simulate: boolean): long
public "extractEnergy"(maxAmount: long, simulate: boolean): long
public "internalExtract"(maxAmount: long, simulate: boolean): long
public "allowsInsertion"(): boolean
public "allowsExtraction"(): boolean
public "clearContent"(): void
public "setEnergy"(energy: long): void
public "maxInsert"(): long
public "maxExtract"(): long
public "getContainer"(direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(holder: $ItemStackHolder$Type): $EnergyContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
public "readSnapshot"(snapshot: $EnergySnapshot$Type): void
public static "holdsEnergy"(stack: $ItemStack$Type): boolean
public static "holdsEnergy"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "tryClear"(arg0: any): void
get "maxCapacity"(): long
set "maxCapacity"(value: long)
get "storedEnergy"(): long
set "energy"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractOnlyResizableEnergyContainer$Type = ($ExtractOnlyResizableEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtractOnlyResizableEnergyContainer_ = $ExtractOnlyResizableEnergyContainer$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/network/$NetworkEnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ElectricalNetwork, $ElectricalNetwork$Type} from "packages/org/antarcticgardens/newage/content/electricity/network/$ElectricalNetwork"
import {$ElectricalConnectorBlockEntity, $ElectricalConnectorBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorBlockEntity"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NetworkEnergyContainer implements $EnergyContainer, $Updatable<($BlockEntity)> {

constructor(connector: $ElectricalConnectorBlockEntity$Type, network: $ElectricalNetwork$Type)

public "update"(be: $BlockEntity$Type): void
public "createSnapshot"(): $EnergySnapshot
public "getMaxCapacity"(): long
public "getStoredEnergy"(): long
public "serialize"(nbt: $CompoundTag$Type): $CompoundTag
public "deserialize"(nbt: $CompoundTag$Type): void
public "insertEnergy"(maxAmount: long, simulate: boolean): long
public "extractEnergy"(maxAmount: long, simulate: boolean): long
public "allowsInsertion"(): boolean
public "allowsExtraction"(): boolean
public "clearContent"(): void
public "getNetwork"(): $ElectricalNetwork
public "setNetwork"(network: $ElectricalNetwork$Type): void
public "setEnergy"(energy: long): void
public "maxInsert"(): long
public "maxExtract"(): long
public "getContainer"(direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(holder: $ItemStackHolder$Type): $EnergyContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
public "readSnapshot"(snapshot: $EnergySnapshot$Type): void
public static "holdsEnergy"(stack: $ItemStack$Type): boolean
public static "holdsEnergy"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public "internalInsert"(amount: long, simulate: boolean): long
public "internalExtract"(amount: long, simulate: boolean): long
public static "tryClear"(arg0: any): void
get "maxCapacity"(): long
get "storedEnergy"(): long
get "network"(): $ElectricalNetwork
set "network"(value: $ElectricalNetwork$Type)
set "energy"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEnergyContainer$Type = ($NetworkEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEnergyContainer_ = $NetworkEnergyContainer$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/stirlingengine/$StirlingEngineBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$GeneratingKineticBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$HeatBlockEntity, $HeatBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/heat/$HeatBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StirlingEngineBlockEntity extends $GeneratingKineticBlockEntity implements $HeatBlockEntity {
 "speed": float
 "reActivateSource": boolean
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

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getGeneratedSpeed"(): float
public "getTierHeat"(): float
public "getHeatTiers"(): (float)[]
public "canConnect"(from: $Direction$Type): boolean
public "getHeat"(): float
public "addHeat"(amount: float): void
public "setHeat"(amount: float): void
public static "average"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T, totalToAverage: float, totalBlocks: integer, setters: ($HeatBlockEntity$Type)[]): void
public static "addToolTips"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T, tooltip: $List$Type<($Component$Type)>): void
public "getHeatTierMultiplier"(): double
public static "trySync"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T): void
public static "transferAround"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T): void
public static "handleOverheat"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T, onOverHeat: $Runnable$Type): void
public static "handleOverheat"<T extends ($BlockEntity) & ($HeatBlockEntity)>(self: T): void
public "canAdd"(from: $Direction$Type): boolean
public "maxHeat"(): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "generatedSpeed"(): float
get "tierHeat"(): float
get "heatTiers"(): (float)[]
get "heat"(): float
set "heat"(value: float)
get "heatTierMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StirlingEngineBlockEntity$Type = ($StirlingEngineBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StirlingEngineBlockEntity_ = $StirlingEngineBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/network/$ElectricalNetworkPathManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ElectricalNetworkPathManager {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalNetworkPathManager$Type = ($ElectricalNetworkPathManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricalNetworkPathManager_ = $ElectricalNetworkPathManager$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/generatorcoil/$GeneratorCoilBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$GeneratorCoilBlockEntity, $GeneratorCoilBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/generation/generatorcoil/$GeneratorCoilBlockEntity"
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RotatedPillarKineticBlock, $RotatedPillarKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$RotatedPillarKineticBlock"
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
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GeneratorCoilBlock extends $RotatedPillarKineticBlock implements $IBE<($GeneratorCoilBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($GeneratorCoilBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GeneratorCoilBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GeneratorCoilBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GeneratorCoilBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GeneratorCoilBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($GeneratorCoilBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorCoilBlock$Type = ($GeneratorCoilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorCoilBlock_ = $GeneratorCoilBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/magnets/$ImplementedMagnetBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IMagneticBlock, $IMagneticBlock$Type} from "packages/org/antarcticgardens/newage/content/generation/magnets/$IMagneticBlock"
import {$NonNullFunction, $NonNullFunction$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

export class $ImplementedMagnetBlock extends $Block implements $IMagneticBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type, strength: integer)

public "getStrength"(): float
public static "simple"(level: integer): $NonNullFunction<($BlockBehaviour$Properties), ($ImplementedMagnetBlock)>
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "strength"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImplementedMagnetBlock$Type = ($ImplementedMagnetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImplementedMagnetBlock_ = $ImplementedMagnetBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/reactorfuelacceptor/$ReactorFuelAcceptorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ReactorBlock, $ReactorBlock$Type} from "packages/org/antarcticgardens/newage/content/reactor/$ReactorBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReactorFuelAcceptorBlock extends $ReactorBlock implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFuelAcceptorBlock$Type = ($ReactorFuelAcceptorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorFuelAcceptorBlock_ = $ReactorFuelAcceptorBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/solarheatingplate/$SolarHeatingPlateBlock" {
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
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SolarHeatingPlateBlock extends $Block implements $EntityBlock, $IWrenchable {
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

constructor(properties: $BlockBehaviour$Properties$Type, entry: $BlockEntityEntry$Type<(any)>, strength: integer)

public static "createBasic"(properties: $BlockBehaviour$Properties$Type): $Block
public static "createAdvanced"(properties: $BlockBehaviour$Properties$Type): $Block
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarHeatingPlateBlock$Type = ($SolarHeatingPlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolarHeatingPlateBlock_ = $SolarHeatingPlateBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/generatorcoil/$GeneratorCoilBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GeneratorCoilBlockEntity extends $KineticBlockEntity {
readonly "magnetPositions": $List<($BlockPos)>
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

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public "takeGeneratedEnergy"(): integer
public "lazyTick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorCoilBlockEntity$Type = ($GeneratorCoilBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratorCoilBlockEntity_ = $GeneratorCoilBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/wire/$WireType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $WireType extends $Enum<($WireType)> {
static readonly "COPPER": $WireType
static readonly "IRON": $WireType
static readonly "GOLD": $WireType
static readonly "DIAMOND": $WireType


public static "values"(): ($WireType)[]
public static "valueOf"(name: string): $WireType
public "getConductivity"(): long
public "getDroppedItem"(): $ItemStack
public "getColor1"(): (integer)[]
public "getColor2"(): (integer)[]
get "conductivity"(): long
get "droppedItem"(): $ItemStack
get "color1"(): (integer)[]
get "color2"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$Type = (("gold") | ("diamond") | ("copper") | ("iron")) | ($WireType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/$MotorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IMotorVariant, $IMotorVariant$Type} from "packages/org/antarcticgardens/newage/content/motors/variants/$IMotorVariant"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IRotate, $IRotate$Type} from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$MotorBlockEntity, $MotorBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/motors/$MotorBlockEntity"
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

export class $MotorBlock extends $DirectionalKineticBlock implements $IRotate, $IBE<($MotorBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type, entry: $BlockEntityEntry$Type<($MotorBlockEntity$Type)>, variant: $IMotorVariant$Type)

public "getPreferredFacing"(context: $BlockPlaceContext$Type): $Direction
public "getBlockEntityClass"(): $Class<($MotorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRotationAxis"(blockState: $BlockState$Type): $Direction$Axis
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "neighborChanged"(arg: $BlockState$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Block$Type, arg5: $BlockPos$Type, bl: boolean): void
public "getShape"(arg: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "destroy"(arg: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MotorBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MotorBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MotorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MotorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($MotorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorBlock$Type = ($MotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotorBlock_ = $MotorBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$ElectricalConnectorBlockEntity, $ElectricalConnectorBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorBlockEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ElectricalConnectorMode, $ElectricalConnectorMode$Type} from "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorMode"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $ElectricalConnectorBlock extends $DirectionalBlock implements $IBE<($ElectricalConnectorBlockEntity)>, $IWrenchable {
static readonly "MODE": $EnumProperty<($ElectricalConnectorMode)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($ElectricalConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$Type, p_153213_: $BlockState$Type, p_153214_: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, movedByPiston: boolean): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ElectricalConnectorBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ElectricalConnectorBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ElectricalConnectorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ElectricalConnectorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($ElectricalConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalConnectorBlock$Type = ($ElectricalConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricalConnectorBlock_ = $ElectricalConnectorBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/heatpipe/$HeatPipeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HeatPipeBlock extends $Block implements $EntityBlock, $IWrenchable {
static "UP": $BooleanProperty
static "DOWN": $BooleanProperty
static "NORTH": $BooleanProperty
static "EAST": $BooleanProperty
static "SOUTH": $BooleanProperty
static "WEST": $BooleanProperty
static "massPipe": integer
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "updateState"(state: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, movedByPiston: boolean): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPipeBlock$Type = ($HeatPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPipeBlock_ = $HeatPipeBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/extension/variants/$IMotorExtensionVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMotorExtensionVariant {

 "getMultiplier"(): float
 "getExtraCapacity"(): long
 "getScrollStep"(): integer
}

export namespace $IMotorExtensionVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMotorExtensionVariant$Type = ($IMotorExtensionVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMotorExtensionVariant_ = $IMotorExtensionVariant$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/extension/$MotorExtensionBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IMotorExtensionVariant, $IMotorExtensionVariant$Type} from "packages/org/antarcticgardens/newage/content/motors/extension/variants/$IMotorExtensionVariant"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MotorExtensionBlockEntity, $MotorExtensionBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/motors/extension/$MotorExtensionBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $MotorExtensionBlock extends $Block implements $IBE<($MotorExtensionBlockEntity)>, $IWrenchable {
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

constructor(properties: $BlockBehaviour$Properties$Type, entry: $BlockEntityEntry$Type<($MotorExtensionBlockEntity$Type)>, variant: $IMotorExtensionVariant$Type)

public "getBlockEntityClass"(): $Class<($MotorExtensionBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getShape"(arg: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $CollisionContext$Type): $VoxelShape
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MotorExtensionBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MotorExtensionBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MotorExtensionBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MotorExtensionBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($MotorExtensionBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorExtensionBlock$Type = ($MotorExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotorExtensionBlock_ = $MotorExtensionBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/energiser/$EnergiserBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BotariumEnergyBlock, $BotariumEnergyBlock$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyBlock"
import {$WrappedBlockEnergyContainer, $WrappedBlockEnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/impl/$WrappedBlockEnergyContainer"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergiserBlockEntity extends $KineticBlockEntity implements $BotariumEnergyBlock<($WrappedBlockEnergyContainer)> {
 "energy": $WrappedBlockEnergyContainer
 "tier": integer
 "size": float
 "lastCharged": long
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

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type, tier: integer)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getEnergyStorage"(): $WrappedBlockEnergyContainer
public static "newTier1"(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type): $EnergiserBlockEntity
public static "newTier2"(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type): $EnergiserBlockEntity
public static "newTier3"(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type): $EnergiserBlockEntity
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "energyStorage"(): $WrappedBlockEnergyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergiserBlockEntity$Type = ($EnergiserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergiserBlockEntity_ = $EnergiserBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/reactorheatvent/$ReactorHeatVentBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ReactorBlock, $ReactorBlock$Type} from "packages/org/antarcticgardens/newage/content/reactor/$ReactorBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ReactorHeatVentBlock extends $ReactorBlock implements $EntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorHeatVentBlock$Type = ($ReactorHeatVentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorHeatVentBlock_ = $ReactorHeatVentBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/$MotorScrollValueBehaviour" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ScrollValueBehaviour, $ScrollValueBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollValueBehaviour"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ValueSettingsBoard, $ValueSettingsBoard$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueSettingsBoard"
import {$ValueSettingsBehaviour$ValueSettings, $ValueSettingsBehaviour$ValueSettings$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueSettingsBehaviour$ValueSettings"
import {$BehaviourType, $BehaviourType$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ValueBoxTransform, $ValueBoxTransform$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueBoxTransform"

export class $MotorScrollValueBehaviour extends $ScrollValueBehaviour {
static readonly "TYPE": $BehaviourType<($ScrollValueBehaviour)>
 "value": integer
 "label": $Component
 "blockEntity": $SmartBlockEntity

constructor(label: $Component$Type, be: $SmartBlockEntity$Type, slot: $ValueBoxTransform$Type)

public "betweenValidated"(min: integer, max: integer): void
public "createBoard"(player: $Player$Type, hitResult: $BlockHitResult$Type): $ValueSettingsBoard
public "setValueSettings"(player: $Player$Type, valueSetting: $ValueSettingsBehaviour$ValueSettings$Type, ctrlHeld: boolean): void
public "getValueSettings"(): $ValueSettingsBehaviour$ValueSettings
public "getClipboardKey"(): string
public "formatSettings"(settings: $ValueSettingsBehaviour$ValueSettings$Type): $MutableComponent
get "valueSettings"(): $ValueSettingsBehaviour$ValueSettings
get "clipboardKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorScrollValueBehaviour$Type = ($MotorScrollValueBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotorScrollValueBehaviour_ = $MotorScrollValueBehaviour$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ElectricalConnectorMode extends $Enum<($ElectricalConnectorMode)> implements $StringRepresentable {
static readonly "INERT": $ElectricalConnectorMode
static readonly "PULL": $ElectricalConnectorMode
readonly "pull": boolean


public static "values"(): ($ElectricalConnectorMode)[]
public static "valueOf"(name: string): $ElectricalConnectorMode
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalConnectorMode$Type = (("pull") | ("inert")) | ($ElectricalConnectorMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricalConnectorMode_ = $ElectricalConnectorMode$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/stirlingengine/$StirlingEngineBlock" {
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
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RotatedPillarKineticBlock, $RotatedPillarKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$RotatedPillarKineticBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityEntry, $BlockEntityEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StirlingEngineBlockEntity, $StirlingEngineBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/heat/stirlingengine/$StirlingEngineBlockEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $StirlingEngineBlock extends $RotatedPillarKineticBlock implements $IBE<($StirlingEngineBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type, entry: $BlockEntityEntry$Type<($StirlingEngineBlockEntity$Type)>)

public "getBlockEntityClass"(): $Class<($StirlingEngineBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $StirlingEngineBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($StirlingEngineBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($StirlingEngineBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($StirlingEngineBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($StirlingEngineBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StirlingEngineBlock$Type = ($StirlingEngineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StirlingEngineBlock_ = $StirlingEngineBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/motors/$MotorBlockEntity" {
import {$IMotorVariant, $IMotorVariant$Type} from "packages/org/antarcticgardens/newage/content/motors/variants/$IMotorVariant"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MotorScrollValueBehaviour, $MotorScrollValueBehaviour$Type} from "packages/org/antarcticgardens/newage/content/motors/$MotorScrollValueBehaviour"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$GeneratingKineticBlockEntity"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$Type} from "packages/com/tterrag/registrate/builders/$BlockEntityBuilder$BlockEntityFactory"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BotariumEnergyBlock, $BotariumEnergyBlock$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyBlock"
import {$WrappedBlockEnergyContainer, $WrappedBlockEnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/impl/$WrappedBlockEnergyContainer"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MotorBlockEntity extends $GeneratingKineticBlockEntity implements $BotariumEnergyBlock<($WrappedBlockEnergyContainer)>, $IHaveGoggleInformation {
 "needsPower": boolean
 "energy": $WrappedBlockEnergyContainer
 "speedBehavior": $MotorScrollValueBehaviour
 "powered": boolean
 "reActivateSource": boolean
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

constructor(arg: $BlockEntityType$Type<(any)>, arg2: $BlockPos$Type, arg3: $BlockState$Type, variant: $IMotorVariant$Type)

public "tick"(): void
public "initialize"(): void
public static "create"(variant: $IMotorVariant$Type): $BlockEntityBuilder$BlockEntityFactory<($MotorBlockEntity)>
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getDefaultSpeed"(): integer
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "updateGeneratedRotation"(): void
public "getGeneratedSpeed"(): float
public "calculateStressApplied"(): float
public "getEnergyStorage"(): $WrappedBlockEnergyContainer
public "calculateAddedStressCapacity"(): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "defaultSpeed"(): integer
get "generatedSpeed"(): float
get "energyStorage"(): $WrappedBlockEnergyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorBlockEntity$Type = ($MotorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotorBlockEntity_ = $MotorBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/heater/$HeaterBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HeaterBlock extends $Block implements $EntityBlock, $IWrenchable {
static readonly "STRENGTH": $EnumProperty<($BlazeBurnerBlock$HeatLevel)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, blockEntityType: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeaterBlock$Type = ($HeaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeaterBlock_ = $HeaterBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/electricity/network/$ElectricalNetwork" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ElectricalNetworkPathManager, $ElectricalNetworkPathManager$Type} from "packages/org/antarcticgardens/newage/content/electricity/network/$ElectricalNetworkPathManager"
import {$ElectricalConnectorBlockEntity, $ElectricalConnectorBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/electricity/connector/$ElectricalConnectorBlockEntity"

export class $ElectricalNetwork {

constructor(base: $ElectricalConnectorBlockEntity$Type)

public "insert"(from: $ElectricalConnectorBlockEntity$Type, amount: long, simulate: boolean): long
public "destroy"(): void
public "addNode"(node: $ElectricalConnectorBlockEntity$Type): void
public "updateConsumersAndSources"(): void
public "getPathManager"(): $ElectricalNetworkPathManager
public "getWorld"(): $Level
public "getNodes"(): $List<($ElectricalConnectorBlockEntity)>
get "pathManager"(): $ElectricalNetworkPathManager
get "world"(): $Level
get "nodes"(): $List<($ElectricalConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalNetwork$Type = ($ElectricalNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricalNetwork_ = $ElectricalNetwork$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/carbonbrushes/$CarbonBrushesBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BotariumEnergyBlock, $BotariumEnergyBlock$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyBlock"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ExtractOnlyResizableEnergyContainer, $ExtractOnlyResizableEnergyContainer$Type} from "packages/org/antarcticgardens/newage/energy/$ExtractOnlyResizableEnergyContainer"

export class $CarbonBrushesBlockEntity extends $KineticBlockEntity implements $BotariumEnergyBlock<($ExtractOnlyResizableEnergyContainer)>, $IHaveGoggleInformation {
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

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getEnergyStorage"(): $ExtractOnlyResizableEnergyContainer
public "lazyTick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "energyStorage"(): $ExtractOnlyResizableEnergyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarbonBrushesBlockEntity$Type = ($CarbonBrushesBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarbonBrushesBlockEntity_ = $CarbonBrushesBlockEntity$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/generation/carbonbrushes/$CarbonBrushesBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CarbonBrushesBlockEntity, $CarbonBrushesBlockEntity$Type} from "packages/org/antarcticgardens/newage/content/generation/carbonbrushes/$CarbonBrushesBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$DirectionalKineticBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CarbonBrushesBlock extends $DirectionalKineticBlock implements $IBE<($CarbonBrushesBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityClass"(): $Class<($CarbonBrushesBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CarbonBrushesBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CarbonBrushesBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CarbonBrushesBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CarbonBrushesBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "blockEntityClass"(): $Class<($CarbonBrushesBlockEntity)>
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarbonBrushesBlock$Type = ($CarbonBrushesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarbonBrushesBlock_ = $CarbonBrushesBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/reactor/$CoriumBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CoriumBlock extends $FallingBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoriumBlock$Type = ($CoriumBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoriumBlock_ = $CoriumBlock$Type;
}}
declare module "packages/org/antarcticgardens/newage/content/heat/$HeatBlockEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $HeatBlockEntity {

 "getTierHeat"(): float
 "getHeatTiers"(): (float)[]
 "getHeatTierMultiplier"(): double
 "canConnect"(from: $Direction$Type): boolean
 "getHeat"(): float
 "addHeat"(arg0: float): void
 "setHeat"(arg0: float): void
 "canAdd"(from: $Direction$Type): boolean
 "maxHeat"(): float
}

export namespace $HeatBlockEntity {
function average<T>(self: T, totalToAverage: float, totalBlocks: integer, setters: ($HeatBlockEntity$Type)[]): void
function addToolTips<T>(self: T, tooltip: $List$Type<($Component$Type)>): void
function trySync<T>(self: T): void
function transferAround<T>(self: T): void
function handleOverheat<T>(self: T, onOverHeat: $Runnable$Type): void
function handleOverheat<T>(self: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatBlockEntity$Type = ($HeatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatBlockEntity_ = $HeatBlockEntity$Type;
}}

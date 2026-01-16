declare module "packages/wile/rsgauges/items/$SwitchLinkPearlItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$RsItem, $RsItem$Type} from "packages/wile/rsgauges/items/$RsItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SwitchLinkPearlItem extends $RsItem {
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

public static "createForTarget"(arg0: $Level$Type, arg1: $BlockPos$Type): $ItemStack
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public static "createFromPearl"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $ItemStack
public static "cycleLinkMode"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): boolean
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public static "usePearl"(arg0: $Level$Type, arg1: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchLinkPearlItem$Type = ($SwitchLinkPearlItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchLinkPearlItem_ = $SwitchLinkPearlItem$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ComparatorSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AutoSwitchBlock, $AutoSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ComparatorSwitchBlock extends $AutoSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "switchLinkOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorSwitchBlock$Type = ($ComparatorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComparatorSwitchBlock_ = $ComparatorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/libmc/detail/$ColorUtils$DyeColorProperty" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"

export class $ColorUtils$DyeColorProperty extends $EnumProperty<($DyeColor)> {

constructor(arg0: string)

public static "create"(arg0: string): $ColorUtils$DyeColorProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorUtils$DyeColorProperty$Type = ($ColorUtils$DyeColorProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorUtils$DyeColorProperty_ = $ColorUtils$DyeColorProperty$Type;
}}
declare module "packages/wile/rsgauges/blocks/$EnvironmentalSensorSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AutoSwitchBlock, $AutoSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EnvironmentalSensorSwitchBlock extends $AutoSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvironmentalSensorSwitchBlock$Type = ($EnvironmentalSensorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnvironmentalSensorSwitchBlock_ = $EnvironmentalSensorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/detail/$SwitchLink$LinkMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SwitchLink$LinkMode extends $Enum<($SwitchLink$LinkMode)> {
static readonly "AS_STATE": $SwitchLink$LinkMode
static readonly "ACTIVATE": $SwitchLink$LinkMode
static readonly "DEACTIVATE": $SwitchLink$LinkMode
static readonly "TOGGLE": $SwitchLink$LinkMode
static readonly "INV_STATE": $SwitchLink$LinkMode


public "index"(): integer
public static "values"(): ($SwitchLink$LinkMode)[]
public static "valueOf"(arg0: string): $SwitchLink$LinkMode
public "toInt"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchLink$LinkMode$Type = (("as_state") | ("activate") | ("toggle") | ("inv_state") | ("deactivate")) | ($SwitchLink$LinkMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchLink$LinkMode_ = $SwitchLink$LinkMode$Type;
}}
declare module "packages/wile/rsgauges/libmc/detail/$Networking$IPacketTileNotifyReceiver" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $Networking$IPacketTileNotifyReceiver {

 "onServerPacketReceived"(arg0: $CompoundTag$Type): void
 "onClientPacketReceived"(arg0: $Player$Type, arg1: $CompoundTag$Type): void
}

export namespace $Networking$IPacketTileNotifyReceiver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Networking$IPacketTileNotifyReceiver$Type = ($Networking$IPacketTileNotifyReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Networking$IPacketTileNotifyReceiver_ = $Networking$IPacketTileNotifyReceiver$Type;
}}
declare module "packages/wile/rsgauges/blocks/$SwitchBlock$SwitchTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RsBlock$RsTileEntity, $RsBlock$RsTileEntity$Type} from "packages/wile/rsgauges/blocks/$RsBlock$RsTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SwitchBlock$SwitchTileEntity extends $RsBlock$RsTileEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "reset"(arg0: $LevelReader$Type): void
public "weak"(): boolean
public "weak"(arg0: boolean): void
public "power"(arg0: $BlockState$Type, arg1: boolean): integer
public "configStatusTextComponentTranslation"(arg0: $SwitchBlock$Type): $MutableComponent
public "configured_on_time"(): integer
public "configured_on_time"(arg0: integer): void
public "unlinkAllSwitchLinks"(arg0: boolean): $ArrayList<($ItemStack)>
public "click_config"(arg0: $SwitchBlock$Type, arg1: boolean): boolean
public "touch_config"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: double, arg3: double): boolean
public "on_timer_reset"(): void
public "on_timer_reset"(arg0: integer): void
public "on_time_remaining"(): integer
public "reschedule_block_tick"(): void
public "activateSwitchLinks"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "enabled_sides"(arg0: long): void
public "enabled_sides"(): long
public "on_timer_extend"(): void
public "verifySwitchLinkTarget"(arg0: $SwitchLink$Type): boolean
public "inverted"(): boolean
public "inverted"(arg0: boolean): void
public static "linktime"(): long
public "nooutput"(arg0: boolean): void
public "nooutput"(): boolean
public "setpower"(): integer
public "setpower"(arg0: integer): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchBlock$SwitchTileEntity$Type = ($SwitchBlock$SwitchTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchBlock$SwitchTileEntity_ = $SwitchBlock$SwitchTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$GaugeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractGaugeBlock, $AbstractGaugeBlock$Type} from "packages/wile/rsgauges/blocks/$AbstractGaugeBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GaugeBlock extends $AbstractGaugeBlock {
static readonly "POWER": $IntegerProperty
static readonly "GAUGE_DATA_POWER_MASK": long
static readonly "GAUGE_DATA_POWER_SHIFT": integer
static readonly "GAUGE_DATA_BLINKING": long
static readonly "GAUGE_DATA_INVERTED": long
static readonly "GAUGE_DATA_COMPARATOR_MODE": long
readonly "power_on_sound": $ModResources$BlockSoundEvent
readonly "power_off_sound": $ModResources$BlockSoundEvent
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $ModResources$BlockSoundEvent$Type, arg4: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
declare module "packages/wile/rsgauges/detail/$SwitchLink$RequestResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SwitchLink$RequestResult extends $Enum<($SwitchLink$RequestResult)> {
static readonly "OK": $SwitchLink$RequestResult
static readonly "NOT_MATCHED": $SwitchLink$RequestResult
static readonly "INVALID_LINKDATA": $SwitchLink$RequestResult
static readonly "TOO_FAR": $SwitchLink$RequestResult
static readonly "TARGET_GONE": $SwitchLink$RequestResult
static readonly "REJECTED": $SwitchLink$RequestResult


public static "values"(): ($SwitchLink$RequestResult)[]
public static "valueOf"(arg0: string): $SwitchLink$RequestResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchLink$RequestResult$Type = (("not_matched") | ("rejected") | ("target_gone") | ("invalid_linkdata") | ("too_far") | ("ok")) | ($SwitchLink$RequestResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchLink$RequestResult_ = $SwitchLink$RequestResult$Type;
}}
declare module "packages/wile/rsgauges/blocks/$IndicatorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$AbstractGaugeBlock, $AbstractGaugeBlock$Type} from "packages/wile/rsgauges/blocks/$AbstractGaugeBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $IndicatorBlock extends $AbstractGaugeBlock {
static readonly "POWERED": $BooleanProperty
static readonly "GAUGE_DATA_POWER_MASK": long
static readonly "GAUGE_DATA_POWER_SHIFT": integer
static readonly "GAUGE_DATA_BLINKING": long
static readonly "GAUGE_DATA_INVERTED": long
static readonly "GAUGE_DATA_COMPARATOR_MODE": long
readonly "power_on_sound": $ModResources$BlockSoundEvent
readonly "power_off_sound": $ModResources$BlockSoundEvent
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $ModResources$BlockSoundEvent$Type, arg4: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndicatorBlock$Type = ($IndicatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndicatorBlock_ = $IndicatorBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ContactSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$ContactSwitchBlock$ContactSwitchTileEntity, $ContactSwitchBlock$ContactSwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$ContactSwitchBlock$ContactSwitchTileEntity"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ContactSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTe"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $ContactSwitchBlock$ContactSwitchTileEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContactSwitchBlock$Type = ($ContactSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContactSwitchBlock_ = $ContactSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/detail/$SwitchLink" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SwitchLink$LinkMode, $SwitchLink$LinkMode$Type} from "packages/wile/rsgauges/detail/$SwitchLink$LinkMode"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SwitchLink {
readonly "target_position": $BlockPos
readonly "block_name": string
readonly "valid": boolean
 "source_analog_power": integer
 "source_digital_power": integer
 "source_position": $BlockPos
 "world": $Level
 "player": $Player

constructor()
constructor(arg0: $BlockPos$Type, arg1: string, arg2: long)

public "toString"(): string
public "trigger"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $SwitchLink$RequestResult
public "trigger"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: boolean): $SwitchLink$RequestResult
public "mode"(arg0: $SwitchLink$LinkMode$Type): $SwitchLink
public "mode"(): $SwitchLink$LinkMode
public "distance"(arg0: $BlockPos$Type): integer
public static "fromPlayerActiveItem"(arg0: $Level$Type, arg1: $Player$Type): $SwitchLink
public static "fromTargetPosition"(arg0: $Level$Type, arg1: $BlockPos$Type): $SwitchLink
public static "getInputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "initializeTarget"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): void
public "toSwitchLinkPearl"(): $ItemStack
public "unlinkTarget"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "fromItemStack"(arg0: $ItemStack$Type): $SwitchLink
public static "getComparatorInput"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public static "getOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public static "fromNbt"(arg0: $CompoundTag$Type): $SwitchLink
public "toNbt"(): $CompoundTag
public "isTooFar"(arg0: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchLink$Type = ($SwitchLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchLink_ = $SwitchLink$Type;
}}
declare module "packages/wile/rsgauges/blocks/$SwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$SwitchLink$LinkMode, $SwitchLink$LinkMode$Type} from "packages/wile/rsgauges/detail/$SwitchLink$LinkMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RsDirectedBlock, $RsDirectedBlock$Type} from "packages/wile/rsgauges/blocks/$RsDirectedBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RsBlock$RenderTypeHint, $RsBlock$RenderTypeHint$Type} from "packages/wile/rsgauges/blocks/$RsBlock$RenderTypeHint"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SwitchBlock$SwitchTileEntity, $SwitchBlock$SwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock$SwitchTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SwitchLink$ISwitchLinkable, $SwitchLink$ISwitchLinkable$Type} from "packages/wile/rsgauges/detail/$SwitchLink$ISwitchLinkable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SwitchBlock extends $RsDirectedBlock implements $EntityBlock, $SwitchLink$ISwitchLinkable {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "switchLinkGetSupportedTargetModes"(): $ImmutableList<($SwitchLink$LinkMode)>
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "switchLinkHasTargetSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkHasSourceSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkHasAnalogSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkInputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkComparatorInput"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "switchLinkInit"(arg0: $SwitchLink$Type): void
public "switchLinkUnlink"(arg0: $SwitchLink$Type): void
public "getRenderTypeHint"(): $RsBlock$RenderTypeHint
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTe"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $SwitchBlock$SwitchTileEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "renderTypeHint"(): $RsBlock$RenderTypeHint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchBlock$Type = ($SwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchBlock_ = $SwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$LinkReceiverSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SwitchLink$LinkMode, $SwitchLink$LinkMode$Type} from "packages/wile/rsgauges/detail/$SwitchLink$LinkMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LinkReceiverSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type, arg6: boolean)

public "switchLinkGetSupportedTargetModes"(): $ImmutableList<($SwitchLink$LinkMode)>
public "switchLinkHasAnalogSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "switchLinkInit"(arg0: $SwitchLink$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkReceiverSwitchBlock$Type = ($LinkReceiverSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkReceiverSwitchBlock_ = $LinkReceiverSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$AutoSwitchBlock$AutoSwitchTileEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SwitchBlock$SwitchTileEntity, $SwitchBlock$SwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock$SwitchTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AutoSwitchBlock$AutoSwitchTileEntity extends $SwitchBlock$SwitchTileEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSwitchBlock$AutoSwitchTileEntity$Type = ($AutoSwitchBlock$AutoSwitchTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSwitchBlock$AutoSwitchTileEntity_ = $AutoSwitchBlock$AutoSwitchTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$LinkSenderSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LinkSenderSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type, arg6: boolean)

public "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "switchLinkHasAnalogSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkSenderSwitchBlock$Type = ($LinkSenderSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkSenderSwitchBlock_ = $LinkSenderSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$IntervalTimerSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AutoSwitchBlock, $AutoSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $IntervalTimerSwitchBlock extends $AutoSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "switchLinkOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntervalTimerSwitchBlock$Type = ($IntervalTimerSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntervalTimerSwitchBlock_ = $IntervalTimerSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ModResources$BlockSoundEvent {

constructor(arg0: $SoundEvent$Type)
constructor(arg0: $SoundEvent$Type, arg1: float)
constructor(arg0: $SoundEvent$Type, arg1: float, arg2: float)

public "sound"(): $SoundEvent
public "play"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "pitch"(): float
public "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModResources$BlockSoundEvent$Type = ($ModResources$BlockSoundEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModResources$BlockSoundEvent_ = $ModResources$BlockSoundEvent$Type;
}}
declare module "packages/wile/rsgauges/blocks/$BistableKnockSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BistableSwitchBlock, $BistableSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$BistableSwitchBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$PlayerBlockInteraction$INeighbourBlockInteractionSensitive, $PlayerBlockInteraction$INeighbourBlockInteractionSensitive$Type} from "packages/wile/rsgauges/libmc/detail/$PlayerBlockInteraction$INeighbourBlockInteractionSensitive"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BistableKnockSwitchBlock extends $BistableSwitchBlock implements $PlayerBlockInteraction$INeighbourBlockInteractionSensitive {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "onNeighborBlockPlayerInteraction"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type, arg5: $InteractionHand$Type, arg6: boolean): boolean
public "isCube"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "cube"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BistableKnockSwitchBlock$Type = ($BistableKnockSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BistableKnockSwitchBlock_ = $BistableKnockSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/detail/$SwitchLink$ISwitchLinkable" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SwitchLink$LinkMode, $SwitchLink$LinkMode$Type} from "packages/wile/rsgauges/detail/$SwitchLink$LinkMode"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $SwitchLink$ISwitchLinkable {

 "switchLinkGetSupportedTargetModes"(): $ImmutableList<($SwitchLink$LinkMode)>
 "switchLinkHasTargetSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "switchLinkHasSourceSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "switchLinkHasAnalogSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "switchLinkOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
 "switchLinkInputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
 "switchLinkComparatorInput"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
 "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
 "switchLinkInit"(arg0: $SwitchLink$Type): void
 "switchLinkUnlink"(arg0: $SwitchLink$Type): void
}

export namespace $SwitchLink$ISwitchLinkable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchLink$ISwitchLinkable$Type = ($SwitchLink$ISwitchLinkable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchLink$ISwitchLinkable_ = $SwitchLink$ISwitchLinkable$Type;
}}
declare module "packages/wile/rsgauges/libmc/detail/$PlayerBlockInteraction$INeighbourBlockInteractionSensitive" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $PlayerBlockInteraction$INeighbourBlockInteractionSensitive {

 "onNeighborBlockPlayerInteraction"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type, arg5: $InteractionHand$Type, arg6: boolean): boolean
}

export namespace $PlayerBlockInteraction$INeighbourBlockInteractionSensitive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerBlockInteraction$INeighbourBlockInteractionSensitive$Type = ($PlayerBlockInteraction$INeighbourBlockInteractionSensitive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerBlockInteraction$INeighbourBlockInteractionSensitive_ = $PlayerBlockInteraction$INeighbourBlockInteractionSensitive$Type;
}}
declare module "packages/wile/rsgauges/blocks/$RsBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
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
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RsBlock$RenderTypeHint, $RsBlock$RenderTypeHint$Type} from "packages/wile/rsgauges/blocks/$RsBlock$RenderTypeHint"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
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
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RsBlock extends $Block implements $EntityBlock {
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $VoxelShape$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type)

public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "hasCustomBreakingProgress"(arg0: $BlockState$Type): boolean
public "getRenderTypeHint"(): $RsBlock$RenderTypeHint
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPossibleToRespawnInThis"(arg0: $BlockState$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "renderTypeHint"(): $RsBlock$RenderTypeHint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RsBlock$Type = ($RsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RsBlock_ = $RsBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$AutoSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$AutoSwitchBlock$AutoSwitchTileEntity, $AutoSwitchBlock$AutoSwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock$AutoSwitchTileEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AutoSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTe"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $AutoSwitchBlock$AutoSwitchTileEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSwitchBlock$Type = ($AutoSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSwitchBlock_ = $AutoSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$SensitiveGlassBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$RsBlock$RenderTypeHint, $RsBlock$RenderTypeHint$Type} from "packages/wile/rsgauges/blocks/$RsBlock$RenderTypeHint"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ColorUtils$DyeColorProperty, $ColorUtils$DyeColorProperty$Type} from "packages/wile/rsgauges/libmc/detail/$ColorUtils$DyeColorProperty"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RsBlock, $RsBlock$Type} from "packages/wile/rsgauges/blocks/$RsBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $SensitiveGlassBlock extends $RsBlock {
static readonly "POWERED": $BooleanProperty
static readonly "COLOR": $ColorUtils$DyeColorProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getRenderTypeHint"(): $RsBlock$RenderTypeHint
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPossibleToRespawnInThis"(arg0: $BlockState$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "renderTypeHint"(): $RsBlock$RenderTypeHint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensitiveGlassBlock$Type = ($SensitiveGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensitiveGlassBlock_ = $SensitiveGlassBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$EntityDetectorSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AutoSwitchBlock, $AutoSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EntityDetectorSwitchBlock extends $AutoSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDetectorSwitchBlock$Type = ($EntityDetectorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDetectorSwitchBlock_ = $EntityDetectorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$TrapdoorSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ContactSwitchBlock, $ContactSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$ContactSwitchBlock"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrapdoorSwitchBlock extends $ContactSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorSwitchBlock$Type = ($TrapdoorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorSwitchBlock_ = $TrapdoorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$DoorSensorSwitchBlock$DoorSensorSwitchTileEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SwitchBlock$SwitchTileEntity, $SwitchBlock$SwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock$SwitchTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity extends $SwitchBlock$SwitchTileEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "tick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity$Type = ($DoorSensorSwitchBlock$DoorSensorSwitchTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity_ = $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ContactSwitchBlock$ContactSwitchTileEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$SwitchBlock$SwitchTileEntity, $SwitchBlock$SwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock$SwitchTileEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ContactSwitchBlock$ContactSwitchTileEntity extends $SwitchBlock$SwitchTileEntity {
static readonly "filter_classes": ($Class<(any)>)[]
static readonly "filter_class_names": (string)[]
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "filter"(): integer
public "filter"(arg0: integer): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "reset"(arg0: $LevelReader$Type): void
public "activation_config"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: double, arg3: double, arg4: boolean): boolean
public "filter_class"(): $Class<(any)>
public "entity_count_threshold"(): integer
public "entity_count_threshold"(arg0: integer): void
public "high_sensitivity"(arg0: boolean): void
public "high_sensitivity"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContactSwitchBlock$ContactSwitchTileEntity$Type = ($ContactSwitchBlock$ContactSwitchTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContactSwitchBlock$ContactSwitchTileEntity_ = $ContactSwitchBlock$ContactSwitchTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ElevatorSwitchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PulseSwitchBlock, $PulseSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$PulseSwitchBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ElevatorSwitchBlock extends $PulseSwitchBlock {
static readonly "VARIANT": $IntegerProperty
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorSwitchBlock$Type = ($ElevatorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorSwitchBlock_ = $ElevatorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$DayTimerSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$AutoSwitchBlock, $AutoSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$AutoSwitchBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DayTimerSwitchBlock extends $AutoSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayTimerSwitchBlock$Type = ($DayTimerSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DayTimerSwitchBlock_ = $DayTimerSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$AbstractGaugeBlock$GaugeTileEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$RsBlock$RsTileEntity, $RsBlock$RsTileEntity$Type} from "packages/wile/rsgauges/blocks/$RsBlock$RsTileEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractGaugeBlock$GaugeTileEntity extends $RsBlock$RsTileEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "reset"(): void
public "reset"(arg0: $LevelReader$Type): void
public "tick"(): void
public "power"(arg0: integer): void
public "power"(): integer
public "comparator_mode"(): boolean
public "comparator_mode"(arg0: boolean): void
public "reset_timer"(): void
public "switchlink_input"(arg0: integer): void
public "switchlink_input"(): integer
public "inverted"(): boolean
public "inverted"(arg0: boolean): void
public "on_wrench"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $ItemStack$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGaugeBlock$GaugeTileEntity$Type = ($AbstractGaugeBlock$GaugeTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGaugeBlock$GaugeTileEntity_ = $AbstractGaugeBlock$GaugeTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$RsDirectedBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$RsBlock, $RsBlock$Type} from "packages/wile/rsgauges/blocks/$RsBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $RsDirectedBlock extends $RsBlock {
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "isWallMount"(): boolean
public "isOpositePlacement"(): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isLateral"(): boolean
public "isCube"(): boolean
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "wallMount"(): boolean
get "opositePlacement"(): boolean
get "lateral"(): boolean
get "cube"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RsDirectedBlock$Type = ($RsDirectedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RsDirectedBlock_ = $RsDirectedBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$PulseKnockSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PulseSwitchBlock, $PulseSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$PulseSwitchBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$PlayerBlockInteraction$INeighbourBlockInteractionSensitive, $PlayerBlockInteraction$INeighbourBlockInteractionSensitive$Type} from "packages/wile/rsgauges/libmc/detail/$PlayerBlockInteraction$INeighbourBlockInteractionSensitive"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PulseKnockSwitchBlock extends $PulseSwitchBlock implements $PlayerBlockInteraction$INeighbourBlockInteractionSensitive {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "onNeighborBlockPlayerInteraction"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type, arg5: $InteractionHand$Type, arg6: boolean): boolean
public "isCube"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "cube"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulseKnockSwitchBlock$Type = ($PulseKnockSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PulseKnockSwitchBlock_ = $PulseKnockSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ObserverSwitchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ObserverSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObserverSwitchBlock$Type = ($ObserverSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObserverSwitchBlock_ = $ObserverSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$PowerPlantBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ContactSwitchBlock, $ContactSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$ContactSwitchBlock"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PowerPlantBlock extends $ContactSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerPlantBlock$Type = ($PowerPlantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerPlantBlock_ = $PowerPlantBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$BistableSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BistableSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BistableSwitchBlock$Type = ($BistableSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BistableSwitchBlock_ = $BistableSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$AbstractGaugeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$SwitchLink$LinkMode, $SwitchLink$LinkMode$Type} from "packages/wile/rsgauges/detail/$SwitchLink$LinkMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RsDirectedBlock, $RsDirectedBlock$Type} from "packages/wile/rsgauges/blocks/$RsDirectedBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractGaugeBlock$GaugeTileEntity, $AbstractGaugeBlock$GaugeTileEntity$Type} from "packages/wile/rsgauges/blocks/$AbstractGaugeBlock$GaugeTileEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SwitchLink$ISwitchLinkable, $SwitchLink$ISwitchLinkable$Type} from "packages/wile/rsgauges/detail/$SwitchLink$ISwitchLinkable"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractGaugeBlock extends $RsDirectedBlock implements $EntityBlock, $SwitchLink$ISwitchLinkable {
static readonly "GAUGE_DATA_POWER_MASK": long
static readonly "GAUGE_DATA_POWER_SHIFT": integer
static readonly "GAUGE_DATA_BLINKING": long
static readonly "GAUGE_DATA_INVERTED": long
static readonly "GAUGE_DATA_COMPARATOR_MODE": long
readonly "power_on_sound": $ModResources$BlockSoundEvent
readonly "power_off_sound": $ModResources$BlockSoundEvent
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
readonly "config": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $ModResources$BlockSoundEvent$Type, arg4: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type)

public "switchLinkGetSupportedTargetModes"(): $ImmutableList<($SwitchLink$LinkMode)>
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "switchLinkHasTargetSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkHasSourceSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkHasAnalogSupport"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "switchLinkOutputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkInputPower"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkComparatorInput"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<(integer)>
public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "switchLinkInit"(arg0: $SwitchLink$Type): void
public "switchLinkUnlink"(arg0: $SwitchLink$Type): void
public "isWallMount"(): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTe"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $AbstractGaugeBlock$GaugeTileEntity
public "isLateral"(): boolean
public "isCube"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "wallMount"(): boolean
get "lateral"(): boolean
get "cube"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGaugeBlock$Type = ($AbstractGaugeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGaugeBlock_ = $AbstractGaugeBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$RsBlock$RenderTypeHint" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RsBlock$RenderTypeHint extends $Enum<($RsBlock$RenderTypeHint)> {
static readonly "SOLID": $RsBlock$RenderTypeHint
static readonly "CUTOUT": $RsBlock$RenderTypeHint
static readonly "CUTOUT_MIPPED": $RsBlock$RenderTypeHint
static readonly "TRANSLUCENT": $RsBlock$RenderTypeHint


public static "values"(): ($RsBlock$RenderTypeHint)[]
public static "valueOf"(arg0: string): $RsBlock$RenderTypeHint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RsBlock$RenderTypeHint$Type = (("translucent") | ("solid") | ("cutout") | ("cutout_mipped")) | ($RsBlock$RenderTypeHint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RsBlock$RenderTypeHint_ = $RsBlock$RenderTypeHint$Type;
}}
declare module "packages/wile/rsgauges/blocks/$DoorSensorSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$DoorSensorSwitchBlock$DoorSensorSwitchTileEntity, $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity$Type} from "packages/wile/rsgauges/blocks/$DoorSensorSwitchBlock$DoorSensorSwitchTileEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DoorSensorSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTe"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $DoorSensorSwitchBlock$DoorSensorSwitchTileEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorSensorSwitchBlock$Type = ($DoorSensorSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorSensorSwitchBlock_ = $DoorSensorSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$PulseSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SwitchLink, $SwitchLink$Type} from "packages/wile/rsgauges/detail/$SwitchLink"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$SwitchLink$RequestResult, $SwitchLink$RequestResult$Type} from "packages/wile/rsgauges/detail/$SwitchLink$RequestResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PulseSwitchBlock extends $SwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "switchLinkTrigger"(arg0: $SwitchLink$Type): $SwitchLink$RequestResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulseSwitchBlock$Type = ($PulseSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PulseSwitchBlock_ = $PulseSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/blocks/$RsBlock$RsTileEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Networking$IPacketTileNotifyReceiver, $Networking$IPacketTileNotifyReceiver$Type} from "packages/wile/rsgauges/libmc/detail/$Networking$IPacketTileNotifyReceiver"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RsBlock$RsTileEntity extends $BlockEntity implements $Networking$IPacketTileNotifyReceiver {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "read"(arg0: $CompoundTag$Type, arg1: boolean): void
public "tick"(): void
public "onServerPacketReceived"(arg0: $CompoundTag$Type): void
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "onClientPacketReceived"(arg0: $Player$Type, arg1: $CompoundTag$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RsBlock$RsTileEntity$Type = ($RsBlock$RsTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RsBlock$RsTileEntity_ = $RsBlock$RsTileEntity$Type;
}}
declare module "packages/wile/rsgauges/blocks/$DimmerSwitchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SwitchBlock, $SwitchBlock$Type} from "packages/wile/rsgauges/blocks/$SwitchBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DimmerSwitchBlock extends $SwitchBlock {
static readonly "POWER": $IntegerProperty
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimmerSwitchBlock$Type = ($DimmerSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimmerSwitchBlock_ = $DimmerSwitchBlock$Type;
}}
declare module "packages/wile/rsgauges/items/$RsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RsItem extends $Item {
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


public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RsItem$Type = ($RsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RsItem_ = $RsItem$Type;
}}
declare module "packages/wile/rsgauges/blocks/$ContactMatBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$ModResources$BlockSoundEvent, $ModResources$BlockSoundEvent$Type} from "packages/wile/rsgauges/detail/$ModResources$BlockSoundEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ContactSwitchBlock, $ContactSwitchBlock$Type} from "packages/wile/rsgauges/blocks/$ContactSwitchBlock"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ContactMatBlock extends $ContactSwitchBlock {
static readonly "SWITCH_DATA_POWERED_POWER_MASK": long
static readonly "SWITCH_DATA_RESERVED_MASK": long
static readonly "SWITCH_DATA_INVERTED": long
static readonly "SWITCH_DATA_WEAK": long
static readonly "SWITCH_DATA_NOOUTPUT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BOTTOM": long
static readonly "SWITCH_DATA_SIDE_ENABLED_TOP": long
static readonly "SWITCH_DATA_SIDE_ENABLED_FRONT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_BACK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_LEFT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_RIGHT": long
static readonly "SWITCH_DATA_SIDE_ENABLED_ALL": long
static readonly "SWITCH_DATA_SIDE_ENABLED_MASK": long
static readonly "SWITCH_DATA_SIDE_ENABLED_SHIFT": long
static readonly "SWITCH_DATA_ENTITY_DEFAULTS_MASK": long
static readonly "SWITCH_CONFIG_INVERTABLE": long
static readonly "SWITCH_CONFIG_WEAKABLE": long
static readonly "SWITCH_CONFIG_PULSETIME_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_TOUCH_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_PULSE_EXTENDABLE": long
static readonly "SWITCH_CONFIG_LCLICK_RESETTABLE": long
static readonly "SWITCH_CONFIG_BISTABLE": long
static readonly "SWITCH_CONFIG_PULSE": long
static readonly "SWITCH_CONFIG_CONTACT": long
static readonly "SWITCH_CONFIG_TIMER_DAYTIME": long
static readonly "SWITCH_CONFIG_TIMER_INTERVAL": long
static readonly "SWITCH_CONFIG_SENSOR_VOLUME": long
static readonly "SWITCH_CONFIG_SENSOR_LINEAR": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHT": long
static readonly "SWITCH_CONFIG_SENSOR_RAIN": long
static readonly "SWITCH_CONFIG_SENSOR_LIGHTNING": long
static readonly "SWITCH_CONFIG_SENSOR_BLOCKDETECT": long
static readonly "SWITCH_CONFIG_SENSOR_TIME": long
static readonly "SWITCH_CONFIG_SENSOR_DETECTOR": long
static readonly "SWITCH_CONFIG_SENSOR_ENVIRONMENTAL": long
static readonly "SWITCH_CONFIG_AUTOMATIC": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_ON": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE_OFF": long
static readonly "SWITCH_CONFIG_PROJECTILE_SENSE": long
static readonly "SWITCH_CONFIG_SHOCK_SENSITIVE": long
static readonly "SWITCH_CONFIG_HIGH_SENSITIVE": long
static readonly "SWITCH_CONFIG_TRANSLUCENT": long
static readonly "SWITCH_CONFIG_NOT_PASSABLE": long
static readonly "SWITCH_CONFIG_SIDES_CONFIGURABLE": long
static readonly "SWITCH_CONFIG_LINK_SOURCE_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_TARGET_SUPPORT": long
static readonly "SWITCH_CONFIG_LINK_SENDER": long
static readonly "SWITCH_CONFIG_WALLMOUNT": long
static readonly "SWITCH_CONFIG_LATERAL": long
static readonly "SWITCH_CONFIG_LATERAL_WALLMOUNT": long
static readonly "SWITCH_DATA_SVD_ACTIVE_TIME_MASK": integer
static readonly "POWERED": $BooleanProperty
static readonly "base_tick_rate": integer
static readonly "default_pulse_on_time": integer
readonly "config": long
static readonly "RSBLOCK_CONFIG_WALLMOUNT": long
static readonly "RSBLOCK_CONFIG_LATERAL": long
static readonly "RSBLOCK_CONFIG_FULLCUBE": long
static readonly "RSBLOCK_CONFIG_OPOSITE_PLACEMENT": long
static readonly "FACING": $DirectionProperty
static readonly "RSBLOCK_CONFIG_SOLID": long
static readonly "RSBLOCK_CONFIG_CUTOUT": long
static readonly "RSBLOCK_CONFIG_CUTOUT_MIPPED": long
static readonly "RSBLOCK_CONFIG_TRANSLUCENT": long
static readonly "RSBLOCK_NOT_WATERLOGGABLE": long
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

constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type, arg4: $ModResources$BlockSoundEvent$Type, arg5: $ModResources$BlockSoundEvent$Type)
constructor(arg0: long, arg1: $BlockBehaviour$Properties$Type, arg2: $AABB$Type, arg3: $AABB$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContactMatBlock$Type = ($ContactMatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContactMatBlock_ = $ContactMatBlock$Type;
}}

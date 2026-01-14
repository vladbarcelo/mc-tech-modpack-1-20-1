declare module "packages/mrtjp/projectred/core/part/$IOrientableFacePart" {
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"

export interface $IOrientableFacePart {

 "absoluteDir"(arg0: integer): integer
 "absoluteRot"(arg0: integer): integer
 "onOrientationChange"(): void
 "toInternalMask"(arg0: integer): integer
 "toAbsoluteMask"(arg0: integer): integer
 "setRotation"(arg0: integer): void
 "getRotation"(): integer
 "getSide"(): integer
 "setSide"(arg0: integer): void
 "toInternal"(arg0: integer): integer
 "rotationT"(): $Transformation
 "toAbsolute"(arg0: integer): integer
}

export namespace $IOrientableFacePart {
function shiftMask(arg0: integer, arg1: integer): integer
function flipMaskZ(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientableFacePart$Type = ($IOrientableFacePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientableFacePart_ = $IOrientableFacePart$Type;
}}
declare module "packages/mrtjp/projectred/integration/$GateType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GatePart, $GatePart$Type} from "packages/mrtjp/projectred/integration/part/$GatePart"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"

export class $GateType extends $Enum<($GateType)> {
static readonly "OR": $GateType
static readonly "NOR": $GateType
static readonly "NOT": $GateType
static readonly "AND": $GateType
static readonly "NAND": $GateType
static readonly "XOR": $GateType
static readonly "XNOR": $GateType
static readonly "BUFFER": $GateType
static readonly "MULTIPLEXER": $GateType
static readonly "PULSE": $GateType
static readonly "REPEATER": $GateType
static readonly "RANDOMIZER": $GateType
static readonly "SR_LATCH": $GateType
static readonly "TOGGLE_LATCH": $GateType
static readonly "TRANSPARENT_LATCH": $GateType
static readonly "LIGHT_SENSOR": $GateType
static readonly "RAIN_SENSOR": $GateType
static readonly "TIMER": $GateType
static readonly "SEQUENCER": $GateType
static readonly "COUNTER": $GateType
static readonly "STATE_CELL": $GateType
static readonly "SYNCHRONIZER": $GateType
static readonly "BUS_TRANSCEIVER": $GateType
static readonly "NULL_CELL": $GateType
static readonly "INVERT_CELL": $GateType
static readonly "BUFFER_CELL": $GateType
static readonly "COMPARATOR": $GateType
static readonly "AND_CELL": $GateType
static readonly "BUS_RANDOMIZER": $GateType
static readonly "BUS_CONVERTER": $GateType
static readonly "BUS_INPUT_PANEL": $GateType
static readonly "TRANSPARENT_LATCH_CELL": $GateType
static readonly "SEGMENT_DISPLAY": $GateType
static readonly "DEC_RANDOMIZER": $GateType
static readonly "FABRICATED_GATE": $GateType


public "getItem"(): $Item
public static "values"(): ($GateType)[]
public static "valueOf"(arg0: string): $GateType
public "isExternalGate"(): boolean
public "registerParts"(arg0: $DeferredRegister$Type<($MultipartType$Type<(any)>)>, arg1: $DeferredRegister$Type<($Item$Type)>): void
public "getItemRegistryObject"(): $RegistryObject<(any)>
public "getPartType"(): $MultipartType<($GatePart)>
public "getUnlocalizedName"(): string
public "inject"(arg0: string, arg1: $Function$Type<($GateType$Type), ($GatePart$Type)>, arg2: $RegistryObject$Type<(any)>, arg3: $RegistryObject$Type<($MultipartType$Type<($GatePart$Type)>)>): void
public "newPart"(): $GatePart
public "makeStack"(): $ItemStack
get "item"(): $Item
get "externalGate"(): boolean
get "itemRegistryObject"(): $RegistryObject<(any)>
get "partType"(): $MultipartType<($GatePart)>
get "unlocalizedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GateType$Type = (("and_cell") | ("transparent_latch") | ("sr_latch") | ("randomizer") | ("sequencer") | ("nor") | ("timer") | ("not") | ("light_sensor") | ("multiplexer") | ("transparent_latch_cell") | ("and") | ("toggle_latch") | ("nand") | ("xor") | ("segment_display") | ("fabricated_gate") | ("buffer") | ("bus_converter") | ("bus_transceiver") | ("xnor") | ("buffer_cell") | ("or") | ("bus_randomizer") | ("rain_sensor") | ("counter") | ("dec_randomizer") | ("comparator") | ("bus_input_panel") | ("invert_cell") | ("state_cell") | ("synchronizer") | ("pulse") | ("null_cell") | ("repeater")) | ($GateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GateType_ = $GateType$Type;
}}
declare module "packages/mrtjp/projectred/transmission/part/$BaseWirePart" {
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IconHitEffectsPart, $IconHitEffectsPart$Type} from "packages/codechicken/multipart/api/part/$IconHitEffectsPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BaseWirePart extends $BaseMultipart implements $IconHitEffectsPart {

constructor(arg0: $WireType$Type)

public "getBounds"(): $Cuboid6
public "getType"(): $MultipartType<(any)>
public "preparePlacement"(arg0: $Direction$Type): void
public "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
public "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
public "getRenderHue"(): integer
public "useStaticRenderer"(): boolean
public "getWireType"(): $WireType
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "getIcon"(): $TextureAtlasSprite
public "getDrops"(): $Iterable<($ItemStack)>
public "readUpdate"(arg0: $MCDataInput$Type): void
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public static "addHitEffects"(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
get "bounds"(): $Cuboid6
get "type"(): $MultipartType<(any)>
get "renderHue"(): integer
get "wireType"(): $WireType
get "icon"(): $TextureAtlasSprite
get "drops"(): $Iterable<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseWirePart$Type = ($BaseWirePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseWirePart_ = $BaseWirePart$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$ScrewdriverItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScrewdriver, $IScrewdriver$Type} from "packages/mrtjp/projectred/api/$IScrewdriver"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScrewdriverItem extends $Item implements $IScrewdriver {
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

public "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
public "damageScrewdriver"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrewdriverItem$Type = ($ScrewdriverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrewdriverItem_ = $ScrewdriverItem$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$DrawPlateItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CraftingDamageItem, $CraftingDamageItem$Type} from "packages/mrtjp/projectred/core/item/$CraftingDamageItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DrawPlateItem extends $CraftingDamageItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawPlateItem$Type = ($DrawPlateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawPlateItem_ = $DrawPlateItem$Type;
}}
declare module "packages/mrtjp/projectred/transmission/item/$CenterWirePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CenterWirePartItem extends $ItemMultipart {
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

constructor(arg0: $WireType$Type)

public "getType"(): $WireType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CenterWirePartItem$Type = ($CenterWirePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CenterWirePartItem_ = $CenterWirePartItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/item/$BaseGatePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseGatePartItem extends $ItemMultipart {
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

constructor(arg0: $Item$Properties$Type, arg1: $GateType$Type)

public "getGateType"(): $GateType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "gateType"(): $GateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGatePartItem$Type = ($BaseGatePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseGatePartItem_ = $BaseGatePartItem$Type;
}}
declare module "packages/mrtjp/projectred/core/block/$ProjectRedBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
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
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ProjectRedBlock extends $Block implements $EntityBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_PROPERTIES": $BlockBehaviour$Properties
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
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
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
export type $ProjectRedBlock$Type = ($ProjectRedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectRedBlock_ = $ProjectRedBlock$Type;
}}
declare module "packages/mrtjp/projectred/transmission/item/$FaceWirePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$WireType, $WireType$Type} from "packages/mrtjp/projectred/transmission/$WireType"
import {$ItemMultipart, $ItemMultipart$Type} from "packages/codechicken/multipart/api/$ItemMultipart"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FaceWirePartItem extends $ItemMultipart {
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

constructor(arg0: $WireType$Type)

public "getType"(): $WireType
public "newPart"(arg0: $MultipartPlaceContext$Type): $MultiPart
get "type"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceWirePartItem$Type = ($FaceWirePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceWirePartItem_ = $FaceWirePartItem$Type;
}}
declare module "packages/mrtjp/projectred/api/$IConnectable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConnectable {

 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectable$Type = ($IConnectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectable_ = $IConnectable$Type;
}}
declare module "packages/mrtjp/projectred/api/$IScrewdriver" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IScrewdriver {

 "canUse"(arg0: $Player$Type, arg1: $ItemStack$Type): boolean
 "damageScrewdriver"(arg0: $Player$Type, arg1: $ItemStack$Type): void
}

export namespace $IScrewdriver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrewdriver$Type = ($IScrewdriver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrewdriver_ = $IScrewdriver$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$CraftingDamageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CraftingDamageItem extends $Item {
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

public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingDamageItem$Type = ($CraftingDamageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingDamageItem_ = $CraftingDamageItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/part/$GatePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseMultipart, $BaseMultipart$Type} from "packages/codechicken/multipart/api/part/$BaseMultipart"
import {$Transformation, $Transformation$Type} from "packages/codechicken/lib/vec/$Transformation"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IconHitEffectsPart, $IconHitEffectsPart$Type} from "packages/codechicken/multipart/api/part/$IconHitEffectsPart"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$NormalOcclusionPart, $NormalOcclusionPart$Type} from "packages/codechicken/multipart/api/part/$NormalOcclusionPart"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$MultipartPlaceContext, $MultipartPlaceContext$Type} from "packages/codechicken/multipart/util/$MultipartPlaceContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PartRayTraceResult, $PartRayTraceResult$Type} from "packages/codechicken/multipart/util/$PartRayTraceResult"
import {$FacePart, $FacePart$Type} from "packages/codechicken/multipart/api/part/$FacePart"
import {$IConnectableFacePart, $IConnectableFacePart$Type} from "packages/mrtjp/projectred/core/part/$IConnectableFacePart"
import {$IGateRenderData, $IGateRenderData$Type} from "packages/mrtjp/projectred/integration/part/$IGateRenderData"
import {$TickablePart, $TickablePart$Type} from "packages/codechicken/multipart/api/part/$TickablePart"
import {$Cuboid6, $Cuboid6$Type} from "packages/codechicken/lib/vec/$Cuboid6"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IOrientableFacePart, $IOrientableFacePart$Type} from "packages/mrtjp/projectred/core/part/$IOrientableFacePart"
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GatePart extends $BaseMultipart implements $IConnectableFacePart, $IOrientableFacePart, $TickablePart, $FacePart, $NormalOcclusionPart, $IconHitEffectsPart, $IGateRenderData {

constructor(arg0: $GateType$Type)

public "shape"(): integer
public "tick"(): void
public "getShape"(arg0: $CollisionContext$Type): $VoxelShape
public "readDesc"(arg0: $MCDataInput$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getBounds"(): $Cuboid6
public "save"(arg0: $CompoundTag$Type): void
public "getType"(): $MultipartType<(any)>
public "preparePlacement"(arg0: $MultipartPlaceContext$Type): boolean
public "getGateType"(): $GateType
public "getRenderIndex"(): integer
public "maskChangeEvent"(arg0: boolean, arg1: boolean): void
public "isTickScheduled"(): boolean
public "setRenderFlag"(arg0: $IConnectable$Type): boolean
public "discoverOpen"(arg0: integer): boolean
public "getBreakingIcon"(arg0: $PartRayTraceResult$Type): $TextureAtlasSprite
public "getBrokenIcon"(arg0: integer): $TextureAtlasSprite
public "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
public "canConnectCorner"(arg0: integer): boolean
public "setRotation"(arg0: integer): void
public "scheduleTick"(arg0: integer): void
public "scheduledTick"(): void
public "onChunkLoad"(arg0: $LevelChunk$Type): void
public "getRotation"(): integer
public "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
public "getOrientation"(): integer
public "getOcclusionShape"(): $VoxelShape
public "onPartChanged"(arg0: $MultiPart$Type): void
public "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
public "getSlotMask"(): integer
public "getBlockSupportShape"(): $VoxelShape
public "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
public "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
public "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getSide"(): integer
public "setSide"(arg0: integer): void
public "getLightEmission"(): integer
public "getDrops"(): $Iterable<($ItemStack)>
public "onAdded"(): void
public "setShape"(arg0: integer): void
public "writeDesc"(arg0: $MCDataOutput$Type): void
public "readUpdate"(arg0: $MCDataInput$Type): void
public "onRemoved"(): void
public "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "getConnMap"(): integer
public "setConnMap"(arg0: integer): void
public "getInternal"(arg0: integer): $IConnectable
public "notifyAllExternals"(): void
public static "absoluteDir"(arg0: $IConnectableFacePart$Type, arg1: integer): integer
public static "absoluteRot"(arg0: $IConnectableFacePart$Type, arg1: integer): integer
public "rotFromInternal"(arg0: integer): integer
public "maskConnectsInside"(arg0: integer): boolean
public "maskConnectsCenter"(): boolean
public "insideCornerEdgeOpen"(arg0: integer): boolean
public "discoverCornerOverride"(arg0: integer): boolean
public "discoverStraightOverride"(arg0: integer): boolean
public "discoverInternal"(arg0: integer): boolean
public "discoverInternalOverride"(arg0: integer): boolean
public "discoverCenter"(): boolean
public "shouldDiscoverCenter"(): boolean
public "updateOpenConns"(): boolean
public "updateExternalConns"(): boolean
public "updateInternalConns"(): boolean
public "posOfStraight"(arg0: integer): $BlockPos
public "posOfCorner"(arg0: integer): $BlockPos
public "rotFromStraight"(arg0: integer): integer
public "rotFromCorner"(arg0: integer): integer
public "notifyStraight"(arg0: integer): void
public "notifyCorner"(arg0: integer): void
public "maskConnects"(arg0: integer): boolean
public "notifyExternals"(arg0: integer): void
public "getStraight"(arg0: integer): $IConnectable
public "maskConnectsStraight"(arg0: integer): boolean
public "maskConnectsCorner"(arg0: integer): boolean
public "outsideCornerEdgeOpen"(arg0: integer): boolean
public "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "discoverStraight"(arg0: integer): boolean
public "discoverCorner"(arg0: integer): integer
public "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
public "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
public "getCenter"(): $IConnectable
public "maskOpen"(arg0: integer): boolean
public "getCorner"(arg0: integer): $IConnectable
public "absoluteDir"(arg0: integer): integer
public "absoluteRot"(arg0: integer): integer
public "onOrientationChange"(): void
public "toInternalMask"(arg0: integer): integer
public "toAbsoluteMask"(arg0: integer): integer
public "toInternal"(arg0: integer): integer
public "rotationT"(): $Transformation
public "toAbsolute"(arg0: integer): integer
public static "shiftMask"(arg0: integer, arg1: integer): integer
public static "flipMaskZ"(arg0: integer): integer
public "redstoneConductionMap"(): integer
public "occlusionTest"(arg0: $MultiPart$Type): boolean
public static "addHitEffects"(arg0: $IconHitEffectsPart$Type, arg1: $PartRayTraceResult$Type, arg2: $ParticleEngine$Type): void
public "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type, arg2: boolean): void
public static "addDestroyEffects"(arg0: $IconHitEffectsPart$Type, arg1: $ParticleEngine$Type): void
public "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
public "state"(): integer
public "pointerValue"(): integer
public "segmentColour"(): byte
public "bottomSignal"(): byte
public "topSignalConnMask"(): integer
public "getGateName"(): string
public "hasRuntimeError"(): boolean
public "isPointerStarted"(): boolean
public "state2"(): integer
public "worldPos"(): $BlockPos
public "pointerMax"(): integer
public "bOutput0"(): short
public "bOutput1"(): short
public "bOutput2"(): short
public "bOutput3"(): short
public "bInput0"(): short
public "bInput1"(): short
public "bInput2"(): short
public "bInput3"(): short
public "rsIO"(): integer
public "bInHigh"(): integer
public "topSignal"(): byte
public "updateOutward"(): void
public "updateOutside"(): void
public "updateInsideAndOutside"(): void
get "bounds"(): $Cuboid6
get "type"(): $MultipartType<(any)>
get "gateType"(): $GateType
get "renderIndex"(): integer
get "tickScheduled"(): boolean
set "renderFlag"(value: $IConnectable$Type)
set "rotation"(value: integer)
get "rotation"(): integer
get "orientation"(): integer
get "occlusionShape"(): $VoxelShape
get "slotMask"(): integer
get "blockSupportShape"(): $VoxelShape
get "side"(): integer
set "side"(value: integer)
get "lightEmission"(): integer
get "drops"(): $Iterable<($ItemStack)>
get "connMap"(): integer
set "connMap"(value: integer)
get "center"(): $IConnectable
get "gateName"(): string
get "pointerStarted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatePart$Type = ($GatePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatePart_ = $GatePart$Type;
}}
declare module "packages/mrtjp/projectred/integration/item/$GatePartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GateType, $GateType$Type} from "packages/mrtjp/projectred/integration/$GateType"
import {$BaseGatePartItem, $BaseGatePartItem$Type} from "packages/mrtjp/projectred/integration/item/$BaseGatePartItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GatePartItem extends $BaseGatePartItem {
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

constructor(arg0: $GateType$Type)

public "getGateType"(): $GateType
get "gateType"(): $GateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatePartItem$Type = ($GatePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatePartItem_ = $GatePartItem$Type;
}}
declare module "packages/mrtjp/projectred/integration/part/$IGateRenderData" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IGateRenderData {

 "shape"(): integer
 "state"(): integer
 "getRenderIndex"(): integer
 "pointerValue"(): integer
 "segmentColour"(): byte
 "bottomSignal"(): byte
 "topSignalConnMask"(): integer
 "getGateName"(): string
 "hasRuntimeError"(): boolean
 "isPointerStarted"(): boolean
 "getOrientation"(): integer
 "state2"(): integer
 "worldPos"(): $BlockPos
 "pointerMax"(): integer
 "bOutput0"(): short
 "bOutput1"(): short
 "bOutput2"(): short
 "bOutput3"(): short
 "bInput0"(): short
 "bInput1"(): short
 "bInput2"(): short
 "bInput3"(): short
 "rsIO"(): integer
 "bInHigh"(): integer
 "topSignal"(): byte
}

export namespace $IGateRenderData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGateRenderData$Type = ($IGateRenderData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGateRenderData_ = $IGateRenderData$Type;
}}
declare module "packages/mrtjp/projectred/core/item/$MultimeterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MultimeterItem extends $Item {
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

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultimeterItem$Type = ($MultimeterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultimeterItem_ = $MultimeterItem$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IConnectableFacePart" {
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
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"
import {$TileMultipart, $TileMultipart$Type} from "packages/codechicken/multipart/block/$TileMultipart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$MultiPart, $MultiPart$Type} from "packages/codechicken/multipart/api/part/$MultiPart"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IConnectablePart, $IConnectablePart$Type} from "packages/mrtjp/projectred/core/part/$IConnectablePart"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$CapabilityCache, $CapabilityCache$Type} from "packages/codechicken/lib/capability/$CapabilityCache"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IConnectableFacePart extends $MultiPart, $IConnectablePart {

 "getInternal"(arg0: integer): $IConnectable
 "notifyAllExternals"(): void
 "setRenderFlag"(arg0: $IConnectable$Type): boolean
 "discoverOpen"(arg0: integer): boolean
 "rotFromInternal"(arg0: integer): integer
 "maskConnectsInside"(arg0: integer): boolean
 "maskConnectsCenter"(): boolean
 "insideCornerEdgeOpen"(arg0: integer): boolean
 "discoverCornerOverride"(arg0: integer): boolean
 "discoverStraightOverride"(arg0: integer): boolean
 "discoverInternal"(arg0: integer): boolean
 "discoverInternalOverride"(arg0: integer): boolean
 "discoverCenter"(): boolean
 "shouldDiscoverCenter"(): boolean
 "updateOpenConns"(): boolean
 "updateExternalConns"(): boolean
 "updateInternalConns"(): boolean
 "posOfStraight"(arg0: integer): $BlockPos
 "posOfCorner"(arg0: integer): $BlockPos
 "rotFromStraight"(arg0: integer): integer
 "rotFromCorner"(arg0: integer): integer
 "notifyStraight"(arg0: integer): void
 "notifyCorner"(arg0: integer): void
 "maskConnects"(arg0: integer): boolean
 "notifyExternals"(arg0: integer): void
 "getStraight"(arg0: integer): $IConnectable
 "maskConnectsStraight"(arg0: integer): boolean
 "maskConnectsCorner"(arg0: integer): boolean
 "outsideCornerEdgeOpen"(arg0: integer): boolean
 "canConnectPart"(arg0: $IConnectable$Type, arg1: integer): boolean
 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "discoverStraight"(arg0: integer): boolean
 "discoverCorner"(arg0: integer): integer
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "getSide"(): integer
 "getCenter"(): $IConnectable
 "maskOpen"(arg0: integer): boolean
 "getCorner"(arg0: integer): $IConnectable
 "level"(): $Level
 "getShape"(arg0: $CollisionContext$Type): $VoxelShape
 "readDesc"(arg0: $MCDataInput$Type): void
 "load"(arg0: $CompoundTag$Type): void
 "save"(arg0: $CompoundTag$Type): void
 "getType"(): $MultipartType<(any)>
 "pos"(): $BlockPos
 "scheduleTick"(arg0: integer): void
 "scheduledTick"(): void
 "onChunkLoad"(arg0: $LevelChunk$Type): void
 "onChunkUnload"(): void
 "addHitEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "addDestroyEffects"(arg0: $PartRayTraceResult$Type, arg1: $ParticleEngine$Type): void
 "getStrength"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): float
 "onEntityCollision"(arg0: $Entity$Type): void
 "onWorldJoin"(): void
 "getRenderBounds"(): $Cuboid6
 "onPartChanged"(arg0: $MultiPart$Type): void
 "onEntityStanding"(arg0: $Entity$Type): void
 "invalidateConvertedTile"(): void
 "onConverted"(): void
 "onWorldSeparate"(): void
 "getPlacementSound"(arg0: $UseOnContext$Type): $SoundType
 "occlusionTest"(arg0: $MultiPart$Type): boolean
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getRenderOcclusionShape"(): $VoxelShape
 "getInteractionShape"(): $VoxelShape
 "getVisualShape"(arg0: $CollisionContext$Type): $VoxelShape
 "getBlockSupportShape"(): $VoxelShape
 "getCloneStack"(arg0: $PartRayTraceResult$Type): $ItemStack
 "onNeighborBlockChanged"(arg0: $BlockPos$Type): void
 "activate"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type, arg3: $InteractionHand$Type): $InteractionResult
 "addRunningEffects"(arg0: $PartRayTraceResult$Type, arg1: $Entity$Type): void
 "getExplosionResistance"(arg0: $Explosion$Type): float
 "getLightEmission"(): integer
 "addLandingEffects"(arg0: $PartRayTraceResult$Type, arg1: $Vector3$Type, arg2: integer): void
 "tile"(): $TileMultipart
 "getDrops"(): $Iterable<($ItemStack)>
 "onMoved"(): void
 "onAdded"(): void
 "writeDesc"(arg0: $MCDataOutput$Type): void
 "hasTile"(): boolean
 "hasLevel"(): boolean
 "capCache"(): $CapabilityCache
 "readUpdate"(arg0: $MCDataInput$Type): void
 "harvest"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type): void
 "preRemove"(): void
 "onRemoved"(): void
 "click"(arg0: $Player$Type, arg1: $PartRayTraceResult$Type, arg2: $ItemStack$Type): void
 "sendUpdate"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
 "updateOutward"(): void
 "updateOutside"(): void
 "updateInsideAndOutside"(): void
 "maskChangeEvent"(arg0: boolean, arg1: boolean): void
 "getConnMap"(): integer
 "setConnMap"(arg0: integer): void
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectableFacePart {
function absoluteDir(arg0: $IConnectableFacePart$Type, arg1: integer): integer
function absoluteRot(arg0: $IConnectableFacePart$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectableFacePart$Type = ($IConnectableFacePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectableFacePart_ = $IConnectableFacePart$Type;
}}
declare module "packages/mrtjp/projectred/core/block/$ElectrotineGeneratorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProjectRedBlock, $ProjectRedBlock$Type} from "packages/mrtjp/projectred/core/block/$ProjectRedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ElectrotineGeneratorBlock extends $ProjectRedBlock {
static readonly "SIDE": $IntegerProperty
static readonly "ROTATION": $IntegerProperty
static readonly "CHARGED": $BooleanProperty
static readonly "WORKING": $BooleanProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "WOODEN_PROPERTIES": $BlockBehaviour$Properties
static readonly "STONE_PROPERTIES": $BlockBehaviour$Properties
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrotineGeneratorBlock$Type = ($ElectrotineGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrotineGeneratorBlock_ = $ElectrotineGeneratorBlock$Type;
}}
declare module "packages/mrtjp/projectred/core/part/$IConnectablePart" {
import {$IConnectable, $IConnectable$Type} from "packages/mrtjp/projectred/api/$IConnectable"

export interface $IConnectablePart extends $IConnectable {

 "updateOutward"(): void
 "updateOutside"(): void
 "updateInsideAndOutside"(): void
 "notifyAllExternals"(): void
 "maskChangeEvent"(arg0: boolean, arg1: boolean): void
 "updateOpenConns"(): boolean
 "updateExternalConns"(): boolean
 "updateInternalConns"(): boolean
 "getConnMap"(): integer
 "setConnMap"(arg0: integer): void
 "connectStraight"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectCorner"(arg0: $IConnectable$Type, arg1: integer, arg2: integer): boolean
 "connectInternal"(arg0: $IConnectable$Type, arg1: integer): boolean
 "canConnectCorner"(arg0: integer): boolean
}

export namespace $IConnectablePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectablePart$Type = ($IConnectablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConnectablePart_ = $IConnectablePart$Type;
}}
declare module "packages/mrtjp/projectred/transmission/$WireType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TextureStitchEvent$Post, $TextureStitchEvent$Post$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseWirePart, $BaseWirePart$Type} from "packages/mrtjp/projectred/transmission/part/$BaseWirePart"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DeferredRegister, $DeferredRegister$Type} from "packages/net/minecraftforge/registries/$DeferredRegister"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$EnumColour, $EnumColour$Type} from "packages/codechicken/lib/colour/$EnumColour"
import {$MultipartType, $MultipartType$Type} from "packages/codechicken/multipart/api/$MultipartType"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $WireType extends $Enum<($WireType)> {
static readonly "RED_ALLOY": $WireType
static readonly "INSULATED_WHITE": $WireType
static readonly "INSULATED_ORANGE": $WireType
static readonly "INSULATED_MAGENTA": $WireType
static readonly "INSULATED_LIGHT_BLUE": $WireType
static readonly "INSULATED_YELLOW": $WireType
static readonly "INSULATED_LIME": $WireType
static readonly "INSULATED_PINK": $WireType
static readonly "INSULATED_GRAY": $WireType
static readonly "INSULATED_LIGHT_GRAY": $WireType
static readonly "INSULATED_CYAN": $WireType
static readonly "INSULATED_PURPLE": $WireType
static readonly "INSULATED_BLUE": $WireType
static readonly "INSULATED_BROWN": $WireType
static readonly "INSULATED_GREEN": $WireType
static readonly "INSULATED_RED": $WireType
static readonly "INSULATED_BLACK": $WireType
static readonly "BUNDLED_NEUTRAL": $WireType
static readonly "BUNDLED_WHITE": $WireType
static readonly "BUNDLED_ORANGE": $WireType
static readonly "BUNDLED_MAGENTA": $WireType
static readonly "BUNDLED_LIGHT_BLUE": $WireType
static readonly "BUNDLED_YELLOW": $WireType
static readonly "BUNDLED_LIME": $WireType
static readonly "BUNDLED_PINK": $WireType
static readonly "BUNDLED_GRAY": $WireType
static readonly "BUNDLED_LIGHT_GRAY": $WireType
static readonly "BUNDLED_CYAN": $WireType
static readonly "BUNDLED_PURPLE": $WireType
static readonly "BUNDLED_BLUE": $WireType
static readonly "BUNDLED_BROWN": $WireType
static readonly "BUNDLED_GREEN": $WireType
static readonly "BUNDLED_RED": $WireType
static readonly "BUNDLED_BLACK": $WireType
static readonly "POWER_LOWLOAD": $WireType
static readonly "FRAMED_RED_ALLOY": $WireType
static readonly "FRAMED_INSULATED_WHITE": $WireType
static readonly "FRAMED_INSULATED_ORANGE": $WireType
static readonly "FRAMED_INSULATED_MAGENTA": $WireType
static readonly "FRAMED_INSULATED_LIGHT_BLUE": $WireType
static readonly "FRAMED_INSULATED_YELLOW": $WireType
static readonly "FRAMED_INSULATED_LIME": $WireType
static readonly "FRAMED_INSULATED_PINK": $WireType
static readonly "FRAMED_INSULATED_GRAY": $WireType
static readonly "FRAMED_INSULATED_LIGHT_GRAY": $WireType
static readonly "FRAMED_INSULATED_CYAN": $WireType
static readonly "FRAMED_INSULATED_PURPLE": $WireType
static readonly "FRAMED_INSULATED_BLUE": $WireType
static readonly "FRAMED_INSULATED_BROWN": $WireType
static readonly "FRAMED_INSULATED_GREEN": $WireType
static readonly "FRAMED_INSULATED_RED": $WireType
static readonly "FRAMED_INSULATED_BLACK": $WireType
static readonly "FRAMED_BUNDLED_NEUTRAL": $WireType
static readonly "FRAMED_BUNDLED_WHITE": $WireType
static readonly "FRAMED_BUNDLED_ORANGE": $WireType
static readonly "FRAMED_BUNDLED_MAGENTA": $WireType
static readonly "FRAMED_BUNDLED_LIGHT_BLUE": $WireType
static readonly "FRAMED_BUNDLED_YELLOW": $WireType
static readonly "FRAMED_BUNDLED_LIME": $WireType
static readonly "FRAMED_BUNDLED_PINK": $WireType
static readonly "FRAMED_BUNDLED_GRAY": $WireType
static readonly "FRAMED_BUNDLED_LIGHT_GRAY": $WireType
static readonly "FRAMED_BUNDLED_CYAN": $WireType
static readonly "FRAMED_BUNDLED_PURPLE": $WireType
static readonly "FRAMED_BUNDLED_BLUE": $WireType
static readonly "FRAMED_BUNDLED_BROWN": $WireType
static readonly "FRAMED_BUNDLED_GREEN": $WireType
static readonly "FRAMED_BUNDLED_RED": $WireType
static readonly "FRAMED_BUNDLED_BLACK": $WireType
static readonly "FRAMED_POWER_LOWLOAD": $WireType
static readonly "INSULATED_WIRES": ($WireType)[]
static readonly "COLOURED_BUNDLED_WIRES": ($WireType)[]
static readonly "FRAMED_INSULATED_WIRES": ($WireType)[]
static readonly "FRAMED_COLOURED_BUNDLED_WIRES": ($WireType)[]


public "getItem"(): $Item
public static "values"(): ($WireType)[]
public static "valueOf"(arg0: string): $WireType
public "registerParts"(arg0: $DeferredRegister$Type<($MultipartType$Type<(any)>)>, arg1: $DeferredRegister$Type<($Item$Type)>): void
public "isCenterPart"(): boolean
public "getColourIdx"(): integer
public "getThickness"(): integer
public "getItemColour"(): integer
public "onTextureStitchEvent"(arg0: $TextureStitchEvent$Post$Type): void
public "getItemRegistryObject"(): $RegistryObject<($Item)>
public "getPartType"(): $MultipartType<($BaseWirePart)>
public "getTextures"(): $List<($TextureAtlasSprite)>
public "getUnlocalizedName"(): string
public "getColour"(): $EnumColour
public "newPart"(): $BaseWirePart
public "makeStack"(): $ItemStack
get "item"(): $Item
get "centerPart"(): boolean
get "colourIdx"(): integer
get "thickness"(): integer
get "itemColour"(): integer
get "itemRegistryObject"(): $RegistryObject<($Item)>
get "partType"(): $MultipartType<($BaseWirePart)>
get "textures"(): $List<($TextureAtlasSprite)>
get "unlocalizedName"(): string
get "colour"(): $EnumColour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$Type = (("bundled_white") | ("insulated_red") | ("bundled_black") | ("framed_insulated_green") | ("framed_bundled_green") | ("framed_bundled_neutral") | ("insulated_lime") | ("framed_bundled_cyan") | ("bundled_neutral") | ("bundled_cyan") | ("framed_bundled_purple") | ("insulated_orange") | ("framed_insulated_brown") | ("framed_insulated_purple") | ("framed_bundled_brown") | ("bundled_yellow") | ("framed_power_lowload") | ("insulated_cyan") | ("framed_bundled_lime") | ("framed_bundled_blue") | ("insulated_brown") | ("framed_insulated_lime") | ("insulated_magenta") | ("framed_bundled_light_blue") | ("framed_insulated_blue") | ("framed_insulated_red") | ("framed_bundled_light_gray") | ("framed_insulated_light_gray") | ("insulated_green") | ("bundled_magenta") | ("framed_insulated_gray") | ("framed_insulated_light_blue") | ("insulated_yellow") | ("framed_bundled_pink") | ("bundled_light_gray") | ("insulated_white") | ("framed_insulated_pink") | ("bundled_green") | ("framed_insulated_yellow") | ("bundled_pink") | ("bundled_light_blue") | ("framed_red_alloy") | ("insulated_purple") | ("framed_insulated_white") | ("framed_insulated_orange") | ("framed_bundled_black") | ("framed_bundled_gray") | ("bundled_gray") | ("bundled_red") | ("bundled_orange") | ("framed_bundled_orange") | ("framed_insulated_black") | ("bundled_purple") | ("insulated_gray") | ("bundled_lime") | ("bundled_blue") | ("insulated_light_blue") | ("framed_bundled_magenta") | ("insulated_pink") | ("insulated_blue") | ("framed_insulated_magenta") | ("bundled_brown") | ("insulated_black") | ("power_lowload") | ("framed_bundled_white") | ("framed_bundled_yellow") | ("red_alloy") | ("framed_bundled_red") | ("insulated_light_gray") | ("framed_insulated_cyan")) | ($WireType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$Type;
}}

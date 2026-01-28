declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$ColliderEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$IHaveIcons, $IHaveIcons$Type} from "packages/com/alekiponi/alekiships/common/entity/$IHaveIcons"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AbstractPassthroughHelper, $AbstractPassthroughHelper$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$AbstractPassthroughHelper"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $ColliderEntity extends $AbstractPassthroughHelper implements $IHaveIcons {
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public static "canVehicleCollide"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "canBeCollidedWith"(): boolean
public "tick"(): void
public "getDimensions"(arg0: $Pose$Type): $EntityDimensions
public "canCollideWith"(arg0: $Entity$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColliderEntity$Type = ($ColliderEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColliderEntity_ = $ColliderEntity$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IHaveCompartments, $IHaveCompartments$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclecapability/$IHaveCompartments"
import {$IHaveColliders, $IHaveColliders$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclecapability/$IHaveColliders"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$VehiclePart, $VehiclePart$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$VehiclePart"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$IHaveIcons, $IHaveIcons$Type} from "packages/com/alekiponi/alekiships/common/entity/$IHaveIcons"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EmptyCompartmentEntity, $EmptyCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$EmptyCompartmentEntity"
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ColliderEntity, $ColliderEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$ColliderEntity"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$AbstractCompartmentEntity$RidingPose, $AbstractCompartmentEntity$RidingPose$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity$RidingPose"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractVehicle$MediumStatus, $AbstractVehicle$MediumStatus$Type} from "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle$MediumStatus"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"

export class $AbstractVehicle extends $Entity implements $IHaveIcons, $IHaveColliders, $IHaveCompartments {
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getAcceleration"(): float
public "everyNthTickUnique"(arg0: integer): boolean
public "hasAllParts"(): boolean
public "collectLivingPassengers"(): $List<($Entity)>
public "getWaterLevelAbove"(): float
public "getRidingPoses"(): ($AbstractCompartmentEntity$RidingPose)[]
public "getGroundFriction"(): float
public "collectEntitesToTakeWith"(): $List<($Entity)>
/**
 * 
 * @deprecated
 */
public "getDropItem"(): $Item
public "getDeathDamageThreshold"(): float
public "setHurtTime"(arg0: integer): void
public static "canVehicleCollide"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "getDamageThreshold"(): float
public "hasAllHelpers"(): boolean
public "getCompartmentBlockLight"(): integer
public "isFunctional"(): boolean
public "getPassengerSizeLimit"(): float
public "renderCleatKnotSides"(): boolean
public "renderSizeForCompartments"(): float
public "collectPlayerPassengers"(): $List<($Player)>
public "collectPlayersToTakeWith"(): $List<($Player)>
public "getMaxPassengers"(): integer
public "countVehicleHelpers"(): integer
public "collectVehicleParts"(): $List<($VehiclePart)>
public "collectVehicleHelpers"(): $List<($Entity)>
public "collectCompartments"(): $List<($AbstractCompartmentEntity)>
public "getLootTableSeed"(): long
public "getLootTable"(): $ResourceLocation
public "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
public "getSmoothSpeedMS"(): double
public "getPilotCompartment"(): $EmptyCompartmentEntity
public "setAcceleration"(arg0: float): void
public "getDeltaRotation"(): float
public "setDeltaRotation"(arg0: float): void
public "getDamageRecovery"(): float
public "getHurtTime"(): integer
public "getStatus"(): $AbstractVehicle$MediumStatus
public "getPassengersRidingOffset"(): double
public "canBeCollidedWith"(): boolean
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer, arg6: boolean): void
public "pilotCompartmentAcceptsNonPlayers"(): boolean
public "getDefaultColliderDimensions"(): (float)[]
public "checkIfNeedsPassengerUpdate"(): void
public "setFlaggedForPassengerUpdate"(arg0: boolean): void
public "isFlaggedForPassengerUpdate"(): boolean
public "getPilotVehiclePartAsEntity"(): $Entity
public "tick"(): void
public "isUnderWater"(): boolean
public "animateHurt"(arg0: float): void
public "getDamage"(): float
public "onAboveBubbleCol"(arg0: boolean): void
public "onInsideBubbleColumn"(arg0: boolean): void
public "canCollideWith"(arg0: $Entity$Type): boolean
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "getControllingPassenger"(): $LivingEntity
public "push"(arg0: $Entity$Type): void
public "isPushable"(): boolean
public "isPickable"(): boolean
public "shouldShowName"(): boolean
public "getMotionDirection"(): $Direction
public "getBoundingBoxForCulling"(): $AABB
public "getPickResult"(): $ItemStack
public "setDamage"(arg0: float): void
public "getHurtDir"(): integer
public "setHurtDir"(arg0: integer): void
public "getColliders"(arg0: $AbstractVehicle$Type): $ArrayList<($ColliderEntity)>
public "getColliders"(): $ArrayList<($ColliderEntity)>
public "getColliderIndices"(): (integer)[]
public "getCompartmentRotation"(arg0: integer): integer
public "getCompartments"(): $ArrayList<($AbstractCompartmentEntity)>
public "getCompartmentIndices"(): (integer)[]
public "getCompartmentRotationsArray"(): ((integer)[])[]
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "acceleration"(): float
get "waterLevelAbove"(): float
get "ridingPoses"(): ($AbstractCompartmentEntity$RidingPose)[]
get "groundFriction"(): float
get "dropItem"(): $Item
get "deathDamageThreshold"(): float
set "hurtTime"(value: integer)
get "damageThreshold"(): float
get "compartmentBlockLight"(): integer
get "functional"(): boolean
get "passengerSizeLimit"(): float
get "maxPassengers"(): integer
get "lootTableSeed"(): long
get "lootTable"(): $ResourceLocation
get "smoothSpeedMS"(): double
get "pilotCompartment"(): $EmptyCompartmentEntity
set "acceleration"(value: float)
get "deltaRotation"(): float
set "deltaRotation"(value: float)
get "damageRecovery"(): float
get "hurtTime"(): integer
get "status"(): $AbstractVehicle$MediumStatus
get "passengersRidingOffset"(): double
get "defaultColliderDimensions"(): (float)[]
set "flaggedForPassengerUpdate"(value: boolean)
get "flaggedForPassengerUpdate"(): boolean
get "pilotVehiclePartAsEntity"(): $Entity
get "underWater"(): boolean
get "damage"(): float
get "controllingPassenger"(): $LivingEntity
get "pushable"(): boolean
get "pickable"(): boolean
get "motionDirection"(): $Direction
get "boundingBoxForCulling"(): $AABB
get "pickResult"(): $ItemStack
set "damage"(value: float)
get "hurtDir"(): integer
set "hurtDir"(value: integer)
get "colliders"(): $ArrayList<($ColliderEntity)>
get "colliderIndices"(): (integer)[]
get "compartments"(): $ArrayList<($AbstractCompartmentEntity)>
get "compartmentIndices"(): (integer)[]
get "compartmentRotationsArray"(): ((integer)[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractVehicle$Type = ($AbstractVehicle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractVehicle_ = $AbstractVehicle$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclecapability/$IHaveCompartments" {
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"

export interface $IHaveCompartments {

 "getCompartmentRotation"(arg0: integer): integer
 "getCompartments"(): $ArrayList<($AbstractCompartmentEntity)>
 "getCompartmentIndices"(): (integer)[]
 "getCompartmentRotationsArray"(): ((integer)[])[]
}

export namespace $IHaveCompartments {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveCompartments$Type = ($IHaveCompartments);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveCompartments_ = $IHaveCompartments$Type;
}}
declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ExplosionAccessor" {
import {$ExplosionDamageCalculator, $ExplosionDamageCalculator$Type} from "packages/net/minecraft/world/level/$ExplosionDamageCalculator"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ExplosionAccessor {

 "getSource"(): $Entity
 "x"(): double
 "z"(): double
 "y"(): double
 "getDamageCalculator"(): $ExplosionDamageCalculator
 "getHitPlayers"(): $Map<($Player), ($Vec3)>
 "getLevel"(): $Level
 "getRadius"(): float
 "getToBlow"(): $ObjectArrayList<($BlockPos)>
}

export namespace $ExplosionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionAccessor$Type = ($ExplosionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionAccessor_ = $ExplosionAccessor$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType$StackCompartmentFactory" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"
import {$CompartmentType, $CompartmentType$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType"

export interface $CompartmentType$StackCompartmentFactory<T extends $AbstractCompartmentEntity> {

 "create"(arg0: $CompartmentType$Type<(T)>, arg1: $Level$Type, arg2: $ItemStack$Type): T

(arg0: $CompartmentType$Type<(T)>, arg1: $Level$Type, arg2: $ItemStack$Type): T
}

export namespace $CompartmentType$StackCompartmentFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompartmentType$StackCompartmentFactory$Type<T> = ($CompartmentType$StackCompartmentFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompartmentType$StackCompartmentFactory_<T> = $CompartmentType$StackCompartmentFactory$Type<(T)>;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$OarlockBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AbstractHullSideBlock, $AbstractHullSideBlock$Type} from "packages/com/alekiponi/alekiships/common/block/$AbstractHullSideBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
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
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OarlockBlock extends $AbstractHullSideBlock {
static readonly "FACING": $DirectionProperty
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


public "validateMultiblock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "validateOarlocks"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "validateFrames"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OarlockBlock$Type = ($OarlockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OarlockBlock_ = $OarlockBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$AbstractPassthroughHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractHelper, $AbstractHelper$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$AbstractHelper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$IHaveIcons, $IHaveIcons$Type} from "packages/com/alekiponi/alekiships/common/entity/$IHaveIcons"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $AbstractPassthroughHelper extends $AbstractHelper implements $IHaveIcons {
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
public "interact"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public "getName"(): $Component
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "isPickable"(): boolean
public static "hurt"(arg0: $Entity$Type, arg1: $DamageSource$Type, arg2: float): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "name"(): $Component
get "pickable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPassthroughHelper$Type = ($AbstractPassthroughHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPassthroughHelper_ = $AbstractPassthroughHelper$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AbstractVehicle, $AbstractVehicle$Type} from "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$CompartmentType, $CompartmentType$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$IHaveIcons, $IHaveIcons$Type} from "packages/com/alekiponi/alekiships/common/entity/$IHaveIcons"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$AbstractCompartmentEntity$RidingPose, $AbstractCompartmentEntity$RidingPose$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity$RidingPose"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $AbstractCompartmentEntity extends $Entity implements $IHaveIcons {
 "lifespan": integer
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $CompartmentType$Type<(any)>, arg1: $Level$Type)

public "getBuoyancy"(): double
public "getTrueVehicle"(): $AbstractVehicle
public "getRidingPose"(): $AbstractCompartmentEntity$RidingPose
public "shouldFaceOtherWay"(): boolean
public "everyNthTickUnique"(arg0: integer): boolean
public "setHurtTime"(arg0: integer): void
public "getCompartmentBlockLight"(): integer
public "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
public "getHurtTime"(): integer
public "getMyRidingOffset"(): double
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer, arg6: boolean): void
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public "tick"(): void
public "getDamage"(): float
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "isPickable"(): boolean
public "remove"(arg0: $Entity$RemovalReason$Type): void
public "getPickResult"(): $ItemStack
public "setDamage"(arg0: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float): void
public "getHurtDir"(): integer
public "setHurtDir"(arg0: integer): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "buoyancy"(): double
get "trueVehicle"(): $AbstractVehicle
get "ridingPose"(): $AbstractCompartmentEntity$RidingPose
set "hurtTime"(value: integer)
get "compartmentBlockLight"(): integer
get "hurtTime"(): integer
get "myRidingOffset"(): double
get "damage"(): float
get "pickable"(): boolean
get "pickResult"(): $ItemStack
set "damage"(value: float)
get "hurtDir"(): integer
set "hurtDir"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCompartmentEntity$Type = ($AbstractCompartmentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCompartmentEntity_ = $AbstractCompartmentEntity$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$ProcessedBoatFrame" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BoatFrame, $BoatFrame$Type} from "packages/com/alekiponi/alekiships/common/block/$BoatFrame"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BoatMaterial, $BoatMaterial$Type} from "packages/com/alekiponi/alekiships/util/$BoatMaterial"

export interface $ProcessedBoatFrame extends $BoatFrame {

 "getProcessingProperty"(): $IntegerProperty
 "getProcessingLimit"(): integer
 "getBoatMaterial"(): $BoatMaterial
 "m_152465_"(arg0: $BlockState$Type): $BlockState
}

export namespace $ProcessedBoatFrame {
function isFullyProcessed(arg0: $BlockState$Type): boolean
function fromBlockstate(arg0: $BlockState$Type): $BoatMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessedBoatFrame$Type = ($ProcessedBoatFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessedBoatFrame_ = $ProcessedBoatFrame$Type;
}}
declare module "packages/com/alekiponi/alekiships/util/$BoatMaterial" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$BoatMaterial$BoatType, $BoatMaterial$BoatType$Type} from "packages/com/alekiponi/alekiships/util/$BoatMaterial$BoatType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $BoatMaterial extends $StringRepresentable {

 "getDeckItem"(): $Item
 "getDeckBlock"(): $BlockState
 "getStrippedLog"(): $Item
 "withstandsLava"(): boolean
 "getEntityType"(arg0: $BoatMaterial$BoatType$Type): $Optional<($EntityType<(any)>)>
 "getRailing"(): $Item
 "getSerializedName"(): string
}

export namespace $BoatMaterial {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatMaterial$Type = ($BoatMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatMaterial_ = $BoatMaterial$Type;
}}
declare module "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IngameOverlays$IconState extends $Enum<($IngameOverlays$IconState)> {
static readonly "NONE": $IngameOverlays$IconState
static readonly "HELM": $IngameOverlays$IconState
static readonly "BLOCK": $IngameOverlays$IconState
static readonly "SAIL_ARROW_UP": $IngameOverlays$IconState
static readonly "SAIL_ARROW_DOWN": $IngameOverlays$IconState
static readonly "PADDLE": $IngameOverlays$IconState
static readonly "SEAT": $IngameOverlays$IconState
static readonly "EJECT": $IngameOverlays$IconState
static readonly "LEAD": $IngameOverlays$IconState
static readonly "ANCHOR_ARROW_UP": $IngameOverlays$IconState
static readonly "ANCHOR_ARROW_DOWN": $IngameOverlays$IconState
static readonly "BRUSH": $IngameOverlays$IconState
static readonly "HAMMER": $IngameOverlays$IconState


public static "values"(): ($IngameOverlays$IconState)[]
public static "valueOf"(arg0: string): $IngameOverlays$IconState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngameOverlays$IconState$Type = (("brush") | ("hammer") | ("anchor_arrow_up") | ("none") | ("anchor_arrow_down") | ("helm") | ("paddle") | ("lead") | ("sail_arrow_down") | ("seat") | ("sail_arrow_up") | ("eject") | ("block")) | ($IngameOverlays$IconState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngameOverlays$IconState_ = $IngameOverlays$IconState$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$AngledBoatFrameBlock" {
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
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BoatFrame, $BoatFrame$Type} from "packages/com/alekiponi/alekiships/common/block/$BoatFrame"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $AngledBoatFrameBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "isAngledBoatFrame"(arg0: $BlockState$Type): boolean
public "registerFrame"(arg0: $Item$Type, arg1: $BoatFrame$Type): void
public static "isInner"(arg0: $BlockState$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "isOuter"(arg0: $BlockState$Type): boolean
public static "isStraight"(arg0: $BlockState$Type): boolean
public static "getSolid"(arg0: $BlockState$Type): ($Direction)[]
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
export type $AngledBoatFrameBlock$Type = ($AngledBoatFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AngledBoatFrameBlock_ = $AngledBoatFrameBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType$BasicCompartmentFactory" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"
import {$CompartmentType, $CompartmentType$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType"

export interface $CompartmentType$BasicCompartmentFactory<T extends $AbstractCompartmentEntity> {

 "create"(arg0: $CompartmentType$Type<(T)>, arg1: $Level$Type): T

(arg0: $CompartmentType$Type<(T)>, arg1: $Level$Type): T
}

export namespace $CompartmentType$BasicCompartmentFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompartmentType$BasicCompartmentFactory$Type<T> = ($CompartmentType$BasicCompartmentFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompartmentType$BasicCompartmentFactory_<T> = $CompartmentType$BasicCompartmentFactory$Type<(T)>;
}}
declare module "packages/com/alekiponi/alekiships/common/item/$CannonItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CannonItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonItem$Type = ($CannonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonItem_ = $CannonItem$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$FlatBoatFrameBlock" {
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
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BoatFrame, $BoatFrame$Type} from "packages/com/alekiponi/alekiships/common/block/$BoatFrame"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $FlatBoatFrameBlock extends $Block implements $SimpleWaterloggedBlock {
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

public "registerFrame"(arg0: $Item$Type, arg1: $BoatFrame$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
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
export type $FlatBoatFrameBlock$Type = ($FlatBoatFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlatBoatFrameBlock_ = $FlatBoatFrameBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$FlatWoodenBoatFrameBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BoatMaterial, $BoatMaterial$Type} from "packages/com/alekiponi/alekiships/util/$BoatMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FlatBoatFrameBlock, $FlatBoatFrameBlock$Type} from "packages/com/alekiponi/alekiships/common/block/$FlatBoatFrameBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ProcessedBoatFrame, $ProcessedBoatFrame$Type} from "packages/com/alekiponi/alekiships/common/block/$ProcessedBoatFrame"

export class $FlatWoodenBoatFrameBlock extends $FlatBoatFrameBlock implements $ProcessedBoatFrame {
static readonly "FRAME_PROCESSED": $IntegerProperty
static readonly "FULLY_PROCESSED": integer
readonly "boatMaterial": $BoatMaterial
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

constructor(arg0: $BoatMaterial$Type, arg1: $BlockBehaviour$Properties$Type)

public "getProcessingProperty"(): $IntegerProperty
public "getProcessingLimit"(): integer
public "getBoatMaterial"(): $BoatMaterial
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "isFullyProcessed"(arg0: $BlockState$Type): boolean
public static "fromBlockstate"(arg0: $BlockState$Type): $BoatMaterial
public "withPropertiesOf"(arg0: $BlockState$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "processingProperty"(): $IntegerProperty
get "processingLimit"(): integer
get "boatMaterial"(): $BoatMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlatWoodenBoatFrameBlock$Type = ($FlatWoodenBoatFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlatWoodenBoatFrameBlock_ = $FlatWoodenBoatFrameBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$VehiclePart" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VehiclePart extends $Entity {
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "setCompartmentRotation"(arg0: float): void
public "getCompartmentRotation"(): float
public "tick"(): void
public "getName"(): $Component
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "compartmentRotation"(value: float)
get "compartmentRotation"(): float
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehiclePart$Type = ($VehiclePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehiclePart_ = $VehiclePart$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$CleatBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AbstractHullSideBlock, $AbstractHullSideBlock$Type} from "packages/com/alekiponi/alekiships/common/block/$AbstractHullSideBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
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
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CleatBlock extends $AbstractHullSideBlock {
static readonly "FACING": $DirectionProperty
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


public "validateMultiblock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CleatBlock$Type = ($CleatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CleatBlock_ = $CleatBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$BoatFrame" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BoatMaterial, $BoatMaterial$Type} from "packages/com/alekiponi/alekiships/util/$BoatMaterial"

export interface $BoatFrame {

 "getBoatMaterial"(): $BoatMaterial
 "m_152465_"(arg0: $BlockState$Type): $BlockState
}

export namespace $BoatFrame {
function fromBlockstate(arg0: $BlockState$Type): $BoatMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatFrame$Type = ($BoatFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatFrame_ = $BoatFrame$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$AbstractHullSideBlock" {
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
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractHullSideBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
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


public static "isSupportedByWatercraftFrame"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
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
export type $AbstractHullSideBlock$Type = ($AbstractHullSideBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHullSideBlock_ = $AbstractHullSideBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/$IHaveIcons" {
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"

export interface $IHaveIcons {

 "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>

(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
}

export namespace $IHaveIcons {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveIcons$Type = ($IHaveIcons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveIcons_ = $IHaveIcons$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$AbstractHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AbstractVehicle, $AbstractVehicle$Type} from "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractHelper extends $Entity {
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getTrueVehicle"(): $AbstractVehicle
public "tick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "trueVehicle"(): $AbstractVehicle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHelper$Type = ($AbstractHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHelper_ = $AbstractHelper$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle$MediumStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractVehicle$MediumStatus extends $Enum<($AbstractVehicle$MediumStatus)> {
static readonly "IN_WATER": $AbstractVehicle$MediumStatus
static readonly "UNDER_WATER": $AbstractVehicle$MediumStatus
static readonly "UNDER_FLOWING_WATER": $AbstractVehicle$MediumStatus
static readonly "ON_LAND": $AbstractVehicle$MediumStatus
static readonly "IN_AIR": $AbstractVehicle$MediumStatus
static readonly "IN_LAVA": $AbstractVehicle$MediumStatus
static readonly "UNDER_LAVA": $AbstractVehicle$MediumStatus
static readonly "UNDER_FLOWING_LAVA": $AbstractVehicle$MediumStatus


public static "values"(): ($AbstractVehicle$MediumStatus)[]
public static "valueOf"(arg0: string): $AbstractVehicle$MediumStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractVehicle$MediumStatus$Type = (("under_flowing_water") | ("under_water") | ("in_air") | ("in_lava") | ("in_water") | ("on_land") | ("under_lava") | ("under_flowing_lava")) | ($AbstractVehicle$MediumStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractVehicle$MediumStatus_ = $AbstractVehicle$MediumStatus$Type;
}}
declare module "packages/com/alekiponi/alekiships/util/$BoatMaterial$BoatType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BoatMaterial$BoatType extends $Enum<($BoatMaterial$BoatType)> {
static readonly "ROWBOAT": $BoatMaterial$BoatType
static readonly "SLOOP": $BoatMaterial$BoatType
static readonly "CONSTRUCTION_SLOOP": $BoatMaterial$BoatType


public static "values"(): ($BoatMaterial$BoatType)[]
public static "valueOf"(arg0: string): $BoatMaterial$BoatType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatMaterial$BoatType$Type = (("sloop") | ("rowboat") | ("construction_sloop")) | ($BoatMaterial$BoatType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatMaterial$BoatType_ = $BoatMaterial$BoatType$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity$RidingPose" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractCompartmentEntity$RidingPose extends $Enum<($AbstractCompartmentEntity$RidingPose)> {
static readonly "ULTRA_COMPACT": $AbstractCompartmentEntity$RidingPose
static readonly "COMPACT": $AbstractCompartmentEntity$RidingPose
static readonly "STANDING": $AbstractCompartmentEntity$RidingPose
static readonly "STANDARD": $AbstractCompartmentEntity$RidingPose


public static "values"(): ($AbstractCompartmentEntity$RidingPose)[]
public static "valueOf"(arg0: string): $AbstractCompartmentEntity$RidingPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCompartmentEntity$RidingPose$Type = (("standard") | ("standing") | ("compact") | ("ultra_compact")) | ($AbstractCompartmentEntity$RidingPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCompartmentEntity$RidingPose_ = $AbstractCompartmentEntity$RidingPose$Type;
}}
declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ShulkerBoxMenuAccessor" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $ShulkerBoxMenuAccessor {

 "getContainer"(): $Container

(): $Container
}

export namespace $ShulkerBoxMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxMenuAccessor$Type = ($ShulkerBoxMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerBoxMenuAccessor_ = $ShulkerBoxMenuAccessor$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType" {
import {$GlowItemFrame, $GlowItemFrame$Type} from "packages/net/minecraft/world/entity/decoration/$GlowItemFrame"
import {$Illusioner, $Illusioner$Type} from "packages/net/minecraft/world/entity/monster/$Illusioner"
import {$MagmaCube, $MagmaCube$Type} from "packages/net/minecraft/world/entity/monster/$MagmaCube"
import {$Dolphin, $Dolphin$Type} from "packages/net/minecraft/world/entity/animal/$Dolphin"
import {$Pig, $Pig$Type} from "packages/net/minecraft/world/entity/animal/$Pig"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$WanderingTrader, $WanderingTrader$Type} from "packages/net/minecraft/world/entity/npc/$WanderingTrader"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GlowSquid, $GlowSquid$Type} from "packages/net/minecraft/world/entity/$GlowSquid"
import {$IronGolem, $IronGolem$Type} from "packages/net/minecraft/world/entity/animal/$IronGolem"
import {$EvokerFangs, $EvokerFangs$Type} from "packages/net/minecraft/world/entity/projectile/$EvokerFangs"
import {$Vex, $Vex$Type} from "packages/net/minecraft/world/entity/monster/$Vex"
import {$Bee, $Bee$Type} from "packages/net/minecraft/world/entity/animal/$Bee"
import {$Mule, $Mule$Type} from "packages/net/minecraft/world/entity/animal/horse/$Mule"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Cow, $Cow$Type} from "packages/net/minecraft/world/entity/animal/$Cow"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AreaEffectCloud, $AreaEffectCloud$Type} from "packages/net/minecraft/world/entity/$AreaEffectCloud"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$DynamicLightHandlerHolder, $DynamicLightHandlerHolder$Type} from "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"
import {$Minecart, $Minecart$Type} from "packages/net/minecraft/world/entity/vehicle/$Minecart"
import {$TraderLlama, $TraderLlama$Type} from "packages/net/minecraft/world/entity/animal/horse/$TraderLlama"
import {$LlamaSpit, $LlamaSpit$Type} from "packages/net/minecraft/world/entity/projectile/$LlamaSpit"
import {$ShulkerBullet, $ShulkerBullet$Type} from "packages/net/minecraft/world/entity/projectile/$ShulkerBullet"
import {$Hoglin, $Hoglin$Type} from "packages/net/minecraft/world/entity/monster/hoglin/$Hoglin"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ThrownTrident, $ThrownTrident$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownTrident"
import {$Spider, $Spider$Type} from "packages/net/minecraft/world/entity/monster/$Spider"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"
import {$MinecartHopper, $MinecartHopper$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartHopper"
import {$ArmorStand, $ArmorStand$Type} from "packages/net/minecraft/world/entity/decoration/$ArmorStand"
import {$ZombifiedPiglin, $ZombifiedPiglin$Type} from "packages/net/minecraft/world/entity/monster/$ZombifiedPiglin"
import {$Fox, $Fox$Type} from "packages/net/minecraft/world/entity/animal/$Fox"
import {$MushroomCow, $MushroomCow$Type} from "packages/net/minecraft/world/entity/animal/$MushroomCow"
import {$ChestBoat, $ChestBoat$Type} from "packages/net/minecraft/world/entity/vehicle/$ChestBoat"
import {$EndCrystal, $EndCrystal$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EndCrystal"
import {$Cat, $Cat$Type} from "packages/net/minecraft/world/entity/animal/$Cat"
import {$WitherSkeleton, $WitherSkeleton$Type} from "packages/net/minecraft/world/entity/monster/$WitherSkeleton"
import {$Marker, $Marker$Type} from "packages/net/minecraft/world/entity/$Marker"
import {$Panda, $Panda$Type} from "packages/net/minecraft/world/entity/animal/$Panda"
import {$Parrot, $Parrot$Type} from "packages/net/minecraft/world/entity/animal/$Parrot"
import {$Chicken, $Chicken$Type} from "packages/net/minecraft/world/entity/animal/$Chicken"
import {$Silverfish, $Silverfish$Type} from "packages/net/minecraft/world/entity/monster/$Silverfish"
import {$MinecartSpawner, $MinecartSpawner$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartSpawner"
import {$Witch, $Witch$Type} from "packages/net/minecraft/world/entity/monster/$Witch"
import {$WitherBoss, $WitherBoss$Type} from "packages/net/minecraft/world/entity/boss/wither/$WitherBoss"
import {$Display$TextDisplay, $Display$TextDisplay$Type} from "packages/net/minecraft/world/entity/$Display$TextDisplay"
import {$SkeletonHorse, $SkeletonHorse$Type} from "packages/net/minecraft/world/entity/animal/horse/$SkeletonHorse"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Arrow, $Arrow$Type} from "packages/net/minecraft/world/entity/projectile/$Arrow"
import {$Salmon, $Salmon$Type} from "packages/net/minecraft/world/entity/animal/$Salmon"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Interaction, $Interaction$Type} from "packages/net/minecraft/world/entity/$Interaction"
import {$Slime, $Slime$Type} from "packages/net/minecraft/world/entity/monster/$Slime"
import {$ThrownEnderpearl, $ThrownEnderpearl$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownEnderpearl"
import {$Tadpole, $Tadpole$Type} from "packages/net/minecraft/world/entity/animal/frog/$Tadpole"
import {$Endermite, $Endermite$Type} from "packages/net/minecraft/world/entity/monster/$Endermite"
import {$Allay, $Allay$Type} from "packages/net/minecraft/world/entity/animal/allay/$Allay"
import {$Blaze, $Blaze$Type} from "packages/net/minecraft/world/entity/monster/$Blaze"
import {$Pufferfish, $Pufferfish$Type} from "packages/net/minecraft/world/entity/animal/$Pufferfish"
import {$Horse, $Horse$Type} from "packages/net/minecraft/world/entity/animal/horse/$Horse"
import {$Rabbit, $Rabbit$Type} from "packages/net/minecraft/world/entity/animal/$Rabbit"
import {$TropicalFish, $TropicalFish$Type} from "packages/net/minecraft/world/entity/animal/$TropicalFish"
import {$ItemFrame, $ItemFrame$Type} from "packages/net/minecraft/world/entity/decoration/$ItemFrame"
import {$ZombieVillager, $ZombieVillager$Type} from "packages/net/minecraft/world/entity/monster/$ZombieVillager"
import {$Drowned, $Drowned$Type} from "packages/net/minecraft/world/entity/monster/$Drowned"
import {$SpectralArrow, $SpectralArrow$Type} from "packages/net/minecraft/world/entity/projectile/$SpectralArrow"
import {$MinecartCommandBlock, $MinecartCommandBlock$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartCommandBlock"
import {$Frog, $Frog$Type} from "packages/net/minecraft/world/entity/animal/frog/$Frog"
import {$LeashFenceKnotEntity, $LeashFenceKnotEntity$Type} from "packages/net/minecraft/world/entity/decoration/$LeashFenceKnotEntity"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FireworkRocketEntity, $FireworkRocketEntity$Type} from "packages/net/minecraft/world/entity/projectile/$FireworkRocketEntity"
import {$PiglinBrute, $PiglinBrute$Type} from "packages/net/minecraft/world/entity/monster/piglin/$PiglinBrute"
import {$Squid, $Squid$Type} from "packages/net/minecraft/world/entity/animal/$Squid"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ThrownExperienceBottle, $ThrownExperienceBottle$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownExperienceBottle"
import {$Creeper, $Creeper$Type} from "packages/net/minecraft/world/entity/monster/$Creeper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pillager, $Pillager$Type} from "packages/net/minecraft/world/entity/monster/$Pillager"
import {$EyeOfEnder, $EyeOfEnder$Type} from "packages/net/minecraft/world/entity/projectile/$EyeOfEnder"
import {$Turtle, $Turtle$Type} from "packages/net/minecraft/world/entity/animal/$Turtle"
import {$Zoglin, $Zoglin$Type} from "packages/net/minecraft/world/entity/monster/$Zoglin"
import {$SmallFireball, $SmallFireball$Type} from "packages/net/minecraft/world/entity/projectile/$SmallFireball"
import {$SnowGolem, $SnowGolem$Type} from "packages/net/minecraft/world/entity/animal/$SnowGolem"
import {$EnderDragon, $EnderDragon$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import {$Guardian, $Guardian$Type} from "packages/net/minecraft/world/entity/monster/$Guardian"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Warden, $Warden$Type} from "packages/net/minecraft/world/entity/monster/warden/$Warden"
import {$DragonFireball, $DragonFireball$Type} from "packages/net/minecraft/world/entity/projectile/$DragonFireball"
import {$ThrownPotion, $ThrownPotion$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownPotion"
import {$Vindicator, $Vindicator$Type} from "packages/net/minecraft/world/entity/monster/$Vindicator"
import {$Husk, $Husk$Type} from "packages/net/minecraft/world/entity/monster/$Husk"
import {$Giant, $Giant$Type} from "packages/net/minecraft/world/entity/monster/$Giant"
import {$PrimedTnt, $PrimedTnt$Type} from "packages/net/minecraft/world/entity/item/$PrimedTnt"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ThrownEgg, $ThrownEgg$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownEgg"
import {$Zombie, $Zombie$Type} from "packages/net/minecraft/world/entity/monster/$Zombie"
import {$Sniffer, $Sniffer$Type} from "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer"
import {$ZombieHorse, $ZombieHorse$Type} from "packages/net/minecraft/world/entity/animal/horse/$ZombieHorse"
import {$CaveSpider, $CaveSpider$Type} from "packages/net/minecraft/world/entity/monster/$CaveSpider"
import {$Stray, $Stray$Type} from "packages/net/minecraft/world/entity/monster/$Stray"
import {$Bat, $Bat$Type} from "packages/net/minecraft/world/entity/ambient/$Bat"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Llama, $Llama$Type} from "packages/net/minecraft/world/entity/animal/horse/$Llama"
import {$MinecartTNT, $MinecartTNT$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartTNT"
import {$WitherSkull, $WitherSkull$Type} from "packages/net/minecraft/world/entity/projectile/$WitherSkull"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Painting, $Painting$Type} from "packages/net/minecraft/world/entity/decoration/$Painting"
import {$MinecartFurnace, $MinecartFurnace$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartFurnace"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Goat, $Goat$Type} from "packages/net/minecraft/world/entity/animal/goat/$Goat"
import {$Strider, $Strider$Type} from "packages/net/minecraft/world/entity/monster/$Strider"
import {$Phantom, $Phantom$Type} from "packages/net/minecraft/world/entity/monster/$Phantom"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Skeleton, $Skeleton$Type} from "packages/net/minecraft/world/entity/monster/$Skeleton"
import {$CompartmentType$StackCompartmentFactory, $CompartmentType$StackCompartmentFactory$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType$StackCompartmentFactory"
import {$PlayMessages$SpawnEntity, $PlayMessages$SpawnEntity$Type} from "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity"
import {$Axolotl, $Axolotl$Type} from "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl"
import {$MinecartChest, $MinecartChest$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartChest"
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$CompartmentType$BasicCompartmentFactory, $CompartmentType$BasicCompartmentFactory$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType$BasicCompartmentFactory"
import {$ExperienceOrb, $ExperienceOrb$Type} from "packages/net/minecraft/world/entity/$ExperienceOrb"
import {$Shulker, $Shulker$Type} from "packages/net/minecraft/world/entity/monster/$Shulker"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$Display$BlockDisplay, $Display$BlockDisplay$Type} from "packages/net/minecraft/world/entity/$Display$BlockDisplay"
import {$Sheep, $Sheep$Type} from "packages/net/minecraft/world/entity/animal/$Sheep"
import {$LargeFireball, $LargeFireball$Type} from "packages/net/minecraft/world/entity/projectile/$LargeFireball"
import {$Cod, $Cod$Type} from "packages/net/minecraft/world/entity/animal/$Cod"
import {$Snowball, $Snowball$Type} from "packages/net/minecraft/world/entity/projectile/$Snowball"
import {$ElderGuardian, $ElderGuardian$Type} from "packages/net/minecraft/world/entity/monster/$ElderGuardian"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$Ghast, $Ghast$Type} from "packages/net/minecraft/world/entity/monster/$Ghast"
import {$Ocelot, $Ocelot$Type} from "packages/net/minecraft/world/entity/animal/$Ocelot"
import {$Donkey, $Donkey$Type} from "packages/net/minecraft/world/entity/animal/horse/$Donkey"
import {$Wolf, $Wolf$Type} from "packages/net/minecraft/world/entity/animal/$Wolf"
import {$Display$ItemDisplay, $Display$ItemDisplay$Type} from "packages/net/minecraft/world/entity/$Display$ItemDisplay"
import {$Ravager, $Ravager$Type} from "packages/net/minecraft/world/entity/monster/$Ravager"
import {$Camel, $Camel$Type} from "packages/net/minecraft/world/entity/animal/camel/$Camel"
import {$PolarBear, $PolarBear$Type} from "packages/net/minecraft/world/entity/animal/$PolarBear"
import {$Evoker, $Evoker$Type} from "packages/net/minecraft/world/entity/monster/$Evoker"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $CompartmentType<T extends $AbstractCompartmentEntity> extends $EntityType<(T)> {
static readonly "ENTITY_TAG": string
static readonly "ALLAY": $EntityType<($Allay)>
static readonly "AREA_EFFECT_CLOUD": $EntityType<($AreaEffectCloud)>
static readonly "ARMOR_STAND": $EntityType<($ArmorStand)>
static readonly "ARROW": $EntityType<($Arrow)>
static readonly "AXOLOTL": $EntityType<($Axolotl)>
static readonly "BAT": $EntityType<($Bat)>
static readonly "BEE": $EntityType<($Bee)>
static readonly "BLAZE": $EntityType<($Blaze)>
static readonly "BLOCK_DISPLAY": $EntityType<($Display$BlockDisplay)>
static readonly "BOAT": $EntityType<($Boat)>
static readonly "CAMEL": $EntityType<($Camel)>
static readonly "CAT": $EntityType<($Cat)>
static readonly "CAVE_SPIDER": $EntityType<($CaveSpider)>
static readonly "CHEST_BOAT": $EntityType<($ChestBoat)>
static readonly "CHEST_MINECART": $EntityType<($MinecartChest)>
static readonly "CHICKEN": $EntityType<($Chicken)>
static readonly "COD": $EntityType<($Cod)>
static readonly "COMMAND_BLOCK_MINECART": $EntityType<($MinecartCommandBlock)>
static readonly "COW": $EntityType<($Cow)>
static readonly "CREEPER": $EntityType<($Creeper)>
static readonly "DOLPHIN": $EntityType<($Dolphin)>
static readonly "DONKEY": $EntityType<($Donkey)>
static readonly "DRAGON_FIREBALL": $EntityType<($DragonFireball)>
static readonly "DROWNED": $EntityType<($Drowned)>
static readonly "EGG": $EntityType<($ThrownEgg)>
static readonly "ELDER_GUARDIAN": $EntityType<($ElderGuardian)>
static readonly "END_CRYSTAL": $EntityType<($EndCrystal)>
static readonly "ENDER_DRAGON": $EntityType<($EnderDragon)>
static readonly "ENDER_PEARL": $EntityType<($ThrownEnderpearl)>
static readonly "ENDERMAN": $EntityType<($EnderMan)>
static readonly "ENDERMITE": $EntityType<($Endermite)>
static readonly "EVOKER": $EntityType<($Evoker)>
static readonly "EVOKER_FANGS": $EntityType<($EvokerFangs)>
static readonly "EXPERIENCE_BOTTLE": $EntityType<($ThrownExperienceBottle)>
static readonly "EXPERIENCE_ORB": $EntityType<($ExperienceOrb)>
static readonly "EYE_OF_ENDER": $EntityType<($EyeOfEnder)>
static readonly "FALLING_BLOCK": $EntityType<($FallingBlockEntity)>
static readonly "FIREWORK_ROCKET": $EntityType<($FireworkRocketEntity)>
static readonly "FOX": $EntityType<($Fox)>
static readonly "FROG": $EntityType<($Frog)>
static readonly "FURNACE_MINECART": $EntityType<($MinecartFurnace)>
static readonly "GHAST": $EntityType<($Ghast)>
static readonly "GIANT": $EntityType<($Giant)>
static readonly "GLOW_ITEM_FRAME": $EntityType<($GlowItemFrame)>
static readonly "GLOW_SQUID": $EntityType<($GlowSquid)>
static readonly "GOAT": $EntityType<($Goat)>
static readonly "GUARDIAN": $EntityType<($Guardian)>
static readonly "HOGLIN": $EntityType<($Hoglin)>
static readonly "HOPPER_MINECART": $EntityType<($MinecartHopper)>
static readonly "HORSE": $EntityType<($Horse)>
static readonly "HUSK": $EntityType<($Husk)>
static readonly "ILLUSIONER": $EntityType<($Illusioner)>
static readonly "INTERACTION": $EntityType<($Interaction)>
static readonly "IRON_GOLEM": $EntityType<($IronGolem)>
static readonly "ITEM": $EntityType<($ItemEntity)>
static readonly "ITEM_DISPLAY": $EntityType<($Display$ItemDisplay)>
static readonly "ITEM_FRAME": $EntityType<($ItemFrame)>
static readonly "FIREBALL": $EntityType<($LargeFireball)>
static readonly "LEASH_KNOT": $EntityType<($LeashFenceKnotEntity)>
static readonly "LIGHTNING_BOLT": $EntityType<($LightningBolt)>
static readonly "LLAMA": $EntityType<($Llama)>
static readonly "LLAMA_SPIT": $EntityType<($LlamaSpit)>
static readonly "MAGMA_CUBE": $EntityType<($MagmaCube)>
static readonly "MARKER": $EntityType<($Marker)>
static readonly "MINECART": $EntityType<($Minecart)>
static readonly "MOOSHROOM": $EntityType<($MushroomCow)>
static readonly "MULE": $EntityType<($Mule)>
static readonly "OCELOT": $EntityType<($Ocelot)>
static readonly "PAINTING": $EntityType<($Painting)>
static readonly "PANDA": $EntityType<($Panda)>
static readonly "PARROT": $EntityType<($Parrot)>
static readonly "PHANTOM": $EntityType<($Phantom)>
static readonly "PIG": $EntityType<($Pig)>
static readonly "PIGLIN": $EntityType<($Piglin)>
static readonly "PIGLIN_BRUTE": $EntityType<($PiglinBrute)>
static readonly "PILLAGER": $EntityType<($Pillager)>
static readonly "POLAR_BEAR": $EntityType<($PolarBear)>
static readonly "POTION": $EntityType<($ThrownPotion)>
static readonly "PUFFERFISH": $EntityType<($Pufferfish)>
static readonly "RABBIT": $EntityType<($Rabbit)>
static readonly "RAVAGER": $EntityType<($Ravager)>
static readonly "SALMON": $EntityType<($Salmon)>
static readonly "SHEEP": $EntityType<($Sheep)>
static readonly "SHULKER": $EntityType<($Shulker)>
static readonly "SHULKER_BULLET": $EntityType<($ShulkerBullet)>
static readonly "SILVERFISH": $EntityType<($Silverfish)>
static readonly "SKELETON": $EntityType<($Skeleton)>
static readonly "SKELETON_HORSE": $EntityType<($SkeletonHorse)>
static readonly "SLIME": $EntityType<($Slime)>
static readonly "SMALL_FIREBALL": $EntityType<($SmallFireball)>
static readonly "SNIFFER": $EntityType<($Sniffer)>
static readonly "SNOW_GOLEM": $EntityType<($SnowGolem)>
static readonly "SNOWBALL": $EntityType<($Snowball)>
static readonly "SPAWNER_MINECART": $EntityType<($MinecartSpawner)>
static readonly "SPECTRAL_ARROW": $EntityType<($SpectralArrow)>
static readonly "SPIDER": $EntityType<($Spider)>
static readonly "SQUID": $EntityType<($Squid)>
static readonly "STRAY": $EntityType<($Stray)>
static readonly "STRIDER": $EntityType<($Strider)>
static readonly "TADPOLE": $EntityType<($Tadpole)>
static readonly "TEXT_DISPLAY": $EntityType<($Display$TextDisplay)>
static readonly "TNT": $EntityType<($PrimedTnt)>
static readonly "TNT_MINECART": $EntityType<($MinecartTNT)>
static readonly "TRADER_LLAMA": $EntityType<($TraderLlama)>
static readonly "TRIDENT": $EntityType<($ThrownTrident)>
static readonly "TROPICAL_FISH": $EntityType<($TropicalFish)>
static readonly "TURTLE": $EntityType<($Turtle)>
static readonly "VEX": $EntityType<($Vex)>
static readonly "VILLAGER": $EntityType<($Villager)>
static readonly "VINDICATOR": $EntityType<($Vindicator)>
static readonly "WANDERING_TRADER": $EntityType<($WanderingTrader)>
static readonly "WARDEN": $EntityType<($Warden)>
static readonly "WITCH": $EntityType<($Witch)>
static readonly "WITHER": $EntityType<($WitherBoss)>
static readonly "WITHER_SKELETON": $EntityType<($WitherSkeleton)>
static readonly "WITHER_SKULL": $EntityType<($WitherSkull)>
static readonly "WOLF": $EntityType<($Wolf)>
static readonly "ZOGLIN": $EntityType<($Zoglin)>
static readonly "ZOMBIE": $EntityType<($Zombie)>
static readonly "ZOMBIE_HORSE": $EntityType<($ZombieHorse)>
static readonly "ZOMBIE_VILLAGER": $EntityType<($ZombieVillager)>
static readonly "ZOMBIFIED_PIGLIN": $EntityType<($ZombifiedPiglin)>
static readonly "PLAYER": $EntityType<($Player)>
static readonly "FISHING_BOBBER": $EntityType<($FishingHook)>
readonly "clientTrackingRange": integer
readonly "updateInterval": integer

constructor(arg0: $CompartmentType$BasicCompartmentFactory$Type<(T)>, arg1: $MobCategory$Type, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet$Type<($Block$Type)>, arg7: $EntityDimensions$Type, arg8: integer, arg9: integer, arg10: $FeatureFlagSet$Type, arg11: $CompartmentType$StackCompartmentFactory$Type<(T)>)
constructor(arg0: $CompartmentType$BasicCompartmentFactory$Type<(T)>, arg1: $MobCategory$Type, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet$Type<($Block$Type)>, arg7: $EntityDimensions$Type, arg8: integer, arg9: integer, arg10: $FeatureFlagSet$Type, arg11: $Predicate$Type<($EntityType$Type<(any)>)>, arg12: $ToIntFunction$Type<($EntityType$Type<(any)>)>, arg13: $ToIntFunction$Type<($EntityType$Type<(any)>)>, arg14: $BiFunction$Type<($PlayMessages$SpawnEntity$Type), ($Level$Type), (T)>, arg15: $CompartmentType$StackCompartmentFactory$Type<(T)>)

public static "register"<S extends $Supplier<(any)>>(arg0: S, arg1: $Predicate$Type<($ItemStack$Type)>): S
public "create"(arg0: $Level$Type, arg1: $ItemStack$Type): T
public "create"(arg0: $Level$Type): T
public static "fromStack"(arg0: $ItemStack$Type): $Optional<($CompartmentType<(any)>)>
public static "forClass"<B, T extends B>(arg0: $Class$Type<(T)>): $EntityTypeTest<(B), (T)>
public static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
public static "cast"<T extends $Entity>(entityType: $EntityType$Type<(T)>): $DynamicLightHandlerHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompartmentType$Type<T> = ($CompartmentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompartmentType_<T> = $CompartmentType$Type<(T)>;
}}
declare module "packages/com/alekiponi/alekiships/common/block/$AngledWoodenBoatFrameBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
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
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BoatMaterial, $BoatMaterial$Type} from "packages/com/alekiponi/alekiships/util/$BoatMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$AngledBoatFrameBlock, $AngledBoatFrameBlock$Type} from "packages/com/alekiponi/alekiships/common/block/$AngledBoatFrameBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ProcessedBoatFrame, $ProcessedBoatFrame$Type} from "packages/com/alekiponi/alekiships/common/block/$ProcessedBoatFrame"

export class $AngledWoodenBoatFrameBlock extends $AngledBoatFrameBlock implements $ProcessedBoatFrame {
static readonly "FRAME_PROCESSED": $IntegerProperty
static readonly "FULLY_PROCESSED": integer
readonly "boatMaterial": $BoatMaterial
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $BoatMaterial$Type, arg1: $BlockBehaviour$Properties$Type)

public static "triggerDetection"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getProcessingProperty"(): $IntegerProperty
public "getProcessingLimit"(): integer
public "getBoatMaterial"(): $BoatMaterial
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "isFullyProcessed"(arg0: $BlockState$Type): boolean
public static "fromBlockstate"(arg0: $BlockState$Type): $BoatMaterial
public "withPropertiesOf"(arg0: $BlockState$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "processingProperty"(): $IntegerProperty
get "processingLimit"(): integer
get "boatMaterial"(): $BoatMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngledWoodenBoatFrameBlock$Type = ($AngledWoodenBoatFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AngledWoodenBoatFrameBlock_ = $AngledWoodenBoatFrameBlock$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclecapability/$IHaveColliders" {
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ColliderEntity, $ColliderEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$ColliderEntity"
import {$AbstractVehicle, $AbstractVehicle$Type} from "packages/com/alekiponi/alekiships/common/entity/vehicle/$AbstractVehicle"

export interface $IHaveColliders {

 "getColliders"(arg0: $AbstractVehicle$Type): $ArrayList<($ColliderEntity)>
 "getColliders"(): $ArrayList<($ColliderEntity)>
 "getColliderIndices"(): (integer)[]

(arg0: $AbstractVehicle$Type): $ArrayList<($ColliderEntity)>
}

export namespace $IHaveColliders {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveColliders$Type = ($IHaveColliders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveColliders_ = $IHaveColliders$Type;
}}
declare module "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$EmptyCompartmentEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$CompartmentType, $CompartmentType$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/$CompartmentType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IngameOverlays$IconState, $IngameOverlays$IconState$Type} from "packages/com/alekiponi/alekiships/client/$IngameOverlays$IconState"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$AbstractCompartmentEntity$RidingPose, $AbstractCompartmentEntity$RidingPose$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity$RidingPose"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$AbstractCompartmentEntity, $AbstractCompartmentEntity$Type} from "packages/com/alekiponi/alekiships/common/entity/vehiclehelper/compartment/$AbstractCompartmentEntity"

export class $EmptyCompartmentEntity extends $AbstractCompartmentEntity {
 "lifespan": integer
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
 "self": $Entity
 "sodiumdynamiclights$luminance": integer

constructor(arg0: $CompartmentType$Type<(any)>, arg1: $Level$Type)

public "setInput"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void
public "getDropStack"(): $ItemStack
public "getRidingPose"(): $AbstractCompartmentEntity$RidingPose
public "canAddNonPlayers"(): boolean
public "canAddCannons"(): boolean
public "canAddOnlyBLocks"(): boolean
public "setInputLeft"(arg0: boolean): void
public "setInputRight"(arg0: boolean): void
public "setInputDown"(arg0: boolean): void
public "getInputDown"(): boolean
public "getInputRight"(): boolean
public "getInputLeft"(): boolean
public "getIconStates"(arg0: $Player$Type): $ArrayList<($IngameOverlays$IconState)>
public "getPassengersRidingOffset"(): double
public "interact"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "tick"(): void
public "onPassengerTurned"(arg0: $Entity$Type): void
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "getControllingPassenger"(): $LivingEntity
public "getDismountLocationForPassenger"(arg0: $LivingEntity$Type): $Vec3
public "getPickResult"(): $ItemStack
public "setInputUp"(arg0: boolean): void
public "getInputUp"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "dropStack"(): $ItemStack
get "ridingPose"(): $AbstractCompartmentEntity$RidingPose
set "inputLeft"(value: boolean)
set "inputRight"(value: boolean)
set "inputDown"(value: boolean)
get "inputDown"(): boolean
get "inputRight"(): boolean
get "inputLeft"(): boolean
get "passengersRidingOffset"(): double
get "controllingPassenger"(): $LivingEntity
get "pickResult"(): $ItemStack
set "inputUp"(value: boolean)
get "inputUp"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyCompartmentEntity$Type = ($EmptyCompartmentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyCompartmentEntity_ = $EmptyCompartmentEntity$Type;
}}

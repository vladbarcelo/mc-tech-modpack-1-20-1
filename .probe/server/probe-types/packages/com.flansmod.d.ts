declare module "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext" {
import {$IStatCalculatorContext$OutOfContextStats, $IStatCalculatorContext$OutOfContextStats$Type} from "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext$OutOfContextStats"

export interface $IStatCalculatorContext {

 "GetNumAttachments"(): integer
 "GetMagFullness"(): float
}

export namespace $IStatCalculatorContext {
const Invalid: $IStatCalculatorContext$OutOfContextStats
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatCalculatorContext$Type = ($IStatCalculatorContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatCalculatorContext_ = $IStatCalculatorContext$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$EReloadStage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EReloadStage extends $Enum<($EReloadStage)> {
static readonly "Start": $EReloadStage
static readonly "Eject": $EReloadStage
static readonly "LoadOne": $EReloadStage
static readonly "End": $EReloadStage


public static "values"(): ($EReloadStage)[]
public static "valueOf"(arg0: string): $EReloadStage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EReloadStage$Type = (("loadone") | ("eject") | ("start") | ("end")) | ($EReloadStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EReloadStage_ = $EReloadStage$Type;
}}
declare module "packages/com/flansmod/common/types/parts/elements/$EngineDefinition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EFuelType, $EFuelType$Type} from "packages/com/flansmod/common/types/parts/elements/$EFuelType"

export class $EngineDefinition {
 "maxAcceleration": float
 "maxDeceleration": float
 "maxSpeed": float
 "fuelType": $EFuelType
 "fuelConsumptionIdle": float
 "fuelConsumptionFull": float
 "solidFuelSlots": integer
 "liquidFuelCapacity": integer
 "batterySlots": integer
 "FECapacity": integer

constructor()

public "GetFuelConsumptionTooltip"(): $Component
public "GetFuelStorageTooltip"(): $Component
public "GetCoalPerHourIdle"(): integer
public "GetCoalPerHourFull"(): integer
public "GetMilliBucketsPerTickIdle"(): integer
public "GetMilliBucketsPerTickFull"(): integer
public "GetForgeEnergyPerTickIdle"(): integer
public "GetForgeEnergyPerTickFull"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineDefinition$Type = ($EngineDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineDefinition_ = $EngineDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/magazines/$EAmmoLoadMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAmmoLoadMode extends $Enum<($EAmmoLoadMode)> {
static readonly "OneBulletAtATime": $EAmmoLoadMode
static readonly "OneBulletAtATime_Revolver": $EAmmoLoadMode
static readonly "FullMag": $EAmmoLoadMode


public static "values"(): ($EAmmoLoadMode)[]
public static "valueOf"(arg0: string): $EAmmoLoadMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAmmoLoadMode$Type = (("fullmag") | ("onebulletatatime") | ("onebulletatatime_revolver")) | ($EAmmoLoadMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAmmoLoadMode_ = $EAmmoLoadMode$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$SoundLODDefinition" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SoundLODDefinition {
 "sound": $ResourceLocation
 "minDistance": float

constructor()

public "GetSoundLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundLODDefinition$Type = ($SoundLODDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundLODDefinition_ = $SoundLODDefinition$Type;
}}
declare module "packages/com/flansmod/common/abilities/$AbilityStack" {
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$AbilityStackingDefinition, $AbilityStackingDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityStackingDefinition"

export class $AbilityStack {
readonly "Def": $AbilityStackingDefinition
readonly "Level": integer

constructor(arg0: $AbilityStackingDefinition$Type, arg1: integer)

public "GetStackCount"(): integer
public "GetDecayTimeTicks"(arg0: $GunContext$Type): integer
public "GetDecayTimeSeconds"(arg0: $GunContext$Type): float
public "Tick"(arg0: $GunContext$Type): void
public "IsActive"(): boolean
public "DecayAll"(): void
public "AddStack"(): void
public "Decay"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityStack$Type = ($AbilityStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityStack_ = $AbilityStack$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$EAbilityEffect" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAbilityEffect extends $Enum<($EAbilityEffect)> {
static readonly "Nothing": $EAbilityEffect
static readonly "ApplyAttribute": $EAbilityEffect
static readonly "ApplyMobEffect": $EAbilityEffect
static readonly "ApplyDamage": $EAbilityEffect
static readonly "DamageArmour": $EAbilityEffect
static readonly "StartActionGroup": $EAbilityEffect
static readonly "ApplyModifier": $EAbilityEffect
static readonly "TotemOfUndying": $EAbilityEffect
static readonly "DeleteEntity": $EAbilityEffect
static readonly "SpawnEntity": $EAbilityEffect
static readonly "HealEntity": $EAbilityEffect
static readonly "FeedEntity": $EAbilityEffect
static readonly "SummonNpc": $EAbilityEffect
static readonly "Interact": $EAbilityEffect
static readonly "RepairVehicle": $EAbilityEffect
static readonly "BreakBlock": $EAbilityEffect
static readonly "PlaceBlock": $EAbilityEffect
static readonly "CollectFluid": $EAbilityEffect
static readonly "PlaceFluid": $EAbilityEffect
static readonly "EndActionGroup": $EAbilityEffect
static readonly "Knockback": $EAbilityEffect
static readonly "SetFire": $EAbilityEffect
static readonly "Explode": $EAbilityEffect
static readonly "ApplyDecal": $EAbilityEffect
static readonly "ApplyEnchantment": $EAbilityEffect


public static "values"(): ($EAbilityEffect)[]
public static "valueOf"(arg0: string): $EAbilityEffect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAbilityEffect$Type = (("setfire") | ("applyenchantment") | ("totemofundying") | ("interact") | ("endactiongroup") | ("knockback") | ("startactiongroup") | ("applymodifier") | ("explode") | ("deleteentity") | ("spawnentity") | ("summonnpc") | ("applyattribute") | ("applydamage") | ("nothing") | ("feedentity") | ("placefluid") | ("placeblock") | ("applydecal") | ("healentity") | ("damagearmour") | ("repairvehicle") | ("applymobeffect") | ("breakblock") | ("collectfluid")) | ($EAbilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAbilityEffect_ = $EAbilityEffect$Type;
}}
declare module "packages/com/flansmod/common/projectiles/$BulletGuidance$GuidanceType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BulletGuidance$GuidanceType extends $Enum<($BulletGuidance$GuidanceType)> {
static readonly "NONE": $BulletGuidance$GuidanceType
static readonly "BEAM_RIDING": $BulletGuidance$GuidanceType
static readonly "BEAM_RIDING_TOP": $BulletGuidance$GuidanceType
static readonly "BEAM_AND_LOCK": $BulletGuidance$GuidanceType
static readonly "BEAM_AND_LOCK_TOP": $BulletGuidance$GuidanceType
static readonly "LOCKON_SIMPLE": $BulletGuidance$GuidanceType
static readonly "LOCKON_LEADING": $BulletGuidance$GuidanceType
static readonly "LOCKON_TOP": $BulletGuidance$GuidanceType


public static "values"(): ($BulletGuidance$GuidanceType)[]
public static "valueOf"(arg0: string): $BulletGuidance$GuidanceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletGuidance$GuidanceType$Type = (("beam_and_lock") | ("lockon_simple") | ("beam_riding") | ("beam_riding_top") | ("none") | ("beam_and_lock_top") | ("lockon_leading") | ("lockon_top")) | ($BulletGuidance$GuidanceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletGuidance$GuidanceType_ = $BulletGuidance$GuidanceType$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$GunContext$EItemStackValidity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunContext$EItemStackValidity extends $Enum<($GunContext$EItemStackValidity)> {
static readonly "Invalid_Error": $GunContext$EItemStackValidity
static readonly "Invalid_DifferentItem": $GunContext$EItemStackValidity
static readonly "Invalid_GunIDChange": $GunContext$EItemStackValidity
static readonly "Valid_NoChanges": $GunContext$EItemStackValidity
static readonly "Valid_TagChanges": $GunContext$EItemStackValidity


public static "values"(): ($GunContext$EItemStackValidity)[]
public static "valueOf"(arg0: string): $GunContext$EItemStackValidity
public "IsValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunContext$EItemStackValidity$Type = (("valid_nochanges") | ("valid_tagchanges") | ("invalid_gunidchange") | ("invalid_error") | ("invalid_differentitem")) | ($GunContext$EItemStackValidity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunContext$EItemStackValidity_ = $GunContext$EItemStackValidity$Type;
}}
declare module "packages/com/flansmod/common/actions/$ActionGroupInstance" {
import {$ShootAction, $ShootAction$Type} from "packages/com/flansmod/common/actions/nodes/$ShootAction"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$ERepeatMode, $ERepeatMode$Type} from "packages/com/flansmod/common/types/guns/elements/$ERepeatMode"
import {$EActionResult, $EActionResult$Type} from "packages/com/flansmod/common/actions/$EActionResult"
import {$ActionGroupDefinition, $ActionGroupDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ActionInstance, $ActionInstance$Type} from "packages/com/flansmod/common/actions/$ActionInstance"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"

export class $ActionGroupInstance {
static readonly "TICK_RATE": float
static readonly "NO_NET_SYNC": integer
readonly "Context": $ActionGroupContext
readonly "Def": $ActionGroupDefinition
 "delayedClientActions": $HashMap<($ActionInstance), (integer)>
 "delayedServerActions": $HashMap<($ActionInstance), (integer)>

constructor(arg0: $ActionGroupContext$Type)

public "SetFinished"(): void
public "OnStartClient"(): void
public "OnStartServer"(arg0: boolean): void
public "UpdateInputHeld"(arg0: boolean): void
public "OnTickClient"(): void
public "CheckTimeout"(): void
public "OnTickServer"(): void
public "OnFinishClient"(): void
public "OnFinishServer"(): void
public "PropogateToServer"(): boolean
public "NeedsNetSync"(): boolean
public "OnStartClientFromNetwork"(arg0: long): void
public "GetStartedTick"(): long
public "GetRequiredNetSyncMin"(): integer
public "GetRequiredNetSyncMax"(): integer
public "OnPerformedNetSync"(arg0: integer, arg1: integer): void
public "ProxyTriggerServer"(arg0: integer): void
public "RepeatDelayTicks"(): integer
public "GetTriggerCount"(): integer
public "GetPropogationRadius"(): double
public "GetDurationPerTriggerSeconds"(): float
public "AddExtraPositionsForNetSync"(arg0: integer, arg1: $List$Type<($Vec3$Type)>): void
public "ShouldAddPlayerPosForNetSync"(): boolean
public "RepeatDelaySeconds"(): float
public "RepeatCount"(): integer
public "SpinUpDuration"(): float
public "GetProgressTicks"(): integer
public "GetProgressSeconds"(): float
public "GetDurationPerTriggerTicks"(): integer
public "ShouldFallBackToReload"(): boolean
public "OnStartServerFromNetwork"(arg0: long): void
public "SetTriggerProcessed"(arg0: integer): void
public "SetTriggerAuthored"(arg0: integer): void
public "GetShootAction"(): $ShootAction
public "GetTicksSinceLastNetSync"(): long
public "GetLastNetSyncTick"(): long
public "HasReceivedNetSync"(): boolean
public "GetTicksSinceStart"(): long
public "HasStarted"(): boolean
public "Finished"(): boolean
public "AddAction"(arg0: $ActionInstance$Type): void
public "CanStart"(): $EActionResult
public "GetActions"(): $List<($ActionInstance)>
public "RepeatMode"(): $ERepeatMode
public "SkipTicks"(arg0: integer): void
public "SetStarted"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionGroupInstance$Type = ($ActionGroupInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionGroupInstance_ = $ActionGroupInstance$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$EnergyBlockDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EnergyBlockDefinition {
 "maxFE": integer
 "acceptFEPerTick": integer
 "disperseFEPerTick": integer
 "numBatterySlots": integer
 "batterySlotStackSize": integer
 "liquidFuelStorage": integer
 "liquidFuelFilter": string
 "liquidFEPerMillibucket": integer
 "numSolidFuelSlots": integer
 "solidFuelFilter": string
 "solidFEPerFuelTime": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBlockDefinition$Type = ($EnergyBlockDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBlockDefinition_ = $EnergyBlockDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$EWorkbenchInventoryType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EWorkbenchInventoryType extends $Enum<($EWorkbenchInventoryType)> {
static readonly "AllTypes": $EWorkbenchInventoryType
static readonly "PartInput": $EWorkbenchInventoryType
static readonly "PartOutput": $EWorkbenchInventoryType
static readonly "GunInput": $EWorkbenchInventoryType
static readonly "GunOutput": $EWorkbenchInventoryType
static readonly "Material": $EWorkbenchInventoryType
static readonly "Power": $EWorkbenchInventoryType
static readonly "Fuel": $EWorkbenchInventoryType
static readonly "GunModification": $EWorkbenchInventoryType
static readonly "Attachment": $EWorkbenchInventoryType
static readonly "PaintCan": $EWorkbenchInventoryType
static readonly "MagUpgrade": $EWorkbenchInventoryType


public static "values"(): ($EWorkbenchInventoryType)[]
public static "valueOf"(arg0: string): $EWorkbenchInventoryType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EWorkbenchInventoryType$Type = (("alltypes") | ("partinput") | ("gunoutput") | ("paintcan") | ("material") | ("attachment") | ("fuel") | ("guninput") | ("power") | ("partoutput") | ("magupgrade") | ("gunmodification")) | ($EWorkbenchInventoryType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EWorkbenchInventoryType_ = $EWorkbenchInventoryType$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$WorkbenchSideDefinition" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorkbenchIOSettingDefinition, $WorkbenchIOSettingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$WorkbenchIOSettingDefinition"

export class $WorkbenchSideDefinition {
 "side": $Direction
 "EUInputPerTick": integer
 "EUOutputPerTick": integer
 "ioSettings": ($WorkbenchIOSettingDefinition)[]
 "workbenchCanUseInventoriesOnSide": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchSideDefinition$Type = ($WorkbenchSideDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchSideDefinition_ = $WorkbenchSideDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/elements/$ImpactDefinition" {
import {$EAbilityTarget, $EAbilityTarget$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTarget"
import {$AbilityEffectDefinition, $AbilityEffectDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityEffectDefinition"

export class $ImpactDefinition {
 "targetType": $EAbilityTarget
 "impactEffects": ($AbilityEffectDefinition)[]

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpactDefinition$Type = ($ImpactDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImpactDefinition_ = $ImpactDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$ShooterContext" {
import {$Transform, $Transform$Type} from "packages/com/flansmod/physics/common/util/$Transform"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$StatAccumulator, $StatAccumulator$Type} from "packages/com/flansmod/common/actions/stats/$StatAccumulator"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ShooterBlockEntity, $ShooterBlockEntity$Type} from "packages/com/flansmod/common/actions/contexts/$ShooterBlockEntity"
import {$IModifierBaker, $IModifierBaker$Type} from "packages/com/flansmod/common/actions/stats/$IModifierBaker"
import {$FloatAccumulation, $FloatAccumulation$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulation"
import {$EContextSide, $EContextSide$Type} from "packages/com/flansmod/physics/common/util/$EContextSide"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShooterContext {
static "DimensionUnknown": $ResourceKey<($Level)>
static readonly "InvalidID": $UUID
static readonly "INVALID": $ShooterContext

constructor()

public "toString"(): string
public static "of"(arg0: $UUID$Type, arg1: $UUID$Type): $ShooterContext
public static "of"(arg0: $Entity$Type): $ShooterContext
public static "of"(arg0: $UUID$Type, arg1: $UUID$Type, arg2: boolean): $ShooterContext
public static "of"(arg0: $ShooterBlockEntity$Type): $ShooterContext
public static "of"(arg0: $Entity$Type, arg1: $Entity$Type): $ShooterContext
public "Level"(): $Level
public "ModifyString"(arg0: string, arg1: string): string
public "GetAttachedInventory"(): $Container
public "BakeModifiers"(arg0: $IModifierBaker$Type): void
public "GetShootOrigin"(arg0: float): $Transform
public "GetModifierFormula"(arg0: string): $StatAccumulator
public "GetStringOverride"(arg0: string): $Optional<(string)>
public "CreateContext"(arg0: $UUID$Type): $GunContext
public "IsLocalPlayerOwner"(): boolean
public "IsPlayerOwner"(): boolean
public "GetAllGunIDs"(): ($UUID)[]
public "GetNumValidContexts"(): integer
public "ModifyFloat"(arg0: string): $FloatAccumulation
public "GetGunContextForSlot"(arg0: integer, arg1: boolean): $GunContext
public "GetGunIDForSlot"(arg0: integer): $UUID
public "GetAllGunContexts"(): ($GunContext)[]
public static "client"(arg0: $Entity$Type, arg1: $Entity$Type): $ShooterContext
public static "client"(arg0: $Entity$Type): $ShooterContext
public static "client"(arg0: $UUID$Type, arg1: $UUID$Type): $ShooterContext
public static "client"(arg0: $ShooterBlockEntity$Type): $ShooterContext
public static "server"(arg0: $UUID$Type, arg1: $UUID$Type): $ShooterContext
public static "server"(arg0: $ShooterBlockEntity$Type): $ShooterContext
public static "server"(arg0: $Entity$Type): $ShooterContext
public static "server"(arg0: $Entity$Type, arg1: $Entity$Type): $ShooterContext
public "Entity"(): $Entity
public "Save"(arg0: $CompoundTag$Type): void
public "Dimension"(): $ResourceKey<($Level)>
public "Owner"(): $Entity
public static "Load"(arg0: $CompoundTag$Type, arg1: boolean): $ShooterContext
public "OwnerUUID"(): $UUID
public "IsValid"(): boolean
public "ShooterID"(): $UUID
public "EntityUUID"(): $UUID
public "MarkAsOld"(): void
public "IsCreative"(): boolean
public "GetSide"(): $EContextSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShooterContext$Type = ($ShooterContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShooterContext_ = $ShooterContext$Type;
}}
declare module "packages/com/flansmod/common/gunshots/$GunshotCollection" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Gunshot, $Gunshot$Type} from "packages/com/flansmod/common/gunshots/$Gunshot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GunDefinition, $GunDefinition$Type} from "packages/com/flansmod/common/types/guns/$GunDefinition"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $GunshotCollection {
static readonly "InvalidDimensionKey": $ResourceKey<($Level)>
static readonly "InvalidEntityID": integer
 "SeatID": integer
 "GunHash": integer
 "GroupPathHash": integer
 "FiredTick": integer
 "Processed": boolean
 "Shots": $List<($Gunshot)>

constructor()

public "FiredOnTick"(arg0: integer): $GunshotCollection
public "FromActionGroup"(arg0: integer): $GunshotCollection
public "FromActionGroup"(arg0: string): $GunshotCollection
public "Count"(): integer
public "Get"(arg0: integer): $Gunshot
public "Gun"(): $GunDefinition
public static "Encode"(arg0: $GunshotCollection$Type, arg1: $FriendlyByteBuf$Type): void
public static "Decode"(arg0: $GunshotCollection$Type, arg1: $FriendlyByteBuf$Type): void
public "CopySubset"(arg0: integer, arg1: integer): $GunshotCollection
public "WithGun"(arg0: $GunDefinition$Type): $GunshotCollection
public "WithGun"(arg0: integer): $GunshotCollection
public "AddShot"(arg0: $Gunshot$Type): $GunshotCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunshotCollection$Type = ($GunshotCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunshotCollection_ = $GunshotCollection$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$ActionGroupContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ERepeatMode, $ERepeatMode$Type} from "packages/com/flansmod/common/types/guns/elements/$ERepeatMode"
import {$ActionGroupDefinition, $ActionGroupDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MagazineDefinition, $MagazineDefinition$Type} from "packages/com/flansmod/common/types/magazines/$MagazineDefinition"
import {$IModifierBaker, $IModifierBaker$Type} from "packages/com/flansmod/common/actions/stats/$IModifierBaker"
import {$FloatAccumulation, $FloatAccumulation$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulation"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ActionDefinition, $ActionDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionDefinition"
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"
import {$ESpreadPattern, $ESpreadPattern$Type} from "packages/com/flansmod/common/types/guns/elements/$ESpreadPattern"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $ActionGroupContext {
static readonly "INVALID": $ActionGroupContext
readonly "Gun": $GunContext
readonly "GroupPath": string
readonly "Def": $ActionGroupDefinition
static readonly "INVALID_FIRE_INDEX": integer
static readonly "ALL_SPECIAL_FIRE_INDEX": integer


public "toString"(): string
public "ModifyString"(arg0: string, arg1: string): string
public "ModifyBoolean"(arg0: string, arg1: boolean): boolean
public static "CreateGroupPath"(arg0: $EAttachmentType$Type, arg1: integer, arg2: string): string
public static "CreateGroupPath"(arg0: $EAttachmentType$Type, arg1: string): string
public static "CreateGroupPath"(arg0: string): string
public "IsAttachment"(): boolean
public "GetAttachmentType"(): $EAttachmentType
public static "GetAttachmentType"(arg0: string): $EAttachmentType
public "GetAttachmentIndex"(): integer
public static "GetAttachmentIndex"(arg0: string): integer
public "BakeModifiers"(arg0: $IModifierBaker$Type): void
public "RepeatDelayTicks"(): integer
public "RoundsPerMinute"(): integer
public "VerticalRecoil"(): float
public "GetMagazineType"(arg0: integer): $MagazineDefinition
public "GetMagazineSize"(arg0: integer): integer
public "GetBulletAtIndex"(arg0: integer, arg1: integer): $ItemStack
public "GetCombinedBulletStacks"(arg0: integer): ($ItemStack)[]
public "GetNumBulletsInMag"(arg0: integer): integer
public "ModifyFloat"(arg0: string): $FloatAccumulation
public "CanPerformReloadFromAttachedInventory"(arg0: integer): boolean
public static "GetActionGroupKey"(arg0: string): string
public "GetActionGroupKey"(): string
public "SetMagazineType"(arg0: integer, arg1: $MagazineDefinition$Type): void
public "GetMagFullnessRatio"(arg0: integer): float
public "ConsumeBulletAtIndex"(arg0: integer, arg1: integer): $ItemStack
public "ConsumeOneBullet"(arg0: integer): $Pair<($ItemStack), (integer)>
public "GetNextIndexToFire"(arg0: integer): integer
public "LoadOneBulletIntoSlot"(arg0: integer, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): $ItemStack
public "LoadBullets"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "GetNextBulletToBeFired"(arg0: integer): $ItemStack
public "ContainsAnyBullets"(arg0: integer): boolean
public "GetCurrentChamber"(): integer
public "GetNextIndexToLoad"(arg0: integer): integer
public "SetCurrentChamber"(arg0: integer): void
public "AdvanceChamber"(): void
public "IsReloadInProgress"(): boolean
public "CanBeReloaded"(arg0: integer): boolean
public "FindSlotWithMatchingAmmo"(arg0: integer, arg1: $Container$Type): integer
public "IsShootAction"(): boolean
public "GetShootActionDefinition"(): $ActionDefinition
public "RepeatDelaySeconds"(): float
public "RepeatCount"(): integer
public "SpinUpDuration"(): float
public "HorizontalRecoil"(): float
public "SpreadPattern"(): $ESpreadPattern
public "Save"(arg0: $CompoundTag$Type): void
public static "Load"(arg0: $CompoundTag$Type, arg1: boolean): $ActionGroupContext
public "Pitch"(): float
public "IsValid"(): boolean
public static "GetSibling"(arg0: string, arg1: string): string
public "GetSibling"(arg0: string): string
public "CanShoot"(arg0: integer): boolean
public "ModifyEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $Class$Type<(T)>): $Enum<(T)>
public "GetBoolean"(arg0: string): boolean
public "Loudness"(): float
public "Volume"(): float
public "GetSpread"(arg0: $ActionDefinition$Type): float
public "LoadOne"(arg0: integer, arg1: $Container$Type, arg2: boolean): void
public static "CreateFrom"(arg0: $GunContext$Type, arg1: string): $ActionGroupContext
public "RepeatMode"(): $ERepeatMode
public "Spread"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionGroupContext$Type = ($ActionGroupContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionGroupContext_ = $ActionGroupContext$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$LocationFilterDefinition" {
import {$EFilterType, $EFilterType$Type} from "packages/com/flansmod/common/types/elements/$EFilterType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LocationFilterDefinition {
 "filterType": $EFilterType
 "matchResourceLocations": ($ResourceLocation)[]

constructor()

public "Matches"(arg0: $ResourceLocation$Type): boolean
public "Allows"(arg0: $ResourceLocation$Type): boolean
public "Disallows"(arg0: $ResourceLocation$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationFilterDefinition$Type = ($LocationFilterDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationFilterDefinition_ = $LocationFilterDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ModeDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModeDefinition {
 "key": string
 "values": (string)[]
 "defaultValue": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModeDefinition$Type = ($ModeDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModeDefinition_ = $ModeDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$EAccumulationSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAccumulationSource extends $Enum<($EAccumulationSource)> {
static readonly "PerStacks": $EAccumulationSource
static readonly "PerLevel": $EAccumulationSource
static readonly "PerAttachment": $EAccumulationSource
static readonly "PerMagFullness": $EAccumulationSource
static readonly "PerMagEmptiness": $EAccumulationSource


public static "values"(): ($EAccumulationSource)[]
public static "valueOf"(arg0: string): $EAccumulationSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAccumulationSource$Type = (("perstacks") | ("perlevel") | ("perattachment") | ("permagemptiness") | ("permagfullness")) | ($EAccumulationSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAccumulationSource_ = $EAccumulationSource$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$ItemCollectionDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LocationFilterDefinition, $LocationFilterDefinition$Type} from "packages/com/flansmod/common/types/elements/$LocationFilterDefinition"
import {$MaterialFilterDefinition, $MaterialFilterDefinition$Type} from "packages/com/flansmod/common/types/elements/$MaterialFilterDefinition"

export class $ItemCollectionDefinition {
 "itemIDFilters": ($LocationFilterDefinition)[]
 "itemTagFilters": ($LocationFilterDefinition)[]
 "materialFilters": ($MaterialFilterDefinition)[]

constructor()

public "GetItemMatches"(): $List<($ItemStack)>
public "GetDefinitionMatches"(): $List<($JsonDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCollectionDefinition$Type = ($ItemCollectionDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCollectionDefinition_ = $ItemCollectionDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/$CraftingTraitDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$AbilityDefinition, $AbilityDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$AbilityDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CraftingTraitDefinition extends $JsonDefinition {
static readonly "INVALID": $CraftingTraitDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "maxLevel": integer
 "abilities": ($AbilityDefinition)[]
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTraitDefinition$Type = ($CraftingTraitDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTraitDefinition_ = $CraftingTraitDefinition$Type;
}}
declare module "packages/com/flansmod/physics/common/util/$Transform" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$TransformStack, $TransformStack$Type} from "packages/com/flansmod/physics/common/util/$TransformStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemTransform, $ItemTransform$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransform"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Transform {
static readonly "IDENTITY": $Transform
readonly "Position": $Vector3d
readonly "Orientation": $Quaternionf
readonly "Scale": $Vector3f


public "up"(): $Vec3
public "roll"(): float
public static "fromPos"(arg0: double, arg1: double, arg2: double): $Transform
public static "fromPos"(arg0: $Vec3$Type): $Transform
public static "fromPos"(arg0: $Vector3d$Type): $Transform
public static "flatten"(arg0: $Consumer$Type<($TransformStack$Type)>): $Transform
public "down"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): string
public static "identity"(): $Transform
public static "copy"(arg0: $Transform$Type): $Transform
public "isIdentity"(): boolean
public "left"(): $Vec3
public "right"(): $Vec3
public static "rotate"(arg0: $Vector3f$Type, arg1: $Quaternionf$Type): $Vector3f
public static "compose"(...arg0: ($Transform$Type)[]): $Transform
public static "compose"(arg0: $Quaternionf$Type, arg1: $Quaternionf$Type): $Quaternionf
public static "compose"(arg0: $Quaternionf$Type, arg1: $Quaternionf$Type, arg2: $Quaternionf$Type): $Quaternionf
public static "error"(arg0: string): $Transform
public "back"(): $Vec3
public static "fromPosAndQuat"(arg0: $Vector3d$Type, arg1: $Quaternionf$Type): $Transform
public static "fromPosAndQuat"(arg0: $Vec3$Type, arg1: $Quaternionf$Type): $Transform
public static "fromPosAndQuat"(arg0: double, arg1: double, arg2: double, arg3: $Quaternionf$Type): $Transform
public static "fromEulerRadians"(arg0: float, arg1: float, arg2: float): $Transform
public static "quatFromEulerRadians"(arg0: float, arg1: float, arg2: float): $Quaternionf
public static "extractOrientation"(arg0: $Transform$Type, arg1: boolean): $Transform
public static "extractPosition"(arg0: $Transform$Type, arg1: double): $Transform
public "toPosAndOriTag"(): $CompoundTag
public static "fromPosAndOriTag"(arg0: $CompoundTag$Type): $Transform
public static "fromTagWithScale"(arg0: $CompoundTag$Type, arg1: $Vector3f$Type): $Transform
public "localToGlobalTransform"(arg0: $Transform$Type): $Transform
public "applyToPoseStack"(arg0: $PoseStack$Type): void
public "toNewPoseStack"(): $PoseStack
public "withEulerAngles"(arg0: float, arg1: float, arg2: float): $Transform
public "withPosition"(arg0: $Vec3$Type): $Transform
public "withPosition"(arg0: double, arg1: double, arg2: double): $Transform
public "positionVec3"(): $Vec3
public "localToGlobalDirection"(arg0: $Vec3$Type): $Vec3
public "directionVec"(arg0: $Direction$Type): $Vec3
public "localToGlobalPosition"(arg0: $Vec3$Type): $Vec3
public "globalToLocalPosition"(arg0: $Vec3$Type): $Vec3
public "localToGlobalVelocity"(arg0: $Vec3$Type): $Vec3
public "globalToLocalVelocity"(arg0: $Vec3$Type): $Vec3
public "globalToLocalDirection"(arg0: $Vec3$Type): $Vec3
public "localToGlobalOrientation"(arg0: $Quaternionf$Type): $Quaternionf
public "globalToLocalOrientation"(arg0: $Quaternionf$Type): $Quaternionf
public "localToGlobalScale"(arg0: $Vector3f$Type): $Vector3f
public "globalToLocalScale"(arg0: $Vector3f$Type): $Vector3f
public "globalToLocalTransform"(arg0: $Transform$Type): $Transform
public "localToGlobalBounds"(arg0: $AABB$Type): $AABB
public static "quatFromEuler"(arg0: $Vector3f$Type): $Quaternionf
public static "quatFromEuler"(arg0: float, arg1: float, arg2: float): $Quaternionf
public static "fromLookDirection"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Transform
public static "fromPosAndEuler"(arg0: $Vector3f$Type, arg1: $Vector3f$Type): $Transform
public static "fromPosAndEuler"(arg0: $Vec3$Type, arg1: $Vector3f$Type): $Transform
public static "fromPosAndEuler"(arg0: $Vec3$Type, arg1: float, arg2: float, arg3: float): $Transform
public "rotatePitch"(arg0: float): $Transform
public static "fromBlockPos"(arg0: $BlockPos$Type): $Transform
public static "interpolate"(arg0: $List$Type<($Transform$Type)>): $Transform
public static "interpolate"(arg0: $Transform$Type, arg1: $Transform$Type, arg2: float): $Transform
public static "interpolate"(arg0: $List$Type<($Transform$Type)>, arg1: (float)[]): $Transform
public "inverse"(): $Transform
public static "fromPositionAndLookDirection"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): $Transform
public "yaw"(): float
public "pitch"(): float
public "blockPos"(): $BlockPos
public "reflect"(arg0: boolean, arg1: boolean, arg2: boolean): $Transform
public static "lookAlong"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Quaternionf
public static "getScale"(arg0: $Matrix4f$Type): $Vector3f
public "forward"(): $Vec3
public "translated"(arg0: $Vec3$Type): $Transform
public "euler"(): $Vector3f
public static "fromEntity"(arg0: $Entity$Type): $Transform
public "toTag"(arg0: boolean, arg1: boolean, arg2: boolean): $CompoundTag
public static "fromTag"(arg0: $CompoundTag$Type, arg1: $Vec3$Type, arg2: $Quaternionf$Type, arg3: $Vector3f$Type): $Transform
public static "fromTag"(arg0: $CompoundTag$Type): $Transform
public "rotateYaw"(arg0: float): $Transform
public static "toEuler"(arg0: $Quaternionf$Type): $Vector3f
public static "fromEuler"(arg0: float, arg1: float, arg2: float): $Transform
public static "fromEuler"(arg0: $Vector3f$Type): $Transform
public "hasNaN"(): boolean
public static "fromScale"(arg0: $Vector3f$Type): $Transform
public static "fromScale"(arg0: float): $Transform
public static "fromItem"(arg0: $ItemTransform$Type): $Transform
public "toPosTag"(): $CompoundTag
public "withYaw"(arg0: float): $Transform
public "withPitch"(arg0: float): $Transform
public "withRoll"(arg0: float): $Transform
public "rotateRoll"(arg0: float): $Transform
public "oriMatrix"(): $Matrix3f
public "isApprox"(arg0: $Transform$Type, arg1: double, arg2: float, arg3: float): boolean
public "isApprox"(arg0: $Transform$Type, arg1: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/com/flansmod/common/actions/stats/$StatCalculationContext" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ShooterContext, $ShooterContext$Type} from "packages/com/flansmod/common/actions/contexts/$ShooterContext"
import {$AbilityStack, $AbilityStack$Type} from "packages/com/flansmod/common/abilities/$AbilityStack"

export class $StatCalculationContext {
readonly "Level": integer
readonly "StackCount": integer
readonly "NumAttachments": $Lazy<(integer)>
readonly "MagFullnessRatio": $Lazy<(float)>


public static "of"(arg0: integer, arg1: integer, arg2: $GunContext$Type): $StatCalculationContext
public static "of"(arg0: $GunContext$Type, arg1: $AbilityStack$Type): $StatCalculationContext
public static "of"(arg0: $GunContext$Type): $StatCalculationContext
public static "of"(arg0: $ShooterContext$Type): $StatCalculationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatCalculationContext$Type = ($StatCalculationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatCalculationContext_ = $StatCalculationContext$Type;
}}
declare module "packages/com/flansmod/physics/common/util/$EContextSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EContextSide extends $Enum<($EContextSide)> {
static readonly "Client": $EContextSide
static readonly "Server": $EContextSide
static readonly "Unknown": $EContextSide


public static "values"(): ($EContextSide)[]
public static "valueOf"(arg0: string): $EContextSide
public static "of"(arg0: $BlockEntity$Type): $EContextSide
public static "of"(arg0: $Entity$Type): $EContextSide
public static "of"(arg0: $Level$Type): $EContextSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EContextSide$Type = (("server") | ("client") | ("unknown")) | ($EContextSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EContextSide_ = $EContextSide$Type;
}}
declare module "packages/com/flansmod/common/crafting/$RestrictedContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"

export class $RestrictedContainer implements $Container, $ContainerData {
readonly "SlotCount": integer
readonly "StillValidFunc": $Function<($Player), (boolean)>
readonly "MaxStackSize": integer
readonly "AllowFunction": $Function<($ItemStack), (boolean)>
readonly "Slots": ($ItemStack)[]

constructor()
constructor(arg0: integer, arg1: integer, arg2: $Function$Type<($ItemStack$Type), (boolean)>)
constructor(arg0: $BlockEntity$Type)
constructor(arg0: integer, arg1: integer, arg2: $Function$Type<($ItemStack$Type), (boolean)>, arg3: $Function$Type<($Player$Type), (boolean)>)

public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): $CompoundTag
public "setChanged"(): void
public "get"(arg0: integer): integer
public "set"(arg0: integer, arg1: integer): void
public "stillValid"(arg0: $Player$Type): boolean
public "getMaxStackSize"(): integer
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getCount"(): integer
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "stopOpen"(arg0: $Player$Type): void
public "startOpen"(arg0: $Player$Type): void
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "clear"(): void
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "maxStackSize"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestrictedContainer$Type = ($RestrictedContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestrictedContainer_ = $RestrictedContainer$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$EActionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EActionType extends $Enum<($EActionType)> {
static readonly "Invalid": $EActionType
static readonly "PlaySound": $EActionType
static readonly "Animation": $EActionType
static readonly "Shoot": $EActionType
static readonly "AimDownSights": $EActionType
static readonly "Scope": $EActionType
static readonly "CookGrenade": $EActionType
static readonly "Drop": $EActionType
static readonly "Raycast": $EActionType
static readonly "Heal": $EActionType
static readonly "Feed": $EActionType
static readonly "ApplyPotionEffect": $EActionType
static readonly "Interact": $EActionType
static readonly "BreakBlock": $EActionType
static readonly "PlaceBlock": $EActionType
static readonly "CollectFluid": $EActionType
static readonly "PlaceFluid": $EActionType
static readonly "Repair": $EActionType
static readonly "DeleteEntity": $EActionType
static readonly "SummonNpc": $EActionType
static readonly "Melee": $EActionType
static readonly "Shield": $EActionType
static readonly "Pickaxe": $EActionType
static readonly "Shovel": $EActionType
static readonly "Axe": $EActionType
static readonly "Hoe": $EActionType
static readonly "Till": $EActionType
static readonly "Strip": $EActionType
static readonly "Shear": $EActionType
static readonly "Flatten": $EActionType
static readonly "AttachEffect": $EActionType
static readonly "SpawnParticle": $EActionType
static readonly "Laser": $EActionType
static readonly "SwitchMode": $EActionType
static readonly "AbilityOnSelf": $EActionType
static readonly "EjectCasing": $EActionType


public static "values"(): ($EActionType)[]
public static "valueOf"(arg0: string): $EActionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EActionType$Type = (("drop") | ("repair") | ("shield") | ("till") | ("cookgrenade") | ("pickaxe") | ("shovel") | ("interact") | ("raycast") | ("applypotioneffect") | ("axe") | ("switchmode") | ("aimdownsights") | ("flatten") | ("strip") | ("laser") | ("scope") | ("heal") | ("deleteentity") | ("shoot") | ("melee") | ("abilityonself") | ("summonnpc") | ("spawnparticle") | ("shear") | ("placefluid") | ("placeblock") | ("animation") | ("feed") | ("playsound") | ("breakblock") | ("invalid") | ("ejectcasing") | ("collectfluid") | ("hoe") | ("attacheffect")) | ($EActionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EActionType_ = $EActionType$Type;
}}
declare module "packages/com/flansmod/common/crafting/$WorkbenchBlockEntity$ItemCapabilityMultiContainer" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $WorkbenchBlockEntity$ItemCapabilityMultiContainer implements $IItemHandler {
static readonly "Invalid": $WorkbenchBlockEntity$ItemCapabilityMultiContainer

constructor(arg0: ($Container$Type)[], arg1: boolean, arg2: boolean)

public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlockEntity$ItemCapabilityMultiContainer$Type = ($WorkbenchBlockEntity$ItemCapabilityMultiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlockEntity$ItemCapabilityMultiContainer_ = $WorkbenchBlockEntity$ItemCapabilityMultiContainer$Type;
}}
declare module "packages/com/flansmod/common/network/$FlansModMessage" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FlansModMessage {

constructor()

public "Encode"(arg0: $FriendlyByteBuf$Type): void
public "Decode"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlansModMessage$Type = ($FlansModMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlansModMessage_ = $FlansModMessage$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$AbilityTargetDefinition" {
import {$TargetsContext, $TargetsContext$Type} from "packages/com/flansmod/common/actions/contexts/$TargetsContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EAbilityTarget, $EAbilityTarget$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTarget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"

export class $AbilityTargetDefinition {
 "targetType": $EAbilityTarget
 "matchIDs": ($ResourceLocation)[]
 "matchTags": ($ResourceLocation)[]

constructor()

public "GetTooltip"(arg0: boolean): $Component
public static "Matches"(arg0: ($AbilityTargetDefinition$Type)[], arg1: $EAbilityTarget$Type, arg2: $TriggerContext$Type): boolean
public "Matches"(arg0: $EAbilityTarget$Type): boolean
public "Matches"(arg0: $EAbilityTarget$Type, arg1: $TriggerContext$Type): boolean
public "ApplyTo"(arg0: $TriggerContext$Type, arg1: $TargetsContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityTargetDefinition$Type = ($AbilityTargetDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityTargetDefinition_ = $AbilityTargetDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/$EActionResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EActionResult extends $Enum<($EActionResult)> {
static readonly "CanProcess": $EActionResult
static readonly "TryNextAction": $EActionResult
static readonly "Wait": $EActionResult


public static "values"(): ($EActionResult)[]
public static "valueOf"(arg0: string): $EActionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EActionResult$Type = (("wait") | ("trynextaction") | ("canprocess")) | ($EActionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EActionResult_ = $EActionResult$Type;
}}
declare module "packages/com/flansmod/common/actions/$ActionStack" {
import {$ActionGroupInstance, $ActionGroupInstance$Type} from "packages/com/flansmod/common/actions/$ActionGroupInstance"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$AbilityStack, $AbilityStack$Type} from "packages/com/flansmod/common/abilities/$AbilityStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EAbilityTrigger, $EAbilityTrigger$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTrigger"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$AbilityStackingDefinition, $AbilityStackingDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityStackingDefinition"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$EActionResult, $EActionResult$Type} from "packages/com/flansmod/common/actions/$EActionResult"
import {$ActionUpdateMessage$ToServer, $ActionUpdateMessage$ToServer$Type} from "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage$ToServer"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ActionStack {
static readonly "Invalid": $ActionStack
readonly "IsClient": boolean
 "IsEquipped": boolean

constructor(arg0: boolean)

public "TryGetGroupInstance"(arg0: $ActionGroupContext$Type): $ActionGroupInstance
public "Server_TryHandleMessage"(arg0: $ActionUpdateMessage$ToServer$Type, arg1: $ServerPlayer$Type): $EActionResult
public "UpdateEquipped"(arg0: $GunContext$Type, arg1: boolean): void
public "IsReloading"(): boolean
public "GetActiveActionGroups"(): $List<($ActionGroupInstance)>
public "EvaluateTrigger"(arg0: $EAbilityTrigger$Type, arg1: $GunContext$Type, arg2: $TriggerContext$Type): void
public "EvaluateTrigger"(arg0: $EAbilityTrigger$Type, arg1: $GunContext$Type, arg2: $ActionGroupContext$Type, arg3: $TriggerContext$Type): void
public "EvaluateTrigger"(arg0: $EAbilityTrigger$Type, arg1: $ActionGroupContext$Type, arg2: $TriggerContext$Type): void
public "TryShootMultiple"(arg0: float): integer
public "GetShotCooldown"(): float
public "RequestCancel"(): void
public "IsActionGroupActive"(arg0: $ActionGroupContext$Type): boolean
public "OnStartReload"(arg0: $ActionGroupContext$Type, arg1: integer): void
public "CanReloadOne"(arg0: $ActionGroupContext$Type, arg1: integer): boolean
public "ForEachNonZeroStack"(arg0: $Consumer$Type<($AbilityStack$Type)>): void
public "GetOrCreateStacks"(arg0: $AbilityStackingDefinition$Type, arg1: integer): $AbilityStack
public "GetOrCreateGroupInstance"(arg0: $ActionGroupContext$Type): $ActionGroupInstance
public "CancelGroupInstance"(arg0: $ActionGroupContext$Type): void
public "Server_TryStartGroupInstance"(arg0: $ActionGroupContext$Type): $EActionResult
public "Server_TryUpdateGroupInstanceHeld"(arg0: $ActionGroupContext$Type): $EActionResult
public "Server_TryUpdateGroupInstanceNotHeld"(arg0: $ActionGroupContext$Type): $EActionResult
public "Client_TryStartGroupInstance"(arg0: $ActionGroupContext$Type): $EActionResult
public "Client_TryUpdateGroupInstanceHeld"(arg0: $ActionGroupContext$Type): $EActionResult
public "Client_TryUpdateGroupInstance"(arg0: $ActionGroupContext$Type, arg1: boolean): $EActionResult
public "Client_TryUpdateGroupInstanceNotHeld"(arg0: $ActionGroupContext$Type): $EActionResult
public "Server_TryUpdateGroupInstance"(arg0: $ActionGroupContext$Type, arg1: boolean): $EActionResult
public "IsValid"(): boolean
public "GetStacks"(arg0: $AbilityStackingDefinition$Type): $AbilityStack
public "OnTick"(arg0: $Level$Type, arg1: $GunContext$Type): void
public "Clear"(arg0: $GunContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionStack$Type = ($ActionStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionStack_ = $ActionStack$Type;
}}
declare module "packages/com/flansmod/common/crafting/$WorkbenchBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractWorkbench, $AbstractWorkbench$Type} from "packages/com/flansmod/common/crafting/$AbstractWorkbench"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$WorkbenchBlockEntity$ItemCapabilityMultiContainer, $WorkbenchBlockEntity$ItemCapabilityMultiContainer$Type} from "packages/com/flansmod/common/crafting/$WorkbenchBlockEntity$ItemCapabilityMultiContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$GunFabricationRecipe, $GunFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$WorkbenchDefinition, $WorkbenchDefinition$Type} from "packages/com/flansmod/common/types/crafting/$WorkbenchDefinition"

export class $WorkbenchBlockEntity extends $BlockEntity implements $WorldlyContainer, $MenuProvider, $Clearable, $ICapabilityProvider {
readonly "Def": $WorkbenchDefinition
readonly "Workbench": $AbstractWorkbench
readonly "DataAccess": $ContainerData
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "invalidateCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "UpdateGunCraftingOutputSlot"(): void
public "GetSubContainer"(arg0: integer): $Pair<($Container), (integer)>
public "SupplyItemCapability"(arg0: $Direction$Type): $WorkbenchBlockEntity$ItemCapabilityMultiContainer
public "GetSelectedGunRecipe"(): $GunFabricationRecipe
public "IsGunCraftingFullyValid"(): boolean
public "ConsumeGunCraftingInputs"(): void
public "QueueCrafting"(arg0: integer): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public static "serverTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $WorkbenchBlockEntity$Type): void
public static "tryClear"(arg0: any): void
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "stopOpen"(arg0: $Player$Type): void
public "startOpen"(arg0: $Player$Type): void
public "getMaxStackSize"(): integer
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "clear"(): void
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "displayName"(): $Component
get "empty"(): boolean
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlockEntity$Type = ($WorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlockEntity_ = $WorkbenchBlockEntity$Type;
}}
declare module "packages/com/flansmod/common/abilities/$IAbilityEffect" {
import {$TargetsContext, $TargetsContext$Type} from "packages/com/flansmod/common/actions/contexts/$TargetsContext"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$AbilityStack, $AbilityStack$Type} from "packages/com/flansmod/common/abilities/$AbilityStack"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"

export interface $IAbilityEffect {

 "TriggerClient"(arg0: $ActionGroupContext$Type, arg1: $TriggerContext$Type, arg2: $TargetsContext$Type, arg3: $AbilityStack$Type): void
 "TriggerServer"(arg0: $ActionGroupContext$Type, arg1: $TriggerContext$Type, arg2: $TargetsContext$Type, arg3: $AbilityStack$Type): void
 "CanBeContinuous"(): boolean
 "GetActiveModifiers"(): ($ModifierDefinition)[]
 "EndServer"(arg0: $GunContext$Type, arg1: $AbilityStack$Type): void
 "EndClient"(arg0: $GunContext$Type, arg1: $AbilityStack$Type): void
}

export namespace $IAbilityEffect {
const NO_MODS: ($ModifierDefinition)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbilityEffect$Type = ($IAbilityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAbilityEffect_ = $IAbilityEffect$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$EAbilityTarget" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAbilityTarget extends $Enum<($EAbilityTarget)> {
static readonly "None": $EAbilityTarget
static readonly "Shooter": $EAbilityTarget
static readonly "Owner": $EAbilityTarget
static readonly "ShotEntity": $EAbilityTarget
static readonly "SplashedEntities": $EAbilityTarget
static readonly "ShotBlock": $EAbilityTarget
static readonly "ShotPosition": $EAbilityTarget


public static "values"(): ($EAbilityTarget)[]
public static "valueOf"(arg0: string): $EAbilityTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAbilityTarget$Type = (("owner") | ("shotposition") | ("shotentity") | ("shotblock") | ("shooter") | ("none") | ("splashedentities")) | ($EAbilityTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAbilityTarget_ = $EAbilityTarget$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ActionDefinition" {
import {$EActionType, $EActionType$Type} from "packages/com/flansmod/common/types/guns/elements/$EActionType"
import {$SoundDefinition, $SoundDefinition$Type} from "packages/com/flansmod/common/types/elements/$SoundDefinition"

export class $ActionDefinition {
static readonly "Invalid": $ActionDefinition
 "actionType": $EActionType
 "id": string
 "duration": float
 "delay": float
 "sounds": ($SoundDefinition)[]
 "itemStack": string
 "scopeOverlay": string
 "anim": string

constructor()

public "IsValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionDefinition$Type = ($ActionDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionDefinition_ = $ActionDefinition$Type;
}}
declare module "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GunFabricationRecipe, $GunFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GunFabricationRecipe$Serializer implements $RecipeSerializer<($GunFabricationRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GunFabricationRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GunFabricationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GunFabricationRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GunFabricationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFabricationRecipe$Serializer$Type = ($GunFabricationRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFabricationRecipe$Serializer_ = $GunFabricationRecipe$Serializer$Type;
}}
declare module "packages/com/flansmod/common/item/$AttachmentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FlanItem, $FlanItem$Type} from "packages/com/flansmod/common/item/$FlanItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttachmentItem extends $FlanItem {
readonly "DefinitionLocation": $ResourceLocation
static readonly "InvalidGunUUID": $UUID
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

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)

public "ShouldRenderAsIcon"(arg0: $ItemDisplayContext$Type): boolean
public "CanBeCraftedFromParts"(): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItem$Type = ($AttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItem_ = $AttachmentItem$Type;
}}
declare module "packages/com/flansmod/util/formulae/$FloatFormula$Term" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FloatFormula$Term {
 "Coefficient": float
 "Flags": integer

constructor(arg0: float, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatFormula$Term$Type = ($FloatFormula$Term);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatFormula$Term_ = $FloatFormula$Term$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$ShooterBlockEntity" {
import {$Transform, $Transform$Type} from "packages/com/flansmod/physics/common/util/$Transform"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ActionStack, $ActionStack$Type} from "packages/com/flansmod/common/actions/$ActionStack"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ShooterBlockEntity extends $BlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "GetShootOrigin"(arg0: float): $Transform
public "CreateContext"(arg0: $UUID$Type): $GunContext
public "GetAllGunIDs"(): ($UUID)[]
public "GetNumValidContexts"(): integer
public "GetActionStack"(arg0: integer): $ActionStack
public "GetShooterID"(): $UUID
public "GetGunIDForSlot"(arg0: integer): $UUID
public "Owner"(): $Entity
public "OwnerUUID"(): $UUID
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShooterBlockEntity$Type = ($ShooterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShooterBlockEntity_ = $ShooterBlockEntity$Type;
}}
declare module "packages/com/flansmod/common/crafting/$WorkbenchBlock" {
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
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
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
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$WorkbenchDefinition, $WorkbenchDefinition$Type} from "packages/com/flansmod/common/types/crafting/$WorkbenchDefinition"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WorkbenchBlock extends $BaseEntityBlock {
static readonly "DIRECTION": $DirectionProperty
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

constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "Def"(): $WorkbenchDefinition
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$Type = ($WorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock_ = $WorkbenchBlock$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$EMaterialType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EMaterialType$MaterialAndTier, $EMaterialType$MaterialAndTier$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialType$MaterialAndTier"

export class $EMaterialType extends $Enum<($EMaterialType)> {
static readonly "Misc": $EMaterialType
static readonly "Wood": $EMaterialType
static readonly "Glass": $EMaterialType
static readonly "Metal": $EMaterialType
static readonly "Composite": $EMaterialType
static readonly "Electronic": $EMaterialType
static readonly "Fabric": $EMaterialType


public static "values"(): ($EMaterialType)[]
public static "valueOf"(arg0: string): $EMaterialType
public static "parse"(arg0: string): $EMaterialType
public "ToComponent"(): $Component
public static "Resolve"(arg0: string): $EMaterialType$MaterialAndTier
public static "GetType"(arg0: string): $EMaterialType
public static "GetTier"(arg0: string): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMaterialType$Type = (("glass") | ("composite") | ("fabric") | ("metal") | ("electronic") | ("wood") | ("misc")) | ($EMaterialType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMaterialType_ = $EMaterialType$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$TriggerContext" {
import {$ShooterContext, $ShooterContext$Type} from "packages/com/flansmod/common/actions/contexts/$ShooterContext"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbilityTargetDefinition, $AbilityTargetDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityTargetDefinition"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EAbilityTarget, $EAbilityTarget$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTarget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TriggerContext {
readonly "Shooter": $Entity
readonly "Owner": $Entity
readonly "Hit": $HitResult
readonly "ActionGroupPath": string
readonly "SplashedEntities": $Collection<($Entity)>


public static "hit"(arg0: $ShooterContext$Type, arg1: $HitResult$Type): $TriggerContext
public static "empty"(): $TriggerContext
public static "self"(arg0: $ShooterContext$Type): $TriggerContext
public static "self"(arg0: $Entity$Type): $TriggerContext
public static "self"(arg0: $GunContext$Type): $TriggerContext
public static "self"(arg0: $ActionGroupContext$Type): $TriggerContext
public static "hitWithSplash"(arg0: $GunContext$Type, arg1: $HitResult$Type, arg2: $Collection$Type<($Entity$Type)>): $TriggerContext
public static "hitWithSplash"(arg0: $ShooterContext$Type, arg1: $HitResult$Type, arg2: $Collection$Type<($Entity$Type)>): $TriggerContext
public static "hitWithSplash"(arg0: $ActionGroupContext$Type, arg1: $HitResult$Type, arg2: $Collection$Type<($Entity$Type)>): $TriggerContext
public "CanTriggerFor"(arg0: ($AbilityTargetDefinition$Type)[]): boolean
public "CanTriggerFor"(arg0: $EAbilityTarget$Type): boolean
public "TriggerOnBlocks"(arg0: ($AbilityTargetDefinition$Type)[], arg1: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>): void
public "TriggerOnPositions"(arg0: ($AbilityTargetDefinition$Type)[], arg1: $Consumer$Type<($Vec3$Type)>): void
public "TriggerOnEntities"(arg0: ($AbilityTargetDefinition$Type)[], arg1: $Consumer$Type<($Entity$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerContext$Type = ($TriggerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriggerContext_ = $TriggerContext$Type;
}}
declare module "packages/com/flansmod/common/types/parts/elements/$EFuelType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EFuelType extends $Enum<($EFuelType)> {
static readonly "Creative": $EFuelType
static readonly "Smeltable": $EFuelType
static readonly "Smokable": $EFuelType
static readonly "Blastable": $EFuelType
static readonly "Liquid": $EFuelType
static readonly "FE": $EFuelType


public static "values"(): ($EFuelType)[]
public static "valueOf"(arg0: string): $EFuelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EFuelType$Type = (("smeltable") | ("liquid") | ("smokable") | ("blastable") | ("creative") | ("fe")) | ($EFuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EFuelType_ = $EFuelType$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/$BulletDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$ActionGroupDefinition, $ActionGroupDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition"
import {$HitscanDefinition, $HitscanDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$HitscanDefinition"
import {$ProjectileDefinition, $ProjectileDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$ProjectileDefinition"
import {$AbilityDefinition, $AbilityDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$AbilityDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemDefinition"
import {$BulletItem, $BulletItem$Type} from "packages/com/flansmod/common/item/$BulletItem"

export class $BulletDefinition extends $JsonDefinition {
static readonly "INVALID": $BulletDefinition
static readonly "STANDARD_TEST_BULLET": $BulletDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "item": $BulletItem
 "itemSettings": $ItemDefinition
 "roundsPerItem": integer
 "hitscans": ($HitscanDefinition)[]
 "projectiles": ($ProjectileDefinition)[]
 "triggers": ($AbilityDefinition)[]
 "actionGroups": ($ActionGroupDefinition)[]
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetItemDurability"(): integer
public "GetMaxStackSize"(): integer
public "HasTag"(arg0: $ResourceLocation$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletDefinition$Type = ($BulletDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletDefinition_ = $BulletDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/elements/$TrailDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TrailDefinition {
 "particle": string
 "speed": float
 "fromTick": integer
 "toTick": integer
 "spawnPoints": (string)[]
 "spawnUnderwater": boolean
 "onlySpawnUnderwater": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailDefinition$Type = ($TrailDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailDefinition_ = $TrailDefinition$Type;
}}
declare module "packages/com/flansmod/common/item/$PartItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FlanItem, $FlanItem$Type} from "packages/com/flansmod/common/item/$FlanItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PartItem extends $FlanItem {
readonly "DefinitionLocation": $ResourceLocation
static readonly "InvalidGunUUID": $UUID
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

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)

public "ShouldRenderAsIcon"(arg0: $ItemDisplayContext$Type): boolean
public "CanBeCraftedFromParts"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$Type = ($PartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartItem_ = $PartItem$Type;
}}
declare module "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage" {
import {$EPressType, $EPressType$Type} from "packages/com/flansmod/common/gunshots/$EPressType"
import {$ActionGroupInstance, $ActionGroupInstance$Type} from "packages/com/flansmod/common/actions/$ActionGroupInstance"
import {$ActionUpdateMessage$ActionTriggerInfo, $ActionUpdateMessage$ActionTriggerInfo$Type} from "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage$ActionTriggerInfo"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FlansModMessage, $FlansModMessage$Type} from "packages/com/flansmod/common/network/$FlansModMessage"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$ActionInstance$NetData, $ActionInstance$NetData$Type} from "packages/com/flansmod/common/actions/$ActionInstance$NetData"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ActionUpdateMessage extends $FlansModMessage {

constructor()
constructor(arg0: $ActionGroupContext$Type, arg1: $EPressType$Type, arg2: long)

public "toString"(): string
public "GetPressType"(): $EPressType
public "GetStartTick"(): long
public "AddTriggers"(arg0: $ActionGroupInstance$Type, arg1: integer, arg2: integer): void
public "GetTriggers"(): $Set<($Map$Entry<(integer), ($ActionUpdateMessage$ActionTriggerInfo)>)>
public "GetLastTriggerTick"(): long
public "GetActionGroupContext"(arg0: boolean): $ActionGroupContext
public "GetLastTriggerIndex"(): integer
public "GetFirstTriggerTick"(): long
public "GetFirstTriggerIndex"(): integer
public "Encode"(arg0: $FriendlyByteBuf$Type): void
public "Decode"(arg0: $FriendlyByteBuf$Type): void
public "GetNetData"(arg0: integer, arg1: integer): $ActionInstance$NetData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionUpdateMessage$Type = ($ActionUpdateMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionUpdateMessage_ = $ActionUpdateMessage$Type;
}}
declare module "packages/com/flansmod/common/types/attachments/$AttachmentDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$ERepeatMode, $ERepeatMode$Type} from "packages/com/flansmod/common/types/guns/elements/$ERepeatMode"
import {$ActionGroupDefinition, $ActionGroupDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition"
import {$EPlayerInput, $EPlayerInput$Type} from "packages/com/flansmod/common/types/elements/$EPlayerInput"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunInputContext, $GunInputContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunInputContext"
import {$ReloadDefinition, $ReloadDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ReloadDefinition"
import {$HandlerDefinition, $HandlerDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$HandlerDefinition"
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"
import {$CraftingTraitProviderDefinition, $CraftingTraitProviderDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$CraftingTraitProviderDefinition"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$EMechaEffect, $EMechaEffect$Type} from "packages/com/flansmod/common/types/attachments/$EMechaEffect"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemDefinition"

export class $AttachmentDefinition extends $JsonDefinition {
static readonly "INVALID": $AttachmentDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "itemSettings": $ItemDefinition
 "attachmentType": $EAttachmentType
 "modifiers": ($ModifierDefinition)[]
 "mechaEffects": ($EMechaEffect)[]
 "mechaEffectFilter": string
 "handlerOverrides": ($HandlerDefinition)[]
 "actionOverrides": ($ActionGroupDefinition)[]
 "reloadOverrides": ($ReloadDefinition)[]
 "abilities": ($CraftingTraitProviderDefinition)[]
 "modeOverride": $ERepeatMode
 "overrideFireMode": boolean
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetActionGroup"(arg0: string): $ActionGroupDefinition
public "GetInputHandler"(arg0: $GunInputContext$Type): $HandlerDefinition
public "GetInputHandler"(arg0: $EPlayerInput$Type): $HandlerDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentDefinition$Type = ($AttachmentDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentDefinition_ = $AttachmentDefinition$Type;
}}
declare module "packages/com/flansmod/common/item/$FlanItem" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CraftingTraitDefinition, $CraftingTraitDefinition$Type} from "packages/com/flansmod/common/types/abilities/$CraftingTraitDefinition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PartDefinition, $PartDefinition$Type} from "packages/com/flansmod/common/types/parts/$PartDefinition"
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PaintableDefinition, $PaintableDefinition$Type} from "packages/com/flansmod/common/types/elements/$PaintableDefinition"
import {$AttachmentDefinition, $AttachmentDefinition$Type} from "packages/com/flansmod/common/types/attachments/$AttachmentDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlanItem extends $Item implements $IForgeItem {
readonly "DefinitionLocation": $ResourceLocation
static readonly "InvalidGunUUID": $UUID
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

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)

public static "SetAttachmentInSlot"(arg0: $ItemStack$Type, arg1: $EAttachmentType$Type, arg2: integer, arg3: $ItemStack$Type): void
public static "RemoveAttachmentFromSlot"(arg0: $ItemStack$Type, arg1: $EAttachmentType$Type, arg2: integer): $ItemStack
public static "GetPaintjobName"(arg0: $ItemStack$Type): string
public static "SetPaintjobName"(arg0: $ItemStack$Type, arg1: string): void
public static "SetCraftingInputs"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public static "SetCraftingInputs"(arg0: $ItemStack$Type, arg1: ($ItemStack$Type)[]): void
public static "GetModeValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): string
public static "SetModeValue"(arg0: $ItemStack$Type, arg1: string, arg2: string): void
public static "GetAllItems"(): $Iterable<($FlanItem)>
public "getDefinitionLocation"(): $ResourceLocation
public "GetPaintDef"(): $PaintableDefinition
public "ShouldRenderAsIcon"(arg0: $ItemDisplayContext$Type): boolean
public "CanBeCraftedFromParts"(): boolean
public static "GetCraftingInputs"(arg0: $ItemStack$Type): ($PartDefinition)[]
public static "CreateTraitComponent"(arg0: $CraftingTraitDefinition$Type, arg1: integer, arg2: boolean): $Component
public static "GetAttachmentStacks"(arg0: $ItemStack$Type): $List<($ItemStack)>
public static "Server_GetOrSetNewGunID"(arg0: $ItemStack$Type): $UUID
public "HasAttachmentSlot"(arg0: $EAttachmentType$Type, arg1: integer): boolean
public "CanAcceptAttachment"(arg0: $ItemStack$Type, arg1: $EAttachmentType$Type, arg2: integer): boolean
public static "GetAttachmentInSlot"(arg0: $ItemStack$Type, arg1: $EAttachmentType$Type, arg2: integer): $ItemStack
public static "GetAttachmentDefinitions"(arg0: $ItemStack$Type): $List<($AttachmentDefinition)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "Def"(): $JsonDefinition
public static "GetGunID"(arg0: $ItemStack$Type): $UUID
public static "GetTraits"(arg0: $ItemStack$Type): $Map<($CraftingTraitDefinition), (integer)>
public static "TryAttach"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "ListOf"(arg0: string, arg1: (string)[]): $Component
public static "ListOf"(arg0: ($Component$Type)[]): $Component
public "isRepairable"(arg0: $ItemStack$Type): boolean
get "definitionLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlanItem$Type = ($FlanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlanItem_ = $FlanItem$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$AttachmentSettingsDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AttachmentSettingsDefinition {
 "matchNames": (string)[]
 "matchTags": (string)[]
 "numAttachmentSlots": integer
 "hideDefaultMesh": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSettingsDefinition$Type = ($AttachmentSettingsDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentSettingsDefinition_ = $AttachmentSettingsDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$ItemHoldingDefinition" {
import {$ItemHoldingSlotDefinition, $ItemHoldingSlotDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$ItemHoldingSlotDefinition"

export class $ItemHoldingDefinition {
 "slots": ($ItemHoldingSlotDefinition)[]
 "allow": string
 "maxStackSize": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHoldingDefinition$Type = ($ItemHoldingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHoldingDefinition_ = $ItemHoldingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$EMaterialIconType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EMaterialIconType extends $Enum<($EMaterialIconType)> {
static readonly "nugget": $EMaterialIconType
static readonly "ingot": $EMaterialIconType
static readonly "small_sheet": $EMaterialIconType
static readonly "sheet": $EMaterialIconType
static readonly "block": $EMaterialIconType
static readonly "planks": $EMaterialIconType
static readonly "thread": $EMaterialIconType


public static "values"(): ($EMaterialIconType)[]
public static "valueOf"(arg0: string): $EMaterialIconType
public "GetIcon"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMaterialIconType$Type = (("nugget") | ("small_sheet") | ("sheet") | ("block") | ("thread") | ("ingot") | ("planks")) | ($EMaterialIconType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMaterialIconType_ = $EMaterialIconType$Type;
}}
declare module "packages/com/flansmod/common/crafting/$AbstractWorkbench" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$EWorkbenchInventoryType, $EWorkbenchInventoryType$Type} from "packages/com/flansmod/common/types/crafting/$EWorkbenchInventoryType"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ContainerData, $ContainerData$Type} from "packages/net/minecraft/world/inventory/$ContainerData"
import {$PartFabricationRecipe, $PartFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$PartFabricationRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$GunFabricationRecipe, $GunFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe"
import {$RestrictedContainer, $RestrictedContainer$Type} from "packages/com/flansmod/common/crafting/$RestrictedContainer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$WorkbenchDefinition, $WorkbenchDefinition$Type} from "packages/com/flansmod/common/types/crafting/$WorkbenchDefinition"

export class $AbstractWorkbench implements $Container, $Clearable, $MenuProvider {
readonly "Def": $WorkbenchDefinition
readonly "GunContainer": $RestrictedContainer
readonly "PaintCanContainer": $RestrictedContainer
readonly "MagUpgradeContainer": $RestrictedContainer
readonly "GunCraftingInputContainer": $RestrictedContainer
readonly "GunCraftingOutputContainer": $RestrictedContainer
readonly "PartCraftingInputContainer": $RestrictedContainer
readonly "PartCraftingOutputContainer": $RestrictedContainer
readonly "MaterialContainer": $RestrictedContainer
readonly "BatteryContainer": $RestrictedContainer
readonly "FuelContainer": $RestrictedContainer
static readonly "NUM_CRAFTING_QUEUE_SLOTS": integer
static readonly "DATA_LIT_TIME": integer
static readonly "DATA_LIT_DURATION": integer
static readonly "DATA_FORGE_ENERGY": integer
static readonly "DATA_CRAFT_TIME": integer
static readonly "DATA_CRAFT_DURATION": integer
static readonly "DATA_CRAFT_QUEUE_COUNT_0": integer
static readonly "DATA_CRAFT_QUEUE_COUNT_MAX": integer
static readonly "DATA_CRAFT_SELECTION_0": integer
static readonly "DATA_CRAFT_SELECTION_MAX": integer
static readonly "NUM_DATA_MEMBERS": integer
static readonly "CRAFTING_NOTHING": integer
 "LitTime": integer
 "LitDuration": integer
 "CraftTime": integer
 "CraftDuration": integer
 "PlayerSelectedCraftingGun": integer
 "PlayerSelectedCraftingPart": integer
 "CraftQueueCount": (integer)[]
 "CraftingPart": (integer)[]

constructor(arg0: $WorkbenchDefinition$Type, arg1: $Function$Type<($Player$Type), (boolean)>)

public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "CountInputMatching"(arg0: $Ingredient$Type): integer
public "AutoFillGunCraftingInputSlot"(arg0: $Player$Type, arg1: integer): void
public "UpdateGunCraftingOutputSlot"(arg0: $Level$Type): void
public "PartRecipeCanBeCraftedInThisWorkbench"(arg0: $ItemStack$Type): boolean
public "GunRecipeCanBeCraftedInThisWorkbench"(arg0: $ItemStack$Type): boolean
public "GetDataAccess"(): $ContainerData
public "GetLazyOptionalEnergy"(): $LazyOptional<($IEnergyStorage)>
public "GetSubContainer"(arg0: integer): $Pair<($Container), (integer)>
public "GetContainers"(arg0: $EWorkbenchInventoryType$Type): ($Container)[]
public "GetSelectedGunRecipe"(arg0: $Level$Type): $GunFabricationRecipe
public "IsGunCraftingFullyValid"(arg0: $Level$Type): boolean
public "ConsumeGunCraftingInputs"(arg0: $Level$Type): void
public "QueueCrafting"(arg0: $Level$Type, arg1: integer): void
public "SelectGunCraftingRecipe"(arg0: $Level$Type, arg1: integer): void
public "SelectMagazine"(arg0: $Player$Type, arg1: integer): void
public static "SelectMagazine"(arg0: $Player$Type, arg1: $Container$Type, arg2: $Container$Type, arg3: integer): void
public "SelectPartCraftingRecipe"(arg0: $Level$Type, arg1: integer): void
public "CancelQueue"(arg0: integer): void
public "GetQuantityOfEachIngredientForRecipe"(arg0: $Level$Type, arg1: integer): (integer)[]
public "GetRequiredOfEachIngredientForRecipe"(arg0: $Level$Type, arg1: integer): (integer)[]
public "GetMaxPartsCraftableFromInput"(arg0: $Level$Type, arg1: integer): integer
public "CraftOnePart"(arg0: $Level$Type, arg1: $Vec3$Type): boolean
public "GetOutputSlotToCraftPart"(arg0: $Level$Type): integer
public "IsGunCraftingSlotValid"(arg0: $Level$Type, arg1: integer): boolean
public "GetSelectedGunRecipeIndex"(): integer
public "MatchesGunRecipe"(arg0: $Level$Type, arg1: $GunFabricationRecipe$Type): boolean
public "MatchesGunRecipe"(arg0: $Level$Type, arg1: integer): boolean
public static "CanSelectMagazine"(arg0: $Player$Type, arg1: $Container$Type, arg2: $Container$Type, arg3: integer): boolean
public static "CanPaintGun"(arg0: $Player$Type, arg1: $Container$Type, arg2: $Container$Type, arg3: integer): boolean
public "GetMatchingGunRecipes"(arg0: $Level$Type): $List<($GunFabricationRecipe)>
public "GetAllGunRecipes"(arg0: $Level$Type): $List<($GunFabricationRecipe)>
public static "GetMagUpgradeCost"(arg0: $Container$Type, arg1: integer): integer
public static "GetPaintUpgradeCost"(arg0: $Container$Type, arg1: integer): integer
public "GetAllPartRecipes"(arg0: $Level$Type): $List<($PartFabricationRecipe)>
public "setChanged"(): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "serverTick"(arg0: $Level$Type, arg1: $Vec3$Type): boolean
public "PaintGun"(arg0: $Player$Type, arg1: integer): void
public static "PaintGun"(arg0: $Player$Type, arg1: $Container$Type, arg2: $Container$Type, arg3: integer): void
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "stopOpen"(arg0: $Player$Type): void
public "startOpen"(arg0: $Player$Type): void
public "getMaxStackSize"(): integer
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "clear"(): void
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
get "empty"(): boolean
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWorkbench$Type = ($AbstractWorkbench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWorkbench_ = $AbstractWorkbench$Type;
}}
declare module "packages/com/flansmod/common/types/guns/$GunDefinition" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$ActionGroupDefinition, $ActionGroupDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition"
import {$MagazineSlotSettingsDefinition, $MagazineSlotSettingsDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$MagazineSlotSettingsDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GunInputContext, $GunInputContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunInputContext"
import {$ReloadDefinition, $ReloadDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ReloadDefinition"
import {$HandlerDefinition, $HandlerDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$HandlerDefinition"
import {$AttachmentSettingsDefinition, $AttachmentSettingsDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$AttachmentSettingsDefinition"
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"
import {$PaintableDefinition, $PaintableDefinition$Type} from "packages/com/flansmod/common/types/elements/$PaintableDefinition"
import {$SoundDefinition, $SoundDefinition$Type} from "packages/com/flansmod/common/types/elements/$SoundDefinition"
import {$AbilityDefinition, $AbilityDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$AbilityDefinition"
import {$ModeDefinition, $ModeDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ModeDefinition"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemDefinition"

export class $GunDefinition extends $JsonDefinition {
static readonly "TYPE": string
static readonly "FOLDER": string
static readonly "INVALID": $GunDefinition
 "itemSettings": $ItemDefinition
 "paints": $PaintableDefinition
 "inputHandlers": ($HandlerDefinition)[]
 "actionGroups": ($ActionGroupDefinition)[]
 "magazines": ($MagazineSlotSettingsDefinition)[]
 "staticAbilities": ($AbilityDefinition)[]
 "reloads": ($ReloadDefinition)[]
 "modes": ($ModeDefinition)[]
 "loopingSounds": ($SoundDefinition)[]
 "barrelAttachments": $AttachmentSettingsDefinition
 "gripAttachments": $AttachmentSettingsDefinition
 "stockAttachments": $AttachmentSettingsDefinition
 "scopeAttachments": $AttachmentSettingsDefinition
 "genericAttachments": $AttachmentSettingsDefinition
 "charmAttachments": $AttachmentSettingsDefinition
 "modelParts": (string)[]
 "animationSet": string
 "particleCount": integer
 "casingModel": string
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetMagazineSettings"(arg0: string): $MagazineSlotSettingsDefinition
public "GetAttachmentSettings"(arg0: $EAttachmentType$Type): $AttachmentSettingsDefinition
public "GetActionGroup"(arg0: string): $ActionGroupDefinition
public "GetInputHandler"(arg0: $GunInputContext$Type): $HandlerDefinition
public "LoadExtra"(arg0: $JsonElement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunDefinition$Type = ($GunDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunDefinition_ = $GunDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/stats/$StatAccumulator" {
import {$StatAccumulatorDefinition, $StatAccumulatorDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$StatAccumulatorDefinition"
import {$FloatAccumulation, $FloatAccumulation$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulation"
import {$IStatCalculatorContext, $IStatCalculatorContext$Type} from "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$EAccumulationSource, $EAccumulationSource$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAccumulationSource"
import {$StatFormula, $StatFormula$Type} from "packages/com/flansmod/common/actions/stats/$StatFormula"
import {$FloatAccumulator, $FloatAccumulator$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulator"

export class $StatAccumulator extends $FloatAccumulator<($EAccumulationSource), ($StatFormula)> {
static readonly "EmptyAccumulator": $StatAccumulator
static readonly "EmptyFormula": $StatFormula

constructor()

public "CopyWithLevelAndStacks"(arg0: integer, arg1: integer): $StatAccumulator
public "Stack"(arg0: integer, arg1: integer, arg2: $StatAccumulatorDefinition$Type): $StatAccumulator
public "Stack"(...arg0: ($ModifierDefinition$Type)[]): $StatAccumulator
public "Stack"(arg0: integer, arg1: integer, ...arg2: ($StatAccumulatorDefinition$Type)[]): $StatAccumulator
public "Stack"(...arg0: ($StatAccumulatorDefinition$Type)[]): $StatAccumulator
public "CopyFrom"(arg0: $StatAccumulator$Type): $StatAccumulator
public "Bake"(arg0: $EAccumulationSource$Type, arg1: float): $StatAccumulator
public "Calculate"(arg0: $IStatCalculatorContext$Type): $FloatAccumulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatAccumulator$Type = ($StatAccumulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatAccumulator_ = $StatAccumulator$Type;
}}
declare module "packages/com/flansmod/api/$IAmmoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IAmmoItem {

 "matchesTags"(arg0: $ItemStack$Type, arg1: $List$Type<($TagKey$Type<($Item$Type)>)>): boolean
 "provideForTags"(arg0: $ItemStack$Type, arg1: $List$Type<($TagKey$Type<($Item$Type)>)>): $ItemStack
 "provideForIDs"(arg0: $ItemStack$Type, arg1: $List$Type<($ResourceLocation$Type)>): $ItemStack
 "provideAny"(arg0: $ItemStack$Type): $ItemStack
 "matchesIDs"(arg0: $ItemStack$Type, arg1: $List$Type<($ResourceLocation$Type)>): boolean
}

export namespace $IAmmoItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAmmoItem$Type = ($IAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAmmoItem_ = $IAmmoItem$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$ERecipePart" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ERecipePart extends $Enum<($ERecipePart)> {
static readonly "generic": $ERecipePart
static readonly "upper_receiver": $ERecipePart
static readonly "lower_receiver": $ERecipePart
static readonly "barrel": $ERecipePart
static readonly "grip": $ERecipePart
static readonly "stock": $ERecipePart
static readonly "magazine": $ERecipePart
static readonly "handguard": $ERecipePart
static readonly "bolt_action": $ERecipePart
static readonly "revolver_action": $ERecipePart
static readonly "cockpit": $ERecipePart
static readonly "wing": $ERecipePart
static readonly "engine": $ERecipePart
static readonly "propeller": $ERecipePart
static readonly "bay": $ERecipePart
static readonly "tail": $ERecipePart
static readonly "wheel": $ERecipePart
static readonly "chassis": $ERecipePart
static readonly "turret": $ERecipePart


public static "values"(): ($ERecipePart)[]
public static "valueOf"(arg0: string): $ERecipePart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ERecipePart$Type = (("barrel") | ("grip") | ("upper_receiver") | ("propeller") | ("handguard") | ("tail") | ("wheel") | ("turret") | ("bolt_action") | ("chassis") | ("generic") | ("revolver_action") | ("engine") | ("lower_receiver") | ("magazine") | ("bay") | ("stock") | ("wing") | ("cockpit")) | ($ERecipePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ERecipePart_ = $ERecipePart$Type;
}}
declare module "packages/com/flansmod/common/actions/stats/$IModifierBaker" {
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"

export interface $IModifierBaker {

 "Bake"(arg0: $ModifierDefinition$Type): void
 "Bake"(arg0: $ModifierDefinition$Type, arg1: integer, arg2: integer): void

(arg0: $ModifierDefinition$Type): void
}

export namespace $IModifierBaker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModifierBaker$Type = ($IModifierBaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModifierBaker_ = $IModifierBaker$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$AbilityDefinition" {
import {$TargetsContext, $TargetsContext$Type} from "packages/com/flansmod/common/actions/contexts/$TargetsContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbilityEffectDefinition, $AbilityEffectDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityEffectDefinition"
import {$AbilityTriggerDefinition, $AbilityTriggerDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityTriggerDefinition"
import {$AbilityTargetDefinition, $AbilityTargetDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityTargetDefinition"
import {$EAbilityTrigger, $EAbilityTrigger$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTrigger"
import {$AbilityStackingDefinition, $AbilityStackingDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityStackingDefinition"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"

export class $AbilityDefinition {
 "startTriggers": ($AbilityTriggerDefinition)[]
 "endTriggers": ($AbilityTriggerDefinition)[]
 "targets": ($AbilityTargetDefinition)[]
 "effects": ($AbilityEffectDefinition)[]
 "stacking": $AbilityStackingDefinition

constructor()

public "IsStackable"(): boolean
public "MatchTrigger"(arg0: $EAbilityTrigger$Type, arg1: $TriggerContext$Type): boolean
public "MatchTargets"(arg0: $TriggerContext$Type): $TargetsContext
public "GetTriggerTooltip"(arg0: boolean): $Component
public "GetTargetTooltip"(arg0: boolean): $Component
public "GetEffectTooltip"(arg0: boolean): $Component
public "IsValid"(): boolean
public "GetTooltip"(arg0: boolean): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityDefinition$Type = ($AbilityDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityDefinition_ = $AbilityDefinition$Type;
}}
declare module "packages/com/flansmod/common/gunshots/$Gunshot" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BulletDefinition, $BulletDefinition$Type} from "packages/com/flansmod/common/types/bullets/$BulletDefinition"

export class $Gunshot {
 "bulletDef": $BulletDefinition
 "fromShotDefIndex": integer
 "origin": $Vec3
 "trajectory": $Vec3
 "hits": ($HitResult)[]
 "fromShotIndex": integer
 "fromBulletIndex": integer

constructor()

public "IsProjectile"(): boolean
public "HitscanIndex"(): integer
public "ProjectileIndex"(): integer
public "FromHitscan"(arg0: integer): $Gunshot
public "FromProjectile"(arg0: integer): $Gunshot
public "FromBulletIndex"(arg0: integer): $Gunshot
public "WithTrajectory"(arg0: double, arg1: double, arg2: double): $Gunshot
public "WithTrajectory"(arg0: $Vec3$Type): $Gunshot
public static "Encode"(arg0: $Gunshot$Type, arg1: $FriendlyByteBuf$Type): void
public static "Decode"(arg0: $FriendlyByteBuf$Type): $Gunshot
public "Endpoint"(): $Vec3
public "FromShot"(arg0: integer): $Gunshot
public "WithOrigin"(arg0: double, arg1: double, arg2: double): $Gunshot
public "WithOrigin"(arg0: $Vec3$Type): $Gunshot
public "WithBullet"(arg0: $BulletDefinition$Type): $Gunshot
public "WithHits"(arg0: ($HitResult$Type)[]): $Gunshot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gunshot$Type = ($Gunshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gunshot_ = $Gunshot$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$PaintingDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PaintingDefinition {
 "isActive": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingDefinition$Type = ($PaintingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintingDefinition_ = $PaintingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ESpreadPattern" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ESpreadPattern extends $Enum<($ESpreadPattern)> {
static readonly "Circle": $ESpreadPattern
static readonly "FilledCircle": $ESpreadPattern
static readonly "Cross": $ESpreadPattern
static readonly "Horizontal": $ESpreadPattern
static readonly "Vertical": $ESpreadPattern
static readonly "Triangle": $ESpreadPattern


public static "values"(): ($ESpreadPattern)[]
public static "valueOf"(arg0: string): $ESpreadPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ESpreadPattern$Type = (("filledcircle") | ("horizontal") | ("cross") | ("vertical") | ("circle") | ("triangle")) | ($ESpreadPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ESpreadPattern_ = $ESpreadPattern$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/elements/$HitscanDefinition" {
import {$ImpactDefinition, $ImpactDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$ImpactDefinition"

export class $HitscanDefinition {
 "shotCount": integer
 "splashRadius": float
 "impacts": ($ImpactDefinition)[]
 "penetrationPower": float

constructor()

public "HasSplash"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitscanDefinition$Type = ($HitscanDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitscanDefinition_ = $HitscanDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$HandlerNodeDefinition" {
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"

export class $HandlerNodeDefinition {
 "actionGroupToTrigger": string
 "modalCheck": string
 "canTriggerWhileReloading": boolean
 "deferToAttachment": boolean
 "attachmentType": $EAttachmentType
 "attachmentIndex": integer
 "andContinueEvaluating": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerNodeDefinition$Type = ($HandlerNodeDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandlerNodeDefinition_ = $HandlerNodeDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$PaintableDefinition" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$PaintjobDefinition, $PaintjobDefinition$Type} from "packages/com/flansmod/common/types/elements/$PaintjobDefinition"

export class $PaintableDefinition {
 "paintjobs": ($PaintjobDefinition)[]
static readonly "Invalid": $PaintableDefinition

constructor()

public "getBasicPaintjobs"(): $List<($PaintjobDefinition)>
public "getPremiumPaintjobs"(): $List<($PaintjobDefinition)>
public "IsValid"(): boolean
get "basicPaintjobs"(): $List<($PaintjobDefinition)>
get "premiumPaintjobs"(): $List<($PaintjobDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintableDefinition$Type = ($PaintableDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintableDefinition_ = $PaintableDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$MaterialDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$MaterialSourceDefinition, $MaterialSourceDefinition$Type} from "packages/com/flansmod/common/types/elements/$MaterialSourceDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$EMaterialType, $EMaterialType$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MaterialDefinition extends $JsonDefinition {
static readonly "INVALID": $MaterialDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "sources": ($MaterialSourceDefinition)[]
 "craftingTier": integer
 "materialType": $EMaterialType
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetSortedByValue"(): $List<($MaterialSourceDefinition)>
public "ResolveAmount"(arg0: integer): $List<($Pair<($MaterialSourceDefinition), (integer)>)>
public "GenerateString"(arg0: integer): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialDefinition$Type = ($MaterialDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialDefinition_ = $MaterialDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$GunContext" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ShooterContext, $ShooterContext$Type} from "packages/com/flansmod/common/actions/contexts/$ShooterContext"
import {$GunContext$EItemStackLinkage, $GunContext$EItemStackLinkage$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext$EItemStackLinkage"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$GunInputContext, $GunInputContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunInputContext"
import {$GunContext$EItemStackValidity, $GunContext$EItemStackValidity$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext$EItemStackValidity"
import {$ReloadDefinition, $ReloadDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ReloadDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ActionDefinition, $ActionDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionDefinition"
import {$ActionStack, $ActionStack$Type} from "packages/com/flansmod/common/actions/$ActionStack"
import {$EAttachmentType, $EAttachmentType$Type} from "packages/com/flansmod/common/types/attachments/$EAttachmentType"
import {$EContextSide, $EContextSide$Type} from "packages/com/flansmod/physics/common/util/$EContextSide"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$AbilityDefinition, $AbilityDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$AbilityDefinition"
import {$AbilityInstanceApplyModifier, $AbilityInstanceApplyModifier$Type} from "packages/com/flansmod/common/abilities/$AbilityInstanceApplyModifier"
import {$AttachmentDefinition, $AttachmentDefinition$Type} from "packages/com/flansmod/common/types/attachments/$AttachmentDefinition"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Transform, $Transform$Type} from "packages/com/flansmod/physics/common/util/$Transform"
import {$ActionGroupInstance, $ActionGroupInstance$Type} from "packages/com/flansmod/common/actions/$ActionGroupInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StatAccumulator, $StatAccumulator$Type} from "packages/com/flansmod/common/actions/stats/$StatAccumulator"
import {$AbilityStack, $AbilityStack$Type} from "packages/com/flansmod/common/abilities/$AbilityStack"
import {$EPlayerInput, $EPlayerInput$Type} from "packages/com/flansmod/common/types/elements/$EPlayerInput"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingTraitDefinition, $CraftingTraitDefinition$Type} from "packages/com/flansmod/common/types/abilities/$CraftingTraitDefinition"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IModifierBaker, $IModifierBaker$Type} from "packages/com/flansmod/common/actions/stats/$IModifierBaker"
import {$FloatAccumulation, $FloatAccumulation$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulation"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PartDefinition, $PartDefinition$Type} from "packages/com/flansmod/common/types/parts/$PartDefinition"
import {$IStatCalculatorContext, $IStatCalculatorContext$Type} from "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GunDefinition, $GunDefinition$Type} from "packages/com/flansmod/common/types/guns/$GunDefinition"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ModeDefinition, $ModeDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ModeDefinition"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunContext implements $IStatCalculatorContext {
static readonly "INVALID": $GunContext
 "Stack": $ItemStack
 "lockedOnTarget": $Entity
readonly "Def": $GunDefinition
 "lockTime": float


public "toString"(): string
public static "of"(arg0: $ItemEntity$Type): $GunContext
public static "of"(arg0: $Container$Type, arg1: integer, arg2: boolean): $GunContext
public static "of"(arg0: $BlockEntity$Type, arg1: $Container$Type, arg2: integer): $GunContext
public static "of"(arg0: $ItemStack$Type): $GunContext
public static "of"(arg0: $ShooterContext$Type, arg1: integer): $GunContext
public static "of"(arg0: $ShooterContext$Type, arg1: $UUID$Type): $GunContext
public static "of"(arg0: $ItemStack$Type, arg1: $EContextSide$Type): $GunContext
public static "of"(arg0: $ShooterContext$Type, arg1: $InteractionHand$Type): $GunContext
public static "of"(arg0: $UUID$Type): $GunContext
public "EvaluateInputHandler"(arg0: $GunInputContext$Type): $List<($Pair<($ActionGroupContext), (boolean)>)>
public "RemoveAttachmentFromSlot"(arg0: $EAttachmentType$Type, arg1: integer): $ItemStack
public "GetPaintjobName"(): string
public "SetPaintjobName"(arg0: string): void
public "SetCraftingInputs"(arg0: ($ItemStack$Type)[]): void
public "GetModeValue"(arg0: string): string
public "SetModeValue"(arg0: string, arg1: string): void
public "ModifyString"(arg0: string, arg1: string): string
public "GetInputContext"(arg0: $EPlayerInput$Type): $GunInputContext
public "GetAttachmentDefinition"(arg0: $EAttachmentType$Type, arg1: integer): $AttachmentDefinition
public "OnItemStackChanged"(arg0: $ItemStack$Type): void
public "CheckItemStackLink"(): $GunContext$EItemStackLinkage
public "GetLinkedItemStack"(): $ItemStack
public "CreateDamageSource"(): $DamageSource
public "GetAttachedInventory"(): $Container
public "CanPerformTwoHandedAction"(): boolean
public "GetInventorySlotIndex"(): integer
public "BakeModifiers"(arg0: $IModifierBaker$Type): void
public "CanPerformActions"(): boolean
public "GetPosition"(): $Transform
public "GetItemStack"(): $ItemStack
public "SetItemStack"(arg0: $ItemStack$Type): void
public "GetShootOrigin"(): $Transform
public "GetShootOrigin"(arg0: float): $Transform
public "IsLinkedToItemStack"(): boolean
public static "CompareGunStacks"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $GunContext$EItemStackValidity
public "ValidateLinkedItemStack"(): $GunContext$EItemStackValidity
public "UpdateFromItemStack"(): void
public "CacheGunDefinition"(): $GunDefinition
public "BakeAllModifiers"(arg0: $IModifierBaker$Type): void
public "GetReloadDefintions"(): $List<($ReloadDefinition)>
public "GetPotentialActions"(arg0: $EPlayerInput$Type): $List<($ActionDefinition)>
public "GetOrCreateActionGroup"(arg0: $ActionGroupContext$Type): $ActionGroupInstance
public "CreateActionGroup"(arg0: $ActionGroupContext$Type): $ActionGroupInstance
public "GetNumAttachments"(): integer
public "GetModifierFormula"(arg0: string): $StatAccumulator
public "GetStringOverride"(arg0: string): $Optional<(string)>
public "ForEachAbility"(arg0: $BiConsumer$Type<($AbilityDefinition$Type), (integer)>): void
public "GetAbilities"(): $Map<($AbilityDefinition), (integer)>
public "GetAllModeDefs"(): ($ModeDefinition)[]
public "GetDefaultModeValue"(arg0: string): string
public "GetActionGroupContext"(arg0: string): $ActionGroupContext
public "GetPotentialPrimaryActions"(): $List<($ActionDefinition)>
public "ModifyFloat"(arg0: string): $FloatAccumulation
public "SetLockTarget"(arg0: $Entity$Type): void
public "GetLockTarget"(): $Entity
public "GetActiveModifierAbilities"(): $Map<($AbilityInstanceApplyModifier), ($AbilityStack)>
public "GetActionStack"(): $ActionStack
public "GetCraftingInputs"(): ($PartDefinition)[]
public "GetAttachmentStacks"(): $List<($ItemStack)>
public "GetAttachmentDefinitions"(): $List<($AttachmentDefinition)>
public "GetAttachmentStack"(arg0: $EAttachmentType$Type, arg1: integer): $ItemStack
public "GetNumAttachmentStacks"(arg0: $EAttachmentType$Type): integer
public "SetAttachmentStack"(arg0: $EAttachmentType$Type, arg1: integer, arg2: $ItemStack$Type): void
public "GetActionGroupContextByHash"(arg0: integer): $ActionGroupContext
public "GetActionGroupContextSibling"(arg0: $ActionGroupContext$Type, arg1: string): $ActionGroupContext
public "EvaluateAttachmentInputHandler"(arg0: $GunInputContext$Type, arg1: string, arg2: $AttachmentDefinition$Type, arg3: $List$Type<($Pair$Type<($ActionGroupContext$Type), (boolean)>)>): void
public "ForEachActiveModifierAbility"(arg0: $BiConsumer$Type<($AbilityInstanceApplyModifier$Type), ($AbilityStack$Type)>): void
public "GetReloadDefinitionContaining"(arg0: $ActionGroupContext$Type): $ReloadDefinition
public "GetPotentialSecondaryActions"(): $List<($ActionDefinition)>
public "Save"(arg0: $CompoundTag$Type): void
public static "Load"(arg0: $CompoundTag$Type, arg1: boolean): $GunContext
public "GetShooter"(): $ShooterContext
public "IsValid"(): boolean
public "GetRandom"(): $RandomSource
public "GetModeDef"(arg0: string): $ModeDefinition
public "ExpelItems"(arg0: $List$Type<($ItemStack$Type)>): boolean
public "GetLevel"(): $Level
public "GetUUID"(): $UUID
public "GetTraits"(): $Map<($CraftingTraitDefinition), (integer)>
public "GetMagFullness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunContext$Type = ($GunContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunContext_ = $GunContext$Type;
}}
declare module "packages/com/flansmod/common/actions/$ActionInstance" {
import {$ActionGroupInstance, $ActionGroupInstance$Type} from "packages/com/flansmod/common/actions/$ActionGroupInstance"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ActionDefinition, $ActionDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionDefinition"
import {$EActionResult, $EActionResult$Type} from "packages/com/flansmod/common/actions/$EActionResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunshotCollection, $GunshotCollection$Type} from "packages/com/flansmod/common/gunshots/$GunshotCollection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ActionInstance$NetData, $ActionInstance$NetData$Type} from "packages/com/flansmod/common/actions/$ActionInstance$NetData"

export class $ActionInstance {
static readonly "TICK_RATE": float
readonly "Group": $ActionGroupInstance
readonly "Def": $ActionDefinition

constructor(arg0: $ActionGroupInstance$Type, arg1: $ActionDefinition$Type)

public "ModifyString"(arg0: string, arg1: string): string
public "OnStartClient"(): void
public "OnStartServer"(): void
public "OnTickClient"(): void
public "OnTickServer"(): void
public "OnFinishClient"(): void
public "OnFinishServer"(): void
public "PropogateToServer"(): boolean
public "VerifyServer"(arg0: $GunshotCollection$Type): boolean
public "UpdateFromNetData"(arg0: $ActionInstance$NetData$Type, arg1: integer): void
public "GetTriggerCount"(): integer
public "GetPropogationRadius"(): double
public "ModifyFloat"(arg0: string, arg1: float): float
public "Duration"(): float
public "GetDurationPerTriggerSeconds"(): float
public "AddExtraPositionsForNetSync"(arg0: integer, arg1: $List$Type<($Vec3$Type)>): void
public "GetProgressTicks"(): integer
public "GetProgressSeconds"(): float
public "GetDurationPerTriggerTicks"(): integer
public "GetDurationTotalTicks"(): integer
public "GetDurationTotalSeconds"(): float
public "GetNumBurstsRemaining"(): integer
public "ShouldRender"(arg0: $GunContext$Type): boolean
public "ShouldFallBackToReload"(): boolean
public "CanRetrigger"(): boolean
public "OnTriggerClient"(arg0: integer): void
public "OnTriggerServer"(arg0: integer): void
public "ShouldNetSyncAroundPlayer"(): boolean
public "GetNetDataForTrigger"(arg0: integer): $ActionInstance$NetData
public "HarvestSpeed"(): float
public "Finished"(): boolean
public "CanStart"(): $EActionResult
public "GetCharge"(): float
public "IsCharging"(): boolean
public "SkipTicks"(arg0: integer): void
public "GetFloat"(arg0: string): float
public "ToolLevel"(): float
public "Reach"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionInstance$Type = ($ActionInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionInstance_ = $ActionInstance$Type;
}}
declare module "packages/com/flansmod/common/abilities/$AbilityInstanceApplyModifier" {
import {$TargetsContext, $TargetsContext$Type} from "packages/com/flansmod/common/actions/contexts/$TargetsContext"
import {$AbilityEffectDefinition, $AbilityEffectDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$AbilityEffectDefinition"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$AbilityStack, $AbilityStack$Type} from "packages/com/flansmod/common/abilities/$AbilityStack"
import {$ActionGroupContext, $ActionGroupContext$Type} from "packages/com/flansmod/common/actions/contexts/$ActionGroupContext"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"
import {$IAbilityEffect, $IAbilityEffect$Type} from "packages/com/flansmod/common/abilities/$IAbilityEffect"

export class $AbilityInstanceApplyModifier implements $IAbilityEffect {
readonly "Def": $AbilityEffectDefinition

constructor(arg0: $AbilityEffectDefinition$Type)

public "CanBeContinuous"(): boolean
public "GetActiveModifiers"(): ($ModifierDefinition)[]
public "TriggerClient"(arg0: $ActionGroupContext$Type, arg1: $TriggerContext$Type, arg2: $TargetsContext$Type, arg3: $AbilityStack$Type): void
public "TriggerServer"(arg0: $ActionGroupContext$Type, arg1: $TriggerContext$Type, arg2: $TargetsContext$Type, arg3: $AbilityStack$Type): void
public "EndServer"(arg0: $GunContext$Type, arg1: $AbilityStack$Type): void
public "EndClient"(arg0: $GunContext$Type, arg1: $AbilityStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityInstanceApplyModifier$Type = ($AbilityInstanceApplyModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityInstanceApplyModifier_ = $AbilityInstanceApplyModifier$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$MagazineSlotSettingsDefinition" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MagazineDefinition, $MagazineDefinition$Type} from "packages/com/flansmod/common/types/magazines/$MagazineDefinition"

export class $MagazineSlotSettingsDefinition {
static readonly "INVALID": $MagazineSlotSettingsDefinition
 "key": string
 "matchByNames": (string)[]
 "matchByTags": (string)[]
 "baseCostToSwap": integer

constructor()

public "GetMatchingMagazines"(): $List<($MagazineDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagazineSlotSettingsDefinition$Type = ($MagazineSlotSettingsDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagazineSlotSettingsDefinition_ = $MagazineSlotSettingsDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/elements/$EProjectileResponseType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EProjectileResponseType extends $Enum<($EProjectileResponseType)> {
static readonly "PassThrough": $EProjectileResponseType
static readonly "Detonate": $EProjectileResponseType
static readonly "Bounce": $EProjectileResponseType
static readonly "Stick": $EProjectileResponseType


public static "values"(): ($EProjectileResponseType)[]
public static "valueOf"(arg0: string): $EProjectileResponseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EProjectileResponseType$Type = (("bounce") | ("passthrough") | ("stick") | ("detonate")) | ($EProjectileResponseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EProjectileResponseType_ = $EProjectileResponseType$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ActionGroupDefinition" {
import {$ERepeatMode, $ERepeatMode$Type} from "packages/com/flansmod/common/types/guns/elements/$ERepeatMode"
import {$ActionDefinition, $ActionDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionDefinition"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"

export class $ActionGroupDefinition {
 "key": string
 "canActUnderwater": boolean
 "canActUnderOtherLiquid": boolean
 "canBeOverriden": boolean
 "twoHanded": boolean
 "repeatMode": $ERepeatMode
 "repeatDelay": float
 "repeatCount": integer
 "spinUpDuration": float
 "loudness": float
 "autoCancelIfNotInMode": string
 "actions": ($ActionDefinition)[]
 "modifiers": ($ModifierDefinition)[]
static readonly "INVALID": $ActionGroupDefinition

constructor()

public "GetMaxDurationSeconds"(): float
public "IsValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionGroupDefinition$Type = ($ActionGroupDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionGroupDefinition_ = $ActionGroupDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$PartCraftingDefinition" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemCollectionDefinition, $ItemCollectionDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemCollectionDefinition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PartFabricationRecipe, $PartFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$PartFabricationRecipe"

export class $PartCraftingDefinition {
 "isActive": boolean
 "inputSlots": integer
 "outputSlots": integer
 "timePerCraft": float
 "FECostPerCraft": float
 "craftableParts": $ItemCollectionDefinition

constructor()

public "GetAllOutputs"(): $List<($ItemStack)>
public "GetAllRecipes"(arg0: $Level$Type): $List<($PartFabricationRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartCraftingDefinition$Type = ($PartCraftingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartCraftingDefinition_ = $PartCraftingDefinition$Type;
}}
declare module "packages/com/flansmod/util/formulae/$EAccumulationOperation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAccumulationOperation extends $Enum<($EAccumulationOperation)> {
static readonly "BaseAdd": $EAccumulationOperation
static readonly "StackablePercentage": $EAccumulationOperation
static readonly "IndependentPercentage": $EAccumulationOperation
static readonly "FinalAdd": $EAccumulationOperation


public static "values"(): ($EAccumulationOperation)[]
public static "valueOf"(arg0: string): $EAccumulationOperation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAccumulationOperation$Type = (("independentpercentage") | ("stackablepercentage") | ("baseadd") | ("finaladd")) | ($EAccumulationOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAccumulationOperation_ = $EAccumulationOperation$Type;
}}
declare module "packages/com/flansmod/common/types/magazines/$EAmmoConsumeMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAmmoConsumeMode extends $Enum<($EAmmoConsumeMode)> {
static readonly "RoundRobin": $EAmmoConsumeMode
static readonly "Simultaneous": $EAmmoConsumeMode
static readonly "FirstNonEmpty": $EAmmoConsumeMode
static readonly "LastNonEmpty": $EAmmoConsumeMode


public static "values"(): ($EAmmoConsumeMode)[]
public static "valueOf"(arg0: string): $EAmmoConsumeMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAmmoConsumeMode$Type = (("lastnonempty") | ("firstnonempty") | ("simultaneous") | ("roundrobin")) | ($EAmmoConsumeMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAmmoConsumeMode_ = $EAmmoConsumeMode$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$TriggerConditionDefinition" {
import {$ETriggerConditionType, $ETriggerConditionType$Type} from "packages/com/flansmod/common/types/abilities/elements/$ETriggerConditionType"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"

export class $TriggerConditionDefinition {
 "conditionType": $ETriggerConditionType
 "allowedValues": (string)[]

constructor()

public "Matches"(arg0: $TriggerContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerConditionDefinition$Type = ($TriggerConditionDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriggerConditionDefinition_ = $TriggerConditionDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/attachments/$EMechaEffect" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EMechaEffect extends $Enum<($EMechaEffect)> {
static readonly "vacuumItems": $EMechaEffect
static readonly "smeltOres": $EMechaEffect
static readonly "autoCoal": $EMechaEffect
static readonly "autoRepair": $EMechaEffect
static readonly "rocketPack": $EMechaEffect
static readonly "detectBlock": $EMechaEffect
static readonly "infiniteAmmo": $EMechaEffect
static readonly "forceDark": $EMechaEffect
static readonly "wasteCompact": $EMechaEffect
static readonly "flameBurst": $EMechaEffect
static readonly "floater": $EMechaEffect


public static "values"(): ($EMechaEffect)[]
public static "valueOf"(arg0: string): $EMechaEffect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMechaEffect$Type = (("wastecompact") | ("smeltores") | ("detectblock") | ("infiniteammo") | ("floater") | ("forcedark") | ("rocketpack") | ("flameburst") | ("vacuumitems") | ("autocoal") | ("autorepair")) | ($EMechaEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMechaEffect_ = $EMechaEffect$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$GunContext$EItemStackLinkage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunContext$EItemStackLinkage extends $Enum<($GunContext$EItemStackLinkage)> {
static readonly "NotConnected": $GunContext$EItemStackLinkage
static readonly "LostConnection": $GunContext$EItemStackLinkage
static readonly "Connected": $GunContext$EItemStackLinkage


public static "values"(): ($GunContext$EItemStackLinkage)[]
public static "valueOf"(arg0: string): $GunContext$EItemStackLinkage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunContext$EItemStackLinkage$Type = (("connected") | ("lostconnection") | ("notconnected")) | ($GunContext$EItemStackLinkage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunContext$EItemStackLinkage_ = $GunContext$EItemStackLinkage$Type;
}}
declare module "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext$OutOfContextStats" {
import {$IStatCalculatorContext, $IStatCalculatorContext$Type} from "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext"

export class $IStatCalculatorContext$OutOfContextStats implements $IStatCalculatorContext {

constructor()

public "GetNumAttachments"(): integer
public "GetMagFullness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStatCalculatorContext$OutOfContextStats$Type = ($IStatCalculatorContext$OutOfContextStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStatCalculatorContext$OutOfContextStats_ = $IStatCalculatorContext$OutOfContextStats$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$MaterialFilterDefinition" {
import {$MaterialDefinition, $MaterialDefinition$Type} from "packages/com/flansmod/common/types/crafting/$MaterialDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EFilterType, $EFilterType$Type} from "packages/com/flansmod/common/types/elements/$EFilterType"
import {$EMaterialType, $EMaterialType$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialType"

export class $MaterialFilterDefinition {
 "filterType": $EFilterType
 "materialTypes": ($EMaterialType)[]
 "minTier": integer
 "maxTier": integer

constructor()

public "is"(arg0: $EMaterialType$Type): boolean
public "Allows"(arg0: $MaterialDefinition$Type): boolean
public "Disallows"(arg0: $MaterialDefinition$Type): boolean
public "GetMatches"(): $List<($MaterialDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialFilterDefinition$Type = ($MaterialFilterDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialFilterDefinition_ = $MaterialFilterDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$AbilityEffectDefinition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$EAbilityEffect, $EAbilityEffect$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityEffect"
import {$IAbilityEffect, $IAbilityEffect$Type} from "packages/com/flansmod/common/abilities/$IAbilityEffect"

export class $AbilityEffectDefinition {
 "effectType": $EAbilityEffect
 "modifiers": ($ModifierDefinition)[]

constructor()

public "MatchModifiers"(arg0: string): ($ModifierDefinition)[]
public "ModifyString"(arg0: string, arg1: string): string
public "ModifyBoolean"(arg0: string, arg1: boolean): boolean
public "GetEffectProcessor"(): $IAbilityEffect
public "GetTooltip"(arg0: boolean): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEffectDefinition$Type = ($AbilityEffectDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityEffectDefinition_ = $AbilityEffectDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/stats/$StatFormula" {
import {$IStatCalculatorContext, $IStatCalculatorContext$Type} from "packages/com/flansmod/common/actions/stats/$IStatCalculatorContext"
import {$EAccumulationSource, $EAccumulationSource$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAccumulationSource"
import {$FloatFormula, $FloatFormula$Type} from "packages/com/flansmod/util/formulae/$FloatFormula"

export class $StatFormula extends $FloatFormula<($EAccumulationSource)> {

constructor()

public "AtLevel"(arg0: integer): $StatFormula
public "WithStacks"(arg0: integer): $StatFormula
public "Evaluate"(arg0: $IStatCalculatorContext$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatFormula$Type = ($StatFormula);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatFormula_ = $StatFormula$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$EPlayerInput" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EPlayerInput extends $Enum<($EPlayerInput)> {
static readonly "MoveForward": $EPlayerInput
static readonly "MoveBackward": $EPlayerInput
static readonly "MoveLeft": $EPlayerInput
static readonly "MoveRight": $EPlayerInput
static readonly "YawLeft": $EPlayerInput
static readonly "YawRight": $EPlayerInput
static readonly "RollLeft": $EPlayerInput
static readonly "RollRight": $EPlayerInput
static readonly "PitchUp": $EPlayerInput
static readonly "PitchDown": $EPlayerInput
static readonly "Fire1": $EPlayerInput
static readonly "Fire2": $EPlayerInput
static readonly "Fire3": $EPlayerInput
static readonly "Reload1": $EPlayerInput
static readonly "Reload2": $EPlayerInput
static readonly "Reload3": $EPlayerInput
static readonly "Jump": $EPlayerInput
static readonly "Sprint": $EPlayerInput
static readonly "SpecialKey1": $EPlayerInput
static readonly "SpecialKey2": $EPlayerInput
static readonly "GearUp": $EPlayerInput
static readonly "GearDown": $EPlayerInput


public static "values"(): ($EPlayerInput)[]
public static "valueOf"(arg0: string): $EPlayerInput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EPlayerInput$Type = (("yawleft") | ("specialkey1") | ("pitchup") | ("specialkey2") | ("sprint") | ("moveforward") | ("moveleft") | ("gearup") | ("rollleft") | ("fire2") | ("fire3") | ("movebackward") | ("pitchdown") | ("fire1") | ("geardown") | ("reload2") | ("moveright") | ("reload1") | ("yawright") | ("rollright") | ("reload3") | ("jump")) | ($EPlayerInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EPlayerInput_ = $EPlayerInput$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$AbilityStackingDefinition" {
import {$StatCalculationContext, $StatCalculationContext$Type} from "packages/com/flansmod/common/actions/stats/$StatCalculationContext"

export class $AbilityStackingDefinition {
 "stackingKey": string
 "maxStacks": integer
 "decayAllAtOnce": boolean
 "decayTime": float

constructor()

public "IsStackable"(): boolean
public "GetDecayTimeTicks"(arg0: $StatCalculationContext$Type): integer
public "GetDecayTimeSeconds"(arg0: $StatCalculationContext$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityStackingDefinition$Type = ($AbilityStackingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityStackingDefinition_ = $AbilityStackingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$ArmourCraftingDefinition" {
import {$ItemCollectionDefinition, $ItemCollectionDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemCollectionDefinition"

export class $ArmourCraftingDefinition {
 "isActive": boolean
 "craftableArmour": $ItemCollectionDefinition
 "FECostPerCraft": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmourCraftingDefinition$Type = ($ArmourCraftingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmourCraftingDefinition_ = $ArmourCraftingDefinition$Type;
}}
declare module "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage$ActionTriggerInfo" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ActionInstance$NetData, $ActionInstance$NetData$Type} from "packages/com/flansmod/common/actions/$ActionInstance$NetData"

export class $ActionUpdateMessage$ActionTriggerInfo {
 "DeltaTick": integer
 "NetData": $List<($ActionInstance$NetData)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionUpdateMessage$ActionTriggerInfo$Type = ($ActionUpdateMessage$ActionTriggerInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionUpdateMessage$ActionTriggerInfo_ = $ActionUpdateMessage$ActionTriggerInfo$Type;
}}
declare module "packages/com/flansmod/common/crafting/recipes/$PartFabricationRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PartFabricationRecipe, $PartFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$PartFabricationRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PartFabricationRecipe$Serializer implements $RecipeSerializer<($PartFabricationRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $PartFabricationRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $PartFabricationRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $PartFabricationRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $PartFabricationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartFabricationRecipe$Serializer$Type = ($PartFabricationRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartFabricationRecipe$Serializer_ = $PartFabricationRecipe$Serializer$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$EFilterType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EFilterType extends $Enum<($EFilterType)> {
static readonly "Allow": $EFilterType
static readonly "Disallow": $EFilterType


public static "values"(): ($EFilterType)[]
public static "valueOf"(arg0: string): $EFilterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EFilterType$Type = (("allow") | ("disallow")) | ($EFilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EFilterType_ = $EFilterType$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$AbilityTriggerDefinition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TriggerConditionDefinition, $TriggerConditionDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$TriggerConditionDefinition"
import {$EAbilityTrigger, $EAbilityTrigger$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTrigger"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"

export class $AbilityTriggerDefinition {
 "triggerType": $EAbilityTrigger
 "triggerConditions": ($TriggerConditionDefinition)[]

constructor()

public "GetTooltip"(arg0: boolean): $Component
public "Matches"(arg0: $EAbilityTrigger$Type): boolean
public "Matches"(arg0: $EAbilityTrigger$Type, arg1: $TriggerContext$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityTriggerDefinition$Type = ($AbilityTriggerDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityTriggerDefinition_ = $AbilityTriggerDefinition$Type;
}}
declare module "packages/com/flansmod/common/crafting/recipes/$PartFabricationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WorkbenchBlockEntity, $WorkbenchBlockEntity$Type} from "packages/com/flansmod/common/crafting/$WorkbenchBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $PartFabricationRecipe implements $Recipe<($WorkbenchBlockEntity)> {
readonly "Type": $RecipeType<(any)>
readonly "Loc": $ResourceLocation
readonly "Group": string
readonly "InputIngredients": $NonNullList<($Ingredient)>
readonly "Result": $ItemStack
readonly "CraftTime": integer

constructor(arg0: $RecipeType$Type<(any)>, arg1: $ResourceLocation$Type, arg2: string, arg3: ($Ingredient$Type)[], arg4: $ItemStack$Type, arg5: integer)

public "toString"(): string
public "matches"(arg0: $WorkbenchBlockEntity$Type, arg1: $Level$Type): boolean
public static "CountInputMatching"(arg0: $Ingredient$Type, arg1: $Container$Type): integer
public "GenerateTooltip"(arg0: integer, arg1: integer, arg2: integer): $List<($Component)>
public "GetMatchingOfEachIngredient"(arg0: $Container$Type): (integer)[]
public "GetRequiredOfEachIngredient"(): (integer)[]
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "assemble"(arg0: $WorkbenchBlockEntity$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $WorkbenchBlockEntity$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getSchema"(): $RecipeSchema
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartFabricationRecipe$Type = ($PartFabricationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartFabricationRecipe_ = $PartFabricationRecipe$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ERepeatMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ERepeatMode extends $Enum<($ERepeatMode)> {
static readonly "FullAuto": $ERepeatMode
static readonly "SemiAuto": $ERepeatMode
static readonly "BurstFire": $ERepeatMode
static readonly "Minigun": $ERepeatMode
static readonly "Toggle": $ERepeatMode
static readonly "WaitUntilNextAction": $ERepeatMode


public static "values"(): ($ERepeatMode)[]
public static "valueOf"(arg0: string): $ERepeatMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ERepeatMode$Type = (("fullauto") | ("burstfire") | ("waituntilnextaction") | ("minigun") | ("toggle") | ("semiauto")) | ($ERepeatMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ERepeatMode_ = $ERepeatMode$Type;
}}
declare module "packages/com/flansmod/common/actions/nodes/$ShootAction" {
import {$ActionGroupInstance, $ActionGroupInstance$Type} from "packages/com/flansmod/common/actions/$ActionGroupInstance"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ActionDefinition, $ActionDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$ActionDefinition"
import {$EActionResult, $EActionResult$Type} from "packages/com/flansmod/common/actions/$EActionResult"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunshotCollection, $GunshotCollection$Type} from "packages/com/flansmod/common/gunshots/$GunshotCollection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ActionInstance, $ActionInstance$Type} from "packages/com/flansmod/common/actions/$ActionInstance"
import {$ActionInstance$NetData, $ActionInstance$NetData$Type} from "packages/com/flansmod/common/actions/$ActionInstance$NetData"

export class $ShootAction extends $ActionInstance {
static readonly "TICK_RATE": float
readonly "Group": $ActionGroupInstance
readonly "Def": $ActionDefinition

constructor(arg0: $ActionGroupInstance$Type, arg1: $ActionDefinition$Type)

public "OnTickClient"(): void
public "PropogateToServer"(): boolean
public "VerifyServer"(arg0: $GunshotCollection$Type, arg1: integer): boolean
public "UpdateFromNetData"(arg0: $ActionInstance$NetData$Type, arg1: integer): void
public "GetPropogationRadius"(): double
public "AddExtraPositionsForNetSync"(arg0: integer, arg1: $List$Type<($Vec3$Type)>): void
public "ShouldFallBackToReload"(): boolean
public "CanRetrigger"(): boolean
public "OnTriggerClient"(arg0: integer): void
public "OnTriggerServer"(arg0: integer): void
public "GetNetDataForTrigger"(arg0: integer): $ActionInstance$NetData
public "GetPlayerMuzzlePosition"(arg0: integer): $Vec3
public "ValidateAndSetResults"(arg0: $GunContext$Type, arg1: $GunshotCollection$Type, arg2: integer): boolean
public "Calculate"(arg0: integer): void
public "CanStart"(): $EActionResult
public "SetResults"(arg0: $GunshotCollection$Type, arg1: integer): void
public "GetResults"(arg0: integer): $GunshotCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShootAction$Type = ($ShootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShootAction_ = $ShootAction$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$MaterialSourceDefinition" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$EMaterialIconType, $EMaterialIconType$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialIconType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MaterialSourceDefinition {
 "matchItems": (string)[]
 "matchTags": (string)[]
 "count": integer
 "icon": $EMaterialIconType

constructor()

public "AnalyzeStack"(arg0: $ItemStack$Type): integer
public "GetMatches"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialSourceDefinition$Type = ($MaterialSourceDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialSourceDefinition_ = $MaterialSourceDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$EMaterialType$MaterialAndTier" {
import {$EMaterialType, $EMaterialType$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialType"

export class $EMaterialType$MaterialAndTier {
readonly "Tier": integer
readonly "MaterialType": $EMaterialType
static readonly "INVALID_TIER": integer
static readonly "Invalid": $EMaterialType$MaterialAndTier


public "IsValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMaterialType$MaterialAndTier$Type = ($EMaterialType$MaterialAndTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMaterialType$MaterialAndTier_ = $EMaterialType$MaterialAndTier$Type;
}}
declare module "packages/com/flansmod/common/actions/$ActionInstance$NetData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ActionInstance$NetData {
static readonly "INVALID_ID": integer
static readonly "Invalid": $ActionInstance$NetData

constructor()

public "Encode"(arg0: $FriendlyByteBuf$Type): void
public "Decode"(arg0: $FriendlyByteBuf$Type): void
public "GetID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionInstance$NetData$Type = ($ActionInstance$NetData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionInstance$NetData_ = $ActionInstance$NetData$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$ItemDefinition" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemDefinition {
 "maxStackSize": integer
 "tags": ($ResourceLocation)[]

constructor()

public "Matches"(arg0: $ResourceLocation$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDefinition$Type = ($ItemDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDefinition_ = $ItemDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/$WorkbenchDefinition" {
import {$GunModifyingDefinition, $GunModifyingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$GunModifyingDefinition"
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$ItemHoldingDefinition, $ItemHoldingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$ItemHoldingDefinition"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PartCraftingDefinition, $PartCraftingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$PartCraftingDefinition"
import {$ArmourCraftingDefinition, $ArmourCraftingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$ArmourCraftingDefinition"
import {$EnergyBlockDefinition, $EnergyBlockDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$EnergyBlockDefinition"
import {$WorkbenchSideDefinition, $WorkbenchSideDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$WorkbenchSideDefinition"
import {$PaintingDefinition, $PaintingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$PaintingDefinition"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemDefinition"
import {$GunCraftingDefinition, $GunCraftingDefinition$Type} from "packages/com/flansmod/common/types/crafting/elements/$GunCraftingDefinition"

export class $WorkbenchDefinition extends $JsonDefinition {
static readonly "INVALID": $WorkbenchDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "titleString": string
 "bannerTextureLocation": $ResourceLocation
 "gunCrafting": $GunCraftingDefinition
 "partCrafting": $PartCraftingDefinition
 "gunModifying": $GunModifyingDefinition
 "painting": $PaintingDefinition
 "energy": $EnergyBlockDefinition
 "armourCrafting": $ArmourCraftingDefinition
 "itemHolding": $ItemHoldingDefinition
 "itemSettings": $ItemDefinition
 "sides": ($WorkbenchSideDefinition)[]
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetSideDef"(arg0: $Direction$Type): $WorkbenchSideDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchDefinition$Type = ($WorkbenchDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchDefinition_ = $WorkbenchDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$GunCraftingDefinition" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunFabricationRecipe, $GunFabricationRecipe$Type} from "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe"
import {$ItemCollectionDefinition, $ItemCollectionDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemCollectionDefinition"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $GunCraftingDefinition {
 "isActive": boolean
 "craftableGuns": $ItemCollectionDefinition
 "maxSlots": integer
 "FECostPerCraft": integer

constructor()

public "GetAllOutputs"(): $List<($ItemStack)>
public "GetAllRecipes"(arg0: $Level$Type): $List<($GunFabricationRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunCraftingDefinition$Type = ($GunCraftingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunCraftingDefinition_ = $GunCraftingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/bullets/elements/$ProjectileDefinition" {
import {$EProjectileResponseType, $EProjectileResponseType$Type} from "packages/com/flansmod/common/types/bullets/elements/$EProjectileResponseType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TrailDefinition, $TrailDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$TrailDefinition"
import {$BulletGuidance$GuidanceType, $BulletGuidance$GuidanceType$Type} from "packages/com/flansmod/common/projectiles/$BulletGuidance$GuidanceType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ImpactDefinition, $ImpactDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$ImpactDefinition"

export class $ProjectileDefinition {
 "shotCount": integer
 "splashRadius": float
 "impacts": ($ImpactDefinition)[]
 "launchSpeed": float
 "acceleration": float
 "maxSpeed": float
 "gravityFactor": float
 "responseToBlock": $EProjectileResponseType
 "responseToEntity": $EProjectileResponseType
 "responseToVehicle": $EProjectileResponseType
 "fuseTime": float
 "guidanceType": string
 "lockRange": float
 "lockCone": float
 "trackCone": float
 "lockTime": float
 "turnRate": float
 "topAttackHeight": float
 "topAttackRange": float
 "targetTypes": (string)[]
 "dragInAir": float
 "dragInWater": float
 "airParticles": string
 "waterParticles": string
 "timeBetweenTrailParticles": float
 "particleTrails": ($TrailDefinition)[]

constructor()

public "GetGuidanceMode"(): $BulletGuidance$GuidanceType
public "HasLockOn"(): boolean
public "Targets"(): $ArrayList<($Class)>
public "HasSplash"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileDefinition$Type = ($ProjectileDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileDefinition_ = $ProjectileDefinition$Type;
}}
declare module "packages/com/flansmod/common/gunshots/$EPressType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EPressType extends $Enum<($EPressType)> {
static readonly "NotPressed": $EPressType
static readonly "Press": $EPressType
static readonly "Hold": $EPressType
static readonly "Release": $EPressType


public static "values"(): ($EPressType)[]
public static "valueOf"(arg0: string): $EPressType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EPressType$Type = (("notpressed") | ("release") | ("press") | ("hold")) | ($EPressType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EPressType_ = $EPressType$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$SoundDefinition" {
import {$SoundLODDefinition, $SoundLODDefinition$Type} from "packages/com/flansmod/common/types/elements/$SoundLODDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoundDefinition {
 "sound": $ResourceLocation
 "length": float
 "minPitchMultiplier": float
 "maxPitchMultiplier": float
 "minVolume": float
 "maxVolume": float
 "maxRange": float
 "LODs": ($SoundLODDefinition)[]

constructor()

public "GetSoundLocation"(): $ResourceLocation
public "PickRandomVolume"(arg0: $RandomSource$Type): float
public "PickRangedVolume"(arg0: float): float
public "PickRandomPitch"(arg0: $RandomSource$Type): float
public "PlayUnLODedOnEntity"(arg0: $Entity$Type): void
public "PlayUnLODed"(arg0: $Level$Type, arg1: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundDefinition$Type = ($SoundDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundDefinition_ = $SoundDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/magazines/$MagazineDefinition" {
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EAmmoConsumeMode, $EAmmoConsumeMode$Type} from "packages/com/flansmod/common/types/magazines/$EAmmoConsumeMode"
import {$ItemCollectionDefinition, $ItemCollectionDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemCollectionDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EAmmoLoadMode, $EAmmoLoadMode$Type} from "packages/com/flansmod/common/types/magazines/$EAmmoLoadMode"

export class $MagazineDefinition extends $JsonDefinition {
static readonly "INVALID": $MagazineDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "tags": (string)[]
 "modifiers": ($ModifierDefinition)[]
 "ammoLoadMode": $EAmmoLoadMode
 "ammoConsumeMode": $EAmmoConsumeMode
 "upgradeCost": integer
 "numRounds": integer
 "allRoundsMustBeIdentical": boolean
 "matchingBullets": $ItemCollectionDefinition
 "casingModelOverride": string
 "spawnBulletCasing": string
 "ejectCasings": boolean
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public "GetMatchingBullets"(): $List<($JsonDefinition)>
public "HasTag"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagazineDefinition$Type = ($MagazineDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagazineDefinition_ = $MagazineDefinition$Type;
}}
declare module "packages/com/flansmod/common/item/$BulletItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$FlanItem, $FlanItem$Type} from "packages/com/flansmod/common/item/$FlanItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAmmoItem, $IAmmoItem$Type} from "packages/com/flansmod/api/$IAmmoItem"
import {$BulletDefinition, $BulletDefinition$Type} from "packages/com/flansmod/common/types/bullets/$BulletDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BulletItem extends $FlanItem implements $IForgeItem, $IAmmoItem {
readonly "DefinitionLocation": $ResourceLocation
static readonly "InvalidGunUUID": $UUID
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

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)

public "matchesTags"(arg0: $ItemStack$Type, arg1: $List$Type<($TagKey$Type<($Item$Type)>)>): boolean
public "provideForTags"(arg0: $ItemStack$Type, arg1: $List$Type<($TagKey$Type<($Item$Type)>)>): $ItemStack
public "provideForIDs"(arg0: $ItemStack$Type, arg1: $List$Type<($ResourceLocation$Type)>): $ItemStack
public "ShouldRenderAsIcon"(arg0: $ItemDisplayContext$Type): boolean
public "CanBeCraftedFromParts"(): boolean
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "canBeDepleted"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "Def"(): $BulletDefinition
public "provideAny"(arg0: $ItemStack$Type): $ItemStack
public "matchesIDs"(arg0: $ItemStack$Type, arg1: $List$Type<($ResourceLocation$Type)>): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletItem$Type = ($BulletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletItem_ = $BulletItem$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$GunModifyingDefinition" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $GunModifyingDefinition {
 "isActive": boolean
 "disallowedMods": ($ResourceLocation)[]
 "allowedMods": ($ResourceLocation)[]
 "FECostPerModify": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunModifyingDefinition$Type = ($GunModifyingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunModifyingDefinition_ = $GunModifyingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$ETriggerConditionType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETriggerConditionType extends $Enum<($ETriggerConditionType)> {
static readonly "CheckOwnerEntityType": $ETriggerConditionType
static readonly "CheckShooterEntityType": $ETriggerConditionType
static readonly "CheckActionGroupPath": $ETriggerConditionType


public static "values"(): ($ETriggerConditionType)[]
public static "valueOf"(arg0: string): $ETriggerConditionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETriggerConditionType$Type = (("checkshooterentitytype") | ("checkownerentitytype") | ("checkactiongrouppath")) | ($ETriggerConditionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETriggerConditionType_ = $ETriggerConditionType$Type;
}}
declare module "packages/com/flansmod/common/item/$TemporaryWorkbenchItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TemporaryWorkbenchItem extends $Item {
readonly "DefLoc": $ResourceLocation
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

constructor(arg0: $ResourceLocation$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporaryWorkbenchItem$Type = ($TemporaryWorkbenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporaryWorkbenchItem_ = $TemporaryWorkbenchItem$Type;
}}
declare module "packages/com/flansmod/util/formulae/$FloatAccumulation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FloatAccumulation {
readonly "BaseAdd": float
readonly "StackableMultiplier": float
readonly "IndependentMultiplier": float
readonly "FinalAdd": float


public "get"(): float
public "apply"(arg0: float): float
public static "of"(arg0: float, arg1: float, arg2: float, arg3: float): $FloatAccumulation
public static "compose"(...arg0: ($FloatAccumulation$Type)[]): $FloatAccumulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatAccumulation$Type = ($FloatAccumulation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatAccumulation_ = $FloatAccumulation$Type;
}}
declare module "packages/com/flansmod/physics/common/util/$TransformStack" {
import {$Transform, $Transform$Type} from "packages/com/flansmod/physics/common/util/$Transform"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $TransformStack {


public "up"(): $Vec3
public "add"(arg0: $Transform$Type): void
public "scale"(arg0: float, arg1: float, arg2: float): void
public static "of"(): $TransformStack
public static "of"(arg0: $Matrix4f$Type): $TransformStack
public static "of"(...arg0: ($Transform$Type)[]): $TransformStack
public static "of"(arg0: $Transform$Type): $TransformStack
public static "of"(arg0: $PoseStack$Type): $TransformStack
public "addAll"(...arg0: ($Transform$Type)[]): void
public static "empty"(): $TransformStack
public "top"(): $Transform
public "right"(): $Vec3
public "push"(): void
public "push"(arg0: string): void
public "pop"(): void
public "and"(...arg0: ($Transform$Type)[]): $TransformStack
public "and"(arg0: $Transform$Type): $TransformStack
public "debugRender"(arg0: integer): void
public "localToGlobalTransform"(arg0: $Transform$Type): $Transform
public "applyToPoseStack"(arg0: $PoseStack$Type): void
public "localToGlobalDirection"(arg0: $Vec3$Type): $Vec3
public "localToGlobalPosition"(arg0: $Vec3$Type): $Vec3
public "globalToLocalPosition"(arg0: $Vec3$Type): $Vec3
public "globalToLocalDirection"(arg0: $Vec3$Type): $Vec3
public "localToGlobalOrientation"(arg0: $Quaternionf$Type): $Quaternionf
public "globalToLocalOrientation"(arg0: $Quaternionf$Type): $Quaternionf
public "globalToLocalTransform"(arg0: $Transform$Type): $Transform
public "translate"(arg0: double, arg1: double, arg2: double): void
public "forward"(): $Vec3
public "mulPose"(arg0: $Quaternionf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformStack$Type = ($TransformStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformStack_ = $TransformStack$Type;
}}
declare module "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage$ToServer" {
import {$ActionUpdateMessage, $ActionUpdateMessage$Type} from "packages/com/flansmod/common/network/bidirectional/$ActionUpdateMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FlansModMessage, $FlansModMessage$Type} from "packages/com/flansmod/common/network/$FlansModMessage"

export class $ActionUpdateMessage$ToServer extends $FlansModMessage {
 "Data": $ActionUpdateMessage

constructor()
constructor(arg0: $ActionUpdateMessage$Type)

public "Encode"(arg0: $FriendlyByteBuf$Type): void
public "Decode"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionUpdateMessage$ToServer$Type = ($ActionUpdateMessage$ToServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionUpdateMessage$ToServer_ = $ActionUpdateMessage$ToServer$Type;
}}
declare module "packages/com/flansmod/common/types/elements/$PaintjobDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PaintjobDefinition {
 "textureName": string
 "paintBucketsRequired": integer
 "entitlementKey": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintjobDefinition$Type = ($PaintjobDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintjobDefinition_ = $PaintjobDefinition$Type;
}}
declare module "packages/com/flansmod/common/item/$GunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputEvent$InteractionKeyMappingTriggered, $InputEvent$InteractionKeyMappingTriggered$Type} from "packages/net/minecraftforge/client/event/$InputEvent$InteractionKeyMappingTriggered"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$ProjectileDefinition, $ProjectileDefinition$Type} from "packages/com/flansmod/common/types/bullets/elements/$ProjectileDefinition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FlanItem, $FlanItem$Type} from "packages/com/flansmod/common/item/$FlanItem"
import {$MagazineDefinition, $MagazineDefinition$Type} from "packages/com/flansmod/common/types/magazines/$MagazineDefinition"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$LivingEntityUseItemEvent$Tick, $LivingEntityUseItemEvent$Tick$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Tick"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunItem extends $FlanItem {
 "LockedOnTarget": $Entity
 "lockTime": float
 "lockTimeMax": float
readonly "DefinitionLocation": $ResourceLocation
static readonly "InvalidGunUUID": $UUID
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

constructor(arg0: $ResourceLocation$Type, arg1: $Item$Properties$Type)

public "GetMagazineType"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $MagazineDefinition
public "GetBulletAtIndex"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer): $ItemStack
public "GetCombinedBulletStacks"(arg0: $ItemStack$Type, arg1: string, arg2: integer): ($ItemStack)[]
public "GetNumBulletsInMag"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public "ExtractCompactStacks"(arg0: $ItemStack$Type, arg1: string, arg2: integer): ($Item)[]
public "ClientHandleMouse"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InputEvent$InteractionKeyMappingTriggered$Type): void
public "ClientUpdateUsing"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $LivingEntityUseItemEvent$Tick$Type): void
public "GetChamberProjectile"(arg0: $ItemStack$Type, arg1: $GunContext$Type): $ProjectileDefinition
public "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "GetRootTag"(arg0: $ItemStack$Type, arg1: string): $CompoundTag
public "GetMagTag"(arg0: $ItemStack$Type, arg1: string, arg2: integer): $CompoundTag
public "HandleLock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunItem$Type = ($GunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunItem_ = $GunItem$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$CraftingTraitProviderDefinition" {
import {$CraftingTraitDefinition, $CraftingTraitDefinition$Type} from "packages/com/flansmod/common/types/abilities/$CraftingTraitDefinition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CraftingTraitProviderDefinition {
 "trait": $ResourceLocation
 "level": integer

constructor()

public "GetAbility"(): $CraftingTraitDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTraitProviderDefinition$Type = ($CraftingTraitProviderDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTraitProviderDefinition_ = $CraftingTraitProviderDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$WorkbenchIOSettingDefinition" {
import {$EWorkbenchInventoryType, $EWorkbenchInventoryType$Type} from "packages/com/flansmod/common/types/crafting/$EWorkbenchInventoryType"

export class $WorkbenchIOSettingDefinition {
 "type": $EWorkbenchInventoryType
 "allowInput": boolean
 "allowExtract": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchIOSettingDefinition$Type = ($WorkbenchIOSettingDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchIOSettingDefinition_ = $WorkbenchIOSettingDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/$JsonDefinition" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $JsonDefinition {
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "toString"(): string
public "hashCode"(): integer
public static "IsValidLocation"(arg0: $ResourceLocation$Type): boolean
public "GetLocationString"(): string
public "GetTypeName"(): string
public "GetLocation"(): $ResourceLocation
public "IsValid"(): boolean
public "LoadExtra"(arg0: $JsonElement$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDefinition$Type = ($JsonDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDefinition_ = $JsonDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$GunInputContext" {
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$EPlayerInput, $EPlayerInput$Type} from "packages/com/flansmod/common/types/elements/$EPlayerInput"

export class $GunInputContext {
static readonly "INVALID": $GunInputContext
readonly "Gun": $GunContext
readonly "InputType": $EPlayerInput


public static "CreateFrom"(arg0: $GunContext$Type, arg1: $EPlayerInput$Type): $GunInputContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunInputContext$Type = ($GunInputContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunInputContext_ = $GunInputContext$Type;
}}
declare module "packages/com/flansmod/common/types/crafting/elements/$ItemHoldingSlotDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ItemHoldingSlotDefinition {
 "name": string
 "stackSize": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHoldingSlotDefinition$Type = ($ItemHoldingSlotDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHoldingSlotDefinition_ = $ItemHoldingSlotDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/parts/$PartDefinition" {
import {$MaterialDefinition, $MaterialDefinition$Type} from "packages/com/flansmod/common/types/crafting/$MaterialDefinition"
import {$JsonDefinition, $JsonDefinition$Type} from "packages/com/flansmod/common/types/$JsonDefinition"
import {$CraftingTraitProviderDefinition, $CraftingTraitProviderDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$CraftingTraitProviderDefinition"
import {$ModifierDefinition, $ModifierDefinition$Type} from "packages/com/flansmod/common/types/elements/$ModifierDefinition"
import {$EngineDefinition, $EngineDefinition$Type} from "packages/com/flansmod/common/types/parts/elements/$EngineDefinition"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EMaterialType, $EMaterialType$Type} from "packages/com/flansmod/common/types/crafting/$EMaterialType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/com/flansmod/common/types/elements/$ItemDefinition"

export class $PartDefinition extends $JsonDefinition {
static readonly "INVALID": $PartDefinition
static readonly "TYPE": string
static readonly "FOLDER": string
 "canPlaceInMachiningTable": boolean
 "canPlaceInModificationTable": boolean
 "compatiblityTags": (string)[]
 "itemSettings": $ItemDefinition
 "modifiers": ($ModifierDefinition)[]
 "traits": ($CraftingTraitProviderDefinition)[]
 "engine": $EngineDefinition
 "material": $ResourceLocation
static "InvalidLocation": $ResourceLocation
readonly "Location": $ResourceLocation

constructor(arg0: $ResourceLocation$Type)

public "GetTypeName"(): string
public static "GetMaterialOfPart"(arg0: $ItemStack$Type): $MaterialDefinition
public static "GetPartTier"(arg0: $ItemStack$Type): integer
public static "GetPartMaterial"(arg0: $ItemStack$Type): $EMaterialType
public "GetMaterial"(): $MaterialDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartDefinition$Type = ($PartDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartDefinition_ = $PartDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$StatAccumulatorDefinition" {
import {$EAccumulationSource, $EAccumulationSource$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAccumulationSource"
import {$EAccumulationOperation, $EAccumulationOperation$Type} from "packages/com/flansmod/util/formulae/$EAccumulationOperation"

export class $StatAccumulatorDefinition {
 "operation": $EAccumulationOperation
 "value": float
 "multiplyPer": ($EAccumulationSource)[]

constructor()

public "GetValue"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatAccumulatorDefinition$Type = ($StatAccumulatorDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatAccumulatorDefinition_ = $StatAccumulatorDefinition$Type;
}}
declare module "packages/com/flansmod/common/actions/contexts/$TargetsContext" {
import {$ShooterContext, $ShooterContext$Type} from "packages/com/flansmod/common/actions/contexts/$ShooterContext"
import {$GunContext, $GunContext$Type} from "packages/com/flansmod/common/actions/contexts/$GunContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TriggerContext, $TriggerContext$Type} from "packages/com/flansmod/common/actions/contexts/$TriggerContext"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$EAbilityTarget, $EAbilityTarget$Type} from "packages/com/flansmod/common/types/abilities/elements/$EAbilityTarget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TargetsContext {
readonly "BlockTargets": $Map<($BlockPos), ($BlockState)>
readonly "EntityTargets": $List<($Entity)>
readonly "PositionTargets": $List<($Vec3)>

constructor()

public static "of"(arg0: $TriggerContext$Type, arg1: $EAbilityTarget$Type): $TargetsContext
public "Add"(arg0: $Vec3$Type): $TargetsContext
public "Add"(arg0: $Entity$Type): $TargetsContext
public "Add"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TargetsContext
public "ForEachBlock"(arg0: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>): void
public "ForEachEntity"(arg0: $Consumer$Type<($Entity$Type)>): void
public "ForOnePosition"(arg0: $Consumer$Type<($Vec3$Type)>): void
public "ForEachPosition"(arg0: $Consumer$Type<($Vec3$Type)>): void
public "ForEachShooter"(arg0: $Consumer$Type<($ShooterContext$Type)>): void
public "ForEachGun"(arg0: $Consumer$Type<($GunContext$Type)>): void
public "IsEmpty"(): boolean
public "With"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $TargetsContext
public "With"(arg0: $Vec3$Type): $TargetsContext
public "With"(arg0: $Entity$Type): $TargetsContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetsContext$Type = ($TargetsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetsContext_ = $TargetsContext$Type;
}}
declare module "packages/com/flansmod/common/crafting/recipes/$GunFabricationRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractWorkbench, $AbstractWorkbench$Type} from "packages/com/flansmod/common/crafting/$AbstractWorkbench"
import {$ERecipePart, $ERecipePart$Type} from "packages/com/flansmod/common/types/crafting/$ERecipePart"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $GunFabricationRecipe implements $Recipe<($AbstractWorkbench)> {
readonly "Type": $RecipeType<(any)>
readonly "Part": $ERecipePart
readonly "Loc": $ResourceLocation
readonly "Group": string
readonly "InputIngredients": $NonNullList<($Ingredient)>
readonly "Result": $ItemStack
readonly "CraftTime": integer

constructor(arg0: $RecipeType$Type<(any)>, arg1: $ResourceLocation$Type, arg2: string, arg3: ($Ingredient$Type)[], arg4: $ItemStack$Type, arg5: $ERecipePart$Type, arg6: integer)

public "matches"(arg0: $AbstractWorkbench$Type, arg1: $Level$Type): boolean
public "GenerateTooltip"(arg0: integer): $List<($Component)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "assemble"(arg0: $AbstractWorkbench$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "isIncomplete"(): boolean
public "GetResult"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $AbstractWorkbench$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getSchema"(): $RecipeSchema
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getGroup"(): string
public "getType"(): $ResourceLocation
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "group"(): string
get "type"(): $ResourceLocation
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunFabricationRecipe$Type = ($GunFabricationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunFabricationRecipe_ = $GunFabricationRecipe$Type;
}}
declare module "packages/com/flansmod/util/formulae/$FloatAccumulator" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FloatAccumulation, $FloatAccumulation$Type} from "packages/com/flansmod/util/formulae/$FloatAccumulation"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FloatFormula, $FloatFormula$Type} from "packages/com/flansmod/util/formulae/$FloatFormula"

export class $FloatAccumulator<TInputEnum extends $Enum<(TInputEnum)>, TFormulaType extends $FloatFormula<(any)>> {

constructor()

public "StackableMultiplier"(arg0: float): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "IndependentMultiplier"(arg0: float): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "GetDefaultValue"(): $FloatAccumulation
public "CopyFrom"(arg0: $FloatAccumulator$Type<(TInputEnum), (TFormulaType)>): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "Bake"(arg0: TInputEnum, arg1: float): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "BaseAdd"(arg0: float): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "FinalAdd"(arg0: float): $FloatAccumulator<(TInputEnum), (TFormulaType)>
public "Evaluate"(arg0: $Function$Type<(integer), (float)>): $FloatAccumulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatAccumulator$Type<TInputEnum, TFormulaType> = ($FloatAccumulator<(TInputEnum), (TFormulaType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatAccumulator_<TInputEnum, TFormulaType> = $FloatAccumulator$Type<(TInputEnum), (TFormulaType)>;
}}
declare module "packages/com/flansmod/common/types/elements/$ModifierDefinition" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StatAccumulatorDefinition, $StatAccumulatorDefinition$Type} from "packages/com/flansmod/common/types/abilities/elements/$StatAccumulatorDefinition"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ModifierDefinition {
 "stat": string
 "id": string
 "matchGroupPaths": (string)[]
 "accumulators": ($StatAccumulatorDefinition)[]
 "setValue": string

constructor()

public "GetStatWithId"(): string
public "GetModifierStrings"(): $List<($Component)>
public "AppliesTo"(arg0: string): boolean
public "AppliesTo"(arg0: string, arg1: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifierDefinition$Type = ($ModifierDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifierDefinition_ = $ModifierDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/abilities/elements/$EAbilityTrigger" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EReloadStage, $EReloadStage$Type} from "packages/com/flansmod/common/types/guns/elements/$EReloadStage"

export class $EAbilityTrigger extends $Enum<($EAbilityTrigger)> {
static readonly "AlwaysOn": $EAbilityTrigger
static readonly "Instant": $EAbilityTrigger
static readonly "ShotEntity": $EAbilityTrigger
static readonly "ShotBlock": $EAbilityTrigger
static readonly "ShotAndBrokeBlock": $EAbilityTrigger
static readonly "ShotHeadshot": $EAbilityTrigger
static readonly "ReloadStart": $EAbilityTrigger
static readonly "ReloadEject": $EAbilityTrigger
static readonly "ReloadLoadOne": $EAbilityTrigger
static readonly "ReloadEnd": $EAbilityTrigger
static readonly "StartActionGroup": $EAbilityTrigger
static readonly "TriggerActionGroup": $EAbilityTrigger
static readonly "EndActionGroup": $EAbilityTrigger
static readonly "SwitchMode": $EAbilityTrigger
static readonly "AddToInventory": $EAbilityTrigger
static readonly "RemoveFromInventory": $EAbilityTrigger
static readonly "Equip": $EAbilityTrigger
static readonly "Unequip": $EAbilityTrigger
static readonly "BulletConsumed": $EAbilityTrigger
static readonly "FirstBulletConsumed": $EAbilityTrigger
static readonly "LastBulletConsumed": $EAbilityTrigger
static readonly "RaycastAction": $EAbilityTrigger


public static "values"(): ($EAbilityTrigger)[]
public static "valueOf"(arg0: string): $EAbilityTrigger
public static "FromReloadStage"(arg0: $EReloadStage$Type): $EAbilityTrigger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAbilityTrigger$Type = (("raycastaction") | ("reloadend") | ("shotentity") | ("addtoinventory") | ("unequip") | ("shotblock") | ("shotheadshot") | ("endactiongroup") | ("triggeractiongroup") | ("reloadeject") | ("startactiongroup") | ("instant") | ("switchmode") | ("reloadloadone") | ("bulletconsumed") | ("firstbulletconsumed") | ("equip") | ("lastbulletconsumed") | ("reloadstart") | ("shotandbrokeblock") | ("removefrominventory") | ("alwayson")) | ($EAbilityTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAbilityTrigger_ = $EAbilityTrigger$Type;
}}
declare module "packages/com/flansmod/util/formulae/$FloatFormula" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FloatFormula$Term, $FloatFormula$Term$Type} from "packages/com/flansmod/util/formulae/$FloatFormula$Term"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FloatFormula<TInputEnum extends $Enum<(TInputEnum)>> {

constructor()

public "Calculate"(...arg0: (float)[]): float
public "Calculate"(...arg0: ($Supplier$Type<(float)>)[]): float
public "AddTerms"(arg0: $Collection$Type<($FloatFormula$Term$Type)>): void
public "AddTerm"(arg0: float, ...arg1: (TInputEnum)[]): $FloatFormula<(TInputEnum)>
public "BakeInput"(arg0: TInputEnum, arg1: float): $FloatFormula<(TInputEnum)>
public "BakeInput"(arg0: integer, arg1: float): $FloatFormula<(TInputEnum)>
public "Evaluate"(): float
public "Evaluate"(arg0: $Function$Type<(integer), (float)>): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatFormula$Type<TInputEnum> = ($FloatFormula<(TInputEnum)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatFormula_<TInputEnum> = $FloatFormula$Type<(TInputEnum)>;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$ReloadDefinition" {
import {$EReloadStage, $EReloadStage$Type} from "packages/com/flansmod/common/types/guns/elements/$EReloadStage"

export class $ReloadDefinition {
 "key": string
 "manualReloadAllowed": boolean
 "autoReloadWhenEmpty": boolean
 "startActionKey": string
 "ejectActionKey": string
 "loadOneActionKey": string
 "endActionKey": string

constructor()

public "GetReloadActionKey"(arg0: $EReloadStage$Type): string
public "Contains"(arg0: string): boolean
public "GetStage"(arg0: string): $EReloadStage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadDefinition$Type = ($ReloadDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadDefinition_ = $ReloadDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/guns/elements/$HandlerDefinition" {
import {$HandlerNodeDefinition, $HandlerNodeDefinition$Type} from "packages/com/flansmod/common/types/guns/elements/$HandlerNodeDefinition"
import {$EPlayerInput, $EPlayerInput$Type} from "packages/com/flansmod/common/types/elements/$EPlayerInput"

export class $HandlerDefinition {
static readonly "INVALID": $HandlerDefinition
 "inputType": $EPlayerInput
 "nodes": ($HandlerNodeDefinition)[]

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerDefinition$Type = ($HandlerDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandlerDefinition_ = $HandlerDefinition$Type;
}}
declare module "packages/com/flansmod/common/types/attachments/$EAttachmentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EAttachmentType extends $Enum<($EAttachmentType)> {
static readonly "Barrel": $EAttachmentType
static readonly "Sights": $EAttachmentType
static readonly "Stock": $EAttachmentType
static readonly "Grip": $EAttachmentType
static readonly "Generic": $EAttachmentType
static readonly "Tool": $EAttachmentType
static readonly "Arm": $EAttachmentType
static readonly "Leg": $EAttachmentType
static readonly "Head": $EAttachmentType
static readonly "Shoulder": $EAttachmentType
static readonly "Feet": $EAttachmentType
static readonly "Hips": $EAttachmentType
static readonly "Charm": $EAttachmentType


public static "values"(): ($EAttachmentType)[]
public static "valueOf"(arg0: string): $EAttachmentType
public "indexedName"(arg0: integer): string
public "unindexedName"(arg0: integer): string
public static "Parse"(arg0: string): $EAttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EAttachmentType$Type = (("barrel") | ("feet") | ("grip") | ("sights") | ("generic") | ("tool") | ("leg") | ("head") | ("hips") | ("charm") | ("stock") | ("shoulder") | ("arm")) | ($EAttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EAttachmentType_ = $EAttachmentType$Type;
}}

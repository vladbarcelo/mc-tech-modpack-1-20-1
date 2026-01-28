declare module "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FogShape, $FogShape$Type} from "packages/com/mojang/blaze3d/shaders/$FogShape"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$Type} from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $SlushFluid extends $ForgeFlowingFluid implements $IClientFluidTypeExtensions {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public static "getBlockProperties"(): $BlockBehaviour$Properties
public static "getForgeProperties"(): $ForgeFlowingFluid$Properties
public static "getFluidProperties"(): $FluidType$Properties
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public static "fizz"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
public static "of"(arg0: $FluidState$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$Type): $IClientFluidTypeExtensions
public "getTintColor"(): integer
public "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getTintColor"(arg0: $FluidStack$Type): integer
public "modifyFogColor"(arg0: $Camera$Type, arg1: float, arg2: $ClientLevel$Type, arg3: integer, arg4: float, arg5: $Vector3f$Type): $Vector3f
public "modifyFogRender"(arg0: $Camera$Type, arg1: $FogRenderer$FogMode$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$Type): void
public "getOverlayTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getOverlayTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getOverlayTexture"(): $ResourceLocation
public "getStillTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
public "getStillTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getFlowingTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getFlowingTexture"(): $ResourceLocation
public "getFlowingTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getRenderOverlayTexture"(arg0: $Minecraft$Type): $ResourceLocation
public "renderOverlay"(arg0: $Minecraft$Type, arg1: $PoseStack$Type): void
get "blockProperties"(): $BlockBehaviour$Properties
get "forgeProperties"(): $ForgeFlowingFluid$Properties
get "fluidProperties"(): $FluidType$Properties
get "tintColor"(): integer
get "overlayTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlushFluid$Type = ($SlushFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlushFluid_ = $SlushFluid$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$EntityClimateData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityClimateData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($EntityClimateData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: double, arg2: double, arg3: double, arg4: $Temperature$Units$Type, arg5: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: double, arg2: double, arg3: double, arg4: $Temperature$Units$Type)

public "units"(): $Temperature$Units
public "equals"(arg0: any): boolean
public "test"(arg0: $Entity$Type): boolean
public "entity"(): $NegatableList<($EntityRequirement)>
public "rate"(): double
public "minTempOffset"(): double
public "maxTempOffset"(): double
public "getMinOffset"(): double
public "getMaxOffset"(): double
public "getCodec"(): $Codec<($EntityClimateData)>
public static "fromToml"(arg0: $List$Type<(any)>): $EntityClimateData
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "minOffset"(): double
get "maxOffset"(): double
get "codec"(): $Codec<($EntityClimateData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityClimateData$Type = ($EntityClimateData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityClimateData_ = $EntityClimateData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/world/$WorldHelper$TempSnapshot" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $WorldHelper$TempSnapshot extends $Record {

constructor(timestamp: long, temperature: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "timestamp"(): long
public "temperature"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldHelper$TempSnapshot$Type = ($WorldHelper$TempSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldHelper$TempSnapshot_ = $WorldHelper$TempSnapshot$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$MountData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MountData extends $ConfigData implements $RequirementHolder {
static "CODEC": $Codec<($MountData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: $NegatableList$Type<($EntityRequirement$Type)>, arg2: double, arg3: double, arg4: $Map$Type<($ResourceLocation$Type), (double)>, arg5: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: $NegatableList$Type<($EntityRequirement$Type)>, arg2: double, arg3: double, arg4: $Map$Type<($ResourceLocation$Type), (double)>)

public "equals"(arg0: any): boolean
public "test"(arg0: $Entity$Type): boolean
public "entity"(): $NegatableList<($EntityRequirement)>
public "modifierImmunities"(): $Map<($ResourceLocation), (double)>
public "coldInsulation"(): double
public "heatInsulation"(): double
public "getCodec"(): $Codec<($MountData)>
public "rider"(): $NegatableList<($EntityRequirement)>
public static "fromToml"(arg0: $List$Type<(any)>): $MountData
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<($MountData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountData$Type = ($MountData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountData_ = $MountData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$Loader" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder"

export interface $DynamicHolder$Loader<T> {

 "load"(arg0: $DynamicHolder$Type<(T)>, arg1: $RegistryAccess$Type): void

(arg0: $DynamicHolder$Type<(T)>, arg1: $RegistryAccess$Type): void
}

export namespace $DynamicHolder$Loader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$Loader$Type<T> = ($DynamicHolder$Loader<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder$Loader_<T> = $DynamicHolder$Loader$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SlushFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public "setItemMovement"(arg0: $ItemEntity$Type): void
public "motionScale"(arg0: $Entity$Type): double
set "itemMovement"(value: $ItemEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlushFluidType$Type = ($SlushFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlushFluidType_ = $SlushFluidType$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/util/$WorldTempBounds" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$WorldTempRequirement, $WorldTempRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$WorldTempRequirement"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $WorldTempBounds extends $Record {
static readonly "NONE": $WorldTempBounds
static readonly "DIRECT_CODEC": $Codec<($WorldTempBounds)>
static readonly "CODEC": $Codec<($WorldTempBounds)>

constructor(min: $WorldTempRequirement$Type, max: $WorldTempRequirement$Type, units: $Temperature$Units$Type)

public "units"(): $Temperature$Units
public "getRandom"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): $WorldTempRequirement
public "max"(): $WorldTempRequirement
public "test"(arg0: double): boolean
public "contains"(arg0: $WorldTempBounds$Type): boolean
public "clamp"(arg0: double): double
get "random"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTempBounds$Type = ($WorldTempBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTempBounds_ = $WorldTempBounds$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$ItemTempData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemTempData$SlotType, $ItemTempData$SlotType$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$ItemTempData$SlotType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AttributeModifierMap, $AttributeModifierMap$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$AttributeModifierMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemTempData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($ItemTempData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $List$Type<($Either$Type<($IntegerBounds$Type), ($ItemTempData$SlotType$Type)>)>, arg2: double, arg3: $Temperature$Trait$Type, arg4: double, arg5: double, arg6: double, arg7: $NegatableList$Type<($EntityRequirement$Type)>, arg8: $AttributeModifierMap$Type, arg9: $Map$Type<($ResourceLocation$Type), (double)>, arg10: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $List$Type<($Either$Type<($IntegerBounds$Type), ($ItemTempData$SlotType$Type)>)>, arg2: double, arg3: $Temperature$Trait$Type, arg4: double, arg5: double, arg6: double, arg7: $NegatableList$Type<($EntityRequirement$Type)>, arg8: $AttributeModifierMap$Type, arg9: $Map$Type<($ResourceLocation$Type), (double)>)

public "item"(): $NegatableList<($ItemRequirement)>
public "equals"(arg0: any): boolean
public "test"(arg0: $Entity$Type): boolean
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: $ItemTempData$SlotType$Type): boolean
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $EquipmentSlot$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: integer, arg2: $EquipmentSlot$Type): boolean
public "slots"(): $List<($Either<($IntegerBounds), ($ItemTempData$SlotType)>)>
public "temperature"(): double
public "immuneTempModifiers"(): $Map<($ResourceLocation), (double)>
public "getSlotRangeName"(): string
public "entityRequirement"(): $NegatableList<($EntityRequirement)>
public "attributeModifiers"(): $AttributeModifierMap
public "getCodec"(): $Codec<($ItemTempData)>
public static "fromToml"(arg0: $List$Type<(any)>): $ItemTempData
public "trait"(): $Temperature$Trait
public "minTemp"(): double
public "maxTemp"(): double
public "maxEffect"(): double
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "slotRangeName"(): string
get "codec"(): $Codec<($ItemTempData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTempData$Type = ($ItemTempData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTempData_ = $ItemTempData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/sub_type/$EntitySubRequirement" {
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntitySubRequirement {

 "test"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $Vec3$Type): boolean
 "getType"(): $ResourceLocation
 "getCodec"(): $MapCodec<(any)>
}

export namespace $EntitySubRequirement {
const REQUIREMENT_MAP: $BiMap<($ResourceLocation), ($Supplier<($MapCodec<(any)>)>)>
const CODEC: $Codec<($EntitySubRequirement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySubRequirement$Type = ($EntitySubRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySubRequirement_ = $EntitySubRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FuelData$FuelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FuelData$FuelType extends $Enum<($FuelData$FuelType)> implements $StringRepresentable {
static readonly "BOILER": $FuelData$FuelType
static readonly "ICEBOX": $FuelData$FuelType
static readonly "HEARTH": $FuelData$FuelType
static readonly "SOUL_LAMP": $FuelData$FuelType
static "CODEC": $Codec<($FuelData$FuelType)>


public static "values"(): ($FuelData$FuelType)[]
public static "valueOf"(arg0: string): $FuelData$FuelType
public "getSerializedName"(): string
public static "byName"(arg0: string): $FuelData$FuelType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelData$FuelType$Type = (("boiler") | ("soul_lamp") | ("hearth") | ("icebox")) | ($FuelData$FuelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelData$FuelType_ = $FuelData$FuelType$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$InsulatorData$HintText" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $InsulatorData$HintText {
static readonly "CODEC": $Codec<($InsulatorData$HintText)>

constructor(arg0: $Optional$Type<(string)>, arg1: $Optional$Type<(string)>)

public "text"(): $Optional<(string)>
public "key"(): $Optional<(string)>
public "getText"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatorData$HintText$Type = ($InsulatorData$HintText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatorData$HintText_ = $InsulatorData$HintText$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$Saver" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"

export interface $DynamicHolder$Saver<T> {

 "save"(arg0: T, arg1: $RegistryAccess$Type): void

(arg0: T, arg1: $RegistryAccess$Type): void
}

export namespace $DynamicHolder$Saver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$Saver$Type<T> = ($DynamicHolder$Saver<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder$Saver_<T> = $DynamicHolder$Saver$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SoulStalkBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoulStalkBlock$Section, $SoulStalkBlock$Section$Type} from "packages/com/momosoftworks/coldsweat/common/block/$SoulStalkBlock$Section"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ServerStartedEvent, $ServerStartedEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStartedEvent"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"

export class $SoulStalkBlock extends $Block implements $IPlantable {
static readonly "AGE": $IntegerProperty
static readonly "SECTION": $EnumProperty<($SoulStalkBlock$Section)>
static readonly "MAX_HEIGHT": integer
static readonly "GROWABLE_DISPENSE_BEHAVIOR": $DispenseItemBehavior
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "grow"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): boolean
public static "getHeight"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public static "getItemProperties"(): $Item$Properties
public static "getRandomMidsection"(): $SoulStalkBlock$Section
public static "getRandomGrowth"(): integer
public static "applyGrowingItem"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "registerDispenserBehaviors"(arg0: $ServerStartedEvent$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "getTopY"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public static "getBaseY"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
get "randomMidsection"(): $SoulStalkBlock$Section
get "randomGrowth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStalkBlock$Type = ($SoulStalkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStalkBlock_ = $SoulStalkBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Temperature$Units extends $Enum<($Temperature$Units)> implements $StringRepresentable {
static readonly "F": $Temperature$Units
static readonly "C": $Temperature$Units
static readonly "MC": $Temperature$Units
static readonly "CODEC": $Codec<($Temperature$Units)>


public static "values"(): ($Temperature$Units)[]
public static "valueOf"(arg0: string): $Temperature$Units
public "getFormattedName"(): string
public "getSerializedName"(): string
public static "fromID"(arg0: string): $Temperature$Units
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "formattedName"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temperature$Units$Type = (("c") | ("f") | ("mc")) | ($Temperature$Units);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Temperature$Units_ = $Temperature$Units$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$ThermolithBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ThermolithBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public static "updateFacingNeighbors"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermolithBlock$Type = ($ThermolithBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermolithBlock_ = $ThermolithBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$SyncType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DynamicHolder$SyncType extends $Enum<($DynamicHolder$SyncType)> {
static readonly "NONE": $DynamicHolder$SyncType
static readonly "BOTH_WAYS": $DynamicHolder$SyncType
static readonly "ONE_WAY": $DynamicHolder$SyncType


public static "values"(): ($DynamicHolder$SyncType)[]
public static "valueOf"(arg0: string): $DynamicHolder$SyncType
public "canSend"(): boolean
public "canReceive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$SyncType$Type = (("both_ways") | ("one_way") | ("none")) | ($DynamicHolder$SyncType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder$SyncType_ = $DynamicHolder$SyncType$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$HearthBottomBlock" {
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
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HearthBottomBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "COOLING": $BooleanProperty
static readonly "HEATING": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "FROSTED": $BooleanProperty
static readonly "SMART": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HearthBottomBlock$Type = ($HearthBottomBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HearthBottomBlock_ = $HearthBottomBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList" {
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $NegatableList<T> {

constructor(arg0: $Collection$Type<(T)>)
constructor(arg0: $Collection$Type<(T)>, arg1: boolean, arg2: boolean)
constructor(arg0: T)
constructor(arg0: $Collection$Type<(T)>, arg1: $Collection$Type<(T)>, arg2: boolean, arg3: boolean)
constructor(arg0: $Collection$Type<(T)>, arg1: $Collection$Type<(T)>)
constructor()

public "flatten"<N>(arg0: $Function$Type<(T), ($NegatableList$Type<(N)>)>): $NegatableList<(N)>
public "add"(arg0: T, arg1: boolean): void
public "equals"(arg0: any): boolean
public "toString"(): string
public "test"(arg0: $Predicate$Type<(T)>): boolean
public "isEmpty"(): boolean
public "flatMap"<N>(arg0: $Function$Type<(T), (N)>, arg1: $BinaryOperator$Type<(N)>, arg2: $BiConsumer$Type<(N), (N)>): $Optional<(N)>
public "forEach"(arg0: $Consumer$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "requirements"(): $List<(T)>
public static "codec"<T>(arg0: $Codec$Type<(T)>): $Codec<($NegatableList<(T)>)>
public static "listCodec"<T>(arg0: $Codec$Type<(T)>, arg1: boolean): $Codec<($NegatableList<(T)>)>
public static "listCodec"<T>(arg0: $Codec$Type<(T)>): $Codec<($NegatableList<(T)>)>
public "exclusions"(): $List<(T)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NegatableList$Type<T> = ($NegatableList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NegatableList_<T> = $NegatableList$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$EntityTempData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WorldTempRequirement, $WorldTempRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$WorldTempRequirement"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTempData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($EntityTempData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: double, arg2: double, arg3: $Temperature$Units$Type, arg4: $NegatableList$Type<($EntityRequirement$Type)>, arg5: double, arg6: $WorldTempRequirement$Type, arg7: $WorldTempRequirement$Type, arg8: boolean, arg9: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($EntityRequirement$Type)>, arg1: double, arg2: double, arg3: $Temperature$Units$Type, arg4: $NegatableList$Type<($EntityRequirement$Type)>, arg5: double, arg6: $WorldTempRequirement$Type, arg7: $WorldTempRequirement$Type, arg8: boolean)

public "units"(): $Temperature$Units
public "range"(): double
public "equals"(arg0: any): boolean
public "test"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $Entity$Type): boolean
public "entity"(): $NegatableList<($EntityRequirement)>
public "getMaxEffect"(): double
public "getTemperature"(): double
public "temperature"(): double
public "affectedEntity"(): $NegatableList<($EntityRequirement)>
public "getTemperatureEffect"(arg0: $Entity$Type, arg1: $Entity$Type): double
public "affectsSelf"(): boolean
public "getCodec"(): $Codec<($EntityTempData)>
public static "fromToml"(arg0: $List$Type<(any)>): $EntityTempData
public "minTemp"(): $WorldTempRequirement
public "maxTemp"(): $WorldTempRequirement
public "maxEffect"(): double
public "getMinTemp"(): double
public "getMaxTemp"(): double
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<($EntityTempData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTempData$Type = ($EntityTempData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTempData_ = $EntityTempData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TempModifierArgument implements $ArgumentType<($ResourceLocation)> {

constructor()

public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "getModifier"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $ResourceLocation
public static "modifier"(): $TempModifierArgument
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierArgument$Type = ($TempModifierArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierArgument_ = $TempModifierArgument$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$DryingItemBuilderJS" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DryingItemData, $DryingItemData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$DryingItemData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DryingItemBuilderJS {
 "result": $ItemStack
 "sound": $SoundEvent
 "itemPredicate": $NegatableList<($ItemRequirement)>
 "entityPredicate": $NegatableList<($EntityRequirement)>

constructor()

public "build"(): $DryingItemData
public "items"(...arg0: (string)[]): $DryingItemBuilderJS
public "result"(arg0: $ItemStack$Type): $DryingItemBuilderJS
public "itemPredicate"(arg0: $Predicate$Type<($ItemStack$Type)>): $DryingItemBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $DryingItemBuilderJS
public "sound"(arg0: string): $DryingItemBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingItemBuilderJS$Type = ($DryingItemBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingItemBuilderJS_ = $DryingItemBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"

export class $ConfigData {
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<(string)>, arg1: $ConfigData$Type$Type, arg2: $UUID$Type)
constructor(arg0: $NegatableList$Type<(string)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "requiredMods"(): $NegatableList<(string)>
public "registryKey"<T>(): $ResourceKey<(T)>
public "setConfigType"(arg0: $ConfigData$Type$Type): void
public "areRequiredModsLoaded"(): boolean
public "setRegistryKey"(arg0: $ResourceKey$Type<(any)>): void
public "uuid"(): $UUID
public "setId"(arg0: $UUID$Type): void
public "getCodec"<T>(): $Codec<(T)>
public "getHolder"<D extends $ConfigData>(arg0: $RegistryAccess$Type): $Optional<(any)>
public "configType"(): $ConfigData$Type
set "id"(value: $UUID$Type)
get "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigData$Type = ($ConfigData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigData_ = $ConfigData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$MinecartInsulationBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $MinecartInsulationBlock extends $Block {
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public "asItem"(): $Item
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartInsulationBlock$Type = ($MinecartInsulationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartInsulationBlock_ = $MinecartInsulationBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TempModifierTraitArgument$Info$Template, $TempModifierTraitArgument$Info$Template$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument$Info$Template"
import {$TempModifierTraitArgument, $TempModifierTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument"

export class $TempModifierTraitArgument$Info implements $ArgumentTypeInfo<($TempModifierTraitArgument), ($TempModifierTraitArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(arg0: $TempModifierTraitArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TempModifierTraitArgument$Info$Template
public "serializeToJson"(arg0: $TempModifierTraitArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $TempModifierTraitArgument$Type): $TempModifierTraitArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierTraitArgument$Info$Type = ($TempModifierTraitArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierTraitArgument$Info_ = $TempModifierTraitArgument$Info$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$NicerEnumArgument$Info$Template, $NicerEnumArgument$Info$Template$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument$Info$Template"
import {$NicerEnumArgument, $NicerEnumArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $NicerEnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($NicerEnumArgument<(T)>), ($NicerEnumArgument$Info$Template<>)> {

constructor()

public "serializeToNetwork"(arg0: $NicerEnumArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $NicerEnumArgument$Info$Template
public "serializeToJson"(arg0: $NicerEnumArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $NicerEnumArgument$Type<(T)>): $NicerEnumArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NicerEnumArgument$Info$Type<T> = ($NicerEnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NicerEnumArgument$Info_<T> = $NicerEnumArgument$Info$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FuelData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FuelData$FuelType, $FuelData$FuelType$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FuelData$FuelType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FuelData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($FuelData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $FuelData$FuelType$Type, arg2: double, arg3: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $FuelData$FuelType$Type, arg2: double)

public "item"(): $NegatableList<($ItemRequirement)>
public "equals"(arg0: any): boolean
public "test"(arg0: $ItemStack$Type): boolean
public "getCodec"(): $Codec<($FuelData)>
public "fuel"(): double
public static "fromToml"(arg0: $List$Type<(any)>, arg1: $FuelData$FuelType$Type): $FuelData
public "fuelType"(): $FuelData$FuelType
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public "test"(arg0: $Entity$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<($FuelData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelData$Type = ($FuelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelData_ = $FuelData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$InsulatedMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InsulatedMinecartItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatedMinecartItem$Type = ($InsulatedMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatedMinecartItem_ = $InsulatedMinecartItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SewingTableBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"

export class $SewingTableBlock extends $Block implements $MenuProvider {
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "shouldCloseCurrentScreen"(): boolean
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewingTableBlock$Type = ($SewingTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SewingTableBlock_ = $SewingTableBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$LocationRequirement" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockInWorld, $BlockInWorld$Type} from "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$FluidRequirement, $FluidRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$FluidRequirement"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockRequirement, $BlockRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$BlockRequirement"
import {$WorldTempBounds, $WorldTempBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$WorldTempBounds"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LocationRequirement extends $Record {
static readonly "CODEC": $Codec<($LocationRequirement)>
static readonly "NONE": $LocationRequirement

constructor(arg0: $IntegerBounds$Type, arg1: $IntegerBounds$Type, arg2: $IntegerBounds$Type, arg3: integer, arg4: integer, arg5: integer, arg6: $NegatableList$Type<($Either$Type<($TagKey$Type<($Biome$Type)>), ($ResourceKey$Type<($Biome$Type)>)>)>, arg7: $NegatableList$Type<($Either$Type<($TagKey$Type<($Structure$Type)>), ($ResourceKey$Type<($Structure$Type)>)>)>, arg8: $NegatableList$Type<($Either$Type<($TagKey$Type<($Level$Type)>), ($ResourceKey$Type<($Level$Type)>)>)>, arg9: $IntegerBounds$Type, arg10: $BlockRequirement$Type, arg11: $FluidRequirement$Type, arg12: $WorldTempBounds$Type)
constructor(x: $IntegerBounds$Type, y: $IntegerBounds$Type, z: $IntegerBounds$Type, xOffset: integer, yOffset: integer, zOffset: integer, biome: $NegatableList$Type<($Either$Type<($TagKey$Type<($Biome$Type)>), ($ResourceKey$Type<($Biome$Type)>)>)>, structure: $NegatableList$Type<($Either$Type<($TagKey$Type<($Structure$Type)>), ($ResourceKey$Type<($Structure$Type)>)>)>, dimension: $NegatableList$Type<($Either$Type<($TagKey$Type<($Level$Type)>), ($ResourceKey$Type<($Level$Type)>)>)>, light: $IntegerBounds$Type, block: $BlockRequirement$Type, fluid: $FluidRequirement$Type, temperature: $WorldTempBounds$Type, predicate: $Optional$Type<($Predicate$Type<($BlockInWorld$Type)>)>)
constructor(arg0: $Predicate$Type<($BlockInWorld$Type)>)

public "predicate"(): $Optional<($Predicate<($BlockInWorld)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "test"(arg0: $Level$Type, arg1: $Vec3$Type): boolean
public "x"(): $IntegerBounds
public "z"(): $IntegerBounds
public "y"(): $IntegerBounds
public "block"(): $BlockRequirement
public "dimension"(): $NegatableList<($Either<($TagKey<($Level)>), ($ResourceKey<($Level)>)>)>
public "temperature"(): $WorldTempBounds
public "structure"(): $NegatableList<($Either<($TagKey<($Structure)>), ($ResourceKey<($Structure)>)>)>
public "biome"(): $NegatableList<($Either<($TagKey<($Biome)>), ($ResourceKey<($Biome)>)>)>
public "light"(): $IntegerBounds
public "fluid"(): $FluidRequirement
public "zOffset"(): integer
public "xOffset"(): integer
public "yOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationRequirement$Type = ($LocationRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationRequirement_ = $LocationRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument$Info$Template" {
import {$NicerEnumArgument, $NicerEnumArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $NicerEnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($NicerEnumArgument<(T)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $NicerEnumArgument<(T)>
public "type"(): $ArgumentTypeInfo<($NicerEnumArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NicerEnumArgument$Info$Template$Type = ($NicerEnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NicerEnumArgument$Info$Template_ = $NicerEnumArgument$Info$Template$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EnchantmentRequirement" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantmentRequirement extends $Record {
static readonly "CODEC": $Codec<($EnchantmentRequirement)>

constructor(enchantment: $Either$Type<($TagKey$Type<($Enchantment$Type)>), ($Enchantment$Type)>, level: $IntegerBounds$Type)

public "level"(): $IntegerBounds
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Enchantment$Type, arg1: integer): boolean
public "test"(arg0: $Map$Type<($Enchantment$Type), (integer)>): boolean
public "enchantment"(): $Either<($TagKey<($Enchantment)>), ($Enchantment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRequirement$Type = ($EnchantmentRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentRequirement_ = $EnchantmentRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation$Slot" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Insulation$Slot extends $Enum<($Insulation$Slot)> implements $StringRepresentable {
static readonly "ITEM": $Insulation$Slot
static readonly "CURIO": $Insulation$Slot
static readonly "ARMOR": $Insulation$Slot
static readonly "CODEC": $Codec<($Insulation$Slot)>


public static "values"(): ($Insulation$Slot)[]
public static "valueOf"(arg0: string): $Insulation$Slot
public "getSerializedName"(): string
public static "byName"(arg0: string): $Insulation$Slot
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insulation$Slot$Type = (("item") | ("armor") | ("curio")) | ($Insulation$Slot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Insulation$Slot_ = $Insulation$Slot$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/$DefaultModifiersEventJS" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Placement, $Placement$Type} from "packages/com/momosoftworks/coldsweat/api/util/placement/$Placement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$DefaultTempModifiersEvent, $DefaultTempModifiersEvent$Type} from "packages/com/momosoftworks/coldsweat/api/event/core/init/$DefaultTempModifiersEvent"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DefaultModifiersEventJS extends $LivingEntityEventJS {

constructor(arg0: $DefaultTempModifiersEvent$Type)

public "getModifiers"(): $Map<($Temperature$Trait), ($List<($TempModifier)>)>
public "getEntity"(): $LivingEntity
public "addModifier"(arg0: string, arg1: $TempModifier$Type, arg2: $Placement$Type): void
public "addModifier"(arg0: string, arg1: $TempModifier$Type): void
public "addModifiers"(arg0: string, ...arg1: ($TempModifier$Type)[]): void
public "addModifierById"(arg0: string, arg1: $ResourceLocation$Type, arg2: $Consumer$Type<($TempModifier$Type)>, arg3: $Placement$Type): void
public "removeModifiers"(arg0: string, arg1: $Predicate$Type<($TempModifier$Type)>): void
public "placed"(arg0: string, arg1: string, arg2: $Predicate$Type<($TempModifier$Type)>): $Placement
get "modifiers"(): $Map<($Temperature$Trait), ($List<($TempModifier)>)>
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultModifiersEventJS$Type = ($DefaultModifiersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultModifiersEventJS_ = $DefaultModifiersEventJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument$Info$Template" {
import {$TempAttributeTraitArgument, $TempAttributeTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TempAttributeTraitArgument$Info, $TempAttributeTraitArgument$Info$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TempAttributeTraitArgument$Info$Template implements $ArgumentTypeInfo$Template<($TempAttributeTraitArgument)> {

constructor(arg0: $TempAttributeTraitArgument$Info$Type)

public "instantiate"(arg0: $CommandBuildContext$Type): $TempAttributeTraitArgument
public "type"(): $ArgumentTypeInfo<($TempAttributeTraitArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempAttributeTraitArgument$Info$Template$Type = ($TempAttributeTraitArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempAttributeTraitArgument$Info$Template_ = $TempAttributeTraitArgument$Info$Template$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/util/$AttributeModifierMap" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttributeModifierMap {
static readonly "CODEC": $Codec<($AttributeModifierMap)>

constructor(arg0: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>)
constructor(arg0: $Map$Type<($Attribute$Type), (any)>)
constructor()

public "get"(arg0: $Attribute$Type): $Collection<($AttributeModifier)>
public "put"(arg0: $Attribute$Type, arg1: $AttributeModifier$Type): void
public "equals"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(arg0: $Attribute$Type, arg1: $Collection$Type<($AttributeModifier$Type)>): $AttributeModifierMap
public "putAll"(arg0: $AttributeModifierMap$Type): $AttributeModifierMap
public "getMap"(): $Multimap<($Attribute), ($AttributeModifier)>
get "empty"(): boolean
get "map"(): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeModifierMap$Type = ($AttributeModifierMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeModifierMap_ = $AttributeModifierMap$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/core/registry/$LoadRegistriesEvent" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$RegistryHolder, $RegistryHolder$Type} from "packages/com/momosoftworks/coldsweat/data/$RegistryHolder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $LoadRegistriesEvent extends $Event {

constructor()
constructor(arg0: $RegistryAccess$Type, arg1: $Multimap$Type<($RegistryHolder$Type<(any)>), ($Holder$Type<(any)>)>)

public "addRegistryEntry"<T extends $ConfigData>(arg0: $RegistryHolder$Type<(T)>, arg1: $Holder$Type<(T)>): void
public "addRegistryEntry"<T extends $ConfigData>(arg0: $RegistryHolder$Type<(T)>, arg1: T): void
public "addRegistryEntries"<T extends $ConfigData>(arg0: $RegistryHolder$Type<(T)>, arg1: $Collection$Type<($Holder$Type<(T)>)>): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getRegistries"(): $Multimap<($RegistryHolder<(any)>), ($Holder<(any)>)>
public "getRegistry"<T extends $ConfigData>(arg0: $RegistryHolder$Type<(T)>): $Collection<($Holder<(T)>)>
public "getRegistryAccess"(): $RegistryAccess
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "registries"(): $Multimap<($RegistryHolder<(any)>), ($Holder<(any)>)>
get "registryAccess"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadRegistriesEvent$Type = ($LoadRegistriesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadRegistriesEvent_ = $LoadRegistriesEvent$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityFlagsRequirement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityFlagsRequirement extends $Record {
static readonly "CODEC": $Codec<($EntityFlagsRequirement)>

constructor(onFire: $Optional$Type<(boolean)>, sneaking: $Optional$Type<(boolean)>, sprinting: $Optional$Type<(boolean)>, swimming: $Optional$Type<(boolean)>, invisible: $Optional$Type<(boolean)>, glowing: $Optional$Type<(boolean)>, baby: $Optional$Type<(boolean)>, inWater: $Optional$Type<(boolean)>, inLava: $Optional$Type<(boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Entity$Type): boolean
public "invisible"(): $Optional<(boolean)>
public "baby"(): $Optional<(boolean)>
public "glowing"(): $Optional<(boolean)>
public "sprinting"(): $Optional<(boolean)>
public "sneaking"(): $Optional<(boolean)>
public "onFire"(): $Optional<(boolean)>
public "swimming"(): $Optional<(boolean)>
public "inWater"(): $Optional<(boolean)>
public "inLava"(): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlagsRequirement$Type = ($EntityFlagsRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlagsRequirement_ = $EntityFlagsRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EnchantmentRequirement, $EnchantmentRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EnchantmentRequirement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NbtRequirement, $NbtRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$NbtRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"

export class $ItemRequirement extends $Record {
static readonly "WILDCARD_ITEM": $Item
static readonly "CODEC": $Codec<($ItemRequirement)>
static readonly "NONE": $ItemRequirement

constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>)>, arg1: $IntegerBounds$Type, arg2: $IntegerBounds$Type, arg3: $NegatableList$Type<($EnchantmentRequirement$Type)>, arg4: $Optional$Type<($Potion$Type)>, arg5: $NbtRequirement$Type)
constructor(items: $NegatableList$Type<($Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>)>, count: $IntegerBounds$Type, durability: $IntegerBounds$Type, enchantments: $NegatableList$Type<($EnchantmentRequirement$Type)>, potion: $Optional$Type<($Potion$Type)>, nbt: $NbtRequirement$Type, predicate: $Optional$Type<($Predicate$Type<($ItemStack$Type)>)>)
constructor(arg0: $Collection$Type<($Item$Type)>, arg1: $Predicate$Type<($ItemStack$Type)>)
constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>)>, arg1: $NbtRequirement$Type)
constructor(arg0: $Predicate$Type<($ItemStack$Type)>)

public "predicate"(): $Optional<($Predicate<($ItemStack)>)>
public "items"(): $NegatableList<($Either<($TagKey<($Item)>), ($Item)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ItemStack$Type, arg1: boolean): boolean
public "count"(): $IntegerBounds
public "enchantments"(): $NegatableList<($EnchantmentRequirement)>
public "nbt"(): $NbtRequirement
public "potion"(): $Optional<($Potion)>
public "durability"(): $IntegerBounds
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRequirement$Type = ($ItemRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRequirement_ = $ItemRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$SpawnBiomeBuilderJS" {
import {$BlockInWorld, $BlockInWorld$Type} from "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SpawnBiomeData, $SpawnBiomeData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$SpawnBiomeData"
import {$LocationRequirement, $LocationRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$LocationRequirement"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$OptionalHolder, $OptionalHolder$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$OptionalHolder"

export class $SpawnBiomeBuilderJS {
readonly "biomes": $Set<($OptionalHolder<($Biome)>)>
 "category": $MobCategory
 "weight": integer
readonly "entities": $Set<($EntityType<(any)>)>
 "count": $IntegerBounds
 "locationPredicate": $NegatableList<($LocationRequirement)>

constructor()

public "build"(): $SpawnBiomeData
public "category"(arg0: string): $SpawnBiomeBuilderJS
public "count"(arg0: integer, arg1: integer): $SpawnBiomeBuilderJS
public "entities"(...arg0: (string)[]): $SpawnBiomeBuilderJS
public "locationPredicate"(arg0: $Predicate$Type<($BlockInWorld$Type)>): $SpawnBiomeBuilderJS
public "weight"(arg0: integer): $SpawnBiomeBuilderJS
public "biomes"(...arg0: (string)[]): $SpawnBiomeBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnBiomeBuilderJS$Type = ($SpawnBiomeBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnBiomeBuilderJS_ = $SpawnBiomeBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$IceboxBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
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
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $IceboxBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "FROSTED": $BooleanProperty
static readonly "SMOKESTACK": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public static "createMistParticles"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceboxBlock$Type = ($IceboxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IceboxBlock_ = $IceboxBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$ChameleonArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChameleonArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChameleonArmorItem$Type = ($ChameleonArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChameleonArmorItem_ = $ChameleonArmorItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument" {
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$StringRepresentableArgument, $StringRepresentableArgument$Type} from "packages/net/minecraft/commands/arguments/$StringRepresentableArgument"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TempModifierTraitArgument extends $StringRepresentableArgument<($Temperature$Trait)> {


public static "getModifier"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $Temperature$Trait
public static "modifier"(): $TempModifierTraitArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierTraitArgument$Type = ($TempModifierTraitArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierTraitArgument_ = $TempModifierTraitArgument$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DynamicHolder$Saver, $DynamicHolder$Saver$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$Saver"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$DynamicHolder$Loader, $DynamicHolder$Loader$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$Loader"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DynamicHolder$SyncType, $DynamicHolder$SyncType$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder$SyncType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $DynamicHolder<T> implements $Supplier<(T)> {


public "getName"(): $ResourceLocation
public "get"(): T
public "get"(arg0: $RegistryAccess$Type): T
public "load"(arg0: boolean): void
public "load"(arg0: $RegistryAccess$Type, arg1: boolean): void
public "decode"(arg0: $Tag$Type): void
public "encode"(arg0: $RegistryAccess$Type): $Tag
public "set"(arg0: T): void
public "save"(arg0: $RegistryAccess$Type): void
public "reset"(): void
public static "create"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<($DynamicHolder$Type<(T)>)>, arg3: $Consumer$Type<(T)>): $DynamicHolder<(T)>
public static "create"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>): $DynamicHolder<(T)>
public static "create"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<($DynamicHolder$Type<(T)>)>): $DynamicHolder<(T)>
public static "createWithRegistries"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>, arg2: $DynamicHolder$Loader$Type<(T)>): $DynamicHolder<(T)>
public static "createSynced"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>, arg2: $Consumer$Type<($DynamicHolder$Type<(T)>)>, arg3: $Codec$Type<(T)>, arg4: $Consumer$Type<(T)>, arg5: $DynamicHolder$SyncType$Type): $DynamicHolder<(T)>
public static "createSyncedWithRegistries"<T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(T)>, arg2: $DynamicHolder$Loader$Type<(T)>, arg3: $Codec$Type<(T)>, arg4: $DynamicHolder$Saver$Type<(T)>, arg5: $DynamicHolder$SyncType$Type): $DynamicHolder<(T)>
public "getSyncType"(): $DynamicHolder$SyncType
public "requiresRegistries"(): boolean
public "getCodec"(): $Codec<(T)>
public "isSynced"(): boolean
public "setUnsafe"(arg0: any): void
get "name"(): $ResourceLocation
get "syncType"(): $DynamicHolder$SyncType
get "codec"(): $Codec<(T)>
get "synced"(): boolean
set "unsafe"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$Type<T> = ($DynamicHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicHolder_<T> = $DynamicHolder$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NbtRequirement, $NbtRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$NbtRequirement"
import {$RegistryModifierData$Operation, $RegistryModifierData$Operation$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData$Operation"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"

export class $RegistryModifierData<T extends $ConfigData> extends $ConfigData {
static readonly "CODEC": $Codec<($RegistryModifierData<(any)>)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $ResourceKey$Type<($Registry$Type<(T)>)>, arg1: $List$Type<($ConfigData$Type$Type)>, arg2: $NegatableList$Type<($NbtRequirement$Type)>, arg3: $List$Type<($ResourceLocation$Type)>, arg4: $List$Type<($RegistryModifierData$Operation$Type)>)

public "matches"(arg0: $Holder$Type<(T)>): boolean
public "matches"(): $NegatableList<($NbtRequirement)>
public "matches"(arg0: T): boolean
public "entries"(): $List<($ResourceLocation)>
public "modifications"(): $List<($RegistryModifierData$Operation)>
public "applyModifications"(arg0: T): T
public "registry"(): $ResourceKey<($Registry<(T)>)>
public "configTypes"(): $List<($ConfigData$Type)>
public "getCodec"(): $Codec<(any)>
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryModifierData$Type<T> = ($RegistryModifierData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryModifierData_<T> = $RegistryModifierData$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$WaterskinItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
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

export class $WaterskinItem extends $Item {
static readonly "FLUID_VALUE_MB": integer
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

public static "handleFillWaterskin"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type, arg3: $BlockPos$Type): void
public static "getFilledItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $ItemStack
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterskinItem$Type = ($WaterskinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterskinItem_ = $WaterskinItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TempAttributeTraitArgument$Info$Template, $TempAttributeTraitArgument$Info$Template$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TempAttributeTraitArgument, $TempAttributeTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $TempAttributeTraitArgument$Info implements $ArgumentTypeInfo<($TempAttributeTraitArgument), ($TempAttributeTraitArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(arg0: $TempAttributeTraitArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TempAttributeTraitArgument$Info$Template
public "serializeToJson"(arg0: $TempAttributeTraitArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $TempAttributeTraitArgument$Type): $TempAttributeTraitArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempAttributeTraitArgument$Info$Type = ($TempAttributeTraitArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempAttributeTraitArgument$Info_ = $TempAttributeTraitArgument$Info$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/world/feature/$SoulStalkFeatureConfig" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RuleBasedBlockStateProvider, $RuleBasedBlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$RuleBasedBlockStateProvider"

export class $SoulStalkFeatureConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($SoulStalkFeatureConfig)>

constructor(tries: integer, minCount: integer, maxCount: integer, spreadXZ: integer, spreadY: integer, diskWidth: integer, diskHeight: integer, diskDecay: double, diskStateProvider: $RuleBasedBlockStateProvider$Type, replaceBlocks: $BlockPredicate$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tries"(): integer
public "diskStateProvider"(): $RuleBasedBlockStateProvider
public "replaceBlocks"(): $BlockPredicate
public "minCount"(): integer
public "maxCount"(): integer
public "spreadXZ"(): integer
public "spreadY"(): integer
public "diskWidth"(): integer
public "diskHeight"(): integer
public "diskDecay"(): double
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStalkFeatureConfig$Type = ($SoulStalkFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStalkFeatureConfig_ = $SoulStalkFeatureConfig$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$InsulatorData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Insulation$Slot, $Insulation$Slot$Type} from "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation$Slot"
import {$AttributeModifierMap, $AttributeModifierMap$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$AttributeModifierMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Insulation, $Insulation$Type} from "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$InsulatorData$HintText, $InsulatorData$HintText$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$InsulatorData$HintText"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InsulatorData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($InsulatorData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $Insulation$Slot$Type, arg2: $List$Type<($Insulation$Type)>, arg3: $NegatableList$Type<($EntityRequirement$Type)>, arg4: $AttributeModifierMap$Type, arg5: $Map$Type<($ResourceLocation$Type), (double)>, arg6: boolean, arg7: boolean, arg8: $Optional$Type<($InsulatorData$HintText$Type)>)
constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $Insulation$Slot$Type, arg2: $List$Type<($Insulation$Type)>, arg3: $NegatableList$Type<($EntityRequirement$Type)>, arg4: $AttributeModifierMap$Type, arg5: $Map$Type<($ResourceLocation$Type), (double)>, arg6: boolean, arg7: boolean, arg8: $Optional$Type<($InsulatorData$HintText$Type)>, arg9: $NegatableList$Type<(string)>)

public "attributes"(): $AttributeModifierMap
public "hint"(): $Optional<($InsulatorData$HintText)>
public "item"(): $NegatableList<($ItemRequirement)>
public "slot"(): $Insulation$Slot
public "equals"(arg0: any): boolean
public "test"(arg0: $ItemStack$Type): boolean
public "test"(arg0: $Entity$Type): boolean
public "copy"(): $InsulatorData
public "entity"(): $NegatableList<($EntityRequirement)>
public "hideIfUnmet"(): boolean
public "immuneTempModifiers"(): $Map<($ResourceLocation), (double)>
public "getCodec"(): $Codec<($InsulatorData)>
public "insulation"(): $List<($Insulation)>
public "fillSlots"(): boolean
public "getCold"(): double
public "getHeat"(): double
public static "fromToml"(arg0: $List$Type<(any)>, arg1: $Insulation$Slot$Type): $InsulatorData
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<($InsulatorData)>
get "cold"(): double
get "heat"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatorData$Type = ($InsulatorData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatorData_ = $InsulatorData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$DryingItemData" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DryingItemData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($DryingItemData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $ItemStack$Type, arg2: $NegatableList$Type<($EntityRequirement$Type)>, arg3: $SoundEvent$Type, arg4: $NegatableList$Type<(string)>)
constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: $ItemStack$Type, arg2: $NegatableList$Type<($EntityRequirement$Type)>, arg3: $SoundEvent$Type)

public "item"(): $NegatableList<($ItemRequirement)>
public "test"(arg0: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public "result"(): $ItemStack
public "entity"(): $NegatableList<($EntityRequirement)>
public "getCodec"(): $Codec<(any)>
public "sound"(): $SoundEvent
public static "fromToml"(arg0: $List$Type<(any)>): $DryingItemData
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingItemData$Type = ($DryingItemData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingItemData_ = $DryingItemData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$EntityTempBuilderJS" {
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$EntityTempData, $EntityTempData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$EntityTempData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTempBuilderJS {
 "temperature": double
 "range": double
 "units": $Temperature$Units
 "maxEffect": double
 "maxTemperature": double
 "minTemperature": double
 "entityPredicate": $NegatableList<($EntityRequirement)>
 "otherEntityPredicate": $NegatableList<($EntityRequirement)>
 "affectsSelf": boolean

constructor()

public "build"(): $EntityTempData
public "units"(arg0: string): $EntityTempBuilderJS
public "range"(arg0: double): $EntityTempBuilderJS
public "entities"(...arg0: (string)[]): $EntityTempBuilderJS
public "maxTemperature"(arg0: double): $EntityTempBuilderJS
public "minTemperature"(arg0: double): $EntityTempBuilderJS
public "temperature"(arg0: double): $EntityTempBuilderJS
public "affectsSelf"(arg0: boolean): $EntityTempBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $EntityTempBuilderJS
public "otherEntityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $EntityTempBuilderJS
public "maxEffect"(arg0: double): $EntityTempBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTempBuilderJS$Type = ($EntityTempBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTempBuilderJS_ = $EntityTempBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement" {
import {$DoubleBounds, $DoubleBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$DoubleBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EquipmentRequirement, $EquipmentRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EquipmentRequirement"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntityFlagsRequirement, $EntityFlagsRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityFlagsRequirement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NbtRequirement, $NbtRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$NbtRequirement"
import {$LocationRequirement, $LocationRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$LocationRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$EntitySubRequirement, $EntitySubRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/sub_type/$EntitySubRequirement"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EffectsRequirement, $EffectsRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EffectsRequirement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EntityRequirement extends $Record {
static readonly "NONE": $EntityRequirement
static readonly "WILDCARD_ENTITY": $EntityType<(any)>
static readonly "SIMPLE_CODEC": $Codec<($EntityRequirement)>

constructor(arg0: $Predicate$Type<($Entity$Type)>)
constructor(entities: $NegatableList$Type<($Either$Type<($TagKey$Type<($EntityType$Type<(any)>)>), ($EntityType$Type<(any)>)>)>, location: $LocationRequirement$Type, steppingOn: $LocationRequirement$Type, effects: $Optional$Type<($EffectsRequirement$Type)>, nbt: $NbtRequirement$Type, flags: $Optional$Type<($EntityFlagsRequirement$Type)>, equipment: $EquipmentRequirement$Type, typeSpecificData: $Optional$Type<($EntitySubRequirement$Type)>, team: $NegatableList$Type<(string)>, vehicle: $Optional$Type<($EntityRequirement$Type)>, passenger: $Optional$Type<($EntityRequirement$Type)>, target: $Optional$Type<($EntityRequirement$Type)>, temperature: $Map$Type<($Temperature$Trait$Type), ($DoubleBounds$Type)>, predicate: $Optional$Type<($Predicate$Type<($Entity$Type)>)>)
constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($EntityType$Type<(any)>)>), ($EntityType$Type<(any)>)>)>, arg1: $LocationRequirement$Type, arg2: $LocationRequirement$Type, arg3: $Optional$Type<($EffectsRequirement$Type)>, arg4: $NbtRequirement$Type, arg5: $Optional$Type<($EntityFlagsRequirement$Type)>, arg6: $EquipmentRequirement$Type, arg7: $Optional$Type<($EntitySubRequirement$Type)>, arg8: $NegatableList$Type<(string)>, arg9: $Optional$Type<($EntityRequirement$Type)>, arg10: $Optional$Type<($EntityRequirement$Type)>, arg11: $Optional$Type<($EntityRequirement$Type)>, arg12: $Map$Type<($Temperature$Trait$Type), ($DoubleBounds$Type)>)
constructor(arg0: $Collection$Type<($EntityType$Type<(any)>)>, arg1: $Predicate$Type<($Entity$Type)>)
constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($EntityType$Type<(any)>)>), ($EntityType$Type<(any)>)>)>)

public "predicate"(): $Optional<($Predicate<($Entity)>)>
public "equals"(arg0: any): boolean
public "target"(): $Optional<($EntityRequirement)>
public "toString"(): string
public "flags"(): $Optional<($EntityFlagsRequirement)>
public "hashCode"(): integer
public "test"(arg0: $Entity$Type): boolean
public "location"(): $LocationRequirement
public "entities"(): $NegatableList<($Either<($TagKey<($EntityType<(any)>)>), ($EntityType<(any)>)>)>
public "typeSpecificData"(): $Optional<($EntitySubRequirement)>
public "temperature"(): $Map<($Temperature$Trait), ($DoubleBounds)>
public static "getCodec"(): $Codec<($EntityRequirement)>
public "team"(): $NegatableList<(string)>
public "nbt"(): $NbtRequirement
public "vehicle"(): $Optional<($EntityRequirement)>
public "equipment"(): $EquipmentRequirement
public "effects"(): $Optional<($EffectsRequirement)>
public "passenger"(): $Optional<($EntityRequirement)>
public "steppingOn"(): $LocationRequirement
get "codec"(): $Codec<($EntityRequirement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRequirement$Type = ($EntityRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRequirement_ = $EntityRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$EntityClimateBuilderJS" {
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$EntityClimateData, $EntityClimateData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$EntityClimateData"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"

export class $EntityClimateBuilderJS {
 "entityPredicate": $NegatableList<($EntityRequirement)>
 "minTemp": double
 "maxTemp": double
 "rate": double
 "units": $Temperature$Units

constructor()

public "build"(): $EntityClimateData
public "units"(arg0: string): $EntityClimateBuilderJS
public "entities"(...arg0: (string)[]): $EntityClimateBuilderJS
public "temperature"(arg0: double, arg1: double): $EntityClimateBuilderJS
public "rate"(arg0: double): $EntityClimateBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityClimateBuilderJS$Type = ($EntityClimateBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityClimateBuilderJS_ = $EntityClimateBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Temperature$Trait extends $Enum<($Temperature$Trait)> implements $StringRepresentable {
static readonly "WORLD": $Temperature$Trait
static readonly "CORE": $Temperature$Trait
static readonly "BASE": $Temperature$Trait
static readonly "BODY": $Temperature$Trait
static readonly "RATE": $Temperature$Trait
static readonly "FREEZING_POINT": $Temperature$Trait
static readonly "BURNING_POINT": $Temperature$Trait
static readonly "COLD_RESISTANCE": $Temperature$Trait
static readonly "HEAT_RESISTANCE": $Temperature$Trait
static readonly "COLD_DAMPENING": $Temperature$Trait
static readonly "HEAT_DAMPENING": $Temperature$Trait
static readonly "CODEC": $Codec<($Temperature$Trait)>


public static "values"(): ($Temperature$Trait)[]
public static "valueOf"(arg0: string): $Temperature$Trait
public "isForTemperature"(): boolean
public "isForModifiers"(): boolean
public "isForAttributes"(): boolean
public "getSerializedName"(): string
public static "fromID"(arg0: string): $Temperature$Trait
public "isForWorld"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "forTemperature"(): boolean
get "forModifiers"(): boolean
get "forAttributes"(): boolean
get "serializedName"(): string
get "forWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Temperature$Trait$Type = (("core") | ("cold_resistance") | ("freezing_point") | ("world") | ("rate") | ("heat_resistance") | ("heat_dampening") | ("burning_point") | ("body") | ("cold_dampening") | ("base")) | ($Temperature$Trait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Temperature$Trait_ = $Temperature$Trait$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$HearthTopBlock" {
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SmokestackBlock, $SmokestackBlock$Type} from "packages/com/momosoftworks/coldsweat/common/block/$SmokestackBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SmokestackBlock$Facing, $SmokestackBlock$Facing$Type} from "packages/com/momosoftworks/coldsweat/common/block/$SmokestackBlock$Facing"

export class $HearthTopBlock extends $SmokestackBlock {
static readonly "FACING": $EnumProperty<($SmokestackBlock$Facing)>
static readonly "END": $BooleanProperty
static readonly "BASE": $BooleanProperty
static readonly "ENCASED": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HearthTopBlock$Type = ($HearthTopBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HearthTopBlock_ = $HearthTopBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$GoatArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoatArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoatArmorItem$Type = ($GoatArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoatArmorItem_ = $GoatArmorItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FoodData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RequirementHolder, $RequirementHolder$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FoodData extends $ConfigData implements $RequirementHolder {
static readonly "CODEC": $Codec<($FoodData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: double, arg2: integer, arg3: integer, arg4: $NegatableList$Type<($EntityRequirement$Type)>)
constructor(arg0: $NegatableList$Type<($ItemRequirement$Type)>, arg1: double, arg2: integer, arg3: integer, arg4: $NegatableList$Type<($EntityRequirement$Type)>, arg5: $NegatableList$Type<(string)>)

public "item"(): $NegatableList<($ItemRequirement)>
public "duration"(): integer
public "equals"(arg0: any): boolean
public "test"(arg0: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public "temperature"(): double
public "entityRequirement"(): $NegatableList<($EntityRequirement)>
public "getCodec"(): $Codec<($FoodData)>
public static "fromToml"(arg0: $List$Type<(any)>): $FoodData
public "stackLimit"(): integer
public "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
public static "filterValid"<T extends $RequirementHolder>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
get "codec"(): $Codec<($FoodData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodData$Type = ($FoodData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodData_ = $FoodData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempAttributeTraitArgument" {
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$StringRepresentableArgument, $StringRepresentableArgument$Type} from "packages/net/minecraft/commands/arguments/$StringRepresentableArgument"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TempAttributeTraitArgument extends $StringRepresentableArgument<($Temperature$Trait)> {


public static "attribute"(): $TempAttributeTraitArgument
public static "getAttribute"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $Temperature$Trait
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempAttributeTraitArgument$Type = ($TempAttributeTraitArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempAttributeTraitArgument_ = $TempAttributeTraitArgument$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/$ApplyInsulationEventJS" {
import {$InsulateItemEvent, $InsulateItemEvent$Type} from "packages/com/momosoftworks/coldsweat/api/event/common/insulation/$InsulateItemEvent"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ApplyInsulationEventJS extends $PlayerEventJS {

constructor(arg0: $InsulateItemEvent$Type)

public "getArmorItem"(): $ItemStack
public "getInsulator"(): $ItemStack
public "setInsulator"(arg0: $ItemStack$Type): void
public "getPlayer"(): $Player
get "armorItem"(): $ItemStack
get "insulator"(): $ItemStack
set "insulator"(value: $ItemStack$Type)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApplyInsulationEventJS$Type = ($ApplyInsulationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ApplyInsulationEventJS_ = $ApplyInsulationEventJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/serialization/$OptionalHolder" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $OptionalHolder<T> {

constructor(arg0: $ResourceKey$Type<(T)>)

public "get"(): $Holder<(T)>
public "value"(): $Optional<($Holder<(T)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "key"(): $ResourceKey<(T)>
public "setValue"(arg0: $Holder$Type<(T)>): void
public "is"(arg0: $Holder$Type<(T)>): boolean
public static "ofHolder"<T>(arg0: $Holder$Type<(T)>): $OptionalHolder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalHolder$Type<T> = ($OptionalHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalHolder_<T> = $OptionalHolder$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$ThermometerItem" {
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

export class $ThermometerItem extends $Item {
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
export type $ThermometerItem$Type = ($ThermometerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermometerItem_ = $ThermometerItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/effect/$GraceEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $GraceEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraceEffect$Type = ($GraceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraceEffect_ = $GraceEffect$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/entity/$DummyEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$JumpControl, $JumpControl$Type} from "packages/net/minecraft/world/entity/ai/control/$JumpControl"

export class $DummyEntity extends $Mob {
static readonly "PICKUP_REACH": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "lookControl": $LookControl
 "moveControl": $MoveControl
 "jumpControl": $JumpControl
 "navigation": $PathNavigation
 "goalSelector": $GoalSelector
 "targetSelector": $GoalSelector
readonly "handDropChances": (float)[]
readonly "armorDropChances": (float)[]
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "noActionTime": integer
 "oRun": float
 "run": float
 "animStep": float
 "animStepO": float
 "rotOffs": float
 "deathScore": integer
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lerpSteps": integer
 "lerpX": double
 "lerpY": double
 "lerpZ": double
 "lerpYRot": double
 "lerpXRot": double
 "lyHeadRot": double
 "lerpHeadSteps": integer
 "useItem": $ItemStack
 "useItemRemaining": integer
 "fallFlyTicks": integer
 "lastPos": $BlockPos
 "autoSpinAttackTicks": integer
 "brain": $Brain<(any)>
 "self": $LivingEntity
 "sodiumdynamiclights$luminance": integer
 "supp$slimedTicks": integer
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

constructor(arg0: $Level$Type)

public "isSpectator"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
public static "getAlpha"(le: $LivingEntity$Type, partialTicks: float): float
public static "tickEntity"(entity: $LivingEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "spectator"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyEntity$Type = ($DummyEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyEntity_ = $DummyEntity$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/core/registry/$LoadRegistriesEvent$Pre" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LoadRegistriesEvent, $LoadRegistriesEvent$Type} from "packages/com/momosoftworks/coldsweat/api/event/core/registry/$LoadRegistriesEvent"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$RegistryHolder, $RegistryHolder$Type} from "packages/com/momosoftworks/coldsweat/data/$RegistryHolder"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegistryModifierData, $RegistryModifierData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData"

export class $LoadRegistriesEvent$Pre extends $LoadRegistriesEvent {

constructor()
constructor(arg0: $RegistryAccess$Type, arg1: $Multimap$Type<($RegistryHolder$Type<(any)>), ($Holder$Type<(any)>)>, arg2: $Multimap$Type<($RegistryHolder$Type<(any)>), ($Holder$Type<($RegistryModifierData$Type<(any)>)>)>)

public "getRegistryModifiers"(): $Multimap<($ResourceKey<($Registry<(any)>)>), ($RegistryModifierData<(any)>)>
public "getListenerList"(): $ListenerList
get "registryModifiers"(): $Multimap<($ResourceKey<($Registry<(any)>)>), ($RegistryModifierData<(any)>)>
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadRegistriesEvent$Pre$Type = ($LoadRegistriesEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadRegistriesEvent$Pre_ = $LoadRegistriesEvent$Pre$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/placement/$Order" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Order extends $Enum<($Order)> implements $StringRepresentable {
static readonly "FIRST": $Order
static readonly "LAST": $Order


public static "values"(): ($Order)[]
public static "valueOf"(arg0: string): $Order
public "getSerializedName"(): string
public static "byName"(arg0: string): $Order
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Order$Type = (("last") | ("first")) | ($Order);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Order_ = $Order$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$SoulspringLampItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LivingAttackEvent, $LivingAttackEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoulspringLampItem extends $Item {
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

public static "getFuelForStack"(arg0: $ItemStack$Type): double
public static "onEntityHit"(arg0: $LivingAttackEvent$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getDefaultInstance"(): $ItemStack
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setFuel"(arg0: $ItemStack$Type, arg1: double): void
public static "isLit"(arg0: $ItemStack$Type): boolean
public static "getFuel"(arg0: $ItemStack$Type): double
public static "setLit"(arg0: $ItemStack$Type, arg1: boolean): void
public static "addFuel"(arg0: $ItemStack$Type, arg1: double): void
public static "addFuel"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulspringLampItem$Type = ($SoulspringLampItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulspringLampItem_ = $SoulspringLampItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/$AddModifierEventJS" {
import {$TempModifierEvent$Add, $TempModifierEvent$Add$Type} from "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TempModifierEvent$Add"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"

export class $AddModifierEventJS extends $LivingEntityEventJS {

constructor(arg0: $TempModifierEvent$Add$Type)

public "setModifier"(arg0: $TempModifier$Type): void
public "getModifier"(): $TempModifier
public "setTrait"(arg0: $Temperature$Trait$Type): void
public "getTrait"(): $Temperature$Trait
set "modifier"(value: $TempModifier$Type)
get "modifier"(): $TempModifier
set "trait"(value: $Temperature$Trait$Type)
get "trait"(): $Temperature$Trait
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddModifierEventJS$Type = ($AddModifierEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddModifierEventJS_ = $AddModifierEventJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EquipmentRequirement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EquipmentRequirement extends $Record {
static readonly "CODEC": $Codec<($EquipmentRequirement)>
static readonly "NONE": $EquipmentRequirement

constructor(head: $ItemRequirement$Type, chest: $ItemRequirement$Type, legs: $ItemRequirement$Type, feet: $ItemRequirement$Type, mainHand: $ItemRequirement$Type, offHand: $ItemRequirement$Type)

public "head"(): $ItemRequirement
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Entity$Type): boolean
public "chest"(): $ItemRequirement
public "feet"(): $ItemRequirement
public "legs"(): $ItemRequirement
public "mainHand"(): $ItemRequirement
public "offHand"(): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentRequirement$Type = ($EquipmentRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentRequirement_ = $EquipmentRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RegistryModifierData$Type extends $Enum<($RegistryModifierData$Type)> implements $StringRepresentable {
static readonly "DISABLE": $RegistryModifierData$Type
static readonly "REPLACE": $RegistryModifierData$Type
static readonly "MERGE": $RegistryModifierData$Type
static readonly "APPEND": $RegistryModifierData$Type
static readonly "REMOVE": $RegistryModifierData$Type
static readonly "CODEC": $Codec<($RegistryModifierData$Type)>


public static "values"(): ($RegistryModifierData$Type)[]
public static "valueOf"(arg0: string): $RegistryModifierData$Type
public "getSerializedName"(): string
public static "byName"(arg0: string): $RegistryModifierData$Type
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryModifierData$Type$Type = (("disable") | ("merge") | ("replace") | ("append") | ("remove")) | ($RegistryModifierData$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryModifierData$Type_ = $RegistryModifierData$Type$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Insulation {

constructor()

public "getValue"(): double
public "isEmpty"(): boolean
public "split"(): $List<($Insulation)>
public static "combine"(arg0: $List$Type<($Insulation$Type)>, arg1: $List$Type<($Insulation$Type)>): $List<($Insulation)>
public "copy"<T extends $Insulation>(): T
public static "sort"(arg0: $List$Type<($Insulation$Type)>): $List<($Insulation)>
public "getCompareValue"(): integer
public static "deepCopy"(arg0: $List$Type<($Insulation$Type)>): $List<($Insulation)>
public static "splitList"(arg0: $List$Type<($Insulation$Type)>): $List<($Insulation)>
public static "getCodec"(): $Codec<($Insulation)>
public "getCold"(): double
public "getHeat"(): double
get "value"(): double
get "empty"(): boolean
get "compareValue"(): integer
get "codec"(): $Codec<($Insulation)>
get "cold"(): double
get "heat"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insulation$Type = ($Insulation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Insulation_ = $Insulation$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/world/feature/$SoulStalkFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$SoulStalkFeatureConfig, $SoulStalkFeatureConfig$Type} from "packages/com/momosoftworks/coldsweat/common/world/feature/$SoulStalkFeatureConfig"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $SoulStalkFeature extends $Feature<($SoulStalkFeatureConfig)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($SoulStalkFeatureConfig$Type)>)

public "isAirOrLeaves"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type): boolean
public "place"(arg0: $FeaturePlaceContext$Type<($SoulStalkFeatureConfig$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStalkFeature$Type = ($SoulStalkFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStalkFeature_ = $SoulStalkFeature$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/$KubeBindings" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DynamicHolder, $DynamicHolder$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$DynamicHolder"

export class $KubeBindings {

constructor()

public static "getModifiers"(arg0: $Entity$Type, arg1: string, arg2: string): $List<($TempModifier)>
public static "getTemperatureAt"(arg0: $Level$Type, arg1: $BlockPos$Type): double
public static "setTemperature"(arg0: $Entity$Type, arg1: string, arg2: double): void
public static "getBiomeTemperature"(arg0: $Level$Type, arg1: $BlockPos$Type): double
public static "getTemperature"(arg0: $Entity$Type, arg1: string): double
public static "getRegistryAccess"(): $RegistryAccess
public static "addModifier"(arg0: $Entity$Type, arg1: $TempModifier$Type, arg2: string): void
public static "getBlockTemperature"(arg0: $BlockContainerJS$Type): double
public static "getConfigSetting"(arg0: string): $DynamicHolder<(any)>
public static "convertTemperature"(arg0: double, arg1: string, arg2: string, arg3: boolean): double
public static "createModifier"(arg0: string): $TempModifier
public static "getColdInsulation"(arg0: $Entity$Type): double
public static "getHeatInsulation"(arg0: $Entity$Type): double
public static "getTrait"(arg0: string): $Temperature$Trait
get "registryAccess"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeBindings$Type = ($KubeBindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KubeBindings_ = $KubeBindings$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$SpawnBiomeData" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$OptionalHolder, $OptionalHolder$Type} from "packages/com/momosoftworks/coldsweat/util/serialization/$OptionalHolder"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ConfigData$Type, $ConfigData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$LocationRequirement, $LocationRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$LocationRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"

export class $SpawnBiomeData extends $ConfigData {
static readonly "CODEC": $Codec<($SpawnBiomeData)>
static readonly "REQUIRED_MODS_CODEC": $Codec<($NegatableList<(string)>)>
static readonly "UUID_CODEC": $Codec<($UUID)>
static readonly "TYPE_CODEC": $Codec<($ConfigData$Type)>

constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($Biome$Type)>), ($OptionalHolder$Type<($Biome$Type)>)>)>, arg1: $NegatableList$Type<($Either$Type<($TagKey$Type<($EntityType$Type<(any)>)>), ($EntityType$Type<(any)>)>)>, arg2: $MobCategory$Type, arg3: integer, arg4: $IntegerBounds$Type, arg5: $NegatableList$Type<($LocationRequirement$Type)>, arg6: $NegatableList$Type<(string)>)
constructor(arg0: $Collection$Type<($OptionalHolder$Type<($Biome$Type)>)>, arg1: $MobCategory$Type, arg2: integer, arg3: $Collection$Type<($EntityType$Type<(any)>)>, arg4: $IntegerBounds$Type, arg5: $NegatableList$Type<($LocationRequirement$Type)>)
constructor(arg0: $NegatableList$Type<($Either$Type<($TagKey$Type<($Biome$Type)>), ($OptionalHolder$Type<($Biome$Type)>)>)>, arg1: $NegatableList$Type<($Either$Type<($TagKey$Type<($EntityType$Type<(any)>)>), ($EntityType$Type<(any)>)>)>, arg2: $MobCategory$Type, arg3: integer, arg4: $IntegerBounds$Type, arg5: $NegatableList$Type<($LocationRequirement$Type)>)

public "category"(): $MobCategory
public "equals"(arg0: any): boolean
public "count"(): $IntegerBounds
public "location"(): $NegatableList<($LocationRequirement)>
public "entities"(): $NegatableList<($Either<($TagKey<($EntityType<(any)>)>), ($EntityType<(any)>)>)>
public "weight"(): integer
public "getCodec"(): $Codec<($SpawnBiomeData)>
public "biomes"(): $NegatableList<($Either<($TagKey<($Biome)>), ($OptionalHolder<($Biome)>)>)>
public static "fromToml"(arg0: $List$Type<(any)>, arg1: $EntityType$Type<(any)>, arg2: $RegistryAccess$Type): $SpawnBiomeData
get "codec"(): $Codec<($SpawnBiomeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnBiomeData$Type = ($SpawnBiomeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnBiomeData_ = $SpawnBiomeData$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$ItemTempData$SlotType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ItemTempData$SlotType extends $Enum<($ItemTempData$SlotType)> implements $StringRepresentable {
static readonly "HEAD": $ItemTempData$SlotType
static readonly "CHEST": $ItemTempData$SlotType
static readonly "LEGS": $ItemTempData$SlotType
static readonly "FEET": $ItemTempData$SlotType
static readonly "INVENTORY": $ItemTempData$SlotType
static readonly "HOTBAR": $ItemTempData$SlotType
static readonly "CURIO": $ItemTempData$SlotType
static readonly "HAND": $ItemTempData$SlotType
static readonly "CODEC": $Codec<($ItemTempData$SlotType)>


public static "values"(): ($ItemTempData$SlotType)[]
public static "valueOf"(arg0: string): $ItemTempData$SlotType
public "matches"(arg0: $EquipmentSlot$Type): boolean
public "matches"(arg0: integer): boolean
public static "fromEquipment"(arg0: $EquipmentSlot$Type): $ItemTempData$SlotType
public "getSlots"(): $List<($Either<($IntegerBounds), ($EquipmentSlot)>)>
public "getSerializedName"(): string
public static "byName"(arg0: string): $ItemTempData$SlotType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "slots"(): $List<($Either<($IntegerBounds), ($EquipmentSlot)>)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTempData$SlotType$Type = (("head") | ("feet") | ("chest") | ("legs") | ("inventory") | ("hotbar") | ("curio") | ("hand")) | ($ItemTempData$SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTempData$SlotType_ = $ItemTempData$SlotType$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/temperature/block_temp/$BlockTemp" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $BlockTemp {

constructor(...arg0: ($Block$Type)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: boolean, ...arg6: ($Block$Type)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: boolean, arg6: boolean, ...arg7: ($Block$Type)[])

public "range"(): double
public "isValid"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "maxTemperature"(): double
public "minTemperature"(): double
public "getAffectedBlocks"(): $Set<($Block)>
public "logarithmic"(): boolean
public "getTemperature"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: double): double
public "fade"(): boolean
public "maxEffect"(): double
public "minEffect"(): double
public "hasBlock"(arg0: $Block$Type): boolean
get "affectedBlocks"(): $Set<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTemp$Type = ($BlockTemp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTemp_ = $BlockTemp$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TempModifierEvent$Add" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$TempModifierEvent, $TempModifierEvent$Type} from "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TempModifierEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TempModifierEvent$Add extends $TempModifierEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type, arg2: $TempModifier$Type)

public "setModifier"(arg0: $TempModifier$Type): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "setTrait"(arg0: $Temperature$Trait$Type): void
set "modifier"(value: $TempModifier$Type)
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
set "trait"(value: $Temperature$Trait$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierEvent$Add$Type = ($TempModifierEvent$Add);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierEvent$Add_ = $TempModifierEvent$Add$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/placement/$Placement" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Mode, $Mode$Type} from "packages/com/momosoftworks/coldsweat/api/util/placement/$Mode"
import {$Order, $Order$Type} from "packages/com/momosoftworks/coldsweat/api/util/placement/$Order"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Matcher, $Matcher$Type} from "packages/com/momosoftworks/coldsweat/api/util/placement/$Matcher"

export class $Placement {
static readonly "FIRST": $Placement
static readonly "LAST": $Placement


public "predicate"(): $Predicate<($TempModifier)>
public static "of"(arg0: $Mode$Type, arg1: $Order$Type, arg2: $Predicate$Type<($TempModifier$Type)>): $Placement
public "orElse"(arg0: $Placement$Type): $Placement
public "mode"(): $Mode
public "fallback"(): $Placement
public "order"(): $Order
public "duplicates"(): $Matcher
public "maxDuplicates"(): integer
public "noDuplicates"(arg0: $Matcher$Type): $Placement
public "limitDuplicates"(arg0: $Matcher$Type, arg1: integer): $Placement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Placement$Type = ($Placement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Placement_ = $Placement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$InsulatorBuilderJS" {
import {$Insulation$Slot, $Insulation$Slot$Type} from "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation$Slot"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AttributeModifierMap, $AttributeModifierMap$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$AttributeModifierMap"
import {$InsulatorData, $InsulatorData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$InsulatorData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Insulation, $Insulation$Type} from "packages/com/momosoftworks/coldsweat/api/insulation/$Insulation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InsulatorBuilderJS {
 "insulation": $List<($Insulation)>
 "slot": $Insulation$Slot
 "itemPredicate": $NegatableList<($ItemRequirement)>
 "entityPredicate": $NegatableList<($EntityRequirement)>
 "attributes": $AttributeModifierMap
 "immuneTempModifiers": $Map<($ResourceLocation), (double)>
 "fillSlots": boolean
 "hideIfUnmet": boolean
 "hintKey": string
 "hintText": string

constructor()

public "build"(): $InsulatorData
public "attribute"(arg0: string, arg1: double, arg2: string): $InsulatorBuilderJS
public "items"(...arg0: (string)[]): $InsulatorBuilderJS
public "slot"(arg0: string): $InsulatorBuilderJS
public "hintKey"(arg0: string): $InsulatorBuilderJS
public "itemPredicate"(arg0: $Predicate$Type<($ItemStack$Type)>): $InsulatorBuilderJS
public "hideIfUnmet"(arg0: boolean): $InsulatorBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $InsulatorBuilderJS
public "immuneToModifier"(arg0: string, arg1: double): $InsulatorBuilderJS
public "adaptiveInsulation"(arg0: double, arg1: double): $InsulatorBuilderJS
public "insulation"(arg0: double, arg1: double): $InsulatorBuilderJS
public "fillSlots"(arg0: boolean): $InsulatorBuilderJS
public "hintText"(arg0: string): $InsulatorBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatorBuilderJS$Type = ($InsulatorBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatorBuilderJS_ = $InsulatorBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$SlushFluid, $SlushFluid$Type} from "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $SlushFluid$Flowing extends $SlushFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public static "of"(arg0: $FluidState$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlushFluid$Flowing$Type = ($SlushFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlushFluid$Flowing_ = $SlushFluid$Flowing$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument$Info$Template" {
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TempModifierTraitArgument$Info, $TempModifierTraitArgument$Info$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument$Info"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"
import {$TempModifierTraitArgument, $TempModifierTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierTraitArgument"

export class $TempModifierTraitArgument$Info$Template implements $ArgumentTypeInfo$Template<($TempModifierTraitArgument)> {

constructor(arg0: $TempModifierTraitArgument$Info$Type)

public "instantiate"(arg0: $CommandBuildContext$Type): $TempModifierTraitArgument
public "type"(): $ArgumentTypeInfo<($TempModifierTraitArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierTraitArgument$Info$Template$Type = ($TempModifierTraitArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierTraitArgument$Info$Template_ = $TempModifierTraitArgument$Info$Template$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SlushLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
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
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SlushLiquidBlock extends $LiquidBlock {
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlushLiquidBlock$Type = ($SlushLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlushLiquidBlock_ = $SlushLiquidBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IntegerBounds extends $Record {
static readonly "DIRECT_CODEC": $Codec<($IntegerBounds)>
static readonly "CODEC": $Codec<($IntegerBounds)>
static "NONE": $IntegerBounds

constructor(arg0: (integer)[])
constructor(min: integer, max: integer)

public "getRandom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): integer
public "max"(): integer
public "test"(arg0: integer): boolean
public "contains"(arg0: $IntegerBounds$Type): boolean
public "clamp"(arg0: integer): integer
get "random"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerBounds$Type = ($IntegerBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerBounds_ = $IntegerBounds$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$WorldTempRequirement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldTempRequirement extends $Record {
static readonly "INFINITY": $WorldTempRequirement
static readonly "NEGATIVE_INFINITY": $WorldTempRequirement
static readonly "VARIABLES": $Map<(string), ($Supplier<(double)>)>
static readonly "CODEC": $Codec<($WorldTempRequirement)>

constructor(temperature: $Either$Type<(double), (string)>)
constructor(arg0: string)
constructor(arg0: double)

public "get"(arg0: $Temperature$Units$Type): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "temperature"(): $Either<(double), (string)>
public "isConstant"(): boolean
get "constant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTempRequirement$Type = ($WorldTempRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTempRequirement_ = $WorldTempRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EffectsRequirement" {
import {$EffectsRequirement$Instance, $EffectsRequirement$Instance$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EffectsRequirement$Instance"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EffectsRequirement extends $Record {
static readonly "CODEC": $Codec<($EffectsRequirement)>

constructor(effects: $Map$Type<($MobEffect$Type), ($EffectsRequirement$Instance$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Entity$Type): boolean
public "test"(arg0: $Collection$Type<($MobEffectInstance$Type)>): boolean
public "test"(arg0: $MobEffectInstance$Type): boolean
public "effects"(): $Map<($MobEffect), ($EffectsRequirement$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsRequirement$Type = ($EffectsRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectsRequirement_ = $EffectsRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$FuelBuilderJS" {
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FuelData$FuelType, $FuelData$FuelType$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FuelData$FuelType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$FuelData, $FuelData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FuelData"

export class $FuelBuilderJS {
 "fuel": double
 "itemPredicate": $NegatableList<($ItemRequirement)>

constructor()

public "build"(arg0: $FuelData$FuelType$Type): $FuelData
public "items"(...arg0: (string)[]): $FuelBuilderJS
public "itemPredicate"(arg0: $Predicate$Type<($ItemStack$Type)>): $FuelBuilderJS
public "fuel"(arg0: double): $FuelBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelBuilderJS$Type = ($FuelBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelBuilderJS_ = $FuelBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/effect/$WarmthEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WarmthEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarmthEffect$Type = ($WarmthEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarmthEffect_ = $WarmthEffect$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData$Operation" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RegistryModifierData$Type, $RegistryModifierData$Type$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$RegistryModifierData$Type"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RegistryModifierData$Operation extends $Record {
static readonly "CODEC": $Codec<($RegistryModifierData$Operation)>

constructor(type: $RegistryModifierData$Type$Type, data: $CompoundTag$Type)

public "type"(): $RegistryModifierData$Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): $CompoundTag
public "modify"<T extends $ConfigData>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryModifierData$Operation$Type = ($RegistryModifierData$Operation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryModifierData$Operation_ = $RegistryModifierData$Operation$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TempModifierEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TempModifierEvent extends $Event {

constructor()

public "getEntity"(): $LivingEntity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getModifier"(): $TempModifier
public "hasResult"(): boolean
public "getTrait"(): $Temperature$Trait
get "entity"(): $LivingEntity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "modifier"(): $TempModifier
get "trait"(): $Temperature$Trait
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierEvent$Type = ($TempModifierEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierEvent_ = $TempModifierEvent$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$FoodBuilderJS" {
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FoodData, $FoodData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$FoodData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FoodBuilderJS {
 "temperature": double
 "duration": integer
 "stackLimit": integer
 "itemPredicate": $NegatableList<($ItemRequirement)>
 "entityPredicate": $NegatableList<($EntityRequirement)>

constructor()

public "build"(): $FoodData
public "duration"(arg0: integer): $FoodBuilderJS
public "items"(...arg0: (string)[]): $FoodBuilderJS
public "itemPredicate"(arg0: $Predicate$Type<($ItemStack$Type)>): $FoodBuilderJS
public "temperature"(arg0: double): $FoodBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $FoodBuilderJS
public "stackLimit"(arg0: integer): $FoodBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBuilderJS$Type = ($FoodBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBuilderJS_ = $FoodBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$FilledWaterskinItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FilledWaterskinItem extends $Item {
static readonly "EFFECT_RATE": double
static readonly "NBT_TEMPERATURE": string
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

public static "getDisplayStack"(): $ItemStack
public static "performPourAction"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type): boolean
public static "consumeWaterskin"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $InteractionHand$Type): $ItemStack
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDescriptionId"(): string
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "displayStack"(): $ItemStack
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilledWaterskinItem$Type = ($FilledWaterskinItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilledWaterskinItem_ = $FilledWaterskinItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/$TempChangedEventJS" {
import {$TemperatureChangedEvent, $TemperatureChangedEvent$Type} from "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TemperatureChangedEvent"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"

export class $TempChangedEventJS extends $LivingEntityEventJS {

constructor(arg0: $TemperatureChangedEvent$Type)

public "setTemperature"(arg0: double): void
public "getTemperature"(): double
public "getOldTemperature"(): double
public "getTrait"(): string
set "temperature"(value: double)
get "temperature"(): double
get "oldTemperature"(): double
get "trait"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempChangedEventJS$Type = ($TempChangedEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempChangedEventJS_ = $TempChangedEventJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $TemperatureTraitArgument implements $ArgumentType<($Temperature$Trait)> {


public static "getTemperature"(arg0: $CommandContext$Type<($CommandSourceStack$Type)>, arg1: string): $Temperature$Trait
public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "temperatureGet"(): $TemperatureTraitArgument
public static "temperatureSet"(): $TemperatureTraitArgument
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureTraitArgument$Type = ($TemperatureTraitArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureTraitArgument_ = $TemperatureTraitArgument$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SmokestackBlock$Facing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"

export class $SmokestackBlock$Facing extends $Enum<($SmokestackBlock$Facing)> implements $StringRepresentable {
static readonly "UP": $SmokestackBlock$Facing
static readonly "DOWN": $SmokestackBlock$Facing
static readonly "NORTH": $SmokestackBlock$Facing
static readonly "SOUTH": $SmokestackBlock$Facing
static readonly "EAST": $SmokestackBlock$Facing
static readonly "WEST": $SmokestackBlock$Facing
static readonly "BEND": $SmokestackBlock$Facing


public "rotate"(arg0: $Rotation$Type): $SmokestackBlock$Facing
public static "values"(): ($SmokestackBlock$Facing)[]
public static "valueOf"(arg0: string): $SmokestackBlock$Facing
public "toDirection"(): $Direction
public static "fromDirection"(arg0: $Direction$Type): $SmokestackBlock$Facing
public "mirror"(arg0: $Mirror$Type): $SmokestackBlock$Facing
public "getSerializedName"(): string
public "getAxis"(): $Direction$Axis
public static "byName"(arg0: string): $SmokestackBlock$Facing
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "axis"(): $Direction$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokestackBlock$Facing$Type = (("east") | ("south") | ("north") | ("bend") | ("west") | ("up") | ("down")) | ($SmokestackBlock$Facing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokestackBlock$Facing_ = $SmokestackBlock$Facing$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$InsulatingMountBuilderJS" {
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$MountData, $MountData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$MountData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $InsulatingMountBuilderJS {
 "entityPredicate": $NegatableList<($EntityRequirement)>
 "riderPredicate": $NegatableList<($EntityRequirement)>
 "coldInsulation": double
 "heatInsulation": double
 "modifierImmunities": $Map<($ResourceLocation), (double)>

constructor()

public "build"(): $MountData
public "entities"(...arg0: (string)[]): $InsulatingMountBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $InsulatingMountBuilderJS
public "coldInsulation"(arg0: double): $InsulatingMountBuilderJS
public "heatInsulation"(arg0: double): $InsulatingMountBuilderJS
public "riderPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $InsulatingMountBuilderJS
public "immuneToModifier"(arg0: string, arg1: double): $InsulatingMountBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulatingMountBuilderJS$Type = ($InsulatingMountBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulatingMountBuilderJS_ = $InsulatingMountBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SoulStalkBlock$Section" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SoulStalkBlock$Section extends $Enum<($SoulStalkBlock$Section)> implements $StringRepresentable {
static readonly "BASE": $SoulStalkBlock$Section
static readonly "MIDDLE": $SoulStalkBlock$Section
static readonly "MIDDLE_SPROUT": $SoulStalkBlock$Section
static readonly "TOP": $SoulStalkBlock$Section
static readonly "BUD": $SoulStalkBlock$Section


public static "values"(): ($SoulStalkBlock$Section)[]
public static "valueOf"(arg0: string): $SoulStalkBlock$Section
public "getSerializedName"(): string
public "hasFruit"(): boolean
public "isMiddle"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStalkBlock$Section$Type = (("bud") | ("middle") | ("top") | ("middle_sprout") | ("base")) | ($SoulStalkBlock$Section);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulStalkBlock$Section_ = $SoulStalkBlock$Section$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$NicerEnumArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $NicerEnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {

constructor(arg0: $Class$Type<(T)>)

public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $NicerEnumArgument<(R)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NicerEnumArgument$Type<T> = ($NicerEnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NicerEnumArgument_<T> = $NicerEnumArgument$Type<(T)>;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/common/insulation/$InsulateItemEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $InsulateItemEvent extends $Event {

constructor()
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getArmorItem"(): $ItemStack
public "getInsulator"(): $ItemStack
public "setInsulator"(arg0: $ItemStack$Type): void
public "hasResult"(): boolean
public "getPlayer"(): $Player
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "armorItem"(): $ItemStack
get "insulator"(): $ItemStack
set "insulator"(value: $ItemStack$Type)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsulateItemEvent$Type = ($InsulateItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsulateItemEvent_ = $InsulateItemEvent$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ConfigData$Type extends $Enum<($ConfigData$Type)> implements $StringRepresentable {
static readonly "TOML": $ConfigData$Type
static readonly "JSON": $ConfigData$Type
static readonly "KUBEJS": $ConfigData$Type
static readonly "CODEC": $Codec<($ConfigData$Type)>


public static "values"(): ($ConfigData$Type)[]
public static "valueOf"(arg0: string): $ConfigData$Type
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
export type $ConfigData$Type$Type = (("kubejs") | ("json") | ("toml")) | ($ConfigData$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigData$Type_ = $ConfigData$Type$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/util/$DoubleBounds" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $DoubleBounds extends $Record {
static readonly "DIRECT_CODEC": $Codec<($DoubleBounds)>
static readonly "CODEC": $Codec<($DoubleBounds)>
static "NONE": $DoubleBounds

constructor(arg0: (double)[])
constructor(min: double, max: double)

public "getRandom"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): double
public "max"(): double
public "test"(arg0: double): boolean
public "contains"(arg0: $IntegerBounds$Type): boolean
public "clamp"(arg0: double): double
get "random"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBounds$Type = ($DoubleBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBounds_ = $DoubleBounds$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$BoilerBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BoilerBlock extends $Block implements $EntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "LIT": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public static "createFlameParticles"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: double, arg4: double): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerBlock$Type = ($BoilerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoilerBlock_ = $BoilerBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/impl/$RequirementHolder" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $RequirementHolder {

 "test"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
 "test"(arg0: $ItemStack$Type, arg1: $Entity$Type): boolean
 "test"(arg0: $Entity$Type): boolean
 "test"(arg0: $ItemStack$Type): boolean
}

export namespace $RequirementHolder {
function filterValid<T>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type, arg2: $Entity$Type): $List<(T)>
function filterValid<T>(arg0: $List$Type<(T)>, arg1: $ItemStack$Type): $List<(T)>
function filterValid<T>(arg0: $List$Type<(T)>, arg1: $Entity$Type): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequirementHolder$Type = ($RequirementHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequirementHolder_ = $RequirementHolder$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/placement/$Matcher" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Matcher extends $Enum<($Matcher)> implements $StringRepresentable {
static readonly "IGNORE": $Matcher
static readonly "SAME_CLASS": $Matcher
static readonly "SUBCLASS": $Matcher
static readonly "EQUALS": $Matcher


public static "values"(): ($Matcher)[]
public static "valueOf"(arg0: string): $Matcher
public "check"(arg0: $TempModifier$Type, arg1: $TempModifier$Type): boolean
public "getSerializedName"(): string
public static "byName"(arg0: string): $Matcher
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matcher$Type = (("equals") | ("subclass") | ("ignore") | ("same_class")) | ($Matcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matcher_ = $Matcher$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$NbtRequirement" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $NbtRequirement extends $Record {
static readonly "CODEC": $Codec<($NbtRequirement)>
static readonly "NONE": $NbtRequirement

constructor()
constructor(tag: $CompoundTag$Type)

public "tag"(): $CompoundTag
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $CompoundTag$Type): boolean
public "test"(arg0: $Entity$Type): boolean
public "test"(arg0: $ItemStack$Type): boolean
public "isEmpty"(): boolean
public static "compareNbt"(arg0: $Tag$Type, arg1: $Tag$Type): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtRequirement$Type = ($NbtRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtRequirement_ = $NbtRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$BlockTempBuilderJS$Function" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $BlockTempBuilderJS$Function {

 "getTemperature"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: double): double

(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: double): double
}

export namespace $BlockTempBuilderJS$Function {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTempBuilderJS$Function$Type = ($BlockTempBuilderJS$Function);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTempBuilderJS$Function_ = $BlockTempBuilderJS$Function$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/$RegistryHolder" {
import {$ConfigData, $ConfigData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/impl/$ConfigData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $RegistryHolder<V extends $ConfigData> extends $Record {

constructor(key: $ResourceKey$Type<($Registry$Type<(V)>)>, codec: $Codec$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(V)>)>
public "codec"(): $Codec<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryHolder$Type<V> = ($RegistryHolder<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryHolder_<V> = $RegistryHolder$Type<(V)>;
}}
declare module "packages/com/momosoftworks/coldsweat/common/effect/$FrigidnessEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FrigidnessEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrigidnessEffect$Type = ($FrigidnessEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrigidnessEffect_ = $FrigidnessEffect$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/core/init/$DefaultTempModifiersEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Placement, $Placement$Type} from "packages/com/momosoftworks/coldsweat/api/util/placement/$Placement"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TempModifier, $TempModifier$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DefaultTempModifiersEvent extends $Event {

constructor(arg0: $LivingEntity$Type)
constructor()

public "getModifiers"(): $Map<($Temperature$Trait), ($List<($TempModifier)>)>
public "getModifiers"(arg0: $Temperature$Trait$Type): $List<($TempModifier)>
public "getEntity"(): $LivingEntity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "addModifier"(arg0: $Temperature$Trait$Type, arg1: $TempModifier$Type): void
public "addModifier"(arg0: $List$Type<($Temperature$Trait$Type)>, arg1: $TempModifier$Type, arg2: $Placement$Type): void
public "addModifier"(arg0: $Temperature$Trait$Type, arg1: $TempModifier$Type, arg2: $Placement$Type): void
public "addModifiers"(arg0: $Temperature$Trait$Type, arg1: $List$Type<($TempModifier$Type)>): void
public "addModifiers"(arg0: $Temperature$Trait$Type, arg1: $List$Type<($TempModifier$Type)>, arg2: $Placement$Type): void
public "addModifierById"(arg0: $Temperature$Trait$Type, arg1: $ResourceLocation$Type, arg2: $Consumer$Type<($TempModifier$Type)>, arg3: $Placement$Type): void
public "addModifierById"(arg0: $List$Type<($Temperature$Trait$Type)>, arg1: $ResourceLocation$Type, arg2: $Consumer$Type<($TempModifier$Type)>, arg3: $Placement$Type): void
public "removeModifiers"(arg0: $Temperature$Trait$Type, arg1: $Predicate$Type<($TempModifier$Type)>): void
public "hasResult"(): boolean
get "modifiers"(): $Map<($Temperature$Trait), ($List<($TempModifier)>)>
get "entity"(): $LivingEntity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultTempModifiersEvent$Type = ($DefaultTempModifiersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultTempModifiersEvent_ = $DefaultTempModifiersEvent$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/util/placement/$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Mode extends $Enum<($Mode)> implements $StringRepresentable {
static readonly "ADD_BEFORE": $Mode
static readonly "ADD_AFTER": $Mode
static readonly "REPLACE": $Mode


public static "values"(): ($Mode)[]
public static "valueOf"(arg0: string): $Mode
public "getSerializedName"(): string
public static "byName"(arg0: string): $Mode
public "isAdding"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "adding"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mode$Type = (("add_before") | ("add_after") | ("replace")) | ($Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mode_ = $Mode$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/block/$SmokestackBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$SmokestackBlock$Facing, $SmokestackBlock$Facing$Type} from "packages/com/momosoftworks/coldsweat/common/block/$SmokestackBlock$Facing"

export class $SmokestackBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "FACING": $EnumProperty<($SmokestackBlock$Facing)>
static readonly "END": $BooleanProperty
static readonly "BASE": $BooleanProperty
static readonly "ENCASED": $BooleanProperty
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

public static "getProperties"(): $BlockBehaviour$Properties
public static "getItemProperties"(): $Item$Properties
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "properties"(): $BlockBehaviour$Properties
get "itemProperties"(): $Item$Properties
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokestackBlock$Type = ($SmokestackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokestackBlock_ = $SmokestackBlock$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TempModifier {

constructor()

public "tick"(arg0: $LivingEntity$Type): void
public "expires"<T extends $TempModifier>(arg0: integer): T
public "getID"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "update"(arg0: double, arg1: $LivingEntity$Type, arg2: $Temperature$Trait$Type): double
public "apply"(arg0: $Temperature$Trait$Type, arg1: double): double
public "getFunction"(arg0: $Temperature$Trait$Type): $Function<(double), (double)>
public "isDirty"(): boolean
public "setTicksExisted"(arg0: integer): integer
public "getLastInput"(arg0: $Temperature$Trait$Type): double
public "onSiblingRemoved"(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type, arg2: $TempModifier$Type): void
public "onSiblingAdded"(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type, arg2: $TempModifier$Type): void
public "getTickRate"(): integer
public "getTicksExisted"(): integer
public "getExpireTime"(): integer
public "getLastOutput"(arg0: $Temperature$Trait$Type): double
public "onAdded"(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type): void
public "getNBT"(): $CompoundTag
public "markDirty"(): void
public "tickRate"<T extends $TempModifier>(arg0: integer): T
public "onRemoved"(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type): void
public "setNBT"(arg0: $CompoundTag$Type): void
public "markClean"(): void
get "iD"(): $ResourceLocation
get "dirty"(): boolean
set "ticksExisted"(value: integer)
get "ticksExisted"(): integer
get "expireTime"(): integer
get "nBT"(): $CompoundTag
set "nBT"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifier$Type = ($TempModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifier_ = $TempModifier$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EffectsRequirement$Instance" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $EffectsRequirement$Instance extends $Record {
static readonly "CODEC": $Codec<($EffectsRequirement$Instance)>

constructor(amplifier: $IntegerBounds$Type, duration: $IntegerBounds$Type, ambient: $Optional$Type<(boolean)>, visible: $Optional$Type<(boolean)>)

public "duration"(): $IntegerBounds
public "visible"(): $Optional<(boolean)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "ambient"(): $Optional<(boolean)>
public "amplifier"(): $IntegerBounds
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsRequirement$Instance$Type = ($EffectsRequirement$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectsRequirement$Instance_ = $EffectsRequirement$Instance$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/world/$WorldHelper" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DummyEntity, $DummyEntity$Type} from "packages/com/momosoftworks/coldsweat/util/entity/$DummyEntity"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LevelChunkSection, $LevelChunkSection$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$DummyPlayer, $DummyPlayer$Type} from "packages/com/momosoftworks/coldsweat/util/entity/$DummyPlayer"
import {$ServerStoppedEvent, $ServerStoppedEvent$Type} from "packages/net/minecraftforge/event/server/$ServerStoppedEvent"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WorldHelper$TempSnapshot, $WorldHelper$TempSnapshot$Type} from "packages/com/momosoftworks/coldsweat/util/world/$WorldHelper$TempSnapshot"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldHelper {

constructor()

public static "getHeight"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Heightmap$Types$Type): integer
public static "getHeight"(arg0: $BlockPos$Type, arg1: $Level$Type): integer
public static "getTemperatureAt"(arg0: $Level$Type, arg1: $BlockPos$Type): double
public static "getBiomeTemperature"(arg0: $LevelAccessor$Type, arg1: $Holder$Type<($Biome$Type)>): double
public static "playEntitySound"(arg0: $SoundEvent$Type, arg1: $Entity$Type, arg2: $SoundSource$Type, arg3: float, arg4: float): void
public static "getRoughTemperatureAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): double
public static "getRoughTemperatureAt"(arg0: $Level$Type, arg1: $BlockPos$Type): double
public static "spawnParticleBatch"(arg0: $Level$Type, arg1: $ParticleOptions$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double): void
public static "shouldFreeze"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean): boolean
public static "nextToSoulFire"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public static "getStructureAt"(arg0: $Level$Type, arg1: $BlockPos$Type): $Optional<($Holder<($Structure)>)>
public static "getServerLevel"(arg0: $Level$Type): $ServerLevel
public static "spawnParticle"(arg0: $Level$Type, arg1: $ParticleOptions$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public static "getServer"(): $MinecraftServer
public static "surroundedByFluid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Fluid$Type): boolean
public static "surroundedByBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Block$Type): boolean
public static "allAdjacentBlocksMatch"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockPos$Type)>): boolean
public static "getBlockTemperature"(arg0: $Level$Type, arg1: $BlockState$Type): double
public "getDummyPlayers"(): $Map<($ResourceKey<($Level)>), ($DummyPlayer)>
public static "getDummyPlayer"(arg0: $Level$Type): $DummyPlayer
public "getDummyEntities"(): $Map<($ResourceKey<($Level)>), ($DummyEntity)>
public "getWorldTempCache"(): $Map<($ResourceKey<($Level)>), ($Map<($BlockPos), ($WorldHelper$TempSnapshot)>)>
public static "getInsulationAt"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): $Pair<(integer), (integer)>
public static "getDummyEntity"(arg0: $Level$Type): $DummyEntity
public static "entityDropItem"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: integer): $ItemEntity
public static "entityDropItem"(arg0: $Entity$Type, arg1: $ItemStack$Type): $ItemEntity
public static "getClosestPointOnEntity"(arg0: $LivingEntity$Type, arg1: $Vec3$Type): $Vec3
public static "getTimeMultiplier"(arg0: $LevelAccessor$Type): double
public static "syncEntityForgeData"(arg0: $Entity$Type, arg1: $ServerPlayer$Type): void
public static "syncBlockEntityData"(arg0: $BlockEntity$Type): void
public static "getBiomeTemperatureRange"(arg0: $RegistryAccess$Type, arg1: $Holder$Type<($Biome$Type)>): $Pair<(double), (double)>
public static "getBiomeTemperatureRange"(arg0: $LevelAccessor$Type, arg1: $Holder$Type<($Biome$Type)>): $Pair<(double), (double)>
public static "getWaterTemperatureAt"(arg0: $Level$Type, arg1: $BlockPos$Type): double
public static "raycastEntity"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Level$Type, arg3: $Predicate$Type<($Entity$Type)>): $Entity
public static "isRainingAt"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "forBlocksInRay"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Level$Type, arg3: $BiConsumer$Type<($BlockState$Type), ($BlockPos$Type)>, arg4: integer): void
public static "forBlocksInRay"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $Level$Type, arg3: $ChunkAccess$Type, arg4: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg5: $BiConsumer$Type<($BlockState$Type), ($BlockPos$Type)>, arg6: integer): void
public static "getOccupiedPositions"(arg0: $AABB$Type): $List<($BlockPos)>
public static "clearCachesOnUnload"(arg0: $ServerStoppedEvent$Type): void
public static "getAverageHeight"(arg0: $BlockPos$Type, arg1: $Level$Type, ...arg2: ($Heightmap$Types$Type)[]): integer
public static "getPositionGrid"(arg0: $BlockPos$Type, arg1: integer, arg2: integer): $List<($BlockPos)>
public static "getPositionCube"(arg0: $BlockPos$Type, arg1: integer, arg2: integer): $List<($BlockPos)>
public static "isSpreadBlocked"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $Direction$Type): boolean
public static "getChunkSection"(arg0: $ChunkAccess$Type, arg1: integer): $LevelChunkSection
public static "shouldMelt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean): boolean
public static "dropItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: integer): $ItemEntity
public static "dropItem"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $ItemEntity
public static "getChunk"(arg0: $LevelAccessor$Type, arg1: $ChunkPos$Type): $ChunkAccess
public static "getChunk"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $ChunkAccess
public static "getChunk"(arg0: $LevelAccessor$Type, arg1: integer, arg2: integer): $ChunkAccess
public static "waterlog"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockState
public static "isInWater"(arg0: $Entity$Type): boolean
public static "canSeeSky"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): boolean
public static "isFullSide"(arg0: $VoxelShape$Type, arg1: $Direction$Type): boolean
get "server"(): $MinecraftServer
get "dummyPlayers"(): $Map<($ResourceKey<($Level)>), ($DummyPlayer)>
get "dummyEntities"(): $Map<($ResourceKey<($Level)>), ($DummyEntity)>
get "worldTempCache"(): $Map<($ResourceKey<($Level)>), ($Map<($BlockPos), ($WorldHelper$TempSnapshot)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldHelper$Type = ($WorldHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldHelper_ = $WorldHelper$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$SoulSproutItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoulSproutItem extends $ItemNameBlockItem {
static readonly "DISPENSE_BEHAVIOR": $DispenseItemBehavior
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

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulSproutItem$Type = ($SoulSproutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulSproutItem_ = $SoulSproutItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument$Info$Template" {
import {$TemperatureTraitArgument, $TemperatureTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TemperatureTraitArgument$Info, $TemperatureTraitArgument$Info$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument$Info"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TemperatureTraitArgument$Info$Template implements $ArgumentTypeInfo$Template<($TemperatureTraitArgument)> {

constructor(arg0: $TemperatureTraitArgument$Info$Type, arg1: boolean)

public "instantiate"(arg0: $CommandBuildContext$Type): $TemperatureTraitArgument
public "type"(): $ArgumentTypeInfo<($TemperatureTraitArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureTraitArgument$Info$Template$Type = ($TemperatureTraitArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureTraitArgument$Info$Template_ = $TemperatureTraitArgument$Info$Template$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TempModifierArgument, $TempModifierArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument"
import {$TempModifierArgument$Info$Template, $TempModifierArgument$Info$Template$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument$Info$Template"

export class $TempModifierArgument$Info implements $ArgumentTypeInfo<($TempModifierArgument), ($TempModifierArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(arg0: $TempModifierArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TempModifierArgument$Info$Template
public "serializeToJson"(arg0: $TempModifierArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $TempModifierArgument$Type): $TempModifierArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierArgument$Info$Type = ($TempModifierArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierArgument$Info_ = $TempModifierArgument$Info$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/util/entity/$DummyPlayer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$FoodData, $FoodData$Type} from "packages/net/minecraft/world/food/$FoodData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PlayerEnderChestContainer, $PlayerEnderChestContainer$Type} from "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InventoryMenu, $InventoryMenu$Type} from "packages/net/minecraft/world/inventory/$InventoryMenu"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $DummyPlayer extends $Player {
static readonly "PERSISTED_NBT_TAG": string
static readonly "MAX_NAME_LENGTH": integer
static readonly "MAX_HEALTH": integer
static readonly "SLEEP_DURATION": integer
static readonly "WAKE_UP_DURATION": integer
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "CROUCH_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
static readonly "DATA_PLAYER_MAIN_HAND": $EntityDataAccessor<(byte)>
static readonly "DATA_SHOULDER_LEFT": $EntityDataAccessor<($CompoundTag)>
static readonly "DATA_SHOULDER_RIGHT": $EntityDataAccessor<($CompoundTag)>
 "enderChestInventory": $PlayerEnderChestContainer
 "inventoryMenu": $InventoryMenu
 "containerMenu": $AbstractContainerMenu
 "foodData": $FoodData
 "jumpTriggerTime": integer
 "oBob": float
 "bob": float
 "takeXpDelay": integer
 "xCloakO": double
 "yCloakO": double
 "zCloakO": double
 "xCloak": double
 "yCloak": double
 "zCloak": double
 "wasUnderwater": boolean
 "experienceLevel": integer
 "totalExperience": integer
 "experienceProgress": float
 "enchantmentSeed": integer
readonly "defaultFlySpeed": float
 "fishing": $FishingHook
 "hurtDir": float
 "sodiumdynamiclights$luminance": integer
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "noActionTime": integer
 "oRun": float
 "run": float
 "animStep": float
 "animStepO": float
 "rotOffs": float
 "deathScore": integer
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lerpSteps": integer
 "lerpX": double
 "lerpY": double
 "lerpZ": double
 "lerpYRot": double
 "lerpXRot": double
 "lyHeadRot": double
 "lerpHeadSteps": integer
 "useItem": $ItemStack
 "useItemRemaining": integer
 "fallFlyTicks": integer
 "lastPos": $BlockPos
 "autoSpinAttackTicks": integer
 "brain": $Brain<(any)>
 "self": $LivingEntity
 "supp$slimedTicks": integer
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

constructor(arg0: $Level$Type)

public "isSpectator"(): boolean
public "isCreative"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
public "etf$getEntityKey"(): string
public "etf$getWorld"(): $Level
public "etf$getBlockPos"(): $BlockPos
public "etf$getType"(): $EntityType<(any)>
public "etf$getUuid"(): $UUID
public "etf$getOptifineId"(): integer
public "etf$getBlockY"(): integer
public "etf$hasCustomName"(): boolean
public "etf$getCustomName"(): $Component
public "etf$getScoreboardTeam"(): $Team
public "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
public "etf$getHandItems"(): $Iterable<($ItemStack)>
public "etf$getArmorItems"(): $Iterable<($ItemStack)>
public "etf$distanceTo"(arg0: $Entity$Type): float
public "etf$getVelocity"(): $Vec3
/**
 * 
 * @deprecated
 */
public "etf$getPose"(): $Pose
public "etf$canBeBright"(): boolean
public "etf$isBlockEntity"(): boolean
public "etf$getNbt"(): $CompoundTag
public static "getAlpha"(le: $LivingEntity$Type, partialTicks: float): float
public static "tickEntity"(entity: $LivingEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "spectator"(): boolean
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyPlayer$Type = ($DummyPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyPlayer_ = $DummyPlayer$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument$Info$Template" {
import {$TempModifierArgument$Info, $TempModifierArgument$Info$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument$Info"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$TempModifierArgument, $TempModifierArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TempModifierArgument"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $TempModifierArgument$Info$Template implements $ArgumentTypeInfo$Template<($TempModifierArgument)> {

constructor(arg0: $TempModifierArgument$Info$Type)

public "instantiate"(arg0: $CommandBuildContext$Type): $TempModifierArgument
public "type"(): $ArgumentTypeInfo<($TempModifierArgument), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierArgument$Info$Template$Type = ($TempModifierArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierArgument$Info$Template_ = $TempModifierArgument$Info$Template$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TemperatureTraitArgument, $TemperatureTraitArgument$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$TemperatureTraitArgument$Info$Template, $TemperatureTraitArgument$Info$Template$Type} from "packages/com/momosoftworks/coldsweat/common/command/argument/$TemperatureTraitArgument$Info$Template"

export class $TemperatureTraitArgument$Info implements $ArgumentTypeInfo<($TemperatureTraitArgument), ($TemperatureTraitArgument$Info$Template)> {

constructor()

public "serializeToNetwork"(arg0: $TemperatureTraitArgument$Info$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $TemperatureTraitArgument$Info$Template
public "serializeToJson"(arg0: $TemperatureTraitArgument$Info$Template$Type, arg1: $JsonObject$Type): void
public "unpack"(arg0: $TemperatureTraitArgument$Type): $TemperatureTraitArgument$Info$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureTraitArgument$Info$Type = ($TemperatureTraitArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureTraitArgument$Info_ = $TemperatureTraitArgument$Info$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/api/event/common/temperautre/$TemperatureChangedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TemperatureChangedEvent extends $Event {

constructor(arg0: $LivingEntity$Type, arg1: $Temperature$Trait$Type, arg2: double, arg3: double)
constructor()

public "getEntity"(): $LivingEntity
public "setTemperature"(arg0: double): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getTemperature"(): double
public "getOldTemperature"(): double
public "hasResult"(): boolean
public "getTrait"(): $Temperature$Trait
get "entity"(): $LivingEntity
set "temperature"(value: double)
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "temperature"(): double
get "oldTemperature"(): double
get "trait"(): $Temperature$Trait
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureChangedEvent$Type = ($TemperatureChangedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureChangedEvent_ = $TemperatureChangedEvent$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/util/$TempModifierDataJS" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TempModifierDataJS extends $Record {

constructor(entity: $LivingEntity$Type, trait: $Temperature$Trait$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entity"(): $LivingEntity
public "trait"(): $Temperature$Trait
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempModifierDataJS$Type = ($TempModifierDataJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempModifierDataJS_ = $TempModifierDataJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$BlockTempBuilderJS" {
import {$BlockTempBuilderJS$Function, $BlockTempBuilderJS$Function$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$BlockTempBuilderJS$Function"
import {$BlockTemp, $BlockTemp$Type} from "packages/com/momosoftworks/coldsweat/api/temperature/block_temp/$BlockTemp"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Temperature$Units, $Temperature$Units$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Units"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTempBuilderJS {
readonly "blocks": $Set<($Block)>
 "maxEffect": double
 "maxTemperature": double
 "minTemperature": double
 "range": double
 "fade": boolean
 "units": $Temperature$Units
 "logarithmic": boolean
 "state": $Map<(string), (any)>
 "predicate": $Predicate<($BlockContainerJS)>

constructor()

public "build"(arg0: $BlockTempBuilderJS$Function$Type): $BlockTemp
public "units"(arg0: $Temperature$Units$Type): $BlockTempBuilderJS
public "range"(arg0: double): $BlockTempBuilderJS
public "state"(arg0: string, arg1: any): $BlockTempBuilderJS
public "blocks"(...arg0: (string)[]): $BlockTempBuilderJS
public "maxTemperature"(arg0: double): $BlockTempBuilderJS
public "minTemperature"(arg0: double): $BlockTempBuilderJS
public "logarithmic"(arg0: boolean): $BlockTempBuilderJS
public "blockPredicate"(arg0: $Predicate$Type<($BlockContainerJS$Type)>): $BlockTempBuilderJS
public "maxEffect"(arg0: double): $BlockTempBuilderJS
public "fades"(arg0: boolean): $BlockTempBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTempBuilderJS$Type = ($BlockTempBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTempBuilderJS_ = $BlockTempBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$HoglinArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HoglinArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoglinArmorItem$Type = ($HoglinArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoglinArmorItem_ = $HoglinArmorItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/effect/$IceResistanceEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $IceResistanceEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceResistanceEffect$Type = ($IceResistanceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IceResistanceEffect_ = $IceResistanceEffect$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$SlushFluid, $SlushFluid$Type} from "packages/com/momosoftworks/coldsweat/common/fluid/$SlushFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $SlushFluid$Source extends $SlushFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public static "of"(arg0: $FluidState$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlushFluid$Source$Type = ($SlushFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlushFluid$Source_ = $SlushFluid$Source$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/$ModRegistriesEventJS" {
import {$BlockTempBuilderJS$Function, $BlockTempBuilderJS$Function$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$BlockTempBuilderJS$Function"
import {$ItemTempBuilderJS, $ItemTempBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$ItemTempBuilderJS"
import {$InsulatorBuilderJS, $InsulatorBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$InsulatorBuilderJS"
import {$FuelBuilderJS, $FuelBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$FuelBuilderJS"
import {$InsulatingMountBuilderJS, $InsulatingMountBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$InsulatingMountBuilderJS"
import {$BlockTempBuilderJS, $BlockTempBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$BlockTempBuilderJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StartupEventJS, $StartupEventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$StartupEventJS"
import {$TempModifierDataJS, $TempModifierDataJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/util/$TempModifierDataJS"
import {$LoadRegistriesEvent$Pre, $LoadRegistriesEvent$Pre$Type} from "packages/com/momosoftworks/coldsweat/api/event/core/registry/$LoadRegistriesEvent$Pre"
import {$FoodBuilderJS, $FoodBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$FoodBuilderJS"
import {$DryingItemBuilderJS, $DryingItemBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$DryingItemBuilderJS"
import {$EntityClimateBuilderJS, $EntityClimateBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$EntityClimateBuilderJS"
import {$SpawnBiomeBuilderJS, $SpawnBiomeBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$SpawnBiomeBuilderJS"
import {$EntityTempBuilderJS, $EntityTempBuilderJS$Type} from "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$EntityTempBuilderJS"

export class $ModRegistriesEventJS extends $StartupEventJS {

constructor(arg0: $LoadRegistriesEvent$Pre$Type)

public "addBlockTemperature"(arg0: $Consumer$Type<($BlockTempBuilderJS$Type)>, arg1: $BlockTempBuilderJS$Function$Type): void
public "addBlockTemperature"(arg0: double, arg1: string, arg2: $Consumer$Type<($BlockTempBuilderJS$Type)>): void
public "addInsulator"(arg0: $Consumer$Type<($InsulatorBuilderJS$Type)>): void
public "addFoodTemperature"(arg0: $Consumer$Type<($FoodBuilderJS$Type)>): void
public "addHearthFuel"(arg0: $Consumer$Type<($FuelBuilderJS$Type)>): void
public "addBoilerFuel"(arg0: $Consumer$Type<($FuelBuilderJS$Type)>): void
public "addIceboxFuel"(arg0: $Consumer$Type<($FuelBuilderJS$Type)>): void
public "addSoulspringLampFuel"(arg0: $Consumer$Type<($FuelBuilderJS$Type)>): void
public "addItemTemperature"(arg0: $Consumer$Type<($ItemTempBuilderJS$Type)>): void
public "addDryingItem"(arg0: $Consumer$Type<($DryingItemBuilderJS$Type)>): void
public "addBiomeTemperature"(arg0: double, arg1: double, arg2: string, ...arg3: (string)[]): void
public "addBiomeTemperature"(arg0: double, arg1: double, arg2: string, arg3: (string)[], arg4: double): void
public "addBiomeOffset"(arg0: double, arg1: double, arg2: string, ...arg3: (string)[]): void
public "addBiomeOffset"(arg0: double, arg1: double, arg2: string, arg3: (string)[], arg4: double): void
public "addDimensionTemperature"(arg0: double, arg1: string, ...arg2: (string)[]): void
public "addDimensionTemperature"(arg0: double, arg1: double, arg2: string, ...arg3: (string)[]): void
public "addDimensionOffset"(arg0: double, arg1: string, ...arg2: (string)[]): void
public "addDimensionOffset"(arg0: double, arg1: double, arg2: string, ...arg3: (string)[]): void
public "addStructureTemperature"(arg0: double, ...arg1: (string)[]): void
public "addStructureTemperature"(arg0: double, arg1: string, ...arg2: (string)[]): void
public "addStructureOffset"(arg0: double, ...arg1: (string)[]): void
public "addStructureOffset"(arg0: double, arg1: string, ...arg2: (string)[]): void
public "addEntityTemperature"(arg0: $Consumer$Type<($EntityTempBuilderJS$Type)>): void
public "addEntityClimate"(arg0: $Consumer$Type<($EntityClimateBuilderJS$Type)>): void
public "addInsulatingMount"(arg0: $Consumer$Type<($InsulatingMountBuilderJS$Type)>): void
public "addSpawnBiomes"(arg0: $Consumer$Type<($SpawnBiomeBuilderJS$Type)>): void
public "addTempModifier"(arg0: string, arg1: $Function$Type<($TempModifierDataJS$Type), ($Function$Type<(double), (double)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModRegistriesEventJS$Type = ($ModRegistriesEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModRegistriesEventJS_ = $ModRegistriesEventJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$BlockRequirement" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NbtRequirement, $NbtRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$NbtRequirement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockRequirement$StateRequirement, $BlockRequirement$StateRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$BlockRequirement$StateRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockRequirement extends $Record {
static readonly "NONE": $BlockRequirement
static readonly "CODEC": $Codec<($BlockRequirement)>

constructor(arg0: $List$Type<($Either$Type<($TagKey$Type<($Block$Type)>), ($Block$Type)>)>)
constructor(blocks: $NegatableList$Type<($Either$Type<($TagKey$Type<($Block$Type)>), ($Block$Type)>)>, state: $BlockRequirement$StateRequirement$Type, nbt: $NbtRequirement$Type, sturdyFaces: $List$Type<($Direction$Type)>, replaceable: $Optional$Type<(boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "test"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "state"(): $BlockRequirement$StateRequirement
public "blocks"(): $NegatableList<($Either<($TagKey<($Block)>), ($Block)>)>
public "sturdyFaces"(): $List<($Direction)>
public "replaceable"(): $Optional<(boolean)>
public "nbt"(): $NbtRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRequirement$Type = ($BlockRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRequirement_ = $BlockRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$BlockRequirement$StateRequirement" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $BlockRequirement$StateRequirement extends $Record {
static readonly "CODEC": $Codec<($BlockRequirement$StateRequirement)>
static readonly "NONE": $BlockRequirement$StateRequirement

constructor(properties: $Map$Type<(string), (any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $FluidState$Type): boolean
public "test"<S extends $StateHolder<(any), (S)>>(arg0: $StateDefinition$Type<(any), (S)>, arg1: S): boolean
public "test"(arg0: $BlockState$Type): boolean
public "properties"(): $Map<(string), (any)>
public static "fromToml"(arg0: $List$Type<(string)>, arg1: $Block$Type): $BlockRequirement$StateRequirement
public static "fromToml"(arg0: (string)[], arg1: $Block$Type): $BlockRequirement$StateRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRequirement$StateRequirement$Type = ($BlockRequirement$StateRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRequirement$StateRequirement_ = $BlockRequirement$StateRequirement$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/compat/kubejs/event/builder/$ItemTempBuilderJS" {
import {$IntegerBounds, $IntegerBounds$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$IntegerBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Temperature$Trait, $Temperature$Trait$Type} from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemTempData$SlotType, $ItemTempData$SlotType$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$ItemTempData$SlotType"
import {$AttributeModifierMap, $AttributeModifierMap$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$AttributeModifierMap"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ItemTempData, $ItemTempData$Type} from "packages/com/momosoftworks/coldsweat/data/codec/configuration/$ItemTempData"
import {$EntityRequirement, $EntityRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$EntityRequirement"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$ItemRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ItemTempBuilderJS {
readonly "slots": $Set<($Either<($IntegerBounds), ($ItemTempData$SlotType)>)>
 "temperature": double
 "maxEffect": double
 "maxTemp": double
 "minTemp": double
 "trait": $Temperature$Trait
 "itemPredicate": $NegatableList<($ItemRequirement)>
 "entityPredicate": $NegatableList<($EntityRequirement)>
 "attributes": $AttributeModifierMap
 "immuneTempModifiers": $Map<($ResourceLocation), (double)>

constructor()

public "build"(): $ItemTempData
public "attribute"(arg0: string, arg1: double, arg2: string): $ItemTempBuilderJS
public "items"(...arg0: (string)[]): $ItemTempBuilderJS
public "slots"(...arg0: (integer)[]): $ItemTempBuilderJS
public "itemPredicate"(arg0: $Predicate$Type<($ItemStack$Type)>): $ItemTempBuilderJS
public "temperature"(arg0: double): $ItemTempBuilderJS
public "equipmentSlots"(...arg0: (string)[]): $ItemTempBuilderJS
public "entityPredicate"(arg0: $Predicate$Type<($Entity$Type)>): $ItemTempBuilderJS
public "slotsInRange"(arg0: integer, arg1: integer): $ItemTempBuilderJS
public "immuneToModifier"(arg0: string, arg1: double): $ItemTempBuilderJS
public "trait"(arg0: string): $ItemTempBuilderJS
public "minTemp"(arg0: double): $ItemTempBuilderJS
public "maxTemp"(arg0: double): $ItemTempBuilderJS
public "maxEffect"(arg0: double): $ItemTempBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTempBuilderJS$Type = ($ItemTempBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTempBuilderJS_ = $ItemTempBuilderJS$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/common/item/$MinecartInsulationItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinecartInsulationItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartInsulationItem$Type = ($MinecartInsulationItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartInsulationItem_ = $MinecartInsulationItem$Type;
}}
declare module "packages/com/momosoftworks/coldsweat/data/codec/requirement/$FluidRequirement" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockRequirement$StateRequirement, $BlockRequirement$StateRequirement$Type} from "packages/com/momosoftworks/coldsweat/data/codec/requirement/$BlockRequirement$StateRequirement"
import {$NegatableList, $NegatableList$Type} from "packages/com/momosoftworks/coldsweat/data/codec/util/$NegatableList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidRequirement extends $Record {
static readonly "NONE": $FluidRequirement
static readonly "CODEC": $Codec<($FluidRequirement)>

constructor(fluids: $NegatableList$Type<($Either$Type<($TagKey$Type<($Fluid$Type)>), ($Fluid$Type)>)>, state: $BlockRequirement$StateRequirement$Type, isSource: $Optional$Type<(boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "test"(arg0: $FluidState$Type): boolean
public "state"(): $BlockRequirement$StateRequirement
public "fluids"(): $NegatableList<($Either<($TagKey<($Fluid)>), ($Fluid)>)>
public "isSource"(): $Optional<(boolean)>
get "source"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRequirement$Type = ($FluidRequirement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRequirement_ = $FluidRequirement$Type;
}}

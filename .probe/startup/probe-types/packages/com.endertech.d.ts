declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ServerCommand$Task, $ServerCommand$Task$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task"
import {$ServerCommand$OpLevel, $ServerCommand$OpLevel$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CommandDispatcher, $CommandDispatcher$Type} from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $ServerCommand {

constructor(arg0: string, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>)

public "register"(): void
public static "create"(arg0: $AbstractForgeMod$Type, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>): $ServerCommand
public "task"(arg0: string): $ServerCommand$Task
public "requires"(arg0: $ServerCommand$OpLevel$Type): $ServerCommand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Type = ($ServerCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand_ = $ServerCommand$Type;
}}
declare module "packages/com/endertech/common/$Ordered" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $Ordered<T> extends $Comparable<(T)> {

 "isLessOrEqualTo"(arg0: T): boolean
 "isGreaterThan"(arg0: T): boolean
 "isGreaterOrEqualTo"(arg0: T): boolean
 "isLessThan"(arg0: T): boolean
 "compareTo"(arg0: T): integer

(arg0: T, arg1: T): T
}

export namespace $Ordered {
function min<T>(arg0: T, arg1: T): T
function max<T>(arg0: T, arg1: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ordered$Type<T> = ($Ordered<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ordered_<T> = $Ordered$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$AbstractGenerator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $AbstractGenerator extends $Feature<($NoneFeatureConfiguration)> implements $BiomeModifier {
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

constructor(arg0: $AbstractForgeMod$Type)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGenerator$Type = ($AbstractGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGenerator_ = $AbstractGenerator$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage$Grade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Percentage$Grade extends $Enum<($Percentage$Grade)> {
static readonly "LOW": $Percentage$Grade
static readonly "MEDIUM": $Percentage$Grade
static readonly "HIGH": $Percentage$Grade
readonly "threshold": float
readonly "textColor": $ChatFormatting
readonly "mapColor": $MapColor


public static "values"(): ($Percentage$Grade)[]
public static "valueOf"(arg0: string): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Grade$Type = (("high") | ("low") | ("medium")) | ($Percentage$Grade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage$Grade_ = $Percentage$Grade$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractForgeMod$RequiredSide extends $Enum<($AbstractForgeMod$RequiredSide)> {
static readonly "SERVER": $AbstractForgeMod$RequiredSide
static readonly "CLIENT": $AbstractForgeMod$RequiredSide
static readonly "BOTH": $AbstractForgeMod$RequiredSide


public static "values"(): ($AbstractForgeMod$RequiredSide)[]
public static "valueOf"(arg0: string): $AbstractForgeMod$RequiredSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$RequiredSide$Type = (("server") | ("client") | ("both")) | ($AbstractForgeMod$RequiredSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$RequiredSide_ = $AbstractForgeMod$RequiredSide$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Stamp" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Date, $Date$Type} from "packages/java/util/$Date"

export class $CommonTime$Stamp implements $Comparable<($CommonTime$Stamp)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Stamp$Type): integer
public static "at"(arg0: $Date$Type): $CommonTime$Stamp
public static "now"(): $CommonTime$Stamp
public "distanceTo"(arg0: $CommonTime$Stamp$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Stamp$Type = ($CommonTime$Stamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Stamp_ = $CommonTime$Stamp$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Altitude" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"

export class $Deposit$Altitude extends $IntBounds {
static readonly "BOUNDS": $IntBounds
static readonly "ZERO": $Deposit$Altitude
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)

public static "from"(arg0: $IntBounds$Type): $Deposit$Altitude
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$Altitude$Type = ($Deposit$Altitude);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit$Altitude_ = $Deposit$Altitude$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$ColorARGB$Channel, $ColorARGB$Channel$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColorARGB {
static readonly "MAX_BYTE_VALUE": integer
static readonly "DEFAULT": $ColorARGB
static readonly "HEX_FORMAT": string
static readonly "DESCRIPTION_COMMON": string
static readonly "DESCRIPTION_FOR_SMOKE": string


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "blend"(arg0: $Map$Type<($ColorARGB$Type), (integer)>): $ColorARGB
public static "from"(arg0: string): $ColorARGB
public static "from"(arg0: integer): $ColorARGB
public static "from"(arg0: $Color$Type): $ColorARGB
public "isOpaque"(): boolean
public static "parse"(arg0: string): $ColorARGB
public "isCompletelyTransparent"(): boolean
public "getAlpha"(): $ColorARGB$Channel
public "getARGB"(): integer
public "getHexARGB"(): string
public "getRed"(): $ColorARGB$Channel
public "getGreen"(): $ColorARGB$Channel
public "getBlue"(): $ColorARGB$Channel
public "withAlpha"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "maxOpaque"(): $ColorARGB
public "approxTo"(arg0: $ColorARGB$Type, arg1: float): $ColorARGB
public "withRed"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withGreen"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withBlue"(arg0: $ColorARGB$Channel$Type): $ColorARGB
get "opaque"(): boolean
get "completelyTransparent"(): boolean
get "alpha"(): $ColorARGB$Channel
get "aRGB"(): integer
get "hexARGB"(): string
get "red"(): $ColorARGB$Channel
get "green"(): $ColorARGB$Channel
get "blue"(): $ColorARGB$Channel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Type = ($ColorARGB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB_ = $ColorARGB$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ConfigCategory" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CommonString$Joiner, $CommonString$Joiner$Type} from "packages/com/endertech/common/$CommonString$Joiner"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigCategory implements $Map<(string), ($Property)> {
readonly "parent": $ConfigCategory

constructor(arg0: string, arg1: $ConfigCategory$Type)
constructor(arg0: string)

public "getName"(): string
public static "name"(): $CommonString$Joiner
public "remove"(arg0: any): $Property
public "get"(arg0: string): $Property
public "put"(arg0: string, arg1: $Property$Type): $Property
public "equals"(arg0: any): boolean
public "values"(): $Collection<($Property)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(string), ($Property)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "write"(arg0: $BufferedWriter$Type, arg1: integer): void
public "containsKey"(arg0: any): boolean
public "containsKey"(arg0: string): boolean
public "keySet"(): $Set<(string)>
public "containsValue"(arg0: any): boolean
public "setComment"(arg0: string): void
public "getComment"(): string
public "getQualifiedName"(): string
public static "getQualifiedName"(arg0: string, arg1: $ConfigCategory$Type): string
public "removeChild"(arg0: $ConfigCategory$Type): void
public "getChildren"(): $Set<($ConfigCategory)>
public "setShowInGui"(arg0: boolean): $ConfigCategory
public "getPropertyOrder"(): $List<(string)>
public "getOrderedValues"(): $List<($Property)>
public "getFirstParent"(): $ConfigCategory
public "getLanguagekey"(): string
public "getConfigEntryClass"(): $Class<(any)>
public "setLanguageKey"(arg0: string): $ConfigCategory
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $ConfigCategory
public "setRequiresWorldRestart"(arg0: boolean): $ConfigCategory
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $ConfigCategory
public "requiresMcRestart"(): boolean
public "setPropertyOrder"(arg0: $List$Type<(string)>): $ConfigCategory
public "isChild"(): boolean
public "getValues"(): $Map<(string), ($Property)>
public "showInGui"(): boolean
public "hasChanged"(): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(string), ($Property)>
public "replace"(arg0: string, arg1: $Property$Type): $Property
public "replace"(arg0: string, arg1: $Property$Type, arg2: $Property$Type): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type, arg18: string, arg19: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type): $Map<(string), ($Property)>
public "merge"(arg0: string, arg1: $Property$Type, arg2: $BiFunction$Type<(any), (any), (any)>): $Property
public "putIfAbsent"(arg0: string, arg1: $Property$Type): $Property
public "compute"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "entry"<K, V>(arg0: string, arg1: $Property$Type): $Map$Entry<(string), ($Property)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: string, arg1: $Function$Type<(any), (any)>): $Property
public "getOrDefault"(arg0: any, arg1: $Property$Type): $Property
public "computeIfPresent"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(string), ($Property)>
[index: string | number]: $Property
get "empty"(): boolean
set "comment"(value: string)
get "comment"(): string
get "qualifiedName"(): string
get "children"(): $Set<($ConfigCategory)>
get "propertyOrder"(): $List<(string)>
get "orderedValues"(): $List<($Property)>
get "firstParent"(): $ConfigCategory
get "languagekey"(): string
get "configEntryClass"(): $Class<(any)>
set "languageKey"(value: string)
set "configEntryClass"(value: $Class$Type<(any)>)
set "propertyOrder"(value: $List$Type<(string)>)
get "child"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$Type = ($ConfigCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategory_ = $ConfigCategory$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $ServerCommand$Msg {

constructor(arg0: string)

public static "clazz"(arg0: $Class$Type<(any)>, arg1: boolean): $ServerCommand$Msg
public "toString"(): string
public static "of"(arg0: string): $ServerCommand$Msg
public static "error"(arg0: string): $ServerCommand$Msg
public static "emitter"(arg0: string, arg1: $IEmitter$Type, arg2: boolean): $ServerCommand$Msg
public static "bool"(arg0: boolean): $ServerCommand$Msg
public static "unit"(arg0: string, arg1: $ChatFormatting$Type, arg2: $UnitId$Type): $ServerCommand$Msg
public static "noUnitInSight"(arg0: string): $ServerCommand$Msg
public static "nbt"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>, arg1: $Predicate$Type<(string)>): $ServerCommand$Msg
public static "colored"(arg0: string, arg1: $ChatFormatting$Type): $ServerCommand$Msg
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Msg$Type = ($ServerCommand$Msg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Msg_ = $ServerCommand$Msg$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$UnitConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$Configuration, $Configuration$Type} from "packages/com/endertech/minecraft/forge/configs/$Configuration"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $UnitConfig extends $Configuration {
static readonly "EXTENSION": string
static readonly "KEY_LIST": string
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type)

public static "getInt"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: integer, arg4: $IntBounds$Type, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: $IntBounds$Type, arg4: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: $FloatBounds$Type, arg4: string): float
public static "getFloat"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: float, arg4: $FloatBounds$Type, arg5: string): float
public static "in"(arg0: $Path$Type, arg1: string, arg2: string): $UnitConfig
public static "in"(arg0: $Path$Type, arg1: string): $UnitConfig
public static "save"(arg0: $UnitConfig$Type): void
public "save"(): void
public static "getDescription"(arg0: string, arg1: string, arg2: boolean): string
public static "getTimeInMillis"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public "getTimeInMillis"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getPercentage"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $Percentage$Type, arg4: $FloatBounds$Type, arg5: string): $Percentage
public "getPercentage"(arg0: string, arg1: string, arg2: $Percentage$Type, arg3: $FloatBounds$Type, arg4: string): $Percentage
public static "alreadyExists"(arg0: $Path$Type, arg1: string): boolean
public static "listCustomConfigs"(arg0: $Path$Type, arg1: $Class$Type<(any)>): $List<($Path)>
public static "readConfigEnabled"(arg0: $UnitConfig$Type, arg1: boolean): boolean
public static "getIntBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $IntBounds$Type, arg4: $IntBounds$Type, arg5: string): $IntBounds
public "getIntBounds"(arg0: string, arg1: string, arg2: $IntBounds$Type, arg3: $IntBounds$Type, arg4: string): $IntBounds
public "getFloatBounds"(arg0: string, arg1: string, arg2: $FloatBounds$Type, arg3: $FloatBounds$Type, arg4: string): $FloatBounds
public static "getFloatBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $FloatBounds$Type, arg4: $FloatBounds$Type, arg5: string): $FloatBounds
public static "getColorARGB"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $ColorARGB$Type, arg4: string): $ColorARGB
public "getColorARGB"(arg0: string, arg1: string, arg2: $ColorARGB$Type, arg3: string): $ColorARGB
public "getKeyValuePair"(arg0: string, arg1: string, arg2: $KeyValuePair$Type, arg3: string): $KeyValuePair
public static "getKeyValuePair"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $KeyValuePair$Type, arg4: string): $KeyValuePair
public "getTimeInSeconds"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getTimeInSeconds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public "getStrArray"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public static "getStrArray"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[], arg4: string): (string)[]
public "getConfigDir"(): $Path
public static "getSyntax"(...arg0: (any)[]): string
public static "getBool"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: boolean, arg4: string): boolean
public "getBool"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public static "buildPath"(arg0: $Path$Type, arg1: string): $Path
public static "buildPath"(arg0: $Path$Type, arg1: string, arg2: string): $Path
public static "getStr"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getStr"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getUnitId"(arg0: string, arg1: string, arg2: $UnitId$Type, arg3: string): $UnitId
public static "getUnitId"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $UnitId$Type, arg4: string): $UnitId
get "configDir"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitConfig$Type = ($UnitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitConfig_ = $UnitConfig$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$Namespace" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Namespace {
readonly "id": string


public static "of"(arg0: string): $Namespace
public "resolve"(arg0: string): string
public "location"(arg0: string): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Namespace$Type = ($Namespace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Namespace_ = $Namespace$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory" {
import {$BakedModelWrapper, $BakedModelWrapper$Type} from "packages/net/minecraftforge/client/model/$BakedModelWrapper"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $ItemModel$IModelWrapperFactory<T extends $BakedModel> {

 "create"(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>

(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>
}

export namespace $ItemModel$IModelWrapperFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$IModelWrapperFactory$Type<T> = ($ItemModel$IModelWrapperFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$IModelWrapperFactory_<T> = $ItemModel$IModelWrapperFactory$Type<(T)>;
}}
declare module "packages/com/endertech/common/$CommonTime$IMessure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonTime$IMessure {

 "getCapacity"(): long

(): long
}

export namespace $CommonTime$IMessure {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$IMessure$Type = ($CommonTime$IMessure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$IMessure_ = $CommonTime$IMessure$Type;
}}
declare module "packages/com/endertech/common/$CommonCollect$WeightedList" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CommonCollect$IWeighted, $CommonCollect$IWeighted$Type} from "packages/com/endertech/common/$CommonCollect$IWeighted"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CommonCollect$WeightedList<T extends $CommonCollect$IWeighted> {

constructor()

public "add"(arg0: T): boolean
public "remove"(arg0: T): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "contains"(arg0: T): boolean
public "getRandom"(arg0: $Random$Type): $Optional<(T)>
/**
 * 
 * @deprecated
 */
public "getRandom"(arg0: $Supplier$Type<(double)>): $Optional<(T)>
public "getRandom"(): $Optional<(T)>
public "getElements"(): $List<(T)>
public "getTotalWeight"(): long
public static "withElements"<T extends $CommonCollect$IWeighted>(...arg0: (T)[]): $CommonCollect$WeightedList<(T)>
get "empty"(): boolean
get "random"(): $Optional<(T)>
get "elements"(): $List<(T)>
get "totalWeight"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonCollect$WeightedList$Type<T> = ($CommonCollect$WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonCollect$WeightedList_<T> = $CommonCollect$WeightedList$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$WorldBounds, $WorldBounds$Type} from "packages/com/endertech/minecraft/forge/world/$WorldBounds"

export class $ChunkBounds extends $WorldBounds {
static readonly "WIDTH": integer
static readonly "HALF_WIDTH": integer
static readonly "SQUARE": integer


public static "from"(arg0: $LevelChunk$Type, arg1: $IntBounds$Type): $ChunkBounds
public static "from"(arg0: $LevelChunk$Type): $ChunkBounds
public static "from"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $ChunkBounds
public static "from"(arg0: $ChunkPos$Type, arg1: $IntBounds$Type): $ChunkBounds
public "getCapacity"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBounds$Type = ($ChunkBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBounds_ = $ChunkBounds$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Property {

constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[], arg4: string)
constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean, arg4: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[])

public "getName"(): string
public "getBoolean"(arg0: boolean): boolean
public "getBoolean"(): boolean
public "getInt"(): integer
public "getInt"(arg0: integer): integer
public "getLong"(): long
public "getLong"(arg0: long): long
public "getDouble"(): double
public "getDouble"(arg0: double): double
public "getDefault"(): string
public "set"(arg0: (string)[]): void
public "set"(arg0: string): void
public "set"(arg0: long): void
public "set"(arg0: (double)[]): void
public "set"(arg0: integer): void
public "set"(arg0: (boolean)[]): void
public "set"(arg0: (integer)[]): void
public "set"(arg0: double): void
public "set"(arg0: boolean): void
public "setName"(arg0: string): void
public "setValue"(arg0: boolean): $Property
public "setValue"(arg0: string): $Property
public "setValue"(arg0: double): $Property
public "setValue"(arg0: integer): $Property
public "getType"(): $Property$Type
public "isDefault"(): boolean
public "getMinValue"(): string
public "getMaxValue"(): string
public "getString"(): string
public "setComment"(arg0: string): void
public "getComment"(): string
public "setValues"(arg0: (string)[]): $Property
public "setValues"(arg0: (boolean)[]): $Property
public "setValues"(arg0: (double)[]): $Property
public "setValues"(arg0: (integer)[]): $Property
public "isIntValue"(): boolean
public "getDefaults"(): (string)[]
public "getBooleanList"(): (boolean)[]
public "getDoubleList"(): (double)[]
public "getStringList"(): (string)[]
public "getLanguageKey"(): string
public "getValidValues"(): (string)[]
public "setArrayEntryClass"(arg0: $Class$Type<(any)>): $Property
public "getValidationPattern"(): $Pattern
public "getArrayEntryClass"(): $Class<(any)>
public "getMaxListLength"(): integer
public "isLongValue"(): boolean
public "setShowInGui"(arg0: boolean): $Property
public "getConfigEntryClass"(): $Class<(any)>
public "setDefaultValues"(arg0: (integer)[]): $Property
public "setDefaultValues"(arg0: (boolean)[]): $Property
public "setDefaultValues"(arg0: (double)[]): $Property
public "setDefaultValues"(arg0: (string)[]): $Property
public "isBooleanValue"(): boolean
public "setIsListLengthFixed"(arg0: boolean): $Property
public "setMaxListLength"(arg0: integer): $Property
public "isBooleanList"(): boolean
public "isListLengthFixed"(): boolean
public "setMinValue"(arg0: double): $Property
public "setMinValue"(arg0: integer): $Property
public "setMaxValue"(arg0: integer): $Property
public "setMaxValue"(arg0: double): $Property
public "isDoubleValue"(): boolean
public "isDoubleList"(): boolean
public "setValidationPattern"(arg0: $Pattern$Type): $Property
public "setValidValues"(arg0: (string)[]): $Property
public "setLanguageKey"(arg0: string): $Property
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $Property
public "setRequiresWorldRestart"(arg0: boolean): $Property
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $Property
public "requiresMcRestart"(): boolean
public "setDefaultValue"(arg0: integer): $Property
public "setDefaultValue"(arg0: double): $Property
public "setDefaultValue"(arg0: boolean): $Property
public "setDefaultValue"(arg0: string): $Property
public "setToDefault"(): $Property
public "getIntList"(): (integer)[]
public "isList"(): boolean
public "showInGui"(): boolean
public "wasRead"(): boolean
public "isIntList"(): boolean
public "hasChanged"(): boolean
get "name"(): string
get "boolean"(): boolean
get "int"(): integer
get "long"(): long
get "double"(): double
get "default"(): string
set "name"(value: string)
set "value"(value: boolean)
set "value"(value: string)
set "value"(value: double)
set "value"(value: integer)
get "type"(): $Property$Type
get "default"(): boolean
get "minValue"(): string
get "maxValue"(): string
get "string"(): string
set "comment"(value: string)
get "comment"(): string
set "values"(value: (string)[])
set "values"(value: (boolean)[])
set "values"(value: (double)[])
set "values"(value: (integer)[])
get "intValue"(): boolean
get "defaults"(): (string)[]
get "booleanList"(): (boolean)[]
get "doubleList"(): (double)[]
get "stringList"(): (string)[]
get "languageKey"(): string
get "validValues"(): (string)[]
set "arrayEntryClass"(value: $Class$Type<(any)>)
get "validationPattern"(): $Pattern
get "arrayEntryClass"(): $Class<(any)>
get "maxListLength"(): integer
get "longValue"(): boolean
get "configEntryClass"(): $Class<(any)>
set "defaultValues"(value: (integer)[])
set "defaultValues"(value: (boolean)[])
set "defaultValues"(value: (double)[])
set "defaultValues"(value: (string)[])
get "booleanValue"(): boolean
set "maxListLength"(value: integer)
get "booleanList"(): boolean
get "listLengthFixed"(): boolean
set "minValue"(value: double)
set "minValue"(value: integer)
set "maxValue"(value: integer)
set "maxValue"(value: double)
get "doubleValue"(): boolean
get "doubleList"(): boolean
set "validationPattern"(value: $Pattern$Type)
set "validValues"(value: (string)[])
set "languageKey"(value: string)
set "configEntryClass"(value: $Class$Type<(any)>)
set "defaultValue"(value: integer)
set "defaultValue"(value: double)
set "defaultValue"(value: boolean)
set "defaultValue"(value: string)
get "intList"(): (integer)[]
get "list"(): boolean
get "intList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type = ($Property);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$Replacements" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WeightedOre, $WeightedOre$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$WeightedOre"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockStatesSet, $BlockStatesSet$Type} from "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $Replacements extends $AbstractParsableList {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[], arg4: $Function$Type<($UnitId$Type), ($Optional$Type<($BlockState$Type)>)>)
constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[])

public "add"(arg0: $BlockStatesSet$Type, arg1: $WeightedOre$Type): void
public "isEmpty"(): boolean
public "haveReplacementFor"(arg0: $BlockState$Type): boolean
public "containOreWith"(arg0: $BlockState$Type): boolean
public static "custom"(arg0: $UnitConfig$Type, arg1: string, arg2: (string)[], arg3: $Function$Type<($UnitId$Type), ($Optional$Type<($BlockState$Type)>)>): $Replacements
public "pickOreFor"(arg0: $BlockState$Type, arg1: $Random$Type): $Optional<($WeightedOre)>
public "getOres"(): $Set<($BlockState)>
get "empty"(): boolean
get "ores"(): $Set<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Replacements$Type = ($Replacements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Replacements_ = $Replacements$Type;
}}
declare module "packages/com/endertech/common/$CommonCollect$BlackWhiteList" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $CommonCollect$BlackWhiteList<E> {

constructor(arg0: $List$Type<(E)>, arg1: $List$Type<(E)>)

public "isEmpty"(): boolean
public "isAllowed"(arg0: E): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonCollect$BlackWhiteList$Type<E> = ($CommonCollect$BlackWhiteList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonCollect$BlackWhiteList_<E> = $CommonCollect$BlackWhiteList$Type<(E)>;
}}
declare module "packages/com/endertech/common/$CommonString$Joiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonString$Joiner {

constructor(arg0: string)

public "join"(...arg0: (string)[]): string
public static "with"(arg0: string): $CommonString$Joiner
public "getDelimiter"(): string
get "delimiter"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonString$Joiner$Type = ($CommonString$Joiner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonString$Joiner_ = $CommonString$Joiner$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter" {
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRelatedUnit, $IRelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$IRelatedUnit"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IEmitter extends $IRelatedUnit, $IPostInit {

 "getType"(): $IEmitter$Type
 "isActive"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "getActiveTag"(): string
 "getIdentityTag"(): $KeyValuePair
 "getRelatedBlocks"(): $Set<($BlockState)>
 "isIdentified"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "getRelatedId"(): $UnitId
 "onPostInit"(): void
 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string
 "getConfig"(): $UnitConfig
 "saveConfig"(): void
}

export namespace $IEmitter {
const COMMON_ACTIVE_TAG_NAME: $Predicate<(string)>
const COMMENT_ACTIVE_STATE_TAG: string
const COMMENT_IDENTITY_TAG: string
const COMMENT_TYPE: string
const COMMENT_RELATED_BLOCKS: string
const TAG_HARDCODED: string
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type = ($IEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter_ = $IEmitter$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$DisabledDeposits" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Deposit$DisabledDeposits extends $Enum<($Deposit$DisabledDeposits)> {
static readonly "NONE": $Deposit$DisabledDeposits
static readonly "VANILLA": $Deposit$DisabledDeposits
static readonly "CUSTOM": $Deposit$DisabledDeposits
static readonly "ALL": $Deposit$DisabledDeposits


public static "values"(): ($Deposit$DisabledDeposits)[]
public static "valueOf"(arg0: string): $Deposit$DisabledDeposits
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$DisabledDeposits$Type = (("all") | ("custom") | ("none") | ("vanilla")) | ($Deposit$DisabledDeposits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit$DisabledDeposits_ = $Deposit$DisabledDeposits$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RegisterGuiOverlaysEvent, $RegisterGuiOverlaysEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterGuiOverlaysEvent"
import {$ServerCommand, $ServerCommand$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand"
import {$ItemModel$RegistryWrapper, $ItemModel$RegistryWrapper$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Namespace, $Namespace$Type} from "packages/com/endertech/minecraft/forge/data/$Namespace"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$ItemModel$Properties, $ItemModel$Properties$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties"
import {$PlayerRenderer, $PlayerRenderer$Type} from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegisterParticleProvidersEvent, $RegisterParticleProvidersEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent"
import {$RegisterKeyMappingsEvent, $RegisterKeyMappingsEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$PlayerModel, $PlayerModel$Type} from "packages/net/minecraft/client/model/$PlayerModel"
import {$Connection, $Connection$Type} from "packages/com/endertech/minecraft/forge/network/$Connection"
import {$DataCollector, $DataCollector$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $AbstractForgeMod {


public "getLogger"(): $Logger
public "getId"(): string
public static "isLoaded"(arg0: string): boolean
public "getConnection"(): $Connection
public "getNamespace"(): $Namespace
public "clientRegisterParticleProviders"(arg0: $RegisterParticleProvidersEvent$Type): void
public "clientRegisterItemModelProperties"(arg0: $ItemModel$Properties$Type<(any)>): void
public "getForgeEventBus"(): $IEventBus
public "getRequiredSide"(): $AbstractForgeMod$RequiredSide
public "isClientSide"(): boolean
public "clientRegisterGuiOverlays"(arg0: $RegisterGuiOverlaysEvent$Type): void
public "clientRegisterKeyMappings"(arg0: $RegisterKeyMappingsEvent$Type): void
public "clientBuildCreativeModeTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "commonPostInit"(): void
public "commonConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "clientConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "configUpdated"(arg0: $ModConfig$Type): void
public "clientAddRenderLayers"(): void
public "clientReplaceModels"(arg0: $ItemModel$RegistryWrapper$Type): void
public "clientRegisterRenderers"(): void
public "tagsUpdated"(): void
public "addPostInitRunnable"(arg0: $Runnable$Type): void
public "setRenderLayer"(arg0: $Block$Type, arg1: $RenderType$Type): void
public "setRenderLayer"(arg0: $Fluid$Type, arg1: $RenderType$Type): void
public "addPlayerRenderLayer"(arg0: $Function$Type<($PlayerRenderer$Type), ($RenderLayer$Type<($AbstractClientPlayer$Type), ($PlayerModel$Type<($AbstractClientPlayer$Type)>)>)>): void
public static "singletonInstance"<T>(arg0: string, arg1: $Class$Type<(T)>): $Lazy<($Optional<(T)>)>
public "getConfigsDir"(): $Path
public "getModEventBus"(): $IEventBus
public "registerCommands"(arg0: $ServerCommand$Type, arg1: $CommandBuildContext$Type): void
public "gatherData"(arg0: $DataCollector$Type): void
public "clientInit"(): void
public "commonInit"(): void
get "logger"(): $Logger
get "id"(): string
get "connection"(): $Connection
get "namespace"(): $Namespace
get "forgeEventBus"(): $IEventBus
get "requiredSide"(): $AbstractForgeMod$RequiredSide
get "clientSide"(): boolean
get "configsDir"(): $Path
get "modEventBus"(): $IEventBus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$Type = ($AbstractForgeMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod_ = $AbstractForgeMod$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$AbstractOre$Properties" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Dimensions, $Dimensions$Type} from "packages/com/endertech/minecraft/forge/world/$Dimensions"
import {$Miscellaneous$Properties, $Miscellaneous$Properties$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$Miscellaneous$Properties"
import {$RelatedUnit$Properties, $RelatedUnit$Properties$Type} from "packages/com/endertech/minecraft/forge/units/$RelatedUnit$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $AbstractOre$Properties<T extends $AbstractOre$Properties<(T)>> extends $RelatedUnit$Properties<(T)> {
 "altitude": $IntBounds
 "replaceableBlocks": (string)[]
 "allowedDimensions": (string)[]
 "customReplacements": (string)[]
 "miscellaneous": $Miscellaneous$Properties<(any)>
 "id": $UnitId


public "dimension"(arg0: $Dimensions$Type): T
public "replaceableBlocks"(...arg0: (string)[]): T
public "allowedDimensions"(...arg0: (string)[]): T
public "customReplacements"(...arg0: (string)[]): T
public "deepslate"(arg0: string): T
public "altitude"(arg0: integer, arg1: integer): T
public "exposed"(arg0: boolean): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractOre$Properties$Type<T> = ($AbstractOre$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractOre$Properties_<T> = $AbstractOre$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$DimensionId" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DimensionId {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionId
public static "from"(arg0: $ResourceLocation$Type): $DimensionId
public static "from"(arg0: $Level$Type): $DimensionId
public "getKey"(): $ResourceKey<($Level)>
public "toResourceLocation"(): $ResourceLocation
public "belongsTo"(arg0: $Level$Type): boolean
get "key"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionId$Type = ($DimensionId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionId_ = $DimensionId$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory" {
import {$LanguageProvider, $LanguageProvider$Type} from "packages/net/minecraftforge/common/data/$LanguageProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export interface $DataCollector$LanguageProviderFactory<T extends $LanguageProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: string): T

(arg0: $PackOutput$Type, arg1: string, arg2: string): T
}

export namespace $DataCollector$LanguageProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$LanguageProviderFactory$Type<T> = ($DataCollector$LanguageProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$LanguageProviderFactory_<T> = $DataCollector$LanguageProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IWriter<T> {

 "write"(arg0: T, arg1: $FriendlyByteBuf$Type): void

(arg0: T, arg1: $FriendlyByteBuf$Type): void
}

export namespace $ForgeNetMsg$IWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IWriter$Type<T> = ($ForgeNetMsg$IWriter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IWriter_<T> = $ForgeNetMsg$IWriter$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $AbstractForgeMod$ConfigValueBuilder {
readonly "builder": $ForgeConfigSpec$Builder

constructor()

public "comment"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "shared"(arg0: string): void
public "push"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "pop"(): $AbstractForgeMod$ConfigValueBuilder
public "defineFactor"(arg0: string, arg1: float): $ForgeConfigSpec$ConfigValue<(double)>
public "worldRestart"(): $AbstractForgeMod$ConfigValueBuilder
public "defineEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "defineEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $Predicate$Type<(T)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"(arg0: string, arg1: $ColorARGB$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$ConfigValue<(boolean)>
public "defineList"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineInRange"(arg0: string, arg1: integer, arg2: $IntBounds$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "defineInRange"(arg0: string, arg1: float, arg2: $FloatBounds$Type): $ForgeConfigSpec$ConfigValue<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$ConfigValueBuilder$Type = ($AbstractForgeMod$ConfigValueBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$ConfigValueBuilder_ = $AbstractForgeMod$ConfigValueBuilder$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory" {
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export interface $DataCollector$ClientDataProviderFactory<T extends $DataProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ClientDataProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ClientDataProviderFactory$Type<T> = ($DataCollector$ClientDataProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ClientDataProviderFactory_<T> = $DataCollector$ClientDataProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/common/$CommonCollect$IWeighted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonCollect$IWeighted {

 "getWeight"(): integer

(): integer
}

export namespace $CommonCollect$IWeighted {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonCollect$IWeighted$Type = ($CommonCollect$IWeighted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonCollect$IWeighted_ = $CommonCollect$IWeighted$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$AbstractOre" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Replacements, $Replacements$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$Replacements"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"
import {$AbstractOre$Properties, $AbstractOre$Properties$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$AbstractOre$Properties"

export class $AbstractOre implements $IHaveConfig {

constructor(arg0: $UnitConfig$Type, arg1: $AbstractOre$Properties$Type<(any)>)

public "isValid"(): boolean
public "inAllowedDimenstion"(arg0: $ServerLevelAccessor$Type): boolean
public "getReplacements"(): $Replacements
public "getAltitude"(): $IntBounds
public static "inAdjacentChunk"(arg0: $BlockPos$Type, arg1: $ChunkPos$Type, arg2: boolean): boolean
public static "withinGenRegion"(arg0: $ChunkPos$Type, arg1: $ChunkPos$Type): boolean
public static "withinRadius"(arg0: $ChunkPos$Type, arg1: $ChunkPos$Type, arg2: integer): boolean
public "inAllowedBiome"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "canBeReplaced"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean): boolean
public "isValidPosition"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: boolean): boolean
public "getConfig"(): $UnitConfig
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "getClassCategory"(arg0: string): string
public "getClassCategory"(): string
public static "expandCategory"(arg0: string, arg1: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public "expandClassCategory"(arg0: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "saveConfig"(): void
get "valid"(): boolean
get "replacements"(): $Replacements
get "altitude"(): $IntBounds
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractOre$Type = ($AbstractOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractOre_ = $AbstractOre$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Property$Type extends $Enum<($Property$Type)> {
static readonly "STRING": $Property$Type
static readonly "INTEGER": $Property$Type
static readonly "BOOLEAN": $Property$Type
static readonly "DOUBLE": $Property$Type
static readonly "COLOR": $Property$Type
static readonly "MOD_ID": $Property$Type


public static "values"(): ($Property$Type)[]
public static "valueOf"(arg0: string): $Property$Type
public "getID"(): character
public static "tryParse"(arg0: character): $Property$Type
get "iD"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type$Type = (("boolean") | ("mod_id") | ("string") | ("color") | ("double") | ("integer")) | ($Property$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property$Type_ = $Property$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$IPostInit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPostInit {

 "onPostInit"(): void

(): void
}

export namespace $IPostInit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostInit$Type = ($IPostInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPostInit_ = $IPostInit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$WorldBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WorldBounds {


public "getHeight"(): integer
public "getY"(): $IntBounds
public "min"(): $BlockPos
public "max"(): $BlockPos
public "offset"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public static "from"(arg0: $IntBounds$Type, arg1: $IntBounds$Type, arg2: $IntBounds$Type): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "reduce"(arg0: integer): $WorldBounds
public "reduce"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "getX"(): $IntBounds
public "relative"(arg0: $BlockPos$Type): $BlockPos
public static "chunksAround"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $WorldBounds
public static "getHeightBounds"(arg0: $LevelHeightAccessor$Type): $IntBounds
public "face"(arg0: $BlockPos$Type): boolean
public "within"(arg0: $WorldBounds$Type): boolean
public "extend"(arg0: integer): $WorldBounds
public "extend"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "extend"(arg0: $Direction$Type, arg1: integer): $WorldBounds
public "encloses"(arg0: $BlockPos$Type): boolean
public "edge"(arg0: $BlockPos$Type): boolean
public "getZ"(): $IntBounds
public "vertex"(arg0: $BlockPos$Type): boolean
public "toAABB"(): $AABB
public "randomPos"(arg0: $Random$Type): $BlockPos
public static "vertPlane"(arg0: $BlockPos$Type, arg1: integer, arg2: $Direction$Type): $WorldBounds
public static "horizPlane"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
get "height"(): integer
get "y"(): $IntBounds
get "x"(): $IntBounds
get "z"(): $IntBounds
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldBounds$Type = ($WorldBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldBounds_ = $WorldBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$Miscellaneous$Properties" {
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $Miscellaneous$Properties<T extends $Miscellaneous$Properties<(T)>> extends $BaseProperties<(T)> {
 "exposed": boolean
 "proportions": float
 "strictBounds": boolean


public static "of"(): $Miscellaneous$Properties<(any)>
public "strictBounds"(): T
public "proportions"(arg0: float): T
public "exposed"(arg0: boolean): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Miscellaneous$Properties$Type<T> = ($Miscellaneous$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Miscellaneous$Properties_<T> = $Miscellaneous$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/common/$FloatBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"

export class $FloatBounds implements $IBounds<(float)> {
static readonly "ZERO": $FloatBounds
static readonly "FLOAT": $FloatBounds
static readonly "FLOAT_POSITIVE": $FloatBounds

constructor(arg0: float, arg1: float)

public "equals"(arg0: any): boolean
public "length"(): float
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: float): $FloatBounds
public static "of"(arg0: float): $FloatBounds
public static "of"(arg0: $IBounds$Type<(any)>): $FloatBounds
public "offset"(arg0: float): $FloatBounds
public "reduce"(arg0: float): $FloatBounds
public static "between"(arg0: float, arg1: float): $FloatBounds
public "randomBetween"(): float
public "interpolationFactor"(arg0: float): float
public "within"(arg0: $IBounds$Type<(float)>): boolean
public "extend"(arg0: float): $FloatBounds
public "encloses"(arg0: float): boolean
public "corners"(arg0: float): boolean
public "unite"(arg0: $IBounds$Type<(float)>): $FloatBounds
public "randomFits"(arg0: float): boolean
public "enclose"(arg0: float): float
public "interpolateTo"(arg0: $IBounds$Type<(float)>): $CommonMath$Interpolation<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatBounds$Type = ($FloatBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatBounds_ = $FloatBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$DepositGenResult" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DepositGenResult implements $INBTSerializable<($DepositGenResult)> {
static readonly "EMPTY": $DepositGenResult
readonly "name": string
readonly "pos": $BlockPos
readonly "size": integer
readonly "deferred": integer

constructor(arg0: string, arg1: $BlockPos$Type, arg2: integer, arg3: integer)

public "toString"(): string
public "isEmpty"(): boolean
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "completeness"(): $Percentage
public "isComplete"(): boolean
get "empty"(): boolean
get "complete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositGenResult$Type = ($DepositGenResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositGenResult_ = $DepositGenResult$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkLoc" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$INetSerializable, $INetSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INetSerializable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$ChunkBounds, $ChunkBounds$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkBounds"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChunkLoc implements $INetSerializable<($ChunkLoc)>, $INBTSerializable<($ChunkLoc)> {
static readonly "ZERO": $ChunkLoc

constructor(arg0: $DimensionId$Type, arg1: $ChunkPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "contains"(arg0: $Entity$Type): boolean
public static "from"(arg0: $LevelChunk$Type): $ChunkLoc
public static "from"(arg0: $Level$Type, arg1: $ChunkPos$Type): $ChunkLoc
public "getBounds"(arg0: $LevelHeightAccessor$Type): $ChunkBounds
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
public "getDimensionId"(): $DimensionId
public "getPos"(): $ChunkPos
public "getChunk"(arg0: $Level$Type): $Optional<($LevelChunk)>
public "existsIn"(arg0: $Level$Type): boolean
get "dimensionId"(): $DimensionId
get "pos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoc$Type = ($ChunkLoc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoc_ = $ChunkLoc$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagLookup"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemTagsProvider, $ItemTagsProvider$Type} from "packages/net/minecraft/data/tags/$ItemTagsProvider"

export interface $DataCollector$ItemTagsProviderFactory<T extends $ItemTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ItemTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ItemTagsProviderFactory$Type<T> = ($DataCollector$ItemTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ItemTagsProviderFactory_<T> = $DataCollector$ItemTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Size" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"

export class $Deposit$Size extends $IntBounds {
static readonly "BOUNDS": $IntBounds
static readonly "ZERO": $Deposit$Size
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)

public static "from"(arg0: $IntBounds$Type): $Deposit$Size
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$Size$Type = ($Deposit$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit$Size_ = $Deposit$Size$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ItemModel$Properties$IPropertyGetter extends $ItemPropertyFunction {

 "get"(arg0: $ItemStack$Type, arg1: $Optional$Type<($ClientLevel$Type)>, arg2: $Optional$Type<($LivingEntity$Type)>): float
/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float

(arg0: $ItemStack$Type, arg1: $Optional$Type<($ClientLevel$Type)>, arg2: $Optional$Type<($LivingEntity$Type)>): float
}

export namespace $ItemModel$Properties$IPropertyGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$IPropertyGetter$Type = ($ItemModel$Properties$IPropertyGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties$IPropertyGetter_ = $ItemModel$Properties$IPropertyGetter$Type;
}}
declare module "packages/com/endertech/common/$IBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export interface $IBounds<T extends number> {

 "length"(): T
 "offset"(arg0: T): $IBounds<(T)>
 "reduce"(arg0: T): $IBounds<(T)>
 "randomBetween"(arg0: $Random$Type): T
 "randomBetween"(): T
 "interpolateUp"(arg0: float): T
 "interpolateDown"(arg0: float): T
 "interpolateTo"(arg0: $IBounds$Type<(T)>): $CommonMath$Interpolation<(T)>
 "interpolationFactor"(arg0: T): float
 "center"(): T
 "getMax"(): T
 "getMin"(): T
 "fit"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "within"(arg0: $IBounds$Type<(T)>): boolean
 "extend"(arg0: T): $IBounds<(T)>
 "encloses"(arg0: T): boolean
 "corners"(arg0: T): boolean
 "unite"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "randomFits"(arg0: T): boolean
 "enclose"(arg0: T): T
}

export namespace $IBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBounds$Type<T> = ($IBounds<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBounds_<T> = $IBounds$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitId" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"
import {$BlockStatesSet, $BlockStatesSet$Type} from "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet"

export class $UnitId {
static readonly "EMPTY": $UnitId
static readonly "FORMAT_FULL": string
static readonly "DESCRIPTION": string
static readonly "DELIMITER": string
static readonly "TAG": string
static readonly "MOD_ID_MINECRAFT": string
static readonly "REG_NAME_WORDS_DELIMITER": string
static readonly "UNLOCALIZED_NAME_DELIMITER": string
static readonly "INCODE_DELIMITER": string
static readonly "PATTERN": $Pattern
static readonly "PROPS_OPENING_BRACKET": string
static readonly "PROPS_CLOSING_BRACKET": string
static readonly "PROPS_DELIMITER": string
static readonly "META_DEFAULT": integer
static readonly "META_ALL_INT": integer
static readonly "META_EMPTY": string
static readonly "META_ALL_CHAR": string
static readonly "META_EMPTY_PROPS": string

constructor(arg0: string, arg1: string, arg2: string, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $Item$Type): boolean
public "matches"(arg0: $BlockState$Type): boolean
public static "from"(arg0: string, arg1: string): $UnitId
public static "from"(arg0: $ResourceLocation$Type, arg1: string): $UnitId
public static "from"(arg0: $ResourceLocation$Type): $UnitId
public static "from"(arg0: string, arg1: string, arg2: integer): $UnitId
public static "from"(arg0: $Fluid$Type, arg1: string): $UnitId
public static "from"(arg0: $BlockState$Type): $UnitId
public static "from"(arg0: $Block$Type): $UnitId
public static "from"(arg0: $Item$Type): $UnitId
public static "from"(arg0: $FluidState$Type): $UnitId
public static "from"(arg0: $Block$Type, arg1: string): $UnitId
public static "from"(arg0: string): $UnitId
public static "from"(arg0: $Enum$Type<(any)>, arg1: string): $UnitId
public static "from"(arg0: $Path$Type): $UnitId
public static "from"(arg0: string, ...arg1: (string)[]): $UnitId
public "getBlockProperties"(): $BlockBehaviour$Properties
public "hasProperties"(): boolean
public static "statePropsAsString"(arg0: $StateHolder$Type<(any), (any)>): string
public static "getClassRegName"(arg0: $Class$Type<(any)>): string
public "getFirstMatchedItem"(): $Item
public "getAllMatchedItems"(): $Collection<($Item)>
public "getAllMatchedFluids"(): $Collection<($Fluid)>
public "getFirstMatchedFluid"(): $Fluid
public "withNamePrefix"(arg0: string): $UnitId
public "withNameSuffix"(arg0: string): $UnitId
public "toConfigName"(): string
public "hasMetaData"(): boolean
public "withMetaData"(arg0: string): $UnitId
public "withMetaAll"(): $UnitId
public "getMetaData"(): string
public "getFirstMatchedState"(): $BlockState
public "getAllMatchedBlockStates"(): $BlockStatesSet
public static "buildDictName"(...arg0: (string)[]): string
public static "buildRegName"(...arg0: (string)[]): string
public static "capitalizeWords"(...arg0: (string)[]): (string)[]
public static "regToDictName"(arg0: string): string
public static "splitDictName"(arg0: string): (string)[]
public static "splitRegName"(arg0: string, arg1: boolean, arg2: boolean): (string)[]
public static "dictToRegName"(arg0: string): string
public "getModId"(): string
public "withName"(arg0: string): $UnitId
public "withName"(...arg0: (string)[]): $UnitId
public "notEmpty"(): boolean
public static "isNullOrEmpty"(arg0: $UnitId$Type): boolean
public "getMeta"(): integer
public "isTag"(): boolean
public "getRegName"(): string
public "toResLoc"(): $ResourceLocation
public static "joinWords"(arg0: string, ...arg1: (string)[]): string
get "empty"(): boolean
get "blockProperties"(): $BlockBehaviour$Properties
get "firstMatchedItem"(): $Item
get "allMatchedItems"(): $Collection<($Item)>
get "allMatchedFluids"(): $Collection<($Fluid)>
get "firstMatchedFluid"(): $Fluid
get "metaData"(): string
get "firstMatchedState"(): $BlockState
get "allMatchedBlockStates"(): $BlockStatesSet
get "modId"(): string
get "meta"(): integer
get "tag"(): boolean
get "regName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitId$Type = ($UnitId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitId_ = $UnitId$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SuggestionProvider, $SuggestionProvider$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $ServerCommand$Arg<T> {


public "getName"(): string
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>): $ServerCommand$Arg<(T)>
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>, arg2: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(T)>
public static "bounds"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<($IntBounds)>
public static "bounds"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<($FloatBounds)>
public "getType"(): $ArgumentType<(T)>
public static "color"(arg0: string): $ServerCommand$Arg<($ColorARGB)>
public static "string"(arg0: string): $ServerCommand$Arg<(string)>
public static "string"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "word"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "word"(arg0: string): $ServerCommand$Arg<(string)>
public static "integer"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<(integer)>
public "getCustomSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
public static "floatt"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<(float)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "customSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Arg$Type<T> = ($ServerCommand$Arg<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Arg_<T> = $ServerCommand$Arg$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/units/$IRelatedUnit" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export interface $IRelatedUnit extends $IHaveConfig {

 "getRelatedId"(): $UnitId
 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string
 "getConfig"(): $UnitConfig
 "saveConfig"(): void
}

export namespace $IRelatedUnit {
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRelatedUnit$Type = ($IRelatedUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRelatedUnit_ = $IRelatedUnit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Deposit$Properties, $Deposit$Properties$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$AbstractOre, $AbstractOre$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$AbstractOre"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$DepositGenResult, $DepositGenResult$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$DepositGenResult"
import {$Deposit$DisabledDeposits, $Deposit$DisabledDeposits$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$DisabledDeposits"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$WeightedOre, $WeightedOre$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$WeightedOre"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CommonCollect$WeightedList, $CommonCollect$WeightedList$Type} from "packages/com/endertech/common/$CommonCollect$WeightedList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Deposit extends $AbstractOre {
static "disabledDeposits": $ForgeConfigSpec$ConfigValue<($Deposit$DisabledDeposits)>
static "globalSizeMultiplier": $ForgeConfigSpec$ConfigValue<(double)>
static "globalSpawnRateMultiplier": $ForgeConfigSpec$ConfigValue<(double)>

constructor(arg0: $UnitConfig$Type, arg1: $Deposit$Properties$Type<(any)>)

public "getName"(): string
public static "in"(arg0: $Path$Type, arg1: $Deposit$Properties$Type<(any)>): $Deposit
public "isEnabled"(): boolean
public "isValid"(): boolean
public "placeIndicator"(arg0: $WorldGenLevel$Type, arg1: $DepositGenResult$Type, arg2: boolean): boolean
public static "parseOresFrom"(arg0: (string)[], arg1: $Function$Type<($UnitId$Type), ($Optional$Type<($BlockState$Type)>)>): $CommonCollect$WeightedList<($WeightedOre)>
public "isOreBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "getChance"(): $Percentage
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean, arg4: $Random$Type): $DepositGenResult
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: integer, arg2: integer, arg3: $Random$Type): $DepositGenResult
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): $DepositGenResult
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
get "name"(): string
get "enabled"(): boolean
get "valid"(): boolean
get "chance"(): $Percentage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$Type = ($Deposit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit_ = $Deposit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ItemModel$Properties$IPropertyGetter, $ItemModel$Properties$IPropertyGetter$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $ItemModel$Properties<T extends $ItemModel$Properties<(T)>> extends $BaseProperties<(T)> {


public static "of"(arg0: $AbstractForgeMod$Type): $ItemModel$Properties<(any)>
public "register"(arg0: $Item$Type, arg1: string, arg2: $ItemModel$Properties$IPropertyGetter$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$Type<T> = ($ItemModel$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties_<T> = $ItemModel$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/common/$KeyValuePair" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $KeyValuePair extends $Record {
static readonly "EMPTY": $KeyValuePair
static readonly "SEPARATOR": string

constructor(key: string, value: string)

public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "key"(): string
public static "parse"(arg0: string): $KeyValuePair
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyValuePair$Type = ($KeyValuePair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyValuePair_ = $KeyValuePair$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$BlockTagsProvider, $BlockTagsProvider$Type} from "packages/net/minecraftforge/common/data/$BlockTagsProvider"

export interface $DataCollector$BlockTagsProviderFactory<T extends $BlockTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$BlockTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$BlockTagsProviderFactory$Type<T> = ($DataCollector$BlockTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$BlockTagsProviderFactory_<T> = $DataCollector$BlockTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Percentage$Grade, $Percentage$Grade$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage$Grade"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Ordered, $Ordered$Type} from "packages/com/endertech/common/$Ordered"

export class $Percentage implements $Ordered<($Percentage)> {
static readonly "FACTOR": float
static readonly "ZERO": $Percentage
static readonly "HUNDRED": $Percentage

constructor(arg0: float)

public static "value"(arg0: float): $Percentage
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Percentage$Type): integer
public "getValue"(): float
public static "from"(arg0: integer, arg1: integer): $Percentage
public static "from"(arg0: float): $Percentage
public static "parse"(arg0: string): $Percentage
public "multiply"(arg0: float): $Percentage
public "toColoredText"(): string
public "randomResult"(): boolean
public "getGrade"(): $Percentage$Grade
public "takeChance"(): boolean
public "takeChance"(arg0: $Random$Type): boolean
public "toFraction"(): float
public static "min"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public static "max"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public "isLessOrEqualTo"(arg0: $Percentage$Type): boolean
public "isGreaterThan"(arg0: $Percentage$Type): boolean
public "isGreaterOrEqualTo"(arg0: $Percentage$Type): boolean
public "isLessThan"(arg0: $Percentage$Type): boolean
get "grade"(): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Type = ($Percentage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage_ = $Percentage$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ServerCommand$Context, $ServerCommand$Context$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context"
import {$ServerCommand$Arg, $ServerCommand$Arg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg"

export class $ServerCommand$Task {

constructor(arg0: string)

public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, arg1: string): $ServerCommand$Task
public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, ...arg1: ($ServerCommand$Arg$Type<(any)>)[]): $ServerCommand$Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Task$Type = ($ServerCommand$Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Task_ = $ServerCommand$Task$Type;
}}
declare module "packages/com/endertech/common/$IntBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $IntBounds implements $IBounds<(integer)>, $Iterable<(integer)> {
static readonly "ZERO": $IntBounds
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<(integer)>
public static "of"(arg0: integer): $IntBounds
public static "of"(arg0: $IBounds$Type<(any)>): $IntBounds
public "offset"(arg0: integer): $IntBounds
public "reduce"(arg0: integer): $IntBounds
public static "between"(arg0: integer, arg1: integer): $IntBounds
public "interpolateUp"(arg0: float): integer
public "interpolateDown"(arg0: float): integer
public "interpolationFactor"(arg0: integer): float
public "fit"(arg0: $IBounds$Type<(integer)>): $IntBounds
public "within"(arg0: $IBounds$Type<(integer)>): boolean
public "extend"(arg0: integer): $IntBounds
public "encloses"(arg0: integer): boolean
public "corners"(arg0: integer): boolean
public "unite"(arg0: $IBounds$Type<(integer)>): $IntBounds
public "randomFits"(arg0: integer): boolean
public "enclose"(arg0: integer): integer
public "interpolateTo"(arg0: $IBounds$Type<(integer)>): $CommonMath$Interpolation<(integer)>
public "spliterator"(): $Spliterator<(integer)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<integer>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBounds$Type = ($IntBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBounds_ = $IntBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$FeatureDisabler" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$AbstractGenerator, $AbstractGenerator$Type} from "packages/com/endertech/minecraft/forge/world/$AbstractGenerator"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $FeatureDisabler extends $AbstractGenerator implements $BiomeModifier {
static "disabledFeaturesList": $ForgeConfigSpec$ConfigValue<($List<(any)>)>
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

constructor(arg0: $AbstractForgeMod$Type)

public "loadFeatures"(): void
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureDisabler$Type = ($FeatureDisabler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeatureDisabler_ = $FeatureDisabler$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$DepositSample" {
import {$Deposit$Altitude, $Deposit$Altitude$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Altitude"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Deposit$Size, $Deposit$Size$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Size"
import {$Deposit$Rarity, $Deposit$Rarity$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Rarity"

export class $DepositSample extends $Record {

constructor(size: $Deposit$Size$Type, altitude: $Deposit$Altitude$Type, rarity: $Deposit$Rarity$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): $Deposit$Size
public "withAltitude"(arg0: integer, arg1: integer): $DepositSample
public "rarity"(): $Deposit$Rarity
public "getRarity"(arg0: float): integer
public "altitude"(): $Deposit$Altitude
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositSample$Type = ($DepositSample);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositSample_ = $DepositSample$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$DataCollector$ClientDataProviderFactory, $DataCollector$ClientDataProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent, $GatherDataEvent$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent"
import {$DataCollector$ItemTagsProviderFactory, $DataCollector$ItemTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$DataProvider$Factory, $DataProvider$Factory$Type} from "packages/net/minecraft/data/$DataProvider$Factory"
import {$DataCollector$BlockTagsProviderFactory, $DataCollector$BlockTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory"
import {$DataCollector$LanguageProviderFactory, $DataCollector$LanguageProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export class $DataCollector {
readonly "modId": string
readonly "generator": $DataGenerator
readonly "output": $PackOutput
readonly "lookupProvider": $CompletableFuture<($HolderLookup$Provider)>
readonly "fileHelper": $ExistingFileHelper

constructor(arg0: $AbstractForgeMod$Type, arg1: $GatherDataEvent$Type)

public "addBlockAndItemTags"(arg0: $DataCollector$BlockTagsProviderFactory$Type<(any)>, arg1: $DataCollector$ItemTagsProviderFactory$Type<(any)>): $DataCollector
public "addLootTables"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
public "addBlockStates"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
public "addItemModels"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
public "addLanguageUS"(arg0: $DataCollector$LanguageProviderFactory$Type<(any)>): $DataCollector
public "addRecipes"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$Type = ($DataCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector_ = $DataCollector$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Interval" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CommonTime$IMessure, $CommonTime$IMessure$Type} from "packages/com/endertech/common/$CommonTime$IMessure"
import {$CommonTime$Stamp, $CommonTime$Stamp$Type} from "packages/com/endertech/common/$CommonTime$Stamp"

export class $CommonTime$Interval implements $Comparable<($CommonTime$Interval)> {
static readonly "ZERO": $CommonTime$Interval
static readonly "MILLISECONDS_IN_SECOND": integer
static readonly "SECONDS_IN_MINUTE": integer
static readonly "MINUTES_IN_HOUR": integer
static readonly "HOURS_IN_DAY": integer
static readonly "SECONDS_IN_HOUR": integer
static readonly "SECONDS_IN_DAY": integer


public "add"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Interval$Type): integer
public static "of"(arg0: $CommonTime$IMessure$Type, arg1: double): $CommonTime$Interval
public "in"(arg0: $CommonTime$IMessure$Type): double
public static "millis"(arg0: long): $CommonTime$Interval
public static "days"(arg0: integer): $CommonTime$Interval
public "mult"(arg0: double): $CommonTime$Interval
public static "hours"(arg0: double): $CommonTime$Interval
public static "minutes"(arg0: double): $CommonTime$Interval
public static "seconds"(arg0: double): $CommonTime$Interval
public "moreThan"(arg0: $CommonTime$Interval$Type): boolean
public "lessThan"(arg0: $CommonTime$Interval$Type): boolean
public static "leftTo"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public static "passedFrom"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public "inMinutes"(): double
public "inHours"(): double
public "inDays"(): double
public "substract"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
public "inSeconds"(): double
public "inMillis"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Interval$Type = ($CommonTime$Interval);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Interval_ = $CommonTime$Interval$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Configuration" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ConfigCategory, $ConfigCategory$Type} from "packages/com/endertech/minecraft/forge/configs/$ConfigCategory"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Configuration {
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type, arg1: boolean)
constructor(arg0: $File$Type, arg1: string, arg2: boolean)
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type)
constructor()

public "get"(arg0: string, arg1: string, arg2: (double)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: boolean, arg5: integer, arg6: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: double): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string): $Property
public "get"(arg0: string, arg1: string, arg2: boolean): $Property
public "get"(arg0: string, arg1: string, arg2: boolean, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string, arg4: boolean, arg5: integer): $Property
public "toString"(): string
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: string): boolean
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string, arg6: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string): float
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string, arg6: string): float
public "load"(): void
public "save"(): void
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[], arg5: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): string
public "getCategoryNames"(): $Set<(string)>
public "setCategoryConfigEntryClass"(arg0: string, arg1: $Class$Type<(any)>): $Configuration
public "setCategoryRequiresWorldRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryRequiresMcRestart"(arg0: string, arg1: boolean): $Configuration
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[]): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[], arg5: string): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "getDefinedConfigVersion"(): string
public "getLoadedConfigVersion"(): string
public "hasCategory"(arg0: string): boolean
public "removeCategory"(arg0: $ConfigCategory$Type): void
public "setCategoryComment"(arg0: string, arg1: string): $Configuration
public "addCustomCategoryComment"(arg0: string, arg1: string): void
public "setCategoryLanguageKey"(arg0: string, arg1: string): $Configuration
public "setCategoryPropertyOrder"(arg0: string, arg1: $List$Type<(string)>): $Configuration
public "renameProperty"(arg0: string, arg1: string, arg2: string): boolean
public "moveProperty"(arg0: string, arg1: string, arg2: string): boolean
public "copyCategoryProps"(arg0: $Configuration$Type, arg1: (string)[]): void
public "getConfigFile"(): $File
public "getCategory"(arg0: string): $ConfigCategory
public "hasKey"(arg0: string, arg1: string): boolean
public "hasChanged"(): boolean
get "categoryNames"(): $Set<(string)>
get "definedConfigVersion"(): string
get "loadedConfigVersion"(): string
get "configFile"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INetSerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $INetSerializable<T> {

 "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
 "readFrom"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $INetSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetSerializable$Type<T> = ($INetSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetSerializable_<T> = $INetSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IEmitter$Type extends $Enum<($IEmitter$Type)> {
static readonly "BLOCK": $IEmitter$Type
static readonly "TILE": $IEmitter$Type
static readonly "ENTITY": $IEmitter$Type
static readonly "FUEL": $IEmitter$Type


public static "values"(): ($IEmitter$Type)[]
public static "valueOf"(arg0: string): $IEmitter$Type
public static "getByName"(arg0: string): $Optional<($IEmitter$Type)>
public static "getFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: $IEmitter$Type$Type, arg3: string): $IEmitter$Type
public "isBlock"(): boolean
public "isFuel"(): boolean
public "isTile"(): boolean
public "isEntity"(): boolean
get "block"(): boolean
get "fuel"(): boolean
get "tile"(): boolean
get "entity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type$Type = (("fuel") | ("tile") | ("block") | ("entity")) | ($IEmitter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter$Type_ = $IEmitter$Type$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/ore/$WeightedOre" {
import {$CommonCollect$IWeighted, $CommonCollect$IWeighted$Type} from "packages/com/endertech/common/$CommonCollect$IWeighted"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $WeightedOre implements $CommonCollect$IWeighted {

constructor(arg0: $BlockState$Type, arg1: integer)

public "getBlockState"(): $BlockState
public "getWeight"(): integer
get "blockState"(): $BlockState
get "weight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedOre$Type = ($WeightedOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedOre_ = $WeightedOre$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Properties" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Miscellaneous$Properties, $Miscellaneous$Properties$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$Miscellaneous$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$AbstractOre$Properties, $AbstractOre$Properties$Type} from "packages/com/endertech/minecraft/mods/adlods/ore/$AbstractOre$Properties"

export class $Deposit$Properties<T extends $Deposit$Properties<(T)>> extends $AbstractOre$Properties<(T)> {
readonly "name": string
 "vanilla": boolean
 "size": $IntBounds
 "rarity": integer
 "ores": (string)[]
 "indicators": (string)[]
 "altitude": $IntBounds
 "replaceableBlocks": (string)[]
 "allowedDimensions": (string)[]
 "customReplacements": (string)[]
 "miscellaneous": $Miscellaneous$Properties<(any)>
 "id": $UnitId


public "size"(arg0: integer, arg1: integer): T
public static "overworld"(arg0: string): $Deposit$Properties<(any)>
public "vanilla"(): T
public "ores"(...arg0: (string)[]): T
public "rarity"(arg0: integer): T
public static "nether"(arg0: string): $Deposit$Properties<(any)>
public static "deposit"(arg0: string): $Deposit$Properties<(any)>
public "indicators"(...arg0: (string)[]): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$Properties$Type<T> = ($Deposit$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit$Properties_<T> = $Deposit$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$BaseProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BaseProperties<T extends $BaseProperties<(T)>> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseProperties$Type<T> = ($BaseProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseProperties_<T> = $BaseProperties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractSet, $AbstractSet$Type} from "packages/java/util/$AbstractSet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockStatesSet extends $AbstractSet<($BlockState)> {

constructor()

public "add"(arg0: $UnitId$Type): boolean
public "add"(arg0: $BlockState$Type): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($BlockState)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "getFirstFor"(arg0: $Block$Type): $Optional<($BlockState)>
public "getBlocksWithAllStates"(): $Collection<($Block)>
public "hasAllStates"(arg0: $Block$Type): boolean
public static "parseFrom"(arg0: (string)[]): $BlockStatesSet
public "addAllFor"(arg0: $Block$Type): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
get "blocksWithAllStates"(): $Collection<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatesSet$Type = ($BlockStatesSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatesSet_ = $BlockStatesSet$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerCommand$Msg, $ServerCommand$Msg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ServerCommand$Context {
readonly "source": $CommandSourceStack

constructor(arg0: $CommandContext$Type<($CommandSourceStack$Type)>)

public "getEntity"(): $Entity
public "getBlockPos"(): $BlockPos
public "sendMessage"(arg0: $ServerCommand$Msg$Type): void
public "sendMessage"(arg0: string): void
public "rayTraceBlockBeingLookedAt"(arg0: boolean): $Optional<($BlockHitResult)>
public "getLevel"(): $ServerLevel
public "getArgument"<V>(arg0: string, arg1: $Class$Type<(V)>): V
public "getTargetBlockInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getTargetTileInfo"(arg0: $Predicate$Type<(string)>, arg1: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getTargetEntityInfo"(arg0: boolean, arg1: boolean, arg2: $Optional$Type<($Predicate$Type<(string)>)>): $Optional<($Pair<($Entity), ($ServerCommand$Msg)>)>
public "getTargetFluidInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getHeldItemInfo"(arg0: $InteractionHand$Type, arg1: boolean): $Optional<($Pair<($Item), ($ServerCommand$Msg)>)>
public "setReachDistance"(arg0: float): void
get "entity"(): $Entity
get "blockPos"(): $BlockPos
get "level"(): $ServerLevel
set "reachDistance"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Context$Type = ($ServerCommand$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Context_ = $ServerCommand$Context$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$IReloadableData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IReloadableData {

 "loadData"(): void

(): void
}

export namespace $IReloadableData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReloadableData$Type = ($IReloadableData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReloadableData_ = $IReloadableData$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$RelatedUnit$Properties" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $RelatedUnit$Properties<T extends $RelatedUnit$Properties<(T)>> extends $BaseProperties<(T)> {
 "id": $UnitId


public static "of"(): $RelatedUnit$Properties<(any)>
public "id"(arg0: string): T
public "id"(arg0: $UnitId$Type): T
public "emptyToEnumId"(arg0: $Enum$Type<(any)>, arg1: boolean): T
public "metadata"(arg0: string): T
public "enumId"(arg0: string): T
public "metaAll"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelatedUnit$Properties$Type<T> = ($RelatedUnit$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelatedUnit$Properties_<T> = $RelatedUnit$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$IReloadableData, $IReloadableData$Type} from "packages/com/endertech/minecraft/forge/data/$IReloadableData"

export class $AbstractParsableList implements $IReloadableData {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[])

public "loadData"(): void
public "addDefaultValues"(...arg0: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractParsableList$Type = ($AbstractParsableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractParsableList_ = $AbstractParsableList$Type;
}}
declare module "packages/com/endertech/common/$CommonMath$Interpolation" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"

export class $CommonMath$Interpolation<T extends number> {
readonly "source": $IBounds<(T)>
readonly "dest": $IBounds<(T)>

constructor(arg0: $IBounds$Type<(T)>, arg1: $IBounds$Type<(T)>)

public static "down"(arg0: float, arg1: $IntBounds$Type): integer
public static "down"(arg0: float, arg1: $FloatBounds$Type): float
public static "up"(arg0: float, arg1: $IntBounds$Type): integer
public static "up"(arg0: float, arg1: $FloatBounds$Type): float
public "backward"(arg0: T): T
public static "backward"(arg0: float, arg1: float, arg2: float): float
public "straight"(arg0: T): T
public static "straight"(arg0: float, arg1: float, arg2: float): float
public static "strictUp"(arg0: float, arg1: $IntBounds$Type): integer
public static "strictUp"(arg0: float, arg1: $FloatBounds$Type): float
public static "strictDown"(arg0: float, arg1: $FloatBounds$Type): float
public static "strictDown"(arg0: float, arg1: $IntBounds$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonMath$Interpolation$Type<T> = ($CommonMath$Interpolation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonMath$Interpolation_<T> = $CommonMath$Interpolation$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INBTSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $INBTSerializable<T> {

 "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
 "readFrom"(arg0: $CompoundTag$Type): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IReader<T> {

 "read"(arg0: $FriendlyByteBuf$Type): T

(arg0: $FriendlyByteBuf$Type): T
}

export namespace $ForgeNetMsg$IReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IReader$Type<T> = ($ForgeNetMsg$IReader<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IReader_<T> = $ForgeNetMsg$IReader$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$DepositGenerator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$Deposit, $Deposit$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Deposit$Size, $Deposit$Size$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Size"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$DepositSample, $DepositSample$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$DepositSample"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$Deposit$Altitude, $Deposit$Altitude$Type} from "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Altitude"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractGenerator, $AbstractGenerator$Type} from "packages/com/endertech/minecraft/forge/world/$AbstractGenerator"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $DepositGenerator extends $AbstractGenerator {
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

constructor(arg0: $AbstractForgeMod$Type)

public "tryGenerateDeferredDeposits"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "createVanillaDeposit"(arg0: $Path$Type, arg1: string, arg2: $DepositSample$Type, arg3: float, arg4: (string)[]): $Deposit
public "createCustomDeposit"(arg0: $Path$Type, arg1: string, arg2: $DepositSample$Type, arg3: float, arg4: (string)[]): $Deposit
public "createCustomDeposit"(arg0: $Path$Type, arg1: string, arg2: $Deposit$Size$Type, arg3: $Deposit$Altitude$Type, arg4: integer, arg5: (string)[], arg6: (string)[]): $Deposit
public "createCustomDeposit"(arg0: $Path$Type, arg1: string, arg2: $Deposit$Size$Type, arg3: $Deposit$Altitude$Type, arg4: integer, arg5: (string)[]): $Deposit
public "createVanillaNetherDeposit"(arg0: $Path$Type, arg1: string, arg2: $Deposit$Size$Type, arg3: integer, arg4: boolean, arg5: (string)[]): $Deposit
public "getDeposits"(): $List<($Deposit)>
public "loadDeposits"(): void
public "tryGenerateNewDeposits"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "findDepositBy"(arg0: string): $Optional<($Deposit)>
public "removeDeposit"(arg0: $Deposit$Type): boolean
public "getConfigsDir"(): $Path
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public "isOreBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "addDeposit"(arg0: $Deposit$Type): boolean
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
get "deposits"(): $List<($Deposit)>
get "configsDir"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositGenerator$Type = ($DepositGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositGenerator_ = $DepositGenerator$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$IHaveConfig" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IHaveConfig {

 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string
 "getConfig"(): $UnitConfig
 "saveConfig"(): void

(arg0: $Class$Type<(any)>, arg1: string): string
}

export namespace $IHaveConfig {
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveConfig$Type = ($IHaveConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveConfig_ = $IHaveConfig$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemModel$IModelWrapperFactory, $ItemModel$IModelWrapperFactory$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModel$RegistryWrapper {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>)

public "replaceModelOf"(arg0: $BlockState$Type, arg1: $BakedModel$Type): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $BlockState$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $BakedModel$Type): boolean
public "getModelOf"(arg0: $BlockState$Type): $BakedModel
public "getModelOf"(arg0: $Item$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$RegistryWrapper$Type = ($ItemModel$RegistryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$RegistryWrapper_ = $ItemModel$RegistryWrapper$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ServerCommand$OpLevel extends $Enum<($ServerCommand$OpLevel)> {
static readonly "NOOB": $ServerCommand$OpLevel
static readonly "NORMAL": $ServerCommand$OpLevel
static readonly "KICKASS": $ServerCommand$OpLevel
static readonly "GOD": $ServerCommand$OpLevel


public static "values"(): ($ServerCommand$OpLevel)[]
public static "valueOf"(arg0: string): $ServerCommand$OpLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$OpLevel$Type = (("normal") | ("noob") | ("kickass") | ("god")) | ($ServerCommand$OpLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$OpLevel_ = $ServerCommand$OpLevel$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/deposit/$Deposit$Rarity" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"

export class $Deposit$Rarity extends $IntBounds {
static readonly "BOUNDS": $IntBounds
static readonly "ZERO": $IntBounds
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deposit$Rarity$Type = ($Deposit$Rarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deposit$Rarity_ = $Deposit$Rarity$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$Connection" {
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PacketDistributor$TargetPoint, $PacketDistributor$TargetPoint$Type} from "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint"
import {$ChunkLoc, $ChunkLoc$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkLoc"
import {$ForgeNetMsg, $ForgeNetMsg$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Connection {

constructor(arg0: string, arg1: $AbstractForgeMod$RequiredSide$Type)

public "toVanillaPacket"<MSG>(arg0: MSG, arg1: $NetworkDirection$Type): $Packet<(any)>
public "sendToServer"<MSG>(arg0: MSG): void
public "registerNetMessage"<MSG extends $ForgeNetMsg<(MSG)>>(arg0: MSG): void
public "sendToPlayer"<MSG>(arg0: MSG, arg1: $ServerPlayer$Type): void
public "sendToAllInChunk"<MSG>(arg0: MSG, arg1: $ChunkLoc$Type): void
public static "acceptMissingIf"(arg0: boolean): $Predicate<(string)>
public "sendToAllObservingChunk"<MSG>(arg0: MSG, arg1: $LevelChunk$Type): void
public "getServerPlayers"(): $List<($ServerPlayer)>
public "sendToAllInDimension"<MSG>(arg0: MSG, arg1: $DimensionId$Type): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $PacketDistributor$TargetPoint$Type): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $ServerLevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): void
public "sendToAll"<MSG>(arg0: MSG): void
get "serverPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ColorARGB$Channel {
readonly "value": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: integer): $ColorARGB$Channel
public "toFloat"(): float
public static "fromFloat"(arg0: float): $ColorARGB$Channel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Channel$Type = ($ColorARGB$Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB$Channel_ = $ColorARGB$Channel$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$Dimensions" {
import {$CommonCollect$BlackWhiteList, $CommonCollect$BlackWhiteList$Type} from "packages/com/endertech/common/$CommonCollect$BlackWhiteList"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $Dimensions extends $Enum<($Dimensions)> {
static readonly "THE_NETHER": $Dimensions
static readonly "OVERWORLD": $Dimensions
static readonly "THE_END": $Dimensions
readonly "dimensionId": $DimensionId
readonly "replaceableBlockId": $UnitId
static readonly "DIM_LIST_SYNTAX": string


public static "values"(): ($Dimensions)[]
public static "valueOf"(arg0: string): $Dimensions
public static "from"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[], arg4: (string)[]): $CommonCollect$BlackWhiteList<($DimensionId)>
public static "from"(arg0: $UnitConfig$Type, arg1: string, arg2: string): $CommonCollect$BlackWhiteList<($DimensionId)>
public static "findByName"(arg0: string): $Optional<($DimensionId)>
public static "readFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string, arg4: (string)[]): $List<($DimensionId)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimensions$Type = (("the_nether") | ("overworld") | ("the_end")) | ($Dimensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimensions_ = $Dimensions$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adlods/vanilla/$VanillaController" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$AbstractGenerator, $AbstractGenerator$Type} from "packages/com/endertech/minecraft/forge/world/$AbstractGenerator"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $VanillaController extends $AbstractGenerator {
static "disableLargeVeins": $ForgeConfigSpec$ConfigValue<(boolean)>
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

constructor(arg0: $AbstractForgeMod$Type)

public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
public "unloadOres"(): void
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "loadOres"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaController$Type = ($VanillaController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaController_ = $VanillaController$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ForgeNetMsg$IReader, $ForgeNetMsg$IReader$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeNetMsg$IWriter, $ForgeNetMsg$IWriter$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $ForgeNetMsg<MSG extends $ForgeNetMsg<(MSG)>> {

constructor()

public "decode"(arg0: $FriendlyByteBuf$Type): MSG
public "encode"(arg0: MSG, arg1: $FriendlyByteBuf$Type): void
public "handle"(arg0: MSG, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "handle"(arg0: $Level$Type, arg1: $Player$Type): void
public "create"(): MSG
public "getClientPlayer"(): $Player
public "getSide"(arg0: $NetworkEvent$Context$Type): $LogicalSide
public static "addFieldHandler"<T>(arg0: $Class$Type<(T)>, arg1: $ForgeNetMsg$IReader$Type<(T)>, arg2: $ForgeNetMsg$IWriter$Type<(T)>): void
public "getPlayer"(arg0: $NetworkEvent$Context$Type): $Player
get "clientPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$Type<MSG> = ($ForgeNetMsg<(MSG)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg_<MSG> = $ForgeNetMsg$Type<(MSG)>;
}}

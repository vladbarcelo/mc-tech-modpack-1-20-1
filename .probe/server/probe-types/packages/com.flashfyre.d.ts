declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastNoiseLite$Vector3 {
 "x": float
 "y": float
 "z": float

constructor(arg0: float, arg1: float, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$Vector3$Type = ($FastNoiseLite$Vector3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$Vector3_ = $FastNoiseLite$Vector3$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$Vector2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastNoiseLite$Vector2 {
 "x": float
 "y": float

constructor(arg0: float, arg1: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$Vector2$Type = ($FastNoiseLite$Vector2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$Vector2_ = $FastNoiseLite$Vector2$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$CellularDistanceFunction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$CellularDistanceFunction extends $Enum<($FastNoiseLite$CellularDistanceFunction)> {
static readonly "Euclidean": $FastNoiseLite$CellularDistanceFunction
static readonly "EuclideanSq": $FastNoiseLite$CellularDistanceFunction
static readonly "Manhattan": $FastNoiseLite$CellularDistanceFunction
static readonly "Hybrid": $FastNoiseLite$CellularDistanceFunction


public static "values"(): ($FastNoiseLite$CellularDistanceFunction)[]
public static "valueOf"(arg0: string): $FastNoiseLite$CellularDistanceFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$CellularDistanceFunction$Type = (("hybrid") | ("manhattan") | ("euclidean") | ("euclideansq")) | ($FastNoiseLite$CellularDistanceFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$CellularDistanceFunction_ = $FastNoiseLite$CellularDistanceFunction$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/feature/$ImprovedBasaltPillarFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
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
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
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

export class $ImprovedBasaltPillarFeature extends $Feature<($SimpleBlockConfiguration)> {
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

constructor(arg0: $Codec$Type<($SimpleBlockConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($SimpleBlockConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedBasaltPillarFeature$Type = ($ImprovedBasaltPillarFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovedBasaltPillarFeature_ = $ImprovedBasaltPillarFeature$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$RotationType3D" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$RotationType3D extends $Enum<($FastNoiseLite$RotationType3D)> {
static readonly "None": $FastNoiseLite$RotationType3D
static readonly "ImproveXYPlanes": $FastNoiseLite$RotationType3D
static readonly "ImproveXZPlanes": $FastNoiseLite$RotationType3D


public static "values"(): ($FastNoiseLite$RotationType3D)[]
public static "valueOf"(arg0: string): $FastNoiseLite$RotationType3D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$RotationType3D$Type = (("improvexzplanes") | ("none") | ("improvexyplanes")) | ($FastNoiseLite$RotationType3D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$RotationType3D_ = $FastNoiseLite$RotationType3D$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/carver/$LavaCavernsConfiguration" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$CarverDebugSettings, $CarverDebugSettings$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CarverDebugSettings"
import {$CarverConfiguration, $CarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CarverConfiguration"
import {$HeightProvider, $HeightProvider$Type} from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import {$VerticalAnchor, $VerticalAnchor$Type} from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FloatProvider, $FloatProvider$Type} from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $LavaCavernsConfiguration extends $CarverConfiguration {
static readonly "CODEC": $MapCodec<($LavaCavernsConfiguration)>
readonly "noiseThreshold": float
readonly "xzScale": float
readonly "generateAquifers": boolean
readonly "y": $HeightProvider
readonly "yScale": $FloatProvider
readonly "lavaLevel": $VerticalAnchor
readonly "debugSettings": $CarverDebugSettings
readonly "replaceable": $HolderSet<($Block)>
readonly "probability": float

constructor(arg0: float, arg1: float, arg2: $HeightProvider$Type, arg3: $FloatProvider$Type, arg4: $VerticalAnchor$Type, arg5: boolean, arg6: $CarverDebugSettings$Type, arg7: $HolderSet$Type<($Block$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaCavernsConfiguration$Type = ($LavaCavernsConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LavaCavernsConfiguration_ = $LavaCavernsConfiguration$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/feature/$ImprovedLargeDripstoneConfig" {
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$IntProvider, $IntProvider$Type} from "packages/net/minecraft/util/valueproviders/$IntProvider"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FloatProvider, $FloatProvider$Type} from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $ImprovedLargeDripstoneConfig extends $LargeDripstoneConfiguration {
static readonly "CODEC": $Codec<($ImprovedLargeDripstoneConfig)>
readonly "stateProvider": $BlockStateProvider
readonly "floorToCeilingSearchRange": integer
readonly "columnRadius": $IntProvider
readonly "heightScale": $FloatProvider
readonly "maxColumnRadiusToCaveHeightRatio": float
readonly "stalactiteBluntness": $FloatProvider
readonly "stalagmiteBluntness": $FloatProvider
readonly "windSpeed": $FloatProvider
readonly "minRadiusForWind": integer
readonly "minBluntnessForWind": float

constructor(arg0: $BlockStateProvider$Type, arg1: integer, arg2: $IntProvider$Type, arg3: $FloatProvider$Type, arg4: float, arg5: $FloatProvider$Type, arg6: $FloatProvider$Type, arg7: $FloatProvider$Type, arg8: integer, arg9: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedLargeDripstoneConfig$Type = ($ImprovedLargeDripstoneConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovedLargeDripstoneConfig_ = $ImprovedLargeDripstoneConfig$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$CellularReturnType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$CellularReturnType extends $Enum<($FastNoiseLite$CellularReturnType)> {
static readonly "CellValue": $FastNoiseLite$CellularReturnType
static readonly "Distance": $FastNoiseLite$CellularReturnType
static readonly "Distance2": $FastNoiseLite$CellularReturnType
static readonly "Distance2Add": $FastNoiseLite$CellularReturnType
static readonly "Distance2Sub": $FastNoiseLite$CellularReturnType
static readonly "Distance2Mul": $FastNoiseLite$CellularReturnType
static readonly "Distance2Div": $FastNoiseLite$CellularReturnType


public static "values"(): ($FastNoiseLite$CellularReturnType)[]
public static "valueOf"(arg0: string): $FastNoiseLite$CellularReturnType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$CellularReturnType$Type = (("distance2") | ("distance") | ("cellvalue") | ("distance2sub") | ("distance2add") | ("distance2div") | ("distance2mul")) | ($FastNoiseLite$CellularReturnType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$CellularReturnType_ = $FastNoiseLite$CellularReturnType$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/carver/$LavaCavernsCarver" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CaveCarverConfiguration, $CaveCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$CarvingMask, $CarvingMask$Type} from "packages/net/minecraft/world/level/chunk/$CarvingMask"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$WorldCarver, $WorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import {$CanyonCarverConfiguration, $CanyonCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LavaCavernsConfiguration, $LavaCavernsConfiguration$Type} from "packages/com/flashfyre/volcanic_caverns/carver/$LavaCavernsConfiguration"
import {$Aquifer, $Aquifer$Type} from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import {$FastNoiseLite, $FastNoiseLite$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$CarvingContext, $CarvingContext$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LavaCavernsCarver extends $WorldCarver<($LavaCavernsConfiguration)> {
readonly "noise": $FastNoiseLite
readonly "warpNoise": $FastNoiseLite
static readonly "CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "NETHER_CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "CANYON": $WorldCarver<($CanyonCarverConfiguration)>
static readonly "AIR": $BlockState
static readonly "CAVE_AIR": $BlockState
static readonly "WATER": $FluidState
static readonly "LAVA": $FluidState
 "liquids": $Set<($Fluid)>

constructor()

public "setSeed"(arg0: long): void
public "isStartChunk"(arg0: $LavaCavernsConfiguration$Type, arg1: $RandomSource$Type): boolean
public "carve"(arg0: $CarvingContext$Type, arg1: $LavaCavernsConfiguration$Type, arg2: $ChunkAccess$Type, arg3: $Function$Type<($BlockPos$Type), ($Holder$Type<($Biome$Type)>)>, arg4: $RandomSource$Type, arg5: $Aquifer$Type, arg6: $ChunkPos$Type, arg7: $CarvingMask$Type): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaCavernsCarver$Type = ($LavaCavernsCarver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LavaCavernsCarver_ = $LavaCavernsCarver$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/feature/$ImprovedLargeDripstoneFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
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
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$ImprovedLargeDripstoneConfig, $ImprovedLargeDripstoneConfig$Type} from "packages/com/flashfyre/volcanic_caverns/feature/$ImprovedLargeDripstoneConfig"
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

export class $ImprovedLargeDripstoneFeature extends $Feature<($ImprovedLargeDripstoneConfig)> {
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

constructor(arg0: $Codec$Type<($ImprovedLargeDripstoneConfig$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($ImprovedLargeDripstoneConfig$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedLargeDripstoneFeature$Type = ($ImprovedLargeDripstoneFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImprovedLargeDripstoneFeature_ = $ImprovedLargeDripstoneFeature$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$NoiseType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$NoiseType extends $Enum<($FastNoiseLite$NoiseType)> {
static readonly "OpenSimplex2": $FastNoiseLite$NoiseType
static readonly "OpenSimplex2S": $FastNoiseLite$NoiseType
static readonly "Cellular": $FastNoiseLite$NoiseType
static readonly "Perlin": $FastNoiseLite$NoiseType
static readonly "ValueCubic": $FastNoiseLite$NoiseType
static readonly "Value": $FastNoiseLite$NoiseType


public static "values"(): ($FastNoiseLite$NoiseType)[]
public static "valueOf"(arg0: string): $FastNoiseLite$NoiseType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$NoiseType$Type = (("cellular") | ("perlin") | ("valuecubic") | ("value") | ("opensimplex2") | ("opensimplex2s")) | ($FastNoiseLite$NoiseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$NoiseType_ = $FastNoiseLite$NoiseType$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite" {
import {$FastNoiseLite$NoiseType, $FastNoiseLite$NoiseType$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$NoiseType"
import {$FastNoiseLite$RotationType3D, $FastNoiseLite$RotationType3D$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$RotationType3D"
import {$FastNoiseLite$CellularDistanceFunction, $FastNoiseLite$CellularDistanceFunction$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$CellularDistanceFunction"
import {$FastNoiseLite$DomainWarpType, $FastNoiseLite$DomainWarpType$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$DomainWarpType"
import {$FastNoiseLite$CellularReturnType, $FastNoiseLite$CellularReturnType$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$CellularReturnType"
import {$FastNoiseLite$FractalType, $FastNoiseLite$FractalType$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$FractalType"
import {$FastNoiseLite$Vector3, $FastNoiseLite$Vector3$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$Vector3"
import {$FastNoiseLite$Vector2, $FastNoiseLite$Vector2$Type} from "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$Vector2"

export class $FastNoiseLite {

constructor()
constructor(arg0: integer)

public "SetRotationType3D"(arg0: $FastNoiseLite$RotationType3D$Type): void
public "SetFractalPingPongStrength"(arg0: float): void
public "SetCellularReturnType"(arg0: $FastNoiseLite$CellularReturnType$Type): void
public "SetCellularJitter"(arg0: float): void
public "SetDomainWarpType"(arg0: $FastNoiseLite$DomainWarpType$Type): void
public "SetCellularDistanceFunction"(arg0: $FastNoiseLite$CellularDistanceFunction$Type): void
public "SetNoiseType"(arg0: $FastNoiseLite$NoiseType$Type): void
public "SetFractalType"(arg0: $FastNoiseLite$FractalType$Type): void
public "SetFractalGain"(arg0: float): void
public "SetFractalWeightedStrength"(arg0: float): void
public "SetFractalOctaves"(arg0: integer): void
public "SetFractalLacunarity"(arg0: float): void
public "SetDomainWarpAmp"(arg0: float): void
public "SetFrequency"(arg0: float): void
public "SetSeed"(arg0: integer): void
public "GetNoise"(arg0: float, arg1: float, arg2: float): float
public "GetNoise"(arg0: float, arg1: float): float
public "DomainWarp"(arg0: $FastNoiseLite$Vector3$Type): void
public "DomainWarp"(arg0: $FastNoiseLite$Vector2$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$Type = ($FastNoiseLite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite_ = $FastNoiseLite$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$FractalType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$FractalType extends $Enum<($FastNoiseLite$FractalType)> {
static readonly "None": $FastNoiseLite$FractalType
static readonly "FBm": $FastNoiseLite$FractalType
static readonly "Ridged": $FastNoiseLite$FractalType
static readonly "PingPong": $FastNoiseLite$FractalType
static readonly "DomainWarpProgressive": $FastNoiseLite$FractalType
static readonly "DomainWarpIndependent": $FastNoiseLite$FractalType


public static "values"(): ($FastNoiseLite$FractalType)[]
public static "valueOf"(arg0: string): $FastNoiseLite$FractalType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$FractalType$Type = (("fbm") | ("domainwarpindependent") | ("ridged") | ("none") | ("pingpong") | ("domainwarpprogressive")) | ($FastNoiseLite$FractalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$FractalType_ = $FastNoiseLite$FractalType$Type;
}}
declare module "packages/com/flashfyre/volcanic_caverns/util/$FastNoiseLite$DomainWarpType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FastNoiseLite$DomainWarpType extends $Enum<($FastNoiseLite$DomainWarpType)> {
static readonly "OpenSimplex2": $FastNoiseLite$DomainWarpType
static readonly "OpenSimplex2Reduced": $FastNoiseLite$DomainWarpType
static readonly "BasicGrid": $FastNoiseLite$DomainWarpType


public static "values"(): ($FastNoiseLite$DomainWarpType)[]
public static "valueOf"(arg0: string): $FastNoiseLite$DomainWarpType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastNoiseLite$DomainWarpType$Type = (("opensimplex2reduced") | ("basicgrid") | ("opensimplex2")) | ($FastNoiseLite$DomainWarpType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastNoiseLite$DomainWarpType_ = $FastNoiseLite$DomainWarpType$Type;
}}

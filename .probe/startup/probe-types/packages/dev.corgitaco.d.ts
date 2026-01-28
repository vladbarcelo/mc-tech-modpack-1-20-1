declare module "packages/dev/corgitaco/ohthetreesyoullgrow/world/level/chunk/$RandomTickScheduler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $RandomTickScheduler {

 "scheduleRandomTick"(arg0: $BlockPos$Type): void
 "getScheduledRandomTicks"(): $List<($BlockPos)>
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomTickScheduler$Type = ($RandomTickScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomTickScheduler_ = $RandomTickScheduler$Type;
}}
declare module "packages/dev/corgitaco/ohthetreesyoullgrow/world/level/levelgen/feature/$TreeFromStructureNBTFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$TreeDecorator, $TreeDecorator$Type} from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecorator"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IllegalArgumentException, $IllegalArgumentException$Type} from "packages/java/lang/$IllegalArgumentException"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$TreeFromStructureNBTConfig, $TreeFromStructureNBTConfig$Type} from "packages/dev/corgitaco/ohthetreesyoullgrow/world/level/levelgen/feature/configurations/$TreeFromStructureNBTConfig"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$StructurePlaceSettings, $StructurePlaceSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TreeFromStructureNBTFeature extends $Feature<($TreeFromStructureNBTConfig)> {
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

constructor($$0: $Codec$Type<($TreeFromStructureNBTConfig$Type)>)

public static "noTreePartPresent"(location: $ResourceLocation$Type): $IllegalArgumentException
public static "getModifiedPos"(settings: $StructurePlaceSettings$Type, placing: $StructureTemplate$StructureBlockInfo$Type, partCenter: $BlockPos$Type, featureOrigin: $BlockPos$Type): $BlockPos
public static "fillTrunkPositions"(logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, config: $TreeFromStructureNBTConfig$Type, level: $WorldGenLevel$Type, randomSource: $RandomSource$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, trunkBasePalette: $StructureTemplate$Palette$Type, centerOffset: $BlockPos$Type, logs: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, logBuilders: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, leavePositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, trunkPositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, maxTrunkBuildingDepth: integer): void
public static "fillCanopyPositions"(logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, config: $TreeFromStructureNBTConfig$Type, level: $WorldGenLevel$Type, randomSource: $RandomSource$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, randomCanopyPalette: $StructureTemplate$Palette$Type, leavePositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, trunkPositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, trunkLength: integer): boolean
public static "placeAdditional"(config: $TreeFromStructureNBTConfig$Type, level: $WorldGenLevel$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, palette: $StructureTemplate$Palette$Type, centerOffset: $BlockPos$Type): void
public static "placeTreeDecorations"(treeDecorators: $Iterable$Type<($TreeDecorator$Type)>, level: $WorldGenLevel$Type, random: $RandomSource$Type, leavePositions: $Set$Type<($BlockPos$Type)>, trunkPositions: $Set$Type<($BlockPos$Type)>, decorationPositions: $Set$Type<($BlockPos$Type)>): void
public static "fillLogsUnder"(logProvider: $BlockStateProvider$Type, level: $WorldGenLevel$Type, random: $RandomSource$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, centerOffset: $BlockPos$Type, logBuilders: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, maxTrunkBuildingDepth: integer, groundFilter: $BlockPredicate$Type, trunkPositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>): void
public static "placeLogsWithRotation"(logProvider: $BlockStateProvider$Type, level: $WorldGenLevel$Type, random: $RandomSource$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, centerOffset: $BlockPos$Type, logs: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, trunkPositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>): void
public static "intersectTrunk"(logProvider: $BlockStateProvider$Type, level: $WorldGenLevel$Type, random: $RandomSource$Type, origin: $BlockPos$Type, placeSettings: $StructurePlaceSettings$Type, centerOffset: $BlockPos$Type, logBuilders: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, maxTrunkBuildingDepth: integer, trunkPositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>): boolean
public static "getTransformedState"(modifiedPos: $BlockPos$Type, state: $BlockState$Type, nbtState: $BlockState$Type, rotation: $Rotation$Type, level: $WorldGenLevel$Type): $BlockState
public static "getStructureInfosInStructurePalletteFromBlockList"(blocks: $Iterable$Type<($Block$Type)>, palette: $StructureTemplate$Palette$Type): $List<($StructureTemplate$StructureBlockInfo)>
public static "placeLeavesWithCalculatedDistanceAndRotation"(leavesProvider: $BlockStateProvider$Type, level: $WorldGenLevel$Type, origin: $BlockPos$Type, random: $RandomSource$Type, placeSettings: $StructurePlaceSettings$Type, leaves: $List$Type<($StructureTemplate$StructureBlockInfo$Type)>, leavePositions: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, canopyCenterOffset: $BlockPos$Type, leavesPlacementFilter: $BlockPredicate$Type): void
public "place"(featurePlaceContext: $FeaturePlaceContext$Type<($TreeFromStructureNBTConfig$Type)>): boolean
public static "isOnGround"(maxLogDepth: integer, level: $WorldGenLevel$Type, pos: $BlockPos$Type, growableOn: $BlockPredicate$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeFromStructureNBTFeature$Type = ($TreeFromStructureNBTFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeFromStructureNBTFeature_ = $TreeFromStructureNBTFeature$Type;
}}
declare module "packages/dev/corgitaco/ohthetreesyoullgrow/world/level/levelgen/feature/configurations/$TreeFromStructureNBTConfig" {
import {$TreeDecorator, $TreeDecorator$Type} from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecorator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IntProvider, $IntProvider$Type} from "packages/net/minecraft/util/valueproviders/$IntProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TreeFromStructureNBTConfig extends $Record implements $FeatureConfiguration {
static readonly "BLOCK_SET_CODEC": $Codec<($Set<($Block)>)>
static readonly "CODEC": $Codec<($TreeFromStructureNBTConfig)>

constructor(baseLocation: $ResourceLocation$Type, canopyLocation: $ResourceLocation$Type, height: $IntProvider$Type, logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, logTarget: $Set$Type<($Block$Type)>, leavesTarget: $Set$Type<($Block$Type)>, growableOn: $BlockPredicate$Type, leavesPlacementFilter: $BlockPredicate$Type, maxLogDepth: integer, treeDecorators: $List$Type<($TreeDecorator$Type)>, placeFromNBT: $Set$Type<($Block$Type)>)
constructor(baseLocation: $ResourceLocation$Type, canopyLocation: $ResourceLocation$Type, height: $IntProvider$Type, logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, logTarget: $Supplier$Type<(any)>, leavesTarget: $Supplier$Type<(any)>, growableOn: $TagKey$Type<($Block$Type)>, maxLogDepth: integer, treeDecorators: $List$Type<($TreeDecorator$Type)>)
constructor(baseLocation: $ResourceLocation$Type, canopyLocation: $ResourceLocation$Type, height: $IntProvider$Type, logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, logTarget: $Block$Type, leavesTarget: $Block$Type, growableOn: $TagKey$Type<($Block$Type)>, maxLogDepth: integer)
constructor(baseLocation: $ResourceLocation$Type, canopyLocation: $ResourceLocation$Type, height: $IntProvider$Type, logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, logTarget: $Block$Type, leavesTarget: $Block$Type, growableOn: $TagKey$Type<($Block$Type)>, maxLogDepth: integer, treeDecorators: $List$Type<($TreeDecorator$Type)>)
constructor(baseLocation: $ResourceLocation$Type, canopyLocation: $ResourceLocation$Type, height: $IntProvider$Type, logProvider: $BlockStateProvider$Type, leavesProvider: $BlockStateProvider$Type, logTarget: $Collection$Type<($Block$Type)>, leavesTarget: $List$Type<($Block$Type)>, growableOn: $TagKey$Type<($Block$Type)>, maxLogDepth: integer, treeDecorators: $List$Type<($TreeDecorator$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "logProvider"(): $BlockStateProvider
public "leavesProvider"(): $BlockStateProvider
public "baseLocation"(): $ResourceLocation
public "canopyLocation"(): $ResourceLocation
public "maxLogDepth"(): integer
public "treeDecorators"(): $List<($TreeDecorator)>
public "leavesPlacementFilter"(): $BlockPredicate
public "placeFromNBT"(): $Set<($Block)>
public "leavesTarget"(): $Set<($Block)>
public "height"(): $IntProvider
public "logTarget"(): $Set<($Block)>
public "growableOn"(): $BlockPredicate
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeFromStructureNBTConfig$Type = ($TreeFromStructureNBTConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeFromStructureNBTConfig_ = $TreeFromStructureNBTConfig$Type;
}}

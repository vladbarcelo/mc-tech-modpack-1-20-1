declare module "packages/forge/net/mca/entity/ai/$LongTermMemory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $LongTermMemory {

constructor(entity: $VillagerEntityMCA$Type)

public "readFromNbt"(nbt: $CompoundTag$Type): void
public "getMemory"(id: string): long
public "remember"(id: string, time: long): void
public "remember"(id: string): void
public "writeToNbt"(nbt: $CompoundTag$Type): void
public "hasMemory"(id: string): boolean
public static "parseId"(json: $JsonObject$Type, player: $ServerPlayer$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongTermMemory$Type = ($LongTermMemory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongTermMemory_ = $LongTermMemory$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Residency" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Village, $Village$Type} from "packages/forge/net/mca/server/world/data/$Village"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Residency {

constructor(entity: $VillagerEntityMCA$Type)

public "tick"(): void
public "setWorkplace"(player: $ServerPlayer$Type): void
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "getHomeVillage"(): $Optional<($Village)>
public "getWorkplace"(): $BlockPos
public "leaveHome"(): void
public "setHome"(player: $ServerPlayer$Type): void
public "goHome"(player: $Player$Type): void
public "seekHome"(): void
public "getHome"(): $Optional<($GlobalPos)>
set "workplace"(value: $ServerPlayer$Type)
get "homeVillage"(): $Optional<($Village)>
get "workplace"(): $BlockPos
set "home"(value: $ServerPlayer$Type)
get "home"(): $Optional<($GlobalPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Residency$Type = ($Residency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Residency_ = $Residency$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder" {
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CDataManager, $CDataManager$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CDataManager$Builder<E extends $Entity> {

constructor(type: $Class$Type<(E)>)

public "build"(): $CDataManager<(E)>
public "add"(subType: $Function$Type<($CDataManager$Builder$Type<(E)>), ($CDataManager$Builder$Type<(E)>)>): $CDataManager$Builder<(E)>
public "addAll"(...params: ($CParameter$Type<(any), (any)>)[]): $CDataManager$Builder<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CDataManager$Builder$Type<E> = ($CDataManager$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CDataManager$Builder_<E> = $CDataManager$Builder$Type<(E)>;
}}
declare module "packages/forge/net/mca/entity/ai/$Memories" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$DialogueType, $DialogueType$Type} from "packages/forge/net/mca/entity/ai/$DialogueType"
import {$VillagerBrain, $VillagerBrain$Type} from "packages/forge/net/mca/entity/ai/brain/$VillagerBrain"

export class $Memories {

constructor(brain: $VillagerBrain$Type<(any)>, time: long, uuid: $UUID$Type)

public "getDialogueType"(): $DialogueType
public "setDialogueType"(dialogueType: $DialogueType$Type): void
public "getPlayerUUID"(): $UUID
public "getInteractionFatigue"(): integer
public "setInteractionFatigue"(value: integer): void
public "modInteractionFatigue"(value: integer): void
public "setLastSeen"(lastSeen: integer): void
public "getLastSeen"(): long
public "modHearts"(value: integer): void
public "setHearts"(value: integer): void
public "getHearts"(): integer
public static "fromCNBT"<E extends ($Mob) & ($VillagerLike<(E)>)>(villager: E, tag: $CompoundTag$Type): $Memories
public "toCNBT"(): $CompoundTag
get "dialogueType"(): $DialogueType
set "dialogueType"(value: $DialogueType$Type)
get "playerUUID"(): $UUID
get "interactionFatigue"(): integer
set "interactionFatigue"(value: integer)
set "lastSeen"(value: integer)
get "lastSeen"(): long
set "hearts"(value: integer)
get "hearts"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Memories$Type = ($Memories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Memories_ = $Memories$Type;
}}
declare module "packages/forge/net/mca/item/$VillagerTrackerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VillagerTrackerItem extends $Item implements $Vanishable {
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

constructor(settings: $Item$Properties$Type)

public static "getTargetPos"(stack: $ItemStack$Type): $GlobalPos
public "isFoil"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTrackerItem$Type = ($VillagerTrackerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTrackerItem_ = $VillagerTrackerItem$Type;
}}
declare module "packages/forge/net/mca/item/$ExtendedWrittenBookItem" {
import {$Book, $Book$Type} from "packages/forge/net/mca/client/book/$Book"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$WrittenBookItem, $WrittenBookItem$Type} from "packages/net/minecraft/world/item/$WrittenBookItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ExtendedWrittenBookItem extends $WrittenBookItem {
static readonly "TITLE_LENGTH": integer
static readonly "TITLE_MAX_LENGTH": integer
static readonly "PAGE_EDIT_LENGTH": integer
static readonly "PAGE_LENGTH": integer
static readonly "MAX_PAGES": integer
static readonly "MAX_GENERATION": integer
static readonly "TAG_TITLE": string
static readonly "TAG_FILTERED_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "TAG_PAGES": string
static readonly "TAG_FILTERED_PAGES": string
static readonly "TAG_GENERATION": string
static readonly "TAG_RESOLVED": string
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

constructor(settings: $Item$Properties$Type, book: $Book$Type)

public "isFoil"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBook"(item: $ItemStack$Type): $Book
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedWrittenBookItem$Type = ($ExtendedWrittenBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedWrittenBookItem_ = $ExtendedWrittenBookItem$Type;
}}
declare module "packages/forge/net/mca/server/world/data/villageComponents/$VillageGuardsManager" {
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Village, $Village$Type} from "packages/forge/net/mca/server/world/data/$Village"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$EquipmentSet, $EquipmentSet$Type} from "packages/forge/net/mca/entity/$EquipmentSet"

export class $VillageGuardsManager {

constructor(village: $Village$Type)

public static "getEquipmentFor"(dominantHand: $InteractionHand$Type, rightSet: $EquipmentSet$Type, leftSet: $EquipmentSet$Type): $EquipmentSet
public "getGuardEquipment"(profession: $VillagerProfession$Type, dominantHand: $InteractionHand$Type): $EquipmentSet
public "spawnGuards"(world: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageGuardsManager$Type = ($VillageGuardsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillageGuardsManager_ = $VillageGuardsManager$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$RelationshipType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RelationshipType extends $Enum<($RelationshipType)> {
static readonly "STRANGER": $RelationshipType
static readonly "SELF": $RelationshipType
static readonly "SIBLING": $RelationshipType
static readonly "SPOUSE": $RelationshipType
static readonly "PARENT": $RelationshipType
static readonly "CHILD": $RelationshipType


public static "values"(): ($RelationshipType)[]
public static "valueOf"(name: string): $RelationshipType
public "getProximityAmplifier"(): integer
get "proximityAmplifier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelationshipType$Type = (("parent") | ("sibling") | ("self") | ("stranger") | ("spouse") | ("child")) | ($RelationshipType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelationshipType_ = $RelationshipType$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Genetics$Gene" {
import {$Genetics$GeneType, $Genetics$GeneType$Type} from "packages/forge/net/mca/entity/ai/$Genetics$GeneType"
import {$Genetics, $Genetics$Type} from "packages/forge/net/mca/entity/ai/$Genetics"

export class $Genetics$Gene {

constructor(this$0: $Genetics$Type, type: $Genetics$GeneType$Type)

public "get"(): float
public "set"(value: float): void
public "getType"(): $Genetics$GeneType
public "mutate"(mother: $Genetics$Type, father: $Genetics$Type): void
public "randomize"(): void
get "type"(): $Genetics$GeneType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Genetics$Gene$Type = ($Genetics$Gene);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Genetics$Gene_ = $Genetics$Gene$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Genetics$GeneType" {
import {$CDataParameter, $CDataParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CDataParameter"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export class $Genetics$GeneType implements $Comparable<($Genetics$GeneType)> {

constructor(key: string)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "compareTo"(o: $Genetics$GeneType$Type): integer
public "key"(): string
public "getTranslationKey"(): string
public "getParam"(): $CDataParameter<(float)>
get "translationKey"(): string
get "param"(): $CDataParameter<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Genetics$GeneType$Type = ($Genetics$GeneType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Genetics$GeneType_ = $Genetics$GeneType$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$DialogueType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AgeState, $AgeState$Type} from "packages/forge/net/mca/entity/ai/relationship/$AgeState"

export class $DialogueType extends $Enum<($DialogueType)> {
static readonly "ADULT": $DialogueType
static readonly "ADULTP": $DialogueType
static readonly "UNASSIGNED": $DialogueType
static readonly "BABY": $DialogueType
static readonly "CHILD": $DialogueType
static readonly "CHILDP": $DialogueType
static readonly "TODDLER": $DialogueType
static readonly "TODDLERP": $DialogueType
static readonly "SPOUSE": $DialogueType
static readonly "TEEN": $DialogueType
static readonly "TEENP": $DialogueType
static readonly "ENGAGED": $DialogueType
readonly "fallback": $DialogueType
static readonly "MAP": $Map<(string), ($DialogueType)>


public static "values"(): ($DialogueType)[]
public static "valueOf"(name: string): $DialogueType
public static "applyFallback"(key: string): string
public static "byId"(id: integer): $DialogueType
public static "fromAge"(state: $AgeState$Type): $DialogueType
public "toChild"(): $DialogueType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialogueType$Type = (("engaged") | ("toddler") | ("teenp") | ("toddlerp") | ("adultp") | ("baby") | ("unassigned") | ("adult") | ("teen") | ("childp") | ("spouse") | ("child")) | ($DialogueType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialogueType_ = $DialogueType$Type;
}}
declare module "packages/forge/net/mca/block/$InfernalFlameBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$BaseFireBlock, $BaseFireBlock$Type} from "packages/net/minecraft/world/level/block/$BaseFireBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $InfernalFlameBlock extends $BaseFireBlock {
static readonly "AABB_OFFSET": float
static readonly "DOWN_AABB": $VoxelShape
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

constructor(settings: $BlockBehaviour$Properties$Type)

public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfernalFlameBlock$Type = ($InfernalFlameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfernalFlameBlock_ = $InfernalFlameBlock$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$VillageManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ReaperSpawner, $ReaperSpawner$Type} from "packages/forge/net/mca/server/$ReaperSpawner"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Village, $Village$Type} from "packages/forge/net/mca/server/world/data/$Village"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Building$validationResult, $Building$validationResult$Type} from "packages/forge/net/mca/server/world/data/$Building$validationResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VillageManager extends $SavedData implements $Iterable<($Village)> {
readonly "cache": $Set<($BlockPos)>


public "tick"(): void
public static "get"(world: $ServerLevel$Type): $VillageManager
public "iterator"(): $Iterator<($Village)>
public "merge"(into: $Village$Type, from: $Village$Type): void
public "isWithinHorizontalBoundaries"(p: $BlockPos$Type): boolean
public "processBuilding"(pos: $BlockPos$Type, enforce: boolean, strictScan: boolean): $Building$validationResult
public "processBuilding"(pos: $BlockPos$Type): $Building$validationResult
public "findNearestVillage"(entity: $Entity$Type): $Optional<($Village)>
public "findNearestVillage"(p: $BlockPos$Type, margin: integer): $Optional<($Village)>
public "reportBuilding"(pos: $BlockPos$Type): void
public "getReaperSpawner"(): $ReaperSpawner
public "setBuildingCooldown"(buildingCooldown: integer): void
public "findVillages"(predicate: $Predicate$Type<($Village$Type)>): $Stream<($Village)>
public "removeVillage"(id: integer): boolean
public "save"(nbt: $CompoundTag$Type): $CompoundTag
public "getOrEmpty"(id: integer): $Optional<($Village)>
public "spliterator"(): $Spliterator<($Village)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Village>;
get "reaperSpawner"(): $ReaperSpawner
set "buildingCooldown"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageManager$Type = ($VillageManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillageManager_ = $VillageManager$Type;
}}
declare module "packages/forge/net/mca/item/$CombItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CombItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombItem$Type = ($CombItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombItem_ = $CombItem$Type;
}}
declare module "packages/forge/net/mca/item/$WhistleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WhistleItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleItem$Type = ($WhistleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleItem_ = $WhistleItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$ConversationManager" {
import {$ConversationManager$Message, $ConversationManager$Message$Type} from "packages/forge/net/mca/entity/ai/$ConversationManager$Message"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConversationManager {

constructor(entity: $VillagerEntityMCA$Type)

public "getCurrentMessage"(): $Optional<($ConversationManager$Message)>
public "addMessage"(receiver: $Entity$Type, message: $MutableComponent$Type): void
public "addMessage"(message: $ConversationManager$Message$Type): void
get "currentMessage"(): $Optional<($ConversationManager$Message)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConversationManager$Type = ($ConversationManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConversationManager_ = $ConversationManager$Type;
}}
declare module "packages/forge/net/mca/block/$TombstoneBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
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
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TombstoneBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
static readonly "GRAVELLING_SHAPE": $VoxelShape
static readonly "UPRIGHT_SHAPE": $VoxelShape
static readonly "CROSS_SHAPE": $VoxelShape
static readonly "SLANTED_SHAPE": $VoxelShape
static readonly "WALL_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type, lineWidth: integer, maxNameHeight: integer, nameplateOffset: $Vec3$Type, rotation: float, requiresSolid: boolean, baseShape: $VoxelShape$Type)

public "getMaxNameHeight"(): integer
public "getNameplateOffset"(): $Vec3
public "getRotation"(): float
public "getLineWidth"(): integer
/**
 * 
 * @deprecated
 */
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, notify: boolean): void
/**
 * 
 * @deprecated
 */
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moved: boolean): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "isSignalSource"(state: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "getFluidState"(state: $BlockState$Type): $FluidState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
public "getShape"(state: $BlockState$Type, view: $BlockGetter$Type, pos: $BlockPos$Type, ePos: $CollisionContext$Type): $VoxelShape
public "getSignal"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getDirectSignal"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "animateTick"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(world: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "maxNameHeight"(): integer
get "nameplateOffset"(): $Vec3
get "rotation"(): float
get "lineWidth"(): integer
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TombstoneBlock$Type = ($TombstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TombstoneBlock_ = $TombstoneBlock$Type;
}}
declare module "packages/forge/net/mca/client/book/pages/$Page" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ExtendedBookScreen, $ExtendedBookScreen$Type} from "packages/forge/net/mca/client/gui/$ExtendedBookScreen"

export class $Page {

constructor()

public "open"(back: boolean): void
public "previousPage"(): boolean
public "render"(arg0: $ExtendedBookScreen$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: float): void
public "nextPage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Page$Type = ($Page);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Page_ = $Page$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$Building$validationResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Building$validationResult extends $Enum<($Building$validationResult)> {
static readonly "OVERLAP": $Building$validationResult
static readonly "BLOCK_LIMIT": $Building$validationResult
static readonly "SIZE_LIMIT": $Building$validationResult
static readonly "NO_DOOR": $Building$validationResult
static readonly "TOO_SMALL": $Building$validationResult
static readonly "IDENTICAL": $Building$validationResult
static readonly "SUCCESS": $Building$validationResult
static readonly "INVALID_TYPE": $Building$validationResult


public static "values"(): ($Building$validationResult)[]
public static "valueOf"(name: string): $Building$validationResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Building$validationResult$Type = (("too_small") | ("identical") | ("overlap") | ("success") | ("block_limit") | ("no_door") | ("size_limit") | ("invalid_type")) | ($Building$validationResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Building$validationResult_ = $Building$validationResult$Type;
}}
declare module "packages/forge/net/mca/item/$CivilRegistry" {
import {$Book, $Book$Type} from "packages/forge/net/mca/client/book/$Book"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ExtendedWrittenBookItem, $ExtendedWrittenBookItem$Type} from "packages/forge/net/mca/item/$ExtendedWrittenBookItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CivilRegistry extends $ExtendedWrittenBookItem {
static readonly "TITLE_LENGTH": integer
static readonly "TITLE_MAX_LENGTH": integer
static readonly "PAGE_EDIT_LENGTH": integer
static readonly "PAGE_LENGTH": integer
static readonly "MAX_PAGES": integer
static readonly "MAX_GENERATION": integer
static readonly "TAG_TITLE": string
static readonly "TAG_FILTERED_TITLE": string
static readonly "TAG_AUTHOR": string
static readonly "TAG_PAGES": string
static readonly "TAG_FILTERED_PAGES": string
static readonly "TAG_GENERATION": string
static readonly "TAG_RESOLVED": string
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

constructor(settings: $Item$Properties$Type, book: $Book$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CivilRegistry$Type = ($CivilRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CivilRegistry_ = $CivilRegistry$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Mood" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Mood {


public "getName"(): string
public "getParticleInterval"(): integer
public "getSoundInterval"(): integer
public "getSoundMale"(): $SoundEvent
public "getSoundFemale"(): $SoundEvent
public "getParticle"(): $SimpleParticleType
public "getBuilding"(): string
public "getText"(): $Component
public "getColor"(): $ChatFormatting
get "name"(): string
get "particleInterval"(): integer
get "soundInterval"(): integer
get "soundMale"(): $SoundEvent
get "soundFemale"(): $SoundEvent
get "particle"(): $SimpleParticleType
get "building"(): string
get "text"(): $Component
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mood$Type = ($Mood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mood_ = $Mood$Type;
}}
declare module "packages/forge/net/mca/server/$ReaperSpawner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$VillageManager, $VillageManager$Type} from "packages/forge/net/mca/server/world/data/$VillageManager"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReaperSpawner {

constructor(manager: $VillageManager$Type)
constructor(manager: $VillageManager$Type, nbt: $CompoundTag$Type)

public "tick"(world: $ServerLevel$Type): void
public "trySpawnReaper"(world: $ServerLevel$Type, pos: $BlockPos$Type): void
public "writeNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReaperSpawner$Type = ($ReaperSpawner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReaperSpawner_ = $ReaperSpawner$Type;
}}
declare module "packages/forge/net/mca/entity/ai/brain/$VillagerBrain" {
import {$MoveState, $MoveState$Type} from "packages/forge/net/mca/entity/ai/$MoveState"
import {$Personality, $Personality$Type} from "packages/forge/net/mca/entity/ai/relationship/$Personality"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Chore, $Chore$Type} from "packages/forge/net/mca/entity/ai/$Chore"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Mood, $Mood$Type} from "packages/forge/net/mca/entity/ai/$Mood"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Memories, $Memories$Type} from "packages/forge/net/mca/entity/ai/$Memories"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerBrain<E extends ($Mob) & ($VillagerLike<(E)>)> {

constructor(entity: E)

public "getPersonality"(): $Personality
public "isPanicking"(): boolean
public "getMoodValue"(): integer
public "getMoveState"(): $MoveState
public "getCurrentJob"(): $Chore
public "getArmorWear"(): boolean
public "setArmorWear"(s: boolean): void
public "setMoveState"(state: $MoveState$Type, leader: $Player$Type): void
public static "createTrackedData"<E2 extends $Entity>(builder: $CDataManager$Builder$Type<(E2)>): $CDataManager$Builder<(E2)>
public "modifyMoodValue"(mood: integer): void
public "getMemoriesForPlayer"(player: $Player$Type): $Memories
public "updateMoveState"(): void
public "getJobAssigner"(): $Optional<($Player)>
public "setPersonality"(p: $Personality$Type): void
public "updateMemories"(memories: $Memories$Type): void
public "setGrieving"(): void
public "justGrieved"(): void
public "shouldGrieve"(): boolean
public "rewardHearts"(player: $ServerPlayer$Type, hearts: integer): void
public "getMemories"(): $Map<($UUID), ($Memories)>
public "think"(): void
public "getMood"(): $Mood
public "abandonJob"(): void
public "assignJob"(chore: $Chore$Type, player: $Player$Type): void
public "randomize"(): void
get "personality"(): $Personality
get "panicking"(): boolean
get "moodValue"(): integer
get "moveState"(): $MoveState
get "currentJob"(): $Chore
get "armorWear"(): boolean
set "armorWear"(value: boolean)
get "jobAssigner"(): $Optional<($Player)>
set "personality"(value: $Personality$Type)
get "memories"(): $Map<($UUID), ($Memories)>
get "mood"(): $Mood
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerBrain$Type<E> = ($VillagerBrain<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerBrain_<E> = $VillagerBrain$Type<(E)>;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship" {
import {$FamilyTree, $FamilyTree$Type} from "packages/forge/net/mca/server/world/data/$FamilyTree"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$FamilyTreeNode, $FamilyTreeNode$Type} from "packages/forge/net/mca/server/world/data/$FamilyTreeNode"
import {$RelationshipState, $RelationshipState$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipState"
import {$RelationshipType, $RelationshipType$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipType"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRelationship {

 "promise"(spouse: $Entity$Type): void
 "getFamily"(parents: integer, children: integer): $Stream<($Entity)>
 "getFamilyTree"(): $FamilyTree
 "getRelationshipStream"(uuids: $Stream$Type<($UUID$Type)>): $Stream<($EntityRelationship)>
 "getRelationshipState"(): $RelationshipState
 "endRelationShip"(newState: $RelationshipState$Type): void
 "getPartnerUUID"(): $Optional<($UUID)>
 "getPartnerName"(): $Optional<($Component)>
 "isPromisedTo"(uuid: $UUID$Type): boolean
 "isMarriedTo"(uuid: $UUID$Type): boolean
 "isEngagedWith"(uuid: $UUID$Type): boolean
 "getFamilyEntry"(): $FamilyTreeNode
 "getParents"(): $Stream<($Entity)>
 "getWorld"(): $ServerLevel
 "getUUID"(): $UUID
 "getGender"(): $Gender
 "engage"(spouse: $Entity$Type): void
 "marry"(spouse: $Entity$Type): void
 "getPartner"(): $Optional<($Entity)>
 "onTragedy"(cause: $DamageSource$Type, burialSite: $BlockPos$Type, type: $RelationshipType$Type, victim: $Entity$Type): void
 "isPromised"(): boolean
 "isMarried"(): boolean
 "isEngaged"(): boolean
}

export namespace $EntityRelationship {
function of(entity: $Entity$Type): $Optional<($EntityRelationship)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRelationship$Type = ($EntityRelationship);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRelationship_ = $EntityRelationship$Type;
}}
declare module "packages/forge/net/mca/client/gui/$ExtendedBookScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Book, $Book$Type} from "packages/forge/net/mca/client/book/$Book"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $ExtendedBookScreen extends $Screen {
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(book: $Book$Type)

public "getTextRenderer"(): $Font
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "render"(context: $GuiGraphics$Type, mouseX: integer, mouseY: integer, delta: float): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "handleComponentClicked"(style: $Style$Type): boolean
public "setPage"(index: integer): boolean
public "getBook"(): $Book
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "textRenderer"(): $Font
set "page"(value: integer)
get "book"(): $Book
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBookScreen$Type = ($ExtendedBookScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBookScreen_ = $ExtendedBookScreen$Type;
}}
declare module "packages/forge/net/mca/entity/interaction/$ZombieCommandHandler" {
import {$EntityCommandHandler, $EntityCommandHandler$Type} from "packages/forge/net/mca/entity/interaction/$EntityCommandHandler"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ZombieVillagerEntityMCA, $ZombieVillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$ZombieVillagerEntityMCA"

export class $ZombieCommandHandler extends $EntityCommandHandler<($ZombieVillagerEntityMCA)> {

constructor(entity: $ZombieVillagerEntityMCA$Type)

public "handle"(player: $ServerPlayer$Type, command: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieCommandHandler$Type = ($ZombieCommandHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieCommandHandler_ = $ZombieCommandHandler$Type;
}}
declare module "packages/forge/net/mca/entity/$CribWoodType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CribWoodType extends $Enum<($CribWoodType)> {
static readonly "OAK": $CribWoodType
static readonly "SPRUCE": $CribWoodType
static readonly "ACACIA": $CribWoodType
static readonly "BIRCH": $CribWoodType
static readonly "CHERRY": $CribWoodType
static readonly "CRIMSON": $CribWoodType
static readonly "DARK_OAK": $CribWoodType
static readonly "JUNGLE": $CribWoodType
static readonly "MANGROVE": $CribWoodType
static readonly "WARPED": $CribWoodType
static readonly "BAMBOO": $CribWoodType


public static "values"(): ($CribWoodType)[]
public static "valueOf"(name: string): $CribWoodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CribWoodType$Type = (("bamboo") | ("cherry") | ("crimson") | ("birch") | ("oak") | ("acacia") | ("warped") | ("dark_oak") | ("jungle") | ("mangrove") | ("spruce")) | ($CribWoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CribWoodType_ = $CribWoodType$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$Gender" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ZombieVillagerEntityMCA, $ZombieVillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$ZombieVillagerEntityMCA"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $Gender extends $Enum<($Gender)> {
static readonly "UNASSIGNED": $Gender
static readonly "MALE": $Gender
static readonly "FEMALE": $Gender
static readonly "NEUTRAL": $Gender


public "binary"(): $Gender
public static "values"(): ($Gender)[]
public static "valueOf"(name: string): $Gender
public "getId"(): integer
public static "getRandom"(): $Gender
public "getScaleFactor"(): float
public "getZombieType"(): $EntityType<($ZombieVillagerEntityMCA)>
public "getVillagerType"(): $EntityType<($VillagerEntityMCA)>
public "getDataName"(): string
public "getHorizontalScaleFactor"(): float
public static "getText"(t: $Gender$Type): $Component
public "opposite"(): $Gender
public "getColor"(): integer
public static "byName"(name: string): $Gender
public static "byId"(id: integer): $Gender
get "id"(): integer
get "random"(): $Gender
get "scaleFactor"(): float
get "zombieType"(): $EntityType<($ZombieVillagerEntityMCA)>
get "villagerType"(): $EntityType<($VillagerEntityMCA)>
get "dataName"(): string
get "horizontalScaleFactor"(): float
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gender$Type = (("neutral") | ("unassigned") | ("female") | ("male")) | ($Gender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gender_ = $Gender$Type;
}}
declare module "packages/forge/net/mca/mixin/$MixinSensorType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinSensorType {

}

export namespace $MixinSensorType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinSensorType$Type = ($MixinSensorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinSensorType_ = $MixinSensorType$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Traits$Trait" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $Traits$Trait {


public "isEnabled"(): boolean
public "getDescription"(): $Component
public "getName"(): $Component
public static "values"(): $Collection<($Traits$Trait)>
public static "valueOf"(id: string): $Traits$Trait
public "id"(): string
public "isUsableOnPlayer"(): boolean
get "enabled"(): boolean
get "description"(): $Component
get "name"(): $Component
get "usableOnPlayer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Traits$Trait$Type = ($Traits$Trait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Traits$Trait_ = $Traits$Trait$Type;
}}
declare module "packages/forge/net/mca/entity/$VillagerLike$PlayerModel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VillagerLike$PlayerModel extends $Enum<($VillagerLike$PlayerModel)> {
static readonly "VILLAGER": $VillagerLike$PlayerModel
static readonly "PLAYER": $VillagerLike$PlayerModel
static readonly "VANILLA": $VillagerLike$PlayerModel


public static "values"(): ($VillagerLike$PlayerModel)[]
public static "valueOf"(name: string): $VillagerLike$PlayerModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerLike$PlayerModel$Type = (("villager") | ("player") | ("vanilla")) | ($VillagerLike$PlayerModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerLike$PlayerModel_ = $VillagerLike$PlayerModel$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CTrackedEntity" {
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$CDataManager, $CDataManager$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $CTrackedEntity<T extends $Entity> {

 "getTypeDataManager"(): $CDataManager<(T)>
 "getTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>): P
 "setTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>, value: P): void

(): $CDataManager<(T)>
}

export namespace $CTrackedEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTrackedEntity$Type<T> = ($CTrackedEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTrackedEntity_<T> = $CTrackedEntity$Type<(T)>;
}}
declare module "packages/forge/net/mca/item/$ScytheItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ScytheItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(settings: $Item$Properties$Type)

public static "use"(context: $UseOnContext$Type, cure: boolean): $InteractionResult
public "isFoil"(stack: $ItemStack$Type): boolean
public "isValidRepairItem"(stack: $ItemStack$Type, ingredient: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getUseDuration"(stack: $ItemStack$Type): integer
public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$Type, target: $LivingEntity$Type, attacker: $LivingEntity$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public static "hasSoul"(stack: $ItemStack$Type): boolean
public static "setSoul"(stack: $ItemStack$Type, soul: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScytheItem$Type = ($ScytheItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScytheItem_ = $ScytheItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$RelationshipState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RelationshipState extends $Enum<($RelationshipState)> {
static readonly "SINGLE": $RelationshipState
static readonly "PROMISED": $RelationshipState
static readonly "ENGAGED": $RelationshipState
static readonly "MARRIED_TO_VILLAGER": $RelationshipState
static readonly "MARRIED_TO_PLAYER": $RelationshipState
static readonly "WIDOW": $RelationshipState


public "base"(): $RelationshipState
public static "values"(): ($RelationshipState)[]
public static "valueOf"(name: string): $RelationshipState
public "getIcon"(): string
public static "byId"(id: integer): $RelationshipState
public "isMarried"(): boolean
get "icon"(): string
get "married"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelationshipState$Type = (("single") | ("engaged") | ("widow") | ("married_to_player") | ("married_to_villager") | ("promised")) | ($RelationshipState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelationshipState_ = $RelationshipState$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$BreedableRelationship" {
import {$Relationship, $Relationship$Type} from "packages/forge/net/mca/entity/ai/$Relationship"
import {$Relationship$Predicate, $Relationship$Predicate$Type} from "packages/forge/net/mca/entity/ai/$Relationship$Predicate"
import {$EntityRelationship, $EntityRelationship$Type} from "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Pregnancy, $Pregnancy$Type} from "packages/forge/net/mca/entity/ai/$Pregnancy"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Memories, $Memories$Type} from "packages/forge/net/mca/entity/ai/$Memories"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BreedableRelationship extends $Relationship<($VillagerEntityMCA)> {
static readonly "IS_MARRIED": $Relationship$Predicate
static readonly "IS_ENGAGED": $Relationship$Predicate
static readonly "IS_PROMISED": $Relationship$Predicate
static readonly "IS_RELATIVE": $Relationship$Predicate
static readonly "IS_FAMILY": $Relationship$Predicate
static readonly "IS_PARENT": $Relationship$Predicate
static readonly "IS_KID": $Relationship$Predicate
static readonly "IS_ORPHAN": $Relationship$Predicate

constructor(entity: $VillagerEntityMCA$Type)

public "tick"(age: integer): void
public "getPregnancy"(): $Pregnancy
public "isProcreating"(): boolean
public "mayProcreateAgain"(time: long): boolean
public "startProcreating"(time: long): void
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "giveGift"(player: $ServerPlayer$Type, memory: $Memories$Type): void
public static "of"(entity: $Entity$Type): $Optional<($EntityRelationship)>
get "pregnancy"(): $Pregnancy
get "procreating"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreedableRelationship$Type = ($BreedableRelationship);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreedableRelationship_ = $BreedableRelationship$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$Building" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BuildingType, $BuildingType$Type} from "packages/forge/net/mca/resources/data/$BuildingType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Building$validationResult, $Building$validationResult$Type} from "packages/forge/net/mca/server/world/data/$Building$validationResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Building implements $Serializable {
static readonly "SCAN_COOLDOWN": long

constructor()
constructor(pos: $BlockPos$Type, strictScan: boolean)
constructor(pos: $BlockPos$Type)
constructor(v: $CompoundTag$Type)

public "setType"(type: string): void
public "overlaps"(b: $Building$Type): boolean
public "getId"(): integer
public "save"(): $CompoundTag
public "getType"(): string
public "getSize"(): integer
public "setTypeForced"(forced: boolean): void
public "determineType"(): boolean
public "containsPos"(pos: $Vec3i$Type): boolean
public "isStrictScan"(): boolean
public "removeBlock"(block: $Block$Type, p: $BlockPos$Type): void
public "getBuildingType"(): $BuildingType
public "isComplete"(): boolean
public "setId"(id: integer): void
public "isIdentical"(b: $Building$Type): boolean
public "setLastScan"(lastScan: long): void
public "validateBuilding"(world: $Level$Type, blocked: $Set$Type<($BlockPos$Type)>): $Building$validationResult
public "getBlockPosStream"(): $Stream<($BlockPos)>
public "getBlockCount"(): integer
public "isTypeForced"(): boolean
public "validateBlocks"(world: $Level$Type): void
public "getLastScan"(): long
public "getSourceBlock"(): $BlockPos
public "getBlocks"(): $Map<($ResourceLocation), ($List<($BlockPos)>)>
public "getCenter"(): $BlockPos
public "addBlock"(block: $Block$Type, p: $BlockPos$Type): void
public "getPos1"(): $BlockPos
public "getPos0"(): $BlockPos
public "addPOI"(world: $Level$Type, pos: $BlockPos$Type): void
set "type"(value: string)
get "id"(): integer
get "type"(): string
get "size"(): integer
set "typeForced"(value: boolean)
get "strictScan"(): boolean
get "buildingType"(): $BuildingType
get "complete"(): boolean
set "id"(value: integer)
set "lastScan"(value: long)
get "blockPosStream"(): $Stream<($BlockPos)>
get "blockCount"(): integer
get "typeForced"(): boolean
get "lastScan"(): long
get "sourceBlock"(): $BlockPos
get "blocks"(): $Map<($ResourceLocation), ($List<($BlockPos)>)>
get "center"(): $BlockPos
get "pos1"(): $BlockPos
get "pos0"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Building$Type = ($Building);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Building_ = $Building$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$Personality" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Personality extends $Enum<($Personality)> {
static readonly "UNASSIGNED": $Personality
static readonly "ATHLETIC": $Personality
static readonly "CONFIDENT": $Personality
static readonly "FRIENDLY": $Personality
static readonly "FLIRTY": $Personality
static readonly "WITTY": $Personality
static readonly "SHY": $Personality
static readonly "GLOOMY": $Personality
static readonly "SENSITIVE": $Personality
static readonly "GREEDY": $Personality
static readonly "ODD": $Personality
static readonly "LAZY": $Personality
static readonly "GRUMPY": $Personality
static readonly "PEPPY": $Personality


public "getDescription"(): $Component
public "getName"(): $Component
public static "values"(): ($Personality)[]
public static "valueOf"(name: string): $Personality
public static "getRandom"(): $Personality
public "getSpeedModifier"(): float
get "description"(): $Component
get "name"(): $Component
get "random"(): $Personality
get "speedModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Personality$Type = (("flirty") | ("shy") | ("friendly") | ("lazy") | ("confident") | ("unassigned") | ("sensitive") | ("grumpy") | ("odd") | ("gloomy") | ("witty") | ("greedy") | ("peppy") | ("athletic")) | ($Personality);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Personality_ = $Personality$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CEnumParameter" {
import {$CDataParameter, $CDataParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CDataParameter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"

export class $CEnumParameter<T extends $Enum<(T)>> implements $CParameter<(T), (integer)> {

constructor(id: string, type: $Class$Type<(T)>, dv: T)

public "get"(param: $EntityDataAccessor$Type<(integer)>, tracker: $SynchedEntityData$Type): T
public "load"(nbt: $CompoundTag$Type): T
public "set"(param: $EntityDataAccessor$Type<(integer)>, tracker: $SynchedEntityData$Type, v: T): void
public "save"(nbt: $CompoundTag$Type, value: T): void
public "createParam"(type: $Class$Type<(any)>): $EntityDataAccessor<(integer)>
public static "create"<T extends $Enum<(T)>>(id: string, def: T): $CEnumParameter<(T)>
public static "create"<T extends $Enum<(T)>>(id: string, type: $Class$Type<(T)>): $CEnumParameter<(T)>
public static "create"(id: string, def: integer): $CDataParameter<(integer)>
public static "create"(id: string, def: $CompoundTag$Type): $CDataParameter<($CompoundTag)>
public static "create"(id: string, def: string): $CDataParameter<(string)>
public static "create"(id: string, def: boolean): $CDataParameter<(boolean)>
public static "create"(id: string, def: float): $CDataParameter<(float)>
public static "create"(id: string, def: $Optional$Type<($UUID$Type)>): $CDataParameter<($Optional<($UUID)>)>
public static "create"(id: string, def: $BlockPos$Type): $CDataParameter<($BlockPos)>
public static "create"(id: string, def: $ItemStack$Type): $CDataParameter<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CEnumParameter$Type<T> = ($CEnumParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CEnumParameter_<T> = $CEnumParameter$Type<(T)>;
}}
declare module "packages/forge/net/mca/entity/ai/$Relationship$Predicate" {
import {$CompassionateEntity, $CompassionateEntity$Type} from "packages/forge/net/mca/entity/ai/relationship/$CompassionateEntity"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $Relationship$Predicate extends $BiPredicate<($CompassionateEntity<(any)>), ($Entity)> {

 "negate"(): $Relationship$Predicate
 "or"(b: $Relationship$Predicate$Type): $Relationship$Predicate
 "test"(arg0: $CompassionateEntity$Type<(any)>, arg1: $UUID$Type): boolean
 "test"(villager: $CompassionateEntity$Type<(any)>, partner: $Entity$Type): boolean
 "asConstraint"(): $BiPredicate<($VillagerLike<(any)>), ($ServerPlayer)>
 "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($CompassionateEntity<(any)>), ($Entity)>
 "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($CompassionateEntity<(any)>), ($Entity)>

(): $Relationship$Predicate
}

export namespace $Relationship$Predicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Relationship$Predicate$Type = ($Relationship$Predicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Relationship$Predicate_ = $Relationship$Predicate$Type;
}}
declare module "packages/forge/net/mca/entity/interaction/gifts/$GiftSaturation" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $GiftSaturation {

constructor()

public "pop"(): void
public "add"(stack: $ItemStack$Type): void
public "get"(stack: $ItemStack$Type): integer
public "readFromNbt"(nbt: $ListTag$Type): void
public "toNbt"(): $ListTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiftSaturation$Type = ($GiftSaturation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiftSaturation_ = $GiftSaturation$Type;
}}
declare module "packages/forge/net/mca/entity/$EquipmentSet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EquipmentSet extends $Enum<($EquipmentSet)> {
static readonly "NAKED": $EquipmentSet
static readonly "GUARD_0": $EquipmentSet
static readonly "GUARD_0_LEFT": $EquipmentSet
static readonly "GUARD_1": $EquipmentSet
static readonly "GUARD_2": $EquipmentSet
static readonly "ARCHER_0": $EquipmentSet
static readonly "ARCHER_0_LEFT": $EquipmentSet
static readonly "ARCHER_1": $EquipmentSet
static readonly "ARCHER_1_LEFT": $EquipmentSet
static readonly "ARCHER_2": $EquipmentSet
static readonly "ARCHER_2_LEFT": $EquipmentSet
static readonly "ELITE": $EquipmentSet
static readonly "ROYAL": $EquipmentSet


public "getHead"(): $Item
public static "values"(): ($EquipmentSet)[]
public static "valueOf"(name: string): $EquipmentSet
public "getMainHand"(): $Item
public "getGetOffHand"(): $Item
public "getChest"(): $Item
public "getLegs"(): $Item
public "getFeet"(): $Item
get "head"(): $Item
get "mainHand"(): $Item
get "getOffHand"(): $Item
get "chest"(): $Item
get "legs"(): $Item
get "feet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentSet$Type = (("archer_0_left") | ("guard_1") | ("guard_0") | ("archer_1") | ("archer_0") | ("archer_2") | ("naked") | ("guard_2") | ("archer_2_left") | ("elite") | ("guard_0_left") | ("archer_1_left") | ("royal")) | ($EquipmentSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentSet_ = $EquipmentSet$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$Village" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$VillageGuardsManager, $VillageGuardsManager$Type} from "packages/forge/net/mca/server/world/data/villageComponents/$VillageGuardsManager"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Building, $Building$Type} from "packages/forge/net/mca/server/world/data/$Building"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"
import {$BlockBoxExtended, $BlockBoxExtended$Type} from "packages/forge/net/mca/util/$BlockBoxExtended"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CivilRegistryManager, $CivilRegistryManager$Type} from "packages/forge/net/mca/server/world/data/$CivilRegistryManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Village implements $Iterable<($Building)> {
static readonly "PLAYER_BORDER_MARGIN": integer
static readonly "BORDER_MARGIN": integer
static readonly "MERGE_MARGIN": integer
readonly "storageBuffer": $List<($ItemStack)>
 "lastMoveIn": long

constructor(id: integer, world: $ServerLevel$Type)
constructor(v: $CompoundTag$Type, world: $ServerLevel$Type)

public "tick"(world: $ServerLevel$Type, time: long): void
public "getName"(): string
public "iterator"(): $Iterator<($Building)>
public "merge"(village: $Village$Type): void
public "setName"(name: string): void
public "getId"(): integer
public "save"(): $CompoundTag
public "getPopulationThreshold"(): float
public "getMarriageThreshold"(): float
public "setPopulationThreshold"(populationThreshold: float): void
public "setMarriageThreshold"(marriageThreshold: float): void
public "updateResident"(e: $VillagerEntityMCA$Type): void
public "toggleAutoScan"(): void
public "removeBuilding"(id: integer): void
public "getBuildings"(): $Map<(integer), ($Building)>
public "getCivilRegistry"(): $Optional<($CivilRegistryManager)>
public "hasBuilding"(building: string): boolean
public static "findNearest"(entity: $Entity$Type): $Optional<($Village)>
public "updateMaxPopulation"(): void
public "getReputation"(player: $Player$Type): integer
public "broadCastMessage"(world: $ServerLevel$Type, event: string, suitor: $VillagerEntityMCA$Type, mate: $VillagerEntityMCA$Type): void
public "broadCastMessage"(world: $ServerLevel$Type, event: string, targetName: string): void
public "getPopulation"(): integer
public "getMaxPopulation"(): integer
public "getResidents"(building: integer): $List<(string)>
public "getResidents"(world: $ServerLevel$Type): $List<($VillagerEntityMCA)>
public "getResidentNames"(): $Map<($UUID), (string)>
public "getBuildingAt"(pos: $Vec3i$Type): $Optional<($Building)>
public "setReputation"(player: $Player$Type, villager: $VillagerEntityMCA$Type, rep: integer): void
public "removeResident"(uuid: $UUID$Type): void
public "removeResident"(villager: $VillagerEntityMCA$Type): void
public "getBuilding"(id: integer): $Optional<($Building)>
public "getResidentsUUIDs"(): $Stream<($UUID)>
public "getBuildingsOfType"(type: string): $Stream<($Building)>
public "isWithinBorder"(entity: $Entity$Type): boolean
public "isWithinBorder"(pos: $BlockPos$Type, margin: integer): boolean
public "isPositionValidBed"(pos: $BlockPos$Type): boolean
public "calculateDimensions"(): void
public "setAutoScan"(autoScan: boolean): void
public "getVillageGuardsManager"(): $VillageGuardsManager
public "hasResident"(id: $UUID$Type): boolean
public "resetHearts"(player: $Player$Type): void
public "cleanReputation"(): void
public "hasStoredResource"(): boolean
public "getCenter"(): $Vec3i
public "markDirty"(): void
public "getBox"(): $BlockBoxExtended
public "hasSpace"(): boolean
public "getTaxes"(): float
public "setTaxes"(taxes: float): void
public "isVillage"(): boolean
public "pushHearts"(player: $UUID$Type, rep: integer): void
public "pushHearts"(player: $Player$Type, rep: integer): void
public "isAutoScan"(): boolean
public "popMood"(): integer
public "popHearts"(player: $Player$Type): integer
public "onEnter"(world: $ServerLevel$Type): void
public "pushMood"(m: integer): void
public "spliterator"(): $Spliterator<($Building)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Building>;
get "name"(): string
set "name"(value: string)
get "id"(): integer
get "populationThreshold"(): float
get "marriageThreshold"(): float
set "populationThreshold"(value: float)
set "marriageThreshold"(value: float)
get "buildings"(): $Map<(integer), ($Building)>
get "civilRegistry"(): $Optional<($CivilRegistryManager)>
get "population"(): integer
get "maxPopulation"(): integer
get "residentNames"(): $Map<($UUID), (string)>
get "residentsUUIDs"(): $Stream<($UUID)>
set "autoScan"(value: boolean)
get "villageGuardsManager"(): $VillageGuardsManager
get "center"(): $Vec3i
get "box"(): $BlockBoxExtended
get "taxes"(): float
set "taxes"(value: float)
get "village"(): boolean
get "autoScan"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Village$Type = ($Village);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Village_ = $Village$Type;
}}
declare module "packages/forge/net/mca/client/render/layer/$SkinLayer" {
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$VillagerLayer, $VillagerLayer$Type} from "packages/forge/net/mca/client/render/layer/$VillagerLayer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SkinLayer<T extends $LivingEntity, M extends $HumanoidModel<(T)>> extends $VillagerLayer<(T), (M)> {
readonly "model": M

constructor(renderer: $RenderLayerParent$Type<(T), (M)>, model: M)

public "getColor"(villager: T, tickDelta: float): (float)[]
public "getSkin"(villager: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinLayer$Type<T, M> = ($SkinLayer<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkinLayer_<T, M> = $SkinLayer$Type<(T), (M)>;
}}
declare module "packages/forge/net/mca/item/$RelationshipItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpecialCaseGift, $SpecialCaseGift$Type} from "packages/forge/net/mca/item/$SpecialCaseGift"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $RelationshipItem extends $TooltippedItem implements $SpecialCaseGift {
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

constructor(properties: $Item$Properties$Type)

public "handle"(player: $ServerPlayer$Type, villager: $VillagerEntityMCA$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelationshipItem$Type = ($RelationshipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelationshipItem_ = $RelationshipItem$Type;
}}
declare module "packages/forge/net/mca/resources/data/$BuildingType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BuildingType implements $Serializable {

constructor(name: string, value: $JsonObject$Type)
constructor()

public "visible"(): boolean
public "name"(): string
public "priority"(): integer
public "color"(): string
public "getMinBlocks"(): integer
public "getBlockToGroup"(): $Map<($ResourceLocation), ($ResourceLocation)>
public "getGroups"(): $Map<($ResourceLocation), (integer)>
public "getGroups"(blocks: $Map$Type<($ResourceLocation$Type), ($List$Type<($BlockPos$Type)>)>): $Map<($ResourceLocation), ($List<($BlockPos)>)>
public "getColor"(): integer
public "grouped"(): boolean
public "noBeds"(): boolean
public "iconU"(): integer
public "iconV"(): integer
public "isIcon"(): boolean
public "getMargin"(): integer
public "mergeRange"(): integer
get "minBlocks"(): integer
get "blockToGroup"(): $Map<($ResourceLocation), ($ResourceLocation)>
get "groups"(): $Map<($ResourceLocation), (integer)>
get "icon"(): boolean
get "margin"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingType$Type = ($BuildingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingType_ = $BuildingType$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$ConversationManager$Message" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ConversationManager$Message {
readonly "validUntil": integer
static readonly "TIME_VALID": integer


public "deliver"(): void
public "getReceiver"(): $Entity
public "stillValid"(): boolean
get "receiver"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConversationManager$Message$Type = ($ConversationManager$Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConversationManager$Message_ = $ConversationManager$Message$Type;
}}
declare module "packages/forge/net/mca/item/$BouquetItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RelationshipItem, $RelationshipItem$Type} from "packages/forge/net/mca/item/$RelationshipItem"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $BouquetItem extends $RelationshipItem {
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

constructor(properties: $Item$Properties$Type)

public "handle"(player: $ServerPlayer$Type, villager: $VillagerEntityMCA$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BouquetItem$Type = ($BouquetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BouquetItem_ = $BouquetItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$VillagerDimensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerDimensions {

 "getHead"(): float
 "getWidth"(): float
 "getHeight"(): float
 "getBreasts"(): float
}

export namespace $VillagerDimensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerDimensions$Type = ($VillagerDimensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerDimensions_ = $VillagerDimensions$Type;
}}
declare module "packages/forge/net/mca/entity/$Infectable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Infectable {

 "setInfected"(infected: boolean): void
 "getInfectionProgress"(): float
 "setInfectionProgress"(arg0: float): void
 "isInfected"(): boolean
}

export namespace $Infectable {
const INITIAL_INFECTION_AMOUNT: float
const FEVER_THRESHOLD: float
const BABBLING_THRESHOLD: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Infectable$Type = ($Infectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Infectable_ = $Infectable$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Genetics" {
import {$Genetics$Gene, $Genetics$Gene$Type} from "packages/forge/net/mca/entity/ai/$Genetics$Gene"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Genetics$GeneType, $Genetics$GeneType$Type} from "packages/forge/net/mca/entity/ai/$Genetics$GeneType"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Genetics implements $Iterable<($Genetics$Gene)> {
static readonly "SIZE": $Genetics$GeneType
static readonly "WIDTH": $Genetics$GeneType
static readonly "BREAST": $Genetics$GeneType
static readonly "MELANIN": $Genetics$GeneType
static readonly "HEMOGLOBIN": $Genetics$GeneType
static readonly "EUMELANIN": $Genetics$GeneType
static readonly "PHEOMELANIN": $Genetics$GeneType
static readonly "SKIN": $Genetics$GeneType
static readonly "FACE": $Genetics$GeneType
static readonly "VOICE": $Genetics$GeneType
static readonly "VOICE_TONE": $Genetics$GeneType

constructor(entity: $VillagerLike$Type<(any)>)

public "iterator"(): $Iterator<($Genetics$Gene)>
public "combine"(mother: $Genetics$Type, father: $Genetics$Type, seed: long): void
public "combine"(mother: $Genetics$Type, father: $Genetics$Type): void
public "getVerticalScaleFactor"(): float
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "getBreastSize"(): float
public "getHorizontalScaleFactor"(): float
public "getGender"(): $Gender
public "setGender"(gender: $Gender$Type): void
public "getGene"(type: $Genetics$GeneType$Type): float
public "randomize"(): void
public "setGene"(type: $Genetics$GeneType$Type, value: float): void
public "getGenome"(type: $Genetics$GeneType$Type): $Genetics$Gene
public "spliterator"(): $Spliterator<($Genetics$Gene)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Genetics$Gene>;
get "verticalScaleFactor"(): float
get "breastSize"(): float
get "horizontalScaleFactor"(): float
get "gender"(): $Gender
set "gender"(value: $Gender$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Genetics$Type = ($Genetics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Genetics_ = $Genetics$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Chore" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $Chore extends $Enum<($Chore)> {
static readonly "NONE": $Chore
static readonly "PROSPECT": $Chore
static readonly "HARVEST": $Chore
static readonly "CHOP": $Chore
static readonly "HUNT": $Chore
static readonly "FISH": $Chore


public "getName"(): $Component
public static "values"(): ($Chore)[]
public static "valueOf"(name: string): $Chore
public "getToolType"(): $Class<(any)>
public static "byId"(id: integer): $Chore
public static "byCommand"(action: string): $Optional<($Chore)>
get "name"(): $Component
get "toolType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chore$Type = (("prospect") | ("harvest") | ("hunt") | ("fish") | ("chop") | ("none")) | ($Chore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chore_ = $Chore$Type;
}}
declare module "packages/forge/net/mca/entity/$VillagerLike" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityCommandHandler, $EntityCommandHandler$Type} from "packages/forge/net/mca/entity/interaction/$EntityCommandHandler"
import {$VillagerDimensions, $VillagerDimensions$Type} from "packages/forge/net/mca/entity/ai/relationship/$VillagerDimensions"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$DialogueType, $DialogueType$Type} from "packages/forge/net/mca/entity/ai/$DialogueType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Infectable, $Infectable$Type} from "packages/forge/net/mca/entity/$Infectable"
import {$CEnumParameter, $CEnumParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CEnumParameter"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AgeState, $AgeState$Type} from "packages/forge/net/mca/entity/ai/relationship/$AgeState"
import {$CDataParameter, $CDataParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CDataParameter"
import {$Traits, $Traits$Type} from "packages/forge/net/mca/entity/ai/$Traits"
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerSaveData, $PlayerSaveData$Type} from "packages/forge/net/mca/server/world/data/$PlayerSaveData"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Genetics, $Genetics$Type} from "packages/forge/net/mca/entity/ai/$Genetics"
import {$VillagerBrain, $VillagerBrain$Type} from "packages/forge/net/mca/entity/ai/brain/$VillagerBrain"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VillagerLike$PlayerModel, $VillagerLike$PlayerModel$Type} from "packages/forge/net/mca/entity/$VillagerLike$PlayerModel"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CDataManager, $CDataManager$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager"
import {$VillagerType, $VillagerType$Type} from "packages/net/minecraft/world/entity/npc/$VillagerType"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Messenger, $Messenger$Type} from "packages/forge/net/mca/entity/ai/$Messenger"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$VillagerDataHolder, $VillagerDataHolder$Type} from "packages/net/minecraft/world/entity/npc/$VillagerDataHolder"
import {$CTrackedEntity, $CTrackedEntity$Type} from "packages/forge/net/mca/util/network/datasync/$CTrackedEntity"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"

export interface $VillagerLike<E extends ($Entity) & ($VillagerLike<(E)>)> extends $CTrackedEntity<(E)>, $VillagerDataHolder, $Infectable, $Messenger {

 "initialize"(spawnReason: $MobSpawnType$Type): void
 "setName"(name: string): void
 "clearHairDye"(): void
 "getVillagerDimensions"(): $VillagerDimensions
 "setAgeState"(state: $AgeState$Type): boolean
 "getDialogueType"(receiver: $Player$Type): $DialogueType
 "randomizeClothes"(): void
 "randomizeHair"(): void
 "toNbtForConversion"(convertingTo: $EntityType$Type<(any)>): $CompoundTag
 "readNbtForConversion"(convertingFrom: $EntityType$Type<(any)>, input: $CompoundTag$Type): void
 "copyVillagerAttributesFrom"(other: $VillagerLike$Type<(any)>): void
 "spawnBurntParticles"(): void
 "initializeSkin"(isPlayer: boolean): void
 "validateClothes"(): void
 "isSpeechImpaired"(): boolean
 "isToYoungToSpeak"(): boolean
 "setCustomSkin"(name: string): void
 "updateCustomSkin"(): void
 "getGameProfile"(): $GameProfile
 "hasCustomSkin"(): boolean
 "getAttractedGenderSet"(villager: $VillagerLike$Type<(any)>): $Set<($Gender)>
 "getDominantHand"(): $InteractionHand
 "getOpposingHand"(): $InteractionHand
 "getSlotForHand"(hand: $InteractionHand$Type): $EquipmentSlot
 "getDominantSlot"(): $EquipmentSlot
 "getOpposingSlot"(): $EquipmentSlot
 "getProfessionId"(): $ResourceLocation
 "getProfessionName"(): string
 "getProfessionText"(): $MutableComponent
 "isProfessionImportant"(): boolean
 "requiresHome"(): boolean
 "canTradeWithProfession"(): boolean
 "getGenetics"(): $Genetics
 "getVillagerBrain"(): $VillagerBrain<(any)>
 "canBeAttractedTo"(other: $PlayerSaveData$Type): boolean
 "canBeAttractedTo"(other: $VillagerLike$Type<(any)>): boolean
 "getPlayerModel"(): $VillagerLike$PlayerModel
 "getRawScaleFactor"(): float
 "getHorizontalScaleFactor"(): float
 "getAgeState"(): $AgeState
 "updateSpeed"(): void
 "getInteractions"(): $EntityCommandHandler<(any)>
 "getTraits"(): $Traits
 "setHair"(hair: $ResourceLocation$Type): void
 "setHair"(hair: string): void
 "setHairDye"(r: float, g: float, b: float): void
 "setHairDye"(color: $DyeColor$Type): void
 "getHairDye"(): (float)[]
 "isHostile"(): boolean
 "isBurned"(): boolean
 "getClothes"(): string
 "setClothes"(clothes: string): void
 "setClothes"(clothes: $ResourceLocation$Type): void
 "getHair"(): string
 "getTypeDataManager"(): $CDataManager<(E)>
 "getTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>): P
 "setTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>, value: P): void
 "setVariant"(arg0: $VillagerType$Type): void
 "getVillagerData"(): $VillagerData
 "setVillagerData"(arg0: $VillagerData$Type): void
 "setInfected"(infected: boolean): void
 "getInfectionProgress"(): float
 "setInfectionProgress"(arg0: float): void
 "isInfected"(): boolean
 "sendChatMessage"(target: $Player$Type, phraseId: string, ...params: (any)[]): void
 "sendChatMessage"(message: $MutableComponent$Type, receiver: $Entity$Type): $MutableComponent
 "playSpeechEffect"(): void
 "getTranslatable"(target: $Player$Type, phraseId: string, ...params: (any)[]): $MutableComponent
 "sendChatToAllAround"(phrase: string, ...params: (any)[]): void
 "sendChatToAllAround"(phrase: $MutableComponent$Type): void
 "transformMessage"(message: $MutableComponent$Type): $MutableComponent
 "sendEventMessage"(message: $Component$Type, receiver: $Player$Type): void
 "sendEventMessage"(message: $Component$Type): void
 "asEntity"(): $Mob
}

export namespace $VillagerLike {
const VILLAGER_NAME: $CDataParameter<(string)>
const CUSTOM_SKIN: $CDataParameter<(string)>
const CLOTHES: $CDataParameter<(string)>
const HAIR: $CDataParameter<(string)>
const HAIR_COLOR_RED: $CDataParameter<(float)>
const HAIR_COLOR_GREEN: $CDataParameter<(float)>
const HAIR_COLOR_BLUE: $CDataParameter<(float)>
const AGE_STATE: $CEnumParameter<($AgeState)>
const SPEED_ID: $UUID
function createTrackedData<E>(type: $Class$Type<(E)>): $CDataManager$Builder<(E)>
function toVillager(player: $PlayerSaveData$Type): $VillagerLike<(any)>
function toVillager(entity: $Entity$Type): $VillagerLike<(any)>
function sendEventMessage(world: $Level$Type, message: $Component$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerLike$Type<E> = ($VillagerLike<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerLike_<E> = $VillagerLike$Type<(E)>;
}}
declare module "packages/forge/net/mca/item/$SirbenBabyItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BabyItem, $BabyItem$Type} from "packages/forge/net/mca/item/$BabyItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SirbenBabyItem extends $BabyItem {
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

constructor(gender: $Gender$Type, properties: $Item$Properties$Type)

public "isFoil"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SirbenBabyItem$Type = ($SirbenBabyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SirbenBabyItem_ = $SirbenBabyItem$Type;
}}
declare module "packages/forge/net/mca/item/$FamilyTreeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FamilyTreeItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyTreeItem$Type = ($FamilyTreeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamilyTreeItem_ = $FamilyTreeItem$Type;
}}
declare module "packages/forge/net/mca/item/$CribItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CribWoodType, $CribWoodType$Type} from "packages/forge/net/mca/entity/$CribWoodType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CribItem extends $Item {
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

constructor(settings: $Item$Properties$Type, wood: $CribWoodType$Type, color: $DyeColor$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getColor"(): $DyeColor
public "getWood"(): $CribWoodType
get "color"(): $DyeColor
get "wood"(): $CribWoodType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CribItem$Type = ($CribItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CribItem_ = $CribItem$Type;
}}
declare module "packages/forge/net/mca/mixin/$MixinVillagerEntityInvoker" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $MixinVillagerEntityInvoker {

 "invokeBeginTradeWith"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $MixinVillagerEntityInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinVillagerEntityInvoker$Type = ($MixinVillagerEntityInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinVillagerEntityInvoker_ = $MixinVillagerEntityInvoker$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$MoveState" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $MoveState extends $Enum<($MoveState)> {
static readonly "MOVE": $MoveState
static readonly "STAY": $MoveState
static readonly "FOLLOW": $MoveState


public "getName"(): $Component
public static "values"(): ($MoveState)[]
public static "valueOf"(name: string): $MoveState
public static "byId"(id: integer): $MoveState
public static "byCommand"(action: string): $Optional<($MoveState)>
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoveState$Type = (("move") | ("follow") | ("stay")) | ($MoveState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoveState_ = $MoveState$Type;
}}
declare module "packages/forge/net/mca/mixin/$MixinVillagerProfession" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinVillagerProfession {

}

export namespace $MixinVillagerProfession {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinVillagerProfession$Type = ($MixinVillagerProfession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinVillagerProfession_ = $MixinVillagerProfession$Type;
}}
declare module "packages/forge/net/mca/item/$PotionOfMetamorphosisItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PotionOfMetamorphosisItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type, gender: $Gender$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionOfMetamorphosisItem$Type = ($PotionOfMetamorphosisItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionOfMetamorphosisItem_ = $PotionOfMetamorphosisItem$Type;
}}
declare module "packages/forge/net/mca/item/$BabyItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BabyItem extends $Item {
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

constructor(gender: $Gender$Type, properties: $Item$Properties$Type)

public static "hasBeenInvalidated"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getName"(stack: $ItemStack$Type): $Component
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(stack: $ItemStack$Type): string
public "inventoryTick"(stack: $ItemStack$Type, world: $Level$Type, entity: $Entity$Type, slot: integer, selected: boolean): void
public "onDropped"(stack: $ItemStack$Type, player: $Player$Type): boolean
public "getGender"(): $Gender
public static "createItem"(mother: $Entity$Type, father: $Entity$Type, seed: long): $ItemStack
public static "getBabyNbt"(stack: $ItemStack$Type): $CompoundTag
get "gender"(): $Gender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabyItem$Type = ($BabyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabyItem_ = $BabyItem$Type;
}}
declare module "packages/forge/net/mca/client/render/layer/$VillagerLayer" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $VillagerLayer<T extends $LivingEntity, M extends $HumanoidModel<(T)>> extends $RenderLayer<(T), (M)> {
readonly "model": M

constructor(renderer: $RenderLayerParent$Type<(T), (M)>, model: M)

public "canUse"(texture: $ResourceLocation$Type): boolean
public "renderFinal"(transform: $PoseStack$Type, provider: $MultiBufferSource$Type, light: integer, villager: T, tickDelta: float, visible: boolean, glowing: boolean): void
public "render"(transform: $PoseStack$Type, provider: $MultiBufferSource$Type, light: integer, villager: T, limbAngle: float, limbDistance: float, tickDelta: float, animationProgress: float, headYaw: float, headPitch: float): void
public "getColor"(villager: T, tickDelta: float): (float)[]
public "getSkin"(villager: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerLayer$Type<T, M> = ($VillagerLayer<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerLayer_<T, M> = $VillagerLayer$Type<(T), (M)>;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$CompassionateEntity" {
import {$EntityRelationship, $EntityRelationship$Type} from "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$EntityWrapper, $EntityWrapper$Type} from "packages/forge/net/mca/entity/$EntityWrapper"

export interface $CompassionateEntity<T extends $EntityRelationship> extends $EntityWrapper {

 "getRelationships"(): T
 "asEntity"(): $Mob

(): T
}

export namespace $CompassionateEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassionateEntity$Type<T> = ($CompassionateEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompassionateEntity_<T> = $CompassionateEntity$Type<(T)>;
}}
declare module "packages/forge/net/mca/item/$BlueprintItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlueprintItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintItem$Type = ($BlueprintItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintItem_ = $BlueprintItem$Type;
}}
declare module "packages/forge/net/mca/util/$BlockBoxExtended" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BlockBoxExtended extends $BoundingBox {
static readonly "CODEC": $Codec<($BoundingBox)>

constructor(minX: integer, minY: integer, minZ: integer, maxX: integer, maxY: integer, maxZ: integer)

public "expand"(x: integer, y: integer, z: integer): $BoundingBox
public "getMaxBlockCount"(): integer
public "inflatedBy"(margin: integer): $BoundingBox
get "maxBlockCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBoxExtended$Type = ($BlockBoxExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBoxExtended_ = $BlockBoxExtended$Type;
}}
declare module "packages/forge/net/mca/entity/interaction/$EntityCommandHandler" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityCommandHandler<T extends ($Entity) & ($VillagerLike<(any)>)> {

constructor(entity: T)

public "handle"(player: $ServerPlayer$Type, command: string): boolean
public "getInteractingPlayer"(): $Optional<($Player)>
public "stopInteracting"(): void
public "interactAt"(player: $Player$Type, pos: $Vec3$Type, hand: $InteractionHand$Type): $InteractionResult
get "interactingPlayer"(): $Optional<($Player)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCommandHandler$Type<T> = ($EntityCommandHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityCommandHandler_<T> = $EntityCommandHandler$Type<(T)>;
}}
declare module "packages/forge/net/mca/mixin/$MixinActivity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinActivity {

}

export namespace $MixinActivity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinActivity$Type = ($MixinActivity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinActivity_ = $MixinActivity$Type;
}}
declare module "packages/forge/net/mca/item/$WeddingRingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RelationshipItem, $RelationshipItem$Type} from "packages/forge/net/mca/item/$RelationshipItem"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $WeddingRingItem extends $RelationshipItem {
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

constructor(properties: $Item$Properties$Type)

public "handle"(player: $ServerPlayer$Type, villager: $VillagerEntityMCA$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeddingRingItem$Type = ($WeddingRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeddingRingItem_ = $WeddingRingItem$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$FamilyTree" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FamilyTreeNode, $FamilyTreeNode$Type} from "packages/forge/net/mca/server/world/data/$FamilyTreeNode"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FamilyTree extends $SavedData {


public "getOrCreate"(entity: $Entity$Type): $FamilyTreeNode
public "getOrCreate"(id: $UUID$Type, name: string, gender: $Gender$Type): $FamilyTreeNode
public "getOrCreate"(id: $UUID$Type, name: string, gender: $Gender$Type, isPlayer: boolean): $FamilyTreeNode
public "remove"(id: $UUID$Type): void
public static "get"(world: $ServerLevel$Type): $FamilyTree
public "getAllWithName"(name: string): $Stream<($FamilyTreeNode)>
public "save"(nbt: $CompoundTag$Type): $CompoundTag
public "getOrEmpty"(id: $UUID$Type): $Optional<($FamilyTreeNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyTree$Type = ($FamilyTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamilyTree_ = $FamilyTree$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Pregnancy" {
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $Pregnancy {


public "tick"(): void
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "tryStartGestation"(): boolean
public "setPregnant"(pregnant: boolean): void
public "createChild"(gender: $Gender$Type): $VillagerEntityMCA
public "createChild"(gender: $Gender$Type, partner: $VillagerEntityMCA$Type): $VillagerEntityMCA
public "setBabyAge"(age: integer): void
public "getGender"(): $Gender
public "procreate"(spouse: $Entity$Type): void
public "isPregnant"(): boolean
public "getBabyAge"(): integer
set "pregnant"(value: boolean)
set "babyAge"(value: integer)
get "gender"(): $Gender
get "pregnant"(): boolean
get "babyAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pregnancy$Type = ($Pregnancy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pregnancy_ = $Pregnancy$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$FamilyTreeNode" {
import {$FamilyTree, $FamilyTree$Type} from "packages/forge/net/mca/server/world/data/$FamilyTree"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityRelationship, $EntityRelationship$Type} from "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RelationshipState, $RelationshipState$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FamilyTreeNode implements $Serializable {

constructor(rootNode: $FamilyTree$Type, id: $UUID$Type, name: string, isPlayer: boolean, gender: $Gender$Type, father: $UUID$Type, mother: $UUID$Type)
constructor(rootNode: $FamilyTree$Type, id: $UUID$Type, nbt: $CompoundTag$Type)

public "getChildren"(): $Stream<($UUID)>
public static "isValid"(uuid: $UUID$Type): boolean
public "getName"(): string
public "lookup"(uuids: $Stream$Type<($UUID$Type)>): $Stream<($FamilyTreeNode)>
public "id"(): $UUID
public "setName"(name: string): void
public "save"(): $CompoundTag
public "getRoot"(): $FamilyTree
public "isRelative"(arg0: $UUID$Type): boolean
public "getSiblings"(): $Stream<($FamilyTreeNode)>
public "getRelatives"(parentDepth: integer, childrenDepth: integer): $Stream<($UUID)>
public "streamParents"(): $Stream<($UUID)>
public "getRelationshipState"(): $RelationshipState
public "updatePartner"(newPartner: $Entity$Type, state: $RelationshipState$Type): void
public "updatePartner"(spouse: $FamilyTreeNode$Type): void
public "getAllRelatives"(depth: integer): $Stream<($UUID)>
public "getProfessionId"(): $ResourceLocation
public "getProfessionName"(): string
public "getProfessionText"(): $MutableComponent
public "setDeceased"(deceased: boolean): void
public "removeMother"(): boolean
public "removeFather"(): boolean
public "setProfession"(profession: $VillagerProfession$Type): void
public "willBeRemembered"(): boolean
public "assignParents"(one: $EntityRelationship$Type, two: $EntityRelationship$Type): boolean
public "assignParent"(parent: $FamilyTreeNode$Type): boolean
public "getProfession"(): $VillagerProfession
public "siblings"(): $Set<($UUID)>
public "children"(): $Set<($UUID)>
public "getParents"(): $Stream<($FamilyTreeNode)>
public "setRelationshipState"(relationshipState: $RelationshipState$Type): void
public "streamChildren"(): $Stream<($UUID)>
public "isGrandParent"(id: $UUID$Type): boolean
public "probablyGenerated"(): boolean
public "addChild"(child: $UUID$Type): void
public "isPlayer"(): boolean
public "father"(): $UUID
public "isParent"(id: $UUID$Type): boolean
public "gender"(): $Gender
public "setGender"(gender: $Gender$Type): void
public "mother"(): $UUID
public "setFather"(parent: $FamilyTreeNode$Type): boolean
public "setMother"(parent: $FamilyTreeNode$Type): boolean
public "partner"(): $UUID
public "isDeceased"(): boolean
public "isUncle"(id: $UUID$Type): boolean
get "name"(): string
set "name"(value: string)
get "root"(): $FamilyTree
get "relationshipState"(): $RelationshipState
get "professionId"(): $ResourceLocation
get "professionName"(): string
get "professionText"(): $MutableComponent
set "deceased"(value: boolean)
set "profession"(value: $VillagerProfession$Type)
get "profession"(): $VillagerProfession
get "parents"(): $Stream<($FamilyTreeNode)>
set "relationshipState"(value: $RelationshipState$Type)
get "player"(): boolean
get "deceased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamilyTreeNode$Type = ($FamilyTreeNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamilyTreeNode_ = $FamilyTreeNode$Type;
}}
declare module "packages/forge/net/mca/entity/$VillagerEntityMCA" {
import {$VillagerDimensions, $VillagerDimensions$Type} from "packages/forge/net/mca/entity/ai/relationship/$VillagerDimensions"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Traits, $Traits$Type} from "packages/forge/net/mca/entity/ai/$Traits"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Genetics, $Genetics$Type} from "packages/forge/net/mca/entity/ai/$Genetics"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VillagerCommandHandler, $VillagerCommandHandler$Type} from "packages/forge/net/mca/entity/interaction/$VillagerCommandHandler"
import {$CDataManager, $CDataManager$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$LongTermMemory, $LongTermMemory$Type} from "packages/forge/net/mca/entity/ai/$LongTermMemory"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$AgeableMob, $AgeableMob$Type} from "packages/net/minecraft/world/entity/$AgeableMob"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CrossbowAttackMob, $CrossbowAttackMob$Type} from "packages/net/minecraft/world/entity/monster/$CrossbowAttackMob"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$Residency, $Residency$Type} from "packages/forge/net/mca/entity/ai/$Residency"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$ConversationManager, $ConversationManager$Type} from "packages/forge/net/mca/entity/ai/$ConversationManager"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BreedableRelationship, $BreedableRelationship$Type} from "packages/forge/net/mca/entity/ai/$BreedableRelationship"
import {$UpdatableInventory, $UpdatableInventory$Type} from "packages/forge/net/mca/entity/$UpdatableInventory"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$DialogueType, $DialogueType$Type} from "packages/forge/net/mca/entity/ai/$DialogueType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AgeState, $AgeState$Type} from "packages/forge/net/mca/entity/ai/relationship/$AgeState"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$CompassionateEntity, $CompassionateEntity$Type} from "packages/forge/net/mca/entity/ai/relationship/$CompassionateEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$InventoryCarrier, $InventoryCarrier$Type} from "packages/net/minecraft/world/entity/npc/$InventoryCarrier"
import {$JumpControl, $JumpControl$Type} from "packages/net/minecraft/world/entity/ai/control/$JumpControl"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$PlayerSaveData, $PlayerSaveData$Type} from "packages/forge/net/mca/server/world/data/$PlayerSaveData"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VillagerBrain, $VillagerBrain$Type} from "packages/forge/net/mca/entity/ai/brain/$VillagerBrain"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$VillagerLike$PlayerModel, $VillagerLike$PlayerModel$Type} from "packages/forge/net/mca/entity/$VillagerLike$PlayerModel"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerEntityMCA extends $Villager implements $VillagerLike<($VillagerEntityMCA)>, $MenuProvider, $CompassionateEntity<($BreedableRelationship)>, $CrossbowAttackMob {
readonly "conversationManager": $ConversationManager
static readonly "BREEDING_FOOD_THRESHOLD": integer
static "FOOD_POINTS": $Map<($Item), (integer)>
static "WANTED_ITEMS": $Set<($Item)>
static readonly "SPEED_MODIFIER": float
static "MEMORY_TYPES": $ImmutableList<($MemoryModuleType<(any)>)>
static readonly "POI_MEMORIES": $Map<($MemoryModuleType<($GlobalPos)>), ($BiPredicate<($Villager), ($Holder<($PoiType)>)>)>
static readonly "VILLAGER_SLOT_OFFSET": integer
 "offers": $MerchantOffers
static readonly "BABY_START_AGE": integer
 "age": integer
 "forcedAge": integer
 "forcedAgeTimer": integer
static readonly "DEFAULT_WALK_TARGET_VALUE": float
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

constructor(type: $EntityType$Type<($VillagerEntityMCA$Type)>, w: $Level$Type, gender: $Gender$Type)

public "canInteractWithItemStackInHand"(stack: $ItemStack$Type): boolean
public "getVillagerDimensions"(): $VillagerDimensions
public "setAgeState"(state: $AgeState$Type): boolean
public "getTypeDataManager"(): $CDataManager<($VillagerEntityMCA)>
public "pardonPlayers"(amount: integer): void
public "getSmallBounty"(): integer
public "playWelcomeSound"(): void
public "getSurprisedSound"(): $SoundEvent
public "playSurprisedSound"(): void
public "moveTowards"(pos: $BlockPos$Type): void
public "moveTowards"(pos: $BlockPos$Type, speed: float): void
public "moveTowards"(pos: $BlockPos$Type, speed: float, closeEnoughDist: integer): void
public "setDespawnDelay"(despawnDelay: integer): void
public "makeMercenary"(): void
public "customLevelUp"(): void
public static "createTrackedData"<E extends $Entity>(type: $Class$Type<(E)>): $CDataManager$Builder<(E)>
public "updateCustomSkin"(): void
public "getGameProfile"(): $GameProfile
public "getProfessionId"(): $ResourceLocation
public "isProfessionImportant"(): boolean
public "requiresHome"(): boolean
public "canTradeWithProfession"(): boolean
public "getRelationships"(): $BreedableRelationship
public "getInfectionProgress"(): float
public "setInfectionProgress"(progress: float): void
public "getGenetics"(): $Genetics
public "getVillagerBrain"(): $VillagerBrain<(any)>
public "playSpeechEffect"(): void
public static "createVillagerAttributes"(): $AttributeSupplier$Builder
public "onInvChange"(inventoryFromListener: $Container$Type): void
public "getMCABrain"(): $Brain<($VillagerEntityMCA)>
public "getLongTermMemory"(): $LongTermMemory
public "getResidency"(): $Residency
public "setProfession"(profession: $VillagerProfession$Type): void
public "getDespawnDelay"(): integer
public "setInventory"(inventory: $UpdatableInventory$Type): void
public "getPlayerModel"(): $VillagerLike$PlayerModel
public "getProfession"(): $VillagerProfession
public "getInteractions"(): $VillagerCommandHandler
public "createChild"(world: $ServerLevel$Type, partner: $AgeableMob$Type): $VillagerEntityMCA
public "lookAt"(pos: $BlockPos$Type): void
public "setAge"(age: integer): void
public "rideTick"(): void
public "getNavigation"(): $PathNavigation
public "finalizeSpawn"(world: $ServerLevelAccessor$Type, difficulty: $DifficultyInstance$Type, spawnReason: $MobSpawnType$Type, entityData: $SpawnGroupData$Type, entityNbt: $CompoundTag$Type): $SpawnGroupData
public "die"(cause: $DamageSource$Type): void
public "aiStep"(): void
public "tick"(): void
public "setChargingCrossbow"(charging: boolean): void
public "onCrossbowAttackPerformed"(): void
public "performCrossbowAttack"(arg: $LivingEntity$Type, f: float): void
public "getInventory"(): $SimpleContainer
public "refreshBrain"(world: $ServerLevel$Type): void
public "setVillagerData"(data: $VillagerData$Type): void
public "restock"(): void
public "addParticlesAroundSelf"(parameters: $ParticleOptions$Type): void
public "getNotifyTradeSound"(): $SoundEvent
public "playCelebrateSound"(): void
public "performRangedAttack"(target: $LivingEntity$Type, pullProgress: float): void
public "mobInteract"(player: $Player$Type, hand: $InteractionHand$Type): $InteractionResult
public "convertTo"<T extends $Mob>(type: $EntityType$Type<(T)>, keepInventory: boolean): T
public "shootCrossbowProjectile"(target: $LivingEntity$Type, crossbow: $ItemStack$Type, projectile: $Projectile$Type, multiShotSpray: float): void
public "getMoveControl"(): $MoveControl
public "getJumpControl"(): $JumpControl
public "canFireProjectileWeapon"(weapon: $ProjectileWeaponItem$Type): boolean
public "getTraits"(): $Traits
public "createMenu"(i: integer, playerInventory: $Inventory$Type, playerEntity: $Player$Type): $AbstractContainerMenu
public "setBaby"(isBaby: boolean): void
public "doHurtTarget"(target: $Entity$Type): boolean
public "getProjectile"(stack: $ItemStack$Type): $ItemStack
public "eat"(world: $Level$Type, stack: $ItemStack$Type): $ItemStack
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "attack"(source: $DamageSource$Type, damageAmount: float): boolean
public "addAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "setCustomName"(name: $Component$Type): void
public "readAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "getMyRidingOffset"(): double
public "handleEntityEvent"(id: byte): void
public "thunderHit"(world: $ServerLevel$Type, lightning: $LightningBolt$Type): void
public "getDimensions"(pose: $Pose$Type): $EntityDimensions
public "teleportTo"(destX: double, destY: double, destZ: double): void
public "onSyncedDataUpdated"(par: $EntityDataAccessor$Type<(any)>): void
public "refreshDimensions"(): void
public "interactAt"(player: $Player$Type, pos: $Vec3$Type, hand: $InteractionHand$Type): $InteractionResult
public "getScale"(): float
public "getDeathSound"(): $SoundEvent
public "getVoicePitch"(): float
public "getNoSound"(): $SoundEvent
public "isGuard"(): boolean
public "isFriend"(type: $EntityType$Type<(any)>): boolean
public "isHitBy"(player: $ServerPlayer$Type): boolean
public "isHostile"(): boolean
public "isBurned"(): boolean
public "initialize"(spawnReason: $MobSpawnType$Type): void
public "setName"(name: string): void
public "clearHairDye"(): void
public "getDialogueType"(receiver: $Player$Type): $DialogueType
public "randomizeClothes"(): void
public "randomizeHair"(): void
public "toNbtForConversion"(convertingTo: $EntityType$Type<(any)>): $CompoundTag
public "readNbtForConversion"(convertingFrom: $EntityType$Type<(any)>, input: $CompoundTag$Type): void
public "copyVillagerAttributesFrom"(other: $VillagerLike$Type<(any)>): void
public "spawnBurntParticles"(): void
public "initializeSkin"(isPlayer: boolean): void
public "validateClothes"(): void
public "isSpeechImpaired"(): boolean
public "isToYoungToSpeak"(): boolean
public "setCustomSkin"(name: string): void
public "hasCustomSkin"(): boolean
public "getAttractedGenderSet"(villager: $VillagerLike$Type<(any)>): $Set<($Gender)>
public "getDominantHand"(): $InteractionHand
public "getOpposingHand"(): $InteractionHand
public "getSlotForHand"(hand: $InteractionHand$Type): $EquipmentSlot
public "getDominantSlot"(): $EquipmentSlot
public "getOpposingSlot"(): $EquipmentSlot
public "getProfessionName"(): string
public "getProfessionText"(): $MutableComponent
public "canBeAttractedTo"(other: $PlayerSaveData$Type): boolean
public "canBeAttractedTo"(other: $VillagerLike$Type<(any)>): boolean
public "getRawScaleFactor"(): float
public "getHorizontalScaleFactor"(): float
public "getAgeState"(): $AgeState
public "updateSpeed"(): void
public static "toVillager"(player: $PlayerSaveData$Type): $VillagerLike<(any)>
public static "toVillager"(entity: $Entity$Type): $VillagerLike<(any)>
public "setHair"(hair: $ResourceLocation$Type): void
public "setHair"(hair: string): void
public "setHairDye"(r: float, g: float, b: float): void
public "setHairDye"(color: $DyeColor$Type): void
public "getHairDye"(): (float)[]
public "getClothes"(): string
public "setClothes"(clothes: string): void
public "setClothes"(clothes: $ResourceLocation$Type): void
public "getHair"(): string
public "shootCrossbowProjectile"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $Projectile$Type, arg3: float, arg4: float): void
public "getProjectileShotVector"(arg0: $LivingEntity$Type, arg1: $Vec3$Type, arg2: float): $Vector3f
public "getTarget"(): $LivingEntity
public "getTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>): P
public "setTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>, value: P): void
public "setInfected"(infected: boolean): void
public "isInfected"(): boolean
public "sendChatMessage"(target: $Player$Type, phraseId: string, ...params: (any)[]): void
public "sendChatMessage"(message: $MutableComponent$Type, receiver: $Entity$Type): $MutableComponent
public "getTranslatable"(target: $Player$Type, phraseId: string, ...params: (any)[]): $MutableComponent
public "sendChatToAllAround"(phrase: string, ...params: (any)[]): void
public "sendChatToAllAround"(phrase: $MutableComponent$Type): void
public "transformMessage"(message: $MutableComponent$Type): $MutableComponent
public static "sendEventMessage"(world: $Level$Type, message: $Component$Type): void
public "sendEventMessage"(message: $Component$Type, receiver: $Player$Type): void
public "sendEventMessage"(message: $Component$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "asEntity"(): $Mob
public static "pickUpItem"(arg0: $Mob$Type, arg1: $InventoryCarrier$Type, arg2: $ItemEntity$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public static "getAlpha"(le: $LivingEntity$Type, partialTicks: float): float
public static "tickEntity"(entity: $LivingEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "villagerDimensions"(): $VillagerDimensions
set "ageState"(value: $AgeState$Type)
get "typeDataManager"(): $CDataManager<($VillagerEntityMCA)>
get "smallBounty"(): integer
get "surprisedSound"(): $SoundEvent
set "despawnDelay"(value: integer)
get "gameProfile"(): $GameProfile
get "professionId"(): $ResourceLocation
get "professionImportant"(): boolean
get "relationships"(): $BreedableRelationship
get "infectionProgress"(): float
set "infectionProgress"(value: float)
get "genetics"(): $Genetics
get "villagerBrain"(): $VillagerBrain<(any)>
get "mCABrain"(): $Brain<($VillagerEntityMCA)>
get "longTermMemory"(): $LongTermMemory
get "residency"(): $Residency
set "profession"(value: $VillagerProfession$Type)
get "despawnDelay"(): integer
set "inventory"(value: $UpdatableInventory$Type)
get "playerModel"(): $VillagerLike$PlayerModel
get "profession"(): $VillagerProfession
get "interactions"(): $VillagerCommandHandler
set "age"(value: integer)
get "navigation"(): $PathNavigation
set "chargingCrossbow"(value: boolean)
get "inventory"(): $SimpleContainer
set "villagerData"(value: $VillagerData$Type)
get "notifyTradeSound"(): $SoundEvent
get "moveControl"(): $MoveControl
get "jumpControl"(): $JumpControl
get "traits"(): $Traits
set "baby"(value: boolean)
get "customName"(): $Component
get "displayName"(): $Component
set "customName"(value: $Component$Type)
get "myRidingOffset"(): double
get "scale"(): float
get "deathSound"(): $SoundEvent
get "voicePitch"(): float
get "noSound"(): $SoundEvent
get "guard"(): boolean
get "hostile"(): boolean
get "burned"(): boolean
set "name"(value: string)
get "speechImpaired"(): boolean
get "toYoungToSpeak"(): boolean
set "customSkin"(value: string)
get "dominantHand"(): $InteractionHand
get "opposingHand"(): $InteractionHand
get "dominantSlot"(): $EquipmentSlot
get "opposingSlot"(): $EquipmentSlot
get "professionName"(): string
get "professionText"(): $MutableComponent
get "rawScaleFactor"(): float
get "horizontalScaleFactor"(): float
get "ageState"(): $AgeState
set "hair"(value: $ResourceLocation$Type)
set "hair"(value: string)
set "hairDye"(value: $DyeColor$Type)
get "hairDye"(): (float)[]
get "clothes"(): string
set "clothes"(value: string)
set "clothes"(value: $ResourceLocation$Type)
get "hair"(): string
get "target"(): $LivingEntity
set "infected"(value: boolean)
get "infected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerEntityMCA$Type = ($VillagerEntityMCA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerEntityMCA_ = $VillagerEntityMCA$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Messenger" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DialogueType, $DialogueType$Type} from "packages/forge/net/mca/entity/ai/$DialogueType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$EntityWrapper, $EntityWrapper$Type} from "packages/forge/net/mca/entity/$EntityWrapper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $Messenger extends $EntityWrapper {

 "getDialogueType"(receiver: $Player$Type): $DialogueType
 "isSpeechImpaired"(): boolean
 "isToYoungToSpeak"(): boolean
 "sendChatMessage"(target: $Player$Type, phraseId: string, ...params: (any)[]): void
 "sendChatMessage"(message: $MutableComponent$Type, receiver: $Entity$Type): $MutableComponent
 "playSpeechEffect"(): void
 "getTranslatable"(target: $Player$Type, phraseId: string, ...params: (any)[]): $MutableComponent
 "sendChatToAllAround"(phrase: string, ...params: (any)[]): void
 "sendChatToAllAround"(phrase: $MutableComponent$Type): void
 "transformMessage"(message: $MutableComponent$Type): $MutableComponent
 "sendEventMessage"(message: $Component$Type, receiver: $Player$Type): void
 "sendEventMessage"(message: $Component$Type): void
 "asEntity"(): $Mob
}

export namespace $Messenger {
const CAN_RECEIVE: $TargetingConditions
function sendEventMessage(world: $Level$Type, message: $Component$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Messenger$Type = ($Messenger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Messenger_ = $Messenger$Type;
}}
declare module "packages/forge/net/mca/server/world/data/$CivilRegistryManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Village, $Village$Type} from "packages/forge/net/mca/server/world/data/$Village"

export class $CivilRegistryManager extends $SavedData {


public static "get"(world: $ServerLevel$Type, village: $Village$Type): $CivilRegistryManager
public "addText"(text: $Component$Type): void
public "getPage"(from: integer, to: integer): $List<($Component)>
public "save"(nbt: $CompoundTag$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CivilRegistryManager$Type = ($CivilRegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CivilRegistryManager_ = $CivilRegistryManager$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CParameter" {
import {$CDataParameter, $CDataParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CDataParameter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CEnumParameter, $CEnumParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CEnumParameter"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"

export interface $CParameter<T, TrackedType> {

 "get"(arg0: $EntityDataAccessor$Type<(TrackedType)>, arg1: $SynchedEntityData$Type): T
 "load"(arg0: $CompoundTag$Type): T
 "getDefault"(): TrackedType
 "set"(arg0: $EntityDataAccessor$Type<(TrackedType)>, arg1: $SynchedEntityData$Type, arg2: T): void
 "save"(arg0: $CompoundTag$Type, arg1: T): void
 "createParam"(arg0: $Class$Type<(any)>): $EntityDataAccessor<(TrackedType)>
}

export namespace $CParameter {
function create<T>(id: string, def: T): $CEnumParameter<(T)>
function create<T>(id: string, type: $Class$Type<(T)>): $CEnumParameter<(T)>
function create(id: string, def: integer): $CDataParameter<(integer)>
function create(id: string, def: $CompoundTag$Type): $CDataParameter<($CompoundTag)>
function create(id: string, def: string): $CDataParameter<(string)>
function create(id: string, def: boolean): $CDataParameter<(boolean)>
function create(id: string, def: float): $CDataParameter<(float)>
function create(id: string, def: $Optional$Type<($UUID$Type)>): $CDataParameter<($Optional<($UUID)>)>
function create(id: string, def: $BlockPos$Type): $CDataParameter<($BlockPos)>
function create(id: string, def: $ItemStack$Type): $CDataParameter<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CParameter$Type<T, TrackedType> = ($CParameter<(T), (TrackedType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CParameter_<T, TrackedType> = $CParameter$Type<(T), (TrackedType)>;
}}
declare module "packages/forge/net/mca/entity/$ZombieVillagerEntityMCA" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$VillagerDimensions, $VillagerDimensions$Type} from "packages/forge/net/mca/entity/ai/relationship/$VillagerDimensions"
import {$ZombieVillager, $ZombieVillager$Type} from "packages/net/minecraft/world/entity/monster/$ZombieVillager"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$DialogueType, $DialogueType$Type} from "packages/forge/net/mca/entity/ai/$DialogueType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AgeState, $AgeState$Type} from "packages/forge/net/mca/entity/ai/relationship/$AgeState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Traits, $Traits$Type} from "packages/forge/net/mca/entity/ai/$Traits"
import {$CompassionateEntity, $CompassionateEntity$Type} from "packages/forge/net/mca/entity/ai/relationship/$CompassionateEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Genetics, $Genetics$Type} from "packages/forge/net/mca/entity/ai/$Genetics"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CDataManager, $CDataManager$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$JumpControl, $JumpControl$Type} from "packages/net/minecraft/world/entity/ai/control/$JumpControl"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$Relationship, $Relationship$Type} from "packages/forge/net/mca/entity/ai/$Relationship"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$PlayerSaveData, $PlayerSaveData$Type} from "packages/forge/net/mca/server/world/data/$PlayerSaveData"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VillagerBrain, $VillagerBrain$Type} from "packages/forge/net/mca/entity/ai/brain/$VillagerBrain"
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$VillagerLike$PlayerModel, $VillagerLike$PlayerModel$Type} from "packages/forge/net/mca/entity/$VillagerLike$PlayerModel"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$UpdatableInventory, $UpdatableInventory$Type} from "packages/forge/net/mca/entity/$UpdatableInventory"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $ZombieVillagerEntityMCA extends $ZombieVillager implements $VillagerLike<($ZombieVillagerEntityMCA)>, $CompassionateEntity<($Relationship<($ZombieVillagerEntityMCA)>)> {
 "villagerConversionTime": integer
 "gossips": $Tag
static readonly "ZOMBIE_LEADER_CHANCE": float
static readonly "REINFORCEMENT_ATTEMPTS": integer
static readonly "REINFORCEMENT_RANGE_MAX": integer
static readonly "REINFORCEMENT_RANGE_MIN": integer
static readonly "BABY_EYE_HEIGHT_ADJUSTMENT": float
static readonly "DEFAULT_WALK_TARGET_VALUE": float
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

constructor(type: $EntityType$Type<(any)>, world: $Level$Type, gender: $Gender$Type)

public "getTypeDataManager"(): $CDataManager<($ZombieVillagerEntityMCA)>
public "getInfectionProgress"(): float
public "setInfectionProgress"(progress: float): void
public "getGenetics"(): $Genetics
public "getVillagerBrain"(): $VillagerBrain<(any)>
public "setInventory"(inventory: $UpdatableInventory$Type): void
public "finalizeSpawn"(world: $ServerLevelAccessor$Type, difficulty: $DifficultyInstance$Type, spawnReason: $MobSpawnType$Type, entityData: $SpawnGroupData$Type, entityNbt: $CompoundTag$Type): $SpawnGroupData
public "die"(cause: $DamageSource$Type): void
public "aiStep"(): void
public "convertTo"<T extends $Mob>(type: $EntityType$Type<(T)>, keepInventory: boolean): T
public "getTraits"(): $Traits
public "setBaby"(isBaby: boolean): void
public "getCustomName"(): $Component
public "addAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "setCustomName"(name: $Component$Type): void
public "readAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "getMyRidingOffset"(): double
public "getDimensions"(pose: $Pose$Type): $EntityDimensions
public "onSyncedDataUpdated"(par: $EntityDataAccessor$Type<(any)>): void
public "interactAt"(player: $Player$Type, pos: $Vec3$Type, hand: $InteractionHand$Type): $InteractionResult
public "getScale"(): float
public "isHostile"(): boolean
public "isBurned"(): boolean
public "initialize"(spawnReason: $MobSpawnType$Type): void
public "setName"(name: string): void
public "clearHairDye"(): void
public "getVillagerDimensions"(): $VillagerDimensions
public "setAgeState"(state: $AgeState$Type): boolean
public "getDialogueType"(receiver: $Player$Type): $DialogueType
public "randomizeClothes"(): void
public "randomizeHair"(): void
public "toNbtForConversion"(convertingTo: $EntityType$Type<(any)>): $CompoundTag
public "readNbtForConversion"(convertingFrom: $EntityType$Type<(any)>, input: $CompoundTag$Type): void
public "copyVillagerAttributesFrom"(other: $VillagerLike$Type<(any)>): void
public "spawnBurntParticles"(): void
public static "createTrackedData"<E extends $Entity>(type: $Class$Type<($ZombieVillagerEntityMCA$Type)>): $CDataManager$Builder<($ZombieVillagerEntityMCA)>
public "initializeSkin"(isPlayer: boolean): void
public "validateClothes"(): void
public "isSpeechImpaired"(): boolean
public "isToYoungToSpeak"(): boolean
public "setCustomSkin"(name: string): void
public "updateCustomSkin"(): void
public "getGameProfile"(): $GameProfile
public "hasCustomSkin"(): boolean
public "getAttractedGenderSet"(villager: $VillagerLike$Type<(any)>): $Set<($Gender)>
public "getDominantHand"(): $InteractionHand
public "getOpposingHand"(): $InteractionHand
public "getSlotForHand"(hand: $InteractionHand$Type): $EquipmentSlot
public "getDominantSlot"(): $EquipmentSlot
public "getOpposingSlot"(): $EquipmentSlot
public "getProfessionId"(): $ResourceLocation
public "getProfessionName"(): string
public "getProfessionText"(): $MutableComponent
public "isProfessionImportant"(): boolean
public "requiresHome"(): boolean
public "canTradeWithProfession"(): boolean
public "canBeAttractedTo"(other: $PlayerSaveData$Type): boolean
public "canBeAttractedTo"(other: $VillagerLike$Type<(any)>): boolean
public "getPlayerModel"(): $VillagerLike$PlayerModel
public "getRawScaleFactor"(): float
public "getHorizontalScaleFactor"(): float
public "getAgeState"(): $AgeState
public "updateSpeed"(): void
public static "toVillager"(player: $PlayerSaveData$Type): $VillagerLike<(any)>
public static "toVillager"(entity: $Entity$Type): $VillagerLike<(any)>
public "setHair"(hair: $ResourceLocation$Type): void
public "setHair"(hair: string): void
public "setHairDye"(r: float, g: float, b: float): void
public "setHairDye"(color: $DyeColor$Type): void
public "getHairDye"(): (float)[]
public "getClothes"(): string
public "setClothes"(clothes: string): void
public "setClothes"(clothes: $ResourceLocation$Type): void
public "getHair"(): string
public "getTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>): P
public "setTrackedValue"<P, TrackedP>(key: $CParameter$Type<(P), (TrackedP)>, value: P): void
public "setInfected"(infected: boolean): void
public "isInfected"(): boolean
public "sendChatMessage"(target: $Player$Type, phraseId: string, ...params: (any)[]): void
public "sendChatMessage"(message: $MutableComponent$Type, receiver: $Entity$Type): $MutableComponent
public "playSpeechEffect"(): void
public "getTranslatable"(target: $Player$Type, phraseId: string, ...params: (any)[]): $MutableComponent
public "sendChatToAllAround"(phrase: string, ...params: (any)[]): void
public "sendChatToAllAround"(phrase: $MutableComponent$Type): void
public "transformMessage"(message: $MutableComponent$Type): $MutableComponent
public static "sendEventMessage"(world: $Level$Type, message: $Component$Type): void
public "sendEventMessage"(message: $Component$Type, receiver: $Player$Type): void
public "sendEventMessage"(message: $Component$Type): void
public "asEntity"(): $Mob
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$Type): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$Type): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$resetDynamicLight"(): void
public static "getAlpha"(le: $LivingEntity$Type, partialTicks: float): float
public static "tickEntity"(entity: $LivingEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "typeDataManager"(): $CDataManager<($ZombieVillagerEntityMCA)>
get "infectionProgress"(): float
set "infectionProgress"(value: float)
get "genetics"(): $Genetics
get "villagerBrain"(): $VillagerBrain<(any)>
set "inventory"(value: $UpdatableInventory$Type)
get "traits"(): $Traits
set "baby"(value: boolean)
get "customName"(): $Component
set "customName"(value: $Component$Type)
get "myRidingOffset"(): double
get "scale"(): float
get "hostile"(): boolean
get "burned"(): boolean
set "name"(value: string)
get "villagerDimensions"(): $VillagerDimensions
set "ageState"(value: $AgeState$Type)
get "speechImpaired"(): boolean
get "toYoungToSpeak"(): boolean
set "customSkin"(value: string)
get "gameProfile"(): $GameProfile
get "dominantHand"(): $InteractionHand
get "opposingHand"(): $InteractionHand
get "dominantSlot"(): $EquipmentSlot
get "opposingSlot"(): $EquipmentSlot
get "professionId"(): $ResourceLocation
get "professionName"(): string
get "professionText"(): $MutableComponent
get "professionImportant"(): boolean
get "playerModel"(): $VillagerLike$PlayerModel
get "rawScaleFactor"(): float
get "horizontalScaleFactor"(): float
get "ageState"(): $AgeState
set "hair"(value: $ResourceLocation$Type)
set "hair"(value: string)
set "hairDye"(value: $DyeColor$Type)
get "hairDye"(): (float)[]
get "clothes"(): string
set "clothes"(value: string)
set "clothes"(value: $ResourceLocation$Type)
get "hair"(): string
set "infected"(value: boolean)
get "infected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieVillagerEntityMCA$Type = ($ZombieVillagerEntityMCA);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieVillagerEntityMCA_ = $ZombieVillagerEntityMCA$Type;
}}
declare module "packages/forge/net/mca/item/$EngagementRingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RelationshipItem, $RelationshipItem$Type} from "packages/forge/net/mca/item/$RelationshipItem"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $EngagementRingItem extends $RelationshipItem {
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

constructor(properties: $Item$Properties$Type)

public "handle"(player: $ServerPlayer$Type, villager: $VillagerEntityMCA$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngagementRingItem$Type = ($EngagementRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngagementRingItem_ = $EngagementRingItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Relationship" {
import {$FamilyTree, $FamilyTree$Type} from "packages/forge/net/mca/server/world/data/$FamilyTree"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Relationship$Predicate, $Relationship$Predicate$Type} from "packages/forge/net/mca/entity/ai/$Relationship$Predicate"
import {$EntityRelationship, $EntityRelationship$Type} from "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$FamilyTreeNode, $FamilyTreeNode$Type} from "packages/forge/net/mca/server/world/data/$FamilyTreeNode"
import {$RelationshipState, $RelationshipState$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipState"
import {$RelationshipType, $RelationshipType$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipType"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$GiftSaturation, $GiftSaturation$Type} from "packages/forge/net/mca/entity/interaction/gifts/$GiftSaturation"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Relationship<T extends ($Mob) & ($VillagerLike<(T)>)> implements $EntityRelationship {
static readonly "IS_MARRIED": $Relationship$Predicate
static readonly "IS_ENGAGED": $Relationship$Predicate
static readonly "IS_PROMISED": $Relationship$Predicate
static readonly "IS_RELATIVE": $Relationship$Predicate
static readonly "IS_FAMILY": $Relationship$Predicate
static readonly "IS_PARENT": $Relationship$Predicate
static readonly "IS_KID": $Relationship$Predicate
static readonly "IS_ORPHAN": $Relationship$Predicate

constructor(entity: T)

public "getGiftSaturation"(): $GiftSaturation
public "readFromNbt"(nbt: $CompoundTag$Type): void
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "getFamilyEntry"(): $FamilyTreeNode
public "getWorld"(): $ServerLevel
public "getUUID"(): $UUID
public "writeToNbt"(nbt: $CompoundTag$Type): void
public "onDeath"(cause: $DamageSource$Type): void
public "getGender"(): $Gender
public "onTragedy"(cause: $DamageSource$Type, burialSite: $BlockPos$Type, type: $RelationshipType$Type, arg3: $Entity$Type): void
public "onTragedy"(cause: $DamageSource$Type, burialSite: $BlockPos$Type): void
public "promise"(spouse: $Entity$Type): void
public "getFamily"(parents: integer, children: integer): $Stream<($Entity)>
public static "of"(entity: $Entity$Type): $Optional<($EntityRelationship)>
public "getFamilyTree"(): $FamilyTree
public "getRelationshipStream"(uuids: $Stream$Type<($UUID$Type)>): $Stream<($EntityRelationship)>
public "getRelationshipState"(): $RelationshipState
public "endRelationShip"(newState: $RelationshipState$Type): void
public "getPartnerUUID"(): $Optional<($UUID)>
public "getPartnerName"(): $Optional<($Component)>
public "isPromisedTo"(uuid: $UUID$Type): boolean
public "isMarriedTo"(uuid: $UUID$Type): boolean
public "isEngagedWith"(uuid: $UUID$Type): boolean
public "getParents"(): $Stream<($Entity)>
public "engage"(spouse: $Entity$Type): void
public "marry"(spouse: $Entity$Type): void
public "getPartner"(): $Optional<($Entity)>
public "isPromised"(): boolean
public "isMarried"(): boolean
public "isEngaged"(): boolean
get "giftSaturation"(): $GiftSaturation
get "familyEntry"(): $FamilyTreeNode
get "world"(): $ServerLevel
get "uUID"(): $UUID
get "gender"(): $Gender
get "familyTree"(): $FamilyTree
get "relationshipState"(): $RelationshipState
get "partnerUUID"(): $Optional<($UUID)>
get "partnerName"(): $Optional<($Component)>
get "parents"(): $Stream<($Entity)>
get "partner"(): $Optional<($Entity)>
get "promised"(): boolean
get "married"(): boolean
get "engaged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Relationship$Type<T> = ($Relationship<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Relationship_<T> = $Relationship$Type<(T)>;
}}
declare module "packages/forge/net/mca/server/world/data/$PlayerSaveData" {
import {$FamilyTree, $FamilyTree$Type} from "packages/forge/net/mca/server/world/data/$FamilyTree"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SavedData, $SavedData$Type} from "packages/net/minecraft/world/level/saveddata/$SavedData"
import {$EntityRelationship, $EntityRelationship$Type} from "packages/forge/net/mca/entity/ai/relationship/$EntityRelationship"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$FamilyTreeNode, $FamilyTreeNode$Type} from "packages/forge/net/mca/server/world/data/$FamilyTreeNode"
import {$RelationshipState, $RelationshipState$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RelationshipType, $RelationshipType$Type} from "packages/forge/net/mca/entity/ai/relationship/$RelationshipType"
import {$Gender, $Gender$Type} from "packages/forge/net/mca/entity/ai/relationship/$Gender"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Village, $Village$Type} from "packages/forge/net/mca/server/world/data/$Village"
import {$VillageManager, $VillageManager$Type} from "packages/forge/net/mca/server/world/data/$VillageManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerSaveData extends $SavedData implements $EntityRelationship {


public static "get"(player: $ServerPlayer$Type): $PlayerSaveData
public static "get"(world: $ServerLevel$Type, uuid: $UUID$Type): $PlayerSaveData
public "reset"(): void
public "setEntityDataSet"(entityDataSet: boolean): void
public "getLastSeenVillage"(manager: $VillageManager$Type): $Optional<($Village)>
public "setEntityData"(entityData: $CompoundTag$Type): void
public "endRelationShip"(newState: $RelationshipState$Type): void
public "getFamilyEntry"(): $FamilyTreeNode
public "isEntityDataSet"(): boolean
public "getEntityData"(): $CompoundTag
public static "getIfPresent"(world: $ServerLevel$Type, uuid: $UUID$Type): $Optional<($PlayerSaveData)>
public "sendLetterOfCondolence"(name: string, village: string): void
public "updateLastSeenVillage"(manager: $VillageManager$Type, self: $ServerPlayer$Type): void
public "getLastSeenVillageId"(): $Optional<(integer)>
public "setLastSeenVillage"(self: $ServerPlayer$Type, oldVillage: $Village$Type, newVillage: $Village$Type): void
public static "showMailNotification"(player: $ServerPlayer$Type): void
public "getWorld"(): $ServerLevel
public "getUUID"(): $UUID
public "save"(nbt: $CompoundTag$Type): $CompoundTag
public "getGender"(): $Gender
public "marry"(spouse: $Entity$Type): void
public "onTragedy"(cause: $DamageSource$Type, burialSite: $BlockPos$Type, type: $RelationshipType$Type, victim: $Entity$Type): void
public "sendMail"(nbt: $CompoundTag$Type): void
public "hasMail"(): boolean
public "getMail"(): $ItemStack
public "sendLetter"(lines: $List$Type<(string)>): void
public "promise"(spouse: $Entity$Type): void
public "getFamily"(parents: integer, children: integer): $Stream<($Entity)>
public static "of"(entity: $Entity$Type): $Optional<($EntityRelationship)>
public "getFamilyTree"(): $FamilyTree
public "getRelationshipStream"(uuids: $Stream$Type<($UUID$Type)>): $Stream<($EntityRelationship)>
public "getRelationshipState"(): $RelationshipState
public "getPartnerUUID"(): $Optional<($UUID)>
public "getPartnerName"(): $Optional<($Component)>
public "isPromisedTo"(uuid: $UUID$Type): boolean
public "isMarriedTo"(uuid: $UUID$Type): boolean
public "isEngagedWith"(uuid: $UUID$Type): boolean
public "getParents"(): $Stream<($Entity)>
public "engage"(spouse: $Entity$Type): void
public "getPartner"(): $Optional<($Entity)>
public "isPromised"(): boolean
public "isMarried"(): boolean
public "isEngaged"(): boolean
set "entityDataSet"(value: boolean)
set "entityData"(value: $CompoundTag$Type)
get "familyEntry"(): $FamilyTreeNode
get "entityDataSet"(): boolean
get "entityData"(): $CompoundTag
get "lastSeenVillageId"(): $Optional<(integer)>
get "world"(): $ServerLevel
get "uUID"(): $UUID
get "gender"(): $Gender
get "mail"(): $ItemStack
get "familyTree"(): $FamilyTree
get "relationshipState"(): $RelationshipState
get "partnerUUID"(): $Optional<($UUID)>
get "partnerName"(): $Optional<($Component)>
get "parents"(): $Stream<($Entity)>
get "partner"(): $Optional<($Entity)>
get "promised"(): boolean
get "married"(): boolean
get "engaged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSaveData$Type = ($PlayerSaveData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSaveData_ = $PlayerSaveData$Type;
}}
declare module "packages/forge/net/mca/entity/interaction/$VillagerCommandHandler" {
import {$EntityCommandHandler, $EntityCommandHandler$Type} from "packages/forge/net/mca/entity/interaction/$EntityCommandHandler"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $VillagerCommandHandler extends $EntityCommandHandler<($VillagerEntityMCA)> {

constructor(entity: $VillagerEntityMCA$Type)

public "handle"(player: $ServerPlayer$Type, command: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerCommandHandler$Type = ($VillagerCommandHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerCommandHandler_ = $VillagerCommandHandler$Type;
}}
declare module "packages/forge/net/mca/mixin/$MixinDefaultParticleType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinDefaultParticleType {

}

export namespace $MixinDefaultParticleType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinDefaultParticleType$Type = ($MixinDefaultParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinDefaultParticleType_ = $MixinDefaultParticleType$Type;
}}
declare module "packages/forge/net/mca/item/$MatchmakersRingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpecialCaseGift, $SpecialCaseGift$Type} from "packages/forge/net/mca/item/$SpecialCaseGift"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export class $MatchmakersRingItem extends $Item implements $SpecialCaseGift {
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

constructor(properties: $Item$Properties$Type)

public "handle"(player: $ServerPlayer$Type, villager: $VillagerEntityMCA$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchmakersRingItem$Type = ($MatchmakersRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatchmakersRingItem_ = $MatchmakersRingItem$Type;
}}
declare module "packages/forge/net/mca/item/$SpecialCaseGift" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$VillagerEntityMCA, $VillagerEntityMCA$Type} from "packages/forge/net/mca/entity/$VillagerEntityMCA"

export interface $SpecialCaseGift {

 "handle"(arg0: $ServerPlayer$Type, arg1: $VillagerEntityMCA$Type): boolean

(arg0: $ServerPlayer$Type, arg1: $VillagerEntityMCA$Type): boolean
}

export namespace $SpecialCaseGift {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialCaseGift$Type = ($SpecialCaseGift);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialCaseGift_ = $SpecialCaseGift$Type;
}}
declare module "packages/forge/net/mca/client/render/layer/$ClothingLayer" {
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$VillagerLayer, $VillagerLayer$Type} from "packages/forge/net/mca/client/render/layer/$VillagerLayer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ClothingLayer<T extends $LivingEntity, M extends $HumanoidModel<(T)>> extends $VillagerLayer<(T), (M)> {
readonly "model": M

constructor(renderer: $RenderLayerParent$Type<(T), (M)>, model: M, variant: string)

public "getSkin"(villager: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClothingLayer$Type<T, M> = ($ClothingLayer<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClothingLayer_<T, M> = $ClothingLayer$Type<(T), (M)>;
}}
declare module "packages/forge/net/mca/ducks/$IVillagerEntity" {
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"

export interface $IVillagerEntity {

 "getSpawnReason"(): $MobSpawnType

(): $MobSpawnType
}

export namespace $IVillagerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVillagerEntity$Type = ($IVillagerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVillagerEntity_ = $IVillagerEntity$Type;
}}
declare module "packages/forge/net/mca/item/$NeedleAndThreadItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NeedleAndThreadItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeedleAndThreadItem$Type = ($NeedleAndThreadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeedleAndThreadItem_ = $NeedleAndThreadItem$Type;
}}
declare module "packages/forge/net/mca/entity/$UpdatableInventory" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $UpdatableInventory extends $SimpleContainer {
readonly "items": $NonNullList<($ItemStack)>

constructor(size: integer)

public "update"(entity: $Entity$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatableInventory$Type = ($UpdatableInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdatableInventory_ = $UpdatableInventory$Type;
}}
declare module "packages/forge/net/mca/item/$TooltippedItem" {
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

export class $TooltippedItem extends $Item {
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

constructor(properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltippedItem$Type = ($TooltippedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltippedItem_ = $TooltippedItem$Type;
}}
declare module "packages/forge/net/mca/client/book/$Book" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Page, $Page$Type} from "packages/forge/net/mca/client/book/pages/$Page"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Book {

constructor(bookName: string)
constructor(bookName: string, bookAuthor: $Component$Type)

public "open"(): void
public "copy"(): $Book
public "getPageCount"(): integer
public "setTextShadow"(textShadow: boolean): $Book
public "hasTextShadow"(): boolean
public "getBookAuthor"(): $Component
public "addSimplePages"(n: integer): $Book
public "addSimplePages"(n: integer, start: integer): $Book
public "setTextFormatting"(textFormatting: $ChatFormatting$Type): $Book
public "setPageTurnSound"(pageTurnSound: boolean): $Book
public "getBookName"(): string
public "showPageCount"(): boolean
public "getTextFormatting"(): $ChatFormatting
public "hasPageTurnSound"(): boolean
public "setBackground"(background: $ResourceLocation$Type): $Book
public "getBackground"(): $ResourceLocation
public "getPage"(index: integer): $Page
public "setPage"(i: integer, back: boolean): void
public "getPages"(): $List<($Page)>
public "addPage"(page: $Page$Type): $Book
get "pageCount"(): integer
set "textShadow"(value: boolean)
get "bookAuthor"(): $Component
set "textFormatting"(value: $ChatFormatting$Type)
set "pageTurnSound"(value: boolean)
get "bookName"(): string
get "textFormatting"(): $ChatFormatting
set "background"(value: $ResourceLocation$Type)
get "background"(): $ResourceLocation
get "pages"(): $List<($Page)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$Type = ($Book);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Book_ = $Book$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CDataManager" {
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CDataManager<E extends $Entity> {


public "get"<T, TrackedType>(entity: E, parameter: $CParameter$Type<(T), (TrackedType)>): T
public "load"(entity: E, nbt: $CompoundTag$Type): void
public "register"(entity: E): void
public "set"<T, TrackedType>(entity: E, parameter: $CParameter$Type<(T), (TrackedType)>, value: T): void
public "save"(entity: E, nbt: $CompoundTag$Type): void
public "isParam"(parameter: $CParameter$Type<(any), (any)>, data: $EntityDataAccessor$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CDataManager$Type<E> = ($CDataManager<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CDataManager_<E> = $CDataManager$Type<(E)>;
}}
declare module "packages/forge/net/mca/item/$VillagerEditorItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerEditorItem extends $TooltippedItem {
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

constructor(settings: $Item$Properties$Type)

public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, entity: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerEditorItem$Type = ($VillagerEditorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerEditorItem_ = $VillagerEditorItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/$Traits" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$VillagerLike, $VillagerLike$Type} from "packages/forge/net/mca/entity/$VillagerLike"
import {$Traits$Trait, $Traits$Trait$Type} from "packages/forge/net/mca/entity/ai/$Traits$Trait"
import {$CDataManager$Builder, $CDataManager$Builder$Type} from "packages/forge/net/mca/util/network/datasync/$CDataManager$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Traits {
static readonly "TRAIT_REGISTRY": $Map<(string), ($Traits$Trait)>
static "LEFT_HANDED": $Traits$Trait
static "WEAK": $Traits$Trait
static "TOUGH": $Traits$Trait
static "COLOR_BLIND": $Traits$Trait
static "HETEROCHROMIA": $Traits$Trait
static "LACTOSE_INTOLERANCE": $Traits$Trait
static "COELIAC_DISEASE": $Traits$Trait
static "DIABETES": $Traits$Trait
static "DWARFISM": $Traits$Trait
static "ALBINISM": $Traits$Trait
static "VEGETARIAN": $Traits$Trait
static "BISEXUAL": $Traits$Trait
static "HOMOSEXUAL": $Traits$Trait
static "ELECTRIFIED": $Traits$Trait
static "SIRBEN": $Traits$Trait
static "RAINBOW": $Traits$Trait
static "UNKNOWN": $Traits$Trait

constructor(entity: $VillagerLike$Type<(any)>)

public "getVerticalScaleFactor"(): float
public static "createTrackedData"<E extends $Entity>(builder: $CDataManager$Builder$Type<(E)>): $CDataManager$Builder<(E)>
public "getInheritedTraits"(): $Set<($Traits$Trait)>
public "eitherHaveTrait"(trait: $Traits$Trait$Type, other: $VillagerLike$Type<(any)>): boolean
public "hasSameTrait"(trait: $Traits$Trait$Type, other: $VillagerLike$Type<(any)>): boolean
public "removeTrait"(trait: $Traits$Trait$Type): void
public "getHorizontalScaleFactor"(): float
public static "registerTrait"(id: string, chance: float, inherit: float, usableOnPlayer: boolean): $Traits$Trait
public static "registerTrait"(id: string, chance: float, inherit: float): $Traits$Trait
public "getTraits"(): $Set<($Traits$Trait)>
public "hasTrait"(trait: string): boolean
public "hasTrait"(trait: $Traits$Trait$Type): boolean
public "hasTrait"(target: $VillagerLike$Type<(any)>, trait: $Traits$Trait$Type): boolean
public "inherit"(from: $Traits$Type): void
public "inherit"(from: $Traits$Type, seed: long): void
public "addTrait"(trait: $Traits$Trait$Type): void
public "randomize"(): void
get "verticalScaleFactor"(): float
get "inheritedTraits"(): $Set<($Traits$Trait)>
get "horizontalScaleFactor"(): float
get "traits"(): $Set<($Traits$Trait)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Traits$Type = ($Traits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Traits_ = $Traits$Type;
}}
declare module "packages/forge/net/mca/mixin/$MixinMemoryModuleType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinMemoryModuleType {

}

export namespace $MixinMemoryModuleType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinMemoryModuleType$Type = ($MixinMemoryModuleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinMemoryModuleType_ = $MixinMemoryModuleType$Type;
}}
declare module "packages/forge/net/mca/util/network/datasync/$CDataParameter" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CParameter, $CParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CParameter"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CEnumParameter, $CEnumParameter$Type} from "packages/forge/net/mca/util/network/datasync/$CEnumParameter"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"

export class $CDataParameter<T> implements $CParameter<(T), (T)> {


public "get"(param: $EntityDataAccessor$Type<(T)>, tracker: $SynchedEntityData$Type): T
public "load"(nbt: $CompoundTag$Type): T
public "getDefault"(): T
public "set"(param: $EntityDataAccessor$Type<(T)>, tracker: $SynchedEntityData$Type, v: T): void
public "save"(nbt: $CompoundTag$Type, value: T): void
public "createParam"(type: $Class$Type<(any)>): $EntityDataAccessor<(T)>
public static "create"<T extends $Enum<(T)>>(id: string, def: T): $CEnumParameter<(T)>
public static "create"<T extends $Enum<(T)>>(id: string, type: $Class$Type<(T)>): $CEnumParameter<(T)>
public static "create"(id: string, def: integer): $CDataParameter<(integer)>
public static "create"(id: string, def: $CompoundTag$Type): $CDataParameter<($CompoundTag)>
public static "create"(id: string, def: string): $CDataParameter<(string)>
public static "create"(id: string, def: boolean): $CDataParameter<(boolean)>
public static "create"(id: string, def: float): $CDataParameter<(float)>
public static "create"(id: string, def: $Optional$Type<($UUID$Type)>): $CDataParameter<($Optional<($UUID)>)>
public static "create"(id: string, def: $BlockPos$Type): $CDataParameter<($BlockPos)>
public static "create"(id: string, def: $ItemStack$Type): $CDataParameter<($ItemStack)>
get "default"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CDataParameter$Type<T> = ($CDataParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CDataParameter_<T> = $CDataParameter$Type<(T)>;
}}
declare module "packages/forge/net/mca/entity/$EntityWrapper" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"

export interface $EntityWrapper {

 "asEntity"(): $Mob
}

export namespace $EntityWrapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWrapper$Type = ($EntityWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityWrapper_ = $EntityWrapper$Type;
}}
declare module "packages/forge/net/mca/item/$StaffOfLifeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TooltippedItem, $TooltippedItem$Type} from "packages/forge/net/mca/item/$TooltippedItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffOfLifeItem extends $TooltippedItem {
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

constructor(properties: $Item$Properties$Type)

public "isFoil"(stack: $ItemStack$Type): boolean
public "getRarity"(stack: $ItemStack$Type): $Rarity
public "isEnchantable"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffOfLifeItem$Type = ($StaffOfLifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffOfLifeItem_ = $StaffOfLifeItem$Type;
}}
declare module "packages/forge/net/mca/entity/ai/relationship/$AgeState" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VillagerDimensions, $VillagerDimensions$Type} from "packages/forge/net/mca/entity/ai/relationship/$VillagerDimensions"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AgeState extends $Enum<($AgeState)> implements $VillagerDimensions {
static readonly "UNASSIGNED": $AgeState
static readonly "BABY": $AgeState
static readonly "TODDLER": $AgeState
static readonly "CHILD": $AgeState
static readonly "TEEN": $AgeState
static readonly "ADULT": $AgeState


public "getHead"(): float
public static "random"(): $AgeState
public static "getMaxAge"(): integer
public "getWidth"(): float
public "getHeight"(): float
public "getNext"(): $AgeState
public "getName"(): $Component
public static "values"(): ($AgeState)[]
public static "valueOf"(name: string): $AgeState
public static "getId"(age: integer): integer
public static "getStageDuration"(): integer
public static "byCurrentAge"(age: integer): $AgeState
public "getPitch"(): float
public static "byId"(id: integer): $AgeState
public "getSpeed"(): float
public static "getDelta"(age: float): float
public "getBreasts"(): float
public "toAge"(): integer
get "head"(): float
get "maxAge"(): integer
get "width"(): float
get "height"(): float
get "next"(): $AgeState
get "name"(): $Component
get "stageDuration"(): integer
get "pitch"(): float
get "speed"(): float
get "breasts"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeState$Type = (("toddler") | ("baby") | ("unassigned") | ("teen") | ("adult") | ("child")) | ($AgeState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgeState_ = $AgeState$Type;
}}
declare module "packages/forge/net/mca/block/$JewelerWorkbench" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
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
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $JewelerWorkbench extends $Block {
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

/**
 * 
 * @deprecated
 */
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, rayTrace: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JewelerWorkbench$Type = ($JewelerWorkbench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JewelerWorkbench_ = $JewelerWorkbench$Type;
}}

declare module "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$Type, arg1: $Vec3i$Type)

public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $CompoundTag$Type): void
public "add"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "get"(arg0: $BlockPos$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureBlockInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$PlayerEnchantEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$EnchantmentTableServerEventJS, $EnchantmentTableServerEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $PlayerEnchantEventJS extends $EnchantmentTableServerEventJS {

constructor(arg0: integer, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $Level$Type, arg4: $BlockPos$Type, arg5: $Player$Type, arg6: $EnchantmentMenuProcess$Type)

public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getClickedButton"(): integer
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getCosts"(): integer
get "enchantments"(): $List<($EnchantmentInstance)>
get "clickedButton"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "costs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/potion/$PotionBrewingRegisterEvent" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBrewingRegisterEvent extends $EventJS {

constructor()

public "addCustomBrewing"(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type): void
public "addPotionBrewing"(arg0: $Ingredient$Type, arg1: $Potion$Type, arg2: $Potion$Type): void
public "removeByPotion"(arg0: $Potion$Type, arg1: $Ingredient$Type, arg2: $Potion$Type): void
public "removeContainer"(arg0: $Ingredient$Type): void
public "validateContainer"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
public "addContainerRecipe"(arg0: $Item$Type, arg1: $Ingredient$Type, arg2: $Item$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$WandererTradingEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"

export class $WandererTradingEventJS extends $EventJS {

constructor(arg0: $Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)

public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$Type): void
public "removeTrades"(arg0: $TradeFilter$Type): void
public "removeVanillaTrades"(arg0: integer): void
public "removeModdedTrades"(arg0: integer): void
public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
public "addTrade"(arg0: integer, arg1: ($TradeItem$Type)[], arg2: $TradeItem$Type): $SimpleTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/unified/utils/$UnifyTag" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $UnifyTag<T> extends $Record {

constructor(boundType: $Class$Type<(T)>, location: $ResourceLocation$Type)

public static "item"(location: $ResourceLocation$Type): $UnifyTag<($Item)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public static "block"(location: $ResourceLocation$Type): $UnifyTag<($Block)>
public "boundType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyTag$Type<T> = ($UnifyTag<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyTag_<T> = $UnifyTag$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$FilterAvailableEnchantmentsEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterAvailableEnchantmentsEventJS extends $EventJS {

constructor(arg0: $List$Type<($EnchantmentInstance$Type)>, arg1: integer, arg2: $ItemStack$Type)

public "getItem"(): $ItemStack
public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "printEnchantmentInstances"(): void
public "getPowerLevel"(): integer
public "addWithLevel"(arg0: $Enchantment$Type, arg1: integer): void
public "getEnchantmentInstances"(): $List<($EnchantmentInstance)>
get "item"(): $ItemStack
get "powerLevel"(): integer
get "enchantmentInstances"(): $List<($EnchantmentInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAvailableEnchantmentsEventJS$Type = ($FilterAvailableEnchantmentsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAvailableEnchantmentsEventJS_ = $FilterAvailableEnchantmentsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapPosInfo extends $Record {

constructor(pos: $BlockPos$Type, name: $Component$Type)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Type = ($MapPosInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo_ = $MapPosInfo$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureLoadEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$StructureTemplateAccess, $StructureTemplateAccess$Type} from "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess"
import {$PaletteWrapper, $PaletteWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$PaletteWrapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityInfoWrapper, $EntityInfoWrapper$Type} from "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $StructureLoadEventJS extends $EventJS {

constructor(arg0: $StructureTemplateAccess$Type, arg1: $ResourceLocation$Type)

public static "invoke"(arg0: $StructureTemplate$Type, arg1: $ResourceLocation$Type): void
public "getId"(): string
public "getEntities"(): $EntityInfoWrapper
public "getStructureSize"(): $Vec3i
public "getPalettesSize"(): integer
public "forEachPalettes"(arg0: $Consumer$Type<($PaletteWrapper$Type)>): void
public "getEntitiesSize"(): integer
public "removePalette"(arg0: integer): void
public "getPalette"(arg0: integer): $PaletteWrapper
get "id"(): string
get "entities"(): $EntityInfoWrapper
get "structureSize"(): $Vec3i
get "palettesSize"(): integer
get "entitiesSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/$MoreJSBinding" {
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeightedList$Builder, $WeightedList$Builder$Type} from "packages/com/almostreliable/morejs/util/$WeightedList$Builder"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MoreJSBinding {

constructor()

public static "range"(arg0: any): $IntRange
public static "ofTradeFilter"(arg0: any): $TradeFilter
public static "ofTradeItem"(arg0: any): $TradeItem
public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "findStructure"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
public static "weightedList"(): $WeightedList$Builder<(any)>
public static "findBiome"(arg0: $BlockPos$Type, arg1: $ServerLevel$Type, arg2: string, arg3: integer): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeFilter" {
import {$TriConsumer, $TriConsumer$Type} from "packages/com/almostreliable/morejs/util/$TriConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$TradeTypes, $TradeTypes$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeTypes"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $TradeFilter {

constructor(arg0: $Ingredient$Type, arg1: $Ingredient$Type, arg2: $Ingredient$Type)

public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $TradeTypes$Type): boolean
public "match"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $TradeTypes$Type): boolean
public "matchType"(arg0: $TradeTypes$Type): boolean
public "onMatch"(arg0: $TriConsumer$Type<($ItemStack$Type), ($ItemStack$Type), ($ItemStack$Type)>): void
public "matchMerchantLevel"(arg0: integer): boolean
public "matchProfession"(arg0: $VillagerProfession$Type): boolean
public "setFirstCountMatcher"(arg0: $IntRange$Type): void
public "setSecondCountMatcher"(arg0: $IntRange$Type): void
public "setOutputCountMatcher"(arg0: $IntRange$Type): void
public "setTradeTypes"(arg0: $Set$Type<($TradeTypes$Type)>): void
public "setProfessions"(arg0: $Set$Type<($VillagerProfession$Type)>): void
public "setMerchantLevelMatcher"(arg0: $IntRange$Type): void
set "firstCountMatcher"(value: $IntRange$Type)
set "secondCountMatcher"(value: $IntRange$Type)
set "outputCountMatcher"(value: $IntRange$Type)
set "tradeTypes"(value: $Set$Type<($TradeTypes$Type)>)
set "professions"(value: $Set$Type<($VillagerProfession$Type)>)
set "merchantLevelMatcher"(value: $IntRange$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$Type = ($TradeFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess" {
import {$EnchantmentState, $EnchantmentState$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $EnchantmentMenuProcess {

constructor(arg0: $EnchantmentMenu$Type)

public "setState"(arg0: $EnchantmentState$Type): void
public "getState"(): $EnchantmentState
public "storeItemIsEnchantable"(arg0: boolean, arg1: $ItemStack$Type): boolean
public "isFreezeBroadcast"(): boolean
public "isItemEnchantable"(arg0: $ItemStack$Type): boolean
public "clearEnchantments"(): void
public "setEnchantments"(arg0: integer, arg1: $List$Type<($EnchantmentInstance$Type)>): void
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "getCurrentItem"(): $ItemStack
public "setFreezeBroadcast"(arg0: boolean): void
public "matchesCurrentItem"(arg0: $ItemStack$Type): boolean
public "prepareEvent"(arg0: $ItemStack$Type): void
public "setCurrentItem"(arg0: $ItemStack$Type): void
public "getPlayer"(): $Player
public "setPlayer"(arg0: $Player$Type): void
public "abortEvent"(arg0: $ItemStack$Type): void
public "getMenu"(): $EnchantmentMenu
set "state"(value: $EnchantmentState$Type)
get "state"(): $EnchantmentState
get "freezeBroadcast"(): boolean
get "currentItem"(): $ItemStack
set "freezeBroadcast"(value: boolean)
set "currentItem"(value: $ItemStack$Type)
get "player"(): $Player
set "player"(value: $Player$Type)
get "menu"(): $EnchantmentMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuProcess$Type = ($EnchantmentMenuProcess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuProcess_ = $EnchantmentMenuProcess$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ClientRecipeTracker implements $Recipe<($Container)> {
static readonly "ID": $ResourceLocation
static readonly "RECIPES": string
static readonly "NAMESPACE": string
static readonly "UNIFIED_FLAG": integer
static readonly "DUPLICATE_FLAG": integer
static readonly "SERIALIZER": $RecipeSerializer<($ClientRecipeTracker)>
static readonly "TYPE": $RecipeType<($ClientRecipeTracker)>


public "getLink"(recipeId: $ResourceLocation$Type): $ClientRecipeTracker$ClientRecipeLink
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getId"(): $ResourceLocation
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getSchema"(): $RecipeSchema
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "setGroup"(group: string): void
public "getGroup"(): string
public "getMod"(): string
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "orCreateId"(): $ResourceLocation
set "group"(value: string)
get "group"(): string
get "mod"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Type = ($ClientRecipeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker_ = $ClientRecipeTracker$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $Item$Type)

public "amount"(arg0: integer): $EnchantedItemTrade
public "amount"(arg0: integer, arg1: integer): $EnchantedItemTrade
public "enchantments"(...arg0: ($Enchantment$Type)[]): $EnchantedItemTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$Type;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UnifyConfig$TagInheritanceMode extends $Enum<($UnifyConfig$TagInheritanceMode)> {
static readonly "ALLOW": $UnifyConfig$TagInheritanceMode
static readonly "DENY": $UnifyConfig$TagInheritanceMode


public static "values"(): ($UnifyConfig$TagInheritanceMode)[]
public static "valueOf"(name: string): $UnifyConfig$TagInheritanceMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$TagInheritanceMode$Type = (("allow") | ("deny")) | ($UnifyConfig$TagInheritanceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig$TagInheritanceMode_ = $UnifyConfig$TagInheritanceMode$Type;
}}
declare module "packages/com/almostreliable/unified/compat/$AlmostKube" {
import {$UnifyConfig, $UnifyConfig$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AlmostKube {


public static "getUnifyConfig"(): $UnifyConfig
public static "getPreferredTagForItem"(stack: $ItemStack$Type): string
public static "getReplacementForItem"(stack: $ItemStack$Type): $ItemStack
public static "getPreferredItemForTag"(tag: $ResourceLocation$Type): $ItemStack
public static "getTags"(): $Set<(string)>
public static "getItemIds"(tag: $ResourceLocation$Type): $Set<(string)>
get "unifyConfig"(): $UnifyConfig
get "tags"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$Type = ($AlmostKube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlmostKube_ = $AlmostKube$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureAfterPlaceEventJS" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PiecesContainer, $PiecesContainer$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StructureAfterPlaceEventJS extends $LevelEventJS {

constructor(arg0: $Structure$Type, arg1: $WorldGenLevel$Type, arg2: $StructureManager$Type, arg3: $ChunkGenerator$Type, arg4: $RandomSource$Type, arg5: $BoundingBox$Type, arg6: $ChunkPos$Type, arg7: $PiecesContainer$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getRandomSource"(): $RandomSource
public "getStructure"(): $Structure
public "getStructureManager"(): $StructureManager
public "getLevel"(): $ServerLevel
public "getChunkPos"(): $ChunkPos
public "getChunkGenerator"(): $ChunkGenerator
public "getChunkBoundingBox"(): $BoundingBox
public "getPiecesContainer"(): $PiecesContainer
public "getStructureBoundingBox"(): $BoundingBox
public "getWorldGenLevel"(): $WorldGenLevel
public "getPieceType"(arg0: $StructurePieceType$Type): $ResourceLocation
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getGenStep"(): string
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "randomSource"(): $RandomSource
get "structure"(): $Structure
get "structureManager"(): $StructureManager
get "level"(): $ServerLevel
get "chunkPos"(): $ChunkPos
get "chunkGenerator"(): $ChunkGenerator
get "chunkBoundingBox"(): $BoundingBox
get "piecesContainer"(): $PiecesContainer
get "structureBoundingBox"(): $BoundingBox
get "worldGenLevel"(): $WorldGenLevel
get "intersectionBoxes"(): $Collection<($BoundingBox)>
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "genStep"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructureBlockInfoModification {

 "getBlock"(): $Block
 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getPosition"(): $BlockPos
 "setVanillaBlockState"(arg0: $BlockState$Type): void
 "setBlock"(arg0: $ResourceLocation$Type, arg1: $Map$Type<(string), (any)>): void
 "setBlock"(arg0: $ResourceLocation$Type): void
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
 "setNbt"(arg0: $CompoundTag$Type): void
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$StartTradingEventJS" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Merchant, $Merchant$Type} from "packages/net/minecraft/world/item/trading/$Merchant"
import {$OfferExtension, $OfferExtension$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferExtension"

export class $StartTradingEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: $Merchant$Type)

public "getMerchant"(): $Merchant
public "forEachOffers"(arg0: $BiConsumer$Type<($OfferExtension$Type), (integer)>): void
get "merchant"(): $Merchant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $OfferExtension {

 "setVillagerExperience"(arg0: integer): void
 "setDisabled"(arg0: boolean): void
 "getFirstInput"(): $ItemStack
 "setFirstInput"(arg0: $ItemStack$Type): void
 "getSecondInput"(): $ItemStack
 "setSecondInput"(arg0: $ItemStack$Type): void
 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$Type): void
 "setMaxUses"(arg0: integer): void
 "setDemand"(arg0: integer): void
 "setPriceMultiplier"(arg0: float): void
 "setRewardExp"(arg0: boolean): void
 "isRewardingExp"(): boolean
 "replaceEmeralds"(arg0: $Item$Type): void
 "replaceItems"(arg0: $Ingredient$Type, arg1: $ItemStack$Type): void
 "isDisabled"(): boolean
}

export namespace $OfferExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList$Builder" {
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "build"(): $WeightedList<(T)>
public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$OfferModification" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $OfferModification {

constructor(arg0: $MerchantOffer$Type)

public "getMerchantOffer"(): $MerchantOffer
public "isRewardingExp"(): boolean
public "setPriceMultiplier"(arg0: float): void
public "setRewardExp"(arg0: boolean): void
public "setFirstInput"(arg0: $ItemStack$Type): void
public "getVillagerExperience"(): integer
public "setSecondInput"(arg0: $ItemStack$Type): void
public "getFirstInput"(): $ItemStack
public "getSecondInput"(): $ItemStack
public "getPriceMultiplier"(): float
public "setVillagerExperience"(arg0: integer): void
public "getOutput"(): $ItemStack
public "setOutput"(arg0: $ItemStack$Type): void
public "getDemand"(): integer
public "getMaxUses"(): integer
public "setMaxUses"(arg0: integer): void
public "setDemand"(arg0: integer): void
get "merchantOffer"(): $MerchantOffer
get "rewardingExp"(): boolean
set "priceMultiplier"(value: float)
set "rewardExp"(value: boolean)
set "firstInput"(value: $ItemStack$Type)
get "villagerExperience"(): integer
set "secondInput"(value: $ItemStack$Type)
get "firstInput"(): $ItemStack
get "secondInput"(): $ItemStack
get "priceMultiplier"(): float
set "villagerExperience"(value: integer)
get "output"(): $ItemStack
set "output"(value: $ItemStack$Type)
get "demand"(): integer
get "maxUses"(): integer
set "maxUses"(value: integer)
set "demand"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferModification$Type = ($OfferModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferModification_ = $OfferModification$Type;
}}
declare module "packages/com/almostreliable/unified/config/$Config" {
import {$Config$Serializer, $Config$Serializer$Type} from "packages/com/almostreliable/unified/config/$Config$Serializer"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"

export class $Config {

constructor()

public static "load"<T extends $Config>(name: string, serializer: $Config$Serializer$Type<(T)>): T
public static "save"<T extends $Config>(p: $Path$Type, config: T, serializer: $Config$Serializer$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$Type;
}}
declare module "packages/com/almostreliable/unified/config/$UnifyConfig" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$UnifyTag, $UnifyTag$Type} from "packages/com/almostreliable/unified/utils/$UnifyTag"
import {$UnifyConfig$TagInheritanceMode, $UnifyConfig$TagInheritanceMode$Type} from "packages/com/almostreliable/unified/config/$UnifyConfig$TagInheritanceMode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UnifyConfig extends $Config {
static readonly "NAME": string

constructor(modPriorities: $List$Type<(string)>, stoneStrata: $List$Type<(string)>, unbakedTags: $List$Type<(string)>, materials: $List$Type<(string)>, priorityOverrides: $Map$Type<($ResourceLocation$Type), (string)>, customTags: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, tagOwnerships: $Map$Type<($ResourceLocation$Type), ($Set$Type<($ResourceLocation$Type)>)>, itemTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, itemTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, blockTagInheritanceMode: $Enum$Type<($UnifyConfig$TagInheritanceMode$Type)>, blockTagInheritance: $Map$Type<($ResourceLocation$Type), ($Set$Type<($Pattern$Type)>)>, ignoredTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>, ignoredItems: $Set$Type<($Pattern$Type)>, ignoredRecipeTypes: $Set$Type<($Pattern$Type)>, ignoredRecipes: $Set$Type<($Pattern$Type)>, hideJeiRei: boolean)

public "clearCache"(): void
public "bakeAndValidateTags"(tags: $Map$Type<($ResourceLocation$Type), ($Collection$Type<($Holder$Type<($Item$Type)>)>)>): $Set<($UnifyTag<($Item)>)>
public "getTagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "reiOrJeiDisabled"(): boolean
public "getMaterials"(): $List<(string)>
public "getPriorityOverrides"(): $Map<($ResourceLocation), (string)>
public "getCustomTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "shouldInheritItemTag"(itemTag: $UnifyTag$Type<($Item$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "shouldInheritBlockTag"(itemTag: $UnifyTag$Type<($Block$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "includeItem"(item: $ResourceLocation$Type): boolean
public "includeRecipe"(recipe: $ResourceLocation$Type): boolean
public "includeRecipeType"(type: $ResourceLocation$Type): boolean
public "getModPriorities"(): $List<(string)>
public "getStoneStrata"(): $List<(string)>
public "bakeTags"(): $Set<($UnifyTag<($Item)>)>
get "tagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "materials"(): $List<(string)>
get "priorityOverrides"(): $Map<($ResourceLocation), (string)>
get "customTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "modPriorities"(): $List<(string)>
get "stoneStrata"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnifyConfig$Type = ($UnifyConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnifyConfig_ = $UnifyConfig$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$Type, arg1: $IntRange$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer, arg3: $CompoundTag$Type): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: integer): $TradeItem
public static "of"(arg0: $ItemStack$Type, arg1: integer, arg2: $CompoundTag$Type): $TradeItem
public "createItemStack"(arg0: $RandomSource$Type): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$TeleportType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$Type = (("ender_pearl") | ("chorus_fruit")) | ($TeleportType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$VillagerUtils" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreasureMapTrade, $TreasureMapTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade"
import {$EnchantedItemTrade, $EnchantedItemTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$EnchantedItemTrade"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$CustomTrade, $CustomTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$StewTrade, $StewTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade"
import {$PotionTrade, $PotionTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<(any)>)>

constructor()

public static "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "getProfession"(arg0: $ResourceLocation$Type): $VillagerProfession
public static "isVanillaTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "isModdedTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "isMoreJSTrade"(arg0: $VillagerTrades$ItemListing$Type): boolean
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "createSimpleTrade"(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type): $SimpleTrade
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$Type): $CustomTrade
public static "createStructureMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public static "createCustomMapTrade"(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type): $TreasureMapTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$Type)[], arg1: $Item$Type): $EnchantedItemTrade
public static "createStewTrade"(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer): $StewTrade
public static "createPotionTrade"(arg0: ($TradeItem$Type)[]): $PotionTrade
public static "setAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer, arg2: $List$Type<($VillagerTrades$ItemListing$Type)>): void
public static "getAbstractTrades"(arg0: $Map$Type<(integer), (($VillagerTrades$ItemListing$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
get "professions"(): $Collection<($VillagerProfession)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "IDLE": $EnchantmentState
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$Type = (("idle") | ("use_stored_enchantments") | ("store_enchantments")) | ($EnchantmentState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $TradeItem$Type)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void

(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>, arg1: integer, arg2: $VillagerProfession$Type): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$Type = ($VillagerTradingEventJS$ForEachCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableServerEventJS$Data {


public "clearEnchantments"(): void
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getRequiredLevel"(): integer
public "hasEnchantment"(arg0: $ResourceLocation$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$Type, arg1: $IntRange$Type): boolean
public "forEachEnchantments"(arg0: $BiConsumer$Type<($Enchantment$Type), (integer)>): void
public "getEnchantmentCount"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
get "requiredLevel"(): integer
get "enchantmentCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Data$Type = ($EnchantmentTableServerEventJS$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS$Data_ = $EnchantmentTableServerEventJS$Data$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentTableServerEventJS$Data, $EnchantmentTableServerEventJS$Data$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableServerEventJS$Data"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: $Player$Type, arg5: $EnchantmentMenuProcess$Type)

public "get"(arg0: integer): $EnchantmentTableServerEventJS$Data
public "getSize"(): integer
public "getPosition"(): $BlockPos
public "itemWasChanged"(): boolean
public "setItem"(arg0: $ItemStack$Type): void
get "size"(): integer
get "position"(): $BlockPos
set "item"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$PotionTrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$Type)[])

public "item"(arg0: $Item$Type): $PotionTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "onlyBrewablePotion"(): $PotionTrade
public "noBrewablePotion"(): $PotionTrade
public "potions"(...arg0: ($Potion$Type)[]): $PotionTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$TradeTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "ForgeBasic": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$Type = (("treasuremapforemeralds") | ("dyedarmorforemeralds") | ("enchanteditemforemeralds") | ("tippedarrowforitemsandemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic") | ("emeraldforitems") | ("itemsandemeraldstoitems") | ("suspiciousstewforemeralds") | ("itemsforemeralds") | ("enchantbookforemeralds")) | ($TradeTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$WeightedList" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$EntityInfoWrapper" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $EntityInfoWrapper {

constructor(arg0: $List$Type<($StructureTemplate$StructureEntityInfo$Type)>, arg1: $Vec3i$Type)

public "add"(arg0: $CompoundTag$Type): void
public "forEach"(arg0: $Consumer$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
public "removeIf"(arg0: $Predicate$Type<($StructureTemplate$StructureEntityInfo$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuExtension" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$EnchantmentMenuProcess, $EnchantmentMenuProcess$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentMenuProcess"

export interface $EnchantmentMenuExtension {

 "getMoreJSProcess"(): $EnchantmentMenuProcess
 "getMoreJsEnchantSlots"(): $Container
}

export namespace $EnchantmentMenuExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type = (("attack") | ("keep") | ("ignore")) | ($PiglinPlayerBehaviorEventJS$PiglinBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type;
}}
declare module "packages/com/almostreliable/unified/config/$Config$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"

export class $Config$Serializer<T extends $Config> {

constructor()

public "isInvalid"(): boolean
public "deserialize"(arg0: $JsonObject$Type): T
public "serialize"(arg0: T): $JsonObject
public "safeGet"<V>(supplier: $Supplier$Type<(V)>, defaultValue: V): V
get "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Serializer$Type<T> = ($Config$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$Serializer_<T> = $Config$Serializer$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$ExperiencePlayerEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $ExperiencePlayerEventJS extends $PlayerEventJS {

constructor(arg0: $Player$Type, arg1: integer)

public "getEntity"(): $Player
public "getExperienceProgress"(): float
public "setExperienceProgress"(arg0: float): void
public "getExperienceLevel"(): integer
public "setExperienceLevel"(arg0: integer): void
public "getTotalExperience"(): integer
public "setTotalExperience"(arg0: integer): void
public "getXpNeededForNextLevel"(): integer
public "getRemainingExperience"(): integer
public "willLevelUp"(): boolean
public "getAmount"(): integer
public "setAmount"(arg0: integer): void
get "entity"(): $Player
get "experienceProgress"(): float
set "experienceProgress"(value: float)
get "experienceLevel"(): integer
set "experienceLevel"(value: integer)
get "totalExperience"(): integer
set "totalExperience"(value: integer)
get "xpNeededForNextLevel"(): integer
get "remainingExperience"(): integer
get "amount"(): integer
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateVillagerOffersEventJS" {
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$UpdateAbstractVillagerOffersEventJS, $UpdateAbstractVillagerOffersEventJS$Type} from "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateVillagerOffersEventJS extends $UpdateAbstractVillagerOffersEventJS {

constructor(arg0: $Villager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getProfession"(): $VillagerProfession
public "getVillagerData"(): $VillagerData
public "isProfession"(arg0: $VillagerProfession$Type): boolean
public "getVillagerLevel"(): integer
get "profession"(): $VillagerProfession
get "villagerData"(): $VillagerData
get "villagerLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateVillagerOffersEventJS$Type = ($UpdateVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateVillagerOffersEventJS_ = $UpdateVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$StewTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: ($MobEffect$Type)[], arg2: integer)

public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$ClientRecipeLink" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientRecipeTracker$ClientRecipeLink extends $Record {

constructor(id: $ResourceLocation$Type, isUnified: boolean, isDuplicate: boolean)

public "isDuplicate"(): boolean
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "isUnified"(): boolean
get "duplicate"(): boolean
get "unified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$ClientRecipeLink$Type = ($ClientRecipeTracker$ClientRecipeLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$ClientRecipeLink_ = $ClientRecipeTracker$ClientRecipeLink$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TreasureMapTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$MapDecoration$Type, $MapDecoration$Type$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$TransformableTrade, $TransformableTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade"
import {$WeightedList, $WeightedList$Type} from "packages/com/almostreliable/morejs/util/$WeightedList"
import {$MapPosInfo$Provider, $MapPosInfo$Provider$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$Type)[], arg1: $MapPosInfo$Provider$Type)

public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$Type): $TreasureMapTrade
public "marker"(arg0: $MapDecoration$Type$Type): $TreasureMapTrade
public static "forStructure"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public static "forBiome"(arg0: ($TradeItem$Type)[], arg1: $WeightedList$Type<(any)>): $TreasureMapTrade
public "noPreview"(): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$FilterEnchantedTradeEventJS" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"

export class $FilterEnchantedTradeEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $RandomSource$Type, arg2: $List$Type<($Enchantment$Type)>)

public "getRandom"(): $RandomSource
public "add"(...arg0: ($Enchantment$Type)[]): void
public "remove"(...arg0: ($Enchantment$Type)[]): void
public "getEnchantments"(): $List<($Enchantment)>
public "printEnchantments"(): void
public "isVillager"(): boolean
public "isWanderer"(): boolean
get "random"(): $RandomSource
get "enchantments"(): $List<($Enchantment)>
get "villager"(): boolean
get "wanderer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterEnchantedTradeEventJS$Type = ($FilterEnchantedTradeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterEnchantedTradeEventJS_ = $FilterEnchantedTradeEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/teleport/$EntityTeleportsEventJS" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TeleportType, $TeleportType$Type} from "packages/com/almostreliable/morejs/features/teleport/$TeleportType"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTeleportsEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$Type)
constructor(arg0: $Entity$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$Type, arg5: $TeleportType$Type)

public "getY"(): double
public "getType"(): $TeleportType
public "getEntity"(): $Entity
public "getX"(): double
public "getZ"(): double
public "setX"(arg0: double): void
public "setY"(arg0: double): void
public "setZ"(arg0: double): void
get "y"(): double
get "type"(): $TeleportType
get "entity"(): $Entity
get "x"(): double
get "z"(): double
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS" {
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type} from "packages/com/almostreliable/morejs/features/misc/$PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"

export class $PiglinPlayerBehaviorEventJS extends $PlayerEventJS {

constructor(arg0: $Piglin$Type, arg1: $Player$Type, arg2: $Optional$Type<($Player$Type)>)

public "isAggressiveAlready"(): boolean
public "getPreviousTargetPlayer"(): $Player
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type): void
public "ignoreHoldingCheck"(): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "isIgnoreHoldingCheck"(): boolean
public "getPiglin"(): $Piglin
get "aggressiveAlready"(): boolean
get "previousTargetPlayer"(): $Player
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$Type)
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
get "piglin"(): $Piglin
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$OfferModification, $OfferModification$Type} from "packages/com/almostreliable/morejs/features/villager/$OfferModification"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void

(arg0: $OfferModification$Type, arg1: $Entity$Type, arg2: $RandomSource$Type): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$Type = ($TransformableTrade$Transformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$UpdateAbstractVillagerOffersEventJS" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$VillagerData, $VillagerData$Type} from "packages/net/minecraft/world/entity/npc/$VillagerData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$LivingEntityEventJS, $LivingEntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$LivingEntityEventJS"
import {$AbstractVillager, $AbstractVillager$Type} from "packages/net/minecraft/world/entity/npc/$AbstractVillager"
import {$MerchantOffers, $MerchantOffers$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $UpdateAbstractVillagerOffersEventJS extends $LivingEntityEventJS {

constructor(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>)

public "getEntity"(): $LivingEntity
public "getVillagerTrades"(arg0: $VillagerProfession$Type): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "invokeEvent"(arg0: $AbstractVillager$Type, arg1: $MerchantOffers$Type, arg2: ($VillagerTrades$ItemListing$Type)[], arg3: $List$Type<($MerchantOffer$Type)>): void
public "getVillagerData"(): $VillagerData
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "getAddedOffers"(): $Collection<($MerchantOffer)>
public "deleteAddedOffers"(): void
public "addRandomOffer"(): $MerchantOffer
public "addRandomOffer"(arg0: $List$Type<($VillagerTrades$ItemListing$Type)>): $MerchantOffer
public "getOffers"(): $MerchantOffers
public "isVillager"(): boolean
public "isWanderer"(): boolean
get "entity"(): $LivingEntity
get "villagerData"(): $VillagerData
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
get "addedOffers"(): $Collection<($MerchantOffer)>
get "offers"(): $MerchantOffers
get "villager"(): boolean
get "wanderer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateAbstractVillagerOffersEventJS$Type = ($UpdateAbstractVillagerOffersEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateAbstractVillagerOffersEventJS_ = $UpdateAbstractVillagerOffersEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$CustomTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$Type)

public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$Type;
}}
declare module "packages/com/almostreliable/morejs/features/structure/$StructureTemplateAccess" {
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StructureTemplateAccess {

 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getBorderSize"(): $Vec3i
 "getPalettes"(): $List<($StructureTemplate$Palette)>
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$Type;
}}
declare module "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker$Serializer" {
import {$ClientRecipeTracker, $ClientRecipeTracker$Type} from "packages/com/almostreliable/unified/recipe/$ClientRecipeTracker"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ClientRecipeTracker$Serializer implements $RecipeSerializer<($ClientRecipeTracker)> {

constructor()

public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $ClientRecipeTracker
public "fromJson"(recipeId: $ResourceLocation$Type, json: $JsonObject$Type): $ClientRecipeTracker
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $ClientRecipeTracker$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ClientRecipeTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Serializer$Type = ($ClientRecipeTracker$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$Serializer_ = $ClientRecipeTracker$Serializer$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/$IntRange" {
import {$IntPredicate, $IntPredicate$Type} from "packages/java/util/function/$IntPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "getRandom"(arg0: $RandomSource$Type): integer
public static "all"(): $IntRange
public "test"(arg0: integer): boolean
public "getMax"(): integer
public "getMin"(): integer
public "or"(arg0: $IntPredicate$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$Type): $IntPredicate
get "max"(): integer
get "min"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo$Provider" {
import {$MapPosInfo, $MapPosInfo$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$MapPosInfo"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MapPosInfo$Provider {

 "apply"(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo

(arg0: $ServerLevel$Type, arg1: $Entity$Type): $MapPosInfo
}

export namespace $MapPosInfo$Provider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPosInfo$Provider$Type = ($MapPosInfo$Provider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPosInfo$Provider_ = $MapPosInfo$Provider$Type;
}}
declare module "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS" {
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$IntRange, $IntRange$Type} from "packages/com/almostreliable/morejs/features/villager/$IntRange"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$Type} from "packages/com/almostreliable/morejs/features/villager/events/$VillagerTradingEventJS$ForEachCallback"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$TradeFilter, $TradeFilter$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeFilter"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$VillagerProfession, $VillagerProfession$Type} from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import {$SimpleTrade, $SimpleTrade$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$SimpleTrade"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VillagerTradingEventJS extends $EventJS {

constructor(arg0: $Map$Type<($VillagerProfession$Type), ($Int2ObjectMap$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>)>)

public "addCustomTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: $TransformableTrade$Transformer$Type): void
public "removeTrades"(arg0: $TradeFilter$Type): void
public "forEachTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type, arg2: $Consumer$Type<($List$Type<($VillagerTrades$ItemListing$Type)>)>): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$Type): void
public "removeVanillaTrades"(): void
public "removeVanillaTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeModdedTrades"(arg0: ($VillagerProfession$Type)[], arg1: $IntRange$Type): void
public "removeModdedTrades"(): void
public "getTrades"(arg0: $VillagerProfession$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $VillagerProfession$Type, arg1: integer, arg2: T): T
public "addTrade"(arg0: $VillagerProfession$Type, arg1: integer, arg2: ($TradeItem$Type)[], arg3: $TradeItem$Type): $SimpleTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/util/$TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T1, T2, T3> {

 "accept"(arg0: T1, arg1: T2, arg2: T3): void

(arg0: T1, arg1: T2, arg2: T3): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$Type<T1, T2, T3> = ($TriConsumer<(T1), (T2), (T3)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T1, T2, T3> = $TriConsumer$Type<(T1), (T2), (T3)>;
}}
declare module "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade" {
import {$MerchantOffer, $MerchantOffer$Type} from "packages/net/minecraft/world/item/trading/$MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$Type} from "packages/com/almostreliable/morejs/features/villager/trades/$TransformableTrade$Transformer"
import {$TradeItem, $TradeItem$Type} from "packages/com/almostreliable/morejs/features/villager/$TradeItem"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$Type} from "packages/net/minecraft/world/entity/npc/$VillagerTrades$ItemListing"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$Type)[])

public "transform"(arg0: $TransformableTrade$Transformer$Type): T
public "priceMultiplier"(arg0: float): T
public "villagerExperience"(arg0: integer): T
public "createOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "getOffer"(arg0: $Entity$Type, arg1: $RandomSource$Type): $MerchantOffer
public "maxUses"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$Type<(T)>;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableTooltipEventJS" {
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$Type} from "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnchantmentInstance, $EnchantmentInstance$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type, arg5: integer, arg6: $List$Type<(any)>)

public "getSlot"(): integer
public "getLines"(): $List<(any)>
public "getRequiredLevel"(): integer
public "getClue"(): $EnchantmentInstance
public "getClueId"(): $ResourceLocation
get "slot"(): integer
get "lines"(): $List<(any)>
get "requiredLevel"(): integer
get "clue"(): $EnchantmentInstance
get "clueId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$Type;
}}
declare module "packages/com/almostreliable/morejs/features/enchantment/$EnchantmentTableEventJS" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelEventJS, $LevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$LevelEventJS"

export class $EnchantmentTableEventJS extends $LevelEventJS {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $Player$Type, arg4: $EnchantmentMenu$Type)

public "getItem"(): $ItemStack
public "getSecondItem"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
get "item"(): $ItemStack
get "secondItem"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$Type;
}}

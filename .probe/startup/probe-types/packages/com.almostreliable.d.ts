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


public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getLink"(recipeId: $ResourceLocation$Type): $ClientRecipeTracker$ClientRecipeLink
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
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
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
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
export type $ClientRecipeTracker$Type = ($ClientRecipeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker_ = $ClientRecipeTracker$Type;
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
public "reiOrJeiDisabled"(): boolean
public "bakeAndValidateTags"(tags: $Map$Type<($ResourceLocation$Type), ($Collection$Type<($Holder$Type<($Item$Type)>)>)>): $Set<($UnifyTag<($Item)>)>
public "getTagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "getModPriorities"(): $List<(string)>
public "getStoneStrata"(): $List<(string)>
public "getPriorityOverrides"(): $Map<($ResourceLocation), (string)>
public "getCustomTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
public "shouldInheritItemTag"(itemTag: $UnifyTag$Type<($Item$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "shouldInheritBlockTag"(itemTag: $UnifyTag$Type<($Block$Type)>, dominantTags: $Set$Type<($UnifyTag$Type<($Item$Type)>)>): boolean
public "includeItem"(item: $ResourceLocation$Type): boolean
public "includeRecipe"(recipe: $ResourceLocation$Type): boolean
public "includeRecipeType"(type: $ResourceLocation$Type): boolean
public "getMaterials"(): $List<(string)>
public "bakeTags"(): $Set<($UnifyTag<($Item)>)>
get "tagOwnerships"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "modPriorities"(): $List<(string)>
get "stoneStrata"(): $List<(string)>
get "priorityOverrides"(): $Map<($ResourceLocation), (string)>
get "customTags"(): $Map<($ResourceLocation), ($Set<($ResourceLocation)>)>
get "materials"(): $List<(string)>
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
declare module "packages/com/almostreliable/unified/config/$Config$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Config, $Config$Type} from "packages/com/almostreliable/unified/config/$Config"

export class $Config$Serializer<T extends $Config> {

constructor()

public "isInvalid"(): boolean
public "deserialize"(arg0: $JsonObject$Type): T
public "safeGet"<V>(supplier: $Supplier$Type<(V)>, defaultValue: V): V
public "serialize"(arg0: T): $JsonObject
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

declare module "packages/steve_gall/minecolonies_tweaks/core/common/block/$MinecoloniesCropBlockExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecoloniesCropBlockExtension {

 "minecolonies_tweaks$onServerConfigReloaded"(): void

(): void
}

export namespace $MinecoloniesCropBlockExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecoloniesCropBlockExtension$Type = ($MinecoloniesCropBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecoloniesCropBlockExtension_ = $MinecoloniesCropBlockExtension$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/mixin/common/minecolonies/$ItemClipboardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemClipboardAccessor {

}

export namespace $ItemClipboardAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemClipboardAccessor$Type = ($ItemClipboardAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemClipboardAccessor_ = $ItemClipboardAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/common/crafting/$NBTMergeShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$NBTMergeShapelessRecipe, $NBTMergeShapelessRecipe$Type} from "packages/steve_gall/minecolonies_tweaks/core/common/crafting/$NBTMergeShapelessRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $NBTMergeShapelessRecipe$Serializer implements $RecipeSerializer<($NBTMergeShapelessRecipe)> {

constructor()

public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $NBTMergeShapelessRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $NBTMergeShapelessRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $NBTMergeShapelessRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $NBTMergeShapelessRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTMergeShapelessRecipe$Serializer$Type = ($NBTMergeShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTMergeShapelessRecipe$Serializer_ = $NBTMergeShapelessRecipe$Serializer$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/common/item/$ItemCropExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemCropExtension {

 "minecolonies_tweaks$onServerConfigReloaded"(): void

(): void
}

export namespace $ItemCropExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCropExtension$Type = ($ItemCropExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCropExtension_ = $ItemCropExtension$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/common/item/$ItemResourceScrollBook$Container" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemResourceScrollBook, $ItemResourceScrollBook$Type} from "packages/steve_gall/minecolonies_tweaks/core/common/item/$ItemResourceScrollBook"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $ItemResourceScrollBook$Container implements $Container {

constructor(arg0: $ItemResourceScrollBook$Type, arg1: $ItemStack$Type)

public "setChanged"(): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
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
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
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
export type $ItemResourceScrollBook$Container$Type = ($ItemResourceScrollBook$Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResourceScrollBook$Container_ = $ItemResourceScrollBook$Container$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/client/gui/$AbstractContainerScreenExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractContainerScreenExtension {

 "minecolonies_tweaks$onInitPost"(): void

(): void
}

export namespace $AbstractContainerScreenExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenExtension$Type = ($AbstractContainerScreenExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenExtension_ = $AbstractContainerScreenExtension$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/mixin/common/minecolonies/$ItemResourceScrollAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemResourceScrollAccessor {

}

export namespace $ItemResourceScrollAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemResourceScrollAccessor$Type = ($ItemResourceScrollAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResourceScrollAccessor_ = $ItemResourceScrollAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/api/common/building/$BuildingPos" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IColony, $IColony$Type} from "packages/com/minecolonies/api/colony/$IColony"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"

export class $BuildingPos {
static readonly "TAG_DIMENSION_ID": string
static readonly "TAG_COLONY_ID": string
static readonly "TAG_BUILDING_ID": string

constructor(arg0: $IColony$Type, arg1: $BlockPos$Type)
constructor(arg0: $IBuilding$Type)
constructor(arg0: $IBuildingView$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: $BlockPos$Type)

public "getY"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getX"(): integer
public "getColonyId"(): integer
public "getBuildingId"(): $BlockPos
public "getBuildingView"(): $IBuildingView
public "serializeBuffer"(arg0: $FriendlyByteBuf$Type): void
public "serializeNBT"(): $CompoundTag
public "getDimensionId"(): $ResourceKey<($Level)>
public "getBuilding"(): $IBuilding
public "getZ"(): integer
get "y"(): integer
get "x"(): integer
get "colonyId"(): integer
get "buildingId"(): $BlockPos
get "buildingView"(): $IBuildingView
get "dimensionId"(): $ResourceKey<($Level)>
get "building"(): $IBuilding
get "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildingPos$Type = ($BuildingPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildingPos_ = $BuildingPos$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/common/crafting/$NBTMergeShapelessRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $NBTMergeShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ShapelessRecipe$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTMergeShapelessRecipe$Type = ($NBTMergeShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTMergeShapelessRecipe_ = $NBTMergeShapelessRecipe$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/mixin/common/minecolonies/$ItemColonyMapAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemColonyMapAccessor {

}

export namespace $ItemColonyMapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColonyMapAccessor$Type = ($ItemColonyMapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColonyMapAccessor_ = $ItemColonyMapAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/api/common/building/module/$ModulePos" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BuildingPos, $BuildingPos$Type} from "packages/steve_gall/minecolonies_tweaks/api/common/building/$BuildingPos"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"

export class $ModulePos {
static readonly "TAG_BUILDING_POS": string
static readonly "TAG_MODULE_NAME": string

constructor(arg0: $IBuildingModule$Type)
constructor(arg0: $IBuildingModuleView$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $BuildingPos$Type, arg1: string)

public "getY"(): integer
public "equals"(arg0: any): boolean
public "getModule"(): $IBuildingModule
public "hashCode"(): integer
public "getModuleName"(): string
public "getX"(): integer
public "getModuleView"(): $IBuildingModuleView
public "getColonyId"(): integer
public "getBuildingId"(): $BlockPos
public "getBuildingPos"(): $BuildingPos
public "serializeBuffer"(arg0: $FriendlyByteBuf$Type): void
public "serializeNBT"(): $CompoundTag
public "getDimensionId"(): $ResourceKey<($Level)>
public "getZ"(): integer
get "y"(): integer
get "module"(): $IBuildingModule
get "moduleName"(): string
get "x"(): integer
get "moduleView"(): $IBuildingModuleView
get "colonyId"(): integer
get "buildingId"(): $BlockPos
get "buildingPos"(): $BuildingPos
get "dimensionId"(): $ResourceKey<($Level)>
get "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModulePos$Type = ($ModulePos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModulePos_ = $ModulePos$Type;
}}
declare module "packages/steve_gall/minecolonies_tweaks/core/common/item/$ItemResourceScrollBook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemResourceScrollBook$Container, $ItemResourceScrollBook$Container$Type} from "packages/steve_gall/minecolonies_tweaks/core/common/item/$ItemResourceScrollBook$Container"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemResourceScrollBook extends $Item {
static readonly "TOOLTIPS": $List<($Component)>
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

constructor(arg0: $Item$Properties$Type, arg1: integer)

public "getContainer"(arg0: $ItemStack$Type): $ItemResourceScrollBook$Container
public "getHandSlot"(arg0: $Player$Type, arg1: $InteractionHand$Type): integer
public "openInventory"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: integer): void
public "getSlots"(): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getItems"(arg0: $ItemStack$Type): $NonNullList<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setItems"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "openWindow"(arg0: $ItemStack$Type): void
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemResourceScrollBook$Type = ($ItemResourceScrollBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResourceScrollBook_ = $ItemResourceScrollBook$Type;
}}

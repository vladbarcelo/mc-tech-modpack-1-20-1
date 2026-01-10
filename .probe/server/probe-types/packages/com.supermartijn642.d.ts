declare module "packages/com/supermartijn642/core/item/$ItemRarity" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $ItemRarity extends $Enum<($ItemRarity)> {
static readonly "COMMON": $ItemRarity
static readonly "UNCOMMON": $ItemRarity
static readonly "RARE": $ItemRarity
static readonly "EPIC": $ItemRarity


public static "values"(): ($ItemRarity)[]
public static "valueOf"(name: string): $ItemRarity
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $Rarity
get "underlying"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRarity$Type = (("uncommon") | ("common") | ("rare") | ("epic")) | ($ItemRarity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRarity_ = $ItemRarity$Type;
}}
declare module "packages/com/supermartijn642/fusion/util/$Triple" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Triple<X, Y, Z> extends $Record {

constructor(left: X, middle: Y, right: Z)

public "left"(): X
public "right"(): Z
public "middle"(): Y
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<(X), (Y), (Z)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$Type<X, Y, Z> = ($Triple<(X), (Y), (Z)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triple_<X, Y, Z> = $Triple$Type<(X), (Y), (Z)>;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$TextureAtlasSpriteExtension" {
import {$TextureType, $TextureType$Type} from "packages/com/supermartijn642/fusion/api/texture/$TextureType"

export interface $TextureAtlasSpriteExtension {

 "setFusionTextureType"(type: $TextureType$Type<(any)>): void
 "getFusionTextureType"(): $TextureType<(any)>
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$Type = ($TextureAtlasSpriteExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasSpriteExtension_ = $TextureAtlasSpriteExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SpriteCreationContext {

 "getSpriteWidth"(): integer
 "getTextureBuffers"(): ($NativeImage)[]
 "getSpriteHeight"(): integer
 "getMipmapLevels"(): integer
 "getTextureIdentifier"(): $ResourceLocation
 "getTextureWidth"(): integer
 "getTextureHeight"(): integer
 "createOriginalSprite"(): $TextureAtlasSprite
 "getAtlasWidth"(): integer
 "getSpritePositionY"(): integer
 "getSpritePositionX"(): integer
 "getAtlasHeight"(): integer
 "getAtlas"(): $TextureAtlas
}

export namespace $SpriteCreationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteCreationContext$Type = ($SpriteCreationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteCreationContext_ = $SpriteCreationContext$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelType" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelType<T> extends $Serializer<(T)> {

 "getModelDependencies"(data: T): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(data: T): $BlockModel
 "getParentModels"(data: T): $List<($ResourceLocation)>
 "bake"(context: $ModelBakingContext$Type, data: T): $BakedModel
 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$Type): T
}

export namespace $ModelType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelType$Type<T> = ($ModelType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelType_<T> = $ModelType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$BaseContainerType, $BaseContainerType$Type} from "packages/com/supermartijn642/core/gui/$BaseContainerType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $BaseContainer extends $AbstractContainerMenu {
readonly "player": $Player
readonly "level": $Level
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(type: $BaseContainerType$Type<(any)>, player: $Player$Type)

public "setContainerId"(id: integer): void
public "getContainerType"(): $BaseContainerType<(any)>
public "stillValid"(playerIn: $Player$Type): boolean
set "containerId"(value: integer)
get "containerType"(): $BaseContainerType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainer$Type = ($BaseContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainer_ = $BaseContainer$Type;
}}
declare module "packages/com/supermartijn642/core/item/$CreativeItemGroup" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $CreativeItemGroup extends $CreativeModeTab {
 "backgroundSuffix": string
 "canScroll": boolean
 "showTitle": boolean
 "alignedRight": boolean
 "displayItems": $Collection<($ItemStack)>
 "displayItemsSearchTab": $Set<($ItemStack)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
readonly "tabsBefore": $List<($ResourceLocation)>
readonly "tabsAfter": $List<($ResourceLocation)>


public static "create"(modid: string, icon: $ItemLike$Type): $CreativeItemGroup
public static "create"(modid: string, icon: $Supplier$Type<($ItemStack$Type)>): $CreativeItemGroup
public static "create"(modid: string, name: string, icon: $ItemLike$Type): $CreativeItemGroup
public static "create"(modid: string, name: string, icon: $Supplier$Type<($ItemStack$Type)>): $CreativeItemGroup
public "sorter"(sorter: $Comparator$Type<($ItemStack$Type)>): $CreativeItemGroup
public "getBackgroundLocation"(): $ResourceLocation
public static "getBuildingBlocks"(): $CreativeModeTab
public static "getColoredBlocks"(): $CreativeModeTab
public static "getNaturalBlocks"(): $CreativeModeTab
public static "getFunctionalBlocks"(): $CreativeModeTab
public static "getRedstoneBlocks"(): $CreativeModeTab
public static "getToolsAndUtilities"(): $CreativeModeTab
public static "getFoodAndDrinks"(): $CreativeModeTab
public static "getSpawnEggs"(): $CreativeModeTab
public static "getOperatorUtilities"(): $CreativeModeTab
public "sortAlphabetically"(): $CreativeItemGroup
public static "getIngredients"(): $CreativeModeTab
public "getDisplayItems"(): $Collection<($ItemStack)>
public "buildContents"(parameters: $CreativeModeTab$ItemDisplayParameters$Type): void
public static "getSearch"(): $CreativeModeTab
public static "getCombat"(): $CreativeModeTab
public "filler"(filler: $Consumer$Type<($Consumer$Type<($ItemStack$Type)>)>): $CreativeItemGroup
get "backgroundLocation"(): $ResourceLocation
get "buildingBlocks"(): $CreativeModeTab
get "coloredBlocks"(): $CreativeModeTab
get "naturalBlocks"(): $CreativeModeTab
get "functionalBlocks"(): $CreativeModeTab
get "redstoneBlocks"(): $CreativeModeTab
get "toolsAndUtilities"(): $CreativeModeTab
get "foodAndDrinks"(): $CreativeModeTab
get "spawnEggs"(): $CreativeModeTab
get "operatorUtilities"(): $CreativeModeTab
get "ingredients"(): $CreativeModeTab
get "displayItems"(): $Collection<($ItemStack)>
get "search"(): $CreativeModeTab
get "combat"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeItemGroup$Type = ($CreativeItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeItemGroup_ = $CreativeItemGroup$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem$ItemUseResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseItem$ItemUseResult {


public static "pass"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "success"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "consume"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
public static "fail"(stack: $ItemStack$Type): $BaseItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$Type<($ItemStack$Type)>): $BaseItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$ItemUseResult$Type = ($BaseItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$ItemUseResult_ = $BaseItem$ItemUseResult$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/model/predicates/$EntityModelPredicate" {
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityModelPredicate {

 "test"(entity: $Entity$Type): boolean
 "getSerializer"(): $Serializer<(any)>
}

export namespace $EntityModelPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityModelPredicate$Type = ($EntityModelPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityModelPredicate_ = $EntityModelPredicate$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer" {
import {$IConditionSerializer, $IConditionSerializer$Type} from "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceConditionSerializer<T extends $ResourceCondition> {

 "serialize"(json: $JsonObject$Type, condition: T): void
 "deserialize"(json: $JsonObject$Type): T
}

export namespace $ResourceConditionSerializer {
function createForgeConditionSerializer(identifier: $ResourceLocation$Type, serializer: $ResourceConditionSerializer$Type<(any)>): $IConditionSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionSerializer$Type<T> = ($ResourceConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionSerializer_<T> = $ResourceConditionSerializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/rechiseled/$ChiselItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseItem, $BaseItem$Type} from "packages/com/supermartijn642/core/item/$BaseItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChiselItem extends $BaseItem {
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

public static "getStoredStack"(chisel: $ItemStack$Type): $ItemStack
public static "setStoredStack"(chisel: $ItemStack$Type, stack: $ItemStack$Type): void
public "use"(world: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiselItem$Type = ($ChiselItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiselItem_ = $ChiselItem$Type;
}}
declare module "packages/com/supermartijn642/core/gui/$BaseContainerType" {
import {$LecternMenu, $LecternMenu$Type} from "packages/net/minecraft/world/inventory/$LecternMenu"
import {$DispenserMenu, $DispenserMenu$Type} from "packages/net/minecraft/world/inventory/$DispenserMenu"
import {$SmithingMenu, $SmithingMenu$Type} from "packages/net/minecraft/world/inventory/$SmithingMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GrindstoneMenu, $GrindstoneMenu$Type} from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import {$LoomMenu, $LoomMenu$Type} from "packages/net/minecraft/world/inventory/$LoomMenu"
import {$MerchantMenu, $MerchantMenu$Type} from "packages/net/minecraft/world/inventory/$MerchantMenu"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BeaconMenu, $BeaconMenu$Type} from "packages/net/minecraft/world/inventory/$BeaconMenu"
import {$StonecutterMenu, $StonecutterMenu$Type} from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ChestMenu, $ChestMenu$Type} from "packages/net/minecraft/world/inventory/$ChestMenu"
import {$SmokerMenu, $SmokerMenu$Type} from "packages/net/minecraft/world/inventory/$SmokerMenu"
import {$FurnaceMenu, $FurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import {$AnvilMenu, $AnvilMenu$Type} from "packages/net/minecraft/world/inventory/$AnvilMenu"
import {$CraftingMenu, $CraftingMenu$Type} from "packages/net/minecraft/world/inventory/$CraftingMenu"
import {$CartographyTableMenu, $CartographyTableMenu$Type} from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import {$BaseContainer, $BaseContainer$Type} from "packages/com/supermartijn642/core/gui/$BaseContainer"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$Type} from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnchantmentMenu, $EnchantmentMenu$Type} from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import {$HopperMenu, $HopperMenu$Type} from "packages/net/minecraft/world/inventory/$HopperMenu"
import {$BrewingStandMenu, $BrewingStandMenu$Type} from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$Type} from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"

export class $BaseContainerType<T extends $BaseContainer> extends $MenuType<(T)> {
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>


public static "create"<T extends $BaseContainer>(containerSerializer: $BiConsumer$Type<(T), ($FriendlyByteBuf$Type)>, containerDeserializer: $BiFunction$Type<($Player$Type), ($FriendlyByteBuf$Type), (T)>): $BaseContainerType<(T)>
public "writeContainer"(container: T, buffer: $FriendlyByteBuf$Type): void
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerType$Type<T> = ($BaseContainerType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerType_<T> = $BaseContainerType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$EntityRendererExtension" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$FusionModelPart, $FusionModelPart$Type} from "packages/com/supermartijn642/fusion/entity/model/$FusionModelPart"

export interface $EntityRendererExtension {

 "getFusionModelParts"(): $List<($FusionModelPart)>
 "setFusionModelParts"(parts: $List$Type<($FusionModelPart$Type)>): void
}

export namespace $EntityRendererExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererExtension$Type = ($EntityRendererExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererExtension_ = $EntityRendererExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$SpriteContentsExtension" {
import {$TextureType, $TextureType$Type} from "packages/com/supermartijn642/fusion/api/texture/$TextureType"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"

export interface $SpriteContentsExtension {

 "setFusionMetadata"(metadata: $Pair$Type<($TextureType$Type<(any)>), (any)>): void
 "getFusionMetadata"(): $Pair<($TextureType<(any)>), (any)>
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/resources/$FusionPackMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FusionPackMetadata {


public "getMinimumVersion"(): string
public "isMinVersionSatisfied"(): boolean
public "hasOverridesFolder"(): boolean
public "getOverridesFolder"(): string
get "minimumVersion"(): string
get "minVersionSatisfied"(): boolean
get "overridesFolder"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionPackMetadata$Type = ($FusionPackMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionPackMetadata_ = $FusionPackMetadata$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext" {
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteIdentifier, $SpriteIdentifier$Type} from "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelBakingContext {

 "getTexture"(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $TextureAtlasSprite
 "getTexture"(identifier: $SpriteIdentifier$Type): $TextureAtlasSprite
 "getModelBaker"(): $ModelBaker
 "getTransformation"(): $ModelState
 "getModelIdentifier"(): $ResourceLocation
 "getModel"(identifier: $ResourceLocation$Type): $ModelInstance<(any)>
 "getBlockTexture"(texture: $ResourceLocation$Type): $TextureAtlasSprite
}

export namespace $ModelBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakingContext$Type = ($ModelBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakingContext_ = $ModelBakingContext$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/blocks/$RechiseledPillarBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RechiseledBlock, $RechiseledBlock$Type} from "packages/com/supermartijn642/rechiseled/blocks/$RechiseledBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RechiseledPillarBlock extends $RechiseledBlock {
static readonly "AXIS_PROPERTY": $EnumProperty<($Direction$Axis)>
readonly "connecting": boolean
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

constructor(connecting: boolean, properties: $BlockProperties$Type)

public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledPillarBlock$Type = ($RechiseledPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledPillarBlock_ = $RechiseledPillarBlock$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$BufferSourceExtension" {
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $BufferSourceExtension {

 "fusionGetLastRenderType"(): $RenderType

(): $RenderType
}

export namespace $BufferSourceExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceExtension$Type = ($BufferSourceExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferSourceExtension_ = $BufferSourceExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $Serializer<T> {

 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$Type): T
}

export namespace $Serializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseBlockItem$ItemUseResult {


public static "pass"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "success"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "consume"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
public static "fail"(stack: $ItemStack$Type): $BaseBlockItem$ItemUseResult
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$Type<($ItemStack$Type)>): $BaseBlockItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$ItemUseResult$Type = ($BaseBlockItem$ItemUseResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$ItemUseResult_ = $BaseBlockItem$ItemUseResult$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/util/$Pair" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<X, Y> {


public "left"(): X
public "right"(): Y
public "equals"(o: any): boolean
public "hashCode"(): integer
public "apply"(consumer: $BiConsumer$Type<(X), (Y)>): void
public "map"<R, S>(mapLeft: $Function$Type<(X), (R)>, mapRight: $Function$Type<(Y), (S)>): $Pair<(R), (S)>
public static "of"<X, Y>(left: X, right: Y): $Pair<(X), (Y)>
public "flatMap"<S>(mapper: $BiFunction$Type<(X), (Y), (S)>): S
public "mapRight"<S>(mapper: $Function$Type<(Y), (S)>): $Pair<(X), (S)>
public "mapLeft"<S>(mapper: $Function$Type<(X), (S)>): $Pair<(S), (Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<X, Y> = ($Pair<(X), (Y)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<X, Y> = $Pair$Type<(X), (Y)>;
}}
declare module "packages/com/supermartijn642/core/data/recipe/$ConditionalRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceCondition, $ResourceCondition$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceCondition"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export class $ConditionalRecipeSerializer implements $RecipeSerializer<($Recipe<(any)>)> {
static readonly "INSTANCE": $ConditionalRecipeSerializer


public static "wrapRecipeWithForgeConditions"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ICondition$Type)>): $JsonObject
public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type, context: $ICondition$IContext$Type): $Recipe<(any)>
public "fromJson"(location: $ResourceLocation$Type, json: $JsonObject$Type): $Recipe<(any)>
public "fromNetwork"(resourceLocation: $ResourceLocation$Type, friendlyByteBuf: $FriendlyByteBuf$Type): $Recipe<(any)>
public "toNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type, recipe: $Recipe$Type<(any)>): void
public static "wrapRecipe"(recipe: $JsonObject$Type, conditions: $Collection$Type<($ResourceCondition$Type)>): $JsonObject
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipeSerializer$Type = ($ConditionalRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipeSerializer_ = $ConditionalRecipeSerializer$Type;
}}
declare module "packages/com/supermartijn642/core/mixin/$BlockPropertiesAccessor" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BlockPropertiesAccessor {

 "getLootTableSupplier"(): $Supplier<($ResourceLocation)>
 "setLootTableSupplier"(supplier: $Supplier$Type<($ResourceLocation$Type)>): void
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertiesAccessor$Type = ($BlockPropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPropertiesAccessor_ = $BlockPropertiesAccessor$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$SpriteIdentifier" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SpriteIdentifier {

 "getTexture"(): $ResourceLocation
 "getAtlas"(): $ResourceLocation
 "toMaterial"(): $Material
}

export namespace $SpriteIdentifier {
function of(atlas: $ResourceLocation$Type, texture: $ResourceLocation$Type): $SpriteIdentifier
function of(material: $Material$Type): $SpriteIdentifier
function missing(): $SpriteIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteIdentifier$Type = ($SpriteIdentifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteIdentifier_ = $SpriteIdentifier$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $BaseBlockItem$InteractionFeedback extends $Enum<($BaseBlockItem$InteractionFeedback)> {
static readonly "PASS": $BaseBlockItem$InteractionFeedback
static readonly "CONSUME": $BaseBlockItem$InteractionFeedback
static readonly "SUCCESS": $BaseBlockItem$InteractionFeedback


public static "values"(): ($BaseBlockItem$InteractionFeedback)[]
public static "valueOf"(name: string): $BaseBlockItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(interactionResult: $InteractionResult$Type): $BaseBlockItem$InteractionFeedback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$InteractionFeedback$Type = (("pass") | ("success") | ("consume")) | ($BaseBlockItem$InteractionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem$InteractionFeedback_ = $BaseBlockItem$InteractionFeedback$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext" {
import {$AnimationMetadataSection, $AnimationMetadataSection$Type} from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"

export interface $SpritePreparationContext {

 "getIdentifier"(): $ResourceLocation
 "getOriginalFrameSize"(): $Pair<(integer), (integer)>
 "getTextureWidth"(): integer
 "getOriginalFrameWith"(): integer
 "getTextureHeight"(): integer
 "getOriginalFrameHeight"(): integer
 "getAnimationMetadata"(): $AnimationMetadataSection
}

export namespace $SpritePreparationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpritePreparationContext$Type = ($SpritePreparationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpritePreparationContext_ = $SpritePreparationContext$Type;
}}
declare module "packages/com/supermartijn642/core/block/$BlockProperties" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockProperties {

constructor()

public static "copy"(block: $Block$Type): $BlockProperties
public static "create"(): $BlockProperties
public "speedFactor"(factor: float): $BlockProperties
public "explosionResistance"(resistance: float): $BlockProperties
public "requiresCorrectTool"(): $BlockProperties
public "destroyTime"(destroyTime: float): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: boolean): $BlockProperties
public "isSuffocating"(isSuffocating: $TriPredicate$Type<($BlockState$Type), ($BlockGetter$Type), ($BlockPos$Type)>): $BlockProperties
public "isSuffocating"(isSuffocating: boolean): $BlockProperties
public "noLootTable"(): $BlockProperties
public "noCollision"(): $BlockProperties
public "noOcclusion"(): $BlockProperties
public "randomTicks"(): $BlockProperties
public "dynamicShape"(): $BlockProperties
public "lootTableFrom"(block: $Supplier$Type<($Block$Type)>): $BlockProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $BlockBehaviour$Properties
public "sound"(soundTypeIn: $SoundType$Type): $BlockProperties
public "friction"(friction: float): $BlockProperties
public "jumpFactor"(factor: float): $BlockProperties
public "air"(): $BlockProperties
public "lightLevel"(light: integer): $BlockProperties
public "lightLevel"(stateLightFunction: $ToIntFunction$Type<($BlockState$Type)>): $BlockProperties
public "lootTable"(lootTable: $ResourceLocation$Type): $BlockProperties
public "mapColor"(colorFunction: $Function$Type<($BlockState$Type), ($MapColor$Type)>): $BlockProperties
public "mapColor"(color: $MapColor$Type): $BlockProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProperties$Type = ($BlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProperties_ = $BlockProperties$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/model/$FusionModelPart" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$VanillaModelLayerProperties, $VanillaModelLayerProperties$Type} from "packages/com/supermartijn642/fusion/entity/$VanillaModelLayerProperties"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$EMFModel_ID, $EMFModel_ID$Type} from "packages/traben/entity_model_features/models/$EMFModel_ID"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$SubModelPart, $SubModelPart$Type} from "packages/com/supermartijn642/fusion/entity/model/$SubModelPart"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$EntityLayerProperties, $EntityLayerProperties$Type} from "packages/com/supermartijn642/fusion/entity/model/$EntityLayerProperties"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FusionModelPart extends $SubModelPart {
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>
 "initialPose": $PartPose
 "emf$modelInfo": $EMFModel_ID

constructor(layerIndex: integer, original: $ModelPart$Type)

public "clear"(): void
public "setup"(entity: $Entity$Type, bufferSource: $MultiBufferSource$Type): void
public "setProperties"(properties: $EntityLayerProperties$Type, vanillaProperties: $VanillaModelLayerProperties$Type): void
public "render"(poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, i: integer, j: integer, f: float, g: float, h: float, k: float): void
public "renderPart"(part: $SubModelPart$Type, poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, i: integer, j: integer, f: float, g: float, h: float, k: float): void
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionModelPart$Type = ($FusionModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionModelPart_ = $FusionModelPart$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BaseItem$InteractionFeedback, $BaseItem$InteractionFeedback$Type} from "packages/com/supermartijn642/core/item/$BaseItem$InteractionFeedback"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BaseItem$ItemUseResult, $BaseItem$ItemUseResult$Type} from "packages/com/supermartijn642/core/item/$BaseItem$ItemUseResult"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemProperties, $ItemProperties$Type} from "packages/com/supermartijn642/core/item/$ItemProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item {
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
constructor(properties: $ItemProperties$Type)

public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "interactWithBlock"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseItem$InteractionFeedback
public "isInCreativeGroup"(tab: $CreativeModeTab$Type): boolean
public "interactWithBlockFirst"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseItem$InteractionFeedback
public "interactWithEntity"(stack: $ItemStack$Type, target: $LivingEntity$Type, player: $Player$Type, hand: $InteractionHand$Type): $BaseItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "interact"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type): $BaseItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseBlockItem$InteractionFeedback, $BaseBlockItem$InteractionFeedback$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$InteractionFeedback"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BaseBlockItem$ItemUseResult, $BaseBlockItem$ItemUseResult$Type} from "packages/com/supermartijn642/core/item/$BaseBlockItem$ItemUseResult"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemProperties, $ItemProperties$Type} from "packages/com/supermartijn642/core/item/$ItemProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseBlockItem extends $BlockItem {
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

constructor(block: $Block$Type, properties: $Item$Properties$Type)
constructor(block: $Block$Type, properties: $ItemProperties$Type)

public "onItemUseFirst"(stack: $ItemStack$Type, context: $UseOnContext$Type): $InteractionResult
public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "interactWithBlock"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "isInCreativeGroup"(tab: $CreativeModeTab$Type): boolean
public "interactWithBlockFirst"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, hitPos: $BlockPos$Type, hitSide: $Direction$Type, hitLocation: $Vec3$Type): $BaseBlockItem$InteractionFeedback
public "interactWithEntity"(stack: $ItemStack$Type, target: $LivingEntity$Type, player: $Player$Type, hand: $InteractionHand$Type): $BaseBlockItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, itemSlot: integer, isSelected: boolean): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$Type, player: $Player$Type, target: $LivingEntity$Type, hand: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slot: integer, isSelected: boolean): void
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "interact"(stack: $ItemStack$Type, player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type): $BaseBlockItem$ItemUseResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/model/$EntityLayerProperties$ModelOption" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EntityLayerProperties$ModelOption {

constructor(model: $ModelPart$Type, isVanillaModel: boolean, textures: $List$Type<($ResourceLocation$Type)>, weight: double, scaling: float)

public "model"(): $ModelPart
public "weight"(): double
public "textures"(): $List<($ResourceLocation)>
public "scaling"(): float
public "isVanillaModel"(): boolean
get "vanillaModel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$ModelOption$Type = ($EntityLayerProperties$ModelOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLayerProperties$ModelOption_ = $EntityLayerProperties$ModelOption$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceCondition" {
import {$ResourceConditionSerializer, $ResourceConditionSerializer$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionSerializer"
import {$ResourceConditionContext, $ResourceConditionContext$Type} from "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export interface $ResourceCondition {

 "or"(alternative: $ResourceCondition$Type): $ResourceCondition
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$Type): $ResourceCondition
 "test"(context: $ResourceConditionContext$Type): boolean
 "getSerializer"(): $ResourceConditionSerializer<(any)>
}

export namespace $ResourceCondition {
function createForgeCondition(condition: $ResourceCondition$Type): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$Type = ($ResourceCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceCondition_ = $ResourceCondition$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/texture/$TextureType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$SpritePreparationContext, $SpritePreparationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpritePreparationContext"
import {$Serializer, $Serializer$Type} from "packages/com/supermartijn642/fusion/api/util/$Serializer"
import {$SpriteCreationContext, $SpriteCreationContext$Type} from "packages/com/supermartijn642/fusion/api/texture/$SpriteCreationContext"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $TextureType<T> extends $Serializer<(T)> {

 "getFrameSize"(context: $SpritePreparationContext$Type, data: T): $Pair<(integer), (integer)>
 "createSprite"(context: $SpriteCreationContext$Type, data: T): $TextureAtlasSprite
 "serialize"(data: T): $JsonObject
 "deserialize"(json: $JsonObject$Type): T
}

export namespace $TextureType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureType$Type<T> = ($TextureType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureType_<T> = $TextureType$Type<(T)>;
}}
declare module "packages/com/supermartijn642/core/block/$BaseBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
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
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $BaseBlock extends $Block {
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

constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties$Type)
constructor(saveTileData: boolean, properties: $BlockProperties$Type)

public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hitResult: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "asItem"(): $Item
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, information: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getDescriptionId"(): string
public static "getBaseOf"(state: $BlockState$Type): $BlockState
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/model/$SubModelPart" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$FusionModelPart, $FusionModelPart$Type} from "packages/com/supermartijn642/fusion/entity/model/$FusionModelPart"
import {$EMFModel_ID, $EMFModel_ID$Type} from "packages/traben/entity_model_features/models/$EMFModel_ID"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SubModelPart extends $ModelPart {
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>
 "initialPose": $PartPose
 "emf$modelInfo": $EMFModel_ID

constructor(mainPart: $FusionModelPart$Type)

public "finish"(): void
public "validateModelHasImportantChildren"(model: $ModelPart$Type, missingPartOutput: $Consumer$Type<(string)>): void
public "mirror"(target: $ModelPart$Type): void
public "render"(poseStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, i: integer, j: integer, f: float, g: float, h: float, k: float): void
public "hasChild"(name: string): boolean
public "getChild"(name: string): $ModelPart
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubModelPart$Type = ($SubModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubModelPart_ = $SubModelPart$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$PackExtension" {
import {$FusionPackMetadata, $FusionPackMetadata$Type} from "packages/com/supermartijn642/fusion/resources/$FusionPackMetadata"

export interface $PackExtension {

 "getFusionMetadata"(): $FusionPackMetadata

(): $FusionPackMetadata
}

export namespace $PackExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackExtension$Type = ($PackExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackExtension_ = $PackExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$EntityExtension" {
import {$Triple, $Triple$Type} from "packages/com/supermartijn642/fusion/util/$Triple"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $EntityExtension {

 "getFusionModel"(layerIndex: integer): $Triple<($ModelPart), ($ResourceLocation), (float)>
 "setFusionModel"(layerIndex: integer, model: $Triple$Type<($ModelPart$Type), ($ResourceLocation$Type), (float)>): void
 "shouldFusionRecomputeModel"(layerIndex: integer): boolean
 "markFusionRecomputeModels"(): void
}

export namespace $EntityExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityExtension$Type = ($EntityExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityExtension_ = $EntityExtension$Type;
}}
declare module "packages/com/supermartijn642/core/item/$ItemProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$ItemRarity, $ItemRarity$Type} from "packages/com/supermartijn642/core/item/$ItemRarity"

export class $ItemProperties {


public "maxStackSize"(maxStackSize: integer): $ItemProperties
public "group"(group: $CreativeModeTab$Type): $ItemProperties
public static "create"(): $ItemProperties
public "craftRemainder"(item: $Item$Type): $ItemProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $Item$Properties
public "fireResistant"(): $ItemProperties
public "rarity"(rarity: $ItemRarity$Type): $ItemProperties
public "rarity"(rarity: $Rarity$Type): $ItemProperties
public "food"(foodProperties: $FoodProperties$Type): $ItemProperties
public "durability"(durability: integer): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$Type = ($ItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProperties_ = $ItemProperties$Type;
}}
declare module "packages/com/supermartijn642/core/data/condition/$ResourceConditionContext" {
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export class $ResourceConditionContext {


/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $ICondition$IContext
get "underlying"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionContext$Type = ($ResourceConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionContext_ = $ResourceConditionContext$Type;
}}
declare module "packages/com/supermartijn642/fusion/extensions/$BlockModelExtension" {
import {$ModelInstance, $ModelInstance$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelInstance"

export interface $BlockModelExtension {

 "getFusionModel"(): $ModelInstance<(any)>
 "setFusionModel"(model: $ModelInstance$Type<(any)>): void
}

export namespace $BlockModelExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelExtension$Type = ($BlockModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelExtension_ = $BlockModelExtension$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/model/$EntityLayerProperties" {
import {$VanillaModelLayerProperties, $VanillaModelLayerProperties$Type} from "packages/com/supermartijn642/fusion/entity/$VanillaModelLayerProperties"
import {$Triple, $Triple$Type} from "packages/com/supermartijn642/fusion/util/$Triple"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ModelLayerLocation, $ModelLayerLocation$Type} from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModelPredicate, $EntityModelPredicate$Type} from "packages/com/supermartijn642/fusion/entity/model/predicates/$EntityModelPredicate"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityLayerProperties$ModelOption, $EntityLayerProperties$ModelOption$Type} from "packages/com/supermartijn642/fusion/entity/model/$EntityLayerProperties$ModelOption"
import {$Pair, $Pair$Type} from "packages/com/supermartijn642/fusion/api/util/$Pair"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityLayerProperties {
static readonly "RANDOM": $RandomSource

constructor(identifier: $ModelLayerLocation$Type, defaultModel: $List$Type<($EntityLayerProperties$ModelOption$Type)>, conditionals: $List$Type<($Pair$Type<($EntityModelPredicate$Type), ($List$Type<($EntityLayerProperties$ModelOption$Type)>)>)>)

public "identifier"(): $ModelLayerLocation
public "transformed"(properties: $VanillaModelLayerProperties$Type): $EntityLayerProperties
public "chooseModel"(entity: $Entity$Type): $Triple<($ModelPart), ($ResourceLocation), (float)>
public "gatherModels"(output: $Consumer$Type<($ModelPart$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLayerProperties$Type = ($EntityLayerProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLayerProperties_ = $EntityLayerProperties$Type;
}}
declare module "packages/com/supermartijn642/fusion/entity/$VanillaModelLayerProperties" {
import {$ModelLayerLocation, $ModelLayerLocation$Type} from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"

export class $VanillaModelLayerProperties {


public static "get"(location: $ModelLayerLocation$Type, renderer: $EntityRenderer$Type<(any)>): $VanillaModelLayerProperties
public "transform"(poseStack: $PoseStack$Type): void
public "shouldFlipX"(): boolean
public "shouldFlipY"(): boolean
public "shouldFlipZ"(): boolean
public "getOffsetY"(): float
public "getOffsetX"(): float
public "getOffsetZ"(): float
get "offsetY"(): float
get "offsetX"(): float
get "offsetZ"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelLayerProperties$Type = ($VanillaModelLayerProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelLayerProperties_ = $VanillaModelLayerProperties$Type;
}}
declare module "packages/com/supermartijn642/core/item/$BaseItem$InteractionFeedback" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $BaseItem$InteractionFeedback extends $Enum<($BaseItem$InteractionFeedback)> {
static readonly "PASS": $BaseItem$InteractionFeedback
static readonly "CONSUME": $BaseItem$InteractionFeedback
static readonly "SUCCESS": $BaseItem$InteractionFeedback


public static "values"(): ($BaseItem$InteractionFeedback)[]
public static "valueOf"(name: string): $BaseItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $InteractionResult
get "underlying"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$InteractionFeedback$Type = (("pass") | ("success") | ("consume")) | ($BaseItem$InteractionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem$InteractionFeedback_ = $BaseItem$InteractionFeedback$Type;
}}
declare module "packages/com/supermartijn642/rechiseled/blocks/$RechiseledBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockProperties, $BlockProperties$Type} from "packages/com/supermartijn642/core/block/$BlockProperties"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseBlock, $BaseBlock$Type} from "packages/com/supermartijn642/core/block/$BaseBlock"

export class $RechiseledBlock extends $BaseBlock {
readonly "connecting": boolean
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

constructor(connecting: boolean, properties: $BlockProperties$Type)

public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RechiseledBlock$Type = ($RechiseledBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RechiseledBlock_ = $RechiseledBlock$Type;
}}
declare module "packages/com/supermartijn642/fusion/api/model/$ModelInstance" {
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$ModelType, $ModelType$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelBakingContext, $ModelBakingContext$Type} from "packages/com/supermartijn642/fusion/api/model/$ModelBakingContext"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelInstance<T> {

 "getModelData"(): T
 "getModelDependencies"(): $Collection<($ResourceLocation)>
 "getAsVanillaModel"(): $BlockModel
 "getParentModels"(): $List<($ResourceLocation)>
 "getModelType"(): $ModelType<(T)>
 "bake"(context: $ModelBakingContext$Type): $BakedModel
}

export namespace $ModelInstance {
function of<T>(modelType: $ModelType$Type<(T)>, modelData: T): $ModelInstance<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelInstance$Type<T> = ($ModelInstance<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelInstance_<T> = $ModelInstance$Type<(T)>;
}}

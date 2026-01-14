declare module "packages/steve_gall/minecolonies_compatibility/core/common/block/entity/$BlockEntityExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockEntityExtension {

 "minecolonies_compatibility$isUnloaded"(): boolean

(): boolean
}

export namespace $BlockEntityExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityExtension$Type = ($BlockEntityExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityExtension_ = $BlockEntityExtension$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/mixin/common/minecraft/$SmithingTrimRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$SmithingRecipeAccessor, $SmithingRecipeAccessor$Type} from "packages/steve_gall/minecolonies_compatibility/core/common/crafting/$SmithingRecipeAccessor"

export interface $SmithingTrimRecipeAccessor extends $SmithingRecipeAccessor {

 "getBase"(): $Ingredient
 "getAddition"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $SmithingTrimRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipeAccessor$Type = ($SmithingTrimRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTrimRecipeAccessor_ = $SmithingTrimRecipeAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/core/common/crafting/$SmithingRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $SmithingRecipeAccessor {

 "getBase"(): $Ingredient
 "getAddition"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $SmithingRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingRecipeAccessor$Type = ($SmithingRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingRecipeAccessor_ = $SmithingRecipeAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/api/common/building/module/$IRestrictableModule" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$IBuilding, $IBuilding$Type} from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $IRestrictableModule extends $IBuildingModule {

 "setRestrictEnabled"(arg0: boolean): void
 "isRestrictEnabled"(): boolean
 "setRestrictArea"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getRestrictAreaPos1"(): $BlockPos
 "getRestrictAreaPos2"(): $BlockPos
 "getSearchRange"(): integer
 "setBuilding"(arg0: $IBuilding$Type): $IBuildingModule
 "setProducer"(arg0: $BuildingEntry$ModuleProducer$Type<(any), (any)>): $IBuildingModule
 "getProducer"(): $BuildingEntry$ModuleProducer<(any), (any)>
 "serializeToView"(arg0: $FriendlyByteBuf$Type, arg1: boolean): void
 "serializeToView"(arg0: $FriendlyByteBuf$Type): void
 "getBuilding"(): $IBuilding
 "markDirty"(): void
 "clearDirty"(): void
 "checkDirty"(): boolean
}

export namespace $IRestrictableModule {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRestrictableModule$Type = ($IRestrictableModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRestrictableModule_ = $IRestrictableModule$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/api/common/building/module/$IRestrictableModuleView" {
import {$IBuildingModuleView, $IBuildingModuleView$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModuleView"
import {$IColonyView, $IColonyView$Type} from "packages/com/minecolonies/api/colony/$IColonyView"
import {$BOWindow, $BOWindow$Type} from "packages/com/ldtteam/blockui/views/$BOWindow"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IBuildingView, $IBuildingView$Type} from "packages/com/minecolonies/api/colony/buildings/views/$IBuildingView"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IBuildingModule, $IBuildingModule$Type} from "packages/com/minecolonies/api/colony/buildings/modules/$IBuildingModule"
import {$BuildingEntry$ModuleProducer, $BuildingEntry$ModuleProducer$Type} from "packages/com/minecolonies/api/colony/buildings/registry/$BuildingEntry$ModuleProducer"

export interface $IRestrictableModuleView extends $IBuildingModuleView {

 "setRestrictEnabled"(arg0: boolean): void
 "isRestrictEnabled"(): boolean
 "setRestrictArea"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): void
 "getRestrictAreaPos1"(): $BlockPos
 "getRestrictAreaPos2"(): $BlockPos
 "getDesc"(): string
 "setProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(arg0: $BuildingEntry$ModuleProducer$Type<(M), (V)>): $IBuildingModuleView
 "getProducer"<M extends $IBuildingModule, V extends $IBuildingModuleView>(): $BuildingEntry$ModuleProducer<(M), (V)>
 "setBuildingView"(arg0: $IBuildingView$Type): $IBuildingModuleView
 "isPageVisible"(): boolean
 "getBuildingView"(): $IBuildingView
 "getIcon"(): string
 "deserialize"(arg0: $FriendlyByteBuf$Type): void
 "getWindow"(): $BOWindow
 "getColony"(): $IColonyView
}

export namespace $IRestrictableModuleView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRestrictableModuleView$Type = ($IRestrictableModuleView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRestrictableModuleView_ = $IRestrictableModuleView$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/core/common/block/$CommonNetworkStorageBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CommonNetworkStorageBlock extends $BaseEntityBlock {
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonNetworkStorageBlock$Type = ($CommonNetworkStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonNetworkStorageBlock_ = $CommonNetworkStorageBlock$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/mixin/common/minecraft/$SmithingTransformRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$SmithingRecipeAccessor, $SmithingRecipeAccessor$Type} from "packages/steve_gall/minecolonies_compatibility/core/common/crafting/$SmithingRecipeAccessor"

export interface $SmithingTransformRecipeAccessor extends $SmithingRecipeAccessor {

 "getBase"(): $Ingredient
 "getAddition"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $SmithingTransformRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipeAccessor$Type = ($SmithingTransformRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTransformRecipeAccessor_ = $SmithingTransformRecipeAccessor$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/core/common/item/$RestrictToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ModulePos, $ModulePos$Type} from "packages/steve_gall/minecolonies_tweaks/api/common/building/module/$ModulePos"
import {$IRestrictableModule, $IRestrictableModule$Type} from "packages/steve_gall/minecolonies_compatibility/api/common/building/module/$IRestrictableModule"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlockOverlayItem, $IBlockOverlayItem$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem"
import {$IBlockOverlayItem$OverlayBox, $IBlockOverlayItem$OverlayBox$Type} from "packages/com/minecolonies/api/items/$IBlockOverlayItem$OverlayBox"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IRestrictableModuleView, $IRestrictableModuleView$Type} from "packages/steve_gall/minecolonies_compatibility/api/common/building/module/$IRestrictableModuleView"

export class $RestrictToolItem extends $Item implements $IBlockOverlayItem {
static readonly "TAG_RESTRICT": string
static readonly "TAG_MODULE": string
static readonly "TAG_MODULE_NAME": string
static readonly "TAG_POS_1": string
static readonly "TAG_POS_2": string
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

public "getModule"(arg0: $ItemStack$Type): $IRestrictableModule
public "updateModuleArea"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getModulePos"(arg0: $ItemStack$Type): $ModulePos
public "getModuleView"(arg0: $ItemStack$Type): $IRestrictableModuleView
public "getOverlayBoxes"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $List<($IBlockOverlayItem$OverlayBox)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "setModule"(arg0: $ItemStack$Type, arg1: $IRestrictableModule$Type, arg2: $Component$Type): void
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "setPos2"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public "setPos1"(arg0: $ItemStack$Type, arg1: $BlockPos$Type): void
public "getPos1"(arg0: $ItemStack$Type): $BlockPos
public "getPos2"(arg0: $ItemStack$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestrictToolItem$Type = ($RestrictToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestrictToolItem_ = $RestrictToolItem$Type;
}}
declare module "packages/steve_gall/minecolonies_compatibility/mixin/common/minecraft/$CropBlockAccessor" {
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $CropBlockAccessor {

 "invokeGetBaseSeedId"(): $ItemLike

(): $ItemLike
}

export namespace $CropBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockAccessor$Type = ($CropBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropBlockAccessor_ = $CropBlockAccessor$Type;
}}

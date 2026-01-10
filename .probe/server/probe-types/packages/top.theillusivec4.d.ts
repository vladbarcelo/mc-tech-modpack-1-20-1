declare module "packages/top/theillusivec4/curios/mixin/core/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "getFirstTick"(): boolean

(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/top/theillusivec4/curios/api/client/$ICurioRenderer" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ICurioRenderer {

 "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$Type, arg1: $SlotContext$Type, arg2: $PoseStack$Type, arg3: $RenderLayerParent$Type<(T), (M)>, arg4: $MultiBufferSource$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void

(livingEntity: $LivingEntity$Type, ...renderers: ($ModelPart$Type)[]): void
}

export namespace $ICurioRenderer {
function followHeadRotations(livingEntity: $LivingEntity$Type, ...renderers: ($ModelPart$Type)[]): void
function followBodyRotations(livingEntity: $LivingEntity$Type, ...models: ($HumanoidModel$Type<($LivingEntity$Type)>)[]): void
function translateIfSneaking(matrixStack: $PoseStack$Type, livingEntity: $LivingEntity$Type): void
function rotateIfSneaking(matrixStack: $PoseStack$Type, livingEntity: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioRenderer$Type = ($ICurioRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioRenderer_ = $ICurioRenderer$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDynamicStackHandler, $IDynamicStackHandler$Type} from "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICurioStacksHandler {

 "getIdentifier"(): string
 "getModifiers"(): $Map<($UUID), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "getSlots"(): integer
 "removeModifier"(arg0: $UUID$Type): void
 "clearModifiers"(): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "getDropRule"(): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "addTransientModifier"(arg0: $AttributeModifier$Type): void
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getCosmeticStacks"(): $IDynamicStackHandler
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$Type): $Collection<($AttributeModifier)>
 "addPermanentModifier"(arg0: $AttributeModifier$Type): void
 "copyModifiers"(arg0: $ICurioStacksHandler$Type): void
 "applySyncTag"(arg0: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getSyncTag"(): $CompoundTag
 "isVisible"(): boolean
 "getStacks"(): $IDynamicStackHandler
 "getRenders"(): $NonNullList<(boolean)>
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$Type = ($ICurioStacksHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioStacksHandler_ = $ICurioStacksHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ICurio$SoundInfo extends $Record {

constructor(soundEvent: $SoundEvent$Type, volume: float, pitch: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
public "soundEvent"(): $SoundEvent
public "volume"(): float
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
public "pitch"(): float
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$Type = ($ICurio$SoundInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$SoundInfo_ = $ICurio$SoundInfo$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$SlotContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotContext extends $Record {

constructor(identifier: string, entity: $LivingEntity$Type, index: integer, cosmetic: boolean, visible: boolean)

public "visible"(): boolean
/**
 * 
 * @deprecated
 */
public "getIdentifier"(): string
public "identifier"(): string
public "entity"(): $LivingEntity
public "index"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getIndex"(): integer
/**
 * 
 * @deprecated
 */
public "getWearer"(): $LivingEntity
public "cosmetic"(): boolean
get "wearer"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$Type = ($SlotContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotContext_ = $SlotContext$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$SlotResult" {
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SlotResult {

constructor(slotContext: $SlotContext$Type, stack: $ItemStack$Type)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stack"(): $ItemStack
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$Type = ($SlotResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotResult_ = $SlotResult$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$CuriosCapability" {
import {$ICurio, $ICurio$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICuriosItemHandler, $ICuriosItemHandler$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CuriosCapability {
static readonly "ID_INVENTORY": $ResourceLocation
static readonly "ID_ITEM_HANDLER": $ResourceLocation
static readonly "ID_ITEM": $ResourceLocation
static readonly "INVENTORY": $Capability<($ICuriosItemHandler)>
static readonly "ITEM": $Capability<($ICurio)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuriosCapability$Type = ($CuriosCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuriosCapability_ = $CuriosCapability$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICuriosItemHandler" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$ICurioStacksHandler, $ICurioStacksHandler$Type} from "packages/top/theillusivec4/curios/api/type/inventory/$ICurioStacksHandler"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$SlotResult, $SlotResult$Type} from "packages/top/theillusivec4/curios/api/$SlotResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICuriosItemHandler {

 "getModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "reset"(): void
 "getSlots"(): integer
 "getEquippedCurios"(): $IItemHandlerModifiable
 "addTransientSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "removeSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "clearSlotModifiers"(): void
 "clearCachedSlotModifiers"(): void
 "getLootingLevel"(arg0: $DamageSource$Type, arg1: $LivingEntity$Type, arg2: integer): integer
 "setEquippedCurio"(arg0: string, arg1: integer, arg2: $ItemStack$Type): void
 "findFirstCurio"(arg0: $Predicate$Type<($ItemStack$Type)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$Type): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(identifier: string, amount: integer, visible: boolean, cosmetic: boolean): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(identifier: string): void
 "getVisibleSlots"(): integer
 "getStacksHandler"(arg0: string): $Optional<($ICurioStacksHandler)>
 "loseInvalidStack"(arg0: $ItemStack$Type): void
 "handleInvalidStacks"(): void
 "getFortuneLevel"(arg0: $LootContext$Type): integer
 "saveInventory"(arg0: boolean): $ListTag
 "loadInventory"(arg0: $ListTag$Type): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "addTransientSlotModifier"(slot: string, name: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type): void
 "addPermanentSlotModifier"(slot: string, name: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "removeSlotModifier"(slot: string, name: $ResourceLocation$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(string)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(): integer
/**
 * 
 * @deprecated
 */
 "setEnchantmentBonuses"(fortuneAndLooting: $Tuple$Type<(integer), (integer)>): void
 "isEquipped"(filter: $Predicate$Type<($ItemStack$Type)>): boolean
 "isEquipped"(item: $Item$Type): boolean
 "setCurios"(arg0: $Map$Type<(string), ($ICurioStacksHandler$Type)>): void
 "getWearer"(): $LivingEntity
 "writeTag"(): $Tag
 "readTag"(arg0: $Tag$Type): void
 "getCurios"(): $Map<(string), ($ICurioStacksHandler)>
 "findCurios"(arg0: $Predicate$Type<($ItemStack$Type)>): $List<($SlotResult)>
 "findCurios"(...arg0: (string)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Item$Type): $List<($SlotResult)>
 "findCurio"(arg0: string, arg1: integer): $Optional<($SlotResult)>
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$Type = ($ICuriosItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICuriosItemHandler_ = $ICuriosItemHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "DEFAULT": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule


public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(name: string): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$Type = (("always_drop") | ("default") | ("always_keep") | ("destroy")) | ($ICurio$DropRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$DropRule_ = $ICurio$DropRule$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/inventory/$IDynamicStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {

 "grow"(arg0: integer): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$Type): $CompoundTag
 "deserializeNBT"(arg0: $HolderLookup$Provider$Type, arg1: $CompoundTag$Type): void
 "shrink"(arg0: integer): void
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
}

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicStackHandler$Type = ($IDynamicStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicStackHandler_ = $IDynamicStackHandler$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ICurio {

 "getStack"(): $ItemStack
 "getSlotsTooltip"(tooltips: $List$Type<($Component$Type)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getTagsTooltip"(tagTooltips: $List$Type<($Component$Type)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "playRightClickEquipSound"(livingEntity: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "canRightClickEquip"(): boolean
 "writeSyncData"(slotContext: $SlotContext$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
 "writeSyncData"(): $CompoundTag
 "readSyncData"(slotContext: $SlotContext$Type, compound: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "readSyncData"(compound: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "showAttributesTooltip"(identifier: string): boolean
/**
 * 
 * @deprecated
 */
 "curioAnimate"(identifier: string, index: integer, livingEntity: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(identifier: string): $Multimap<($Attribute), ($AttributeModifier)>
 "getAttributeModifiers"(slotContext: $SlotContext$Type, uuid: $UUID$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "makesPiglinsNeutral"(slotContext: $SlotContext$Type): boolean
 "isEnderMask"(slotContext: $SlotContext$Type, enderMan: $EnderMan$Type): boolean
 "canWalkOnPowderedSnow"(slotContext: $SlotContext$Type): boolean
 "getLootingLevel"(slotContext: $SlotContext$Type, source: $DamageSource$Type, target: $LivingEntity$Type, baseLooting: integer): integer
 "getDropRule"(slotContext: $SlotContext$Type, source: $DamageSource$Type, lootingLevel: integer, recentlyHit: boolean): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(livingEntity: $LivingEntity$Type): $ICurio$DropRule
 "onEquipFromUse"(slotContext: $SlotContext$Type): void
 "getEquipSound"(slotContext: $SlotContext$Type): $ICurio$SoundInfo
 "canEquipFromUse"(slotContext: $SlotContext$Type): boolean
 "getAttributesTooltip"(tooltips: $List$Type<($Component$Type)>): $List<($Component)>
 "getFortuneLevel"(slotContext: $SlotContext$Type, lootContext: $LootContext$Type): integer
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(identifier: string, livingEntity: $LivingEntity$Type, curio: $ItemStack$Type, index: integer): integer
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(identifier: string, livingEntity: $LivingEntity$Type, curio: $ItemStack$Type, index: integer): integer
/**
 * 
 * @deprecated
 */
 "canEquip"(identifier: string, livingEntity: $LivingEntity$Type): boolean
 "canEquip"(slotContext: $SlotContext$Type): boolean
 "onEquip"(slotContext: $SlotContext$Type, prevStack: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "onEquip"(identifier: string, index: integer, livingEntity: $LivingEntity$Type): void
 "onUnequip"(slotContext: $SlotContext$Type, newStack: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "onUnequip"(identifier: string, index: integer, livingEntity: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "canUnequip"(identifier: string, livingEntity: $LivingEntity$Type): boolean
 "canUnequip"(slotContext: $SlotContext$Type): boolean
/**
 * 
 * @deprecated
 */
 "curioTick"(identifier: string, index: integer, livingEntity: $LivingEntity$Type): void
 "curioTick"(slotContext: $SlotContext$Type): void
 "curioBreak"(slotContext: $SlotContext$Type): void
/**
 * 
 * @deprecated
 */
 "curioBreak"(stack: $ItemStack$Type, livingEntity: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "canSync"(identifier: string, index: integer, livingEntity: $LivingEntity$Type): boolean
 "canSync"(slotContext: $SlotContext$Type): boolean

(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(stack: $ItemStack$Type, livingEntity: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$Type = ($ICurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio_ = $ICurio$Type;
}}
declare module "packages/top/theillusivec4/curios/mixin/core/$AbstractContainerMenuAccessor" {
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"

export interface $AbstractContainerMenuAccessor {

 "setMenuType"(arg0: $MenuType$Type<(any)>): void

(arg0: $MenuType$Type<(any)>): void
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}

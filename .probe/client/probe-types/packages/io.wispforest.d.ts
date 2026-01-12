declare module "packages/io/wispforest/accessories/client/gui/$AbstractButtonExtension" {
import {$ButtonEvents$AdjustRendering, $ButtonEvents$AdjustRendering$Type} from "packages/io/wispforest/accessories/client/gui/$ButtonEvents$AdjustRendering"
import {$Event, $Event$Type} from "packages/net/fabricmc/fabric/api/event/$Event"
import {$AbstractButton, $AbstractButton$Type} from "packages/net/minecraft/client/gui/components/$AbstractButton"

export interface $AbstractButtonExtension {

 "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$Type): B
 "getRenderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>

(event: $ButtonEvents$AdjustRendering$Type): B
}

export namespace $AbstractButtonExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractButtonExtension$Type = ($AbstractButtonExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractButtonExtension_ = $AbstractButtonExtension$Type;
}}
declare module "packages/io/wispforest/accessories/api/slot/$SlotReference" {
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AccessoriesContainer, $AccessoriesContainer$Type} from "packages/io/wispforest/accessories/api/$AccessoriesContainer"
import {$AccessoriesCapability, $AccessoriesCapability$Type} from "packages/io/wispforest/accessories/api/$AccessoriesCapability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $SlotReference {

 "isValid"(): boolean
 "setStack"(stack: $ItemStack$Type): boolean
 "slot"(): integer
 "type"(): $SlotType
 "getStack"(): $ItemStack
 "entity"(): $LivingEntity
 "slotContainer"(): $AccessoriesContainer
 "createSlotPath"(): string
 "capability"(): $AccessoriesCapability
 "slotName"(): string
}

export namespace $SlotReference {
function of(livingEntity: $LivingEntity$Type, slotName: string, slot: integer): $SlotReference
function ofNest(livingEntity: $LivingEntity$Type, slotName: string, initialHolderSlot: integer, innerSlotIndices: $List$Type<(integer)>): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Type = ($SlotReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference_ = $SlotReference$Type;
}}
declare module "packages/io/wispforest/endec/$StructEndec" {
import {$AttributeEndecBuilder, $AttributeEndecBuilder$Type} from "packages/io/wispforest/endec/impl/$AttributeEndecBuilder"
import {$Endec$Encoder, $Endec$Encoder$Type} from "packages/io/wispforest/endec/$Endec$Encoder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$KeyedEndec, $KeyedEndec$Type} from "packages/io/wispforest/endec/impl/$KeyedEndec"
import {$StructField, $StructField$Type} from "packages/io/wispforest/endec/impl/$StructField"
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"
import {$Serializer$Struct, $Serializer$Struct$Type} from "packages/io/wispforest/endec/$Serializer$Struct"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Endec$Decoder, $Endec$Decoder$Type} from "packages/io/wispforest/endec/$Endec$Decoder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$Deserializer$Struct, $Deserializer$Struct$Type} from "packages/io/wispforest/endec/$Deserializer$Struct"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Serializer, $Serializer$Type} from "packages/io/wispforest/endec/$Serializer"
import {$Endec$DecoderWithError, $Endec$DecoderWithError$Type} from "packages/io/wispforest/endec/$Endec$DecoderWithError"
import {$Deserializer, $Deserializer$Type} from "packages/io/wispforest/endec/$Deserializer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $StructEndec<T> extends $Endec<(T)> {

 "decode"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>): T
 "encode"(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: T): void
 "encodeStruct"(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: $Serializer$Struct$Type, arg3: T): void
 "decodeStruct"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>, arg2: $Deserializer$Struct$Type): T
 "flatFieldOf"<S>(arg0: $Function$Type<(S), (T)>): $StructField<(S), (T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "validate"(arg0: $Consumer$Type<(T)>): $Endec<(T)>
 "encodeFully"<E>(arg0: $Supplier$Type<($Serializer$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$Type, arg1: $Supplier$Type<($Serializer$Type<(E)>)>, arg2: T): E
 "decodeFully"<E>(arg0: $Function$Type<(E), ($Deserializer$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$Type, arg1: $Function$Type<(E), ($Deserializer$Type<(E)>)>, arg2: E): T
 "catchErrors"(arg0: $Endec$DecoderWithError$Type<(T)>): $Endec<(T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>, arg2: $Supplier$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "fieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>): $StructField<(S), (T)>
 "listOf"(): $Endec<($List<(T)>)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
 "setOf"(): $Endec<($Set<(T)>)>
 "nullableOf"(): $Endec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: $Supplier$Type<(T)>): $KeyedEndec<(T)>
}

export namespace $StructEndec {
function unit<T>(arg0: T): $StructEndec<(T)>
function unit<T>(arg0: $Supplier$Type<(T)>): $StructEndec<(T)>
function map<K, V>(arg0: $Function$Type<(K), (string)>, arg1: $Function$Type<(string), (K)>, arg2: $Endec$Type<(V)>): $Endec<($Map<(K), (V)>)>
function map<K, V>(arg0: $Endec$Type<(K)>, arg1: $Endec$Type<(V)>): $Endec<($Map<(K), (V)>)>
function of<T>(arg0: $Endec$Encoder$Type<(T)>, arg1: $Endec$Decoder$Type<(T)>): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$Type<(K), ($StructEndec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$Type<(K), ($StructEndec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>, arg3: string): $Endec<(T)>
function ifAttr<T>(arg0: $SerializationAttribute$Type, arg1: $Endec$Type<(T)>): $AttributeEndecBuilder<(T)>
function dispatched<T, K>(arg0: $Function$Type<(K), ($Endec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>): $Endec<(T)>
function forEnum<E>(arg0: $Class$Type<(E)>): $Endec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructEndec$Type<T> = ($StructEndec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructEndec_<T> = $StructEndec$Type<(T)>;
}}
declare module "packages/io/wispforest/accessories/pond/$AccessoriesAPIAccess" {
import {$AccessoriesCapability, $AccessoriesCapability$Type} from "packages/io/wispforest/accessories/api/$AccessoriesCapability"
import {$AccessoriesHolder, $AccessoriesHolder$Type} from "packages/io/wispforest/accessories/api/$AccessoriesHolder"

export interface $AccessoriesAPIAccess {

 "accessoriesCapability"(): $AccessoriesCapability
 "accessoriesHolder"(): $AccessoriesHolder
}

export namespace $AccessoriesAPIAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesAPIAccess$Type = ($AccessoriesAPIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesAPIAccess_ = $AccessoriesAPIAccess$Type;
}}
declare module "packages/io/wispforest/accessories/mixin/$LevelRendererAccessor" {
import {$PostChain, $PostChain$Type} from "packages/net/minecraft/client/renderer/$PostChain"

export interface $LevelRendererAccessor {

 "accessories$getEntityEffect"(): $PostChain

(): $PostChain
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/io/wispforest/endec/$Serializer$Map" {
import {$Endable, $Endable$Type} from "packages/io/wispforest/endec/util/$Endable"

export interface $Serializer$Map<V> extends $Endable {

 "entry"(arg0: string, arg1: V): void
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Map {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Map$Type<V> = ($Serializer$Map<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Map_<V> = $Serializer$Map$Type<(V)>;
}}
declare module "packages/io/wispforest/accessories/api/$Accessory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AccessoryAttributeBuilder, $AccessoryAttributeBuilder$Type} from "packages/io/wispforest/accessories/api/attributes/$AccessoryAttributeBuilder"
import {$AccessoryItemAttributeModifiers$Builder, $AccessoryItemAttributeModifiers$Builder$Type} from "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers$Builder"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DropRule, $DropRule$Type} from "packages/io/wispforest/accessories/api/$DropRule"
import {$SoundEventData, $SoundEventData$Type} from "packages/io/wispforest/accessories/api/$SoundEventData"
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"

export interface $Accessory {

 "maxStackSize"(stack: $ItemStack$Type): integer
 "tick"(stack: $ItemStack$Type, reference: $SlotReference$Type): void
/**
 * 
 * @deprecated
 */
 "getModifiers"(stack: $ItemStack$Type, reference: $SlotReference$Type, builder: $AccessoryAttributeBuilder$Type): void
 "getDynamicModifiers"(stack: $ItemStack$Type, reference: $SlotReference$Type, builder: $AccessoryAttributeBuilder$Type): void
 "getStaticModifiers"(item: $Item$Type, builder: $AccessoryItemAttributeModifiers$Builder$Type): void
 "getDropRule"(stack: $ItemStack$Type, reference: $SlotReference$Type, source: $DamageSource$Type): $DropRule
 "onEquipFromUse"(stack: $ItemStack$Type, reference: $SlotReference$Type): void
 "getEquipSound"(stack: $ItemStack$Type, reference: $SlotReference$Type): $SoundEventData
 "canEquipFromUse"(stack: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "canEquipFromUse"(stack: $ItemStack$Type, reference: $SlotReference$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(stack: $ItemStack$Type, type: $SlotType$Type, tooltips: $List$Type<($Component$Type)>): void
 "getAttributesTooltip"(stack: $ItemStack$Type, type: $SlotType$Type, tooltips: $List$Type<($Component$Type)>, tooltipType: $TooltipFlag$Type): void
 "getExtraTooltip"(stack: $ItemStack$Type, tooltips: $List$Type<($Component$Type)>, tooltipType: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
 "getExtraTooltip"(stack: $ItemStack$Type, tooltips: $List$Type<($Component$Type)>): void
 "canEquip"(stack: $ItemStack$Type, reference: $SlotReference$Type): boolean
 "canUnequip"(stack: $ItemStack$Type, reference: $SlotReference$Type): boolean
 "onEquip"(stack: $ItemStack$Type, reference: $SlotReference$Type): void
 "onUnequip"(stack: $ItemStack$Type, reference: $SlotReference$Type): void
 "onBreak"(stack: $ItemStack$Type, reference: $SlotReference$Type): void
}

export namespace $Accessory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$Type = ($Accessory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessory_ = $Accessory$Type;
}}
declare module "packages/io/wispforest/endec/$Serializer$Struct" {
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Endable, $Endable$Type} from "packages/io/wispforest/endec/util/$Endable"

export interface $Serializer$Struct extends $Endable {

 "field"<F>(arg0: string, arg1: $SerializationContext$Type, arg2: $Endec$Type<(F)>, arg3: F): $Serializer$Struct
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Struct {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Struct$Type = ($Serializer$Struct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Struct_ = $Serializer$Struct$Type;
}}
declare module "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AccessoryAttributeBuilder, $AccessoryAttributeBuilder$Type} from "packages/io/wispforest/accessories/api/attributes/$AccessoryAttributeBuilder"
import {$AccessoryItemAttributeModifiers$Entry, $AccessoryItemAttributeModifiers$Entry$Type} from "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers$Entry"
import {$AccessoryItemAttributeModifiers$Builder, $AccessoryItemAttributeModifiers$Builder$Type} from "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers$Builder"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"

export class $AccessoryItemAttributeModifiers extends $Record {
static readonly "EMPTY": $AccessoryItemAttributeModifiers
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers)>

constructor(modifiers: $List$Type<($AccessoryItemAttributeModifiers$Entry$Type)>, showInTooltip: boolean)

public "modifiers"(): $List<($AccessoryItemAttributeModifiers$Entry)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $AccessoryItemAttributeModifiers$Builder
public "hasModifier"(holder: $Attribute$Type, location: $ResourceLocation$Type): boolean
public "getModifier"(holder: $Attribute$Type, location: $ResourceLocation$Type): $AttributeModifier
public "withModifierAdded"(holder: $Attribute$Type, attributeModifier: $AttributeModifier$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
public "withModifierAdded"(holder: $Attribute$Type, location: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
public "showInTooltip"(): boolean
public "gatherAttributes"(slotReference: $SlotReference$Type): $AccessoryAttributeBuilder
public "withoutModifier"(holder: $Holder$Type<($Attribute$Type)>, location: $ResourceLocation$Type): $AccessoryItemAttributeModifiers
public "withModifierAddedForAny"(holder: $Attribute$Type, location: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
public "withModifierAddedForAny"(holder: $Attribute$Type, attributeModifier: $AttributeModifier$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Type = ($AccessoryItemAttributeModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers_ = $AccessoryItemAttributeModifiers$Type;
}}
declare module "packages/io/wispforest/accessories/api/$AccessoriesHolder" {
import {$PlayerEquipControl, $PlayerEquipControl$Type} from "packages/io/wispforest/accessories/impl/$PlayerEquipControl"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AccessoriesHolder {

 "cosmeticsShown"(arg0: boolean): $AccessoriesHolder
 "cosmeticsShown"(): boolean
 "showUnusedSlots"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(): boolean
 "showUniqueSlots"(): boolean
 "showUniqueSlots"(arg0: boolean): $AccessoriesHolder
 "scrolledSlot"(arg0: integer): $AccessoriesHolder
 "scrolledSlot"(): integer
 "equipControl"(arg0: $PlayerEquipControl$Type): $AccessoriesHolder
 "equipControl"(): $PlayerEquipControl
 "linesShown"(arg0: boolean): $AccessoriesHolder
 "linesShown"(): boolean
}

export namespace $AccessoriesHolder {
function get(livingEntity: $LivingEntity$Type): $AccessoriesHolder
function getOptionally(livingEntity: $LivingEntity$Type): $Optional<($AccessoriesHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolder$Type = ($AccessoriesHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesHolder_ = $AccessoriesHolder$Type;
}}
declare module "packages/io/wispforest/accessories/api/$DropRule" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DropRule extends $Enum<($DropRule)> {
static readonly "KEEP": $DropRule
static readonly "DROP": $DropRule
static readonly "DESTROY": $DropRule
static readonly "DEFAULT": $DropRule


public static "values"(): ($DropRule)[]
public static "valueOf"(name: string): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRule$Type = (("drop") | ("default") | ("keep") | ("destroy")) | ($DropRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropRule_ = $DropRule$Type;
}}
declare module "packages/io/wispforest/endec/$Endec$Decoder" {
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Deserializer, $Deserializer$Type} from "packages/io/wispforest/endec/$Deserializer"

export interface $Endec$Decoder<T> {

 "decode"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>): T

(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>): T
}

export namespace $Endec$Decoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Decoder$Type<T> = ($Endec$Decoder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$Decoder_<T> = $Endec$Decoder$Type<(T)>;
}}
declare module "packages/io/wispforest/accessories/commands/$RecordArgumentTypeInfo" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$StructEndec, $StructEndec$Type} from "packages/io/wispforest/endec/$StructEndec"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$RecordArgumentTypeInfo$RecordInfoTemplate, $RecordArgumentTypeInfo$RecordInfoTemplate$Type} from "packages/io/wispforest/accessories/commands/$RecordArgumentTypeInfo$RecordInfoTemplate"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $RecordArgumentTypeInfo<A extends $ArgumentType<(any)>, T> extends $Record implements $ArgumentTypeInfo<(A), ($RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>)> {

constructor(endec: $StructEndec$Type<(T)>, toTemplate: $Function$Type<(A), (T)>, fromTemplate: $BiFunction$Type<($CommandBuildContext$Type), (T), (A)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A extends $ArgumentType<(any)>>(argTypeConstructor: $Function$Type<($CommandBuildContext$Type), (A)>): $RecordArgumentTypeInfo<(A), (void)>
public "serializeToNetwork"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$Type<(A), (T)>, buffer: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(buffer: $FriendlyByteBuf$Type): $RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>
public "serializeToJson"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$Type<(A), (T)>, json: $JsonObject$Type): void
public "unpack"(argument: A): $RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
public "endec"(): $StructEndec<(T)>
public "toTemplate"(): $Function<(A), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$Type<A, T> = ($RecordArgumentTypeInfo<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordArgumentTypeInfo_<A, T> = $RecordArgumentTypeInfo$Type<(A), (T)>;
}}
declare module "packages/io/wispforest/accessories/api/slot/$SlotEntryReference" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"

export class $SlotEntryReference extends $Record {

constructor(reference: $SlotReference$Type, stack: $ItemStack$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stack"(): $ItemStack
public "reference"(): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotEntryReference$Type = ($SlotEntryReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotEntryReference_ = $SlotEntryReference$Type;
}}
declare module "packages/io/wispforest/accessories/client/gui/$ButtonEvents$AdjustRendering" {
import {$AbstractButton, $AbstractButton$Type} from "packages/net/minecraft/client/gui/components/$AbstractButton"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ButtonEvents$AdjustRendering {

 "render"(arg0: $AbstractButton$Type, arg1: $GuiGraphics$Type, arg2: $ResourceLocation$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean

(arg0: $AbstractButton$Type, arg1: $GuiGraphics$Type, arg2: $ResourceLocation$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean
}

export namespace $ButtonEvents$AdjustRendering {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonEvents$AdjustRendering$Type = ($ButtonEvents$AdjustRendering);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonEvents$AdjustRendering_ = $ButtonEvents$AdjustRendering$Type;
}}
declare module "packages/io/wispforest/endec/util/$MapCarrier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$KeyedEndec, $KeyedEndec$Type} from "packages/io/wispforest/endec/impl/$KeyedEndec"

export interface $MapCarrier {

 "has"<T>(arg0: $KeyedEndec$Type<(T)>): boolean
 "get"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>): T
 "get"<T>(arg0: $KeyedEndec$Type<(T)>): T
 "put"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: T): void
 "put"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>, arg2: T): void
 "delete"<T>(arg0: $KeyedEndec$Type<(T)>): void
 "copy"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>, arg2: $MapCarrier$Type): void
 "copy"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: $MapCarrier$Type): void
 "putIfNotNull"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: T): void
 "putIfNotNull"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>, arg2: T): void
 "copyIfPresent"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: $MapCarrier$Type): void
/**
 * 
 * @deprecated
 */
 "copyIfPresent"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: $SerializationContext$Type, arg2: $MapCarrier$Type): void
 "copyIfPresent"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>, arg2: $MapCarrier$Type): void
 "getWithErrors"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>): T
 "getWithErrors"<T>(arg0: $KeyedEndec$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "mutate"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: $SerializationContext$Type, arg2: $Function$Type<(T), (T)>): void
 "mutate"<T>(arg0: $SerializationContext$Type, arg1: $KeyedEndec$Type<(T)>, arg2: $Function$Type<(T), (T)>): void
 "mutate"<T>(arg0: $KeyedEndec$Type<(T)>, arg1: $Function$Type<(T), (T)>): void
}

export namespace $MapCarrier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCarrier$Type = ($MapCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCarrier_ = $MapCarrier$Type;
}}
declare module "packages/io/wispforest/accessories/api/$EquipAction" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $EquipAction {

 "equipStack"(arg0: $ItemStack$Type): $Optional<($ItemStack)>

(arg0: $ItemStack$Type): $Optional<($ItemStack)>
}

export namespace $EquipAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipAction$Type = ($EquipAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipAction_ = $EquipAction$Type;
}}
declare module "packages/io/wispforest/endec/util/$Endable" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

export interface $Endable extends $AutoCloseable {

 "end"(): void
 "close"(): void

(): void
}

export namespace $Endable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endable$Type = ($Endable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endable_ = $Endable$Type;
}}
declare module "packages/io/wispforest/endec/$Deserializer$Struct" {
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"

export interface $Deserializer$Struct {

 "field"<F>(arg0: string, arg1: $SerializationContext$Type, arg2: $Endec$Type<(F)>): F
 "field"<F>(arg0: string, arg1: $SerializationContext$Type, arg2: $Endec$Type<(F)>, arg3: F): F
}

export namespace $Deserializer$Struct {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Struct$Type = ($Deserializer$Struct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Struct_ = $Deserializer$Struct$Type;
}}
declare module "packages/io/wispforest/accessories/api/$AccessoriesCapability" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$SlotEntryReference, $SlotEntryReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotEntryReference"
import {$EquipAction, $EquipAction$Type} from "packages/io/wispforest/accessories/api/$EquipAction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EquipmentChecking, $EquipmentChecking$Type} from "packages/io/wispforest/accessories/api/$EquipmentChecking"
import {$AccessoriesContainer, $AccessoriesContainer$Type} from "packages/io/wispforest/accessories/api/$AccessoriesContainer"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AccessoriesHolder, $AccessoriesHolder$Type} from "packages/io/wispforest/accessories/api/$AccessoriesHolder"
import {$SlotTypeReference, $SlotTypeReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotTypeReference"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EquipCheck, $EquipCheck$Type} from "packages/io/wispforest/accessories/api/$EquipCheck"
import {$Accessory, $Accessory$Type} from "packages/io/wispforest/accessories/api/$Accessory"
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$Pair, $Pair$Type} from "packages/it/unimi/dsi/fastutil/$Pair"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessoriesCapability {

 "getContainer"(slotType: $SlotType$Type): $AccessoriesContainer
 "getContainer"(reference: $SlotTypeReference$Type): $AccessoriesContainer
 "reset"(arg0: boolean): void
 "entity"(): $LivingEntity
 "getAllEquipped"(arg0: boolean): $List<($SlotEntryReference)>
 "getAllEquipped"(): $List<($SlotEntryReference)>
 "isAnotherEquipped"(slotReference: $SlotReference$Type, predicate: $Predicate$Type<($ItemStack$Type)>): boolean
 "isAnotherEquipped"(slotReference: $SlotReference$Type, item: $Item$Type): boolean
 "attemptToEquipAccessory"(stack: $ItemStack$Type): $SlotReference
 "attemptToEquipAccessory"(stack: $ItemStack$Type, allowSwapping: boolean): $Pair<($SlotReference), ($Optional<($ItemStack)>)>
 "clearSlotModifiers"(): void
 "getEquipped"(arg0: $Predicate$Type<($ItemStack$Type)>): $List<($SlotEntryReference)>
 "getEquipped"(item: $Item$Type): $List<($SlotEntryReference)>
 "getFirstEquipped"(item: $Item$Type): $SlotEntryReference
 "getFirstEquipped"(item: $Item$Type, check: $EquipmentChecking$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$Type<($ItemStack$Type)>): $SlotEntryReference
 "getFirstEquipped"(arg0: $Predicate$Type<($ItemStack$Type)>, arg1: $EquipmentChecking$Type): $SlotEntryReference
 "updateContainers"(): void
 "addTransientSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "addPersistentSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "clearCachedSlotModifiers"(): void
 "removeSlotModifiers"(arg0: $Multimap$Type<(string), ($AttributeModifier$Type)>): void
 "getContainers"(): $Map<(string), ($AccessoriesContainer)>
 "canEquipAccessory"(stack: $ItemStack$Type, allowSwapping: boolean): $Pair<($SlotReference), ($EquipAction)>
 "canEquipAccessory"(arg0: $ItemStack$Type, arg1: boolean, arg2: $EquipCheck$Type): $Pair<($SlotReference), ($EquipAction)>
 "getSlotModifiers"(): $Multimap<(string), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$Type, allowSwapping: boolean, additionalCheck: $TriFunction$Type<($Accessory$Type), ($ItemStack$Type), ($SlotReference$Type), (boolean)>): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$Type): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$Type, allowSwapping: boolean): $Pair<($SlotReference), ($List<($ItemStack)>)>
 "getHolder"(): $AccessoriesHolder
 "isEquipped"(predicate: $Predicate$Type<($ItemStack$Type)>, check: $EquipmentChecking$Type): boolean
 "isEquipped"(predicate: $Predicate$Type<($ItemStack$Type)>): boolean
 "isEquipped"(item: $Item$Type): boolean
 "isEquipped"(item: $Item$Type, check: $EquipmentChecking$Type): boolean
}

export namespace $AccessoriesCapability {
function get(livingEntity: $LivingEntity$Type): $AccessoriesCapability
function getOptionally(livingEntity: $LivingEntity$Type): $Optional<($AccessoriesCapability)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesCapability$Type = ($AccessoriesCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesCapability_ = $AccessoriesCapability$Type;
}}
declare module "packages/io/wispforest/accessories/api/$AccessoriesContainer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ExpandedSimpleContainer, $ExpandedSimpleContainer$Type} from "packages/io/wispforest/accessories/impl/$ExpandedSimpleContainer"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"
import {$AccessoriesCapability, $AccessoriesCapability$Type} from "packages/io/wispforest/accessories/api/$AccessoriesCapability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AccessoriesContainer {

 "getModifiers"(): $Map<($UUID), ($AttributeModifier)>
 "update"(): void
 "getSize"(): integer
 "hasModifier"(arg0: $UUID$Type): boolean
 "removeModifier"(arg0: $UUID$Type): void
 "clearModifiers"(): void
 "getAccessories"(): $ExpandedSimpleContainer
 "getCosmeticAccessories"(): $ExpandedSimpleContainer
 "shouldRender"(index: integer): boolean
 "getSlotName"(): string
 "renderOptions"(): $List<(boolean)>
 "markChanged"(): void
 "markChanged"(arg0: boolean): void
 "createReference"(index: integer): $SlotReference
 "removeCachedModifiers"(arg0: $AttributeModifier$Type): void
 "getModifiersForOperation"(arg0: $AttributeModifier$Operation$Type): $Collection<($AttributeModifier)>
 "addTransientModifier"(arg0: $AttributeModifier$Type): void
 "addPersistentModifier"(arg0: $AttributeModifier$Type): void
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "capability"(): $AccessoriesCapability
 "slotType"(): $SlotType
 "hasChanged"(): boolean
}

export namespace $AccessoriesContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainer$Type = ($AccessoriesContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesContainer_ = $AccessoriesContainer$Type;
}}
declare module "packages/io/wispforest/endec/$Deserializer" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Deserializer$Map, $Deserializer$Map$Type} from "packages/io/wispforest/endec/$Deserializer$Map"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$Deserializer$Struct, $Deserializer$Struct$Type} from "packages/io/wispforest/endec/$Deserializer$Struct"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Deserializer$Sequence, $Deserializer$Sequence$Type} from "packages/io/wispforest/endec/$Deserializer$Sequence"

export interface $Deserializer<T> {

 "sequence"<E>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(E)>): $Deserializer$Sequence<(E)>
 "readString"(arg0: $SerializationContext$Type): string
 "readLong"(arg0: $SerializationContext$Type): long
 "readBoolean"(arg0: $SerializationContext$Type): boolean
 "readByte"(arg0: $SerializationContext$Type): byte
 "readShort"(arg0: $SerializationContext$Type): short
 "readDouble"(arg0: $SerializationContext$Type): double
 "readFloat"(arg0: $SerializationContext$Type): float
 "readBytes"(arg0: $SerializationContext$Type): (byte)[]
 "map"<V>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(V)>): $Deserializer$Map<(V)>
 "readInt"(arg0: $SerializationContext$Type): integer
 "tryRead"<V>(arg0: $Function$Type<($Deserializer$Type<(T)>), (V)>): V
 "setupContext"(arg0: $SerializationContext$Type): $SerializationContext
 "readOptional"<V>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(V)>): $Optional<(V)>
 "readVarLong"(arg0: $SerializationContext$Type): long
 "struct"(): $Deserializer$Struct
 "readVarInt"(arg0: $SerializationContext$Type): integer
}

export namespace $Deserializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Type<T> = ($Deserializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer_<T> = $Deserializer$Type<(T)>;
}}
declare module "packages/io/wispforest/accessories/pond/$ContainerScreenExtension" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $ContainerScreenExtension {

 "isHovering"(slot: $Slot$Type, mouseX: double, mouseY: double): boolean
}

export namespace $ContainerScreenExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenExtension$Type = ($ContainerScreenExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenExtension_ = $ContainerScreenExtension$Type;
}}
declare module "packages/io/wispforest/endec/impl/$StructField" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$Deserializer$Struct, $Deserializer$Struct$Type} from "packages/io/wispforest/endec/$Deserializer$Struct"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Serializer, $Serializer$Type} from "packages/io/wispforest/endec/$Serializer"
import {$Serializer$Struct, $Serializer$Struct$Type} from "packages/io/wispforest/endec/$Serializer$Struct"
import {$Deserializer, $Deserializer$Type} from "packages/io/wispforest/endec/$Deserializer"

export class $StructField<S, F> {

constructor(arg0: string, arg1: $Endec$Type<(F)>, arg2: $Function$Type<(S), (F)>, arg3: $Supplier$Type<(F)>)
constructor(arg0: string, arg1: $Endec$Type<(F)>, arg2: $Function$Type<(S), (F)>)
constructor(arg0: string, arg1: $Endec$Type<(F)>, arg2: $Function$Type<(S), (F)>, arg3: F)

public "encodeField"(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: $Serializer$Struct$Type, arg3: S): void
public "decodeField"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>, arg2: $Deserializer$Struct$Type): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructField$Type<S, F> = ($StructField<(S), (F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructField_<S, F> = $StructField$Type<(S), (F)>;
}}
declare module "packages/io/wispforest/accessories/mixin/client/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/io/wispforest/accessories/api/$EquipCheck" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $EquipCheck {

 "isValid"(arg0: $ItemStack$Type, arg1: boolean): boolean

(arg0: $ItemStack$Type, arg1: boolean): boolean
}

export namespace $EquipCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCheck$Type = ($EquipCheck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCheck_ = $EquipCheck$Type;
}}
declare module "packages/io/wispforest/endec/$Endec" {
import {$AttributeEndecBuilder, $AttributeEndecBuilder$Type} from "packages/io/wispforest/endec/impl/$AttributeEndecBuilder"
import {$Endec$Encoder, $Endec$Encoder$Type} from "packages/io/wispforest/endec/$Endec$Encoder"
import {$StructEndec, $StructEndec$Type} from "packages/io/wispforest/endec/$StructEndec"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$KeyedEndec, $KeyedEndec$Type} from "packages/io/wispforest/endec/impl/$KeyedEndec"
import {$StructField, $StructField$Type} from "packages/io/wispforest/endec/impl/$StructField"
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Endec$Decoder, $Endec$Decoder$Type} from "packages/io/wispforest/endec/$Endec$Decoder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Serializer, $Serializer$Type} from "packages/io/wispforest/endec/$Serializer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Endec$DecoderWithError, $Endec$DecoderWithError$Type} from "packages/io/wispforest/endec/$Endec$DecoderWithError"
import {$Deserializer, $Deserializer$Type} from "packages/io/wispforest/endec/$Deserializer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Endec<T> {

 "optionalOf"(): $Endec<($Optional<(T)>)>
 "decode"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>): T
 "encode"(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: T): void
 "validate"(arg0: $Consumer$Type<(T)>): $Endec<(T)>
 "encodeFully"<E>(arg0: $Supplier$Type<($Serializer$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$Type, arg1: $Supplier$Type<($Serializer$Type<(E)>)>, arg2: T): E
 "decodeFully"<E>(arg0: $Function$Type<(E), ($Deserializer$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$Type, arg1: $Function$Type<(E), ($Deserializer$Type<(E)>)>, arg2: E): T
 "catchErrors"(arg0: $Endec$DecoderWithError$Type<(T)>): $Endec<(T)>
 "xmapWithContext"<R>(arg0: $BiFunction$Type<($SerializationContext$Type), (T), (R)>, arg1: $BiFunction$Type<($SerializationContext$Type), (R), (T)>): $Endec<(R)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>, arg2: $Supplier$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "fieldOf"<S>(arg0: string, arg1: $Function$Type<(S), (T)>): $StructField<(S), (T)>
 "listOf"(): $Endec<($List<(T)>)>
 "xmap"<R>(arg0: $Function$Type<(T), (R)>, arg1: $Function$Type<(R), (T)>): $Endec<(R)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
 "setOf"(): $Endec<($Set<(T)>)>
 "nullableOf"(): $Endec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: $Supplier$Type<(T)>): $KeyedEndec<(T)>
}

export namespace $Endec {
const VOID: $Endec<(void)>
const BOOLEAN: $Endec<(boolean)>
const BYTE: $Endec<(byte)>
const SHORT: $Endec<(short)>
const INT: $Endec<(integer)>
const VAR_INT: $Endec<(integer)>
const LONG: $Endec<(long)>
const VAR_LONG: $Endec<(long)>
const FLOAT: $Endec<(float)>
const DOUBLE: $Endec<(double)>
const STRING: $Endec<(string)>
const BYTES: $Endec<((byte)[])>
function map<K, V>(arg0: $Function$Type<(K), (string)>, arg1: $Function$Type<(string), (K)>, arg2: $Endec$Type<(V)>): $Endec<($Map<(K), (V)>)>
function map<K, V>(arg0: $Endec$Type<(K)>, arg1: $Endec$Type<(V)>): $Endec<($Map<(K), (V)>)>
function of<T>(arg0: $Endec$Encoder$Type<(T)>, arg1: $Endec$Decoder$Type<(T)>): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$Type<(K), ($StructEndec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$Type<(K), ($StructEndec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>, arg3: string): $Endec<(T)>
function ifAttr<T>(arg0: $SerializationAttribute$Type, arg1: $Endec$Type<(T)>): $AttributeEndecBuilder<(T)>
function dispatched<T, K>(arg0: $Function$Type<(K), ($Endec$Type<(any)>)>, arg1: $Function$Type<(T), (K)>, arg2: $Endec$Type<(K)>): $Endec<(T)>
function forEnum<E>(arg0: $Class$Type<(E)>): $Endec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Type<T> = ($Endec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec_<T> = $Endec$Type<(T)>;
}}
declare module "packages/io/wispforest/accessories/commands/$RecordArgumentTypeInfo$RecordInfoTemplate" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $RecordArgumentTypeInfo$RecordInfoTemplate<A extends $ArgumentType<(any)>, T> extends $Record implements $ArgumentTypeInfo$Template<(A)> {

constructor(type: $ArgumentTypeInfo$Type<(A), (any)>, data: T, fromTemplate: $BiFunction$Type<($CommandBuildContext$Type), (T), (A)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): T
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
public "instantiate"(ctx: $CommandBuildContext$Type): A
public "type"(): $ArgumentTypeInfo<(A), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$RecordInfoTemplate$Type<A, T> = ($RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordArgumentTypeInfo$RecordInfoTemplate_<A, T> = $RecordArgumentTypeInfo$RecordInfoTemplate$Type<(A), (T)>;
}}
declare module "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers$Builder" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$AccessoryItemAttributeModifiers, $AccessoryItemAttributeModifiers$Type} from "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers"

export class $AccessoryItemAttributeModifiers$Builder {


public "build"(): $AccessoryItemAttributeModifiers
/**
 * 
 * @deprecated
 */
public "add"(attribute: $Attribute$Type, attributeModifier: $AttributeModifier$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "isEmpty"(): boolean
public "showInTooltip"(value: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForSlot"(attribute: $Attribute$Type, attributeModifier: $AttributeModifier$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForAny"(attribute: $Attribute$Type, attributeModifier: $AttributeModifier$Type, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Builder$Type = ($AccessoryItemAttributeModifiers$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers$Builder_ = $AccessoryItemAttributeModifiers$Builder$Type;
}}
declare module "packages/io/wispforest/accessories/pond/$AccessoriesFrameBufferExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessoriesFrameBufferExtension {

 "accessories$setUseHighlightShader"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $AccessoriesFrameBufferExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesFrameBufferExtension$Type = ($AccessoriesFrameBufferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesFrameBufferExtension_ = $AccessoriesFrameBufferExtension$Type;
}}
declare module "packages/io/wispforest/accessories/mixin/client/$GuiGraphicsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GuiGraphicsAccessor {

}

export namespace $GuiGraphicsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$Type = ($GuiGraphicsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiGraphicsAccessor_ = $GuiGraphicsAccessor$Type;
}}
declare module "packages/io/wispforest/endec/impl/$AttributeEndecBuilder" {
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"

export class $AttributeEndecBuilder<T> {

constructor(arg0: $Endec$Type<(T)>, arg1: $SerializationAttribute$Type)

public "orElse"(arg0: $Endec$Type<(T)>): $Endec<(T)>
public "orElseIf"(arg0: $Endec$Type<(T)>, arg1: $SerializationAttribute$Type): $AttributeEndecBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeEndecBuilder$Type<T> = ($AttributeEndecBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeEndecBuilder_<T> = $AttributeEndecBuilder$Type<(T)>;
}}
declare module "packages/io/wispforest/endec/$Serializer" {
import {$Serializer$Map, $Serializer$Map$Type} from "packages/io/wispforest/endec/$Serializer$Map"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Serializer$Struct, $Serializer$Struct$Type} from "packages/io/wispforest/endec/$Serializer$Struct"
import {$Serializer$Sequence, $Serializer$Sequence$Type} from "packages/io/wispforest/endec/$Serializer$Sequence"

export interface $Serializer<T> {

 "sequence"<E>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(E)>, arg2: integer): $Serializer$Sequence<(E)>
 "writeString"(arg0: $SerializationContext$Type, arg1: string): void
 "writeLong"(arg0: $SerializationContext$Type, arg1: long): void
 "writeBoolean"(arg0: $SerializationContext$Type, arg1: boolean): void
 "writeByte"(arg0: $SerializationContext$Type, arg1: byte): void
 "writeShort"(arg0: $SerializationContext$Type, arg1: short): void
 "writeDouble"(arg0: $SerializationContext$Type, arg1: double): void
 "writeFloat"(arg0: $SerializationContext$Type, arg1: float): void
 "writeBytes"(arg0: $SerializationContext$Type, arg1: (byte)[]): void
 "map"<V>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(V)>, arg2: integer): $Serializer$Map<(V)>
 "result"(): T
 "writeInt"(arg0: $SerializationContext$Type, arg1: integer): void
 "setupContext"(arg0: $SerializationContext$Type): $SerializationContext
 "writeOptional"<V>(arg0: $SerializationContext$Type, arg1: $Endec$Type<(V)>, arg2: $Optional$Type<(V)>): void
 "writeVarLong"(arg0: $SerializationContext$Type, arg1: long): void
 "writeVarInt"(arg0: $SerializationContext$Type, arg1: integer): void
 "struct"(): $Serializer$Struct
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
declare module "packages/io/wispforest/accessories/api/$SoundEventData" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $SoundEventData extends $Record {

constructor(event: $SoundEvent$Type, volume: float, pitch: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "event"(): $SoundEvent
public "volume"(): float
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventData$Type = ($SoundEventData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEventData_ = $SoundEventData$Type;
}}
declare module "packages/io/wispforest/accessories/impl/$PlayerEquipControl" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerEquipControl extends $Enum<($PlayerEquipControl)> {
static readonly "MUST_CROUCH": $PlayerEquipControl
static readonly "MUST_NOT_CROUCH": $PlayerEquipControl
static readonly "DISABLED": $PlayerEquipControl


public static "values"(): ($PlayerEquipControl)[]
public static "valueOf"(name: string): $PlayerEquipControl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEquipControl$Type = (("must_crouch") | ("disabled") | ("must_not_crouch")) | ($PlayerEquipControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEquipControl_ = $PlayerEquipControl$Type;
}}
declare module "packages/io/wispforest/accessories/api/components/$AccessoryItemAttributeModifiers$Entry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export class $AccessoryItemAttributeModifiers$Entry extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers$Entry)>

constructor(attribute: $Attribute$Type, modifier: $AttributeModifier$Type, slotName: string, isStackable: boolean)

public "attribute"(): $Attribute
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "isStackable"(): boolean
public "slotName"(): string
get "stackable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Entry$Type = ($AccessoryItemAttributeModifiers$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers$Entry_ = $AccessoryItemAttributeModifiers$Entry$Type;
}}
declare module "packages/io/wispforest/accessories/impl/$AccessoriesContainerImpl" {
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$KeyedEndec, $KeyedEndec$Type} from "packages/io/wispforest/endec/impl/$KeyedEndec"
import {$AccessoriesContainer, $AccessoriesContainer$Type} from "packages/io/wispforest/accessories/api/$AccessoriesContainer"
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapCarrier, $MapCarrier$Type} from "packages/io/wispforest/endec/util/$MapCarrier"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$InstanceEndec, $InstanceEndec$Type} from "packages/io/wispforest/accessories/impl/$InstanceEndec"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$ExpandedSimpleContainer, $ExpandedSimpleContainer$Type} from "packages/io/wispforest/accessories/impl/$ExpandedSimpleContainer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"
import {$AccessoriesCapability, $AccessoriesCapability$Type} from "packages/io/wispforest/accessories/api/$AccessoriesCapability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AccessoriesContainerImpl implements $AccessoriesContainer, $InstanceEndec, $ContainerListener {
static readonly "SLOT_NAME_KEY": $KeyedEndec<(string)>
static readonly "BASE_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "CURRENT_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "RENDER_OPTIONS_KEY": $KeyedEndec<($List<(boolean)>)>
static readonly "MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "PERSISTENT_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "CACHED_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "ITEMS_KEY": $KeyedEndec<($ListTag)>
static readonly "COSMETICS_KEY": $KeyedEndec<($ListTag)>

constructor(capability: $AccessoriesCapability$Type, slotType: $SlotType$Type)

public "copyFrom"(other: $AccessoriesContainerImpl$Type): void
public "getModifiers"(): $Map<($UUID), ($AttributeModifier)>
public "update"(): void
public "write"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type): void
public "write"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type, sync: boolean): void
public "read"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type): void
public "read"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type, sync: boolean): void
public "getSize"(): integer
public "hasModifier"(id: $UUID$Type): boolean
public "removeModifier"(id: $UUID$Type): void
public "clearModifiers"(): void
public "getAccessories"(): $ExpandedSimpleContainer
public "getCosmeticAccessories"(): $ExpandedSimpleContainer
public "getSlotName"(): string
public "renderOptions"(): $List<(boolean)>
public "markChanged"(resizingUpdate: boolean): void
public static "copyContainerList"(container: $SimpleContainer$Type): $SimpleContainer
public static "readContainers"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type, ...keys: ($KeyedEndec$Type<($ListTag$Type)>)[]): $List<($SimpleContainer)>
public "getBaseSize"(): integer
public "removeCachedModifiers"(modifier: $AttributeModifier$Type): void
public "getModifiersForOperation"(operation: $AttributeModifier$Operation$Type): $Collection<($AttributeModifier)>
public "addTransientModifier"(modifier: $AttributeModifier$Type): void
public "addPersistentModifier"(modifier: $AttributeModifier$Type): void
public "getCachedModifiers"(): $Set<($AttributeModifier)>
public "clearCachedModifiers"(): void
public static "readContainer"(carrier: $MapCarrier$Type, ctx: $SerializationContext$Type, key: $KeyedEndec$Type<($ListTag$Type)>): $SimpleContainer
public "capability"(): $AccessoriesCapability
public "containerChanged"(container: $Container$Type): void
public "hasChanged"(): boolean
public "shouldRender"(index: integer): boolean
public "markChanged"(): void
public "createReference"(index: integer): $SlotReference
public "slotType"(): $SlotType
public static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$Type<(T)>): $Endec<(T)>
get "modifiers"(): $Map<($UUID), ($AttributeModifier)>
get "size"(): integer
get "accessories"(): $ExpandedSimpleContainer
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "slotName"(): string
get "baseSize"(): integer
get "cachedModifiers"(): $Set<($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainerImpl$Type = ($AccessoriesContainerImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesContainerImpl_ = $AccessoriesContainerImpl$Type;
}}
declare module "packages/io/wispforest/endec/$SerializationAttribute" {
import {$SerializationAttribute$Marker, $SerializationAttribute$Marker$Type} from "packages/io/wispforest/endec/$SerializationAttribute$Marker"
import {$SerializationAttribute$WithValue, $SerializationAttribute$WithValue$Type} from "packages/io/wispforest/endec/$SerializationAttribute$WithValue"

export class $SerializationAttribute {
readonly "name": string


public static "marker"(arg0: string): $SerializationAttribute$Marker
public static "withValue"<T>(arg0: string): $SerializationAttribute$WithValue<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Type = ($SerializationAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute_ = $SerializationAttribute$Type;
}}
declare module "packages/io/wispforest/accessories/mixin/$LivingEntityAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LivingEntityAccessor {

 "accessors$breakItem"(arg0: $ItemStack$Type): void

(arg0: $ItemStack$Type): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/io/wispforest/endec/$SerializationAttribute$WithValue" {
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$Type} from "packages/io/wispforest/endec/$SerializationAttribute$Instance"
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"

export class $SerializationAttribute$WithValue<T> extends $SerializationAttribute {
readonly "name": string


public "instance"(arg0: T): $SerializationAttribute$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$WithValue$Type<T> = ($SerializationAttribute$WithValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$WithValue_<T> = $SerializationAttribute$WithValue$Type<(T)>;
}}
declare module "packages/io/wispforest/endec/$Endec$Encoder" {
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Serializer, $Serializer$Type} from "packages/io/wispforest/endec/$Serializer"

export interface $Endec$Encoder<T> {

 "encode"(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: T): void

(arg0: $SerializationContext$Type, arg1: $Serializer$Type<(any)>, arg2: T): void
}

export namespace $Endec$Encoder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Encoder$Type<T> = ($Endec$Encoder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$Encoder_<T> = $Endec$Encoder$Type<(T)>;
}}
declare module "packages/io/wispforest/endec/$Deserializer$Sequence" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $Deserializer$Sequence<E> extends $Iterator<(E)> {

 "hasNext"(): boolean
 "next"(): E
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Deserializer$Sequence {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Sequence$Type<E> = ($Deserializer$Sequence<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Sequence_<E> = $Deserializer$Sequence$Type<(E)>;
}}
declare module "packages/io/wispforest/accessories/api/attributes/$AttributeModificationData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export class $AttributeModificationData extends $Record {

constructor(attribute: $Attribute$Type, modifier: $AttributeModifier$Type)
constructor(slotPath: string, attribute: $Attribute$Type, modifier: $AttributeModifier$Type)

public "attribute"(): $Attribute
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "slotPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeModificationData$Type = ($AttributeModificationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeModificationData_ = $AttributeModificationData$Type;
}}
declare module "packages/io/wispforest/accessories/api/slot/$SlotTypeReference" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SlotType, $SlotType$Type} from "packages/io/wispforest/accessories/api/slot/$SlotType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $SlotTypeReference extends $Record {

constructor(slotName: string)

public "get"(level: $Level$Type): $SlotType
public "get"(isClientSide: boolean): $SlotType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slotName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotTypeReference$Type = ($SlotTypeReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotTypeReference_ = $SlotTypeReference$Type;
}}
declare module "packages/io/wispforest/endec/$SerializationContext" {
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$Type} from "packages/io/wispforest/endec/$SerializationAttribute$Instance"
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"
import {$SerializationAttribute$WithValue, $SerializationAttribute$WithValue$Type} from "packages/io/wispforest/endec/$SerializationAttribute$WithValue"

export class $SerializationContext {


public "getAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$Type<(A)>): A
public "and"(arg0: $SerializationContext$Type): $SerializationContext
public static "attributes"(...arg0: ($SerializationAttribute$Instance$Type)[]): $SerializationContext
public "hasAttribute"(arg0: $SerializationAttribute$Type): boolean
public static "empty"(): $SerializationContext
public static "suppressed"(...arg0: ($SerializationAttribute$Type)[]): $SerializationContext
public "withAttributes"(...arg0: ($SerializationAttribute$Instance$Type)[]): $SerializationContext
public "requireAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$Type<(A)>): A
public "withoutAttributes"(...arg0: ($SerializationAttribute$Type)[]): $SerializationContext
public "withSuppressed"(...arg0: ($SerializationAttribute$Type)[]): $SerializationContext
public "withoutSuppressed"(...arg0: ($SerializationAttribute$Type)[]): $SerializationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationContext$Type = ($SerializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationContext_ = $SerializationContext$Type;
}}
declare module "packages/io/wispforest/endec/$Endec$DecoderWithError" {
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"
import {$Deserializer, $Deserializer$Type} from "packages/io/wispforest/endec/$Deserializer"

export interface $Endec$DecoderWithError<T> {

 "decode"(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>, arg2: $Exception$Type): T

(arg0: $SerializationContext$Type, arg1: $Deserializer$Type<(any)>, arg2: $Exception$Type): T
}

export namespace $Endec$DecoderWithError {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$DecoderWithError$Type<T> = ($Endec$DecoderWithError<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$DecoderWithError_<T> = $Endec$DecoderWithError$Type<(T)>;
}}
declare module "packages/io/wispforest/accessories/api/slot/$SlotType" {
import {$DropRule, $DropRule$Type} from "packages/io/wispforest/accessories/api/$DropRule"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SlotType {

 "amount"(): integer
 "name"(): string
 "order"(): integer
 "icon"(): $ResourceLocation
 "validators"(): $Set<($ResourceLocation)>
 "translation"(): string
 "dropRule"(): $DropRule
}

export namespace $SlotType {
const EMPTY_SLOT_ICON: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$Type = ($SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$Type;
}}
declare module "packages/io/wispforest/accessories/api/$EquipmentChecking" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EquipmentChecking extends $Enum<($EquipmentChecking)> {
static readonly "ACCESSORIES_ONLY": $EquipmentChecking
static readonly "COSMETICALLY_OVERRIDABLE": $EquipmentChecking


public static "values"(): ($EquipmentChecking)[]
public static "valueOf"(name: string): $EquipmentChecking
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentChecking$Type = (("accessories_only") | ("cosmetically_overridable")) | ($EquipmentChecking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentChecking_ = $EquipmentChecking$Type;
}}
declare module "packages/io/wispforest/endec/$Deserializer$Map" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $Deserializer$Map<E> extends $Iterator<($Map$Entry<(string), (E)>)> {

 "hasNext"(): boolean
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Deserializer$Map {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Map$Type<E> = ($Deserializer$Map<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Map_<E> = $Deserializer$Map$Type<(E)>;
}}
declare module "packages/io/wispforest/endec/impl/$KeyedEndec" {
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $KeyedEndec<F> {

constructor(arg0: string, arg1: $Endec$Type<(F)>, arg2: $Supplier$Type<(F)>)
constructor(arg0: string, arg1: $Endec$Type<(F)>, arg2: F)

public "key"(): string
public "defaultValue"(): F
public "endec"(): $Endec<(F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyedEndec$Type<F> = ($KeyedEndec<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyedEndec_<F> = $KeyedEndec$Type<(F)>;
}}
declare module "packages/io/wispforest/accessories/impl/$InstanceEndec" {
import {$Endec, $Endec$Type} from "packages/io/wispforest/endec/$Endec"
import {$MapCarrier, $MapCarrier$Type} from "packages/io/wispforest/endec/util/$MapCarrier"
import {$SerializationContext, $SerializationContext$Type} from "packages/io/wispforest/endec/$SerializationContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $InstanceEndec {

 "write"(arg0: $MapCarrier$Type, arg1: $SerializationContext$Type): void
 "read"(arg0: $MapCarrier$Type, arg1: $SerializationContext$Type): void
}

export namespace $InstanceEndec {
function constructed<T>(supplier: $Supplier$Type<(T)>): $Endec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceEndec$Type = ($InstanceEndec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceEndec_ = $InstanceEndec$Type;
}}
declare module "packages/io/wispforest/accessories/mixin/client/$ScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ScreenAccessor {

 "call$clearFocus"(): void

(): void
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/io/wispforest/accessories/impl/$ExpandedSimpleContainer" {
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AccessoriesContainerImpl, $AccessoriesContainerImpl$Type} from "packages/io/wispforest/accessories/impl/$AccessoriesContainerImpl"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ExpandedSimpleContainer extends $SimpleContainer implements $Iterable<($Pair<(integer), ($ItemStack)>)> {
readonly "items": $NonNullList<($ItemStack)>

constructor(container: $AccessoriesContainerImpl$Type, size: integer, name: string)
constructor(container: $AccessoriesContainerImpl$Type, size: integer, name: string, toggleNewlyConstructed: boolean)

public "validIndex"(slot: integer): boolean
public "name"(): string
public "iterator"(): $Iterator<($Pair<(integer), ($ItemStack)>)>
public "wasNewlyConstructed"(): boolean
public "isSlotFlagged"(slot: integer): boolean
public "setPreviousItem"(slot: integer, stack: $ItemStack$Type): void
public "getPreviousItem"(slot: integer): $ItemStack
public "setFromPrev"(prevContainer: $ExpandedSimpleContainer$Type): void
public "getItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "fromTag"(containerNbt: $ListTag$Type): void
public "createTag"(): $ListTag
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "copyPrev"(prevContainer: $ExpandedSimpleContainer$Type): void
public "spliterator"(): $Spliterator<($Pair<(integer), ($ItemStack)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
[Symbol.iterator](): IterableIterator<$Pair<(integer), ($ItemStack)>>;
set "fromPrev"(value: $ExpandedSimpleContainer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedSimpleContainer$Type = ($ExpandedSimpleContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedSimpleContainer_ = $ExpandedSimpleContainer$Type;
}}
declare module "packages/io/wispforest/accessories/api/attributes/$AccessoryAttributeBuilder" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$AttributeModificationData, $AttributeModificationData$Type} from "packages/io/wispforest/accessories/api/attributes/$AttributeModificationData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SlotReference, $SlotReference$Type} from "packages/io/wispforest/accessories/api/slot/$SlotReference"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AccessoryAttributeBuilder {

constructor()
constructor(slotName: string, slot: integer)
constructor(slotReference: $SlotReference$Type)

public "equals"(obj: any): boolean
public "isEmpty"(): boolean
public "exclusiveAttributes"(): $Map<($Attribute), ($Map<($ResourceLocation), ($AttributeModificationData)>)>
public "stackedAttributes"(): $Multimap<($Attribute), ($AttributeModificationData)>
public "addExclusive"(attribute: $Attribute$Type, location: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type): $AccessoryAttributeBuilder
public "addExclusive"(attribute: $Attribute$Type, modifier: $AttributeModifier$Type): $AccessoryAttributeBuilder
public "addStackable"(attribute: $Attribute$Type, location: $ResourceLocation$Type, amount: double, operation: $AttributeModifier$Operation$Type): $AccessoryAttributeBuilder
public "addModifier"(attribute: $Attribute$Type, modifier: $AttributeModifier$Type, slotReference: $SlotReference$Type, locationBuilder: $Function$Type<(string), ($ResourceLocation$Type)>): $AccessoryAttributeBuilder
public "getSlotModifiers"(): $Multimap<(string), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(slotname: string, slot: integer): string
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(ref: $SlotReference$Type): string
public "getExclusive"(attribute: $Attribute$Type, location: $ResourceLocation$Type): $AttributeModificationData
public "removeExclusive"(attribute: $Attribute$Type, location: $ResourceLocation$Type): $AttributeModificationData
public "removeStacks"(attribute: $Attribute$Type, location: $ResourceLocation$Type): $Collection<($AttributeModificationData)>
public "getAttributeModifiers"(filterSlots: boolean): $Multimap<($Attribute), ($AttributeModifier)>
public "getStacks"(attribute: $Attribute$Type, location: $ResourceLocation$Type): $Collection<($AttributeModificationData)>
public "addFrom"(builder: $AccessoryAttributeBuilder$Type): $AccessoryAttributeBuilder
get "empty"(): boolean
get "slotModifiers"(): $Multimap<(string), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryAttributeBuilder$Type = ($AccessoryAttributeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryAttributeBuilder_ = $AccessoryAttributeBuilder$Type;
}}
declare module "packages/io/wispforest/accessories/mixin/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "accessories$setY"(arg0: integer): void

(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/io/wispforest/endec/$Serializer$Sequence" {
import {$Endable, $Endable$Type} from "packages/io/wispforest/endec/util/$Endable"

export interface $Serializer$Sequence<E> extends $Endable {

 "element"(arg0: E): void
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Sequence {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Sequence$Type<E> = ($Serializer$Sequence<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Sequence_<E> = $Serializer$Sequence$Type<(E)>;
}}
declare module "packages/io/wispforest/endec/$SerializationAttribute$Marker" {
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$Type} from "packages/io/wispforest/endec/$SerializationAttribute$Instance"

export class $SerializationAttribute$Marker extends $SerializationAttribute implements $SerializationAttribute$Instance {
readonly "name": string


public "attribute"(): $SerializationAttribute
public "value"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Marker$Type = ($SerializationAttribute$Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$Marker_ = $SerializationAttribute$Marker$Type;
}}
declare module "packages/io/wispforest/endec/$SerializationAttribute$Instance" {
import {$SerializationAttribute, $SerializationAttribute$Type} from "packages/io/wispforest/endec/$SerializationAttribute"

export interface $SerializationAttribute$Instance {

 "attribute"(): $SerializationAttribute
 "value"(): any
}

export namespace $SerializationAttribute$Instance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Instance$Type = ($SerializationAttribute$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$Instance_ = $SerializationAttribute$Instance$Type;
}}

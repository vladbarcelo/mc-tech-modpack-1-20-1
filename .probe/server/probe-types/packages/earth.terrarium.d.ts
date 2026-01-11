declare module "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Serializable, $Serializable$Type} from "packages/earth/terrarium/botarium/util/$Serializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $EnergyContainer extends $Serializable, $Clearable {

 "getContainer"(direction: $Direction$Type): $EnergyContainer
 "getMaxCapacity"(): long
 "insertEnergy"(arg0: long, arg1: boolean): long
 "internalInsert"(amount: long, simulate: boolean): long
 "extractEnergy"(arg0: long, arg1: boolean): long
 "internalExtract"(amount: long, simulate: boolean): long
 "allowsInsertion"(): boolean
 "allowsExtraction"(): boolean
 "createSnapshot"(): $EnergySnapshot
 "readSnapshot"(snapshot: $EnergySnapshot$Type): void
 "getStoredEnergy"(): long
 "setEnergy"(arg0: long): void
 "maxInsert"(): long
 "maxExtract"(): long
 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "clearContent"(): void
}

export namespace $EnergyContainer {
function of(holder: $ItemStackHolder$Type): $EnergyContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
function holdsEnergy(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function holdsEnergy(stack: $ItemStack$Type): boolean
function holdsEnergy(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsEnergy(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyContainer$Type = ($EnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyContainer_ = $EnergyContainer$Type;
}}
declare module "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot" {
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"

export interface $EnergySnapshot {

 "loadSnapshot"(arg0: $EnergyContainer$Type): void

(arg0: $EnergyContainer$Type): void
}

export namespace $EnergySnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySnapshot$Type = ($EnergySnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySnapshot_ = $EnergySnapshot$Type;
}}
declare module "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyBlock" {
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"

export interface $BotariumEnergyBlock<T extends ($EnergyContainer) & ($Updatable<($BlockEntity)>)> {

 "getEnergyStorage"(): T

(): T
}

export namespace $BotariumEnergyBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumEnergyBlock$Type<T> = ($BotariumEnergyBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumEnergyBlock_<T> = $BotariumEnergyBlock$Type<(T)>;
}}
declare module "packages/earth/terrarium/botarium/util/$Serializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $Serializable {

 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
}

export namespace $Serializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$Type = ($Serializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializable_ = $Serializable$Type;
}}
declare module "packages/earth/terrarium/botarium/common/item/$ItemStackHolder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackHolder {

constructor(stack: $ItemStack$Type)

public "isDirty"(): boolean
public "copy"(): $ItemStackHolder
public "getStack"(): $ItemStack
public "setStack"(stack: $ItemStack$Type): void
get "dirty"(): boolean
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHolder$Type = ($ItemStackHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHolder_ = $ItemStackHolder$Type;
}}
declare module "packages/earth/terrarium/botarium/util/$Updatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Updatable<T> {

 "update"(arg0: T): void

(arg0: T): void
}

export namespace $Updatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Updatable$Type<T> = ($Updatable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Updatable_<T> = $Updatable$Type<(T)>;
}}
declare module "packages/earth/terrarium/botarium/common/energy/impl/$WrappedBlockEnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WrappedBlockEnergyContainer extends $Record implements $EnergyContainer, $Updatable<($BlockEntity)> {

constructor(blockEntity: $BlockEntity$Type, container: $EnergyContainer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "update"(object: $BlockEntity$Type): void
public "container"(): $EnergyContainer
public "getMaxCapacity"(): long
public "insertEnergy"(energy: long, simulate: boolean): long
public "internalInsert"(amount: long, simulate: boolean): long
public "extractEnergy"(energy: long, simulate: boolean): long
public "internalExtract"(amount: long, simulate: boolean): long
public "allowsInsertion"(): boolean
public "allowsExtraction"(): boolean
public "createSnapshot"(): $EnergySnapshot
public "blockEntity"(): $BlockEntity
public "deserialize"(nbt: $CompoundTag$Type): void
public "getStoredEnergy"(): long
public "serialize"(nbt: $CompoundTag$Type): $CompoundTag
public "clearContent"(): void
public "setEnergy"(energy: long): void
public "maxInsert"(): long
public "maxExtract"(): long
public static "of"(holder: $ItemStackHolder$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public "getContainer"(direction: $Direction$Type): $EnergyContainer
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(stack: $ItemStack$Type): boolean
public static "holdsEnergy"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public "readSnapshot"(snapshot: $EnergySnapshot$Type): void
public static "tryClear"(arg0: any): void
get "maxCapacity"(): long
get "storedEnergy"(): long
set "energy"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedBlockEnergyContainer$Type = ($WrappedBlockEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedBlockEnergyContainer_ = $WrappedBlockEnergyContainer$Type;
}}

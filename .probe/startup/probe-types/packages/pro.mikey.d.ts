declare module "packages/pro/mikey/kubeutils/kubejs/modules/$FluidsKu" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$List, $List$Type} from "packages/java/util/$List"

export class $FluidsKu {

constructor()

public "isEmpty"(arg0: $Fluid$Type): boolean
public "getFluidsByNamespace"(arg0: string): $List<($Fluid)>
public "getFluidsByNamespaces"(arg0: $List$Type<(string)>): $List<($Fluid)>
public "notEmpty"(arg0: $Fluid$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidsKu$Type = ($FluidsKu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidsKu_ = $FluidsKu$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/modules/$StreamsHelper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StreamsHelper {

constructor()

public "mapToBlock"(arg0: $ServerLevel$Type, arg1: $List$Type<($BlockPos$Type)>): $List<($BlockContainerJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StreamsHelper$Type = ($StreamsHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StreamsHelper_ = $StreamsHelper$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/$BaseBindings" {
import {$ClassWrapper, $ClassWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$ClassWrapper"
import {$StreamsHelper, $StreamsHelper$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$StreamsHelper"
import {$PlayerKu, $PlayerKu$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$PlayerKu"
import {$UtilsKu, $UtilsKu$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$UtilsKu"
import {$FluidsKu, $FluidsKu$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$FluidsKu"
import {$LevelKu, $LevelKu$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$LevelKu"
import {$ListsKu, $ListsKu$Type} from "packages/pro/mikey/kubeutils/kubejs/modules/$ListsKu"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BaseBindings {

}

export namespace $BaseBindings {
const Fluids: $FluidsKu
const Utils: $UtilsKu
const Streams: $StreamsHelper
const Lists: $ListsKu
const Level: $ClassWrapper<($LevelKu)>
const Player: $ClassWrapper<($PlayerKu)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBindings$Type = ($BaseBindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBindings_ = $BaseBindings$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/modules/$UtilsKu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UtilsKu {

constructor()

public "nullOrEmpty"(arg0: any): boolean
public "notNullOrEmpty"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UtilsKu$Type = ($UtilsKu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UtilsKu_ = $UtilsKu$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/events/$PlayerStarterItems" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerStarterItems extends $PlayerEventJS {
static readonly "STARTER_ITEMS_GIVEN_FLAG": string
 "triggeredFrom": string

constructor(arg0: $Player$Type)
constructor(arg0: $Player$Type, arg1: string)

public "getEntity"(): $Player
public "addEquipmentItem"(arg0: string, arg1: $ItemStack$Type): void
public "addItems"(...arg0: ($ItemStack$Type)[]): void
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStarterItems$Type = ($PlayerStarterItems);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerStarterItems_ = $PlayerStarterItems$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/modules/$ListsKu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ListsKu {

constructor()

public "getEntryBasedOnWeight"(...arg0: (any)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListsKu$Type = ($ListsKu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListsKu_ = $ListsKu$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/modules/$LevelKu" {
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LevelKu {

constructor(arg0: $ServerLevel$Type)

public "findSingleBlockWithinRadius"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): $BlockPos
public "getRandomLocation"(arg0: $BlockPos$Type, arg1: integer, arg2: integer): $BlockPos
public "spawnStructure"(arg0: string, arg1: $BlockPos$Type): void
public "findEntitiesWithinRadius"(arg0: $ResourceLocation$Type, arg1: $BlockPos$Type, arg2: integer): $List<($LivingEntity)>
public "findBlockWithinRadius"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): $List<($BlockPos)>
public "seekCollectionOfBlocks"(arg0: $BlockPos$Type, arg1: integer, arg2: $Predicate$Type<($BlockPos$Type)>, arg3: $Predicate$Type<($BlockPos$Type)>): $List<($BlockPos)>
public "isStructureAtLocation"(arg0: $BlockPos$Type, arg1: $ResourceLocation$Type): boolean
public "getStructuresAtLocation"(arg0: $BlockPos$Type): $Set<($Structure)>
public "getStructureIdsAtLocation"(arg0: $BlockPos$Type): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelKu$Type = ($LevelKu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelKu_ = $LevelKu$Type;
}}
declare module "packages/pro/mikey/kubeutils/kubejs/modules/$PlayerKu" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Color, $Color$Type} from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"

export class $PlayerKu {

constructor(arg0: $Player$Type)

public "isClientSide"(): boolean
public "showActionBarComponent"(arg0: $Component$Type): void
public "showActionBar"(arg0: string, arg1: $Color$Type, arg2: boolean): void
public "showActionBar"(arg0: string, arg1: $Color$Type): void
public "showActionBar"(arg0: string, arg1: $Color$Type, arg2: boolean, arg3: boolean): void
public "showActionBar"(arg0: string): void
public "clearStarterItemsFlag"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerKu$Type = ($PlayerKu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerKu_ = $PlayerKu$Type;
}}

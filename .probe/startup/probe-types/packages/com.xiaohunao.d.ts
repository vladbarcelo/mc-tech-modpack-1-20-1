declare module "packages/com/xiaohunao/createheatjs/event/$registerHeatEvent" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$HeatData, $HeatData$Type} from "packages/com/xiaohunao/createheatjs/$HeatData"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $registerHeatEvent extends $EventJS {

constructor()

public "addHeatSourceWithJei"(arg0: $BlazeBurnerBlock$HeatLevel$Type, arg1: $Block$Type, arg2: $BlockState$Type, arg3: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>): $HeatData
public "addHeatSourceWithJei"(arg0: $BlazeBurnerBlock$HeatLevel$Type, arg1: $Block$Type, arg2: $BlockState$Type): $HeatData
public "registerHeat"(arg0: string, arg1: integer): $HeatData
public "addHeatSource"(arg0: $BlazeBurnerBlock$HeatLevel$Type, arg1: $Block$Type, arg2: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>): $HeatData
public "addHeatSource"(arg0: $BlazeBurnerBlock$HeatLevel$Type, arg1: $Block$Type): $HeatData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $registerHeatEvent$Type = ($registerHeatEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $registerHeatEvent_ = $registerHeatEvent$Type;
}}
declare module "packages/com/xiaohunao/createheatjs/$HeatData$HeatSourceData" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $HeatData$HeatSourceData {

constructor(arg0: $Block$Type)

public "getBlock"(): $Block
public "toString"(): string
public "getPredicate"(): $TriPredicate<($Level), ($BlockPos), ($BlockState)>
public "setJeiRenderBlockState"(arg0: $BlockState$Type): $HeatData$HeatSourceData
public "setPredicate"(arg0: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>): $HeatData$HeatSourceData
public "addState"(arg0: $List$Type<($BlockState$Type)>): void
public "addState"(arg0: $BlockState$Type): $HeatData$HeatSourceData
public "getStates"(): $List<($BlockState)>
public "getJeiRenderBlockState"(): $BlockState
public "setStates"(arg0: $List$Type<($BlockState$Type)>): $HeatData$HeatSourceData
get "block"(): $Block
get "predicate"(): $TriPredicate<($Level), ($BlockPos), ($BlockState)>
set "jeiRenderBlockState"(value: $BlockState$Type)
set "predicate"(value: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>)
get "states"(): $List<($BlockState)>
get "jeiRenderBlockState"(): $BlockState
set "states"(value: $List$Type<($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatData$HeatSourceData$Type = ($HeatData$HeatSourceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatData$HeatSourceData_ = $HeatData$HeatSourceData$Type;
}}
declare module "packages/com/xiaohunao/createheatjs/$HeatData" {
import {$TriPredicate, $TriPredicate$Type} from "packages/net/minecraftforge/common/util/$TriPredicate"
import {$HeatCondition, $HeatCondition$Type} from "packages/com/simibubi/create/content/processing/recipe/$HeatCondition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HeatData$HeatSourceData, $HeatData$HeatSourceData$Type} from "packages/com/xiaohunao/createheatjs/$HeatData$HeatSourceData"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeatData {

constructor(arg0: string)
constructor(arg0: string, arg1: integer)

public "setColor"(arg0: integer): $HeatData
public "getName"(): string
public "register"(): void
public "setPriority"(arg0: integer): $HeatData
public "getPriority"(): integer
public "getCondition"(): $HeatCondition
public "setHeatCondition"(arg0: $HeatCondition$Type): $HeatData
public "getHeatSourceData"(): $Map<($Block), ($HeatData$HeatSourceData)>
public "getHeatLevel"(): $BlazeBurnerBlock$HeatLevel
public "addHeatSourceWithJei"(arg0: $Block$Type, arg1: $BlockState$Type): $HeatData
public "addHeatSourceWithJei"(arg0: $Block$Type, arg1: $BlockState$Type, arg2: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>): $HeatData
public "addHeatSource"(arg0: $Block$Type): $HeatData
public "addHeatSource"(arg0: $Block$Type, arg1: $TriPredicate$Type<($Level$Type), ($BlockPos$Type), ($BlockState$Type)>): $HeatData
public "setHeatLevel"(arg0: $BlazeBurnerBlock$HeatLevel$Type): $HeatData
public "removeHeatSource"(arg0: $Block$Type): $HeatData
public "getHeatSourceStacks"(): $List<($ItemStack)>
public "getHeatSourceBlocks"(): $List<($Block)>
public "getHeatSourceStates"(arg0: $Block$Type): $List<($BlockState)>
public "canShowJeiTip"(): boolean
public "getColor"(): integer
public "jeiTip"(): $HeatData
set "color"(value: integer)
get "name"(): string
set "priority"(value: integer)
get "priority"(): integer
get "condition"(): $HeatCondition
set "heatCondition"(value: $HeatCondition$Type)
get "heatSourceData"(): $Map<($Block), ($HeatData$HeatSourceData)>
get "heatLevel"(): $BlazeBurnerBlock$HeatLevel
set "heatLevel"(value: $BlazeBurnerBlock$HeatLevel$Type)
get "heatSourceStacks"(): $List<($ItemStack)>
get "heatSourceBlocks"(): $List<($Block)>
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatData$Type = ($HeatData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatData_ = $HeatData$Type;
}}

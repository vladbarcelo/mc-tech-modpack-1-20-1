declare module "packages/biomesoplenty/entity/$BoatBOP$ModelType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BoatBOP$ModelType extends $Enum<($BoatBOP$ModelType)> {
static readonly "FIR": $BoatBOP$ModelType
static readonly "PINE": $BoatBOP$ModelType
static readonly "MAPLE": $BoatBOP$ModelType
static readonly "REDWOOD": $BoatBOP$ModelType
static readonly "MAHOGANY": $BoatBOP$ModelType
static readonly "JACARANDA": $BoatBOP$ModelType
static readonly "PALM": $BoatBOP$ModelType
static readonly "WILLOW": $BoatBOP$ModelType
static readonly "DEAD": $BoatBOP$ModelType
static readonly "MAGIC": $BoatBOP$ModelType
static readonly "UMBRAN": $BoatBOP$ModelType
static readonly "HELLBARK": $BoatBOP$ModelType
static readonly "EMPYREAL": $BoatBOP$ModelType


public "getName"(): string
public "toString"(): string
public static "values"(): ($BoatBOP$ModelType)[]
public static "valueOf"(arg0: string): $BoatBOP$ModelType
public static "byName"(arg0: string): $BoatBOP$ModelType
public static "byId"(arg0: integer): $BoatBOP$ModelType
public "getPlanks"(): $Block
get "name"(): string
get "planks"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatBOP$ModelType$Type = (("magic") | ("umbran") | ("mahogany") | ("pine") | ("redwood") | ("palm") | ("dead") | ("jacaranda") | ("fir") | ("hellbark") | ("willow") | ("empyreal") | ("maple")) | ($BoatBOP$ModelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatBOP$ModelType_ = $BoatBOP$ModelType$Type;
}}

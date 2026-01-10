declare module "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Creeper, $Creeper$Type} from "packages/net/minecraft/world/entity/monster/$Creeper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $DynamicLightHandler<T> {

 "getLuminance"(arg0: T): integer
 "isWaterSensitive"(lightSource: T): boolean

(arg0: T): integer
}

export namespace $DynamicLightHandler {
function makeHandler<T>(luminance: $Function$Type<(T), (integer)>, waterSensitive: $Function$Type<(T), (boolean)>): $DynamicLightHandler<(T)>
function makeCreeperEntityHandler<T>(handler: $DynamicLightHandler$Type<(T)>): $DynamicLightHandler<(T)>
function makeLivingEntityHandler<T>(handler: $DynamicLightHandler$Type<(T)>): $DynamicLightHandler<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandler$Type<T> = ($DynamicLightHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandler_<T> = $DynamicLightHandler$Type<(T)>;
}}

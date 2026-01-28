declare module "packages/com/naturaltemperature/mixin/$SamplerAccessor" {
import {$DensityFunction, $DensityFunction$Type} from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $SamplerAccessor {

 "getTemperature"(): $DensityFunction
 "getDepth"(): $DensityFunction
 "getContinentalness"(): $DensityFunction
 "getWeirdness"(): $DensityFunction
 "getHumidity"(): $DensityFunction
 "getErosion"(): $DensityFunction
}

export namespace $SamplerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SamplerAccessor$Type = ($SamplerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SamplerAccessor_ = $SamplerAccessor$Type;
}}

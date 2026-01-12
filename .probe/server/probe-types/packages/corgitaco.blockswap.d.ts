declare module "packages/corgitaco/blockswap/util/$TickHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickHelper {

 "markTickDirty"(): boolean
 "setTickDirty"(): void
}

export namespace $TickHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickHelper$Type = ($TickHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickHelper_ = $TickHelper$Type;
}}
declare module "packages/corgitaco/blockswap/mixin/access/$StateHolderAccess" {
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"

export interface $StateHolderAccess<O, S> {

 "blockSwap_GetOwner"(): O
 "blockSwap_getPropertiesCodec"(): $MapCodec<(S)>
}

export namespace $StateHolderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccess$Type<O, S> = ($StateHolderAccess<(O), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateHolderAccess_<O, S> = $StateHolderAccess$Type<(O), (S)>;
}}

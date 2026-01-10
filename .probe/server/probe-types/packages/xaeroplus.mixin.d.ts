declare module "packages/xaeroplus/mixin/client/$AccessorMinimapModOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMinimapModOptions {

}

export namespace $AccessorMinimapModOptions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMinimapModOptions$Type = ($AccessorMinimapModOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMinimapModOptions_ = $AccessorMinimapModOptions$Type;
}}
declare module "packages/xaeroplus/mixin/client/$AccessorWidgetScreenHandler" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"

export interface $AccessorWidgetScreenHandler {

 "getWidgets"(): $List<($Widget)>
 "invokeAddWidget"(arg0: $Widget$Type): void
}

export namespace $AccessorWidgetScreenHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWidgetScreenHandler$Type = ($AccessorWidgetScreenHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWidgetScreenHandler_ = $AccessorWidgetScreenHandler$Type;
}}
declare module "packages/xaeroplus/mixin/client/$AccessorWaypointSet" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $AccessorWaypointSet {

 "getList"(): $List<($Waypoint)>

(): $List<($Waypoint)>
}

export namespace $AccessorWaypointSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWaypointSet$Type = ($AccessorWaypointSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorWaypointSet_ = $AccessorWaypointSet$Type;
}}

declare module "packages/com/minelittlepony/common/client/gui/dimension/$Padding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Padding {
 "top": integer
 "left": integer
 "bottom": integer
 "right": integer

constructor(top: integer, left: integer, bottom: integer, right: integer)

public "setAll"(padding: integer): void
public "setHorizontal"(padding: integer): void
public "setVertical"(padding: integer): void
set "all"(value: integer)
set "horizontal"(value: integer)
set "vertical"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Padding$Type = ($Padding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Padding_ = $Padding$Type;
}}
declare module "packages/com/minelittlepony/common/mixin/$MixinPlayerSkinProvider" {
import {$File, $File$Type} from "packages/java/io/$File"

export interface $MixinPlayerSkinProvider {

 "getSkinCacheDirectory"(): $File

(): $File
}

export namespace $MixinPlayerSkinProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinPlayerSkinProvider$Type = ($MixinPlayerSkinProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinPlayerSkinProvider_ = $MixinPlayerSkinProvider$Type;
}}
declare module "packages/com/minelittlepony/common/client/gui/$IViewRoot" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Padding, $Padding$Type} from "packages/com/minelittlepony/common/client/gui/dimension/$Padding"
import {$IBounded, $IBounded$Type} from "packages/com/minelittlepony/common/client/gui/dimension/$IBounded"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$Bounds, $Bounds$Type} from "packages/com/minelittlepony/common/client/gui/dimension/$Bounds"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$ScreenInitCallback$ButtonList, $ScreenInitCallback$ButtonList$Type} from "packages/com/minelittlepony/common/event/$ScreenInitCallback$ButtonList"

export interface $IViewRoot extends $IBounded, $ScreenInitCallback$ButtonList {

 "getChildElements"(): $List<($GuiEventListener)>
 "getContentPadding"(): $Padding
 "getContentBounds"(): $Bounds
 "getAllBounds"(): $Set<($Bounds)>
 "getScrollY"(): integer
 "getScrollX"(): integer
 "buttons"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(): $List<($NarratableEntry)>
 "getBounds"(): $Bounds
 "setBounds"(arg0: $Bounds$Type): void
 "addButton"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
}

export namespace $IViewRoot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IViewRoot$Type = ($IViewRoot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IViewRoot_ = $IViewRoot$Type;
}}
declare module "packages/com/minelittlepony/common/mixin/$MixinTooltip" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $MixinTooltip {

 "setLines"(arg0: $List$Type<($FormattedCharSequence$Type)>): void

(arg0: $List$Type<($FormattedCharSequence$Type)>): void
}

export namespace $MixinTooltip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinTooltip$Type = ($MixinTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinTooltip_ = $MixinTooltip$Type;
}}
declare module "packages/com/minelittlepony/common/mixin/$MixinEntityRenderDispatcher" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MixinEntityRenderDispatcher {

 "getPlayerRenderers"(): $Map<(string), ($EntityRenderer<(any)>)>
 "getEntityRenderers"(): $Map<($EntityType<(any)>), ($EntityRenderer<(any)>)>
}

export namespace $MixinEntityRenderDispatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinEntityRenderDispatcher$Type = ($MixinEntityRenderDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinEntityRenderDispatcher_ = $MixinEntityRenderDispatcher$Type;
}}
declare module "packages/com/minelittlepony/common/client/gui/dimension/$IBounded" {
import {$Bounds, $Bounds$Type} from "packages/com/minelittlepony/common/client/gui/dimension/$Bounds"

export interface $IBounded {

 "getBounds"(): $Bounds
 "setBounds"(arg0: $Bounds$Type): void
}

export namespace $IBounded {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBounded$Type = ($IBounded);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBounded_ = $IBounded$Type;
}}
declare module "packages/com/minelittlepony/common/client/gui/$IField$IChangeCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IField$IChangeCallback<T> {

 "perform"(arg0: T): T

(t: T): T
}

export namespace $IField$IChangeCallback {
function none<T>(t: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IField$IChangeCallback$Type<T> = ($IField$IChangeCallback<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IField$IChangeCallback_<T> = $IField$IChangeCallback$Type<(T)>;
}}
declare module "packages/com/minelittlepony/common/client/gui/$ITextContext" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ITextContext {

 "drawTextBlock"(context: $GuiGraphics$Type, text: $FormattedText$Type, x: integer, y: integer, maxWidth: integer, color: integer): void
 "drawCenteredLabel"(context: $GuiGraphics$Type, text: $Component$Type, x: integer, y: integer, color: integer, zIndex: double): void
 "drawLabel"(context: $GuiGraphics$Type, text: $Component$Type, x: integer, y: integer, color: integer, zIndex: double): void
 "getFont"(): $Font
}

export namespace $ITextContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextContext$Type = ($ITextContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextContext_ = $ITextContext$Type;
}}
declare module "packages/com/minelittlepony/common/event/$ScreenInitCallback$ButtonList" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $ScreenInitCallback$ButtonList {

 "addButton"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T

(arg0: T): T
}

export namespace $ScreenInitCallback$ButtonList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitCallback$ButtonList$Type = ($ScreenInitCallback$ButtonList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInitCallback$ButtonList_ = $ScreenInitCallback$ButtonList$Type;
}}
declare module "packages/com/minelittlepony/common/client/gui/dimension/$Bounds" {
import {$Padding, $Padding$Type} from "packages/com/minelittlepony/common/client/gui/dimension/$Padding"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Bounds {
 "top": integer
 "left": integer
 "width": integer
 "height": integer

constructor(top: integer, left: integer, width: integer, height: integer)

public "bottom"(): integer
public "right"(): integer
public "add"(other: $Padding$Type): $Bounds
public "add"(other: $Bounds$Type): $Bounds
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "offset"(other: $Padding$Type): $Bounds
public "contains"(x: double, y: double): boolean
public static "empty"(): $Bounds
public "copy"(other: $Bounds$Type): void
public "translate"(matrices: $PoseStack$Type): void
public "draw"(context: $GuiGraphics$Type, tint: integer): void
public "debugMeasure"(context: $GuiGraphics$Type): void
public "containsX"(x: double): boolean
public "containsY"(y: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bounds$Type = ($Bounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bounds_ = $Bounds$Type;
}}

declare module "packages/xaero/hud/minimap/radar/state/$RadarList" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarList implements $Comparable<($RadarList)> {


public "getEntities"(): $Iterable<($Entity)>
public "add"(arg0: $Entity$Type): boolean
public "get"(arg0: integer): $Entity
public "compareTo"(arg0: $RadarList$Type): integer
public "size"(): integer
public "getCategory"(): $EntityRadarCategory
public "setCategory"(arg0: $EntityRadarCategory$Type): $RadarList
public "clearEntities"(): void
get "entities"(): $Iterable<($Entity)>
get "category"(): $EntityRadarCategory
set "category"(value: $EntityRadarCategory$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarList$Type = ($RadarList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarList_ = $RadarList$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode" {
import {$EditorButton$PressActionWithContext, $EditorButton$PressActionWithContext$Type} from "packages/xaero/hud/category/ui/entry/widget/$EditorButton$PressActionWithContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"

export class $EditorSimpleButtonNode extends $EditorNode {


public "getDisplayName"(): string
public "getPressAction"(): $EditorButton$PressActionWithContext
public "getMessageSupplier"(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): $Supplier<(string)>
public "getSubNodes"(): $List<($EditorNode)>
public "getIsActiveSupplier"(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): boolean
get "displayName"(): string
get "pressAction"(): $EditorButton$PressActionWithContext
get "subNodes"(): $List<($EditorNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSimpleButtonNode$Type = ($EditorSimpleButtonNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSimpleButtonNode_ = $EditorSimpleButtonNode$Type;
}}
declare module "packages/xaero/hud/category/ui/setting/$EditorSettingType" {
import {$EditorSettingType$SettingNodeBuilderFactory, $EditorSettingType$SettingNodeBuilderFactory$Type} from "packages/xaero/hud/category/ui/setting/$EditorSettingType$SettingNodeBuilderFactory"

export class $EditorSettingType {
static readonly "ITERATION_BUTTON": $EditorSettingType
static readonly "SLIDER": $EditorSettingType
static readonly "EXPANDING": $EditorSettingType


public "getSettingNodeBuilderFactory"(): $EditorSettingType$SettingNodeBuilderFactory
public "isUsingIndices"(): boolean
get "settingNodeBuilderFactory"(): $EditorSettingType$SettingNodeBuilderFactory
get "usingIndices"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSettingType$Type = ($EditorSettingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSettingType_ = $EditorSettingType$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$DoubleArrayFIFOQueue, $DoubleArrayFIFOQueue$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleArrayFIFOQueue"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$WaypointWorldRenderContext, $WaypointWorldRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $WaypointWorldRenderer extends $MinimapElementRenderer<($Waypoint), ($WaypointWorldRenderContext)> {
readonly "xaeroPlus$speedQueue": $DoubleArrayFIFOQueue


public "getOrder"(): integer
public "modify$bph000$xaeroplus$modifyDistanceText"(text: string, waypoint: $Waypoint$Type): string
public "getEtaSecondsToReachWaypoint"(waypoint: $Waypoint$Type): long
public "renderElement"(arg0: $Waypoint$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
public "modify$bph000$xaeroplus$preferOwWaypointsRemoveSubworldText"(name: string): string
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
get "order"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRenderer$Type = ($WaypointWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldRenderer_ = $WaypointWorldRenderer$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorNode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEditorDataTooltipSupplier, $IEditorDataTooltipSupplier$Type} from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorListRootEntryFactory, $EditorListRootEntryFactory$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $EditorNode {

constructor(arg0: boolean, arg1: $EditorListRootEntryFactory$Type, arg2: $IEditorDataTooltipSupplier$Type)

public "getDisplayName"(): string
public "setExpanded"(arg0: boolean): void
public "getExpandAction"(arg0: $GuiCategoryEditor$SettingRowList$Type<>): $Runnable
public "getTooltipSupplier"(arg0: $EditorNode$Type): $Supplier<($CursorBox)>
public "getSubNodes"(): $List<($EditorNode)>
public "getListEntryFactory"(): $EditorListRootEntryFactory
public "isExpanded"(): boolean
public "isMovable"(): boolean
get "displayName"(): string
set "expanded"(value: boolean)
get "subNodes"(): $List<($EditorNode)>
get "listEntryFactory"(): $EditorListRootEntryFactory
get "expanded"(): boolean
get "movable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorNode$Type = ($EditorNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorNode_ = $EditorNode$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryFileIO" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarCategoryFileIO {


public "loadRootCategory"(): $EntityRadarCategory
public "saveRootCategory"(arg0: $EntityRadarCategory$Type): void
public "saveRootCategory"(arg0: $Path$Type, arg1: string, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryFileIO$Type = ($EntityRadarCategoryFileIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryFileIO_ = $EntityRadarCategoryFileIO$Type;
}}
declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ObjectSelectionList, $ObjectSelectionList$Type} from "packages/net/minecraft/client/gui/components/$ObjectSelectionList"
import {$AbstractSelectionList$Entry, $AbstractSelectionList$Entry$Type} from "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry"
import {$GuiCategoryEditor, $GuiCategoryEditor$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorCategoryNode, $EditorCategoryNode$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$EditorCategoryNodeConverter, $EditorCategoryNodeConverter$Type} from "packages/xaero/hud/category/ui/$EditorCategoryNodeConverter"
import {$GuiCategoryEditor$SettingRowList$Entry, $GuiCategoryEditor$SettingRowList$Entry$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $GuiCategoryEditor$SettingRowList extends $ObjectSelectionList<($GuiCategoryEditor$SettingRowList$Entry<>)> {
readonly "minecraft": $Minecraft
readonly "itemHeight": integer
 "width": integer
 "height": integer
 "y0": integer
 "y1": integer
 "x1": integer
 "x0": integer
 "centerListVertically": boolean
 "headerHeight": integer
 "hovered": E

constructor(arg0: $GuiCategoryEditor$Type<(any), (any), (any), (any), (any), (any)>, arg1: $EditorCategoryNodeConverter$Type<(any), (any), (any), (any), (any), (any)>)

public "tick"(): void
public "updateEntries"(): void
public "setSelected"(arg0: $GuiCategoryEditor$SettingRowList$Entry$Type<>): void
public "restoreScrollAfterUpdate"(): void
public "setCutCategory"(arg0: ED, arg1: ED): void
public "getDataConverter"(): $EditorCategoryNodeConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "setFocused"(arg0: $GuiEventListener$Type): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "isFocused"(): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "updateNarration"(arg0: $NarrationElementOutput$Type): void
public "narrateSelection"(): void
public "setLastExpandedData"(arg0: $EditorNode$Type): void
public "confirmSelection"(): boolean
public "getRowWidth"(): integer
public "isCut"(arg0: ED): boolean
public "hasCut"(): boolean
public "getCut"(): ED
public "pasteTo"(arg0: ED): void
set "selected"(value: $GuiCategoryEditor$SettingRowList$Entry$Type<>)
get "dataConverter"(): $EditorCategoryNodeConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>
set "focused"(value: $GuiEventListener$Type)
get "focused"(): boolean
set "lastExpandedData"(value: $EditorNode$Type)
get "rowWidth"(): integer
get "cut"(): ED
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryEditor$SettingRowList$Type = ($GuiCategoryEditor$SettingRowList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryEditor$SettingRowList_ = $GuiCategoryEditor$SettingRowList$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder" {
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EditorNode$Builder, $EditorNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import {$EditorAdderNode, $EditorAdderNode$Type} from "packages/xaero/hud/category/ui/node/$EditorAdderNode"
import {$EditorSettingsNode, $EditorSettingsNode$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import {$EditorCategoryNode, $EditorCategoryNode$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import {$EditorSettingsNode$Builder, $EditorSettingsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $EditorCategoryNode$Builder<C extends $ObjectCategory<(any), (C)>, ED extends $EditorCategoryNode<(C), (SD), (ED)>, SD extends $EditorSettingsNode<(any)>, SDB extends $EditorSettingsNode$Builder<(SD), (SDB)>, EDB extends $EditorCategoryNode$Builder<(C), (ED), (SD), (SDB), (EDB)>> extends $EditorNode$Builder<(EDB)> {


public "setName"(arg0: string): EDB
public "setSubIndex"(arg0: integer): EDB
public "addSubCategoryBuilder"(arg0: EDB): EDB
public "setNewCategorySupplier"(arg0: $Function$Type<($EditorAdderNode$Type), (ED)>): EDB
public "getSettingDataBuilder"(): SDB
set "name"(value: string)
set "subIndex"(value: integer)
set "newCategorySupplier"(value: $Function$Type<($EditorAdderNode$Type), (ED)>)
get "settingDataBuilder"(): SDB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorCategoryNode$Builder$Type<C, ED, SD, SDB, EDB> = ($EditorCategoryNode$Builder<(C), (ED), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorCategoryNode$Builder_<C, ED, SD, SDB, EDB> = $EditorCategoryNode$Builder$Type<(C), (ED), (SD), (SDB), (EDB)>;
}}
declare module "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager" {
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$Type} from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $RenderedPlayerTrackerManager {


public "register"(arg0: string, arg1: $IRenderedPlayerTracker$Type<(any)>): void
public "getAllSystems"(): $Iterable<($IRenderedPlayerTracker<(any)>)>
get "allSystems"(): $Iterable<($IRenderedPlayerTracker<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedPlayerTrackerManager$Type = ($RenderedPlayerTrackerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderedPlayerTrackerManager_ = $RenderedPlayerTrackerManager$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/server/$ServerWaypointManager" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$IntIterable, $IntIterable$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIterable"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ServerWaypointManager {

constructor()

public "add"(arg0: integer, arg1: $Waypoint$Type): void
public "remove"(arg0: integer): void
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "getIds"(): $IntIterable
public "getWaypoints"(): $Iterable<($Waypoint)>
public "addDisabled"(arg0: integer): void
public "getById"(arg0: integer): $Waypoint
public "getBySlot"(arg0: integer): $Waypoint
get "empty"(): boolean
get "ids"(): $IntIterable
get "waypoints"(): $Iterable<($Waypoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWaypointManager$Type = ($ServerWaypointManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWaypointManager_ = $ServerWaypointManager$Type;
}}
declare module "packages/xaero/hud/category/ui/entry/widget/$EditorButton" {
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$IXaeroNarratableWidget, $IXaeroNarratableWidget$Type} from "packages/xaero/common/gui/$IXaeroNarratableWidget"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Button$CreateNarration, $Button$CreateNarration$Type} from "packages/net/minecraft/client/gui/components/$Button$CreateNarration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $EditorButton extends $Button implements $IXaeroNarratableWidget {
static readonly "SMALL_WIDTH": integer
static readonly "DEFAULT_WIDTH": integer
static readonly "DEFAULT_HEIGHT": integer
static readonly "DEFAULT_NARRATION": $Button$CreateNarration
 "onPress": $Button$OnPress
readonly "createNarration": $Button$CreateNarration
static readonly "TEXTURE_Y_OFFSET": integer
static readonly "TEXTURE_WIDTH": integer
static readonly "TEXTURE_HEIGHT": integer
static readonly "TEXTURE_BORDER_X": integer
static readonly "TEXTURE_BORDER_Y": integer
static readonly "TEXT_MARGIN": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "width": integer
 "height": integer
 "isHovered": boolean
 "active": boolean
 "visible": boolean
 "alpha": float
static readonly "UNSET_FG_COLOR": integer
 "packedFGColor": integer

constructor(arg0: $EditorNode$Type, arg1: boolean, arg2: integer, arg3: integer, arg4: $EditorNode$Type, arg5: $GuiCategoryEditor$SettingRowList$Type<>)
constructor(arg0: $EditorNode$Type, arg1: $Supplier$Type<(string)>, arg2: boolean, arg3: integer, arg4: integer, arg5: $Button$OnPress$Type, arg6: $GuiCategoryEditor$SettingRowList$Type<>)

public "createNarrationMessage"(): $MutableComponent
public "createNarrationMessage"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorButton$Type = ($EditorButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorButton_ = $EditorButton$Type;
}}
declare module "packages/xaero/hud/minimap/radar/color/$RadarColorHelper" {
import {$RadarColor, $RadarColor$Type} from "packages/xaero/hud/minimap/radar/color/$RadarColor"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarColorHelper {

constructor()

public "getFallbackColor"(arg0: $EntityRadarCategory$Type): $RadarColor
public "getEntityColor"(arg0: $Entity$Type, arg1: float, arg2: boolean, arg3: integer, arg4: integer, arg5: boolean, arg6: $RadarColor$Type, arg7: $RadarColor$Type): integer
public "getTeamColor"(arg0: $Entity$Type): integer
public "getEntityHeightFade"(arg0: float, arg1: integer, arg2: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarColorHelper$Type = ($RadarColorHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarColorHelper_ = $RadarColorHelper$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapElementRenderInfo {
readonly "location": $MinimapElementRenderLocation
readonly "renderEntity": $Entity
readonly "renderEntityPos": $Vec3
readonly "player": $Player
readonly "renderPos": $Vec3
readonly "cave": boolean
readonly "partialTicks": float
readonly "framebuffer": $RenderTarget
readonly "renderEntityDimensionScale": double
readonly "renderEntityDimension": $ResourceKey<($Level)>
readonly "backgroundCoordinateScale": double
readonly "mapDimension": $ResourceKey<($Level)>

constructor(arg0: $MinimapElementRenderLocation$Type, arg1: $Entity$Type, arg2: $Player$Type, arg3: $Vec3$Type, arg4: boolean, arg5: float, arg6: $RenderTarget$Type, arg7: double, arg8: $ResourceKey$Type<($Level$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderInfo$Type = ($MinimapElementRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderInfo_ = $MinimapElementRenderInfo$Type;
}}
declare module "packages/xaero/hud/module/$ModuleManager" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $ModuleManager {

constructor()

public "get"(arg0: $ResourceLocation$Type): $HudModule<(any)>
public "register"(arg0: $HudModule$Type<(any)>): void
public "getModules"(): $Iterable<($HudModule<(any)>)>
get "modules"(): $Iterable<($HudModule<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleManager$Type = ($ModuleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleManager_ = $ModuleManager$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointColor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaypointColor extends $Enum<($WaypointColor)> {
static readonly "BLACK": $WaypointColor
static readonly "DARK_BLUE": $WaypointColor
static readonly "DARK_GREEN": $WaypointColor
static readonly "DARK_AQUA": $WaypointColor
static readonly "DARK_RED": $WaypointColor
static readonly "DARK_PURPLE": $WaypointColor
static readonly "GOLD": $WaypointColor
static readonly "GRAY": $WaypointColor
static readonly "DARK_GRAY": $WaypointColor
static readonly "BLUE": $WaypointColor
static readonly "GREEN": $WaypointColor
static readonly "AQUA": $WaypointColor
static readonly "RED": $WaypointColor
static readonly "PURPLE": $WaypointColor
static readonly "YELLOW": $WaypointColor
static readonly "WHITE": $WaypointColor


public "getFormat"(): character
public static "getRandom"(): $WaypointColor
public "getName"(): $Component
public static "values"(): ($WaypointColor)[]
public static "valueOf"(arg0: string): $WaypointColor
public static "fromIndex"(arg0: integer): $WaypointColor
public "getHex"(): integer
get "format"(): character
get "random"(): $WaypointColor
get "name"(): $Component
get "hex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointColor$Type = (("dark_red") | ("green") | ("dark_green") | ("black") | ("yellow") | ("dark_blue") | ("dark_purple") | ("gold") | ("red") | ("aqua") | ("gray") | ("blue") | ("white") | ("dark_aqua") | ("dark_gray") | ("purple")) | ($WaypointColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointColor_ = $WaypointColor$Type;
}}
declare module "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer" {
import {$MinimapWorldConnectionManager, $MinimapWorldConnectionManager$Type} from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import {$WaypointSession, $WaypointSession$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import {$WaypointsSort, $WaypointsSort$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsSort"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$RootConfig, $RootConfig$Type} from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MinimapWorldRootContainer extends $WaypointWorldContainer {


public "getName"(arg0: string): string
public "isEmpty"(): boolean
public "getRoot"(): $MinimapWorldRootContainer
/**
 * 
 * @deprecated
 */
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "isUsingDefaultTeleportCommand"(): boolean
/**
 * 
 * @deprecated
 */
public "setUsingMultiworldDetection"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandFormat"(): string
/**
 * 
 * @deprecated
 */
public "getServerTeleportCommandRotationFormat"(): string
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandFormat"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "setServerTeleportCommandRotationFormat"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "getSortType"(): $WaypointsSort
/**
 * 
 * @deprecated
 */
public "isTeleportationEnabled"(): boolean
/**
 * 
 * @deprecated
 */
public "isSortReversed"(): boolean
public "getConfig"(): $RootConfig
public "getSubName"(): string
/**
 * 
 * @deprecated
 */
public "isIgnoreHeightmaps"(): boolean
public "getDimensionType"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionType
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "updateConnectionsField"(arg0: $WaypointSession$Type): void
public "getDimensionScale"(arg0: $ResourceKey$Type<($Level$Type)>): double
public "updateDimensionType"(arg0: $ClientLevel$Type): void
public "renameOldContainer"(arg0: $XaeroPath$Type): void
public "getDimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
public "setDimensionTypeId"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $ResourceLocation$Type): void
public "isConfigLoaded"(): boolean
/**
 * 
 * @deprecated
 */
public "isUsingMultiworldDetection"(): boolean
/**
 * 
 * @deprecated
 */
public "getDefaultMultiworldId"(): string
/**
 * 
 * @deprecated
 */
public "setDefaultMultiworldId"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "setTeleportationEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setSortType"(arg0: $WaypointsSort$Type): void
/**
 * 
 * @deprecated
 */
public "toggleSortType"(): void
/**
 * 
 * @deprecated
 */
public "setSortReversed"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "toggleSortReversed"(): void
/**
 * 
 * @deprecated
 */
public "isIgnoreServerLevelId"(): boolean
/**
 * 
 * @deprecated
 */
public "setIgnoreServerLevelId"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setIgnoreHeightmaps"(arg0: boolean): void
public "removeName"(arg0: string): void
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
set "usingDefaultTeleportCommand"(value: boolean)
get "usingDefaultTeleportCommand"(): boolean
set "usingMultiworldDetection"(value: boolean)
get "serverTeleportCommandFormat"(): string
get "serverTeleportCommandRotationFormat"(): string
set "serverTeleportCommandFormat"(value: string)
set "serverTeleportCommandRotationFormat"(value: string)
get "sortType"(): $WaypointsSort
get "teleportationEnabled"(): boolean
get "sortReversed"(): boolean
get "config"(): $RootConfig
get "subName"(): string
get "ignoreHeightmaps"(): boolean
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "dimensionTypeIds"(): $Iterable<($Map$Entry<($ResourceKey<($Level)>), ($ResourceLocation)>)>
get "configLoaded"(): boolean
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): string
set "defaultMultiworldId"(value: string)
set "teleportationEnabled"(value: boolean)
set "sortType"(value: $WaypointsSort$Type)
set "sortReversed"(value: boolean)
get "ignoreServerLevelId"(): boolean
set "ignoreServerLevelId"(value: boolean)
set "ignoreHeightmaps"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldRootContainer$Type = ($MinimapWorldRootContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldRootContainer_ = $MinimapWorldRootContainer$Type;
}}
declare module "packages/xaero/hud/minimap/world/container/config/io/$RootConfigIO" {
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"

export class $RootConfigIO {

constructor(arg0: $HudMod$Type)

public "load"(arg0: $MinimapWorldRootContainer$Type): void
public "save"(arg0: $MinimapWorldRootContainer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootConfigIO$Type = ($RootConfigIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootConfigIO_ = $RootConfigIO$Type;
}}
declare module "packages/xaero/hud/minimap/radar/render/element/$RadarElementReader" {
import {$RadarRenderContext, $RadarRenderContext$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarElementReader extends $MinimapElementReader<($Entity), ($RadarRenderContext)> {

constructor()

public "isHidden"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type): boolean
public "shouldScaleBoxWithOptionalScale"(): boolean
public "getRightClickTitleBackgroundColor"(arg0: $Entity$Type): integer
public "isInteractable"(arg0: $MinimapElementRenderLocation$Type, arg1: $Entity$Type): boolean
public "getInteractionBoxLeft"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getInteractionBoxRight"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getInteractionBoxTop"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getInteractionBoxBottom"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getRenderBoxLeft"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getRenderBoxRight"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getRenderBoxTop"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getRenderBoxBottom"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): integer
public "getLeftSideLength"(arg0: $Entity$Type, arg1: $Minecraft$Type): integer
public "getMenuName"(arg0: $Entity$Type): string
public "getFilterName"(arg0: $Entity$Type): string
public "getMenuTextFillLeftPadding"(arg0: $Entity$Type): integer
public "getBoxScale"(arg0: $MinimapElementRenderLocation$Type, arg1: $Entity$Type, arg2: $RadarRenderContext$Type): float
public "getRenderX"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): double
public "getRenderZ"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): double
public "getRenderY"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type, arg2: float): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarElementReader$Type = ($RadarElementReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarElementReader_ = $RadarElementReader$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig" {
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"

export class $RadarIconModelConfig {
 "baseScale": float
 "rotationY": float
 "rotationX": float
 "rotationZ": float
 "offsetX": float
 "offsetY": float
 "modelPartsRotationReset": boolean
 "renderingFullModel": boolean
 "modelMainPartFieldAliases": $ArrayList<(string)>
 "modelPartsFields": $ArrayList<(string)>
 "modelRootPath": $ArrayList<($ArrayList<(string)>)>
 "layersAllowed": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconModelConfig$Type = ($RadarIconModelConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconModelConfig_ = $RadarIconModelConfig$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer" {
import {$WaypointMapRenderer, $WaypointMapRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

/**
 * 
 * @deprecated
 */
export class $WaypointsGuiRenderer extends $WaypointMapRenderer {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsGuiRenderer$Type = ($WaypointsGuiRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsGuiRenderer_ = $WaypointsGuiRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer" {
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PlayerTrackerMinimapElementCollector, $PlayerTrackerMinimapElementCollector$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementCollector"
import {$PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerTrackerMinimapElementRenderContext, $PlayerTrackerMinimapElementRenderContext$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderContext"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $PlayerTrackerMinimapElementRenderer extends $MinimapElementRenderer<($PlayerTrackerMinimapElement<(any)>), ($PlayerTrackerMinimapElementRenderContext)> {


public "getOrder"(): integer
public "renderElement"(arg0: $PlayerTrackerMinimapElement$Type<(any)>, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "getPlayerSkin"(arg0: $Player$Type, arg1: $PlayerInfo$Type): $ResourceLocation
public "getCollector"(): $PlayerTrackerMinimapElementCollector
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
get "order"(): integer
get "collector"(): $PlayerTrackerMinimapElementCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderer$Type = ($PlayerTrackerMinimapElementRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementRenderer_ = $PlayerTrackerMinimapElementRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/hud/minimap/info/$InfoDisplay"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $InfoDisplayCompiler {

constructor()

public "compile"<T>(arg0: $InfoDisplay$Type<(T)>, arg1: $MinimapSession$Type, arg2: integer, arg3: $BlockPos$Type): $List<($Component)>
public "addLine"(arg0: $Component$Type): void
public "addLine"(arg0: string): void
public "addWords"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayCompiler$Type = ($InfoDisplayCompiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayCompiler_ = $InfoDisplayCompiler$Type;
}}
declare module "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export class $InfoDisplayStateCodec<T> {

constructor(arg0: $Function$Type<(string), (T)>, arg1: $Function$Type<(T), (string)>)

public "decode"(arg0: string): T
public "encode"(arg0: T): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayStateCodec$Type<T> = ($InfoDisplayStateCodec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayStateCodec_<T> = $InfoDisplayStateCodec$Type<(T)>;
}}
declare module "packages/xaero/hud/render/module/$ModuleRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleRenderContext {
 "x": integer
 "y": integer
 "w": integer
 "h": integer
 "flippedVertically": boolean
 "flippedHorizontally": boolean
readonly "screenWidth": integer
readonly "screenHeight": integer
readonly "screenScale": double

constructor(arg0: integer, arg1: integer, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleRenderContext$Type = ($ModuleRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleRenderContext_ = $ModuleRenderContext$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementReader" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $MinimapElementReader<E, RC> {

constructor()

public "isHidden"(arg0: E, arg1: RC): boolean
public "shouldScalePartialCoordinates"(arg0: E, arg1: RC, arg2: $MinimapElementRenderInfo$Type): boolean
public "shouldScaleBoxWithOptionalScale"(): boolean
public "isAlwaysHighlightedWhenHovered"(arg0: E, arg1: RC): boolean
public "getRightClickTitleBackgroundColor"(arg0: E): integer
public "isInteractable"(arg0: $MinimapElementRenderLocation$Type, arg1: E): boolean
public "getCoordinateScale"(arg0: E, arg1: RC, arg2: $MinimapElementRenderInfo$Type): double
public "getInteractionBoxLeft"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxRight"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxTop"(arg0: E, arg1: RC, arg2: float): integer
public "getInteractionBoxBottom"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxLeft"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxRight"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxTop"(arg0: E, arg1: RC, arg2: float): integer
public "getRenderBoxBottom"(arg0: E, arg1: RC, arg2: float): integer
public "getLeftSideLength"(arg0: E, arg1: $Minecraft$Type): integer
public "getMenuName"(arg0: E): string
public "getFilterName"(arg0: E): string
public "getMenuTextFillLeftPadding"(arg0: E): integer
public "getBoxScale"(arg0: $MinimapElementRenderLocation$Type, arg1: E, arg2: RC): float
public "getRenderX"(arg0: E, arg1: RC, arg2: float): double
public "getRenderZ"(arg0: E, arg1: RC, arg2: float): double
public "getRenderY"(arg0: E, arg1: RC, arg2: float): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementReader$Type<E, RC> = ($MinimapElementReader<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementReader_<E, RC> = $MinimapElementReader$Type<(E), (RC)>;
}}
declare module "packages/xaero/hud/event/$HudEventHandler" {
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"

export class $HudEventHandler {

constructor()

public "handleRenderGameOverlayEventPost"(): void
public "setHud"(arg0: $Hud$Type): void
set "hud"(value: $Hud$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudEventHandler$Type = ($HudEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudEventHandler_ = $HudEventHandler$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapElementRenderLocation {
static readonly "UNKNOWN": $MinimapElementRenderLocation
static readonly "IN_MINIMAP": $MinimapElementRenderLocation
static readonly "OVER_MINIMAP": $MinimapElementRenderLocation
static readonly "IN_WORLD": $MinimapElementRenderLocation
static readonly "WORLD_MAP": $MinimapElementRenderLocation
static readonly "WORLD_MAP_MENU": $MinimapElementRenderLocation
/**
 * 
 * @deprecated
 */
static readonly "IN_GAME": $MinimapElementRenderLocation

constructor()

public static "fromIndex"(arg0: integer): $MinimapElementRenderLocation
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderLocation$Type = ($MinimapElementRenderLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderLocation_ = $MinimapElementRenderLocation$Type;
}}
declare module "packages/xaero/hud/minimap/world/state/$MinimapWorldStateUpdater" {
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$MinimapWorldState, $MinimapWorldState$Type} from "packages/xaero/hud/minimap/world/state/$MinimapWorldState"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MinimapWorldStateUpdater {
static readonly "ROOT_CONTAINER_FORMAT": integer

constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type, arg2: $ClientPacketListener$Type)

public "update"(): void
/**
 * 
 * @deprecated
 */
public "update"(arg0: $MinimapSession$Type): void
public "init"(): void
public "setCurrentWorldSpawn"(arg0: $BlockPos$Type): void
public "wrapOperation$bon000$xaeroplus$preferOverworldWpSetCustomPathOnDimUpdate$mixinextras$bridge$18"(instance: $MinimapWorldState$Type, autoWorldPath: $XaeroPath$Type, original: $Operation$Type<(any)>, oldAutoWorldPath: $LocalRef$Type<(any)>, potentialAutoWorldNode: $LocalRef$Type<(any)>): void
public "handler$bon000$xaeroplus$customDataFolderResolve"(version: integer, cir: $CallbackInfoReturnable$Type<(any)>): void
public "onServerLevelId"(arg0: integer): void
public "getAutoRootContainerPath"(arg0: integer): $XaeroPath
/**
 * 
 * @deprecated
 */
public "getAutoRootContainerPath"(arg0: integer, arg1: $ClientPacketListener$Type, arg2: $MinimapSession$Type): $XaeroPath
public "ignoreContainerCase"(arg0: $XaeroPath$Type, arg1: $XaeroPath$Type): $XaeroPath
/**
 * 
 * @deprecated
 */
public "ignoreContainerCase"(arg0: $XaeroPath$Type, arg1: $XaeroPath$Type, arg2: $MinimapSession$Type): $XaeroPath
public "getPotentialWorldNode"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: boolean): string
/**
 * 
 * @deprecated
 */
public "getPotentialWorldNode"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: boolean, arg2: $MinimapSession$Type): string
public "getPotentialContainerPath"(): $XaeroPath
/**
 * 
 * @deprecated
 */
public "getPotentialContainerPath"(arg0: $MinimapSession$Type): $XaeroPath
public "hasServerLevelId"(arg0: $MinimapWorldRootContainer$Type): boolean
public "getAutoWorldNodeBase"(arg0: $MinimapWorldRootContainer$Type): any
public "wrapOperation$bon000$xaeroplus$preferOverworldWpSetCustomPathOnDimUpdate"(instance: $MinimapWorldState$Type, autoWorldPath: $XaeroPath$Type, original: $Operation$Type<(any)>, oldAutoWorldPath: $XaeroPath$Type, potentialAutoWorldNode: string): void
set "currentWorldSpawn"(value: $BlockPos$Type)
get "potentialContainerPath"(): $XaeroPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldStateUpdater$Type = ($MinimapWorldStateUpdater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldStateUpdater_ = $MinimapWorldStateUpdater$Type;
}}
declare module "packages/xaero/hud/category/ui/setting/$EditorSettingType$SettingNodeBuilderFactory" {
import {$IEditorSettingNodeBuilder, $IEditorSettingNodeBuilder$Type} from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNodeBuilder"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export interface $EditorSettingType$SettingNodeBuilderFactory {

 "apply"<V>(arg0: $ListFactory$Type): $IEditorSettingNodeBuilder<(V), (any)>

(arg0: $ListFactory$Type): $IEditorSettingNodeBuilder<(V), (any)>
}

export namespace $EditorSettingType$SettingNodeBuilderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSettingType$SettingNodeBuilderFactory$Type = ($EditorSettingType$SettingNodeBuilderFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSettingType$SettingNodeBuilderFactory_ = $EditorSettingType$SettingNodeBuilderFactory$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier" {
import {$EditorOptionsNode, $EditorOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"

export interface $EditorOptionsNode$IOptionsNodeIsActiveSupplier {

 "get"(arg0: $EditorNode$Type, arg1: $EditorOptionsNode$Type<(any)>): boolean

(arg0: $EditorNode$Type, arg1: $EditorOptionsNode$Type<(any)>): boolean
}

export namespace $EditorOptionsNode$IOptionsNodeIsActiveSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type = ($EditorOptionsNode$IOptionsNodeIsActiveSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorOptionsNode$IOptionsNodeIsActiveSupplier_ = $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type;
}}
declare module "packages/xaero/hud/minimap/world/state/$MinimapWorldState" {
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"

export class $MinimapWorldState {

constructor()

public "setOutdatedAutoRootContainerPath"(arg0: integer, arg1: $XaeroPath$Type): void
public "getOutdatedAutoRootContainerPath"(arg0: integer): $XaeroPath
public "getAutoContainerPathIgnoreCaseCache"(): $XaeroPath
public "setAutoContainerPathIgnoreCaseCache"(arg0: $XaeroPath$Type): void
public "setCustomWorldPath"(arg0: $XaeroPath$Type): void
public "getCurrentWorldPath"(): $XaeroPath
public "getCurrentWorldPath"(arg0: $XaeroPath$Type): $XaeroPath
public "getAutoWorldPath"(): $XaeroPath
public "getCurrentRootContainerPath"(): $XaeroPath
public "getAutoRootContainerPath"(): $XaeroPath
public "getCurrentContainerPath"(): $XaeroPath
public "getCustomContainerPath"(): $XaeroPath
public "getCustomWorldPath"(): $XaeroPath
public "setAutoRootContainerPath"(arg0: $XaeroPath$Type): void
public "setAutoWorldPath"(arg0: $XaeroPath$Type): void
get "autoContainerPathIgnoreCaseCache"(): $XaeroPath
set "autoContainerPathIgnoreCaseCache"(value: $XaeroPath$Type)
set "customWorldPath"(value: $XaeroPath$Type)
get "currentWorldPath"(): $XaeroPath
get "autoWorldPath"(): $XaeroPath
get "currentRootContainerPath"(): $XaeroPath
get "autoRootContainerPath"(): $XaeroPath
get "currentContainerPath"(): $XaeroPath
get "customContainerPath"(): $XaeroPath
get "customWorldPath"(): $XaeroPath
set "autoRootContainerPath"(value: $XaeroPath$Type)
set "autoWorldPath"(value: $XaeroPath$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldState$Type = ($MinimapWorldState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldState_ = $MinimapWorldState$Type;
}}
declare module "packages/xaero/hud/preset/$HudPreset" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HudPreset {


public "getName"(): $Component
public "apply"(): void
public "getId"(): $ResourceLocation
public "cancel"(): void
public "applyAndConfirm"(): void
public "confirm"(): void
get "name"(): $Component
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudPreset$Type = ($HudPreset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudPreset_ = $HudPreset$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $WaypointMapRenderer extends $MinimapElementRenderer<($Waypoint), ($WaypointMapRenderContext)> {


public "getOrder"(): integer
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $WaypointsManager$Type, arg1: $GuiGraphics$Type, arg2: $Window$Type): void
public "drawSetChange"(arg0: $MinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $Window$Type): void
public "renderElement"(arg0: $Waypoint$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
/**
 * 
 * @deprecated
 */
public "updateWaypointCollection"(): void
public "drawIconOnGUI"(arg0: $GuiGraphics$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: integer, arg4: integer, arg5: integer, arg6: $MultiBufferSource$BufferSource$Type, arg7: $VertexConsumer$Type, arg8: $VertexConsumer$Type): void
/**
 * 
 * @deprecated
 */
public "drawIconOnGUI"(arg0: $GuiGraphics$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: integer, arg4: integer, arg5: $MultiBufferSource$BufferSource$Type, arg6: $VertexConsumer$Type, arg7: $VertexConsumer$Type): void
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
get "order"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointMapRenderer$Type = ($WaypointMapRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointMapRenderer_ = $WaypointMapRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/radar/state/$RadarStateUpdater" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import {$RadarState, $RadarState$Type} from "packages/xaero/hud/minimap/radar/state/$RadarState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarStateUpdater {

constructor(arg0: $EntityRadarCategoryManager$Type, arg1: $RadarState$Type)

public "update"(arg0: $ClientLevel$Type, arg1: $Entity$Type, arg2: $Player$Type): void
public "setLastRenderViewEntity"(arg0: $Entity$Type): void
set "lastRenderViewEntity"(value: $Entity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarStateUpdater$Type = ($RadarStateUpdater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarStateUpdater_ = $RadarStateUpdater$Type;
}}
declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$ObjectCategory$Builder, $ObjectCategory$Builder$Type} from "packages/xaero/hud/category/$ObjectCategory$Builder"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$EditorSettingsNode, $EditorSettingsNode$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$EditorCategoryNode, $EditorCategoryNode$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$EditorCategoryNode$Builder, $EditorCategoryNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder"
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/common/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"
import {$EditorSettingsNode$Builder, $EditorSettingsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $GuiCategoryEditor<C extends $ObjectCategory<(any), (C)>, ED extends $EditorCategoryNode<(C), (SD), (ED)>, CB extends $ObjectCategory$Builder<(C), (CB)>, SD extends $EditorSettingsNode<(any)>, SDB extends $EditorSettingsNode$Builder<(SD), (SDB)>, EDB extends $EditorCategoryNode$Builder<(C), (ED), (SD), (SDB), (EDB)>> extends $ScreenBase {
static readonly "ROW_HEIGHT": integer
static readonly "ROW_WIDTH": integer
 "parent": $Screen
 "escape": $Screen
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor


public "tick"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "init"(): void
public "getRowList"(): $GuiCategoryEditor$SettingRowList<>
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "rowList"(): $GuiCategoryEditor$SettingRowList<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryEditor$Type<C, ED, CB, SD, SDB, EDB> = ($GuiCategoryEditor<(C), (ED), (CB), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryEditor_<C, ED, CB, SD, SDB, EDB> = $GuiCategoryEditor$Type<(C), (ED), (CB), (SD), (SDB), (EDB)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType" {
import {$RadarIconForm, $RadarIconForm$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import {$IRadarIconFormReader, $IRadarIconFormReader$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$IRadarIconFormReader"
import {$XaeroIcon, $XaeroIcon$Type} from "packages/xaero/common/icon/$XaeroIcon"
import {$RadarIconDefinition, $RadarIconDefinition$Type} from "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition"
import {$IRadarIconFormPrerenderer, $IRadarIconFormPrerenderer$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RadarIconFormType {

constructor(arg0: string, arg1: $IRadarIconFormReader$Type, arg2: $IRadarIconFormPrerenderer$Type, arg3: $XaeroIcon$Type)

public "addTo"(arg0: $Map$Type<(string), ($RadarIconFormType$Type)>): $RadarIconFormType
public "getId"(): string
public "getFailureResult"(): $XaeroIcon
public "getPrerenderer"(): $IRadarIconFormPrerenderer
public "readForm"(arg0: $RadarIconDefinition$Type, arg1: (string)[]): $RadarIconForm
get "id"(): string
get "failureResult"(): $XaeroIcon
get "prerenderer"(): $IRadarIconFormPrerenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconFormType$Type = ($RadarIconFormType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconFormType_ = $RadarIconFormType$Type;
}}
declare module "packages/xaero/hud/controls/key/function/$KeyMappingFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyMappingFunction {


public "onPress"(): void
public "isHeld"(): boolean
public "onRelease"(): void
get "held"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingFunction$Type = ($KeyMappingFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingFunction_ = $KeyMappingFunction$Type;
}}
declare module "packages/xaero/hud/module/$ModuleTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleTransform {
 "x": integer
 "y": integer
 "centered": boolean
 "fromRight": boolean
 "fromBottom": boolean
 "flippedHor": boolean
 "flippedVer": boolean
 "fromOldSystem": boolean

constructor()

public "copy"(): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleTransform$Type = ($ModuleTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleTransform_ = $ModuleTransform$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder" {
import {$EditorNode$Builder, $EditorNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import {$EditorSimpleButtonNode$Builder, $EditorSimpleButtonNode$Builder$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$Builder"
import {$EditorTextFieldOptionsNode$Builder, $EditorTextFieldOptionsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode$Builder"
import {$EditorSettingsNode, $EditorSettingsNode$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"

export class $EditorSettingsNode$Builder<SD extends $EditorSettingsNode<(any)>, SDB extends $EditorSettingsNode$Builder<(SD), (SDB)>> extends $EditorNode$Builder<($EditorSettingsNode$Builder<(SD), (SDB)>)> {


public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): SDB
public "setProtection"(arg0: boolean): SDB
public "setRootSettings"(arg0: boolean): SDB
public "getDeleteButtonBuilder"(): $EditorSimpleButtonNode$Builder
public "getNameOptionBuilder"(): $EditorTextFieldOptionsNode$Builder
set "protection"(value: boolean)
set "rootSettings"(value: boolean)
get "deleteButtonBuilder"(): $EditorSimpleButtonNode$Builder
get "nameOptionBuilder"(): $EditorTextFieldOptionsNode$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSettingsNode$Builder$Type<SD, SDB> = ($EditorSettingsNode$Builder<(SD), (SDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSettingsNode$Builder_<SD, SDB> = $EditorSettingsNode$Builder$Type<(SD), (SDB)>;
}}
declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$Type} from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTrackerMinimapElement<P> {

constructor(arg0: P, arg1: $IRenderedPlayerTracker$Type<(P)>)

public "getDimension"(): $ResourceKey<($Level)>
public "getX"(): double
public "getY"(): double
public "wasRenderedOnRadar"(): boolean
public "getPlayerId"(): $UUID
public "getZ"(): double
public "setRenderedOnRadar"(arg0: boolean): void
public "getPlayer"(): P
get "dimension"(): $ResourceKey<($Level)>
get "x"(): double
get "y"(): double
get "playerId"(): $UUID
get "z"(): double
set "renderedOnRadar"(value: boolean)
get "player"(): P
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElement$Type<P> = ($PlayerTrackerMinimapElement<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElement_<P> = $PlayerTrackerMinimapElement$Type<(P)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$Builder" {
import {$EditorNode$Builder, $EditorNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import {$EditorOptionsNode$IOptionsNodeIsActiveSupplier, $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier"
import {$EditorOptionsNode, $EditorOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"

export class $EditorOptionsNode$Builder<V, B extends $EditorOptionsNode$Builder<(V), (B)>> extends $EditorNode$Builder<(B)> {


public "build"(): $EditorOptionsNode<(V)>
public "setDisplayName"(arg0: string): B
public "setCurrentValue"(arg0: V): B
public "setIsActiveSupplier"(arg0: $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type): B
set "displayName"(value: string)
set "currentValue"(value: V)
set "isActiveSupplier"(value: $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorOptionsNode$Builder$Type<V, B> = ($EditorOptionsNode$Builder<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorOptionsNode$Builder_<V, B> = $EditorOptionsNode$Builder$Type<(V), (B)>;
}}
declare module "packages/xaero/hud/category/rule/$ObjectCategoryIncludeList" {
import {$ObjectCategoryListRule, $ObjectCategoryListRule$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryListRule"

export class $ObjectCategoryIncludeList<E, P, S> extends $ObjectCategoryListRule<(E), (P), (S)> {


public "isFollowedBy"(arg0: E, arg1: P): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryIncludeList$Type<E, P, S> = ($ObjectCategoryIncludeList<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryIncludeList_<E, P, S> = $ObjectCategoryIncludeList$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/hud/category/rule/resolver/$ObjectCategoryRuleResolver" {
import {$FilterObjectCategory, $FilterObjectCategory$Type} from "packages/xaero/hud/category/$FilterObjectCategory"

export class $ObjectCategoryRuleResolver {


public "resolve"<E, P, C extends $FilterObjectCategory<(E), (P), (any), (C)>>(arg0: C, arg1: E, arg2: P): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryRuleResolver$Type = ($ObjectCategoryRuleResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryRuleResolver_ = $ObjectCategoryRuleResolver$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNodeBuilder" {
import {$EditorOptionsNode, $EditorOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import {$IEditorSettingNode, $IEditorSettingNode$Type} from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode"
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"

export interface $IEditorSettingNodeBuilder<V, SD extends ($EditorOptionsNode<(integer)>) & ($IEditorSettingNode<(V)>)> {

 "setSetting"(arg0: $ObjectCategorySetting$Type<(V)>): $IEditorSettingNodeBuilder<(V), (SD)>
 "build"(): SD
 "setSettingValue"(arg0: V): $IEditorSettingNodeBuilder<(V), (SD)>
 "setRootSettings"(arg0: boolean): $IEditorSettingNodeBuilder<(V), (SD)>
}

export namespace $IEditorSettingNodeBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditorSettingNodeBuilder$Type<V, SD> = ($IEditorSettingNodeBuilder<(V), (SD)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditorSettingNodeBuilder_<V, SD> = $IEditorSettingNodeBuilder$Type<(V), (SD)>;
}}
declare module "packages/xaero/hud/minimap/$Minimap" {
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapFBORenderer, $MinimapFBORenderer$Type} from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import {$InfoDisplayRenderer, $InfoDisplayRenderer$Type} from "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/common/minimap/info/$InfoDisplayManager"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$WaypointWorldRenderer, $WaypointWorldRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer"
import {$MinimapSafeModeRenderer, $MinimapSafeModeRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer"
import {$InfoDisplays, $InfoDisplays$Type} from "packages/xaero/hud/minimap/info/$InfoDisplays"
import {$MinimapElementWorldRendererHandler, $MinimapElementWorldRendererHandler$Type} from "packages/xaero/hud/minimap/element/render/world/$MinimapElementWorldRendererHandler"
import {$MinimapElementOverMapRendererHandler, $MinimapElementOverMapRendererHandler$Type} from "packages/xaero/hud/minimap/element/render/over/$MinimapElementOverMapRendererHandler"
import {$WaypointsIngameRenderer, $WaypointsIngameRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer"
import {$WaypointsGuiRenderer as $WaypointsGuiRenderer$0, $WaypointsGuiRenderer$Type as $WaypointsGuiRenderer$0$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"
import {$WaypointMapRenderer, $WaypointMapRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

export class $Minimap {

constructor(arg0: $HudMod$Type)

public "getCrashedWith"(): $Throwable
/**
 * 
 * @deprecated
 */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer$0
/**
 * 
 * @deprecated
 */
public "getWaypointGuiRenderer"(): $WaypointsGuiRenderer
public "getWaypointMapRenderer"(): $WaypointMapRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
public "getMinimapFBORenderer"(): $MinimapFBORenderer
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
public "getCompassRenderer"(): $CompassRenderer
/**
 * 
 * @deprecated
 */
public "getInfoDisplayRenderer"(): $InfoDisplayRenderer
/**
 * 
 * @deprecated
 */
public "getInfoDisplayManager"(): $InfoDisplayManager
public "checkCrashes"(): void
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
public "getWorldRendererHandler"(): $MinimapElementWorldRendererHandler
public "setCrashedWith"(arg0: $Throwable$Type): void
public "getInfoDisplays"(): $InfoDisplays
public "getWaypointWorldRenderer"(): $WaypointWorldRenderer
public "usingFBO"(): boolean
public "getModMain"(): $HudMod
get "crashedWith"(): $Throwable
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer$0
get "waypointGuiRenderer"(): $WaypointsGuiRenderer
get "waypointMapRenderer"(): $WaypointMapRenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "minimapFBORenderer"(): $MinimapFBORenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "compassRenderer"(): $CompassRenderer
get "infoDisplayRenderer"(): $InfoDisplayRenderer
get "infoDisplayManager"(): $InfoDisplayManager
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "worldRendererHandler"(): $MinimapElementWorldRendererHandler
set "crashedWith"(value: $Throwable$Type)
get "infoDisplays"(): $InfoDisplays
get "waypointWorldRenderer"(): $WaypointWorldRenderer
get "modMain"(): $HudMod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minimap$Type = ($Minimap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Minimap_ = $Minimap$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxHandler" {
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import {$PushboxManager, $PushboxManager$Type} from "packages/xaero/hud/pushbox/$PushboxManager"

export class $PushboxHandler {

constructor()

public "postUpdateAll"(arg0: $PushboxManager$Type): void
public "applyScreenEdges"(arg0: $PushboxHandler$State$Type, arg1: integer, arg2: integer, arg3: double): void
public "applyPushboxes"(arg0: $PushboxManager$Type, arg1: $PushboxHandler$State$Type, arg2: integer, arg3: integer, arg4: double): void
public "updateAll"(arg0: $PushboxManager$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$Type = ($PushboxHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxHandler_ = $PushboxHandler$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode$Builder" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"
import {$EditorExpandingOptionsNode$Builder, $EditorExpandingOptionsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode$Builder"

export class $EditorTextFieldOptionsNode$Builder extends $EditorExpandingOptionsNode$Builder<(string), ($EditorTextFieldOptionsNode$Builder)> {


public "setInput"(arg0: string): $EditorTextFieldOptionsNode$Builder
public static "begin"(arg0: $ListFactory$Type): $EditorTextFieldOptionsNode$Builder
public "setMaxLength"(arg0: integer): $EditorTextFieldOptionsNode$Builder
public "setCurrentValue"(arg0: string): $EditorTextFieldOptionsNode$Builder
public "setAllowCustomInput"(arg0: boolean): $EditorTextFieldOptionsNode$Builder
public "setAutoConfirm"(arg0: boolean): $EditorTextFieldOptionsNode$Builder
public "needsInputStringValidator"(): boolean
public "setInputStringValidator"(arg0: $Predicate$Type<(string)>): $EditorTextFieldOptionsNode$Builder
set "input"(value: string)
set "maxLength"(value: integer)
set "currentValue"(value: string)
set "allowCustomInput"(value: boolean)
set "autoConfirm"(value: boolean)
set "inputStringValidator"(value: $Predicate$Type<(string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorTextFieldOptionsNode$Builder$Type = ($EditorTextFieldOptionsNode$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorTextFieldOptionsNode$Builder_ = $EditorTextFieldOptionsNode$Builder$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorSettingsNode" {
import {$IEditorSettingNode, $IEditorSettingNode$Type} from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode"
import {$EditorOptionsNode, $EditorOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorTextFieldOptionsNode, $EditorTextFieldOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EditorSettingsNode<SETTING_DATA extends ($EditorOptionsNode<(any)>) & ($IEditorSettingNode<(any)>)> extends $EditorNode {


public "getSettings"(): $Map<($ObjectCategorySetting<(any)>), (SETTING_DATA)>
public "getDisplayName"(): string
public "setProtected"(arg0: boolean): void
public "getProtection"(): boolean
public "getNameOption"(): $EditorTextFieldOptionsNode
public "isToBeDeleted"(): boolean
public "getSubNodes"(): $List<($EditorNode)>
public "isRootSettings"(): boolean
public "getSettingData"(arg0: $ObjectCategorySetting$Type<(any)>): $IEditorSettingNode<(any)>
public "setToBeDeleted"(): void
get "settings"(): $Map<($ObjectCategorySetting<(any)>), (SETTING_DATA)>
get "displayName"(): string
set "protected"(value: boolean)
get "protection"(): boolean
get "nameOption"(): $EditorTextFieldOptionsNode
get "toBeDeleted"(): boolean
get "subNodes"(): $List<($EditorNode)>
get "rootSettings"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSettingsNode$Type<SETTING_DATA> = ($EditorSettingsNode<(SETTING_DATA)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSettingsNode_<SETTING_DATA> = $EditorSettingsNode$Type<(SETTING_DATA)>;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $WaypointDeleter {

constructor(arg0: $IXaeroMinimap$Type)

public "add"(arg0: $Waypoint$Type): void
public "begin"(): void
public "deleteCollected"(arg0: $MinimapSession$Type, arg1: $MinimapWorld$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointDeleter$Type = ($WaypointDeleter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointDeleter_ = $WaypointDeleter$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/over/$MinimapElementOverMapRendererHandler" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MinimapElementRendererHandler, $MinimapElementRendererHandler$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler"

export class $MinimapElementOverMapRendererHandler extends $MinimapElementRendererHandler {


public "prepareRender"(arg0: double, arg1: double, arg2: double, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: float): void
public static "translatePosition"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: boolean, arg11: (double)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementOverMapRendererHandler$Type = ($MinimapElementOverMapRendererHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementOverMapRendererHandler_ = $MinimapElementOverMapRendererHandler$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxHandler$State" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"

export class $PushboxHandler$State {
 "x": integer
 "y": integer
 "w": integer
 "h": integer

constructor()

public "resetForModule"(arg0: $ModuleSession$Type<(any)>, arg1: integer, arg2: integer, arg3: double): $PushboxHandler$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxHandler$State$Type = ($PushboxHandler$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxHandler$State_ = $PushboxHandler$State$Type;
}}
declare module "packages/xaero/hud/controls/$ControlsRegister" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$KeyMappingControllerManager, $KeyMappingControllerManager$Type} from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"

export class $ControlsRegister {


public "registerKeybindings"(arg0: $Consumer$Type<($KeyMapping$Type)>): void
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "onStage2"(): void
get "keyMappingControllers"(): $KeyMappingControllerManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsRegister$Type = ($ControlsRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsRegister_ = $ControlsRegister$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EntityRadarBackwardsCompatibilityConfig {
 "entityAmount": integer
 "showPlayers": boolean
 "showHostile": boolean
 "showMobs": boolean
 "showItems": boolean
 "showOther": boolean
 "showOtherTeam": boolean
 "showTamed": boolean
 "playersColor": integer
 "mobsColor": integer
 "hostileColor": integer
 "itemsColor": integer
 "otherColor": integer
 "otherTeamColor": integer
 "tamedMobsColor": integer
 "dotsSize": integer
 "headsScale": double
 "showEntityHeight": boolean
 "playerIcons": integer
 "mobIcons": integer
 "hostileIcons": integer
 "tamedIcons": integer
 "heightLimit": integer
 "playerNames": integer
 "otherTeamsNames": integer
 "friendlyMobNames": integer
 "hostileMobNames": integer
 "itemNames": integer
 "otherNames": integer
 "tamedMobNames": integer
 "alwaysEntityNametags": boolean
 "itemFramesOnRadar": boolean
 "displayNameWhenIconFails": boolean

constructor()

public "readSetting"(arg0: (string)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarBackwardsCompatibilityConfig$Type = ($EntityRadarBackwardsCompatibilityConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarBackwardsCompatibilityConfig_ = $EntityRadarBackwardsCompatibilityConfig$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$TemporaryWaypointHandler" {
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"

export class $TemporaryWaypointHandler {

constructor(arg0: $HudMod$Type)

public "createTemporaryWaypoint"(arg0: $MinimapWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: double): void
public "createTemporaryWaypoint"(arg0: $MinimapWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "createTemporaryWaypoint"(arg0: $MinimapWorld$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporaryWaypointHandler$Type = ($TemporaryWaypointHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporaryWaypointHandler_ = $TemporaryWaypointHandler$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderProvider" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$AbstractWaypointRenderProvider, $AbstractWaypointRenderProvider$Type} from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

export class $WaypointMapRenderProvider extends $AbstractWaypointRenderProvider<($WaypointMapRenderContext)> {
readonly "filter": $Predicate<($Waypoint)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointMapRenderProvider$Type = ($WaypointMapRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointMapRenderProvider_ = $WaypointMapRenderProvider$Type;
}}
declare module "packages/xaero/hud/minimap/world/io/$MinimapWorldManagerIO" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$RootConfigIO, $RootConfigIO$Type} from "packages/xaero/hud/minimap/world/container/config/io/$RootConfigIO"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$MinimapWorldContainer, $MinimapWorldContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"

export class $MinimapWorldManagerIO {

constructor(arg0: $HudMod$Type)

public "convertWorldDimFoldersToSingleFolder"(arg0: $MinimapSession$Type): void
public "convertWorldDimFilesToFolders"(): void
public "loadWorldsFromAllSources"(arg0: $MinimapSession$Type, arg1: $ClientPacketListener$Type): void
public "getWorldFile"(arg0: $MinimapWorld$Type): $Path
public "getRootConfigIO"(): $RootConfigIO
public "saveAllWorlds"(arg0: $MinimapSession$Type): void
public "onRootContainerAdded"(arg0: $MinimapWorldRootContainer$Type): void
public "loadAllWorlds"(arg0: $MinimapSession$Type): void
public static "copyTempFilesBack"(arg0: $Path$Type): void
public "loadWorldFile"(arg0: $MinimapWorldContainer$Type, arg1: string, arg2: $Path$Type): boolean
public "checkWorldFileLine"(arg0: (string)[], arg1: $MinimapWorld$Type): boolean
public "loadWorld"(arg0: $MinimapWorld$Type, arg1: $Path$Type): void
public "saveWorld"(arg0: $MinimapWorld$Type): void
public "saveWorld"(arg0: $MinimapWorld$Type, arg1: boolean): void
public "saveWorlds"(arg0: $MinimapWorldContainer$Type): void
get "rootConfigIO"(): $RootConfigIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldManagerIO$Type = ($MinimapWorldManagerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldManagerIO_ = $MinimapWorldManagerIO$Type;
}}
declare module "packages/xaero/hud/$HudSession" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$ControlsHandler, $ControlsHandler$Type} from "packages/xaero/common/controls/$ControlsHandler"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$KeyMappingTickHandler, $KeyMappingTickHandler$Type} from "packages/xaero/hud/controls/key/$KeyMappingTickHandler"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $HudSession {

constructor(arg0: $HudMod$Type)

public "init"(arg0: $ClientPacketListener$Type): void
public "getSession"<MS extends $ModuleSession<(MS)>>(arg0: $HudModule$Type<(MS)>): MS
/**
 * 
 * @deprecated
 */
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public static "getCurrentSession"(): $HudSession
public static "getForPlayer"(arg0: $LocalPlayer$Type): $HudSession
/**
 * 
 * @deprecated
 */
public "getControls"(): $ControlsHandler
public "getKeyMappingTickHandler"(): $KeyMappingTickHandler
public "tryCleanup"(): void
public "getHudMod"(): $HudMod
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "currentSession"(): $HudSession
get "controls"(): $ControlsHandler
get "keyMappingTickHandler"(): $KeyMappingTickHandler
get "hudMod"(): $HudMod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudSession$Type = ($HudSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudSession_ = $HudSession$Type;
}}
declare module "packages/xaero/hud/minimap/info/widget/$InfoDisplayWidgetFactory" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/hud/minimap/info/$InfoDisplay"

export interface $InfoDisplayWidgetFactory<T> {

 "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>): $AbstractWidget

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>): $AbstractWidget
}

export namespace $InfoDisplayWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayWidgetFactory$Type<T> = ($InfoDisplayWidgetFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayWidgetFactory_<T> = $InfoDisplayWidgetFactory$Type<(T)>;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderReader" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

export class $WaypointMapRenderReader extends $MinimapElementReader<($Waypoint), ($WaypointMapRenderContext)> {

constructor()

public "isHidden"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type): boolean
public "shouldScalePartialCoordinates"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: $MinimapElementRenderInfo$Type): boolean
public "shouldScaleBoxWithOptionalScale"(): boolean
public "getRightClickTitleBackgroundColor"(arg0: $Waypoint$Type): integer
public "getCoordinateScale"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: $MinimapElementRenderInfo$Type): double
public "getInteractionBoxLeft"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getInteractionBoxRight"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getInteractionBoxTop"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getInteractionBoxBottom"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getRenderBoxLeft"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getRenderBoxRight"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getRenderBoxTop"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getRenderBoxBottom"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): integer
public "getLeftSideLength"(arg0: $Waypoint$Type, arg1: $Minecraft$Type): integer
public "getMenuName"(arg0: $Waypoint$Type): string
public "getFilterName"(arg0: $Waypoint$Type): string
public "getMenuTextFillLeftPadding"(arg0: $Waypoint$Type): integer
public "getRenderX"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): double
public "getRenderZ"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): double
public "getRenderY"(arg0: $Waypoint$Type, arg1: $WaypointMapRenderContext$Type, arg2: float): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointMapRenderReader$Type = ($WaypointMapRenderReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointMapRenderReader_ = $WaypointMapRenderReader$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorNode$Builder" {
import {$IEditorDataTooltipSupplier, $IEditorDataTooltipSupplier$Type} from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorListRootEntryFactory, $EditorListRootEntryFactory$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"

export class $EditorNode$Builder<B extends $EditorNode$Builder<(B)>> {


public "build"(): $EditorNode
public "setDefault"(): B
public "setListEntryFactory"(arg0: $EditorListRootEntryFactory$Type): B
public "setTooltipSupplier"(arg0: $IEditorDataTooltipSupplier$Type): B
public "setMovable"(arg0: boolean): B
set "listEntryFactory"(value: $EditorListRootEntryFactory$Type)
set "tooltipSupplier"(value: $IEditorDataTooltipSupplier$Type)
set "movable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorNode$Builder$Type<B> = ($EditorNode$Builder<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorNode$Builder_<B> = $EditorNode$Builder$Type<(B)>;
}}
declare module "packages/xaero/hud/category/ui/entry/widget/$EditorTextField$UpdatedValueConsumer" {
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorTextField$UpdatedValueConsumer {

 "accept"(arg0: string, arg1: integer, arg2: integer, arg3: $GuiCategoryEditor$SettingRowList$Type<>): void

(arg0: string, arg1: integer, arg2: integer, arg3: $GuiCategoryEditor$SettingRowList$Type<>): void
}

export namespace $EditorTextField$UpdatedValueConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorTextField$UpdatedValueConsumer$Type = ($EditorTextField$UpdatedValueConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorTextField$UpdatedValueConsumer_ = $EditorTextField$UpdatedValueConsumer$Type;
}}
declare module "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export interface $IEditorDataTooltipSupplier extends $BiFunction<($EditorNode), ($EditorNode), ($Supplier<($CursorBox)>)> {

 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $BiFunction<($EditorNode), ($EditorNode), (V)>
 "apply"(arg0: $EditorNode$Type, arg1: $EditorNode$Type): $Supplier<($CursorBox)>

(arg0: $Function$Type<(any), (any)>): $BiFunction<($EditorNode), ($EditorNode), (V)>
}

export namespace $IEditorDataTooltipSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditorDataTooltipSupplier$Type = ($IEditorDataTooltipSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditorDataTooltipSupplier_ = $IEditorDataTooltipSupplier$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier" {
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorSimpleButtonNode, $EditorSimpleButtonNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"

export interface $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier {

 "get"(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): boolean

(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): boolean
}

export namespace $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$Type = ($EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier_ = $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$Type;
}}
declare module "packages/xaero/hud/io/$HudIO" {
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $HudIO {
static readonly "SEPARATOR": string
static readonly "MODULE_LINE_PREFIX": string


public "load"(arg0: string): boolean
public "save"(arg0: $PrintWriter$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudIO$Type = ($HudIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudIO_ = $HudIO$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"

export interface $IEditorSettingNode<V> {

 "getSettingValue"(): V
 "isRootSettings"(): boolean
 "getSetting"(): $ObjectCategorySetting<(V)>
}

export namespace $IEditorSettingNode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditorSettingNode$Type<V> = ($IEditorSettingNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditorSettingNode_<V> = $IEditorSettingNode$Type<(V)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonMessageSupplier" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorSimpleButtonNode, $EditorSimpleButtonNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"

export interface $EditorSimpleButtonNode$ISimpleButtonMessageSupplier {

 "get"(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): $Supplier<(string)>

(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type): $Supplier<(string)>
}

export namespace $EditorSimpleButtonNode$ISimpleButtonMessageSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$Type = ($EditorSimpleButtonNode$ISimpleButtonMessageSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSimpleButtonNode$ISimpleButtonMessageSupplier_ = $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$Type;
}}
declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer" {
import {$RadarRenderContext, $RadarRenderContext$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$LocalFloatRef, $LocalFloatRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalFloatRef"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarRenderer extends $MinimapElementRenderer<($Entity), ($RadarRenderContext)> {


public "handler$bpc000$xaeroplus$forceEntityRadarRenderSettings"(e: $Entity$Type, ci: $CallbackInfo$Type): void
public "renderElement"(arg0: $Entity$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
public "renderSingleEntity"(arg0: $Entity$Type, arg1: boolean, arg2: boolean, arg3: float, arg4: boolean, arg5: boolean, arg6: $MinimapElementRenderLocation$Type, arg7: $RenderTarget$Type, arg8: $GuiGraphics$Type): void
public "handler$bpc000$xaeroplus$adjustElementScaleForMinimapScaling"(cir: $CallbackInfoReturnable$Type<(any)>, renderInfoRef: $LocalRef$Type<(any)>, optionalScaleRef: $LocalFloatRef$Type): void
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarRenderer$Type = ($RadarRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarRenderer_ = $RadarRenderer$Type;
}}
declare module "packages/xaero/hud/category/serialization/data/$ObjectCategoryData" {
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ObjectCategoryData<D extends $ObjectCategoryData<(D)>> {


public "getName"(): string
public "getProtection"(): boolean
public "getSettingOverrideIterator"(): $Iterator<($Map$Entry<(string), (any)>)>
public "getSubCategoryIterator"(): $Iterator<(D)>
get "name"(): string
get "protection"(): boolean
get "settingOverrideIterator"(): $Iterator<($Map$Entry<(string), (any)>)>
get "subCategoryIterator"(): $Iterator<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryData$Type<D> = ($ObjectCategoryData<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryData_<D> = $ObjectCategoryData$Type<(D)>;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointSession" {
import {$DestinationHandler, $DestinationHandler$Type} from "packages/xaero/hud/minimap/waypoint/$DestinationHandler"
import {$TemporaryWaypointHandler, $TemporaryWaypointHandler$Type} from "packages/xaero/hud/minimap/waypoint/$TemporaryWaypointHandler"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$WaypointDeleter, $WaypointDeleter$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$WaypointSharingHandler, $WaypointSharingHandler$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler"
import {$WaypointTeleport, $WaypointTeleport$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointTeleport"
import {$DeathpointHandler, $DeathpointHandler$Type} from "packages/xaero/hud/minimap/waypoint/$DeathpointHandler"
import {$WaypointCollector, $WaypointCollector$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointCollector"

export class $WaypointSession {

constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type)

public "getSession"(): $MinimapSession
public "getTemporaryHandler"(): $TemporaryWaypointHandler
public "setSetChangedTime"(arg0: long): void
public "getDeathpointHandler"(): $DeathpointHandler
public "getCollector"(): $WaypointCollector
public "getTeleport"(): $WaypointTeleport
public "getDestinationHandler"(): $DestinationHandler
public "getSetChangedTime"(): long
public "getMc"(): $Minecraft
public "getSharing"(): $WaypointSharingHandler
public "getDeleter"(): $WaypointDeleter
get "session"(): $MinimapSession
get "temporaryHandler"(): $TemporaryWaypointHandler
set "setChangedTime"(value: long)
get "deathpointHandler"(): $DeathpointHandler
get "collector"(): $WaypointCollector
get "teleport"(): $WaypointTeleport
get "destinationHandler"(): $DestinationHandler
get "setChangedTime"(): long
get "mc"(): $Minecraft
get "sharing"(): $WaypointSharingHandler
get "deleter"(): $WaypointDeleter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSession$Type = ($WaypointSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointSession_ = $WaypointSession$Type;
}}
declare module "packages/xaero/hud/minimap/world/$MinimapWorldManager" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$MinimapWorldContainer, $MinimapWorldContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $MinimapWorldManager {

constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type)

public "getCurrentWorld"(): $MinimapWorld
public "getCurrentWorld"(arg0: $XaeroPath$Type): $MinimapWorld
public "getRootWorldContainer"(arg0: string): $MinimapWorldRootContainer
public "getRootWorldContainer"(arg0: $XaeroPath$Type): $MinimapWorldRootContainer
public "getAutoWorld"(): $MinimapWorld
public "getWorldContainerNullable"(arg0: $XaeroPath$Type): $MinimapWorldContainer
public "getWorldContainer"(arg0: $XaeroPath$Type): $MinimapWorldContainer
public "addWorldContainer"(arg0: $XaeroPath$Type): $MinimapWorldContainer
public "removeContainer"(arg0: $XaeroPath$Type): boolean
public "containerExists"(arg0: $XaeroPath$Type): boolean
/**
 * 
 * @deprecated
 */
public "getRootContainersDirect"(): $HashMap<(string), ($MinimapWorldRootContainer)>
public "getCustomWaypoints"(arg0: $ResourceLocation$Type): $Int2ObjectMap<($Waypoint)>
public "getCustomWaypoints"(): $Iterable<($Waypoint)>
public "getAutoRootContainer"(): $MinimapWorldRootContainer
public "addRootWorldContainer"(arg0: $MinimapWorldRootContainer$Type): void
public "getRootContainers"(): $Iterable<($MinimapWorldRootContainer)>
public "getCurrentRootContainer"(): $MinimapWorldRootContainer
public "hasCustomWaypoints"(): boolean
public "getWorld"(arg0: $XaeroPath$Type): $MinimapWorld
public "addWorld"(arg0: $XaeroPath$Type): $MinimapWorld
get "currentWorld"(): $MinimapWorld
get "autoWorld"(): $MinimapWorld
get "rootContainersDirect"(): $HashMap<(string), ($MinimapWorldRootContainer)>
get "customWaypoints"(): $Iterable<($Waypoint)>
get "autoRootContainer"(): $MinimapWorldRootContainer
get "rootContainers"(): $Iterable<($MinimapWorldRootContainer)>
get "currentRootContainer"(): $MinimapWorldRootContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldManager$Type = ($MinimapWorldManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldManager_ = $MinimapWorldManager$Type;
}}
declare module "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData" {
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/hud/category/rule/$ExcludeListMode"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ObjectCategoryData, $ObjectCategoryData$Type} from "packages/xaero/hud/category/serialization/data/$ObjectCategoryData"

export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<(D)>> extends $ObjectCategoryData<(D)> {


public "getIncludeListInSuperCategory"(): boolean
public "getExcludeMode"(): $ExcludeListMode
public "getIncludeListIterator"(): $Iterator<(string)>
public "getExcludeListIterator"(): $Iterator<(string)>
public "getHardInclude"(): string
get "includeListInSuperCategory"(): boolean
get "excludeMode"(): $ExcludeListMode
get "includeListIterator"(): $Iterator<(string)>
get "excludeListIterator"(): $Iterator<(string)>
get "hardInclude"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterObjectCategoryData$Type<D> = ($FilterObjectCategoryData<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterObjectCategoryData_<D> = $FilterObjectCategoryData$Type<(D)>;
}}
declare module "packages/xaero/hud/module/$ModuleSession" {
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $ModuleSession<MS extends $ModuleSession<(MS)>> {

constructor(arg0: $HudMod$Type, arg1: $HudModule$Type<(MS)>)

public "getWidth"(arg0: double): integer
public "getHeight"(arg0: double): integer
public "getModule"(): $HudModule<(MS)>
public "close"(): void
public "isActive"(): boolean
public "getEffectiveX"(arg0: integer, arg1: double): integer
public "getEffectiveY"(arg0: integer, arg1: double): integer
public "isFlippedHor"(): boolean
public "isFlippedVer"(): boolean
public "shouldFlipHorizontally"(arg0: integer, arg1: double): boolean
public "shouldFlipVertically"(arg0: integer, arg1: double): boolean
public "prePotentialRender"(): void
public "onPostGameOverlay"(): void
public "isCentered"(): boolean
public "getModMain"(): $HudMod
get "module"(): $HudModule<(MS)>
get "active"(): boolean
get "flippedHor"(): boolean
get "flippedVer"(): boolean
get "centered"(): boolean
get "modMain"(): $HudMod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSession$Type<MS> = ($ModuleSession<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleSession_<MS> = $ModuleSession$Type<(MS)>;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"

export class $WaypointSharingHandler {
static readonly "WAYPOINT_OLD_SHARE_PREFIX": string
static readonly "WAYPOINT_ADD_PREFIX": string
static readonly "WAYPOINT_SHARE_PREFIX": string


public "handler$bpg000$xaeroplus$shareWaypoint"(parent: $Screen$Type, w: $Waypoint$Type, wWorld: $MinimapWorld$Type, ci: $CallbackInfo$Type): void
public "shareWaypoint"(arg0: $Screen$Type, arg1: $Waypoint$Type, arg2: $MinimapWorld$Type): void
public "onWaypointReceived"(arg0: string, arg1: string): void
public "onWaypointAdd"(arg0: (string)[]): void
public "handler$bpg000$xaeroplus$mutateWaypointSharingText"(confirm: boolean, ci: $CallbackInfo$Type, containerIdRef: $LocalRef$Type<(any)>): void
public "onShareConfirmationResult"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSharingHandler$Type = ($WaypointSharingHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointSharingHandler_ = $WaypointSharingHandler$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler" {
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapElementRendererHandler {


public "add"(arg0: $MinimapElementRenderer$Type<(any), (any)>): void
public "render"(arg0: $GuiGraphics$Type, arg1: $Vec3$Type, arg2: float, arg3: $RenderTarget$Type, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRendererHandler$Type = ($MinimapElementRendererHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRendererHandler_ = $MinimapElementRendererHandler$Type;
}}
declare module "packages/xaero/hud/minimap/world/$MinimapWorld" {
import {$WaypointSet, $WaypointSet$Type} from "packages/xaero/hud/minimap/waypoint/set/$WaypointSet"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$RootConfig, $RootConfig$Type} from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MinimapWorldContainer, $MinimapWorldContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $MinimapWorld {


public "getContainer"(): $MinimapWorldContainer
public "setNode"(arg0: string): void
public "getNode"(): string
public "getWaypointSet"(arg0: string): $WaypointSet
public "getCurrentWaypointSet"(): $WaypointSet
public "getIterableWaypointSets"(): $Iterable<($WaypointSet)>
public "getCurrentWaypointSetId"(): string
public "setCurrentWaypointSetId"(arg0: string): void
public "getFullPath"(): $XaeroPath
public "getRootConfig"(): $RootConfig
public "setContainer"(arg0: $MinimapWorldContainer$Type): void
public "addWaypointSet"(arg0: string): void
public "addWaypointSet"(arg0: $WaypointSet$Type): $WaypointSet
public "cleanupOnSave"(arg0: $Path$Type): void
public "getLocalWorldKey"(): $XaeroPath
public "removeWaypointSet"(arg0: string): $WaypointSet
public "requestRemovalOnSave"(arg0: string): void
public "hasSomethingToRemoveOnSave"(): boolean
public "getSetCount"(): integer
public "setDimId"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getDimId"(): $ResourceKey<($Level)>
get "container"(): $MinimapWorldContainer
set "node"(value: string)
get "node"(): string
get "currentWaypointSet"(): $WaypointSet
get "iterableWaypointSets"(): $Iterable<($WaypointSet)>
get "currentWaypointSetId"(): string
set "currentWaypointSetId"(value: string)
get "fullPath"(): $XaeroPath
get "rootConfig"(): $RootConfig
set "container"(value: $MinimapWorldContainer$Type)
get "localWorldKey"(): $XaeroPath
get "setCount"(): integer
set "dimId"(value: $ResourceKey$Type<($Level$Type)>)
get "dimId"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorld$Type = ($MinimapWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorld_ = $MinimapWorld$Type;
}}
declare module "packages/xaero/hud/minimap/compass/render/$CompassRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export class $CompassRenderer {

constructor(arg0: $HudMod$Type, arg1: $Minecraft$Type)

public "drawCompass"(arg0: $PoseStack$Type, arg1: integer, arg2: integer, arg3: double, arg4: double, arg5: double, arg6: boolean, arg7: float, arg8: boolean, arg9: $MultiBufferSource$BufferSource$Type, arg10: $VertexConsumer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassRenderer$Type = ($CompassRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompassRenderer_ = $CompassRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/radar/color/$RadarColor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RadarColor extends $Enum<($RadarColor)> {
static readonly "BLACK": $RadarColor
static readonly "DARK_BLUE": $RadarColor
static readonly "DARK_GREEN": $RadarColor
static readonly "DARK_AQUA": $RadarColor
static readonly "DARK_RED": $RadarColor
static readonly "DARK_PURPLE": $RadarColor
static readonly "GOLD": $RadarColor
static readonly "GRAY": $RadarColor
static readonly "DARK_GRAY": $RadarColor
static readonly "BLUE": $RadarColor
static readonly "GREEN": $RadarColor
static readonly "AQUA": $RadarColor
static readonly "RED": $RadarColor
static readonly "PURPLE": $RadarColor
static readonly "YELLOW": $RadarColor
static readonly "WHITE": $RadarColor


public "getFormat"(): character
public static "getRandom"(): $RadarColor
public "getName"(): $Component
public static "values"(): ($RadarColor)[]
public static "valueOf"(arg0: string): $RadarColor
public static "fromIndex"(arg0: integer): $RadarColor
public "getHex"(): integer
get "format"(): character
get "random"(): $RadarColor
get "name"(): $Component
get "hex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarColor$Type = (("dark_red") | ("green") | ("dark_green") | ("black") | ("yellow") | ("dark_blue") | ("dark_purple") | ("gold") | ("red") | ("aqua") | ("gray") | ("blue") | ("white") | ("dark_aqua") | ("dark_gray") | ("purple")) | ($RadarColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarColor_ = $RadarColor$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator" {
import {$EntityRenderTracer, $EntityRenderTracer$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$EntityRenderTracer"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$XaeroIcon, $XaeroIcon$Type} from "packages/xaero/common/icon/$XaeroIcon"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RadarIconCreator$Parameters, $RadarIconCreator$Parameters$Type} from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $RadarIconCreator {
static readonly "ICON_WIDTH": integer
static readonly "FAR_PLANE": integer

constructor()

public "create"<T extends $Entity>(arg0: $GuiGraphics$Type, arg1: $EntityRenderer$Type<(any)>, arg2: T, arg3: $RenderTarget$Type, arg4: $RadarIconCreator$Parameters$Type): $XaeroIcon
public "clearAtlases"(): void
public "getRenderTracer"(): $EntityRenderTracer
get "renderTracer"(): $EntityRenderTracer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconCreator$Type = ($RadarIconCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconCreator_ = $RadarIconCreator$Type;
}}
declare module "packages/xaero/hud/minimap/world/$MinimapDimensionHelper" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MinimapDimensionHelper {

constructor()

public "getDimensionDivision"(arg0: $MinimapWorld$Type): double
public "getDimCoordinateScale"(arg0: $MinimapWorld$Type): double
public "getDimensionKeyForDirectoryName"(arg0: string): $ResourceKey<($Level)>
public "getDimensionDirectoryName"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "findDimensionKeyForOldName"(arg0: $LocalPlayer$Type, arg1: string): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapDimensionHelper$Type = ($MinimapDimensionHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapDimensionHelper_ = $MinimapDimensionHelper$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionNode$Builder" {
import {$EditorNode$Builder, $EditorNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import {$EditorOptionNode, $EditorOptionNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"

export class $EditorOptionNode$Builder<V> extends $EditorNode$Builder<($EditorOptionNode$Builder<(V)>)> {


public "build"(): $EditorOptionNode<(V)>
public "setDefault"(): $EditorOptionNode$Builder<(V)>
public static "begin"<V>(): $EditorOptionNode$Builder<(V)>
public "setValue"(arg0: V): $EditorOptionNode$Builder<(V)>
public "setDisplayName"(arg0: string): $EditorOptionNode$Builder<(V)>
set "value"(value: V)
set "displayName"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorOptionNode$Builder$Type<V> = ($EditorOptionNode$Builder<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorOptionNode$Builder_<V> = $EditorOptionNode$Builder$Type<(V)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionNode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IEditorDataTooltipSupplier, $IEditorDataTooltipSupplier$Type} from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorListRootEntryFactory, $EditorListRootEntryFactory$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"

export class $EditorOptionNode<V> extends $EditorNode {

constructor(arg0: V, arg1: string, arg2: boolean, arg3: $EditorListRootEntryFactory$Type, arg4: $IEditorDataTooltipSupplier$Type)

public "getDisplayName"(): string
public "getValue"(): V
public "getSubNodes"(): $List<($EditorNode)>
get "displayName"(): string
get "value"(): V
get "subNodes"(): $List<($EditorNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorOptionNode$Type<V> = ($EditorOptionNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorOptionNode_<V> = $EditorOptionNode$Type<(V)>;
}}
declare module "packages/xaero/hud/minimap/info/$InfoDisplayManager" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/hud/minimap/info/$InfoDisplay"

export class $InfoDisplayManager {

constructor()

public "getCount"(): integer
public "add"(arg0: $InfoDisplay$Type<(any)>): void
public "get"(arg0: string): $InfoDisplay<(any)>
public "reset"(): void
public "setOrder"(arg0: $List$Type<(string)>): void
public "getOrderedStream"(): $Stream<($InfoDisplay<(any)>)>
get "count"(): integer
set "order"(value: $List$Type<(string)>)
get "orderedStream"(): $Stream<($InfoDisplay<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayManager$Type = ($InfoDisplayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayManager_ = $InfoDisplayManager$Type;
}}
declare module "packages/xaero/hud/module/$ModuleSessionHandler" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ModuleManager, $ModuleManager$Type} from "packages/xaero/hud/module/$ModuleManager"
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"

export class $ModuleSessionHandler {

constructor(arg0: $ModuleManager$Type)

public "resetSessions"(arg0: $HudMod$Type, arg1: $ClientPacketListener$Type, arg2: $BiConsumer$Type<($HudModule$Type<(any)>), ($ModuleSession$Type<(any)>)>): void
public "closeSessions"(arg0: $HudMod$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleSessionHandler$Type = ($ModuleSessionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleSessionHandler_ = $ModuleSessionHandler$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointPurpose" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaypointPurpose extends $Enum<($WaypointPurpose)> {
static readonly "NORMAL": $WaypointPurpose
static readonly "DEATH": $WaypointPurpose
static readonly "OLD_DEATH": $WaypointPurpose
static readonly "DESTINATION": $WaypointPurpose


public static "values"(): ($WaypointPurpose)[]
public static "valueOf"(arg0: string): $WaypointPurpose
public "isDestination"(): boolean
public "isDeath"(): boolean
get "destination"(): boolean
get "death"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointPurpose$Type = (("normal") | ("death") | ("destination") | ("old_death")) | ($WaypointPurpose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointPurpose_ = $WaypointPurpose$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/world/$MinimapElementWorldRendererHandler" {
import {$MinimapElementRendererHandler, $MinimapElementRendererHandler$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapElementWorldRendererHandler extends $MinimapElementRendererHandler {


public "render"(arg0: $GuiGraphics$Type, arg1: $Vec3$Type, arg2: float, arg3: $RenderTarget$Type, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>): void
public "prepareRender"(arg0: $Matrix4f$Type, arg1: $Matrix4f$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementWorldRendererHandler$Type = ($MinimapElementWorldRendererHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementWorldRendererHandler_ = $MinimapElementWorldRendererHandler$Type;
}}
declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementCollector" {
import {$PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$RenderedPlayerTrackerManager, $RenderedPlayerTrackerManager$Type} from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $PlayerTrackerMinimapElementCollector {

constructor(arg0: $RenderedPlayerTrackerManager$Type)

public "getElements"(): $Iterable<($PlayerTrackerMinimapElement<(any)>)>
public "update"(arg0: $Minecraft$Type): void
public "confirmPlayerRadarRender"(arg0: $Player$Type): void
public "playerExists"(arg0: $UUID$Type): boolean
public "resetRenderedOnRadarFlags"(): void
get "elements"(): $Iterable<($PlayerTrackerMinimapElement<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementCollector$Type = ($PlayerTrackerMinimapElementCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementCollector_ = $PlayerTrackerMinimapElementCollector$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$DestinationHandler" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$WaypointDeleter, $WaypointDeleter$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DestinationHandler {

constructor(arg0: $MinimapSession$Type, arg1: $WaypointDeleter$Type)

public "end"(): void
public "begin"(arg0: $Entity$Type, arg1: $MinimapWorld$Type, arg2: boolean, arg3: boolean): void
public "handle"(arg0: $Waypoint$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestinationHandler$Type = ($DestinationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestinationHandler_ = $DestinationHandler$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointRenderProvider" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$WaypointMapRenderProvider, $WaypointMapRenderProvider$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

/**
 * 
 * @deprecated
 */
export class $WaypointRenderProvider extends $WaypointMapRenderProvider {
readonly "filter": $Predicate<($Waypoint)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointRenderProvider$Type = ($WaypointRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointRenderProvider_ = $WaypointRenderProvider$Type;
}}
declare module "packages/xaero/hud/category/rule/$ExcludeListMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ExcludeListMode extends $Enum<($ExcludeListMode)> {
static readonly "ONLY": $ExcludeListMode
static readonly "ALL_BUT": $ExcludeListMode


public static "values"(): ($ExcludeListMode)[]
public static "valueOf"(arg0: string): $ExcludeListMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcludeListMode$Type = (("all_but") | ("only")) | ($ExcludeListMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExcludeListMode_ = $ExcludeListMode$Type;
}}
declare module "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer" {
import {$ServerWaypointManager, $ServerWaypointManager$Type} from "packages/xaero/hud/minimap/waypoint/server/$ServerWaypointManager"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$RootConfig, $RootConfig$Type} from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $MinimapWorldContainer {


public "getName"(arg0: string): string
public "toString"(): string
public "isEmpty"(): boolean
public "setName"(arg0: string, arg1: string): void
public "getRoot"(): $MinimapWorldRootContainer
public "getPath"(): $XaeroPath
public "getSession"(): $MinimapSession
public "addSubContainer"(arg0: $XaeroPath$Type): $MinimapWorldContainer
public "getFirstWorld"(): $MinimapWorld
public "getSubName"(): string
public "setPath"(arg0: $XaeroPath$Type): void
public "getRootConfig"(): $RootConfig
public "getWorldsCopy"(): $List<($MinimapWorld)>
public "getSubContainers"(): $Iterable<($MinimapWorldContainer)>
public "getAllWorldsIterable"(): $Iterable<($MinimapWorld)>
public "fixPathCharacterCases"(arg0: $XaeroPath$Type): $XaeroPath
public "getDirectoryPath"(): $Path
public "getServerWaypointManager"(): $ServerWaypointManager
public "containsSubContainer"(arg0: $XaeroPath$Type): boolean
public "deleteSubContainer"(arg0: $XaeroPath$Type): boolean
public "removeWorld"(arg0: string): void
public "getFullWorldName"(arg0: string, arg1: string): string
public "getFirstWorldConnectedTo"(arg0: $MinimapWorld$Type): $MinimapWorld
public "getLastNode"(): string
public "getWorlds"(): $Iterable<($MinimapWorld)>
public "addWorld"(arg0: string): $MinimapWorld
public "addWorld"(arg0: $MinimapWorld$Type): void
public "removeName"(arg0: string): void
get "empty"(): boolean
get "root"(): $MinimapWorldRootContainer
get "path"(): $XaeroPath
get "session"(): $MinimapSession
get "firstWorld"(): $MinimapWorld
get "subName"(): string
set "path"(value: $XaeroPath$Type)
get "rootConfig"(): $RootConfig
get "worldsCopy"(): $List<($MinimapWorld)>
get "subContainers"(): $Iterable<($MinimapWorldContainer)>
get "allWorldsIterable"(): $Iterable<($MinimapWorld)>
get "directoryPath"(): $Path
get "serverWaypointManager"(): $ServerWaypointManager
get "lastNode"(): string
get "worlds"(): $Iterable<($MinimapWorld)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldContainer$Type = ($MinimapWorldContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldContainer_ = $MinimapWorldContainer$Type;
}}
declare module "packages/xaero/hud/category/$ObjectCategory$Builder" {
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$MapFactory, $MapFactory$Type} from "packages/xaero/common/misc/$MapFactory"
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import {$ListFactory, $ListFactory$Type} from "packages/xaero/common/misc/$ListFactory"

export class $ObjectCategory$Builder<C extends $ObjectCategory<(any), (C)>, B extends $ObjectCategory$Builder<(C), (B)>> {

constructor(arg0: $ListFactory$Type, arg1: $MapFactory$Type)

public "build"(): C
public "setDefault"(): B
public "setName"(arg0: string): B
public "setSuperCategory"(arg0: C): B
public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): B
public "setProtection"(arg0: boolean): B
public "addSubCategoryBuilder"(arg0: B): B
set "name"(value: string)
set "superCategory"(value: C)
set "protection"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategory$Builder$Type<C, B> = ($ObjectCategory$Builder<(C), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategory$Builder_<C, B> = $ObjectCategory$Builder$Type<(C), (B)>;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorCategoryNode" {
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EditorSettingsNode, $EditorSettingsNode$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export class $EditorCategoryNode<C extends $ObjectCategory<(any), (C)>, SD extends $EditorSettingsNode<(any)>, ED extends $EditorCategoryNode<(C), (SD), (ED)>> extends $EditorNode {


public "getDisplayName"(): string
public "getName"(): string
public "getMoveAction"(arg0: integer, arg1: integer, arg2: $GuiCategoryEditor$SettingRowList$Type<>): $Supplier<(boolean)>
public "removeProtectionRecursive"(): void
public "getSettingsNode"(): SD
public "getDuplicateAction"(arg0: integer, arg1: $GuiCategoryEditor$SettingRowList$Type<>): $Supplier<(boolean)>
public "getPasteAction"(arg0: $GuiCategoryEditor$SettingRowList$Type<>): $Supplier<(boolean)>
public "getCutAction"(arg0: ED, arg1: $GuiCategoryEditor$SettingRowList$Type<>): $Supplier<(boolean)>
public "getSubCategories"(): $List<(ED)>
public "getSubNodes"(): $List<($EditorNode)>
get "displayName"(): string
get "name"(): string
get "settingsNode"(): SD
get "subCategories"(): $List<(ED)>
get "subNodes"(): $List<($EditorNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorCategoryNode$Type<C, SD, ED> = ($EditorCategoryNode<(C), (SD), (ED)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorCategoryNode_<C, SD, ED> = $EditorCategoryNode$Type<(C), (SD), (ED)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer" {
import {$ModelRenderTrace, $ModelRenderTrace$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RadarIconCreator$Parameters, $RadarIconCreator$Parameters$Type} from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IRadarIconFormPrerenderer {

 "requiresEntityModel"(): boolean
 "isFlipped"(): boolean
 "isOutlined"(): boolean
 "prerender"<T extends $Entity>(arg0: $GuiGraphics$Type, arg1: $EntityRenderer$Type<(any)>, arg2: $EntityModel$Type<(T)>, arg3: T, arg4: $List$Type<($ModelRenderTrace$Type)>, arg5: $RadarIconCreator$Parameters$Type): boolean
}

export namespace $IRadarIconFormPrerenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadarIconFormPrerenderer$Type = ($IRadarIconFormPrerenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadarIconFormPrerenderer_ = $IRadarIconFormPrerenderer$Type;
}}
declare module "packages/xaero/hud/category/rule/$ObjectCategoryListRule" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ObjectCategoryListRuleType, $ObjectCategoryListRuleType$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType"
import {$ObjectCategoryRule, $ObjectCategoryRule$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryRule"

export class $ObjectCategoryListRule<E, P, S> extends $ObjectCategoryRule<(E), (P)> implements $Iterable<(string)> {


public "iterator"(): $Iterator<(string)>
public "getType"(): $ObjectCategoryListRuleType<(E), (P), (S)>
public "getStringValidator"(): $Predicate<(string)>
public "inList"(arg0: E, arg1: P): boolean
public "spliterator"(): $Spliterator<(string)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<string>;
get "type"(): $ObjectCategoryListRuleType<(E), (P), (S)>
get "stringValidator"(): $Predicate<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryListRule$Type<E, P, S> = ($ObjectCategoryListRule<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryListRule_<E, P, S> = $ObjectCategoryListRule$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/hud/category/ui/entry/widget/$EditorButton$PressActionWithContext" {
import {$Button, $Button$Type} from "packages/net/minecraft/client/gui/components/$Button"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorButton, $EditorButton$Type} from "packages/xaero/hud/category/ui/entry/widget/$EditorButton"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export class $EditorButton$PressActionWithContext implements $Button$OnPress {

constructor()

public "onPress"(arg0: $EditorButton$Type, arg1: $EditorNode$Type, arg2: $GuiCategoryEditor$SettingRowList$Type<>): void
public "onPress"(arg0: $Button$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorButton$PressActionWithContext$Type = ($EditorButton$PressActionWithContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorButton$PressActionWithContext_ = $EditorButton$PressActionWithContext$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderProvider" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$AbstractWaypointRenderProvider, $AbstractWaypointRenderProvider$Type} from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WaypointWorldRenderContext, $WaypointWorldRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"

export class $WaypointWorldRenderProvider extends $AbstractWaypointRenderProvider<($WaypointWorldRenderContext)> {
readonly "filter": $Predicate<($Waypoint)>

constructor()

/**
 * 
 * @deprecated
 */
public "getNext"(arg0: integer, arg1: $WaypointWorldRenderContext$Type): $Waypoint
/**
 * 
 * @deprecated
 */
public "hasNext"(arg0: integer, arg1: $WaypointWorldRenderContext$Type): boolean
/**
 * 
 * @deprecated
 */
public "end"(arg0: integer, arg1: $WaypointWorldRenderContext$Type): void
/**
 * 
 * @deprecated
 */
public "begin"(arg0: integer, arg1: $WaypointWorldRenderContext$Type): void
/**
 * 
 * @deprecated
 */
public "setupContextAndGetNext"(arg0: integer, arg1: $WaypointWorldRenderContext$Type): $Waypoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRenderProvider$Type = ($WaypointWorldRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldRenderProvider_ = $WaypointWorldRenderProvider$Type;
}}
declare module "packages/xaero/hud/controls/key/$KeyMappingTickHandler" {
import {$KeyMappingControllerManager, $KeyMappingControllerManager$Type} from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"

export class $KeyMappingTickHandler {
static "DISABLE_KEY_MAPPING_OVERRIDES": boolean

constructor(arg0: $KeyMappingControllerManager$Type)

public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingTickHandler$Type = ($KeyMappingTickHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingTickHandler_ = $KeyMappingTickHandler$Type;
}}
declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext" {
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $RadarRenderContext {
 "reversedOrder": boolean
 "playerListDown": boolean
 "entityCategory": $EntityRadarCategory
 "iconsForCategory": boolean
 "icon": boolean
 "iconScale": double
 "dotScale": double
 "dotSize": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarRenderContext$Type = ($RadarRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarRenderContext_ = $RadarRenderContext$Type;
}}
declare module "packages/xaero/hud/category/$ObjectCategory" {
import {$ObjectCategorySetting, $ObjectCategorySetting$Type} from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ObjectCategoryData, $ObjectCategoryData$Type} from "packages/xaero/hud/category/serialization/data/$ObjectCategoryData"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ObjectCategory<D extends $ObjectCategoryData<(D)>, C extends $ObjectCategory<(D), (C)>> {


public "getName"(): string
public "getDirectSubCategoryIterator"(): $Iterator<(C)>
public "getSettingOverridesIterator"(): $Iterator<($Map$Entry<($ObjectCategorySetting<(any)>), (any)>)>
public "getSuperCategory"(): C
public "getSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>): T
public "setSettingValue"<T>(arg0: $ObjectCategorySetting$Type<(T)>, arg1: T): void
public "getProtection"(): boolean
get "name"(): string
get "directSubCategoryIterator"(): $Iterator<(C)>
get "settingOverridesIterator"(): $Iterator<($Map$Entry<($ObjectCategorySetting<(any)>), (any)>)>
get "superCategory"(): C
get "protection"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategory$Type<D, C> = ($ObjectCategory<(D), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategory_<D, C> = $ObjectCategory$Type<(D), (C)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode" {
import {$EditorOptionNode, $EditorOptionNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EditorTextField$UpdatedValueConsumer, $EditorTextField$UpdatedValueConsumer$Type} from "packages/xaero/hud/category/ui/entry/widget/$EditorTextField$UpdatedValueConsumer"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorExpandingOptionsNode, $EditorExpandingOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode"

export class $EditorTextFieldOptionsNode extends $EditorExpandingOptionsNode<(string)> {


public "getInput"(): string
public "getResult"(): string
public "getDisplayName"(): string
public "getMaxLength"(): integer
public "getCursorPos"(): integer
public "getCurrentValue"(): $EditorOptionNode<(string)>
public "setCurrentValue"(arg0: $EditorOptionNode$Type<(string)>): void
public "setExpanded"(arg0: boolean): void
public "getUpdatedValueConsumer"(): $EditorTextField$UpdatedValueConsumer
public "getHighlightPos"(): integer
public "getSubNodes"(): $List<($EditorNode)>
public "onSelected"(arg0: $EditorOptionNode$Type<(string)>): boolean
public "resetInput"(arg0: string): void
get "input"(): string
get "result"(): string
get "displayName"(): string
get "maxLength"(): integer
get "cursorPos"(): integer
get "currentValue"(): $EditorOptionNode<(string)>
set "currentValue"(value: $EditorOptionNode$Type<(string)>)
set "expanded"(value: boolean)
get "updatedValueConsumer"(): $EditorTextField$UpdatedValueConsumer
get "highlightPos"(): integer
get "subNodes"(): $List<($EditorNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorTextFieldOptionsNode$Type = ($EditorTextFieldOptionsNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorTextFieldOptionsNode_ = $EditorTextFieldOptionsNode$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext" {
import {$AbstractWaypointRenderContext, $AbstractWaypointRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $WaypointWorldRenderContext extends $AbstractWaypointRenderContext {
 "onlyMainInfo": boolean
 "renderEntityPos": $Vec3
 "interactionBoxLeft": integer
 "interactionBoxTop": integer
 "dimCoordinateScale": double

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRenderContext$Type = ($WaypointWorldRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldRenderContext_ = $WaypointWorldRenderContext$Type;
}}
declare module "packages/xaero/hud/minimap/radar/$RadarSession" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$RadarColorHelper, $RadarColorHelper$Type} from "packages/xaero/hud/minimap/radar/color/$RadarColorHelper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RadarStateUpdater, $RadarStateUpdater$Type} from "packages/xaero/hud/minimap/radar/state/$RadarStateUpdater"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RadarState, $RadarState$Type} from "packages/xaero/hud/minimap/radar/state/$RadarState"

export class $RadarSession {

constructor(arg0: $EntityRadarCategoryManager$Type)

public "update"(arg0: $ClientLevel$Type, arg1: $Entity$Type, arg2: $Player$Type): void
public "getState"(): $RadarState
public "getColorHelper"(): $RadarColorHelper
public "getCategoryManager"(): $EntityRadarCategoryManager
public "getStateUpdater"(): $RadarStateUpdater
get "state"(): $RadarState
get "colorHelper"(): $RadarColorHelper
get "categoryManager"(): $EntityRadarCategoryManager
get "stateUpdater"(): $RadarStateUpdater
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarSession$Type = ($RadarSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarSession_ = $RadarSession$Type;
}}
declare module "packages/xaero/hud/preset/$HudPresetManager" {
import {$HudPreset, $HudPreset$Type} from "packages/xaero/hud/preset/$HudPreset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $HudPresetManager {

constructor()

public "register"(arg0: $HudPreset$Type): void
public "getPresets"(): $Iterable<($HudPreset)>
get "presets"(): $Iterable<($HudPreset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudPresetManager$Type = ($HudPresetManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudPresetManager_ = $HudPresetManager$Type;
}}
declare module "packages/xaero/hud/module/$HudModule" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IModuleRenderer, $IModuleRenderer$Type} from "packages/xaero/hud/render/module/$IModuleRenderer"
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ModuleTransform, $ModuleTransform$Type} from "packages/xaero/hud/module/$ModuleTransform"

export class $HudModule<MS extends $ModuleSession<(MS)>> {

constructor(arg0: $ResourceLocation$Type, arg1: $Component$Type, arg2: $TriFunction$Type<($HudMod$Type), ($HudModule$Type<(MS)>), ($ClientPacketListener$Type), (MS)>, arg3: $Supplier$Type<($IModuleRenderer$Type<(MS)>)>, arg4: $Function$Type<($Screen$Type), ($Screen$Type)>)

public "getDisplayName"(): $Component
public "getId"(): $ResourceLocation
public "isActive"(): boolean
public "setActive"(arg0: boolean): void
public "getCurrentSession"(): MS
public "getRenderer"(): $IModuleRenderer<(MS)>
public "setTransform"(arg0: $ModuleTransform$Type): void
public "getUsedTransform"(): $ModuleTransform
public "getUnconfirmedTransform"(): $ModuleTransform
public "cancelTransform"(): void
public "confirmTransform"(): void
public "getConfigScreenFactory"(): $Function<($Screen), ($Screen)>
public "getConfirmedTransform"(): $ModuleTransform
public "getPushState"(): $PushboxHandler$State
get "displayName"(): $Component
get "id"(): $ResourceLocation
get "active"(): boolean
set "active"(value: boolean)
get "currentSession"(): MS
get "renderer"(): $IModuleRenderer<(MS)>
set "transform"(value: $ModuleTransform$Type)
get "usedTransform"(): $ModuleTransform
get "unconfirmedTransform"(): $ModuleTransform
get "configScreenFactory"(): $Function<($Screen), ($Screen)>
get "confirmedTransform"(): $ModuleTransform
get "pushState"(): $PushboxHandler$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudModule$Type<MS> = ($HudModule<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudModule_<MS> = $HudModule$Type<(MS)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode$Builder" {
import {$EditorOptionNode$Builder, $EditorOptionNode$Builder$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode$Builder"
import {$EditorOptionsNode$Builder, $EditorOptionsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$Builder"
import {$EditorExpandingOptionsNode, $EditorExpandingOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode"

export class $EditorExpandingOptionsNode$Builder<V, B extends $EditorExpandingOptionsNode$Builder<(V), (B)>> extends $EditorOptionsNode$Builder<(V), (B)> {


public "build"(): $EditorExpandingOptionsNode<(V)>
public "addOptionBuilderFor"(arg0: V): B
public "addOptionBuilder"(arg0: $EditorOptionNode$Builder$Type<(V)>): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorExpandingOptionsNode$Builder$Type<V, B> = ($EditorExpandingOptionsNode$Builder<(V), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorExpandingOptionsNode$Builder_<V, B> = $EditorExpandingOptionsNode$Builder$Type<(V), (B)>;
}}
declare module "packages/xaero/hud/compat/$OldSystemCompatibility" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$ModuleRenderContext, $ModuleRenderContext$Type} from "packages/xaero/hud/render/module/$ModuleRenderContext"
import {$ModuleTransform, $ModuleTransform$Type} from "packages/xaero/hud/module/$ModuleTransform"

export class $OldSystemCompatibility {

constructor()

public "convertTransform"(arg0: $ModuleTransform$Type, arg1: $ModuleSession$Type<(any)>, arg2: $ModuleRenderContext$Type): void
public "loadOldTransform"(arg0: (string)[]): $ModuleTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldSystemCompatibility$Type = ($OldSystemCompatibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OldSystemCompatibility_ = $OldSystemCompatibility$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode" {
import {$EditorOptionsNode, $EditorOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import {$EditorOptionNode, $EditorOptionNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"

export class $EditorExpandingOptionsNode<V> extends $EditorOptionsNode<(V)> {


public "getDisplayName"(): string
public "getSubNodes"(): $List<($EditorNode)>
public "onSelected"(arg0: $EditorOptionNode$Type<(V)>): boolean
get "displayName"(): string
get "subNodes"(): $List<($EditorNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorExpandingOptionsNode$Type<V> = ($EditorExpandingOptionsNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorExpandingOptionsNode_<V> = $EditorExpandingOptionsNode$Type<(V)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelPartRenderTrace" {
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $ModelPartRenderTrace {
 "modelPart": $ModelPart
 "red": float
 "green": float
 "blue": float
 "alpha": float

constructor(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartRenderTrace$Type = ($ModelPartRenderTrace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartRenderTrace_ = $ModelPartRenderTrace$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm" {
import {$RadarIconFormType, $RadarIconFormType$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType"
import {$XaeroIcon, $XaeroIcon$Type} from "packages/xaero/common/icon/$XaeroIcon"
import {$IRadarIconFormPrerenderer, $IRadarIconFormPrerenderer$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer"

export class $RadarIconForm {

constructor(arg0: $RadarIconFormType$Type)

public "getType"(): $RadarIconFormType
public "getFailureResult"(): $XaeroIcon
public "getPrerenderer"(): $IRadarIconFormPrerenderer
get "type"(): $RadarIconFormType
get "failureResult"(): $XaeroIcon
get "prerenderer"(): $IRadarIconFormPrerenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconForm$Type = ($RadarIconForm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconForm_ = $RadarIconForm$Type;
}}
declare module "packages/xaero/hud/category/ui/entry/$EditorListEntry" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"
import {$GuiCategoryEditor$SettingRowList$Entry, $GuiCategoryEditor$SettingRowList$Entry$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry"

export class $EditorListEntry {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $GuiCategoryEditor$SettingRowList$Type<>, arg6: $Supplier$Type<($CursorBox$Type)>)

public "tick"(): void
public "getMessage"(): string
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: float, arg8: $Font$Type, arg9: integer, arg10: integer, arg11: boolean, arg12: boolean): $EditorListEntry
public "getNarrationMessage"(): string
public "mouseClicked"(arg0: $GuiCategoryEditor$SettingRowList$Entry$Type<>, arg1: double, arg2: double, arg3: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "unhoverRecursively"(): void
public "focusLastRecursively"(): void
public "focusFirstRecursively"(): void
public "withSubEntry"(arg0: $EditorListEntry$Type): $EditorListEntry
public "getEntryRelativeX"(): integer
public "getEntryRelativeY"(): integer
public "getTooltipSupplier"(): $Supplier<($CursorBox)>
public "isHoveredOver"(arg0: double, arg1: double): boolean
public "unfocusRecursively"(): void
public "confirmSelection"(): $EditorListEntry
public "getNarration"(): string
public "getSubNarration"(): string
public "getSelectedNarration"(): string
public "getHoveredNarration"(): string
public "getHoverNarration"(): string
public "preRender"(arg0: $GuiGraphics$Type, arg1: boolean, arg2: boolean): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "onSelected"(): $EditorListEntry
public "setFocused"(arg0: boolean): void
public "mouseMoved"(arg0: double, arg1: double): void
public "postRender"(arg0: $GuiGraphics$Type): void
public "moveFocus"(arg0: integer, arg1: boolean): boolean
public "moveFocus"(arg0: integer): boolean
get "message"(): string
get "narrationMessage"(): string
get "entryRelativeX"(): integer
get "entryRelativeY"(): integer
get "tooltipSupplier"(): $Supplier<($CursorBox)>
get "narration"(): string
get "subNarration"(): string
get "selectedNarration"(): string
get "hoveredNarration"(): string
get "hoverNarration"(): string
set "focused"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorListEntry$Type = ($EditorListEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorListEntry_ = $EditorListEntry$Type;
}}
declare module "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile" {
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/hud/minimap/info/$InfoDisplay"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $InfoDisplayOnCompile<T> {

 "onCompile"(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $MinimapSession$Type, arg3: integer, arg4: $BlockPos$Type): void

(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $MinimapSession$Type, arg3: integer, arg4: $BlockPos$Type): void
}

export namespace $InfoDisplayOnCompile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayOnCompile$Type<T> = ($InfoDisplayOnCompile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayOnCompile_<T> = $InfoDisplayOnCompile$Type<(T)>;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$Builder" {
import {$EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier, $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier"
import {$EditorNode$Builder, $EditorNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import {$EditorSimpleButtonNode$ISimpleButtonMessageSupplier, $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonMessageSupplier"
import {$EditorSimpleButtonNode$ISimpleButtonCallback, $EditorSimpleButtonNode$ISimpleButtonCallback$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonCallback"
import {$EditorSimpleButtonNode, $EditorSimpleButtonNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"

export class $EditorSimpleButtonNode$Builder extends $EditorNode$Builder<($EditorSimpleButtonNode$Builder)> {


public "build"(): $EditorSimpleButtonNode
public static "begin"(): $EditorSimpleButtonNode$Builder
public "setDisplayName"(arg0: string): $EditorSimpleButtonNode$Builder
public "setCallback"(arg0: $EditorSimpleButtonNode$ISimpleButtonCallback$Type): $EditorSimpleButtonNode$Builder
public "setIsActiveSupplier"(arg0: $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$Type): $EditorSimpleButtonNode$Builder
public "setMessageSupplier"(arg0: $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$Type): $EditorSimpleButtonNode$Builder
set "displayName"(value: string)
set "callback"(value: $EditorSimpleButtonNode$ISimpleButtonCallback$Type)
set "isActiveSupplier"(value: $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$Type)
set "messageSupplier"(value: $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSimpleButtonNode$Builder$Type = ($EditorSimpleButtonNode$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSimpleButtonNode$Builder_ = $EditorSimpleButtonNode$Builder$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager" {
import {$EntityRadarCategoryFileIO, $EntityRadarCategoryFileIO$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryFileIO"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$EntityRadarDefaultCategories, $EntityRadarDefaultCategories$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarDefaultCategories"
import {$ObjectCategoryRuleResolver, $ObjectCategoryRuleResolver$Type} from "packages/xaero/hud/category/rule/resolver/$ObjectCategoryRuleResolver"

export class $EntityRadarCategoryManager {


public "init"(): void
public "save"(): void
public "getDefaultCategoryConfigurator"(): $EntityRadarDefaultCategories
public "getRootCategory"(): $EntityRadarCategory
public "setRootCategory"(arg0: $EntityRadarCategory$Type): void
public "getSecondaryFilePath"(): $Path
public "getSecondaryFileIO"(): $EntityRadarCategoryFileIO
public "getRuleResolver"(): $ObjectCategoryRuleResolver
get "defaultCategoryConfigurator"(): $EntityRadarDefaultCategories
get "rootCategory"(): $EntityRadarCategory
set "rootCategory"(value: $EntityRadarCategory$Type)
get "secondaryFilePath"(): $Path
get "secondaryFileIO"(): $EntityRadarCategoryFileIO
get "ruleResolver"(): $ObjectCategoryRuleResolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryManager$Type = ($EntityRadarCategoryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryManager_ = $EntityRadarCategoryManager$Type;
}}
declare module "packages/xaero/hud/category/rule/$ObjectCategoryExcludeList" {
import {$ObjectCategoryListRule, $ObjectCategoryListRule$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryListRule"
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/hud/category/rule/$ExcludeListMode"

export class $ObjectCategoryExcludeList<E, P, S> extends $ObjectCategoryListRule<(E), (P), (S)> {


public "getExcludeMode"(): $ExcludeListMode
public "isFollowedBy"(arg0: E, arg1: P): boolean
get "excludeMode"(): $ExcludeListMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryExcludeList$Type<E, P, S> = ($ObjectCategoryExcludeList<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryExcludeList_<E, P, S> = $ObjectCategoryExcludeList$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager" {
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $MinimapWorldConnectionManager {


public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$Type): void
public "addConnection"(arg0: $XaeroPath$Type, arg1: $XaeroPath$Type): void
public "addConnection"(arg0: $MinimapWorld$Type, arg1: $MinimapWorld$Type): void
public "removeConnection"(arg0: $MinimapWorld$Type, arg1: $MinimapWorld$Type): void
public "isConnected"(arg0: $MinimapWorld$Type, arg1: $MinimapWorld$Type): boolean
public "renameDimension"(arg0: string, arg1: string): void
public "swapConnections"(arg0: $MinimapWorld$Type, arg1: $MinimapWorld$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWorldConnectionManager$Type = ($MinimapWorldConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWorldConnectionManager_ = $MinimapWorldConnectionManager$Type;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider" {
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $MinimapElementRenderProvider<E, RC> {

constructor()

public "getNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): E
public "hasNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): boolean
public "end"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): void
public "begin"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): void
public "setupContextAndGetNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderProvider$Type<E, RC> = ($MinimapElementRenderProvider<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderProvider_<E, RC> = $MinimapElementRenderProvider$Type<(E), (RC)>;
}}
declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider"

export class $MinimapElementRenderer<E, RC> implements $Comparable<($MinimapElementRenderer<(any), (any)>)> {

constructor(arg0: $MinimapElementReader$Type<(E), (RC)>, arg1: $MinimapElementRenderProvider$Type<(E), (RC)>, arg2: RC)

public "getOrder"(): integer
public "getProvider"(): $MinimapElementRenderProvider<(E), (RC)>
public "compareTo"(arg0: $MinimapElementRenderer$Type<(any), (any)>): integer
public "getContext"(): RC
public "getElementReader"(): $MinimapElementReader<(E), (RC)>
public "renderElement"(arg0: E, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
get "order"(): integer
get "provider"(): $MinimapElementRenderProvider<(E), (RC)>
get "context"(): RC
get "elementReader"(): $MinimapElementReader<(E), (RC)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapElementRenderer$Type<E, RC> = ($MinimapElementRenderer<(E), (RC)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapElementRenderer_<E, RC> = $MinimapElementRenderer$Type<(E), (RC)>;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointCollector" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$List, $List$Type} from "packages/java/util/$List"

export class $WaypointCollector {

constructor(arg0: $MinimapSession$Type)

public "collect"(arg0: $List$Type<($Waypoint$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointCollector$Type = ($WaypointCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointCollector_ = $WaypointCollector$Type;
}}
declare module "packages/xaero/hud/category/ui/node/$EditorAdderNode" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorTextFieldOptionsNode, $EditorTextFieldOptionsNode$Type} from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode"

export class $EditorAdderNode extends $EditorNode {


public "getDisplayName"(): string
public "reset"(): void
public "setExpanded"(arg0: boolean): void
public "isConfirmed"(): boolean
public "getSubNodes"(): $List<($EditorNode)>
public "getNameField"(): $EditorTextFieldOptionsNode
get "displayName"(): string
set "expanded"(value: boolean)
get "confirmed"(): boolean
get "subNodes"(): $List<($EditorNode)>
get "nameField"(): $EditorTextFieldOptionsNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorAdderNode$Type = ($EditorAdderNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorAdderNode_ = $EditorAdderNode$Type;
}}
declare module "packages/xaero/hud/minimap/info/$InfoDisplays" {
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import {$InfoDisplayIO, $InfoDisplayIO$Type} from "packages/xaero/hud/minimap/info/$InfoDisplayIO"
import {$InfoDisplayRenderer, $InfoDisplayRenderer$Type} from "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer"

export class $InfoDisplays {

constructor()

public "getManager"(): $InfoDisplayManager
public "getRenderer"(): $InfoDisplayRenderer
public "getIo"(): $InfoDisplayIO
get "manager"(): $InfoDisplayManager
get "renderer"(): $InfoDisplayRenderer
get "io"(): $InfoDisplayIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplays$Type = ($InfoDisplays);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplays_ = $InfoDisplays$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$DeathpointHandler" {
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"

export class $DeathpointHandler {

constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type)

public "createDeathpoint"(arg0: $Player$Type): void
public "createDeathpoint"(arg0: $Player$Type, arg1: $MinimapWorld$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeathpointHandler$Type = ($DeathpointHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeathpointHandler_ = $DeathpointHandler$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/definition/form/type/$IRadarIconFormReader" {
import {$RadarIconFormType, $RadarIconFormType$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType"
import {$RadarIconForm, $RadarIconForm$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import {$RadarIconDefinition, $RadarIconDefinition$Type} from "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition"

export interface $IRadarIconFormReader {

 "read"(arg0: $RadarIconFormType$Type, arg1: (string)[], arg2: $RadarIconDefinition$Type): $RadarIconForm

(arg0: $RadarIconFormType$Type, arg1: (string)[], arg2: $RadarIconDefinition$Type): $RadarIconForm
}

export namespace $IRadarIconFormReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadarIconFormReader$Type = ($IRadarIconFormReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadarIconFormReader_ = $IRadarIconFormReader$Type;
}}
declare module "packages/xaero/hud/category/setting/$ObjectCategorySetting" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EditorSettingType, $EditorSettingType$Type} from "packages/xaero/hud/category/ui/setting/$EditorSettingType"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $ObjectCategorySetting<T> {


public "getDisplayName"(): string
public "getId"(): string
public "getDefaultValue"(): T
public "getUiFirstOption"(): integer
public "getUiLastOption"(): integer
public "getTooltip"(): $CursorBox
public "getSettingUIType"(): $EditorSettingType
public "getIndexWriter"(): $Function<(T), (integer)>
public "getWidgetValueNameProvider"(): $Function<(T), (string)>
public "getIndexReader"(): $IntFunction<(T)>
get "displayName"(): string
get "id"(): string
get "defaultValue"(): T
get "uiFirstOption"(): integer
get "uiLastOption"(): integer
get "tooltip"(): $CursorBox
get "settingUIType"(): $EditorSettingType
get "indexWriter"(): $Function<(T), (integer)>
get "widgetValueNameProvider"(): $Function<(T), (string)>
get "indexReader"(): $IntFunction<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategorySetting$Type<T> = ($ObjectCategorySetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategorySetting_<T> = $ObjectCategorySetting$Type<(T)>;
}}
declare module "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker" {
import {$ITrackedPlayerReader, $ITrackedPlayerReader$Type} from "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $IRenderedPlayerTracker<P> {

 "getReader"(): $ITrackedPlayerReader<(P)>
 "getTrackedPlayerIterator"(): $Iterator<(P)>
}

export namespace $IRenderedPlayerTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedPlayerTracker$Type<P> = ($IRenderedPlayerTracker<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedPlayerTracker_<P> = $IRenderedPlayerTracker$Type<(P)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/$RadarIconManager" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$XaeroIcon, $XaeroIcon$Type} from "packages/xaero/common/icon/$XaeroIcon"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RadarIconCreator, $RadarIconCreator$Type} from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $RadarIconManager {
static readonly "FAILED": $XaeroIcon
static readonly "DOT": $XaeroIcon

constructor(arg0: $RadarIconCreator$Type)

public "get"<T extends $Entity>(arg0: T, arg1: float, arg2: boolean, arg3: boolean, arg4: $GuiGraphics$Type, arg5: $RenderTarget$Type): $XaeroIcon
public "reset"(): void
public "resetResources"(): void
public "onModelRenderTrace"(arg0: $EntityModel$Type<(any)>, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "onModelPartRenderTrace"(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "allowPrerender"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconManager$Type = ($RadarIconManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconManager_ = $RadarIconManager$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext" {
import {$AbstractWaypointRenderContext, $AbstractWaypointRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"

export class $WaypointMapRenderContext extends $AbstractWaypointRenderContext {
 "dimCoordinateScale": double

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointMapRenderContext$Type = ($WaypointMapRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointMapRenderContext_ = $WaypointMapRenderContext$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace" {
import {$CustomRenderTypes$EntityIconLayerPhases, $CustomRenderTypes$EntityIconLayerPhases$Type} from "packages/xaero/common/graphics/$CustomRenderTypes$EntityIconLayerPhases"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ModelPartRenderTrace, $ModelPartRenderTrace$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelPartRenderTrace"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ModelRenderTrace {
readonly "model": $EntityModel<(any)>
readonly "renderTexture": $ResourceLocation
readonly "renderAtlasSprite": $TextureAtlasSprite
readonly "layerPhases": $CustomRenderTypes$EntityIconLayerPhases
readonly "red": float
readonly "green": float
readonly "blue": float
readonly "alpha": float
 "allVisible": boolean

constructor(arg0: $EntityModel$Type<(any)>, arg1: $ResourceLocation$Type, arg2: $TextureAtlasSprite$Type, arg3: $CustomRenderTypes$EntityIconLayerPhases$Type, arg4: float, arg5: float, arg6: float, arg7: float)

public "toString"(): string
public "isEmpty"(): boolean
public "addVisibleModelPart"(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "sameVisibility"(arg0: $ModelRenderTrace$Type): boolean
public "getModelPartRenderInfo"(arg0: $ModelPart$Type): $ModelPartRenderTrace
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelRenderTrace$Type = ($ModelRenderTrace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelRenderTrace_ = $ModelRenderTrace$Type;
}}
declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry" {
import {$EditorListRootEntry, $EditorListRootEntry$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import {$ObjectSelectionList$Entry, $ObjectSelectionList$Entry$Type} from "packages/net/minecraft/client/gui/components/$ObjectSelectionList$Entry"
import {$AbstractSelectionList, $AbstractSelectionList$Type} from "packages/net/minecraft/client/gui/components/$AbstractSelectionList"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $GuiCategoryEditor$SettingRowList$Entry extends $ObjectSelectionList$Entry<($GuiCategoryEditor$SettingRowList$Entry<>)> {
/**
 * 
 * @deprecated
 */
 "list": $AbstractSelectionList<(E)>

constructor(arg0: $GuiCategoryEditor$SettingRowList$Type, arg1: $EditorListRootEntry$Type, arg2: integer)

public "tick"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
public "setFocused"(arg0: boolean): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getNarration"(): $Component
set "focused"(value: boolean)
get "narration"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiCategoryEditor$SettingRowList$Entry$Type = ($GuiCategoryEditor$SettingRowList$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiCategoryEditor$SettingRowList$Entry_ = $GuiCategoryEditor$SettingRowList$Entry$Type;
}}
declare module "packages/xaero/hud/category/$FilterObjectCategory" {
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$ObjectCategoryIncludeList, $ObjectCategoryIncludeList$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryIncludeList"
import {$FilterObjectCategoryData, $FilterObjectCategoryData$Type} from "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData"
import {$ExcludeListMode, $ExcludeListMode$Type} from "packages/xaero/hud/category/rule/$ExcludeListMode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ObjectCategoryListRuleType, $ObjectCategoryListRuleType$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType"
import {$ObjectCategoryRule, $ObjectCategoryRule$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryRule"
import {$ObjectCategoryExcludeList, $ObjectCategoryExcludeList$Type} from "packages/xaero/hud/category/rule/$ObjectCategoryExcludeList"

export class $FilterObjectCategory<E, P, D extends $FilterObjectCategoryData<(D)>, C extends $FilterObjectCategory<(E), (P), (D), (C)>> extends $ObjectCategory<(D), (C)> {


public "getExcludeList"<S>(arg0: $ObjectCategoryListRuleType$Type<(E), (P), (S)>): $ObjectCategoryExcludeList<(E), (P), (S)>
public "getIncludeLists"(): $List<($ObjectCategoryIncludeList<(E), (P), (any)>)>
public "getExcludeLists"(): $List<($ObjectCategoryExcludeList<(E), (P), (any)>)>
public "getExcludeMode"(): $ExcludeListMode
public "getIncludeInSuperCategory"(): boolean
public "getBaseRule"(): $ObjectCategoryRule<(E), (P)>
public "getIncludeList"<S>(arg0: $ObjectCategoryListRuleType$Type<(E), (P), (S)>): $ObjectCategoryIncludeList<(E), (P), (S)>
get "includeLists"(): $List<($ObjectCategoryIncludeList<(E), (P), (any)>)>
get "excludeLists"(): $List<($ObjectCategoryExcludeList<(E), (P), (any)>)>
get "excludeMode"(): $ExcludeListMode
get "includeInSuperCategory"(): boolean
get "baseRule"(): $ObjectCategoryRule<(E), (P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterObjectCategory$Type<E, P, D, C> = ($FilterObjectCategory<(E), (P), (D), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterObjectCategory_<E, P, D, C> = $FilterObjectCategory$Type<(E), (P), (D), (C)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition" {
import {$RadarIconForm, $RadarIconForm$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RadarIconModelConfig, $RadarIconModelConfig$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig"

export class $RadarIconDefinition {

constructor()

public "construct"(arg0: $ResourceLocation$Type): void
public "getVariantIdBuilderMethodString"(): string
public "getOldVariantIdMethodString"(): string
public "getEntityId"(): $ResourceLocation
public "getOldVariantIdMethod"(): $Method
public "setOldVariantIdMethod"(arg0: $Method$Type): void
public "getVariantMethod"(): $Method
public "getVariantMethodString"(): string
public "getVariantIdBuilderMethod"(): $Method
public "setVariantIdBuilderMethod"(arg0: $Method$Type): void
public "setVariantMethod"(arg0: $Method$Type): void
public "getVariantForm"(arg0: string): $RadarIconForm
public "getModelConfig"(arg0: integer): $RadarIconModelConfig
get "variantIdBuilderMethodString"(): string
get "oldVariantIdMethodString"(): string
get "entityId"(): $ResourceLocation
get "oldVariantIdMethod"(): $Method
set "oldVariantIdMethod"(value: $Method$Type)
get "variantMethod"(): $Method
get "variantMethodString"(): string
get "variantIdBuilderMethod"(): $Method
set "variantIdBuilderMethod"(value: $Method$Type)
set "variantMethod"(value: $Method$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconDefinition$Type = ($RadarIconDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconDefinition_ = $RadarIconDefinition$Type;
}}
declare module "packages/xaero/hud/minimap/info/$InfoDisplay" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InfoDisplayOnCompile, $InfoDisplayOnCompile$Type} from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile"
import {$InfoDisplayStateCodec, $InfoDisplayStateCodec$Type} from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

export class $InfoDisplay<T> {


public "setState"(arg0: T): void
public "getCompiler"(): $InfoDisplayOnCompile<(T)>
public "getName"(): $Component
public "getId"(): string
public "getState"(): T
public "reset"(): void
public "getDefaultState"(): T
public "createWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public "getTextColor"(): integer
public "getBackgroundColor"(): integer
public "setTextColor"(arg0: integer): void
public "setBackgroundColor"(arg0: integer): void
public "getCodec"(): $InfoDisplayStateCodec<(T)>
set "state"(value: T)
get "compiler"(): $InfoDisplayOnCompile<(T)>
get "name"(): $Component
get "id"(): string
get "state"(): T
get "defaultState"(): T
get "textColor"(): integer
get "backgroundColor"(): integer
set "textColor"(value: integer)
set "backgroundColor"(value: integer)
get "codec"(): $InfoDisplayStateCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplay$Type<T> = ($InfoDisplay<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplay_<T> = $InfoDisplay$Type<(T)>;
}}
declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderProvider" {
import {$RadarRenderContext, $RadarRenderContext$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RadarRenderProvider extends $MinimapElementRenderProvider<($Entity), ($RadarRenderContext)> {

constructor()

public "getNext"(arg0: $MinimapElementRenderLocation$Type, arg1: $RadarRenderContext$Type): $Entity
public "hasNext"(arg0: $MinimapElementRenderLocation$Type, arg1: $RadarRenderContext$Type): boolean
public "end"(arg0: $MinimapElementRenderLocation$Type, arg1: $RadarRenderContext$Type): void
public "begin"(arg0: $MinimapElementRenderLocation$Type, arg1: $RadarRenderContext$Type): void
public "isUsed"(): boolean
public "setupContextForCategory"(arg0: $EntityRadarCategory$Type, arg1: $RadarRenderContext$Type): void
public "setupContextForEntity"(arg0: $Entity$Type, arg1: $RadarRenderContext$Type): void
public "setupContextAndGetNext"(arg0: $MinimapElementRenderLocation$Type, arg1: $RadarRenderContext$Type): $Entity
get "used"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarRenderProvider$Type = ($RadarRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarRenderProvider_ = $RadarRenderProvider$Type;
}}
declare module "packages/xaero/hud/controls/key/$KeyMappingController" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$KeyMappingFunction, $KeyMappingFunction$Type} from "packages/xaero/hud/controls/key/function/$KeyMappingFunction"

export class $KeyMappingController implements $Iterable<($KeyMappingFunction)> {

constructor(arg0: $KeyMapping$Type, arg1: boolean)

public "add"(arg0: $KeyMappingFunction$Type): void
public "iterator"(): $Iterator<($KeyMappingFunction)>
public "getFunctions"(): $Iterable<($KeyMappingFunction)>
public "getKeyMapping"(): $KeyMapping
public "isPressed"(): boolean
public "setPressed"(arg0: boolean): void
public "isXaeroKey"(): boolean
public "spliterator"(): $Spliterator<($KeyMappingFunction)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$KeyMappingFunction>;
get "functions"(): $Iterable<($KeyMappingFunction)>
get "keyMapping"(): $KeyMapping
get "pressed"(): boolean
set "pressed"(value: boolean)
get "xaeroKey"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingController$Type = ($KeyMappingController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingController_ = $KeyMappingController$Type;
}}
declare module "packages/xaero/hud/minimap/info/$InfoDisplayIO" {
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"

export class $InfoDisplayIO {

constructor(arg0: $InfoDisplayManager$Type)

public "save"(arg0: $PrintWriter$Type): void
public "loadInfoDisplayOrderLine"(arg0: (string)[]): void
public "loadInfoDisplayLine"(arg0: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayIO$Type = ($InfoDisplayIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayIO_ = $InfoDisplayIO$Type;
}}
declare module "packages/xaero/hud/minimap/module/$MinimapSession" {
import {$WaypointSession, $WaypointSession$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapWorldManager, $MinimapWorldManager$Type} from "packages/xaero/hud/minimap/world/$MinimapWorldManager"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"
import {$MinimapWorldStateUpdater, $MinimapWorldStateUpdater$Type} from "packages/xaero/hud/minimap/world/state/$MinimapWorldStateUpdater"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$MinimapWorldState, $MinimapWorldState$Type} from "packages/xaero/hud/minimap/world/state/$MinimapWorldState"
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinimapDimensionHelper, $MinimapDimensionHelper$Type} from "packages/xaero/hud/minimap/world/$MinimapDimensionHelper"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$MinimapWorldManagerIO, $MinimapWorldManagerIO$Type} from "packages/xaero/hud/minimap/world/io/$MinimapWorldManagerIO"
import {$RadarSession, $RadarSession$Type} from "packages/xaero/hud/minimap/radar/$RadarSession"

export class $MinimapSession extends $ModuleSession<($MinimapSession)> {

constructor(arg0: $HudMod$Type, arg1: $HudModule$Type<($MinimapSession$Type)>, arg2: $ClientPacketListener$Type)

public "getWidth"(arg0: double): integer
public "getHeight"(arg0: double): integer
public "close"(): void
public "isActive"(): boolean
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getProcessor"(): $MinimapProcessor
public "getWorldManager"(): $MinimapWorldManager
public "getWorldStateUpdater"(): $MinimapWorldStateUpdater
public "getRadarSession"(): $RadarSession
public "getWaypointSession"(): $WaypointSession
public "getConfiguredWidth"(): integer
public "getHideMinimapUnderScreen"(): boolean
public "getHideMinimapUnderF3"(): boolean
public "getWorldState"(): $MinimapWorldState
public "getDimensionHelper"(): $MinimapDimensionHelper
public "getWorldManagerIO"(): $MinimapWorldManagerIO
public "prePotentialRender"(): void
public "getMc"(): $Minecraft
get "active"(): boolean
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "processor"(): $MinimapProcessor
get "worldManager"(): $MinimapWorldManager
get "worldStateUpdater"(): $MinimapWorldStateUpdater
get "radarSession"(): $RadarSession
get "waypointSession"(): $WaypointSession
get "configuredWidth"(): integer
get "hideMinimapUnderScreen"(): boolean
get "hideMinimapUnderF3"(): boolean
get "worldState"(): $MinimapWorldState
get "dimensionHelper"(): $MinimapDimensionHelper
get "worldManagerIO"(): $MinimapWorldManagerIO
get "mc"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapSession$Type = ($MinimapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapSession_ = $MinimapSession$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbstractWaypointRenderContext {
 "dimCoordinateScale": double

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWaypointRenderContext$Type = ($AbstractWaypointRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWaypointRenderContext_ = $AbstractWaypointRenderContext$Type;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters" {
import {$RadarIconForm, $RadarIconForm$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import {$RadarIconModelConfig, $RadarIconModelConfig$Type} from "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig"

export class $RadarIconCreator$Parameters {
readonly "variant": any
readonly "scale": float
readonly "defaultModelConfig": $RadarIconModelConfig
readonly "form": $RadarIconForm
readonly "debug": boolean

constructor(arg0: any, arg1: $RadarIconModelConfig$Type, arg2: $RadarIconForm$Type, arg3: float, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarIconCreator$Parameters$Type = ($RadarIconCreator$Parameters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarIconCreator$Parameters_ = $RadarIconCreator$Parameters$Type;
}}
declare module "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $ITrackedPlayerReader<P> {

 "getDimension"(arg0: P): $ResourceKey<($Level)>
 "getX"(arg0: P): double
 "getY"(arg0: P): double
 "getId"(arg0: P): $UUID
 "getZ"(arg0: P): double
}

export namespace $ITrackedPlayerReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedPlayerReader$Type<P> = ($ITrackedPlayerReader<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedPlayerReader_<P> = $ITrackedPlayerReader$Type<(P)>;
}}
declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$EntityRenderTracer" {
import {$ModelRenderTrace, $ModelRenderTrace$Type} from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRenderTracer {
static "TRACING_MODEL_RENDERS": boolean

constructor()

public "trace"<T extends $Entity>(arg0: $PoseStack$Type, arg1: T, arg2: $EntityRenderer$Type<(any)>): $List<($ModelRenderTrace)>
public "getEntityRendererModel"<T extends $Entity>(arg0: $EntityRenderer$Type<(any)>): $EntityModel<(T)>
public "onModelPartRender"(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "onModelRender"(arg0: $EntityModel$Type<(any)>, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderTracer$Type = ($EntityRenderTracer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderTracer_ = $EntityRenderTracer$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/serialization/data/$EntityRadarCategoryData" {
import {$FilterObjectCategoryData, $FilterObjectCategoryData$Type} from "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData"

export class $EntityRadarCategoryData extends $FilterObjectCategoryData<($EntityRadarCategoryData)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategoryData$Type = ($EntityRadarCategoryData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategoryData_ = $EntityRadarCategoryData$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/set/$WaypointSet" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$AccessorWaypointSet, $AccessorWaypointSet$Type} from "packages/xaeroplus/mixin/client/$AccessorWaypointSet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $WaypointSet implements $AccessorWaypointSet {


public "addTo"(arg0: $List$Type<($Waypoint$Type)>): void
public "getName"(): string
public "add"(arg0: $Waypoint$Type): void
public "add"(arg0: $Waypoint$Type, arg1: boolean): void
public "remove"(arg0: $Waypoint$Type): void
public "remove"(arg0: integer): $Waypoint
public "get"(arg0: integer): $Waypoint
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "addAll"(arg0: $Collection$Type<($Waypoint$Type)>): void
public "addAll"(arg0: $Collection$Type<($Waypoint$Type)>, arg1: boolean): void
public "set"(arg0: integer, arg1: $Waypoint$Type): $Waypoint
public "removeAll"(arg0: $Collection$Type<($Waypoint$Type)>): void
public "getWaypoints"(): $Iterable<($Waypoint)>
get "name"(): string
get "empty"(): boolean
get "waypoints"(): $Iterable<($Waypoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointSet$Type = ($WaypointSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointSet_ = $WaypointSet$Type;
}}
declare module "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer" {
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $InfoDisplayRenderer {
static readonly "DEPTH_OFFSET": integer

constructor()

public "render"(arg0: $GuiGraphics$Type, arg1: $MinimapSession$Type, arg2: $Minimap$Type, arg3: integer, arg4: integer, arg5: $BlockPos$Type, arg6: integer, arg7: integer, arg8: float, arg9: $MultiBufferSource$BufferSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoDisplayRenderer$Type = ($InfoDisplayRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoDisplayRenderer_ = $InfoDisplayRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarDefaultCategories" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarDefaultCategories {

constructor()

public "setupDefault"(arg0: $ModSettings$Type): $EntityRadarCategory
set "upDefault"(value: $ModSettings$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarDefaultCategories$Type = ($EntityRadarDefaultCategories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarDefaultCategories_ = $EntityRadarDefaultCategories$Type;
}}
declare module "packages/xaero/hud/path/$XaeroPath" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"

export class $XaeroPath {


public "resolveSibling"(arg0: string): $XaeroPath
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "resolve"(arg0: string): $XaeroPath
public "resolve"(arg0: $XaeroPath$Type): $XaeroPath
public "getParent"(): $XaeroPath
public static "root"(arg0: string, arg1: boolean): $XaeroPath
public static "root"(arg0: string): $XaeroPath
public "getRoot"(): $XaeroPath
public "getNodeCount"(): integer
public "applyToFilePath"(arg0: $Path$Type): $Path
public "getLastNode"(): string
public "getSubPath"(arg0: integer): $XaeroPath
public "getAtIndex"(arg0: integer): $XaeroPath
public "isSubOf"(arg0: $XaeroPath$Type): boolean
get "parent"(): $XaeroPath
get "nodeCount"(): integer
get "lastNode"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroPath$Type = ($XaeroPath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XaeroPath_ = $XaeroPath$Type;
}}
declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderContext" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTrackerMinimapElementRenderContext {
 "coloredBackgroundConsumer": $VertexConsumer
 "uniqueTextureUIObjectRenderer": $MultiTextureRenderTypeRenderer
 "renderEntityDimId": $ResourceKey<($Level)>
 "mapDimId": $ResourceKey<($Level)>
 "iconScale": float

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerMinimapElementRenderContext$Type = ($PlayerTrackerMinimapElementRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerMinimapElementRenderContext_ = $PlayerTrackerMinimapElementRenderContext$Type;
}}
declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntry" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$ConnectionLineType, $ConnectionLineType$Type} from "packages/xaero/hud/category/ui/entry/$ConnectionLineType"
import {$EditorListEntry, $EditorListEntry$Type} from "packages/xaero/hud/category/ui/entry/$EditorListEntry"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorListRootEntry$CenteredEntryFactory, $EditorListRootEntry$CenteredEntryFactory$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry$CenteredEntryFactory"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $EditorListRootEntry extends $EditorListEntry {

constructor(arg0: integer, arg1: integer, arg2: $GuiCategoryEditor$SettingRowList$Type<>, arg3: $ConnectionLineType$Type, arg4: $EditorNode$Type)

public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: float, arg8: $Font$Type, arg9: integer, arg10: integer, arg11: boolean, arg12: boolean): $EditorListEntry
public "withSubEntry"(arg0: $EditorListRootEntry$CenteredEntryFactory$Type): $EditorListRootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorListRootEntry$Type = ($EditorListRootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorListRootEntry_ = $EditorListRootEntry$Type;
}}
declare module "packages/xaero/hud/category/rule/$ObjectCategoryRule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ObjectCategoryRule<E, P> {


public "getName"(): string
public "toString"(): string
public "isFollowedBy"(arg0: E, arg1: P): boolean
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryRule$Type<E, P> = ($ObjectCategoryRule<(E), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryRule_<E, P> = $ObjectCategoryRule$Type<(E), (P)>;
}}
declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntry$CenteredEntryFactory" {
import {$EditorListRootEntry, $EditorListRootEntry$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import {$EditorListEntry, $EditorListEntry$Type} from "packages/xaero/hud/category/ui/entry/$EditorListEntry"

export interface $EditorListRootEntry$CenteredEntryFactory {

 "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $EditorListRootEntry$Type): $EditorListEntry

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $EditorListRootEntry$Type): $EditorListEntry
}

export namespace $EditorListRootEntry$CenteredEntryFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorListRootEntry$CenteredEntryFactory$Type = ($EditorListRootEntry$CenteredEntryFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorListRootEntry$CenteredEntryFactory_ = $EditorListRootEntry$CenteredEntryFactory$Type;
}}
declare module "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ObjectCategoryListRuleType<E, P, S> {

constructor(arg0: string, arg1: $BiFunction$Type<(E), (P), (S)>, arg2: $Supplier$Type<($Iterable$Type<(S)>)>, arg3: $Function$Type<(string), ($List$Type<(S)>)>, arg4: $Function$Type<(S), (string)>, arg5: $Function$Type<(string), (string)>, arg6: $Predicate$Type<(string)>, arg7: $List$Type<($ObjectCategoryListRuleType$Type<(E), (P), (any)>)>, arg8: $Map$Type<(string), ($ObjectCategoryListRuleType$Type<(E), (P), (any)>)>)

public "getId"(): string
public "getSerializer"(): $Function<(S), (string)>
public "getGetter"(): $BiFunction<(E), (P), (S)>
public "getAllElementSupplier"(): $Supplier<($Iterable<(S)>)>
public "getElementResolver"(): $Function<(string), ($List<(S)>)>
public "getStringFixer"(): $Function<(string), (string)>
public "getStringValidator"(): $Predicate<(string)>
get "id"(): string
get "serializer"(): $Function<(S), (string)>
get "getter"(): $BiFunction<(E), (P), (S)>
get "allElementSupplier"(): $Supplier<($Iterable<(S)>)>
get "elementResolver"(): $Function<(string), ($List<(S)>)>
get "stringFixer"(): $Function<(string), (string)>
get "stringValidator"(): $Predicate<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCategoryListRuleType$Type<E, P, S> = ($ObjectCategoryListRuleType<(E), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCategoryListRuleType_<E, P, S> = $ObjectCategoryListRuleType$Type<(E), (P), (S)>;
}}
declare module "packages/xaero/hud/category/ui/entry/$ConnectionLineType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConnectionLineType extends $Enum<($ConnectionLineType)> {
static readonly "PATH": $ConnectionLineType
static readonly "HEAD_LEAF": $ConnectionLineType
static readonly "TAIL_LEAF": $ConnectionLineType
static readonly "NONE": $ConnectionLineType


public static "values"(): ($ConnectionLineType)[]
public static "valueOf"(arg0: string): $ConnectionLineType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionLineType$Type = (("path") | ("tail_leaf") | ("none") | ("head_leaf")) | ($ConnectionLineType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionLineType_ = $ConnectionLineType$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushboxManager" {
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$PushBox, $PushBox$Type} from "packages/xaero/hud/pushbox/$PushBox"

export class $PushboxManager {

constructor()

public "getAll"(): $Iterable<($PushBox)>
public "add"(arg0: $PushBox$Type): void
get "all"(): $Iterable<($PushBox)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushboxManager$Type = ($PushboxManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushboxManager_ = $PushboxManager$Type;
}}
declare module "packages/xaero/hud/render/$HudRenderer" {
import {$PushboxHandler, $PushboxHandler$Type} from "packages/xaero/hud/pushbox/$PushboxHandler"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $HudRenderer {

constructor(arg0: $PushboxHandler$Type)

public "render"(arg0: $Hud$Type, arg1: $GuiGraphics$Type, arg2: float): void
public "getCustomVertexConsumers"(): $CustomVertexConsumers
public "getPushboxHandler"(): $PushboxHandler
get "customVertexConsumers"(): $CustomVertexConsumers
get "pushboxHandler"(): $PushboxHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudRenderer$Type = ($HudRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudRenderer_ = $HudRenderer$Type;
}}
declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FilterObjectCategory, $FilterObjectCategory$Type} from "packages/xaero/hud/category/$FilterObjectCategory"
import {$EntityRadarCategoryData, $EntityRadarCategoryData$Type} from "packages/xaero/hud/minimap/radar/category/serialization/data/$EntityRadarCategoryData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRadarCategory extends $FilterObjectCategory<($Entity), ($Player), ($EntityRadarCategoryData), ($EntityRadarCategory)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRadarCategory$Type = ($EntityRadarCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRadarCategory_ = $EntityRadarCategory$Type;
}}
declare module "packages/xaero/hud/pushbox/$PushBox" {
import {$PushboxHandler$State, $PushboxHandler$State$Type} from "packages/xaero/hud/pushbox/$PushboxHandler$State"

export class $PushBox {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer)

public "getX"(arg0: integer, arg1: integer): integer
public "push"(arg0: $PushboxHandler$State$Type, arg1: integer, arg2: integer): void
public "getY"(arg0: integer, arg1: integer): integer
public "update"(): void
public "isActive"(): boolean
public "setActive"(arg0: boolean): void
public "getVerticalBias"(): integer
public "getW"(arg0: integer, arg1: integer): integer
public "getAnchorX"(): float
public "getAnchorY"(): float
public "postUpdate"(): void
public "getH"(arg0: integer, arg1: integer): integer
get "active"(): boolean
set "active"(value: boolean)
get "verticalBias"(): integer
get "anchorX"(): float
get "anchorY"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PushBox$Type = ($PushBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PushBox_ = $PushBox$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$AbstractWaypointRenderContext, $AbstractWaypointRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $AbstractWaypointRenderProvider<C extends $AbstractWaypointRenderContext> extends $MinimapElementRenderProvider<($Waypoint), (C)> {
readonly "filter": $Predicate<($Waypoint)>

constructor()

public "getNext"(arg0: $MinimapElementRenderLocation$Type, arg1: C): $Waypoint
public "hasNext"(arg0: $MinimapElementRenderLocation$Type, arg1: C): boolean
public "end"(arg0: $MinimapElementRenderLocation$Type, arg1: C): void
public "begin"(arg0: $MinimapElementRenderLocation$Type, arg1: C): void
public "setupContextAndGetNext"(arg0: $MinimapElementRenderLocation$Type, arg1: C): $Waypoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWaypointRenderProvider$Type<C> = ($AbstractWaypointRenderProvider<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractWaypointRenderProvider_<C> = $AbstractWaypointRenderProvider$Type<(C)>;
}}
declare module "packages/xaero/hud/minimap/world/container/config/$RootConfig" {
import {$MinimapWorldConnectionManager, $MinimapWorldConnectionManager$Type} from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import {$WaypointsSort, $WaypointsSort$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsSort"

export class $RootConfig {
 "loaded": boolean

constructor(arg0: boolean)

public "isLoaded"(): boolean
public "setUsingDefaultTeleportCommand"(arg0: boolean): void
public "isUsingDefaultTeleportCommand"(): boolean
public "setUsingMultiworldDetection"(arg0: boolean): void
public "getServerTeleportCommandFormat"(): string
public "getServerTeleportCommandRotationFormat"(): string
public "setServerTeleportCommandFormat"(arg0: string): void
public "setServerTeleportCommandRotationFormat"(arg0: string): void
public "getSortType"(): $WaypointsSort
public "isTeleportationEnabled"(): boolean
public "isSortReversed"(): boolean
public "isIgnoreHeightmaps"(): boolean
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "resetSubWorldConnections"(arg0: boolean): void
public "isUsingMultiworldDetection"(): boolean
public "getDefaultMultiworldId"(): string
public "setDefaultMultiworldId"(arg0: string): void
public "setTeleportationEnabled"(arg0: boolean): void
public "setSortType"(arg0: $WaypointsSort$Type): void
public "toggleSortType"(): void
public "setSortReversed"(arg0: boolean): void
public "toggleSortReversed"(): void
public "isIgnoreServerLevelId"(): boolean
public "setIgnoreServerLevelId"(arg0: boolean): void
public "setIgnoreHeightmaps"(arg0: boolean): void
public "setLoaded"(arg0: boolean): void
get "loaded"(): boolean
set "usingDefaultTeleportCommand"(value: boolean)
get "usingDefaultTeleportCommand"(): boolean
set "usingMultiworldDetection"(value: boolean)
get "serverTeleportCommandFormat"(): string
get "serverTeleportCommandRotationFormat"(): string
set "serverTeleportCommandFormat"(value: string)
set "serverTeleportCommandRotationFormat"(value: string)
get "sortType"(): $WaypointsSort
get "teleportationEnabled"(): boolean
get "sortReversed"(): boolean
get "ignoreHeightmaps"(): boolean
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): string
set "defaultMultiworldId"(value: string)
set "teleportationEnabled"(value: boolean)
set "sortType"(value: $WaypointsSort$Type)
set "sortReversed"(value: boolean)
get "ignoreServerLevelId"(): boolean
set "ignoreServerLevelId"(value: boolean)
set "ignoreHeightmaps"(value: boolean)
set "loaded"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootConfig$Type = ($RootConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootConfig_ = $RootConfig$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/$WaypointTeleport" {
import {$WaypointSession, $WaypointSession$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export class $WaypointTeleport {
static readonly "TELEPORT_ANYWAY_COMMAND": string
static readonly "SLASH_TELEPORT_ANYWAY_COMMAND": string

constructor(arg0: $HudMod$Type, arg1: $WaypointSession$Type, arg2: $MinimapSession$Type)

public "isWorldTeleportable"(arg0: $MinimapWorld$Type): boolean
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $MinimapWorld$Type, arg2: $Screen$Type): void
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $MinimapWorld$Type, arg2: $Screen$Type, arg3: boolean): void
public "teleportAnyway"(): void
public "canTeleport"(arg0: boolean, arg1: $MinimapWorld$Type): boolean
public "isTeleportationSafe"(arg0: $MinimapWorld$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointTeleport$Type = ($WaypointTeleport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointTeleport_ = $WaypointTeleport$Type;
}}
declare module "packages/xaero/hud/render/module/$IModuleRenderer" {
import {$ModuleSession, $ModuleSession$Type} from "packages/xaero/hud/module/$ModuleSession"
import {$ModuleRenderContext, $ModuleRenderContext$Type} from "packages/xaero/hud/render/module/$ModuleRenderContext"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IModuleRenderer<MS extends $ModuleSession<(MS)>> {

 "render"(arg0: MS, arg1: $ModuleRenderContext$Type, arg2: $GuiGraphics$Type, arg3: float): void

(arg0: MS, arg1: $ModuleRenderContext$Type, arg2: $GuiGraphics$Type, arg3: float): void
}

export namespace $IModuleRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleRenderer$Type<MS> = ($IModuleRenderer<(MS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleRenderer_<MS> = $IModuleRenderer$Type<(MS)>;
}}
declare module "packages/xaero/hud/$Hud" {
import {$ModuleManager, $ModuleManager$Type} from "packages/xaero/hud/module/$ModuleManager"
import {$ModuleSessionHandler, $ModuleSessionHandler$Type} from "packages/xaero/hud/module/$ModuleSessionHandler"
import {$HudEventHandler, $HudEventHandler$Type} from "packages/xaero/hud/event/$HudEventHandler"
import {$PushboxManager, $PushboxManager$Type} from "packages/xaero/hud/pushbox/$PushboxManager"
import {$HudPresetManager, $HudPresetManager$Type} from "packages/xaero/hud/preset/$HudPresetManager"
import {$OldSystemCompatibility, $OldSystemCompatibility$Type} from "packages/xaero/hud/compat/$OldSystemCompatibility"

export class $Hud {

constructor(arg0: $ModuleManager$Type, arg1: $PushboxManager$Type, arg2: $HudPresetManager$Type, arg3: $HudEventHandler$Type, arg4: $ModuleSessionHandler$Type, arg5: $OldSystemCompatibility$Type)

public "getPushboxManager"(): $PushboxManager
public "getModuleManager"(): $ModuleManager
public "getSessionHandler"(): $ModuleSessionHandler
public "getPresetManager"(): $HudPresetManager
public "getEventHandler"(): $HudEventHandler
public "getOldSystemCompatibility"(): $OldSystemCompatibility
get "pushboxManager"(): $PushboxManager
get "moduleManager"(): $ModuleManager
get "sessionHandler"(): $ModuleSessionHandler
get "presetManager"(): $HudPresetManager
get "eventHandler"(): $HudEventHandler
get "oldSystemCompatibility"(): $OldSystemCompatibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hud$Type = ($Hud);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hud_ = $Hud$Type;
}}
declare module "packages/xaero/hud/controls/key/$KeyMappingControllerManager" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$KeyMappingController, $KeyMappingController$Type} from "packages/xaero/hud/controls/key/$KeyMappingController"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$KeyMappingFunction, $KeyMappingFunction$Type} from "packages/xaero/hud/controls/key/function/$KeyMappingFunction"

export class $KeyMappingControllerManager implements $Iterable<($KeyMappingController)> {

constructor()

public "iterator"(): $Iterator<($KeyMappingController)>
public "registerFunction"(arg0: $KeyMapping$Type, arg1: $KeyMappingFunction$Type): void
public "registerController"(arg0: $KeyMapping$Type, arg1: boolean, arg2: $Consumer$Type<($KeyMapping$Type)>): void
public "registerController"(arg0: $KeyMapping$Type, arg1: boolean): void
public "getController"(arg0: $KeyMapping$Type): $KeyMappingController
public "spliterator"(): $Spliterator<($KeyMappingController)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$KeyMappingController>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingControllerManager$Type = ($KeyMappingControllerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingControllerManager_ = $KeyMappingControllerManager$Type;
}}
declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory" {
import {$EditorListRootEntry, $EditorListRootEntry$Type} from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import {$ConnectionLineType, $ConnectionLineType$Type} from "packages/xaero/hud/category/ui/entry/$ConnectionLineType"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorListRootEntryFactory {

 "get"(arg0: $EditorNode$Type, arg1: $EditorNode$Type, arg2: integer, arg3: $ConnectionLineType$Type, arg4: $GuiCategoryEditor$SettingRowList$Type<>, arg5: integer, arg6: boolean): $EditorListRootEntry

(arg0: $EditorNode$Type, arg1: $EditorNode$Type, arg2: integer, arg3: $ConnectionLineType$Type, arg4: $GuiCategoryEditor$SettingRowList$Type<>, arg5: integer, arg6: boolean): $EditorListRootEntry
}

export namespace $EditorListRootEntryFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorListRootEntryFactory$Type = ($EditorListRootEntryFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorListRootEntryFactory_ = $EditorListRootEntryFactory$Type;
}}
declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointReader" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$WaypointMapRenderReader, $WaypointMapRenderReader$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderReader"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

/**
 * 
 * @deprecated
 */
export class $WaypointReader extends $WaypointMapRenderReader {

constructor()

/**
 * 
 * @deprecated
 */
public "isInteractable"(arg0: $MinimapElementRenderLocation$Type, arg1: $Waypoint$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBoxScale"(arg0: $MinimapElementRenderLocation$Type, arg1: $Waypoint$Type, arg2: $WaypointMapRenderContext$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointReader$Type = ($WaypointReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointReader_ = $WaypointReader$Type;
}}
declare module "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {


public "remove"(arg0: $UUID$Type): void
public "update"(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
public "reset"(): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$Type;
}}
declare module "packages/xaero/hud/minimap/radar/state/$RadarState" {
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RadarList, $RadarList$Type} from "packages/xaero/hud/minimap/radar/state/$RadarList"

export class $RadarState {

constructor()

public "getRadarLists"(): $Iterable<($RadarList)>
public "getListsReversedOrder"(): boolean
public "getListsGeneratedForConfig"(): $EntityRadarCategory
get "radarLists"(): $Iterable<($RadarList)>
get "listsReversedOrder"(): boolean
get "listsGeneratedForConfig"(): $EntityRadarCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadarState$Type = ($RadarState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadarState_ = $RadarState$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonCallback" {
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"
import {$EditorSimpleButtonNode, $EditorSimpleButtonNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"
import {$GuiCategoryEditor$SettingRowList, $GuiCategoryEditor$SettingRowList$Type} from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorSimpleButtonNode$ISimpleButtonCallback {

 "onButtonPress"(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type, arg2: $GuiCategoryEditor$SettingRowList$Type<>): void

(arg0: $EditorNode$Type, arg1: $EditorSimpleButtonNode$Type, arg2: $GuiCategoryEditor$SettingRowList$Type<>): void
}

export namespace $EditorSimpleButtonNode$ISimpleButtonCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorSimpleButtonNode$ISimpleButtonCallback$Type = ($EditorSimpleButtonNode$ISimpleButtonCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorSimpleButtonNode$ISimpleButtonCallback_ = $EditorSimpleButtonNode$ISimpleButtonCallback$Type;
}}
declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode" {
import {$EditorOptionsNode$IOptionsNodeIsActiveSupplier, $EditorOptionsNode$IOptionsNodeIsActiveSupplier$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier"
import {$EditorOptionNode, $EditorOptionNode$Type} from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorNode, $EditorNode$Type} from "packages/xaero/hud/category/ui/node/$EditorNode"

export class $EditorOptionsNode<V> extends $EditorNode {


public "getDisplayName"(): string
public "getCurrentValue"(): $EditorOptionNode<(V)>
public "setCurrentValue"(arg0: $EditorOptionNode$Type<(V)>): void
public "getMessageSupplier"(): $Supplier<(string)>
public "getIsActiveSupplier"(): $EditorOptionsNode$IOptionsNodeIsActiveSupplier
get "displayName"(): string
get "currentValue"(): $EditorOptionNode<(V)>
set "currentValue"(value: $EditorOptionNode$Type<(V)>)
get "messageSupplier"(): $Supplier<(string)>
get "isActiveSupplier"(): $EditorOptionsNode$IOptionsNodeIsActiveSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorOptionsNode$Type<V> = ($EditorOptionsNode<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorOptionsNode_<V> = $EditorOptionsNode$Type<(V)>;
}}
declare module "packages/xaero/hud/category/ui/$EditorCategoryNodeConverter" {
import {$ObjectCategory, $ObjectCategory$Type} from "packages/xaero/hud/category/$ObjectCategory"
import {$ObjectCategory$Builder, $ObjectCategory$Builder$Type} from "packages/xaero/hud/category/$ObjectCategory$Builder"
import {$EditorSettingsNode, $EditorSettingsNode$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EditorCategoryNode, $EditorCategoryNode$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import {$EditorCategoryNode$Builder, $EditorCategoryNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder"
import {$EditorSettingsNode$Builder, $EditorSettingsNode$Builder$Type} from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $EditorCategoryNodeConverter<C extends $ObjectCategory<(any), (C)>, ED extends $EditorCategoryNode<(C), (SD), (ED)>, CB extends $ObjectCategory$Builder<(C), (CB)>, SD extends $EditorSettingsNode<(any)>, SDB extends $EditorSettingsNode$Builder<(SD), (SDB)>, EDB extends $EditorCategoryNode$Builder<(C), (ED), (SD), (SDB), (EDB)>> {

constructor(arg0: $Supplier$Type<(CB)>, arg1: $Supplier$Type<(EDB)>)

public "convert"(arg0: ED): C
public "convert"(arg0: C, arg1: boolean): ED
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditorCategoryNodeConverter$Type<C, ED, CB, SD, SDB, EDB> = ($EditorCategoryNodeConverter<(C), (ED), (CB), (SD), (SDB), (EDB)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditorCategoryNodeConverter_<C, ED, CB, SD, SDB, EDB> = $EditorCategoryNodeConverter$Type<(C), (ED), (CB), (SD), (SDB), (EDB)>;
}}

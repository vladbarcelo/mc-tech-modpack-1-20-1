declare module "packages/xaero/common/minimap/radar/$MinimapRadarList" {
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RadarList, $RadarList$Type} from "packages/xaero/hud/minimap/radar/state/$RadarList"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $MinimapRadarList extends $RadarList {

/**
 * 
 * @deprecated
 */
constructor()

/**
 * 
 * @deprecated
 */
public "getEntities"(): $List<($Entity)>
/**
 * 
 * @deprecated
 */
public "getCategory"(): $EntityRadarCategory
/**
 * 
 * @deprecated
 */
public "setCategory"(arg0: $EntityRadarCategory$Type): $MinimapRadarList
get "entities"(): $List<($Entity)>
get "category"(): $EntityRadarCategory
set "category"(value: $EntityRadarCategory$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadarList$Type = ($MinimapRadarList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRadarList_ = $MinimapRadarList$Type;
}}
declare module "packages/xaero/common/gui/widget/render/$WidgetRenderer" {
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $WidgetRenderer<T extends $Widget> {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: T): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: T): void
}

export namespace $WidgetRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetRenderer$Type<T> = ($WidgetRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetRenderer_<T> = $WidgetRenderer$Type<(T)>;
}}
declare module "packages/xaero/common/icon/$XaeroIconAtlas" {
import {$XaeroIcon, $XaeroIcon$Type} from "packages/xaero/common/icon/$XaeroIcon"

export class $XaeroIconAtlas {


public "getWidth"(): integer
public "isFull"(): boolean
public "getTextureId"(): integer
public "getCurrentIndex"(): integer
public "createIcon"(): $XaeroIcon
get "width"(): integer
get "full"(): boolean
get "textureId"(): integer
get "currentIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroIconAtlas$Type = ($XaeroIconAtlas);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XaeroIconAtlas_ = $XaeroIconAtlas$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetLoadingHandler" {
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"

export class $WidgetLoadingHandler {

constructor(arg0: $WidgetScreenHandler$Type)

public "loadWidget"(serialized: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLoadingHandler$Type = ($WidgetLoadingHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLoadingHandler_ = $WidgetLoadingHandler$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem" {
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$Type} from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import {$ITrackedPlayerReader, $ITrackedPlayerReader$Type} from "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

/**
 * 
 * @deprecated
 */
export interface $IPlayerTrackerSystem<P> extends $IRenderedPlayerTracker<(P)> {

 "getReader"(): $ITrackedPlayerReader<(P)>
 "getTrackedPlayerIterator"(): $Iterator<(P)>
}

export namespace $IPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerTrackerSystem$Type<P> = ($IPlayerTrackerSystem<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerTrackerSystem_<P> = $IPlayerTrackerSystem$Type<(P)>;
}}
declare module "packages/xaero/common/validator/$NumericFieldValidator" {
import {$EditBox, $EditBox$Type} from "packages/net/minecraft/client/gui/components/$EditBox"

export class $NumericFieldValidator {

constructor()

public "validate"(arg0: $EditBox$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumericFieldValidator$Type = ($NumericFieldValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumericFieldValidator_ = $NumericFieldValidator$Type;
}}
declare module "packages/xaero/common/minimap/mcworld/$IXaeroMinimapClientWorld" {
import {$MinimapClientWorldData, $MinimapClientWorldData$Type} from "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData"

export interface $IXaeroMinimapClientWorld {

 "getXaero_minimapData"(): $MinimapClientWorldData
 "setXaero_minimapData"(arg0: $MinimapClientWorldData$Type): void
}

export namespace $IXaeroMinimapClientWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientWorld$Type = ($IXaeroMinimapClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimapClientWorld_ = $IXaeroMinimapClientWorld$Type;
}}
declare module "packages/xaero/common/effect/$NoMinimapEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoMinimapEffect extends $MinimapStatusEffect {

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoMinimapEffect$Type = ($NoMinimapEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoMinimapEffect_ = $NoMinimapEffect$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/common/server/player/$ServerPlayerData"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinecraftServerData, $MinecraftServerData$Type} from "packages/xaero/common/server/$MinecraftServerData"

export class $SyncedPlayerTracker {

constructor(arg0: $IXaeroMinimap$Type)

public "onTick"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: $MinecraftServerData$Type, arg3: $ServerPlayerData$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$Type = ($SyncedPlayerTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager" {
import {$IPlayerTrackerSystem, $IPlayerTrackerSystem$Type} from "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem"
import {$RenderedPlayerTrackerManager, $RenderedPlayerTrackerManager$Type} from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import {$IRenderedPlayerTracker, $IRenderedPlayerTracker$Type} from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

/**
 * 
 * @deprecated
 */
export class $PlayerTrackerSystemManager extends $RenderedPlayerTrackerManager {

constructor()

public "register"(arg0: string, arg1: $IRenderedPlayerTracker$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "register"(arg0: string, arg1: $IPlayerTrackerSystem$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "getSystems"(): $Iterable<($IPlayerTrackerSystem<(any)>)>
get "systems"(): $Iterable<($IPlayerTrackerSystem<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrackerSystemManager$Type = ($PlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTrackerSystemManager_ = $PlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementReader" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapElementReader as $MinimapElementReader$0, $MinimapElementReader$Type as $MinimapElementReader$0$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"

/**
 * 
 * @deprecated
 */
export class $MinimapElementReader<E, RC> extends $MinimapElementReader$0<(E), (RC)> {

constructor()

public "isHidden"(arg0: E, arg1: RC): boolean
public "shouldScaleBoxWithOptionalScale"(): boolean
public "getRightClickTitleBackgroundColor"(arg0: E): integer
public "isInteractable"(arg0: $MinimapElementRenderLocation$Type, arg1: E): boolean
/**
 * 
 * @deprecated
 */
public "isInteractable"(arg0: integer, arg1: E): boolean
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
/**
 * 
 * @deprecated
 */
public "getBoxScale"(arg0: integer, arg1: E, arg2: RC): float
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
declare module "packages/xaero/common/server/mods/opac/$SupportOPACServer" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/common/server/player/$ServerPlayerData"

export class $SupportOPACServer {

constructor()

public "getReceiveLocationsFromMutualAlliesConfigValue"(arg0: $ServerPlayer$Type): boolean
public "getReceiveLocationsFromPartyConfigValue"(arg0: $ServerPlayer$Type): boolean
public "updateShareLocationConfigValues"(arg0: $ServerPlayer$Type, arg1: $ServerPlayerData$Type): void
public "isPositionSyncAllowed"(arg0: integer, arg1: $ServerPlayerData$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOPACServer$Type = ($SupportOPACServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportOPACServer_ = $SupportOPACServer$Type;
}}
declare module "packages/xaero/common/message/basic/$ClientboundRulesPacket" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientboundRulesPacket extends $MinimapMessage<($ClientboundRulesPacket)> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
readonly "allowRadarOnServer": boolean
static "MAIN_CHANNEL": $ResourceLocation

constructor(arg0: boolean, arg1: boolean, arg2: boolean)

public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$Type = ($ClientboundRulesPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$Type;
}}
declare module "packages/xaero/common/settings/$ModOptions" {
import {$Option, $Option$Type} from "packages/xaero/common/settings/$Option"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$AccessorMinimapModOptions, $AccessorMinimapModOptions$Type} from "packages/xaeroplus/mixin/client/$AccessorMinimapModOptions"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $ModOptions implements $AccessorMinimapModOptions {
static "REQUIRES_INGAME": $CursorBox
static "modMain": $IXaeroMinimap
static "DEFAULT": $ModOptions
static "MINIMAP": $ModOptions
static "CAVE_MAPS": $ModOptions
static "CAVE_ZOOM": $ModOptions
static "DISPLAY_OTHER_TEAM": $ModOptions
static "WAYPOINTS": $ModOptions
static "INGAME_WAYPOINTS": $ModOptions
static "ZOOM": $ModOptions
static "SIZE": $ModOptions
static "EAMOUNT": $ModOptions
static "NORTH": $ModOptions
static "DEATHPOINTS": $ModOptions
static "OLD_DEATHPOINTS": $ModOptions
static "CHUNK_GRID": $ModOptions
static "SLIME_CHUNKS": $ModOptions
static "SAFE_MAP": $ModOptions
static "OPACITY": $ModOptions
static "WAYPOINTS_ICON_SCALE": $ModOptions
static "WAYPOINTS_DISTANCE_SCALE": $ModOptions
static "WAYPOINTS_NAME_SCALE": $ModOptions
static "WAYPOINTS_CLOSE_SCALE": $ModOptions
static "AA": $ModOptions
static "DISTANCE": $ModOptions
static "COLOURS": $ModOptions
static "LIGHT": $ModOptions
static "REDSTONE": $ModOptions
static "DOTS_SIZE": $ModOptions
static "DOTS_STYLE": $ModOptions
static "HEADS_SCALE": $ModOptions
static "DOT_NAME_SCALE": $ModOptions
static "COMPASS": $ModOptions
static "ENTITY_HEIGHT": $ModOptions
static "START_FADING_AT": $ModOptions
static "FLOWERS": $ModOptions
static "KEEP_WP_NAMES": $ModOptions
static "WAYPOINTS_DISTANCE": $ModOptions
static "WAYPOINTS_DISTANCE_MIN": $ModOptions
static "WAYPOINTS_ALL_SETS": $ModOptions
static "ARROW_SCALE": $ModOptions
static "ARROW_COLOUR": $ModOptions
static "SMOOTH_DOTS": $ModOptions
static "ENTITY_NAMETAGS": $ModOptions
static "HEIGHT_LIMIT": $ModOptions
static "WORLD_MAP": $ModOptions
static "TERRAIN_DEPTH": $ModOptions
static "TERRAIN_SLOPES": $ModOptions
static "MAIN_ENTITY_AS": $ModOptions
static "BLOCK_TRANSPARENCY": $ModOptions
static "WAYPOINT_OPACITY_INGAME": $ModOptions
static "WAYPOINT_OPACITY_MAP": $ModOptions
static "WAYPOINT_LOOKING_ANGLE": $ModOptions
static "WAYPOINT_VERTICAL_LOOKING_ANGLE": $ModOptions
static "HIDE_WORLD_NAMES": $ModOptions
static "OPEN_SLIME_SETTINGS": $ModOptions
static "ALWAYS_SHOW_DISTANCE": $ModOptions
static "CROSS_DIMENSIONAL_TP": $ModOptions
static "BIOMES_VANILLA": $ModOptions
static "CENTERED_ENLARGED": $ModOptions
static "ZOOM_ON_ENLARGE": $ModOptions
static "MINIMAP_TEXT_ALIGN": $ModOptions
static "COMPASS_LOCATION": $ModOptions
static "CAVE_MAPS_DEPTH": $ModOptions
static "HIDE_WP_COORDS": $ModOptions
static "PLAYER_ARROW_OPACITY": $ModOptions
static "IGNORE_HEIGHTMAPS": $ModOptions
static "WAYPOINTS_BOTTOM": $ModOptions
static "MINIMAP_SHAPE": $ModOptions
static "LIGHT_OVERLAY_TYPE": $ModOptions
static "LIGHT_OVERLAY_COLOR": $ModOptions
static "LIGHT_OVERLAY_MAX_LIGHT": $ModOptions
static "LIGHT_OVERLAY_MIN_LIGHT": $ModOptions
static "UI_SCALE": $ModOptions
static "BOSS_HEALTH_PUSHBOX": $ModOptions
static "POTION_EFFECTS_PUSHBOX": $ModOptions
static "MINIMAP_FRAME": $ModOptions
static "MINIMAP_FRAME_COLOR": $ModOptions
static "COMPASS_SCALE": $ModOptions
static "COMPASS_COLOR": $ModOptions
static "ICON_NAME_FALLBACK": $ModOptions
static "MULTIPLE_WAYPOINT_INFO": $ModOptions
static "UPDATE_NOTIFICATION": $ModOptions
static "ADJUST_HEIGHT_FOR_SHORT_BLOCKS": $ModOptions
static "AUTO_CONVERT_TO_KM": $ModOptions
static "WP_DISTANCE_PRECISION": $ModOptions
static "RADAR_Y_DISPLAYED": $ModOptions
static "MANUAL_CAVE_MODE_START": $ModOptions
static "CHUNK_GRID_LINE_WIDTH": $ModOptions
static "RADAR_OVER_FRAME": $ModOptions
static "RADAR_DISPLAYED": $ModOptions
static "RADAR_NAMES_DISPLAYED": $ModOptions
static "RADAR_ICONS_DISPLAYED": $ModOptions
static "MAIN_DOT_SIZE": $ModOptions
static "PARTIAL_Y_TELEPORTATION": $ModOptions
static "DELETE_REACHED_DEATHPOINTS": $ModOptions
static "HIDE_MINIMAP_UNDER_SCREEN": $ModOptions
static "HIDE_MINIMAP_UNDER_F3": $ModOptions
static "NORTH_COMPASS_COLOR": $ModOptions
static "TEMPORARY_WAYPOINTS_GLOBAL": $ModOptions
static "KEEP_ENLARGED_UNLOCKED": $ModOptions
static "TOGGLED_ENLARGED": $ModOptions
static "DISPLAY_STAINED_GLASS": $ModOptions
static "WAYPOINT_ONMAP_SCALE": $ModOptions
static "SWITCH_TO_AUTO_ON_DEATH": $ModOptions
static "INFO_DISPLAY_BG_OPACITY": $ModOptions
static "CAVE_MODE_TOGGLE_TIMER": $ModOptions
static "LEGIBLE_CAVE_MAPS": $ModOptions
static "BIOME_BLENDING": $ModOptions
static "TRACKED_PLAYERS_ON_MAP": $ModOptions
static "TRACKED_PLAYERS_IN_WORLD": $ModOptions
static "TRACKED_PLAYER_WORLD_ICON_SCALE": $ModOptions
static "TRACKED_PLAYER_WORLD_NAME_SCALE": $ModOptions
static "TRACKED_PLAYER_MINIMAP_ICON_SCALE": $ModOptions
static "PAC_CLAIMS": $ModOptions
static "PAC_CLAIMS_FILL_OPACITY": $ModOptions
static "PAC_CLAIMS_BORDER_OPACITY": $ModOptions
static "PAC_CURRENT_CLAIM": $ModOptions
static "SHOW_EFFECTS": $ModOptions
static "SHOW_ARMOR": $ModOptions
static "BETTER_SPRINT": $ModOptions
static "KEEP_SNEAK": $ModOptions
static "ENCHANT_COLOR": $ModOptions
static "DURABILITY": $ModOptions
static "NOTIFICATIONS": $ModOptions
static "NOTIFICATIONS_HUNGER": $ModOptions
static "NOTIFICATIONS_HUNGER_LOW": $ModOptions
static "NOTIFICATIONS_HP": $ModOptions
static "NOTIFICATIONS_HP_LOW": $ModOptions
static "NOTIFICATIONS_TNT": $ModOptions
static "NOTIFICATIONS_ARROW": $ModOptions
static "NOTIFICATIONS_AIR": $ModOptions
static "NOTIFICATIONS_AIR_LOW": $ModOptions
static "XP": $ModOptions
static "NUMBERS": $ModOptions
static "SHOW_ENCHANTS": $ModOptions
static "ARCHERY": $ModOptions
static "POTION_NAMES": $ModOptions
static "POTION_EFFECTS_BLINK": $ModOptions
static "ENTITY_INFO": $ModOptions
static "ENTITY_INFO_STAY": $ModOptions
static "ENTITY_INFO_DISTANCE": $ModOptions
static "ENTITY_INFO_MAX_HEARTS": $ModOptions
static "ENTITY_INFO_NUMBERS": $ModOptions
static "ENTITY_INFO_EFFECTS": $ModOptions
static "ENTITY_INFO_EFFECTS_SCALE": $ModOptions
static "SHOW_FULL_AMOUNT": $ModOptions
static "ENTITY_INFO_ARMOUR_NUMBERS": $ModOptions
static "ENTITY_INFO_ARMOUR": $ModOptions
static "SHOW_ENTITY_MODEL": $ModOptions
static "ITEM_TOOLTIP": $ModOptions
static "ITEM_TOOLTIP_MIN_LINES": $ModOptions
static "ITEM_TOOLTIP_TIME": $ModOptions
static "ARMOUR_MAIN_HAND": $ModOptions
static "ARMOUR_OFF_HAND": $ModOptions
static "HELD_ITEMS_CENTERED_POSITION": $ModOptions
static "SCALED_MAX_WAYPOINT_DISTANCE": $ModOptions
readonly "enumBoolean": boolean


public static "init"(arg0: $IXaeroMinimap$Type): void
public "getEnumDouble"(): boolean
public "getEnumBoolean"(): boolean
public "setValueMax"(arg0: float): void
public "normalizeValue"(arg0: double): double
public "snapToStepClamp"(arg0: double): double
public "denormalizeValue"(arg0: double): double
public "getEnumStringRaw"(): string
public "getValueStep"(): double
public "getValueMax"(): double
public "getValueMin"(): double
public "isIngameOnly"(): boolean
public "getEnumString"(): string
public "getTooltip"(): $CursorBox
public "getXOption"(): $Option
get "enumDouble"(): boolean
get "enumBoolean"(): boolean
set "valueMax"(value: float)
get "enumStringRaw"(): string
get "valueStep"(): double
get "valueMax"(): double
get "valueMin"(): double
get "ingameOnly"(): boolean
get "enumString"(): string
get "tooltip"(): $CursorBox
get "xOption"(): $Option
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModOptions$Type = ($ModOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModOptions_ = $ModOptions$Type;
}}
declare module "packages/xaero/common/$PlatformContextLoaderClientOnly" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderClientOnly {

constructor()

public "preInit"(arg0: string, arg1: $IXaeroMinimap$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderClientOnly$Type = ($PlatformContextLoaderClientOnly);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContextLoaderClientOnly_ = $PlatformContextLoaderClientOnly$Type;
}}
declare module "packages/xaero/common/gui/$IScreenBase" {
import {$IDropDownContainer, $IDropDownContainer$Type} from "packages/xaero/common/gui/dropdown/$IDropDownContainer"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IScreenBase extends $IDropDownContainer {

 "shouldSkipWorldRender"(): boolean
 "getEscape"(): $Screen
 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
}

export namespace $IScreenBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenBase$Type = ($IScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenBase_ = $IScreenBase$Type;
}}
declare module "packages/xaero/common/events/$CommonEvents" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $CommonEvents {

constructor(arg0: $IXaeroMinimap$Type)

public "onPlayerLogIn"(arg0: $Player$Type): void
public "onServerStarting"(arg0: $MinecraftServer$Type): void
public "onServerStopped"(arg0: $MinecraftServer$Type): void
public "onPlayerWorldJoin"(arg0: $ServerPlayer$Type): void
public "handlePlayerTickStart"(arg0: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonEvents$Type = ($CommonEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonEvents_ = $CommonEvents$Type;
}}
declare module "packages/xaero/common/misc/$MapFactory" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MapFactory {

 "get"<K, V>(): $Map<(K), (V)>

(): $Map<(K), (V)>
}

export namespace $MapFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFactory$Type = ($MapFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapFactory_ = $MapFactory$Type;
}}
declare module "packages/xaero/common/$IXaeroMinimap" {
import {$FieldValidatorHolder, $FieldValidatorHolder$Type} from "packages/xaero/common/validator/$FieldValidatorHolder"
import {$PlatformContext, $PlatformContext$Type} from "packages/xaero/common/$PlatformContext"
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$InterfaceRenderer, $InterfaceRenderer$Type} from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import {$HudIO, $HudIO$Type} from "packages/xaero/hud/io/$HudIO"
import {$ClientEventsListener, $ClientEventsListener$Type} from "packages/xaero/common/events/$ClientEventsListener"
import {$PlayerTrackerSystemManager, $PlayerTrackerSystemManager$Type} from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$Type} from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import {$HudRenderer, $HudRenderer$Type} from "packages/xaero/hud/render/$HudRenderer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$WidgetLoadingHandler, $WidgetLoadingHandler$Type} from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"
import {$CommonConfigIO, $CommonConfigIO$Type} from "packages/xaero/common/config/$CommonConfigIO"
import {$PatreonMod, $PatreonMod$Type} from "packages/xaero/common/patreon/$PatreonMod"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$GuiHelper, $GuiHelper$Type} from "packages/xaero/common/gui/$GuiHelper"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$RenderedPlayerTrackerManager, $RenderedPlayerTrackerManager$Type} from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import {$ControlsRegister, $ControlsRegister$Type} from "packages/xaero/hud/controls/$ControlsRegister"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$SupportServerMods, $SupportServerMods$Type} from "packages/xaero/common/server/mods/$SupportServerMods"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$PlayerTrackerMinimapElementRenderer, $PlayerTrackerMinimapElementRenderer$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InterfaceManager, $InterfaceManager$Type} from "packages/xaero/common/interfaces/$InterfaceManager"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"

export interface $IXaeroMinimap {

 "setSettings"(arg0: $ModSettings$Type): void
 "getSettings"(): $ModSettings
 "isStandalone"(): boolean
 "getInterfaces"(): $InterfaceManager
 "getMessage"(): string
 "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
 "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
 "setMessage"(arg0: string): void
 "getModId"(): string
 "getCommonConfig"(): $CommonConfig
 "isLoadedClient"(): boolean
 "isLoadedServer"(): boolean
 "ensureControlsRegister"(): void
 "getVersionID"(): string
 "resetSettings"(): void
 "setOutdated"(arg0: boolean): void
 "getLatestVersion"(): string
 "setLatestVersion"(arg0: string): void
 "getNewestUpdateID"(): integer
 "setNewestUpdateID"(arg0: integer): void
 "getFileLayoutID"(): string
 "getWaypointsFile"(): $Path
 "getWaypointsFolder"(): $Path
 "getWidgetScreenHandler"(): $WidgetScreenHandler
 "getWidgetLoader"(): $WidgetLoadingHandler
 "getSupportMods"(): $SupportMods
 "getModEvents"(): $ModClientEvents
 "getGuiHelper"(): $GuiHelper
 "getFieldValidators"(): $FieldValidatorHolder
 "getControlsRegister"(): $ControlsRegister
 "getInterfaceRenderer"(): $InterfaceRenderer
 "setLatestVersionMD5"(arg0: string): void
 "getLatestVersionMD5"(): string
 "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
 "getPlayerTracker"(): $RenderedPlayerTrackerManager
 "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
 "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$Type): void
 "getMessageHandler"(): $MinimapMessageHandler
 "getSupportServerMods"(): $SupportServerMods
 "setCommonConfigIO"(arg0: $CommonConfigIO$Type): void
 "setCommonConfig"(arg0: $CommonConfig$Type): void
 "getCommonConfigIO"(): $CommonConfigIO
 "getClientEventsListener"(): $ClientEventsListener
 "getPlatformContext"(): $PlatformContext
 "getModClientEvents"(): $ModClientEvents
 "getModCommonEvents"(): $ModCommonEvents
 "tryLoadLater"(): void
 "tryLoadLaterServer"(): void
 "getHudRenderer"(): $HudRenderer
 "isFirstStageLoaded"(): boolean
 "getVersionsURL"(): string
 "getUpdateLink"(): string
 "getSettingsKey"(): any
 "createSession"(): $XaeroMinimapSession
 "getConfigFile"(): $Path
 "getCommonEvents"(): $CommonEvents
 "getEvents"(): $ClientEvents
 "isFairPlay"(): boolean
 "getHud"(): $Hud
 "getHudIO"(): $HudIO
 "isOutdated"(): boolean
 "getPatreon"(): $PatreonMod
 "getMinimap"(): $Minimap
 "getModJAR"(): $File
}

export namespace $IXaeroMinimap {
const old_waypointsFile: $Path
const wrongWaypointsFile: $File
const wrongWaypointsFolder: $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimap$Type = ($IXaeroMinimap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimap_ = $IXaeroMinimap$Type;
}}
declare module "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"
import {$ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0, $ClientSyncedTrackedPlayerManager$Type as $ClientSyncedTrackedPlayerManager$0$Type} from "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

/**
 * 
 * @deprecated
 */
export class $ClientSyncedTrackedPlayerManager extends $ClientSyncedTrackedPlayerManager$0 {

constructor()

/**
 * 
 * @deprecated
 */
public "remove"(arg0: $UUID$Type): void
/**
 * 
 * @deprecated
 */
public "update"(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): void
/**
 * 
 * @deprecated
 */
public "reset"(): void
/**
 * 
 * @deprecated
 */
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
declare module "packages/xaero/common/gui/$ScreenBase" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$IScreenBase, $IScreenBase$Type} from "packages/xaero/common/gui/$IScreenBase"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $ScreenBase extends $Screen implements $IScreenBase {
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


public static "tryToGetEscape"(arg0: $Screen$Type): $Screen
public "renderEscapeScreen"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldSkipWorldRender"(): boolean
public "onDropdownOpen"(arg0: $DropDownWidget$Type): void
public "onDropdownClosed"(arg0: $DropDownWidget$Type): void
public "replaceWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "replaceRenderableWidget"(arg0: $AbstractWidget$Type, arg1: $AbstractWidget$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "onClose"(): void
public "getEscape"(): $Screen
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "escape"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBase$Type = ($ScreenBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBase_ = $ScreenBase$Type;
}}
declare module "packages/xaero/common/server/mods/$SupportWorldMapServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportWorldMapServer {

constructor()

public "supportsTrackedPlayers"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportWorldMapServer$Type = ($SupportWorldMapServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportWorldMapServer_ = $SupportWorldMapServer$Type;
}}
declare module "packages/xaero/common/gui/$GuiHelper" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MyOptions, $MyOptions$Type} from "packages/xaero/common/gui/$MyOptions"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/common/gui/$GuiSettings"

export class $GuiHelper {

constructor(arg0: $IXaeroMinimap$Type)

public "openMinimapSettingsFromScreen"(arg0: $Screen$Type, arg1: $Screen$Type): void
public "openSettingsGui"(arg0: $ModOptions$Type): void
public "getMainSettingsScreen"(arg0: $Screen$Type): $GuiSettings
public "onResetCancel"(arg0: $Screen$Type, arg1: $Screen$Type): void
public "getMyOptions"(): $MyOptions
public "openMainSettingsFromScreen"(arg0: $Screen$Type, arg1: $Screen$Type): void
get "myOptions"(): $MyOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiHelper$Type = ($GuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiHelper_ = $GuiHelper$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointsManager" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Hashtable, $Hashtable$Type} from "packages/java/util/$Hashtable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$HudModule, $HudModule$Type} from "packages/xaero/hud/module/$HudModule"
import {$WaypointSet, $WaypointSet$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSet"
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/**
 * 
 * @deprecated
 */
export class $WaypointsManager extends $MinimapSession {
static readonly "customWaypoints": $Hashtable<(string), ($Hashtable<(integer), ($Waypoint)>)>

constructor(arg0: $HudMod$Type, arg1: $HudModule$Type<($MinimapSession$Type)>, arg2: $ClientPacketListener$Type)

/**
 * 
 * @deprecated
 */
public "isWorldTeleportable"(arg0: $WaypointWorld$Type): boolean
/**
 * 
 * @deprecated
 */
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $WaypointWorld$Type, arg2: $Screen$Type, arg3: boolean): void
/**
 * 
 * @deprecated
 */
public "teleportToWaypoint"(arg0: $Waypoint$Type, arg1: $WaypointWorld$Type, arg2: $Screen$Type): void
/**
 * 
 * @deprecated
 */
public "getWaypoints"(): $WaypointSet
/**
 * 
 * @deprecated
 */
public "getDimensionDivision"(arg0: $WaypointWorld$Type): double
/**
 * 
 * @deprecated
 */
public "getDimensionDivision"(arg0: string): double
/**
 * 
 * @deprecated
 */
public "getCurrentWorld"(arg0: string, arg1: string): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getCurrentWorld"(): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getDimCoordinateScale"(arg0: $WaypointWorld$Type): double
/**
 * 
 * @deprecated
 */
public "createDeathpoint"(arg0: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "getDimensionKeyForDirectoryName"(arg0: string): $ResourceKey<($Level)>
/**
 * 
 * @deprecated
 */
public "getCurrentContainerAndWorldID"(arg0: string, arg1: string): string
/**
 * 
 * @deprecated
 */
public "getCurrentContainerAndWorldID"(): string
/**
 * 
 * @deprecated
 */
public "getCurrentOriginContainerID"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "getCurrentOriginContainerID"(): string
/**
 * 
 * @deprecated
 */
public "getAutoWorld"(): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "isMultiplayer"(arg0: string): boolean
/**
 * 
 * @deprecated
 */
public "teleportAnyway"(): void
/**
 * 
 * @deprecated
 */
public "canTeleport"(arg0: boolean, arg1: $WaypointWorld$Type): boolean
/**
 * 
 * @deprecated
 */
public "onServerLevelId"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getWorldContainerNullable"(arg0: string): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "getDimensionDirectoryName"(arg0: $ResourceKey$Type<($Level$Type)>): string
/**
 * 
 * @deprecated
 */
public "findDimensionKey"(arg0: string): $ResourceKey<($Level)>
/**
 * 
 * @deprecated
 */
public "ignoreContainerCase"(arg0: string, arg1: string): string
/**
 * 
 * @deprecated
 */
public "getNewAutoWorldID"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: boolean): string
/**
 * 
 * @deprecated
 */
public "getCurrentContainerID"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "getCurrentContainerID"(): string
/**
 * 
 * @deprecated
 */
public "getCurrentWorldID"(): string
/**
 * 
 * @deprecated
 */
public "getCurrentWorldID"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "getAutoRootContainerID"(): string
/**
 * 
 * @deprecated
 */
public "getAutoContainerID"(): string
/**
 * 
 * @deprecated
 */
public "getAutoWorldID"(): string
/**
 * 
 * @deprecated
 */
public "getWorldContainer"(arg0: string): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "addWorldContainer"(arg0: string): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "removeContainer"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "containerExists"(arg0: string): boolean
/**
 * 
 * @deprecated
 */
public "updateWorldIds"(): void
/**
 * 
 * @deprecated
 */
public "updateWaypoints"(): void
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: double): void
/**
 * 
 * @deprecated
 */
public "createTemporaryWaypoints"(arg0: $WaypointWorld$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "isTeleportationSafe"(arg0: $WaypointWorld$Type): boolean
/**
 * 
 * @deprecated
 */
public "setWaypoints"(arg0: $WaypointSet$Type): void
/**
 * 
 * @deprecated
 */
public "getServerWaypoints"(): $List<($Waypoint)>
/**
 * 
 * @deprecated
 */
public "getWaypointMap"(): $HashMap<(string), ($WaypointWorldContainer)>
/**
 * 
 * @deprecated
 */
public "setCurrentSpawn"(arg0: $BlockPos$Type, arg1: $ClientLevel$Type): void
/**
 * 
 * @deprecated
 */
public "getCustomContainerID"(): string
/**
 * 
 * @deprecated
 */
public "setCustomContainerID"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "getCustomWorldID"(): string
/**
 * 
 * @deprecated
 */
public "setCustomWorldID"(arg0: string): void
/**
 * 
 * @deprecated
 */
public static "getCustomWaypoints"(arg0: string): $Hashtable<(integer), ($Waypoint)>
/**
 * 
 * @deprecated
 */
public "getWorld"(arg0: string, arg1: string): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "addWorld"(arg0: string, arg1: string): $WaypointWorld
get "waypoints"(): $WaypointSet
get "currentWorld"(): $WaypointWorld
get "currentContainerAndWorldID"(): string
get "currentOriginContainerID"(): string
get "autoWorld"(): $WaypointWorld
get "currentContainerID"(): string
get "currentWorldID"(): string
get "autoRootContainerID"(): string
get "autoContainerID"(): string
get "autoWorldID"(): string
set "waypoints"(value: $WaypointSet$Type)
get "serverWaypoints"(): $List<($Waypoint)>
get "waypointMap"(): $HashMap<(string), ($WaypointWorldContainer)>
get "customContainerID"(): string
set "customContainerID"(value: string)
get "customWorldID"(): string
set "customWorldID"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsManager$Type = ($WaypointsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsManager_ = $WaypointsManager$Type;
}}
declare module "packages/xaero/common/settings/$ModSettings" {
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$EntityRadarBackwardsCompatibilityConfig, $EntityRadarBackwardsCompatibilityConfig$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$HudSession, $HudSession$Type} from "packages/xaero/hud/$HudSession"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $ModSettings {
static "defaultSettings": integer
static "ignoreUpdate": integer
static readonly "format": string
static readonly "ENCHANT_COLORS": (string)[]
static readonly "ENCHANT_COLOR_NAMES": (string)[]
static readonly "COLORS": (integer)[]
static "serverSettings": integer
/**
 * 
 * @deprecated
 */
static "keyBindZoom": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyBindZoom1": $KeyMapping
/**
 * 
 * @deprecated
 */
static "newWaypoint": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyWaypoints": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyLargeMap": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleMap": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleWaypoints": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleMapWaypoints": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleSlimes": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleGrid": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyInstantWaypoint": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keySwitchSet": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyAllSets": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyLightOverlay": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleRadar": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyReverseEntityRadar": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyManualCaveMode": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyAlternativeListPlayers": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayersOnMap": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayersInWorld": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyToggleTrackedPlayers": $KeyMapping
/**
 * 
 * @deprecated
 */
static "keyTogglePacPlayers": $KeyMapping
static "keyTogglePacChunkClaims": $KeyMapping
static "minimapItemId": string
static "minimapItem": $Item
 "zoom": integer
static readonly "zooms": (float)[]
 "caveMaps": integer
 "caveZoom": integer
 "chunkGrid": integer
 "slimeChunks": boolean
 "mapSafeMode": boolean
 "distance": integer
static readonly "distanceTypes": (string)[]
static readonly "blockColourTypes": (string)[]
 "compassOverEverything": boolean
 "minimapOpacity": double
 "waypointsIngameCloseScale": double
static "settingsButton": boolean
static "updateNotification": boolean
 "keepWaypointNames": boolean
 "waypointsDistanceMin": double
 "defaultWaypointTPCommandFormat": string
 "defaultWaypointTPCommandRotationFormat": string
 "arrowScale": double
 "arrowColour": integer
 "arrowColourNames": (string)[]
static "arrowColours": ((float)[])[]
 "smoothDots": boolean
static readonly "ENTITY_ICONS_OPTIONS": (string)[]
 "mainEntityAs": integer
 "blockTransparency": boolean
 "waypointOpacityIngame": integer
 "waypointOpacityMap": integer
 "allowWrongWorldTeleportation": boolean
 "hideWorldNames": integer
 "openSlimeSettings": boolean
 "alwaysShowDistance": boolean
static readonly "ENTITY_NAMES_OPTIONS": (string)[]
 "renderLayerIndex": integer
 "crossDimensionalTp": boolean
 "differentiateByServerAddress": boolean
 "lookingAtAngle": integer
 "lookingAtAngleVertical": integer
 "centeredEnlarged": boolean
 "zoomOnEnlarged": integer
 "minimapTextAlign": integer
 "waypointsMutualEdit": boolean
 "hideWaypointCoordinates": boolean
 "renderAllSets": boolean
 "playerArrowOpacity": integer
 "waypointsBottom": boolean
 "minimapShape": integer
 "lightOverlayType": integer
 "lightOverlayMaxLight": integer
 "lightOverlayMinLight": integer
 "lightOverlayColor": integer
static readonly "DOTS_STYLES": (string)[]
 "debugEntityIcons": boolean
static readonly "PUSHBOX_OPTIONS": (string)[]
 "bossHealthPushBox": integer
 "potionEffectPushBox": integer
static readonly "FRAME_OPTIONS": (string)[]
 "minimapFrame": integer
 "minimapFrameColor": integer
static readonly "COMPASS_OPTIONS": (string)[]
 "compassLocation": integer
 "compassColor": integer
 "debugEntityVariantIds": boolean
 "displayMultipleWaypointInfo": integer
 "adjustHeightForCarpetLikeBlocks": boolean
 "autoConvertWaypointDistanceToKmThreshold": integer
 "waypointDistancePrecision": integer
 "mainDotSize": integer
 "partialYTeleportation": boolean
 "deleteReachedDeathpoints": boolean
 "hideMinimapUnderScreen": boolean
 "hideMinimapUnderF3": boolean
 "manualCaveModeStartAuto": boolean
 "manualCaveModeStart": integer
 "chunkGridLineWidth": integer
 "temporaryWaypointsGlobal": boolean
 "keepUnlockedWhenEnlarged": boolean
 "enlargedMinimapAToggle": boolean
static readonly "RADAR_OVER_MAP_OPTIONS": (string)[]
 "displayTrackedPlayersOnMap": boolean
 "displayTrackedPlayersInWorld": boolean
 "displayCurrentClaim": boolean
 "radarHideInvisibleEntities": boolean
 "waypointOnMapScale": integer
 "switchToAutoOnDeath": boolean
 "infoDisplayBackgroundOpacity": integer
 "caveModeToggleTimer": integer
 "allowInternetAccess": boolean
 "dimensionScaledMaxWaypointDistance": boolean

constructor(arg0: $IXaeroMinimap$Type)

public "handler$boj000$xaeroplus$setOptionFloatValue"(o: $ModOptions$Type, f: double, ci: $CallbackInfo$Type): void
public "handler$boj000$xaeroplus$getOptionFloatValue"(o: $ModOptions$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "resetEntityRadarBackwardsCompatibilityConfig"(): void
public "handler$boj000$xaeroplus$getOptionValueName"(o: $ModOptions$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$boj000$xaeroplus$getSliderOptionText"(o: $ModOptions$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$boj000$xaeroplus$getClientBooleanValue"(o: $ModOptions$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "getWaypointsIngameIconScale"(): float
public "handler$boj000$xaeroplus$modifyMinimapSize"(cir: $CallbackInfoReturnable$Type<(any)>): void
public "getWaypointsIngameNameScale"(): integer
public "getWaypointsIngameDistanceScale"(): float
public "getEntityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
public "handler$boj000$xaeroplus$isKeyRepeat"(kb: $KeyMapping$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$boj000$xaeroplus$saveSettings"(ci: $CallbackInfo$Type): void
public "handler$boj000$xaeroplus$getOptionValue"(o: $ModOptions$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$boj000$xaeroplus$setOptionValue"(o: $ModOptions$Type, value: any, ci: $CallbackInfo$Type): void
public "getDisplayClaims"(): boolean
public "getClaimsBorderOpacity"(): integer
public "getClaimsFillOpacity"(): integer
public "setSlimeChunksSeed"(arg0: long, arg1: $XaeroPath$Type): void
public "getClientBooleanValue"(arg0: $ModOptions$Type): boolean
public "setOptionValue"(arg0: $ModOptions$Type, arg1: any): void
public "setOptionDoubleValue"(arg0: $ModOptions$Type, arg1: double): void
public "getOptionDoubleValue"(arg0: $ModOptions$Type): double
public "getOptionValueName"(arg0: $ModOptions$Type): string
public "getSliderOptionText"(arg0: $ModOptions$Type): string
public "usesWorldMapHardValue"(arg0: $ModOptions$Type): boolean
/**
 * 
 * @deprecated
 */
public "waypointsGUI"(arg0: $WaypointsManager$Type): boolean
public "waypointsGUI"(arg0: $MinimapSession$Type): boolean
public "toggleBooleanOptionValue"(arg0: $ModOptions$Type): void
public "customSlimeSeedNeeded"(arg0: $HudSession$Type): boolean
public "usesWorldMapOptionValue"(arg0: $ModOptions$Type): boolean
public "usesWorldMapScreenValue"(arg0: $ModOptions$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSlimeChunks"(arg0: $WaypointsManager$Type): boolean
public "getSlimeChunks"(arg0: $MinimapSession$Type): boolean
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "getTrackedPlayerWorldIconScale"(): float
public "getTrackedPlayerMinimapIconScale"(): float
public "getTrackedPlayerWorldNameScale"(): float
public "getBooleanValue"(arg0: $ModOptions$Type): boolean
public "getOptionValue"(arg0: $ModOptions$Type): any
public "loadSettings"(): void
public "writeSettings"(arg0: $PrintWriter$Type): void
public static "getTranslation"(arg0: boolean): string
public "getLighting"(): boolean
public "isLegibleCaveMaps"(): boolean
public "getBiomeBlending"(): boolean
public "getTerrainSlopes"(): integer
public "getTerrainDepth"(): boolean
public "getDisplayRedstone"(): boolean
public "getBlockColours"(): integer
public "getBiomeColorsVanillaMode"(): boolean
public "getCaveMapsDepth"(): integer
public "isIgnoreHeightmaps"(): boolean
public "getShowFlowers"(): boolean
public "getSlimeChunksSeed"(arg0: $XaeroPath$Type): long
public "isStainedGlassDisplayed"(): boolean
public "getCaveMaps"(arg0: boolean): boolean
public "getManualCaveModeStart"(): integer
public static "canEditIngameSettings"(): boolean
public "getMinimapScale"(): float
public "getMinimapSize"(): integer
public "resetServerSettings"(): void
public "getUseWorldMap"(): boolean
public "loadDefaultSettings"(): void
public "saveSettings"(): void
public "modifyExpressionValue$boj000$xaeroplus$allowNoNorthLockWithTransparentMM"(original: integer): integer
public static "setServerSettings"(): void
public "isKeyRepeat"(arg0: $KeyMapping$Type): boolean
public "minimapDisabled"(): boolean
public "caveMapsDisabled"(): boolean
public "getShowWaypoints"(): boolean
public "showWaypointsDisabled"(): boolean
public "getDeathpoints"(): boolean
public "deathpointsDisabled"(): boolean
public "getOldDeathpoints"(): boolean
public "getShowIngameWaypoints"(): boolean
public "getLockNorth"(arg0: integer, arg1: integer): boolean
public "getAntiAliasing"(): boolean
public "readSetting"(arg0: (string)[]): void
public "getMoreOptionValueNames"(arg0: $ModOptions$Type): string
public "getWaypointsClampDepth"(arg0: double, arg1: integer): double
public "getAutoUIScale"(): integer
public "foundOldRadarSettings"(): boolean
public "getDotNameScale"(): double
public "getMaxWaypointsDistance"(): double
public "getSmoothDots"(): boolean
public "getCompassScale"(): integer
public "getNorthCompassColor"(): integer
public "getPartialYTeleportation"(): boolean
public "getEntityRadar"(): boolean
public "getDotsStyle"(): integer
/**
 * 
 * @deprecated
 */
public "saveAllWaypoints"(arg0: $WaypointsManager$Type): void
/**
 * 
 * @deprecated
 */
public "saveWaypoints"(arg0: $WaypointWorld$Type): void
/**
 * 
 * @deprecated
 */
public "saveWaypoints"(arg0: $WaypointWorld$Type, arg1: boolean): void
public "getMinimap"(): boolean
public "getUIScale"(arg0: integer, arg1: integer, arg2: integer): float
public "changeZoom"(arg0: integer): void
get "waypointsIngameIconScale"(): float
get "waypointsIngameNameScale"(): integer
get "waypointsIngameDistanceScale"(): float
get "entityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
get "displayClaims"(): boolean
get "claimsBorderOpacity"(): integer
get "claimsFillOpacity"(): integer
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "trackedPlayerWorldIconScale"(): float
get "trackedPlayerMinimapIconScale"(): float
get "trackedPlayerWorldNameScale"(): float
get "lighting"(): boolean
get "legibleCaveMaps"(): boolean
get "biomeBlending"(): boolean
get "terrainSlopes"(): integer
get "terrainDepth"(): boolean
get "displayRedstone"(): boolean
get "blockColours"(): integer
get "biomeColorsVanillaMode"(): boolean
get "caveMapsDepth"(): integer
get "ignoreHeightmaps"(): boolean
get "showFlowers"(): boolean
get "stainedGlassDisplayed"(): boolean
get "manualCaveModeStart"(): integer
get "minimapScale"(): float
get "minimapSize"(): integer
get "useWorldMap"(): boolean
get "showWaypoints"(): boolean
get "deathpoints"(): boolean
get "oldDeathpoints"(): boolean
get "showIngameWaypoints"(): boolean
get "antiAliasing"(): boolean
get "autoUIScale"(): integer
get "dotNameScale"(): double
get "maxWaypointsDistance"(): double
get "smoothDots"(): boolean
get "compassScale"(): integer
get "northCompassColor"(): integer
get "partialYTeleportation"(): boolean
get "entityRadar"(): boolean
get "dotsStyle"(): integer
get "minimap"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModSettings$Type = ($ModSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModSettings_ = $ModSettings$Type;
}}
declare module "packages/xaero/common/gui/$IXaeroNarratableWidget" {
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IXaeroNarratableWidget {

 "createNarrationMessage"(): $MutableComponent

(): $MutableComponent
}

export namespace $IXaeroNarratableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroNarratableWidget$Type = ($IXaeroNarratableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroNarratableWidget_ = $IXaeroNarratableWidget$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointsSort" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaypointsSort extends $Enum<($WaypointsSort)> {
static readonly "NONE": $WaypointsSort
static readonly "NAME": $WaypointsSort
static readonly "SYMBOL": $WaypointsSort
static readonly "COLOR": $WaypointsSort
static readonly "DISTANCE": $WaypointsSort
static readonly "ANGLE": $WaypointsSort
readonly "optionName": string


public static "values"(): ($WaypointsSort)[]
public static "valueOf"(arg0: string): $WaypointsSort
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsSort$Type = (("symbol") | ("color") | ("distance") | ("name") | ("angle") | ("none")) | ($WaypointsSort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsSort_ = $WaypointsSort$Type;
}}
declare module "packages/xaero/common/$HudMod" {
import {$FieldValidatorHolder, $FieldValidatorHolder$Type} from "packages/xaero/common/validator/$FieldValidatorHolder"
import {$PlatformContext, $PlatformContext$Type} from "packages/xaero/common/$PlatformContext"
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$InterfaceRenderer, $InterfaceRenderer$Type} from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import {$HudIO, $HudIO$Type} from "packages/xaero/hud/io/$HudIO"
import {$ClientEventsListener, $ClientEventsListener$Type} from "packages/xaero/common/events/$ClientEventsListener"
import {$PlayerTrackerSystemManager, $PlayerTrackerSystemManager$Type} from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import {$WidgetScreenHandler, $WidgetScreenHandler$Type} from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import {$ServerPlayerTickHandler, $ServerPlayerTickHandler$Type} from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import {$HudRenderer, $HudRenderer$Type} from "packages/xaero/hud/render/$HudRenderer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$WidgetLoadingHandler, $WidgetLoadingHandler$Type} from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"
import {$CommonConfigIO, $CommonConfigIO$Type} from "packages/xaero/common/config/$CommonConfigIO"
import {$PatreonMod, $PatreonMod$Type} from "packages/xaero/common/patreon/$PatreonMod"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$GuiHelper, $GuiHelper$Type} from "packages/xaero/common/gui/$GuiHelper"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$RenderedPlayerTrackerManager, $RenderedPlayerTrackerManager$Type} from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import {$ControlsRegister, $ControlsRegister$Type} from "packages/xaero/hud/controls/$ControlsRegister"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$SupportServerMods, $SupportServerMods$Type} from "packages/xaero/common/server/mods/$SupportServerMods"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"
import {$Hud, $Hud$Type} from "packages/xaero/hud/$Hud"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$KeyMappingControllerManager, $KeyMappingControllerManager$Type} from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"
import {$PlayerTrackerMinimapElementRenderer, $PlayerTrackerMinimapElementRenderer$Type} from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InterfaceManager, $InterfaceManager$Type} from "packages/xaero/common/interfaces/$InterfaceManager"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"

export class $HudMod implements $IXaeroMinimap {
static readonly "LOGGER": $Logger
static readonly "FAIRPLAY": boolean
static "INSTANCE": $HudMod
 "waypointsFile": $Path
 "minimapFolder": $Path


public "setSettings"(arg0: $ModSettings$Type): void
public "getSettings"(): $ModSettings
public "isStandalone"(): boolean
public "getInterfaces"(): $InterfaceManager
public "getMessage"(): string
public "handler$bnp000$xaeroplus$onClientLoadComplete"(ci: $CallbackInfo$Type): void
public "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
public "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
public "setMessage"(arg0: string): void
public "getCommonConfig"(): $CommonConfig
public "isLoadedClient"(): boolean
public "isLoadedServer"(): boolean
public "ensureControlsRegister"(): void
public "getVersionID"(): string
public "resetSettings"(): void
public "setOutdated"(arg0: boolean): void
public "getLatestVersion"(): string
public "setLatestVersion"(arg0: string): void
public "getNewestUpdateID"(): integer
public "setNewestUpdateID"(arg0: integer): void
public "getWaypointsFile"(): $Path
public "getMinimapFolder"(): $Path
/**
 * 
 * @deprecated
 */
public "getWaypointsFolder"(): $Path
public "getWidgetScreenHandler"(): $WidgetScreenHandler
public "getWidgetLoader"(): $WidgetLoadingHandler
public "getSupportMods"(): $SupportMods
public "getModEvents"(): $ModClientEvents
public "getGuiHelper"(): $GuiHelper
public "getFieldValidators"(): $FieldValidatorHolder
public "getControlsRegister"(): $ControlsRegister
public "getInterfaceRenderer"(): $InterfaceRenderer
public "setLatestVersionMD5"(arg0: string): void
public "getLatestVersionMD5"(): string
public "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
public "getPlayerTracker"(): $RenderedPlayerTrackerManager
public "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
public "setServerPlayerTickHandler"(arg0: $ServerPlayerTickHandler$Type): void
public "getMessageHandler"(): $MinimapMessageHandler
public "getSupportServerMods"(): $SupportServerMods
public "setCommonConfigIO"(arg0: $CommonConfigIO$Type): void
public "setCommonConfig"(arg0: $CommonConfig$Type): void
public "getCommonConfigIO"(): $CommonConfigIO
public "getClientEventsListener"(): $ClientEventsListener
public "getPlatformContext"(): $PlatformContext
public "getModClientEvents"(): $ModClientEvents
public "getModCommonEvents"(): $ModCommonEvents
public "tryLoadLater"(): void
public "tryLoadLaterServer"(): void
public "getHudRenderer"(): $HudRenderer
public "isFirstStageLoaded"(): boolean
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "getConfigFile"(): $Path
public "getCommonEvents"(): $CommonEvents
public "getEvents"(): $ClientEvents
public "isFairPlay"(): boolean
public "getHud"(): $Hud
public "getHudIO"(): $HudIO
public "isOutdated"(): boolean
public "loadLater"(): void
public "getPatreon"(): $PatreonMod
public "getMinimap"(): $Minimap
public "loadServer"(): void
public "getModJAR"(): $File
public "getModId"(): string
public "getFileLayoutID"(): string
public "getVersionsURL"(): string
public "getUpdateLink"(): string
public "getSettingsKey"(): any
public "createSession"(): $XaeroMinimapSession
set "settings"(value: $ModSettings$Type)
get "settings"(): $ModSettings
get "standalone"(): boolean
get "interfaces"(): $InterfaceManager
get "message"(): string
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
set "message"(value: string)
get "commonConfig"(): $CommonConfig
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "versionID"(): string
set "outdated"(value: boolean)
get "latestVersion"(): string
set "latestVersion"(value: string)
get "newestUpdateID"(): integer
set "newestUpdateID"(value: integer)
get "waypointsFile"(): $Path
get "minimapFolder"(): $Path
get "waypointsFolder"(): $Path
get "widgetScreenHandler"(): $WidgetScreenHandler
get "widgetLoader"(): $WidgetLoadingHandler
get "supportMods"(): $SupportMods
get "modEvents"(): $ModClientEvents
get "guiHelper"(): $GuiHelper
get "fieldValidators"(): $FieldValidatorHolder
get "controlsRegister"(): $ControlsRegister
get "interfaceRenderer"(): $InterfaceRenderer
set "latestVersionMD5"(value: string)
get "latestVersionMD5"(): string
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "playerTracker"(): $RenderedPlayerTrackerManager
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$Type)
get "messageHandler"(): $MinimapMessageHandler
get "supportServerMods"(): $SupportServerMods
set "commonConfigIO"(value: $CommonConfigIO$Type)
set "commonConfig"(value: $CommonConfig$Type)
get "commonConfigIO"(): $CommonConfigIO
get "clientEventsListener"(): $ClientEventsListener
get "platformContext"(): $PlatformContext
get "modClientEvents"(): $ModClientEvents
get "modCommonEvents"(): $ModCommonEvents
get "hudRenderer"(): $HudRenderer
get "firstStageLoaded"(): boolean
get "keyMappingControllers"(): $KeyMappingControllerManager
get "configFile"(): $Path
get "commonEvents"(): $CommonEvents
get "events"(): $ClientEvents
get "fairPlay"(): boolean
get "hud"(): $Hud
get "hudIO"(): $HudIO
get "outdated"(): boolean
get "patreon"(): $PatreonMod
get "minimap"(): $Minimap
get "modJAR"(): $File
get "modId"(): string
get "fileLayoutID"(): string
get "versionsURL"(): string
get "updateLink"(): string
get "settingsKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HudMod$Type = ($HudMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HudMod_ = $HudMod$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointVisibilityType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WaypointVisibilityType extends $Enum<($WaypointVisibilityType)> {
static readonly "LOCAL": $WaypointVisibilityType
static readonly "GLOBAL": $WaypointVisibilityType
static readonly "WORLD_MAP_LOCAL": $WaypointVisibilityType
static readonly "WORLD_MAP_GLOBAL": $WaypointVisibilityType


public static "values"(): ($WaypointVisibilityType)[]
public static "valueOf"(arg0: string): $WaypointVisibilityType
public "getTranslation"(): $Component
public "isGlobal"(): boolean
get "translation"(): $Component
get "global"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointVisibilityType$Type = (("world_map_local") | ("global") | ("world_map_global") | ("local")) | ($WaypointVisibilityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointVisibilityType_ = $WaypointVisibilityType$Type;
}}
declare module "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$Type} from "packages/xaero/common/message/basic/$ClientboundRulesPacket"

export class $MinimapClientWorldData {
 "serverLevelId": integer
 "shadowR": float
 "shadowG": float
 "shadowB": float

constructor(arg0: $ClientLevel$Type)

public "setServerModNetworkVersion"(arg0: integer): void
public "setSyncedRules"(arg0: $ClientboundRulesPacket$Type): void
public "getServerModNetworkVersion"(): integer
public "getSyncedRules"(): $ClientboundRulesPacket
set "serverModNetworkVersion"(value: integer)
set "syncedRules"(value: $ClientboundRulesPacket$Type)
get "serverModNetworkVersion"(): integer
get "syncedRules"(): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapClientWorldData$Type = ($MinimapClientWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapClientWorldData_ = $MinimapClientWorldData$Type;
}}
declare module "packages/xaero/common/gui/widget/$Widget" {
import {$WidgetType, $WidgetType$Type} from "packages/xaero/common/gui/widget/$WidgetType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClickAction, $ClickAction$Type} from "packages/xaero/common/gui/widget/$ClickAction"
import {$HoverAction, $HoverAction$Type} from "packages/xaero/common/gui/widget/$HoverAction"
import {$CursorBox, $CursorBox$Type} from "packages/xaero/common/graphics/$CursorBox"

export class $Widget {

constructor(arg0: $WidgetType$Type, arg1: $Class$Type<(any)>, arg2: float, arg3: float, arg4: $ClickAction$Type, arg5: $HoverAction$Type, arg6: integer, arg7: integer, arg8: string, arg9: string)

public "getX"(arg0: integer): integer
public "getY"(arg0: integer): integer
public "getLocation"(): $Class<(any)>
public "getType"(): $WidgetType
public "getUrl"(): string
public "getTooltip"(): string
public "getHorizontalAnchor"(): float
public "getVerticalAnchor"(): float
public "getCursorBox"(): $CursorBox
public "getW"(): integer
public "getH"(): integer
public "getOnHover"(): $HoverAction
public "getBoxX"(arg0: integer, arg1: double): integer
public "getBoxY"(arg0: integer, arg1: double): integer
public "getBoxW"(arg0: double): integer
public "getBoxH"(arg0: double): integer
public "getOnClick"(): $ClickAction
get "location"(): $Class<(any)>
get "type"(): $WidgetType
get "url"(): string
get "tooltip"(): string
get "horizontalAnchor"(): float
get "verticalAnchor"(): float
get "cursorBox"(): $CursorBox
get "w"(): integer
get "h"(): integer
get "onHover"(): $HoverAction
get "onClick"(): $ClickAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/xaero/common/effect/$NoCaveMapsEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoCaveMapsEffect extends $MinimapStatusEffect {

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCaveMapsEffect$Type = ($NoCaveMapsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCaveMapsEffect_ = $NoCaveMapsEffect$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointRenderProvider" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import {$WaypointRenderProvider as $WaypointRenderProvider$0, $WaypointRenderProvider$Type as $WaypointRenderProvider$0$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointRenderProvider"

/**
 * 
 * @deprecated
 */
export class $WaypointRenderProvider extends $WaypointRenderProvider$0 {
readonly "filter": $Predicate<($Waypoint)>

constructor()

public "getNext"(arg0: integer, arg1: $WaypointMapRenderContext$Type): $Waypoint
public "hasNext"(arg0: integer, arg1: $WaypointMapRenderContext$Type): boolean
public "end"(arg0: integer, arg1: $WaypointMapRenderContext$Type): void
public "begin"(arg0: integer, arg1: $WaypointMapRenderContext$Type): void
public "setupContextAndGetNext"(arg0: integer, arg1: $WaypointMapRenderContext$Type): $Waypoint
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
declare module "packages/xaero/common/minimap/render/$MinimapRenderer" {
import {$GlStateManager$DestFactor, $GlStateManager$DestFactor$Type} from "packages/com/mojang/blaze3d/platform/$GlStateManager$DestFactor"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MinimapFBORenderer, $MinimapFBORenderer$Type} from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$LocalBooleanRef, $LocalBooleanRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalBooleanRef"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinimapElementOverMapRendererHandler, $MinimapElementOverMapRendererHandler$Type} from "packages/xaero/hud/minimap/element/render/over/$MinimapElementOverMapRendererHandler"
import {$GlStateManager$SourceFactor, $GlStateManager$SourceFactor$Type} from "packages/com/mojang/blaze3d/platform/$GlStateManager$SourceFactor"
import {$WaypointMapRenderer, $WaypointMapRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointMapRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "constant$bol000$xaeroplus$modifyMinimapSizeConstantI"(constant: integer): integer
public "constant$bol000$xaeroplus$modifyMinimapSizeConstantF"(constant: float): float
public "constant$bol000$xaeroplus$modifyMinimapSizeConstantFCircle"(constant: float): float
public "redirect$bol000$xaeroplus$editOvermapRender"(instance: $MinimapElementOverMapRendererHandler$Type, ps: double, pc: double, zoom: double, specW: integer, specH: integer, halfViewW: integer, halfViewH: integer, circle: boolean, minimapScale: float): void
public "localvar$bol000$xaeroplus$modifyArrowOffsetY"(offsetY: integer): integer
public "wrapOperation$bol000$xaeroplus$redirectRenderMainEntityDot"(instance: $MinimapFBORenderer$Type, guiGraphics: $GuiGraphics$Type, renderEntity: $Entity$Type, cave: boolean, renderTypeBuffers: $MultiBufferSource$BufferSource$Type, original: $Operation$Type<(any)>, lockedNorth: boolean): void
public "handler$bol000$xaeroplus$shiftRenderZPost"(minimapSession: $MinimapSession$Type, guiGraphics: $GuiGraphics$Type, minimap: $MinimapProcessor$Type, x: integer, y: integer, width: integer, height: integer, scale: double, size: integer, partial: float, cvc: $CustomVertexConsumers$Type, ci: $CallbackInfo$Type): void
public "handler$bol000$xaeroplus$shiftRenderZHead"(ci: $CallbackInfo$Type, guiGraphics: $GuiGraphics$Type): void
public "handler$bol000$xaeroplus$resetFBOSize"(ci: $CallbackInfo$Type, minimap: $MinimapProcessor$Type): void
public "getSunBrightness"(arg0: $MinimapProcessor$Type, arg1: boolean): float
public "wrapOperation$bol000$xaeroplus$correctBlendingForFpsLimiter"(sourceFactor: $GlStateManager$SourceFactor$Type, destFactor: $GlStateManager$DestFactor$Type, sourceFactor2: $GlStateManager$SourceFactor$Type, destFactor2: $GlStateManager$DestFactor$Type, original: $Operation$Type<(any)>): void
public "renderMinimap"(arg0: $MinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $MinimapProcessor$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: double, arg8: integer, arg9: float, arg10: $CustomVertexConsumers$Type): void
public "getRenderAngle"(arg0: boolean): double
/**
 * 
 * @deprecated
 */
public "getLastPlayerDimDiv"(): double
public "wrapOperation$bol000$xaeroplus$redirectRenderMainEntityDot$mixinextras$bridge$22"(instance: $MinimapFBORenderer$Type, guiGraphics: $GuiGraphics$Type, renderEntity: $Entity$Type, cave: boolean, renderTypeBuffers: $MultiBufferSource$BufferSource$Type, original: $Operation$Type<(any)>, lockedNorth: $LocalBooleanRef$Type): void
public "setZoom"(arg0: double): void
public "getZoom"(): double
public "getHelper"(): $MinimapRendererHelper
get "lastPlayerDimDiv"(): double
set "zoom"(value: double)
get "zoom"(): double
get "helper"(): $MinimapRendererHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRenderer$Type = ($MinimapRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRenderer_ = $MinimapRenderer$Type;
}}
declare module "packages/xaero/common/minimap/write/$MinimapWriter" {
import {$MinimapTile, $MinimapTile$Type} from "packages/xaero/common/minimap/region/$MinimapTile"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MinimapChunk, $MinimapChunk$Type} from "packages/xaero/common/minimap/region/$MinimapChunk"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$MinimapWriterHelper, $MinimapWriterHelper$Type} from "packages/xaero/common/minimap/write/$MinimapWriterHelper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$Type} from "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MinimapWriter {
static readonly "SUN_MINIMUM": integer
static readonly "NO_Y_VALUE": integer
 "loadingLightOverlayType": integer
 "loadingLightOverlayMaxLight": integer
 "loadingLightOverlayMinLight": integer
 "loadingLightOverlayColor": integer
 "loadedLightOverlayType": integer
 "loadedLightOverlayMaxLight": integer
 "loadedLightOverlayMinLight": integer
 "loadedLightOverlayColor": integer
 "writeFreeSinceLastWrite": long
 "debugTotalTime": boolean
 "minTime": long
 "maxTime": long
 "totalTime": long
 "totalRuns": long
 "lastDebugTime": long
 "minTimeDebug": long
 "maxTimeDebug": long
 "averageTimeDebug": long

constructor(arg0: $IXaeroMinimap$Type, arg1: $MinimapSession$Type, arg2: $BlockStateShortShapeCache$Type, arg3: $HighlighterRegistry$Type)

public "cleanup"(): void
public "setupDimensionHighlightHandler"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getFixedSkyLightBlockBrightness"(arg0: float, arg1: float, arg2: integer): float
public "constant$boo000$xaeroplus$overrideLoadSide"(constant: integer): integer
public "getDimensionHighlightHandler"(): $DimensionHighlighterHandler
public "getLoadSide"(): integer
public "getUpdateRadiusInChunks"(): integer
public "getMapCoord"(arg0: integer, arg1: integer): integer
public "getBlockBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: integer): float
public "getSectionBasedHeight"(arg0: $LevelChunk$Type, arg1: integer): integer
public "loadBlockColor"(arg0: integer, arg1: $Level$Type, arg2: integer, arg3: integer, arg4: $LevelChunk$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Heightmap$Types$Type, arg11: $MinimapTile$Type, arg12: $MinimapChunk$Type, arg13: $MinimapChunk$Type, arg14: $MinimapChunk$Type, arg15: $MinimapChunk$Type, arg16: float, arg17: float, arg18: float, arg19: boolean, arg20: boolean, arg21: integer, arg22: integer, arg23: integer, arg24: boolean, arg25: integer, arg26: integer, arg27: boolean, arg28: float, arg29: integer, arg30: boolean, arg31: $List$Type<(integer)>, arg32: $List$Type<($BlockState$Type)>, arg33: $List$Type<(integer)>, arg34: (integer)[], arg35: (integer)[], arg36: (integer)[], arg37: (float)[], arg38: (float)[], arg39: (integer)[], arg40: (integer)[], arg41: (integer)[], arg42: (integer)[], arg43: boolean, arg44: integer, arg45: $BlockPos$MutableBlockPos$Type, arg46: $BlockPos$MutableBlockPos$Type, arg47: long, arg48: integer, arg49: $IXaeroMinimap$Type, arg50: $MinimapWriterHelper$Type, arg51: integer, arg52: boolean, arg53: boolean, arg54: integer, arg55: integer, arg56: integer, arg57: integer, arg58: boolean, arg59: boolean, arg60: boolean, arg61: boolean, arg62: $BlockPos$MutableBlockPos$Type, arg63: boolean): $MinimapTile
public "getLoadedCaving"(): integer
public "getLoadingMapChunkX"(): integer
public "getLoadingMapChunkZ"(): integer
public "getLoadingSideInChunks"(): integer
public "getLoadedBlocks"(): (($MinimapChunk)[])[]
public "getLoadedMapChunkZ"(): integer
public "getLoadedMapChunkX"(): integer
public "getLoadedLevels"(): integer
public "setClearBlockColours"(arg0: boolean): void
public "resetShortBlocks"(): void
public "getLoadedSideInChunks"(): integer
public "isLoadedNonWorldMap"(): boolean
public "onRender"(): void
public "findBlock"(arg0: $Level$Type, arg1: $LevelChunk$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: $BlockPos$MutableBlockPos$Type, arg9: $BlockPos$MutableBlockPos$Type, arg10: integer, arg11: boolean, arg12: $List$Type<(integer)>, arg13: $List$Type<($BlockState$Type)>, arg14: integer, arg15: boolean, arg16: $List$Type<(integer)>, arg17: boolean, arg18: boolean, arg19: $BlockPos$MutableBlockPos$Type, arg20: boolean): $Block
set "upDimensionHighlightHandler"(value: $ResourceKey$Type<($Level$Type)>)
get "dimensionHighlightHandler"(): $DimensionHighlighterHandler
get "loadSide"(): integer
get "updateRadiusInChunks"(): integer
get "loadedCaving"(): integer
get "loadingMapChunkX"(): integer
get "loadingMapChunkZ"(): integer
get "loadingSideInChunks"(): integer
get "loadedBlocks"(): (($MinimapChunk)[])[]
get "loadedMapChunkZ"(): integer
get "loadedMapChunkX"(): integer
get "loadedLevels"(): integer
set "clearBlockColours"(value: boolean)
get "loadedSideInChunks"(): integer
get "loadedNonWorldMap"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriter$Type = ($MinimapWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWriter_ = $MinimapWriter$Type;
}}
declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $MultiTextureRenderTypeRenderer {


public "begin"(arg0: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$Type;
}}
declare module "packages/xaero/common/mods/$SupportXaeroWorldmap" {
import {$RadarRenderer, $RadarRenderer$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import {$LocalIntRef, $LocalIntRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MapRegion, $MapRegion$Type} from "packages/xaero/map/region/$MapRegion"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$MapTileChunk, $MapTileChunk$Type} from "packages/xaero/map/region/$MapTileChunk"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$MapProcessor, $MapProcessor$Type} from "packages/xaero/map/$MapProcessor"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$WorldMapSession, $WorldMapSession$Type} from "packages/xaero/map/$WorldMapSession"

export class $SupportXaeroWorldmap {
static "WORLDMAP_COMPATIBILITY_VERSION": integer
static readonly "MINIMAP_MW": string
 "compatibilityVersion": integer
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type)

public "handler$bpe000$xaeroplus$overrideRegionRange"(minimapSession: $MinimapSession$Type, matrixStack: $PoseStack$Type, helper: $MinimapRendererHelper$Type, xFloored: integer, zFloored: integer, minViewX: integer, minViewZ: integer, maxViewX: integer, maxViewZ: integer, zooming: boolean, zoom: double, mapDimensionScale: double, overlayBufferBuilder: $VertexConsumer$Type, multiTextureRenderTypeRenderers: $MultiTextureRenderTypeRendererProvider$Type, ci: $CallbackInfo$Type, mapX: integer, mapZ: integer, minXRef: $LocalIntRef$Type, maxXRef: $LocalIntRef$Type, minZRef: $LocalIntRef$Type, maxZRef: $LocalIntRef$Type): void
public "handler$bpe000$xaeroplus$setupTransparentMMBgBuffer"(matrixStack: $PoseStack$Type, minX: integer, maxX: integer, minZ: integer, maxZ: integer, minViewX: integer, maxViewX: integer, minViewZ: integer, maxViewZ: integer, mapProcessor: $MapProcessor$Type, renderedCaveLayer: integer, shouldRequestLoading: boolean, reloadEverything: boolean, globalReloadVersion: integer, globalRegionCacheHashCode: integer, globalCaveStart: integer, globalCaveDepth: integer, playerIsMoving: boolean, noCaveMaps: boolean, slimeChunks: boolean, chunkX: integer, chunkZ: integer, tileX: integer, tileZ: integer, insideX: integer, insideZ: integer, seed: long, mapWithLightRenderer: $MultiTextureRenderTypeRenderer$Type, mapNoLightRenderer: $MultiTextureRenderTypeRenderer$Type, helper: $MinimapRendererHelper$Type, overlayBufferBuilder: $VertexConsumer$Type, ci: $CallbackInfo$Type, bgTesselatorRef: $LocalRef$Type<(any)>, bgBufferBuilderRef: $LocalRef$Type<(any)>): void
public "handler$bpe000$xaeroplus$buildTransparentMMBg"(matrixStack: $PoseStack$Type, minX: integer, maxX: integer, minZ: integer, maxZ: integer, minViewX: integer, maxViewX: integer, minViewZ: integer, maxViewZ: integer, mapProcessor: $MapProcessor$Type, renderedCaveLayer: integer, shouldRequestLoading: boolean, reloadEverything: boolean, globalReloadVersion: integer, globalRegionCacheHashCode: integer, globalCaveStart: integer, globalCaveDepth: integer, playerIsMoving: boolean, noCaveMaps: boolean, slimeChunks: boolean, chunkX: integer, chunkZ: integer, tileX: integer, tileZ: integer, insideX: integer, insideZ: integer, seed: long, mapWithLightRenderer: $MultiTextureRenderTypeRenderer$Type, mapNoLightRenderer: $MultiTextureRenderTypeRenderer$Type, helper: $MinimapRendererHelper$Type, overlayBufferBuilder: $VertexConsumer$Type, ci: $CallbackInfo$Type, bgBufferBuilderRef: $LocalRef$Type<(any)>, drawX: integer, drawZ: integer, chunk: $MapTileChunk$Type): void
public "handler$bpe000$xaeroplus$drawTransparentMMBackground"(matrixStack: $PoseStack$Type, minX: integer, maxX: integer, minZ: integer, maxZ: integer, minViewX: integer, maxViewX: integer, minViewZ: integer, maxViewZ: integer, mapProcessor: $MapProcessor$Type, renderedCaveLayer: integer, shouldRequestLoading: boolean, reloadEverything: boolean, globalReloadVersion: integer, globalRegionCacheHashCode: integer, globalCaveStart: integer, globalCaveDepth: integer, playerIsMoving: boolean, noCaveMaps: boolean, slimeChunks: boolean, chunkX: integer, chunkZ: integer, tileX: integer, tileZ: integer, insideX: integer, insideZ: integer, seed: long, mapWithLightRenderer: $MultiTextureRenderTypeRenderer$Type, mapNoLightRenderer: $MultiTextureRenderTypeRenderer$Type, helper: $MinimapRendererHelper$Type, overlayBufferBuilder: $VertexConsumer$Type, ci: $CallbackInfo$Type, bgTesselatorRef: $LocalRef$Type<(any)>): void
public "handler$bpe000$xaeroplus$preventPossibleNPE"(dimId: $ResourceKey$Type<(any)>, cir: $CallbackInfoReturnable$Type<(any)>, session: $WorldMapSession$Type): void
public "openSettings"(): void
public "bumpLoadedRegion"(arg0: $MapProcessor$Type, arg1: $MapRegion$Type): void
public "prepareMapTexturedRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: $MapTileChunk$Type, arg8: $MultiTextureRenderTypeRenderer$Type, arg9: $MultiTextureRenderTypeRenderer$Type, arg10: $MinimapRendererHelper$Type): void
public "renderSlimeChunks"(arg0: $MapTileChunk$Type, arg1: long, arg2: integer, arg3: integer, arg4: $PoseStack$Type, arg5: $MinimapRendererHelper$Type, arg6: $VertexConsumer$Type): void
public "getWorldMapWaypoints"(): boolean
public "getWorldMapColours"(): integer
public "getWorldMapFlowers"(): boolean
public "getWorldMapTerrainDepth"(): boolean
public "getWorldMapTerrainSlopes"(): integer
public "tryToGetMultiworldId"(arg0: $ResourceKey$Type<($Level$Type)>): string
public "getPotentialMultiworldIds"(arg0: $ResourceKey$Type<($Level$Type)>): $List<(string)>
public "getMultiworldIds"(arg0: $ResourceKey$Type<($Level$Type)>): $List<(string)>
public "tryToGetMultiworldName"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: string): string
public "createRadarRenderWrapper"(arg0: $RadarRenderer$Type): void
public "worldMapIsRenderingRadar"(): boolean
public "getPartialYTeleport"(): boolean
public "isMultiplayerMap"(): boolean
public "getManualCaveStart"(): integer
public "hasEnabledCaveLayers"(): boolean
public "getCaveModeType"(): integer
public "openScreenForOption"(arg0: $ModOptions$Type): void
public "getCaveModeDepth"(): integer
public "confirmPlayerRadarRender"(arg0: $Player$Type): void
public "getDisplayClaims"(): boolean
public "getClaimsBorderOpacity"(): integer
public "getClaimsFillOpacity"(): integer
public "getMapDimensionScale"(): double
public "getMapDimension"(): $ResourceKey<($Level)>
public "toggleChunkClaims"(): void
public "drawMinimap"(arg0: $MinimapSession$Type, arg1: $PoseStack$Type, arg2: $MinimapRendererHelper$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: double, arg11: double, arg12: $VertexConsumer$Type, arg13: $MultiTextureRenderTypeRendererProvider$Type): void
public "hasDimensionSwitching"(): boolean
public "getMinimapBrightness"(): float
public "getWorldMapBiomeColorsVanillaMode"(): boolean
public "getWorldMapIgnoreHeightmaps"(): boolean
public "hasTrackedPlayerSystemSupport"(): boolean
public "supportsPacPlayerRadarFilter"(): boolean
public "screenShouldSkipWorldRender"(arg0: $Screen$Type): boolean
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "isLegibleCaveMaps"(): boolean
public "getBiomeBlending"(): boolean
public "isStainedGlassDisplayed"(): boolean
public "shouldPreventAutoCaveMode"(arg0: $Level$Type): boolean
public "registerHighlighters"(arg0: $HighlighterRegistry$Type): void
public "caveLayersAreUsable"(): boolean
public "shouldAlwaysInitEffects"(): boolean
public "wrapWithCondition$bpe000$xaeroplus$hideSlimeChunksWhileDimSwitched"(instance: $SupportXaeroWorldmap$Type, chunk: $MapTileChunk$Type, seed: long, drawX: integer, drawZ: integer, matrixStack: $PoseStack$Type, helper: $MinimapRendererHelper$Type, overlayBufferBuilder: $VertexConsumer$Type): boolean
get "worldMapWaypoints"(): boolean
get "worldMapColours"(): integer
get "worldMapFlowers"(): boolean
get "worldMapTerrainDepth"(): boolean
get "worldMapTerrainSlopes"(): integer
get "partialYTeleport"(): boolean
get "multiplayerMap"(): boolean
get "manualCaveStart"(): integer
get "caveModeType"(): integer
get "caveModeDepth"(): integer
get "displayClaims"(): boolean
get "claimsBorderOpacity"(): integer
get "claimsFillOpacity"(): integer
get "mapDimensionScale"(): double
get "mapDimension"(): $ResourceKey<($Level)>
get "minimapBrightness"(): float
get "worldMapBiomeColorsVanillaMode"(): boolean
get "worldMapIgnoreHeightmaps"(): boolean
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "legibleCaveMaps"(): boolean
get "biomeBlending"(): boolean
get "stainedGlassDisplayed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportXaeroWorldmap$Type = ($SupportXaeroWorldmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportXaeroWorldmap_ = $SupportXaeroWorldmap$Type;
}}
declare module "packages/xaero/common/validator/$WaypointCoordinateFieldValidator" {
import {$NumericFieldValidator, $NumericFieldValidator$Type} from "packages/xaero/common/validator/$NumericFieldValidator"

export class $WaypointCoordinateFieldValidator extends $NumericFieldValidator {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointCoordinateFieldValidator$Type = ($WaypointCoordinateFieldValidator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointCoordinateFieldValidator_ = $WaypointCoordinateFieldValidator$Type;
}}
declare module "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler" {
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"

export class $DimensionHighlighterHandler {

constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $HighlighterRegistry$Type, arg2: $MinimapWriter$Type)

public "getVersion"(): integer
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
public "requestRefresh"(): void
public "requestRefresh"(arg0: integer, arg1: integer): void
public "applyChunkHighlightColors"(arg0: integer, arg1: integer): (integer)[]
public "addBlockHighlightTooltips"(arg0: $InfoDisplayCompiler$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
get "version"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$Type = ($DimensionHighlighterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$Type;
}}
declare module "packages/xaero/common/$PlatformContext" {
import {$ClientEvents, $ClientEvents$Type} from "packages/xaero/common/events/$ClientEvents"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MinimapMessageHandler, $MinimapMessageHandler$Type} from "packages/xaero/common/message/$MinimapMessageHandler"
import {$PlatformContextLoaderClientOnly, $PlatformContextLoaderClientOnly$Type} from "packages/xaero/common/$PlatformContextLoaderClientOnly"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$ModClientEvents, $ModClientEvents$Type} from "packages/xaero/common/events/$ModClientEvents"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$Type} from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import {$CommonEvents, $CommonEvents$Type} from "packages/xaero/common/events/$CommonEvents"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$PlatformContextLoaderCommon, $PlatformContextLoaderCommon$Type} from "packages/xaero/common/$PlatformContextLoaderCommon"
import {$SupportMods, $SupportMods$Type} from "packages/xaero/common/mods/$SupportMods"
import {$ModCommonEvents, $ModCommonEvents$Type} from "packages/xaero/common/events/$ModCommonEvents"

export class $PlatformContext {

constructor()

public "getLoaderClientOnly"(): $PlatformContextLoaderClientOnly
public "getLoaderCommon"(): $PlatformContextLoaderCommon
public "createMinimapWriter"(arg0: $IXaeroMinimap$Type, arg1: $MinimapSession$Type, arg2: $BlockStateShortShapeCache$Type, arg3: $HighlighterRegistry$Type): $MinimapWriter
public "createCommonEvents"(arg0: $IXaeroMinimap$Type): $CommonEvents
public "createModCommonEvents"(arg0: $IXaeroMinimap$Type): $ModCommonEvents
public "createClientEvents"(arg0: $IXaeroMinimap$Type): $ClientEvents
public "createModClientEvents"(arg0: $IXaeroMinimap$Type): $ModClientEvents
public "createSupportMods"(arg0: $IXaeroMinimap$Type): $SupportMods
public "getModInfoVersion"(): string
public "createMessageHandler"(arg0: $IXaeroMinimap$Type): $MinimapMessageHandler
get "loaderClientOnly"(): $PlatformContextLoaderClientOnly
get "loaderCommon"(): $PlatformContextLoaderCommon
get "modInfoVersion"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContext$Type = ($PlatformContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContext_ = $PlatformContext$Type;
}}
declare module "packages/xaero/common/graphics/$CursorBox" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CursorBox implements $Supplier<($CursorBox)> {

constructor(arg0: $Component$Type)
constructor(arg0: $Component$Type, arg1: boolean)
constructor(arg0: integer)
constructor(arg0: string)
constructor(arg0: string, arg1: $Style$Type)
constructor(arg0: string, arg1: $Style$Type, arg2: boolean)

public "setStartWidth"(arg0: integer): void
public "getLine"(arg0: integer): $Component
public "getPlainText"(): string
public "getFullCode"(): string
public "createLines"(arg0: $Component$Type): void
public "setAutoLinebreak"(arg0: boolean): void
public "drawBox"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "splitWords"(arg0: $ArrayList$Type<($Component$Type)>, arg1: $FormattedText$Type): void
public "withWidth"(arg0: integer): $CursorBox
set "startWidth"(value: integer)
get "plainText"(): string
get "fullCode"(): string
set "autoLinebreak"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorBox$Type = ($CursorBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorBox_ = $CursorBox$Type;
}}
declare module "packages/xaero/common/server/$MinecraftServerData" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$LevelMapProperties, $LevelMapProperties$Type} from "packages/xaero/common/server/level/$LevelMapProperties"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$Type} from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import {$SyncedPlayerTracker, $SyncedPlayerTracker$Type} from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker"

export class $MinecraftServerData {

constructor(arg0: $SyncedPlayerTrackerSystemManager$Type, arg1: $SyncedPlayerTracker$Type, arg2: $IXaeroMinimap$Type)

public static "get"(arg0: $MinecraftServer$Type): $MinecraftServerData
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
public "getLevelProperties"(arg0: $Path$Type): $LevelMapProperties
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getModMain"(): $IXaeroMinimap
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "modMain"(): $IXaeroMinimap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$Type = ($MinecraftServerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$Type;
}}
declare module "packages/xaero/common/validator/$FieldValidatorHolder" {
import {$NumericFieldValidator, $NumericFieldValidator$Type} from "packages/xaero/common/validator/$NumericFieldValidator"
import {$WaypointCoordinateFieldValidator, $WaypointCoordinateFieldValidator$Type} from "packages/xaero/common/validator/$WaypointCoordinateFieldValidator"

export class $FieldValidatorHolder {

constructor(arg0: $NumericFieldValidator$Type, arg1: $WaypointCoordinateFieldValidator$Type)

public "getNumericFieldValidator"(): $NumericFieldValidator
public "getWpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
get "numericFieldValidator"(): $NumericFieldValidator
get "wpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldValidatorHolder$Type = ($FieldValidatorHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldValidatorHolder_ = $FieldValidatorHolder$Type;
}}
declare module "packages/xaero/common/$PlatformContextLoaderCommon" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderCommon {

constructor()

public "setup"(arg0: $IXaeroMinimap$Type): void
set "up"(value: $IXaeroMinimap$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformContextLoaderCommon$Type = ($PlatformContextLoaderCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformContextLoaderCommon_ = $PlatformContextLoaderCommon$Type;
}}
declare module "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$InfoDisplayStateCodec as $InfoDisplayStateCodec$0, $InfoDisplayStateCodec$Type as $InfoDisplayStateCodec$0$Type} from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

/**
 * 
 * @deprecated
 */
export class $InfoDisplayStateCodec<T> extends $InfoDisplayStateCodec$0<(T)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: $Function$Type<(string), (T)>, arg1: $Function$Type<(T), (string)>)

/**
 * 
 * @deprecated
 */
public "decode"(arg0: string): T
/**
 * 
 * @deprecated
 */
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
declare module "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {

 "getTrackingLevel"(arg0: $Player$Type, arg1: $Player$Type): integer
 "isPartySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$Type;
}}
declare module "packages/xaero/common/mods/$SupportFramedBlocks" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $SupportFramedBlocks {

constructor()

public "onWorldChange"(): void
public "isFrameBlock"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $BlockState$Type): boolean
public "unpackFramedBlock"(arg0: $Level$Type, arg1: $Registry$Type<($Block$Type)>, arg2: $BlockState$Type, arg3: $BlockEntity$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFramedBlocks$Type = ($SupportFramedBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportFramedBlocks_ = $SupportFramedBlocks$Type;
}}
declare module "packages/xaero/common/config/$CommonConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonConfig {
readonly "registerStatusEffects": boolean
 "allowCaveModeOnServer": boolean
 "allowNetherCaveModeOnServer": boolean
 "allowRadarOnServer": boolean
 "everyoneTracksEveryone": boolean


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonConfig$Type = ($CommonConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonConfig_ = $CommonConfig$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler" {
import {$MinimapElementRenderer, $MinimapElementRenderer$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import {$MinimapElementRendererHandler as $MinimapElementRendererHandler$0, $MinimapElementRendererHandler$Type as $MinimapElementRendererHandler$0$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler"

/**
 * 
 * @deprecated
 */
export class $MinimapElementRendererHandler extends $MinimapElementRendererHandler$0 {


/**
 * 
 * @deprecated
 */
public "add"(arg0: $MinimapElementRenderer$Type<(any), (any)>): void
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
declare module "packages/xaero/common/minimap/highlight/$AbstractHighlighter" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

export class $AbstractHighlighter {


public "isCoveringOutsideDiscovered"(): boolean
public "regionHasHighlights"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "chunkIsHighlit"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: integer, arg2: integer): (integer)[]
public "addBlockHighlightTooltips"(arg0: $InfoDisplayCompiler$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: integer, arg3: integer, arg4: integer): void
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$Type = ($AbstractHighlighter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$Type;
}}
declare module "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

/**
 * 
 * @deprecated
 */
export interface $InfoDisplayWidgetFactory<T> {

/**
 * 
 * @deprecated
 */
 "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>, arg5: $ModSettings$Type): $AbstractWidget

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay$Type<(T)>, arg5: $ModSettings$Type): $AbstractWidget
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
declare module "packages/xaero/common/message/$MinimapMessageHandler" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ClientMessageConsumer, $ClientMessageConsumer$Type} from "packages/xaero/common/message/client/$ClientMessageConsumer"
import {$ServerMessageConsumer, $ServerMessageConsumer$Type} from "packages/xaero/common/message/server/$ServerMessageConsumer"

export class $MinimapMessageHandler {
static readonly "NETWORK_COMPATIBILITY": integer

constructor()

public "register"<T extends $MinimapMessage<(T)>>(arg0: integer, arg1: $Class$Type<(T)>, arg2: $ServerMessageConsumer$Type<(T)>, arg3: $ClientMessageConsumer$Type<(T)>, arg4: $Function$Type<($FriendlyByteBuf$Type), (T)>, arg5: $BiConsumer$Type<(T), ($FriendlyByteBuf$Type)>): void
public "sendToPlayer"<T extends $MinimapMessage<(T)>>(arg0: $ServerPlayer$Type, arg1: T): void
public "sendToServer"<T extends $MinimapMessage<(T)>>(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapMessageHandler$Type = ($MinimapMessageHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapMessageHandler_ = $MinimapMessageHandler$Type;
}}
declare module "packages/xaero/common/mods/$SupportMods" {
import {$SupportIris, $SupportIris$Type} from "packages/xaero/common/mods/$SupportIris"
import {$SupportOpenPartiesAndClaims, $SupportOpenPartiesAndClaims$Type} from "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims"
import {$SupportFramedBlocks, $SupportFramedBlocks$Type} from "packages/xaero/common/mods/$SupportFramedBlocks"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$SupportXaeroWorldmap, $SupportXaeroWorldmap$Type} from "packages/xaero/common/mods/$SupportXaeroWorldmap"

export class $SupportMods {
 "worldmapSupport": $SupportXaeroWorldmap
 "xaeroPac": $SupportOpenPartiesAndClaims
 "optifine": boolean
 "vivecraft": boolean
 "iris": boolean
 "ftbTeams": boolean
 "supportIris": $SupportIris
 "supportFramedBlocks": $SupportFramedBlocks

constructor(arg0: $IXaeroMinimap$Type)

public "shouldUseWorldMapCaveChunks"(): boolean
public static "checkForMinimapDuplicates"(arg0: string): void
public "framedBlocks"(): boolean
public "shouldUseWorldMapChunks"(): boolean
public "worldmap"(): boolean
public "pac"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportMods$Type = ($SupportMods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportMods_ = $SupportMods$Type;
}}
declare module "packages/xaero/common/graphics/$CustomRenderTypes$EntityIconLayerPhases" {
import {$RenderStateShard$ShaderStateShard, $RenderStateShard$ShaderStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import {$RenderStateShard$DepthTestStateShard, $RenderStateShard$DepthTestStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$TextureStateShard, $RenderStateShard$TextureStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$WriteMaskStateShard, $RenderStateShard$WriteMaskStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$CullStateShard, $RenderStateShard$CullStateShard$Type} from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"

export class $CustomRenderTypes$EntityIconLayerPhases {
 "texture": $RenderStateShard$TextureStateShard
 "transparency": $RenderStateShard$TransparencyStateShard
 "depthTest": $RenderStateShard$DepthTestStateShard
 "writeMask": $RenderStateShard$WriteMaskStateShard
 "cull": $RenderStateShard$CullStateShard
 "shader": $RenderStateShard$ShaderStateShard

constructor(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRenderTypes$EntityIconLayerPhases$Type = ($CustomRenderTypes$EntityIconLayerPhases);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomRenderTypes$EntityIconLayerPhases_ = $CustomRenderTypes$EntityIconLayerPhases$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapFBORenderer" {
import {$RadarRenderer, $RadarRenderer$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import {$RadarRenderer as $RadarRenderer$0, $RadarRenderer$Type as $RadarRenderer$0$Type} from "packages/xaero/common/minimap/render/radar/element/$RadarRenderer"
import {$LocalIntRef, $LocalIntRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$MinimapRenderer, $MinimapRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapRenderer"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$CustomMinimapFBORenderer, $CustomMinimapFBORenderer$Type} from "packages/xaeroplus/feature/extensions/$CustomMinimapFBORenderer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$LocalRef, $LocalRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SupportXaeroWorldmap, $SupportXaeroWorldmap$Type} from "packages/xaero/common/mods/$SupportXaeroWorldmap"
import {$WaypointMapRenderer, $WaypointMapRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

export class $MinimapFBORenderer extends $MinimapRenderer implements $CustomMinimapFBORenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointMapRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "constant$boi000$xaeroplus$overrideFrameBufferSize"(size: integer): integer
public "redirect$boi000$xaeroplus$modifyShaderMatrixStackTranslate"(instance: $PoseStack$Type, x: float, y: float, z: float, scaledSize: $LocalIntRef$Type): void
public "redirect$boi000$xaeroplus$modifyMMBackgroundFill"(guiGraphics: $GuiGraphics$Type, x1: integer, y1: integer, x2: integer, y2: integer, color: integer, scaledSize: $LocalIntRef$Type): void
public "modify$boi000$xaeroplus$modifyChunkGridLineWidth"(original: float): float
public "redirect$boi000$xaeroplus$redirectModelViewDraw"(instance: $MinimapRendererHelper$Type, matrixStack: $PoseStack$Type, x: float, y: float, textureX: integer, textureY: integer, width: float, height: float, theight: float, factor: float, scaledSize: $LocalIntRef$Type): void
public "wrapOperation$boi000$xaeroplus$drawMinimapFeatures"(instance: $SupportXaeroWorldmap$Type, minimapSession: $MinimapSession$Type, matrixStack: $PoseStack$Type, helper: $MinimapRendererHelper$Type, xFloored: integer, zFloored: integer, minViewX: integer, minViewZ: integer, maxViewX: integer, maxViewZ: integer, zooming: boolean, zoom: double, mapDimensionScale: double, overlayBufferBuilder: $VertexConsumer$Type, multiTextureRenderTypeRenderers: $MultiTextureRenderTypeRendererProvider$Type, original: $Operation$Type<(any)>, renderTypeBuffers: $MultiBufferSource$BufferSource$Type): void
public "wrapOperation$boi000$xaeroplus$drawMinimapFeaturesCaveMode"(instance: $MultiTextureRenderTypeRendererProvider$Type, renderer: $MultiTextureRenderTypeRenderer$Type, original: $Operation$Type<(any)>, xFloored: integer, zFloored: integer, matrixStack: $PoseStack$Type, renderTypeBuffers: $MultiBufferSource$BufferSource$Type): void
public "modify$boi000$xaeroplus$modifyViewW"(viewW: integer): integer
public "handler$boi000$xaeroplus$modifyScaledSize"(minimapSession: $MinimapSession$Type, guiGraphics: $GuiGraphics$Type, minimap: $MinimapProcessor$Type, renderPos: $Vec3$Type, mapDimension: $ResourceKey$Type<(any)>, mapDimensionScale: double, viewW: integer, partial: float, level: integer, useWorldMap: boolean, lockedNorth: boolean, shape: integer, ps: double, pc: double, cave: boolean, cvc: $CustomVertexConsumers$Type, ci: $CallbackInfo$Type, scaledSize: $LocalIntRef$Type): void
public "onRadarIconModelRenderTrace"(arg0: $EntityModel$Type<(any)>, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "onEntityIconModelPartRenderTrace"(arg0: $ModelPart$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "resetEntityIcons"(): void
public "isLoadedFBO"(): boolean
public "resetEntityIconsResources"(): void
public "wrapOperation$boi000$xaeroplus$drawMinimapFeatures$mixinextras$bridge$28"(instance: $SupportXaeroWorldmap$Type, minimapSession: $MinimapSession$Type, matrixStack: $PoseStack$Type, helper: $MinimapRendererHelper$Type, xFloored: integer, zFloored: integer, minViewX: integer, minViewZ: integer, maxViewX: integer, maxViewZ: integer, zooming: boolean, zoom: double, mapDimensionScale: double, overlayBufferBuilder: $VertexConsumer$Type, multiTextureRenderTypeRenderers: $MultiTextureRenderTypeRendererProvider$Type, original: $Operation$Type<(any)>, renderTypeBuffers: $LocalRef$Type<(any)>): void
public "redirect$boi000$xaeroplus$correctPreRotationTranslationForSizeMult"(instance: $PoseStack$Type, x: float, y: float, z: float): void
public "handler$boi000$xaeroplus$correctPostRotationTranslationForSizeMult"(minimapSession: $MinimapSession$Type, guiGraphics: $GuiGraphics$Type, minimap: $MinimapProcessor$Type, renderPos: $Vec3$Type, mapDimension: $ResourceKey$Type<(any)>, mapDimensionScale: double, viewW: integer, partial: float, level: integer, useWorldMap: boolean, lockedNorth: boolean, shape: integer, ps: double, pc: double, cave: boolean, cvc: $CustomVertexConsumers$Type, ci: $CallbackInfo$Type, halfWView: float, shaderMatrixStack: $PoseStack$Type): void
public "renderChunksToFBO"(arg0: $MinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $MinimapProcessor$Type, arg3: $Vec3$Type, arg4: $ResourceKey$Type<($Level$Type)>, arg5: double, arg6: integer, arg7: float, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: double, arg13: double, arg14: boolean, arg15: $CustomVertexConsumers$Type): void
public "getEntityRadarRenderer"(): $RadarRenderer
/**
 * 
 * @deprecated
 */
public "getRadarRenderer"(): $RadarRenderer$0
public "deleteFramebuffers"(): void
public "setLoadedFBO"(arg0: boolean): void
public "loadFrameBuffer"(arg0: $MinimapProcessor$Type): void
public "reloadMapFrameBuffers"(): void
public "renderMainEntityDot"(arg0: $GuiGraphics$Type, arg1: $Entity$Type, arg2: boolean, arg3: $MultiBufferSource$BufferSource$Type): void
public "wrapOperation$boi000$xaeroplus$drawMinimapFeaturesCaveMode$mixinextras$bridge$29"(instance: $MultiTextureRenderTypeRendererProvider$Type, renderer: $MultiTextureRenderTypeRenderer$Type, original: $Operation$Type<(any)>, xFloored: $LocalIntRef$Type, zFloored: $LocalIntRef$Type, matrixStack: $LocalRef$Type<(any)>, renderTypeBuffers: $LocalRef$Type<(any)>): void
public "isTriedFBO"(): boolean
get "loadedFBO"(): boolean
get "entityRadarRenderer"(): $RadarRenderer
get "radarRenderer"(): $RadarRenderer$0
set "loadedFBO"(value: boolean)
get "triedFBO"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapFBORenderer$Type = ($MinimapFBORenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapFBORenderer_ = $MinimapFBORenderer$Type;
}}
declare module "packages/xaero/common/effect/$MinimapStatusEffect" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $MinimapStatusEffect extends $MobEffect {


public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapStatusEffect$Type = ($MinimapStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapStatusEffect_ = $MinimapStatusEffect$Type;
}}
declare module "packages/xaero/common/server/level/$LevelMapProperties" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BufferedReader, $BufferedReader$Type} from "packages/java/io/$BufferedReader"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LevelMapProperties extends $MinimapMessage<($LevelMapProperties)> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

public "write"(arg0: $FriendlyByteBuf$Type): void
public "write"(arg0: $PrintWriter$Type): void
public "read"(arg0: $BufferedReader$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $LevelMapProperties
public "getId"(): integer
public "isUsable"(): boolean
public "setUsable"(arg0: boolean): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$Type = ($LevelMapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$Type;
}}
declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {

constructor(arg0: integer)

public "draw"(arg0: $MultiTextureRenderTypeRenderer$Type): void
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $Runnable$Type, arg3: $RenderType$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$Type, arg1: $IntConsumer$Type, arg2: $RenderType$Type): $MultiTextureRenderTypeRenderer
public static "defaultTextureBind"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointReader" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import {$WaypointReader as $WaypointReader$0, $WaypointReader$Type as $WaypointReader$0$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointReader"

/**
 * 
 * @deprecated
 */
export class $WaypointReader extends $WaypointReader$0 {

constructor()

/**
 * 
 * @deprecated
 */
public "isInteractable"(arg0: integer, arg1: $Waypoint$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBoxScale"(arg0: integer, arg1: $Waypoint$Type, arg2: $WaypointMapRenderContext$Type): float
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
declare module "packages/xaero/common/server/player/$IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$Type} from "packages/xaero/common/server/player/$ServerPlayerData"

export interface $IServerPlayer {

 "getXaeroMinimapPlayerData"(): $ServerPlayerData
 "setXaeroMinimapPlayerData"(arg0: $ServerPlayerData$Type): void
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$Type;
}}
declare module "packages/xaero/common/settings/$Option" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$ModOptions, $ModOptions$Type} from "packages/xaero/common/settings/$ModOptions"

export class $Option {

constructor(arg0: $ModOptions$Type)

public "handler$bok000$xaeroplus$constructorInject"(option: $ModOptions$Type, ci: $CallbackInfo$Type): void
public "createButton"(arg0: integer, arg1: integer, arg2: integer): $AbstractWidget
public "getCaption"(): $Component
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Option$Type = ($Option);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Option_ = $Option$Type;
}}
declare module "packages/xaero/common/gui/dropdown/$DropDownWidget" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_OPEN": integer
static readonly "TRIM_INSIDE": integer
static readonly "LINE_HEIGHT": integer
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


public "setClosed"(arg0: boolean): void
public "size"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "setActive"(arg0: boolean): void
public "isClosed"(): boolean
public "getSelected"(): integer
public "mouseClicked"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "mouseReleased"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "mouseScrolled"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getXWithOffset"(): integer
public "getYWithOffset"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "renderWidget"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "updateWidgetNarration"(arg0: $NarrationElementOutput$Type): void
public "onDropDown"(arg0: integer, arg1: integer, arg2: boolean, arg3: integer): boolean
public "onDropDown"(arg0: integer, arg1: integer, arg2: integer): boolean
public "selectId"(arg0: integer, arg1: boolean): void
set "closed"(value: boolean)
set "active"(value: boolean)
get "closed"(): boolean
get "selected"(): integer
get "xWithOffset"(): integer
get "yWithOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownWidget$Type = ($DropDownWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownWidget_ = $DropDownWidget$Type;
}}
declare module "packages/xaero/common/interfaces/$InterfaceManager" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $InterfaceManager {

constructor(arg0: $IXaeroMinimap$Type)

/**
 * 
 * @deprecated
 */
public "getMinimapInterface"(): $MinimapInterface
get "minimapInterface"(): $MinimapInterface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceManager$Type = ($InterfaceManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceManager_ = $InterfaceManager$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$WaypointSharingHandler as $WaypointSharingHandler$0, $WaypointSharingHandler$Type as $WaypointSharingHandler$0$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/**
 * 
 * @deprecated
 */
export class $WaypointSharingHandler extends $WaypointSharingHandler$0 {
static readonly "WAYPOINT_OLD_SHARE_PREFIX": string
static readonly "WAYPOINT_ADD_PREFIX": string
static readonly "WAYPOINT_SHARE_PREFIX": string

constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type)

/**
 * 
 * @deprecated
 */
public "shareWaypoint"(arg0: $Screen$Type, arg1: $Waypoint$Type, arg2: $MinimapWorld$Type): void
/**
 * 
 * @deprecated
 */
public "shareWaypoint"(arg0: $Screen$Type, arg1: $Waypoint$Type, arg2: $WaypointWorld$Type): void
/**
 * 
 * @deprecated
 */
public "onWaypointReceived"(arg0: string, arg1: string): void
/**
 * 
 * @deprecated
 */
public "onWaypointAdd"(arg0: (string)[]): void
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
declare module "packages/xaero/common/gui/dropdown/$IDropDownContainer" {
import {$DropDownWidget, $DropDownWidget$Type} from "packages/xaero/common/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {

 "onDropdownOpen"(arg0: $DropDownWidget$Type): void
 "onDropdownClosed"(arg0: $DropDownWidget$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropDownContainer$Type = ($IDropDownContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDropDownContainer_ = $IDropDownContainer$Type;
}}
declare module "packages/xaero/common/gui/widget/$ClickAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$WidgetClickHandler, $WidgetClickHandler$Type} from "packages/xaero/common/gui/widget/$WidgetClickHandler"

export class $ClickAction extends $Enum<($ClickAction)> {
static readonly "NOTHING": $ClickAction
static readonly "URL": $ClickAction
readonly "clickHandler": $WidgetClickHandler


public static "values"(): ($ClickAction)[]
public static "valueOf"(arg0: string): $ClickAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickAction$Type = (("nothing") | ("url")) | ($ClickAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickAction_ = $ClickAction$Type;
}}
declare module "packages/xaero/common/icon/$XaeroIcon" {
import {$XaeroIconAtlas, $XaeroIconAtlas$Type} from "packages/xaero/common/icon/$XaeroIconAtlas"

export class $XaeroIcon {

constructor(arg0: $XaeroIconAtlas$Type, arg1: integer, arg2: integer)

public "getTextureAtlas"(): $XaeroIconAtlas
public "getOffsetY"(): integer
public "getOffsetX"(): integer
get "textureAtlas"(): $XaeroIconAtlas
get "offsetY"(): integer
get "offsetX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroIcon$Type = ($XaeroIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XaeroIcon_ = $XaeroIcon$Type;
}}
declare module "packages/xaero/common/server/player/$ServerPlayerData" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$Type} from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"

export class $ServerPlayerData {

constructor(arg0: $UUID$Type)

public static "get"(arg0: $ServerPlayer$Type): $ServerPlayerData
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getLastTrackedPlayerSync"(): long
public "setLastTrackedPlayerSync"(arg0: long): void
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
public "setOpacData"(arg0: any): void
public "getOpacData"(): any
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "hasMod"(): boolean
get "lastSyncedData"(): $SyncedTrackedPlayer
get "currentlySyncedPlayers"(): $Set<($UUID)>
get "lastTrackedPlayerSync"(): long
set "lastTrackedPlayerSync"(value: long)
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
set "opacData"(value: any)
get "opacData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$Type = ($ServerPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$Type;
}}
declare module "packages/xaero/common/cache/$BlockStateShortShapeCache" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockStateShortShapeCache {

constructor(arg0: $IXaeroMinimap$Type)

public "reset"(): void
public "isShort"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$Type = ($BlockStateShortShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$Type;
}}
declare module "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims" {
import {$HighlighterRegistry, $HighlighterRegistry$Type} from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPartyMemberDynamicInfoSyncableAPI, $IPartyMemberDynamicInfoSyncableAPI$Type} from "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI"
import {$IPlayerChunkClaimAPI, $IPlayerChunkClaimAPI$Type} from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SupportOpenPartiesAndClaims {

constructor(arg0: $IXaeroMinimap$Type)

public "register"(): void
public "onMapRender"(arg0: $Minecraft$Type, arg1: $PoseStack$Type, arg2: integer, arg3: integer, arg4: float, arg5: $ResourceLocation$Type, arg6: integer, arg7: integer): void
public "registerHighlighters"(arg0: $HighlighterRegistry$Type): void
public "isFromParty"(arg0: $UUID$Type): boolean
public "getAllyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
public "getModMain"(): $IXaeroMinimap
public "claimAt"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer): $IPlayerChunkClaimAPI
get "allyIterator"(): $Iterator<($IPartyMemberDynamicInfoSyncableAPI)>
get "modMain"(): $IXaeroMinimap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportOpenPartiesAndClaims$Type = ($SupportOpenPartiesAndClaims);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportOpenPartiesAndClaims_ = $SupportOpenPartiesAndClaims$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetScreen" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $WidgetScreen {

 "addButtonVisible"(arg0: $AbstractWidget$Type): void
 "getScreen"<S extends ($Screen) & ($WidgetScreen)>(): S
}

export namespace $WidgetScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetScreen$Type = ($WidgetScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetScreen_ = $WidgetScreen$Type;
}}
declare module "packages/xaero/common/controls/$ControlsHandler" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$HudSession, $HudSession$Type} from "packages/xaero/hud/$HudSession"

/**
 * 
 * @deprecated
 */
export class $ControlsHandler {

constructor(arg0: $IXaeroMinimap$Type, arg1: $HudSession$Type)

/**
 * 
 * @deprecated
 */
public "setKeyState"(arg0: $KeyMapping$Type, arg1: boolean): void
/**
 * 
 * @deprecated
 */
public "isDown"(arg0: $KeyMapping$Type): boolean
/**
 * 
 * @deprecated
 */
public "keyDown"(arg0: $KeyMapping$Type, arg1: boolean, arg2: boolean): void
/**
 * 
 * @deprecated
 */
public "keyUp"(arg0: $KeyMapping$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$Type = ($ControlsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsHandler_ = $ControlsHandler$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext" {
import {$WaypointMapRenderContext, $WaypointMapRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

/**
 * 
 * @deprecated
 */
export class $WaypointGuiRenderContext extends $WaypointMapRenderContext {
 "dimCoordinateScale": double

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointGuiRenderContext$Type = ($WaypointGuiRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointGuiRenderContext_ = $WaypointGuiRenderContext$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer" {
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$DoubleArrayFIFOQueue, $DoubleArrayFIFOQueue$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleArrayFIFOQueue"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$WaypointWorldRenderProvider, $WaypointWorldRenderProvider$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderProvider"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$WaypointWorldRenderer, $WaypointWorldRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$WaypointWorldRenderContext, $WaypointWorldRenderContext$Type} from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

/**
 * 
 * @deprecated
 */
export class $WaypointsIngameRenderer extends $WaypointWorldRenderer {
readonly "xaeroPlus$speedQueue": $DoubleArrayFIFOQueue

constructor(arg0: $MinimapElementReader$Type<($Waypoint$Type), ($WaypointWorldRenderContext$Type)>, arg1: $WaypointWorldRenderProvider$Type, arg2: $WaypointWorldRenderContext$Type, arg3: $Vector4f$Type)

/**
 * 
 * @deprecated
 */
public "render"(arg0: $MinimapSession$Type, arg1: float, arg2: $MinimapProcessor$Type, arg3: $Matrix4f$Type, arg4: $Matrix4f$Type): void
/**
 * 
 * @deprecated
 */
public "drawAsOverlay"(arg0: $PoseStack$Type, arg1: $PoseStack$Type, arg2: $MinimapRendererHelper$Type, arg3: $Waypoint$Type, arg4: $ModSettings$Type, arg5: $BufferBuilder$Type, arg6: $Tesselator$Type, arg7: $Font$Type, arg8: string, arg9: string, arg10: float, arg11: boolean, arg12: $MultiBufferSource$BufferSource$Type, arg13: $VertexConsumer$Type, arg14: $Matrix4f$Type, arg15: integer, arg16: integer, arg17: double, arg18: double, arg19: boolean, arg20: string): void
/**
 * 
 * @deprecated
 */
public "drawIconInWorld"(arg0: $PoseStack$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: $ModSettings$Type, arg4: $BufferBuilder$Type, arg5: $Tesselator$Type, arg6: $Font$Type, arg7: string, arg8: string, arg9: float, arg10: boolean, arg11: $MultiBufferSource$BufferSource$Type, arg12: $VertexConsumer$Type, arg13: boolean, arg14: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointsIngameRenderer$Type = ($WaypointsIngameRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointsIngameRenderer_ = $WaypointsIngameRenderer$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorld" {
import {$WaypointWorldContainer, $WaypointWorldContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$MinimapWorld, $MinimapWorld$Type} from "packages/xaero/hud/minimap/world/$MinimapWorld"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$WaypointSet, $WaypointSet$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSet"

/**
 * 
 * @deprecated
 */
export class $WaypointWorld extends $MinimapWorld {

/**
 * 
 * @deprecated
 */
constructor(arg0: $WaypointWorldContainer$Type, arg1: string, arg2: $ResourceKey$Type<($Level$Type)>)

/**
 * 
 * @deprecated
 */
public "getId"(): string
/**
 * 
 * @deprecated
 */
public "getCurrentSet"(): $WaypointSet
/**
 * 
 * @deprecated
 */
public "setId"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "setContainer"(arg0: $WaypointWorldContainer$Type): void
/**
 * 
 * @deprecated
 */
public "getInternalWorldKey"(): string
/**
 * 
 * @deprecated
 */
public "getServerWaypointsDisabled"(): $HashMap<(string), (boolean)>
/**
 * 
 * @deprecated
 */
public "getServerWaypoints"(): $HashMap<(integer), ($Waypoint)>
/**
 * 
 * @deprecated
 */
public "getCurrent"(): string
/**
 * 
 * @deprecated
 */
public "addSet"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "setCurrent"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "getSets"(): $HashMap<(string), ($WaypointSet)>
/**
 * 
 * @deprecated
 */
public "getFullId"(): string
/**
 * 
 * @deprecated
 */
public "getDimId"(): $ResourceKey<($Level)>
get "id"(): string
get "currentSet"(): $WaypointSet
set "id"(value: string)
set "container"(value: $WaypointWorldContainer$Type)
get "internalWorldKey"(): string
get "serverWaypointsDisabled"(): $HashMap<(string), (boolean)>
get "serverWaypoints"(): $HashMap<(integer), ($Waypoint)>
get "current"(): string
set "current"(value: string)
get "sets"(): $HashMap<(string), ($WaypointSet)>
get "fullId"(): string
get "dimId"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorld$Type = ($WaypointWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorld_ = $WaypointWorld$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapRendererHelper" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapRendererHelper {

constructor()

public "prepareMyTexturedColoredModalRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: float, arg11: float, arg12: float, arg13: float, arg14: $MultiTextureRenderTypeRenderer$Type): void
public "addTexturedRectToExistingBuffer"(arg0: $Matrix4f$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "prepareMyTexturedModalRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: $MultiTextureRenderTypeRenderer$Type): void
public "addColoredLineToExistingBuffer"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "restoreDefaultShaderBlendState"(): void
public "defaultOrtho"(arg0: $RenderTarget$Type): void
public "drawIconOutline"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "drawMyColoredRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
public "drawMyColoredRect"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer): void
public "drawMyTexturedModalRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "drawMyTexturedModalRect"(arg0: $PoseStack$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRendererHelper$Type = ($MinimapRendererHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRendererHelper_ = $MinimapRendererHelper$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetClickHandler" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"

export interface $WidgetClickHandler {

 "onClick"(arg0: $Screen$Type, arg1: $Widget$Type): void

(arg0: $Screen$Type, arg1: $Widget$Type): void
}

export namespace $WidgetClickHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetClickHandler$Type = ($WidgetClickHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetClickHandler_ = $WidgetClickHandler$Type;
}}
declare module "packages/xaero/common/message/$MinimapMessage" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MinimapMessage<T extends $MinimapMessage<(T)>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapMessage$Type<T> = ($MinimapMessage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapMessage_<T> = $MinimapMessage$Type<(T)>;
}}
declare module "packages/xaero/common/core/$IXaeroMinimapClientPlayNetHandler" {
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"

export interface $IXaeroMinimapClientPlayNetHandler {

 "getXaero_minimapSession"(): $XaeroMinimapSession
 "setXaero_minimapSession"(arg0: $XaeroMinimapSession$Type): void
}

export namespace $IXaeroMinimapClientPlayNetHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXaeroMinimapClientPlayNetHandler$Type = ($IXaeroMinimapClientPlayNetHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXaeroMinimapClientPlayNetHandler_ = $IXaeroMinimapClientPlayNetHandler$Type;
}}
declare module "packages/xaero/common/minimap/render/radar/element/$RadarRenderer" {
import {$RadarElementReader, $RadarElementReader$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarElementReader"
import {$RadarRenderer as $RadarRenderer$0, $RadarRenderer$Type as $RadarRenderer$0$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import {$RadarRenderContext, $RadarRenderContext$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$RadarRenderProvider, $RadarRenderProvider$Type} from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderProvider"
import {$RadarIconManager, $RadarIconManager$Type} from "packages/xaero/hud/minimap/radar/icon/$RadarIconManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"

/**
 * 
 * @deprecated
 */
export class $RadarRenderer extends $RadarRenderer$0 {

constructor(arg0: $RadarIconManager$Type, arg1: $Minimap$Type, arg2: $RadarElementReader$Type, arg3: $RadarRenderProvider$Type, arg4: $RadarRenderContext$Type)

/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $Entity$Type, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: $Entity$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
/**
 * 
 * @deprecated
 */
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
/**
 * 
 * @deprecated
 */
public "shouldRender"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "renderEntityDotToFBO"(arg0: integer, arg1: boolean, arg2: $GuiGraphics$Type, arg3: $MinimapProcessor$Type, arg4: $Player$Type, arg5: $Entity$Type, arg6: $Entity$Type, arg7: float, arg8: boolean, arg9: boolean, arg10: $MinimapRadar$Type, arg11: integer, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: double, arg17: $MultiBufferSource$BufferSource$Type, arg18: $RenderType$Type, arg19: $VertexConsumer$Type, arg20: $MultiTextureRenderTypeRenderer$Type, arg21: $VertexConsumer$Type, arg22: integer, arg23: boolean, arg24: integer, arg25: boolean, arg26: integer, arg27: double, arg28: integer, arg29: integer, arg30: integer, arg31: $EntityRadarCategory$Type, arg32: $MinimapRendererHelper$Type, arg33: $Font$Type, arg34: $RenderTarget$Type, arg35: float): void
/**
 * 
 * @deprecated
 */
public "renderEntityDotToFBO"(arg0: $MinimapElementRenderLocation$Type, arg1: boolean, arg2: $GuiGraphics$Type, arg3: $MinimapProcessor$Type, arg4: $Player$Type, arg5: $Entity$Type, arg6: $Entity$Type, arg7: float, arg8: boolean, arg9: boolean, arg10: $MinimapRadar$Type, arg11: integer, arg12: boolean, arg13: boolean, arg14: boolean, arg15: boolean, arg16: double, arg17: $MultiBufferSource$BufferSource$Type, arg18: $RenderType$Type, arg19: $VertexConsumer$Type, arg20: $MultiTextureRenderTypeRenderer$Type, arg21: $VertexConsumer$Type, arg22: integer, arg23: boolean, arg24: integer, arg25: boolean, arg26: integer, arg27: double, arg28: integer, arg29: integer, arg30: integer, arg31: $EntityRadarCategory$Type, arg32: $MinimapRendererHelper$Type, arg33: $Font$Type, arg34: $RenderTarget$Type, arg35: float): void
/**
 * 
 * @deprecated
 */
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
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
declare module "packages/xaero/common/gui/$ISettingEntry" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {

 "getStringForSearch"(): string
 "createWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $AbstractWidget
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingEntry$Type = ($ISettingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingEntry_ = $ISettingEntry$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SyncedPlayerTrackerSystemManager {

constructor()

public "register"(arg0: string, arg1: $ISyncedPlayerTrackerSystem$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$Type;
}}
declare module "packages/xaero/common/server/player/$ServerPlayerTickHandler" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerTickHandler {

constructor()

public "tick"(arg0: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerTickHandler$Type = ($ServerPlayerTickHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerTickHandler_ = $ServerPlayerTickHandler$Type;
}}
declare module "packages/xaero/common/minimap/info/$InfoDisplay" {
import {$InfoDisplayWidgetFactory, $InfoDisplayWidgetFactory$Type} from "packages/xaero/hud/minimap/info/widget/$InfoDisplayWidgetFactory"
import {$InfoDisplayStateCodec, $InfoDisplayStateCodec$Type} from "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$InfoDisplayWidgetFactory as $InfoDisplayWidgetFactory$0, $InfoDisplayWidgetFactory$Type as $InfoDisplayWidgetFactory$0$Type} from "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InfoDisplay as $InfoDisplay$0, $InfoDisplay$Type as $InfoDisplay$0$Type} from "packages/xaero/hud/minimap/info/$InfoDisplay"
import {$InfoDisplayOnCompile, $InfoDisplayOnCompile$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile"
import {$InfoDisplayOnCompile as $InfoDisplayOnCompile$0, $InfoDisplayOnCompile$Type as $InfoDisplayOnCompile$0$Type} from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile"
import {$InfoDisplayStateCodec as $InfoDisplayStateCodec$0, $InfoDisplayStateCodec$Type as $InfoDisplayStateCodec$0$Type} from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

/**
 * 
 * @deprecated
 */
export class $InfoDisplay<T> extends $InfoDisplay$0<(T)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $Component$Type, arg2: T, arg3: $InfoDisplayStateCodec$0$Type<(T)>, arg4: $InfoDisplayWidgetFactory$Type<(T)>, arg5: $InfoDisplayOnCompile$0$Type<(T)>, arg6: $Consumer$Type<($InfoDisplay$0$Type<(any)>)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: string, arg1: $Component$Type, arg2: T, arg3: $InfoDisplayStateCodec$Type<(T)>, arg4: $InfoDisplayWidgetFactory$0$Type<(T)>, arg5: $InfoDisplayOnCompile$Type<(T)>, arg6: $List$Type<($InfoDisplay$Type<(any)>)>)

/**
 * 
 * @deprecated
 */
public "setState"(arg0: T): void
/**
 * 
 * @deprecated
 */
public "getName"(): $Component
/**
 * 
 * @deprecated
 */
public "getId"(): string
/**
 * 
 * @deprecated
 */
public "getState"(): T
/**
 * 
 * @deprecated
 */
public "reset"(): void
/**
 * 
 * @deprecated
 */
public "getDefaultState"(): T
/**
 * 
 * @deprecated
 */
public "getTextColor"(): integer
/**
 * 
 * @deprecated
 */
public "getBackgroundColor"(): integer
/**
 * 
 * @deprecated
 */
public "setTextColor"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setBackgroundColor"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getWidgetFactory"(): $InfoDisplayWidgetFactory$0<(T)>
/**
 * 
 * @deprecated
 */
public "getOnCompile"(): $InfoDisplayOnCompile<(T)>
set "state"(value: T)
get "name"(): $Component
get "id"(): string
get "state"(): T
get "defaultState"(): T
get "textColor"(): integer
get "backgroundColor"(): integer
set "textColor"(value: integer)
set "backgroundColor"(value: integer)
get "widgetFactory"(): $InfoDisplayWidgetFactory$0<(T)>
get "onCompile"(): $InfoDisplayOnCompile<(T)>
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
declare module "packages/xaero/common/gui/widget/init/$WidgetInitializer" {
import {$WidgetScreen, $WidgetScreen$Type} from "packages/xaero/common/gui/widget/$WidgetScreen"
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"

export interface $WidgetInitializer {

 "init"(arg0: $WidgetScreen$Type, arg1: integer, arg2: integer, arg3: $Widget$Type): void

(arg0: $WidgetScreen$Type, arg1: integer, arg2: integer, arg3: $Widget$Type): void
}

export namespace $WidgetInitializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetInitializer$Type = ($WidgetInitializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetInitializer_ = $WidgetInitializer$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider" {
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapElementRenderProvider as $MinimapElementRenderProvider$0, $MinimapElementRenderProvider$Type as $MinimapElementRenderProvider$0$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider"

/**
 * 
 * @deprecated
 */
export class $MinimapElementRenderProvider<E, RC> extends $MinimapElementRenderProvider$0<(E), (RC)> {

constructor()

/**
 * 
 * @deprecated
 */
public "getNext"(arg0: integer, arg1: RC): E
public "getNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): E
/**
 * 
 * @deprecated
 */
public "hasNext"(arg0: integer, arg1: RC): boolean
public "hasNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): boolean
public "end"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): void
/**
 * 
 * @deprecated
 */
public "end"(arg0: integer, arg1: RC): void
/**
 * 
 * @deprecated
 */
public "begin"(arg0: integer, arg1: RC): void
public "begin"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): void
public "setupContextAndGetNext"(arg0: $MinimapElementRenderLocation$Type, arg1: RC): E
/**
 * 
 * @deprecated
 */
public "setupContextAndGetNext"(arg0: integer, arg1: RC): E
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
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer" {
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$File, $File$Type} from "packages/java/io/$File"
import {$WaypointWorldRootContainer, $WaypointWorldRootContainer$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$MinimapWorldContainer, $MinimapWorldContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/**
 * 
 * @deprecated
 */
export class $WaypointWorldContainer extends $MinimapWorldContainer {

/**
 * 
 * @deprecated
 */
constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: string, arg3: $WaypointWorldRootContainer$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type, arg2: $XaeroPath$Type, arg3: $MinimapWorldRootContainer$Type)

/**
 * 
 * @deprecated
 */
public "setKey"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "addName"(arg0: string, arg1: string): void
/**
 * 
 * @deprecated
 */
public "getFullName"(arg0: string, arg1: string): string
/**
 * 
 * @deprecated
 */
public "getName"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "getKey"(): string
/**
 * 
 * @deprecated
 */
public "addSubContainer"(arg0: string): $WaypointWorldContainer
/**
 * 
 * @deprecated
 */
public "getFirstWorld"(): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "getSubName"(): string
/**
 * 
 * @deprecated
 */
public "getRootContainer"(): $WaypointWorldRootContainer
/**
 * 
 * @deprecated
 */
public "getEqualIgnoreCaseSub"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "deleteSubContainer"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "getFirstWorldConnectedTo"(arg0: $WaypointWorld$Type): $WaypointWorld
/**
 * 
 * @deprecated
 */
public "containsSub"(arg0: string): boolean
/**
 * 
 * @deprecated
 */
public "getAllWorlds"(): $ArrayList<($WaypointWorld)>
/**
 * 
 * @deprecated
 */
public "getDirectory"(): $File
/**
 * 
 * @deprecated
 */
public "getSubId"(): string
/**
 * 
 * @deprecated
 */
public "removeName"(arg0: string): void
set "key"(value: string)
get "empty"(): boolean
get "key"(): string
get "firstWorld"(): $WaypointWorld
get "subName"(): string
get "rootContainer"(): $WaypointWorldRootContainer
get "allWorlds"(): $ArrayList<($WaypointWorld)>
get "directory"(): $File
get "subId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldContainer$Type = ($WaypointWorldContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldContainer_ = $WaypointWorldContainer$Type;
}}
declare module "packages/xaero/common/minimap/region/$MinimapChunk" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$MinimapTile, $MinimapTile$Type} from "packages/xaero/common/minimap/region/$MinimapTile"
import {$IntBuffer, $IntBuffer$Type} from "packages/java/nio/$IntBuffer"

export class $MinimapChunk {
static readonly "SIZE_TILES": integer
static readonly "INT_BUFFER_SIZE": integer
static readonly "LIGHT_LEVELS": integer

constructor(arg0: integer, arg1: integer)

public "getX"(): integer
public "getTile"(arg0: integer, arg1: integer): $MinimapTile
public "getBuffer"(arg0: integer): $IntBuffer
public "reset"(arg0: integer, arg1: integer): void
public "cleanup"(arg0: $MinimapInterface$Type): void
public "bindTexture"(arg0: integer): integer
public "isHasSomething"(): boolean
public "updateBuffers"(arg0: integer, arg1: ((integer)[])[]): void
public "setLevelsBuffered"(arg0: integer): void
public "recycleTiles"(): void
public "getLevelsBuffered"(): integer
public "setBlockTextureUpload"(arg0: boolean): void
public "getGlTexture"(arg0: integer): integer
public "setGlTexture"(arg0: integer, arg1: integer): void
public "isRefreshRequired"(arg0: integer): boolean
public "setRefreshRequired"(arg0: integer, arg1: boolean): void
public "setHasSomething"(arg0: boolean): void
public "getLevelToRefresh"(arg0: integer): integer
public "isBlockTextureUpload"(): boolean
public "getZ"(): integer
public "isChanged"(): boolean
public "setChanged"(arg0: boolean): void
public "copyBuffer"(arg0: integer, arg1: $IntBuffer$Type): void
public "setTile"(arg0: integer, arg1: integer, arg2: $MinimapTile$Type): void
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: integer): void
get "x"(): integer
get "hasSomething"(): boolean
set "levelsBuffered"(value: integer)
get "levelsBuffered"(): integer
set "blockTextureUpload"(value: boolean)
set "hasSomething"(value: boolean)
get "blockTextureUpload"(): boolean
get "z"(): integer
get "changed"(): boolean
set "changed"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapChunk$Type = ($MinimapChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapChunk_ = $MinimapChunk$Type;
}}
declare module "packages/xaero/common/events/$ClientEventsListener" {
import {$HudSession, $HudSession$Type} from "packages/xaero/hud/$HudSession"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ToggleKeyMapping, $ToggleKeyMapping$Type} from "packages/net/minecraft/client/$ToggleKeyMapping"

export class $ClientEventsListener {

constructor()

public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$Type): boolean
public "handleForceToggleKeyMapping"(arg0: $ToggleKeyMapping$Type): boolean
public "clientTickPost"(arg0: $HudSession$Type): void
public "playerTickPost"(arg0: $HudSession$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEventsListener$Type = ($ClientEventsListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEventsListener_ = $ClientEventsListener$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager" {
import {$MinimapWorldConnectionManager, $MinimapWorldConnectionManager$Type} from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import {$PrintWriter, $PrintWriter$Type} from "packages/java/io/$PrintWriter"
import {$WaypointWorld, $WaypointWorld$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/**
 * 
 * @deprecated
 */
export class $WaypointWorldConnectionManager extends $MinimapWorldConnectionManager {

/**
 * 
 * @deprecated
 */
constructor()
/**
 * 
 * @deprecated
 */
constructor(arg0: boolean)

/**
 * 
 * @deprecated
 */
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "save"(arg0: $PrintWriter$Type): void
/**
 * 
 * @deprecated
 */
public "addConnection"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
/**
 * 
 * @deprecated
 */
public "removeConnection"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
/**
 * 
 * @deprecated
 */
public "isConnected"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): boolean
/**
 * 
 * @deprecated
 */
public "swapConnections"(arg0: $WaypointWorld$Type, arg1: $WaypointWorld$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldConnectionManager$Type = ($WaypointWorldConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldConnectionManager_ = $WaypointWorldConnectionManager$Type;
}}
declare module "packages/xaero/common/minimap/info/$InfoDisplayManager" {
import {$InfoDisplayManager as $InfoDisplayManager$0, $InfoDisplayManager$Type as $InfoDisplayManager$0$Type} from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

/**
 * 
 * @deprecated
 */
export class $InfoDisplayManager extends $InfoDisplayManager$0 {

constructor()

/**
 * 
 * @deprecated
 */
public "getStream"(): $Stream<($InfoDisplay<(any)>)>
/**
 * 
 * @deprecated
 */
public "getCount"(): integer
/**
 * 
 * @deprecated
 */
public "add"(arg0: $InfoDisplay$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "reset"(): void
/**
 * 
 * @deprecated
 */
public "setOrder"(arg0: $List$Type<(string)>): void
get "stream"(): $Stream<($InfoDisplay<(any)>)>
get "count"(): integer
set "order"(value: $List$Type<(string)>)
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
declare module "packages/xaero/common/gui/$GuiSettings" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LocalIntRef, $LocalIntRef$Type} from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$WidgetScreen, $WidgetScreen$Type} from "packages/xaero/common/gui/widget/$WidgetScreen"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Operation, $Operation$Type} from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ScreenBase, $ScreenBase$Type} from "packages/xaero/common/gui/$ScreenBase"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ISettingEntry, $ISettingEntry$Type} from "packages/xaero/common/gui/$ISettingEntry"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $GuiSettings extends $ScreenBase implements $WidgetScreen {
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

constructor(arg0: $IXaeroMinimap$Type, arg1: $Component$Type, arg2: $Screen$Type, arg3: $Screen$Type)

public "getIndex"(arg0: $GuiEventListener$Type): integer
public "handler$bnc000$xaeroplus$adjustEntriesPerPage"(ci: $CallbackInfo$Type): void
public "redirect$bnc000$xaeroplus$settingListToRenderRedirect"(instance: $ArrayList$Type<(any)>, entryObject: any): boolean
public "wrapOperation$bnc000$xaeroplus$adjustSettingEntryWidth"(instance: $ISettingEntry$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$Type<(any)>, i: integer): $AbstractWidget
public "setShouldSaveRadar"(): void
public "addButtonVisible"(arg0: $AbstractWidget$Type): void
public "restoreFocus"(arg0: integer): void
public "getEntriesCopy"(): ($ISettingEntry)[]
public "wrapOperation$bnc000$xaeroplus$adjustSettingEntryWidth$mixinextras$bridge$32"(instance: $ISettingEntry$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$Type<(any)>, i: $LocalIntRef$Type): $AbstractWidget
public "handler$bnc000$xaeroplus$adjustForwardBackButtonPositionsForExtraRows"(ci: $CallbackInfo$Type): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "getScreen"<S extends ($Screen) & ($WidgetScreen)>(): S
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "init"(): void
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "entriesCopy"(): ($ISettingEntry)[]
get "screen"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSettings$Type = ($GuiSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiSettings_ = $GuiSettings$Type;
}}
declare module "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InfoDisplayRenderer as $InfoDisplayRenderer$0, $InfoDisplayRenderer$Type as $InfoDisplayRenderer$0$Type} from "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

/**
 * 
 * @deprecated
 */
export class $InfoDisplayRenderer extends $InfoDisplayRenderer$0 {
static readonly "DEPTH_OFFSET": integer

constructor()

/**
 * 
 * @deprecated
 */
public "render"(arg0: $GuiGraphics$Type, arg1: $XaeroMinimapSession$Type, arg2: $MinimapProcessor$Type, arg3: $Minimap$Type, arg4: $MinimapRendererHelper$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$Type, arg15: integer, arg16: integer, arg17: float, arg18: $ModSettings$Type, arg19: $MultiBufferSource$BufferSource$Type): void
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
declare module "packages/xaero/common/misc/$ListFactory" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ListFactory {

 "get"<T>(): $List<(T)>

(): $List<(T)>
}

export namespace $ListFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListFactory$Type = ($ListFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListFactory_ = $ListFactory$Type;
}}
declare module "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SyncedTrackedPlayer {

constructor(arg0: $UUID$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

/**
 * 
 * @deprecated
 */
public "getDimension"(): $ResourceLocation
public "getX"(): double
public "getY"(): double
public "copyFrom"(arg0: $SyncedTrackedPlayer$Type): void
public "update"(arg0: $Player$Type): void
public "getId"(): $UUID
public "getDimensionKey"(): $ResourceKey<($Level)>
public "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $SyncedTrackedPlayer
public "getZ"(): double
public "matchesEnough"(arg0: $Player$Type, arg1: double): boolean
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
get "dimension"(): $ResourceLocation
get "x"(): double
get "y"(): double
get "id"(): $UUID
get "dimensionKey"(): $ResourceKey<($Level)>
set "dimension"(value: $ResourceKey$Type<($Level$Type)>)
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$Type = ($SyncedTrackedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$Type;
}}
declare module "packages/xaero/common/patreon/$PatreonMod" {
import {$File, $File$Type} from "packages/java/io/$File"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $PatreonMod {
 "fileLayoutID": string
 "latestVersionLayout": string
 "changelogLink": string
 "modName": string
 "modJar": $File
 "currentVersion": string
 "latestVersion": string
 "md5": string
 "onVersionIgnore": $Runnable

constructor(arg0: string, arg1: string, arg2: string, arg3: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatreonMod$Type = ($PatreonMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatreonMod_ = $PatreonMod$Type;
}}
declare module "packages/xaero/common/minimap/radar/$MinimapRadar" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$MinimapRadarList, $MinimapRadarList$Type} from "packages/xaero/common/minimap/radar/$MinimapRadarList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EntityRadarCategory, $EntityRadarCategory$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import {$EntityRadarCategoryManager, $EntityRadarCategoryManager$Type} from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$RadarSession, $RadarSession$Type} from "packages/xaero/hud/minimap/radar/$RadarSession"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $MinimapRadar extends $RadarSession {

/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityRadarCategoryManager$Type)

/**
 * 
 * @deprecated
 */
public "getMaxDistance"(arg0: $MinimapProcessor$Type, arg1: boolean): double
/**
 * 
 * @deprecated
 */
public "getTeamColour"(arg0: $Entity$Type): integer
/**
 * 
 * @deprecated
 */
public "setLastRenderViewEntity"(arg0: $Entity$Type): void
/**
 * 
 * @deprecated
 */
public "updateRadar"(arg0: $ClientLevel$Type, arg1: $Player$Type, arg2: $Entity$Type, arg3: $MinimapProcessor$Type): void
/**
 * 
 * @deprecated
 */
public "getEntityColour"(arg0: $Player$Type, arg1: $Entity$Type, arg2: float, arg3: boolean, arg4: $EntityRadarCategory$Type, arg5: integer, arg6: integer, arg7: boolean, arg8: integer): integer
/**
 * 
 * @deprecated
 */
public "getEntityBrightness"(arg0: float, arg1: integer, arg2: integer, arg3: boolean): float
/**
 * 
 * @deprecated
 */
public "getEntityCategoryManager"(): $EntityRadarCategoryManager
/**
 * 
 * @deprecated
 */
public "getRadarListsIterator"(): $Iterator<($MinimapRadarList)>
/**
 * 
 * @deprecated
 */
public "getEntityX"(arg0: $Entity$Type, arg1: float): double
/**
 * 
 * @deprecated
 */
public "getEntityY"(arg0: $Entity$Type, arg1: float): double
/**
 * 
 * @deprecated
 */
public "getEntityZ"(arg0: $Entity$Type, arg1: float): double
set "lastRenderViewEntity"(value: $Entity$Type)
get "entityCategoryManager"(): $EntityRadarCategoryManager
get "radarListsIterator"(): $Iterator<($MinimapRadarList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapRadar$Type = ($MinimapRadar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapRadar_ = $MinimapRadar$Type;
}}
declare module "packages/xaero/common/$XaeroMinimapSession" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$HudSession, $HudSession$Type} from "packages/xaero/hud/$HudSession"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$WaypointSharingHandler, $WaypointSharingHandler$Type} from "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler"

/**
 * 
 * @deprecated
 */
export class $XaeroMinimapSession extends $HudSession {

constructor(arg0: $HudMod$Type)

public "init"(arg0: $ClientPacketListener$Type): void
public static "getCurrentSession"(): $XaeroMinimapSession
public static "getForPlayer"(arg0: $LocalPlayer$Type): $XaeroMinimapSession
public "getWaypointsManager"(): $WaypointsManager
public "getWaypointSharing"(): $WaypointSharingHandler
public "getMinimapProcessor"(): $MinimapProcessor
public "getModMain"(): $IXaeroMinimap
get "currentSession"(): $XaeroMinimapSession
get "waypointsManager"(): $WaypointsManager
get "waypointSharing"(): $WaypointSharingHandler
get "minimapProcessor"(): $MinimapProcessor
get "modMain"(): $IXaeroMinimap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XaeroMinimapSession$Type = ($XaeroMinimapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XaeroMinimapSession_ = $XaeroMinimapSession$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointSet" {
import {$WaypointSet as $WaypointSet$0, $WaypointSet$Type as $WaypointSet$0$Type} from "packages/xaero/hud/minimap/waypoint/set/$WaypointSet"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"

/**
 * 
 * @deprecated
 */
export class $WaypointSet extends $WaypointSet$0 {

/**
 * 
 * @deprecated
 */
constructor(arg0: string)

/**
 * 
 * @deprecated
 */
public "getName"(): string
/**
 * 
 * @deprecated
 */
public "getList"(): $ArrayList<($Waypoint)>
get "name"(): string
get "list"(): $ArrayList<($Waypoint)>
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
declare module "packages/xaero/common/gui/widget/$WidgetScreenHandler" {
import {$AccessorWidgetScreenHandler, $AccessorWidgetScreenHandler$Type} from "packages/xaeroplus/mixin/client/$AccessorWidgetScreenHandler"
import {$WidgetScreen, $WidgetScreen$Type} from "packages/xaero/common/gui/widget/$WidgetScreen"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $WidgetScreenHandler implements $AccessorWidgetScreenHandler {

constructor()

public "initialize"(arg0: $WidgetScreen$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $GuiGraphics$Type, arg1: $WidgetScreen$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double): void
public "handleClick"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double): void
public "renderTooltips"(arg0: $GuiGraphics$Type, arg1: $Screen$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetScreenHandler$Type = ($WidgetScreenHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetScreenHandler_ = $WidgetScreenHandler$Type;
}}
declare module "packages/xaero/common/gui/widget/$HoverAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HoverAction extends $Enum<($HoverAction)> {
static readonly "NOTHING": $HoverAction
static readonly "TOOLTIP": $HoverAction


public static "values"(): ($HoverAction)[]
public static "valueOf"(arg0: string): $HoverAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoverAction$Type = (("nothing") | ("tooltip")) | ($HoverAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoverAction_ = $HoverAction$Type;
}}
declare module "packages/xaero/common/effect/$NoWaypointsEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoWaypointsEffect extends $MinimapStatusEffect {

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoWaypointsEffect$Type = ($NoWaypointsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoWaypointsEffect_ = $NoWaypointsEffect$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$Waypoint" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$WaypointVisibilityType, $WaypointVisibilityType$Type} from "packages/xaero/common/minimap/waypoints/$WaypointVisibilityType"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$WaypointColor, $WaypointColor$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointColor"
import {$WaypointPurpose, $WaypointPurpose$Type} from "packages/xaero/hud/minimap/waypoint/$WaypointPurpose"

export class $Waypoint implements $Comparable<($Waypoint)> {
static readonly "ONEOFF_DESTINATION_SAFE_FOR": integer
static readonly "ONEOFF_DESTINATION_REMOVE_DISTANCE": integer
static "RENDER_SORTING_POS": $Vec3

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer, arg7: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: $WaypointColor$Type, arg6: $WaypointPurpose$Type, arg7: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: $WaypointColor$Type, arg6: $WaypointPurpose$Type, arg7: boolean, arg8: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: $WaypointColor$Type, arg6: $WaypointPurpose$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: $WaypointColor$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: string, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean)

public "getLocalizedName"(): string
public "getX"(): integer
public "getX"(arg0: double): integer
public "getY"(): integer
public "getInitials"(): string
/**
 * 
 * @deprecated
 */
public "setType"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getSymbol"(): string
/**
 * 
 * @deprecated
 */
public "setColor"(arg0: integer): void
public "getName"(): string
public "compareTo"(arg0: $Waypoint$Type): integer
public "setName"(arg0: string): void
public "setInitials"(arg0: string): void
public "setWaypointColor"(arg0: $WaypointColor$Type): void
public "setYIncluded"(arg0: boolean): void
public "setTemporary"(arg0: boolean): void
public "isServerWaypoint"(): boolean
public "getComparisonAngleCos"(arg0: $Camera$Type, arg1: double): double
public "getComparisonName"(): string
public "getComparisonDistance"(arg0: $Camera$Type, arg1: double): double
public "isTemporary"(): boolean
/**
 * 
 * @deprecated
 */
public "getActualColor"(): integer
public "isYIncluded"(): boolean
public "isDestination"(): boolean
public "getWaypointColor"(): $WaypointColor
/**
 * 
 * @deprecated
 */
public "getVisibilityType"(): integer
public "getVisibility"(): $WaypointVisibilityType
/**
 * 
 * @deprecated
 */
public "setVisibilityType"(arg0: integer): void
public "setRotation"(arg0: boolean): void
public "setVisibility"(arg0: $WaypointVisibilityType$Type): void
public "getDistanceSq"(arg0: double, arg1: double, arg2: double): double
public "setDisabled"(arg0: boolean): void
public "getZ"(arg0: double): integer
public "getZ"(): integer
public "isGlobal"(): boolean
/**
 * 
 * @deprecated
 */
public "getColor"(): integer
/**
 * 
 * @deprecated
 */
public "setSymbol"(arg0: string): void
public "getNameSafe"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "getSymbolSafe"(arg0: string): string
public "getInitialsSafe"(arg0: string): string
/**
 * 
 * @deprecated
 */
public "getWaypointType"(): integer
public "getCreatedAt"(): long
/**
 * 
 * @deprecated
 */
public "isOneoffDestination"(): boolean
/**
 * 
 * @deprecated
 */
public "setOneoffDestination"(arg0: boolean): void
public static "getStringFromStringSafe"(arg0: string, arg1: string): string
public "getYaw"(): integer
public "setYaw"(arg0: integer): void
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "isDisabled"(): boolean
public "isRotation"(): boolean
public "getPurpose"(): $WaypointPurpose
public "setPurpose"(arg0: $WaypointPurpose$Type): void
public "setZ"(arg0: integer): void
get "localizedName"(): string
get "x"(): integer
get "y"(): integer
get "initials"(): string
set "type"(value: integer)
get "symbol"(): string
set "color"(value: integer)
get "name"(): string
set "name"(value: string)
set "initials"(value: string)
set "waypointColor"(value: $WaypointColor$Type)
set "yIncluded"(value: boolean)
set "temporary"(value: boolean)
get "serverWaypoint"(): boolean
get "comparisonName"(): string
get "temporary"(): boolean
get "actualColor"(): integer
get "yIncluded"(): boolean
get "destination"(): boolean
get "waypointColor"(): $WaypointColor
get "visibilityType"(): integer
get "visibility"(): $WaypointVisibilityType
set "visibilityType"(value: integer)
set "rotation"(value: boolean)
set "visibility"(value: $WaypointVisibilityType$Type)
set "disabled"(value: boolean)
get "z"(): integer
get "global"(): boolean
get "color"(): integer
set "symbol"(value: string)
get "waypointType"(): integer
get "createdAt"(): long
get "oneoffDestination"(): boolean
set "oneoffDestination"(value: boolean)
get "yaw"(): integer
set "yaw"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
get "disabled"(): boolean
get "rotation"(): boolean
get "purpose"(): $WaypointPurpose
set "purpose"(value: $WaypointPurpose$Type)
set "z"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Waypoint$Type = ($Waypoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Waypoint_ = $Waypoint$Type;
}}
declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderer" {
import {$MinimapElementReader, $MinimapElementReader$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$MinimapElementRenderer as $MinimapElementRenderer$0, $MinimapElementRenderer$Type as $MinimapElementRenderer$0$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MinimapElementRenderInfo, $MinimapElementRenderInfo$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import {$MinimapElementRenderProvider, $MinimapElementRenderProvider$Type} from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinimapElementRenderLocation, $MinimapElementRenderLocation$Type} from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $MinimapElementRenderer<E, RC> extends $MinimapElementRenderer$0<(E), (RC)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: $MinimapElementReader$Type<(E), (RC)>, arg1: $MinimapElementRenderProvider$Type<(E), (RC)>, arg2: RC)

/**
 * 
 * @deprecated
 */
public "getElementReader"(): $MinimapElementReader<(E), (RC)>
/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: E, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
public "renderElement"(arg0: E, arg1: boolean, arg2: boolean, arg3: double, arg4: float, arg5: double, arg6: double, arg7: $MinimapElementRenderInfo$Type, arg8: $GuiGraphics$Type, arg9: $MultiBufferSource$BufferSource$Type): boolean
public "shouldRender"(arg0: $MinimapElementRenderLocation$Type): boolean
/**
 * 
 * @deprecated
 */
public "shouldRender"(arg0: integer): boolean
public "preRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
public "postRender"(arg0: $MinimapElementRenderInfo$Type, arg1: $MultiBufferSource$BufferSource$Type, arg2: $MultiTextureRenderTypeRendererProvider$Type): void
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
declare module "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportArgonautsServer {

constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportArgonautsServer$Type = ($SupportArgonautsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportArgonautsServer_ = $SupportArgonautsServer$Type;
}}
declare module "packages/xaero/common/effect/$NoRadarEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MinimapStatusEffect, $MinimapStatusEffect$Type} from "packages/xaero/common/effect/$MinimapStatusEffect"

export class $NoRadarEffect extends $MinimapStatusEffect {

constructor(arg0: $MobEffectCategory$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoRadarEffect$Type = ($NoRadarEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoRadarEffect_ = $NoRadarEffect$Type;
}}
declare module "packages/xaero/common/events/$ModCommonEvents" {
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

export class $ModCommonEvents {

constructor(arg0: $IXaeroMinimap$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCommonEvents$Type = ($ModCommonEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCommonEvents_ = $ModCommonEvents$Type;
}}
declare module "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$RadarColor, $RadarColor$Type} from "packages/xaero/hud/minimap/radar/color/$RadarColor"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import {$MinimapRenderer, $MinimapRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapRenderer"
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$WaypointMapRenderer, $WaypointMapRenderer$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapSafeModeRenderer extends $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $Minecraft$Type, arg2: $WaypointMapRenderer$Type, arg3: $Minimap$Type, arg4: $CompassRenderer$Type)

public "updateMapFrameSafeMode"(arg0: $MinimapSession$Type, arg1: $MinimapProcessor$Type, arg2: $Player$Type, arg3: $Entity$Type, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: boolean, arg9: integer, arg10: double, arg11: double, arg12: boolean, arg13: $ModSettings$Type): void
public "renderEntityListSafeMode"(arg0: $MinimapProcessor$Type, arg1: $Entity$Type, arg2: $Iterator$Type<($Entity$Type)>, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: double, arg11: float, arg12: integer, arg13: boolean, arg14: integer, arg15: $RadarColor$Type, arg16: $RadarColor$Type, arg17: double): void
public "renderEntityDotSafeMode"(arg0: $MinimapProcessor$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: double, arg4: double, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: double, arg10: double, arg11: float, arg12: integer, arg13: boolean, arg14: integer, arg15: $RadarColor$Type, arg16: $RadarColor$Type, arg17: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapSafeModeRenderer$Type = ($MinimapSafeModeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapSafeModeRenderer_ = $MinimapSafeModeRenderer$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer" {
import {$WaypointGuiRenderContext, $WaypointGuiRenderContext$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext"
import {$Waypoint, $Waypoint$Type} from "packages/xaero/common/minimap/waypoints/$Waypoint"
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$Type} from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import {$WaypointRenderProvider, $WaypointRenderProvider$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointRenderProvider"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Window, $Window$Type} from "packages/com/mojang/blaze3d/platform/$Window"
import {$WaypointsManager, $WaypointsManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import {$WaypointsGuiRenderer as $WaypointsGuiRenderer$0, $WaypointsGuiRenderer$Type as $WaypointsGuiRenderer$0$Type} from "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer"
import {$WaypointReader, $WaypointReader$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointReader"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$MinimapRendererHelper, $MinimapRendererHelper$Type} from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $WaypointsGuiRenderer extends $WaypointsGuiRenderer$0 {

constructor(arg0: $WaypointReader$Type, arg1: $WaypointRenderProvider$Type, arg2: $WaypointGuiRenderContext$Type)

/**
 * 
 * @deprecated
 */
public "getOrder"(): integer
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $MinimapSession$Type, arg1: $GuiGraphics$Type, arg2: $Window$Type): void
/**
 * 
 * @deprecated
 */
public "drawSetChange"(arg0: $WaypointsManager$Type, arg1: $GuiGraphics$Type, arg2: $Window$Type): void
/**
 * 
 * @deprecated
 */
public "renderElement"(arg0: integer, arg1: boolean, arg2: boolean, arg3: $GuiGraphics$Type, arg4: $MultiBufferSource$BufferSource$Type, arg5: $Font$Type, arg6: $RenderTarget$Type, arg7: $MinimapRendererHelper$Type, arg8: $Entity$Type, arg9: $Player$Type, arg10: double, arg11: double, arg12: double, arg13: integer, arg14: double, arg15: float, arg16: $Waypoint$Type, arg17: double, arg18: double, arg19: boolean, arg20: float): boolean
/**
 * 
 * @deprecated
 */
public "shouldRender"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
public "updateWaypointCollection"(arg0: $IXaeroMinimap$Type): void
/**
 * 
 * @deprecated
 */
public "drawIconOnGUI"(arg0: $GuiGraphics$Type, arg1: $MinimapRendererHelper$Type, arg2: $Waypoint$Type, arg3: $ModSettings$Type, arg4: integer, arg5: integer, arg6: $MultiBufferSource$BufferSource$Type, arg7: $VertexConsumer$Type): void
/**
 * 
 * @deprecated
 */
public "preRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
/**
 * 
 * @deprecated
 */
public "postRender"(arg0: integer, arg1: $Entity$Type, arg2: $Player$Type, arg3: double, arg4: double, arg5: double, arg6: $IXaeroMinimap$Type, arg7: $MultiBufferSource$BufferSource$Type, arg8: $MultiTextureRenderTypeRendererProvider$Type): void
get "order"(): integer
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
declare module "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer" {
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$Type} from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportFTBTeamsServer {

constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportFTBTeamsServer$Type = ($SupportFTBTeamsServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportFTBTeamsServer_ = $SupportFTBTeamsServer$Type;
}}
declare module "packages/xaero/common/events/$ClientEvents" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$ToggleKeyMapping, $ToggleKeyMapping$Type} from "packages/net/minecraft/client/$ToggleKeyMapping"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RealmsServer, $RealmsServer$Type} from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$ChatType$Bound, $ChatType$Bound$Type} from "packages/net/minecraft/network/chat/$ChatType$Bound"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ClientEvents {
 "latestRealm": $RealmsServer

constructor(arg0: $IXaeroMinimap$Type)

public "handler$bnb000$xaeroplus$onSystemChatReceived"(component: $Component$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handler$bnb000$xaeroplus$onPlayerChatReceived"(chatType: $ChatType$Bound$Type, component: $Component$Type, gameProfile: $GameProfile$Type, cir: $CallbackInfoReturnable$Type<(any)>): void
public "handleRenderGameOverlayEventPre"(arg0: $GuiGraphics$Type, arg1: float): void
public "handleRenderGameOverlayEventPost"(): void
public "handleClientPlayerChatReceivedEvent"(arg0: $ChatType$Bound$Type, arg1: $Component$Type, arg2: $GameProfile$Type): boolean
public "handleClientSystemChatReceivedEvent"(arg0: $Component$Type): boolean
public "handleRenderStatusEffectOverlay"(arg0: $GuiGraphics$Type): boolean
public "handleRenderCrosshairOverlay"(arg0: $GuiGraphics$Type): boolean
public "handleForceToggleKeyMapping"(arg0: $ToggleKeyMapping$Type): boolean
public "handleDrawScreenEventPost"(arg0: $Screen$Type): void
public "handlePlayerSetSpawnEvent"(arg0: $BlockPos$Type, arg1: $Level$Type): void
public "getLastGuiOpen"(): any
public "worldUnload"(arg0: $LevelAccessor$Type): void
public "handleClientTickStart"(): void
public "handleRenderTickStart"(): void
public "handlePlayerTickStart"(arg0: $Player$Type): void
public "handleGuiOpen"(arg0: $Screen$Type): $Screen
public "handleClientSendChatEvent"(arg0: string): boolean
get "lastGuiOpen"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientEvents$Type = ($ClientEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientEvents_ = $ClientEvents$Type;
}}
declare module "packages/xaero/common/interfaces/render/$InterfaceRenderer" {
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"

/**
 * 
 * @deprecated
 */
export class $InterfaceRenderer {

constructor(arg0: $IXaeroMinimap$Type)

public "getCustomVertexConsumers"(): $CustomVertexConsumers
get "customVertexConsumers"(): $CustomVertexConsumers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceRenderer$Type = ($InterfaceRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceRenderer_ = $InterfaceRenderer$Type;
}}
declare module "packages/xaero/common/minimap/$MinimapInterface" {
import {$InfoDisplayManager, $InfoDisplayManager$Type} from "packages/xaero/common/minimap/info/$InfoDisplayManager"
import {$MinimapSafeModeRenderer, $MinimapSafeModeRenderer$Type} from "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$MinimapFBORenderer, $MinimapFBORenderer$Type} from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import {$Minimap, $Minimap$Type} from "packages/xaero/hud/minimap/$Minimap"
import {$InfoDisplayRenderer, $InfoDisplayRenderer$Type} from "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer"
import {$CompassRenderer, $CompassRenderer$Type} from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import {$WaypointsIngameRenderer, $WaypointsIngameRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer"
import {$WaypointsGuiRenderer, $WaypointsGuiRenderer$Type} from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"

/**
 * 
 * @deprecated
 */
export class $MinimapInterface extends $Minimap {

constructor(arg0: $HudMod$Type)

/**
 * 
 * @deprecated
 */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer
/**
 * 
 * @deprecated
 */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
/**
 * 
 * @deprecated
 */
public "getMinimapFBORenderer"(): $MinimapFBORenderer
/**
 * 
 * @deprecated
 */
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
/**
 * 
 * @deprecated
 */
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
/**
 * 
 * @deprecated
 */
public "usingFBO"(): boolean
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "minimapFBORenderer"(): $MinimapFBORenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "compassRenderer"(): $CompassRenderer
get "infoDisplayRenderer"(): $InfoDisplayRenderer
get "infoDisplayManager"(): $InfoDisplayManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapInterface$Type = ($MinimapInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapInterface_ = $MinimapInterface$Type;
}}
declare module "packages/xaero/common/minimap/highlight/$HighlighterRegistry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractHighlighter, $AbstractHighlighter$Type} from "packages/xaero/common/minimap/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {

constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$Type = ($HighlighterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$Type;
}}
declare module "packages/xaero/common/minimap/$MinimapProcessor" {
import {$MinimapInterface, $MinimapInterface$Type} from "packages/xaero/common/minimap/$MinimapInterface"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$Type} from "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MinimapWriter, $MinimapWriter$Type} from "packages/xaero/common/minimap/write/$MinimapWriter"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$CustomVertexConsumers, $CustomVertexConsumers$Type} from "packages/xaero/common/graphics/$CustomVertexConsumers"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RadarSession, $RadarSession$Type} from "packages/xaero/hud/minimap/radar/$RadarSession"
import {$ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0, $ClientSyncedTrackedPlayerManager$Type as $ClientSyncedTrackedPlayerManager$0$Type} from "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import {$MinimapRadar, $MinimapRadar$Type} from "packages/xaero/common/minimap/radar/$MinimapRadar"

export class $MinimapProcessor {
static readonly "DEBUG": boolean
static readonly "FRAME": integer

constructor(arg0: $IXaeroMinimap$Type, arg1: $MinimapSession$Type, arg2: $MinimapWriter$Type, arg3: $RadarSession$Type, arg4: $ClientSyncedTrackedPlayerManager$Type)

public "cleanup"(): void
public "getSession"(): $MinimapSession
/**
 * 
 * @deprecated
 */
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
public "getNoMinimapMessageReceived"(): boolean
public "setEnlargedMap"(arg0: boolean): void
public "instantZoom"(): void
public "toggleManualCaveMode"(): void
public "setNoMinimapMessageReceived"(arg0: boolean): void
public "setFairPlayOnlyMessageReceived"(arg0: boolean): void
public "getSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "onPlayerTick"(): void
public "onClientTick"(): void
public "isManualCaveMode"(): boolean
public "isToResetImage"(): boolean
public "setToResetImage"(arg0: boolean): void
public "getMinimapZoom"(): double
public "getRadarSession"(): $RadarSession
public "getMinimapWriter"(): $MinimapWriter
public "isEnlargedMap"(): boolean
public "getMinimapSize"(): integer
public "getMinimapInterface"(): $MinimapInterface
public "getForcedFairPlay"(): boolean
public "setServerModNetworkVersion"(arg0: integer): void
public "canUseFrameBuffer"(): boolean
public "getLastMapDimensionScale"(): double
public "getLastMapDimension"(): $ResourceKey<($Level)>
public "getServerModNetworkVersion"(): integer
public "isCaveModeDisplayed"(): boolean
public static "hasMinimapItem"(arg0: $Player$Type): boolean
public "getTargetZoom"(): double
public "setLastMapDimensionScale"(arg0: double): void
public "getMinimapBufferSize"(arg0: integer): integer
public "getFBOBufferSize"(): integer
public "setLastMapDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
/**
 * 
 * @deprecated
 */
public "setLastPlayerDimDiv"(arg0: double): void
/**
 * 
 * @deprecated
 */
public "getLastPlayerDimDiv"(): double
public "serverHasMod"(): boolean
/**
 * 
 * @deprecated
 */
public "getEntityRadar"(): $MinimapRadar
public "onRender"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: double, arg6: integer, arg7: integer, arg8: float, arg9: $CustomVertexConsumers$Type): void
public "checkFBO"(): void
public "updateZoom"(): void
get "session"(): $MinimapSession
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
get "noMinimapMessageReceived"(): boolean
set "enlargedMap"(value: boolean)
set "noMinimapMessageReceived"(value: boolean)
set "fairPlayOnlyMessageReceived"(value: boolean)
get "syncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "manualCaveMode"(): boolean
get "toResetImage"(): boolean
set "toResetImage"(value: boolean)
get "minimapZoom"(): double
get "radarSession"(): $RadarSession
get "minimapWriter"(): $MinimapWriter
get "enlargedMap"(): boolean
get "minimapSize"(): integer
get "minimapInterface"(): $MinimapInterface
get "forcedFairPlay"(): boolean
set "serverModNetworkVersion"(value: integer)
get "lastMapDimensionScale"(): double
get "lastMapDimension"(): $ResourceKey<($Level)>
get "serverModNetworkVersion"(): integer
get "caveModeDisplayed"(): boolean
get "targetZoom"(): double
set "lastMapDimensionScale"(value: double)
get "fBOBufferSize"(): integer
set "lastMapDimension"(value: $ResourceKey$Type<($Level$Type)>)
set "lastPlayerDimDiv"(value: double)
get "lastPlayerDimDiv"(): double
get "entityRadar"(): $MinimapRadar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapProcessor$Type = ($MinimapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapProcessor_ = $MinimapProcessor$Type;
}}
declare module "packages/xaero/common/server/mods/$SupportServerMods" {
import {$SupportFTBTeamsServer, $SupportFTBTeamsServer$Type} from "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer"
import {$SupportOPACServer, $SupportOPACServer$Type} from "packages/xaero/common/server/mods/opac/$SupportOPACServer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$SupportWorldMapServer, $SupportWorldMapServer$Type} from "packages/xaero/common/server/mods/$SupportWorldMapServer"
import {$SupportArgonautsServer, $SupportArgonautsServer$Type} from "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer"

export class $SupportServerMods {

constructor()

public "check"(arg0: $IXaeroMinimap$Type): void
public "hasFtbTeams"(): boolean
public "getFtbTeams"(): $SupportFTBTeamsServer
public "hasArgonauts"(): boolean
public "getArgonauts"(): $SupportArgonautsServer
public "hasWorldmap"(): boolean
public "getWorldmap"(): $SupportWorldMapServer
public "hasOpac"(): boolean
public "getOpac"(): $SupportOPACServer
get "ftbTeams"(): $SupportFTBTeamsServer
get "argonauts"(): $SupportArgonautsServer
get "worldmap"(): $SupportWorldMapServer
get "opac"(): $SupportOPACServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportServerMods$Type = ($SupportServerMods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportServerMods_ = $SupportServerMods$Type;
}}
declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"
import {$InfoDisplayCompiler, $InfoDisplayCompiler$Type} from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

/**
 * 
 * @deprecated
 */
export interface $InfoDisplayOnCompile<T> {

/**
 * 
 * @deprecated
 */
 "onCompile"(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $XaeroMinimapSession$Type, arg3: $MinimapProcessor$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: double, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: $BlockPos$Type): void

(arg0: $InfoDisplay$Type<(T)>, arg1: $InfoDisplayCompiler$Type, arg2: $XaeroMinimapSession$Type, arg3: $MinimapProcessor$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: double, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: $BlockPos$Type): void
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
declare module "packages/xaero/common/events/$ModClientEvents" {
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ModClientEvents {

constructor(arg0: $IXaeroMinimap$Type)

public "handler$bpa000$xaeroplus$handleRenderModOverlayHead"(guiGraphics: $GuiGraphics$Type, partialTicks: float, ci: $CallbackInfo$Type): void
public "handler$bpa000$xaeroplus$handleRenderModOverlayReturn"(guiGraphics: $GuiGraphics$Type, partialTicks: float, ci: $CallbackInfo$Type): void
public "handleTextureStitchEventPost"(arg0: $TextureAtlas$Type): void
public "handleRenderModOverlay"(arg0: $GuiGraphics$Type, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModClientEvents$Type = ($ModClientEvents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModClientEvents_ = $ModClientEvents$Type;
}}
declare module "packages/xaero/common/minimap/region/$MinimapTile" {
import {$ModSettings, $ModSettings$Type} from "packages/xaero/common/settings/$ModSettings"
import {$List, $List$Type} from "packages/java/util/$List"

export class $MinimapTile {
static "recycled": $List<($MinimapTile)>
 "caveLevel": integer

constructor(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long)

public "getX"(): integer
public "getHeight"(arg0: integer, arg1: integer): integer
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "isSlimeChunk"(): boolean
public static "isSlimeChunk"(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long): boolean
public "isHasSomething"(): boolean
public "setWasTransfered"(arg0: boolean): void
public "setHasSomething"(arg0: boolean): void
public "getHighlightVersion"(): integer
public "getHighlights"(): (integer)[]
public static "getANewTile"(arg0: $ModSettings$Type, arg1: integer, arg2: integer, arg3: long): $MinimapTile
public "setHasTerrain"(arg0: boolean): void
public "setHighlights"(arg0: (integer)[]): void
public "setHighlightVersion"(arg0: integer): void
public "pixelChanged"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): boolean
public "isWasTransfered"(): boolean
public "getZ"(): integer
public "setCode"(arg0: integer, arg1: integer, arg2: long, arg3: byte, arg4: byte, arg5: byte, arg6: byte): void
public "isChunkGrid"(): boolean
public "setHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "getRed"(arg0: integer, arg1: integer, arg2: integer): integer
public "getGreen"(arg0: integer, arg1: integer, arg2: integer): integer
public "getBlue"(arg0: integer, arg1: integer, arg2: integer): integer
public "isSuccess"(): boolean
public "recycle"(): void
public "setSuccess"(arg0: boolean): void
public "hasTerrain"(): boolean
get "x"(): integer
get "slimeChunk"(): boolean
get "hasSomething"(): boolean
set "wasTransfered"(value: boolean)
set "hasSomething"(value: boolean)
get "highlightVersion"(): integer
get "highlights"(): (integer)[]
set "highlights"(value: (integer)[])
set "highlightVersion"(value: integer)
get "wasTransfered"(): boolean
get "z"(): integer
get "chunkGrid"(): boolean
get "success"(): boolean
set "success"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapTile$Type = ($MinimapTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapTile_ = $MinimapTile$Type;
}}
declare module "packages/xaero/common/config/$CommonConfigIO" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CommonConfig, $CommonConfig$Type} from "packages/xaero/common/config/$CommonConfig"

export class $CommonConfigIO {

constructor(arg0: $Path$Type)

public "load"(): $CommonConfig
public "save"(arg0: $CommonConfig$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonConfigIO$Type = ($CommonConfigIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonConfigIO_ = $CommonConfigIO$Type;
}}
declare module "packages/xaero/common/gui/$MyOptions" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiSettings, $GuiSettings$Type} from "packages/xaero/common/gui/$GuiSettings"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$OptionsScreen, $OptionsScreen$Type} from "packages/net/minecraft/client/gui/screens/$OptionsScreen"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"

export class $MyOptions extends $OptionsScreen {
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(arg0: string, arg1: $GuiSettings$Type, arg2: $Screen$Type, arg3: $Options$Type)

public "init"(): void
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MyOptions$Type = ($MyOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MyOptions_ = $MyOptions$Type;
}}
declare module "packages/xaero/common/graphics/$CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {

constructor()

public "getBetterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "betterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$Type = ($CustomVertexConsumers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$Type;
}}
declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler" {
import {$MinimapProcessor, $MinimapProcessor$Type} from "packages/xaero/common/minimap/$MinimapProcessor"
import {$InfoDisplayCompiler as $InfoDisplayCompiler$0, $InfoDisplayCompiler$Type as $InfoDisplayCompiler$0$Type} from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InfoDisplay, $InfoDisplay$Type} from "packages/xaero/common/minimap/info/$InfoDisplay"

/**
 * 
 * @deprecated
 */
export class $InfoDisplayCompiler extends $InfoDisplayCompiler$0 {

constructor()

/**
 * 
 * @deprecated
 */
public "compile"<T>(arg0: $InfoDisplay$Type<(T)>, arg1: $XaeroMinimapSession$Type, arg2: $MinimapProcessor$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: double, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: $BlockPos$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "addLine"(arg0: $Component$Type): void
/**
 * 
 * @deprecated
 */
public "addLine"(arg0: string): void
/**
 * 
 * @deprecated
 */
public "addWords"(arg0: integer, arg1: string): void
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
declare module "packages/xaero/common/minimap/write/$MinimapWriterHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapWriterHelper {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinimapWriterHelper$Type = ($MinimapWriterHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinimapWriterHelper_ = $MinimapWriterHelper$Type;
}}
declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer" {
import {$WaypointsSort, $WaypointsSort$Type} from "packages/xaero/common/minimap/waypoints/$WaypointsSort"
import {$MinimapSession, $MinimapSession$Type} from "packages/xaero/hud/minimap/module/$MinimapSession"
import {$HudMod, $HudMod$Type} from "packages/xaero/common/$HudMod"
import {$XaeroPath, $XaeroPath$Type} from "packages/xaero/hud/path/$XaeroPath"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$MinimapWorldRootContainer, $MinimapWorldRootContainer$Type} from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import {$IXaeroMinimap, $IXaeroMinimap$Type} from "packages/xaero/common/$IXaeroMinimap"
import {$XaeroMinimapSession, $XaeroMinimapSession$Type} from "packages/xaero/common/$XaeroMinimapSession"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$WaypointWorldConnectionManager, $WaypointWorldConnectionManager$Type} from "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager"

/**
 * 
 * @deprecated
 */
export class $WaypointWorldRootContainer extends $MinimapWorldRootContainer {

/**
 * 
 * @deprecated
 */
constructor(arg0: $IXaeroMinimap$Type, arg1: $XaeroMinimapSession$Type, arg2: string)
/**
 * 
 * @deprecated
 */
constructor(arg0: $HudMod$Type, arg1: $MinimapSession$Type, arg2: $XaeroPath$Type)

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
/**
 * 
 * @deprecated
 */
public "isIgnoreHeightmaps"(): boolean
/**
 * 
 * @deprecated
 */
public "getRootContainer"(): $WaypointWorldRootContainer
/**
 * 
 * @deprecated
 */
public "getDimensionType"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionType
/**
 * 
 * @deprecated
 */
public "loadConfig"(): void
/**
 * 
 * @deprecated
 */
public "getSubWorldConnections"(): $WaypointWorldConnectionManager
/**
 * 
 * @deprecated
 */
public "updateConnectionsField"(arg0: $XaeroMinimapSession$Type): void
/**
 * 
 * @deprecated
 */
public "getDimensionScale"(arg0: $ResourceKey$Type<($Level$Type)>): double
/**
 * 
 * @deprecated
 */
public "updateDimensionType"(arg0: $ClientLevel$Type): void
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
public "toggleSortType"(): void
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
public "setIgnoreHeightmaps"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "saveConfig"(): void
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
get "rootContainer"(): $WaypointWorldRootContainer
get "subWorldConnections"(): $WaypointWorldConnectionManager
get "usingMultiworldDetection"(): boolean
get "defaultMultiworldId"(): string
set "defaultMultiworldId"(value: string)
set "teleportationEnabled"(value: boolean)
get "ignoreServerLevelId"(): boolean
set "ignoreHeightmaps"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaypointWorldRootContainer$Type = ($WaypointWorldRootContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaypointWorldRootContainer_ = $WaypointWorldRootContainer$Type;
}}
declare module "packages/xaero/common/message/server/$ServerMessageConsumer" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export interface $ServerMessageConsumer<T extends $MinimapMessage<(T)>> {

 "handle"(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: T): void

(arg0: $MinecraftServer$Type, arg1: $ServerPlayer$Type, arg2: T): void
}

export namespace $ServerMessageConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerMessageConsumer$Type<T> = ($ServerMessageConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerMessageConsumer_<T> = $ServerMessageConsumer$Type<(T)>;
}}
declare module "packages/xaero/common/message/client/$ClientMessageConsumer" {
import {$MinimapMessage, $MinimapMessage$Type} from "packages/xaero/common/message/$MinimapMessage"

export interface $ClientMessageConsumer<T extends $MinimapMessage<(T)>> {

 "handle"(arg0: T): void

(arg0: T): void
}

export namespace $ClientMessageConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMessageConsumer$Type<T> = ($ClientMessageConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientMessageConsumer_<T> = $ClientMessageConsumer$Type<(T)>;
}}
declare module "packages/xaero/common/gui/widget/loader/$WidgetLoader" {
import {$Widget, $Widget$Type} from "packages/xaero/common/gui/widget/$Widget"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WidgetLoader {

constructor()

public "load"(arg0: $Map$Type<(string), (string)>): $Widget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLoader$Type = ($WidgetLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLoader_ = $WidgetLoader$Type;
}}
declare module "packages/xaero/common/mods/$SupportIris" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportIris {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportIris$Type = ($SupportIris);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportIris_ = $SupportIris$Type;
}}
declare module "packages/xaero/common/gui/widget/$WidgetType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$WidgetInitializer, $WidgetInitializer$Type} from "packages/xaero/common/gui/widget/init/$WidgetInitializer"
import {$WidgetLoader, $WidgetLoader$Type} from "packages/xaero/common/gui/widget/loader/$WidgetLoader"
import {$WidgetRenderer, $WidgetRenderer$Type} from "packages/xaero/common/gui/widget/render/$WidgetRenderer"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "IMAGE": $WidgetType
static readonly "BUTTON": $WidgetType
static readonly "TEXT": $WidgetType
readonly "widgetLoader": $WidgetLoader
readonly "widgetRenderer": $WidgetRenderer<(any)>
readonly "widgetInit": $WidgetInitializer


public static "values"(): ($WidgetType)[]
public static "valueOf"(arg0: string): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$Type = (("button") | ("image") | ("text")) | ($WidgetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetType_ = $WidgetType$Type;
}}

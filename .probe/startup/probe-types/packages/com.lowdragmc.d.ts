declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ConfiguratorGroup extends $Configurator {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor(name: string, isCollapse: boolean)

public "init"(width: integer): void
public "setCanCollapse"(canCollapse: boolean): void
public "setCollapse"(collapse: boolean): void
public "getConfigurators"(): $List<($Configurator)>
public "removeAllConfigurators"(): void
public "removeConfigurator"(configurator: $Configurator$Type): void
public "addConfigurator"(index: integer, configurator: $Configurator$Type): void
public "addConfigurators"(...configurators: ($Configurator$Type)[]): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "computeHeight"(): void
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
public "isCollapse"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "canCollapse"(value: boolean)
set "collapse"(value: boolean)
get "configurators"(): $List<($Configurator)>
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "collapse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguratorGroup$Type = ($ConfiguratorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguratorGroup_ = $ConfiguratorGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $ItemStackTransfer implements $IItemTransfer, $ITagSerializable<($CompoundTag)>, $IContentChangeAware {

constructor()
constructor(stack: $ItemStack$Type)
constructor(stacks: $NonNullList$Type<($ItemStack$Type)>)
constructor(size: integer)

public "setSize"(size: integer): void
public "copy"(): $ItemStackTransfer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "getStackInSlot"(slot: integer): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean, notifyChanges: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "createSnapshot"(): any
public "restoreFromSnapshot"(snapshot: any): void
public "onContentsChanged"(slot: integer): void
public "onContentsChanged"(): void
public "setFilter"(filter: $Function$Type<($ItemStack$Type), (boolean)>): void
public "getSlots"(): integer
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean, notifyChanges: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
set "size"(value: integer)
set "filter"(value: $Function$Type<($ItemStack$Type), (boolean)>)
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTransfer$Type = ($ItemStackTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTransfer_ = $ItemStackTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$StyledText" {
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"

export class $StyledText {

constructor(text: string, style: $Style$Type)

public "getText"(): string
public "getStyle"(): $Style
get "text"(): string
get "style"(): $Style
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyledText$Type = ($StyledText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyledText_ = $StyledText$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IGuiTexture extends $IConfigurable {

 "setColor"(color: integer): $IGuiTexture
 "rotate"(degree: float): $IGuiTexture
 "scale"(scale: float): $IGuiTexture
 "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
 "copy"(): $IGuiTexture
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "updateTick"(): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component

(color: integer): $IGuiTexture
}

export namespace $IGuiTexture {
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IGuiTexture)>)>
function serializeWrapper(texture: $IGuiTexture$Type): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiTexture$Type = ($IGuiTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiTexture_ = $IGuiTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"

export interface $IFluidStorage extends $IFluidTransfer {

 "getCapacity"(): long
 "getFluidAmount"(): long
 "getTankCapacity"(tank: integer): long
 "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
 "getFluidInTank"(tank: integer): $FluidStack
 "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "getFluid"(): $FluidStack
 "getTanks"(): integer
 "setFluid"(arg0: $FluidStack$Type): void
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "createSnapshot"(): any
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
}

export namespace $IFluidStorage {
const EMPTY: $IFluidStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStorage$Type = ($IFluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidStorage_ = $IFluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export interface $IConfigurable extends $ILDLRegister {

 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$CodeEditor" {
import {$Selection, $Selection$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Selection"
import {$Document, $Document$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Document"
import {$SyntaxParser, $SyntaxParser$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$SyntaxParser"
import {$StyleManager, $StyleManager$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$StyleManager"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StyledLine, $StyledLine$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$StyledLine"
import {$ILanguageDefinition, $ILanguageDefinition$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$ILanguageDefinition"
import {$Cursor, $Cursor$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Cursor"
import {$FoldingManager, $FoldingManager$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$FoldingManager"

export class $CodeEditor {

constructor()

public "getDocument"(): $Document
/**
 * Sets the formatter to use the provided languageDef.
 * Use with any of `EditorLanguages.`, or with `new EditorLanguageDefinition(...)`.
 */
public "setLanguageDefinition"(languageDefinition: $ILanguageDefinition$Type): void
public "clearSelection"(): void
public "getSelection"(): $Selection
public "getVisibleStyledLines"(): $List<($StyledLine)>
public "startSelection"(): void
public "isSelecting"(): boolean
public "updateSelection"(): void
public "endSelection"(): void
public "copySelection"(): string
public "deleteSelection"(): void
public "deleteForwardText"(): void
public "moveCursorRight"(): void
public "moveCursorLeft"(): void
public "moveCursorDown"(): void
public "moveCursorUp"(): void
public "getIndentString"(): string
public "moveCursorStart"(): void
public "moveCursorEnd"(): void
public "isSelectionValid"(): boolean
public "enter"(): void
public "getLines"(): $List<(string)>
public "getCursor"(): $Cursor
/**
 * Sets the formatter to unformatted text
 */
public "setLanguageDefinitionUnformatted"(): void
public "setCursorLine"(line: integer): void
public "setCursorColumn"(column: integer): void
public "cutSelection"(): string
public "replaceSelection"(text: string): void
public "getSyntaxParser"(): $SyntaxParser
public "getStyleManager"(): $StyleManager
public "getFoldingManager"(): $FoldingManager
public "getStyledLines"(): $List<($StyledLine)>
public "getVisibleLinesCache"(): $List<($StyledLine)>
public "setIndentString"(indentString: string): void
public "setCursor"(cursor: $Cursor$Type): void
public "setCursor"(line: integer, column: integer): void
public "insertText"(text: string): void
public "selectAll"(): void
public "backspace"(): void
public "setLines"(lines: $List$Type<(string)>): void
public "deleteText"(): void
public "pasteText"(text: string): void
get "document"(): $Document
set "languageDefinition"(value: $ILanguageDefinition$Type)
get "selection"(): $Selection
get "visibleStyledLines"(): $List<($StyledLine)>
get "selecting"(): boolean
get "indentString"(): string
get "selectionValid"(): boolean
get "lines"(): $List<(string)>
get "cursor"(): $Cursor
set "cursorLine"(value: integer)
set "cursorColumn"(value: integer)
get "syntaxParser"(): $SyntaxParser
get "styleManager"(): $StyleManager
get "foldingManager"(): $FoldingManager
get "styledLines"(): $List<($StyledLine)>
get "visibleLinesCache"(): $List<($StyledLine)>
set "indentString"(value: string)
set "cursor"(value: $Cursor$Type)
set "lines"(value: $List$Type<(string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeEditor$Type = ($CodeEditor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodeEditor_ = $CodeEditor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorRectTexture extends $TransformTexture {
 "color": integer
 "radiusLT": float
 "radiusLB": float
 "radiusRT": float
 "radiusRB": float

constructor()
constructor(color: $Color$Type)
constructor(color: integer)

public "setLeftRadius"(radius: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "bottomRadius"(value: float)
set "radiusLT"(value: float)
set "radiusLB"(value: float)
set "radiusRT"(value: float)
set "radiusRB"(value: float)
set "radius"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorRectTexture$Type = ($ColorRectTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorRectTexture_ = $ColorRectTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Editor$HistoryItem extends $Record {

constructor(name: string, date: $CompoundTag$Type, source: any)

public "date"(): $CompoundTag
public "name"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "source"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$HistoryItem$Type = ($Editor$HistoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor$HistoryItem_ = $Editor$HistoryItem$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/forge/$FluidTransferHelperImpl" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidTransferHelper, $FluidTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelperImpl extends $FluidTransferHelper {

constructor()

public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "toFluidHandler"(fluidTransfer: $IFluidTransfer$Type): $IFluidHandler
public static "toFluidTransfer"(handler: $IFluidHandler$Type): $IFluidTransfer
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelperImpl$Type = ($FluidTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelperImpl_ = $FluidTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPosFace {
readonly "facing": $Direction
readonly "pos": $BlockPos

constructor(pos: $BlockPos$Type, facing: $Direction$Type)

public "equals"(bp: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFace$Type = ($BlockPosFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFace_ = $BlockPosFace$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SelectableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$ISelected {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOverlayUnderWidgets"(overlayUnderWidgets: boolean): void
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $SelectableWidgetGroup
public "setOnSelected"(onSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "onUnSelected"(): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "isOverlayUnderWidgets"(): boolean
public "isSelected"(): boolean
public "onSelected"(): void
public "getPrefab"<T>(): T
public "setPrefab"(prefab: any): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "overlayUnderWidgets"(value: boolean)
set "selectedTexture"(value: $IGuiTexture$Type)
get "overlayUnderWidgets"(): boolean
get "selected"(): boolean
get "prefab"(): T
set "prefab"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableWidgetGroup$Type = ($SelectableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableWidgetGroup_ = $SelectableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ISlotWidgetKJS, $ISlotWidgetKJS$Type} from "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SlotWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget, $ISlotWidgetKJS {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor()
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)

public "setSize"(size: $Size$Type): void
public "getItem"(): $ItemStack
public "isEnabled"(): boolean
public "getHandler"(): $Slot
public "getIngredientIO"(): $IngredientIO
public "initTemplate"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getTooltipTexts"(): $List<($Component)>
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $SlotWidget
public "setChangeListener"(changeListener: $Runnable$Type): $SlotWidget
public "setXEIChance"(XEIChance: float): $SlotWidget
public "setItemHook"(itemHook: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>): $SlotWidget
public "onSlotChanged"(): void
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>): $SlotWidget
public "getLastItem"(): $ItemStack
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "getXEIIngredients"(): $List<(any)>
public "getXEIChance"(): float
public "canPutStack"(stack: $ItemStack$Type): boolean
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "canTakeStack"(player: $Player$Type): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "getXEICurrentIngredient"(): any
public "setHandlerSlot"(itemHandler: $IItemTransfer$Type, slotIndex: integer): $SlotWidget
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $SlotWidget
public "setContainerSlot"(inventory: $Container$Type, slotIndex: integer): $SlotWidget
public "getFullTooltipTexts"(): $List<($Component)>
public "getRealStack"(itemStack: $ItemStack$Type): $ItemStack
public "detectAndSendChanges"(): void
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setItem"(stack: $ItemStack$Type): void
public "setItem"(stack: $ItemStack$Type, notify: boolean): void
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setGui"(gui: $ModularUI$Type): void
public "self"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "kjs$self"(): $SlotWidget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "size"(value: $Size$Type)
get "item"(): $ItemStack
get "enabled"(): boolean
get "handler"(): $Slot
get "ingredientIO"(): $IngredientIO
get "tooltipTexts"(): $List<($Component)>
set "drawHoverTips"(value: boolean)
set "ingredientIO"(value: $IngredientIO$Type)
set "changeListener"(value: $Runnable$Type)
set "xEIChance"(value: float)
set "itemHook"(value: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>)
set "canTakeItems"(value: boolean)
set "canPutItems"(value: boolean)
set "drawHoverOverlay"(value: boolean)
set "onAddedTooltips"(value: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>)
get "lastItem"(): $ItemStack
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
get "xEICurrentIngredient"(): any
set "backgroundTexture"(value: $IGuiTexture$Type)
get "fullTooltipTexts"(): $List<($Component)>
set "item"(value: $ItemStack$Type)
set "gui"(value: $ModularUI$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotWidget$Type = ($SlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotWidget_ = $SlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"

export interface $ILDLRegister {

 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $ILDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILDLRegister$Type = ($ILDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILDLRegister_ = $ILDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Target extends $Consumer<(any)> {

 "accept"(arg0: any): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(any)>
}

export namespace $Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Target$Type = ($Target);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Target_ = $Target$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Document" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $Document {

constructor()

public "getLines"(): $List<(string)>
public "getLine"(line: integer): string
public "getLineCount"(): integer
public "setLine"(index: integer, text: string): void
public "insertText"(line: integer, column: integer, text: string): void
public "deleteText"(line: integer, column: integer, length: integer): void
public "insertLine"(index: integer, text: string): void
public "deleteLine"(index: integer): void
get "lines"(): $List<(string)>
get "lineCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Document$Type = ($Document);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Document_ = $Document$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"

export interface $IGhostIngredientTarget {

 "getPhantomTargets"(arg0: any): $List<($Target)>

(arg0: any): $List<($Target)>
}

export namespace $IGhostIngredientTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientTarget$Type = ($IGhostIngredientTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientTarget_ = $IGhostIngredientTarget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerScreenAccessor {

 "getDraggingItem"(): $ItemStack
 "getQuickCraftingRemainder"(): integer
 "isSplittingStack"(): boolean
 "getSnapbackItem"(): $ItemStack
 "setSnapbackItem"(arg0: $ItemStack$Type): void
 "getSnapbackStartX"(): integer
 "getSnapbackStartY"(): integer
 "getSnapbackEnd"(): $Slot
 "getSnapbackTime"(): long
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UniformCache, $UniformCache$Type} from "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache"

export class $ShaderTexture extends $TransformTexture {
 "location": $ResourceLocation

constructor()

public static "clearCache"(): void
public "dispose"(): void
public "bindTexture"(samplerName: string, id: integer): void
public "bindTexture"(samplerName: string, location: $ResourceLocation$Type): void
public "updateShader"(location: $ResourceLocation$Type): void
public "updateRawShader"(rawShader: string): void
public "getRawShader"(): string
public static "createShader"(location: $ResourceLocation$Type): $ShaderTexture
public static "createRawShader"(rawShader: string): $ShaderTexture
public "setUniformCache"(uniformCache: $Consumer$Type<($UniformCache$Type)>): $ShaderTexture
public "setResolution"(resolution: float): $ShaderTexture
public "getResolution"(): float
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "rawShader"(): string
set "uniformCache"(value: $Consumer$Type<($UniformCache$Type)>)
set "resolution"(value: float)
get "resolution"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderTexture$Type = ($ShaderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderTexture_ = $ShaderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Size" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"

export class $Size {
static readonly "ZERO": $Size
readonly "width": integer
readonly "height": integer

constructor(width: integer, height: integer)

public "subtract"(other: $Size$Type): $Size
public "getWidth"(): integer
public "getHeight"(): integer
public static "add"(position: $Position$Type): $Size
public "add"(other: $Size$Type): $Size
public "add"(width: integer, height: integer): $Size
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public "addWidth"(width: integer): $Size
public "addHeight"(height: integer): $Size
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$Type = ($Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Size_ = $Size$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture$NineSliceMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ResourceBorderTexture$NineSliceMode extends $Enum<($ResourceBorderTexture$NineSliceMode)> {
static readonly "FIT": $ResourceBorderTexture$NineSliceMode
static readonly "STRETCH": $ResourceBorderTexture$NineSliceMode
static readonly "TILE": $ResourceBorderTexture$NineSliceMode


public static "values"(): ($ResourceBorderTexture$NineSliceMode)[]
public static "valueOf"(name: string): $ResourceBorderTexture$NineSliceMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBorderTexture$NineSliceMode$Type = (("fit") | ("stretch") | ("tile")) | ($ResourceBorderTexture$NineSliceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBorderTexture$NineSliceMode_ = $ResourceBorderTexture$NineSliceMode$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockUIJSFactory$BlockAccess, $BlockUIJSFactory$BlockAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockUIJSFactory extends $UIFactory<($BlockUIJSFactory$BlockAccess)> {
static readonly "INSTANCE": $BlockUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


/**
 * Opens a UI for a player at a specific block position.
 */
public "openUI"(player: $Player$Type, pos: $BlockPos$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$Type = ($BlockUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory_ = $BlockUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IngredientIO extends $Enum<($IngredientIO)> {
static readonly "INPUT": $IngredientIO
static readonly "OUTPUT": $IngredientIO
static readonly "BOTH": $IngredientIO
static readonly "CATALYST": $IngredientIO
static readonly "RENDER_ONLY": $IngredientIO


public static "values"(): ($IngredientIO)[]
public static "valueOf"(name: string): $IngredientIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientIO$Type = (("output") | ("input") | ("catalyst") | ("render_only") | ("both")) | ($IngredientIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientIO_ = $IngredientIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"

/**
 * 
 * @deprecated
 */
export class $PhantomFluidWidget extends $TankWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor()
constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>, phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>)

public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setAllowClickDrained"(v: boolean): $PhantomFluidWidget
public "setAllowClickFilled"(v: boolean): $PhantomFluidWidget
public static "checkJEIIngredient"(ingredient: any): any
public "setPhantomFluidGetter"(phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>): void
public "setPhantomFluidSetter"(phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>): void
public "getLastPhantomStack"(): $FluidStack
public static "drainFrom"(ingredient: any): $FluidStack
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
set "phantomFluidGetter"(value: $Supplier$Type<($FluidStack$Type)>)
set "phantomFluidSetter"(value: $Consumer$Type<($FluidStack$Type)>)
get "lastPhantomStack"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomFluidWidget$Type = ($PhantomFluidWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomFluidWidget_ = $PhantomFluidWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceContainer<T, C extends $Widget> extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(resource: $Resource$Type<(T)>, panel: $ResourcePanel$Type)

public "getResource"(): $Resource<(T)>
public "getSelected"(): $Either<(string), ($File)>
public "setOnRemove"(onRemove: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "updateScreen"(): void
public "getWidgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
public "setCanRemove"(canRemove: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setCanGlobalChange"(canGlobalChange: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setOnGlobalChange"(onGlobalChange: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setNameSupplier"(nameSupplier: $Supplier$Type<(string)>): $ResourceContainer<(T), (C)>
public "setRenamePredicate"(renamePredicate: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "setWidgetSupplier"(widgetSupplier: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $TriFunction$Type<($Either$Type<(string), ($File$Type)>), (D), ($Position$Type), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<($Either$Type<(string), ($File$Type)>), (D)>, draggingRenderer: $Function$Type<(D), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "getWidgets"(): $Map<($Either<(string), ($File)>), (C)>
public "initWidget"(): void
public "setOnAdd"(onAdd: $Function$Type<(string), (T)>): $ResourceContainer<(T), (C)>
public "getPanel"(): $ResourcePanel
public "setOnEdit"(onEdit: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "reBuild"(): void
public "setCanEdit"(canEdit: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>): $ResourceContainer<(T), (C)>
public "setOnMenu"(onMenu: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>): $ResourceContainer<(T), (C)>
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resource"(): $Resource<(T)>
get "selected"(): $Either<(string), ($File)>
set "onRemove"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
get "widgetSupplier"(): $Function<($Either<(string), ($File)>), (C)>
set "canRemove"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "canGlobalChange"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "onGlobalChange"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "nameSupplier"(value: $Supplier$Type<(string)>)
set "renamePredicate"(value: $Predicate$Type<(string)>)
set "widgetSupplier"(value: $Function$Type<($Either$Type<(string), ($File$Type)>), (C)>)
get "widgets"(): $Map<($Either<(string), ($File)>), (C)>
set "onAdd"(value: $Function$Type<(string), (T)>)
get "panel"(): $ResourcePanel
set "onEdit"(value: $Consumer$Type<($Either$Type<(string), ($File$Type)>)>)
set "canEdit"(value: $Predicate$Type<($Either$Type<(string), ($File$Type)>)>)
set "onMenu"(value: $BiConsumer$Type<($Either$Type<(string), ($File$Type)>), ($TreeBuilder$Menu$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceContainer$Type<T, C> = ($ResourceContainer<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceContainer_<T, C> = $ResourceContainer$Type<(T), (C)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SPacketUIWidgetUpdate, $SPacketUIWidgetUpdate$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ScreenExtensions, $ScreenExtensions$Type} from "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $ModularUIGuiContainer extends $AbstractContainerScreen<($ModularUIContainer)> {
readonly "modularUI": $ModularUI
 "lastFocus": $Widget
 "focused": boolean
 "dragSplittingLimit": integer
 "dragSplittingButton": integer
 "tooltipTexts": $List<($Component)>
 "tooltipComponent": $TooltipComponent
 "tooltipFont": $Font
 "tooltipStack": $ItemStack
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "titleLabelX": integer
 "titleLabelY": integer
 "inventoryLabelX": integer
 "inventoryLabelY": integer
readonly "menu": T
readonly "playerInventoryTitle": $Component
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
readonly "quickCraftSlots": $Set<($Slot)>
 "isQuickCrafting": boolean
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
 "doubleclick": boolean
 "lastQuickMoved": $ItemStack
 "slotColor": integer
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
readonly "screenExecutor": $Executor

constructor(modularUI: $ModularUI$Type, windowId: integer)

public "isButtonPressed"(button: integer): boolean
public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$Type): void
public "setHoverTooltip"(tooltipTexts: $List$Type<($Component$Type)>, tooltipStack: $ItemStack$Type, tooltipFont: $Font$Type, tooltipComponent: $TooltipComponent$Type): void
public "setDraggingElement"(element: any, renderer: $IGuiTexture$Type): boolean
public "getDraggingElement"(): any
public "setHoveredSlot"(hoveredSlot: $Slot$Type): void
public "renderFloatingItem"(graphics: $GuiGraphics$Type, stack: $ItemStack$Type, x: integer, y: integer, amountText: string): void
public "switchFocus"(widget: $Widget$Type): boolean
public "getQuickCraftSlots"(): $Set<($Slot)>
public "getQuickCrafting"(): boolean
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "getGuiExtraAreas"(): $List<($Rect2i)>
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "removed"(): void
public "mouseClicked"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, pButton: integer, pDragX: double, pDragY: double): boolean
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): void
public "init"(): void
public "containerTick"(): void
public static "getExtensions"(screen: $Screen$Type): $ScreenExtensions
get "draggingElement"(): any
set "hoveredSlot"(value: $Slot$Type)
get "quickCraftSlots"(): $Set<($Slot)>
get "quickCrafting"(): boolean
get "guiExtraAreas"(): $List<($Rect2i)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIGuiContainer$Type = ($ModularUIGuiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIGuiContainer_ = $ModularUIGuiContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidActionResult {
static readonly "FAILURE": $FluidActionResult
readonly "success": boolean
readonly "result": $ItemStack

constructor(result: $ItemStack$Type)

public "getResult"(): $ItemStack
public "isSuccess"(): boolean
get "result"(): $ItemStack
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidActionResult$Type = ($FluidActionResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidActionResult_ = $FluidActionResult$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ModularUIGuiContainer, $ModularUIGuiContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer"

export class $ModularUI {
readonly "mainGroup": $WidgetGroup
readonly "holder": $IUIHolder
readonly "entityPlayer": $Player

constructor(size: $Size$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(width: integer, height: integer, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(mainGroup: $WidgetGroup$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(holder: $IUIHolder$Type, entityPlayer: $Player$Type)

public "setSize"(width: integer, height: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsById"(regex: string): $List<($Widget)>
public "registerCloseListener"(runnable: $Runnable$Type): void
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getModularUIGui"(): $ModularUIGuiContainer
public "getTickCount"(): long
public "setModularUIContainer"(container: $ModularUIContainer$Type): void
public "removeNativeSlot"(slotHandle: $Slot$Type): void
public "addNativeSlot"(slotHandle: $Slot$Type, slotWidget: $SlotWidget$Type): void
public "getModularUIContainer"(): $ModularUIContainer
public "triggerCloseListeners"(): void
public "initWidgets"(): void
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$Type): void
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "background"(...textures: ($IGuiTexture$Type)[]): $ModularUI
public "getFlatVisibleWidgetCollection"(): $List<($Widget)>
public "setFullScreen"(): void
public "getFlatWidgetCollection"(): $List<($Widget)>
public "toScreenCoords"(widgetRect: $Rectangle$Type): $Rectangle
public "isFullScreen"(): boolean
public "widget"(widget: $Widget$Type): $ModularUI
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getSlotMap"(): $HashMap<($Slot), ($SlotWidget)>
get "width"(): integer
get "height"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "modularUIGui"(): $ModularUIGuiContainer
get "tickCount"(): long
set "modularUIContainer"(value: $ModularUIContainer$Type)
get "modularUIContainer"(): $ModularUIContainer
set "modularUIGui"(value: $ModularUIGuiContainer$Type)
get "flatVisibleWidgetCollection"(): $List<($Widget)>
get "flatWidgetCollection"(): $List<($Widget)>
get "fullScreen"(): boolean
get "guiLeft"(): integer
get "guiTop"(): integer
get "slotMap"(): $HashMap<($Slot), ($SlotWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUI$Type = ($ModularUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUI_ = $ModularUI$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$StyledLine" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StyledText, $StyledText$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$StyledText"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"

export class $StyledLine extends $Record {

constructor(line: integer, text: $List$Type<($StyledText$Type)>)

public "text"(): $List<($StyledText)>
public "getWidth"(font: $Font$Type, style: $Style$Type): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "line"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyledLine$Type = ($StyledLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyledLine_ = $StyledLine$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Rect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $Rect {
readonly "left": integer
readonly "right": integer
readonly "up": integer
readonly "down": integer


public "getWidth"(): integer
public "getHeight"(): integer
public static "of"(position: $Position$Type, size: $Size$Type): $Rect
public "expand"(x: integer, y: integer): $Rect
public "expand"(expand: integer): $Rect
public "getHeightCenter"(): integer
public "getWidthCenter"(): integer
public "toLeftCenter"(): $Position
public "toDownCenter"(): $Position
public "toRightDown"(): $Position
public "toRightCenter"(): $Position
public "horizontalExpand"(x: integer): $Rect
public "horizontalExpand"(left: integer, right: integer): $Rect
public "verticalExpand"(y: integer): $Rect
public "verticalExpand"(up: integer, down: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "withLeftFixedWidth"(width: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
public "withUpFixedHeight"(height: integer): $Rect
public "withDownFixedHeight"(height: integer): $Rect
public "moveHorizontal"(delta: integer): $Rect
public "moveVertical"(delta: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "expandDown"(expand: integer): $Rect
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public "toLeftUp"(): $Position
public "toLeftDown"(): $Position
public "toRightUp"(): $Position
public "toUpCenter"(): $Position
public "upAnd"(x: integer): $Position
public "rightAnd"(y: integer): $Position
public "downAnd"(x: integer): $Position
public "leftAnd"(y: integer): $Position
public "expandLeft"(expand: integer): $Rect
public "expandUp"(expand: integer): $Rect
public "withLeft"(left: integer): $Rect
public "withRight"(right: integer): $Rect
public "withUp"(up: integer): $Rect
public "withDown"(down: integer): $Rect
public "isCollide"(rect: $Rect$Type): boolean
get "width"(): integer
get "height"(): integer
get "heightCenter"(): integer
get "widthCenter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect$Type = ($Rect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect_ = $Rect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IContentChangeAware {

 "getOnContentsChanged"(): $Runnable
 "setOnContentsChanged"(arg0: $Runnable$Type): void
}

export namespace $IContentChangeAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentChangeAware$Type = ($IContentChangeAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentChangeAware_ = $IContentChangeAware$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$StaticResource, $StaticResource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Resource<T> {

constructor()
constructor(staticLocation: $File$Type)

public "name"(): string
public "toString"(): string
public "getResource"(key: $Either$Type<(string), ($File$Type)>): T
public "merge"(resource: $Resource$Type<(T)>): void
public "getResourceName"(key: $Either$Type<(string), ($File$Type)>): string
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "allResources"(): $Stream<($Map$Entry<($Either<(string), ($File)>), (T)>)>
public "hasResource"(key: $Either$Type<(string), ($File$Type)>): boolean
public "buildDefault"(): void
public "getStaticResource"(): $StaticResource<(T)>
public "getStaticResource"(file: $File$Type): T
public "supportStaticResource"(): boolean
public "removeBuiltinResource"(key: string): T
public "removeStaticResource"(file: $File$Type): T
public "removeResource"(key: $Either$Type<(string), ($File$Type)>): T
public "hasBuiltinResource"(key: string): boolean
public "hasStaticResource"(file: $File$Type): boolean
public "addBuiltinResource"(key: string, resource: T): void
public "supportBuiltInResource"(): boolean
public "addStaticResource"(file: $File$Type, resource: T): void
public "getBuiltinResource"(key: string): T
public "getStaticResourceOrDefault"(file: $File$Type, defaultValue: T): T
public "getResourceOrDefault"(key: $Either$Type<(string), ($File$Type)>, defaultValue: T): T
public "createContainer"(arg0: $ResourcePanel$Type): $ResourceContainer<(T), (any)>
public "getStaticResourceName"(file: $File$Type): string
public "getStaticResourceSuffix"(): string
public "getStaticResourceFile"(name: string): $File
public "getBuiltinResources"(): $Map<(string), (T)>
public "getStaticLocation"(): $File
public "serialize"(arg0: T): $Tag
public "onLoad"(): void
public "deserialize"(arg0: $Tag$Type): T
public "addResource"(key: $Either$Type<(string), ($File$Type)>, resource: T): void
public "loadAndUpdateStaticResource"(): boolean
public "getBuiltinResourceOrDefault"(key: string, defaultValue: T): T
public "unLoad"(): void
get "staticResource"(): $StaticResource<(T)>
get "staticResourceSuffix"(): string
get "builtinResources"(): $Map<(string), (T)>
get "staticLocation"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type<T> = ($Resource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_<T> = $Resource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidget extends $IConfigurable {

 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "handleDragging"(dragging: any): boolean
 "widget"(): $Widget
 "canDragIn"(dragging: any): boolean
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $IConfigurableWidget {
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IConfigurableWidget)>)>
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidget$Type = ($IConfigurableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidget_ = $IConfigurableWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $ITagSerializable<T extends $Tag> {

 "serializeNBT"(): T
 "deserializeNBT"(arg0: T): void
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$Type<T> = ($ITagSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagSerializable_<T> = $ITagSerializable$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"

export class $MenuTab implements $ILDLRegister {


public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$Type<($MenuTab$Type), ($TreeBuilder$Menu$Type)>): void
public "createTabWidget"(): $Widget
public "appendMenu"(menu: $TreeBuilder$Menu$Type): $TreeBuilder$Menu
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuTab$Type = ($MenuTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuTab_ = $MenuTab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$DraggableScrollableWidgetGroup$IDraggable, $DraggableScrollableWidgetGroup$IDraggable$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DraggableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$IDraggable {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $DraggableWidgetGroup
public "setOnSelected"(onSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "onUnSelected"(): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnStartDrag"(onStartDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnDragging"(onDragging: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "isSelected"(): boolean
public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "onSelected"(): void
public "startDrag"(mouseX: double, mouseY: double): void
public "endDrag"(mouseX: double, mouseY: double): void
public "canDragOutRange"(): boolean
public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "selectedTexture"(value: $IGuiTexture$Type)
set "onStartDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onDragging"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onEndDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
get "selected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableWidgetGroup$Type = ($DraggableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableWidgetGroup_ = $DraggableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IRenderer {

 "registerEvent"(): void
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "reBakeCustomQuadsOffset"(): float
 "reBakeCustomQuads"(): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "getViewDistance"(): integer
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "isRaw"(): boolean
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "useAO"(): boolean
 "useAO"(state: $BlockState$Type): boolean
 "isGui3d"(): boolean
}

export namespace $IRenderer {
const EVENT_REGISTERS: $Set<($IRenderer)>
const EMPTY: $IRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderer$Type = ($IRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderer_ = $IRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerMenuAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuAccessor {

 "getLastSlots"(): $NonNullList<($ItemStack)>
 "getRemoteSlots"(): $NonNullList<($ItemStack)>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TreeListWidget<K, T> extends $Widget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, root: $TreeNode$Type<(K), (T)>, onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)

public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $TreeListWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setBackground"(background: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setContentIconSupplier"(contentIconSupplier: $Function$Type<(T), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<(K), (T)>
public "setOnDoubleClickLeaf"(onDoubleClickLeaf: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setOnSelected"(onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentNameSupplier"(contentNameSupplier: $Function$Type<(T), (string)>): $TreeListWidget<(K), (T)>
public "setLineHeight"(lineHeight: integer): $TreeListWidget<(K), (T)>
public "jumpTo"(path: $List$Type<(K)>): $TreeNode<(K), (T)>
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "leafTexture"(value: $IGuiTexture$Type)
set "nodeTexture"(value: $IGuiTexture$Type)
set "background"(value: $IGuiTexture$Type)
set "contentIconSupplier"(value: $Function$Type<(T), ($IGuiTexture$Type)>)
set "onDoubleClickLeaf"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "onSelected"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentNameSupplier"(value: $Function$Type<(T), (string)>)
set "lineHeight"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeListWidget$Type<K, T> = ($TreeListWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeListWidget_<K, T> = $TreeListWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"

export interface $IPersistedSerializable extends $ITagSerializable<($CompoundTag)> {

 "deserializeNBT"(tag: $CompoundTag$Type): void
}

export namespace $IPersistedSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPersistedSerializable$Type = ($IPersistedSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPersistedSerializable_ = $IPersistedSerializable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEase {

 "getInterpolation"(arg0: float): float

(arg0: float): float
}

export namespace $IEase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEase$Type = ($IEase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEase_ = $IEase$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ColorPattern" {
import {$ColorBorderTexture, $ColorBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ColorRectTexture, $ColorRectTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture"

export class $ColorPattern extends $Enum<($ColorPattern)> {
static readonly "WHITE": $ColorPattern
static readonly "T_WHITE": $ColorPattern
static readonly "BLACK": $ColorPattern
static readonly "T_BLACK": $ColorPattern
static readonly "SEAL_BLACK": $ColorPattern
static readonly "T_SEAL_BLACK": $ColorPattern
static readonly "GRAY": $ColorPattern
static readonly "T_GRAY": $ColorPattern
static readonly "DARK_GRAY": $ColorPattern
static readonly "T_DARK_GRAY": $ColorPattern
static readonly "LIGHT_GRAY": $ColorPattern
static readonly "T_LIGHT_GRAY": $ColorPattern
static readonly "GREEN": $ColorPattern
static readonly "T_GREEN": $ColorPattern
static readonly "RED": $ColorPattern
static readonly "T_RED": $ColorPattern
static readonly "BRIGHT_RED": $ColorPattern
static readonly "T_BRIGHT_RED": $ColorPattern
static readonly "YELLOW": $ColorPattern
static readonly "T_YELLOW": $ColorPattern
static readonly "CYAN": $ColorPattern
static readonly "T_CYAN": $ColorPattern
static readonly "PURPLE": $ColorPattern
static readonly "T_PURPLE": $ColorPattern
static readonly "PINK": $ColorPattern
static readonly "T_PINK": $ColorPattern
static readonly "BLUE": $ColorPattern
static readonly "T_BLUE": $ColorPattern
static readonly "ORANGE": $ColorPattern
static readonly "T_ORANGE": $ColorPattern
static readonly "BROWN": $ColorPattern
static readonly "T_BROWN": $ColorPattern
static readonly "LIME": $ColorPattern
static readonly "T_LIME": $ColorPattern
static readonly "MAGENTA": $ColorPattern
static readonly "T_MAGENTA": $ColorPattern
static readonly "LIGHT_BLUE": $ColorPattern
static readonly "T_LIGHT_BLUE": $ColorPattern
readonly "color": integer


public static "values"(): ($ColorPattern)[]
public static "valueOf"(name: string): $ColorPattern
public "rectTexture"(): $ColorRectTexture
public "borderTexture"(border: integer): $ColorBorderTexture
public static "generateRainbowColor"(tick: long): integer
public static "generateRainbowColor"(): integer
public static "rainbowRectTexture"(border: integer): $ColorBorderTexture
public static "rainbowRectTexture"(): $ColorRectTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPattern$Type = (("t_pink") | ("magenta") | ("pink") | ("yellow") | ("t_red") | ("cyan") | ("t_bright_red") | ("t_orange") | ("red") | ("gray") | ("t_gray") | ("white") | ("t_cyan") | ("bright_red") | ("seal_black") | ("dark_gray") | ("t_purple") | ("t_blue") | ("t_lime") | ("t_brown") | ("green") | ("t_magenta") | ("light_gray") | ("lime") | ("black") | ("t_green") | ("t_light_blue") | ("t_seal_black") | ("light_blue") | ("t_yellow") | ("brown") | ("orange") | ("t_black") | ("t_white") | ("blue") | ("t_dark_gray") | ("purple") | ("t_light_gray")) | ($ColorPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorPattern_ = $ColorPattern$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NeighborUpdater, $NeighborUpdater$Type} from "packages/net/minecraft/world/level/redstone/$NeighborUpdater"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$WritableLevelData, $WritableLevelData$Type} from "packages/net/minecraft/world/level/storage/$WritableLevelData"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$DummyWorld, $DummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackedDummyWorld extends $DummyWorld {
readonly "proxyWorld": $WeakReference<($Level)>
readonly "renderedBlocks": $Map<($BlockPos), ($BlockInfo)>
readonly "blockEntities": $Map<($BlockPos), ($BlockEntity)>
readonly "entities": $Map<(integer), ($Entity)>
readonly "minPos": $Vector3f
readonly "maxPos": $Vector3f
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
readonly "neighborUpdater": $NeighborUpdater
 "randValue": integer
readonly "addend": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "levelData": $WritableLevelData
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor()
constructor(world: $Level$Type)

public "clear"(): void
public "getSize"(): $Vector3f
public "removeBlock"(pos: $BlockPos$Type): $BlockInfo
public "getParticleManager"(): $ParticleManager
public "getRenderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$Type): $ItemStack
public static "isUnsafeItemNBTKey"(name: string): boolean
public "getAllEntities"(): $List<($Entity)>
public "setRenderFilter"(renderFilter: $Predicate$Type<($BlockPos$Type)>): void
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public "addFreshEntity"(entity: $Entity$Type): boolean
public "getChunkSource"(): $ChunkSource
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBiome"(pos: $BlockPos$Type): $Holder<($Biome)>
public "tickWorld"(): void
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getEntity"(id: integer): $Entity
public "getBlockTint"(blockPos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "setBlock"(pos: $BlockPos$Type, state: $BlockState$Type, a: integer, b: integer): boolean
public "getMaxPos"(): $Vector3f
public "addBlock"(pos: $BlockPos$Type, blockInfo: $BlockInfo$Type): void
public "addBlocks"(renderedBlocks: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>): void
public "getMinPos"(): $Vector3f
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "size"(): $Vector3f
get "particleManager"(): $ParticleManager
get "renderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
set "particleManager"(value: $ParticleManager$Type)
set "innerBlockEntity"(value: $BlockEntity$Type)
get "allEntities"(): $List<($Entity)>
set "renderFilter"(value: $Predicate$Type<($BlockPos$Type)>)
get "chunkSource"(): $ChunkSource
set "blockEntity"(value: $BlockEntity$Type)
get "maxPos"(): $Vector3f
get "minPos"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDummyWorld$Type = ($TrackedDummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDummyWorld_ = $TrackedDummyWorld$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPersistedSerializable, $IPersistedSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IPersistedSerializable"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
static readonly "EMPTY": $BlockInfo

constructor()
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean, itemStack: $ItemStack$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(blockState: $BlockState$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(block: $Block$Type)
constructor(blockState: $BlockState$Type)
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean)

public "apply"(world: $Level$Type, pos: $BlockPos$Type): void
public "setBlockState"(blockState: $BlockState$Type): void
public "getBlockEntity"(level: $Level$Type, pos: $BlockPos$Type): $BlockEntity
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "setItemStack"(itemStack: $ItemStack$Type): void
public static "fromBlockState"(state: $BlockState$Type): $BlockInfo
public "getBlockState"(): $BlockState
public "setTag"(tag: $CompoundTag$Type): void
public "clearBlockEntityCache"(): void
public "setPostCreate"(postCreate: $Consumer$Type<($BlockEntity$Type)>): void
public "hasBlockEntity"(): boolean
public "getItemStackForm"(): $ItemStack
public "getItemStackForm"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ItemStack
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public static "fromBlock"(block: $Block$Type): $BlockInfo
public "deserializeNBT"(tag: $CompoundTag$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "blockState"(value: $BlockState$Type)
set "itemStack"(value: $ItemStack$Type)
get "blockState"(): $BlockState
set "tag"(value: $CompoundTag$Type)
set "postCreate"(value: $Consumer$Type<($BlockEntity$Type)>)
get "itemStackForm"(): $ItemStack
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$Type = ($BlockInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation

constructor()
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$Type)

public "getFrom"(): integer
public "getAnimation"(): integer
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setAnimation"(animation: integer): $AnimationTexture
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public "setCellSize"(cellSize: integer): $AnimationTexture
public "getCellSize"(): integer
public "getColor"(): integer
public "getTo"(): integer
public "setTexture"(imageLocation: string): $AnimationTexture
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "from"(): integer
get "animation"(): integer
set "animation"(value: integer)
set "cellSize"(value: integer)
get "cellSize"(): integer
get "color"(): integer
get "to"(): integer
set "texture"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTexture$Type = ($AnimationTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationTexture_ = $AnimationTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Position" {
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"

export class $Position {
static readonly "ORIGIN": $Position
readonly "x": integer
readonly "y": integer

constructor(x: integer, y: integer)

public "subtract"(other: $Position$Type): $Position
public "getY"(): integer
public "getX"(): integer
public "add"(x: integer, y: integer): $Position
public "add"(other: $Position$Type): $Position
public "add"(size: $Size$Type): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(x: integer, y: integer): $Position
public "vec2"(): $Vec2
public "vector2f"(): $Vector2f
public "addX"(x: integer): $Position
public "addY"(y: integer): $Position
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot" {
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {

 "self"(): $Widget
 "getIngredientIO"(): $IngredientIO
 "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
 "getXEIIngredients"(): $List<(any)>
 "getXEIChance"(): float
 "getXEICurrentIngredient"(): any
 "getFullTooltipTexts"(): $List<($Component)>

(): $Widget
}

export namespace $IRecipeIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeIngredientSlot$Type = ($IRecipeIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeIngredientSlot_ = $IRecipeIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $MenuWidget<K, T> extends $WidgetGroup {
static "NODE_TEXTURE": $IGuiTexture
static "LEAF_TEXTURE": $IGuiTexture
static "NODE_HOVER_TEXTURE": $IGuiTexture
static "BACKGROUND": $IGuiTexture
readonly "widgets": $List<($Widget)>

constructor(xPosition: integer, yPosition: integer, nodeHeight: integer, root: $TreeNode$Type<(K), (T)>)

public "close"(): void
public "setOnNodeClicked"(onNodeClicked: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $MenuWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $MenuWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $MenuWidget<(K), (T)>
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$Type<(K)>): $MenuWidget<(K), (T)>
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setAutoClose"(autoClose: boolean): $MenuWidget<(K), (T)>
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "initWidget"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "onNodeClicked"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "crossLinePredicate"(value: $Predicate$Type<(K)>)
set "nodeHoverTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "nodeTexture"(value: $IGuiTexture$Type)
set "autoClose"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuWidget$Type<K, T> = ($MenuWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuWidget_<K, T> = $MenuWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ToolPanel extends $WidgetGroup {
/**
 * 
 * @deprecated
 */
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "setSize"(size: $Size$Type): void
public "clearAllWidgets"(): void
public "getToolBoxes"(): $List<($Widget)>
public "getTabContainer"(): $TabContainer
/**
 * 
 * @deprecated
 */
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBox: $WidgetGroup$Type): void
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBoxSupplier: $Function$Type<($Size$Type), ($WidgetGroup$Type)>): void
public "hide"(): void
public "hide"(animate: boolean): void
public "show"(animate: boolean): void
public "show"(): void
public "setTitle"(title: string): void
public "initWidget"(): void
public "isShow"(): boolean
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
get "toolBoxes"(): $List<($Widget)>
get "tabContainer"(): $TabContainer
set "title"(value: string)
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolPanel$Type = ($ToolPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolPanel_ = $ToolPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layout extends $Enum<($Layout)> {
static readonly "NONE": $Layout
static readonly "VERTICAL_LEFT": $Layout
static readonly "VERTICAL_CENTER": $Layout
static readonly "VERTICAL_RIGHT": $Layout
static readonly "HORIZONTAL_TOP": $Layout
static readonly "HORIZONTAL_CENTER": $Layout
static readonly "HORIZONTAL_BOTTOM": $Layout


public static "values"(): ($Layout)[]
public static "valueOf"(name: string): $Layout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$Type = (("vertical_center") | ("horizontal_center") | ("vertical_left") | ("vertical_right") | ("horizontal_bottom") | ("none") | ("horizontal_top")) | ($Layout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout_ = $Layout$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$BlockUIJSFactory$BlockAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockUIJSFactory$BlockAccess extends $Record {

constructor(pos: $BlockPos$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "uiName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUIJSFactory$BlockAccess$Type = ($BlockUIJSFactory$BlockAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUIJSFactory$BlockAccess_ = $BlockUIJSFactory$BlockAccess$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$SyntaxParser" {
import {$Token, $Token$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$Token"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ILanguageDefinition, $ILanguageDefinition$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$ILanguageDefinition"

export class $SyntaxParser {

constructor()

public "setLanguageDefinition"(languageDefinition: $ILanguageDefinition$Type): void
public "parseLine"(lineText: string): $List<($Token)>
public "getLanguageDefinition"(): $ILanguageDefinition
set "languageDefinition"(value: $ILanguageDefinition$Type)
get "languageDefinition"(): $ILanguageDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyntaxParser$Type = ($SyntaxParser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyntaxParser_ = $SyntaxParser$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/forge/$ISlotWidgetKJS" {
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export interface $ISlotWidgetKJS {

 "kjs$setHandlerSlot"(itemHandler: $IItemHandlerModifiable$Type, slot: integer): void
 "kjs$self"(): $SlotWidget
}

export namespace $ISlotWidgetKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotWidgetKJS$Type = ($ISlotWidgetKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotWidgetKJS_ = $ISlotWidgetKJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HsbColorWidget, $HsbColorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigPanel extends $WidgetGroup {
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type, tabs: $List$Type<($ConfigPanel$Tab$Type)>)
constructor(editor: $Editor$Type)

public "clearAllConfigurators"(): void
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$Type): void
public "computeLayout"(tab: $ConfigPanel$Tab$Type): void
public "openConfigurator"(tab: $ConfigPanel$Tab$Type, configurable: $IConfigurable$Type): void
public "onConfiguratorChangeUpdate"(tab: $ConfigPanel$Tab$Type, configurator: $Configurator$Type): void
public "getPalette"(): $HsbColorWidget
public "switchTag"(tab: $ConfigPanel$Tab$Type): void
public "reloadTabs"(tabs: $List$Type<($ConfigPanel$Tab$Type)>): void
public "getFocus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "palette"(): $HsbColorWidget
get "focus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Type = ($ConfigPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel_ = $ConfigPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$FoldableRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FoldableRegion {

constructor(startLine: integer, endLine: integer)

public "isCollapsed"(): boolean
public "getStartLine"(): integer
public "toggle"(): void
public "getEndLine"(): integer
get "collapsed"(): boolean
get "startLine"(): integer
get "endLine"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoldableRegion$Type = ($FoldableRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoldableRegion_ = $FoldableRegion$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable" {
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {

 "canDragOutRange"(): boolean
 "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
 "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
 "startDrag"(mouseX: double, mouseY: double): void
 "endDrag"(mouseX: double, mouseY: double): void
 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onSelected"(): void

(): boolean
}

export namespace $DraggableScrollableWidgetGroup$IDraggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$IDraggable$Type = ($DraggableScrollableWidgetGroup$IDraggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$IDraggable_ = $DraggableScrollableWidgetGroup$IDraggable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TankWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor()

public "getIngredientIO"(): $IngredientIO
public "initTemplate"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getTooltipTexts"(): $List<($Component)>
public "setBackground"(background: $IGuiTexture$Type): $TankWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $TankWidget
public "setChangeListener"(changeListener: $Runnable$Type): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>): $TankWidget
public "getAdditionalToolTips"(list: $List$Type<($Component$Type)>): $List<($Component)>
public "getXEIIngredients"(): $List<(any)>
public "getXEIChance"(): float
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getXEICurrentIngredient"(): any
public "getFullTooltipTexts"(): $List<($Component)>
public "detectAndSendChanges"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "getFluidTank"(): $IFluidTransfer
public "setShowAmount"(showAmount: boolean): $TankWidget
public "getLastFluidInTank"(): $FluidStack
public "getLastTankCapacity"(): long
public "setFluidTank"(fluidTank: $IFluidStorage$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$Type, tank: integer): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $TankWidget
public "getFluid"(): $FluidStack
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setFluid"(fluidStack: $FluidStack$Type): $TankWidget
public "setFluid"(fluidStack: $FluidStack$Type, notify: boolean): $TankWidget
public "getTank"(): integer
public "self"(): $Widget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "ingredientIO"(): $IngredientIO
get "tooltipTexts"(): $List<($Component)>
set "background"(value: $IGuiTexture$Type)
set "drawHoverTips"(value: boolean)
set "ingredientIO"(value: $IngredientIO$Type)
set "changeListener"(value: $Runnable$Type)
set "xEIChance"(value: float)
set "drawHoverOverlay"(value: boolean)
set "onAddedTooltips"(value: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>)
get "xEIIngredients"(): $List<(any)>
get "xEIChance"(): float
get "xEICurrentIngredient"(): any
get "fullTooltipTexts"(): $List<($Component)>
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
get "fluidTank"(): $IFluidTransfer
set "showAmount"(value: boolean)
get "lastFluidInTank"(): $FluidStack
get "lastTankCapacity"(): long
set "fluidTank"(value: $IFluidStorage$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$Type)
get "tank"(): integer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankWidget$Type = ($TankWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankWidget_ = $TankWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClickData {
readonly "button": integer
readonly "isShiftClick": boolean
readonly "isCtrlClick": boolean
readonly "isRemote": boolean

constructor()

public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $ClickData
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickData$Type = ($ClickData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickData_ = $ClickData$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation" {
import {$FloatConsumer, $FloatConsumer$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatConsumer"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Animation {

constructor()

public "duration"(duration: long): $Animation
public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "delay"(delay: long): $Animation
public "appendOnFinish"(onFinish: $Runnable$Type): $Animation
public "getOnFinish"(): $Runnable
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "getWidget"(): $Widget
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Animation
public "setWidget"(widget: $Widget$Type): $Animation
public "isFinish"(): boolean
public "ease"(ease: $IEase$Type): $Animation
get "widget"(): $Widget
set "widget"(value: $Widget$Type)
get "finish"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$TokenType" {
import {$Matcher, $Matcher$Type} from "packages/java/util/regex/$Matcher"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $TokenType implements $Predicate<($Matcher)> {
readonly "name": string

constructor(name: string)

public "getPattern"(): string
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(matcher: $Matcher$Type): boolean
public "setPattern"(pattern: string): $TokenType
public "hasPattern"(): boolean
public "getMatcher"(): $Predicate<($Matcher)>
public "setMatcher"(matcher: $Predicate$Type<($Matcher$Type)>): $TokenType
public static "isEqual"<T>(arg0: any): $Predicate<($Matcher)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Matcher)>
public "negate"(): $Predicate<($Matcher)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Matcher)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Matcher)>
get "pattern"(): string
set "pattern"(value: string)
get "matcher"(): $Predicate<($Matcher)>
set "matcher"(value: $Predicate$Type<($Matcher$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TokenType$Type = ($TokenType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TokenType_ = $TokenType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorBorderTexture extends $TransformTexture {
 "color": integer
 "border": integer
 "radiusLTInner": float
 "radiusLBInner": float
 "radiusRTInner": float
 "radiusRBInner": float
 "radiusLTOuter": float
 "radiusLBOuter": float
 "radiusRTOuter": float
 "radiusRBOuter": float

constructor()
constructor(border: integer, color: integer)
constructor(border: integer, color: $Color$Type)

public "setLeftRadiusInner"(radius: float): $ColorBorderTexture
public "setLeftRadiusOuter"(radius: float): $ColorBorderTexture
public "setRightRadiusInner"(radius: float): $ColorBorderTexture
public "setRightRadiusOuter"(radius: float): $ColorBorderTexture
public "setTopRadiusInner"(radius: float): $ColorBorderTexture
public "setTopRadiusOuter"(radius: float): $ColorBorderTexture
public "setBottomRadiusInner"(radius: float): $ColorBorderTexture
public "setBottomRadiusOuter"(radius: float): $ColorBorderTexture
public "setRadiusLTInner"(radiusLTInner: float): void
public "setRadiusLBInner"(radiusLBInner: float): void
public "setRadiusRTInner"(radiusRTInner: float): void
public "setRadiusRBInner"(radiusRBInner: float): void
public "setRadiusLTOuter"(radiusLTOuter: float): void
public "setRadiusLBOuter"(radiusLBOuter: float): void
public "setRadiusRTOuter"(radiusRTOuter: float): void
public "setRadiusRBOuter"(radiusRBOuter: float): void
public "setLeftRadius"(radius: float): $ColorBorderTexture
public "setRightRadius"(radius: float): $ColorBorderTexture
public "setTopRadius"(radius: float): $ColorBorderTexture
public "setBottomRadius"(radius: float): $ColorBorderTexture
public "setRadius"(radius: float): $ColorBorderTexture
public "setBorder"(border: integer): $ColorBorderTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "leftRadiusInner"(value: float)
set "leftRadiusOuter"(value: float)
set "rightRadiusInner"(value: float)
set "rightRadiusOuter"(value: float)
set "topRadiusInner"(value: float)
set "topRadiusOuter"(value: float)
set "bottomRadiusInner"(value: float)
set "bottomRadiusOuter"(value: float)
set "radiusLTInner"(value: float)
set "radiusLBInner"(value: float)
set "radiusRTInner"(value: float)
set "radiusRBInner"(value: float)
set "radiusLTOuter"(value: float)
set "radiusLBOuter"(value: float)
set "radiusRTOuter"(value: float)
set "radiusRBOuter"(value: float)
set "leftRadius"(value: float)
set "rightRadius"(value: float)
set "topRadius"(value: float)
set "bottomRadius"(value: float)
set "radius"(value: float)
set "border"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorBorderTexture$Type = ($ColorBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorBorderTexture_ = $ColorBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PositionedRect, $PositionedRect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ISceneEntityRenderHook, $ISceneEntityRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldSceneRenderer {
readonly "world": $Level
readonly "renderedBlocksMap": $Map<($Collection<($BlockPos)>), ($ISceneBlockRenderHook)>

constructor(world: $Level$Type)

public "getParticleManager"(): $ParticleManager
public "setOnLookingAt"(onLookingAt: $Consumer$Type<($BlockHitResult$Type)>): $WorldSceneRenderer
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "setBeforeWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setAfterWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "needCompileCache"(): $WorldSceneRenderer
public "setBeforeBatchEnd"(beforeBatchEnd: $BiConsumer$Type<($MultiBufferSource$Type), (float)>): void
public "setCameraLookAt"(eyePos: $Vector3f$Type, lookAt: $Vector3f$Type, worldUp: $Vector3f$Type): void
public "setCameraLookAt"(lookAt: $Vector3f$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "setClearColor"(clearColor: integer): void
public "addRenderedBlocks"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $WorldSceneRenderer
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "setCameraOrtho"(x: float, y: float, z: float): void
public "getLastTraceResult"(): $BlockHitResult
public "isCompiling"(): boolean
public "getCompileProgress"(): double
public "setParticleManager"(particleManager: $ParticleManager$Type): $WorldSceneRenderer
public "render"(poseStack: $PoseStack$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public "getPositionedRect"(x: integer, y: integer, width: integer, height: integer): $PositionedRect
public "getPositionRectRevert"(windowX: integer, windowY: integer, windowWidth: integer, windowHeight: integer): $PositionedRect
public static "setDefaultRenderLayerState"(layer: $RenderType$Type): void
public static "canRenderInLayer"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, renderType: $RenderType$Type, random: $RandomSource$Type): boolean
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, random: $RandomSource$Type, renderType: $RenderType$Type): void
public "isEndBatchLast"(): boolean
public "setEndBatchLast"(endBatchLast: boolean): void
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$Type): void
public "project"(pos: $Vector3f$Type): $Vector3f
public "getFov"(): float
public "rayTrace"(hitPos: $Vector3f$Type): $BlockHitResult
public "isUseCache"(): boolean
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
public "getEyePos"(): $Vector3f
public "setBlocked"(blocked: $Set$Type<($BlockPos$Type)>): $WorldSceneRenderer
public "unProject"(mouseX: integer, mouseY: integer, checkDepth: boolean): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public "getLookAt"(): $Vector3f
public "getWorldUp"(): $Vector3f
public "setFov"(fov: float): void
public "getLastHit"(): $Vector3f
get "particleManager"(): $ParticleManager
set "onLookingAt"(value: $Consumer$Type<($BlockHitResult$Type)>)
set "beforeWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "beforeBatchEnd"(value: $BiConsumer$Type<($MultiBufferSource$Type), (float)>)
set "clearColor"(value: integer)
get "lastTraceResult"(): $BlockHitResult
get "compiling"(): boolean
get "compileProgress"(): double
set "particleManager"(value: $ParticleManager$Type)
set "defaultRenderLayerState"(value: $RenderType$Type)
get "endBatchLast"(): boolean
set "endBatchLast"(value: boolean)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$Type)
get "fov"(): float
get "useCache"(): boolean
get "eyePos"(): $Vector3f
set "blocked"(value: $Set$Type<($BlockPos$Type)>)
get "lookAt"(): $Vector3f
get "worldUp"(): $Vector3f
set "fov"(value: float)
get "lastHit"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$Type = ($WorldSceneRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer_ = $WorldSceneRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$CodeEditorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Cursor, $Cursor$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Cursor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$CodeEditor, $CodeEditor$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$CodeEditor"

export class $CodeEditorWidget extends $WidgetGroup {
static readonly "MONO_BOLD": $ResourceLocation
readonly "codeEditor": $CodeEditor
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getLastDeltaX"(): double
public "getLastDeltaY"(): double
public "getScrollXOffset"(): integer
public "getScrollYOffset"(): integer
public "setOnTextChanged"(onTextChanged: $Consumer$Type<($List$Type<(string)>)>): void
public "isHoveringXBar"(): boolean
public "isHoveringYBar"(): boolean
public "isDraggingXBar"(): boolean
public "isDraggingYBar"(): boolean
public "canConsumeInput"(): boolean
public "notifyChanged"(): void
public "adaptCursor"(): void
public "getCodeEditor"(): $CodeEditor
public "getOnTextChanged"(): $Consumer<($List<(string)>)>
public "getLines"(): $List<(string)>
public "getCursor"(mouseX: double, mouseY: double): $Cursor
public "setLines"(lines: $List$Type<(string)>): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "getXBarB"(): $IGuiTexture
public "getXBarF"(): $IGuiTexture
public "getYBarB"(): $IGuiTexture
public "getYBarF"(): $IGuiTexture
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "lastDeltaX"(): double
get "lastDeltaY"(): double
get "scrollXOffset"(): integer
get "scrollYOffset"(): integer
set "onTextChanged"(value: $Consumer$Type<($List$Type<(string)>)>)
get "hoveringXBar"(): boolean
get "hoveringYBar"(): boolean
get "draggingXBar"(): boolean
get "draggingYBar"(): boolean
get "codeEditor"(): $CodeEditor
get "onTextChanged"(): $Consumer<($List<(string)>)>
get "lines"(): $List<(string)>
set "lines"(value: $List$Type<(string)>)
get "xBarB"(): $IGuiTexture
get "xBarF"(): $IGuiTexture
get "yBarB"(): $IGuiTexture
get "yBarF"(): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodeEditorWidget$Type = ($CodeEditorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodeEditorWidget_ = $CodeEditorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Selection" {
import {$Cursor, $Cursor$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Cursor"

export class $Selection {

constructor(start: $Cursor$Type, end: $Cursor$Type)

public "clear"(): void
public "hasSelection"(): boolean
public "isSelecting"(): boolean
public "getSelectionRange"(): (integer)[]
public "setSelecting"(isSelecting: boolean): void
public "getStart"(): $Cursor
public "updateEnd"(newEnd: $Cursor$Type): void
public "getEnd"(): $Cursor
get "selecting"(): boolean
get "selectionRange"(): (integer)[]
set "selecting"(value: boolean)
get "start"(): $Cursor
get "end"(): $Cursor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selection$Type = ($Selection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Selection_ = $Selection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemTransfer {

 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(index: integer, stack: $ItemStack$Type): void
 "createSnapshot"(): any
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
}

export namespace $IItemTransfer {
const EMPTY: $IItemTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTransfer$Type = ($IItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTransfer_ = $IItemTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"

export class $TreeBuilder<K, V> {

constructor(key: K)

public "branch"(key: K, builderConsumer: $Consumer$Type<($TreeBuilder$Type<(K), (V)>)>): $TreeBuilder<(K), (V)>
public "build"(): $TreeNode<(K), (V)>
public "remove"(key: K): $TreeBuilder<(K), (V)>
public static "start"<K, V>(key: K): $TreeBuilder<(K), (V)>
public "startBranch"(key: K): $TreeBuilder<(K), (V)>
public "leaf"(key: K, content: V): $TreeBuilder<(K), (V)>
public "endBranch"(): $TreeBuilder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Type<K, V> = ($TreeBuilder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder_<K, V> = $TreeBuilder$Type<(K), (V)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$Token" {
import {$TokenType, $TokenType$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$TokenType"

export class $Token {

constructor(text: string, type: $TokenType$Type, startIndex: integer, endIndex: integer)

public "getEndIndex"(): integer
public "getType"(): $TokenType
public "getText"(): string
public "getStartIndex"(): integer
get "endIndex"(): integer
get "type"(): $TokenType
get "text"(): string
get "startIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Token$Type = ($Token);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Token_ = $Token$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$StaticResource" {
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"

export class $StaticResource<T> {
static "EMPTY": $StaticResource<(any)>

constructor(resource: $Resource$Type<(T)>)

public static "empty"<T>(): $StaticResource<(T)>
public "loadAndUpdateStaticResource"(): boolean
public "isStaticResourceLoaded"(): boolean
get "staticResourceLoaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticResource$Type<T> = ($StaticResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticResource_<T> = $StaticResource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $SPacketUIWidgetUpdate implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketUIWidgetUpdate$Type = ($SPacketUIWidgetUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketUIWidgetUpdate_ = $SPacketUIWidgetUpdate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidgetGroup extends $IConfigurableWidget {

 "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
 "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
 "acceptWidget"(widget: $IConfigurableWidget$Type): void
 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "handleDragging"(dragging: any): boolean
 "canDragIn"(dragging: any): boolean
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
}

export namespace $IConfigurableWidgetGroup {
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidgetGroup$Type = ($IConfigurableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidgetGroup_ = $IConfigurableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $PhantomSlotWidget extends $SlotWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean

constructor()
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "getMaxStackSize"(): integer
public "setCanTakeItems"(v: boolean): $PhantomSlotWidget
public "setCanPutItems"(v: boolean): $PhantomSlotWidget
public "canPutStack"(stack: $ItemStack$Type): boolean
public "canTakeStack"(player: $Player$Type): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "slotClickPhantom"(slot: $Slot$Type, mouseButton: integer, clickTypeIn: $ClickType$Type, stackHeld: $ItemStack$Type): $ItemStack
public "areItemsEqual"(itemStack1: $ItemStack$Type, itemStack2: $ItemStack$Type): boolean
public "isClearSlotOnRightClick"(): boolean
public "setMaxStackSize"(maxStackSize: integer): void
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "maxStackSize"(): integer
set "canTakeItems"(value: boolean)
set "canPutItems"(value: boolean)
set "clearSlotOnRightClick"(value: boolean)
get "clearSlotOnRightClick"(): boolean
set "maxStackSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomSlotWidget$Type = ($PhantomSlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomSlotWidget_ = $PhantomSlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "invokeSetLevel"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ParticleManager {
 "level": $Level

constructor()

public "tick"(): void
public "setLevel"(level: $Level$Type): void
public "getParticleAmount"(): integer
public "addParticle"(particle: $Particle$Type): void
public "render"(pMatrixStack: $PoseStack$Type, pActiveRenderInfo: $Camera$Type, pPartialTicks: float): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
public "clearAllParticles"(): void
set "level"(value: $Level$Type)
get "particleAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManager$Type = ($ParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManager_ = $ParticleManager$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ButtonWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, buttonTexture: $IGuiTexture$Type, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor()

public "initTemplate"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnPressCallback"(onPressCallback: $Consumer$Type<($ClickData$Type)>): $ButtonWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "setButtonTexture"(...buttonTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setClickedTexture"(...clickedTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "isClicked"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "onPressCallback"(value: $Consumer$Type<($ClickData$Type)>)
set "buttonTexture"(value: ($IGuiTexture$Type)[])
set "clickedTexture"(value: ($IGuiTexture$Type)[])
set "hoverTexture"(value: ($IGuiTexture$Type)[])
get "clicked"(): boolean
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidget$Type = ($ButtonWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonWidget_ = $ButtonWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TransformTexture implements $IGuiTexture {

constructor()

public "scale"(scale: float): $TransformTexture
public "transform"(xOffset: float, yOffset: float): $TransformTexture
public "getRotation"(): float
public "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "draw"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
public "getScale"(): float
public "getXOffset"(): float
public "getYOffset"(): float
public "setColor"(color: integer): $IGuiTexture
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "copy"(): $IGuiTexture
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "rotation"(): float
get "xOffset"(): float
get "yOffset"(): float
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformTexture$Type = ($TransformTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformTexture_ = $TransformTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$Languages" {
import {$LanguageDefinition, $LanguageDefinition$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$LanguageDefinition"

export interface $Languages {

}

export namespace $Languages {
const UNFORMATTED: $LanguageDefinition
const JAVASCRIPT: $LanguageDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Languages$Type = ($Languages);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Languages_ = $Languages$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "ldlib$getActiveButton"(): integer

(): integer
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IConfigurableWidgetGroup, $IConfigurableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Layout, $Layout$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Layout"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "clearAllWidgets"(): void
public "getAllWidgetSize"(): integer
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "initTemplate"(): void
public "waitToAdded"(widget: $Widget$Type): void
public "addWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$Type<(T)>): $List<(T)>
public "getFirstWidgetById"(regex: string): $Widget
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getContainedWidgets"(includeHidden: boolean): $List<($Widget)>
public "removeWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "setDynamicSized"(dynamicSized: boolean): void
public "setLayoutPadding"(layoutPadding: integer): void
public "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "isDynamicSized"(): boolean
public "waitToRemoved"(widget: $Widget$Type): void
public "serializeInnerNBT"(): $CompoundTag
public "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getLayoutPadding"(): integer
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "setClientSideWidget"(): $WidgetGroup
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "detectAndSendChanges"(): void
public "removeWidget"(widget: $Widget$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "setLayout"(layout: $Layout$Type): void
public "isChild"(widget: $Widget$Type): boolean
public "getLayout"(): $Layout
public "isAllowXEIIngredientOverMouse"(): boolean
public "setAllowXEIIngredientOverMouse"(allowXEIIngredientOverMouse: boolean): void
public "setVisible"(visible: boolean): $WidgetGroup
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "addWidget"<T extends $Widget>(widget: T, callback: $Consumer$Type<(T)>): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "addWidget"(widget: $Widget$Type): $WidgetGroup
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "addWidgets"(...widgets: ($Widget$Type)[]): $WidgetGroup
public "setGui"(gui: $ModularUI$Type): void
public "initWidget"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "canDragIn"(dragging: any): boolean
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "allWidgetSize"(): integer
set "dynamicSized"(value: boolean)
set "layoutPadding"(value: integer)
get "dynamicSized"(): boolean
get "layoutPadding"(): integer
set "layout"(value: $Layout$Type)
get "layout"(): $Layout
get "allowXEIIngredientOverMouse"(): boolean
set "allowXEIIngredientOverMouse"(value: boolean)
set "visible"(value: boolean)
set "gui"(value: $ModularUI$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetGroup$Type = ($WidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetGroup_ = $WidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SwitchWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$Type<($ClickData$Type), (boolean)>)
constructor()

public "initTemplate"(): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "detectAndSendChanges"(): void
public "setOnPressCallback"(onPressCallback: $BiConsumer$Type<($ClickData$Type), (boolean)>): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setSupplier"(supplier: $Supplier$Type<(boolean)>): $SwitchWidget
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "isPressed"(): boolean
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $SwitchWidget
public "setPressed"(isPressed: boolean): $SwitchWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $BiConsumer$Type<($ClickData$Type), (boolean)>)
set "supplier"(value: $Supplier$Type<(boolean)>)
set "baseTexture"(value: ($IGuiTexture$Type)[])
set "pressedTexture"(value: ($IGuiTexture$Type)[])
get "pressed"(): boolean
set "pressed"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchWidget$Type = ($SwitchWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchWidget_ = $SwitchWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/misc/$FluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IContentChangeAware, $IContentChangeAware$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IContentChangeAware"

export class $FluidStorage implements $IFluidStorage, $IContentChangeAware, $ITagSerializable<($CompoundTag)> {

constructor(capacity: long)
constructor(fluidStack: $FluidStack$Type)
constructor(capacity: long, validator: $Predicate$Type<($FluidStack$Type)>)

public "getCapacity"(): long
public "setCapacity"(capacity: long): void
public "drain"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): $FluidStack
public "fill"(tank: integer, resource: $FluidStack$Type, simulate: boolean, notifyChange: boolean): long
public "copy"(): $FluidStorage
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "createSnapshot"(): any
public "restoreFromSnapshot"(snapshot: any): void
public "onContentsChanged"(): void
public "isFluidValid"(stack: $FluidStack$Type): boolean
public "supportsFill"(tank: integer): boolean
public "supportsDrain"(tank: integer): boolean
public "setValidator"(validator: $Predicate$Type<($FluidStack$Type)>): void
public "getOnContentsChanged"(): $Runnable
public "setOnContentsChanged"(onContentsChanged: $Runnable$Type): void
public "getFluid"(): $FluidStack
public "setFluid"(fluid: $FluidStack$Type): void
public "getFluidAmount"(): long
public "getTankCapacity"(tank: integer): long
public "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
public "getFluidInTank"(tank: integer): $FluidStack
public "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
public "getTanks"(): integer
public "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
public "drain"(maxDrain: long, simulate: boolean): $FluidStack
public "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
public "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
public "fill"(resource: $FluidStack$Type, simulate: boolean): long
get "capacity"(): long
set "capacity"(value: long)
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$Type)
get "fluidAmount"(): long
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStorage$Type = ($FluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStorage_ = $FluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WorldSceneRenderer$VertexConsumerWrapper, $WorldSceneRenderer$VertexConsumerWrapper$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ISceneBlockRenderHook {

 "apply"(isTESR: boolean, layer: $RenderType$Type): void
 "applyVertexConsumerWrapper"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, wrapperBuffer: $WorldSceneRenderer$VertexConsumerWrapper$Type, layer: $RenderType$Type, partialTicks: float): void
 "applyBESR"(world: $Level$Type, pos: $BlockPos$Type, blockEntity: $BlockEntity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneBlockRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneBlockRenderHook$Type = ($ISceneBlockRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneBlockRenderHook_ = $ISceneBlockRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FluidStack {


public "getDisplayName"(): $Component
public "getTag"(): $CompoundTag
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "copy"(): $FluidStack
public "copy"(amount: long): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, nbt: $CompoundTag$Type): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public "grow"(amount: long): void
public "isFluidEqual"(other: $FluidStack$Type): boolean
public static "loadFromTag"(nbt: $CompoundTag$Type): $FluidStack
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $FluidStack
public "getRawFluid"(): $Fluid
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public "shrink"(amount: long): void
public "setTag"(tag: $CompoundTag$Type): void
public "getFluid"(): $Fluid
public "getAmount"(): long
public "hasTag"(): boolean
public "saveToTag"(nbt: $CompoundTag$Type): $CompoundTag
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public "setAmount"(amount: long): void
public "setFluid"(fluid: $Fluid$Type): void
get "displayName"(): $Component
get "tag"(): $CompoundTag
get "rawFluid"(): $Fluid
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
get "amount"(): long
set "amount"(value: long)
set "fluid"(value: $Fluid$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IHandlerContext {

 "getContext"(): any
 "isClient"(): boolean
 "getLevel"(): $Level
 "getServer"(): $MinecraftServer
 "getPlayer"(): $ServerPlayer
}

export namespace $IHandlerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandlerContext$Type = ($IHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandlerContext_ = $IHandlerContext$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $CPacketUIClientAction implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPacketUIClientAction$Type = ($CPacketUIClientAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPacketUIClientAction_ = $CPacketUIClientAction$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $LabelWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, component: $Component$Type)
constructor(xPosition: integer, yPosition: integer, text: string)
constructor(xPosition: integer, yPosition: integer, text: $Supplier$Type<(string)>)

public "setColor"(color: integer): void
public "setText"(text: string): void
public "detectAndSendChanges"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "handleDragging"(dragging: any): boolean
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): void
/**
 * 
 * @deprecated
 */
public "setTextColor"(color: integer): $LabelWidget
/**
 * 
 * @deprecated
 */
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "setTextProvider"(textProvider: $Supplier$Type<(string)>): void
public "setComponent"(component: $Component$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "color"(value: integer)
set "text"(value: string)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textColor"(value: integer)
set "dropShadow"(value: boolean)
set "textProvider"(value: $Supplier$Type<(string)>)
set "component"(value: $Component$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelWidget$Type = ($LabelWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelWidget_ = $LabelWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor(imageLocation: $ResourceLocation$Type, offsetX: float, offsetY: float, width: float, height: float)
constructor()
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$Type)

public "setColor"(color: integer): $ResourceTexture
public "copy"(): $ResourceTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "setImageWidthHeight"(width: float, height: float): $ResourceTexture
public "setImageOffsetY"(y: float): $ResourceTexture
public "setDynamicColor"(color: $IntSupplier$Type): $ResourceTexture
public "setImageWidth"(width: float): $ResourceTexture
public "setImageHeight"(height: float): $ResourceTexture
public "setImageOffset"(x: float, y: float): $ResourceTexture
public "setImageOffsetX"(x: float): $ResourceTexture
public static "fromSpirit"(texture: $ResourceLocation$Type): $ResourceTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "imageOffsetY"(value: float)
set "dynamicColor"(value: $IntSupplier$Type)
set "imageWidth"(value: float)
set "imageHeight"(value: float)
set "imageOffsetX"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceTexture$Type = ($ResourceTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceTexture_ = $ResourceTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ItemTransferHelper {

constructor()

public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type): void
public static "giveItemToPlayer"(player: $Player$Type, stack: $ItemStack$Type, preferredSlot: integer): void
public static "canItemStacksStack"(first: $ItemStack$Type, second: $ItemStack$Type): boolean
public static "copyStackWithSize"(stack: $ItemStack$Type, size: integer): $ItemStack
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "insertItemStacked"(inventory: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "canItemStacksStackRelaxed"(a: $ItemStack$Type, b: $ItemStack$Type): boolean
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "insertItem"(dest: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelper$Type = ($ItemTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelper_ = $ItemTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ImageWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textureSupplier: $Supplier$Type<($IGuiTexture$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, area: $IGuiTexture$Type)
constructor()

public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "getBorderColor"(): integer
public "getImage"(): $IGuiTexture
public "setImage"(area: $IGuiTexture$Type): $ImageWidget
public "setImage"(textureSupplier: $Supplier$Type<($IGuiTexture$Type)>): $ImageWidget
public "setBorder"(border: integer, color: integer): $ImageWidget
public "getBorder"(): integer
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "borderColor"(): integer
get "image"(): $IGuiTexture
set "image"(value: $IGuiTexture$Type)
set "image"(value: $Supplier$Type<($IGuiTexture$Type)>)
get "border"(): integer
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageWidget$Type = ($ImageWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageWidget_ = $ImageWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MenuTab, $MenuTab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MenuPanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "saveMenuData"(): void
public "getTab"<T extends $MenuTab>(name: string): T
public "initWidget"(): void
public "getTabs"(): $Map<(string), ($MenuTab)>
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "tabs"(): $Map<(string), ($MenuTab)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuPanel$Type = ($MenuPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuPanel_ = $MenuPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Resources {
readonly "resources": $Map<(string), ($Resource<(any)>)>

constructor(resources: $Map$Type<(string), ($Resource$Type<(any)>)>)

public "dispose"(): void
public "load"(): void
public static "of"(...resources: ($Resource$Type<(any)>)[]): $Resources
public "merge"(resources: $Resources$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public static "emptyResource"(): $Resources
/**
 * 
 * @deprecated
 */
public static "defaultResource"(): $Resources
public static "fromNBT"(tag: $CompoundTag$Type): $Resources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resources$Type = ($Resources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resources_ = $Resources$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourceBorderTexture$NineSliceMode, $ResourceBorderTexture$NineSliceMode$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture$NineSliceMode"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceBorderTexture extends $ResourceTexture {
static readonly "BORDERED_BACKGROUND": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_BLUE": $ResourceBorderTexture
static readonly "BUTTON_COMMON": $ResourceBorderTexture
static readonly "BAR": $ResourceBorderTexture
static readonly "SELECTED": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_PRESSED": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_NORMAL": $ResourceBorderTexture
static readonly "VANILLA_BUTTON_SELECTED": $ResourceBorderTexture
 "borderSize": $Size
 "imageSize": $Size
 "mode": $ResourceBorderTexture$NineSliceMode
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer, sliceMode: $ResourceBorderTexture$NineSliceMode$Type)
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer)

public "getMode"(): $ResourceBorderTexture$NineSliceMode
public "setBorderSize"(width: integer, height: integer): $ResourceBorderTexture
public "setImageSize"(width: integer, height: integer): $ResourceBorderTexture
public "setSliceMode"(mode: $ResourceBorderTexture$NineSliceMode$Type): $ResourceBorderTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "mode"(): $ResourceBorderTexture$NineSliceMode
set "sliceMode"(value: $ResourceBorderTexture$NineSliceMode$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBorderTexture$Type = ($ResourceBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBorderTexture_ = $ResourceBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$PositionedRect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $PositionedRect {
readonly "position": $Position
readonly "size": $Size

constructor(x: integer, y: integer, width: integer, height: integer)
constructor(position: $Position$Type, size: $Size$Type)
constructor(pos1: $Position$Type, pos2: $Position$Type)

public "getPosition"(): $Position
public "intersects"(other: $Position$Type): boolean
public "intersects"(other: $PositionedRect$Type): boolean
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Size
get "position"(): $Position
get "size"(): $Size
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRect$Type = ($PositionedRect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedRect_ = $PositionedRect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ServerPlayerAccessor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $ServerPlayerAccessor {

 "callNextContainerCounter"(): void
 "callInitMenu"(arg0: $AbstractContainerMenu$Type): void
 "getContainerCounter"(): integer
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$Type = ($ServerPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$ILanguageDefinition" {
import {$Matcher, $Matcher$Type} from "packages/java/util/regex/$Matcher"
import {$TokenType, $TokenType$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$TokenType"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"

export interface $ILanguageDefinition {

 "getName"(): string
 "getTokenType"(arg0: $Matcher$Type): $TokenType
 "getTokenPattern"(): $Pattern
 "shouldIncreaseIndentation"(arg0: string): boolean
}

export namespace $ILanguageDefinition {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILanguageDefinition$Type = ($ILanguageDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILanguageDefinition_ = $ILanguageDefinition$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/block/$RendererBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $RendererBlock extends $Block implements $EntityBlock, $IBlockRendererProvider {
static readonly "BLOCK": $RendererBlock
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getRenderer"(state: $BlockState$Type): $IRenderer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
public "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
public static "getBaseOf"(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererBlock$Type = ($RendererBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererBlock_ = $RendererBlock$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AnnotationDetector$Wrapper<A extends $Annotation, T> extends $Record {

constructor(annotation: A, clazz: $Class$Type<(any)>, creator: $Supplier$Type<(T)>)

public "clazz"(): $Class<(any)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotation"(): A
public "creator"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationDetector$Wrapper$Type<A, T> = ($AnnotationDetector$Wrapper<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationDetector$Wrapper_<A, T> = $AnnotationDetector$Wrapper$Type<(A), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"

export interface $IUIHolder {

 "isInvalid"(): boolean
 "markAsDirty"(): void
 "isRemote"(): boolean
 "createUI"(arg0: $Player$Type): $ModularUI
}

export namespace $IUIHolder {
const EMPTY: $IUIHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$Type = ($IUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder_ = $IUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeBuilder, $TreeBuilder$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $TreeBuilder$Menu extends $TreeBuilder<($Tuple<($IGuiTexture), (string)>), ($Runnable)> {
static "CROSS_LINE": $Tuple<($IGuiTexture), (string)>


public "branch"(name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public "branch"(icon: $IGuiTexture$Type, name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public static "getName"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): string
public "remove"(name: string): $TreeBuilder$Menu
public static "start"(): $TreeBuilder$Menu
public static "handle"(node: $TreeNode$Type<($Tuple$Type<($IGuiTexture$Type), (string)>), ($Runnable$Type)>): void
public static "isCrossLine"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): boolean
public static "getIcon"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): $IGuiTexture
public "leaf"(name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$Type, name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "crossLine"(): $TreeBuilder$Menu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Menu$Type = ($TreeBuilder$Menu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder$Menu_ = $TreeBuilder$Menu$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Rect, $Rect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Rect"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Align, $Align$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Widget {

constructor(selfPosition: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "setSize"(size: $Size$Type): void
public "setSize"(width: integer, height: integer): void
public "getPosition"(): $Position
public "getParent"(): $WidgetGroup
public "getId"(): string
public "getSize"(): $Size
public "isActive"(): boolean
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "playButtonClickSound"(): void
public "getAnimation"(): $Animation
public "getBackgroundTexture"(): $IGuiTexture
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "getTooltipTexts"(): $List<($Component)>
public "getParentPosition"(): $Position
public "setBackground"(...backgroundTexture: ($IGuiTexture$Type)[]): $Widget
public "getPositionY"(): integer
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "getSizeHeight"(): integer
public "getSizeWidth"(): integer
public "isMouseDown"(button: integer): boolean
public static "isShiftDown"(): boolean
public "setDraggingProvider"<T>(draggingProvider: $Supplier$Type<(T)>, draggingRenderer: $BiFunction$Type<(T), ($Position$Type), ($IGuiTexture$Type)>): $Widget
public "setParentPosition"(parentPosition: $Position$Type): void
public "setSelfPosition"(x: integer, y: integer): void
public "setSelfPosition"(selfPosition: $Position$Type): void
public "setSelfPositionY"(y: integer): void
public "setDraggingConsumer"(draggingAccept: $Predicate$Type<(any)>, draggingIn: $Consumer$Type<(any)>, draggingOut: $Consumer$Type<(any)>, draggingSuccess: $Consumer$Type<(any)>): $Widget
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $Widget
public "appendHoverTooltips"(tooltipText: $List$Type<($Component$Type)>): $Widget
public "appendHoverTooltips"(...tooltipText: (string)[]): $Widget
public "appendHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "getSelfPosition"(): $Position
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "setDrawBackgroundWhenHover"(drawBackgroundWhenHover: boolean): $Widget
public "setSelfPositionX"(x: integer): void
public "setClientSideWidget"(): $Widget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "addSelfPosition"(addX: integer, addY: integer): $Position
public "getSelfPositionY"(): integer
public "getSelfPositionX"(): integer
public "setUiAccess"(uiAccess: $WidgetUIAccess$Type): $Widget
public "detectAndSendChanges"(): void
public "setSizeHeight"(height: integer): void
public "setSizeWidth"(width: integer): void
public "getPositionX"(): integer
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isClientSideWidget"(): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "toRectangleBox"(): $Rect2i
public "setId"(id: string): $Widget
public "setActive"(isActive: boolean): $Widget
public "isInitialized"(): boolean
public "setVisible"(isVisible: boolean): $Widget
public "animation"(animation: $Animation$Type): void
public "setAlign"(align: $Align$Type): $Widget
public static "isKeyDown"(keyCode: integer): boolean
public static "isCtrlDown"(): boolean
public "isVisible"(): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "isRemote"(): boolean
public "setFocus"(focus: boolean): void
public static "isAltDown"(): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "isFocus"(): boolean
public "inAnimate"(): boolean
public "setGui"(gui: $ModularUI$Type): void
public "isParent"(widgetGroup: $WidgetGroup$Type): boolean
public "getRect"(): $Rect
public "initWidget"(): void
public "getGui"(): $ModularUI
public "getAlign"(): $Align
public "getOverlay"(): $IGuiTexture
public "setOverlay"(overlay: $IGuiTexture$Type): $Widget
set "size"(value: $Size$Type)
get "position"(): $Position
get "parent"(): $WidgetGroup
get "id"(): string
get "size"(): $Size
get "active"(): boolean
get "backgroundTexture"(): $IGuiTexture
get "tooltipTexts"(): $List<($Component)>
get "parentPosition"(): $Position
set "background"(value: ($IGuiTexture$Type)[])
get "positionY"(): integer
get "sizeHeight"(): integer
get "sizeWidth"(): integer
get "shiftDown"(): boolean
set "parentPosition"(value: $Position$Type)
set "selfPosition"(value: $Position$Type)
set "selfPositionY"(value: integer)
set "hoverTexture"(value: ($IGuiTexture$Type)[])
get "selfPosition"(): $Position
set "hoverTooltips"(value: ($Component$Type)[])
set "drawBackgroundWhenHover"(value: boolean)
set "selfPositionX"(value: integer)
get "selfPositionY"(): integer
get "selfPositionX"(): integer
set "uiAccess"(value: $WidgetUIAccess$Type)
set "sizeHeight"(value: integer)
set "sizeWidth"(value: integer)
get "positionX"(): integer
get "clientSideWidget"(): boolean
set "id"(value: string)
set "active"(value: boolean)
get "initialized"(): boolean
set "visible"(value: boolean)
set "align"(value: $Align$Type)
get "ctrlDown"(): boolean
get "visible"(): boolean
get "remote"(): boolean
set "focus"(value: boolean)
get "altDown"(): boolean
get "focus"(): boolean
set "gui"(value: $ModularUI$Type)
get "rect"(): $Rect
get "gui"(): $ModularUI
get "align"(): $Align
get "overlay"(): $IGuiTexture
set "overlay"(value: $IGuiTexture$Type)
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
declare module "packages/com/lowdragmc/lowdraglib/networking/$IPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export interface $IPacket {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "execute"(handler: $IHandlerContext$Type): void
}

export namespace $IPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacket$Type = ($IPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacket_ = $IPacket$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ItemStackTexture extends $TransformTexture {
 "items": ($ItemStack)[]

constructor()
constructor(...itemStacks: ($ItemStack$Type)[])
constructor(...items: ($Item$Type)[])

public "getColor"(): integer
public "updateTick"(): void
public "setItems"(...itemStack: ($ItemStack$Type)[]): $ItemStackTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "color"(): integer
set "items"(value: ($ItemStack$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTexture$Type = ($ItemStackTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTexture_ = $ItemStackTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator" {
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IConfiguratorContainer, $IConfiguratorContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $Configurator extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor()

public "getWidth"(): integer
public "getName"(): string
public "init"(width: integer): void
/**
 * 
 * @deprecated
 */
public "getConfigPanel"(): $ConfigPanel
public "getNameWidget"(): $LabelWidget
public "getLeftWidth"(): integer
public "notifyChanges"(source: $Configurator$Type): void
public "notifyChanges"(): void
public "getConfiguratorContainer"(): $IConfiguratorContainer
public "getRightWidth"(): integer
public "computeHeight"(): void
public "setConfiguratorContainer"(configuratorContainer: $IConfiguratorContainer$Type): void
/**
 * 
 * @deprecated
 */
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "computeLayout"(): void
public "getListeners"(): $List<($Consumer<($Configurator)>)>
public "addListener"(listener: $Consumer$Type<($Configurator$Type)>): void
/**
 * 
 * @deprecated
 */
public "getTab"(): $ConfigPanel$Tab
public "setTips"(...tips: (string)[]): void
public "isInit"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "width"(): integer
get "name"(): string
get "configPanel"(): $ConfigPanel
get "nameWidget"(): $LabelWidget
get "leftWidth"(): integer
get "configuratorContainer"(): $IConfiguratorContainer
get "rightWidth"(): integer
set "configuratorContainer"(value: $IConfiguratorContainer$Type)
get "listeners"(): $List<($Consumer<($Configurator)>)>
get "tab"(): $ConfigPanel$Tab
set "tips"(value: (string)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configurator$Type = ($Configurator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configurator_ = $Configurator$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/layout/$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Align extends $Enum<($Align)> {
static readonly "NONE": $Align
static readonly "TOP_LEFT": $Align
static readonly "TOP_CENTER": $Align
static readonly "TOP_RIGHT": $Align
static readonly "LEFT_CENTER": $Align
static readonly "CENTER": $Align
static readonly "RIGHT_CENTER": $Align
static readonly "BOTTOM_LEFT": $Align
static readonly "BOTTOM_CENTER": $Align
static readonly "BOTTOM_RIGHT": $Align


public static "values"(): ($Align)[]
public static "valueOf"(name: string): $Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Align$Type = (("top_right") | ("right_center") | ("top_center") | ("center") | ("top_left") | ("left_center") | ("bottom_right") | ("none") | ("bottom_left") | ("bottom_center")) | ($Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Align_ = $Align$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$BlockUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $UIEvents$BlockUIEventJS extends $EventJS {
 "level": $Level
 "pos": $BlockPos
 "block": $BlockContainerJS
 "player": $Player

constructor(level: $Level$Type, pos: $BlockPos$Type, block: $BlockContainerJS$Type, player: $Player$Type)

public "getBlock"(): $BlockContainerJS
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
get "block"(): $BlockContainerJS
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$BlockUIEventJS$Type = ($UIEvents$BlockUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$BlockUIEventJS_ = $UIEvents$BlockUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$UIEvents$ItemUIEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $UIEvents$ItemUIEventJS extends $EventJS {
 "player": $Player
 "hand": $InteractionHand
 "held": $ItemStack

constructor(player: $Player$Type, hand: $InteractionHand$Type, held: $ItemStack$Type)

public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
public "getHeld"(): $ItemStack
get "player"(): $Player
get "hand"(): $InteractionHand
get "held"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIEvents$ItemUIEventJS$Type = ($UIEvents$ItemUIEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIEvents$ItemUIEventJS_ = $UIEvents$ItemUIEventJS$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemUIJSFactory$ItemAccess, $ItemUIJSFactory$ItemAccess$Type} from "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UIFactory, $UIFactory$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUIJSFactory extends $UIFactory<($ItemUIJSFactory$ItemAccess)> {
static readonly "INSTANCE": $ItemUIJSFactory
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>


public "openUI"(player: $Player$Type, hand: $InteractionHand$Type, uiName: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$Type = ($ItemUIJSFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory_ = $ItemUIJSFactory$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ProgressWidget extends $Widget implements $IConfigurableWidget {
static readonly "JEIProgress": $DoubleSupplier
 "progressSupplier": $DoubleSupplier

constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, progressBar: $ProgressTexture$Type)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, fullImage: $ResourceTexture$Type)
constructor()

public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "detectAndSendChanges"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "handleDragging"(dragging: any): boolean
public "setProgressTexture"(progressTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressWidget
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$Type): $ProgressWidget
public "setDynamicHoverTips"(dynamicHoverTips: $Function$Type<(double), (string)>): $ProgressWidget
public "setOverlayTexture"(overlayTexture: $IGuiTexture$Type): $ProgressWidget
public "getLastProgressValue"(): double
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressWidget
public "canDragIn"(dragging: any): boolean
public "initWidget"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "progressTexture"(value: $IGuiTexture$Type)
set "progressSupplier"(value: $DoubleSupplier$Type)
set "dynamicHoverTips"(value: $Function$Type<(double), (string)>)
set "overlayTexture"(value: $IGuiTexture$Type)
get "lastProgressValue"(): double
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressWidget$Type = ($ProgressWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressWidget_ = $ProgressWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $UniformCache {

constructor(programId: integer)

public "invalidate"(): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$Type): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniform1F"(location: string, v0: float): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "fillRGBAColor"(location: string, color: integer): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$Type, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformBoolean"(location: string, value: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformCache$Type = ($UniformCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniformCache_ = $UniformCache$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "getY"(): integer
 "getX"(): integer
 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Transform extends $Animation {

constructor()

public "duration"(duration: long): $Transform
public "pre"(graphics: $GuiGraphics$Type): void
public "setScale"(scale: float): $Transform
public "post"(graphics: $GuiGraphics$Type): void
public "scale"(scale: float): $Transform
public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "offset"(xOffset: integer, yOffset: integer): $Transform
public "setIn"(): $Animation
public "setOut"(): $Animation
public "delay"(delay: long): $Transform
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "isIn"(): boolean
public "ease"(ease: $IEase$Type): $Transform
public "isOut"(): boolean
get "in"(): boolean
get "out"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$UIProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $UIProject implements $IProject {
 "resources": $Resources
 "root": $WidgetGroup

constructor(tag: $CompoundTag$Type)
constructor(resources: $Resources$Type, root: $WidgetGroup$Type)

public "getResources"(): $Resources
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(tag: $CompoundTag$Type): void
public static "loadUIFromTag"(tag: $CompoundTag$Type): $Supplier<($WidgetGroup)>
public static "loadUIFromFile"(location: $ResourceLocation$Type): $Supplier<($WidgetGroup)>
public "onLoad"(editor: $Editor$Type): void
public "getSuffix"(): string
public "loadProject"(file: $File$Type): $IProject
public "getProjectWorkSpace"(editor: $Editor$Type): $File
public "saveProject"(file: $File$Type): void
public "loadResources"(tag: $CompoundTag$Type): $Resources
public "onClosed"(editor: $Editor$Type): void
public "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
get "resources"(): $Resources
get "suffix"(): string
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIProject$Type = ($UIProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIProject_ = $UIProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $GuiTextureGroup extends $TransformTexture {
 "inflateWidth": integer
 "inflateHeight": integer
 "textures": ($IGuiTexture)[]

constructor()
constructor(...textures: ($IGuiTexture$Type)[])

public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setTextures"(...textures: ($IGuiTexture$Type)[]): $GuiTextureGroup
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "textures"(value: ($IGuiTexture$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiTextureGroup$Type = ($GuiTextureGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiTextureGroup_ = $GuiTextureGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider" {
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IBlockRendererProvider {

 "getModelState"(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
 "getRenderer"(arg0: $BlockState$Type): $IRenderer
 "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer

(world: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ModelState
}

export namespace $IBlockRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockRendererProvider$Type = ($IBlockRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockRendererProvider_ = $IBlockRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ProgressTexture$FillDirection extends $Enum<($ProgressTexture$FillDirection)> {
static readonly "LEFT_TO_RIGHT": $ProgressTexture$FillDirection
static readonly "RIGHT_TO_LEFT": $ProgressTexture$FillDirection
static readonly "UP_TO_DOWN": $ProgressTexture$FillDirection
static readonly "DOWN_TO_UP": $ProgressTexture$FillDirection
static readonly "ALWAYS_FULL": $ProgressTexture$FillDirection


public static "values"(): ($ProgressTexture$FillDirection)[]
public static "valueOf"(name: string): $ProgressTexture$FillDirection
public "getDrawnWidth"(progress: double): double
public "getDrawnHeight"(progress: double): double
public "getDrawnU"(progress: double): double
public "getDrawnV"(progress: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$FillDirection$Type = (("always_full") | ("right_to_left") | ("up_to_down") | ("left_to_right") | ("down_to_up")) | ($ProgressTexture$FillDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture$FillDirection_ = $ProgressTexture$FillDirection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"

export class $ProgressTexture extends $TransformTexture {

constructor()
constructor(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type)

public "getProgress"(): double
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "getFillDirection"(): $ProgressTexture$FillDirection
public "getEmptyBarArea"(): $IGuiTexture
public "getFilledBarArea"(): $IGuiTexture
public "isSmoothProgress"(): boolean
public "setProgress"(progress: double): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressTexture
public "setTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressTexture
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
get "progress"(): double
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "fillDirection"(): $ProgressTexture$FillDirection
get "emptyBarArea"(): $IGuiTexture
get "filledBarArea"(): $IGuiTexture
get "smoothProgress"(): boolean
set "progress"(value: double)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$Type = ($ProgressTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture_ = $ProgressTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"

export interface $IFluidTransfer {

 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "getTankCapacity"(arg0: integer): long
 "createSnapshot"(): any
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
 "getTanks"(): integer
}

export namespace $IFluidTransfer {
const EMPTY: $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTransfer$Type = ($IFluidTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTransfer_ = $IFluidTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$LanguageDefinition" {
import {$Matcher, $Matcher$Type} from "packages/java/util/regex/$Matcher"
import {$TokenType, $TokenType$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$TokenType"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ILanguageDefinition, $ILanguageDefinition$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$ILanguageDefinition"

export class $LanguageDefinition implements $ILanguageDefinition {

constructor(name: string, typesInOrder: $List$Type<($TokenType$Type)>, indentations: $Set$Type<(string)>)

public "getName"(): string
public "getTokenType"(matcher: $Matcher$Type): $TokenType
public "compileTokenPattern"(): $LanguageDefinition
public "getTokenPattern"(): $Pattern
public "getTypesInOrder"(): $List<($TokenType)>
public "getIndentations"(): $Set<(string)>
public "shouldIncreaseIndentation"(trimmedLine: string): boolean
get "name"(): string
get "tokenPattern"(): $Pattern
get "typesInOrder"(): $List<($TokenType)>
get "indentations"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageDefinition$Type = ($LanguageDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanguageDefinition_ = $LanguageDefinition$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$WorldSceneRenderer, $WorldSceneRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BlockPosFace, $BlockPosFace$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SceneWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type, useFBO: boolean)
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type)

public "getRange"(): float
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "getRenderer"(): $WorldSceneRenderer
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>): $SceneWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "getParticleManager"(): $ParticleManager
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>): $SceneWidget
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $SceneWidget
public "createScene"(world: $Level$Type): void
public "createScene"(world: $Level$Type, useFBOSceneRenderer: boolean): void
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "useCacheBuffer"(): $SceneWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setOnSelected"(onSelected: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>): $SceneWidget
public "setDraggable"(draggable: boolean): $SceneWidget
public "isDraggable"(): boolean
public "setScalable"(scalable: boolean): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "getOnSelected"(): $BiConsumer<($BlockPos), ($Direction)>
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setAfterWorldRender"(afterWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "releaseCacheBuffer"(): void
public "needCompileCache"(): void
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$Type): void
public "getDummyWorld"(): $TrackedDummyWorld
public "setClearColor"(color: integer): $SceneWidget
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer, inner: integer): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer): void
public "setOrthoRange"(range: float): $SceneWidget
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "isRenderFacing"(): boolean
public "isRenderSelect"(): boolean
public "isIntractable"(): boolean
public "isHoverTips"(): boolean
public "getCurrentMouseX"(): integer
public "getCurrentMouseY"(): integer
public "getRotationYaw"(): float
public "getRotationPitch"(): float
public "getClickPosFace"(): $BlockPosFace
public "getHoverPosFace"(): $BlockPosFace
public "getSelectedPosFace"(): $BlockPosFace
public "getHoverItem"(): $ItemStack
public "isAutoReleased"(): boolean
public "getCenter"(): $Vector3f
public "isDragging"(): boolean
public "setGui"(gui: $ModularUI$Type): void
public "setCenter"(center: $Vector3f$Type): $SceneWidget
public "isUseCache"(): boolean
public "getCore"(): $Set<($BlockPos)>
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
public "camZoom"(): float
public "setZoom"(zoom: float): $SceneWidget
public "isScalable"(): boolean
public "getZoom"(): float
public "isUseOrtho"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "range"(): float
get "renderer"(): $WorldSceneRenderer
set "onAddedTooltips"(value: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>)
get "particleManager"(): $ParticleManager
set "renderedCore"(value: $Collection$Type<($BlockPos$Type)>)
set "renderSelect"(value: boolean)
set "renderFacing"(value: boolean)
set "onSelected"(value: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>)
set "draggable"(value: boolean)
get "draggable"(): boolean
set "scalable"(value: boolean)
set "intractable"(value: boolean)
get "onSelected"(): $BiConsumer<($BlockPos), ($Direction)>
set "beforeWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
get "dummyWorld"(): $TrackedDummyWorld
set "clearColor"(value: integer)
set "hoverTips"(value: boolean)
set "orthoRange"(value: float)
get "renderFacing"(): boolean
get "renderSelect"(): boolean
get "intractable"(): boolean
get "hoverTips"(): boolean
get "currentMouseX"(): integer
get "currentMouseY"(): integer
get "rotationYaw"(): float
get "rotationPitch"(): float
get "clickPosFace"(): $BlockPosFace
get "hoverPosFace"(): $BlockPosFace
get "selectedPosFace"(): $BlockPosFace
get "hoverItem"(): $ItemStack
get "autoReleased"(): boolean
get "center"(): $Vector3f
get "dragging"(): boolean
set "gui"(value: $ModularUI$Type)
set "center"(value: $Vector3f$Type)
get "useCache"(): boolean
get "core"(): $Set<($BlockPos)>
set "zoom"(value: float)
get "scalable"(): boolean
get "zoom"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneWidget$Type = ($SceneWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneWidget_ = $SceneWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $HsbColorWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setColor"(argb: integer): $HsbColorWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "detectAndSendChanges"(): void
public "setColorSupplier"(colorSupplier: $IntSupplier$Type): $HsbColorWidget
public "setOnChanged"(onChanged: $IntConsumer$Type): $HsbColorWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "isShowAlpha"(): boolean
public "setGap"(gap: integer): $HsbColorWidget
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "isShowRGB"(): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "color"(value: integer)
set "colorSupplier"(value: $IntSupplier$Type)
set "onChanged"(value: $IntConsumer$Type)
set "barWidth"(value: integer)
set "showAlpha"(value: boolean)
get "showAlpha"(): boolean
set "gap"(value: integer)
set "showRGB"(value: boolean)
get "showRGB"(): boolean
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HsbColorWidget$Type = ($HsbColorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HsbColorWidget_ = $HsbColorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DialogWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(parent: $WidgetGroup$Type, isClient: boolean)
constructor(x: integer, y: integer, width: integer, height: integer)

public "close"(): void
public static "suffixFilter"(...suffixes: (string)[]): $Predicate<($TreeNode<($File), ($File)>)>
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showFileDialog"(parent: $WidgetGroup$Type, title: string, dir: $File$Type, isSelector: boolean, valid: $Predicate$Type<($TreeNode$Type<($File$Type), ($File$Type)>)>, result: $Consumer$Type<($File$Type)>): $DialogWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public static "createButton"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$Type): $ButtonWidget
public "setClickClose"(clickClose: boolean): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public static "showStringEditorDialog"(parent: $WidgetGroup$Type, title: string, initial: string, predicate: $Predicate$Type<(string)>, result: $Consumer$Type<(string)>): $DialogWidget
public "setOnClosed"(onClosed: $Runnable$Type): $DialogWidget
public "setParentInVisible"(): $DialogWidget
public static "createTextField"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public static "showItemSelector"(parent: $WidgetGroup$Type, title: string, init: $ItemStack$Type, itemConsumer: $Consumer$Type<($Item$Type)>): $DialogWidget
public static "createContainer"(dialog: $DialogWidget$Type, x: integer, y: integer, width: integer, height: integer, titleText: string): $WidgetGroup
public static "createContainer"(dialog: $DialogWidget$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public static "createText"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "clickClose"(value: boolean)
set "onClosed"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialogWidget$Type = ($DialogWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialogWidget_ = $DialogWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DraggableScrollableWidgetGroup$ISelected {

 "onUnSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onSelected"(): void

(): void
}

export namespace $DraggableScrollableWidgetGroup$ISelected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ISelected$Type = ($DraggableScrollableWidgetGroup$ISelected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ISelected_ = $DraggableScrollableWidgetGroup$ISelected$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextTexture$TextType extends $Enum<($TextTexture$TextType)> {
static readonly "NORMAL": $TextTexture$TextType
static readonly "HIDE": $TextTexture$TextType
static readonly "OVERFLOW": $TextTexture$TextType
static readonly "POP_OUT": $TextTexture$TextType
static readonly "POP_OUT_BG": $TextTexture$TextType
static readonly "ROLL": $TextTexture$TextType
static readonly "ROLL_ALWAYS": $TextTexture$TextType
static readonly "LEFT": $TextTexture$TextType
static readonly "RIGHT": $TextTexture$TextType
static readonly "RIGHT_OVERFLOW": $TextTexture$TextType
static readonly "RIGHT_POP_OUT": $TextTexture$TextType
static readonly "RIGHT_POP_OUT_BG": $TextTexture$TextType
static readonly "RIGHT_HIDE": $TextTexture$TextType
static readonly "LEFT_HIDE": $TextTexture$TextType
static readonly "LEFT_ROLL": $TextTexture$TextType
static readonly "LEFT_ROLL_ALWAYS": $TextTexture$TextType
static readonly "LEFT_OVERFLOW": $TextTexture$TextType
static readonly "LEFT_POP_OUT": $TextTexture$TextType
static readonly "LEFT_POP_OUT_BG": $TextTexture$TextType
readonly "customBackground": boolean


public static "values"(): ($TextTexture$TextType)[]
public static "valueOf"(name: string): $TextTexture$TextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$TextType$Type = (("left_overflow") | ("normal") | ("right_pop_out") | ("right_hide") | ("right_overflow") | ("left_roll") | ("roll") | ("left_roll_always") | ("left_pop_out_bg") | ("right") | ("hide") | ("overflow") | ("left_hide") | ("left_pop_out") | ("left") | ("pop_out_bg") | ("pop_out") | ("roll_always") | ("right_pop_out_bg")) | ($TextTexture$TextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture$TextType_ = $TextTexture$TextType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"

export class $TabButton extends $SwitchWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer)

public "setContainer"(container: $TabContainer$Type): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $TabButton
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $TabButton
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $TabButton
public "onPressed"(clickData: $ClickData$Type, isPressed: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "container"(value: $TabContainer$Type)
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "baseTexture"(value: ($IGuiTexture$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabButton$Type = ($TabButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabButton_ = $TabButton$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ModelBakeryAccessor" {
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelBakeryAccessor {

 "invokeGetModel"(arg0: $ResourceLocation$Type): $UnbakedModel
 "getTopLevelModels"(): $Map<($ResourceLocation), ($UnbakedModel)>
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIngredientSlot {

 "getXEIIngredientOverMouse"(arg0: double, arg1: double): any

(arg0: double, arg1: double): any
}

export namespace $IIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSlot$Type = ($IIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSlot_ = $IIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $LDLRegister extends $Annotation {

 "name"(): string
 "priority"(): integer
 "group"(): string
 "modID"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $LDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LDLRegister$Type = ($LDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LDLRegister_ = $LDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ParticleEngineAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngineAccessor {

 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Cursor" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Cursor extends $Record {

constructor(line: integer, column: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "line"(): integer
public "column"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cursor$Type = ($Cursor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cursor_ = $Cursor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourcePanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clear"(): void
public "getResources"(): $Resources
public "loadResource"(resources: $Resources$Type, merge: boolean): void
public "rebuildResource"(resourceName: string): void
public "getContainerMap"(): $Map<($Resource), ($ResourceContainer)>
public "hide"(): void
public "show"(): void
public "setGui"(gui: $ModularUI$Type): void
public "initWidget"(): void
public "isShow"(): boolean
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resources"(): $Resources
get "containerMap"(): $Map<($Resource), ($ResourceContainer)>
set "gui"(value: $ModularUI$Type)
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcePanel$Type = ($ResourcePanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcePanel_ = $ResourcePanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$UIFactory" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UIFactory<T> {
readonly "uiFactoryId": $ResourceLocation
static readonly "FACTORIES": $Map<($ResourceLocation), ($UIFactory<(any)>)>

constructor(uiFactoryId: $ResourceLocation$Type)

public static "register"(factory: $UIFactory$Type<(any)>): void
public "initClientUI"(serializedHolder: $FriendlyByteBuf$Type, windowId: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIFactory$Type<T> = ($UIFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIFactory_<T> = $UIFactory$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TabContainer extends $WidgetGroup {
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "clearAllWidgets"(): void
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "removeTab"(tabButton: $TabButton$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "switchTag"(tabWidget: $WidgetGroup$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabContainer$Type = ($TabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabContainer_ = $TabContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$DraggableScrollableWidgetGroup$ScrollWheelDirection, $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "setSize"(size: $Size$Type): void
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "clearAllWidgets"(): void
public "initTemplate"(): void
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "setBackground"(background: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setSelected"(widget: $Widget$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "removeWidget"(widget: $Widget$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
public "setYBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollYOffset"(scrollYOffset: integer): void
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "setXBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "getWidgetBottomHeight"(): integer
public "setScrollXOffset"(scrollXOffset: integer): void
public "getScrollXOffset"(): integer
public "getScrollYOffset"(): integer
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "isDraggable"(): boolean
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "isScrollable"(): boolean
public "getScrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
public "setScrollWheelDirection"(scrollWheelDirection: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type): $DraggableScrollableWidgetGroup
public "isUseScissor"(): boolean
public "setUseScissor"(useScissor: boolean): $DraggableScrollableWidgetGroup
public "getMoveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "computeMax"(): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
set "background"(value: $IGuiTexture$Type)
set "selected"(value: $Widget$Type)
set "yScrollBarWidth"(value: integer)
set "scrollYOffset"(value: integer)
set "xScrollBarHeight"(value: integer)
get "widgetBottomHeight"(): integer
set "scrollXOffset"(value: integer)
get "scrollXOffset"(): integer
get "scrollYOffset"(): integer
set "draggable"(value: boolean)
get "draggable"(): boolean
set "scrollable"(value: boolean)
get "scrollable"(): boolean
get "scrollWheelDirection"(): $DraggableScrollableWidgetGroup$ScrollWheelDirection
set "scrollWheelDirection"(value: $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type)
get "useScissor"(): boolean
set "useScissor"(value: boolean)
get "moveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$Type = ($DraggableScrollableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup_ = $DraggableScrollableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/kjs/ui/$ItemUIJSFactory$ItemAccess" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $ItemUIJSFactory$ItemAccess extends $Record {

constructor(hand: $InteractionHand$Type, uiName: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "hand"(): $InteractionHand
public "uiName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUIJSFactory$ItemAccess$Type = ($ItemUIJSFactory$ItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUIJSFactory$ItemAccess_ = $ItemUIJSFactory$ItemAccess$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/forge/$ItemTransferHelperImpl" {
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemTransferHelper, $ItemTransferHelper$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$ItemTransferHelper"

export class $ItemTransferHelperImpl extends $ItemTransferHelper {

constructor()

public static "toItemTransfer"(handler: $IItemHandler$Type): $IItemTransfer
public static "getItemTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IItemTransfer
public static "toItemHandler"(itemTransfer: $IItemTransfer$Type): $IItemHandler
public static "insertToEmpty"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertToEmpty"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "exportToTarget"(source: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IItemTransfer$Type, maxAmount: integer, predicate: $Predicate$Type<($ItemStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "insertItem"(handler: $IItemHandler$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "insertItem"(handler: $IItemTransfer$Type, stack: $ItemStack$Type, simulate: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransferHelperImpl$Type = ($ItemTransferHelperImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransferHelperImpl_ = $ItemTransferHelperImpl$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TextTexture$TextType, $TextTexture$TextType$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextTexture extends $TransformTexture {
 "text": string
 "color": integer
 "backgroundTexture": $IGuiTexture
 "backgroundColor": integer
 "inflateBackgroundX": integer
 "inflateBackgroundY": integer
 "width": integer
 "rollSpeed": float
 "dropShadow": boolean
 "type": $TextTexture$TextType
 "supplier": $Supplier<(string)>

constructor()
constructor(text: string, color: integer)
constructor(text: string)
constructor(text: $Supplier$Type<(string)>)
constructor(text: string, backgroundTexture: $IGuiTexture$Type)

public "setType"(type: $TextTexture$TextType$Type): $TextTexture
public "getBackgroundTexture"(): $IGuiTexture
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $TextTexture
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "setSupplier"(supplier: $Supplier$Type<(string)>): $TextTexture
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setRollSpeed"(rollSpeed: float): void
public "setInflateBackgroundY"(inflateBackground: integer): $TextTexture
public "setInflateBackgroundY"(inflateBackgroundX: integer, inflateBackgroundY: integer): $TextTexture
public "setBackgroundColor"(color: integer): $TextTexture
public "getLines"(): integer
public "setWidth"(width: integer): $TextTexture
public "updateTick"(): void
public "updateText"(text: string): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "type"(value: $TextTexture$TextType$Type)
get "backgroundTexture"(): $IGuiTexture
set "backgroundTexture"(value: $IGuiTexture$Type)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "supplier"(value: $Supplier$Type<(string)>)
set "dropShadow"(value: boolean)
set "rollSpeed"(value: float)
set "inflateBackgroundY"(value: integer)
set "backgroundColor"(value: integer)
get "lines"(): integer
set "width"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$Type = ($TextTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture_ = $TextTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextBoxWidget extends $Widget implements $IConfigurableWidget {
readonly "content": $List<(string)>
 "space": integer
 "fontSize": integer
 "fontColor": integer
 "isShadow": boolean
 "isCenter": boolean

constructor()
constructor(x: integer, y: integer, width: integer, content: $List$Type<(string)>)

public "setSize"(size: $Size$Type): void
public "setShadow"(shadow: boolean): $TextBoxWidget
public "initTemplate"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "handleDragging"(dragging: any): boolean
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "getMaxContentWidth"(): integer
public "setContent"(content: $List$Type<(string)>): $TextBoxWidget
public "setSpace"(space: integer): $TextBoxWidget
public "setCenter"(center: boolean): $TextBoxWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "size"(value: $Size$Type)
set "shadow"(value: boolean)
set "fontColor"(value: integer)
set "fontSize"(value: integer)
get "maxContentWidth"(): integer
set "content"(value: $List$Type<(string)>)
set "space"(value: integer)
set "center"(value: boolean)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBoxWidget$Type = ($TextBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBoxWidget_ = $TextBoxWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ScrollWheelDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DraggableScrollableWidgetGroup$ScrollWheelDirection extends $Enum<($DraggableScrollableWidgetGroup$ScrollWheelDirection)> {
static readonly "VERTICAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection
static readonly "HORIZONTAL": $DraggableScrollableWidgetGroup$ScrollWheelDirection


public static "values"(): ($DraggableScrollableWidgetGroup$ScrollWheelDirection)[]
public static "valueOf"(name: string): $DraggableScrollableWidgetGroup$ScrollWheelDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type = (("horizontal") | ("vertical")) | ($DraggableScrollableWidgetGroup$ScrollWheelDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ScrollWheelDirection_ = $DraggableScrollableWidgetGroup$ScrollWheelDirection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$NeighborUpdater, $NeighborUpdater$Type} from "packages/net/minecraft/world/level/redstone/$NeighborUpdater"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$WritableLevelData, $WritableLevelData$Type} from "packages/net/minecraft/world/level/storage/$WritableLevelData"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $DummyWorld extends $Level {
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
readonly "neighborUpdater": $NeighborUpdater
 "randValue": integer
readonly "addend": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "levelData": $WritableLevelData
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(level: $Level$Type)

public "getParticleManager"(): $ParticleManager
public "getAsClientWorld"(): $Supplier<($ClientLevel)>
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "getLevel"(): $Level
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public "getChunkSource"(): $ChunkSource
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getBiome"(pPos: $BlockPos$Type): $Holder<($Biome)>
public "gameEvent"(pEntity: $Entity$Type, pEvent: $GameEvent$Type, pPos: $BlockPos$Type): void
public "getBrightness"(pLightType: $LightLayer$Type, pBlockPos: $BlockPos$Type): integer
public "getScoreboard"(): $Scoreboard
public "getRecipeManager"(): $RecipeManager
public "getBiomeManager"(): $BiomeManager
public "registryAccess"(): $RegistryAccess
public "players"(): $List<(any)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(event: $GameEvent$Type, position: $Vec3$Type, context: $GameEvent$Context$Type): void
public "sendBlockUpdated"(pos: $BlockPos$Type, oldState: $BlockState$Type, newState: $BlockState$Type, flags: integer): void
public "getLightEngine"(): $LevelLightEngine
public "playSound"(pPlayer: $Player$Type, pX: double, pY: double, pZ: double, pSound: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, sound: $Holder$Type<($SoundEvent$Type)>, source: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, entity: $Entity$Type, sound: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pEntity: $Entity$Type, pEvent: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "addParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addParticle"(particleData: $ParticleOptions$Type, forceAlwaysRender: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, ignoreRange: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "gatherChunkSourceStats"(): string
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "isLoaded"(p_195588_1_: $BlockPos$Type): boolean
public "getEntity"(id: integer): $Entity
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "getMapData"(mapName: string): $MapItemSavedData
public "setMapData"(pMapId: string, pData: $MapItemSavedData$Type): void
public "getFreeMapId"(): integer
public "destroyBlockProgress"(breakerId: integer, pos: $BlockPos$Type, progress: integer): void
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getRawBrightness"(pos: $BlockPos$Type, p_226659_2_: integer): integer
public "getShade"(direction: $Direction$Type, b: boolean): float
public "levelEvent"(pPlayer: $Player$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): void
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "setBlock"(pPos: $BlockPos$Type, pState: $BlockState$Type, pFlags: integer, pRecursionLeft: integer): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "particleManager"(): $ParticleManager
get "asClientWorld"(): $Supplier<($ClientLevel)>
set "particleManager"(value: $ParticleManager$Type)
get "level"(): $Level
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
get "recipeManager"(): $RecipeManager
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$Type)
get "freeMapId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyWorld$Type = ($DummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyWorld_ = $DummyWorld$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TreeNode<T, K> {
readonly "dimension": integer

constructor(dimension: integer, key: T)

public "getChildren"(): $List<($TreeNode<(T), (K)>)>
public "getChild"(key: T): $TreeNode<(T), (K)>
public "toString"(): string
public "getKey"(): T
public "getContent"(): K
public "removeChild"(key: T): void
public "getOrCreateChild"(childKey: T): $TreeNode<(T), (K)>
public "createChild"(childKey: T): $TreeNode<(T), (K)>
public "addContent"(key: T, content: K): void
public "isLeaf"(): boolean
public "setValid"(valid: $Predicate$Type<($TreeNode$Type<(T), (K)>)>): $TreeNode<(T), (K)>
get "children"(): $List<($TreeNode<(T), (K)>)>
get "key"(): T
get "content"(): K
get "leaf"(): boolean
set "valid"(value: $Predicate$Type<($TreeNode$Type<(T), (K)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeNode$Type<T, K> = ($TreeNode<(T), (K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeNode_<T, K> = $TreeNode$Type<(T), (K)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor" {
import {$ToolPanel, $ToolPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel"
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$StringTabContainer, $StringTabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$MenuPanel, $MenuPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor$HistoryItem, $Editor$HistoryItem$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor$HistoryItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$MenuWidget, $MenuWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget"

export class $Editor extends $WidgetGroup implements $ILDLRegister {
static "INSTANCE": $Editor
readonly "widgets": $List<($Widget)>

constructor(modID: string)
constructor(workSpace: $File$Type)

public "setCurrentProjectFile"(currentProjectFile: $File$Type): void
public "getCurrentHistory"(): $Editor$HistoryItem
public "getResourcePanel"(): $ResourcePanel
public "getCopyType"(): string
public "getToolPanel"(): $ToolPanel
public "getFloatView"(): $WidgetGroup
public "loadProject"(project: $IProject$Type): void
public "initEditorViews"(): void
public "isWaitingForSave"(): boolean
public "saveAsProject"(result: $BooleanConsumer$Type): void
public "saveProject"(result: $BooleanConsumer$Type): void
public "askToSaveProject"(result: $BooleanConsumer$Type): void
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$Type<(any)>): void
public "jumpToHistory"(historyItem: $Editor$HistoryItem$Type): void
public "addAutoHistory"(name: string, source: any): void
public "addRawHistory"(name: string, date: $CompoundTag$Type): void
public "addRawHistory"(name: string, date: $CompoundTag$Type, source: any): void
public "getTabPages"(): $StringTabContainer
public "getConfigPanel"(): $ConfigPanel
public "getMenuPanel"(): $MenuPanel
public "isCurrentProjectSaved"(): boolean
public "getCurrentProject"(): $IProject
public "getWorkSpace"(): $File
public "getCurrentProjectFile"(): $File
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "getHistory"(): $List<($Editor$HistoryItem)>
public "openDialog"(dialog: $DialogWidget$Type): $DialogWidget
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$Type): void
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$Type<(T), (C)>): $MenuWidget<(T), (C)>
public "setCopy"(copyType: string, copied: any): void
public "getCopied"(): any
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setGui"(gui: $ModularUI$Type): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "currentProjectFile"(value: $File$Type)
get "currentHistory"(): $Editor$HistoryItem
get "resourcePanel"(): $ResourcePanel
get "copyType"(): string
get "toolPanel"(): $ToolPanel
get "floatView"(): $WidgetGroup
get "waitingForSave"(): boolean
get "tabPages"(): $StringTabContainer
get "configPanel"(): $ConfigPanel
get "menuPanel"(): $MenuPanel
get "currentProjectSaved"(): boolean
get "currentProject"(): $IProject
get "workSpace"(): $File
get "currentProjectFile"(): $File
get "history"(): $List<($Editor$HistoryItem)>
get "copied"(): any
set "gui"(value: $ModularUI$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$Type = ($Editor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor_ = $Editor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {

constructor(builder: $VertexConsumer$Type)

public "setColor"(r: float, g: float, b: float, a: float): void
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "uv"(u: float, v: float): $VertexConsumer
public "endVertex"(): void
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "unsetDefaultColor"(): void
public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "clearColor"(): void
public "clerOffset"(): void
public "setOffsetX"(offsetX: double): void
public "setOffsetY"(offsetY: double): void
public "setOffsetZ"(offsetZ: double): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "overlayCoords"(arg0: integer): $VertexConsumer
public "uv2"(arg0: integer): $VertexConsumer
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
set "offsetX"(value: double)
set "offsetY"(value: double)
set "offsetZ"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$VertexConsumerWrapper$Type = ($WorldSceneRenderer$VertexConsumerWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer$VertexConsumerWrapper_ = $WorldSceneRenderer$VertexConsumerWrapper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextFieldWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textSupplier: $Supplier$Type<(string)>, textResponder: $Consumer$Type<(string)>)

public "setCompoundTagOnly"(): $TextFieldWidget
public "setResourceLocationOnly"(): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "setCurrentString"(currentString: any): $TextFieldWidget
public "setBackground"(background: $IGuiTexture$Type): $TextFieldWidget
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "detectAndSendChanges"(): void
public "setNumbersOnlyLong"(minValue: long, maxValue: long): $TextFieldWidget
public "setNumbersOnlyFloat"(minValue: float, maxValue: float): $TextFieldWidget
public "setNumbersOnlyInt"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): $TextFieldWidget
public "setTextResponder"(textResponder: $Consumer$Type<(string)>): $TextFieldWidget
public "getCurrentString"(): string
public "getRawCurrentString"(): string
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "setValidator"(validator: $Function$Type<(string), (string)>): $TextFieldWidget
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "handleDragging"(dragging: any): boolean
public "widget"(): $Widget
public "canDragIn"(dragging: any): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "isLDLRegister"(): boolean
public "getTranslateKey"(): string
public "getRegisterUI"(): $LDLRegister
public "getChatComponent"(): $Component
set "bordered"(value: boolean)
set "currentString"(value: any)
set "background"(value: $IGuiTexture$Type)
set "wheelDur"(value: float)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textResponder"(value: $Consumer$Type<(string)>)
get "currentString"(): string
get "rawCurrentString"(): string
set "textColor"(value: integer)
set "maxStringLength"(value: integer)
set "validator"(value: $Function$Type<(string), (string)>)
get "lDLRegister"(): boolean
get "translateKey"(): string
get "registerUI"(): $LDLRegister
get "chatComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidget$Type = ($TextFieldWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextFieldWidget_ = $TextFieldWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CPacketUIClientAction, $CPacketUIClientAction$Type} from "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $ModularUIContainer extends $AbstractContainerMenu implements $WidgetUIAccess {
static readonly "MENUTYPE": $MenuType<($ModularUIContainer)>
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "remoteCarried": $ItemStack
 "menuType": $MenuType<(any)>
 "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(modularUI: $ModularUI$Type, windowID: integer)

public "getModularUI"(): $ModularUI
public "attemptMergeStack"(itemStack: $ItemStack$Type, fromContainer: boolean, simulate: boolean): boolean
public static "mergeItemStack"(itemStack: $ItemStack$Type, slots: $List$Type<($Slot$Type)>, simulate: boolean): boolean
public "writeClientAction"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "writeUpdateInfo"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "handleClientAction"(packet: $CPacketUIClientAction$Type): void
public "broadcastChanges"(): void
public "stillValid"(playerIn: $Player$Type): boolean
public "removed"(playerIn: $Player$Type): void
public "addSlot"(slotHandle: $Slot$Type): $Slot
public "addSlotListener"(pListener: $ContainerListener$Type): void
public "quickMoveStack"(player: $Player$Type, index: integer): $ItemStack
public "clicked"(slotId: integer, dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): void
public "canTakeItemForPickAll"(stack: $ItemStack$Type, slotIn: $Slot$Type): boolean
public "removeSlot"(slotHandle: $Slot$Type): void
get "modularUI"(): $ModularUI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIContainer$Type = ($ModularUIContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIContainer_ = $ModularUIContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidTransferHelper" {
import {$ItemStackTransfer, $ItemStackTransfer$Type} from "packages/com/lowdragmc/lowdraglib/misc/$ItemStackTransfer"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$FluidActionResult, $FluidActionResult$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidActionResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FluidTransferHelper {

constructor()

public static "getFluidContained"(container: $ItemStack$Type): $FluidStack
public static "tryPickUpFluid"(emptyContainer: $ItemStack$Type, playerIn: $Player$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): $FluidActionResult
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type): boolean
public static "tryPlaceFluid"(player: $Player$Type, level: $Level$Type, hand: $InteractionHand$Type, pos: $BlockPos$Type, container: $ItemStack$Type, resource: $FluidStack$Type): $FluidActionResult
public static "getFluidTransfer"(itemTransfer: $IItemTransfer$Type, slot: integer): $IFluidTransfer
/**
 * 
 * @deprecated
 */
public static "getFluidTransfer"(itemStack: $ItemStack$Type): $IFluidTransfer
public static "getFluidTransfer"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, screenHandler: $AbstractContainerMenu$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, hand: $InteractionHand$Type): $IFluidTransfer
public static "getFluidTransfer"(player: $Player$Type, slot: integer): $IFluidTransfer
public static "tryFillContainer"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "tryEmptyContainer"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, handler: $IFluidTransfer$Type): boolean
public static "interactWithFluidHandler"(player: $Player$Type, hand: $InteractionHand$Type, level: $Level$Type, pos: $BlockPos$Type, side: $Direction$Type): boolean
public static "destroyBlockOnFluidPlacement"(level: $Level$Type, pos: $BlockPos$Type): void
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, maxAmount: integer, doTransfer: boolean): $FluidStack
public static "tryFluidTransfer"(fluidDestination: $IFluidTransfer$Type, fluidSource: $IFluidTransfer$Type, resource: $FluidStack$Type, doTransfer: boolean): $FluidStack
public static "tryEmptyContainerAndStow"(container: $ItemStack$Type, fluidDestination: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doDrain: boolean): $FluidActionResult
public static "tryFillContainerAndStow"(container: $ItemStack$Type, fluidSource: $IFluidTransfer$Type, inventory: $IItemTransfer$Type, maxAmount: integer, player: $Player$Type, doFill: boolean): $FluidActionResult
public static "getContainerItem"(copyContainer: $ItemStackTransfer$Type, handler: $IFluidTransfer$Type): $ItemStack
public static "exportToTarget"(source: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "importToTarget"(target: $IFluidTransfer$Type, maxAmount: integer, filter: $Predicate$Type<($FluidStack$Type)>, level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): void
public static "transferFluids"(sourceHandler: $IFluidTransfer$Type, destHandler: $IFluidTransfer$Type, transferLimit: long, fluidFilter: $Predicate$Type<($FluidStack$Type)>): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTransferHelper$Type = ($FluidTransferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTransferHelper_ = $FluidTransferHelper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$FoldingManager" {
import {$Document, $Document$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$Document"
import {$FoldableRegion, $FoldableRegion$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/$FoldableRegion"
import {$List, $List$Type} from "packages/java/util/$List"

export class $FoldingManager {

constructor()

public "updateFoldingRegions"(document: $Document$Type): void
public "isLineVisible"(line: integer): boolean
public "toggleFold"(line: integer): void
public "getRegions"(): $List<($FoldableRegion)>
get "regions"(): $List<($FoldableRegion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoldingManager$Type = ($FoldingManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoldingManager_ = $FoldingManager$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$IConfiguratorContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConfiguratorContainer {

 "computeLayout"(): void

(): void
}

export namespace $IConfiguratorContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfiguratorContainer$Type = ($IConfiguratorContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfiguratorContainer_ = $IConfiguratorContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigPanel$Tab {
static readonly "WIDGET": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
readonly "icon": $ResourceTexture
readonly "tooltip": $Component
readonly "configurable": $Consumer<($ConfiguratorGroup)>


public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type): $ConfigPanel$Tab
public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type, configurable: $Consumer$Type<($ConfiguratorGroup$Type)>): $ConfigPanel$Tab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Tab$Type = ($ConfigPanel$Tab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel$Tab_ = $ConfigPanel$Tab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISceneEntityRenderHook {

 "applyEntity"(world: $Level$Type, entity: $Entity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneEntityRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneEntityRenderHook$Type = ($ISceneEntityRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneEntityRenderHook_ = $ISceneEntityRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$StyleManager" {
import {$TokenType, $TokenType$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/codeeditor/language/$TokenType"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StyleManager {
 "defaultStyle": $Style

constructor()

public "getDefaultStyle"(): $Style
public "getStyleForTokenType"(type: $TokenType$Type): $Style
public "setDefaultStyle"(defaultStyle: $Style$Type): void
public "getStyleMap"(): $Map<(string), ($Style)>
get "defaultStyle"(): $Style
set "defaultStyle"(value: $Style$Type)
get "styleMap"(): $Map<(string), ($Style)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StyleManager$Type = ($StyleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StyleManager_ = $StyleManager$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StringTabContainer extends $TabContainer {
static readonly "TAB_HEIGHT": integer
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clearAllWidgets"(): void
public "getTabIndex"(): integer
public "getTabIndex"(group: $WidgetGroup$Type): integer
public "switchTabIndex"(index: integer): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "calculateTabSize"(): void
public "getOnSelected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnDeselected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
public "getTabGroups"(): $List<($WidgetGroup)>
public "removeTab"(tabButton: $TabButton$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "addTab"(icon: $IGuiTexture$Type, name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type, onRemoved: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type): void
public "getEditor"(): $Editor
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "tabIndex"(): integer
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
get "onSelected"(): $Map<($WidgetGroup), ($Runnable)>
get "onDeselected"(): $Map<($WidgetGroup), ($Runnable)>
get "onChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
get "tabGroups"(): $List<($WidgetGroup)>
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringTabContainer$Type = ($StringTabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringTabContainer_ = $StringTabContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $BlockSelectorWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, isState: boolean)

public "getBlock"(): $BlockState
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$Type<($BlockState$Type)>): $BlockSelectorWidget
public "setBlock"(blockState: $BlockState$Type): $BlockSelectorWidget
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): $CompoundTag
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resource$Type<($IGuiTexture$Type)>, isProject: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "block"(): $BlockState
set "onBlockStateUpdate"(value: $Consumer$Type<($BlockState$Type)>)
set "block"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSelectorWidget$Type = ($BlockSelectorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSelectorWidget_ = $BlockSelectorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$ITagSerializable, $ITagSerializable$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IProject extends $ILDLRegister, $ITagSerializable<($CompoundTag)> {

 "getSuffix"(): string
 "getResources"(): $Resources
 "loadProject"(file: $File$Type): $IProject
 "getProjectWorkSpace"(editor: $Editor$Type): $File
 "saveProject"(file: $File$Type): void
 "newEmptyProject"(): $IProject
 "loadResources"(tag: $CompoundTag$Type): $Resources
 "onLoad"(editor: $Editor$Type): void
 "onClosed"(editor: $Editor$Type): void
 "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
 "name"(): string
 "group"(): string
 "isLDLRegister"(): boolean
 "getTranslateKey"(): string
 "getRegisterUI"(): $LDLRegister
 "getChatComponent"(): $Component
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IProject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProject$Type = ($IProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProject_ = $IProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $WidgetUIAccess {

 "attemptMergeStack"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
 "writeClientAction"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
 "writeUpdateInfo"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
}

export namespace $WidgetUIAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetUIAccess$Type = ($WidgetUIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetUIAccess_ = $WidgetUIAccess$Type;
}}

declare module "packages/javax/swing/text/$BoxView" {
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$View, $View$Type} from "packages/javax/swing/text/$View"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$Position$Bias, $Position$Bias$Type} from "packages/javax/swing/text/$Position$Bias"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$CompositeView, $CompositeView$Type} from "packages/javax/swing/text/$CompositeView"

export class $BoxView extends $CompositeView {
static readonly "BadBreakWeight": integer
static readonly "GoodBreakWeight": integer
static readonly "ExcellentBreakWeight": integer
static readonly "ForcedBreakWeight": integer
static readonly "X_AXIS": integer
static readonly "Y_AXIS": integer

constructor(arg0: $Element$Type, arg1: integer)

public "getWidth"(): integer
public "getHeight"(): integer
public "replace"(arg0: integer, arg1: integer, arg2: ($View$Type)[]): void
public "setSize"(arg0: float, arg1: float): void
public "preferenceChanged"(arg0: $View$Type, arg1: boolean, arg2: boolean): void
public "getChildAllocation"(arg0: integer, arg1: $Shape$Type): $Shape
public "modelToView"(arg0: integer, arg1: $Shape$Type, arg2: $Position$Bias$Type): $Shape
public "viewToModel"(arg0: float, arg1: float, arg2: $Shape$Type, arg3: ($Position$Bias$Type)[]): integer
public "getPreferredSpan"(arg0: integer): float
public "getMinimumSpan"(arg0: integer): float
public "getMaximumSpan"(arg0: integer): float
public "getResizeWeight"(arg0: integer): integer
public "layoutChanged"(arg0: integer): void
public "getAlignment"(arg0: integer): float
public "getAxis"(): integer
public "paint"(arg0: $Graphics$Type, arg1: $Shape$Type): void
public "setAxis"(arg0: integer): void
get "width"(): integer
get "height"(): integer
get "axis"(): integer
set "axis"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxView$Type = ($BoxView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxView_ = $BoxView$Type;
}}
declare module "packages/javax/swing/event/$UndoableEditListener" {
import {$UndoableEditEvent, $UndoableEditEvent$Type} from "packages/javax/swing/event/$UndoableEditEvent"
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"

export interface $UndoableEditListener extends $EventListener {

 "undoableEditHappened"(arg0: $UndoableEditEvent$Type): void

(arg0: $UndoableEditEvent$Type): void
}

export namespace $UndoableEditListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndoableEditListener$Type = ($UndoableEditListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UndoableEditListener_ = $UndoableEditListener$Type;
}}
declare module "packages/javax/swing/event/$DocumentEvent" {
import {$DocumentEvent$EventType, $DocumentEvent$EventType$Type} from "packages/javax/swing/event/$DocumentEvent$EventType"
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$Document, $Document$Type} from "packages/javax/swing/text/$Document"
import {$DocumentEvent$ElementChange, $DocumentEvent$ElementChange$Type} from "packages/javax/swing/event/$DocumentEvent$ElementChange"

export interface $DocumentEvent {

 "getLength"(): integer
 "getType"(): $DocumentEvent$EventType
 "getOffset"(): integer
 "getDocument"(): $Document
 "getChange"(arg0: $Element$Type): $DocumentEvent$ElementChange
}

export namespace $DocumentEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentEvent$Type = ($DocumentEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentEvent_ = $DocumentEvent$Type;
}}
declare module "packages/javax/swing/text/$AttributeSet" {
import {$Enumeration, $Enumeration$Type} from "packages/java/util/$Enumeration"

export interface $AttributeSet {

 "getAttributeNames"(): $Enumeration<(any)>
 "isDefined"(arg0: any): boolean
 "isEqual"(arg0: $AttributeSet$Type): boolean
 "getAttribute"(arg0: any): any
 "getAttributeCount"(): integer
 "containsAttribute"(arg0: any, arg1: any): boolean
 "containsAttributes"(arg0: $AttributeSet$Type): boolean
 "getResolveParent"(): $AttributeSet
 "copyAttributes"(): $AttributeSet
}

export namespace $AttributeSet {
const NameAttribute: any
const ResolveAttribute: any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeSet$Type = ($AttributeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeSet_ = $AttributeSet$Type;
}}
declare module "packages/javax/swing/text/html/$BlockView" {
import {$ViewFactory, $ViewFactory$Type} from "packages/javax/swing/text/$ViewFactory"
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$BoxView, $BoxView$Type} from "packages/javax/swing/text/$BoxView"
import {$View, $View$Type} from "packages/javax/swing/text/$View"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$AttributeSet, $AttributeSet$Type} from "packages/javax/swing/text/$AttributeSet"
import {$DocumentEvent, $DocumentEvent$Type} from "packages/javax/swing/event/$DocumentEvent"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"

export class $BlockView extends $BoxView {
static readonly "BadBreakWeight": integer
static readonly "GoodBreakWeight": integer
static readonly "ExcellentBreakWeight": integer
static readonly "ForcedBreakWeight": integer
static readonly "X_AXIS": integer
static readonly "Y_AXIS": integer

constructor(arg0: $Element$Type, arg1: integer)

public "setParent"(arg0: $View$Type): void
public "getAttributes"(): $AttributeSet
public "changedUpdate"(arg0: $DocumentEvent$Type, arg1: $Shape$Type, arg2: $ViewFactory$Type): void
public "getPreferredSpan"(arg0: integer): float
public "getMinimumSpan"(arg0: integer): float
public "getMaximumSpan"(arg0: integer): float
public "getResizeWeight"(arg0: integer): integer
public "getAlignment"(arg0: integer): float
public "paint"(arg0: $Graphics$Type, arg1: $Shape$Type): void
set "parent"(value: $View$Type)
get "attributes"(): $AttributeSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockView$Type = ($BlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockView_ = $BlockView$Type;
}}
declare module "packages/javax/swing/event/$DocumentEvent$EventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DocumentEvent$EventType {
static readonly "INSERT": $DocumentEvent$EventType
static readonly "REMOVE": $DocumentEvent$EventType
static readonly "CHANGE": $DocumentEvent$EventType


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentEvent$EventType$Type = ($DocumentEvent$EventType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentEvent$EventType_ = $DocumentEvent$EventType$Type;
}}
declare module "packages/javax/swing/text/$Document" {
import {$DocumentListener, $DocumentListener$Type} from "packages/javax/swing/event/$DocumentListener"
import {$UndoableEditListener, $UndoableEditListener$Type} from "packages/javax/swing/event/$UndoableEditListener"
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$Segment, $Segment$Type} from "packages/javax/swing/text/$Segment"
import {$AttributeSet, $AttributeSet$Type} from "packages/javax/swing/text/$AttributeSet"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Position, $Position$Type} from "packages/javax/swing/text/$Position"

export interface $Document {

 "remove"(arg0: integer, arg1: integer): void
 "getProperty"(arg0: any): any
 "getLength"(): integer
 "addDocumentListener"(arg0: $DocumentListener$Type): void
 "removeDocumentListener"(arg0: $DocumentListener$Type): void
 "addUndoableEditListener"(arg0: $UndoableEditListener$Type): void
 "removeUndoableEditListener"(arg0: $UndoableEditListener$Type): void
 "insertString"(arg0: integer, arg1: string, arg2: $AttributeSet$Type): void
 "createPosition"(arg0: integer): $Position
 "getRootElements"(): ($Element)[]
 "getDefaultRootElement"(): $Element
 "putProperty"(arg0: any, arg1: any): void
 "getStartPosition"(): $Position
 "getEndPosition"(): $Position
 "render"(arg0: $Runnable$Type): void
 "getText"(arg0: integer, arg1: integer, arg2: $Segment$Type): void
 "getText"(arg0: integer, arg1: integer): string
}

export namespace $Document {
const StreamDescriptionProperty: string
const TitleProperty: string
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
declare module "packages/javax/swing/text/$Segment" {
import {$CharacterIterator, $CharacterIterator$Type} from "packages/java/text/$CharacterIterator"
import {$IntStream, $IntStream$Type} from "packages/java/util/stream/$IntStream"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Segment implements $Cloneable, $CharacterIterator, charseq {
 "array": (character)[]
 "offset": integer
 "count": integer

constructor()
constructor(arg0: (character)[], arg1: integer, arg2: integer)

public "length"(): integer
public "toString"(): string
public "clone"(): any
public "charAt"(arg0: integer): character
public "next"(): character
public "subSequence"(arg0: integer, arg1: integer): charseq
public "last"(): character
public "first"(): character
public "current"(): character
public "previous"(): character
public "getIndex"(): integer
public "setPartialReturn"(arg0: boolean): void
public "isPartialReturn"(): boolean
public "setIndex"(arg0: integer): character
public "getBeginIndex"(): integer
public "getEndIndex"(): integer
public static "compare"(arg0: charseq, arg1: charseq): integer
public "isEmpty"(): boolean
public "codePoints"(): $IntStream
public "chars"(): $IntStream
get "index"(): integer
set "partialReturn"(value: boolean)
get "partialReturn"(): boolean
set "index"(value: integer)
get "beginIndex"(): integer
get "endIndex"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Segment$Type = ($Segment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Segment_ = $Segment$Type;
}}
declare module "packages/javax/swing/text/$View" {
import {$ViewFactory, $ViewFactory$Type} from "packages/javax/swing/text/$ViewFactory"
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$Container, $Container$Type} from "packages/java/awt/$Container"
import {$Document, $Document$Type} from "packages/javax/swing/text/$Document"
import {$Graphics, $Graphics$Type} from "packages/java/awt/$Graphics"
import {$AttributeSet, $AttributeSet$Type} from "packages/javax/swing/text/$AttributeSet"
import {$Position$Bias, $Position$Bias$Type} from "packages/javax/swing/text/$Position$Bias"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"
import {$DocumentEvent, $DocumentEvent$Type} from "packages/javax/swing/event/$DocumentEvent"
import {$SwingConstants, $SwingConstants$Type} from "packages/javax/swing/$SwingConstants"

export class $View implements $SwingConstants {
static readonly "BadBreakWeight": integer
static readonly "GoodBreakWeight": integer
static readonly "ExcellentBreakWeight": integer
static readonly "ForcedBreakWeight": integer
static readonly "X_AXIS": integer
static readonly "Y_AXIS": integer

constructor(arg0: $Element$Type)

public "getGraphics"(): $Graphics
public "remove"(arg0: integer): void
public "append"(arg0: $View$Type): void
public "insert"(arg0: integer, arg1: $View$Type): void
public "replace"(arg0: integer, arg1: integer, arg2: ($View$Type)[]): void
public "getParent"(): $View
public "setParent"(arg0: $View$Type): void
public "getAttributes"(): $AttributeSet
public "removeAll"(): void
public "getContainer"(): $Container
public "setSize"(arg0: float, arg1: float): void
public "getElement"(): $Element
public "getDocument"(): $Document
public "getViewIndex"(arg0: float, arg1: float, arg2: $Shape$Type): integer
public "getViewIndex"(arg0: integer, arg1: $Position$Bias$Type): integer
public "insertUpdate"(arg0: $DocumentEvent$Type, arg1: $Shape$Type, arg2: $ViewFactory$Type): void
public "removeUpdate"(arg0: $DocumentEvent$Type, arg1: $Shape$Type, arg2: $ViewFactory$Type): void
public "changedUpdate"(arg0: $DocumentEvent$Type, arg1: $Shape$Type, arg2: $ViewFactory$Type): void
public "breakView"(arg0: integer, arg1: integer, arg2: float, arg3: float): $View
public "createFragment"(arg0: integer, arg1: integer): $View
public "getBreakWeight"(arg0: integer, arg1: float, arg2: float): integer
public "preferenceChanged"(arg0: $View$Type, arg1: boolean, arg2: boolean): void
public "getViewCount"(): integer
public "getChildAllocation"(arg0: integer, arg1: $Shape$Type): $Shape
public "modelToView"(arg0: integer, arg1: $Position$Bias$Type, arg2: integer, arg3: $Position$Bias$Type, arg4: $Shape$Type): $Shape
public "modelToView"(arg0: integer, arg1: $Shape$Type, arg2: $Position$Bias$Type): $Shape
/**
 * 
 * @deprecated
 */
public "modelToView"(arg0: integer, arg1: $Shape$Type): $Shape
public "viewToModel"(arg0: float, arg1: float, arg2: $Shape$Type, arg3: ($Position$Bias$Type)[]): integer
/**
 * 
 * @deprecated
 */
public "viewToModel"(arg0: float, arg1: float, arg2: $Shape$Type): integer
public "getPreferredSpan"(arg0: integer): float
public "getMinimumSpan"(arg0: integer): float
public "getMaximumSpan"(arg0: integer): float
public "getResizeWeight"(arg0: integer): integer
public "getViewFactory"(): $ViewFactory
public "getStartOffset"(): integer
public "getEndOffset"(): integer
public "getNextVisualPositionFrom"(arg0: integer, arg1: $Position$Bias$Type, arg2: $Shape$Type, arg3: integer, arg4: ($Position$Bias$Type)[]): integer
public "getToolTipText"(arg0: float, arg1: float, arg2: $Shape$Type): string
public "getAlignment"(arg0: integer): float
public "isVisible"(): boolean
public "paint"(arg0: $Graphics$Type, arg1: $Shape$Type): void
public "getView"(arg0: integer): $View
get "graphics"(): $Graphics
get "parent"(): $View
set "parent"(value: $View$Type)
get "attributes"(): $AttributeSet
get "container"(): $Container
get "element"(): $Element
get "document"(): $Document
get "viewCount"(): integer
get "viewFactory"(): $ViewFactory
get "startOffset"(): integer
get "endOffset"(): integer
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$Type = ($View);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View_ = $View$Type;
}}
declare module "packages/javax/swing/event/$DocumentListener" {
import {$EventListener, $EventListener$Type} from "packages/java/util/$EventListener"
import {$DocumentEvent, $DocumentEvent$Type} from "packages/javax/swing/event/$DocumentEvent"

export interface $DocumentListener extends $EventListener {

 "insertUpdate"(arg0: $DocumentEvent$Type): void
 "removeUpdate"(arg0: $DocumentEvent$Type): void
 "changedUpdate"(arg0: $DocumentEvent$Type): void
}

export namespace $DocumentListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentListener$Type = ($DocumentListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentListener_ = $DocumentListener$Type;
}}
declare module "packages/javax/swing/text/$ViewFactory" {
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$View, $View$Type} from "packages/javax/swing/text/$View"

export interface $ViewFactory {

 "create"(arg0: $Element$Type): $View

(arg0: $Element$Type): $View
}

export namespace $ViewFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewFactory$Type = ($ViewFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewFactory_ = $ViewFactory$Type;
}}
declare module "packages/javax/swing/undo/$UndoableEdit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $UndoableEdit {

 "addEdit"(arg0: $UndoableEdit$Type): boolean
 "replaceEdit"(arg0: $UndoableEdit$Type): boolean
 "isSignificant"(): boolean
 "getPresentationName"(): string
 "getUndoPresentationName"(): string
 "getRedoPresentationName"(): string
 "redo"(): void
 "undo"(): void
 "canUndo"(): boolean
 "canRedo"(): boolean
 "die"(): void
}

export namespace $UndoableEdit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndoableEdit$Type = ($UndoableEdit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UndoableEdit_ = $UndoableEdit$Type;
}}
declare module "packages/javax/swing/text/$Position$Bias" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Position$Bias {
static readonly "Forward": $Position$Bias
static readonly "Backward": $Position$Bias


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Bias$Type = ($Position$Bias);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position$Bias_ = $Position$Bias$Type;
}}
declare module "packages/javax/swing/event/$UndoableEditEvent" {
import {$UndoableEdit, $UndoableEdit$Type} from "packages/javax/swing/undo/$UndoableEdit"
import {$EventObject, $EventObject$Type} from "packages/java/util/$EventObject"

export class $UndoableEditEvent extends $EventObject {

constructor(arg0: any, arg1: $UndoableEdit$Type)

public "getEdit"(): $UndoableEdit
get "edit"(): $UndoableEdit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndoableEditEvent$Type = ($UndoableEditEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UndoableEditEvent_ = $UndoableEditEvent$Type;
}}
declare module "packages/javax/swing/text/$Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Position {

 "getOffset"(): integer

(): integer
}

export namespace $Position {
const probejs$$marker: never
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
declare module "packages/javax/swing/text/$Element" {
import {$Document, $Document$Type} from "packages/javax/swing/text/$Document"
import {$AttributeSet, $AttributeSet$Type} from "packages/javax/swing/text/$AttributeSet"

export interface $Element {

 "getName"(): string
 "getAttributes"(): $AttributeSet
 "getElement"(arg0: integer): $Element
 "getDocument"(): $Document
 "getStartOffset"(): integer
 "getEndOffset"(): integer
 "getElementIndex"(arg0: integer): integer
 "getParentElement"(): $Element
 "getElementCount"(): integer
 "isLeaf"(): boolean
}

export namespace $Element {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Element$Type = ($Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Element_ = $Element$Type;
}}
declare module "packages/javax/swing/text/$CompositeView" {
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"
import {$View, $View$Type} from "packages/javax/swing/text/$View"
import {$Position$Bias, $Position$Bias$Type} from "packages/javax/swing/text/$Position$Bias"
import {$Shape, $Shape$Type} from "packages/java/awt/$Shape"

export class $CompositeView extends $View {
static readonly "BadBreakWeight": integer
static readonly "GoodBreakWeight": integer
static readonly "ExcellentBreakWeight": integer
static readonly "ForcedBreakWeight": integer
static readonly "X_AXIS": integer
static readonly "Y_AXIS": integer

constructor(arg0: $Element$Type)

public "replace"(arg0: integer, arg1: integer, arg2: ($View$Type)[]): void
public "setParent"(arg0: $View$Type): void
public "getViewIndex"(arg0: integer, arg1: $Position$Bias$Type): integer
public "getViewCount"(): integer
public "getChildAllocation"(arg0: integer, arg1: $Shape$Type): $Shape
public "modelToView"(arg0: integer, arg1: $Shape$Type, arg2: $Position$Bias$Type): $Shape
public "modelToView"(arg0: integer, arg1: $Position$Bias$Type, arg2: integer, arg3: $Position$Bias$Type, arg4: $Shape$Type): $Shape
public "viewToModel"(arg0: float, arg1: float, arg2: $Shape$Type, arg3: ($Position$Bias$Type)[]): integer
public "getNextVisualPositionFrom"(arg0: integer, arg1: $Position$Bias$Type, arg2: $Shape$Type, arg3: integer, arg4: ($Position$Bias$Type)[]): integer
public "getView"(arg0: integer): $View
set "parent"(value: $View$Type)
get "viewCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeView$Type = ($CompositeView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeView_ = $CompositeView$Type;
}}
declare module "packages/javax/swing/$SwingConstants" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SwingConstants {

}

export namespace $SwingConstants {
const CENTER: integer
const TOP: integer
const LEFT: integer
const BOTTOM: integer
const RIGHT: integer
const NORTH: integer
const NORTH_EAST: integer
const EAST: integer
const SOUTH_EAST: integer
const SOUTH: integer
const SOUTH_WEST: integer
const WEST: integer
const NORTH_WEST: integer
const HORIZONTAL: integer
const VERTICAL: integer
const LEADING: integer
const TRAILING: integer
const NEXT: integer
const PREVIOUS: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwingConstants$Type = ($SwingConstants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwingConstants_ = $SwingConstants$Type;
}}
declare module "packages/javax/swing/event/$DocumentEvent$ElementChange" {
import {$Element, $Element$Type} from "packages/javax/swing/text/$Element"

export interface $DocumentEvent$ElementChange {

 "getIndex"(): integer
 "getElement"(): $Element
 "getChildrenRemoved"(): ($Element)[]
 "getChildrenAdded"(): ($Element)[]
}

export namespace $DocumentEvent$ElementChange {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocumentEvent$ElementChange$Type = ($DocumentEvent$ElementChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DocumentEvent$ElementChange_ = $DocumentEvent$ElementChange$Type;
}}

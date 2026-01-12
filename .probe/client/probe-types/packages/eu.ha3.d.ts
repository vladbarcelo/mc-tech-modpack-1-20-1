declare module "packages/eu/ha3/presencefootsteps/sound/$StepSoundSource" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StepSoundGenerator, $StepSoundGenerator$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$StepSoundGenerator"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"

export interface $StepSoundSource {

 "isStepBlocked"(): boolean
 "getStepGenerator"(arg0: $SoundEngine$Type): $Optional<($StepSoundGenerator)>
}

export namespace $StepSoundSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StepSoundSource$Type = ($StepSoundSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StepSoundSource_ = $StepSoundSource$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/config/$EntitySelector" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySelector extends $Enum<($EntitySelector)> implements $Predicate<($Entity)> {
static readonly "ALL": $EntitySelector
static readonly "PLAYERS_AND_HOSTILES": $EntitySelector
static readonly "PLAYERS_ONLY": $EntitySelector
static readonly "VALUES": ($EntitySelector)[]


public static "values"(): ($EntitySelector)[]
public static "valueOf"(name: string): $EntitySelector
public static "isEqual"<T>(arg0: any): $Predicate<($Entity)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
public "negate"(): $Predicate<($Entity)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Entity)>
public "test"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySelector$Type = (("all") | ("players_only") | ("players_and_hostiles")) | ($EntitySelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySelector_ = $EntitySelector$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/generator/$MotionTracker" {
import {$TerrestrialStepSoundGenerator, $TerrestrialStepSoundGenerator$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$TerrestrialStepSoundGenerator"
import {$State, $State$Type} from "packages/eu/ha3/presencefootsteps/sound/$State"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MotionTracker {

constructor(generator: $TerrestrialStepSoundGenerator$Type)

public "getSpeedScalingRatio"(entity: $LivingEntity$Type): float
public "getHorizontalSpeed"(): double
public "simulateMotionData"(ply: $LivingEntity$Type): void
public "isStationary"(): boolean
public "pickState"(ply: $LivingEntity$Type, walk: $State$Type, run: $State$Type): $State
public "getMotionX"(): double
public "getMotionZ"(): double
public "getMotionY"(): double
get "horizontalSpeed"(): double
get "stationary"(): boolean
get "motionX"(): double
get "motionZ"(): double
get "motionY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotionTracker$Type = ($MotionTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MotionTracker_ = $MotionTracker$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$Index" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Loadable, $Loadable$Type} from "packages/eu/ha3/presencefootsteps/world/$Loadable"
import {$BlockReport$Reportable, $BlockReport$Reportable$Type} from "packages/eu/ha3/presencefootsteps/util/$BlockReport$Reportable"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Index<K, V> extends $Loadable, $BlockReport$Reportable {

 "contains"(arg0: $ResourceLocation$Type): boolean
 "lookup"(arg0: K): V
 "add"(arg0: string, arg1: string): void
 "load"(reader: $Reader$Type): void
 "writeToReport"(arg0: boolean, arg1: $JsonObjectWriter$Type, arg2: $Map$Type<(string), ($SoundType$Type)>): void
}

export namespace $Index {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Index$Type<K, V> = ($Index<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Index_<K, V> = $Index$Type<(K), (V)>;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/player/$SoundPlayer" {
import {$Options, $Options$Type} from "packages/eu/ha3/presencefootsteps/sound/$Options"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $SoundPlayer {

 "playSound"(arg0: $LivingEntity$Type, arg1: string, arg2: float, arg3: float, arg4: $Options$Type): void
 "think"(): void
 "getRNG"(): $Random
}

export namespace $SoundPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundPlayer$Type = ($SoundPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundPlayer_ = $SoundPlayer$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/util/$BlockReport$Reportable" {
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockReport$Reportable {

 "writeToReport"(arg0: boolean, arg1: $JsonObjectWriter$Type, arg2: $Map$Type<(string), ($SoundType$Type)>): void

(arg0: boolean, arg1: $JsonObjectWriter$Type, arg2: $Map$Type<(string), ($SoundType$Type)>): void
}

export namespace $BlockReport$Reportable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockReport$Reportable$Type = ($BlockReport$Reportable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockReport$Reportable_ = $BlockReport$Reportable$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter$WriteAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JsonObjectWriter$WriteAction {

 "write"(): void

(): void
}

export namespace $JsonObjectWriter$WriteAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObjectWriter$WriteAction$Type = ($JsonObjectWriter$WriteAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObjectWriter$WriteAction_ = $JsonObjectWriter$WriteAction$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/util/$Range" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $Range extends $Record {
static readonly "DEFAULT": $Range

constructor(min: float, max: float)

public "random"(rand: $Random$Type): float
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): float
public "max"(): float
public "write"(writer: $JsonObjectWriter$Type): void
public "read"(name: string, json: $JsonObject$Type): $Range
public "on"(value: float): float
public static "exactly"(value: float): $Range
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Range$Type = ($Range);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Range_ = $Range$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$HeuristicStateLookup" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $HeuristicStateLookup {

constructor()

public "getMostSimilar"(block: $Block$Type): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeuristicStateLookup$Type = ($HeuristicStateLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeuristicStateLookup_ = $HeuristicStateLookup$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter$WriteConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JsonObjectWriter$WriteConsumer<T> {

 "write"(arg0: T): void

(arg0: T): void
}

export namespace $JsonObjectWriter$WriteConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObjectWriter$WriteConsumer$Type<T> = ($JsonObjectWriter$WriteConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObjectWriter$WriteConsumer_<T> = $JsonObjectWriter$WriteConsumer$Type<(T)>;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/$SoundEngine" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$IdentifiableResourceReloadListener, $IdentifiableResourceReloadListener$Type} from "packages/net/fabricmc/fabric/api/resource/$IdentifiableResourceReloadListener"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$Solver, $Solver$Type} from "packages/eu/ha3/presencefootsteps/world/$Solver"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ProfilerFiller, $ProfilerFiller$Type} from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import {$PFConfig, $PFConfig$Type} from "packages/eu/ha3/presencefootsteps/$PFConfig"
import {$Isolator, $Isolator$Type} from "packages/eu/ha3/presencefootsteps/sound/$Isolator"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SoundEngine implements $IdentifiableResourceReloadListener {

constructor(config: $PFConfig$Type)

public "reload"(): void
public "hasData"(): boolean
public "shutdown"(): void
public "getFabricId"(): $ResourceLocation
public "getIsolator"(): $Isolator
public "onSoundRecieved"(event: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type): boolean
public "getVolumeForSource"(source: $LivingEntity$Type): float
public "reloadEverything"(manager: $ResourceManager$Type): void
public "isEnabledFor"(entity: $Entity$Type): boolean
public "isRunning"(client: $Minecraft$Type): boolean
public "getConfig"(): $PFConfig
public "getSolver"(): $Solver
public "reload"(sync: $PreparableReloadListener$PreparationBarrier$Type, sender: $ResourceManager$Type, serverProfiler: $ProfilerFiller$Type, clientProfiler: $ProfilerFiller$Type, serverExecutor: $Executor$Type, clientExecutor: $Executor$Type): $CompletableFuture<(void)>
public "onFrame"(client: $Minecraft$Type, cameraEntity: $Entity$Type): void
public "getFabricDependencies"(): $Collection<($ResourceLocation)>
public "getName"(): string
get "fabricId"(): $ResourceLocation
get "isolator"(): $Isolator
get "config"(): $PFConfig
get "solver"(): $Solver
get "fabricDependencies"(): $Collection<($ResourceLocation)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngine$Type = ($SoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEngine_ = $SoundEngine$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/generator/$Modifier" {
import {$StepSoundGenerator, $StepSoundGenerator$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$StepSoundGenerator"

export class $Modifier<T extends $StepSoundGenerator> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Modifier$Type<T> = ($Modifier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Modifier_<T> = $Modifier$Type<(T)>;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$Lookup" {
import {$SoundsKey, $SoundsKey$Type} from "packages/eu/ha3/presencefootsteps/world/$SoundsKey"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Loadable, $Loadable$Type} from "packages/eu/ha3/presencefootsteps/world/$Loadable"
import {$BlockReport$Reportable, $BlockReport$Reportable$Type} from "packages/eu/ha3/presencefootsteps/util/$BlockReport$Reportable"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Lookup<T> extends $Loadable, $BlockReport$Reportable {

 "contains"(arg0: T): boolean
 "getAssociation"(arg0: T, arg1: string): $SoundsKey
 "getSubstrates"(): $Set<(string)>
 "getAssociations"(state: T): $Map<(string), ($SoundsKey)>
 "add"(arg0: string, arg1: string): void
 "load"(reader: $Reader$Type): void
 "writeToReport"(arg0: boolean, arg1: $JsonObjectWriter$Type, arg2: $Map$Type<(string), ($SoundType$Type)>): void
}

export namespace $Lookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lookup$Type<T> = ($Lookup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lookup_<T> = $Lookup$Type<(T)>;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$SoundPlayer, $SoundPlayer$Type} from "packages/eu/ha3/presencefootsteps/sound/player/$SoundPlayer"
import {$AcousticsFile, $AcousticsFile$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$AcousticsFile"
import {$Acoustic$Serializer, $Acoustic$Serializer$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic$Serializer"
import {$State, $State$Type} from "packages/eu/ha3/presencefootsteps/sound/$State"
import {$Options, $Options$Type} from "packages/eu/ha3/presencefootsteps/sound/$Options"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Acoustic {

 "write"(arg0: $AcousticsFile$Type, arg1: $JsonObjectWriter$Type): void
 "playSound"(arg0: $SoundPlayer$Type, arg1: $LivingEntity$Type, arg2: $State$Type, arg3: $Options$Type): void
}

export namespace $Acoustic {
const FACTORIES: $Map<(string), ($Acoustic$Serializer)>
function read(context: $AcousticsFile$Type, unsolved: $JsonElement$Type): $Acoustic
function read(context: $AcousticsFile$Type, json: $JsonElement$Type, defaultUnassigned: string): $Acoustic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Acoustic$Type = ($Acoustic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Acoustic_ = $Acoustic$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/$State" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $State extends $Enum<($State)> {
static readonly "STAND": $State
static readonly "WALK": $State
static readonly "WANDER": $State
static readonly "SWIM": $State
static readonly "RUN": $State
static readonly "JUMP": $State
static readonly "LAND": $State
static readonly "CLIMB": $State
static readonly "CLIMB_RUN": $State
static readonly "DOWN": $State
static readonly "DOWN_RUN": $State
static readonly "UP": $State
static readonly "UP_RUN": $State


public "getName"(): string
public static "values"(): ($State)[]
public static "valueOf"(name: string): $State
public "canTransition"(): boolean
public "getTransitionDestination"(): $State
public "isExtraLoud"(): boolean
get "name"(): string
get "transitionDestination"(): $State
get "extraLoud"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $State$Type = (("run") | ("down") | ("climb") | ("wander") | ("climb_run") | ("land") | ("up_run") | ("down_run") | ("up") | ("stand") | ("walk") | ("swim") | ("jump")) | ($State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $State_ = $State$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/acoustics/$AcousticLibrary" {
import {$Association, $Association$Type} from "packages/eu/ha3/presencefootsteps/world/$Association"
import {$SoundsKey, $SoundsKey$Type} from "packages/eu/ha3/presencefootsteps/world/$SoundsKey"
import {$State, $State$Type} from "packages/eu/ha3/presencefootsteps/sound/$State"
import {$Options, $Options$Type} from "packages/eu/ha3/presencefootsteps/sound/$Options"
import {$Acoustic, $Acoustic$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AcousticLibrary {

 "addAcoustic"(arg0: string, arg1: $Acoustic$Type): void
 "playAcoustic"(arg0: $LivingEntity$Type, arg1: $SoundsKey$Type, arg2: $State$Type, arg3: $Options$Type): void
 "think"(): void
 "playStep"(arg0: $Association$Type, arg1: $State$Type, arg2: $Options$Type): void
}

export namespace $AcousticLibrary {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcousticLibrary$Type = ($AcousticLibrary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AcousticLibrary_ = $AcousticLibrary$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/$PFDebugHud" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$List, $List$Type} from "packages/java/util/$List"

export class $PFDebugHud {


public "render"(blockHit: $HitResult$Type, fluidHit: $HitResult$Type, finalList: $List$Type<(string)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PFDebugHud$Type = ($PFDebugHud);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PFDebugHud_ = $PFDebugHud$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/api/$DerivedBlock$Settings" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $DerivedBlock$Settings {

 "getBaseBlock"(): $Block
 "setBaseBlock"(arg0: $Block$Type): void
}

export namespace $DerivedBlock$Settings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DerivedBlock$Settings$Type = ($DerivedBlock$Settings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DerivedBlock$Settings_ = $DerivedBlock$Settings$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/config/$JsonFile" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $JsonFile {

constructor(file: $Path$Type)

public "load"(reader: $Reader$Type): void
public "load"(): void
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonFile$Type = ($JsonFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonFile_ = $JsonFile$Type;
}}
declare module "packages/eu/ha3/mc/quick/update/$Versions" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TargettedVersion, $TargettedVersion$Type} from "packages/eu/ha3/mc/quick/update/$TargettedVersion"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Versions extends $Record {

constructor(json: $JsonObject$Type)
constructor(latest: $TargettedVersion$Type, previous: $List$Type<($TargettedVersion$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "previous"(): $List<($TargettedVersion)>
public "latest"(): $TargettedVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Versions$Type = ($Versions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Versions_ = $Versions$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/acoustics/$AcousticsFile" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$Acoustic, $Acoustic$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic"
import {$Range, $Range$Type} from "packages/eu/ha3/presencefootsteps/util/$Range"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AcousticsFile extends $Record {

constructor(defaultVolume: $Range$Type, defaultPitch: $Range$Type, soundRoot: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(writer: $JsonObjectWriter$Type, acoustics: $Map$Type<(string), ($Acoustic$Type)>): void
public static "read"(reader: $Reader$Type, consumer: $BiConsumer$Type<(string), ($Acoustic$Type)>, ignoreVersion: boolean): $AcousticsFile
public "defaultVolume"(): $Range
public "defaultPitch"(): $Range
public "getSoundName"(soundName: string): string
public "soundRoot"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcousticsFile$Type = ($AcousticsFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AcousticsFile_ = $AcousticsFile$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/config/$VolumeOption" {
import {$JsonFile, $JsonFile$Type} from "packages/eu/ha3/presencefootsteps/config/$JsonFile"
import {$IField$IChangeCallback, $IField$IChangeCallback$Type} from "packages/com/minelittlepony/common/client/gui/$IField$IChangeCallback"

export class $VolumeOption implements $IField$IChangeCallback<(float)> {

constructor(config: $JsonFile$Type, value: integer)

public "get"(): integer
public "toString"(): string
public "set"(volume: float): float
public "getPercentage"(): float
public "perform"(value: float): float
public static "none"<T>(t: float): float
get "percentage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolumeOption$Type = ($VolumeOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolumeOption_ = $VolumeOption$Type;
}}
declare module "packages/eu/ha3/mc/quick/update/$TargettedVersion" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Version, $Version$Type} from "packages/net/fabricmc/loader/api/$Version"

export class $TargettedVersion extends $Record {

constructor(json: $JsonObject$Type)
constructor(minecraft: $Version$Type, version: $Version$Type)
constructor(modid: string)

public static "getVersion"(modid: string): $Version
public "equals"(o: any): boolean
public "toString"(): string
public "version"(): $Version
public "hashCode"(): integer
public "minecraft"(): $Version
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargettedVersion$Type = ($TargettedVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargettedVersion_ = $TargettedVersion$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$SoundsKey" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $SoundsKey extends $Record {
static readonly "UNASSIGNED": $SoundsKey
static readonly "SWIM_WATER": $SoundsKey
static readonly "SWIM_LAVA": $SoundsKey
static readonly "WATERFINE": $SoundsKey
static readonly "LAVAFINE": $SoundsKey

constructor(raw: string, names: (string)[])

public "raw"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(names: string): $SoundsKey
public "names"(): (string)[]
public "isResult"(): boolean
public "isSilent"(): boolean
public "isEmitter"(): boolean
get "result"(): boolean
get "silent"(): boolean
get "emitter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundsKey$Type = ($SoundsKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundsKey_ = $SoundsKey$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/$Isolator" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Variator, $Variator$Type} from "packages/eu/ha3/presencefootsteps/config/$Variator"
import {$HeuristicStateLookup, $HeuristicStateLookup$Type} from "packages/eu/ha3/presencefootsteps/world/$HeuristicStateLookup"
import {$BlockReport$Reportable, $BlockReport$Reportable$Type} from "packages/eu/ha3/presencefootsteps/util/$BlockReport$Reportable"
import {$Index, $Index$Type} from "packages/eu/ha3/presencefootsteps/world/$Index"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"
import {$AcousticLibrary, $AcousticLibrary$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$AcousticLibrary"
import {$Locomotion, $Locomotion$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$Locomotion"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$JsonObjectWriter, $JsonObjectWriter$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter"
import {$Lookup, $Lookup$Type} from "packages/eu/ha3/presencefootsteps/world/$Lookup"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Isolator extends $Record implements $BlockReport$Reportable {
static readonly "ACOUSTICS": $ResourceLocation

constructor(engine: $SoundEngine$Type)
constructor(variator: $Variator$Type, locomotions: $Index$Type<($Entity$Type), ($Locomotion$Type)>, heuristics: $HeuristicStateLookup$Type, golems: $Lookup$Type<($EntityType$Type<(any)>)>, blocks: $Lookup$Type<($BlockState$Type)>, primitives: $Lookup$Type<($SoundEvent$Type)>, acoustics: $AcousticLibrary$Type)

public "primitives"(): $Lookup<($SoundEvent)>
public "blocks"(): $Lookup<($BlockState)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "load"(manager: $ResourceManager$Type): boolean
public "writeToReport"(full: boolean, writer: $JsonObjectWriter$Type, groups: $Map$Type<(string), ($SoundType$Type)>): void
public "locomotions"(): $Index<($Entity), ($Locomotion)>
public "heuristics"(): $HeuristicStateLookup
public "acoustics"(): $AcousticLibrary
public "golems"(): $Lookup<($EntityType<(any)>)>
public "variator"(): $Variator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Isolator$Type = ($Isolator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Isolator_ = $Isolator$Type;
}}
declare module "packages/eu/ha3/mc/quick/update/$UpdaterConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$TargettedVersion, $TargettedVersion$Type} from "packages/eu/ha3/mc/quick/update/$TargettedVersion"
import {$JsonFile, $JsonFile$Type} from "packages/eu/ha3/presencefootsteps/config/$JsonFile"

export class $UpdaterConfig extends $JsonFile {
 "enabled": boolean
 "displayCount": integer
 "displayRemaining": integer
 "lastKnownVersion": string

constructor(file: $Path$Type)

public "shouldReport"(newVersion: $TargettedVersion$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdaterConfig$Type = ($UpdaterConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdaterConfig_ = $UpdaterConfig$Type;
}}
declare module "packages/eu/ha3/mc/quick/update/$UpdateChecker" {
import {$Versions, $Versions$Type} from "packages/eu/ha3/mc/quick/update/$Versions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$UpdaterConfig, $UpdaterConfig$Type} from "packages/eu/ha3/mc/quick/update/$UpdaterConfig"
import {$Reporter, $Reporter$Type} from "packages/eu/ha3/mc/quick/update/$Reporter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $UpdateChecker {

constructor(config: $UpdaterConfig$Type, modid: string, server: string, reporter: $Reporter$Type)

public "getLast"(): $Optional<($Versions)>
public "attempt"(): void
public "getNewer"(): $Optional<($Versions)>
public "checkNow"(): $CompletableFuture<($Optional<($Versions)>)>
get "last"(): $Optional<($Versions)>
get "newer"(): $Optional<($Versions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateChecker$Type = ($UpdateChecker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateChecker_ = $UpdateChecker$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/$Options$FloatSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Options$FloatSupplier {

 "get"(): float

(): float
}

export namespace $Options$FloatSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$FloatSupplier$Type = ($Options$FloatSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Options$FloatSupplier_ = $Options$FloatSupplier$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/$PresenceFootsteps" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ClientModInitializer, $ClientModInitializer$Type} from "packages/net/fabricmc/api/$ClientModInitializer"
import {$UpdateChecker, $UpdateChecker$Type} from "packages/eu/ha3/mc/quick/update/$UpdateChecker"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$PFConfig, $PFConfig$Type} from "packages/eu/ha3/presencefootsteps/$PFConfig"
import {$PFDebugHud, $PFDebugHud$Type} from "packages/eu/ha3/presencefootsteps/$PFDebugHud"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"

export class $PresenceFootsteps implements $ClientModInitializer {
static readonly "logger": $Logger
static readonly "MOD_NAME": $Component

constructor()

public static "getInstance"(): $PresenceFootsteps
public "onInitializeClient"(): void
public "getDebugHud"(): $PFDebugHud
public "getOptionsKeyBinding"(): $KeyMapping
public "getUpdateChecker"(): $UpdateChecker
public "showSystemToast"(title: $Component$Type, body: $Component$Type): void
public "getConfig"(): $PFConfig
public "getEngine"(): $SoundEngine
get "instance"(): $PresenceFootsteps
get "debugHud"(): $PFDebugHud
get "optionsKeyBinding"(): $KeyMapping
get "updateChecker"(): $UpdateChecker
get "config"(): $PFConfig
get "engine"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresenceFootsteps$Type = ($PresenceFootsteps);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PresenceFootsteps_ = $PresenceFootsteps$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/generator/$TerrestrialStepSoundGenerator" {
import {$State, $State$Type} from "packages/eu/ha3/presencefootsteps/sound/$State"
import {$StepSoundGenerator, $StepSoundGenerator$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$StepSoundGenerator"
import {$Modifier, $Modifier$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$Modifier"
import {$MotionTracker, $MotionTracker$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$MotionTracker"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TerrestrialStepSoundGenerator implements $StepSoundGenerator {

constructor(entity: $LivingEntity$Type, engine: $SoundEngine$Type, modifier: $Modifier$Type<($TerrestrialStepSoundGenerator$Type)>)

public "getMotionTracker"(): $MotionTracker
public "generateFootsteps"(): void
public "produceStep"(event: $State$Type): void
public "produceStep"(event: $State$Type, verticalOffsetAsMinus: double): void
get "motionTracker"(): $MotionTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrestrialStepSoundGenerator$Type = ($TerrestrialStepSoundGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerrestrialStepSoundGenerator_ = $TerrestrialStepSoundGenerator$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/generator/$Locomotion" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$StepSoundGenerator, $StepSoundGenerator$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$StepSoundGenerator"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Locomotion extends $Enum<($Locomotion)> {
static readonly "NONE": $Locomotion
static readonly "BIPED": $Locomotion
static readonly "QUADRUPED": $Locomotion
static readonly "FLYING": $Locomotion
static readonly "FLYING_BIPED": $Locomotion


public static "values"(): ($Locomotion)[]
public static "valueOf"(name: string): $Locomotion
public "getOptionTooltip"(): $Component
public "getOptionName"(): $Component
public "supplyGenerator"(entity: $LivingEntity$Type, engine: $SoundEngine$Type): $Optional<($StepSoundGenerator)>
public static "byName"(name: string): $Locomotion
public static "forLiving"(entity: $Entity$Type, fallback: $Locomotion$Type): $Locomotion
public static "forPlayer"(ply: $Player$Type, preference: $Locomotion$Type): $Locomotion
get "optionTooltip"(): $Component
get "optionName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locomotion$Type = (("flying") | ("quadruped") | ("flying_biped") | ("none") | ("biped")) | ($Locomotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locomotion_ = $Locomotion$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/$Options" {
import {$Options$FloatSupplier, $Options$FloatSupplier$Type} from "packages/eu/ha3/presencefootsteps/sound/$Options$FloatSupplier"

export interface $Options {

 "and"(other: $Options$Type): $Options
 "get"(arg0: string): float
 "containsKey"(arg0: string): boolean
 "getOrDefault"(option: string, defaultValue: float): float
}

export namespace $Options {
const EMPTY: $Options
const WET_VOLUME_OPTIONS: $Options
const FOLIAGE_VOLUME_OPTIONS: $Options
function singular(key: string, value: float): $Options
function ofGetter(key: string, value: $Options$FloatSupplier$Type): $Options
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$Type = ($Options);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Options_ = $Options$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic$Serializer" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AcousticsFile, $AcousticsFile$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$AcousticsFile"
import {$Acoustic, $Acoustic$Type} from "packages/eu/ha3/presencefootsteps/sound/acoustics/$Acoustic"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $Acoustic$Serializer {

 "create"(arg0: $JsonElement$Type, arg1: $AcousticsFile$Type): $Acoustic

(arg0: $JsonElement$Type, arg1: $AcousticsFile$Type): $Acoustic
}

export namespace $Acoustic$Serializer {
function ofJsObject(factory: $BiFunction$Type<($JsonObject$Type), ($AcousticsFile$Type), ($Acoustic$Type)>): $Acoustic$Serializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Acoustic$Serializer$Type = ($Acoustic$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Acoustic$Serializer_ = $Acoustic$Serializer$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$Solver" {
import {$Association, $Association$Type} from "packages/eu/ha3/presencefootsteps/world/$Association"
import {$AssociationPool, $AssociationPool$Type} from "packages/eu/ha3/presencefootsteps/world/$AssociationPool"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $Solver {

 "findAssociation"(arg0: $AssociationPool$Type, arg1: $LivingEntity$Type, arg2: double, arg3: boolean): $Association
 "findAssociation"(arg0: $AssociationPool$Type, arg1: $LivingEntity$Type, arg2: $BlockPos$Type, arg3: string): $Association
}

export namespace $Solver {
const MESSY_FOLIAGE_STRATEGY: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Solver$Type = ($Solver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Solver_ = $Solver$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/config/$Variator" {
import {$JsonFile, $JsonFile$Type} from "packages/eu/ha3/presencefootsteps/config/$JsonFile"

export class $Variator extends $JsonFile {
 "IMMOBILE_DURATION": integer
 "IMOBILE_INTERVAL_MIN": integer
 "IMOBILE_INTERVAL_MAX": integer
 "EVENT_ON_JUMP": boolean
 "LAND_HARD_DISTANCE_MIN": float
 "SPEED_TO_JUMP_AS_MULTIFOOT": float
 "SPEED_TO_RUN": float
 "RUNNING_RAMPUP_BEGIN": float
 "RUNNING_RAMPUP_END": float
 "DISTANCE_HUMAN": float
 "DISTANCE_STAIR": float
 "DISTANCE_LADDER": float
 "PLAY_WANDER": boolean
 "HUGEFALL_LANDING_DISTANCE_MAX": float
 "HUGEFALL_LANDING_DISTANCE_MIN": float
 "MIN_DASH_MOTION": float
 "MIN_COAST_MOTION": float
 "MIN_MOTION_HOR": float
 "MIN_MOTION_Y": float
 "FLIGHT_TRANSITION_TIME": integer
 "WING_SPEED_RAPID": integer
 "WING_SPEED_NORMAL": integer
 "WING_SPEED_IDLE": integer
 "WING_SPEED_COAST": integer
 "WING_IMMOBILE_FADE_DURATION": integer
 "WING_IMMOBILE_FADE_START": integer
 "WING_JUMPING_REST_TIME": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Variator$Type = ($Variator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Variator_ = $Variator$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$AssociationPool" {
import {$Association, $Association$Type} from "packages/eu/ha3/presencefootsteps/world/$Association"
import {$SoundsKey, $SoundsKey$Type} from "packages/eu/ha3/presencefootsteps/world/$SoundsKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoundEngine, $SoundEngine$Type} from "packages/eu/ha3/presencefootsteps/sound/$SoundEngine"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AssociationPool {

constructor(entity: $LivingEntity$Type, engine: $SoundEngine$Type)

public "get"(pos: $BlockPos$Type, state: $BlockState$Type, substrate: string): $SoundsKey
public "reset"(): void
public "findAssociation"(pos: $BlockPos$Type, strategy: string): $Association
public "findAssociation"(verticalOffsetAsMinus: double, isRightFoot: boolean): $Association
public "wasLastMatchGolem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssociationPool$Type = ($AssociationPool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssociationPool_ = $AssociationPool$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$Association" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SoundsKey, $SoundsKey$Type} from "packages/eu/ha3/presencefootsteps/world/$SoundsKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Association extends $Record {
static readonly "NOT_EMITTER": $Association

constructor(state: $BlockState$Type, pos: $BlockPos$Type, source: $LivingEntity$Type, dry: $SoundsKey$Type, wet: $SoundsKey$Type, foliage: $SoundsKey$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(state: $BlockState$Type, pos: $BlockPos$Type, source: $LivingEntity$Type, dry: $SoundsKey$Type, wet: $SoundsKey$Type, foliage: $SoundsKey$Type): $Association
public "source"(): $LivingEntity
public "pos"(): $BlockPos
public "state"(): $BlockState
public "dataEquals"(other: $Association$Type): boolean
public "wet"(): $SoundsKey
public "foliage"(): $SoundsKey
public "isResult"(): boolean
public "isSilent"(): boolean
public "dry"(): $SoundsKey
get "result"(): boolean
get "silent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Association$Type = ($Association);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Association_ = $Association$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/sound/generator/$StepSoundGenerator" {
import {$MotionTracker, $MotionTracker$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$MotionTracker"

export interface $StepSoundGenerator {

 "getMotionTracker"(): $MotionTracker
 "generateFootsteps"(): void
}

export namespace $StepSoundGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StepSoundGenerator$Type = ($StepSoundGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StepSoundGenerator_ = $StepSoundGenerator$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$JsonWriter, $JsonWriter$Type} from "packages/com/google/gson/stream/$JsonWriter"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$JsonObjectWriter$WriteConsumer, $JsonObjectWriter$WriteConsumer$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter$WriteConsumer"
import {$JsonObjectWriter$WriteAction, $JsonObjectWriter$WriteAction$Type} from "packages/eu/ha3/presencefootsteps/util/$JsonObjectWriter$WriteAction"

export interface $JsonObjectWriter extends $AutoCloseable {

 "object"(action: $JsonObjectWriter$WriteAction$Type): void
 "object"(name: string, action: $JsonObjectWriter$WriteAction$Type): void
 "field"(name: string, data: string): void
 "field"(name: string, action: $JsonObjectWriter$WriteAction$Type): void
 "field"(name: string, data: float): void
 "field"(name: string, data: long): void
 "field"(name: string, data: integer): void
 "array"(name: string, action: $JsonObjectWriter$WriteAction$Type): void
 "array"(action: $JsonObjectWriter$WriteAction$Type): void
 "close"(): void
 "writer"(): $JsonWriter
 "each"<T>(iterable: $Iterable$Type<(T)>, action: $JsonObjectWriter$WriteConsumer$Type<(T)>): void

(action: $JsonObjectWriter$WriteAction$Type): void
}

export namespace $JsonObjectWriter {
function of(writer: $JsonWriter$Type): $JsonObjectWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObjectWriter$Type = ($JsonObjectWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObjectWriter_ = $JsonObjectWriter$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/$PFConfig" {
import {$Locomotion, $Locomotion$Type} from "packages/eu/ha3/presencefootsteps/sound/generator/$Locomotion"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$JsonFile, $JsonFile$Type} from "packages/eu/ha3/presencefootsteps/config/$JsonFile"
import {$EntitySelector, $EntitySelector$Type} from "packages/eu/ha3/presencefootsteps/config/$EntitySelector"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$VolumeOption, $VolumeOption$Type} from "packages/eu/ha3/presencefootsteps/config/$VolumeOption"
import {$PresenceFootsteps, $PresenceFootsteps$Type} from "packages/eu/ha3/presencefootsteps/$PresenceFootsteps"

export class $PFConfig extends $JsonFile {
 "clientPlayerVolume": $VolumeOption
 "otherPlayerVolume": $VolumeOption
 "hostileEntitiesVolume": $VolumeOption
 "passiveEntitiesVolume": $VolumeOption
 "runningVolumeIncrease": integer
 "wetSoundsVolume": $VolumeOption
 "foliageSoundsVolume": $VolumeOption

constructor(file: $Path$Type, pf: $PresenceFootsteps$Type)

public "toggleDisabled"(): boolean
public "getDisabled"(): boolean
public "getGlobalVolume"(): integer
public "setGlobalVolume"(volume: float): float
public "getRunningVolumeIncrease"(): integer
public "setRunningVolumeIncrease"(volume: float): float
public "getLocomotion"(): $Locomotion
public "setLocomotion"(loco: $Locomotion$Type): $Locomotion
public "getEntitySelector"(): $EntitySelector
public "getEnabledMP"(): boolean
public "getEnabledFootwear"(): boolean
public "isExclusiveMode"(): boolean
public "toggleExclusiveMode"(): boolean
public "toggleFootwear"(): boolean
public "toggleMultiplayer"(): boolean
public "cycleTargetSelector"(): $EntitySelector
public "setDisabled"(disabled: boolean): boolean
public "isVisualiserRunning"(): boolean
public "getMaxSteppingEntities"(): integer
public "populateCrashReport"(section: $CrashReportCategory$Type): void
public "getEnabled"(): boolean
get "disabled"(): boolean
get "globalVolume"(): integer
set "globalVolume"(value: float)
get "runningVolumeIncrease"(): integer
set "runningVolumeIncrease"(value: float)
get "locomotion"(): $Locomotion
set "locomotion"(value: $Locomotion$Type)
get "entitySelector"(): $EntitySelector
get "enabledMP"(): boolean
get "enabledFootwear"(): boolean
get "exclusiveMode"(): boolean
set "disabled"(value: boolean)
get "visualiserRunning"(): boolean
get "maxSteppingEntities"(): integer
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PFConfig$Type = ($PFConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PFConfig_ = $PFConfig$Type;
}}
declare module "packages/eu/ha3/mc/quick/update/$Reporter" {
import {$TargettedVersion, $TargettedVersion$Type} from "packages/eu/ha3/mc/quick/update/$TargettedVersion"

export interface $Reporter {

 "report"(arg0: $TargettedVersion$Type, arg1: $TargettedVersion$Type): void

(arg0: $TargettedVersion$Type, arg1: $TargettedVersion$Type): void
}

export namespace $Reporter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reporter$Type = ($Reporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reporter_ = $Reporter$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/mixins/$ILivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILivingEntity {

 "isJumping"(): boolean

(): boolean
}

export namespace $ILivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntity$Type = ($ILivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntity_ = $ILivingEntity$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/api/$DerivedBlock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $DerivedBlock {

 "getBaseBlockState"(): $BlockState

(): $BlockState
}

export namespace $DerivedBlock {
function getBaseOf(state: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DerivedBlock$Type = ($DerivedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DerivedBlock_ = $DerivedBlock$Type;
}}
declare module "packages/eu/ha3/presencefootsteps/world/$Loadable" {
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export interface $Loadable {

 "add"(arg0: string, arg1: string): void
 "load"(reader: $Reader$Type): void

(arg0: string, arg1: string): void
}

export namespace $Loadable {
const GSON: $Gson
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Loadable$Type = ($Loadable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Loadable_ = $Loadable$Type;
}}

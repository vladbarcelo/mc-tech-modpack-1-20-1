declare module "packages/org/orecruncher/dsurround/lib/$IMatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMatcher<T> {

 "isEmpty"(): boolean
 "match"(arg0: T): boolean

(): boolean
}

export namespace $IMatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMatcher$Type<T> = ($IMatcher<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMatcher_<T> = $IMatcher$Type<(T)>;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinParticleManager" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteSet, $SpriteSet$Type} from "packages/net/minecraft/client/particle/$SpriteSet"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MixinParticleManager {

 "dsurround_getSpriteAwareFactories"(): $Map<($ResourceLocation), ($SpriteSet)>
 "dsurround_createParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $MixinParticleManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinParticleManager$Type = ($MixinParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinParticleManager_ = $MixinParticleManager$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/$BiomeTrait" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $BiomeTrait extends $Enum<($BiomeTrait)> {
static readonly "UNKNOWN": $BiomeTrait
static readonly "SYNTHETIC": $BiomeTrait
static readonly "INSIDE": $BiomeTrait
static readonly "VILLAGE": $BiomeTrait
static readonly "PLAYER": $BiomeTrait
static readonly "SPACE": $BiomeTrait
static readonly "CLOUDS": $BiomeTrait
static readonly "UNDER_RIVER": $BiomeTrait
static readonly "UNDER_WATER": $BiomeTrait
static readonly "UNDER_OCEAN": $BiomeTrait
static readonly "NONE": $BiomeTrait
static readonly "TAIGA": $BiomeTrait
static readonly "EXTREME_HILLS": $BiomeTrait
static readonly "JUNGLE": $BiomeTrait
static readonly "MESA": $BiomeTrait
static readonly "PLAINS": $BiomeTrait
static readonly "SAVANNA": $BiomeTrait
static readonly "ICY": $BiomeTrait
static readonly "THEEND": $BiomeTrait
static readonly "BEACH": $BiomeTrait
static readonly "FOREST": $BiomeTrait
static readonly "OCEAN": $BiomeTrait
static readonly "DESERT": $BiomeTrait
static readonly "RIVER": $BiomeTrait
static readonly "SWAMP": $BiomeTrait
static readonly "MUSHROOM": $BiomeTrait
static readonly "NETHER": $BiomeTrait
static readonly "UNDERGROUND": $BiomeTrait
static readonly "WATER": $BiomeTrait
static readonly "WET": $BiomeTrait
static readonly "DRY": $BiomeTrait
static readonly "HOT": $BiomeTrait
static readonly "COLD": $BiomeTrait
static readonly "TEMPERATE": $BiomeTrait
static readonly "SPARSE": $BiomeTrait
static readonly "DENSE": $BiomeTrait
static readonly "CONIFEROUS": $BiomeTrait
static readonly "DECIDUOUS": $BiomeTrait
static readonly "SPOOKY": $BiomeTrait
static readonly "DEAD": $BiomeTrait
static readonly "MAGICAL": $BiomeTrait
static readonly "PLATEAU": $BiomeTrait
static readonly "MOUNTAIN": $BiomeTrait
static readonly "SANDY": $BiomeTrait
static readonly "SNOWY": $BiomeTrait
static readonly "WASTELAND": $BiomeTrait
static readonly "VOID": $BiomeTrait
static readonly "OVERWORLD": $BiomeTrait
static readonly "DEEP": $BiomeTrait
static readonly "WINDSWEPT": $BiomeTrait
static readonly "FLORAL": $BiomeTrait
static readonly "BADLANDS": $BiomeTrait
static readonly "CAVES": $BiomeTrait
static readonly "RARE": $BiomeTrait
static readonly "LUSH": $BiomeTrait
static readonly "CODEC": $Codec<($BiomeTrait)>


public "getName"(): string
public "toString"(): string
public static "values"(): ($BiomeTrait)[]
public static "valueOf"(name: string): $BiomeTrait
public static "of"(name: string): $BiomeTrait
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeTrait$Type = (("none") | ("inside") | ("space") | ("theend") | ("mountain") | ("savanna") | ("rare") | ("mushroom") | ("icy") | ("floral") | ("nether") | ("void") | ("under_river") | ("caves") | ("dry") | ("deciduous") | ("overworld") | ("lush") | ("water") | ("dense") | ("spooky") | ("badlands") | ("synthetic") | ("temperate") | ("ocean") | ("underground") | ("sparse") | ("jungle") | ("forest") | ("deep") | ("under_ocean") | ("wasteland") | ("cold") | ("dead") | ("clouds") | ("hot") | ("unknown") | ("coniferous") | ("mesa") | ("plains") | ("plateau") | ("village") | ("snowy") | ("player") | ("taiga") | ("wet") | ("swamp") | ("magical") | ("under_water") | ("windswept") | ("extreme_hills") | ("beach") | ("sandy") | ("river") | ("desert")) | ($BiomeTrait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeTrait_ = $BiomeTrait$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$IChannelHandle" {
import {$Channel, $Channel$Type} from "packages/com/mojang/blaze3d/audio/$Channel"

export interface $IChannelHandle {

 "dsurround_getSource"(): $Channel

(): $Channel
}

export namespace $IChannelHandle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChannelHandle$Type = ($IChannelHandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChannelHandle_ = $IChannelHandle$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/biome/$BiomeInfo" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BiomeTraits, $BiomeTraits$Type} from "packages/org/orecruncher/dsurround/config/biome/biometraits/$BiomeTraits"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SoundEventType, $SoundEventType$Type} from "packages/org/orecruncher/dsurround/config/$SoundEventType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"
import {$BiomeConfigRule, $BiomeConfigRule$Type} from "packages/org/orecruncher/dsurround/config/data/$BiomeConfigRule"
import {$IRandomizer, $IRandomizer$Type} from "packages/org/orecruncher/dsurround/lib/random/$IRandomizer"
import {$IBiomeSoundProvider, $IBiomeSoundProvider$Type} from "packages/org/orecruncher/dsurround/config/biome/$IBiomeSoundProvider"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$ISoundFactory, $ISoundFactory$Type} from "packages/org/orecruncher/dsurround/sound/$ISoundFactory"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"

export class $BiomeInfo implements $Comparable<($BiomeInfo)>, $IBiomeSoundProvider {
static readonly "DEFAULT_ADDITIONAL_SOUND_CHANCE": integer
static readonly "DEFAULT_SOUND_CHANCE": $Script

constructor(version: integer, id: $ResourceLocation$Type, name: string, traits: $BiomeTraits$Type)
constructor(version: integer, id: $ResourceLocation$Type, name: string, traits: $BiomeTraits$Type, biome: $Biome$Type)

public "toString"(): string
public "compareTo"(o: $BiomeInfo$Type): integer
public "update"(entry: $BiomeConfigRule$Type): void
public "trim"(): void
public "getVersion"(): integer
public "getBackgroundMusic"(random: $IRandomizer$Type): $Optional<($Music)>
public "getFogColor"(): $TextColor
public "isDeepOcean"(): boolean
public "mergeTraits"(configRule: $BiomeConfigRule$Type): void
public "getBiomeName"(): string
public "findBiomeSoundMatches"(): $Collection<($ISoundFactory)>
public "getExtraSound"(type: $SoundEventType$Type, random: $IRandomizer$Type): $Optional<($ISoundFactory)>
public "getTraits"(): $BiomeTraits
public "hasTrait"(trait: string): boolean
public "isRiver"(): boolean
public "isOcean"(): boolean
public "isCave"(): boolean
public "getBiomeId"(): $ResourceLocation
get "version"(): integer
get "fogColor"(): $TextColor
get "deepOcean"(): boolean
get "biomeName"(): string
get "traits"(): $BiomeTraits
get "river"(): boolean
get "ocean"(): boolean
get "cave"(): boolean
get "biomeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeInfo$Type = ($BiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeInfo_ = $BiomeInfo$Type;
}}
declare module "packages/org/orecruncher/dsurround/lib/random/$IRandomizer" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PositionalRandomFactory, $PositionalRandomFactory$Type} from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"

export interface $IRandomizer extends $RandomSource {

 "nextFloat"(min: float, max: float): float
 "triangle"(midPoint: integer, range: integer): integer
 "nextInt"(arg0: integer): integer
 "nextFloat"(): float
 "nextDouble"(): double
 "nextLong"(): long
 "nextGaussian"(): double
 "fork"(): $RandomSource
 "forkPositional"(): $PositionalRandomFactory
 "setSeed"(arg0: long): void
 "nextInt"(): integer
 "nextIntBetweenInclusive"(arg0: integer, arg1: integer): integer
 "nextBoolean"(): boolean
 "triangle"(arg0: double, arg1: double): double
 "consumeCount"(arg0: integer): void
 "nextInt"(arg0: integer, arg1: integer): integer
}

export namespace $IRandomizer {
function create(arg0: long): $RandomSource
function createThreadSafe(): $RandomSource
function create(): $RandomSource
function createNewThreadLocalInstance(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRandomizer$Type = ($IRandomizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRandomizer_ = $IRandomizer$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$IClientWorld" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IClientWorld {

 "dsurround_getLoadedChunks"(): $Stream<($LevelChunk)>

(): $Stream<($LevelChunk)>
}

export namespace $IClientWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientWorld$Type = ($IClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientWorld_ = $IClientWorld$Type;
}}
declare module "packages/org/orecruncher/dsurround/sound/$ISoundFactory" {
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$EntityBoundSoundInstance, $EntityBoundSoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$EntityBoundSoundInstance"
import {$SimpleSoundInstance, $SimpleSoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SimpleSoundInstance"
import {$BackgroundSoundLoop, $BackgroundSoundLoop$Type} from "packages/org/orecruncher/dsurround/sound/$BackgroundSoundLoop"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISoundFactory {

 "getLocation"(): $ResourceLocation
 "createBackgroundSoundLoopAt"(arg0: $BlockPos$Type): $BackgroundSoundLoop
 "createAsMusic"(): $Music
 "createBackgroundSoundLoop"(): $BackgroundSoundLoop
 "createAtLocation"(entity: $Entity$Type): $SimpleSoundInstance
 "createAtLocation"(position: $Vec3$Type): $SimpleSoundInstance
 "createAtLocation"(arg0: $Vec3$Type, arg1: float): $SimpleSoundInstance
 "createAtLocation"(pos: $BlockPos$Type): $SimpleSoundInstance
 "createAtLocation"(pos: $BlockPos$Type, volumeScale: float): $SimpleSoundInstance
 "createAsAdditional"(): $SimpleSoundInstance
 "createAsMood"(entity: $Entity$Type, minRange: integer, maxRange: integer): $SimpleSoundInstance
 "attachToEntity"(arg0: $Entity$Type): $EntityBoundSoundInstance
}

export namespace $ISoundFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundFactory$Type = ($ISoundFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundFactory_ = $ISoundFactory$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinClientChunkManager" {
import {$ClientChunkCache$Storage, $ClientChunkCache$Storage$Type} from "packages/net/minecraft/client/multiplayer/$ClientChunkCache$Storage"

export interface $MixinClientChunkManager {

 "dsurround_getClientChunkMap"(): $ClientChunkCache$Storage

(): $ClientChunkCache$Storage
}

export namespace $MixinClientChunkManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinClientChunkManager$Type = ($MixinClientChunkManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinClientChunkManager_ = $MixinClientChunkManager$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/block/$BlockInfo" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ISoundFactory, $ISoundFactory$Type} from "packages/org/orecruncher/dsurround/sound/$ISoundFactory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockConfigRule, $BlockConfigRule$Type} from "packages/org/orecruncher/dsurround/config/data/$BlockConfigRule"
import {$IBlockEffectProducer, $IBlockEffectProducer$Type} from "packages/org/orecruncher/dsurround/effects/$IBlockEffectProducer"
import {$IRandomizer, $IRandomizer$Type} from "packages/org/orecruncher/dsurround/lib/random/$IRandomizer"

export class $BlockInfo {

constructor(version: integer)
constructor(version: integer, state: $BlockState$Type)

public "toString"(): string
public "update"(config: $BlockConfigRule$Type): void
public "trim"(): void
public "isDefault"(): boolean
public "getVersion"(): integer
public "hasSoundsOrEffects"(): boolean
public "getSoundToPlay"(random: $IRandomizer$Type): $Optional<($ISoundFactory)>
public "getEffectProducers"(): $Collection<($IBlockEffectProducer)>
public "getSoundReflectivity"(): float
public "getSoundOcclusion"(): float
get "default"(): boolean
get "version"(): integer
get "effectProducers"(): $Collection<($IBlockEffectProducer)>
get "soundReflectivity"(): float
get "soundOcclusion"(): float
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
declare module "packages/org/orecruncher/dsurround/runtime/audio/effects/$SourcePropertyFloat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SourcePropertyFloat {

constructor(property: integer, val: float, min: float, max: float)

public "getValue"(): float
public "apply"(sourceId: integer): void
public "setValue"(f: float): void
public "setProcess"(flag: boolean): void
public "doProcess"(): boolean
get "value"(): float
set "value"(value: float)
set "process"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourcePropertyFloat$Type = ($SourcePropertyFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourcePropertyFloat_ = $SourcePropertyFloat$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/biome/$IBiomeSoundProvider" {
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ISoundFactory, $ISoundFactory$Type} from "packages/org/orecruncher/dsurround/sound/$ISoundFactory"
import {$SoundEventType, $SoundEventType$Type} from "packages/org/orecruncher/dsurround/config/$SoundEventType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRandomizer, $IRandomizer$Type} from "packages/org/orecruncher/dsurround/lib/random/$IRandomizer"

export interface $IBiomeSoundProvider {

 "getBackgroundMusic"(arg0: $IRandomizer$Type): $Optional<($Music)>
 "findBiomeSoundMatches"(): $Collection<($ISoundFactory)>
 "getExtraSound"(arg0: $SoundEventType$Type, arg1: $IRandomizer$Type): $Optional<($ISoundFactory)>
}

export namespace $IBiomeSoundProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBiomeSoundProvider$Type = ($IBiomeSoundProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBiomeSoundProvider_ = $IBiomeSoundProvider$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$IMusicManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMusicManager {

 "dsurround_getDiagnosticText"(): string
 "dsurround_reset"(): void
 "dsurround_setPaused"(arg0: boolean): void
}

export namespace $IMusicManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMusicManager$Type = ($IMusicManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMusicManager_ = $IMusicManager$Type;
}}
declare module "packages/org/orecruncher/dsurround/runtime/audio/effects/$EffectData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EffectData {


public "clamp"(): void
public "setProcess"(flag: boolean): void
public "doProcess"(): boolean
set "process"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectData$Type = ($EffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectData_ = $EffectData$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/data/$BlockConfigRule" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IMatcher, $IMatcher$Type} from "packages/org/orecruncher/dsurround/lib/$IMatcher"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEffectConfigRule, $BlockEffectConfigRule$Type} from "packages/org/orecruncher/dsurround/config/data/$BlockEffectConfigRule"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"
import {$AcousticConfig, $AcousticConfig$Type} from "packages/org/orecruncher/dsurround/config/data/$AcousticConfig"

export class $BlockConfigRule extends $Record {
static readonly "CODEC": $Codec<($BlockConfigRule)>

constructor(blocks: $List$Type<($IMatcher$Type<($BlockState$Type)>)>, clearSounds: boolean, soundChance: $Optional$Type<($Script$Type)>, acoustics: $List$Type<($AcousticConfig$Type)>, effects: $List$Type<($BlockEffectConfigRule$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "match"(state: $BlockState$Type): boolean
public "blocks"(): $List<($IMatcher<($BlockState)>)>
public "soundChance"(): $Optional<($Script)>
public "clearSounds"(): boolean
public "effects"(): $List<($BlockEffectConfigRule)>
public "acoustics"(): $List<($AcousticConfig)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConfigRule$Type = ($BlockConfigRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockConfigRule_ = $BlockConfigRule$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/biome/biometraits/$BiomeTraits" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BiomeTrait, $BiomeTrait$Type} from "packages/org/orecruncher/dsurround/config/$BiomeTrait"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BiomeTraits {


public "toString"(): string
public "contains"(trait: string): boolean
public "contains"(trait: $BiomeTrait$Type): boolean
public static "from"(...traits: ($BiomeTrait$Type)[]): $BiomeTraits
public "forEach"(consumer: $Consumer$Type<($BiomeTrait$Type)>): void
public "mergeTraits"(traits: $Collection$Type<($BiomeTrait$Type)>): void
public static "createFrom"(id: $ResourceLocation$Type, biome: $Biome$Type): $BiomeTraits
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeTraits$Type = ($BiomeTraits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeTraits_ = $BiomeTraits$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$ILivingEntityExtended" {
import {$EntityEffectInfo, $EntityEffectInfo$Type} from "packages/org/orecruncher/dsurround/effects/entity/$EntityEffectInfo"

export interface $ILivingEntityExtended {

 "dsurround_getPotionSwirlColor"(): integer
 "dsurround_setPotionSwirlColor"(arg0: integer): void
 "dsurround_getEffectInfo"(): $EntityEffectInfo
 "dsurround_setEffectInfo"(arg0: $EntityEffectInfo$Type): void
 "dsurround_isJumping"(): boolean
}

export namespace $ILivingEntityExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityExtended$Type = ($ILivingEntityExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityExtended_ = $ILivingEntityExtended$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/$BlockEffectType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IBlockEffectProducer, $IBlockEffectProducer$Type} from "packages/org/orecruncher/dsurround/effects/$IBlockEffectProducer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"

export class $BlockEffectType extends $Enum<($BlockEffectType)> {
static readonly "UNKNOWN": $BlockEffectType
static readonly "FLAME_JET": $BlockEffectType
static readonly "BUBBLE_COLUMN": $BlockEffectType
static readonly "FIREFLY": $BlockEffectType
static readonly "CODEC": $Codec<($BlockEffectType)>


public "getName"(): string
public static "values"(): ($BlockEffectType)[]
public static "valueOf"(name: string): $BlockEffectType
public "createInstance"(chance: $Script$Type, conditions: $Script$Type): $Optional<($IBlockEffectProducer)>
public "isEnabled"(): boolean
public static "byName"(name: string): $BlockEffectType
get "name"(): string
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEffectType$Type = (("firefly") | ("flame_jet") | ("bubble_column") | ("unknown")) | ($BlockEffectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEffectType_ = $BlockEffectType$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/audio/$MixinSoundBuffer" {
import {$AudioFormat, $AudioFormat$Type} from "packages/javax/sound/sampled/$AudioFormat"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export interface $MixinSoundBuffer {

 "dsurround_getSample"(): $ByteBuffer
 "dsurround_setFormat"(arg0: $AudioFormat$Type): void
 "dsurround_getFormat"(): $AudioFormat
}

export namespace $MixinSoundBuffer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinSoundBuffer$Type = ($MixinSoundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinSoundBuffer_ = $MixinSoundBuffer$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/data/$BlockEffectConfigRule" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockEffectType, $BlockEffectType$Type} from "packages/org/orecruncher/dsurround/config/$BlockEffectType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"

export class $BlockEffectConfigRule extends $Record {
static readonly "CODEC": $Codec<($BlockEffectConfigRule)>

constructor(effect: $BlockEffectType$Type, conditions: $Script$Type, spawnChance: $Script$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "spawnChance"(): $Script
public "conditions"(): $Script
public "effect"(): $BlockEffectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEffectConfigRule$Type = ($BlockEffectConfigRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEffectConfigRule_ = $BlockEffectConfigRule$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$ISoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISoundEngine {

 "dsurround_getDevicePointer"(): long

(): long
}

export namespace $ISoundEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoundEngine$Type = ($ISoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISoundEngine_ = $ISoundEngine$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinRaycastContextAccessor" {
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $MixinRaycastContextAccessor {

 "dsurround_getStartPoint"(): $Vec3
 "dsurround_setStartPoint"(arg0: $Vec3$Type): void
 "dsurround_getEndPoint"(): $Vec3
 "dsurround_setEndPoint"(arg0: $Vec3$Type): void
 "dsurround_setShapeContext"(arg0: $CollisionContext$Type): void
}

export namespace $MixinRaycastContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinRaycastContextAccessor$Type = ($MixinRaycastContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinRaycastContextAccessor_ = $MixinRaycastContextAccessor$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$IBlockStateExtended" {
import {$BlockInfo, $BlockInfo$Type} from "packages/org/orecruncher/dsurround/config/block/$BlockInfo"

export interface $IBlockStateExtended {

 "dsurround_getBlockInfo"(): $BlockInfo
 "dsurround_setBlockInfo"(arg0: $BlockInfo$Type): void
}

export namespace $IBlockStateExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateExtended$Type = ($IBlockStateExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockStateExtended_ = $IBlockStateExtended$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/audio/$MixinSoundManagerAccessor" {
import {$SoundEngine, $SoundEngine$Type} from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $MixinSoundManagerAccessor {

 "dsurround_getSoundSystem"(): $SoundEngine

(): $SoundEngine
}

export namespace $MixinSoundManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinSoundManagerAccessor$Type = ($MixinSoundManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinSoundManagerAccessor_ = $MixinSoundManagerAccessor$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$IBiomeExtended" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"
import {$BiomeInfo, $BiomeInfo$Type} from "packages/org/orecruncher/dsurround/config/biome/$BiomeInfo"

export interface $IBiomeExtended {

 "dsurround_getSpecialEffects"(): $BiomeSpecialEffects
 "dsurround_getInfo"(): $BiomeInfo
 "dsurround_setInfo"(arg0: $BiomeInfo$Type): void
 "dsurround_getWeather"(): $Biome$ClimateSettings
 "dsurround_getTemperature"(arg0: $BlockPos$Type): float
}

export namespace $IBiomeExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBiomeExtended$Type = ($IBiomeExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBiomeExtended_ = $IBiomeExtended$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/$SoundEventType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SoundEventType extends $Enum<($SoundEventType)> {
static readonly "LOOP": $SoundEventType
static readonly "MOOD": $SoundEventType
static readonly "ADDITION": $SoundEventType
static readonly "MUSIC": $SoundEventType
static readonly "CODEC": $Codec<($SoundEventType)>


public "getName"(): string
public static "values"(): ($SoundEventType)[]
public static "valueOf"(name: string): $SoundEventType
public static "byName"(name: string): $SoundEventType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventType$Type = (("music") | ("mood") | ("loop") | ("addition")) | ($SoundEventType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEventType_ = $SoundEventType$Type;
}}
declare module "packages/org/orecruncher/dsurround/lib/scripting/$Script" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Script {
static readonly "CODEC": $Codec<($Script)>
static readonly "TRUE": $Script

constructor(script: string)

public "toString"(): string
public "asString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Script$Type = ($Script);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Script_ = $Script$Type;
}}
declare module "packages/org/orecruncher/dsurround/runtime/audio/effects/$LowPassData" {
import {$EffectData, $EffectData$Type} from "packages/org/orecruncher/dsurround/runtime/audio/effects/$EffectData"

export class $LowPassData extends $EffectData {
 "gain": float
 "gainHF": float

constructor()

public "clamp"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LowPassData$Type = ($LowPassData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LowPassData_ = $LowPassData$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/data/$AcousticConfig" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$SoundEventType, $SoundEventType$Type} from "packages/org/orecruncher/dsurround/config/$SoundEventType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"

export class $AcousticConfig extends $Record {
static readonly "CODEC": $Codec<($AcousticConfig)>

constructor(factory: $ResourceLocation$Type, conditions: $Script$Type, weight: integer, type: $SoundEventType$Type)

public "type"(): $SoundEventType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $ResourceLocation
public "conditions"(): $Script
public "weight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcousticConfig$Type = ($AcousticConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AcousticConfig_ = $AcousticConfig$Type;
}}
declare module "packages/org/orecruncher/dsurround/effects/$IEntityEffect" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$EntityEffectInfo, $EntityEffectInfo$Type} from "packages/org/orecruncher/dsurround/effects/entity/$EntityEffectInfo"
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"

export interface $IEntityEffect {

 "tick"(manager: $EntityEffectInfo$Type): void
 "addParticle"(particle: $Particle$Type): void
 "activate"(manager: $EntityEffectInfo$Type): void
 "deactivate"(manager: $EntityEffectInfo$Type): void
 "playSound"(sound: $SoundInstance$Type): void
}

export namespace $IEntityEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityEffect$Type = ($IEntityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityEffect_ = $IEntityEffect$Type;
}}
declare module "packages/org/orecruncher/dsurround/effects/entity/$EntityEffectInfo" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IEntityEffect, $IEntityEffect$Type} from "packages/org/orecruncher/dsurround/effects/$IEntityEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EntityEffectInfo {

constructor(version: integer, entity: $LivingEntity$Type, effects: $Collection$Type<($IEntityEffect$Type)>)

public "isAlive"(): boolean
public "isDefault"(): boolean
public "getVersion"(): integer
public "tick"(): void
public "getEntity"(): $LivingEntity
public "isCurrentPlayer"(player: $LivingEntity$Type): boolean
public static "createDefault"(version: integer): $EntityEffectInfo
public "activate"(): void
public "deactivate"(): void
public "isRemoved"(): boolean
public "getEffects"(): $Collection<($IEntityEffect)>
get "alive"(): boolean
get "default"(): boolean
get "version"(): integer
get "entity"(): $LivingEntity
get "removed"(): boolean
get "effects"(): $Collection<($IEntityEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEffectInfo$Type = ($EntityEffectInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEffectInfo_ = $EntityEffectInfo$Type;
}}
declare module "packages/org/orecruncher/dsurround/effects/$IBlockEffect" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBlockEffect {

 "getPosition"(): $Vec3
 "remove"(): void
 "tick"(): void
 "isDone"(): boolean
 "getPosIndex"(): long
 "getPos"(): $BlockPos
}

export namespace $IBlockEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEffect$Type = ($IBlockEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEffect_ = $IBlockEffect$Type;
}}
declare module "packages/org/orecruncher/dsurround/config/data/$BiomeConfigRule" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeTrait, $BiomeTrait$Type} from "packages/org/orecruncher/dsurround/config/$BiomeTrait"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TextColor, $TextColor$Type} from "packages/net/minecraft/network/chat/$TextColor"
import {$Script, $Script$Type} from "packages/org/orecruncher/dsurround/lib/scripting/$Script"
import {$AcousticConfig, $AcousticConfig$Type} from "packages/org/orecruncher/dsurround/config/data/$AcousticConfig"

export class $BiomeConfigRule extends $Record {
static readonly "CODEC": $Codec<($BiomeConfigRule)>

constructor(biomeSelector: $Script$Type, comment: $Optional$Type<(string)>, priority: integer, traits: $List$Type<($BiomeTrait$Type)>, clearSounds: boolean, fogColor: $Optional$Type<($TextColor$Type)>, additionalSoundChance: $Optional$Type<($Script$Type)>, moodSoundChance: $Optional$Type<($Script$Type)>, acoustics: $List$Type<($AcousticConfig$Type)>)

public "priority"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "comment"(): $Optional<(string)>
public "additionalSoundChance"(): $Optional<($Script)>
public "moodSoundChance"(): $Optional<($Script)>
public "biomeSelector"(): $Script
public "clearSounds"(): boolean
public "traits"(): $List<($BiomeTrait)>
public "acoustics"(): $List<($AcousticConfig)>
public "fogColor"(): $Optional<($TextColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeConfigRule$Type = ($BiomeConfigRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeConfigRule_ = $BiomeConfigRule$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixinutils/$ISourceContext" {
import {$SourceContext, $SourceContext$Type} from "packages/org/orecruncher/dsurround/runtime/audio/$SourceContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $ISourceContext {

 "dsurround_setData"(arg0: $SourceContext$Type): void
 "dsurround_getId"(): integer
 "dsurround_getData"(): $Optional<($SourceContext)>
}

export namespace $ISourceContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceContext$Type = ($ISourceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISourceContext_ = $ISourceContext$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinButtonWidget" {
import {$Button$CreateNarration, $Button$CreateNarration$Type} from "packages/net/minecraft/client/gui/components/$Button$CreateNarration"
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $MixinButtonWidget {

 "dsurround_getNarrationSupplier"(): $Button$CreateNarration
 "dsurround_getPressAction"(): $Button$OnPress
}

export namespace $MixinButtonWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinButtonWidget$Type = ($MixinButtonWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinButtonWidget_ = $MixinButtonWidget$Type;
}}
declare module "packages/org/orecruncher/dsurround/sound/$BackgroundSoundLoop" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Sound, $Sound$Type} from "packages/net/minecraft/client/resources/sounds/$Sound"
import {$SoundInstance$Attenuation, $SoundInstance$Attenuation$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance$Attenuation"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$AbstractTickableSoundInstance, $AbstractTickableSoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$AbstractTickableSoundInstance"

export class $BackgroundSoundLoop extends $AbstractTickableSoundInstance {
 "sound": $Sound
readonly "source": $SoundSource
readonly "location": $ResourceLocation
 "volume": float
 "pitch": float
 "x": double
 "y": double
 "z": double
 "looping": boolean
 "delay": integer
 "attenuation": $SoundInstance$Attenuation
 "relative": boolean
 "random": $RandomSource

constructor(soundEvent: $SoundEvent$Type)
constructor(soundEvent: $SoundEvent$Type, pos: $BlockPos$Type)

public "toString"(): string
public "setScaleTarget"(target: float): void
public "getVolume"(): float
public "getPos"(): $BlockPos
public "setPitch"(pitch: float): $BackgroundSoundLoop
public "isFading"(): boolean
public "fadeIn"(): void
public "fadeOut"(): void
public "setVolume"(volume: float): $BackgroundSoundLoop
public "tick"(): void
public static "createUnseededRandom"(): $RandomSource
set "scaleTarget"(value: float)
get "volume"(): float
get "pos"(): $BlockPos
set "pitch"(value: float)
get "fading"(): boolean
set "volume"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackgroundSoundLoop$Type = ($BackgroundSoundLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackgroundSoundLoop_ = $BackgroundSoundLoop$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinClientWorldProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinClientWorldProperties {

 "dsurround_isFlatWorld"(): boolean

(): boolean
}

export namespace $MixinClientWorldProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinClientWorldProperties$Type = ($MixinClientWorldProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinClientWorldProperties_ = $MixinClientWorldProperties$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/audio/$MixinSoundEngineAccessor" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$Listener, $Listener$Type} from "packages/com/mojang/blaze3d/audio/$Listener"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$Type} from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MixinSoundEngineAccessor {

 "dsurround_getSources"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
 "dsurround_getListener"(): $Listener
}

export namespace $MixinSoundEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinSoundEngineAccessor$Type = ($MixinSoundEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinSoundEngineAccessor_ = $MixinSoundEngineAccessor$Type;
}}
declare module "packages/org/orecruncher/dsurround/runtime/audio/$SourceContext" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$LowPassData, $LowPassData$Type} from "packages/org/orecruncher/dsurround/runtime/audio/effects/$LowPassData"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SourcePropertyFloat, $SourcePropertyFloat$Type} from "packages/org/orecruncher/dsurround/runtime/audio/effects/$SourcePropertyFloat"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"

export class $SourceContext implements $Callable<(void)> {

constructor(sourceId: integer)

public "getPosition"(): $Vec3
public "toString"(): string
public "getId"(): integer
public "exec"(): void
public "enable"(): void
public "call"(): void
public "tick"(): void
public "isEnabled"(): boolean
public "sync"(): any
public "shouldExecute"(): boolean
public "getCategory"(): $SoundSource
public "getSound"(): $SoundInstance
public "getLowPass1"(): $LowPassData
public "getLowPass2"(): $LowPassData
public "getLowPass0"(): $LowPassData
public "getAirAbsorb"(): $SourcePropertyFloat
public "getLowPass3"(): $LowPassData
public "attachSound"(sound: $SoundInstance$Type): void
public "getDirect"(): $LowPassData
get "position"(): $Vec3
get "id"(): integer
get "enabled"(): boolean
get "category"(): $SoundSource
get "sound"(): $SoundInstance
get "lowPass1"(): $LowPassData
get "lowPass2"(): $LowPassData
get "lowPass0"(): $LowPassData
get "airAbsorb"(): $SourcePropertyFloat
get "lowPass3"(): $LowPassData
get "direct"(): $LowPassData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceContext$Type = ($SourceContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceContext_ = $SourceContext$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinAbstractSoundInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinAbstractSoundInstance {

 "dsurround_getRawVolume"(): float
 "dsurround_getRawPitch"(): float
}

export namespace $MixinAbstractSoundInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinAbstractSoundInstance$Type = ($MixinAbstractSoundInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinAbstractSoundInstance_ = $MixinAbstractSoundInstance$Type;
}}
declare module "packages/org/orecruncher/dsurround/effects/$IBlockEffectProducer" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IBlockEffect, $IBlockEffect$Type} from "packages/org/orecruncher/dsurround/effects/$IBlockEffect"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IRandomizer, $IRandomizer$Type} from "packages/org/orecruncher/dsurround/lib/random/$IRandomizer"

export interface $IBlockEffectProducer {

 "produce"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $IRandomizer$Type): $Optional<($IBlockEffect)>

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $IRandomizer$Type): $Optional<($IBlockEffect)>
}

export namespace $IBlockEffectProducer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEffectProducer$Type = ($IBlockEffectProducer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEffectProducer_ = $IBlockEffectProducer$Type;
}}
declare module "packages/org/orecruncher/dsurround/mixins/core/$MixinClientChunkMap" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$AtomicReferenceArray, $AtomicReferenceArray$Type} from "packages/java/util/concurrent/atomic/$AtomicReferenceArray"

export interface $MixinClientChunkMap {

 "dsurround_getChunks"(): $AtomicReferenceArray<($LevelChunk)>

(): $AtomicReferenceArray<($LevelChunk)>
}

export namespace $MixinClientChunkMap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinClientChunkMap$Type = ($MixinClientChunkMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinClientChunkMap_ = $MixinClientChunkMap$Type;
}}

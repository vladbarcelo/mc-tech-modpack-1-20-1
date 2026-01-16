declare module "packages/folk/sisby/surveyor/packet/$S2CUpdateRegionPacket" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$RegionSummary, $RegionSummary$Type} from "packages/folk/sisby/surveyor/terrain/$RegionSummary"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"

export class $S2CUpdateRegionPacket extends $Record implements $S2CPacket {
static readonly "ID": $ResourceLocation

constructor(dimension: $ResourceKey$Type<($Level$Type)>, shared: boolean, regionPos: $RegionPos$Type, biomePalette: $List$Type<(integer)>, blockPalette: $List$Type<(integer)>, set: $BitSet$Type, chunks: $List$Type<($ChunkSummary$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(dimension: $ResourceKey$Type<($Level$Type)>, shared: boolean, regionPos: $RegionPos$Type, summary: $RegionSummary$Type, keys: $BitSet$Type): $S2CUpdateRegionPacket
public "set"(): $BitSet
public static "read"(buf: $FriendlyByteBuf$Type): $S2CUpdateRegionPacket
public "getId"(): $ResourceLocation
public "shared"(): boolean
public "dimension"(): $ResourceKey<($Level)>
public "biomePalette"(): $List<(integer)>
public "blockPalette"(): $List<(integer)>
public "chunks"(): $List<($ChunkSummary)>
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "regionPos"(): $RegionPos
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(server: $MinecraftServer$Type): void
public "send"(player: $ServerPlayer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CUpdateRegionPacket$Type = ($S2CUpdateRegionPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CUpdateRegionPacket_ = $S2CUpdateRegionPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/client/$SurveyorClient$ClientExploration" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SurveyorClient$ClientExploration extends $Record implements $SurveyorExploration {

constructor(groupPlayers: $Set$Type<($UUID$Type)>, chunks: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($RegionPos$Type), ($BitSet$Type)>, starts: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($ResourceKey$Type<($Structure$Type)>), ($LongSet$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "addStructure"(dimension: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
public "sharedPlayers"(): $Set<($UUID)>
public "mergeRegion"(dimension: $ResourceKey$Type<($Level$Type)>, regionPos: $RegionPos$Type, chunks: $BitSet$Type): void
public "groupPlayers"(): $Set<($UUID)>
public "chunks"(): $Table<($ResourceKey<($Level)>), ($RegionPos), ($BitSet)>
public "starts"(): $Table<($ResourceKey<($Level)>), ($ResourceKey<($Structure)>), ($LongSet)>
public "personal"(): boolean
public "addChunk"(dimension: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): void
public static "of"(player: $ServerPlayer$Type): $SurveyorExploration
public static "of"(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
public "limit"(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $WorldLandmarks$Type, keys: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>): $Multimap<($UUID), ($ResourceLocation)>
public "limit"(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "limit"(dimension: $ResourceKey$Type<($Level$Type)>, regionPos: $RegionPos$Type, chunks: $BitSet$Type): $BitSet
public "limit"(dimension: $ResourceKey$Type<($Level$Type)>, starts: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "limit"(dimension: $ResourceKey$Type<($Level$Type)>, chunks: $Map$Type<($RegionPos$Type), ($BitSet$Type)>): $Map<($RegionPos), ($BitSet)>
public "write"(nbt: $CompoundTag$Type): $CompoundTag
public "read"(nbt: $CompoundTag$Type): void
public "copyFrom"(oldExploration: $SurveyorExploration$Type): void
public "chunkCount"(): integer
public "updateClientForAddStructure"(summary: $WorldSummary$Type, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
public "exploredStructure"(dimension: $ResourceKey$Type<($Level$Type)>, structure: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
public "exploredChunk"(dimension: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): boolean
public "exploredLandmark"(dimension: $ResourceKey$Type<($Level$Type)>, landmark: $Landmark$Type): boolean
public "structureCount"(): integer
public "updateClientForMergeRegion"(summary: $WorldSummary$Type, regionPos: $RegionPos$Type, chunks: $BitSet$Type): void
public "updateClientForLandmarks"(summary: $WorldSummary$Type): void
public "replaceTerrain"(chunks: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($RegionPos$Type), ($BitSet$Type)>): void
public "updateClientForAddChunk"(summary: $WorldSummary$Type, chunkPos: $ChunkPos$Type): void
public "mergeStructures"(dimension: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, starts: $LongSet$Type): void
public "replaceStructures"(starts: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($ResourceKey$Type<($Structure$Type)>), ($LongSet$Type)>): void
public static "ofShared"(player: $ServerPlayer$Type): $SurveyorExploration
public static "ofShared"(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorClient$ClientExploration$Type = ($SurveyorClient$ClientExploration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorClient$ClientExploration_ = $SurveyorClient$ClientExploration$Type;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export interface $PlayerSummary {

 "pos"(): $Vec3
 "dimension"(): $ResourceKey<($Level)>
 "copyFrom"(oldSummary: $PlayerSummary$Type): void
 "exploration"(): $SurveyorExploration
 "viewDistance"(): integer
 "username"(): string
 "yaw"(): float
 "online"(): boolean
}

export namespace $PlayerSummary {
const KEY_DATA: string
const KEY_USERNAME: string
function of(player: $ServerPlayer$Type): $PlayerSummary
function of(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$Type = ($PlayerSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary_ = $PlayerSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/client/$SurveyorNetworkHandler" {
import {$ClientSummary, $ClientSummary$Type} from "packages/folk/sisby/surveyor/client/$ClientSummary"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"

export interface $SurveyorNetworkHandler {

 "surveyor$getSummary"(): $ClientSummary
 "getProfile"(): $GameProfile
}

export namespace $SurveyorNetworkHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorNetworkHandler$Type = ($SurveyorNetworkHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorNetworkHandler_ = $SurveyorNetworkHandler$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$RegionSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$S2CUpdateRegionPacket, $S2CUpdateRegionPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CUpdateRegionPacket"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $RegionSummary {
static readonly "KEY_BIOMES": string
static readonly "KEY_BLOCKS": string
static readonly "KEY_BIOME_WATER": string
static readonly "KEY_BIOME_FOLIAGE": string
static readonly "KEY_BIOME_GRASS": string
static readonly "KEY_BLOCK_COLORS": string
static readonly "KEY_CHUNKS": string


public "get"(pos: $ChunkPos$Type): $ChunkSummary
public "contains"(pos: $ChunkPos$Type): boolean
public "save"(unload: boolean): void
public "isLoaded"(): boolean
public "isDirty"(): boolean
public "readUpdatePacket"(packet: $S2CUpdateRegionPacket$Type): $BitSet
public "createUpdatePacket"(dimension: $ResourceKey$Type<($Level$Type)>, shared: boolean, regionPos: $RegionPos$Type, set: $BitSet$Type): $S2CUpdateRegionPacket
public "getBiomePalette"(): $RegistryPalette$ValueView<>
public "getBlockPalette"(): $RegistryPalette$ValueView<>
public static "mapIterable"<T, O>(palette: $Iterable$Type<(T)>, mapper: $Function$Type<(T), (O)>): $List<(O)>
public "bitSet"(): $BitSet
public "putChunk"(world: $Level$Type, chunk: $LevelChunk$Type): void
public "isUnloaded"(world: $Level$Type): boolean
public static "fromEmpty"(folder: $File$Type, summary: $WorldSummary$Type, regionPos: $RegionPos$Type): $RegionSummary
public static "fromFile"(file: $File$Type, summary: $WorldSummary$Type, regionPos: $RegionPos$Type): $RegionSummary
get "loaded"(): boolean
get "dirty"(): boolean
get "biomePalette"(): $RegistryPalette$ValueView<>
get "blockPalette"(): $RegistryPalette$ValueView<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionSummary$Type = ($RegionSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionSummary_ = $RegionSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$ServerSummary" {
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PacketSender, $PacketSender$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$PacketSender"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ServerSummary {
static readonly "KEY_GROUPS": string
static readonly "HOST": $UUID

constructor(server: $MinecraftServer$Type, offlineSummaries: $Map$Type<($UUID$Type), ($PlayerSummary$Type)>, shareGroups: $Map$Type<($UUID$Type), ($Set$Type<($UUID$Type)>)>)

public static "load"(server: $MinecraftServer$Type): $ServerSummary
public static "of"(server: $MinecraftServer$Type): $ServerSummary
public "save"(force: boolean, suppressLogs: boolean): void
public "groupSize"(player: $UUID$Type): integer
public "isDirty"(): boolean
public static "loadShareGroups"(server: $MinecraftServer$Type): $Map<($UUID), ($Set<($UUID)>)>
public "createPlayer"(player: $ServerPlayer$Type): void
public "getGroupSummaries"(player: $UUID$Type): $Map<($UUID), ($PlayerSummary)>
public "getPositionGroups"(): $Set<($Set<($UUID)>)>
public "getAllSummaries"(): $Map<($UUID), ($PlayerSummary)>
public static "onPlayerJoin"(handler: $ServerGamePacketListenerImpl$Type, sender: $PacketSender$Type, server: $MinecraftServer$Type): void
public "getExploration"(player: $UUID$Type): $SurveyorExploration
public "getSharingExploration"(player: $UUID$Type, mode: $NetworkMode$Type, withSelf: boolean): $SurveyorExploration
public "getSharingPlayers"(player: $UUID$Type, mode: $NetworkMode$Type, withSelf: boolean): $Set<($ServerPlayer)>
public "groupPlayers"(player: $UUID$Type): $Set<($PlayerSummary)>
public "updatePlayer"(uuid: $UUID$Type, nbt: $CompoundTag$Type, online: boolean): void
public "getGroup"(player: $UUID$Type): $Set<($UUID)>
public "getGroups"(): $Set<($Set<($UUID)>)>
public "getWorld"(dimension: $ResourceKey$Type<($Level$Type)>): $WorldSummary
public static "onTick"(server: $MinecraftServer$Type): void
public "getPlayer"(uuid: $UUID$Type): $PlayerSummary
public "loadWorlds"(): void
public "joinGroup"(player1: $UUID$Type, player2: $UUID$Type): void
public "leaveGroup"(player: $UUID$Type): void
public "getSharing"(player: $UUID$Type, mode: $NetworkMode$Type, withSelf: boolean): $Set<($UUID)>
get "dirty"(): boolean
get "positionGroups"(): $Set<($Set<($UUID)>)>
get "allSummaries"(): $Map<($UUID), ($PlayerSummary)>
get "groups"(): $Set<($Set<($UUID)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSummary$Type = ($ServerSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSummary_ = $ServerSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$S2CStructuresAddedPacket" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WorldStructures, $WorldStructures$Type} from "packages/folk/sisby/surveyor/structure/$WorldStructures"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $S2CStructuresAddedPacket extends $Record implements $S2CPacket {
static readonly "ID": $ResourceLocation

constructor(dimension: $ResourceKey$Type<($Level$Type)>, shared: boolean, starts: $Table$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type), ($StructureStartSummary$Type)>, types: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($ResourceKey$Type<($StructureType$Type<(any)>)>)>, tags: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($TagKey$Type<($Structure$Type)>)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(shared: boolean, key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, structures: $WorldStructures$Type): $S2CStructuresAddedPacket
public static "of"(shared: boolean, starts: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>, structures: $WorldStructures$Type): $S2CStructuresAddedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $S2CStructuresAddedPacket
public "getId"(): $ResourceLocation
public "types"(): $Map<($ResourceKey<($Structure)>), ($ResourceKey<($StructureType<(any)>)>)>
public "shared"(): boolean
public "dimension"(): $ResourceKey<($Level)>
public "tags"(): $Multimap<($ResourceKey<($Structure)>), ($TagKey<($Structure)>)>
public "starts"(): $Table<($ResourceKey<($Structure)>), ($ChunkPos), ($StructureStartSummary)>
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(server: $MinecraftServer$Type): void
public "send"(player: $ServerPlayer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CStructuresAddedPacket$Type = ($S2CStructuresAddedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CStructuresAddedPacket_ = $S2CStructuresAddedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/$WorldLandmarks" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$SyncLandmarksRemovedPacket, $SyncLandmarksRemovedPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncLandmarksRemovedPacket"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$File, $File$Type} from "packages/java/io/$File"
import {$SyncLandmarksAddedPacket, $SyncLandmarksAddedPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncLandmarksAddedPacket"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldLandmarks {
static readonly "GLOBAL": $UUID
static readonly "KEY_LANDMARKS": string
static readonly "KEY_REMOVED": string
static readonly "CODEC": $Codec<($Table<($UUID), ($ResourceLocation), ($Landmark)>)>
static readonly "REMOVED_CODEC": $Codec<($Multimap<($UUID), ($ResourceLocation)>)>
static readonly "XAERO_COLORS": (integer)[]

constructor(summary: $WorldSummary$Type, landmarks: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>, removed: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>, dirty: boolean)

public "remove"(sender: $UUID$Type, uuid: $UUID$Type, id: $ResourceLocation$Type): void
public "remove"(uuid: $UUID$Type, id: $ResourceLocation$Type): void
public "get"(uuid: $UUID$Type, id: $ResourceLocation$Type): $Landmark
public "put"(sender: $UUID$Type, landmark: $Landmark$Type): void
public "put"(landmark: $Landmark$Type): void
public static "load"(summary: $WorldSummary$Type, folder: $File$Type): $WorldLandmarks
public static "of"(world: $Level$Type): $WorldLandmarks
public "contains"(uuid: $UUID$Type, id: $ResourceLocation$Type): boolean
public "keySet"(exploration: $SurveyorExploration$Type): $Multimap<($UUID), ($ResourceLocation)>
public "save"(folder: $File$Type): integer
public "removed"(): $Multimap<($UUID), ($ResourceLocation)>
public "removeAll"(predicate: $Predicate$Type<($Landmark$Type)>): void
public "isDirty"(): boolean
public "readUpdatePacket"(packet: $SyncLandmarksAddedPacket$Type, sender: $ServerPlayer$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "readUpdatePacket"(packet: $SyncLandmarksRemovedPacket$Type, sender: $ServerPlayer$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "createUpdatePacket"(keySet: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>): $SyncLandmarksAddedPacket
public "asMap"(exploration: $SurveyorExploration$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "asMap"(uuid: $UUID$Type, exploration: $SurveyorExploration$Type): $Map<($ResourceLocation), ($Landmark)>
public "handleChanged"(changed: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>, local: boolean, sender: $UUID$Type): void
public "putForBatch"(changed: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>, landmark: $Landmark$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "putForBatch"(landmark: $Landmark$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "removeForBatch"(changed: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>, uuid: $UUID$Type, id: $ResourceLocation$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "removeForBatch"(uuid: $UUID$Type, id: $ResourceLocation$Type): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "removeLocal"(uuid: $UUID$Type, id: $ResourceLocation$Type): void
public "removeAllForBatch"(predicate: $Predicate$Type<($Landmark$Type)>): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "removeAllForBatch"(changed: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>, predicate: $Predicate$Type<($Landmark$Type)>): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "clientInitialized"(): void
public "writeNbt"(nbt: $CompoundTag$Type): $CompoundTag
public static "fromNbt"(summary: $WorldSummary$Type, nbt: $CompoundTag$Type, landmarksFile: $File$Type): $WorldLandmarks
public "putLocal"(landmark: $Landmark$Type): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldLandmarks$Type = ($WorldLandmarks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldLandmarks_ = $WorldLandmarks$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorServer" {
import {$ServerSummary, $ServerSummary$Type} from "packages/folk/sisby/surveyor/$ServerSummary"

export interface $SurveyorServer {

 "surveyor$getSummary"(): $ServerSummary

(): $ServerSummary
}

export namespace $SurveyorServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorServer$Type = ($SurveyorServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorServer_ = $SurveyorServer$Type;
}}
declare module "packages/folk/sisby/surveyor/util/$RegionPos" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RegionPos extends $Record {
static readonly "CODEC": $Codec<($RegionPos)>
static readonly "CHUNK_POWER": integer
static readonly "CHUNK_SIZE": integer
static readonly "CHUNK_AREA": integer
static readonly "BLOCK_POWER": integer
static readonly "BLOCK_SIZE": integer
static readonly "BLOCK_AREA": integer

constructor(x: integer, z: integer)

public "toLong"(): long
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(pos: string): $RegionPos
public static "of"(pos: long): $RegionPos
public static "of"(pos: $BlockPos$Type): $RegionPos
public static "of"(pos: $ChunkPos$Type): $RegionPos
public "x"(): integer
public "z"(): integer
public static "regionsToChunks"(chunks: $Map$Type<($RegionPos$Type), ($BitSet$Type)>): $Set<($ChunkPos)>
public static "regionRelative"(xz: integer): integer
public static "regionToChunk"(xz: integer): integer
public static "chunkToRegion"(xz: integer): integer
public static "regionToBlock"(xz: integer): integer
public static "blockToRegion"(xz: integer): integer
public static "chunkToBitSet"(pos: $ChunkPos$Type): $BitSet
public static "chunksToRegions"(chunks: $Iterable$Type<($ChunkPos$Type)>): $Map<($RegionPos), ($BitSet)>
public "chunkX"(): integer
public "chunkZ"(): integer
public static "bitToX"(bit: integer): integer
public static "bitToZ"(bit: integer): integer
public "blockX"(): integer
public "blockZ"(): integer
public "toBlock"(y: integer): $BlockPos
public "toChunks"(): $Set<($ChunkPos)>
public "toChunks"(bits: $BitSet$Type): $Set<($ChunkPos)>
public "forXZ"(action: $BiConsumer$Type<(integer), (integer)>): void
public static "chunkToBit"(pos: $ChunkPos$Type): integer
public static "chunkToBit"(relativeChunkX: integer, relativeChunkZ: integer): integer
public "toChunk"(bit: integer): $ChunkPos
public "toChunk"(): $ChunkPos
public "toChunk"(relativeChunkX: integer, relativeChunkZ: integer): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionPos$Type = ($RegionPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionPos_ = $RegionPos$Type;
}}
declare module "packages/folk/sisby/surveyor/util/$RegistryPalette" {
import {$IntSpliterator, $IntSpliterator$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSpliterator"
import {$IntIterator, $IntIterator$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import {$IntIterable, $IntIterable$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIterable"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$IntConsumer as $IntConsumer$0, $IntConsumer$Type as $IntConsumer$0$Type} from "packages/java/util/function/$IntConsumer"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"

export class $RegistryPalette<T> implements $IntIterable {

constructor(registry: $Registry$Type<(T)>)

public "get"(index: integer): integer
public "iterator"(): $IntIterator
public "find"(value: integer): integer
public "view"(): $RegistryPalette$ValueView<>
public "findOrAdd"(value: T): integer
public "findOrAdd"(value: integer): integer
public "forEach"(arg0: $IntConsumer$0$Type): void
/**
 * 
 * @deprecated
 */
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "forEach"(arg0: $IntConsumer$Type): void
public "intSpliterator"(): $IntSpliterator
public "intIterator"(): $IntIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryPalette$Type<T> = ($RegistryPalette<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryPalette_<T> = $RegistryPalette$Type<(T)>;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncLandmarksRemovedPacket" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SyncPacket, $SyncPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncPacket"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"

export class $SyncLandmarksRemovedPacket extends $Record implements $SyncPacket {
static readonly "ID": $ResourceLocation

constructor(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(dimension: $ResourceKey$Type<($Level$Type)>, uuid: $UUID$Type, id: $ResourceLocation$Type): $SyncLandmarksRemovedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $SyncLandmarksRemovedPacket
public "getId"(): $ResourceLocation
public "dimension"(): $ResourceKey<($Level)>
public "landmarks"(): $Multimap<($UUID), ($ResourceLocation)>
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "send"(sender: $UUID$Type, summary: $WorldSummary$Type, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(server: $MinecraftServer$Type): void
public "send"(player: $ServerPlayer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncLandmarksRemovedPacket$Type = ($SyncLandmarksRemovedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncLandmarksRemovedPacket_ = $SyncLandmarksRemovedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$StructureStartSummary" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"

export class $StructureStartSummary {

constructor(children: $Collection$Type<($StructurePieceSummary$Type)>)

public "getChildren"(): $Collection<($StructurePieceSummary)>
public "getBoundingBox"(): $BoundingBox
get "children"(): $Collection<($StructurePieceSummary)>
get "boundingBox"(): $BoundingBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureStartSummary$Type = ($StructureStartSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureStartSummary_ = $StructureStartSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary$PlayerEntitySummary" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export class $PlayerSummary$PlayerEntitySummary implements $PlayerSummary {

constructor(player: $Player$Type)

public "pos"(): $Vec3
public "dimension"(): $ResourceKey<($Level)>
public "exploration"(): $SurveyorExploration
public "viewDistance"(): integer
public "username"(): string
public "yaw"(): float
public "online"(): boolean
public static "of"(player: $ServerPlayer$Type): $PlayerSummary
public static "of"(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
public "copyFrom"(oldSummary: $PlayerSummary$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$PlayerEntitySummary$Type = ($PlayerSummary$PlayerEntitySummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary$PlayerEntitySummary_ = $PlayerSummary$PlayerEntitySummary$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$WorldTerrain" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$RegionSummary, $RegionSummary$Type} from "packages/folk/sisby/surveyor/terrain/$RegionSummary"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldTerrain {

constructor(summary: $WorldSummary$Type, regions: $Map$Type<($RegionPos$Type), ($RegionSummary$Type)>, folder: $File$Type)

public "get"(pos: $ChunkPos$Type): $ChunkSummary
public "put"(world: $Level$Type, chunk: $LevelChunk$Type): void
public static "load"(summary: $WorldSummary$Type, folder: $File$Type): $WorldTerrain
public static "of"(world: $Level$Type): $WorldTerrain
public "contains"(pos: $ChunkPos$Type): boolean
public "save"(world: $Level$Type): integer
public "getRegion"(regionPos: $RegionPos$Type): $RegionSummary
public "isDirty"(): boolean
public "queueUpdate"(regionPos: $RegionPos$Type, set: $BitSet$Type, player: $ServerPlayer$Type): void
public "getBiomePalette"(pos: $ChunkPos$Type): $RegistryPalette$ValueView<>
public "getBlockPalette"(pos: $ChunkPos$Type): $RegistryPalette$ValueView<>
public "sendUpdateForRegion"(regionPos: $RegionPos$Type, player: $ServerPlayer$Type, set: $BitSet$Type): void
public static "onChunkLoad"(world: $Level$Type, chunk: $LevelChunk$Type): void
public static "onChunkUnload"(world: $Level$Type, chunk: $LevelChunk$Type): void
public "bitSet"(exploration: $SurveyorExploration$Type): $Map<($RegionPos), ($BitSet)>
public static "onTick"(world: $ServerLevel$Type): void
public static "toKeys"(bitSets: $Map$Type<($RegionPos$Type), ($BitSet$Type)>, originChunk: $ChunkPos$Type): $Set<($ChunkPos)>
public static "toKeys"(bitSets: $Map$Type<($RegionPos$Type), ($BitSet$Type)>, regionComparator: $Comparator$Type<($RegionPos$Type)>): $Set<($ChunkPos)>
public static "toKeys"(bitSets: $Map$Type<($RegionPos$Type), ($BitSet$Type)>): $Set<($ChunkPos)>
public "serverTick"(world: $ServerLevel$Type): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTerrain$Type = ($WorldTerrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTerrain_ = $WorldTerrain$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap" {
import {$LandmarkComponentMap$Builder, $LandmarkComponentMap$Builder$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap$Builder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LandmarkComponentType, $LandmarkComponentType$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LandmarkComponentMap {
static readonly "CODEC": $Codec<($LandmarkComponentMap)>


public "remove"<T>(type: $LandmarkComponentType$Type<(any)>): T
public "get"<T>(type: $LandmarkComponentType$Type<(any)>): T
public "toString"(): string
public "size"(): integer
public static "builder"(): $LandmarkComponentMap$Builder
public "contains"(type: $LandmarkComponentType$Type<(any)>): boolean
public "set"<T>(type: $LandmarkComponentType$Type<(any)>, value: T): T
public "keySet"(): $Set<($LandmarkComponentType<(any)>)>
public "getOrDefault"<T>(type: $LandmarkComponentType$Type<(any)>, fallback: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandmarkComponentMap$Type = ($LandmarkComponentMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandmarkComponentMap_ = $LandmarkComponentMap$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorPlayer" {
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"

export interface $SurveyorPlayer {

 "surveyor$getSummary"(): $PlayerSummary

(): $PlayerSummary
}

export namespace $SurveyorPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorPlayer$Type = ($SurveyorPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorPlayer_ = $SurveyorPlayer$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/$Landmark" {
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LandmarkComponentMap$Builder, $LandmarkComponentMap$Builder$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap$Builder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$LandmarkComponentType, $LandmarkComponentType$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$LandmarkComponentHolder, $LandmarkComponentHolder$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentHolder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LandmarkComponentMap, $LandmarkComponentMap$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Landmark extends $Record implements $LandmarkComponentHolder {

constructor(owner: $UUID$Type, id: $ResourceLocation$Type, components: $LandmarkComponentMap$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "owner"(): $UUID
public static "create"(owner: $UUID$Type, id: $ResourceLocation$Type, componentChanges: $UnaryOperator$Type<($LandmarkComponentMap$Builder$Type)>): $Landmark
public static "global"(id: $ResourceLocation$Type, componentChanges: $UnaryOperator$Type<($LandmarkComponentMap$Builder$Type)>): $Landmark
public "components"(): $LandmarkComponentMap
public static "createIncremental"(landmarks: $WorldLandmarks$Type, uuid: $UUID$Type, prefix: $ResourceLocation$Type, componentChanges: $UnaryOperator$Type<($LandmarkComponentMap$Builder$Type)>): $Landmark
public "toText"(): $List<($Component)>
public static "createCodec"(uuid: $UUID$Type, id: $ResourceLocation$Type): $Codec<($Landmark)>
public static "globalIncremental"(landmarks: $WorldLandmarks$Type, prefix: $ResourceLocation$Type, componentChanges: $UnaryOperator$Type<($LandmarkComponentMap$Builder$Type)>): $Landmark
public "toNbt"(): $Tag
public "remove"<T>(type: $LandmarkComponentType$Type<(any)>): T
public "get"<T>(type: $LandmarkComponentType$Type<(any)>): T
public "apply"<T>(type: $LandmarkComponentType$Type<(T)>, defaultValue: T, applier: $UnaryOperator$Type<(T)>): T
public "apply"<T, U>(type: $LandmarkComponentType$Type<(T)>, defaultValue: T, change: U, applier: $BiFunction$Type<(T), (U), (T)>): T
public "contains"(type: $LandmarkComponentType$Type<(any)>): boolean
public "set"<T>(type: $LandmarkComponentType$Type<(T)>, value: T): T
public "getOrDefault"<T>(type: $LandmarkComponentType$Type<(any)>, fallback: T): T
public "getView"<T>(type: $LandmarkComponentType$Type<(T)>): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Landmark$Type = ($Landmark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Landmark_ = $Landmark$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap$Builder" {
import {$LandmarkComponentMap, $LandmarkComponentMap$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap"
import {$LandmarkComponentType, $LandmarkComponentType$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentType"

export class $LandmarkComponentMap$Builder {

constructor()

public "add"<T>(type: $LandmarkComponentType$Type<(T)>, value: T): $LandmarkComponentMap$Builder
public "put"<T>(type: $LandmarkComponentType$Type<(T)>, value: any): void
public "build"(): $LandmarkComponentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandmarkComponentMap$Builder$Type = ($LandmarkComponentMap$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandmarkComponentMap$Builder_ = $LandmarkComponentMap$Builder$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$LayerSummary$Raw" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $LayerSummary$Raw extends $Record {

constructor(exists: $BitSet$Type, depths: (integer)[], biomes: (integer)[], blocks: (integer)[], lightLevels: (integer)[], waterDepths: (integer)[], waterLights: (integer)[])

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "exists"(): $BitSet
public "blocks"(): (integer)[]
public "lightLevels"(): (integer)[]
public "waterDepths"(): (integer)[]
public "waterLights"(): (integer)[]
public "biomes"(): (integer)[]
public "depths"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerSummary$Raw$Type = ($LayerSummary$Raw);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerSummary$Raw_ = $LayerSummary$Raw$Type;
}}
declare module "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView" {
import {$RegistryPalette, $RegistryPalette$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $RegistryPalette$ValueView implements $IdMap<(T)> {

constructor(this$0: $RegistryPalette$Type<(any)>)

public "iterator"(): $Iterator<(T)>
public "registry"(): $Registry<(T)>
public "byId"(index: integer): T
public "getId"(value: T): integer
public "size"(): integer
public "byIdOrThrow"(arg0: integer): T
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryPalette$ValueView$Type = ($RegistryPalette$ValueView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryPalette$ValueView_ = $RegistryPalette$ValueView$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$RegionStructureSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $RegionStructureSummary {
static readonly "KEY_STRUCTURES": string
static readonly "KEY_STARTS": string
static readonly "KEY_PIECES": string


public "get"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): $StructureStartSummary
public "put"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public "put"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, summary: $StructureStartSummary$Type): void
public "contains"(world: $Level$Type, start: $StructureStart$Type): boolean
public "contains"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
public "keySet"(): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "isDirty"(): boolean
public static "readStructurePieceNbt"(nbt: $CompoundTag$Type): $StructurePieceSummary
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionStructureSummary$Type = ($RegionStructureSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionStructureSummary_ = $RegionStructureSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncLandmarksAddedPacket" {
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SyncPacket, $SyncPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncPacket"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"

export class $SyncLandmarksAddedPacket extends $Record implements $SyncPacket {
static readonly "ID": $ResourceLocation

constructor(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(keySet: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>, summary: $WorldLandmarks$Type): $SyncLandmarksAddedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $SyncLandmarksAddedPacket
public "getId"(): $ResourceLocation
public "dimension"(): $ResourceKey<($Level)>
public "landmarks"(): $Table<($UUID), ($ResourceLocation), ($Landmark)>
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "send"(sender: $UUID$Type, summary: $WorldSummary$Type, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(server: $MinecraftServer$Type): void
public "send"(player: $ServerPlayer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
public "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncLandmarksAddedPacket$Type = ($SyncLandmarksAddedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncLandmarksAddedPacket_ = $SyncLandmarksAddedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/config/$NetworkMode" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NetworkMode extends $Enum<($NetworkMode)> implements $Comparable<($NetworkMode)> {
static readonly "NONE": $NetworkMode
static readonly "SOLO": $NetworkMode
static readonly "GROUP": $NetworkMode
static readonly "SERVER": $NetworkMode


public static "values"(): ($NetworkMode)[]
public static "valueOf"(name: string): $NetworkMode
public "atMost"(other: $NetworkMode$Type): boolean
public "atLeast"(other: $NetworkMode$Type): boolean
public "compareTo"(arg0: $NetworkMode$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkMode$Type = (("server") | ("solo") | ("none") | ("group")) | ($NetworkMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkMode_ = $NetworkMode$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $LandmarkComponentType<T> extends $Record {
static readonly "CODEC": $Codec<($LandmarkComponentType<(any)>)>

constructor(id: $ResourceLocation$Type, codec: $Codec$Type<(T)>, viewer: $Function$Type<(T), ($Component$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "register"(type: $LandmarkComponentType$Type<(any)>): void
public "id"(): $ResourceLocation
public static "keySet"(): $Set<($ResourceLocation)>
public static "getType"(id: $ResourceLocation$Type): $LandmarkComponentType<(any)>
public static "containsType"(id: $ResourceLocation$Type): boolean
public "codec"(): $Codec<(T)>
public "viewer"(): $Function<(T), ($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandmarkComponentType$Type<T> = ($LandmarkComponentType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandmarkComponentType_<T> = $LandmarkComponentType$Type<(T)>;
}}
declare module "packages/folk/sisby/surveyor/packet/$C2SPacket" {
import {$SurveyorPacket, $SurveyorPacket$Type} from "packages/folk/sisby/surveyor/packet/$SurveyorPacket"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $C2SPacket extends $SurveyorPacket {

 "send"(): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $C2SPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $C2SPacket$Type = ($C2SPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $C2SPacket_ = $C2SPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncPacket" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$C2SPacket, $C2SPacket$Type} from "packages/folk/sisby/surveyor/packet/$C2SPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"

export interface $SyncPacket extends $C2SPacket, $S2CPacket {

 "send"(sender: $UUID$Type, summary: $WorldSummary$Type, mode: $NetworkMode$Type, withSelf: boolean): void
 "send"(): void
 "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
 "send"(server: $MinecraftServer$Type): void
 "send"(player: $ServerPlayer$Type): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $SyncPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncPacket$Type = ($SyncPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncPacket_ = $SyncPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SurveyorPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SurveyorPacket {

 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $SurveyorPacket {
const MAX_PAYLOAD_SIZE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorPacket$Type = ($SurveyorPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorPacket_ = $SurveyorPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$StructurePieceSummary" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$StructurePieceSerializationContext, $StructurePieceSerializationContext$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructurePieceSummary extends $StructurePiece {
static readonly "CAVE_AIR": $BlockState
 "boundingBox": $BoundingBox
 "mirror": $Mirror
 "rotation": $Rotation
 "genDepth": integer

constructor(type: $StructurePieceType$Type, chainLength: integer, boundingBox: $BoundingBox$Type, pieceNbt: $CompoundTag$Type)
constructor(nbt: $CompoundTag$Type)

public "getPieceNbt"(): $CompoundTag
public "toNbt"(): $CompoundTag
public static "fromPiece"(context: $StructurePieceSerializationContext$Type, piece: $StructurePiece$Type, withNbt: boolean): $StructurePieceSummary
public "postProcess"(world: $WorldGenLevel$Type, structureAccessor: $StructureManager$Type, chunkGenerator: $ChunkGenerator$Type, random: $RandomSource$Type, chunkBox: $BoundingBox$Type, chunkPos: $ChunkPos$Type, pivot: $BlockPos$Type): void
get "pieceNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePieceSummary$Type = ($StructurePieceSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePieceSummary_ = $StructurePieceSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/client/$ClientSummary" {
import {$SurveyorClient$ClientExploration, $SurveyorClient$ClientExploration$Type} from "packages/folk/sisby/surveyor/client/$SurveyorClient$ClientExploration"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ClientSummary {
static readonly "KEY_SHARED": string
readonly "personal": $SurveyorClient$ClientExploration
readonly "shared": $SurveyorClient$ClientExploration
readonly "saveFile": $File

constructor(biomeSeed: long, handler: $ClientPacketListener$Type)

public static "of"(handler: $ClientPacketListener$Type): $ClientSummary
public "connect"(): void
public "matchSummaries"(summaries: $Map$Type<($UUID$Type), ($PlayerSummary$Type)>): void
public "mergeSummaries"(summaries: $Map$Type<($UUID$Type), ($PlayerSummary$Type)>): void
public "disconnect"(): void
public "players"(group: $Set$Type<($UUID$Type)>): $Map<($UUID), ($PlayerSummary)>
public "getWorld"(dimension: $ResourceKey$Type<($Level$Type)>): $WorldSummary
public "leaveWorld"(dimension: $ResourceKey$Type<($Level$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSummary$Type = ($ClientSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSummary_ = $ClientSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$S2CPacket" {
import {$SurveyorPacket, $SurveyorPacket$Type} from "packages/folk/sisby/surveyor/packet/$SurveyorPacket"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"

export interface $S2CPacket extends $SurveyorPacket {

 "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
 "send"(server: $MinecraftServer$Type): void
 "send"(player: $ServerPlayer$Type): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type, allPlayers: $Collection$Type<($ServerPlayer$Type)>, mode: $NetworkMode$Type, withSelf: boolean): void
 "send"(sender: $UUID$Type, server: $MinecraftServer$Type, mode: $NetworkMode$Type, withSelf: boolean): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $S2CPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CPacket$Type = ($S2CPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CPacket_ = $S2CPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentHolder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LandmarkComponentMap, $LandmarkComponentMap$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentMap"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$LandmarkComponentType, $LandmarkComponentType$Type} from "packages/folk/sisby/surveyor/landmark/component/$LandmarkComponentType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export interface $LandmarkComponentHolder {

 "remove"<T>(type: $LandmarkComponentType$Type<(any)>): T
 "get"<T>(type: $LandmarkComponentType$Type<(any)>): T
 "apply"<T>(type: $LandmarkComponentType$Type<(T)>, defaultValue: T, applier: $UnaryOperator$Type<(T)>): T
 "apply"<T, U>(type: $LandmarkComponentType$Type<(T)>, defaultValue: T, change: U, applier: $BiFunction$Type<(T), (U), (T)>): T
 "contains"(type: $LandmarkComponentType$Type<(any)>): boolean
 "set"<T>(type: $LandmarkComponentType$Type<(T)>, value: T): T
 "getOrDefault"<T>(type: $LandmarkComponentType$Type<(any)>, fallback: T): T
 "components"(): $LandmarkComponentMap
 "getView"<T>(type: $LandmarkComponentType$Type<(T)>): $Component

(type: $LandmarkComponentType$Type<(any)>): T
}

export namespace $LandmarkComponentHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandmarkComponentHolder$Type = ($LandmarkComponentHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandmarkComponentHolder_ = $LandmarkComponentHolder$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$WorldStructures" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$S2CStructuresAddedPacket, $S2CStructuresAddedPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CStructuresAddedPacket"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$File, $File$Type} from "packages/java/io/$File"
import {$RegionStructureSummary, $RegionStructureSummary$Type} from "packages/folk/sisby/surveyor/structure/$RegionStructureSummary"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldStructures {
static readonly "KEY_STRUCTURES": string
static readonly "KEY_TYPE": string
static readonly "KEY_TAGS": string

constructor(summary: $WorldSummary$Type, regions: $Map$Type<($RegionPos$Type), ($RegionStructureSummary$Type)>, structureTypes: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($ResourceKey$Type<($StructureType$Type<(any)>)>)>, structureTags: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($TagKey$Type<($Structure$Type)>)>)

public "get"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): $StructureStartSummary
public "put"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public "put"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, start: $StructureStartSummary$Type, type: $ResourceKey$Type<($StructureType$Type<(any)>)>, tagKeys: $Collection$Type<($TagKey$Type<($Structure$Type)>)>): void
public static "load"(summary: $WorldSummary$Type, folder: $File$Type): $WorldStructures
public static "of"(world: $Level$Type): $WorldStructures
public "contains"(world: $Level$Type, start: $StructureStart$Type): boolean
public "contains"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
public "keySet"(exploration: $SurveyorExploration$Type): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "save"(folder: $File$Type): integer
public "getType"(key: $ResourceKey$Type<($Structure$Type)>): $ResourceKey<($StructureType<(any)>)>
public "isDirty"(): boolean
public "readUpdatePacket"(packet: $S2CStructuresAddedPacket$Type): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "createUpdatePacket"(shared: boolean, keySet: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>): $S2CStructuresAddedPacket
public static "readStructurePieceNbt"(nbt: $CompoundTag$Type): $StructurePieceSummary
public static "onStructurePlace"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public static "onChunkLoad"(world: $ServerLevel$Type, chunk: $LevelChunk$Type): void
public "asMap"(exploration: $SurveyorExploration$Type): $Map<($ResourceKey<($Structure)>), ($Map<($ChunkPos), ($StructureStartSummary)>)>
public "getTags"(key: $ResourceKey$Type<($Structure$Type)>): $Collection<($TagKey<($Structure)>)>
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStructures$Type = ($WorldStructures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldStructures_ = $WorldStructures$Type;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary$ServerPlayerEntitySummary" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerSummary$PlayerEntitySummary, $PlayerSummary$PlayerEntitySummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary$PlayerEntitySummary"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export class $PlayerSummary$ServerPlayerEntitySummary extends $PlayerSummary$PlayerEntitySummary implements $PlayerSummary {

constructor(player: $ServerPlayer$Type)

public "read"(nbt: $CompoundTag$Type): void
public "copyFrom"(oldSummary: $PlayerSummary$Type): void
public "exploration"(): $SurveyorExploration
public "setViewDistance"(viewDistance: integer): void
public "viewDistance"(): integer
public "writeNbt"(nbt: $CompoundTag$Type): void
public static "of"(player: $ServerPlayer$Type): $PlayerSummary
public static "of"(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
public "pos"(): $Vec3
public "dimension"(): $ResourceKey<($Level)>
public "username"(): string
public "yaw"(): float
public "online"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$ServerPlayerEntitySummary$Type = ($PlayerSummary$ServerPlayerEntitySummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary$ServerPlayerEntitySummary_ = $PlayerSummary$ServerPlayerEntitySummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$WorldSummary" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$File, $File$Type} from "packages/java/io/$File"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WorldStructures, $WorldStructures$Type} from "packages/folk/sisby/surveyor/structure/$WorldStructures"
import {$WorldTerrain, $WorldTerrain$Type} from "packages/folk/sisby/surveyor/terrain/$WorldTerrain"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $WorldSummary {

constructor(server: $MinecraftServer$Type, dimension: $ResourceKey$Type<($Level$Type)>, manager: $RegistryAccess$Type, folder: $File$Type)

public static "of"(world: $Level$Type): $WorldSummary
public "save"(world: $Level$Type, folder: $File$Type, suppressLogs: boolean): void
public "dimension"(): $ResourceKey<($Level)>
public "isDirty"(): boolean
public "manager"(): $RegistryAccess
public static "enableTerrain"(): void
public static "enableStructures"(): void
public static "enableLandmarks"(): void
public "isClient"(): boolean
public "server"(): $MinecraftServer
public "landmarks"(): $WorldLandmarks
public "world"(): $Level
public "structures"(): $WorldStructures
public "terrain"(): $WorldTerrain
get "dirty"(): boolean
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSummary$Type = ($WorldSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSummary_ = $WorldSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$ChunkSummary" {
import {$LayerSummary$Raw, $LayerSummary$Raw$Type} from "packages/folk/sisby/surveyor/terrain/$LayerSummary$Raw"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$RegistryPalette, $RegistryPalette$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChunkSummary {
static readonly "MINIMUM_AIR_DEPTH": integer
static readonly "KEY_AIR_COUNT": string
static readonly "KEY_LAYERS": string

constructor(buf: $FriendlyByteBuf$Type)
constructor(nbt: $CompoundTag$Type)
constructor(world: $Level$Type, chunk: $LevelChunk$Type, layerHeights: (integer)[], biomePalette: $RegistryPalette$Type<($Biome$Type)>, blockPalette: $RegistryPalette$Type<($Block$Type)>, countAir: boolean)

public "getAirCount"(): integer
public "toSingleLayer"(minY: integer, maxY: integer, worldHeight: integer): $LayerSummary$Raw
public "toSingleLayerBelow"(minY: integer, depthsAbove: (integer)[], worldHeight: integer): $LayerSummary$Raw
public "remap"(biomeRemap: $Map$Type<(integer), (integer)>, blockRemap: $Map$Type<(integer), (integer)>): void
public "writeNbt"(nbt: $CompoundTag$Type): $CompoundTag
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
get "airCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkSummary$Type = ($ChunkSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkSummary_ = $ChunkSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorExploration" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$RegionPos, $RegionPos$Type} from "packages/folk/sisby/surveyor/util/$RegionPos"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SurveyorExploration {

 "limit"(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $WorldLandmarks$Type, keys: $Multimap$Type<($UUID$Type), ($ResourceLocation$Type)>): $Multimap<($UUID), ($ResourceLocation)>
 "limit"(dimension: $ResourceKey$Type<($Level$Type)>, landmarks: $Table$Type<($UUID$Type), ($ResourceLocation$Type), ($Landmark$Type)>): $Table<($UUID), ($ResourceLocation), ($Landmark)>
 "limit"(dimension: $ResourceKey$Type<($Level$Type)>, regionPos: $RegionPos$Type, chunks: $BitSet$Type): $BitSet
 "limit"(dimension: $ResourceKey$Type<($Level$Type)>, starts: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
 "limit"(dimension: $ResourceKey$Type<($Level$Type)>, chunks: $Map$Type<($RegionPos$Type), ($BitSet$Type)>): $Map<($RegionPos), ($BitSet)>
 "write"(nbt: $CompoundTag$Type): $CompoundTag
 "read"(nbt: $CompoundTag$Type): void
 "copyFrom"(oldExploration: $SurveyorExploration$Type): void
 "chunkCount"(): integer
 "updateClientForAddStructure"(summary: $WorldSummary$Type, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
 "exploredStructure"(dimension: $ResourceKey$Type<($Level$Type)>, structure: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
 "addStructure"(dimension: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
 "sharedPlayers"(): $Set<($UUID)>
 "exploredChunk"(dimension: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): boolean
 "exploredLandmark"(dimension: $ResourceKey$Type<($Level$Type)>, landmark: $Landmark$Type): boolean
 "structureCount"(): integer
 "updateClientForMergeRegion"(summary: $WorldSummary$Type, regionPos: $RegionPos$Type, chunks: $BitSet$Type): void
 "updateClientForLandmarks"(summary: $WorldSummary$Type): void
 "mergeRegion"(dimension: $ResourceKey$Type<($Level$Type)>, regionPos: $RegionPos$Type, chunks: $BitSet$Type): void
 "replaceTerrain"(chunks: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($RegionPos$Type), ($BitSet$Type)>): void
 "updateClientForAddChunk"(summary: $WorldSummary$Type, chunkPos: $ChunkPos$Type): void
 "mergeStructures"(dimension: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, starts: $LongSet$Type): void
 "replaceStructures"(starts: $Table$Type<($ResourceKey$Type<($Level$Type)>), ($ResourceKey$Type<($Structure$Type)>), ($LongSet$Type)>): void
 "chunks"(): $Table<($ResourceKey<($Level)>), ($RegionPos), ($BitSet)>
 "starts"(): $Table<($ResourceKey<($Level)>), ($ResourceKey<($Structure)>), ($LongSet)>
 "personal"(): boolean
 "addChunk"(dimension: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): void
}

export namespace $SurveyorExploration {
const KEY_EXPLORED_TERRAIN: string
const KEY_EXPLORED_STRUCTURES: string
function of(player: $ServerPlayer$Type): $SurveyorExploration
function of(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
function ofShared(player: $ServerPlayer$Type): $SurveyorExploration
function ofShared(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorExploration$Type = ($SurveyorExploration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorExploration_ = $SurveyorExploration$Type;
}}

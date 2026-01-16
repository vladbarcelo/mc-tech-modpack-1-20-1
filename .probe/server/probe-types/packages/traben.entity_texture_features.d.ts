declare module "packages/traben/entity_texture_features/utils/$EntityIntLRU" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Object2IntLinkedOpenHashMap, $Object2IntLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntLinkedOpenHashMap"

export class $EntityIntLRU extends $Object2IntLinkedOpenHashMap<($UUID)> {

constructor(capacity: integer)
constructor()

public "put"(uuid: $UUID$Type, v: integer): integer
public "getInt"(k: any): integer
public "defaultReturnValue"(): integer
public "defaultReturnValue"(arg0: integer): void
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
public static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityIntLRU$Type = ($EntityIntLRU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityIntLRU_ = $EntityIntLRU$Type;
}}
declare module "packages/traben/entity_texture_features/features/player/$ETFPlayerEntity" {
import {$PlayerModelPart, $PlayerModelPart$Type} from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFPlayerEntity extends $ETFEntity {

 "etf$getName"(): $Component
 "etf$getEntity"(): $Entity
 "etf$isTeammate"(arg0: $Player$Type): boolean
 "etf$getInventory"(): $Inventory
 "etf$isPartVisible"(arg0: $PlayerModelPart$Type): boolean
 "etf$getUuidAsString"(): string
 "etf$getType"(): $EntityType<(any)>
 "etf$getUuid"(): $UUID
 "etf$getOptifineId"(): integer
 "etf$getBlockY"(): integer
 "etf$hasCustomName"(): boolean
 "etf$getCustomName"(): $Component
 "etf$getScoreboardTeam"(): $Team
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$distanceTo"(arg0: $Entity$Type): float
 "etf$getVelocity"(): $Vec3
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$canBeBright"(): boolean
 "etf$isBlockEntity"(): boolean
 "etf$getEntityKey"(): string
 "etf$getWorld"(): $Level
 "etf$getBlockPos"(): $BlockPos
 "etf$getNbt"(): $CompoundTag
}

export namespace $ETFPlayerEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerEntity$Type = ($ETFPlayerEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFPlayerEntity_ = $ETFPlayerEntity$Type;
}}
declare module "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider" {
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction, $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type} from "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction"
import {$IntOpenHashSet, $IntOpenHashSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntOpenHashSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFApi$ETFVariantSuffixProvider {

 "size"(): integer
 "getSuffixForETFEntity"(arg0: $ETFEntity$Type): integer
 "entityCanUpdate"(arg0: $UUID$Type): boolean
 "getAllSuffixes"(): $IntOpenHashSet
 "getSuffixForEntity"(entityToBeTested: $Entity$Type): integer
 "getSuffixForBlockEntity"(entityToBeTested: $BlockEntity$Type): integer
 "setRandomSupplier"(arg0: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type): void
}

export namespace $ETFApi$ETFVariantSuffixProvider {
function getVariantProviderOrNull(propertiesFileIdentifier: $ResourceLocation$Type, vanillaIdentifier: $ResourceLocation$Type, ...suffixKeyName: (string)[]): $ETFApi$ETFVariantSuffixProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$Type = ($ETFApi$ETFVariantSuffixProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFApi$ETFVariantSuffixProvider_ = $ETFApi$ETFVariantSuffixProvider$Type;
}}
declare module "packages/traben/entity_texture_features/config/screens/skin/$ETFConfigScreenSkinTool$NoseType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETFConfigScreenSkinTool$NoseType extends $Enum<($ETFConfigScreenSkinTool$NoseType)> {
static readonly "VILLAGER": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_REMOVE": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED_REMOVE": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_1": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_2": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_3": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_4": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_5": $ETFConfigScreenSkinTool$NoseType
static readonly "NONE": $ETFConfigScreenSkinTool$NoseType
readonly "id": integer


public static "values"(): ($ETFConfigScreenSkinTool$NoseType)[]
public static "valueOf"(name: string): $ETFConfigScreenSkinTool$NoseType
public "next"(): $ETFConfigScreenSkinTool$NoseType
public "getButtonText"(): $Component
public "getNosePixelColour"(): integer
public "appliesTextureOverlay"(): boolean
public "getByColorId"(id: integer): $ETFConfigScreenSkinTool$NoseType
get "buttonText"(): $Component
get "nosePixelColour"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFConfigScreenSkinTool$NoseType$Type = (("villager_textured") | ("villager") | ("villager_remove") | ("villager_textured_remove") | ("textured_1") | ("none") | ("textured_5") | ("textured_4") | ("textured_3") | ("textured_2")) | ($ETFConfigScreenSkinTool$NoseType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFConfigScreenSkinTool$NoseType_ = $ETFConfigScreenSkinTool$NoseType$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFRenderLayerWithTexture" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ETFRenderLayerWithTexture {

 "etf$getId"(): $Optional<($ResourceLocation)>

(): $Optional<($ResourceLocation)>
}

export namespace $ETFRenderLayerWithTexture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFRenderLayerWithTexture$Type = ($ETFRenderLayerWithTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFRenderLayerWithTexture_ = $ETFRenderLayerWithTexture$Type;
}}
declare module "packages/traben/entity_texture_features/mixin/accessor/$TooltipAccessor" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $TooltipAccessor {

 "setCachedTooltip"(arg0: $List$Type<($FormattedCharSequence$Type)>): void

(arg0: $List$Type<($FormattedCharSequence$Type)>): void
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccessor$Type = ($TooltipAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipAccessor_ = $TooltipAccessor$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture$TextureReturnState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETFTexture$TextureReturnState extends $Enum<($ETFTexture$TextureReturnState)> {
static readonly "NORMAL": $ETFTexture$TextureReturnState
static readonly "NORMAL_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK": $ETFTexture$TextureReturnState
static readonly "BLINK_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK2": $ETFTexture$TextureReturnState
static readonly "BLINK2_PATCHED": $ETFTexture$TextureReturnState
static readonly "APPLY_PATCH": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK2": $ETFTexture$TextureReturnState


public "toString"(): string
public static "values"(): ($ETFTexture$TextureReturnState)[]
public static "valueOf"(name: string): $ETFTexture$TextureReturnState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$TextureReturnState$Type = (("normal") | ("normal_patched") | ("blink_patched") | ("apply_blink") | ("blink2") | ("apply_patch") | ("blink") | ("apply_blink2") | ("blink2_patched")) | ($ETFTexture$TextureReturnState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFTexture$TextureReturnState_ = $ETFTexture$TextureReturnState$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ETFEntity {

 "etf$getType"(): $EntityType<(any)>
 "etf$getUuid"(): $UUID
 "etf$getOptifineId"(): integer
 "etf$getBlockY"(): integer
 "etf$hasCustomName"(): boolean
 "etf$getCustomName"(): $Component
 "etf$getScoreboardTeam"(): $Team
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$distanceTo"(arg0: $Entity$Type): float
 "etf$getVelocity"(): $Vec3
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$canBeBright"(): boolean
 "etf$isBlockEntity"(): boolean
 "etf$getEntityKey"(): string
 "etf$getWorld"(): $Level
 "etf$getBlockPos"(): $BlockPos
 "etf$getNbt"(): $CompoundTag
}

export namespace $ETFEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFEntity$Type = ($ETFEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFEntity_ = $ETFEntity$Type;
}}
declare module "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction" {
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"

export interface $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {

 "toInt"(arg0: $ETFEntity$Type): integer

(arg0: $ETFEntity$Type): integer
}

export namespace $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type = ($ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction_ = $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFSprite" {
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ETFSprite {
readonly "isETFAltered": boolean

constructor(originalSprite: $TextureAtlasSprite$Type, etfTexture: $ETFTexture$Type, isNotVariant: boolean)

public static "load"(id: $ResourceLocation$Type, resource: $Resource$Type): $SpriteContents
public "getSpriteVariant"(): $TextureAtlasSprite
public "getEmissive"(): $TextureAtlasSprite
public "isEmissive"(): boolean
get "spriteVariant"(): $TextureAtlasSprite
get "emissive"(): $TextureAtlasSprite
get "emissive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFSprite$Type = ($ETFSprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFSprite_ = $ETFSprite$Type;
}}
declare module "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$ETFSprite, $ETFSprite$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFSprite"
import {$ETFConfig$EmissiveRenderModes, $ETFConfig$EmissiveRenderModes$Type} from "packages/traben/entity_texture_features/config/$ETFConfig$EmissiveRenderModes"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ETFTexture$TextureReturnState, $ETFTexture$TextureReturnState$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture$TextureReturnState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Model, $Model$Type} from "packages/net/minecraft/client/model/$Model"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ETFTexture {
static readonly "PATCH_NAMESPACE_PREFIX": string
readonly "thisIdentifier": $ResourceLocation
 "currentTextureState": $ETFTexture$TextureReturnState
 "eSuffix": string

constructor(variantIdentifier: $ResourceLocation$Type)

public "toString"(): string
public "exists"(): boolean
public "getEmissiveIdentifierOfCurrentState"(): $ResourceLocation
public "getEnchantIdentifierOfCurrentState"(): $ResourceLocation
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, modelPart: $ModelPart$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, modelPart: $ModelPart$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type): void
public "renderEmissive"(matrixStack: $PoseStack$Type, vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): void
public static "ofUnmodifiable"(identifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type): $ETFTexture
public "getPaintingSprite"(originalSprite: $TextureAtlasSprite$Type, originalID: $ResourceLocation$Type): $ETFSprite
public "setGUIBlink"(): void
public "getTextureIdentifier"(entity: $ETFEntity$Type): $ResourceLocation
public "isEnchanted"(): boolean
public "assertPatchedTextures"(): void
public static "patchTextureToRemoveZFightingWithOtherTexture"(baseImage: $NativeImage$Type, otherImage: $NativeImage$Type): void
public "getEmissiveVertexConsumer"(vertexConsumerProvider: $MultiBufferSource$Type, model: $Model$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$Type): $VertexConsumer
public "isEmissive"(): boolean
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type, enchantIdentifier: $ResourceLocation$Type): $ETFTexture
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$Type, blinkIdentifier: $ResourceLocation$Type, blink2Identifier: $ResourceLocation$Type, emissiveIdentifier: $ResourceLocation$Type, blinkEmissiveIdentifier: $ResourceLocation$Type, blink2EmissiveIdentifier: $ResourceLocation$Type, enchantIdentifier: $ResourceLocation$Type, blinkenchantIdentifier: $ResourceLocation$Type, blink2enchantIdentifier: $ResourceLocation$Type, patchIdentifier: $ResourceLocation$Type, blinkpatchIdentifier: $ResourceLocation$Type, blink2patchIdentifier: $ResourceLocation$Type): $ETFTexture
public "canPatch"(): boolean
public "doesBlink"(): boolean
public "doesBlink2"(): boolean
get "emissiveIdentifierOfCurrentState"(): $ResourceLocation
get "enchantIdentifierOfCurrentState"(): $ResourceLocation
get "enchanted"(): boolean
get "emissive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFTexture$Type = ($ETFTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFTexture_ = $ETFTexture$Type;
}}
declare module "packages/traben/entity_texture_features/utils/$ETFVertexConsumer" {
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ETFVertexConsumer {

 "etf$initETFVertexConsumer"(arg0: $MultiBufferSource$Type, arg1: $RenderType$Type): void
 "etf$getProvider"(): $MultiBufferSource
 "etf$getRenderLayer"(): $RenderType
 "etf$getETFTexture"(): $ETFTexture
}

export namespace $ETFVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFVertexConsumer$Type = ($ETFVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFVertexConsumer_ = $ETFVertexConsumer$Type;
}}
declare module "packages/traben/entity_texture_features/features/player/$ETFPlayerSkinHolder" {
import {$ETFPlayerTexture, $ETFPlayerTexture$Type} from "packages/traben/entity_texture_features/features/player/$ETFPlayerTexture"

export interface $ETFPlayerSkinHolder {

 "etf$getETFPlayerTexture"(): $ETFPlayerTexture

(): $ETFPlayerTexture
}

export namespace $ETFPlayerSkinHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerSkinHolder$Type = ($ETFPlayerSkinHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFPlayerSkinHolder_ = $ETFPlayerSkinHolder$Type;
}}
declare module "packages/traben/entity_texture_features/features/player/$ETFPlayerTexture" {
import {$ETFConfigScreenSkinTool$NoseType, $ETFConfigScreenSkinTool$NoseType$Type} from "packages/traben/entity_texture_features/config/screens/skin/$ETFConfigScreenSkinTool$NoseType"
import {$ETFPlayerEntity, $ETFPlayerEntity$Type} from "packages/traben/entity_texture_features/features/player/$ETFPlayerEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ETFTexture, $ETFTexture$Type} from "packages/traben/entity_texture_features/features/texture_handlers/$ETFTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ETFPlayerTexture {
static readonly "SKIN_NAMESPACE": string
static "clientPlayerOriginalSkinImageForTool": $NativeImage
static "remappingETFSkin": boolean
 "baseEnchantIdentifier": $ResourceLocation
 "baseEnchantBlinkIdentifier": $ResourceLocation
 "baseEnchantBlink2Identifier": $ResourceLocation
 "texturedNoseIdentifier": $ResourceLocation
 "texturedNoseIdentifierEmissive": $ResourceLocation
 "texturedNoseIdentifierEnchanted": $ResourceLocation
 "hasVillagerNose": boolean
 "hasFeatures": boolean
 "coatStyle": integer
 "coatLength": integer
 "blinkType": integer
 "blinkHeight": integer
 "hasEmissives": boolean
 "hasEnchant": boolean
 "etfTextureOfFinalBaseSkin": $ETFTexture
 "noseType": $ETFConfigScreenSkinTool$NoseType
 "player": $ETFPlayerEntity
 "wasForcedSolid": boolean

constructor()
constructor(player: $ETFPlayerEntity$Type, rendererGivenSkin: $ResourceLocation$Type)

public "getBaseTextureIdentifierOrNullForVanilla"(player: $ETFPlayerEntity$Type): $ResourceLocation
public "getBaseTextureIdentifierOrNullForVanilla"(player: $Player$Type): $ResourceLocation
public "changeSkinToThisForTool"(image: $NativeImage$Type): void
public "getBaseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
public "getBaseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
public "canUseFeaturesForThisPlayer"(): boolean
public "isCorrectObjectForThisSkin"(check: $ResourceLocation$Type): boolean
public "checkTexture"(skipSkinLoad: boolean): void
public static "getSkinNumberToPixelColour"(color: integer): integer
public static "getSkinPixelColourToNumber"(color: integer): integer
get "baseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
get "baseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFPlayerTexture$Type = ($ETFPlayerTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFPlayerTexture_ = $ETFPlayerTexture$Type;
}}
declare module "packages/traben/entity_texture_features/config/$ETFConfig$EmissiveRenderModes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ETFConfig$EmissiveRenderModes extends $Enum<($ETFConfig$EmissiveRenderModes)> {
static readonly "DULL": $ETFConfig$EmissiveRenderModes
static readonly "BRIGHT": $ETFConfig$EmissiveRenderModes


public "toString"(): string
public static "values"(): ($ETFConfig$EmissiveRenderModes)[]
public static "valueOf"(name: string): $ETFConfig$EmissiveRenderModes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ETFConfig$EmissiveRenderModes$Type = (("bright") | ("dull")) | ($ETFConfig$EmissiveRenderModes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ETFConfig$EmissiveRenderModes_ = $ETFConfig$EmissiveRenderModes$Type;
}}

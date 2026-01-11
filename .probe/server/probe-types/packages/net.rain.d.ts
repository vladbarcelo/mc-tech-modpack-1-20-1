declare module "packages/net/rain/mejs/kubejs/$ItemEntityHurtEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $ItemEntityHurtEventJS extends $EventJS {

constructor(arg0: $ItemEntity$Type, arg1: $ServerLevel$Type)

public "getItemEntity"(): $ItemEntity
public "getLevel"(): $ServerLevel
get "itemEntity"(): $ItemEntity
get "level"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityHurtEventJS$Type = ($ItemEntityHurtEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityHurtEventJS_ = $ItemEntityHurtEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$EntityRandomTeleportEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRandomTeleportEventJS extends $EventJS {

constructor(arg0: $Entity$Type)

public "getEntity"(): $Entity
public "getX"(): double
public "getY"(): double
public "getBlockPosition"(): $BlockPos
public "getEntityType"(): string
public "getZ"(): double
get "entity"(): $Entity
get "x"(): double
get "y"(): double
get "blockPosition"(): $BlockPos
get "entityType"(): string
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRandomTeleportEventJS$Type = ($EntityRandomTeleportEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRandomTeleportEventJS_ = $EntityRandomTeleportEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$BlockEntityTickEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityTickEventJS extends $EventJS {

constructor(arg0: $BlockEntity$Type, arg1: $Level$Type, arg2: $BlockPos$Type)

public "getBlockEntity"(): $BlockEntity
public "getLevel"(): $Level
public "getPos"(): $BlockPos
get "blockEntity"(): $BlockEntity
get "level"(): $Level
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTickEventJS$Type = ($BlockEntityTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTickEventJS_ = $BlockEntityTickEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ItemEntityTickEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $ItemEntityTickEventJS extends $EventJS {

constructor(arg0: $ItemEntity$Type, arg1: $ServerLevel$Type, arg2: integer)

public "getItemEntity"(): $ItemEntity
public "getLevel"(): $ServerLevel
public "getAge"(): integer
get "itemEntity"(): $ItemEntity
get "level"(): $ServerLevel
get "age"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityTickEventJS$Type = ($ItemEntityTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityTickEventJS_ = $ItemEntityTickEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ItemEntityDeathEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export class $ItemEntityDeathEventJS extends $EventJS {

constructor(arg0: $ItemEntity$Type, arg1: $ServerLevel$Type, arg2: $DamageSource$Type, arg3: float)

public "getSource"(): $DamageSource
public "getItemEntity"(): $ItemEntity
public "getLevel"(): $ServerLevel
public "getAmount"(): float
get "source"(): $DamageSource
get "itemEntity"(): $ItemEntity
get "level"(): $ServerLevel
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityDeathEventJS$Type = ($ItemEntityDeathEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityDeathEventJS_ = $ItemEntityDeathEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$DeathMessageEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $DeathMessageEventJS extends $EventJS {

constructor(arg0: $Player$Type, arg1: $Component$Type)

public "getOriginalMessage"(): $Component
public "hasCustomMessage"(): boolean
public "getFinalMessage"(): $Component
public "getPlayerName"(): string
public "getCustomMessage"(): $Component
public "setCustomMessage"(arg0: string): void
public "getOriginalMessageText"(): string
public "getPlayer"(): $Player
get "originalMessage"(): $Component
get "finalMessage"(): $Component
get "playerName"(): string
get "customMessage"(): $Component
set "customMessage"(value: string)
get "originalMessageText"(): string
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeathMessageEventJS$Type = ($DeathMessageEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeathMessageEventJS_ = $DeathMessageEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ProjectileShootEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ProjectileShootEventJS extends $EventJS {

constructor(arg0: $Projectile$Type, arg1: $LivingEntity$Type, arg2: $ServerLevel$Type)

public "getProjectile"(): $Projectile
public "getLevel"(): $ServerLevel
public "getShooter"(): $LivingEntity
get "projectile"(): $Projectile
get "level"(): $ServerLevel
get "shooter"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileShootEventJS$Type = ($ProjectileShootEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileShootEventJS_ = $ProjectileShootEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$EntityTickEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTickEventJS extends $EventJS {

constructor(arg0: $Entity$Type, arg1: $Level$Type)

public "getEntity"(): $Entity
public "getLevel"(): $Level
get "entity"(): $Entity
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTickEventJS$Type = ($EntityTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTickEventJS_ = $EntityTickEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ProjectileTickEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ProjectileTickEventJS extends $EventJS {

constructor(arg0: $Projectile$Type, arg1: $Level$Type)

public "getProjectile"(): $Projectile
public "getLevel"(): $Level
get "projectile"(): $Projectile
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileTickEventJS$Type = ($ProjectileTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileTickEventJS_ = $ProjectileTickEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$NewDayEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export class $NewDayEventJS extends $EventJS {

constructor(arg0: $ServerLevel$Type)

public "getServerLevel"(): $ServerLevel
get "serverLevel"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewDayEventJS$Type = ($NewDayEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NewDayEventJS_ = $NewDayEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$BlockCollisionEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockCollisionEventJS extends $EventJS {

constructor(arg0: $Entity$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getEntity"(): $Entity
public "getX"(): double
public "getY"(): double
public "getBoundingBox"(): $AABB
public "getBlockPosition"(): $BlockPos
public "getEntityType"(): string
public "getBlockState"(): $BlockState
public "getZ"(): double
get "entity"(): $Entity
get "x"(): double
get "y"(): double
get "boundingBox"(): $AABB
get "blockPosition"(): $BlockPos
get "entityType"(): string
get "blockState"(): $BlockState
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCollisionEventJS$Type = ($BlockCollisionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCollisionEventJS_ = $BlockCollisionEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$StandOnFluidEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $StandOnFluidEventJS extends $EventJS {

constructor(arg0: $LivingEntity$Type, arg1: $FluidState$Type)

public "getEntity"(): $LivingEntity
public "getFluidState"(): $FluidState
get "entity"(): $LivingEntity
get "fluidState"(): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandOnFluidEventJS$Type = ($StandOnFluidEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandOnFluidEventJS_ = $StandOnFluidEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ChunkTickEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"

export class $ChunkTickEventJS extends $EventJS {

constructor(arg0: $ServerLevel$Type, arg1: $LevelChunk$Type)

public "getServerLevel"(): $ServerLevel
public "getChunk"(): $LevelChunk
get "serverLevel"(): $ServerLevel
get "chunk"(): $LevelChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTickEventJS$Type = ($ChunkTickEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTickEventJS_ = $ChunkTickEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$PlayerStopRidingEventJS" {
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerStopRidingEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: $Entity$Type)

public "getEntity"(): $Entity
public "getVehicleType"(): string
public "getVehicle"(): $Entity
get "entity"(): $Entity
get "vehicleType"(): string
get "vehicle"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStopRidingEventJS$Type = ($PlayerStopRidingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerStopRidingEventJS_ = $PlayerStopRidingEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$EntityCollisionEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityCollisionEventJS extends $EventJS {

constructor(arg0: $Entity$Type, arg1: $Entity$Type)

public "getEntity"(): $Entity
public "getX"(): double
public "getY"(): double
public "getCollidedEntity"(): $Entity
public "getBoundingBox"(): $AABB
public "getBlockPosition"(): $BlockPos
public "getEntityType"(): string
public "getZ"(): double
get "entity"(): $Entity
get "x"(): double
get "y"(): double
get "collidedEntity"(): $Entity
get "boundingBox"(): $AABB
get "blockPosition"(): $BlockPos
get "entityType"(): string
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCollisionEventJS$Type = ($EntityCollisionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityCollisionEventJS_ = $EntityCollisionEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$EntityMoveEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityMoveEventJS extends $EventJS {

constructor(arg0: $Entity$Type)

public "getEntity"(): $Entity
public "getX"(): double
public "getY"(): double
public "getBlockPosition"(): $BlockPos
public "getEntityType"(): string
public "getZ"(): double
get "entity"(): $Entity
get "x"(): double
get "y"(): double
get "blockPosition"(): $BlockPos
get "entityType"(): string
get "z"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMoveEventJS$Type = ($EntityMoveEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMoveEventJS_ = $EntityMoveEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$ItemDurabilityDamageEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ItemDurabilityDamageEventJS extends $EventJS {

constructor(arg0: $ItemStack$Type, arg1: integer, arg2: $LivingEntity$Type)

public "getEntity"(): $LivingEntity
public "getItemStack"(): $ItemStack
public "getDamage"(): integer
get "entity"(): $LivingEntity
get "itemStack"(): $ItemStack
get "damage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDurabilityDamageEventJS$Type = ($ItemDurabilityDamageEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDurabilityDamageEventJS_ = $ItemDurabilityDamageEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$BlockEntityDeathEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityDeathEventJS extends $EventJS {

constructor(arg0: $BlockEntity$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type)

public "getBlockEntity"(): $BlockEntity
public "getLevel"(): $ServerLevel
public "getPos"(): $BlockPos
get "blockEntity"(): $BlockEntity
get "level"(): $ServerLevel
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDeathEventJS$Type = ($BlockEntityDeathEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDeathEventJS_ = $BlockEntityDeathEventJS$Type;
}}
declare module "packages/net/rain/mejs/kubejs/$PlayerRideEntityEventJS" {
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerRideEntityEventJS extends $EntityEventJS {

constructor(arg0: $Entity$Type, arg1: $Entity$Type)

public "getEntity"(): $Entity
public "getVehicleType"(): string
public "getVehicle"(): $Entity
get "entity"(): $Entity
get "vehicleType"(): string
get "vehicle"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRideEntityEventJS$Type = ($PlayerRideEntityEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerRideEntityEventJS_ = $PlayerRideEntityEventJS$Type;
}}

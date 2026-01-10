declare module "packages/dev/bluephs/dgjs/recipes/$AllRecipesSchema$CdgRecipeJS" {
import {$InputFluid, $InputFluid$Type} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ModifyRecipeResultCallback, $ModifyRecipeResultCallback$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback"
import {$RecipeJS, $RecipeJS$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import {$RecipeTypeFunction, $RecipeTypeFunction$Type} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"

export class $AllRecipesSchema$CdgRecipeJS extends $RecipeJS {
static "itemErrors": boolean
 "id": $ResourceLocation
 "type": $RecipeTypeFunction
 "newRecipe": boolean
 "removed": boolean
 "modifyResult": $ModifyRecipeResultCallback
 "originalJson": $JsonObject
 "json": $JsonObject
 "changed": boolean

constructor()

public "writeInputFluid"(arg0: $InputFluid$Type): $JsonElement
public "readInputFluid"(arg0: any): $InputFluid
public "inputFluidHasPriority"(arg0: any): boolean
public "readOutputItem"(arg0: any): $OutputItem
public "inputItemHasPriority"(arg0: any): boolean
public "superheated"(): $RecipeJS
public "heated"(): $RecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllRecipesSchema$CdgRecipeJS$Type = ($AllRecipesSchema$CdgRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllRecipesSchema$CdgRecipeJS_ = $AllRecipesSchema$CdgRecipeJS$Type;
}}

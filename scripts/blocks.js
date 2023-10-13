{
	//region - turrets
	const conductor = extend(PowerTurret, "conductor", {});
	const beamTesla = extend(PowerTurret, "beam-tesla", {});
	const nailgun = extend(ItemTurret, "nailgun", {});
	//region - crafting
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const ironCaster = extend(GenericCrafter, "iron-caster", {});
}
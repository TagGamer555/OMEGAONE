{
	//region - turrets
	const conductor = extend(PowerTurret, "conductor", {});
	const beamTesla = extend(PowerTurret, "beam-tesla", {});
	const nailgun = extend(ItemTurret, "nailgun", {});
	const score = extend(PowerTurret, "score", {});
	const slugger = extend(ItemTurret, "slugger", {});
	//region - crafting
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const ironCaster = extend(HeatCrafter, "iron-caster", {});
	//region - heat
	const combustionHeater = extend(HeatProducer, "combustion-heater", {});
	const heatPipe = extend(HeatConductor, "heat-pipe", {});
	const heatPipeRouter = extend(HeatConductor, "heat-pipe-router", {});
	//region - defense
	const advancedSurgeWall = extend(PowerTurret, "advanced-surge-wall", {});
	const advancedSurgeWallLarge = extend(PowerTurret, "advanced-surge-wall-large", {});
	const siliconCarbideWall = extend(Wall, "silicon-carbide-wall", {});
	const siliconCarbideWallLarge = extend(Wall, "silicon-carbide-wall-large", {});
}
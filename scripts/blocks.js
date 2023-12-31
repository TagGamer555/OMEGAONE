{
	//region - turrets
	const gleamer = extend(ItemTurret, "gleamer", {});
	const conductor = extend(PowerTurret, "conductor", {});
	const beamTesla = extend(PowerTurret, "beam-tesla", {});
	const nailgun = extend(ItemTurret, "nailgun", {});
	const score = extend(PowerTurret, "score", {});
			//const slugger = extend(ItemTurret, "slugger", {});
	const twinkle = extend(ItemTurret, "twinkle", {});
	//region - crafting
	const steelSmelter = extend(HeatCrafter, "steel-smelter", {});
	const ironCaster = extend(HeatCrafter, "iron-caster", {});
	//region - heat
	const combustionHeater = extend(HeatProducer, "combustion-heater", {});
	const heatPipe = extend(HeatConductor, "heat-pipe", {});
	const heatPipeRouter = extend(HeatConductor, "heat-pipe-router", {});
	//region - defense
	const siliconCarbideWall = extend(Wall, "silicon-carbide-wall", {});
	const siliconCarbideWallLarge = extend(Wall, "silicon-carbide-wall-large", {});
	const advancedSurgeWall = extend(PowerTurret, "advanced-surge-wall", {});
	const advancedSurgeWallLarge = extend(PowerTurret, "advanced-surge-wall-large", {});
	const copperCitadel = extend(PowerTurret, "copper-citadel", {});
	const titaniumCitadel = extend(PowerTurret, "titanium-citadel", {});
	const plastaniumCitadel = extend(PowerTurret, "plastanium-citadel", {});
	const thoriumCitadel = extend(PowerTurret, "thorium-citadel", {});
	const phaseCitadel = extend(TractorBeamTurret, "phase-citadel", {});
	const surgeCitadel = extend(PowerTurret, "surge-citadel", {});
	const scrapCitadel = extend(PowerTurret, "scrap-citadel", {});
	const siliconCarbideCitadel = extend(PowerTurret, "silicon-carbide-citadel", {});
	const advancedSurgeCitadel = extend(PowerTurret, "advanced-surge-citadel", {});
	//region - extraction
	const advancedWaterExtractor = extend(SolidPump, "advanced-water-extractor", {});
	const digger = extend(GenericCrafter, "digger", {});
	//region - effect
	const observatory = extend(DroneCenter, "observatory", {});
	//region - units
	
	//region - power
	const armoredNode = extend(PowerNode, "armored-node", {});
}
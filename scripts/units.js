{
	//region - special
	const observer = extend(UnitType, "observer", {});
	observer.constructor = () => extend(BuildingTetherPayloadUnit, {});
	
	const augment = extend(UnitType, "augment", {});
	augment.constructor = () => extend(BuildingTetherPayloadUnit, {});
}
{
	//region - special
	const observer = extend(UnitType, "observer", {});
	observer.constructor = () => extend(BuildingTetherPayloadUnit, {});
}
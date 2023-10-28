{
	//region - special
	const observer = extend(UnitType, "observer", {
		defaultCommand = UnitCommand.repairCommand
	});
	observer.constructor = () => extend(BuildingTetherPayloadUnit, {});
}
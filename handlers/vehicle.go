package handlers

import (
	"github.com/DAVFoundation/captain/protocols/vehicle"
	"github.com/DAVFoundation/captain/db"
	"github.com/DAVFoundation/captain/db/models"
	"time"
	"github.com/DAVFoundation/captain/db/queues"
)

type VehicleCreationHandler struct {

}

func NewVehicleCreationHandler() *VehicleCreationHandler {
	return &VehicleCreationHandler{}
}

func (v VehicleCreationHandler) CreateVehicle(vehicleDetails *vehicle.VehicleDetails) (err error) {

	err = db.StoreVehicleDetails(*vehicleDetails)

	if err != nil {
		return err
	}

	msg := models.StatusSimulatorMessage{
		Timestamp:       time.Now().Unix(),
		VehicleID:       vehicleDetails.VehicleId,
		MissionStatus:   &string("available_for_missions"),
		RegisterVehicle: true,
	}

	queues.AddSimulatorMessage(msg)

	return nil

}

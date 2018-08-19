using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/VehicleMaster")]
    public class VehicleMasterController : ApiController
    {
        private IVehicleMasterrepository _vehicleMasterRepository;

        public VehicleMasterController()
        {
            _vehicleMasterRepository = new VehicleMasterRepository();
        }
        [HttpGet]
        [Route("GetAllVehicleMaster")]
        public List<VehicleMasterDs> GetAllVehicleMasterDsRepository()
        {
            return _vehicleMasterRepository.GetAllVehicleMasterDsRepository();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateVehicleMasterDs(VehicleMasterDs vehicleMasterDs)
        {
            var isupdate = _vehicleMasterRepository.UpdateVehicleMasterDs(vehicleMasterDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveVehicleMasterDs(int? id)
        {
            var isdel = _vehicleMasterRepository.RemoveVehicleMasterDs(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleVehicleMasterDs(int id)
        {
            return Ok(_vehicleMasterRepository.GetSingleVehicleMasterDs(id));
        }
    }
}






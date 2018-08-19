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
  [RoutePrefix("api/driverMaster")]
  public class DriverMasterController : ApiController
    {
    private IDriverMasterRepository driverMasterRepository;
    public DriverMasterController()
    {
      driverMasterRepository = new DriverMasterRepository();
    }

    [HttpGet]
    [Route("GetAllDriverMaster")]
    public List<DriverMasterDs> GetAllDriverData()
    {
      return driverMasterRepository.getAllDriverMaster();
    }

    [HttpGet]
    [Route("GetDriverMasterById/{id}")]
    public DriverMasterDs GetDriverById(int? id)
    {
      return driverMasterRepository.getDriverMasrterById(id);
    }


    [HttpPost]
    [Route("Update")]
    public IHttpActionResult Update(DriverMasterDs driverMasterDs)
    {
      var isupdate = driverMasterRepository.updateDriverMaster(driverMasterDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();

    }


    [HttpDelete]
    [Route("Delete/{Id}")]
    public IHttpActionResult RemoveDriverMaster(int? id)
    {
      var isdel = driverMasterRepository.removeDriverMaster(id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
  }
}

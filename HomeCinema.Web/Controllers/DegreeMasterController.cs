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
  [RoutePrefix("api/DegreeMaster")]
  public class DegreeMasterController : ApiController
    {
    private DegreeMasterRepository _degreeMasterRepository;

    public DegreeMasterController()
    {
      _degreeMasterRepository = new DegreeMasterRepository();
    }

    [HttpGet]
    [Route("GetAllDegreeMaster")]
    public List<DegreeMasterDs> GetAllDegreeMasterRepository()
    {
      return _degreeMasterRepository.GetAllDegreeMasterRepository();
    }
    [HttpPost]
    [Route("Update")]
    public IHttpActionResult UpdateDegreeMaster(DegreeMasterDs degreeMasterDs)
    {
      var isupdate = _degreeMasterRepository.UpdateDegreeMaster(degreeMasterDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();

    }
    [HttpDelete]
    [Route("Delete/{DegreeId}")]
    public IHttpActionResult RemoveDegreeMaster(int? DegreeId)
    {
      var isdel = _degreeMasterRepository.RemoveDegreeMaster(DegreeId);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }

    [HttpGet]
    [Route("getById/{DegreeId}")]
    public IHttpActionResult GetSingleDegreeMaster(int DegreeId)
    {
      return Ok(_degreeMasterRepository.GetSingleDegreeMaster(DegreeId));
    }

  }
}

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
  [RoutePrefix("api/semesterMaster")]
  public class YSemesterMasterController : ApiController
    {
    private IYSemesterRepository semesterRepository;
    public YSemesterMasterController()
    {
      semesterRepository = new YSemesterRepository();
    }

    [HttpGet]
    [Route("GetAllsemesterMaster")]
    public List<SemesterMasterDs> GetAllSemesterData()
    {
      return semesterRepository.GetAllSemester();
    }

    [HttpGet]
    [Route("GetSemesterById/{Id}")]
    public SemesterMasterDs GetSemesterById(int Id)
    {
      return semesterRepository.GetSemesterById(Id);
    }


    [HttpPost]
    [Route("Update")]
    public IHttpActionResult Update(SemesterMasterDs semesterMasterDs)
    {
      var isupdate = semesterRepository.UpdateSemester(semesterMasterDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();

    }


    [HttpDelete]
    [Route("Delete/{Id}")]
    public IHttpActionResult RemoveSemester(int? id)
    {
      var isdel = semesterRepository.RemoveSemester(id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
  }
}

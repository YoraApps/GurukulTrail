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
  [RoutePrefix("api/examinationType")]
  public class ExaminationTypeController : ApiController
    {
    private IExaminationTypeRepository examinationTypeRepository;
    public ExaminationTypeController()
    {
      examinationTypeRepository = new ExaminationTypeRepository();
    }

    [HttpGet]
    [Route("GetAllEmaminationType")]
    public List<ExaminationTypeDs> GetAllExaminationType()
    {
      return examinationTypeRepository.getAllExaminationType();
    }

    [HttpGet]
    [Route("GetExaminationTypeById/{Id}")]
    public ExaminationTypeDs GetSemesterById(int Id)
    {
      return examinationTypeRepository.getExaminationTypeById(Id);
    }


    [HttpPost]
    [Route("Update")]
    public IHttpActionResult Update(ExaminationTypeDs examinationTypeDs)
    {
      var isupdate = examinationTypeRepository.updateExaminationType(examinationTypeDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();

    }


    [HttpDelete]
    [Route("Delete/{Id}")]
    public IHttpActionResult RemoveSemester(int? id)
    {
      var isdel = examinationTypeRepository.removeExaminationtype(id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
  }
}

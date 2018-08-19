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
  [RoutePrefix("api/facultydept")]
  public class FacultyDeptController : ApiController
  {
    private IFacultyDeptRepository facultyDeptRepository;
    public FacultyDeptController()
    {
      facultyDeptRepository = new FacultyDeptRepository();
    }
    [HttpGet]
    [Route("GetAllFacultyDept")]
    public List<FacultyDeptDs> GetAllFacultyDept()
    {
      return facultyDeptRepository.getAllFacultyDept();
    }

    [HttpGet]
    [Route("GetFacultyDeptById/{Id}")]
    public FacultyDeptDs GetFacultyDeptById(int Id)
    {
      return facultyDeptRepository.getFacultyDeptById(Id);
    }


    [HttpPost]
    [Route("Update")]
    public IHttpActionResult Update(FacultyDeptDs facultyDeptDs)
    {
      var isupdate = facultyDeptRepository.updateFacultyDept(facultyDeptDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();

    }


    [HttpDelete]
    [Route("Delete/{Id}")]
    public IHttpActionResult RemoveFacultyDept(int? id)
    {
      var isdel = facultyDeptRepository.removeFacultyDept(id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
  }
}

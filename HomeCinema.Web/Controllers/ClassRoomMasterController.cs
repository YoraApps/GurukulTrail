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
  [RoutePrefix("api/classRoomMaster")]
  public class ClassRoomMasterController : ApiController
  {
    private IClassRoomMasterRepository classRoomMasterRepository;
    public ClassRoomMasterController()
    {
      classRoomMasterRepository = new ClassRoomMasterepository();
    }
    [HttpGet]
    [Route("getclassmaster")]
    public List<ClassRoomMasterDs> getAllClassMaster()
    {
      return classRoomMasterRepository.getAllClassRoomMater();
    }
    [HttpPost]
    [Route("update")]
    public IHttpActionResult update(ClassRoomMasterDs classRoomMasterDs)
    {
      var isupdate = classRoomMasterRepository.updateClassMater(classRoomMasterDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();
    }
    [HttpDelete]
    [Route("delete/{Id}")]
    public IHttpActionResult remove(int? id)
    {
      var isdel = classRoomMasterRepository.removeClassMaster(id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
    [HttpGet]
    [Route("getClassRoomMasterById/{Id}")]
    public ClassRoomMasterDs getClassMasterById(int? Id)
    {
      return classRoomMasterRepository.getClassRoomMasterById(Id);
    }
  }
}

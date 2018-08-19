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
  [RoutePrefix("api/ChapterMaster")]

  public class ChapterMasterController : ApiController
    {
    private IChapterMAsterRepository chapterMasterRepository;
     public ChapterMasterController()
    {
      chapterMasterRepository = new ChapterMAsterRepository();
    }

    [HttpGet]
    [Route("getAllChapterMaster")]
    
    public List<ChapterMasterDs> getAllChapterMasters()
    {
      return chapterMasterRepository.GetAllChapterMaster();
    }

    [HttpGet]
    [Route("getChapterMasterById/{Id}")]
    public ChapterMasterDs getChapterMasterById(int? Id)
    {
      return chapterMasterRepository.GetChapterMasterById(Id);
    }
    [HttpPost]
    [Route("update")]
    public IHttpActionResult deleteChapterMaster(ChapterMasterDs chapterMasterDs)
    {
      var isupdate = chapterMasterRepository.UpdateChapterMaster(chapterMasterDs);
      if (isupdate == true)

        return Ok(isupdate);
      return BadRequest();
    }

    [HttpDelete]
    [Route("Delete/{Id}")]
    public IHttpActionResult deleteChapterMaster(int? Id)
    {
      var isdel = chapterMasterRepository.RemoveChapterMaster(Id);
      if (isdel == true)
        return Ok(isdel);
      return BadRequest();
    }
  }
}

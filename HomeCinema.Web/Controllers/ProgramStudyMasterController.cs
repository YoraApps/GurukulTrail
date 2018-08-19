using HomeCinema.Entities.DataSource;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/ProgramStudyMaster")]
    public class ProgramStudyMasterController : ApiController
    {
        private ProgramStudyMasterRepository programStudyMasterRepository;

        public ProgramStudyMasterController()
        {
            programStudyMasterRepository = new ProgramStudyMasterRepository();
        }
        [HttpGet]
        [Route("GetallProgramStudyMaster")]
        public List<ProgramStusdyMaster> GetAllProgramStudyMasterRepository()
        {
            return programStudyMasterRepository.GetAllProgramStudyMasterRepository();
        }
        [HttpGet]
        [Route("GetSingleProgramStudyMaster/{Id}")]
        public ProgramStusdyMaster GetSingleProgramStudyMaster(int Id)
        {
            return programStudyMasterRepository.getProgramStudyMasterId(Id);
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateProgramStudyMaster(ProgramStusdyMaster programStudyMaster)
        {
            var isupdate = programStudyMasterRepository.UpdateProgramStudyMaster(programStudyMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveProgramStudyMaster(int? id)
        {
            var isdel = programStudyMasterRepository.RemoveProgramStudyMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}


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
    [RoutePrefix("api/ClubMaster")]
    public class ClubMasterController : ApiController
    {
        private ClubMasterRepository clubMasterRepository;

        public ClubMasterController()
        {
            clubMasterRepository = new ClubMasterRepository();
        }
        [HttpGet]
        [Route("GetallClubMaster")]
        public List<ClubMaster> GetAllClubMasterRepository()
        {
            return clubMasterRepository.GetAllClubMasterRepository();
        }
        [HttpGet]
        [Route("GetSingleClubMaster/{Id}")]
        public ClubMaster GetSingleClubMaster(int Id)
        {
            return clubMasterRepository.getClubMasterId(Id);
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateClubMaster(ClubMaster clubMaster)
        {
            var isupdate = clubMasterRepository.UpdateClubMaster(clubMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveClubMaster(int? id)
        {
            var isdel = clubMasterRepository.RemoveClubMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}

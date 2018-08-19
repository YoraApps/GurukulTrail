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
    [RoutePrefix("api/CampaignMaster")]
    public class CampaignMasterController : ApiController
    {
        private ICampaignMasterRepository _campaignMasterRepository;

        public CampaignMasterController()
        {
            _campaignMasterRepository = new CampaignMasterRepository();
        }
        [HttpGet]
        [Route("GetAllCampaignMaster")]
        public List<CampaignMasterDs> GetAllCampaignMasterDsRepository()
        {
            return _campaignMasterRepository.GetAllCampaignMasterDsRepository();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateCampaignMasterDs(CampaignMasterDs campaignMasterDs)
        {
            var isupdate = _campaignMasterRepository.UpdateCampaignMasterDs(campaignMasterDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveCampaignMasterDs(int? id)
        {
            var isdel = _campaignMasterRepository.RemoveCampaignMasterDs(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleCampaignMasterDs(int id)
        {
            return Ok(_campaignMasterRepository.GetSingleCampaignMasterDs(id));
        }
    }
}

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
    [RoutePrefix("api/CampaignItem")]
    public class CampaignItemController : ApiController
    {
        private CampaignItemRepository _campaignItemRepository;

        public CampaignItemController()
        {
            _campaignItemRepository = new CampaignItemRepository();
        }

        [HttpGet]
        [Route("GetAllCampaignItem")]
        public List<CampaignItemDs> GetAllCampaignItem()
        {
            return _campaignItemRepository.GetAllCampaignItem();
        }

        [HttpGet]
        [Route("GetByCampaignItemId/{CampaignItemId}")]
        public CampaignItemDs GetByCampaignItemId(int CampaignItemId)
        {
            return _campaignItemRepository.GetByCampaignItemId(CampaignItemId);
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateCampaignItem(CampaignItemDs campaignItemDs)
        {
            var isupdate = _campaignItemRepository.UpdateCampaignItem(campaignItemDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
    }
}

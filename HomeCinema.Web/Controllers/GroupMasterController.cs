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
    [RoutePrefix("api/GroupMaster")]
    public class GroupMasterController : ApiController
    {
        private GroupMasterService _groupMasterService;

        public GroupMasterController()
        {
            _groupMasterService = new GroupMasterService();
        }

        [HttpGet]
        [Route("GetAllGroupDetails")]
        public List<GroupMasterDs> GetAllGroupDetails()
        {
            return _groupMasterService.GetAllGroupDetails();
        }

        [HttpGet]
        [Route("GetAllGroupDetails/{GroupMasterId}")]
        public GroupMasterDs GetGroupDetailId(int GroupMasterId)
        {
            return _groupMasterService.GetGroupDetailId(GroupMasterId);
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult CreateGroupDetails(GroupMasterDs groupMasterDs)
        {
            var isupdate = _groupMasterService.CreateGroupDetails(groupMasterDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{GroupMasterId}")]
        public IHttpActionResult RemoveGroupDetails(int? GroupMasterId)
        {
            var isdel = _groupMasterService.RemoveGroupDetails(GroupMasterId);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}

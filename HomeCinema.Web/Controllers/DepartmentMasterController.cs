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
    [RoutePrefix("api/DepartmentMaster")]
    public class DepartmentMasterController : ApiController
    {
        private DepartmentMasterRepository departmentMasterRepository;

        public DepartmentMasterController()
        {
            departmentMasterRepository = new DepartmentMasterRepository();
        }
        [HttpGet]
        [Route("GetallDepartmentMaster")]
        public List<DepartmentMaster> GetAllDepartmentMasterRepository()
        {
            return departmentMasterRepository.GetAllDepartmentMasterRepository();
        }
        [HttpGet]
        [Route("GetSingleDepartmentMaster/{Id}")]
        public DepartmentMaster GetSingleProgramStudyMaster(int Id)
        {
            return departmentMasterRepository.getDepartmentMasterId(Id);
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateDepartmentMaster(DepartmentMaster departmentMaster)
        {
            var isupdate = departmentMasterRepository.UpdateDepartmentMaster(departmentMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveDepartmentMaster(int? id)
        {
            var isdel = departmentMasterRepository.RemoveDepartmentMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}

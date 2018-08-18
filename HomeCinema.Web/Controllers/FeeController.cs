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
    [RoutePrefix("api/Fee")]
    public class FeeController : ApiController
    {
        private FeeRepository _feeRepository;
        
        public FeeController()
        {
            _feeRepository = new FeeRepository();
        }

        [HttpGet]
        [Route("GetAllFee")]
        public List<FeeDs> GetAllFee()
        {
            return _feeRepository.GetAllFee();
        }

        [HttpGet]
        [Route("GetAllFeeId/{FeeId}")]
        public FeeDs GetFeeId(int FeeId)
        {
            return _feeRepository.GetFeeId(FeeId);
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult CreateFee(FeeDs feeDs)
        {
            var isupdate = _feeRepository.CreateFee(feeDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{FeeId}")]
        public IHttpActionResult RemoveFee(int? FeeId)
        {
            var isdel = _feeRepository.RemoveFee(FeeId);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}

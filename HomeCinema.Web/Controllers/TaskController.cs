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
    [RoutePrefix("api/Task")]
    public class TaskController : ApiController
    {
        private ITaskRepository _taskRepository;

        public TaskController()
        {
            _taskRepository = new TaskRepository();
        }
        [HttpGet]
        [Route("GetAllBatchTask")]
        public List<TaskDs> GetAllTaskRepository ()
        {
            return _taskRepository.GetAllTaskRepository();
        }
        [HttpPost]
        [Route("Update")] 
        public IHttpActionResult UpdateTask(TaskDs taskDs)
        {
            var isupdate = _taskRepository.UpdateTask(taskDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveTask(int? id)
        {
            var isdel = _taskRepository.RemoveTask(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleTask(int id)
        {
            return Ok(_taskRepository.GetSingleTask(id));
        }
    }
}

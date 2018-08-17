using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface ITaskRepository
    {
        List<TaskDs> GetAllTaskRepository();
        TaskDs GetSingleTask(int? id);
        bool UpdateTask(TaskDs taskDs);
        bool RemoveTask (int? id);
    }
}

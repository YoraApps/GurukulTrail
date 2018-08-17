using Dapper;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{
    public class TaskRepository: ITaskRepository
    {
        private IDbConnection _db;
        public TaskRepository ()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<TaskDs> GetAllTaskRepository()
        {
            return this._db.Query<TaskDs>("YSP_GetAllTask", commandType: CommandType.StoredProcedure).ToList();
        }

        public TaskDs GetSingleTask(int? id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@TaskId", id);

            return _db.Query<TaskDs>("YSP_SingleTask", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveTask(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@TaskId", id);
            _db.Open();
            var val = _db.Execute("YSP_RemoveTask", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool UpdateTask(TaskDs taskDs)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@TaskId", taskDs.TaskId);
            param.Add("@TaskName", taskDs.TaskName);
            param.Add("@TaskDescription", taskDs.TaskDescription);
            param.Add("@TaskDuration", taskDs.TaskDuration);
            param.Add("@UniversityId", taskDs.UniversityId);
            param.Add("@Active", 1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", 1);

            _db.Open();
            var val = _db.Execute("YSP_UpdateTask", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}

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
    public class DepartmentMasterRepository : IDepartmentMasterRepository
    {
        private IDbConnection db;
        public DepartmentMasterRepository()
        {
            db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }
        public List<DepartmentMaster> GetAllDepartmentMasterRepository()
        {
            return this.db.Query<DepartmentMaster>("Ysp_GetAllDepartmentMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public DepartmentMaster getDepartmentMasterId(int DepartmentId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@DepartmentId", DepartmentId);
            return this.db.Query<DepartmentMaster>("Ysp_GetDepartmentSingleId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
        }

        public bool RemoveDepartmentMaster(int? id)
        {

            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@DepartmentId", id);
            db.Open();
            var val = db.Execute("Ysp_RemoveDepartmentMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }

        public bool UpdateDepartmentMaster(DepartmentMaster departmentMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@DepartmentId", departmentMaster.DepartmentId);
            param.Add("@DepartmentName", departmentMaster.DepartmentName);
            param.Add("@UniversityId", departmentMaster.UniversityId);
            param.Add("@active", 1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", departmentMaster.lastupdatedby);


            db.Open();
            var val = db.Execute("Ysp_CreateDepartmentMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }
    }
}
